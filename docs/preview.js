'use strict';

/** BUDDY BUILT **/

if ('undefined' === typeof self) var self = this;
if ('undefined' === typeof global) var global = self;
var $m = self.$m = self.$m || {};
if ('browser' != 'browser') {
  var $req = require;
  require = function buddyRequire (id) {
    if (!$m[id]) return $req(id);
    if ('function' == typeof $m[id]) $m[id]();
    return $m[id].exports;
  };
} else {
  if ('undefined' === typeof process) var process = {browser:true, env:{NODE_ENV:'development'}};
  self.require = self.require || function buddyRequire (id) {
    if ($m[id]) {
      if ('function' == typeof $m[id]) $m[id]();
      return $m[id].exports;
    }

    if ('development' == 'development') {
      console.warn('module ' + id + ' not found');
    }
  };
}
(function (global) {
  var babelHelpers = global.babelHelpers = {};

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  babelHelpers.inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  babelHelpers.possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };
})(typeof global === "undefined" ? self : global);

(function () {
/*== node_modules/@yr/runtime/index.js ==*/
$m['@yr/runtime'] = { exports: {} };

/**
 * Determine if the current runtime is server or browser
 * https://github.com/yr/runtime
 * @copyright Yr
 * @license MIT
 */

var yrruntime__isServer = typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';
var yrruntime__isBrowser = typeof window !== 'undefined';

$m['@yr/runtime'].exports.isServer = yrruntime__isServer;
$m['@yr/runtime'].exports.isBrowser = !yrruntime__isServer && yrruntime__isBrowser;
$m['@yr/runtime'].exports.isWorker = !yrruntime__isServer && !yrruntime__isBrowser;
/*≠≠ node_modules/@yr/runtime/index.js ≠≠*/


/*== src/lib/recipes.js ==*/
$m['src/lib/recipes'] = { exports: {} };

var srclibrecipes__base = {
  sun1: [{
    primitive: 'sun',
    x: 5,
    y: 5
  }],
  sun2: [{
    primitive: 'sun',
    x: 0,
    y: 0
  }],
  sun3: [{
    primitive: 'sun',
    x: 0,
    y: 0,
    scaleX: 0.666666667,
    scaleY: 0.666666667
  }],
  sunWinter1: [{
    primitive: 'sun',
    x: 5,
    y: 37,
    winter: true
  }],
  sunWinter2: [{
    primitive: 'sun',
    x: 0,
    y: 37,
    winter: true
  }],
  sunWinter3: [{
    primitive: 'sun',
    x: 0,
    y: 23,
    scaleX: 0.666666667,
    scaleY: 0.666666667,
    winter: true
  }],
  moon1: [{
    primitive: 'moon',
    x: 15,
    y: 15
  }],
  moon2: [{
    primitive: 'moon',
    x: 5,
    y: 15
  }],
  moon3: [{
    primitive: 'moon',
    x: 0,
    y: 3,
    scaleX: 0.714285714,
    scaleY: 0.714285714
  }],
  '02': [{
    primitive: 'cloud',
    x: 35,
    y: 37.5,
    scaleX: 0.714285714,
    scaleY: 0.714285714,
    variation: 1
  }],
  '03': [{
    primitive: 'cloud',
    x: 5,
    y: 25,
    variation: 1
  }],
  40: [{
    primitive: 'cloud',
    x: 5,
    y: 25,
    variation: 2
  }, {
    primitive: 'raindrop',
    x: 32,
    y: 87
  }, {
    primitive: 'raindrop',
    x: 56,
    y: 78
  }],
  '05': [{
    primitive: 'cloud',
    x: 5,
    y: 25,
    variation: 3
  }, {
    primitive: 'raindrop',
    x: 32,
    y: 78
  }, {
    primitive: 'raindrop',
    x: 45,
    y: 87
  }, {
    primitive: 'raindrop',
    x: 60,
    y: 78
  }],
  41: [{
    primitive: 'cloud',
    x: 5,
    y: 25,
    variation: 4
  }, {
    primitive: 'raindrop',
    x: 18,
    y: 78
  }, {
    primitive: 'raindrop',
    x: 32,
    y: 87
  }, {
    primitive: 'raindrop',
    x: 47,
    y: 79
  }, {
    primitive: 'raindrop',
    x: 60,
    y: 78
  }, {
    primitive: 'raindrop',
    x: 74,
    y: 87
  }],
  42: [{
    primitive: 'cloud',
    x: 5,
    y: 25,
    variation: 2
  }, {
    primitive: 'snowflake',
    x: 29,
    y: 88
  }, {
    primitive: 'raindrop',
    x: 60,
    y: 79
  }],
  '07': [{
    primitive: 'cloud',
    x: 5,
    y: 25,
    variation: 3
  }, {
    primitive: 'snowflake',
    x: 30,
    y: 79
  }, {
    primitive: 'raindrop',
    x: 46,
    y: 86
  }, {
    primitive: 'raindrop',
    x: 60,
    y: 80
  }],
  43: [{
    primitive: 'cloud',
    x: 5,
    y: 25,
    variation: 4
  }, {
    primitive: 'snowflake',
    x: 15,
    y: 79
  }, {
    primitive: 'raindrop',
    x: 32,
    y: 86
  }, {
    primitive: 'raindrop',
    x: 47,
    y: 80
  }, {
    primitive: 'snowflake',
    x: 58,
    y: 88
  }, {
    primitive: 'raindrop',
    x: 74,
    y: 80
  }],
  44: [{
    primitive: 'cloud',
    x: 5,
    y: 25,
    variation: 2
  }, {
    primitive: 'snowflake',
    x: 29,
    y: 88
  }, {
    primitive: 'snowflake',
    x: 58,
    y: 79
  }],
  '08': [{
    primitive: 'cloud',
    x: 5,
    y: 25,
    variation: 3
  }, {
    primitive: 'snowflake',
    x: 30,
    y: 79
  }, {
    primitive: 'snowflake',
    x: 44,
    y: 88
  }, {
    primitive: 'snowflake',
    x: 58,
    y: 79
  }],
  45: [{
    primitive: 'cloud',
    x: 5,
    y: 25,
    variation: 4
  }, {
    primitive: 'snowflake',
    x: 15,
    y: 79
  }, {
    primitive: 'snowflake',
    x: 29,
    y: 88
  }, {
    primitive: 'snowflake',
    x: 44,
    y: 79
  }, {
    primitive: 'snowflake',
    x: 58,
    y: 88
  }, {
    primitive: 'snowflake',
    x: 72,
    y: 79
  }],
  24: [{
    primitive: 'cloud',
    x: 5,
    y: 25,
    variation: 2
  }, {
    primitive: 'raindrop',
    x: 28,
    y: 87
  }, {
    primitive: 'lightning',
    x: 42,
    y: 51
  }, {
    primitive: 'raindrop',
    x: 58,
    y: 78
  }],
  '06': [{
    primitive: 'cloud',
    x: 5,
    y: 25,
    variation: 3
  }, {
    primitive: 'raindrop',
    x: 29,
    y: 78
  }, {
    primitive: 'lightning',
    x: 42,
    y: 51
  }, {
    primitive: 'raindrop',
    x: 50,
    y: 87
  }, {
    primitive: 'raindrop',
    x: 65,
    y: 78
  }],
  25: [{
    primitive: 'cloud',
    x: 5,
    y: 25,
    variation: 4
  }, {
    primitive: 'raindrop',
    x: 18,
    y: 78
  }, {
    primitive: 'raindrop',
    x: 29,
    y: 87
  }, {
    primitive: 'lightning',
    x: 42,
    y: 51
  }, {
    primitive: 'raindrop',
    x: 55,
    y: 79
  }, {
    primitive: 'raindrop',
    x: 68,
    y: 78
  }, {
    primitive: 'raindrop',
    x: 82,
    y: 87
  }],
  26: [{
    primitive: 'cloud',
    x: 5,
    y: 25,
    variation: 2
  }, {
    primitive: 'snowflake',
    x: 26,
    y: 88
  }, {
    primitive: 'lightning',
    x: 42,
    y: 51
  }, {
    primitive: 'raindrop',
    x: 58,
    y: 79
  }],
  20: [{
    primitive: 'cloud',
    x: 5,
    y: 25,
    variation: 3
  }, {
    primitive: 'snowflake',
    x: 27,
    y: 79
  }, {
    primitive: 'lightning',
    x: 42,
    y: 51
  }, {
    primitive: 'raindrop',
    x: 50,
    y: 86
  }, {
    primitive: 'raindrop',
    x: 64,
    y: 80
  }],
  27: [{
    primitive: 'cloud',
    x: 5,
    y: 25,
    variation: 4
  }, {
    primitive: 'snowflake',
    x: 15,
    y: 79
  }, {
    primitive: 'raindrop',
    x: 30,
    y: 86
  }, {
    primitive: 'lightning',
    x: 42,
    y: 51
  }, {
    primitive: 'raindrop',
    x: 55,
    y: 80
  }, {
    primitive: 'snowflake',
    x: 66,
    y: 88
  }, {
    primitive: 'raindrop',
    x: 82,
    y: 80
  }],
  28: [{
    primitive: 'cloud',
    x: 5,
    y: 25,
    variation: 2
  }, {
    primitive: 'snowflake',
    x: 26,
    y: 88
  }, {
    primitive: 'lightning',
    x: 42,
    y: 51
  }, {
    primitive: 'snowflake',
    x: 58,
    y: 79
  }],
  21: [{
    primitive: 'cloud',
    x: 5,
    y: 25,
    variation: 3
  }, {
    primitive: 'snowflake',
    x: 26,
    y: 79
  }, {
    primitive: 'lightning',
    x: 42,
    y: 51
  }, {
    primitive: 'snowflake',
    x: 52,
    y: 88
  }, {
    primitive: 'snowflake',
    x: 66,
    y: 79
  }],
  29: [{
    primitive: 'cloud',
    x: 5,
    y: 25,
    variation: 4
  }, {
    primitive: 'snowflake',
    x: 13,
    y: 79
  }, {
    primitive: 'snowflake',
    x: 27,
    y: 88
  }, {
    primitive: 'lightning',
    x: 42,
    y: 51
  }, {
    primitive: 'snowflake',
    x: 55,
    y: 79
  }, {
    primitive: 'snowflake',
    x: 69,
    y: 88
  }, {
    primitive: 'snowflake',
    x: 83,
    y: 79
  }]
};

$m['src/lib/recipes'].exports = {
  '01d': srclibrecipes__base.sun1,
  '02d': srclibrecipes__base.sun2.concat(srclibrecipes__base['02']),
  '03d': srclibrecipes__base.sun3.concat(srclibrecipes__base['03']),
  '40d': srclibrecipes__base.sun3.concat(srclibrecipes__base['40']),
  '05d': srclibrecipes__base.sun3.concat(srclibrecipes__base['05']),
  '41d': srclibrecipes__base.sun3.concat(srclibrecipes__base['41']),
  '42d': srclibrecipes__base.sun3.concat(srclibrecipes__base['42']),
  '07d': srclibrecipes__base.sun3.concat(srclibrecipes__base['07']),
  '43d': srclibrecipes__base.sun3.concat(srclibrecipes__base['43']),
  '44d': srclibrecipes__base.sun3.concat(srclibrecipes__base['44']),
  '08d': srclibrecipes__base.sun3.concat(srclibrecipes__base['08']),
  '45d': srclibrecipes__base.sun3.concat(srclibrecipes__base['45']),
  '24d': srclibrecipes__base.sun3.concat(srclibrecipes__base['24']),
  '06d': srclibrecipes__base.sun3.concat(srclibrecipes__base['06']),
  '25d': srclibrecipes__base.sun3.concat(srclibrecipes__base['25']),
  '26d': srclibrecipes__base.sun3.concat(srclibrecipes__base['26']),
  '20d': srclibrecipes__base.sun3.concat(srclibrecipes__base['20']),
  '27d': srclibrecipes__base.sun3.concat(srclibrecipes__base['27']),
  '28d': srclibrecipes__base.sun3.concat(srclibrecipes__base['28']),
  '21d': srclibrecipes__base.sun3.concat(srclibrecipes__base['21']),
  '29d': srclibrecipes__base.sun3.concat(srclibrecipes__base['29']),

  '01m': srclibrecipes__base.sunWinter1,
  '02m': srclibrecipes__base.sunWinter2.concat(srclibrecipes__base['02']),
  '03m': srclibrecipes__base.sunWinter3.concat(srclibrecipes__base['03']),
  '40m': srclibrecipes__base.sunWinter3.concat(srclibrecipes__base['40']),
  '05m': srclibrecipes__base.sunWinter3.concat(srclibrecipes__base['05']),
  '41m': srclibrecipes__base.sunWinter3.concat(srclibrecipes__base['41']),
  '42m': srclibrecipes__base.sunWinter3.concat(srclibrecipes__base['42']),
  '07m': srclibrecipes__base.sunWinter3.concat(srclibrecipes__base['07']),
  '43m': srclibrecipes__base.sunWinter3.concat(srclibrecipes__base['43']),
  '44m': srclibrecipes__base.sunWinter3.concat(srclibrecipes__base['44']),
  '08m': srclibrecipes__base.sunWinter3.concat(srclibrecipes__base['08']),
  '45m': srclibrecipes__base.sunWinter3.concat(srclibrecipes__base['45']),
  '24m': srclibrecipes__base.sunWinter3.concat(srclibrecipes__base['24']),
  '06m': srclibrecipes__base.sunWinter3.concat(srclibrecipes__base['06']),
  '25m': srclibrecipes__base.sunWinter3.concat(srclibrecipes__base['25']),
  '26m': srclibrecipes__base.sunWinter3.concat(srclibrecipes__base['26']),
  '20m': srclibrecipes__base.sunWinter3.concat(srclibrecipes__base['20']),
  '27m': srclibrecipes__base.sunWinter3.concat(srclibrecipes__base['27']),
  '28m': srclibrecipes__base.sunWinter3.concat(srclibrecipes__base['28']),
  '21m': srclibrecipes__base.sunWinter3.concat(srclibrecipes__base['21']),
  '29m': srclibrecipes__base.sunWinter3.concat(srclibrecipes__base['29']),

  '01n': srclibrecipes__base.moon1,
  '02n': srclibrecipes__base.moon2.concat(srclibrecipes__base['02']),
  '03n': srclibrecipes__base.moon3.concat(srclibrecipes__base['03']),
  '40n': srclibrecipes__base.moon3.concat(srclibrecipes__base['40']),
  '05n': srclibrecipes__base.moon3.concat(srclibrecipes__base['05']),
  '41n': srclibrecipes__base.moon3.concat(srclibrecipes__base['41']),
  '42n': srclibrecipes__base.moon3.concat(srclibrecipes__base['42']),
  '07n': srclibrecipes__base.moon3.concat(srclibrecipes__base['07']),
  '43n': srclibrecipes__base.moon3.concat(srclibrecipes__base['43']),
  '44n': srclibrecipes__base.moon3.concat(srclibrecipes__base['44']),
  '08n': srclibrecipes__base.moon3.concat(srclibrecipes__base['08']),
  '45n': srclibrecipes__base.moon3.concat(srclibrecipes__base['45']),
  '24n': srclibrecipes__base.moon3.concat(srclibrecipes__base['24']),
  '06n': srclibrecipes__base.moon3.concat(srclibrecipes__base['06']),
  '25n': srclibrecipes__base.moon3.concat(srclibrecipes__base['25']),
  '26n': srclibrecipes__base.moon3.concat(srclibrecipes__base['26']),
  '20n': srclibrecipes__base.moon3.concat(srclibrecipes__base['20']),
  '27n': srclibrecipes__base.moon3.concat(srclibrecipes__base['27']),
  '28n': srclibrecipes__base.moon3.concat(srclibrecipes__base['28']),
  '21n': srclibrecipes__base.moon3.concat(srclibrecipes__base['21']),
  '29n': srclibrecipes__base.moon3.concat(srclibrecipes__base['29']),

  15: [{
    primitive: 'cloud',
    x: 5,
    y: 25,
    variation: 1
  }, {
    primitive: 'fog',
    x: 0,
    y: 76
  }],
  '04': [{
    primitive: 'cloud',
    x: 5,
    y: 25,
    variation: 1
  }],
  46: srclibrecipes__base['40'],
  '09': srclibrecipes__base['05'],
  10: srclibrecipes__base['41'],
  47: srclibrecipes__base['42'],
  12: srclibrecipes__base['07'],
  48: srclibrecipes__base['43'],
  49: srclibrecipes__base['44'],
  13: srclibrecipes__base['08'],
  50: srclibrecipes__base['45'],
  30: srclibrecipes__base['24'],
  22: srclibrecipes__base['06'],
  11: srclibrecipes__base['25'],
  31: srclibrecipes__base['26'],
  23: srclibrecipes__base['20'],
  32: srclibrecipes__base['27'],
  33: srclibrecipes__base['28'],
  14: srclibrecipes__base['21'],
  34: srclibrecipes__base['29']
};
/*≠≠ src/lib/recipes.js ≠≠*/


/*== node_modules/fbjs/lib/emptyFunction.js ==*/
$m['fbjs/lib/emptyFunction'] = { exports: {} };
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function fbjslibemptyFunction__makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var fbjslibemptyFunction__emptyFunction = function emptyFunction() {};

fbjslibemptyFunction__emptyFunction.thatReturns = fbjslibemptyFunction__makeEmptyFunction;
fbjslibemptyFunction__emptyFunction.thatReturnsFalse = fbjslibemptyFunction__makeEmptyFunction(false);
fbjslibemptyFunction__emptyFunction.thatReturnsTrue = fbjslibemptyFunction__makeEmptyFunction(true);
fbjslibemptyFunction__emptyFunction.thatReturnsNull = fbjslibemptyFunction__makeEmptyFunction(null);
fbjslibemptyFunction__emptyFunction.thatReturnsThis = function () {
  return this;
};
fbjslibemptyFunction__emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

$m['fbjs/lib/emptyFunction'].exports = fbjslibemptyFunction__emptyFunction;
/*≠≠ node_modules/fbjs/lib/emptyFunction.js ≠≠*/


/*== node_modules/prop-types/lib/ReactPropTypesSecret.js ==*/
$m['prop-types/lib/ReactPropTypesSecret'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var proptypeslibReactPropTypesSecret__ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

$m['prop-types/lib/ReactPropTypesSecret'].exports = proptypeslibReactPropTypesSecret__ReactPropTypesSecret;
/*≠≠ node_modules/prop-types/lib/ReactPropTypesSecret.js ≠≠*/


/*== node_modules/preact/dist/preact.js ==*/
$m['preact'] = { exports: {} };
!function () {
    function VNode() {}
    function h(nodeName, attributes) {
        var lastSimple,
            child,
            simple,
            i,
            children = EMPTY_CHILDREN;
        for (i = arguments.length; i-- > 2;) stack.push(arguments[i]);
        if (attributes && null != attributes.children) {
            if (!stack.length) stack.push(attributes.children);
            delete attributes.children;
        }
        while (stack.length) if ((child = stack.pop()) && void 0 !== child.pop) for (i = child.length; i--;) stack.push(child[i]);else {
            if ('boolean' == typeof child) child = null;
            if (simple = 'function' != typeof nodeName) if (null == child) child = '';else if ('number' == typeof child) child = String(child);else if ('string' != typeof child) simple = !1;
            if (simple && lastSimple) children[children.length - 1] += child;else if (children === EMPTY_CHILDREN) children = [child];else children.push(child);
            lastSimple = simple;
        }
        var p = new VNode();
        p.nodeName = nodeName;
        p.children = children;
        p.attributes = null == attributes ? void 0 : attributes;
        p.key = null == attributes ? void 0 : attributes.key;
        if (void 0 !== options.vnode) options.vnode(p);
        return p;
    }
    function extend(obj, props) {
        for (var i in props) obj[i] = props[i];
        return obj;
    }
    function cloneElement(vnode, props) {
        return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
    }
    function enqueueRender(component) {
        if (!component.__d && (component.__d = !0) && 1 == items.push(component)) (options.debounceRendering || defer)(rerender);
    }
    function rerender() {
        var p,
            list = items;
        items = [];
        while (p = list.pop()) if (p.__d) renderComponent(p);
    }
    function isSameNodeType(node, vnode, hydrating) {
        if ('string' == typeof vnode || 'number' == typeof vnode) return void 0 !== node.splitText;
        if ('string' == typeof vnode.nodeName) return !node._componentConstructor && isNamedNode(node, vnode.nodeName);else return hydrating || node._componentConstructor === vnode.nodeName;
    }
    function isNamedNode(node, nodeName) {
        return node.__n === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
    }
    function getNodeProps(vnode) {
        var props = extend({}, vnode.attributes);
        props.children = vnode.children;
        var defaultProps = vnode.nodeName.defaultProps;
        if (void 0 !== defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];
        return props;
    }
    function createNode(nodeName, isSvg) {
        var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
        node.__n = nodeName;
        return node;
    }
    function removeNode(node) {
        var parentNode = node.parentNode;
        if (parentNode) parentNode.removeChild(node);
    }
    function setAccessor(node, name, old, value, isSvg) {
        if ('className' === name) name = 'class';
        if ('key' === name) ;else if ('ref' === name) {
            if (old) old(null);
            if (value) value(node);
        } else if ('class' === name && !isSvg) node.className = value || '';else if ('style' === name) {
            if (!value || 'string' == typeof value || 'string' == typeof old) node.style.cssText = value || '';
            if (value && 'object' == typeof value) {
                if ('string' != typeof old) for (var i in old) if (!(i in value)) node.style[i] = '';
                for (var i in value) node.style[i] = 'number' == typeof value[i] && !1 === IS_NON_DIMENSIONAL.test(i) ? value[i] + 'px' : value[i];
            }
        } else if ('dangerouslySetInnerHTML' === name) {
            if (value) node.innerHTML = value.__html || '';
        } else if ('o' == name[0] && 'n' == name[1]) {
            var useCapture = name !== (name = name.replace(/Capture$/, ''));
            name = name.toLowerCase().substring(2);
            if (value) {
                if (!old) node.addEventListener(name, eventProxy, useCapture);
            } else node.removeEventListener(name, eventProxy, useCapture);
            (node.__l || (node.__l = {}))[name] = value;
        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {
            setProperty(node, name, null == value ? '' : value);
            if (null == value || !1 === value) node.removeAttribute(name);
        } else {
            var ns = isSvg && name !== (name = name.replace(/^xlink\:?/, ''));
            if (null == value || !1 === value) {
                if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
            } else if ('function' != typeof value) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
        }
    }
    function setProperty(node, name, value) {
        try {
            node[name] = value;
        } catch (e) {}
    }
    function eventProxy(e) {
        return this.__l[e.type](options.event && options.event(e) || e);
    }
    function flushMounts() {
        var c;
        while (c = mounts.pop()) {
            if (options.afterMount) options.afterMount(c);
            if (c.componentDidMount) c.componentDidMount();
        }
    }
    function diff(dom, vnode, context, mountAll, parent, componentRoot) {
        if (!diffLevel++) {
            isSvgMode = null != parent && void 0 !== parent.ownerSVGElement;
            hydrating = null != dom && !('__preactattr_' in dom);
        }
        var ret = idiff(dom, vnode, context, mountAll, componentRoot);
        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
        if (! --diffLevel) {
            hydrating = !1;
            if (!componentRoot) flushMounts();
        }
        return ret;
    }
    function idiff(dom, vnode, context, mountAll, componentRoot) {
        var out = dom,
            prevSvgMode = isSvgMode;
        if (null == vnode || 'boolean' == typeof vnode) vnode = '';
        if ('string' == typeof vnode || 'number' == typeof vnode) {
            if (dom && void 0 !== dom.splitText && dom.parentNode && (!dom._component || componentRoot)) {
                if (dom.nodeValue != vnode) dom.nodeValue = vnode;
            } else {
                out = document.createTextNode(vnode);
                if (dom) {
                    if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
                    recollectNodeTree(dom, !0);
                }
            }
            out.__preactattr_ = !0;
            return out;
        }
        var vnodeName = vnode.nodeName;
        if ('function' == typeof vnodeName) return buildComponentFromVNode(dom, vnode, context, mountAll);
        isSvgMode = 'svg' === vnodeName ? !0 : 'foreignObject' === vnodeName ? !1 : isSvgMode;
        vnodeName = String(vnodeName);
        if (!dom || !isNamedNode(dom, vnodeName)) {
            out = createNode(vnodeName, isSvgMode);
            if (dom) {
                while (dom.firstChild) out.appendChild(dom.firstChild);
                if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
                recollectNodeTree(dom, !0);
            }
        }
        var fc = out.firstChild,
            props = out.__preactattr_,
            vchildren = vnode.children;
        if (null == props) {
            props = out.__preactattr_ = {};
            for (var a = out.attributes, i = a.length; i--;) props[a[i].name] = a[i].value;
        }
        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && null != fc && void 0 !== fc.splitText && null == fc.nextSibling) {
            if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
        } else if (vchildren && vchildren.length || null != fc) innerDiffNode(out, vchildren, context, mountAll, hydrating || null != props.dangerouslySetInnerHTML);
        diffAttributes(out, vnode.attributes, props);
        isSvgMode = prevSvgMode;
        return out;
    }
    function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
        var j,
            c,
            f,
            vchild,
            child,
            originalChildren = dom.childNodes,
            children = [],
            keyed = {},
            keyedLen = 0,
            min = 0,
            len = originalChildren.length,
            childrenLen = 0,
            vlen = vchildren ? vchildren.length : 0;
        if (0 !== len) for (var i = 0; i < len; i++) {
            var _child = originalChildren[i],
                props = _child.__preactattr_,
                key = vlen && props ? _child._component ? _child._component.__k : props.key : null;
            if (null != key) {
                keyedLen++;
                keyed[key] = _child;
            } else if (props || (void 0 !== _child.splitText ? isHydrating ? _child.nodeValue.trim() : !0 : isHydrating)) children[childrenLen++] = _child;
        }
        if (0 !== vlen) for (var i = 0; i < vlen; i++) {
            vchild = vchildren[i];
            child = null;
            var key = vchild.key;
            if (null != key) {
                if (keyedLen && void 0 !== keyed[key]) {
                    child = keyed[key];
                    keyed[key] = void 0;
                    keyedLen--;
                }
            } else if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) if (void 0 !== children[j] && isSameNodeType(c = children[j], vchild, isHydrating)) {
                child = c;
                children[j] = void 0;
                if (j === childrenLen - 1) childrenLen--;
                if (j === min) min++;
                break;
            }
            child = idiff(child, vchild, context, mountAll);
            f = originalChildren[i];
            if (child && child !== dom && child !== f) if (null == f) dom.appendChild(child);else if (child === f.nextSibling) removeNode(f);else dom.insertBefore(child, f);
        }
        if (keyedLen) for (var i in keyed) if (void 0 !== keyed[i]) recollectNodeTree(keyed[i], !1);
        while (min <= childrenLen) if (void 0 !== (child = children[childrenLen--])) recollectNodeTree(child, !1);
    }
    function recollectNodeTree(node, unmountOnly) {
        var component = node._component;
        if (component) unmountComponent(component);else {
            if (null != node.__preactattr_ && node.__preactattr_.ref) node.__preactattr_.ref(null);
            if (!1 === unmountOnly || null == node.__preactattr_) removeNode(node);
            removeChildren(node);
        }
    }
    function removeChildren(node) {
        node = node.lastChild;
        while (node) {
            var next = node.previousSibling;
            recollectNodeTree(node, !0);
            node = next;
        }
    }
    function diffAttributes(dom, attrs, old) {
        var name;
        for (name in old) if ((!attrs || null == attrs[name]) && null != old[name]) setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode);
        for (name in attrs) if (!('children' === name || 'innerHTML' === name || name in old && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
    }
    function collectComponent(component) {
        var name = component.constructor.name;
        (components[name] || (components[name] = [])).push(component);
    }
    function createComponent(Ctor, props, context) {
        var inst,
            list = components[Ctor.name];
        if (Ctor.prototype && Ctor.prototype.render) {
            inst = new Ctor(props, context);
            Component.call(inst, props, context);
        } else {
            inst = new Component(props, context);
            inst.constructor = Ctor;
            inst.render = doRender;
        }
        if (list) for (var i = list.length; i--;) if (list[i].constructor === Ctor) {
            inst.__b = list[i].__b;
            list.splice(i, 1);
            break;
        }
        return inst;
    }
    function doRender(props, state, context) {
        return this.constructor(props, context);
    }
    function setComponentProps(component, props, opts, context, mountAll) {
        if (!component.__x) {
            component.__x = !0;
            if (component.__r = props.ref) delete props.ref;
            if (component.__k = props.key) delete props.key;
            if (!component.base || mountAll) {
                if (component.componentWillMount) component.componentWillMount();
            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
            if (context && context !== component.context) {
                if (!component.__c) component.__c = component.context;
                component.context = context;
            }
            if (!component.__p) component.__p = component.props;
            component.props = props;
            component.__x = !1;
            if (0 !== opts) if (1 === opts || !1 !== options.syncComponentUpdates || !component.base) renderComponent(component, 1, mountAll);else enqueueRender(component);
            if (component.__r) component.__r(component);
        }
    }
    function renderComponent(component, opts, mountAll, isChild) {
        if (!component.__x) {
            var rendered,
                inst,
                cbase,
                props = component.props,
                state = component.state,
                context = component.context,
                previousProps = component.__p || props,
                previousState = component.__s || state,
                previousContext = component.__c || context,
                isUpdate = component.base,
                nextBase = component.__b,
                initialBase = isUpdate || nextBase,
                initialChildComponent = component._component,
                skip = !1;
            if (isUpdate) {
                component.props = previousProps;
                component.state = previousState;
                component.context = previousContext;
                if (2 !== opts && component.shouldComponentUpdate && !1 === component.shouldComponentUpdate(props, state, context)) skip = !0;else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
                component.props = props;
                component.state = state;
                component.context = context;
            }
            component.__p = component.__s = component.__c = component.__b = null;
            component.__d = !1;
            if (!skip) {
                rendered = component.render(props, state, context);
                if (component.getChildContext) context = extend(extend({}, context), component.getChildContext());
                var toUnmount,
                    base,
                    childComponent = rendered && rendered.nodeName;
                if ('function' == typeof childComponent) {
                    var childProps = getNodeProps(rendered);
                    inst = initialChildComponent;
                    if (inst && inst.constructor === childComponent && childProps.key == inst.__k) setComponentProps(inst, childProps, 1, context, !1);else {
                        toUnmount = inst;
                        component._component = inst = createComponent(childComponent, childProps, context);
                        inst.__b = inst.__b || nextBase;
                        inst.__u = component;
                        setComponentProps(inst, childProps, 0, context, !1);
                        renderComponent(inst, 1, mountAll, !0);
                    }
                    base = inst.base;
                } else {
                    cbase = initialBase;
                    toUnmount = initialChildComponent;
                    if (toUnmount) cbase = component._component = null;
                    if (initialBase || 1 === opts) {
                        if (cbase) cbase._component = null;
                        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);
                    }
                }
                if (initialBase && base !== initialBase && inst !== initialChildComponent) {
                    var baseParent = initialBase.parentNode;
                    if (baseParent && base !== baseParent) {
                        baseParent.replaceChild(base, initialBase);
                        if (!toUnmount) {
                            initialBase._component = null;
                            recollectNodeTree(initialBase, !1);
                        }
                    }
                }
                if (toUnmount) unmountComponent(toUnmount);
                component.base = base;
                if (base && !isChild) {
                    var componentRef = component,
                        t = component;
                    while (t = t.__u) (componentRef = t).base = base;
                    base._component = componentRef;
                    base._componentConstructor = componentRef.constructor;
                }
            }
            if (!isUpdate || mountAll) mounts.unshift(component);else if (!skip) {
                if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
                if (options.afterUpdate) options.afterUpdate(component);
            }
            if (null != component.__h) while (component.__h.length) component.__h.pop().call(component);
            if (!diffLevel && !isChild) flushMounts();
        }
    }
    function buildComponentFromVNode(dom, vnode, context, mountAll) {
        var c = dom && dom._component,
            originalComponent = c,
            oldDom = dom,
            isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
            isOwner = isDirectOwner,
            props = getNodeProps(vnode);
        while (c && !isOwner && (c = c.__u)) isOwner = c.constructor === vnode.nodeName;
        if (c && isOwner && (!mountAll || c._component)) {
            setComponentProps(c, props, 3, context, mountAll);
            dom = c.base;
        } else {
            if (originalComponent && !isDirectOwner) {
                unmountComponent(originalComponent);
                dom = oldDom = null;
            }
            c = createComponent(vnode.nodeName, props, context);
            if (dom && !c.__b) {
                c.__b = dom;
                oldDom = null;
            }
            setComponentProps(c, props, 1, context, mountAll);
            dom = c.base;
            if (oldDom && dom !== oldDom) {
                oldDom._component = null;
                recollectNodeTree(oldDom, !1);
            }
        }
        return dom;
    }
    function unmountComponent(component) {
        if (options.beforeUnmount) options.beforeUnmount(component);
        var base = component.base;
        component.__x = !0;
        if (component.componentWillUnmount) component.componentWillUnmount();
        component.base = null;
        var inner = component._component;
        if (inner) unmountComponent(inner);else if (base) {
            if (base.__preactattr_ && base.__preactattr_.ref) base.__preactattr_.ref(null);
            component.__b = base;
            removeNode(base);
            collectComponent(component);
            removeChildren(base);
        }
        if (component.__r) component.__r(null);
    }
    function Component(props, context) {
        this.__d = !0;
        this.context = context;
        this.props = props;
        this.state = this.state || {};
    }
    function render(vnode, parent, merge) {
        return diff(merge, vnode, {}, !1, parent, !1);
    }
    var options = {};
    var stack = [];
    var EMPTY_CHILDREN = [];
    var defer = 'function' == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;
    var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    var items = [];
    var mounts = [];
    var diffLevel = 0;
    var isSvgMode = !1;
    var hydrating = !1;
    var components = {};
    extend(Component.prototype, {
        setState: function (state, callback) {
            var s = this.state;
            if (!this.__s) this.__s = extend({}, s);
            extend(s, 'function' == typeof state ? state(s, this.props) : state);
            if (callback) (this.__h = this.__h || []).push(callback);
            enqueueRender(this);
        },
        forceUpdate: function (callback) {
            if (callback) (this.__h = this.__h || []).push(callback);
            renderComponent(this, 2);
        },
        render: function () {}
    });
    var preact = {
        h: h,
        createElement: h,
        cloneElement: cloneElement,
        Component: Component,
        render: render,
        rerender: rerender,
        options: options
    };
    if ('undefined' != typeof $m['preact']) $m['preact'].exports = preact;else self.preact = preact;
}();
/*≠≠ node_modules/preact/dist/preact.js ≠≠*/


/*== node_modules/object-assign/index.js ==*/
$m['object-assign'] = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */
var objectassign__getOwnPropertySymbols = Object.getOwnPropertySymbols;
var objectassign__hasOwnProperty = Object.prototype.hasOwnProperty;
var objectassign__propIsEnumerable = Object.prototype.propertyIsEnumerable;

function objectassign__toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function objectassign__shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

$m['object-assign'].exports = objectassign__shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = objectassign__toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (objectassign__hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (objectassign__getOwnPropertySymbols) {
			symbols = objectassign__getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (objectassign__propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};
/*≠≠ node_modules/object-assign/index.js ≠≠*/


/*== node_modules/fbjs/lib/invariant.js ==*/
$m['fbjs/lib/invariant'] = { exports: {} };
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var fbjslibinvariant__validateFormat = function validateFormat(format) {};

if ('development' !== 'production') {
  fbjslibinvariant__validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function fbjslibinvariant__invariant(condition, format, a, b, c, d, e, f) {
  fbjslibinvariant__validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

$m['fbjs/lib/invariant'].exports = fbjslibinvariant__invariant;
/*≠≠ node_modules/fbjs/lib/invariant.js ≠≠*/


/*== node_modules/prop-types/factoryWithThrowingShims.js ==*/
$m['prop-types/factoryWithThrowingShims'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var proptypesfactoryWithThrowingShims__emptyFunction = $m['fbjs/lib/emptyFunction'].exports;
var proptypesfactoryWithThrowingShims__invariant = $m['fbjs/lib/invariant'].exports;
var proptypesfactoryWithThrowingShims__ReactPropTypesSecret = $m['prop-types/lib/ReactPropTypesSecret'].exports;

$m['prop-types/factoryWithThrowingShims'].exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === proptypesfactoryWithThrowingShims__ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    proptypesfactoryWithThrowingShims__invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = proptypesfactoryWithThrowingShims__emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};
/*≠≠ node_modules/prop-types/factoryWithThrowingShims.js ≠≠*/


/*== node_modules/fbjs/lib/warning.js ==*/
$m['fbjs/lib/warning'] = { exports: {} };
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var fbjslibwarning__emptyFunction = $m['fbjs/lib/emptyFunction'].exports;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var fbjslibwarning__warning = fbjslibwarning__emptyFunction;

if ('development' !== 'production') {
  var fbjslibwarning__printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  fbjslibwarning__warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      fbjslibwarning__printWarning.apply(undefined, [format].concat(args));
    }
  };
}

$m['fbjs/lib/warning'].exports = fbjslibwarning__warning;
/*≠≠ node_modules/fbjs/lib/warning.js ≠≠*/


/*== node_modules/prop-types/checkPropTypes.js ==*/
$m['prop-types/checkPropTypes'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if ('development' !== 'production') {
  var proptypescheckPropTypes__invariant = $m['fbjs/lib/invariant'].exports;
  var proptypescheckPropTypes__warning = $m['fbjs/lib/warning'].exports;
  var proptypescheckPropTypes__ReactPropTypesSecret = $m['prop-types/lib/ReactPropTypesSecret'].exports;
  var proptypescheckPropTypes__loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function proptypescheckPropTypes__checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if ('development' !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          proptypescheckPropTypes__invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, proptypescheckPropTypes__ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        proptypescheckPropTypes__warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in proptypescheckPropTypes__loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          proptypescheckPropTypes__loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          proptypescheckPropTypes__warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

$m['prop-types/checkPropTypes'].exports = proptypescheckPropTypes__checkPropTypes;
/*≠≠ node_modules/prop-types/checkPropTypes.js ≠≠*/


/*== node_modules/prop-types/factoryWithTypeCheckers.js ==*/
$m['prop-types/factoryWithTypeCheckers'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var proptypesfactoryWithTypeCheckers__emptyFunction = $m['fbjs/lib/emptyFunction'].exports;
var proptypesfactoryWithTypeCheckers__invariant = $m['fbjs/lib/invariant'].exports;
var proptypesfactoryWithTypeCheckers__warning = $m['fbjs/lib/warning'].exports;

var proptypesfactoryWithTypeCheckers__ReactPropTypesSecret = $m['prop-types/lib/ReactPropTypesSecret'].exports;
var proptypesfactoryWithTypeCheckers__checkPropTypes = $m['prop-types/checkPropTypes'].exports;

$m['prop-types/factoryWithTypeCheckers'].exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if ('development' !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== proptypesfactoryWithTypeCheckers__ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          proptypesfactoryWithTypeCheckers__invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
        } else if ('development' !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            proptypesfactoryWithTypeCheckers__warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName);
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(proptypesfactoryWithTypeCheckers__emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', proptypesfactoryWithTypeCheckers__ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      'development' !== 'production' ? proptypesfactoryWithTypeCheckers__warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return proptypesfactoryWithTypeCheckers__emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, proptypesfactoryWithTypeCheckers__ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      'development' !== 'production' ? proptypesfactoryWithTypeCheckers__warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return proptypesfactoryWithTypeCheckers__emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        proptypesfactoryWithTypeCheckers__warning(false, 'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' + 'received %s at index %s.', getPostfixForTypeWarning(checker), i);
        return proptypesfactoryWithTypeCheckers__emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, proptypesfactoryWithTypeCheckers__ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, proptypesfactoryWithTypeCheckers__ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = proptypesfactoryWithTypeCheckers__checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};
/*≠≠ node_modules/prop-types/factoryWithTypeCheckers.js ≠≠*/


/*== node_modules/prop-types/index.js ==*/
$m['prop-types'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if ('development' !== 'production') {
  var proptypes__REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var proptypes__isValidElement = function (object) {
    return typeof object === 'object' && object !== null && object.$$typeof === proptypes__REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var proptypes__throwOnDirectAccess = true;
  $m['prop-types'].exports = $m['prop-types/factoryWithTypeCheckers'].exports(proptypes__isValidElement, proptypes__throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  $m['prop-types'].exports = $m['prop-types/factoryWithThrowingShims'].exports();
}
/*≠≠ node_modules/prop-types/index.js ≠≠*/


/*== node_modules/@yr/component/Component.js ==*/
$m['@yr/component/Component'] = { exports: {} };

var yrcomponentComponent___require = $m['preact'].exports,
    yrcomponentComponent__PreactComponent = yrcomponentComponent___require.Component;

var yrcomponentComponent__assign = $m['object-assign'].exports;

var yrcomponentComponent__Component = function (_PreactComponent) {
  babelHelpers.inherits(Component, _PreactComponent);

  /**
   * Constructor
   * @param {Object} props
   * @param {Object} context
   */
  function Component(props, context) {
    babelHelpers.classCallCheck(this, Component);

    // Set up initial state
    var _this = babelHelpers.possibleConstructorReturn(this, _PreactComponent.call(this, props, context));

    _this.state = yrcomponentComponent__assign({}, _this.__state);
    // Autobind mixin methods
    if (_this.__bindableMethods) {
      _this.__bindableMethods.forEach(function (method) {
        _this[method] = _this[method].bind(_this);
      });
    }

    // Call pseudo constructor
    if (_this.init !== undefined) {
      _this.init(props, context);
    }
    return _this;
  }

  /**
   * React: render
   * @returns {React}
   */

  Component.prototype.render = function render() {
    return this.__render(this.props, this.state, this.context);
  };

  return Component;
}(yrcomponentComponent__PreactComponent);

yrcomponentComponent__Component.contextTypes = {};

$m['@yr/component/Component'].exports = yrcomponentComponent__Component;
/*≠≠ node_modules/@yr/component/Component.js ≠≠*/


/*== node_modules/@yr/component/index.js ==*/
$m['@yr/component'] = { exports: {} };

/**
 * A factory utility for creating Preact components
 * https://github.com/yr/component
 * @copyright Yr
 * @license MIT
 */

var yrcomponent___require = $m['preact'].exports,
    yrcomponent__render = yrcomponent___require.render,
    yrcomponent__createElement = yrcomponent___require.createElement;

var yrcomponent___require2 = {},
    yrcomponent__serverRender = yrcomponent___require2.render;

var yrcomponent__assign = $m['object-assign'].exports;
var yrcomponent__Component = $m['@yr/component/Component'].exports;
var yrcomponent__PropTypes = $m['prop-types'].exports;
var yrcomponent__runtime = $m['@yr/runtime'].exports;

var yrcomponent__STATIC_KEYS = ['displayName', 'defaultProps', 'propTypes'];
var yrcomponent__RESERVED_KEYS = yrcomponent__STATIC_KEYS.concat(['componentWillUnmount', 'render', 'state']);

$m['@yr/component'].exports = {
  Component: yrcomponent__Component,
  define: yrcomponent__define,
  el: yrcomponent__createElement,
  PropTypes: yrcomponent__PropTypes,
  render: yrcomponent__runtime.isServer ? yrcomponent__serverRender : yrcomponent__render
};

/**
 * Convert 'definition' into a renderable component definition
 * Always returns class-based definition if 'preferStateless' is "false",
 * otherwise returns stateless function if server or no state/lifecycle methods defined
 * @param {Object} definition
 * @param {Boolean} preferStateless
 * @returns {Class|Function}
 */
function yrcomponent__define(definition) {
  var preferStateless = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (definition === undefined || definition.render === undefined) {
    throw Error('a component definition requires a "render" function');
  }

  var defaultProps = definition.defaultProps || {};
  var isStateless = yrcomponent__shouldBeStateless(definition, preferStateless);
  var propTypes = definition.propTypes || {};
  var spec = {
    __bindableMethods: [],
    __render: definition.render,
    __state: definition.state !== undefined ? definition.state : {}
  };

  for (var prop in definition) {
    if (!~yrcomponent__RESERVED_KEYS.indexOf(prop)) {
      var value = definition[prop];

      if (!isStateless && typeof value === 'function') {
        spec.__bindableMethods.push(prop);
      }
      spec[prop] = value;
    }
  }

  if (isStateless) {
    spec.render = function renderStateless(props, context) {
      return this.__render(props, this.__state, context);
    }.bind(spec);
    spec.render.__isStateless = true;
    spec.render.displayName = definition.displayName || '<statelessComponent>';
    spec.render.defaultProps = defaultProps;
    spec.render.propTypes = propTypes;
    if ('getChildContext' in definition) {
      spec.render.childContextTypes = yrcomponent__Component.contextTypes;
    } else {
      spec.render.contextTypes = yrcomponent__Component.contextTypes;
    }
    return spec.render;
  }

  var comp = function (_Component) {
    babelHelpers.inherits(comp, _Component);

    function comp() {
      babelHelpers.classCallCheck(this, comp);
      return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    return comp;
  }(yrcomponent__Component);

  // Handle static class properties
  comp.displayName = definition.displayName || '<component>';
  comp.defaultProps = defaultProps;
  comp.propTypes = propTypes;
  if ('getChildContext' in definition) {
    comp.childContextTypes = yrcomponent__Component.contextTypes;
  }

  // Copy to comp prototype
  yrcomponent__assign(comp.prototype, spec);

  return comp;
}

/**
 * Determine if 'definition' is stateless
 * @param {Object} definition
 * @param {Boolean} preferStateless
 * @returns {Boolean}
 */
function yrcomponent__shouldBeStateless(definition, preferStateless) {
  if (!preferStateless) {
    return false;
  }

  if (yrcomponent__runtime.isServer && definition.getChildContext === undefined) {
    return true;
  }

  // Not stateless if contains anything more than render and static properties
  for (var prop in definition) {
    if (prop !== 'render' && !~yrcomponent__STATIC_KEYS.indexOf(prop)) {
      return false;
    }
  }

  return true;
}
/*≠≠ node_modules/@yr/component/index.js ≠≠*/


/*== src/lib/utils.js ==*/
$m['src/lib/utils'] = { exports: {} };
var srclibutils___require = $m['@yr/component'].exports,
    srclibutils__el = srclibutils___require.el;

var srclibutils__MAX_WIDTH = 100;

$m['src/lib/utils'].exports = {
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
    opts.class = '' + opts.primitive + opts.variation + '-primitive';

    return opts;
  },


  /**
   * Retrieve React 'use' element for 'link'
   * @param {String} link
   * @param {Object} options
   * @returns {React}
   */
  getElement: function getElement(link, options) {
    return srclibutils__el('use', {
      className: options.class,
      'xlink:href': link,
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      transform: options.flip ? 'translate(' + (srclibutils__MAX_WIDTH * options.scaleX + options.x) + ',' + options.scaleY * options.y + ') scale(' + -1 * options.scaleX + ', ' + options.scaleY + ')' : 'translate(' + options.x + ',' + options.y + ') scale(' + options.scaleX + ',' + options.scaleY + ')'
    });
  }
};
/*≠≠ src/lib/utils.js ≠≠*/


/*== src/lib/primitives/precipitation.js ==*/
$m['src/lib/primitives/precipitation'] = { exports: {} };

var srclibprimitivesprecipitation__utils = $m['src/lib/utils'].exports;

/**
 * Render precipitation svg primitive
 * @param {Object} options
 * @returns {String}
 */
$m['src/lib/primitives/precipitation'].exports = function render(options) {
  return srclibprimitivesprecipitation__utils.getElement('#' + options.primitive, options);
};
/*≠≠ src/lib/primitives/precipitation.js ≠≠*/


/*== src/lib/primitives/lightning.js ==*/
$m['src/lib/primitives/lightning'] = { exports: {} };

var srclibprimitiveslightning__utils = $m['src/lib/utils'].exports;

/**
 * Render lightning svg primitive
 * @param {Object} options
 * @returns {String}
 */
$m['src/lib/primitives/lightning'].exports = function render(options) {
  return srclibprimitiveslightning__utils.getElement('#lightning', options);
};
/*≠≠ src/lib/primitives/lightning.js ≠≠*/


/*== src/lib/primitives/fog.js ==*/
$m['src/lib/primitives/fog'] = { exports: {} };

var srclibprimitivesfog__utils = $m['src/lib/utils'].exports;

/**
 * Render fog svg primitive
 * @param {Object} options
 * @returns {String}
 */
$m['src/lib/primitives/fog'].exports = function render(options) {
  return srclibprimitivesfog__utils.getElement('#fog', options);
};
/*≠≠ src/lib/primitives/fog.js ≠≠*/


/*== src/lib/primitives/cloud.js ==*/
$m['src/lib/primitives/cloud'] = { exports: {} };

var srclibprimitivescloud__utils = $m['src/lib/utils'].exports;

/**
 * Render cloud svg primitive
 * @param {Object} options
 * @returns {String}
 */
$m['src/lib/primitives/cloud'].exports = function render(options) {
  return srclibprimitivescloud__utils.getElement('#cloud', options);
};
/*≠≠ src/lib/primitives/cloud.js ≠≠*/


/*== src/lib/primitives/celestial.js ==*/
$m['src/lib/primitives/celestial'] = { exports: {} };

var srclibprimitivescelestial__utils = $m['src/lib/utils'].exports;

/**
 * Render sun, winter sun, or moon svg primitive
 * @param {Object} options
 * @returns {String}
 */
$m['src/lib/primitives/celestial'].exports = function render() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return srclibprimitivescelestial__utils.getElement(options.primitive == 'moon' ? '#moon' : options.winter ? '#sunWinter' : '#sun', options);
};
/*≠≠ src/lib/primitives/celestial.js ≠≠*/


/*== src/lib/primitives/index.js ==*/
$m['src/lib/primitives/index'] = { exports: {} };

var srclibprimitivesindex__celestial = $m['src/lib/primitives/celestial'].exports;
var srclibprimitivesindex__cloud = $m['src/lib/primitives/cloud'].exports;
var srclibprimitivesindex__fog = $m['src/lib/primitives/fog'].exports;
var srclibprimitivesindex__lightning = $m['src/lib/primitives/lightning'].exports;
var srclibprimitivesindex__precipitation = $m['src/lib/primitives/precipitation'].exports;

$m['src/lib/primitives/index'].exports = {
  cloud: srclibprimitivesindex__cloud,
  fog: srclibprimitivesindex__fog,
  lightning: srclibprimitivesindex__lightning,
  moon: srclibprimitivesindex__celestial,
  raindrop: srclibprimitivesindex__precipitation,
  snowflake: srclibprimitivesindex__precipitation,
  sun: srclibprimitivesindex__celestial
};
/*≠≠ src/lib/primitives/index.js ≠≠*/


/*== node_modules/@yr/graphics-component/index.js ==*/
$m['@yr/graphics-component'] = { exports: {} };

/**
 * A base component for svg/img graphics
 * https://github.com/yr/graphics-component
 * @copyright Yr
 * @license MIT
 */

var yrgraphicscomponent___require = $m['@yr/component'].exports,
    yrgraphicscomponent__define = yrgraphicscomponent___require.define,
    yrgraphicscomponent__el = yrgraphicscomponent___require.el,
    yrgraphicscomponent__PropTypes = yrgraphicscomponent___require.PropTypes;

var yrgraphicscomponent__TYPE_IMG = 'img';
var yrgraphicscomponent__TYPE_SVG = 'svg';

$m['@yr/graphics-component'].exports = {
  TYPE_IMG: yrgraphicscomponent__TYPE_IMG,
  TYPE_SVG: yrgraphicscomponent__TYPE_SVG,

  /**
   * Instance factory
   * @param {Object} options
   * @returns {Function}
   */
  create: function create() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!('fallback' in options)) {
      options.fallback = true;
    }
    // Allow prefix in cases where id could be number (illegal DOM id)
    if (!('idPrefix' in options)) {
      options.idPrefix = '';
    }

    return yrgraphicscomponent__define({
      displayName: 'graphicsComponent',

      propTypes: {
        id: yrgraphicscomponent__PropTypes.string,
        renderInnerSvg: yrgraphicscomponent__PropTypes.func,
        rootImagePath: yrgraphicscomponent__PropTypes.string,
        type: yrgraphicscomponent__PropTypes.string
      },

      /**
       * React render
       * @param {Object} props
       * @param {Object} state
       * @returns {React}
       */
      render: function render() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var state = arguments[1];
        var _props$id = props.id,
            id = _props$id === undefined ? options.id : _props$id,
            _props$type = props.type,
            type = _props$type === undefined ? options.type || yrgraphicscomponent__TYPE_SVG : _props$type;

        if (!id) {
          return null;
        }

        var rootImagePath = props.rootImagePath || options.rootImagePath || '';

        if (rootImagePath && rootImagePath.charAt(rootImagePath.length - 1) !== '/') {
          rootImagePath += '/';
        }

        if (type === yrgraphicscomponent__TYPE_SVG) {
          var children = options.renderInnerSvg ? options.renderInnerSvg(id) : [yrgraphicscomponent__el('use', { 'xlink:href': '#' + options.idPrefix + id, x: 0, y: 0, width: 100, height: 100 })];

          if (!Array.isArray(children)) {
            children = [children];
          }
          if (options.fallback) {
            // https://css-tricks.com/a-complete-guide-to-svg-fallbacks/

            // The SVG <image> element is used to embed other image files within SVG. However, within HTML,
            // every browser tested recognizes <image> as a non-standard synonym for <img>.
            // In SVG, you specify the URL of the image file with the xlink:href attribute.
            // In HTML, you specify it with the src attribute.

            // In most browsers, therefore, it is sufficient to include an <image> tag with a
            // src attribute (pointing to your fallback image) inside your inline SVG: the old browsers
            // will download the fallback, the new browsers won't. Except for Internet Explorer, which
            // downloads the fallback image even when it doesn't display it.
            // The solution is to put a null xlink:href attribute on the element.
            children.push(yrgraphicscomponent__el('image', { src: '' + rootImagePath + id + '.png', 'xlink:href': '' }));
          }

          return yrgraphicscomponent__el('svg', {
            // Force redraw on change (fixes Safari svg <use> bug)
            key: id,
            children: children,
            x: '0',
            y: '0',
            height: options.height || '25px',
            // Fix for IE tabbing
            focusable: 'false',
            width: options.width || '25px',
            viewBox: '0 0 100 100'
          });
        } else if (type === yrgraphicscomponent__TYPE_IMG) {
          return yrgraphicscomponent__el('img', { src: '' + rootImagePath + id + '.png' });
        }
      }
    });
  }
};
/*≠≠ node_modules/@yr/graphics-component/index.js ≠≠*/


/*== src/lib/index.js ==*/
$m['src/lib/index'] = { exports: {} };

/**
 * Yr weather symbols
 * https://github.com/yr/weather-symbols
 * @copyright Yr
 * @license MIT
 */

var srclibindex__graphicsComponent = $m['@yr/graphics-component'].exports;
var srclibindex__primitives = $m['src/lib/primitives/index'].exports;
var srclibindex__recipes = $m['src/lib/recipes'].exports;
var srclibindex__utils = $m['src/lib/utils'].exports;

$m['src/lib/index'].exports = {
  /**
   * Instance factory
   * @param {Object} options
   * @returns {Function}
   */
  create: function create() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    options.renderInnerSvg = srclibindex__renderInnerSvg;

    return srclibindex__graphicsComponent.create(options);
  }
};

/**
 * Render inner svg string for 'id'
 * @param {String} id
 * @returns {String}
 */
function srclibindex__renderInnerSvg(id) {
  var recipe = srclibindex__recipes[id];

  if (!recipe) return null;

  return recipe.map(function (item) {
    var options = srclibindex__utils.parse(item);

    return srclibindex__primitives[options.primitive](options);
  });
}
/*≠≠ src/lib/index.js ≠≠*/


/*== node_modules/@yr/graphics-component/previewGrid.js ==*/
$m['@yr/graphics-component/previewGrid'] = { exports: {} };

var yrgraphicscomponentpreviewGrid___require = $m['@yr/component'].exports,
    yrgraphicscomponentpreviewGrid__define = yrgraphicscomponentpreviewGrid___require.define,
    yrgraphicscomponentpreviewGrid__el = yrgraphicscomponentpreviewGrid___require.el;

$m['@yr/graphics-component/previewGrid'].exports = yrgraphicscomponentpreviewGrid__define({
  render: function render(props) {
    return yrgraphicscomponentpreviewGrid__el('div', {
      children: props.ids.map(function (id) {
        return yrgraphicscomponentpreviewGrid__el('div', { className: 'graphic', id: 'graphic-' + id }, yrgraphicscomponentpreviewGrid__el('h2', {}, id), yrgraphicscomponentpreviewGrid__el('span', { className: 'graphics-group' }, props.graphic({ id: id, type: 'svg', fallback: true }), yrgraphicscomponentpreviewGrid__el('h3', {}, 'svg')), yrgraphicscomponentpreviewGrid__el('span', { className: 'graphics-group' }, props.graphic({ id: id, type: 'img' }), yrgraphicscomponentpreviewGrid__el('h3', {}, 'png')));
      })
    });
  }
});
/*≠≠ node_modules/@yr/graphics-component/previewGrid.js ≠≠*/


/*== src/preview/preview.js ==*/
$m['src/preview/preview'] = { exports: {} };
var srcpreviewpreview___require = $m['@yr/component'].exports,
    srcpreviewpreview__render = srcpreviewpreview___require.render;

var srcpreviewpreview__grid = $m['@yr/graphics-component/previewGrid'].exports;
var srcpreviewpreview__recipes = $m['src/lib/recipes'].exports;
var srcpreviewpreview__symbolComponent = $m['src/lib/index'].exports;

var srcpreviewpreview__symbol = srcpreviewpreview__symbolComponent.create({ rootImagePath: 'png' });

srcpreviewpreview__render(srcpreviewpreview__grid({
  ids: Object.keys(srcpreviewpreview__recipes),
  graphic: srcpreviewpreview__symbol
}), document.getElementById('viewport'));
/*≠≠ src/preview/preview.js ≠≠*/
})()