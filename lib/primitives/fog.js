'use strict';

var utils = require('../utils');

/**
 * Render fog svg primitive
 * @param {Object} options
 * @returns {String}
 */
module.exports = function render(options) {
  return utils.getUseElementString('#fog', options);
};