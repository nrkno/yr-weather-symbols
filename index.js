'use strict';

/**
 * Yr weather symbols
 * https://github.com/yr/weather-symbols
 * @copyright Yr
 * @license MIT
 */

var graphicsComponent = require('@yr/graphics-component');
var primitives = require('./lib/primitives');
var recipes = require('./lib/recipes');
var utils = require('./lib/utils');

module.exports = {
  /**
   * Instance factory
   * @param {Object} options
   * @returns {Function}
   */

  create: function create() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    options.renderInnerSvg = renderInnerSvg;

    return graphicsComponent.create(options);
  }
};

/**
 * Render inner svg string for 'id'
 * @param {String} id
 * @returns {String}
 */
function renderInnerSvg(id) {
  var recipe = recipes[id];

  if (!recipe) return null;

  return recipe.map(function (item) {
    var options = utils.parse(item);

    return primitives[options.primitive](options);
  });
}