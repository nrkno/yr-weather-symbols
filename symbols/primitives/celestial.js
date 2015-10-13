'use strict';

const utils = require('../utils');

/**
 * Render sun, winter sun, or moon svg primitive
 * @param {Object} options
 * @returns {String}
 */
module.exports = function render (options) {
  return utils.getUseElementString(options.primitive == 'moon'
      ? '#moon'
      : (options.winter ? '#sunWinter' : '#sun'), options);
};