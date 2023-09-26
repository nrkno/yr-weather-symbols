var convertSvgFiles = require('@nrk/yr-convert-graphics').convertSvgFiles;

const pngSizes = [100, 200];
const expectedSvgDimensionsDefault = { width: 100, height: 100 };
const expectedSvgDimensionsDarkmode = { width: 130, height: 130 };

convertSvgFiles({
  src: 'symbols/default',
  pngSizes,
  expectedSvgDimensions: expectedSvgDimensionsDefault,
  output: 'symbols/default',
});

convertSvgFiles({
  src: 'symbols/darkmode',
  pngSizes,
  expectedSvgDimensions: expectedSvgDimensionsDarkmode,
  output: 'symbols/darkmode',
});
