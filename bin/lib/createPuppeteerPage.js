const path = require('path');
const fs = require('fs').promises;
const { Page } = require('puppeteer');

/**
 *
 * @param {Page} page Puppeteer browser object
 * @param iconName {string}
 * @param svg {Buffer | string}
 * @param width {number}B
 * @param height {number}
 * @return {Promise<Page>}
 */
async function createAndNavigateToHtmlPageWithIcon({ page, tempFolder, iconName, svgString, width, height }) {
  const html = htmlWithSvg({ svgString: svgString, width, height });

  const htmlPath = path.resolve(tempFolder, `${iconName}.html`);
  await fs.writeFile(htmlPath, html);

  return await page.goto(`file://${htmlPath}`);
}

function htmlWithSvg({ svgString, width, height }) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      body {
        margin: 0;
      }

      svg {
        display: block;
        height: 100%;
        width: 100%;
      }

      @page {
        /* We use pt instead of px because xcode imports with 1pt == 1px */
        size: ${width}pt ${height}pt;
      }
    </style>
  </head>
  <body>
    ${svgString}
  </body>
</html>

`;
}

module.exports = { createAndNavigateToHtmlPageWithIcon };
