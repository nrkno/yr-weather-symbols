'use strict';

const webshot = require('webshot')
  , async = require('async')
  , path = require('path')
  , ReactDOMServer = require('react-dom/server')
  , weatherSymbolComponent = require('./index')
  , weatherSymbol = weatherSymbolComponent.create()
  , recipes = require('./lib/recipes')
  , fs = require('fs')
  , stylus = require('stylus');

const dest = process.argv[2] || 'dist/';

// lag klasse for å generere webside og ta screenshot
// Iterer alle ID'er

function createSymbol (id) {
  return ReactDOMServer.renderToString(
    weatherSymbol({
      type: 'svg',
      id
    }
  ));
}

function createMarkup (svg, cb) {
  const stylusFileName = 'src/css/index.styl';
  const stylusCss = fs.readFileSync(stylusFileName).toString();

  let boilerplateCss = '* { padding: 0; margin: 0; }\n';

  boilerplateCss += '.iconContainer { height: 51px; width: 51px; }\n';

  stylus.render(stylusCss, { filename: stylusFileName }, function (err, css) {
    if (err) throw err;

    const symbolDefs = fs.readFileSync('src/html/symbolDefs.html').toString();

    let html = '<!DOCTYPE html><html><head><style>';

    html += boilerplateCss;
    html += css;
    html += '</style></head><body>';
    html += symbolDefs;
    html += '<div class="iconContainer">';
    html += svg;
    html += '</div></body></html>';

    cb(html);
  });
}

const options = {
  siteType: 'html',
  windowSize: {
    width: 51,
    height: 51
  }
};

async.forEachOfLimit(recipes, 10, function (recipe, id, asyncCallback) {
  const pngFileName = path.join(dest, 'png', id + '.png')
    , svgFileName = path.join(dest, 'svg', id + '.svg');

  const svg = createSymbol(id);

  createMarkup(svg, function (html) {
    webshot(html, pngFileName, options, function (err) {
      if (err) {
        console.log(err.message);
      } else {
        console.log('Created ' + pngFileName);

        fs.writeFileSync(svgFileName, svg);
        console.log('Created ' + svgFileName);
        asyncCallback();
      }
    });
  });
});
