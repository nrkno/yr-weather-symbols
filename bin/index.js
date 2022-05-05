var convertSvgFiles = require('@nrk/yr-convert-graphics').convertSvgFiles;

const pngSizes = [100, 200];
const expectedSvgDimensionsDefault = { width: 100, height: 100 };
const expectedSvgDimensionsShadows = { width: 124, height: 124 };

convertSvgFiles({
  src: 'symbols/light-mode/default',
  pngSizes,
  expectedSvgDimensions: expectedSvgDimensionsDefault,
  output: 'light-mode/default',
});

convertSvgFiles({
  src: 'symbols/light-mode/shadows',
  pngSizes,
  expectedSvgDimensions: expectedSvgDimensionsShadows,
  output: 'light-mode/shadows',
});
