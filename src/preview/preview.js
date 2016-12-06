'use strict';

const { render } = require('@yr/component');
const grid = require('@yr/graphics-component/previewGrid');
const recipes = require('../js/lib/recipes');
const symbolComponent = require('../js/index');

const el = document.getElementById('viewport');
const symbol = symbolComponent.create({ rootImagePath: 'png' });

render(grid({
  ids: Object.keys(recipes),
  graphic: symbol
}), null, el);