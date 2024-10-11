var convertSvgFiles = require('@nrk/yr-convert-graphics').convertSvgFiles;

const pngSizes = [100, 200];
const expectedSvgDimensionsLightmode = { width: 100, height: 100 };
const expectedSvgDimensionsDarkmode = { width: 100, height: 100 };
const expectedSvgDimensionsShadows = { width: 130, height: 130 };
const expectedSvgDimensionsOutline = { width: 120, height: 120 };

convertSvgFiles({
  src: 'symbols/lightmode',
  pngSizes,
  expectedSvgDimensions: expectedSvgDimensionsLightmode,
  output: 'symbols/lightmode',
});

convertSvgFiles({
  src: 'symbols/darkmode',
  pngSizes,
  expectedSvgDimensions: expectedSvgDimensionsDarkmode,
  output: 'symbols/darkmode',
});

convertSvgFiles({
  src: 'symbols/shadows',
  pngSizes,
  expectedSvgDimensions: expectedSvgDimensionsShadows,
  output: 'symbols/shadows',
});

convertSvgFiles({
  src: 'symbols/outline',
  pngSizes,
  expectedSvgDimensions: expectedSvgDimensionsOutline,
  output: 'symbols/outline',
});
