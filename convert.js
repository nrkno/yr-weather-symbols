'use strict';

const webshot = require('webshot')
  , async = require('async')
  , React = require('react')
  , ReactDOMServer = require('react-dom/server')
  , weatherSymbolComponent = require('./src/js/index')
  , el = React.DOM
  , weatherSymbol = weatherSymbolComponent.create()
  , recipes = require('./src/js/recipes')
  , fs = require('fs');


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

function createMarkup (svg) {
  let html, style, symbolDefs;

  style = '* { padding: 0; margin: 0; }\n';
  style += '.iconContainer { height: 51px; width: 51px; }\n';

  // TODO: FIx this
  style += require('fs').readFileSync('src/css/index.styl').toString();

  symbolDefs = require('fs').readFileSync('src/html/symbolDefs.html').toString();

  html = '<!DOCTYPE html><html><head><style>';
  html += style;
  html += '</style></head><body>';
  html += symbolDefs;
  html += '<div class="iconContainer">';
  html += svg;
  html += '</div></body></html>';
  return html;
}

const options = {
  siteType: 'html',
  windowSize: {
    width: 51,
    height: 51
  }
};

async.forEachOfLimit(recipes, 10, function (recipe, id, callback) {
  const pngFileName = 'dist/png/' + id + '.png';

  const svg = createSymbol(id);
  const html = createMarkup(svg);

  webshot(html, pngFileName, options, function (err) {
    if (err) {
      console.log(err.message);
    } else {
      console.log('Created ' + pngFileName);
    }
    callback();
  });
});
