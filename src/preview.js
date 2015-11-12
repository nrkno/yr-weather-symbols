'use strict';

const React = require('react')
  , ReactDOM = require('react-dom')
  , recipes = require('./lib/recipes')
  , symbolComponent = require('./index')

  , el = document.getElementById('viewport')
  , symbol = symbolComponent.create({ fallback: false });

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
          symbol({ id, type: 'svg' })
        );
      }) });
    }
  });

  return function (props) {
    return React.createElement(comp, props);
  };
}

ReactDOM.render(createGrid()({}), el);