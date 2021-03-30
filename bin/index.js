var convertSvgFiles = require('@nrk/yr-convert-graphics').convertSvgFiles;

const pngSizes = [100, 200];
const expectedSvgDimensions = { width: 100, height: 100 };

convertSvgFiles({
  src: 'symbols/light-mode/default',
  pngSizes,
  expectedSvgDimensions,
  output: 'light-mode/default',
});

convertSvgFiles({
  src: 'symbols/light-mode/shadows',
  pngSizes,
  expectedSvgDimensions,
  output: 'light-mode/shadows',
});
