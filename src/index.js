'use strict';

/**
 * Yr weather symbols
 * https://github.com/yr/weather-symbols
 * @copyright Yr
 * @license MIT
 */

const graphicsComponent = require('@yr/graphics-component');
const primitives = require('./lib/primitives');
const recipes = require('./lib/recipes');
const utils = require('./lib/utils');

module.exports = {
  /**
   * Instance factory
   * @param {Object} options
   * @returns {Function}
   */
  create (options = {}) {
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

  if (!recipe) return null;

  return recipe.map((item) => {
    const options = utils.parse(item);

    return primitives[options.primitive](options);
  });
}