'use strict';

const { render } = require('@yr/component');
const grid = require('@yr/graphics-component/previewGrid');
const recipes = require('../lib/recipes');
const symbolComponent = require('../lib/index');

const symbol = symbolComponent.create({ rootImagePath: 'png' });

render(
  grid({
    ids: Object.keys(recipes),
    graphic: symbol
  }),
  document.getElementById('viewport')
);
