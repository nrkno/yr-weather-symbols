const fastXmlParser = require('fast-xml-parser');
const fs = require('fs').promises;
const path = require('path');
const puppeteer = require('puppeteer');
const { optimizeSvg } = require('./optimizeSvg');
const { createAndNavigateToHtmlPageWithIcon } = require('./createPuppeteerPage');
const { createFolder, writeFile } = require('./fileSystem');

const DIST_FOLDER = 'dist';
const TEMP_FOLDER = 'temp';
const PUPPETEER_OPTIONS = process.env.IS_DOCKER
  ? {
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,

      // We need run Puppeteer without a sandbox because because we are running as root.
      // See `Dockerfile` for more details.
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    }
  : undefined;

async function convertSvgFiles({
  src,
  output,
  pngSizes = [],
  pngScales = [],
  expectedSvgSize,
  spritesheetFileName,
  modifySvgCallback,
}) {
  const svgFiles = await readSvgFiles(src);

  console.log(`Creating png, pdf, and optimized svg for ${svgFiles.length} svg files.`);

  const outputFolder = output ? path.join(DIST_FOLDER, output) : DIST_FOLDER;
  const tempFolder = output ? path.join(TEMP_FOLDER, output) : TEMP_FOLDER;

  await createFolder(path.join(outputFolder, 'png'));
  await createFolder(path.join(outputFolder, 'pdf'));
  await createFolder(path.join(outputFolder, 'svg'));

  await createFolder(tempFolder);

  const iconSymbols = [];
  const browser = await puppeteer.launch(PUPPETEER_OPTIONS);
  const page = await browser.newPage();

  // Enable transparent background for PDF
  // https://github.com/GoogleChrome/puppeteer/issues/2545
  await page.emulateMediaType('screen');
  // @ts-ignore Hopefully we no longer need this hack when we upgrade Puppeteer
  await page._emulationManager._client.send('Emulation.setDefaultBackgroundColorOverride', {
    color: { r: 0, g: 0, b: 0, a: 0 },
  });

  for (const svgFile of svgFiles) {
    const outputId = svgFile.fileName.replace('.svg', '');
    const originalSvgString = await fs.readFile(svgFile.filePath, 'utf-8');

    let optimizedSvgCode = await optimizeSvg(originalSvgString, outputId);

    if (modifySvgCallback) {
      optimizedSvgCode = modifySvgCallback({
        svgCode: optimizedSvgCode,
      });
    }

    if (fastXmlParser.validate(optimizedSvgCode) !== true) {
      throw new Error(`Invalid optimized SVG data for "${svgFile.fileName}"`);
    }

    const svgJson = fastXmlParser.parse(optimizedSvgCode, {
      ignoreAttributes: false,
    });
    const width = svgJson.svg['@_width'] ? parseInt(svgJson.svg['@_width'], 10) : undefined;
    const height = svgJson.svg['@_height'] ? parseInt(svgJson.svg['@_height'], 10) : undefined;

    if (width == null || height == null) {
      throw new Error(`Width and height is required`);
    }

    // Verify that icons are the correct size
    if (expectedSvgSize != null) {
      if (typeof expectedSvgSize == 'number') {
        if (width !== expectedSvgSize && height !== expectedSvgSize) {
          const actualSize = `${width}x${height}`;
          const expectedSize = `${expectedSvgSize}x${expectedSvgSize}`;
          throw new Error(`Invalid size for "${svgFile.fileName}"\nexpected: ${expectedSize}\nactual: ${actualSize}`);
        }
      } else {
        if (width !== expectedSvgSize.width && height !== expectedSvgSize?.height) {
          const actualSize = `${width}x${height}`;
          const expectedSize = `${expectedSvgSize.width}x${expectedSvgSize.height}`;
          throw new Error(`Invalid size for "${svgFile.fileName}"\nexpected: ${expectedSize}\nactual: ${actualSize}`);
        }
      }
    }

    // Add icons to the svg symbols list
    if (spritesheetFileName != null) {
      iconSymbols.push(createSvgSymbol({ outputId, svgCode: optimizedSvgCode }));
    }

    await createAndNavigateToHtmlPageWithIcon({
      page,
      tempFolder,
      iconName: outputId,
      svgString: originalSvgString,
      width,
      height,
    });

    for (const pngScale of pngScales) {
      const scaledWidth = pngScale * width;
      const scaledHeight = pngScale * height;

      await writePngIcon({
        page,
        outputId,
        outputFolder: path.join(outputFolder, 'png', `${pngScale}x`),
        width: scaledWidth,
        height: scaledHeight,
      });
    }

    for (const pngSize of pngSizes) {
      await writePngIcon({
        page,
        outputId,
        outputFolder: path.join(outputFolder, 'png', `${pngSize}`),
        width: pngSize,
        height: pngSize,
      });
    }

    await page.setViewport({
      width,
      height,
    });

    const pdfIcon = await page.pdf({
      preferCSSPageSize: true,
    });

    await writeFile({
      fileName: `${outputId}.pdf`,
      outputFolder: path.join(outputFolder, 'pdf'),
      content: pdfIcon,
    });

    await writeFile({
      fileName: `${outputId}.svg`,
      outputFolder: path.join(outputFolder, 'svg'),
      content: optimizedSvgCode,
    });

    await page.removeAllListeners();
  }

  if (spritesheetFileName != null) {
    await writeSpritesheet({
      outputFolder,
      symbols: iconSymbols,
      spritesheetFileName,
    });
  }
  // await page.close();
  await browser.close();
}

async function readSvgFiles(folder) {
  let svgFileNames = await fs.readdir(path.resolve(folder));

  return svgFileNames
    .filter((fileName) => fileName.includes('.svg'))
    .map((fileName) => {
      const filePath = path.resolve(folder, fileName);
      const baseName = fileName.replace('.svg', '');

      return { filePath, fileName, baseName };
    });
}

function createSvgSymbol({ outputId, svgCode }) {
  let symbol = svgCode;
  symbol = symbol.replace(/<svg .+?>/, `<symbol id="${outputId}">`);
  symbol = symbol.replace(/<\/svg>/, '</symbol>');

  return symbol;
}

async function writePngIcon({ page, outputId, outputFolder, width, height }) {
  await createFolder(outputFolder);

  await page.setViewport({ width, height });

  const pngIcon = await page.screenshot({
    type: 'png',
    omitBackground: true,
  });

  return writeFile({
    fileName: `${outputId}.png`,
    outputFolder,
    content: pngIcon,
  });
}

async function writeSpritesheet({ spritesheetFileName, symbols, outputFolder }) {
  console.log('Creating spritesheet');
  let spritesheet = '<svg xmlns="http://www.w3.org/2000/svg">';

  for (const symbol of symbols) {
    spritesheet = `${spritesheet}\n  ${symbol}`;
  }

  spritesheet = `${spritesheet}\n</svg>`;

  return writeFile({
    outputFolder,
    fileName: spritesheetFileName,
    content: spritesheet,
  });
}

module.exports = { convertSvgFiles };
