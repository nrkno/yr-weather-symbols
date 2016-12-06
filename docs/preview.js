'use strict';

/** BUDDY BUILT **/

if ('undefined' === typeof self) var self = this;
if ('undefined' === typeof global) var global = self;
if ('undefined' === typeof process) var process = { env: {} };
var $m = self.$m = self.$m || {};
if ('browser' != 'browser') {
  var $req = require;
  require = function buddyRequire (id) {
    if (!$m[id]) return $req(id);
    if ('function' == typeof $m[id]) $m[id]();
    return $m[id].exports;
  };
} else {
  self.require = self.require || function buddyRequire (id) {
    if ($m[id]) {
      if ('function' == typeof $m[id]) $m[id]();
      return $m[id].exports;
    }

    if (process.env.NODE_ENV == 'development') {
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


/*== src/js/lib/recipes.js ==*/
$m['src/js/lib/recipes'] = { exports: {} };

var srcjslibrecipes__base = {
  sun1: [{
    primitive: 'sun',
    x: 5,
    y: 0
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
    y: 5
  }],
  moon2: [{
    primitive: 'moon',
    x: 5,
    y: 5
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

$m['src/js/lib/recipes'].exports = {
  '01d': srcjslibrecipes__base.sun1,
  '02d': srcjslibrecipes__base.sun2.concat(srcjslibrecipes__base['02']),
  '03d': srcjslibrecipes__base.sun3.concat(srcjslibrecipes__base['03']),
  '40d': srcjslibrecipes__base.sun3.concat(srcjslibrecipes__base['40']),
  '05d': srcjslibrecipes__base.sun3.concat(srcjslibrecipes__base['05']),
  '41d': srcjslibrecipes__base.sun3.concat(srcjslibrecipes__base['41']),
  '42d': srcjslibrecipes__base.sun3.concat(srcjslibrecipes__base['42']),
  '07d': srcjslibrecipes__base.sun3.concat(srcjslibrecipes__base['07']),
  '43d': srcjslibrecipes__base.sun3.concat(srcjslibrecipes__base['43']),
  '44d': srcjslibrecipes__base.sun3.concat(srcjslibrecipes__base['44']),
  '08d': srcjslibrecipes__base.sun3.concat(srcjslibrecipes__base['08']),
  '45d': srcjslibrecipes__base.sun3.concat(srcjslibrecipes__base['45']),
  '24d': srcjslibrecipes__base.sun3.concat(srcjslibrecipes__base['24']),
  '06d': srcjslibrecipes__base.sun3.concat(srcjslibrecipes__base['06']),
  '25d': srcjslibrecipes__base.sun3.concat(srcjslibrecipes__base['25']),
  '26d': srcjslibrecipes__base.sun3.concat(srcjslibrecipes__base['26']),
  '20d': srcjslibrecipes__base.sun3.concat(srcjslibrecipes__base['20']),
  '27d': srcjslibrecipes__base.sun3.concat(srcjslibrecipes__base['27']),
  '28d': srcjslibrecipes__base.sun3.concat(srcjslibrecipes__base['28']),
  '21d': srcjslibrecipes__base.sun3.concat(srcjslibrecipes__base['21']),
  '29d': srcjslibrecipes__base.sun3.concat(srcjslibrecipes__base['29']),

  '01m': srcjslibrecipes__base.sunWinter1,
  '02m': srcjslibrecipes__base.sunWinter2.concat(srcjslibrecipes__base['02']),
  '03m': srcjslibrecipes__base.sunWinter3.concat(srcjslibrecipes__base['03']),
  '40m': srcjslibrecipes__base.sunWinter3.concat(srcjslibrecipes__base['40']),
  '05m': srcjslibrecipes__base.sunWinter3.concat(srcjslibrecipes__base['05']),
  '41m': srcjslibrecipes__base.sunWinter3.concat(srcjslibrecipes__base['41']),
  '42m': srcjslibrecipes__base.sunWinter3.concat(srcjslibrecipes__base['42']),
  '07m': srcjslibrecipes__base.sunWinter3.concat(srcjslibrecipes__base['07']),
  '43m': srcjslibrecipes__base.sunWinter3.concat(srcjslibrecipes__base['43']),
  '44m': srcjslibrecipes__base.sunWinter3.concat(srcjslibrecipes__base['44']),
  '08m': srcjslibrecipes__base.sunWinter3.concat(srcjslibrecipes__base['08']),
  '45m': srcjslibrecipes__base.sunWinter3.concat(srcjslibrecipes__base['45']),
  '24m': srcjslibrecipes__base.sunWinter3.concat(srcjslibrecipes__base['24']),
  '06m': srcjslibrecipes__base.sunWinter3.concat(srcjslibrecipes__base['06']),
  '25m': srcjslibrecipes__base.sunWinter3.concat(srcjslibrecipes__base['25']),
  '26m': srcjslibrecipes__base.sunWinter3.concat(srcjslibrecipes__base['26']),
  '20m': srcjslibrecipes__base.sunWinter3.concat(srcjslibrecipes__base['20']),
  '27m': srcjslibrecipes__base.sunWinter3.concat(srcjslibrecipes__base['27']),
  '28m': srcjslibrecipes__base.sunWinter3.concat(srcjslibrecipes__base['28']),
  '21m': srcjslibrecipes__base.sunWinter3.concat(srcjslibrecipes__base['21']),
  '29m': srcjslibrecipes__base.sunWinter3.concat(srcjslibrecipes__base['29']),

  '01n': srcjslibrecipes__base.moon1,
  '02n': srcjslibrecipes__base.moon2.concat(srcjslibrecipes__base['02']),
  '03n': srcjslibrecipes__base.moon3.concat(srcjslibrecipes__base['03']),
  '40n': srcjslibrecipes__base.moon3.concat(srcjslibrecipes__base['40']),
  '05n': srcjslibrecipes__base.moon3.concat(srcjslibrecipes__base['05']),
  '41n': srcjslibrecipes__base.moon3.concat(srcjslibrecipes__base['41']),
  '42n': srcjslibrecipes__base.moon3.concat(srcjslibrecipes__base['42']),
  '07n': srcjslibrecipes__base.moon3.concat(srcjslibrecipes__base['07']),
  '43n': srcjslibrecipes__base.moon3.concat(srcjslibrecipes__base['43']),
  '44n': srcjslibrecipes__base.moon3.concat(srcjslibrecipes__base['44']),
  '08n': srcjslibrecipes__base.moon3.concat(srcjslibrecipes__base['08']),
  '45n': srcjslibrecipes__base.moon3.concat(srcjslibrecipes__base['45']),
  '24n': srcjslibrecipes__base.moon3.concat(srcjslibrecipes__base['24']),
  '06n': srcjslibrecipes__base.moon3.concat(srcjslibrecipes__base['06']),
  '25n': srcjslibrecipes__base.moon3.concat(srcjslibrecipes__base['25']),
  '26n': srcjslibrecipes__base.moon3.concat(srcjslibrecipes__base['26']),
  '20n': srcjslibrecipes__base.moon3.concat(srcjslibrecipes__base['20']),
  '27n': srcjslibrecipes__base.moon3.concat(srcjslibrecipes__base['27']),
  '28n': srcjslibrecipes__base.moon3.concat(srcjslibrecipes__base['28']),
  '21n': srcjslibrecipes__base.moon3.concat(srcjslibrecipes__base['21']),
  '29n': srcjslibrecipes__base.moon3.concat(srcjslibrecipes__base['29']),

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
  46: srcjslibrecipes__base['40'],
  '09': srcjslibrecipes__base['05'],
  10: srcjslibrecipes__base['41'],
  47: srcjslibrecipes__base['42'],
  12: srcjslibrecipes__base['07'],
  48: srcjslibrecipes__base['43'],
  49: srcjslibrecipes__base['44'],
  13: srcjslibrecipes__base['08'],
  50: srcjslibrecipes__base['45'],
  30: srcjslibrecipes__base['24'],
  22: srcjslibrecipes__base['06'],
  11: srcjslibrecipes__base['25'],
  31: srcjslibrecipes__base['26'],
  23: srcjslibrecipes__base['20'],
  32: srcjslibrecipes__base['27'],
  33: srcjslibrecipes__base['28'],
  14: srcjslibrecipes__base['21'],
  34: srcjslibrecipes__base['29']
};
/*≠≠ src/js/lib/recipes.js ≠≠*/


/*== node_modules/ms/index.js ==*/
$m['ms'] = { exports: {} };
/**
 * Helpers.
 */

var ms__s = 1000;
var ms__m = ms__s * 60;
var ms__h = ms__m * 60;
var ms__d = ms__h * 24;
var ms__y = ms__d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} options
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

$m['ms'].exports = function (val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return ms__parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? ms__fmtLong(val) : ms__fmtShort(val);
  }
  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function ms__parse(str) {
  str = String(str);
  if (str.length > 10000) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * ms__y;
    case 'days':
    case 'day':
    case 'd':
      return n * ms__d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * ms__h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * ms__m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * ms__s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function ms__fmtShort(ms) {
  if (ms >= ms__d) {
    return Math.round(ms / ms__d) + 'd';
  }
  if (ms >= ms__h) {
    return Math.round(ms / ms__h) + 'h';
  }
  if (ms >= ms__m) {
    return Math.round(ms / ms__m) + 'm';
  }
  if (ms >= ms__s) {
    return Math.round(ms / ms__s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function ms__fmtLong(ms) {
  return ms__plural(ms, ms__d, 'day') || ms__plural(ms, ms__h, 'hour') || ms__plural(ms, ms__m, 'minute') || ms__plural(ms, ms__s, 'second') || ms + ' ms';
}

/**
 * Pluralization helper.
 */

function ms__plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}
/*≠≠ node_modules/ms/index.js ≠≠*/


/*== node_modules/@yr/component/lib/dataTypes.js ==*/
$m['@yr/component/lib/dataTypes'] = { exports: {} };

$m['@yr/component/lib/dataTypes'].exports = {
  array: 'array',
  bool: 'bool',
  func: 'func',
  number: 'number',
  object: 'object',
  string: 'string',
  any: 'any',
  arrayOf: 'arrayOf',
  element: 'element',
  instanceOf: 'instanceOf',
  node: 'node',
  objectOf: 'objectOf',
  oneOf: 'oneOf',
  oneOfType: 'oneOfType',
  shape: 'shape'
};
/*≠≠ node_modules/@yr/component/lib/dataTypes.js ≠≠*/


/*== node_modules/preact/dist/preact.js ==*/
$m['preact'] = { exports: {} };
!function (global, factory) {
    'object' == typeof $m['preact'].exports && 'undefined' != typeof $m['preact'] ? factory($m['preact'].exports) : 'function' == typeof define && define.amd ? define(['exports'], factory) : factory(global.preact = global.preact || {});
}(undefined, function (exports) {
    function VNode(nodeName, attributes, children) {
        this.nodeName = nodeName;
        this.attributes = attributes;
        this.children = children;
        this.key = attributes && attributes.key;
    }
    function h(nodeName, attributes) {
        var lastSimple,
            child,
            simple,
            i,
            children = [];
        for (i = arguments.length; i-- > 2;) {
            stack.push(arguments[i]);
        }if (attributes && attributes.children) {
            if (!stack.length) stack.push(attributes.children);
            delete attributes.children;
        }
        while (stack.length) {
            if ((child = stack.pop()) instanceof Array) for (i = child.length; i--;) {
                stack.push(child[i]);
            } else if (null != child && child !== !1) {
                if ('number' == typeof child || child === !0) child = String(child);
                simple = 'string' == typeof child;
                if (simple && lastSimple) children[children.length - 1] += child;else {
                    children.push(child);
                    lastSimple = simple;
                }
            }
        }var p = new VNode(nodeName, attributes || void 0, children);
        if (options.vnode) options.vnode(p);
        return p;
    }
    function extend(obj, props) {
        if (props) for (var i in props) {
            obj[i] = props[i];
        }return obj;
    }
    function clone(obj) {
        return extend({}, obj);
    }
    function delve(obj, key) {
        for (var p = key.split('.'), i = 0; i < p.length && obj; i++) {
            obj = obj[p[i]];
        }return obj;
    }
    function isFunction(obj) {
        return 'function' == typeof obj;
    }
    function isString(obj) {
        return 'string' == typeof obj;
    }
    function hashToClassName(c) {
        var str = '';
        for (var prop in c) {
            if (c[prop]) {
                if (str) str += ' ';
                str += prop;
            }
        }return str;
    }
    function cloneElement(vnode, props) {
        return h(vnode.nodeName, extend(clone(vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
    }
    function createLinkedState(component, key, eventPath) {
        var path = key.split('.');
        return function (e) {
            var t = e && e.target || this,
                state = {},
                obj = state,
                v = isString(eventPath) ? delve(e, eventPath) : t.nodeName ? t.type.match(/^che|rad/) ? t.checked : t.value : e,
                i = 0;
            for (; i < path.length - 1; i++) {
                obj = obj[path[i]] || (obj[path[i]] = !i && component.state[path[i]] || {});
            }obj[path[i]] = v;
            component.setState(state);
        };
    }
    function enqueueRender(component) {
        if (!component._dirty && (component._dirty = !0) && 1 == items.push(component)) (options.debounceRendering || defer)(rerender);
    }
    function rerender() {
        var p,
            list = items;
        items = [];
        while (p = list.pop()) {
            if (p._dirty) renderComponent(p);
        }
    }
    function isFunctionalComponent(vnode) {
        var nodeName = vnode && vnode.nodeName;
        return nodeName && isFunction(nodeName) && !(nodeName.prototype && nodeName.prototype.render);
    }
    function buildFunctionalComponent(vnode, context) {
        return vnode.nodeName(getNodeProps(vnode), context || EMPTY);
    }
    function isSameNodeType(node, vnode) {
        if (isString(vnode)) return node instanceof Text;
        if (isString(vnode.nodeName)) return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
        if (isFunction(vnode.nodeName)) return (node._componentConstructor ? node._componentConstructor === vnode.nodeName : !0) || isFunctionalComponent(vnode);else ;
    }
    function isNamedNode(node, nodeName) {
        return node.normalizedNodeName === nodeName || toLowerCase(node.nodeName) === toLowerCase(nodeName);
    }
    function getNodeProps(vnode) {
        var props = clone(vnode.attributes);
        props.children = vnode.children;
        var defaultProps = vnode.nodeName.defaultProps;
        if (defaultProps) for (var i in defaultProps) {
            if (void 0 === props[i]) props[i] = defaultProps[i];
        }return props;
    }
    function removeNode(node) {
        var p = node.parentNode;
        if (p) p.removeChild(node);
    }
    function setAccessor(node, name, old, value, isSvg) {
        if ('className' === name) name = 'class';
        if ('class' === name && value && 'object' == typeof value) value = hashToClassName(value);
        if ('key' === name) ;else if ('class' === name && !isSvg) node.className = value || '';else if ('style' === name) {
            if (!value || isString(value) || isString(old)) node.style.cssText = value || '';
            if (value && 'object' == typeof value) {
                if (!isString(old)) for (var i in old) {
                    if (!(i in value)) node.style[i] = '';
                }for (var i in value) {
                    node.style[i] = 'number' == typeof value[i] && !NON_DIMENSION_PROPS[i] ? value[i] + 'px' : value[i];
                }
            }
        } else if ('dangerouslySetInnerHTML' === name) node.innerHTML = value && value.__html || '';else if ('o' == name[0] && 'n' == name[1]) {
            var l = node._listeners || (node._listeners = {});
            name = toLowerCase(name.substring(2));
            if (value) {
                if (!l[name]) node.addEventListener(name, eventProxy, !!NON_BUBBLING_EVENTS[name]);
            } else if (l[name]) node.removeEventListener(name, eventProxy, !!NON_BUBBLING_EVENTS[name]);
            l[name] = value;
        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {
            setProperty(node, name, null == value ? '' : value);
            if (null == value || value === !1) node.removeAttribute(name);
        } else {
            var ns = isSvg && name.match(/^xlink\:?(.+)/);
            if (null == value || value === !1) {
                if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1]));else node.removeAttribute(name);
            } else if ('object' != typeof value && !isFunction(value)) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1]), value);else node.setAttribute(name, value);
        }
    }
    function setProperty(node, name, value) {
        try {
            node[name] = value;
        } catch (e) {}
    }
    function eventProxy(e) {
        return this._listeners[e.type](options.event && options.event(e) || e);
    }
    function collectNode(node) {
        removeNode(node);
        if (node instanceof Element) {
            node._component = node._componentConstructor = null;
            var _name = node.normalizedNodeName || toLowerCase(node.nodeName);
            (nodes[_name] || (nodes[_name] = [])).push(node);
        }
    }
    function createNode(nodeName, isSvg) {
        var name = toLowerCase(nodeName),
            node = nodes[name] && nodes[name].pop() || (isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName));
        node.normalizedNodeName = name;
        return node;
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
            isSvgMode = parent instanceof SVGElement;
            hydrating = dom && !(ATTR_KEY in dom);
        }
        var ret = idiff(dom, vnode, context, mountAll);
        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
        if (! --diffLevel) {
            hydrating = !1;
            if (!componentRoot) flushMounts();
        }
        return ret;
    }
    function idiff(dom, vnode, context, mountAll) {
        var originalAttributes = vnode && vnode.attributes;
        while (isFunctionalComponent(vnode)) {
            vnode = buildFunctionalComponent(vnode, context);
        }if (null == vnode) vnode = '';
        if (isString(vnode)) {
            if (dom && dom instanceof Text) {
                if (dom.nodeValue != vnode) dom.nodeValue = vnode;
            } else {
                if (dom) recollectNodeTree(dom);
                dom = document.createTextNode(vnode);
            }
            dom[ATTR_KEY] = !0;
            return dom;
        }
        if (isFunction(vnode.nodeName)) return buildComponentFromVNode(dom, vnode, context, mountAll);
        var out = dom,
            nodeName = String(vnode.nodeName),
            prevSvgMode = isSvgMode,
            vchildren = vnode.children;
        isSvgMode = 'svg' === nodeName ? !0 : 'foreignObject' === nodeName ? !1 : isSvgMode;
        if (!dom) out = createNode(nodeName, isSvgMode);else if (!isNamedNode(dom, nodeName)) {
            out = createNode(nodeName, isSvgMode);
            while (dom.firstChild) {
                out.appendChild(dom.firstChild);
            }if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
            recollectNodeTree(dom);
        }
        var fc = out.firstChild,
            props = out[ATTR_KEY];
        if (!props) {
            out[ATTR_KEY] = props = {};
            for (var a = out.attributes, i = a.length; i--;) {
                props[a[i].name] = a[i].value;
            }
        }
        diffAttributes(out, vnode.attributes, props);
        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && fc && fc instanceof Text && !fc.nextSibling) {
            if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
        } else if (vchildren && vchildren.length || fc) innerDiffNode(out, vchildren, context, mountAll);
        if (originalAttributes && 'function' == typeof originalAttributes.ref) (props.ref = originalAttributes.ref)(out);
        isSvgMode = prevSvgMode;
        return out;
    }
    function innerDiffNode(dom, vchildren, context, mountAll) {
        var j,
            c,
            vchild,
            child,
            originalChildren = dom.childNodes,
            children = [],
            keyed = {},
            keyedLen = 0,
            min = 0,
            len = originalChildren.length,
            childrenLen = 0,
            vlen = vchildren && vchildren.length;
        if (len) for (var i = 0; i < len; i++) {
            var _child = originalChildren[i],
                props = _child[ATTR_KEY],
                key = vlen ? (c = _child._component) ? c.__key : props ? props.key : null : null;
            if (null != key) {
                keyedLen++;
                keyed[key] = _child;
            } else if (hydrating || props) children[childrenLen++] = _child;
        }
        if (vlen) for (var i = 0; i < vlen; i++) {
            vchild = vchildren[i];
            child = null;
            var key = vchild.key;
            if (null != key) {
                if (keyedLen && key in keyed) {
                    child = keyed[key];
                    keyed[key] = void 0;
                    keyedLen--;
                }
            } else if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) {
                c = children[j];
                if (c && isSameNodeType(c, vchild)) {
                    child = c;
                    children[j] = void 0;
                    if (j === childrenLen - 1) childrenLen--;
                    if (j === min) min++;
                    break;
                }
            }
            child = idiff(child, vchild, context, mountAll);
            if (child && child !== dom) if (i >= len) dom.appendChild(child);else if (child !== originalChildren[i]) {
                if (child === originalChildren[i + 1]) removeNode(originalChildren[i]);
                dom.insertBefore(child, originalChildren[i] || null);
            }
        }
        if (keyedLen) for (var i in keyed) {
            if (keyed[i]) recollectNodeTree(keyed[i]);
        }while (min <= childrenLen) {
            child = children[childrenLen--];
            if (child) recollectNodeTree(child);
        }
    }
    function recollectNodeTree(node, unmountOnly) {
        var component = node._component;
        if (component) unmountComponent(component, !unmountOnly);else {
            if (node[ATTR_KEY] && node[ATTR_KEY].ref) node[ATTR_KEY].ref(null);
            if (!unmountOnly) collectNode(node);
            var c;
            while (c = node.lastChild) {
                recollectNodeTree(c, unmountOnly);
            }
        }
    }
    function diffAttributes(dom, attrs, old) {
        for (var _name in old) {
            if (!(attrs && _name in attrs) && null != old[_name]) setAccessor(dom, _name, old[_name], old[_name] = void 0, isSvgMode);
        }if (attrs) for (var _name2 in attrs) {
            if (!('children' === _name2 || 'innerHTML' === _name2 || _name2 in old && attrs[_name2] === ('value' === _name2 || 'checked' === _name2 ? dom[_name2] : old[_name2]))) setAccessor(dom, _name2, old[_name2], old[_name2] = attrs[_name2], isSvgMode);
        }
    }
    function collectComponent(component) {
        var name = component.constructor.name,
            list = components[name];
        if (list) list.push(component);else components[name] = [component];
    }
    function createComponent(Ctor, props, context) {
        var inst = new Ctor(props, context),
            list = components[Ctor.name];
        Component.call(inst, props, context);
        if (list) for (var i = list.length; i--;) {
            if (list[i].constructor === Ctor) {
                inst.nextBase = list[i].nextBase;
                list.splice(i, 1);
                break;
            }
        }return inst;
    }
    function setComponentProps(component, props, opts, context, mountAll) {
        if (!component._disable) {
            component._disable = !0;
            if (component.__ref = props.ref) delete props.ref;
            if (component.__key = props.key) delete props.key;
            if (!component.base || mountAll) {
                if (component.componentWillMount) component.componentWillMount();
            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
            if (context && context !== component.context) {
                if (!component.prevContext) component.prevContext = component.context;
                component.context = context;
            }
            if (!component.prevProps) component.prevProps = component.props;
            component.props = props;
            component._disable = !1;
            if (0 !== opts) if (1 === opts || options.syncComponentUpdates !== !1 || !component.base) renderComponent(component, 1, mountAll);else enqueueRender(component);
            if (component.__ref) component.__ref(component);
        }
    }
    function renderComponent(component, opts, mountAll, isChild) {
        if (!component._disable) {
            var skip,
                rendered,
                inst,
                cbase,
                props = component.props,
                state = component.state,
                context = component.context,
                previousProps = component.prevProps || props,
                previousState = component.prevState || state,
                previousContext = component.prevContext || context,
                isUpdate = component.base,
                nextBase = component.nextBase,
                initialBase = isUpdate || nextBase,
                initialChildComponent = component._component;
            if (isUpdate) {
                component.props = previousProps;
                component.state = previousState;
                component.context = previousContext;
                if (2 !== opts && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === !1) skip = !0;else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
                component.props = props;
                component.state = state;
                component.context = context;
            }
            component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
            component._dirty = !1;
            if (!skip) {
                if (component.render) rendered = component.render(props, state, context);
                if (component.getChildContext) context = extend(clone(context), component.getChildContext());
                while (isFunctionalComponent(rendered)) {
                    rendered = buildFunctionalComponent(rendered, context);
                }var toUnmount,
                    base,
                    childComponent = rendered && rendered.nodeName;
                if (isFunction(childComponent)) {
                    var childProps = getNodeProps(rendered);
                    inst = initialChildComponent;
                    if (inst && inst.constructor === childComponent && childProps.key == inst.__key) setComponentProps(inst, childProps, 1, context);else {
                        toUnmount = inst;
                        inst = createComponent(childComponent, childProps, context);
                        inst.nextBase = inst.nextBase || nextBase;
                        inst._parentComponent = component;
                        component._component = inst;
                        setComponentProps(inst, childProps, 0, context);
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
                            recollectNodeTree(initialBase);
                        }
                    }
                }
                if (toUnmount) unmountComponent(toUnmount, base !== initialBase);
                component.base = base;
                if (base && !isChild) {
                    var componentRef = component,
                        t = component;
                    while (t = t._parentComponent) {
                        (componentRef = t).base = base;
                    }base._component = componentRef;
                    base._componentConstructor = componentRef.constructor;
                }
            }
            if (!isUpdate || mountAll) mounts.unshift(component);else if (!skip) {
                if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
                if (options.afterUpdate) options.afterUpdate(component);
            }
            var fn,
                cb = component._renderCallbacks;
            if (cb) while (fn = cb.pop()) {
                fn.call(component);
            }if (!diffLevel && !isChild) flushMounts();
        }
    }
    function buildComponentFromVNode(dom, vnode, context, mountAll) {
        var c = dom && dom._component,
            oldDom = dom,
            isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
            isOwner = isDirectOwner,
            props = getNodeProps(vnode);
        while (c && !isOwner && (c = c._parentComponent)) {
            isOwner = c.constructor === vnode.nodeName;
        }if (c && isOwner && (!mountAll || c._component)) {
            setComponentProps(c, props, 3, context, mountAll);
            dom = c.base;
        } else {
            if (c && !isDirectOwner) {
                unmountComponent(c, !0);
                dom = oldDom = null;
            }
            c = createComponent(vnode.nodeName, props, context);
            if (dom && !c.nextBase) {
                c.nextBase = dom;
                oldDom = null;
            }
            setComponentProps(c, props, 1, context, mountAll);
            dom = c.base;
            if (oldDom && dom !== oldDom) {
                oldDom._component = null;
                recollectNodeTree(oldDom);
            }
        }
        return dom;
    }
    function unmountComponent(component, remove) {
        if (options.beforeUnmount) options.beforeUnmount(component);
        var base = component.base;
        component._disable = !0;
        if (component.componentWillUnmount) component.componentWillUnmount();
        component.base = null;
        var inner = component._component;
        if (inner) unmountComponent(inner, remove);else if (base) {
            if (base[ATTR_KEY] && base[ATTR_KEY].ref) base[ATTR_KEY].ref(null);
            component.nextBase = base;
            if (remove) {
                removeNode(base);
                collectComponent(component);
            }
            var c;
            while (c = base.lastChild) {
                recollectNodeTree(c, !remove);
            }
        }
        if (component.__ref) component.__ref(null);
        if (component.componentDidUnmount) component.componentDidUnmount();
    }
    function Component(props, context) {
        this._dirty = !0;
        this.context = context;
        this.props = props;
        if (!this.state) this.state = {};
    }
    function render(vnode, parent, merge) {
        return diff(merge, vnode, {}, !1, parent);
    }
    var options = {};
    var stack = [];
    var lcCache = {};
    var toLowerCase = function toLowerCase(s) {
        return lcCache[s] || (lcCache[s] = s.toLowerCase());
    };
    var resolved = 'undefined' != typeof Promise && Promise.resolve();
    var defer = resolved ? function (f) {
        resolved.then(f);
    } : setTimeout;
    var EMPTY = {};
    var ATTR_KEY = 'undefined' != typeof Symbol ? Symbol.for('preactattr') : '__preactattr_';
    var NON_DIMENSION_PROPS = {
        boxFlex: 1,
        boxFlexGroup: 1,
        columnCount: 1,
        fillOpacity: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        fontWeight: 1,
        lineClamp: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        strokeOpacity: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1
    };
    var NON_BUBBLING_EVENTS = {
        blur: 1,
        error: 1,
        focus: 1,
        load: 1,
        resize: 1,
        scroll: 1
    };
    var items = [];
    var nodes = {};
    var mounts = [];
    var diffLevel = 0;
    var isSvgMode = !1;
    var hydrating = !1;
    var components = {};
    extend(Component.prototype, {
        linkState: function linkState(key, eventPath) {
            var c = this._linkedStates || (this._linkedStates = {});
            return c[key + eventPath] || (c[key + eventPath] = createLinkedState(this, key, eventPath));
        },
        setState: function setState(state, callback) {
            var s = this.state;
            if (!this.prevState) this.prevState = clone(s);
            extend(s, isFunction(state) ? state(s, this.props) : state);
            if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
            enqueueRender(this);
        },
        forceUpdate: function forceUpdate() {
            renderComponent(this, 2);
        },
        render: function render() {}
    });
    exports.h = h;
    exports.cloneElement = cloneElement;
    exports.Component = Component;
    exports.render = render;
    exports.rerender = rerender;
    exports.options = options;
});
//# sourceMappingURL=preact.js.map
/*≠≠ node_modules/preact/dist/preact.js ≠≠*/


/*== node_modules/performance-now/lib/performance-now.js ==*/
$m['performance-now'] = { exports: {} };
// Generated by CoffeeScript 1.7.1
(function () {
  var getNanoSeconds, hrtime, loadTime;

  if (typeof performance !== "undefined" && performance !== null && performance.now) {
    $m['performance-now'].exports = function () {
      return performance.now();
    };
  } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
    $m['performance-now'].exports = function () {
      return (getNanoSeconds() - loadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function getNanoSeconds() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    loadTime = getNanoSeconds();
  } else if (Date.now) {
    $m['performance-now'].exports = function () {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    $m['performance-now'].exports = function () {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }
}).call(undefined);
/*≠≠ node_modules/performance-now/lib/performance-now.js ≠≠*/


/*== node_modules/@yr/is-equal/index.js ==*/
$m['@yr/is-equal'] = { exports: {} };
/**
 * Determine whether two objects are conceptually equal
 * https://github.com/yr/is-equal
 * @copyright Yr
 * @license MIT
 */

/**
 * Determine if 'obj1' and 'obj2' are conceptually equal,
 * optionally ignoring properties in 'ignore'
 * @param {Object} obj1
 * @param {Object} obj2
 * @param {Array} [ignore]
 * @param {Debug} [debug]
 * @returns {Boolean}
 */

$m['@yr/is-equal'].exports = function isEqual(obj1, obj2, ignore, debug) {
  ignore = ignore || [];

  if (yrisequal__equal(obj1, obj2)) return true;

  if (yrisequal__isObject(obj1) && yrisequal__isObject(obj2)) {
    var keys1 = yrisequal__keys(obj1, ignore);
    var keys2 = yrisequal__keys(obj2, ignore);

    if (keys1.length != keys2.length) return false;

    for (var i = 0, n = keys1.length; i < n; i++) {
      var prop = keys1[i];
      var val1 = obj1[prop];
      var val2 = obj2[prop];

      if (!yrisequal__equal(val1, val2)) {
        if (debug) debug('"%s" not equal %s:%s', prop, val1, val2);
        return false;
      }
    }
    return true;
  }
  return false;
};

/**
 * Determine if 'val1' and 'val2' are equal
 * @param {Object} val1
 * @param {Object} val2
 * @returns {Boolean}
 */
function yrisequal__equal(val1, val2) {
  var type1 = typeof val1;
  var type2 = typeof val2;

  // Convert NaN to null
  if (type1 == 'number' && isNaN(val1)) val1 = null;
  if (type2 == 'number' && isNaN(val2)) val2 = null;

  return val1 === val2 ||
  // Handle null & undefined
  val1 == null && val2 == null || yrisequal__isEqualArray(val1, val2);
}

/**
 * Determine if 'obj' is an object
 * @param {Object} obj
 * @returns {Boolean}
 */
function yrisequal__isObject(obj) {
  var type = typeof obj;

  return 'object' == type && 'function' != type && !Array.isArray(obj);
}

/**
 * Retrieve non-ignored keys of 'obj'
 * @param {Object} obj
 * @param {Array} ignore
 * @returns {Array}
 */
function yrisequal__keys(obj, ignore) {
  return Object.keys(obj).filter(function (key) {
    // Ignore functions
    return 'function' != typeof obj[key] && !~ignore.indexOf(key);
  });
}

/**
 * Determine if arrays 'arr1' and 'arr2' are equal
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Boolean}
 */
function yrisequal__isEqualArray(arr1, arr2) {
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    var n1 = arr1.length;
    var n2 = arr2.length;

    if (n1 != n2) return false;
    // Equal if both empty
    if (n1 == 0 && n2 == 0) return true;

    // Not equal if items not strictly equal
    for (var i = 0; i < n1; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
  return false;
}
/*≠≠ node_modules/@yr/is-equal/index.js ≠≠*/


/*== node_modules/object-assign/index.js ==*/
$m['object-assign'] = { exports: {} };
/* eslint-disable no-unused-vars */
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
		var test1 = new String('abc'); // eslint-disable-line
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
	} catch (e) {
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

		if (Object.getOwnPropertySymbols) {
			symbols = Object.getOwnPropertySymbols(from);
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


/*== node_modules/debug/debug.js ==*/
$m['debug/debug'] = { exports: {} };

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

$m['debug/debug'].exports = $m['debug/debug'].exports = debugdebug__debug.debug = debugdebug__debug;
$m['debug/debug'].exports.coerce = debugdebug__coerce;
$m['debug/debug'].exports.disable = debugdebug__disable;
$m['debug/debug'].exports.enable = debugdebug__enable;
$m['debug/debug'].exports.enabled = debugdebug__enabled;
$m['debug/debug'].exports.humanize = $m['ms'].exports;

/**
 * The currently active debug mode names, and names to skip.
 */

$m['debug/debug'].exports.names = [];
$m['debug/debug'].exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lowercased letter, i.e. "n".
 */

$m['debug/debug'].exports.formatters = {};

/**
 * Previously assigned color.
 */

var debugdebug__prevColor = 0;

/**
 * Previous log timestamp.
 */

var debugdebug__prevTime;

/**
 * Select a color.
 *
 * @return {Number}
 * @api private
 */

function debugdebug__selectColor() {
  return $m['debug/debug'].exports.colors[debugdebug__prevColor++ % $m['debug/debug'].exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function debugdebug__debug(namespace) {

  // define the `disabled` version
  function disabled() {}
  disabled.enabled = false;

  // define the `enabled` version
  function enabled() {

    var self = enabled;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (debugdebug__prevTime || curr);
    self.diff = ms;
    self.prev = debugdebug__prevTime;
    self.curr = curr;
    debugdebug__prevTime = curr;

    // add the `color` if not set
    if (null == self.useColors) self.useColors = $m['debug/debug'].exports.useColors();
    if (null == self.color && self.useColors) self.color = debugdebug__selectColor();

    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = $m['debug/debug'].exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %o
      args = ['%o'].concat(args);
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-z%])/g, function (match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = $m['debug/debug'].exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting
    args = $m['debug/debug'].exports.formatArgs.apply(self, args);

    var logFn = enabled.log || $m['debug/debug'].exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }
  enabled.enabled = true;

  var fn = $m['debug/debug'].exports.enabled(namespace) ? enabled : disabled;

  fn.namespace = namespace;

  return fn;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function debugdebug__enable(namespaces) {
  $m['debug/debug'].exports.save(namespaces);

  var split = (namespaces || '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/[\\^$+?.()|[\]{}]/g, '\\$&').replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      $m['debug/debug'].exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      $m['debug/debug'].exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function debugdebug__disable() {
  $m['debug/debug'].exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function debugdebug__enabled(name) {
  var i, len;
  for (i = 0, len = $m['debug/debug'].exports.skips.length; i < len; i++) {
    if ($m['debug/debug'].exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = $m['debug/debug'].exports.names.length; i < len; i++) {
    if ($m['debug/debug'].exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function debugdebug__coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}
/*≠≠ node_modules/debug/debug.js ≠≠*/


/*== node_modules/debug/browser.js ==*/
$m['debug'] = { exports: {} };

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

$m['debug'].exports = $m['debug'].exports = $m['debug/debug'].exports;
$m['debug'].exports.log = debug__log;
$m['debug'].exports.formatArgs = debug__formatArgs;
$m['debug'].exports.save = debug__save;
$m['debug'].exports.load = debug__load;
$m['debug'].exports.useColors = debug__useColors;
$m['debug'].exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : debug__localstorage();

/**
 * Colors.
 */

$m['debug'].exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function debug__useColors() {
  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return typeof document !== 'undefined' && 'WebkitAppearance' in document.documentElement.style ||
  // is firebug? http://stackoverflow.com/a/398120/376773
  window.console && (console.firebug || console.exception && console.table) ||
  // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31;
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

$m['debug'].exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function debug__formatArgs() {
  var args = arguments;
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + $m['debug'].exports.humanize(this.diff);

  if (!useColors) return args;

  var c = 'color: ' + this.color;
  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-z%]/g, function (match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
  return args;
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function debug__log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function debug__save(namespaces) {
  try {
    if (null == namespaces) {
      $m['debug'].exports.storage.removeItem('debug');
    } else {
      $m['debug'].exports.storage.debug = namespaces;
    }
  } catch (e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function debug__load() {
  var r;
  try {
    return $m['debug'].exports.storage.debug;
  } catch (e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (typeof process !== 'undefined' && 'env' in process) {
    return process.env.DEBUG;
  }
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

$m['debug'].exports.enable(debug__load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function debug__localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}
/*≠≠ node_modules/debug/browser.js ≠≠*/


/*== node_modules/raf/index.js ==*/
$m['raf'] = { exports: {} };
var raf__now = $m['performance-now'].exports,
    raf__root = typeof window === 'undefined' ? global : window,
    raf__vendors = ['moz', 'webkit'],
    raf__suffix = 'AnimationFrame',
    raf__raf = raf__root['request' + raf__suffix],
    raf__caf = raf__root['cancel' + raf__suffix] || raf__root['cancelRequest' + raf__suffix];

for (var raf__i = 0; !raf__raf && raf__i < raf__vendors.length; raf__i++) {
  raf__raf = raf__root[raf__vendors[raf__i] + 'Request' + raf__suffix];
  raf__caf = raf__root[raf__vendors[raf__i] + 'Cancel' + raf__suffix] || raf__root[raf__vendors[raf__i] + 'CancelRequest' + raf__suffix];
}

// Some versions of FF have rAF but not cAF
if (!raf__raf || !raf__caf) {
  var raf__last = 0,
      raf__id = 0,
      raf__queue = [],
      raf__frameDuration = 1000 / 60;

  raf__raf = function raf__raf(callback) {
    if (raf__queue.length === 0) {
      var _now = raf__now(),
          next = Math.max(0, raf__frameDuration - (_now - raf__last));
      raf__last = next + _now;
      setTimeout(function () {
        var cp = raf__queue.slice(0);
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        raf__queue.length = 0;
        for (var i = 0; i < cp.length; i++) {
          if (!cp[i].cancelled) {
            try {
              cp[i].callback(raf__last);
            } catch (e) {
              setTimeout(function () {
                throw e;
              }, 0);
            }
          }
        }
      }, Math.round(next));
    }
    raf__queue.push({
      handle: ++raf__id,
      callback: callback,
      cancelled: false
    });
    return raf__id;
  };

  raf__caf = function raf__caf(handle) {
    for (var i = 0; i < raf__queue.length; i++) {
      if (raf__queue[i].handle === handle) {
        raf__queue[i].cancelled = true;
      }
    }
  };
}

$m['raf'].exports = function (fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf__raf.call(raf__root, fn);
};
$m['raf'].exports.cancel = function () {
  raf__caf.apply(raf__root, arguments);
};
$m['raf'].exports.polyfill = function () {
  raf__root.requestAnimationFrame = raf__raf;
  raf__root.cancelAnimationFrame = raf__caf;
};
/*≠≠ node_modules/raf/index.js ≠≠*/


/*== node_modules/@yr/clock/index.js ==*/
$m['@yr/clock'] = { exports: {} };

/**
 * A global timer utility for managing immediate/timeout intervals
 * https://github.com/yr/clock
 * @copyright Yr
 * @license MIT
 */

var yrclock__Debug = $m['debug'].exports;
var yrclock__raf = $m['raf'].exports;
var yrclock__now = $m['performance-now'].exports;

var yrclock__INTERVAL_CUTOFF = 1000;
var yrclock__INTERVAL_MAX = 600000;

var yrclock__debug = yrclock__Debug('yr:clock');
var yrclock__isDev = process.env.NODE_ENV == 'development';
var yrclock__hasImmediate = 'setImmediate' in (typeof global !== 'undefined' ? global : window);
var yrclock__queue = {};
var yrclock__rafHandle = 0;
var yrclock__stHandle = 0;
var yrclock__uid = 0;

// Add polyfills
yrclock__raf.polyfill();

$m['@yr/clock'].exports = {
  /**
   * Initialize with visibility api "features"
   * @param {Object} features
   */
  initialize: function initialize(features) {
    var hidden = features.hidden;
    var visibilityChange = features.visibilityChange;

    if (hidden) {
      document.addEventListener(visibilityChange, function (evt) {
        if (document[hidden]) {
          yrclock__debug('disable while hidden');
          yrclock__stop();
        } else {
          yrclock__debug('enable while visible');
          if (process.env.NODE_ENV == 'development') {
            var current = yrclock__now();

            for (var id in yrclock__queue) {
              var item = yrclock__queue[id];

              if (item.time <= current) {
                yrclock__debug('timeout should trigger for "%s"', id);
              } else {
                var date = new Date();

                date.setMilliseconds(date.getMilliseconds() + item.time - current);
                yrclock__debug('timeout for "%s" expected at %s', id, date.toLocaleTimeString());
              }
            }
          }
          yrclock__run();
        }
      }, false);
    }
  },

  /**
   * Call 'fn' on next loop turn
   * @param {Function} fn
   * @returns {Number}
   */
  immediate: function immediate(fn) {
    return yrclock__hasImmediate ? setImmediate(fn) : setTimeout(fn, 0);
  },

  /**
   * Call 'fn' on next animation frame
   * @param {Function} fn
   * @returns {Number}
   */
  frame: function frame(fn) {
    return yrclock__raf(fn);
  },

  /**
   * Call 'fn' after 'duration'
   * @param {Number} duration - ms
   * @param {Function} fn
   * @param {String} [id]
   * @returns {String|Number|Object}
   */
  timeout: function timeout(duration, fn, id) {
    if (duration <= 0) return this.immediate(fn);

    var time = yrclock__now() + duration;

    id = id || 'c::' + ++yrclock__uid;
    // Existing ids will be overwritten/cancelled
    yrclock__queue[id] = { fn: fn, time: time };

    if (yrclock__debug.enabled) {
      var date = new Date();

      date.setMilliseconds(date.getMilliseconds() + duration);
      yrclock__debug('timeout scheduled for "%s" at %s', id, date.toLocaleTimeString());
    }

    yrclock__run();

    return id;
  },

  /**
   * Cancel immediate/timeout with 'id'
   * @param {String|Number} id
   * @returns {String|Number}
   */
  cancel: function cancel(id) {
    switch (typeof id) {
      // Timeout
      case 'string':
        if (id in yrclock__queue) {
          yrclock__debug('timeout canceled for "%s"', id);
          delete yrclock__queue[id];
        }
        return '';
      // Frame raf or immediate setTimeout
      case 'number':
        yrclock__raf.cancel(id);
        clearTimeout(id);
        return 0;
      // Immediate setImmediate
      case 'object':
        clearImmediate(id);
        return null;
    }
  }
};

/**
 * Process outstanding queue items
 */
function yrclock__run() {
  var current = yrclock__now();
  var interval = yrclock__INTERVAL_MAX;
  var running = false;

  // Reset
  if (yrclock__rafHandle || yrclock__stHandle) yrclock__stop();

  for (var id in yrclock__queue) {
    var item = yrclock__queue[id];

    if (item != null && item.time != null) {
      var duration = item.time - current;

      if (duration <= 0) {
        if (yrclock__isDev) yrclock__debug('timeout triggered for "%s" at %s', id, new Date().toLocaleTimeString());
        delete yrclock__queue[id];
        item.fn();
      } else {
        // Store smallest duration
        if (duration < interval) interval = duration;
        running = true;
      }
    } else {
      delete yrclock__queue[id];
    }
  }

  // Loop
  if (running) {
    // Use raf if requested interval is less than cutoff
    if (interval < yrclock__INTERVAL_CUTOFF) {
      yrclock__rafHandle = yrclock__raf(yrclock__run);
    } else {
      yrclock__stHandle = setTimeout(yrclock__run, interval);
    }
  }
}

/**
 * Stop running
 */
function yrclock__stop() {
  if (yrclock__rafHandle) yrclock__raf.cancel(yrclock__rafHandle);
  if (yrclock__stHandle) clearTimeout(yrclock__stHandle);
  yrclock__rafHandle = 0;
  yrclock__stHandle = 0;
}
/*≠≠ node_modules/@yr/clock/index.js ≠≠*/


/*== node_modules/@yr/component/lib/Component.js ==*/
$m['@yr/component/lib/Component'] = { exports: {} };

/**
 * Base component class (client)
 */

var yrcomponentlibComponent__Preact = $m['preact'].exports;
var yrcomponentlibComponent__assign = $m['object-assign'].exports;
var yrcomponentlibComponent__clock = $m['@yr/clock'].exports;
var yrcomponentlibComponent__Debug = $m['debug'].exports;
var yrcomponentlibComponent__isEqual = $m['@yr/is-equal'].exports;

var yrcomponentlibComponent__DEFAULT_TRANSITION_DURATION = 250;
var yrcomponentlibComponent__TIMEOUT = 20;

var yrcomponentlibComponent__debug = yrcomponentlibComponent__Debug('yr:component');

$m['@yr/component/lib/Component'].exports = function (_Preact$Component) {
  babelHelpers.inherits(Component, _Preact$Component);

  /**
   * Constructor
   * @param {Object} props
   */
  function Component(props) {
    babelHelpers.classCallCheck(this, Component);

    var _this = babelHelpers.possibleConstructorReturn(this, _Preact$Component.call(this, props));

    _this.__timerID = 0;
    _this.__transitionDuration = 'getTransitionDuration' in _this ? _this.getTransitionDuration() : yrcomponentlibComponent__DEFAULT_TRANSITION_DURATION;
    // Set up initial state
    _this.state = yrcomponentlibComponent__assign({}, _this.__state);
    // Autobind mixin methods
    if (_this.__bindableMethods) {
      _this.__bindableMethods.forEach(function (method) {
        _this[method] = _this[method].bind(_this);
      });
    }
    return _this;
  }

  /**
   * Render
   * @param {Object} props
   * @param {Object} state
   * @returns {Component}
   */

  Component.prototype.render = function render(props, state) {
    return this.__render(props, state);
  };

  /**
   * Determine if component should update based on incoming props/state
   * @param {Object} nextProps
   * @param {Object} nextState
   * @returns {Boolean}
   */

  Component.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    var changed = 'isEqual' in nextProps ? !this.props.isEqual(nextProps) : !yrcomponentlibComponent__isEqual(nextProps, this.props, null, yrcomponentlibComponent__debug);

    if (!changed) {
      changed = !yrcomponentlibComponent__isEqual(nextState, this.state, null, yrcomponentlibComponent__debug);
      if (changed) yrcomponentlibComponent__debug('state changed for %s', this.displayName);
    } else {
      yrcomponentlibComponent__debug('props changed for %s', this.displayName);
    }

    if (changed && this.shouldComponentTransition(nextProps, nextState)) {
      this.willTransition(nextState);
    }

    return changed;
  };

  /**
   * Determine if component should transition based on 'nextProps' or 'nextState'
   * @param {Object} nextProps
   * @param {Object} nextState
   * @returns {Boolean}
   */

  Component.prototype.shouldComponentTransition = function shouldComponentTransition(nextProps, nextState) {
    return false;
  };

  /**
   * Update 'state' for transition
   * @param {Object} state
   */

  Component.prototype.willTransition = function willTransition(state) {
    var _this2 = this;

    if (this.__timerID) yrcomponentlibComponent__clock.cancel(this.__timerID);

    // Generally a bad idea...
    state.visibility = !state.visibility ? 1 : 2;

    // frame/immediate doesn't leave enough time for redraw between states
    this.__timerID = yrcomponentlibComponent__clock.timeout(yrcomponentlibComponent__TIMEOUT, function () {
      _this2.isTransitioning();
    });
  };

  /**
   * Trigger transition state change
   */

  Component.prototype.isTransitioning = function isTransitioning() {
    var _this3 = this;

    this.setState({
      visibility: this.state.visibility == 1 ? 2 : 1
    });

    this.__timerID = yrcomponentlibComponent__clock.timeout(this.__transitionDuration, function () {
      _this3.didTransition();
    });
  };

  /**
   * Trigger transition state change
   */

  Component.prototype.didTransition = function didTransition() {
    this.__timerID = 0;

    this.setState({
      visibility: this.state.visibility == 2 ? 3 : 0
    });
  };

  /**
   * Hook during component unmount
   */

  Component.prototype.componentWillUnmount = function componentWillUnmount() {
    // Reset
    if (this.state && this.state.visibility) this.state.visibility = 0;
    if (this.__timerID) yrcomponentlibComponent__clock.cancel(this.__timerID);
    if (this.__componentWillUnmount) this.__componentWillUnmount();
  };

  return Component;
}(yrcomponentlibComponent__Preact.Component);
/*≠≠ node_modules/@yr/component/lib/Component.js ≠≠*/


/*== node_modules/@yr/component/index.js ==*/
$m['@yr/component'] = { exports: {} };

/**
 * A factory utility for creating React.js components
 * https://github.com/yr/component
 * @copyright Yr
 * @license MIT
 */

var yrcomponent___require = $m['preact'].exports,
    yrcomponent__el = yrcomponent___require.h,
    yrcomponent__render = yrcomponent___require.render;

var yrcomponent__assign = $m['object-assign'].exports;
var yrcomponent__Component = $m['@yr/component/lib/Component'].exports;
var yrcomponent__dataTypes = $m['@yr/component/lib/dataTypes'].exports;
// This will be an empty object for browser
var yrcomponent__renderToString = {};
var yrcomponent__runtime = $m['@yr/runtime'].exports;

var yrcomponent__LIFECYCLE_METHODS = ['componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount'];
var yrcomponent__PROXY_KEYS = ['componentWillUnmount', 'render', 'state'];
var yrcomponent__RESERVED_METHODS = yrcomponent__LIFECYCLE_METHODS.concat(['render', 'shouldComponentUpdate', 'shouldComponentTransition', 'getTransitionDuration']);

$m['@yr/component'].exports = {
  NOT_TRANSITIONING: 0,
  WILL_TRANSITION: 1,
  IS_TRANSITIONING: 2,
  DID_TRANSITION: 3,

  dataTypes: yrcomponent__dataTypes,
  el: yrcomponent__el,
  render: 'function' == typeof yrcomponent__renderToString ? yrcomponent__renderToString : yrcomponent__render,

  /**
   * Convert 'specification' into React component class,
   * returning React element factory
   * @param {Object} specification
   * @param {Array} mixins
   * @returns {Function}
   */
  create: function create(specification, mixins) {
    if (yrcomponent__runtime.isServer) return this.stateless(specification);

    var comp = function (_Component) {
      babelHelpers.inherits(comp, _Component);

      function comp() {
        babelHelpers.classCallCheck(this, comp);
        return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      return comp;
    }(yrcomponent__Component);

    // Handle mixins
    if (mixins && mixins.length) {
      // Merge/clone
      mixins = yrcomponent__assign.apply(undefined, [{}].concat(mixins));
      // Store method names to autobind on instantiation
      specification.__bindableMethods = Object.keys(mixins).filter(function (key) {
        return !~yrcomponent__RESERVED_METHODS.indexOf(key) && 'function' == typeof mixins[key];
      });
      specification = yrcomponent__assign(specification, mixins);
    }
    comp.displayName = specification.displayName || '<component>';
    delete specification.displayName;

    // Rename select keys to prevent overwriting
    yrcomponent__proxyKeys(specification, yrcomponent__PROXY_KEYS);
    // Copy to comp prototype
    yrcomponent__assign(comp.prototype, specification);

    return function createElement(props) {
      yrcomponent__processProps(props, specification);

      for (var _len = arguments.length, children = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        children[_key - 1] = arguments[_key];
      }

      return yrcomponent__el.apply(undefined, [comp, props].concat(children));
    };
  },

  /**
   * Stateless component factory
   * @param {Object} specification
   * @returns {Function}
   */
  stateless: function stateless(specification) {
    return function createStatelessElement(props) {
      yrcomponent__processProps(props, specification);

      // Send in initial state
      return specification.render(props, specification.state || {});
    };
  }
};

/**
 * Proxy 'keys' of 'obj'
 * @param {Object} obj
 * @param {Array} keys
 */
function yrcomponent__proxyKeys(obj, keys) {
  keys.forEach(function (key) {
    if (key in obj) {
      obj['__' + key] = obj[key];
      delete obj[key];
    }
  });
}

/**
 * Process 'props'
 * @param {Props} props
 * @param {Object} specification
 */
function yrcomponent__processProps(props, specification) {
  props = props || {};
  var data = specification.data,
      defaultProps = specification.defaultProps;

  // Extract missing props defined in 'data'

  if (data && props && 'extract' in props) props.extract(Object.keys(data));

  // Copy default props
  if (defaultProps) {
    for (var prop in defaultProps) {
      if (props[prop] == null) props[prop] = defaultProps[prop];
    }
  }
}
/*≠≠ node_modules/@yr/component/index.js ≠≠*/


/*== src/js/lib/utils.js ==*/
$m['src/js/lib/utils'] = { exports: {} };
var srcjslibutils___require = $m['@yr/component'].exports,
    srcjslibutils__el = srcjslibutils___require.el;

var srcjslibutils__MAX_WIDTH = 100;

$m['src/js/lib/utils'].exports = {
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
    opts.class = opts.primitive + opts.variation + '-primitive';

    return opts;
  },


  /**
   * Retrieve React 'use' element for 'link'
   * @param {String} link
   * @param {Object} options
   * @returns {React}
   */
  getElement: function getElement(link, options) {
    return srcjslibutils__el('use', {
      className: options.class,
      'xlink:href': link,
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      transform: options.flip ? 'translate(' + (srcjslibutils__MAX_WIDTH * options.scaleX + options.x) + ',' + options.scaleY * options.y + ') scale(' + -1 * options.scaleX + ', ' + options.scaleY + ')' : 'translate(' + options.x + ',' + options.y + ') scale(' + options.scaleX + ', ' + options.scaleY + ')'
    });
  }
};
/*≠≠ src/js/lib/utils.js ≠≠*/


/*== src/js/lib/primitives/precipitation.js ==*/
$m['src/js/lib/primitives/precipitation'] = { exports: {} };

var srcjslibprimitivesprecipitation__utils = $m['src/js/lib/utils'].exports;

/**
 * Render precipitation svg primitive
 * @param {Object} options
 * @returns {String}
 */
$m['src/js/lib/primitives/precipitation'].exports = function render(options) {
  return srcjslibprimitivesprecipitation__utils.getElement('#' + options.primitive, options);
};
/*≠≠ src/js/lib/primitives/precipitation.js ≠≠*/


/*== src/js/lib/primitives/lightning.js ==*/
$m['src/js/lib/primitives/lightning'] = { exports: {} };

var srcjslibprimitiveslightning__utils = $m['src/js/lib/utils'].exports;

/**
 * Render lightning svg primitive
 * @param {Object} options
 * @returns {String}
 */
$m['src/js/lib/primitives/lightning'].exports = function render(options) {
  return srcjslibprimitiveslightning__utils.getElement('#lightning', options);
};
/*≠≠ src/js/lib/primitives/lightning.js ≠≠*/


/*== src/js/lib/primitives/fog.js ==*/
$m['src/js/lib/primitives/fog'] = { exports: {} };

var srcjslibprimitivesfog__utils = $m['src/js/lib/utils'].exports;

/**
 * Render fog svg primitive
 * @param {Object} options
 * @returns {String}
 */
$m['src/js/lib/primitives/fog'].exports = function render(options) {
  return srcjslibprimitivesfog__utils.getElement('#fog', options);
};
/*≠≠ src/js/lib/primitives/fog.js ≠≠*/


/*== src/js/lib/primitives/cloud.js ==*/
$m['src/js/lib/primitives/cloud'] = { exports: {} };

var srcjslibprimitivescloud__utils = $m['src/js/lib/utils'].exports;

/**
 * Render cloud svg primitive
 * @param {Object} options
 * @returns {String}
 */
$m['src/js/lib/primitives/cloud'].exports = function render(options) {
  return srcjslibprimitivescloud__utils.getElement('#cloud', options);
};
/*≠≠ src/js/lib/primitives/cloud.js ≠≠*/


/*== src/js/lib/primitives/celestial.js ==*/
$m['src/js/lib/primitives/celestial'] = { exports: {} };

var srcjslibprimitivescelestial__utils = $m['src/js/lib/utils'].exports;

/**
 * Render sun, winter sun, or moon svg primitive
 * @param {Object} options
 * @returns {String}
 */
$m['src/js/lib/primitives/celestial'].exports = function render() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return srcjslibprimitivescelestial__utils.getElement(options.primitive == 'moon' ? '#moon' : options.winter ? '#sunWinter' : '#sun', options);
};
/*≠≠ src/js/lib/primitives/celestial.js ≠≠*/


/*== src/js/lib/primitives/index.js ==*/
$m['src/js/lib/primitives/index'] = { exports: {} };

var srcjslibprimitivesindex__celestial = $m['src/js/lib/primitives/celestial'].exports;
var srcjslibprimitivesindex__cloud = $m['src/js/lib/primitives/cloud'].exports;
var srcjslibprimitivesindex__fog = $m['src/js/lib/primitives/fog'].exports;
var srcjslibprimitivesindex__lightning = $m['src/js/lib/primitives/lightning'].exports;
var srcjslibprimitivesindex__precipitation = $m['src/js/lib/primitives/precipitation'].exports;

$m['src/js/lib/primitives/index'].exports = {
  cloud: srcjslibprimitivesindex__cloud,
  fog: srcjslibprimitivesindex__fog,
  lightning: srcjslibprimitivesindex__lightning,
  moon: srcjslibprimitivesindex__celestial,
  raindrop: srcjslibprimitivesindex__precipitation,
  snowflake: srcjslibprimitivesindex__precipitation,
  sun: srcjslibprimitivesindex__celestial
};
/*≠≠ src/js/lib/primitives/index.js ≠≠*/


/*== node_modules/@yr/graphics-component/index.js ==*/
$m['@yr/graphics-component'] = { exports: {} };

/**
 * A base React.js component for svg/img graphics
 * https://github.com/yr/graphics-component
 * @copyright Yr
 * @license MIT
 */

var yrgraphicscomponent___require = $m['@yr/component'].exports,
    yrgraphicscomponent__dataTypes = yrgraphicscomponent___require.dataTypes,
    yrgraphicscomponent__el = yrgraphicscomponent___require.el,
    yrgraphicscomponent__stateless = yrgraphicscomponent___require.stateless;

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

    if (!('fallback' in options)) options.fallback = true;

    return yrgraphicscomponent__stateless({
      displayName: 'graphicsComponent',

      data: {
        id: yrgraphicscomponent__dataTypes.string,
        renderInnerSvg: yrgraphicscomponent__dataTypes.func,
        rootImagePath: yrgraphicscomponent__dataTypes.string,
        type: yrgraphicscomponent__dataTypes.string
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

        if (!id) return null;

        var rootImagePath = props.rootImagePath || options.rootImagePath || '';

        if (rootImagePath && rootImagePath.charAt(rootImagePath.length - 1) != '/') rootImagePath += '/';

        if (type == yrgraphicscomponent__TYPE_SVG) {
          var children = options.renderInnerSvg ? options.renderInnerSvg(id) : [yrgraphicscomponent__el('use', {
            'xlink:href': '#' + id,
            x: 0,
            y: 0,
            width: 100,
            height: 100
          })];

          if (!Array.isArray(children)) children = [children];
          if (options.fallback) children.push(yrgraphicscomponent__el('image', {
            src: '' + rootImagePath + id + '.png',
            'xlink:href': ''
          }));

          return yrgraphicscomponent__el('svg', {
            // Force redraw on change (fixes Safari svg <use> bug)
            key: id,
            children: children,
            x: '0',
            y: '0',
            height: options.height || '25px',
            // Fix for IE tabbing
            focusable: false,
            width: options.width || '25px',
            viewBox: '0 0 100 100'
          });
        } else if (type == yrgraphicscomponent__TYPE_IMG) {
          return yrgraphicscomponent__el('img', { src: '' + rootImagePath + id + '.png' });
        }
      }
    });
  }
};
/*≠≠ node_modules/@yr/graphics-component/index.js ≠≠*/


/*== src/js/index.js ==*/
$m['src/js/index'] = { exports: {} };

/**
 * Yr weather symbols
 * https://github.com/yr/weather-symbols
 * @copyright Yr
 * @license MIT
 */

var srcjsindex__graphicsComponent = $m['@yr/graphics-component'].exports;
var srcjsindex__primitives = $m['src/js/lib/primitives/index'].exports;
var srcjsindex__recipes = $m['src/js/lib/recipes'].exports;
var srcjsindex__utils = $m['src/js/lib/utils'].exports;

$m['src/js/index'].exports = {
  /**
   * Instance factory
   * @param {Object} options
   * @returns {Function}
   */
  create: function create() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    options.renderInnerSvg = srcjsindex__renderInnerSvg;

    return srcjsindex__graphicsComponent.create(options);
  }
};

/**
 * Render inner svg string for 'id'
 * @param {String} id
 * @returns {String}
 */
function srcjsindex__renderInnerSvg(id) {
  var recipe = srcjsindex__recipes[id];

  if (!recipe) return null;

  return recipe.map(function (item) {
    var options = srcjsindex__utils.parse(item);

    return srcjsindex__primitives[options.primitive](options);
  });
}
/*≠≠ src/js/index.js ≠≠*/


/*== node_modules/@yr/graphics-component/previewGrid.js ==*/
$m['@yr/graphics-component/previewGrid'] = { exports: {} };

var yrgraphicscomponentpreviewGrid___require = $m['@yr/component'].exports,
    yrgraphicscomponentpreviewGrid__el = yrgraphicscomponentpreviewGrid___require.el,
    yrgraphicscomponentpreviewGrid__stateless = yrgraphicscomponentpreviewGrid___require.stateless;

$m['@yr/graphics-component/previewGrid'].exports = yrgraphicscomponentpreviewGrid__stateless({
    render: function render(props) {
        return yrgraphicscomponentpreviewGrid__el('div', { children: props.ids.map(function (id) {
                return yrgraphicscomponentpreviewGrid__el('div', { className: 'graphic', id: 'graphic-' + id }, yrgraphicscomponentpreviewGrid__el('h2', {}, id), yrgraphicscomponentpreviewGrid__el('span', { className: 'graphics-group' }, props.graphic({ id: id, type: 'svg', fallback: true }), yrgraphicscomponentpreviewGrid__el('h3', {}, 'svg')), yrgraphicscomponentpreviewGrid__el('span', { className: 'graphics-group' }, props.graphic({ id: id, type: 'img' }), yrgraphicscomponentpreviewGrid__el('h3', {}, 'png')));
            }) });
    }
});
/*≠≠ node_modules/@yr/graphics-component/previewGrid.js ≠≠*/


/*== src/preview/preview.js ==*/
$m['src/preview/preview'] = { exports: {} };
var srcpreviewpreview___require = $m['@yr/component'].exports,
    srcpreviewpreview__render = srcpreviewpreview___require.render;

var srcpreviewpreview__grid = $m['@yr/graphics-component/previewGrid'].exports;
var srcpreviewpreview__recipes = $m['src/js/lib/recipes'].exports;
var srcpreviewpreview__symbolComponent = $m['src/js/index'].exports;

var srcpreviewpreview__el = document.getElementById('viewport');
var srcpreviewpreview__symbol = srcpreviewpreview__symbolComponent.create({ rootImagePath: 'png' });

srcpreviewpreview__render(srcpreviewpreview__grid({
  ids: Object.keys(srcpreviewpreview__recipes),
  graphic: srcpreviewpreview__symbol
}), null, srcpreviewpreview__el);
/*≠≠ src/preview/preview.js ≠≠*/
})()