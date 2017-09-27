'use strict';

const { render } = require('@yr/component');
const grid = require('@yr/graphics-component/previewGrid');
const graphicsDefs = require('../graphicsDefs');
const symbolComponent = require('../index');

const symbol = symbolComponent.create({ rootImagePath: 'png' });

render(
  grid({
    ids: Object.keys(graphicsDefs),
    graphic: symbol
  }),
  document.getElementById('viewport')
);
