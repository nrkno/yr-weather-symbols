var convertSvgFiles = require('@nrk/yr-convert-graphics').convertSvgFiles;

// pdf
// svg
// png/30
// png/38
// png/48
// png/100
// png/200

const pngSizes = [100, 200];
const expectedSvgDimensions = { width: 100, height: 100 };

convertSvgFiles({
  src: 'symbols/light-mode/default',
  pngSizes,
  expectedSvgDimensions,
});

convertSvgFiles({
  src: 'symbols/light-mode/shadows',
  pngSizes,
  expectedSvgDimensions,
});
