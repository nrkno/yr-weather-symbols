'use strict';

/**
 * Weather symbol component.
 * Used by both server and client.
 */

var primitives = require('./lib/primitives'),
    React = require('react'),
    recipes = require('./lib/recipes'),
    utils = require('./lib/utils'),
    el = React.DOM;

// Export
exports.create = function (options) {
  options = options || {};
  if (!('fallback' in options)) options.fallback = true;

  var comp = {
    displayName: 'weatherSymbolComponent',

    /**
     * React: render
     * @param {Object} props
     * @returns {React}
     */
    render: function render(props) {
      var type = props.type,
          id = props.id,
          recipe = recipes[id],
          fallback = 'fallback' in props ? props.fallback : options.fallback;

      var rootImagePath = props.rootImagePath || options.rootImagePath || '';

      if (!recipe) return null;

      if (rootImagePath && rootImagePath.charAt(rootImagePath.length - 1) != '/') rootImagePath += '/';

      if (type == 'svg') {
        var html = '';

        for (var i = 0, n = recipe.length; i < n; i++) {
          var opts = utils.parse(recipe[i]);

          // Until react supports <use>, concat strings
          html += primitives[opts.primitive](opts);
        }

        if (fallback) {
          html += '<image src="' + rootImagePath + id + '.png" xlink:href=""/>';
        }

        return el.svg({
          key: id,
          x: 0,
          y: 0,
          viewBox: '0 0 100 100',
          dangerouslySetInnerHTML: { __html: html }
        });

        // Image
      } else if (type == 'img') {
          return el.img({ src: '' + rootImagePath + id + '.png' });
        }
    }
  };

  return function renderStateless(props) {
    return comp.render(props);
  };
};