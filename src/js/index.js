'use strict';

/**
 * Weather symbol component.
 * Used by both server and client.
 */

const celestialPrimitive = require('./lib/primitives/celestial')
  , cloudPrimitive = require('./lib/primitives/cloud')
  , fogPrimitive = require('./lib/primitives/fog')
  , lightningPrimitive = require('./lib/primitives/lightning')
  , precipitationPrimitive = require('./lib/primitives/precipitation')
  , utils = require('./lib/utils')
  , recipes = require('./lib/recipes')

  , React = require('react')
  , el = React.DOM
  , primitives = {
      cloud: cloudPrimitive,
      fog: fogPrimitive,
      lightning: lightningPrimitive,
      moon: celestialPrimitive,
      raindrop: precipitationPrimitive,
      snowflake: precipitationPrimitive,
      sun: celestialPrimitive
    };

// Export
exports.create = function (options) {
  options = options || {};
  if (!('fallback' in options)) options.fallback = true;

  const comp = React.createClass({
    displayName: 'weatherSymbolComponent',

    /**
     * React: render
     * @param {Object} props
     * @returns {React}
     */
    render (props) {
      const type = props.type
        , id = props.id
        , recipe = recipes[id]
        , staticImagesPath = props.staticImagesPath
        , fallback = 'fallback' in props ? props.fallback : options.fallback;

      if (!recipe) return null;

      if (type == 'svg') {
        let html = '';

        for (let i = 0, n = recipe.length; i < n; i++) {
          const opts = utils.parse(recipe[i]);

          // Until react supports <use>, concat strings
          html += primitives[opts.primitive](opts);
        }

        if (fallback) {
          html += '<image src="' + staticImagesPath + '/symbols/' + id + '.png" xlink:href=""/>';
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
        return el.img({ src: (props.imagePath || '') + id + '.png' });
      }
    }
  }, { efficientUpdate: false });

  return function renderStateless (props) {
    return comp.render(props);
  };
};
