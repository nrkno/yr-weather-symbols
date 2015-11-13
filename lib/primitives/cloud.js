'use strict';

var utils = require('../utils');

/**
 * Render cloud svg primitive
 * @param {Object} options
 * @returns {String}
 */
module.exports = function render(options) {
  return utils.getUseElementString('#cloud', options);
};