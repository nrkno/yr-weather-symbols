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
 * @param {Object} [options]
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
  if (str.length > 100) {
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


/*== node_modules/performance-now/lib/performance-now.js ==*/
$m['performance-now'] = { exports: {} };
// Generated by CoffeeScript 1.12.2
(function () {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if (typeof performance !== "undefined" && performance !== null && performance.now) {
    $m['performance-now'].exports = function () {
      return performance.now();
    };
  } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
    $m['performance-now'].exports = function () {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function () {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
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
}).call(this);
/*≠≠ node_modules/performance-now/lib/performance-now.js ≠≠*/


/*== node_modules/inferno/dist/index.js ==*/
$m['inferno/dist/index'] = { exports: {} };

Object.defineProperty($m['inferno/dist/index'].exports, '__esModule', { value: true });

/**
 * @module Inferno-Shared
 */ /** TypeDoc Comment */
var infernodistindex__NO_OP = "$NO_OP";
var infernodistindex__ERROR_MSG = "a runtime error occured! Use Inferno in development environment to find the error.";
// This should be boolean and not reference to window.document
var infernodistindex__isBrowser = !!(typeof window !== "undefined" && window.document);
// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
var infernodistindex__isArray = Array.isArray;
function infernodistindex__isStatefulComponent(o) {
    return !infernodistindex__isUndefined(o.prototype) && !infernodistindex__isUndefined(o.prototype.render);
}
function infernodistindex__isStringOrNumber(o) {
    var type = typeof o;
    return type === "string" || type === "number";
}
function infernodistindex__isNullOrUndef(o) {
    return infernodistindex__isUndefined(o) || infernodistindex__isNull(o);
}
function infernodistindex__isInvalid(o) {
    return infernodistindex__isNull(o) || o === false || infernodistindex__isTrue(o) || infernodistindex__isUndefined(o);
}
function infernodistindex__isFunction(o) {
    return typeof o === "function";
}
function infernodistindex__isString(o) {
    return typeof o === "string";
}
function infernodistindex__isNumber(o) {
    return typeof o === "number";
}
function infernodistindex__isNull(o) {
    return o === null;
}
function infernodistindex__isTrue(o) {
    return o === true;
}
function infernodistindex__isUndefined(o) {
    return o === void 0;
}
function infernodistindex__isObject(o) {
    return typeof o === "object";
}
function infernodistindex__throwError(message) {
    if (!message) {
        message = infernodistindex__ERROR_MSG;
    }
    throw new Error("Inferno Error: " + message);
}
function infernodistindex__warning(message) {
    // tslint:disable-next-line:no-console
    console.warn(message);
}
function infernodistindex__combineFrom(first, second) {
    var out = {};
    if (first) {
        for (var key in first) {
            out[key] = first[key];
        }
    }
    if (second) {
        for (var key$1 in second) {
            out[key$1] = second[key$1];
        }
    }
    return out;
}
function infernodistindex__Lifecycle() {
    this.listeners = [];
}
infernodistindex__Lifecycle.prototype.addListener = function addListener(callback) {
    this.listeners.push(callback);
};
infernodistindex__Lifecycle.prototype.trigger = function trigger() {
    var listeners = this.listeners;
    var listener;
    // We need to remove current listener from array when calling it, because more listeners might be added
    while (listener = listeners.shift()) {
        listener();
    }
};

/**
 * @module Inferno
 */ /** TypeDoc Comment */
var infernodistindex__options = {
    afterMount: null,
    afterRender: null,
    afterUpdate: null,
    beforeRender: null,
    beforeUnmount: null,
    createVNode: null,
    findDOMNodeEnabled: false,
    recyclingEnabled: false,
    roots: []
};

/**
 * @module Inferno
 */ /** TypeDoc Comment */
var infernodistindex__xlinkNS = "http://www.w3.org/1999/xlink";
var infernodistindex__xmlNS = "http://www.w3.org/XML/1998/namespace";
var infernodistindex__svgNS = "http://www.w3.org/2000/svg";
var infernodistindex__strictProps = new Set();
infernodistindex__strictProps.add("volume");
infernodistindex__strictProps.add("defaultChecked");
var infernodistindex__booleanProps = new Set();
infernodistindex__booleanProps.add("muted");
infernodistindex__booleanProps.add("scoped");
infernodistindex__booleanProps.add("loop");
infernodistindex__booleanProps.add("open");
infernodistindex__booleanProps.add("checked");
infernodistindex__booleanProps.add("default");
infernodistindex__booleanProps.add("capture");
infernodistindex__booleanProps.add("disabled");
infernodistindex__booleanProps.add("readOnly");
infernodistindex__booleanProps.add("required");
infernodistindex__booleanProps.add("autoplay");
infernodistindex__booleanProps.add("controls");
infernodistindex__booleanProps.add("seamless");
infernodistindex__booleanProps.add("reversed");
infernodistindex__booleanProps.add("allowfullscreen");
infernodistindex__booleanProps.add("novalidate");
infernodistindex__booleanProps.add("hidden");
infernodistindex__booleanProps.add("autoFocus");
infernodistindex__booleanProps.add("selected");
infernodistindex__booleanProps.add("indeterminate");
var infernodistindex__namespaces = new Map();
infernodistindex__namespaces.set("xlink:href", infernodistindex__xlinkNS);
infernodistindex__namespaces.set("xlink:arcrole", infernodistindex__xlinkNS);
infernodistindex__namespaces.set("xlink:actuate", infernodistindex__xlinkNS);
infernodistindex__namespaces.set("xlink:show", infernodistindex__xlinkNS);
infernodistindex__namespaces.set("xlink:role", infernodistindex__xlinkNS);
infernodistindex__namespaces.set("xlink:title", infernodistindex__xlinkNS);
infernodistindex__namespaces.set("xlink:type", infernodistindex__xlinkNS);
infernodistindex__namespaces.set("xml:base", infernodistindex__xmlNS);
infernodistindex__namespaces.set("xml:lang", infernodistindex__xmlNS);
infernodistindex__namespaces.set("xml:space", infernodistindex__xmlNS);
var infernodistindex__isUnitlessNumber = new Set();
infernodistindex__isUnitlessNumber.add("animationIterationCount");
infernodistindex__isUnitlessNumber.add("borderImageOutset");
infernodistindex__isUnitlessNumber.add("borderImageSlice");
infernodistindex__isUnitlessNumber.add("borderImageWidth");
infernodistindex__isUnitlessNumber.add("boxFlex");
infernodistindex__isUnitlessNumber.add("boxFlexGroup");
infernodistindex__isUnitlessNumber.add("boxOrdinalGroup");
infernodistindex__isUnitlessNumber.add("columnCount");
infernodistindex__isUnitlessNumber.add("flex");
infernodistindex__isUnitlessNumber.add("flexGrow");
infernodistindex__isUnitlessNumber.add("flexPositive");
infernodistindex__isUnitlessNumber.add("flexShrink");
infernodistindex__isUnitlessNumber.add("flexNegative");
infernodistindex__isUnitlessNumber.add("flexOrder");
infernodistindex__isUnitlessNumber.add("gridRow");
infernodistindex__isUnitlessNumber.add("gridColumn");
infernodistindex__isUnitlessNumber.add("fontWeight");
infernodistindex__isUnitlessNumber.add("lineClamp");
infernodistindex__isUnitlessNumber.add("lineHeight");
infernodistindex__isUnitlessNumber.add("opacity");
infernodistindex__isUnitlessNumber.add("order");
infernodistindex__isUnitlessNumber.add("orphans");
infernodistindex__isUnitlessNumber.add("tabSize");
infernodistindex__isUnitlessNumber.add("widows");
infernodistindex__isUnitlessNumber.add("zIndex");
infernodistindex__isUnitlessNumber.add("zoom");
infernodistindex__isUnitlessNumber.add("fillOpacity");
infernodistindex__isUnitlessNumber.add("floodOpacity");
infernodistindex__isUnitlessNumber.add("stopOpacity");
infernodistindex__isUnitlessNumber.add("strokeDasharray");
infernodistindex__isUnitlessNumber.add("strokeDashoffset");
infernodistindex__isUnitlessNumber.add("strokeMiterlimit");
infernodistindex__isUnitlessNumber.add("strokeOpacity");
infernodistindex__isUnitlessNumber.add("strokeWidth");
var infernodistindex__skipProps = new Set();
infernodistindex__skipProps.add("children");
infernodistindex__skipProps.add("childrenType");
infernodistindex__skipProps.add("defaultValue");
infernodistindex__skipProps.add("ref");
infernodistindex__skipProps.add("key");
infernodistindex__skipProps.add("checked");
infernodistindex__skipProps.add("multiple");
var infernodistindex__delegatedEvents = new Set();
infernodistindex__delegatedEvents.add("onClick");
infernodistindex__delegatedEvents.add("onMouseDown");
infernodistindex__delegatedEvents.add("onMouseUp");
infernodistindex__delegatedEvents.add("onMouseMove");
infernodistindex__delegatedEvents.add("onSubmit");
infernodistindex__delegatedEvents.add("onDblClick");
infernodistindex__delegatedEvents.add("onKeyDown");
infernodistindex__delegatedEvents.add("onKeyUp");
infernodistindex__delegatedEvents.add("onKeyPress");

/**
 * @module Inferno
 */ /** TypeDoc Comment */
var infernodistindex__isiOS = infernodistindex__isBrowser && !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
var infernodistindex__delegatedEvents$1 = new Map();
function infernodistindex__handleEvent(name, lastEvent, nextEvent, dom) {
    var delegatedRoots = infernodistindex__delegatedEvents$1.get(name);
    if (nextEvent) {
        if (!delegatedRoots) {
            delegatedRoots = { items: new Map(), docEvent: null };
            delegatedRoots.docEvent = infernodistindex__attachEventToDocument(name, delegatedRoots);
            infernodistindex__delegatedEvents$1.set(name, delegatedRoots);
        }
        if (!lastEvent) {
            if (infernodistindex__isiOS && name === "onClick") {
                infernodistindex__trapClickOnNonInteractiveElement(dom);
            }
        }
        delegatedRoots.items.set(dom, nextEvent);
    } else if (delegatedRoots) {
        var items = delegatedRoots.items;
        if (items.delete(dom)) {
            // If any items were deleted, check if listener need to be removed
            if (items.size === 0) {
                document.removeEventListener(infernodistindex__normalizeEventName(name), delegatedRoots.docEvent);
                infernodistindex__delegatedEvents$1.delete(name);
            }
        }
    }
}
function infernodistindex__dispatchEvents(event, target, items, count, isClick, eventData) {
    var dom = target;
    while (count > 0) {
        var eventsToTrigger = items.get(dom);
        if (eventsToTrigger) {
            count--;
            // linkEvent object
            eventData.dom = dom;
            if (eventsToTrigger.event) {
                eventsToTrigger.event(eventsToTrigger.data, event);
            } else {
                eventsToTrigger(event);
            }
            if (event.cancelBubble) {
                return;
            }
        }
        dom = dom.parentNode;
        // Html Nodes can be nested fe: span inside button in that scenario browser does not handle disabled attribute on parent,
        // because the event listener is on document.body
        // Don't process clicks on disabled elements
        if (dom === null || isClick && dom.disabled) {
            return;
        }
    }
}
function infernodistindex__normalizeEventName(name) {
    return name.substr(2).toLowerCase();
}
function infernodistindex__stopPropagation() {
    this.cancelBubble = true;
    this.stopImmediatePropagation();
}
function infernodistindex__attachEventToDocument(name, delegatedRoots) {
    var docEvent = function (event) {
        var count = delegatedRoots.items.size;
        if (count > 0) {
            event.stopPropagation = infernodistindex__stopPropagation;
            // Event data needs to be object to save reference to currentTarget getter
            var eventData = {
                dom: document
            };
            try {
                Object.defineProperty(event, "currentTarget", {
                    configurable: true,
                    get: function get() {
                        return eventData.dom;
                    }
                });
            } catch (e) {
                /* safari7 and phantomJS will crash */
            }
            infernodistindex__dispatchEvents(event, event.target, delegatedRoots.items, count, event.type === "click", eventData);
        }
    };
    document.addEventListener(infernodistindex__normalizeEventName(name), docEvent);
    return docEvent;
}
// tslint:disable-next-line:no-empty
function infernodistindex__emptyFn() {}
function infernodistindex__trapClickOnNonInteractiveElement(dom) {
    // Mobile Safari does not fire properly bubble click events on
    // non-interactive elements, which means delegated click listeners do not
    // fire. The workaround for this bug involves attaching an empty click
    // listener on the target node.
    // http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
    // Just set it using the onclick property so that we don't have to manage any
    // bookkeeping for it. Not sure if we need to clear it when the listener is
    // removed.
    // TODO: Only do this for the relevant Safaris maybe?
    dom.onclick = infernodistindex__emptyFn;
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function infernodistindex__isCheckedType(type) {
    return type === "checkbox" || type === "radio";
}
function infernodistindex__onTextInputChange(e) {
    var vNode = this.vNode;
    var props = vNode.props || infernodistindex__EMPTY_OBJ;
    var dom = vNode.dom;
    var previousValue = props.value;
    if (props.onInput) {
        var event = props.onInput;
        if (event.event) {
            event.event(event.data, e);
        } else {
            event(e);
        }
    } else if (props.oninput) {
        props.oninput(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this.vNode;
    var newProps = newVNode.props || infernodistindex__EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    if (previousValue !== newProps.value) {
        // When this happens we need to store current cursor position and restore it, to avoid jumping
        infernodistindex__applyValue(newProps, dom);
    }
}
function infernodistindex__wrappedOnChange(e) {
    var props = this.vNode.props || infernodistindex__EMPTY_OBJ;
    var event = props.onChange;
    if (event.event) {
        event.event(event.data, e);
    } else {
        event(e);
    }
}
function infernodistindex__onCheckboxChange(e) {
    e.stopPropagation(); // This click should not propagate its for internal use
    var vNode = this.vNode;
    var props = vNode.props || infernodistindex__EMPTY_OBJ;
    var dom = vNode.dom;
    if (props.onClick) {
        var event = props.onClick;
        if (event.event) {
            event.event(event.data, e);
        } else {
            event(e);
        }
    } else if (props.onclick) {
        props.onclick(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this.vNode;
    var newProps = newVNode.props || infernodistindex__EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    infernodistindex__applyValue(newProps, dom);
}
function infernodistindex__processInput(vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    infernodistindex__applyValue(nextPropsOrEmpty, dom);
    if (isControlled) {
        dom.vNode = vNode; // TODO: Remove this when implementing Fiber's
        if (mounting) {
            if (infernodistindex__isCheckedType(nextPropsOrEmpty.type)) {
                dom.onclick = infernodistindex__onCheckboxChange;
                dom.onclick.wrapped = true;
            } else {
                dom.oninput = infernodistindex__onTextInputChange;
                dom.oninput.wrapped = true;
            }
            if (nextPropsOrEmpty.onChange) {
                dom.onchange = infernodistindex__wrappedOnChange;
                dom.onchange.wrapped = true;
            }
        }
    }
}
function infernodistindex__applyValue(nextPropsOrEmpty, dom) {
    var type = nextPropsOrEmpty.type;
    var value = nextPropsOrEmpty.value;
    var checked = nextPropsOrEmpty.checked;
    var multiple = nextPropsOrEmpty.multiple;
    var defaultValue = nextPropsOrEmpty.defaultValue;
    var hasValue = !infernodistindex__isNullOrUndef(value);
    if (type && type !== dom.type) {
        dom.setAttribute("type", type);
    }
    if (multiple && multiple !== dom.multiple) {
        dom.multiple = multiple;
    }
    if (!infernodistindex__isNullOrUndef(defaultValue) && !hasValue) {
        dom.defaultValue = defaultValue + "";
    }
    if (infernodistindex__isCheckedType(type)) {
        if (hasValue) {
            dom.value = value;
        }
        if (!infernodistindex__isNullOrUndef(checked)) {
            dom.checked = checked;
        }
    } else {
        if (hasValue && dom.value !== value) {
            dom.defaultValue = value;
            dom.value = value;
        } else if (!infernodistindex__isNullOrUndef(checked)) {
            dom.checked = checked;
        }
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function infernodistindex__updateChildOptionGroup(vNode, value) {
    var type = vNode.type;
    if (type === "optgroup") {
        var children = vNode.children;
        if (infernodistindex__isArray(children)) {
            for (var i = 0, len = children.length; i < len; i++) {
                infernodistindex__updateChildOption(children[i], value);
            }
        } else if (infernodistindex__isVNode(children)) {
            infernodistindex__updateChildOption(children, value);
        }
    } else {
        infernodistindex__updateChildOption(vNode, value);
    }
}
function infernodistindex__updateChildOption(vNode, value) {
    var props = vNode.props || infernodistindex__EMPTY_OBJ;
    var dom = vNode.dom;
    // we do this as multiple may have changed
    dom.value = props.value;
    if (infernodistindex__isArray(value) && value.indexOf(props.value) !== -1 || props.value === value) {
        dom.selected = true;
    } else if (!infernodistindex__isNullOrUndef(value) || !infernodistindex__isNullOrUndef(props.selected)) {
        dom.selected = props.selected || false;
    }
}
function infernodistindex__onSelectChange(e) {
    var vNode = this.vNode;
    var props = vNode.props || infernodistindex__EMPTY_OBJ;
    var dom = vNode.dom;
    var previousValue = props.value;
    if (props.onChange) {
        var event = props.onChange;
        if (event.event) {
            event.event(event.data, e);
        } else {
            event(e);
        }
    } else if (props.onchange) {
        props.onchange(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this.vNode;
    var newProps = newVNode.props || infernodistindex__EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    if (previousValue !== newProps.value) {
        // When this happens we need to store current cursor position and restore it, to avoid jumping
        infernodistindex__applyValue$1(newVNode, dom, newProps, false);
    }
}
function infernodistindex__processSelect(vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    infernodistindex__applyValue$1(vNode, dom, nextPropsOrEmpty, mounting);
    if (isControlled) {
        dom.vNode = vNode; // TODO: Remove this when implementing Fiber's
        if (mounting) {
            dom.onchange = infernodistindex__onSelectChange;
            dom.onchange.wrapped = true;
        }
    }
}
function infernodistindex__applyValue$1(vNode, dom, nextPropsOrEmpty, mounting) {
    if (nextPropsOrEmpty.multiple !== dom.multiple) {
        dom.multiple = nextPropsOrEmpty.multiple;
    }
    var children = vNode.children;
    if (!infernodistindex__isInvalid(children)) {
        var value = nextPropsOrEmpty.value;
        if (mounting && infernodistindex__isNullOrUndef(value)) {
            value = nextPropsOrEmpty.defaultValue;
        }
        if (infernodistindex__isArray(children)) {
            for (var i = 0, len = children.length; i < len; i++) {
                infernodistindex__updateChildOptionGroup(children[i], value);
            }
        } else if (infernodistindex__isVNode(children)) {
            infernodistindex__updateChildOptionGroup(children, value);
        }
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function infernodistindex__wrappedOnChange$1(e) {
    var props = this.vNode.props || infernodistindex__EMPTY_OBJ;
    var event = props.onChange;
    if (event.event) {
        event.event(event.data, e);
    } else {
        event(e);
    }
}
function infernodistindex__onTextareaInputChange(e) {
    var vNode = this.vNode;
    var props = vNode.props || infernodistindex__EMPTY_OBJ;
    var previousValue = props.value;
    if (props.onInput) {
        var event = props.onInput;
        if (event.event) {
            event.event(event.data, e);
        } else {
            event(e);
        }
    } else if (props.oninput) {
        props.oninput(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this.vNode;
    var newProps = newVNode.props || infernodistindex__EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    if (previousValue !== newProps.value) {
        // When this happens we need to store current cursor position and restore it, to avoid jumping
        infernodistindex__applyValue$2(newVNode, vNode.dom, false);
    }
}
function infernodistindex__processTextarea(vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    infernodistindex__applyValue$2(nextPropsOrEmpty, dom, mounting);
    if (isControlled) {
        dom.vNode = vNode; // TODO: Remove this when implementing Fiber's
        if (mounting) {
            dom.oninput = infernodistindex__onTextareaInputChange;
            dom.oninput.wrapped = true;
            if (nextPropsOrEmpty.onChange) {
                dom.onchange = infernodistindex__wrappedOnChange$1;
                dom.onchange.wrapped = true;
            }
        }
    }
}
function infernodistindex__applyValue$2(nextPropsOrEmpty, dom, mounting) {
    var value = nextPropsOrEmpty.value;
    var domValue = dom.value;
    if (infernodistindex__isNullOrUndef(value)) {
        if (mounting) {
            var defaultValue = nextPropsOrEmpty.defaultValue;
            if (!infernodistindex__isNullOrUndef(defaultValue)) {
                if (defaultValue !== domValue) {
                    dom.defaultValue = defaultValue;
                    dom.value = defaultValue;
                }
            } else if (domValue !== "") {
                dom.defaultValue = "";
                dom.value = "";
            }
        }
    } else {
        /* There is value so keep it controlled */
        if (domValue !== value) {
            dom.defaultValue = value;
            dom.value = value;
        }
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
/**
 * There is currently no support for switching same input between controlled and nonControlled
 * If that ever becomes a real issue, then re design controlled elements
 * Currently user must choose either controlled or non-controlled and stick with that
 */
function infernodistindex__processElement(flags, vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    if (flags & 512 /* InputElement */) {
            infernodistindex__processInput(vNode, dom, nextPropsOrEmpty, mounting, isControlled);
        }
    if (flags & 2048 /* SelectElement */) {
            infernodistindex__processSelect(vNode, dom, nextPropsOrEmpty, mounting, isControlled);
        }
    if (flags & 1024 /* TextareaElement */) {
            infernodistindex__processTextarea(vNode, dom, nextPropsOrEmpty, mounting, isControlled);
        }
}
function infernodistindex__isControlledFormElement(nextPropsOrEmpty) {
    return nextPropsOrEmpty.type && infernodistindex__isCheckedType(nextPropsOrEmpty.type) ? !infernodistindex__isNullOrUndef(nextPropsOrEmpty.checked) : !infernodistindex__isNullOrUndef(nextPropsOrEmpty.value);
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function infernodistindex__normalizeChildNodes(parentDom) {
    var dom = parentDom.firstChild;
    while (dom) {
        if (dom.nodeType === 8) {
            if (dom.data === "!") {
                var placeholder = document.createTextNode("");
                parentDom.replaceChild(placeholder, dom);
                dom = dom.nextSibling;
            } else {
                var lastDom = dom.previousSibling;
                parentDom.removeChild(dom);
                dom = lastDom || parentDom.firstChild;
            }
        } else {
            dom = dom.nextSibling;
        }
    }
}
function infernodistindex__hydrateComponent(vNode, dom, lifecycle, context, isSVG, isClass) {
    var type = vNode.type;
    var ref = vNode.ref;
    var props = vNode.props || infernodistindex__EMPTY_OBJ;
    if (isClass) {
        var _isSVG = dom.namespaceURI === infernodistindex__svgNS;
        var instance = infernodistindex__createClassComponentInstance(vNode, type, props, context, _isSVG, lifecycle);
        var input = instance._lastInput;
        instance._vNode = vNode;
        infernodistindex__hydrate(input, dom, lifecycle, instance._childContext, _isSVG);
        vNode.dom = input.dom;
        infernodistindex__mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
        instance._updating = false; // Mount finished allow going sync
        if (infernodistindex__options.findDOMNodeEnabled) {
            infernodistindex__componentToDOMNodeMap.set(instance, dom);
        }
    } else {
        var input$1 = infernodistindex__createFunctionalComponentInput(vNode, type, props, context);
        infernodistindex__hydrate(input$1, dom, lifecycle, context, isSVG);
        vNode.children = input$1;
        vNode.dom = input$1.dom;
        infernodistindex__mountFunctionalComponentCallbacks(props, ref, dom, lifecycle);
    }
    return dom;
}
function infernodistindex__hydrateElement(vNode, dom, lifecycle, context, isSVG) {
    var children = vNode.children;
    var props = vNode.props;
    var className = vNode.className;
    var flags = vNode.flags;
    var ref = vNode.ref;
    isSVG = isSVG || (flags & 128 /* SvgElement */) > 0;
    if (dom.nodeType !== 1 || dom.tagName.toLowerCase() !== vNode.type) {
        if ('development' !== "production") {
            infernodistindex__warning("Inferno hydration: Server-side markup doesn't match client-side markup or Initial render target is not empty");
        }
        var newDom = infernodistindex__mountElement(vNode, null, lifecycle, context, isSVG);
        vNode.dom = newDom;
        infernodistindex__replaceChild(dom.parentNode, newDom, dom);
        return newDom;
    }
    vNode.dom = dom;
    if (!infernodistindex__isInvalid(children)) {
        infernodistindex__hydrateChildren(children, dom, lifecycle, context, isSVG);
    } else if (dom.firstChild !== null) {
        dom.textContent = ""; // dom has content, but VNode has no children remove everything from DOM
    }
    if (props) {
        var hasControlledValue = false;
        var isFormElement = (flags & 3584 /* FormElement */) > 0;
        if (isFormElement) {
            hasControlledValue = infernodistindex__isControlledFormElement(props);
        }
        for (var prop in props) {
            // do not add a hasOwnProperty check here, it affects performance
            infernodistindex__patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue);
        }
        if (isFormElement) {
            infernodistindex__processElement(flags, vNode, dom, props, true, hasControlledValue);
        }
    }
    if (!infernodistindex__isNullOrUndef(className)) {
        if (isSVG) {
            dom.setAttribute("class", className);
        } else {
            dom.className = className;
        }
    } else {
        if (dom.className !== "") {
            dom.removeAttribute("class");
        }
    }
    if (ref) {
        infernodistindex__mountRef(dom, ref, lifecycle);
    }
    return dom;
}
function infernodistindex__hydrateChildren(children, parentDom, lifecycle, context, isSVG) {
    infernodistindex__normalizeChildNodes(parentDom);
    var dom = parentDom.firstChild;
    if (infernodistindex__isStringOrNumber(children)) {
        if (!infernodistindex__isNull(dom) && dom.nodeType === 3) {
            if (dom.nodeValue !== children) {
                dom.nodeValue = children;
            }
        } else if (children === "") {
            parentDom.appendChild(document.createTextNode(""));
        } else {
            parentDom.textContent = children;
        }
        if (!infernodistindex__isNull(dom)) {
            dom = dom.nextSibling;
        }
    } else if (infernodistindex__isArray(children)) {
        for (var i = 0, len = children.length; i < len; i++) {
            var child = children[i];
            if (!infernodistindex__isNull(child) && infernodistindex__isObject(child)) {
                if (!infernodistindex__isNull(dom)) {
                    var nextSibling = dom.nextSibling;
                    infernodistindex__hydrate(child, dom, lifecycle, context, isSVG);
                    dom = nextSibling;
                } else {
                    infernodistindex__mount(child, parentDom, lifecycle, context, isSVG);
                }
            }
        }
    } else {
        // It's VNode
        if (!infernodistindex__isNull(dom)) {
            infernodistindex__hydrate(children, dom, lifecycle, context, isSVG);
            dom = dom.nextSibling;
        } else {
            infernodistindex__mount(children, parentDom, lifecycle, context, isSVG);
        }
    }
    // clear any other DOM nodes, there should be only a single entry for the root
    while (dom) {
        var nextSibling$1 = dom.nextSibling;
        parentDom.removeChild(dom);
        dom = nextSibling$1;
    }
}
function infernodistindex__hydrateText(vNode, dom) {
    if (dom.nodeType !== 3) {
        var newDom = infernodistindex__mountText(vNode, null);
        vNode.dom = newDom;
        infernodistindex__replaceChild(dom.parentNode, newDom, dom);
        return newDom;
    }
    var text = vNode.children;
    if (dom.nodeValue !== text) {
        dom.nodeValue = text;
    }
    vNode.dom = dom;
    return dom;
}
function infernodistindex__hydrateVoid(vNode, dom) {
    vNode.dom = dom;
    return dom;
}
function infernodistindex__hydrate(vNode, dom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 28 /* Component */) {
            infernodistindex__hydrateComponent(vNode, dom, lifecycle, context, isSVG, (flags & 4 /* ComponentClass */) > 0);
        } else if (flags & 3970 /* Element */) {
            infernodistindex__hydrateElement(vNode, dom, lifecycle, context, isSVG);
        } else if (flags & 1 /* Text */) {
            infernodistindex__hydrateText(vNode, dom);
        } else if (flags & 4096 /* Void */) {
            infernodistindex__hydrateVoid(vNode, dom);
        } else {
        if ('development' !== "production") {
            infernodistindex__throwError("hydrate() expects a valid VNode, instead it received an object with the type \"" + typeof vNode + "\".");
        }
        infernodistindex__throwError();
    }
}
function infernodistindex__hydrateRoot(input, parentDom, lifecycle) {
    if (!infernodistindex__isNull(parentDom)) {
        var dom = parentDom.firstChild;
        if (!infernodistindex__isNull(dom)) {
            infernodistindex__hydrate(input, dom, lifecycle, infernodistindex__EMPTY_OBJ, false);
            dom = parentDom.firstChild;
            // clear any other DOM nodes, there should be only a single entry for the root
            while (dom = dom.nextSibling) {
                parentDom.removeChild(dom);
            }
            return true;
        }
    }
    return false;
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
var infernodistindex__componentPools = new Map();
var infernodistindex__elementPools = new Map();
function infernodistindex__recycleElement(vNode, lifecycle, context, isSVG) {
    var tag = vNode.type;
    var pools = infernodistindex__elementPools.get(tag);
    if (!infernodistindex__isUndefined(pools)) {
        var key = vNode.key;
        var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
        if (!infernodistindex__isUndefined(pool)) {
            var recycledVNode = pool.pop();
            if (!infernodistindex__isUndefined(recycledVNode)) {
                infernodistindex__patchElement(recycledVNode, vNode, null, lifecycle, context, isSVG, true);
                return vNode.dom;
            }
        }
    }
    return null;
}
function infernodistindex__poolElement(vNode) {
    var tag = vNode.type;
    var key = vNode.key;
    var pools = infernodistindex__elementPools.get(tag);
    if (infernodistindex__isUndefined(pools)) {
        pools = {
            keyed: new Map(),
            nonKeyed: []
        };
        infernodistindex__elementPools.set(tag, pools);
    }
    if (infernodistindex__isNull(key)) {
        pools.nonKeyed.push(vNode);
    } else {
        var pool = pools.keyed.get(key);
        if (infernodistindex__isUndefined(pool)) {
            pool = [];
            pools.keyed.set(key, pool);
        }
        pool.push(vNode);
    }
}
function infernodistindex__recycleComponent(vNode, lifecycle, context, isSVG) {
    var type = vNode.type;
    var pools = infernodistindex__componentPools.get(type);
    if (!infernodistindex__isUndefined(pools)) {
        var key = vNode.key;
        var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
        if (!infernodistindex__isUndefined(pool)) {
            var recycledVNode = pool.pop();
            if (!infernodistindex__isUndefined(recycledVNode)) {
                var flags = vNode.flags;
                var failed = infernodistindex__patchComponent(recycledVNode, vNode, null, lifecycle, context, isSVG, (flags & 4 /* ComponentClass */) > 0, true);
                if (!failed) {
                    return vNode.dom;
                }
            }
        }
    }
    return null;
}
function infernodistindex__poolComponent(vNode) {
    var hooks = vNode.ref;
    var nonRecycleHooks = hooks && (hooks.onComponentWillMount || hooks.onComponentWillUnmount || hooks.onComponentDidMount || hooks.onComponentWillUpdate || hooks.onComponentDidUpdate);
    if (nonRecycleHooks) {
        return;
    }
    var type = vNode.type;
    var key = vNode.key;
    var pools = infernodistindex__componentPools.get(type);
    if (infernodistindex__isUndefined(pools)) {
        pools = {
            keyed: new Map(),
            nonKeyed: []
        };
        infernodistindex__componentPools.set(type, pools);
    }
    if (infernodistindex__isNull(key)) {
        pools.nonKeyed.push(vNode);
    } else {
        var pool = pools.keyed.get(key);
        if (infernodistindex__isUndefined(pool)) {
            pool = [];
            pools.keyed.set(key, pool);
        }
        pool.push(vNode);
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function infernodistindex__unmount(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var flags = vNode.flags;
    if (flags & 28 /* Component */) {
            infernodistindex__unmountComponent(vNode, parentDom, lifecycle, canRecycle, isRecycling);
        } else if (flags & 3970 /* Element */) {
            infernodistindex__unmountElement(vNode, parentDom, lifecycle, canRecycle, isRecycling);
        } else if (flags & (1 /* Text */ | 4096 /* Void */)) {
        infernodistindex__unmountVoidOrText(vNode, parentDom);
    }
}
function infernodistindex__unmountVoidOrText(vNode, parentDom) {
    if (!infernodistindex__isNull(parentDom)) {
        infernodistindex__removeChild(parentDom, vNode.dom);
    }
}
function infernodistindex__unmountComponent(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var instance = vNode.children;
    var flags = vNode.flags;
    var isStatefulComponent$$1 = flags & 4;
    var props = vNode.props || infernodistindex__EMPTY_OBJ;
    var ref = vNode.ref;
    var dom = vNode.dom;
    if (!isRecycling) {
        if (isStatefulComponent$$1) {
            if (!instance._unmounted) {
                if (!infernodistindex__isNull(infernodistindex__options.beforeUnmount)) {
                    infernodistindex__options.beforeUnmount(vNode);
                }
                if (!infernodistindex__isUndefined(instance.componentWillUnmount)) {
                    instance.componentWillUnmount();
                }
                if (ref && !isRecycling) {
                    ref(null);
                }
                instance._unmounted = true;
                if (infernodistindex__options.findDOMNodeEnabled) {
                    infernodistindex__componentToDOMNodeMap.delete(instance);
                }
                infernodistindex__unmount(instance._lastInput, null, instance._lifecycle, false, isRecycling);
            }
        } else {
            if (!infernodistindex__isNullOrUndef(ref)) {
                if (!infernodistindex__isNullOrUndef(ref.onComponentWillUnmount)) {
                    ref.onComponentWillUnmount(dom, props);
                }
            }
            infernodistindex__unmount(instance, null, lifecycle, false, isRecycling);
        }
    }
    if (parentDom) {
        infernodistindex__removeChild(parentDom, dom);
    }
    if (infernodistindex__options.recyclingEnabled && !isStatefulComponent$$1 && (parentDom || canRecycle)) {
        infernodistindex__poolComponent(vNode);
    }
}
function infernodistindex__unmountElement(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var dom = vNode.dom;
    var ref = vNode.ref;
    var props = vNode.props;
    if (ref && !isRecycling) {
        infernodistindex__unmountRef(ref);
    }
    var children = vNode.children;
    if (!infernodistindex__isNullOrUndef(children)) {
        infernodistindex__unmountChildren$1(children, lifecycle, isRecycling);
    }
    if (!infernodistindex__isNull(props)) {
        for (var name in props) {
            // do not add a hasOwnProperty check here, it affects performance
            if (props[name] !== null && infernodistindex__isAttrAnEvent(name)) {
                infernodistindex__patchEvent(name, props[name], null, dom);
                // We need to set this null, because same props otherwise come back if SCU returns false and we are recyling
                props[name] = null;
            }
        }
    }
    if (!infernodistindex__isNull(parentDom)) {
        infernodistindex__removeChild(parentDom, dom);
    }
    if (infernodistindex__options.recyclingEnabled && (parentDom || canRecycle)) {
        infernodistindex__poolElement(vNode);
    }
}
function infernodistindex__unmountChildren$1(children, lifecycle, isRecycling) {
    if (infernodistindex__isArray(children)) {
        for (var i = 0, len = children.length; i < len; i++) {
            var child = children[i];
            if (!infernodistindex__isInvalid(child) && infernodistindex__isObject(child)) {
                infernodistindex__unmount(child, null, lifecycle, false, isRecycling);
            }
        }
    } else if (infernodistindex__isObject(children)) {
        infernodistindex__unmount(children, null, lifecycle, false, isRecycling);
    }
}
function infernodistindex__unmountRef(ref) {
    if (infernodistindex__isFunction(ref)) {
        ref(null);
    } else {
        if (infernodistindex__isInvalid(ref)) {
            return;
        }
        if ('development' !== "production") {
            infernodistindex__throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
        }
        infernodistindex__throwError();
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
// rather than use a Map, like we did before, we can use an array here
// given there shouldn't be THAT many roots on the page, the difference
// in performance is huge: https://esbench.com/bench/5802a691330ab09900a1a2da
var infernodistindex__componentToDOMNodeMap = new Map();
var infernodistindex__roots = infernodistindex__options.roots;
/**
 * When inferno.options.findDOMNOdeEnabled is true, this function will return DOM Node by component instance
 * @param ref Component instance
 * @returns {*|null} returns dom node
 */
function infernodistindex__findDOMNode(ref) {
    if (!infernodistindex__options.findDOMNodeEnabled) {
        if ('development' !== "production") {
            infernodistindex__throwError("findDOMNode() has been disabled, use Inferno.options.findDOMNodeEnabled = true; enabled findDOMNode(). Warning this can significantly impact performance!");
        }
        infernodistindex__throwError();
    }
    var dom = ref && ref.nodeType ? ref : null;
    return infernodistindex__componentToDOMNodeMap.get(ref) || dom;
}
function infernodistindex__getRoot(dom) {
    for (var i = 0, len = infernodistindex__roots.length; i < len; i++) {
        var root = infernodistindex__roots[i];
        if (root.dom === dom) {
            return root;
        }
    }
    return null;
}
function infernodistindex__setRoot(dom, input, lifecycle) {
    var root = {
        dom: dom,
        input: input,
        lifecycle: lifecycle
    };
    infernodistindex__roots.push(root);
    return root;
}
function infernodistindex__removeRoot(root) {
    for (var i = 0, len = infernodistindex__roots.length; i < len; i++) {
        if (infernodistindex__roots[i] === root) {
            infernodistindex__roots.splice(i, 1);
            return;
        }
    }
}
if ('development' !== "production") {
    if (infernodistindex__isBrowser && document.body === null) {
        infernodistindex__warning('Inferno warning: you cannot initialize inferno without "document.body". Wait on "DOMContentLoaded" event, add script to bottom of body, or use async/defer attributes on script tag.');
    }
}
var infernodistindex__documentBody = infernodistindex__isBrowser ? document.body : null;
/**
 * Renders virtual node tree into parent node.
 * @param {VNode | null | string | number} input vNode to be rendered
 * @param parentDom DOM node which content will be replaced by virtual node
 * @returns {InfernoChildren} rendered virtual node
 */
function infernodistindex__render(input, parentDom) {
    if (infernodistindex__documentBody === parentDom) {
        if ('development' !== "production") {
            infernodistindex__throwError('you cannot render() to the "document.body". Use an empty element as a container instead.');
        }
        infernodistindex__throwError();
    }
    if (input === infernodistindex__NO_OP) {
        return;
    }
    var root = infernodistindex__getRoot(parentDom);
    if (infernodistindex__isNull(root)) {
        var lifecycle = new infernodistindex__Lifecycle();
        if (!infernodistindex__isInvalid(input)) {
            if (input.dom) {
                input = infernodistindex__directClone(input);
            }
            if (!infernodistindex__hydrateRoot(input, parentDom, lifecycle)) {
                infernodistindex__mount(input, parentDom, lifecycle, infernodistindex__EMPTY_OBJ, false);
            }
            root = infernodistindex__setRoot(parentDom, input, lifecycle);
            lifecycle.trigger();
        }
    } else {
        var lifecycle$1 = root.lifecycle;
        lifecycle$1.listeners = [];
        if (infernodistindex__isNullOrUndef(input)) {
            infernodistindex__unmount(root.input, parentDom, lifecycle$1, false, false);
            infernodistindex__removeRoot(root);
        } else {
            if (input.dom) {
                input = infernodistindex__directClone(input);
            }
            infernodistindex__patch(root.input, input, parentDom, lifecycle$1, infernodistindex__EMPTY_OBJ, false, false);
        }
        root.input = input;
        lifecycle$1.trigger();
    }
    if (root) {
        var rootInput = root.input;
        if (rootInput && rootInput.flags & 28 /* Component */) {
                return rootInput.children;
            }
    }
}
function infernodistindex__createRenderer(parentDom) {
    return function renderer(lastInput, nextInput) {
        if (!parentDom) {
            parentDom = lastInput;
        }
        infernodistindex__render(nextInput, parentDom);
    };
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function infernodistindex__patch(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    if (lastVNode !== nextVNode) {
        var lastFlags = lastVNode.flags;
        var nextFlags = nextVNode.flags;
        if (nextFlags & 28 /* Component */) {
                var isClass = (nextFlags & 4 /* ComponentClass */) > 0;
                if (lastFlags & 28 /* Component */) {
                        infernodistindex__patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isClass, isRecycling);
                    } else {
                    infernodistindex__replaceVNode(parentDom, infernodistindex__mountComponent(nextVNode, null, lifecycle, context, isSVG, isClass), lastVNode, lifecycle, isRecycling);
                }
            } else if (nextFlags & 3970 /* Element */) {
                if (lastFlags & 3970 /* Element */) {
                        infernodistindex__patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
                    } else {
                    infernodistindex__replaceVNode(parentDom, infernodistindex__mountElement(nextVNode, null, lifecycle, context, isSVG), lastVNode, lifecycle, isRecycling);
                }
            } else if (nextFlags & 1 /* Text */) {
                if (lastFlags & 1 /* Text */) {
                        infernodistindex__patchText(lastVNode, nextVNode);
                    } else {
                    infernodistindex__replaceVNode(parentDom, infernodistindex__mountText(nextVNode, null), lastVNode, lifecycle, isRecycling);
                }
            } else if (nextFlags & 4096 /* Void */) {
                if (lastFlags & 4096 /* Void */) {
                        infernodistindex__patchVoid(lastVNode, nextVNode);
                    } else {
                    infernodistindex__replaceVNode(parentDom, infernodistindex__mountVoid(nextVNode, null), lastVNode, lifecycle, isRecycling);
                }
            } else {
            // Error case: mount new one replacing old one
            infernodistindex__replaceLastChildAndUnmount(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
        }
    }
}
function infernodistindex__unmountChildren(children, dom, lifecycle, isRecycling) {
    if (infernodistindex__isVNode(children)) {
        infernodistindex__unmount(children, dom, lifecycle, true, isRecycling);
    } else if (infernodistindex__isArray(children)) {
        infernodistindex__removeAllChildren(dom, children, lifecycle, isRecycling);
    } else {
        dom.textContent = "";
    }
}
function infernodistindex__patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    var nextTag = nextVNode.type;
    var lastTag = lastVNode.type;
    if (lastTag !== nextTag) {
        infernodistindex__replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
    } else {
        var dom = lastVNode.dom;
        var lastProps = lastVNode.props;
        var nextProps = nextVNode.props;
        var lastChildren = lastVNode.children;
        var nextChildren = nextVNode.children;
        var lastFlags = lastVNode.flags;
        var nextFlags = nextVNode.flags;
        var nextRef = nextVNode.ref;
        var lastClassName = lastVNode.className;
        var nextClassName = nextVNode.className;
        nextVNode.dom = dom;
        isSVG = isSVG || (nextFlags & 128 /* SvgElement */) > 0;
        if (lastChildren !== nextChildren) {
            var childrenIsSVG = isSVG === true && nextVNode.type !== "foreignObject";
            infernodistindex__patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, childrenIsSVG, isRecycling);
        }
        // inlined patchProps  -- starts --
        if (lastProps !== nextProps) {
            var lastPropsOrEmpty = lastProps || infernodistindex__EMPTY_OBJ;
            var nextPropsOrEmpty = nextProps || infernodistindex__EMPTY_OBJ;
            var hasControlledValue = false;
            if (nextPropsOrEmpty !== infernodistindex__EMPTY_OBJ) {
                var isFormElement = (nextFlags & 3584 /* FormElement */) > 0;
                if (isFormElement) {
                    hasControlledValue = infernodistindex__isControlledFormElement(nextPropsOrEmpty);
                }
                for (var prop in nextPropsOrEmpty) {
                    // do not add a hasOwnProperty check here, it affects performance
                    var nextValue = nextPropsOrEmpty[prop];
                    var lastValue = lastPropsOrEmpty[prop];
                    infernodistindex__patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue);
                }
                if (isFormElement) {
                    // When inferno is recycling form element, we need to process it like it would be mounting
                    infernodistindex__processElement(nextFlags, nextVNode, dom, nextPropsOrEmpty, isRecycling, hasControlledValue);
                }
            }
            if (lastPropsOrEmpty !== infernodistindex__EMPTY_OBJ) {
                for (var prop$1 in lastPropsOrEmpty) {
                    // do not add a hasOwnProperty check here, it affects performance
                    if (infernodistindex__isNullOrUndef(nextPropsOrEmpty[prop$1]) && !infernodistindex__isNullOrUndef(lastPropsOrEmpty[prop$1])) {
                        infernodistindex__removeProp(prop$1, lastPropsOrEmpty[prop$1], dom, nextFlags);
                    }
                }
            }
        }
        // inlined patchProps  -- ends --
        if (lastClassName !== nextClassName) {
            if (infernodistindex__isNullOrUndef(nextClassName)) {
                dom.removeAttribute("class");
            } else {
                if (isSVG) {
                    dom.setAttribute("class", nextClassName);
                } else {
                    dom.className = nextClassName;
                }
            }
        }
        if (nextRef) {
            if (lastVNode.ref !== nextRef || isRecycling) {
                infernodistindex__mountRef(dom, nextRef, lifecycle);
            }
        }
    }
}
function infernodistindex__patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling) {
    var patchArray = false;
    var patchKeyed = false;
    if (nextFlags & 64 /* HasNonKeyedChildren */) {
            patchArray = true;
        } else if ((lastFlags & 32 /* HasKeyedChildren */) > 0 && (nextFlags & 32 /* HasKeyedChildren */) > 0) {
        patchKeyed = true;
        patchArray = true;
    } else if (infernodistindex__isInvalid(nextChildren)) {
        infernodistindex__unmountChildren(lastChildren, dom, lifecycle, isRecycling);
    } else if (infernodistindex__isInvalid(lastChildren)) {
        if (infernodistindex__isStringOrNumber(nextChildren)) {
            infernodistindex__setTextContent(dom, nextChildren);
        } else {
            if (infernodistindex__isArray(nextChildren)) {
                infernodistindex__mountArrayChildren(nextChildren, dom, lifecycle, context, isSVG);
            } else {
                infernodistindex__mount(nextChildren, dom, lifecycle, context, isSVG);
            }
        }
    } else if (infernodistindex__isStringOrNumber(nextChildren)) {
        if (infernodistindex__isStringOrNumber(lastChildren)) {
            infernodistindex__updateTextContent(dom, nextChildren);
        } else {
            infernodistindex__unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            infernodistindex__setTextContent(dom, nextChildren);
        }
    } else if (infernodistindex__isArray(nextChildren)) {
        if (infernodistindex__isArray(lastChildren)) {
            patchArray = true;
            if (infernodistindex__isKeyed(lastChildren, nextChildren)) {
                patchKeyed = true;
            }
        } else {
            infernodistindex__unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            infernodistindex__mountArrayChildren(nextChildren, dom, lifecycle, context, isSVG);
        }
    } else if (infernodistindex__isArray(lastChildren)) {
        infernodistindex__removeAllChildren(dom, lastChildren, lifecycle, isRecycling);
        infernodistindex__mount(nextChildren, dom, lifecycle, context, isSVG);
    } else if (infernodistindex__isVNode(nextChildren)) {
        if (infernodistindex__isVNode(lastChildren)) {
            infernodistindex__patch(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        } else {
            infernodistindex__unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            infernodistindex__mount(nextChildren, dom, lifecycle, context, isSVG);
        }
    }
    if (patchArray) {
        if (patchKeyed) {
            infernodistindex__patchKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        } else {
            infernodistindex__patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        }
    }
}
function infernodistindex__patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isClass, isRecycling) {
    var lastType = lastVNode.type;
    var nextType = nextVNode.type;
    var lastKey = lastVNode.key;
    var nextKey = nextVNode.key;
    if (lastType !== nextType || lastKey !== nextKey) {
        infernodistindex__replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
        return false;
    } else {
        var nextProps = nextVNode.props || infernodistindex__EMPTY_OBJ;
        if (isClass) {
            var instance = lastVNode.children;
            instance._updating = true;
            if (instance._unmounted) {
                if (infernodistindex__isNull(parentDom)) {
                    return true;
                }
                infernodistindex__replaceChild(parentDom, infernodistindex__mountComponent(nextVNode, null, lifecycle, context, isSVG, (nextVNode.flags & 4 /* ComponentClass */) > 0), lastVNode.dom);
            } else {
                var hasComponentDidUpdate = !infernodistindex__isUndefined(instance.componentDidUpdate);
                var nextState = instance.state;
                // When component has componentDidUpdate hook, we need to clone lastState or will be modified by reference during update
                var lastState = hasComponentDidUpdate ? infernodistindex__combineFrom(nextState, null) : nextState;
                var lastProps = instance.props;
                var childContext;
                if (!infernodistindex__isNullOrUndef(instance.getChildContext)) {
                    childContext = instance.getChildContext();
                }
                nextVNode.children = instance;
                instance._isSVG = isSVG;
                if (infernodistindex__isNullOrUndef(childContext)) {
                    childContext = context;
                } else {
                    childContext = infernodistindex__combineFrom(context, childContext);
                }
                var lastInput = instance._lastInput;
                var nextInput = instance._updateComponent(lastState, nextState, lastProps, nextProps, context, false, false);
                var didUpdate = true;
                instance._childContext = childContext;
                if (infernodistindex__isInvalid(nextInput)) {
                    nextInput = infernodistindex__createVoidVNode();
                } else if (nextInput === infernodistindex__NO_OP) {
                    nextInput = lastInput;
                    didUpdate = false;
                } else if (infernodistindex__isStringOrNumber(nextInput)) {
                    nextInput = infernodistindex__createTextVNode(nextInput, null);
                } else if (infernodistindex__isArray(nextInput)) {
                    if ('development' !== "production") {
                        infernodistindex__throwError("a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.");
                    }
                    infernodistindex__throwError();
                } else if (infernodistindex__isObject(nextInput)) {
                    if (!infernodistindex__isNull(nextInput.dom)) {
                        nextInput = infernodistindex__directClone(nextInput);
                    }
                }
                if (nextInput.flags & 28 /* Component */) {
                        nextInput.parentVNode = nextVNode;
                    } else if (lastInput.flags & 28 /* Component */) {
                        lastInput.parentVNode = nextVNode;
                    }
                instance._lastInput = nextInput;
                instance._vNode = nextVNode;
                if (didUpdate) {
                    infernodistindex__patch(lastInput, nextInput, parentDom, lifecycle, childContext, isSVG, isRecycling);
                    if (hasComponentDidUpdate && instance.componentDidUpdate) {
                        instance.componentDidUpdate(lastProps, lastState);
                    }
                    if (!infernodistindex__isNull(infernodistindex__options.afterUpdate)) {
                        infernodistindex__options.afterUpdate(nextVNode);
                    }
                    if (infernodistindex__options.findDOMNodeEnabled) {
                        infernodistindex__componentToDOMNodeMap.set(instance, nextInput.dom);
                    }
                }
                nextVNode.dom = nextInput.dom;
            }
            instance._updating = false;
        } else {
            var shouldUpdate = true;
            var lastProps$1 = lastVNode.props;
            var nextHooks = nextVNode.ref;
            var nextHooksDefined = !infernodistindex__isNullOrUndef(nextHooks);
            var lastInput$1 = lastVNode.children;
            var nextInput$1 = lastInput$1;
            nextVNode.dom = lastVNode.dom;
            nextVNode.children = lastInput$1;
            if (lastKey !== nextKey) {
                shouldUpdate = true;
            } else {
                if (nextHooksDefined && !infernodistindex__isNullOrUndef(nextHooks.onComponentShouldUpdate)) {
                    shouldUpdate = nextHooks.onComponentShouldUpdate(lastProps$1, nextProps);
                }
            }
            if (shouldUpdate !== false) {
                if (nextHooksDefined && !infernodistindex__isNullOrUndef(nextHooks.onComponentWillUpdate)) {
                    nextHooks.onComponentWillUpdate(lastProps$1, nextProps);
                }
                nextInput$1 = nextType(nextProps, context);
                if (infernodistindex__isInvalid(nextInput$1)) {
                    nextInput$1 = infernodistindex__createVoidVNode();
                } else if (infernodistindex__isStringOrNumber(nextInput$1) && nextInput$1 !== infernodistindex__NO_OP) {
                    nextInput$1 = infernodistindex__createTextVNode(nextInput$1, null);
                } else if (infernodistindex__isArray(nextInput$1)) {
                    if ('development' !== "production") {
                        infernodistindex__throwError("a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.");
                    }
                    infernodistindex__throwError();
                } else if (infernodistindex__isObject(nextInput$1)) {
                    if (!infernodistindex__isNull(nextInput$1.dom)) {
                        nextInput$1 = infernodistindex__directClone(nextInput$1);
                    }
                }
                if (nextInput$1 !== infernodistindex__NO_OP) {
                    infernodistindex__patch(lastInput$1, nextInput$1, parentDom, lifecycle, context, isSVG, isRecycling);
                    nextVNode.children = nextInput$1;
                    if (nextHooksDefined && !infernodistindex__isNullOrUndef(nextHooks.onComponentDidUpdate)) {
                        nextHooks.onComponentDidUpdate(lastProps$1, nextProps);
                    }
                    nextVNode.dom = nextInput$1.dom;
                }
            }
            if (nextInput$1.flags & 28 /* Component */) {
                    nextInput$1.parentVNode = nextVNode;
                } else if (lastInput$1.flags & 28 /* Component */) {
                    lastInput$1.parentVNode = nextVNode;
                }
        }
    }
    return false;
}
function infernodistindex__patchText(lastVNode, nextVNode) {
    var nextText = nextVNode.children;
    var dom = lastVNode.dom;
    nextVNode.dom = dom;
    if (lastVNode.children !== nextText) {
        dom.nodeValue = nextText;
    }
}
function infernodistindex__patchVoid(lastVNode, nextVNode) {
    nextVNode.dom = lastVNode.dom;
}
function infernodistindex__patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling) {
    var lastChildrenLength = lastChildren.length;
    var nextChildrenLength = nextChildren.length;
    var commonLength = lastChildrenLength > nextChildrenLength ? nextChildrenLength : lastChildrenLength;
    var i = 0;
    for (; i < commonLength; i++) {
        var nextChild = nextChildren[i];
        if (nextChild.dom) {
            nextChild = nextChildren[i] = infernodistindex__directClone(nextChild);
        }
        infernodistindex__patch(lastChildren[i], nextChild, dom, lifecycle, context, isSVG, isRecycling);
    }
    if (lastChildrenLength < nextChildrenLength) {
        for (i = commonLength; i < nextChildrenLength; i++) {
            var nextChild$1 = nextChildren[i];
            if (nextChild$1.dom) {
                nextChild$1 = nextChildren[i] = infernodistindex__directClone(nextChild$1);
            }
            infernodistindex__appendChild(dom, infernodistindex__mount(nextChild$1, null, lifecycle, context, isSVG));
        }
    } else if (nextChildrenLength === 0) {
        infernodistindex__removeAllChildren(dom, lastChildren, lifecycle, isRecycling);
    } else if (lastChildrenLength > nextChildrenLength) {
        for (i = commonLength; i < lastChildrenLength; i++) {
            infernodistindex__unmount(lastChildren[i], dom, lifecycle, false, isRecycling);
        }
    }
}
function infernodistindex__patchKeyedChildren(a, b, dom, lifecycle, context, isSVG, isRecycling) {
    var aLength = a.length;
    var bLength = b.length;
    var aEnd = aLength - 1;
    var bEnd = bLength - 1;
    var aStart = 0;
    var bStart = 0;
    var i;
    var j;
    var aNode;
    var bNode;
    var nextNode;
    var nextPos;
    var node;
    if (aLength === 0) {
        if (bLength > 0) {
            infernodistindex__mountArrayChildren(b, dom, lifecycle, context, isSVG);
        }
        return;
    } else if (bLength === 0) {
        infernodistindex__removeAllChildren(dom, a, lifecycle, isRecycling);
        return;
    }
    var aStartNode = a[aStart];
    var bStartNode = b[bStart];
    var aEndNode = a[aEnd];
    var bEndNode = b[bEnd];
    if (bStartNode.dom) {
        b[bStart] = bStartNode = infernodistindex__directClone(bStartNode);
    }
    if (bEndNode.dom) {
        b[bEnd] = bEndNode = infernodistindex__directClone(bEndNode);
    }
    // Step 1
    /* eslint no-constant-condition: 0 */
    outer: while (true) {
        // Sync nodes with the same key at the beginning.
        while (aStartNode.key === bStartNode.key) {
            infernodistindex__patch(aStartNode, bStartNode, dom, lifecycle, context, isSVG, isRecycling);
            aStart++;
            bStart++;
            if (aStart > aEnd || bStart > bEnd) {
                break outer;
            }
            aStartNode = a[aStart];
            bStartNode = b[bStart];
            if (bStartNode.dom) {
                b[bStart] = bStartNode = infernodistindex__directClone(bStartNode);
            }
        }
        // Sync nodes with the same key at the end.
        while (aEndNode.key === bEndNode.key) {
            infernodistindex__patch(aEndNode, bEndNode, dom, lifecycle, context, isSVG, isRecycling);
            aEnd--;
            bEnd--;
            if (aStart > aEnd || bStart > bEnd) {
                break outer;
            }
            aEndNode = a[aEnd];
            bEndNode = b[bEnd];
            if (bEndNode.dom) {
                b[bEnd] = bEndNode = infernodistindex__directClone(bEndNode);
            }
        }
        // Move and sync nodes from right to left.
        if (aEndNode.key === bStartNode.key) {
            infernodistindex__patch(aEndNode, bStartNode, dom, lifecycle, context, isSVG, isRecycling);
            infernodistindex__insertOrAppend(dom, bStartNode.dom, aStartNode.dom);
            aEnd--;
            bStart++;
            aEndNode = a[aEnd];
            bStartNode = b[bStart];
            if (bStartNode.dom) {
                b[bStart] = bStartNode = infernodistindex__directClone(bStartNode);
            }
            continue;
        }
        // Move and sync nodes from left to right.
        if (aStartNode.key === bEndNode.key) {
            infernodistindex__patch(aStartNode, bEndNode, dom, lifecycle, context, isSVG, isRecycling);
            nextPos = bEnd + 1;
            nextNode = nextPos < b.length ? b[nextPos].dom : null;
            infernodistindex__insertOrAppend(dom, bEndNode.dom, nextNode);
            aStart++;
            bEnd--;
            aStartNode = a[aStart];
            bEndNode = b[bEnd];
            if (bEndNode.dom) {
                b[bEnd] = bEndNode = infernodistindex__directClone(bEndNode);
            }
            continue;
        }
        break;
    }
    if (aStart > aEnd) {
        if (bStart <= bEnd) {
            nextPos = bEnd + 1;
            nextNode = nextPos < b.length ? b[nextPos].dom : null;
            while (bStart <= bEnd) {
                node = b[bStart];
                if (node.dom) {
                    b[bStart] = node = infernodistindex__directClone(node);
                }
                bStart++;
                infernodistindex__insertOrAppend(dom, infernodistindex__mount(node, null, lifecycle, context, isSVG), nextNode);
            }
        }
    } else if (bStart > bEnd) {
        while (aStart <= aEnd) {
            infernodistindex__unmount(a[aStart++], dom, lifecycle, false, isRecycling);
        }
    } else {
        aLength = aEnd - aStart + 1;
        bLength = bEnd - bStart + 1;
        var sources = new Array(bLength);
        // Mark all nodes as inserted.
        for (i = 0; i < bLength; i++) {
            sources[i] = -1;
        }
        var moved = false;
        var pos = 0;
        var patched = 0;
        // When sizes are small, just loop them through
        if (bLength <= 4 || aLength * bLength <= 16) {
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLength) {
                    for (j = bStart; j <= bEnd; j++) {
                        bNode = b[j];
                        if (aNode.key === bNode.key) {
                            sources[j - bStart] = i;
                            if (pos > j) {
                                moved = true;
                            } else {
                                pos = j;
                            }
                            if (bNode.dom) {
                                b[j] = bNode = infernodistindex__directClone(bNode);
                            }
                            infernodistindex__patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
                            patched++;
                            a[i] = null;
                            break;
                        }
                    }
                }
            }
        } else {
            var keyIndex = new Map();
            // Map keys by their index in array
            for (i = bStart; i <= bEnd; i++) {
                keyIndex.set(b[i].key, i);
            }
            // Try to patch same keys
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLength) {
                    j = keyIndex.get(aNode.key);
                    if (!infernodistindex__isUndefined(j)) {
                        bNode = b[j];
                        sources[j - bStart] = i;
                        if (pos > j) {
                            moved = true;
                        } else {
                            pos = j;
                        }
                        if (bNode.dom) {
                            b[j] = bNode = infernodistindex__directClone(bNode);
                        }
                        infernodistindex__patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
                        patched++;
                        a[i] = null;
                    }
                }
            }
        }
        // fast-path: if nothing patched remove all old and add all new
        if (aLength === a.length && patched === 0) {
            infernodistindex__removeAllChildren(dom, a, lifecycle, isRecycling);
            while (bStart < bLength) {
                node = b[bStart];
                if (node.dom) {
                    b[bStart] = node = infernodistindex__directClone(node);
                }
                bStart++;
                infernodistindex__insertOrAppend(dom, infernodistindex__mount(node, null, lifecycle, context, isSVG), null);
            }
        } else {
            i = aLength - patched;
            while (i > 0) {
                aNode = a[aStart++];
                if (!infernodistindex__isNull(aNode)) {
                    infernodistindex__unmount(aNode, dom, lifecycle, true, isRecycling);
                    i--;
                }
            }
            if (moved) {
                var seq = infernodistindex__lis_algorithm(sources);
                j = seq.length - 1;
                for (i = bLength - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = infernodistindex__directClone(node);
                        }
                        nextPos = pos + 1;
                        nextNode = nextPos < b.length ? b[nextPos].dom : null;
                        infernodistindex__insertOrAppend(dom, infernodistindex__mount(node, null, lifecycle, context, isSVG), nextNode);
                    } else {
                        if (j < 0 || i !== seq[j]) {
                            pos = i + bStart;
                            node = b[pos];
                            nextPos = pos + 1;
                            nextNode = nextPos < b.length ? b[nextPos].dom : null;
                            infernodistindex__insertOrAppend(dom, node.dom, nextNode);
                        } else {
                            j--;
                        }
                    }
                }
            } else if (patched !== bLength) {
                // when patched count doesn't match b length we need to insert those new ones
                // loop backwards so we can use insertBefore
                for (i = bLength - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = infernodistindex__directClone(node);
                        }
                        nextPos = pos + 1;
                        nextNode = nextPos < b.length ? b[nextPos].dom : null;
                        infernodistindex__insertOrAppend(dom, infernodistindex__mount(node, null, lifecycle, context, isSVG), nextNode);
                    }
                }
            }
        }
    }
}
// // https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function infernodistindex__lis_algorithm(arr) {
    var p = arr.slice(0);
    var result = [0];
    var i;
    var j;
    var u;
    var v;
    var c;
    var len = arr.length;
    for (i = 0; i < len; i++) {
        var arrI = arr[i];
        if (arrI === -1) {
            continue;
        }
        j = result[result.length - 1];
        if (arr[j] < arrI) {
            p[i] = j;
            result.push(i);
            continue;
        }
        u = 0;
        v = result.length - 1;
        while (u < v) {
            c = (u + v) / 2 | 0;
            if (arr[result[c]] < arrI) {
                u = c + 1;
            } else {
                v = c;
            }
        }
        if (arrI < arr[result[u]]) {
            if (u > 0) {
                p[i] = result[u - 1];
            }
            result[u] = i;
        }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
        result[u] = v;
        v = p[v];
    }
    return result;
}
function infernodistindex__isAttrAnEvent(attr) {
    return attr[0] === "o" && attr[1] === "n";
}
function infernodistindex__patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue) {
    if (lastValue !== nextValue) {
        if (infernodistindex__skipProps.has(prop) || hasControlledValue && prop === "value") {
            return;
        } else if (infernodistindex__booleanProps.has(prop)) {
            prop = prop === "autoFocus" ? prop.toLowerCase() : prop;
            dom[prop] = !!nextValue;
        } else if (infernodistindex__strictProps.has(prop)) {
            var value = infernodistindex__isNullOrUndef(nextValue) ? "" : nextValue;
            if (dom[prop] !== value) {
                dom[prop] = value;
            }
        } else if (infernodistindex__isAttrAnEvent(prop)) {
            infernodistindex__patchEvent(prop, lastValue, nextValue, dom);
        } else if (infernodistindex__isNullOrUndef(nextValue)) {
            dom.removeAttribute(prop);
        } else if (prop === "style") {
            infernodistindex__patchStyle(lastValue, nextValue, dom);
        } else if (prop === "dangerouslySetInnerHTML") {
            var lastHtml = lastValue && lastValue.__html;
            var nextHtml = nextValue && nextValue.__html;
            if (lastHtml !== nextHtml) {
                if (!infernodistindex__isNullOrUndef(nextHtml)) {
                    dom.innerHTML = nextHtml;
                }
            }
        } else {
            // We optimize for NS being boolean. Its 99.9% time false
            if (isSVG && infernodistindex__namespaces.has(prop)) {
                // If we end up in this path we can read property again
                dom.setAttributeNS(infernodistindex__namespaces.get(prop), prop, nextValue);
            } else {
                dom.setAttribute(prop, nextValue);
            }
        }
    }
}
function infernodistindex__patchEvent(name, lastValue, nextValue, dom) {
    if (lastValue !== nextValue) {
        if (infernodistindex__delegatedEvents.has(name)) {
            infernodistindex__handleEvent(name, lastValue, nextValue, dom);
        } else {
            var nameLowerCase = name.toLowerCase();
            var domEvent = dom[nameLowerCase];
            // if the function is wrapped, that means it's been controlled by a wrapper
            if (domEvent && domEvent.wrapped) {
                return;
            }
            if (!infernodistindex__isFunction(nextValue) && !infernodistindex__isNullOrUndef(nextValue)) {
                var linkEvent = nextValue.event;
                if (linkEvent && infernodistindex__isFunction(linkEvent)) {
                    dom[nameLowerCase] = function (e) {
                        linkEvent(nextValue.data, e);
                    };
                } else {
                    if ('development' !== "production") {
                        infernodistindex__throwError("an event on a VNode \"" + name + "\". was not a function or a valid linkEvent.");
                    }
                    infernodistindex__throwError();
                }
            } else {
                dom[nameLowerCase] = nextValue;
            }
        }
    }
}
// We are assuming here that we come from patchProp routine
// -nextAttrValue cannot be null or undefined
function infernodistindex__patchStyle(lastAttrValue, nextAttrValue, dom) {
    var domStyle = dom.style;
    var style;
    var value;
    if (infernodistindex__isString(nextAttrValue)) {
        domStyle.cssText = nextAttrValue;
        return;
    }
    if (!infernodistindex__isNullOrUndef(lastAttrValue) && !infernodistindex__isString(lastAttrValue)) {
        for (style in nextAttrValue) {
            // do not add a hasOwnProperty check here, it affects performance
            value = nextAttrValue[style];
            if (value !== lastAttrValue[style]) {
                domStyle[style] = !infernodistindex__isNumber(value) || infernodistindex__isUnitlessNumber.has(style) ? value : value + "px";
            }
        }
        for (style in lastAttrValue) {
            if (infernodistindex__isNullOrUndef(nextAttrValue[style])) {
                domStyle[style] = "";
            }
        }
    } else {
        for (style in nextAttrValue) {
            value = nextAttrValue[style];
            domStyle[style] = !infernodistindex__isNumber(value) || infernodistindex__isUnitlessNumber.has(style) ? value : value + "px";
        }
    }
}
function infernodistindex__removeProp(prop, lastValue, dom, nextFlags) {
    if (prop === "value") {
        // When removing value of select element, it needs to be set to null instead empty string, because empty string is valid value for option which makes that option selected
        // MS IE/Edge don't follow html spec for textArea and input elements and we need to set empty string to value in those cases to avoid "null" and "undefined" texts
        dom.value = nextFlags & 2048 /* SelectElement */ ? null : "";
    } else if (prop === "style") {
        dom.removeAttribute("style");
    } else if (infernodistindex__isAttrAnEvent(prop)) {
        infernodistindex__handleEvent(prop, lastValue, null, dom);
    } else {
        dom.removeAttribute(prop);
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function infernodistindex__mount(vNode, parentDom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 3970 /* Element */) {
            return infernodistindex__mountElement(vNode, parentDom, lifecycle, context, isSVG);
        } else if (flags & 28 /* Component */) {
            return infernodistindex__mountComponent(vNode, parentDom, lifecycle, context, isSVG, (flags & 4 /* ComponentClass */) > 0);
        } else if (flags & 4096 /* Void */) {
            return infernodistindex__mountVoid(vNode, parentDom);
        } else if (flags & 1 /* Text */) {
            return infernodistindex__mountText(vNode, parentDom);
        } else {
        if ('development' !== "production") {
            if (typeof vNode === "object") {
                infernodistindex__throwError("mount() received an object that's not a valid VNode, you should stringify it first. Object: \"" + JSON.stringify(vNode) + "\".");
            } else {
                infernodistindex__throwError("mount() expects a valid VNode, instead it received an object with the type \"" + typeof vNode + "\".");
            }
        }
        infernodistindex__throwError();
    }
}
function infernodistindex__mountText(vNode, parentDom) {
    var dom = document.createTextNode(vNode.children);
    vNode.dom = dom;
    if (!infernodistindex__isNull(parentDom)) {
        infernodistindex__appendChild(parentDom, dom);
    }
    return dom;
}
function infernodistindex__mountVoid(vNode, parentDom) {
    var dom = document.createTextNode("");
    vNode.dom = dom;
    if (!infernodistindex__isNull(parentDom)) {
        infernodistindex__appendChild(parentDom, dom);
    }
    return dom;
}
function infernodistindex__mountElement(vNode, parentDom, lifecycle, context, isSVG) {
    var dom;
    if (infernodistindex__options.recyclingEnabled) {
        dom = infernodistindex__recycleElement(vNode, lifecycle, context, isSVG);
        if (!infernodistindex__isNull(dom)) {
            if (!infernodistindex__isNull(parentDom)) {
                infernodistindex__appendChild(parentDom, dom);
            }
            return dom;
        }
    }
    var flags = vNode.flags;
    isSVG = isSVG || (flags & 128 /* SvgElement */) > 0;
    dom = infernodistindex__documentCreateElement(vNode.type, isSVG);
    var children = vNode.children;
    var props = vNode.props;
    var className = vNode.className;
    var ref = vNode.ref;
    vNode.dom = dom;
    if (!infernodistindex__isInvalid(children)) {
        if (infernodistindex__isStringOrNumber(children)) {
            infernodistindex__setTextContent(dom, children);
        } else {
            var childrenIsSVG = isSVG === true && vNode.type !== "foreignObject";
            if (infernodistindex__isArray(children)) {
                infernodistindex__mountArrayChildren(children, dom, lifecycle, context, childrenIsSVG);
            } else if (infernodistindex__isVNode(children)) {
                infernodistindex__mount(children, dom, lifecycle, context, childrenIsSVG);
            }
        }
    }
    if (!infernodistindex__isNull(props)) {
        var hasControlledValue = false;
        var isFormElement = (flags & 3584 /* FormElement */) > 0;
        if (isFormElement) {
            hasControlledValue = infernodistindex__isControlledFormElement(props);
        }
        for (var prop in props) {
            // do not add a hasOwnProperty check here, it affects performance
            infernodistindex__patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue);
        }
        if (isFormElement) {
            infernodistindex__processElement(flags, vNode, dom, props, true, hasControlledValue);
        }
    }
    if (className !== null) {
        if (isSVG) {
            dom.setAttribute("class", className);
        } else {
            dom.className = className;
        }
    }
    if (!infernodistindex__isNull(ref)) {
        infernodistindex__mountRef(dom, ref, lifecycle);
    }
    if (!infernodistindex__isNull(parentDom)) {
        infernodistindex__appendChild(parentDom, dom);
    }
    return dom;
}
function infernodistindex__mountArrayChildren(children, dom, lifecycle, context, isSVG) {
    for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        // Verify can string/number be here. might cause de-opt. - Normalization takes care of it.
        if (!infernodistindex__isInvalid(child)) {
            if (child.dom) {
                children[i] = child = infernodistindex__directClone(child);
            }
            infernodistindex__mount(children[i], dom, lifecycle, context, isSVG);
        }
    }
}
function infernodistindex__mountComponent(vNode, parentDom, lifecycle, context, isSVG, isClass) {
    var dom;
    if (infernodistindex__options.recyclingEnabled) {
        dom = infernodistindex__recycleComponent(vNode, lifecycle, context, isSVG);
        if (!infernodistindex__isNull(dom)) {
            if (!infernodistindex__isNull(parentDom)) {
                infernodistindex__appendChild(parentDom, dom);
            }
            return dom;
        }
    }
    var type = vNode.type;
    var props = vNode.props || infernodistindex__EMPTY_OBJ;
    var ref = vNode.ref;
    if (isClass) {
        var instance = infernodistindex__createClassComponentInstance(vNode, type, props, context, isSVG, lifecycle);
        var input = instance._lastInput;
        instance._vNode = vNode;
        vNode.dom = dom = infernodistindex__mount(input, null, lifecycle, instance._childContext, isSVG);
        if (!infernodistindex__isNull(parentDom)) {
            infernodistindex__appendChild(parentDom, dom);
        }
        infernodistindex__mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
        instance._updating = false;
        if (infernodistindex__options.findDOMNodeEnabled) {
            infernodistindex__componentToDOMNodeMap.set(instance, dom);
        }
    } else {
        var input$1 = infernodistindex__createFunctionalComponentInput(vNode, type, props, context);
        vNode.dom = dom = infernodistindex__mount(input$1, null, lifecycle, context, isSVG);
        vNode.children = input$1;
        infernodistindex__mountFunctionalComponentCallbacks(props, ref, dom, lifecycle);
        if (!infernodistindex__isNull(parentDom)) {
            infernodistindex__appendChild(parentDom, dom);
        }
    }
    return dom;
}
function infernodistindex__mountClassComponentCallbacks(vNode, ref, instance, lifecycle) {
    if (ref) {
        if (infernodistindex__isFunction(ref)) {
            ref(instance);
        } else {
            if ('development' !== "production") {
                if (infernodistindex__isStringOrNumber(ref)) {
                    infernodistindex__throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
                } else if (infernodistindex__isObject(ref) && vNode.flags & 4 /* ComponentClass */) {
                        infernodistindex__throwError("functional component lifecycle events are not supported on ES2015 class components.");
                    } else {
                    infernodistindex__throwError("a bad value for \"ref\" was used on component: \"" + JSON.stringify(ref) + "\"");
                }
            }
            infernodistindex__throwError();
        }
    }
    var hasDidMount = !infernodistindex__isUndefined(instance.componentDidMount);
    var afterMount = infernodistindex__options.afterMount;
    if (hasDidMount || !infernodistindex__isNull(afterMount)) {
        lifecycle.addListener(function () {
            instance._updating = true;
            if (afterMount) {
                afterMount(vNode);
            }
            if (hasDidMount) {
                instance.componentDidMount();
            }
            instance._updating = false;
        });
    }
}
function infernodistindex__mountFunctionalComponentCallbacks(props, ref, dom, lifecycle) {
    if (ref) {
        if (!infernodistindex__isNullOrUndef(ref.onComponentWillMount)) {
            ref.onComponentWillMount(props);
        }
        if (!infernodistindex__isNullOrUndef(ref.onComponentDidMount)) {
            lifecycle.addListener(function () {
                return ref.onComponentDidMount(dom, props);
            });
        }
    }
}
function infernodistindex__mountRef(dom, value, lifecycle) {
    if (infernodistindex__isFunction(value)) {
        lifecycle.addListener(function () {
            return value(dom);
        });
    } else {
        if (infernodistindex__isInvalid(value)) {
            return;
        }
        if ('development' !== "production") {
            infernodistindex__throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
        }
        infernodistindex__throwError();
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
// We need EMPTY_OBJ defined in one place.
// Its used for comparison so we cant inline it into shared
var infernodistindex__EMPTY_OBJ = {};
if ('development' !== "production") {
    Object.freeze(infernodistindex__EMPTY_OBJ);
}
function infernodistindex__createClassComponentInstance(vNode, Component, props, context, isSVG, lifecycle) {
    if (infernodistindex__isUndefined(context)) {
        context = infernodistindex__EMPTY_OBJ; // Context should not be mutable
    }
    var instance = new Component(props, context);
    vNode.children = instance;
    instance._blockSetState = false;
    instance.context = context;
    if (instance.props === infernodistindex__EMPTY_OBJ) {
        instance.props = props;
    }
    // setState callbacks must fire after render is done when called from componentWillReceiveProps or componentWillMount
    instance._lifecycle = lifecycle;
    instance._unmounted = false;
    instance._pendingSetState = true;
    instance._isSVG = isSVG;
    if (!infernodistindex__isNullOrUndef(instance.componentWillMount)) {
        instance._blockRender = true;
        instance.componentWillMount();
        instance._blockRender = false;
    }
    var childContext;
    if (!infernodistindex__isNullOrUndef(instance.getChildContext)) {
        childContext = instance.getChildContext();
    }
    if (infernodistindex__isNullOrUndef(childContext)) {
        instance._childContext = context;
    } else {
        instance._childContext = infernodistindex__combineFrom(context, childContext);
    }
    if (!infernodistindex__isNull(infernodistindex__options.beforeRender)) {
        infernodistindex__options.beforeRender(instance);
    }
    var input = instance.render(props, instance.state, context);
    if (!infernodistindex__isNull(infernodistindex__options.afterRender)) {
        infernodistindex__options.afterRender(instance);
    }
    if (infernodistindex__isArray(input)) {
        if ('development' !== "production") {
            infernodistindex__throwError("a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.");
        }
        infernodistindex__throwError();
    } else if (infernodistindex__isInvalid(input)) {
        input = infernodistindex__createVoidVNode();
    } else if (infernodistindex__isStringOrNumber(input)) {
        input = infernodistindex__createTextVNode(input, null);
    } else {
        if (input.dom) {
            input = infernodistindex__directClone(input);
        }
        if (input.flags & 28 /* Component */) {
                // if we have an input that is also a component, we run into a tricky situation
                // where the root vNode needs to always have the correct DOM entry
                // so we break monomorphism on our input and supply it our vNode as parentVNode
                // we can optimise this in the future, but this gets us out of a lot of issues
                input.parentVNode = vNode;
            }
    }
    instance._pendingSetState = false;
    instance._lastInput = input;
    return instance;
}
function infernodistindex__replaceLastChildAndUnmount(lastInput, nextInput, parentDom, lifecycle, context, isSVG, isRecycling) {
    infernodistindex__replaceVNode(parentDom, infernodistindex__mount(nextInput, null, lifecycle, context, isSVG), lastInput, lifecycle, isRecycling);
}
function infernodistindex__replaceVNode(parentDom, dom, vNode, lifecycle, isRecycling) {
    infernodistindex__unmount(vNode, null, lifecycle, false, isRecycling);
    infernodistindex__replaceChild(parentDom, dom, vNode.dom);
}
function infernodistindex__createFunctionalComponentInput(vNode, component, props, context) {
    var input = component(props, context);
    if (infernodistindex__isArray(input)) {
        if ('development' !== "production") {
            infernodistindex__throwError("a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.");
        }
        infernodistindex__throwError();
    } else if (infernodistindex__isInvalid(input)) {
        input = infernodistindex__createVoidVNode();
    } else if (infernodistindex__isStringOrNumber(input)) {
        input = infernodistindex__createTextVNode(input, null);
    } else {
        if (input.dom) {
            input = infernodistindex__directClone(input);
        }
        if (input.flags & 28 /* Component */) {
                // if we have an input that is also a component, we run into a tricky situation
                // where the root vNode needs to always have the correct DOM entry
                // so we break monomorphism on our input and supply it our vNode as parentVNode
                // we can optimise this in the future, but this gets us out of a lot of issues
                input.parentVNode = vNode;
            }
    }
    return input;
}
function infernodistindex__setTextContent(dom, text) {
    if (text !== "") {
        dom.textContent = text;
    } else {
        dom.appendChild(document.createTextNode(""));
    }
}
function infernodistindex__updateTextContent(dom, text) {
    dom.firstChild.nodeValue = text;
}
function infernodistindex__appendChild(parentDom, dom) {
    parentDom.appendChild(dom);
}
function infernodistindex__insertOrAppend(parentDom, newNode, nextNode) {
    if (infernodistindex__isNullOrUndef(nextNode)) {
        infernodistindex__appendChild(parentDom, newNode);
    } else {
        parentDom.insertBefore(newNode, nextNode);
    }
}
function infernodistindex__documentCreateElement(tag, isSVG) {
    if (isSVG === true) {
        return document.createElementNS(infernodistindex__svgNS, tag);
    } else {
        return document.createElement(tag);
    }
}
function infernodistindex__replaceWithNewNode(lastNode, nextNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    infernodistindex__unmount(lastNode, null, lifecycle, false, isRecycling);
    var dom = infernodistindex__mount(nextNode, null, lifecycle, context, isSVG);
    nextNode.dom = dom;
    infernodistindex__replaceChild(parentDom, dom, lastNode.dom);
}
function infernodistindex__replaceChild(parentDom, nextDom, lastDom) {
    if (!parentDom) {
        parentDom = lastDom.parentNode;
    }
    parentDom.replaceChild(nextDom, lastDom);
}
function infernodistindex__removeChild(parentDom, dom) {
    parentDom.removeChild(dom);
}
function infernodistindex__removeAllChildren(dom, children, lifecycle, isRecycling) {
    if (!infernodistindex__options.recyclingEnabled || infernodistindex__options.recyclingEnabled && !isRecycling) {
        infernodistindex__removeChildren(null, children, lifecycle, isRecycling);
    }
    dom.textContent = "";
}
function infernodistindex__removeChildren(dom, children, lifecycle, isRecycling) {
    for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        if (!infernodistindex__isInvalid(child)) {
            infernodistindex__unmount(child, dom, lifecycle, true, isRecycling);
        }
    }
}
function infernodistindex__isKeyed(lastChildren, nextChildren) {
    return nextChildren.length > 0 && !infernodistindex__isNullOrUndef(nextChildren[0]) && !infernodistindex__isNullOrUndef(nextChildren[0].key) && lastChildren.length > 0 && !infernodistindex__isNullOrUndef(lastChildren[0]) && !infernodistindex__isNullOrUndef(lastChildren[0].key);
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function infernodistindex__VNode(children, className, flags, key, props, ref, type) {
    this.children = children;
    this.className = className;
    this.dom = null;
    this.flags = flags;
    this.key = key;
    this.props = props;
    this.ref = ref;
    this.type = type;
}
/**
 * Creates virtual node
 * @param {number} flags
 * @param {string|Function|null} type
 * @param {string|null=} className
 * @param {object=} children
 * @param {object=} props
 * @param {*=} key
 * @param {object|Function=} ref
 * @param {boolean=} noNormalise
 * @returns {VNode} returns new virtual node
 */
function infernodistindex__createVNode(flags, type, className, children, props, key, ref, noNormalise) {
    if (flags & 16 /* ComponentUnknown */) {
            flags = infernodistindex__isStatefulComponent(type) ? 4 /* ComponentClass */
            : 8 /* ComponentFunction */;
        }
    var vNode = new infernodistindex__VNode(children === void 0 ? null : children, className === void 0 ? null : className, flags, key === void 0 ? null : key, props === void 0 ? null : props, ref === void 0 ? null : ref, type);
    if (noNormalise !== true) {
        infernodistindex__normalize(vNode);
    }
    if (infernodistindex__options.createVNode !== null) {
        infernodistindex__options.createVNode(vNode);
    }
    return vNode;
}
function infernodistindex__directClone(vNodeToClone) {
    var newVNode;
    var flags = vNodeToClone.flags;
    if (flags & 28 /* Component */) {
            var props;
            var propsToClone = vNodeToClone.props;
            if (infernodistindex__isNull(propsToClone)) {
                props = infernodistindex__EMPTY_OBJ;
            } else {
                props = {};
                for (var key in propsToClone) {
                    props[key] = propsToClone[key];
                }
            }
            newVNode = infernodistindex__createVNode(flags, vNodeToClone.type, null, null, props, vNodeToClone.key, vNodeToClone.ref, true);
            var newProps = newVNode.props;
            var newChildren = newProps.children;
            // we need to also clone component children that are in props
            // as the children may also have been hoisted
            if (newChildren) {
                if (infernodistindex__isArray(newChildren)) {
                    var len = newChildren.length;
                    if (len > 0) {
                        var tmpArray = [];
                        for (var i = 0; i < len; i++) {
                            var child = newChildren[i];
                            if (infernodistindex__isStringOrNumber(child)) {
                                tmpArray.push(child);
                            } else if (!infernodistindex__isInvalid(child) && infernodistindex__isVNode(child)) {
                                tmpArray.push(infernodistindex__directClone(child));
                            }
                        }
                        newProps.children = tmpArray;
                    }
                } else if (infernodistindex__isVNode(newChildren)) {
                    newProps.children = infernodistindex__directClone(newChildren);
                }
            }
            newVNode.children = null;
        } else if (flags & 3970 /* Element */) {
            var children = vNodeToClone.children;
            var props$1;
            var propsToClone$1 = vNodeToClone.props;
            if (propsToClone$1 === null) {
                props$1 = infernodistindex__EMPTY_OBJ;
            } else {
                props$1 = {};
                for (var key$1 in propsToClone$1) {
                    props$1[key$1] = propsToClone$1[key$1];
                }
            }
            newVNode = infernodistindex__createVNode(flags, vNodeToClone.type, vNodeToClone.className, children, props$1, vNodeToClone.key, vNodeToClone.ref, !children);
        } else if (flags & 1 /* Text */) {
            newVNode = infernodistindex__createTextVNode(vNodeToClone.children, vNodeToClone.key);
        }
    return newVNode;
}
/*
 directClone is preferred over cloneVNode and used internally also.
 This function makes Inferno backwards compatible.
 And can be tree-shaked by modern bundlers

 Would be nice to combine this with directClone but could not do it without breaking change
 */
/**
 * Clones given virtual node by creating new instance of it
 * @param {VNode} vNodeToClone virtual node to be cloned
 * @param {Props=} props additional props for new virtual node
 * @param {...*} _children new children for new virtual node
 * @returns {VNode} new virtual node
 */
function infernodistindex__cloneVNode(vNodeToClone, props) {
    var _children = [],
        len$2 = arguments.length - 2;
    while (len$2-- > 0) _children[len$2] = arguments[len$2 + 2];

    var children = _children;
    var childrenLen = _children.length;
    if (childrenLen > 0 && !infernodistindex__isUndefined(_children[0])) {
        if (!props) {
            props = {};
        }
        if (childrenLen === 1) {
            children = _children[0];
        }
        if (!infernodistindex__isUndefined(children)) {
            props.children = children;
        }
    }
    var newVNode;
    if (infernodistindex__isArray(vNodeToClone)) {
        var tmpArray = [];
        for (var i = 0, len = vNodeToClone.length; i < len; i++) {
            tmpArray.push(infernodistindex__directClone(vNodeToClone[i]));
        }
        newVNode = tmpArray;
    } else {
        var flags = vNodeToClone.flags;
        var className = vNodeToClone.className;
        var key = vNodeToClone.key;
        var ref = vNodeToClone.ref;
        if (props) {
            if (props.hasOwnProperty("className")) {
                className = props.className;
            }
            if (props.hasOwnProperty("ref")) {
                ref = props.ref;
            }
            if (props.hasOwnProperty("key")) {
                key = props.key;
            }
        }
        if (flags & 28 /* Component */) {
                newVNode = infernodistindex__createVNode(flags, vNodeToClone.type, className, null, !vNodeToClone.props && !props ? infernodistindex__EMPTY_OBJ : infernodistindex__combineFrom(vNodeToClone.props, props), key, ref, true);
                var newProps = newVNode.props;
                if (newProps) {
                    var newChildren = newProps.children;
                    // we need to also clone component children that are in props
                    // as the children may also have been hoisted
                    if (newChildren) {
                        if (infernodistindex__isArray(newChildren)) {
                            var len$1 = newChildren.length;
                            if (len$1 > 0) {
                                var tmpArray$1 = [];
                                for (var i$1 = 0; i$1 < len$1; i$1++) {
                                    var child = newChildren[i$1];
                                    if (infernodistindex__isStringOrNumber(child)) {
                                        tmpArray$1.push(child);
                                    } else if (!infernodistindex__isInvalid(child) && infernodistindex__isVNode(child)) {
                                        tmpArray$1.push(infernodistindex__directClone(child));
                                    }
                                }
                                newProps.children = tmpArray$1;
                            }
                        } else if (infernodistindex__isVNode(newChildren)) {
                            newProps.children = infernodistindex__directClone(newChildren);
                        }
                    }
                }
                newVNode.children = null;
            } else if (flags & 3970 /* Element */) {
                children = props && !infernodistindex__isUndefined(props.children) ? props.children : vNodeToClone.children;
                newVNode = infernodistindex__createVNode(flags, vNodeToClone.type, className, children, !vNodeToClone.props && !props ? infernodistindex__EMPTY_OBJ : infernodistindex__combineFrom(vNodeToClone.props, props), key, ref, false);
            } else if (flags & 1 /* Text */) {
                newVNode = infernodistindex__createTextVNode(vNodeToClone.children, key);
            }
    }
    return newVNode;
}
function infernodistindex__createVoidVNode() {
    return infernodistindex__createVNode(4096 /* Void */, null);
}
function infernodistindex__createTextVNode(text, key) {
    return infernodistindex__createVNode(1 /* Text */, null, null, text, null, key);
}
function infernodistindex__isVNode(o) {
    return !!o.flags;
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function infernodistindex__applyKey(key, vNode) {
    vNode.key = key;
    return vNode;
}
function infernodistindex__applyKeyIfMissing(key, vNode) {
    if (infernodistindex__isNumber(key)) {
        key = "." + key;
    }
    if (infernodistindex__isNull(vNode.key) || vNode.key[0] === ".") {
        return infernodistindex__applyKey(key, vNode);
    }
    return vNode;
}
function infernodistindex__applyKeyPrefix(key, vNode) {
    vNode.key = key + vNode.key;
    return vNode;
}
function infernodistindex___normalizeVNodes(nodes, result, index, currentKey) {
    for (var len = nodes.length; index < len; index++) {
        var n = nodes[index];
        var key = currentKey + "." + index;
        if (!infernodistindex__isInvalid(n)) {
            if (infernodistindex__isArray(n)) {
                infernodistindex___normalizeVNodes(n, result, 0, key);
            } else {
                if (infernodistindex__isStringOrNumber(n)) {
                    n = infernodistindex__createTextVNode(n, null);
                } else if (infernodistindex__isVNode(n) && n.dom || n.key && n.key[0] === ".") {
                    n = infernodistindex__directClone(n);
                }
                if (infernodistindex__isNull(n.key) || n.key[0] === ".") {
                    n = infernodistindex__applyKey(key, n);
                } else {
                    n = infernodistindex__applyKeyPrefix(currentKey, n);
                }
                result.push(n);
            }
        }
    }
}
function infernodistindex__normalizeVNodes(nodes) {
    var newNodes;
    // we assign $ which basically means we've flagged this array for future note
    // if it comes back again, we need to clone it, as people are using it
    // in an immutable way
    // tslint:disable
    if (nodes["$"] === true) {
        nodes = nodes.slice();
    } else {
        nodes["$"] = true;
    }
    // tslint:enable
    for (var i = 0, len = nodes.length; i < len; i++) {
        var n = nodes[i];
        if (infernodistindex__isInvalid(n) || infernodistindex__isArray(n)) {
            var result = (newNodes || nodes).slice(0, i);
            infernodistindex___normalizeVNodes(nodes, result, i, "");
            return result;
        } else if (infernodistindex__isStringOrNumber(n)) {
            if (!newNodes) {
                newNodes = nodes.slice(0, i);
            }
            newNodes.push(infernodistindex__applyKeyIfMissing(i, infernodistindex__createTextVNode(n, null)));
        } else if (infernodistindex__isVNode(n) && n.dom !== null || infernodistindex__isNull(n.key) && (n.flags & 64 /* HasNonKeyedChildren */) === 0) {
            if (!newNodes) {
                newNodes = nodes.slice(0, i);
            }
            newNodes.push(infernodistindex__applyKeyIfMissing(i, infernodistindex__directClone(n)));
        } else if (newNodes) {
            newNodes.push(infernodistindex__applyKeyIfMissing(i, infernodistindex__directClone(n)));
        }
    }
    return newNodes || nodes;
}
function infernodistindex__normalizeChildren(children) {
    if (infernodistindex__isArray(children)) {
        return infernodistindex__normalizeVNodes(children);
    } else if (infernodistindex__isVNode(children) && children.dom !== null) {
        return infernodistindex__directClone(children);
    }
    return children;
}
function infernodistindex__normalizeProps(vNode, props, children) {
    if (vNode.flags & 3970 /* Element */) {
            if (infernodistindex__isNullOrUndef(children) && props.hasOwnProperty("children")) {
                vNode.children = props.children;
            }
            if (props.hasOwnProperty("className")) {
                vNode.className = props.className || null;
                delete props.className;
            }
        }
    if (props.hasOwnProperty("ref")) {
        vNode.ref = props.ref;
        delete props.ref;
    }
    if (props.hasOwnProperty("key")) {
        vNode.key = props.key;
        delete props.key;
    }
}
function infernodistindex__getFlagsForElementVnode(type) {
    if (type === "svg") {
        return 128 /* SvgElement */;
    } else if (type === "input") {
        return 512 /* InputElement */;
    } else if (type === "select") {
        return 2048 /* SelectElement */;
    } else if (type === "textarea") {
        return 1024 /* TextareaElement */;
    } else if (type === "media") {
        return 256 /* MediaElement */;
    }
    return 2 /* HtmlElement */;
}
function infernodistindex__normalize(vNode) {
    var props = vNode.props;
    var children = vNode.children;
    // convert a wrongly created type back to element
    // Primitive node doesn't have defaultProps, only Component
    if (vNode.flags & 28 /* Component */) {
            // set default props
            var type = vNode.type;
            var defaultProps = type.defaultProps;
            if (!infernodistindex__isNullOrUndef(defaultProps)) {
                if (!props) {
                    props = vNode.props = defaultProps; // Create new object if only defaultProps given
                } else {
                    for (var prop in defaultProps) {
                        if (infernodistindex__isUndefined(props[prop])) {
                            props[prop] = defaultProps[prop];
                        }
                    }
                }
            }
            if (infernodistindex__isString(type)) {
                vNode.flags = infernodistindex__getFlagsForElementVnode(type);
                if (props && props.children) {
                    vNode.children = props.children;
                    children = props.children;
                }
            }
        }
    if (props) {
        infernodistindex__normalizeProps(vNode, props, children);
        if (!infernodistindex__isInvalid(props.children)) {
            props.children = infernodistindex__normalizeChildren(props.children);
        }
    }
    if (!infernodistindex__isInvalid(children)) {
        vNode.children = infernodistindex__normalizeChildren(children);
    }
    if ('development' !== "production") {
        // This code will be stripped out from production CODE
        // It helps users to track errors in their applications.
        var verifyKeys = function (vNodes) {
            var keyValues = vNodes.map(function (vnode) {
                return vnode.key;
            });
            keyValues.some(function (item, idx) {
                var hasDuplicate = keyValues.indexOf(item) !== idx;
                if (hasDuplicate) {
                    infernodistindex__warning("Inferno normalisation(...): Encountered two children with same key, all keys must be unique within its siblings. Duplicated key is:" + item);
                }
                return hasDuplicate;
            });
        };
        if (vNode.children && Array.isArray(vNode.children)) {
            verifyKeys(vNode.children);
        }
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
/**
 * Links given data to event as first parameter
 * @param {*} data data to be linked, it will be available in function as first parameter
 * @param {Function} event Function to be called when event occurs
 * @returns {{data: *, event: Function}}
 */
function infernodistindex__linkEvent(data, event) {
    if (infernodistindex__isFunction(event)) {
        return { data: data, event: event };
    }
    return null; // Return null when event is invalid, to avoid creating unnecessary event handlers
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
/* tslint:disable:object-literal-sort-keys */
if ('development' !== "production") {
    /* tslint:disable-next-line:no-empty */
    var infernodistindex__testFunc = function testFn() {};
    if ((infernodistindex__testFunc.name || infernodistindex__testFunc.toString()).indexOf("testFn") === -1) {
        infernodistindex__warning("It looks like you're using a minified copy of the development build " + "of Inferno. When deploying Inferno apps to production, make sure to use " + "the production build which skips development warnings and is faster. " + "See http://infernojs.org for more details.");
    }
}
var infernodistindex__version = "3.7.1";
// we duplicate it so it plays nicely with different module loading systems
var infernodistindex__index = {
    EMPTY_OBJ: infernodistindex__EMPTY_OBJ,
    NO_OP: infernodistindex__NO_OP,
    cloneVNode: infernodistindex__cloneVNode,
    createRenderer: infernodistindex__createRenderer,
    createVNode: infernodistindex__createVNode,
    findDOMNode: infernodistindex__findDOMNode,
    getFlagsForElementVnode: infernodistindex__getFlagsForElementVnode,
    internal_DOMNodeMap: infernodistindex__componentToDOMNodeMap,
    internal_isUnitlessNumber: infernodistindex__isUnitlessNumber,
    internal_normalize: infernodistindex__normalize,
    internal_patch: infernodistindex__patch,
    linkEvent: infernodistindex__linkEvent,
    options: infernodistindex__options,
    render: infernodistindex__render,
    version: infernodistindex__version
};

$m['inferno/dist/index'].exports['default'] = infernodistindex__index;
$m['inferno/dist/index'].exports.EMPTY_OBJ = infernodistindex__EMPTY_OBJ;
$m['inferno/dist/index'].exports.NO_OP = infernodistindex__NO_OP;
$m['inferno/dist/index'].exports.cloneVNode = infernodistindex__cloneVNode;
$m['inferno/dist/index'].exports.createRenderer = infernodistindex__createRenderer;
$m['inferno/dist/index'].exports.createVNode = infernodistindex__createVNode;
$m['inferno/dist/index'].exports.findDOMNode = infernodistindex__findDOMNode;
$m['inferno/dist/index'].exports.getFlagsForElementVnode = infernodistindex__getFlagsForElementVnode;
$m['inferno/dist/index'].exports.internal_DOMNodeMap = infernodistindex__componentToDOMNodeMap;
$m['inferno/dist/index'].exports.internal_isUnitlessNumber = infernodistindex__isUnitlessNumber;
$m['inferno/dist/index'].exports.internal_normalize = infernodistindex__normalize;
$m['inferno/dist/index'].exports.internal_patch = infernodistindex__patch;
$m['inferno/dist/index'].exports.linkEvent = infernodistindex__linkEvent;
$m['inferno/dist/index'].exports.options = infernodistindex__options;
$m['inferno/dist/index'].exports.render = infernodistindex__render;
$m['inferno/dist/index'].exports.version = infernodistindex__version;
/*≠≠ node_modules/inferno/dist/index.js ≠≠*/


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


/*== node_modules/inferno/index.js ==*/
$m['inferno'] = { exports: {} };
$m['inferno'].exports = $m['inferno/dist/index'].exports.default;
$m['inferno'].exports.default = $m['inferno'].exports;
/*≠≠ node_modules/inferno/index.js ≠≠*/


/*== node_modules/inferno-create-element/dist/index.js ==*/
$m['inferno-create-element/dist/index'] = { exports: {} };

Object.defineProperty($m['inferno-create-element/dist/index'].exports, '__esModule', { value: true });

var infernocreateelementdistindex__inferno = $m['inferno'].exports;

/**
 * @module Inferno-Shared
 */ /** TypeDoc Comment */
function infernocreateelementdistindex__isNullOrUndef(o) {
    return infernocreateelementdistindex__isUndefined(o) || infernocreateelementdistindex__isNull(o);
}
function infernocreateelementdistindex__isInvalid(o) {
    return infernocreateelementdistindex__isNull(o) || o === false || infernocreateelementdistindex__isTrue(o) || infernocreateelementdistindex__isUndefined(o);
}
function infernocreateelementdistindex__isString(o) {
    return typeof o === "string";
}
function infernocreateelementdistindex__isNull(o) {
    return o === null;
}
function infernocreateelementdistindex__isTrue(o) {
    return o === true;
}
function infernocreateelementdistindex__isUndefined(o) {
    return o === void 0;
}
function infernocreateelementdistindex__isObject(o) {
    return typeof o === "object";
}

/**
 * @module Inferno-Create-Element
 */ /** TypeDoc Comment */
var infernocreateelementdistindex__componentHooks = new Set();
infernocreateelementdistindex__componentHooks.add("onComponentWillMount");
infernocreateelementdistindex__componentHooks.add("onComponentDidMount");
infernocreateelementdistindex__componentHooks.add("onComponentWillUnmount");
infernocreateelementdistindex__componentHooks.add("onComponentShouldUpdate");
infernocreateelementdistindex__componentHooks.add("onComponentWillUpdate");
infernocreateelementdistindex__componentHooks.add("onComponentDidUpdate");
/**
 * Creates virtual node
 * @param {string|Function|Component<any, any>} type Type of node
 * @param {object=} props Optional props for virtual node
 * @param {...{object}=} _children Optional children for virtual node
 * @returns {VNode} new virtual ndoe
 */
function infernocreateelementdistindex__createElement(type, props) {
    var _children = [],
        len = arguments.length - 2;
    while (len-- > 0) _children[len] = arguments[len + 2];

    if (infernocreateelementdistindex__isInvalid(type) || infernocreateelementdistindex__isObject(type)) {
        throw new Error("Inferno Error: createElement() name parameter cannot be undefined, null, false or true, It must be a string, class or function.");
    }
    var children = _children;
    var ref = null;
    var key = null;
    var className = null;
    var flags = 0;
    var newProps;
    if (_children) {
        if (_children.length === 1) {
            children = _children[0];
        } else if (_children.length === 0) {
            children = void 0;
        }
    }
    if (infernocreateelementdistindex__isString(type)) {
        flags = infernocreateelementdistindex__inferno.getFlagsForElementVnode(type);
        if (!infernocreateelementdistindex__isNullOrUndef(props)) {
            newProps = {};
            for (var prop in props) {
                if (prop === "className" || prop === "class") {
                    className = props[prop];
                } else if (prop === "key") {
                    key = props.key;
                } else if (prop === "children" && infernocreateelementdistindex__isUndefined(children)) {
                    children = props.children; // always favour children args, default to props
                } else if (prop === "ref") {
                    ref = props.ref;
                } else {
                    newProps[prop] = props[prop];
                }
            }
        }
    } else {
        flags = 16 /* ComponentUnknown */;
        if (!infernocreateelementdistindex__isUndefined(children)) {
            if (!props) {
                props = {};
            }
            props.children = children;
            children = null;
        }
        if (!infernocreateelementdistindex__isNullOrUndef(props)) {
            newProps = {};
            for (var prop$1 in props) {
                if (infernocreateelementdistindex__componentHooks.has(prop$1)) {
                    if (!ref) {
                        ref = {};
                    }
                    ref[prop$1] = props[prop$1];
                } else if (prop$1 === "key") {
                    key = props.key;
                } else {
                    newProps[prop$1] = props[prop$1];
                }
            }
        }
    }
    return infernocreateelementdistindex__inferno.createVNode(flags, type, className, children, newProps, key, ref);
}

$m['inferno-create-element/dist/index'].exports['default'] = infernocreateelementdistindex__createElement;
/*≠≠ node_modules/inferno-create-element/dist/index.js ≠≠*/


/*== node_modules/inferno-create-element/index.js ==*/
$m['inferno-create-element'] = { exports: {} };
$m['inferno-create-element'].exports = $m['inferno-create-element/dist/index'].exports.default;
$m['inferno-create-element'].exports.default = $m['inferno-create-element'].exports;
/*≠≠ node_modules/inferno-create-element/index.js ≠≠*/


/*== node_modules/inferno-component/dist/index.js ==*/
$m['inferno-component/dist/index'] = { exports: {} };

Object.defineProperty($m['inferno-component/dist/index'].exports, '__esModule', { value: true });

var infernocomponentdistindex__inferno = $m['inferno'].exports;

/**
 * @module Inferno-Shared
 */ /** TypeDoc Comment */
var infernocomponentdistindex__NO_OP = "$NO_OP";
var infernocomponentdistindex__ERROR_MSG = "a runtime error occured! Use Inferno in development environment to find the error.";
// This should be boolean and not reference to window.document
var infernocomponentdistindex__isBrowser = !!(typeof window !== "undefined" && window.document);
// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
var infernocomponentdistindex__isArray = Array.isArray;
function infernocomponentdistindex__isStringOrNumber(o) {
    var type = typeof o;
    return type === "string" || type === "number";
}
function infernocomponentdistindex__isNullOrUndef(o) {
    return infernocomponentdistindex__isUndefined(o) || infernocomponentdistindex__isNull(o);
}
function infernocomponentdistindex__isInvalid(o) {
    return infernocomponentdistindex__isNull(o) || o === false || infernocomponentdistindex__isTrue(o) || infernocomponentdistindex__isUndefined(o);
}
function infernocomponentdistindex__isFunction(o) {
    return typeof o === "function";
}
function infernocomponentdistindex__isNull(o) {
    return o === null;
}
function infernocomponentdistindex__isTrue(o) {
    return o === true;
}
function infernocomponentdistindex__isUndefined(o) {
    return o === void 0;
}
function infernocomponentdistindex__throwError(message) {
    if (!message) {
        message = infernocomponentdistindex__ERROR_MSG;
    }
    throw new Error("Inferno Error: " + message);
}
function infernocomponentdistindex__combineFrom(first, second) {
    var out = {};
    if (first) {
        for (var key in first) {
            out[key] = first[key];
        }
    }
    if (second) {
        for (var key$1 in second) {
            out[key$1] = second[key$1];
        }
    }
    return out;
}

/**
 * @module Inferno-Component
 */ /** TypeDoc Comment */
// Make sure u use EMPTY_OBJ from 'inferno', otherwise it'll be a different reference
var infernocomponentdistindex__noOp = infernocomponentdistindex__ERROR_MSG;
if ('development' !== "production") {
    infernocomponentdistindex__noOp = "Inferno Error: Can only update a mounted or mounting component. This usually means you called setState() or forceUpdate() on an unmounted component. This is a no-op.";
}
var infernocomponentdistindex__componentCallbackQueue = new Map();
// when a components root VNode is also a component, we can run into issues
// this will recursively look for vNode.parentNode if the VNode is a component
function infernocomponentdistindex__updateParentComponentVNodes(vNode, dom) {
    if (vNode.flags & 28 /* Component */) {
            var parentVNode = vNode.parentVNode;
            if (parentVNode) {
                parentVNode.dom = dom;
                infernocomponentdistindex__updateParentComponentVNodes(parentVNode, dom);
            }
        }
}
var infernocomponentdistindex__resolvedPromise = Promise.resolve();
function infernocomponentdistindex__addToQueue(component, force, callback) {
    var queue = infernocomponentdistindex__componentCallbackQueue.get(component);
    if (queue === void 0) {
        queue = [];
        infernocomponentdistindex__componentCallbackQueue.set(component, queue);
        infernocomponentdistindex__resolvedPromise.then(function () {
            infernocomponentdistindex__componentCallbackQueue.delete(component);
            component._updating = true;
            infernocomponentdistindex__applyState(component, force, function () {
                for (var i = 0, len = queue.length; i < len; i++) {
                    queue[i].call(component);
                }
            });
            component._updating = false;
        });
    }
    if (!infernocomponentdistindex__isNullOrUndef(callback)) {
        queue.push(callback);
    }
}
function infernocomponentdistindex__queueStateChanges(component, newState, callback) {
    if (infernocomponentdistindex__isFunction(newState)) {
        newState = newState(component.state, component.props, component.context);
    }
    var pending = component._pendingState;
    if (infernocomponentdistindex__isNullOrUndef(pending)) {
        component._pendingState = pending = newState;
    } else {
        for (var stateKey in newState) {
            pending[stateKey] = newState[stateKey];
        }
    }
    if (infernocomponentdistindex__isBrowser && !component._pendingSetState && !component._blockRender) {
        if (!component._updating) {
            component._pendingSetState = true;
            component._updating = true;
            infernocomponentdistindex__applyState(component, false, callback);
            component._updating = false;
        } else {
            infernocomponentdistindex__addToQueue(component, false, callback);
        }
    } else {
        var state = component.state;
        if (state === null) {
            component.state = pending;
        } else {
            for (var key in pending) {
                state[key] = pending[key];
            }
        }
        component._pendingState = null;
        if (!infernocomponentdistindex__isNullOrUndef(callback) && component._blockRender) {
            component._lifecycle.addListener(callback.bind(component));
        }
    }
}
function infernocomponentdistindex__applyState(component, force, callback) {
    if (component._unmounted) {
        return;
    }
    if (force || !component._blockRender) {
        component._pendingSetState = false;
        var pendingState = component._pendingState;
        var prevState = component.state;
        var nextState = infernocomponentdistindex__combineFrom(prevState, pendingState);
        var props = component.props;
        var context = component.context;
        component._pendingState = null;
        var nextInput = component._updateComponent(prevState, nextState, props, props, context, force, true);
        var didUpdate = true;
        if (infernocomponentdistindex__isInvalid(nextInput)) {
            nextInput = infernocomponentdistindex__inferno.createVNode(4096 /* Void */, null);
        } else if (nextInput === infernocomponentdistindex__NO_OP) {
            nextInput = component._lastInput;
            didUpdate = false;
        } else if (infernocomponentdistindex__isStringOrNumber(nextInput)) {
            nextInput = infernocomponentdistindex__inferno.createVNode(1 /* Text */, null, null, nextInput);
        } else if (infernocomponentdistindex__isArray(nextInput)) {
            if ('development' !== "production") {
                infernocomponentdistindex__throwError("a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.");
            }
            infernocomponentdistindex__throwError();
        }
        var lastInput = component._lastInput;
        var vNode = component._vNode;
        var parentDom = lastInput.dom && lastInput.dom.parentNode || (lastInput.dom = vNode.dom);
        component._lastInput = nextInput;
        if (didUpdate) {
            var childContext;
            if (!infernocomponentdistindex__isNullOrUndef(component.getChildContext)) {
                childContext = component.getChildContext();
            }
            if (infernocomponentdistindex__isNullOrUndef(childContext)) {
                childContext = component._childContext;
            } else {
                childContext = infernocomponentdistindex__combineFrom(context, childContext);
            }
            var lifeCycle = component._lifecycle;
            infernocomponentdistindex__inferno.internal_patch(lastInput, nextInput, parentDom, lifeCycle, childContext, component._isSVG, false);
            lifeCycle.trigger();
            if (!infernocomponentdistindex__isNullOrUndef(component.componentDidUpdate)) {
                component.componentDidUpdate(props, prevState, context);
            }
            if (!infernocomponentdistindex__isNull(infernocomponentdistindex__inferno.options.afterUpdate)) {
                infernocomponentdistindex__inferno.options.afterUpdate(vNode);
            }
        }
        var dom = vNode.dom = nextInput.dom;
        if (infernocomponentdistindex__inferno.options.findDOMNodeEnabled) {
            infernocomponentdistindex__inferno.internal_DOMNodeMap.set(component, nextInput.dom);
        }
        infernocomponentdistindex__updateParentComponentVNodes(vNode, dom);
    } else {
        component.state = component._pendingState;
        component._pendingState = null;
    }
    if (!infernocomponentdistindex__isNullOrUndef(callback)) {
        callback.call(component);
    }
}
var infernocomponentdistindex__alreadyWarned = false;
var infernocomponentdistindex__Component = function Component(props, context) {
    this.state = null;
    this._blockRender = false;
    this._blockSetState = true;
    this._pendingSetState = false;
    this._pendingState = null;
    this._lastInput = null;
    this._vNode = null;
    this._unmounted = false;
    this._lifecycle = null;
    this._childContext = null;
    this._isSVG = false;
    this._updating = true;
    /** @type {object} */
    this.props = props || infernocomponentdistindex__inferno.EMPTY_OBJ;
    /** @type {object} */
    this.context = context || infernocomponentdistindex__inferno.EMPTY_OBJ; // context should not be mutable
};
infernocomponentdistindex__Component.prototype.forceUpdate = function forceUpdate(callback) {
    if (this._unmounted || !infernocomponentdistindex__isBrowser) {
        return;
    }
    infernocomponentdistindex__applyState(this, true, callback);
};
infernocomponentdistindex__Component.prototype.setState = function setState(newState, callback) {
    if (this._unmounted) {
        return;
    }
    if (!this._blockSetState) {
        infernocomponentdistindex__queueStateChanges(this, newState, callback);
    } else {
        if ('development' !== "production") {
            infernocomponentdistindex__throwError("cannot update state via setState() in componentWillUpdate() or constructor.");
        }
        infernocomponentdistindex__throwError();
    }
};
infernocomponentdistindex__Component.prototype.setStateSync = function setStateSync(newState) {
    if ('development' !== "production") {
        if (!infernocomponentdistindex__alreadyWarned) {
            infernocomponentdistindex__alreadyWarned = true;
            // tslint:disable-next-line:no-console
            console.warn("Inferno WARNING: setStateSync has been deprecated and will be removed in next release. Use setState instead.");
        }
    }
    this.setState(newState);
};
infernocomponentdistindex__Component.prototype._updateComponent = function _updateComponent(prevState, nextState, prevProps, nextProps, context, force, fromSetState) {
    if (this._unmounted === true) {
        if ('development' !== "production") {
            infernocomponentdistindex__throwError(infernocomponentdistindex__noOp);
        }
        infernocomponentdistindex__throwError();
    }
    if (prevProps !== nextProps || nextProps === infernocomponentdistindex__inferno.EMPTY_OBJ || prevState !== nextState || force) {
        if (prevProps !== nextProps || nextProps === infernocomponentdistindex__inferno.EMPTY_OBJ) {
            if (!infernocomponentdistindex__isNullOrUndef(this.componentWillReceiveProps) && !fromSetState) {
                // keep a copy of state before componentWillReceiveProps
                var beforeState = infernocomponentdistindex__combineFrom(this.state);
                this._blockRender = true;
                this.componentWillReceiveProps(nextProps, context);
                this._blockRender = false;
                var afterState = this.state;
                if (beforeState !== afterState) {
                    // if state changed in componentWillReceiveProps, reassign the beforeState
                    this.state = beforeState;
                    // set the afterState as pending state so the change gets picked up below
                    this._pendingSetState = true;
                    this._pendingState = afterState;
                }
            }
            if (this._pendingSetState) {
                nextState = infernocomponentdistindex__combineFrom(nextState, this._pendingState);
                this._pendingSetState = false;
                this._pendingState = null;
            }
        }
        /* Update if scu is not defined, or it returns truthy value or force */
        if (force || infernocomponentdistindex__isNullOrUndef(this.shouldComponentUpdate) || this.shouldComponentUpdate && this.shouldComponentUpdate(nextProps, nextState, context)) {
            if (!infernocomponentdistindex__isNullOrUndef(this.componentWillUpdate)) {
                this._blockSetState = true;
                this.componentWillUpdate(nextProps, nextState, context);
                this._blockSetState = false;
            }
            this.props = nextProps;
            this.state = nextState;
            this.context = context;
            if (infernocomponentdistindex__inferno.options.beforeRender) {
                infernocomponentdistindex__inferno.options.beforeRender(this);
            }
            var render = this.render(nextProps, nextState, context);
            if (infernocomponentdistindex__inferno.options.afterRender) {
                infernocomponentdistindex__inferno.options.afterRender(this);
            }
            return render;
        } else {
            this.props = nextProps;
            this.state = nextState;
            this.context = context;
        }
    }
    return infernocomponentdistindex__NO_OP;
};
// tslint:disable-next-line:no-empty
infernocomponentdistindex__Component.prototype.render = function render(nextProps, nextState, nextContext) {};

$m['inferno-component/dist/index'].exports['default'] = infernocomponentdistindex__Component;
/*≠≠ node_modules/inferno-component/dist/index.js ≠≠*/


/*== node_modules/inferno-component/index.js ==*/
$m['inferno-component'] = { exports: {} };
$m['inferno-component'].exports = $m['inferno-component/dist/index'].exports.default;
$m['inferno-component'].exports.default = $m['inferno-component'].exports;
/*≠≠ node_modules/inferno-component/index.js ≠≠*/


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

  raf__raf = function (callback) {
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

  raf__caf = function (handle) {
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


/*== node_modules/debug/src/debug.js ==*/
$m['debug/src/debug'] = { exports: {} };

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

$m['debug/src/debug'].exports = $m['debug/src/debug'].exports = debugsrcdebug__createDebug.debug = debugsrcdebug__createDebug['default'] = debugsrcdebug__createDebug;
$m['debug/src/debug'].exports.coerce = debugsrcdebug__coerce;
$m['debug/src/debug'].exports.disable = debugsrcdebug__disable;
$m['debug/src/debug'].exports.enable = debugsrcdebug__enable;
$m['debug/src/debug'].exports.enabled = debugsrcdebug__enabled;
$m['debug/src/debug'].exports.humanize = $m['ms'].exports;

/**
 * The currently active debug mode names, and names to skip.
 */

$m['debug/src/debug'].exports.names = [];
$m['debug/src/debug'].exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

$m['debug/src/debug'].exports.formatters = {};

/**
 * Previous log timestamp.
 */

var debugsrcdebug__prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function debugsrcdebug__selectColor(namespace) {
  var hash = 0,
      i;

  for (i in namespace) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return $m['debug/src/debug'].exports.colors[Math.abs(hash) % $m['debug/src/debug'].exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function debugsrcdebug__createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (debugsrcdebug__prevTime || curr);
    self.diff = ms;
    self.prev = debugsrcdebug__prevTime;
    self.curr = curr;
    debugsrcdebug__prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = $m['debug/src/debug'].exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = $m['debug/src/debug'].exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    $m['debug/src/debug'].exports.formatArgs.call(self, args);

    var logFn = debug.log || $m['debug/src/debug'].exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = $m['debug/src/debug'].exports.enabled(namespace);
  debug.useColors = $m['debug/src/debug'].exports.useColors();
  debug.color = debugsrcdebug__selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof $m['debug/src/debug'].exports.init) {
    $m['debug/src/debug'].exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function debugsrcdebug__enable(namespaces) {
  $m['debug/src/debug'].exports.save(namespaces);

  $m['debug/src/debug'].exports.names = [];
  $m['debug/src/debug'].exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      $m['debug/src/debug'].exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      $m['debug/src/debug'].exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function debugsrcdebug__disable() {
  $m['debug/src/debug'].exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function debugsrcdebug__enabled(name) {
  var i, len;
  for (i = 0, len = $m['debug/src/debug'].exports.skips.length; i < len; i++) {
    if ($m['debug/src/debug'].exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = $m['debug/src/debug'].exports.names.length; i < len; i++) {
    if ($m['debug/src/debug'].exports.names[i].test(name)) {
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

function debugsrcdebug__coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}
/*≠≠ node_modules/debug/src/debug.js ≠≠*/


/*== node_modules/debug/src/browser.js ==*/
$m['debug'] = { exports: {} };
/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

$m['debug'].exports = $m['debug'].exports = $m['debug/src/debug'].exports;
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
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
  // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
  // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
  // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
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

function debug__formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + $m['debug'].exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit');

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
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
    r = $m['debug'].exports.storage.debug;
  } catch (e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
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
/*≠≠ node_modules/debug/src/browser.js ≠≠*/


/*== node_modules/@yr/clock/index.js ==*/
$m['@yr/clock'] = { exports: {} };

/**
 * A global timer utility for managing immediate/timeout intervals
 * https://github.com/yr/clock
 * @copyright Yr
 * @license MIT
 */

var yrclock__debugFactory = $m['debug'].exports;
var yrclock__raf = $m['raf'].exports;
var yrclock__now = $m['performance-now'].exports;

var yrclock__INTERVAL_CUTOFF = 1000;
var yrclock__INTERVAL_MAX = 600000;

var yrclock__debug = yrclock__debugFactory('yr:clock');
var yrclock__isDev = 'development' === 'development';
var yrclock__resolved = Promise.resolve();
var yrclock__timeoutQueue = [];
var yrclock__hasNextTick = typeof process !== 'undefined' && 'nextTick' in process;
var yrclock__runRafId = 0;
var yrclock__runTimeoutId = 0;
var yrclock__uid = 0;

$m['@yr/clock'].exports = {
  /**
   * Initialize with visibility api "features"
   * @param {Object} features
   */
  init: function init(features) {
    var nextTick = features.nextTick,
        hidden = features.hidden,
        visibilityChange = features.visibilityChange;

    // Register for visibilityChange event

    if (hidden !== undefined && visibilityChange !== undefined) {
      document.addEventListener(visibilityChange, yrclock__onVisibilityChangeFactory(hidden), false);
    }
    // Disable nextTick (testing)
    if (nextTick !== undefined && !nextTick) {
      yrclock__hasNextTick = false;
    }
  },

  /**
   * Call 'fn' on next tick
   * @param {Function} fn
   */
  immediate: function immediate(fn) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (yrclock__hasNextTick) {
      var _process;

      (_process = process).nextTick.apply(_process, [fn].concat(args));
    } else {
      yrclock__resolved.then(function () {
        fn.apply(undefined, args);
      });
    }
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
    for (var _len2 = arguments.length, args = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      args[_key2 - 3] = arguments[_key2];
    }

    if (duration <= 0) {
      return this.immediate.apply(this, [fn].concat(args));
    }

    id = id || 'c::' + ++yrclock__uid;
    var time = yrclock__now() + duration;
    var exists = false;

    // Recycle existing
    for (var i = 0, n = yrclock__timeoutQueue.length; i < n; i++) {
      if (yrclock__timeoutQueue[i].id === id) {
        yrclock__timeoutQueue[i].fn = fn;
        yrclock__timeoutQueue[i].args = args;
        yrclock__timeoutQueue[i].time = time;
        yrclock__timeoutQueue[i].cancelled = false;
        exists = true;
        break;
      }
    }
    if (!exists) {
      yrclock__timeoutQueue.push({ id: id, fn: fn, args: args, time: time, cancelled: false });
    }

    if (yrclock__isDev) {
      var date = new Date();

      date.setMilliseconds(date.getMilliseconds() + duration);
      yrclock__debug('timeout scheduled for "%s" at %s', id, date.toLocaleTimeString());
    }

    yrclock__run();

    return id;
  },

  /**
   * Cancel frame/timeout with 'id'
   * @param {String|Number} id
   */
  cancel: function cancel(id) {
    if (id === undefined) {
      return;
    }

    switch (typeof id) {
      // Frame
      case 'number':
        yrclock__debug('frame canceled for "%d"', id);
        yrclock__raf.cancel(id);
        break;
      // Timeout
      case 'string':
        for (var i = 0, n = yrclock__timeoutQueue.length; i < n; i++) {
          if (yrclock__timeoutQueue[i].id === id) {
            yrclock__debug('timeout canceled for "%s"', id);
            yrclock__timeoutQueue[i].cancelled = true;
            break;
          }
        }
    }
  }
};

/**
 * Process outstanding queue items
 */
function yrclock__run() {
  var current = yrclock__now();
  var queue = yrclock__timeoutQueue.slice();
  var interval = yrclock__INTERVAL_MAX;

  yrclock__timeoutQueue.length = 0;

  // Reset
  if (yrclock__runRafId > 0 || yrclock__runTimeoutId > 0) {
    yrclock__stop();
  }

  for (var i = queue.length - 1; i >= 0; i--) {
    var item = queue[i];

    if (!item.cancelled) {
      var duration = item.time - current;

      if (duration <= 0) {
        if (yrclock__isDev) {
          yrclock__debug('timeout triggered for "%s" at %s', item.id, new Date().toLocaleTimeString());
        }
        item.fn.apply(item.fn, item.args);
      } else {
        // Store smallest duration
        if (duration < interval) {
          interval = duration;
        }
        yrclock__timeoutQueue.push(item);
      }
    }
  }

  // Loop
  if (yrclock__timeoutQueue.length > 0) {
    // Use raf if requested interval is less than cutoff
    if (interval < yrclock__INTERVAL_CUTOFF) {
      yrclock__runRafId = yrclock__raf(yrclock__run);
    } else {
      yrclock__runTimeoutId = setTimeout(yrclock__run, interval);
    }
  }
}

/**
 * Stop running
 */
function yrclock__stop() {
  if (yrclock__runRafId > 0) {
    yrclock__raf.cancel(yrclock__runRafId);
    yrclock__runRafId = 0;
  } else if (yrclock__runTimeoutId > 0) {
    clearTimeout(yrclock__runTimeoutId);
    yrclock__runTimeoutId = 0;
  }
}

/**
 * Generate visibilityChange handler
 * @param {String} hidden
 * @returns {Function}
 */
function yrclock__onVisibilityChangeFactory(hidden) {
  return function onVisibilityChange(evt) {
    if (document[hidden]) {
      yrclock__debug('disable while hidden');
      yrclock__stop();
    } else {
      yrclock__debug('enable while visible');
      if ('development' === 'development') {
        var current = yrclock__now();

        for (var i = 0, n = yrclock__timeoutQueue.length; i < n; i++) {
          var item = yrclock__timeoutQueue[i];

          if (item.time <= current) {
            yrclock__debug('timeout should trigger for "%s"', item.id);
          } else {
            var date = new Date();

            date.setMilliseconds(date.getMilliseconds() + item.time - current);
            yrclock__debug('timeout for "%s" expected at %s', item.id, date.toLocaleTimeString());
          }
        }
      }
      yrclock__run();
    }
  };
}
/*≠≠ node_modules/@yr/clock/index.js ≠≠*/


/*== node_modules/@yr/component/Component.js ==*/
$m['@yr/component/Component'] = { exports: {} };

var yrcomponentComponent__assign = $m['object-assign'].exports;
var yrcomponentComponent__clock = $m['@yr/clock'].exports;
var yrcomponentComponent__InfernoComponent = $m['inferno-component'].exports;

var yrcomponentComponent__DEFAULT_TRANSITION_DURATION = 250;
var yrcomponentComponent__TIMEOUT = 20;

var yrcomponentComponent__Component = function (_InfernoComponent) {
  babelHelpers.inherits(Component, _InfernoComponent);

  /**
   * Constructor
   * @param {Object} props
   * @param {Object} context
   */
  function Component(props, context) {
    babelHelpers.classCallCheck(this, Component);

    var _this = babelHelpers.possibleConstructorReturn(this, _InfernoComponent.call(this, props, context));

    _this.__timerID = 0;
    _this.__transitionDuration = 'getTransitionDuration' in _this ? _this.getTransitionDuration() : yrcomponentComponent__DEFAULT_TRANSITION_DURATION;
    // Set up initial state
    _this.state = yrcomponentComponent__assign({}, _this.__state);
    // Autobind mixin methods
    if (_this.__bindableMethods) {
      _this.__bindableMethods.forEach(function (method) {
        _this[method] = _this[method].bind(_this);
      });
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

    if (this.__timerID) {
      yrcomponentComponent__clock.cancel(this.__timerID);
    }

    // Generally a bad idea...
    state.visibility = !state.visibility ? 1 : 2;

    // frame/immediate doesn't leave enough time for redraw between states
    this.__timerID = yrcomponentComponent__clock.timeout(yrcomponentComponent__TIMEOUT, function () {
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

    this.__timerID = yrcomponentComponent__clock.timeout(this.__transitionDuration, function () {
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
   * React: componentWillUnmount
   */

  Component.prototype.componentWillUnmount = function componentWillUnmount() {
    // Reset
    if (this.state && this.state.visibility) {
      this.state.visibility = 0;
    }
    if (this.__timerID) {
      yrcomponentComponent__clock.cancel(this.__timerID);
    }
    if (this.__componentWillUnmount) {
      this.__componentWillUnmount();
    }
  };

  return Component;
}(yrcomponentComponent__InfernoComponent);

yrcomponentComponent__Component.contextTypes = {};

$m['@yr/component/Component'].exports = yrcomponentComponent__Component;
/*≠≠ node_modules/@yr/component/Component.js ≠≠*/


/*== node_modules/@yr/component/index.js ==*/
$m['@yr/component'] = { exports: {} };

/**
 * A factory utility for creating Inferno components
 * https://github.com/yr/component
 * @copyright Yr
 * @license MIT
 */

var yrcomponent___require = $m['inferno'].exports,
    yrcomponent__render = yrcomponent___require.render;

var yrcomponent__assign = $m['object-assign'].exports;
var yrcomponent__Component = $m['@yr/component/Component'].exports;
var yrcomponent__createElement = $m['inferno-create-element'].exports;
var yrcomponent__PropTypes = $m['prop-types'].exports;
var yrcomponent__runtime = $m['@yr/runtime'].exports;
var yrcomponent__serverRender = {};

var yrcomponent__STATIC_KEYS = ['displayName', 'defaultProps', 'propTypes'];
var yrcomponent__RESERVED_KEYS = yrcomponent__STATIC_KEYS.concat(['componentWillUnmount', 'render', 'state']);

$m['@yr/component'].exports = {
  NOT_TRANSITIONING: 0,
  WILL_TRANSITION: 1,
  IS_TRANSITIONING: 2,
  DID_TRANSITION: 3,

  Component: yrcomponent__Component,
  define: yrcomponent__define,
  el: yrcomponent__createElement,
  PropTypes: yrcomponent__PropTypes,
  render: yrcomponent__runtime.isServer ? yrcomponent__serverRender : yrcomponent__render
};

/**
 * Convert 'specification' into a renderable component definition
 * Always returns class-based definition if 'preferStateless' is "false",
 * otherwise returns stateless function if server or no state/lifecycle methods defined
 * @param {Object} specification
 * @param {Boolean} preferStateless
 * @returns {Class|Function}
 */
function yrcomponent__define(specification) {
  var preferStateless = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (specification === undefined || specification.render === undefined) {
    throw Error('a component specification requires a "render" function');
  }

  var defaultProps = specification.defaultProps || {};
  var isStateless = yrcomponent__shouldBeStateless(specification, preferStateless);
  var propTypes = specification.propTypes || {};
  var spec = {
    __bindableMethods: [],
    __componentWillUnmount: specification.componentWillUnmount,
    __render: specification.render,
    __state: specification.state !== undefined ? specification.state : {}
  };

  for (var prop in specification) {
    if (!~yrcomponent__RESERVED_KEYS.indexOf(prop)) {
      var value = specification[prop];

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
    spec.render.displayName = specification.displayName || '<statelessComponent>';
    spec.render.defaultProps = defaultProps;
    spec.render.propTypes = propTypes;
    if ('getChildContext' in specification) {
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
  comp.displayName = specification.displayName || '<component>';
  comp.defaultProps = defaultProps;
  comp.propTypes = propTypes;
  if ('getChildContext' in specification) {
    comp.childContextTypes = yrcomponent__Component.contextTypes;
  }

  // Copy to comp prototype
  yrcomponent__assign(comp.prototype, spec);

  return comp;
}

/**
 * Determine if 'specification' is stateless
 * @param {Object} specification
 * @param {Boolean} preferStateless
 * @returns {Boolean}
 */
function yrcomponent__shouldBeStateless(specification, preferStateless) {
  if (!preferStateless) {
    return false;
  }

  if (yrcomponent__runtime.isServer && specification.getChildContext === undefined) {
    return true;
  }

  // Not stateless if contains anything more than render and static properties
  for (var prop in specification) {
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
 * A base React.js component for svg/img graphics
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

        if (!id) return null;

        var rootImagePath = props.rootImagePath || options.rootImagePath || '';

        if (rootImagePath && rootImagePath.charAt(rootImagePath.length - 1) !== '/') rootImagePath += '/';

        if (type === yrgraphicscomponent__TYPE_SVG) {
          var children = options.renderInnerSvg ? options.renderInnerSvg(id) : [yrgraphicscomponent__el('use', { 'xlink:href': '#' + id, x: 0, y: 0, width: 100, height: 100 })];

          if (!Array.isArray(children)) children = [children];
          if (options.fallback) children.push(yrgraphicscomponent__el('image', { src: '' + rootImagePath + id + '.png', 'xlink:href': '' }));

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