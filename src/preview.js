'use strict';

const React = require('react')
  , ReactDOM = require('react-dom')
  , recipes = require('./lib/recipes')
  , symbolComponent = require('./index')

  , el = document.getElementById('viewport')
  , symbol = symbolComponent.create({ rootImagePath: 'dist/png' });

function createGrid () {
  const comp = React.createClass({
    render (props) {
      let ids = [];

      // Should use Object.keys instead, but PhantomJS
      for (const id in recipes) {
        ids.push(id);
      }

      return React.DOM.div({ children: ids.map((id) => {
        return React.DOM.div({ className: 'symbol', id: `symbol-${id}` },
          React.DOM.h2({}, id),
          React.DOM.span({ className: 'symbol-group' },
            symbol({ id, type: 'svg', fallback: true }),
            React.DOM.h3({}, 'svg')
          ),
          React.DOM.span({ className: 'symbol-group' },
            symbol({ id, type: 'img' }),
            React.DOM.h3({}, 'png')
          )
        );
      }) });
    }
  });

  return function (props) {
    return React.createElement(comp, props);
  };
}

ReactDOM.render(createGrid()({}), el);