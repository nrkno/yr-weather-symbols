'use strict';

var component = require('@yr/component');

var MAX_WIDTH = 100;

module.exports = {
  /**
   * Parse 'options'
   * @param {Object} options
   * @returns {Object}
   */

  parse: function parse(options) {
    var opts = {};

    opts.visible = true;
    // opts.scale = (type == 'canvas') ? capabilities.backingRatio : 1;
    opts.scaleX = 1;
    opts.scaleY = 1;
    opts.primitive = options.primitive;
    opts.x = Math.round(options.x * opts.scaleX);
    opts.y = Math.round(options.y * opts.scaleY);
    opts.scaleX = (options.scaleX || 1) * opts.scaleX;
    opts.scaleY = (options.scaleY || 1) * opts.scaleY;
    opts.flip = options.flip;
    opts.tint = options.tint || 1;
    opts.winter = options.winter;
    opts.variation = options.variation != null ? '' + options.variation : '';
    opts['class'] = opts.primitive + opts.variation + '-primitive';

    return opts;
  },


  /**
   * Retrieve React 'use' element for 'link'
   * @param {String} link
   * @param {Object} options
   * @returns {React}
   */
  getElement: function getElement(link, options) {
    return component.el('use', {
      className: options['class'],
      xlinkHref: link,
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      transform: options.flip ? 'translate(' + (MAX_WIDTH * options.scaleX + options.x) + ',' + options.scaleY * options.y + ') scale(' + -1 * options.scaleX + ', ' + options.scaleY + ')' : 'translate(' + options.x + ',' + options.y + ') scale(' + options.scaleX + ', ' + options.scaleY + ')'
    });
  }
};