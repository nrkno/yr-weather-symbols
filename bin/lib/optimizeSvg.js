const svgo = require('svgo');

function optimizeSvg(svgString, iconId) {
  const svgOptimize = new svgo({
    plugins: [
      {
        cleanupIDs: true,
      },
      {
        prefixIds: {
          prefix: iconId,
        },
      },
      {
        cleanupAttrs: true,
      },
      {
        removeDoctype: true,
      },
      {
        removeXMLProcInst: true,
      },
      {
        removeComments: true,
      },
      {
        removeMetadata: true,
      },
      {
        removeTitle: true,
      },
      {
        removeDesc: true,
      },
      {
        removeUselessDefs: true,
      },
      {
        removeEditorsNSData: true,
      },
      {
        removeEmptyAttrs: true,
      },
      {
        removeHiddenElems: true,
      },
      {
        removeEmptyText: true,
      },
      {
        removeEmptyContainers: true,
      },
      {
        removeViewBox: false,
      },
      {
        cleanupEnableBackground: true,
      },
      {
        convertStyleToAttrs: true,
      },
      {
        convertColors: true,
      },
      {
        convertPathData: true,
      },
      {
        convertTransform: true,
      },
      {
        removeUnknownsAndDefaults: true,
      },
      {
        removeNonInheritableGroupAttrs: true,
      },
      {
        removeUselessStrokeAndFill: true,
      },
      {
        removeUnusedNS: true,
      },
      {
        cleanupNumericValues: true,
      },
      {
        moveElemsAttrsToGroup: true,
      },
      {
        moveGroupAttrsToElems: true,
      },
      {
        collapseGroups: true,
      },
      {
        removeRasterImages: false,
      },
      {
        mergePaths: true,
      },
      {
        convertShapeToPath: true,
      },
      {
        sortAttrs: true,
      },
      {
        removeDimensions: false,
      },
      {
        removeAttrs: { attrs: 'data.*' },
      },
      {
        inlineStyles: {
          onlyMatchedOnce: false,
        },
      },
    ],
  });

  return svgOptimize
    .optimize(svgString)
    .then((output) => output.data)
    .then((svgContentPass2) => svgOptimize.optimize(svgContentPass2))
    .then((output) => output.data);
}

module.exports = { optimizeSvg };
