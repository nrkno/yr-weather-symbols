'use strict';

/**
 * Weather symbol component.
 * Used by both server and client.
 */

const celestialPrimitive = require('./primitives/celestial')
  , cloudPrimitive = require('./primitives/cloud')
  , fogPrimitive = require('./primitives/fog')
  , lightningPrimitive = require('./primitives/lightning')
  , precipitationPrimitive = require('./primitives/precipitation')
  , utils = require('./utils')
  , React = require('react')
  , recipes = require('./recipes')

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

  const comp = React.createClass({
    displayName: 'weatherSymbolComponent',

    /**
     * React: render
     * @returns {React}
     */
    render () {
      const type = this.props.type
        , id = this.props.id
        , recipe = recipes[id];

      if (!recipe) return null;

      if (type == 'svg') {
        let html = '';

        for (let i = 0, n = recipe.length; i < n; i++) {
          const opts = utils.parse(recipe[i]);

          // Until react supports <use>, concat strings
          html += primitives[opts.primitive](opts);
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
        return el.img({ src: (this.props.imagePath || '') + id + '.png' });
      }
    }
  }, { efficientUpdate: false });

  return function createElement (props) {
    return React.createElement(comp, props);
  };
};
