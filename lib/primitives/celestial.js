'use strict';

var utils = require('../utils');

/**
 * Render sun, winter sun, or moon svg primitive
 * @param {Object} options
 * @returns {String}
 */
module.exports = function render() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return utils.getElement(options.primitive == 'moon' ? '#moon' : options.winter ? '#sunWinter' : '#sun', options);
};