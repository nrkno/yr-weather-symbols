'use strict';

const { ReactDOM } = require('@yr/component');
const grid = require('@yr/graphics-component/previewGrid');
const recipes = require('../js/lib/recipes');
const symbolComponent = require('../js/index');

const el = document.getElementById('viewport');
const symbol = symbolComponent.create({ rootImagePath: 'png' });

ReactDOM.render(grid({
  ids: Object.keys(recipes),
  graphic: symbol
}), el);