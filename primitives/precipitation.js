'use strict';

var utils = require('../utils');

/**
 * Render precipitation svg primitive
 * @param {Object} options
 * @returns {String}
 */
module.exports = function render(options) {
  return utils.getElement('#' + options.primitive, options);
};