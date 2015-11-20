'use strict';

/**
 * Weather symbol component.
 */

const graphicsComponent = require('@yr/graphics-component')
  , primitives = require('./lib/primitives')
  , recipes = require('./lib/recipes')
  , utils = require('./lib/utils');

module.exports = {
  /**
   * Instance factory
   * @param {Object} options
   * @returns {Function}
   */
  create (options) {
    options = options || {};
    options.renderInnerSvg = renderInnerSvg;

    return graphicsComponent.create(options);
  }
};

/**
 * Render inner svg string for 'id'
 * @param {String} id
 * @returns {String}
 */
function renderInnerSvg (id) {
  const recipe = recipes[id];

  if (!recipe) return '';

  return recipe.reduce((html, r) => {
    const opts = utils.parse(r);

    return html += primitives[opts.primitive](opts);
  }, '');
}