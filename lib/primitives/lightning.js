'use strict';

var utils = require('../utils');

/**
 * Render lightning svg primitive
 * @param {Object} options
 * @returns {String}
 */
module.exports = function render(options) {
  return utils.getUseElementString('#lightning', options);
};