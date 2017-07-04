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
/*== node_modules/react/lib/ReactPropTypesSecret.js ==*/
$m['react/lib/ReactPropTypesSecret'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var reactlibReactPropTypesSecret__ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

$m['react/lib/ReactPropTypesSecret'].exports = reactlibReactPropTypesSecret__ReactPropTypesSecret;
/*≠≠ node_modules/react/lib/ReactPropTypesSecret.js ≠≠*/


/*== node_modules/@yr/component/nod...-dom/lib/isTextInputElement.js ==*/
$m['react-dom/lib/isTextInputElement'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

/**
 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
 */

var reactdomlibisTextInputElement__supportedInputTypes = {
  color: true,
  date: true,
  datetime: true,
  'datetime-local': true,
  email: true,
  month: true,
  number: true,
  password: true,
  range: true,
  search: true,
  tel: true,
  text: true,
  time: true,
  url: true,
  week: true
};

function reactdomlibisTextInputElement__isTextInputElement(elem) {
  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();

  if (nodeName === 'input') {
    return !!reactdomlibisTextInputElement__supportedInputTypes[elem.type];
  }

  if (nodeName === 'textarea') {
    return true;
  }

  return false;
}

$m['react-dom/lib/isTextInputElement'].exports = reactdomlibisTextInputElement__isTextInputElement;
/*≠≠ node_modules/@yr/component/nod...-dom/lib/isTextInputElement.js ≠≠*/


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


/*== node_modules/fbjs/lib/getActiveElement.js ==*/
$m['fbjs/lib/getActiveElement'] = { exports: {} };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

/* eslint-disable fb-www/typeof-undefined */

/**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document or document body is not
 * yet defined.
 *
 * @param {?DOMDocument} doc Defaults to current document.
 * @return {?DOMElement}
 */
function fbjslibgetActiveElement__getActiveElement(doc) /*?DOMElement*/{
  doc = doc || (typeof document !== 'undefined' ? document : undefined);
  if (typeof doc === 'undefined') {
    return null;
  }
  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}

$m['fbjs/lib/getActiveElement'].exports = fbjslibgetActiveElement__getActiveElement;
/*≠≠ node_modules/fbjs/lib/getActiveElement.js ≠≠*/


/*== node_modules/fbjs/lib/focusNode.js ==*/
$m['fbjs/lib/focusNode'] = { exports: {} };
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
 * @param {DOMElement} node input/textarea to focus
 */

function fbjslibfocusNode__focusNode(node) {
  // IE8 can throw "Can't move focus to the control because it is invisible,
  // not enabled, or of a type that does not accept the focus." for all kinds of
  // reasons that are too expensive and fragile to test.
  try {
    node.focus();
  } catch (e) {}
}

$m['fbjs/lib/focusNode'].exports = fbjslibfocusNode__focusNode;
/*≠≠ node_modules/fbjs/lib/focusNode.js ≠≠*/


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
    getNanoSeconds = function getNanoSeconds() {
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
}).call(undefined);
/*≠≠ node_modules/performance-now/lib/performance-now.js ≠≠*/


/*== node_modules/fbjs/lib/isNode.js ==*/
$m['fbjs/lib/isNode'] = { exports: {} };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM node.
 */
function fbjslibisNode__isNode(object) {
  var doc = object ? object.ownerDocument || object : document;
  var defaultView = doc.defaultView || window;
  return !!(object && (typeof defaultView.Node === 'function' ? object instanceof defaultView.Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
}

$m['fbjs/lib/isNode'].exports = fbjslibisNode__isNode;
/*≠≠ node_modules/fbjs/lib/isNode.js ≠≠*/


/*== node_modules/@yr/component/nod...b/getNodeForCharacterOffset.js ==*/
$m['react-dom/lib/getNodeForCharacterOffset'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * Given any node return the first leaf node without children.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {DOMElement|DOMTextNode}
 */

function reactdomlibgetNodeForCharacterOffset__getLeafNode(node) {
  while (node && node.firstChild) {
    node = node.firstChild;
  }
  return node;
}

/**
 * Get the next sibling within a container. This will walk up the
 * DOM if a node's siblings have been exhausted.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {?DOMElement|DOMTextNode}
 */
function reactdomlibgetNodeForCharacterOffset__getSiblingNode(node) {
  while (node) {
    if (node.nextSibling) {
      return node.nextSibling;
    }
    node = node.parentNode;
  }
}

/**
 * Get object describing the nodes which contain characters at offset.
 *
 * @param {DOMElement|DOMTextNode} root
 * @param {number} offset
 * @return {?object}
 */
function reactdomlibgetNodeForCharacterOffset__getNodeForCharacterOffset(root, offset) {
  var node = reactdomlibgetNodeForCharacterOffset__getLeafNode(root);
  var nodeStart = 0;
  var nodeEnd = 0;

  while (node) {
    if (node.nodeType === 3) {
      nodeEnd = nodeStart + node.textContent.length;

      if (nodeStart <= offset && nodeEnd >= offset) {
        return {
          node: node,
          offset: offset - nodeStart
        };
      }

      nodeStart = nodeEnd;
    }

    node = reactdomlibgetNodeForCharacterOffset__getLeafNode(reactdomlibgetNodeForCharacterOffset__getSiblingNode(node));
  }
}

$m['react-dom/lib/getNodeForCharacterOffset'].exports = reactdomlibgetNodeForCharacterOffset__getNodeForCharacterOffset;
/*≠≠ node_modules/@yr/component/nod...b/getNodeForCharacterOffset.js ≠≠*/


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


/*== node_modules/@yr/component/nod...om/lib/SVGDOMPropertyConfig.js ==*/
$m['react-dom/lib/SVGDOMPropertyConfig'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibSVGDOMPropertyConfig__NS = {
  xlink: 'http://www.w3.org/1999/xlink',
  xml: 'http://www.w3.org/XML/1998/namespace'
};

// We use attributes for everything SVG so let's avoid some duplication and run
// code instead.
// The following are all specified in the HTML config already so we exclude here.
// - class (as className)
// - color
// - height
// - id
// - lang
// - max
// - media
// - method
// - min
// - name
// - style
// - target
// - type
// - width
var reactdomlibSVGDOMPropertyConfig__ATTRS = {
  accentHeight: 'accent-height',
  accumulate: 0,
  additive: 0,
  alignmentBaseline: 'alignment-baseline',
  allowReorder: 'allowReorder',
  alphabetic: 0,
  amplitude: 0,
  arabicForm: 'arabic-form',
  ascent: 0,
  attributeName: 'attributeName',
  attributeType: 'attributeType',
  autoReverse: 'autoReverse',
  azimuth: 0,
  baseFrequency: 'baseFrequency',
  baseProfile: 'baseProfile',
  baselineShift: 'baseline-shift',
  bbox: 0,
  begin: 0,
  bias: 0,
  by: 0,
  calcMode: 'calcMode',
  capHeight: 'cap-height',
  clip: 0,
  clipPath: 'clip-path',
  clipRule: 'clip-rule',
  clipPathUnits: 'clipPathUnits',
  colorInterpolation: 'color-interpolation',
  colorInterpolationFilters: 'color-interpolation-filters',
  colorProfile: 'color-profile',
  colorRendering: 'color-rendering',
  contentScriptType: 'contentScriptType',
  contentStyleType: 'contentStyleType',
  cursor: 0,
  cx: 0,
  cy: 0,
  d: 0,
  decelerate: 0,
  descent: 0,
  diffuseConstant: 'diffuseConstant',
  direction: 0,
  display: 0,
  divisor: 0,
  dominantBaseline: 'dominant-baseline',
  dur: 0,
  dx: 0,
  dy: 0,
  edgeMode: 'edgeMode',
  elevation: 0,
  enableBackground: 'enable-background',
  end: 0,
  exponent: 0,
  externalResourcesRequired: 'externalResourcesRequired',
  fill: 0,
  fillOpacity: 'fill-opacity',
  fillRule: 'fill-rule',
  filter: 0,
  filterRes: 'filterRes',
  filterUnits: 'filterUnits',
  floodColor: 'flood-color',
  floodOpacity: 'flood-opacity',
  focusable: 0,
  fontFamily: 'font-family',
  fontSize: 'font-size',
  fontSizeAdjust: 'font-size-adjust',
  fontStretch: 'font-stretch',
  fontStyle: 'font-style',
  fontVariant: 'font-variant',
  fontWeight: 'font-weight',
  format: 0,
  from: 0,
  fx: 0,
  fy: 0,
  g1: 0,
  g2: 0,
  glyphName: 'glyph-name',
  glyphOrientationHorizontal: 'glyph-orientation-horizontal',
  glyphOrientationVertical: 'glyph-orientation-vertical',
  glyphRef: 'glyphRef',
  gradientTransform: 'gradientTransform',
  gradientUnits: 'gradientUnits',
  hanging: 0,
  horizAdvX: 'horiz-adv-x',
  horizOriginX: 'horiz-origin-x',
  ideographic: 0,
  imageRendering: 'image-rendering',
  'in': 0,
  in2: 0,
  intercept: 0,
  k: 0,
  k1: 0,
  k2: 0,
  k3: 0,
  k4: 0,
  kernelMatrix: 'kernelMatrix',
  kernelUnitLength: 'kernelUnitLength',
  kerning: 0,
  keyPoints: 'keyPoints',
  keySplines: 'keySplines',
  keyTimes: 'keyTimes',
  lengthAdjust: 'lengthAdjust',
  letterSpacing: 'letter-spacing',
  lightingColor: 'lighting-color',
  limitingConeAngle: 'limitingConeAngle',
  local: 0,
  markerEnd: 'marker-end',
  markerMid: 'marker-mid',
  markerStart: 'marker-start',
  markerHeight: 'markerHeight',
  markerUnits: 'markerUnits',
  markerWidth: 'markerWidth',
  mask: 0,
  maskContentUnits: 'maskContentUnits',
  maskUnits: 'maskUnits',
  mathematical: 0,
  mode: 0,
  numOctaves: 'numOctaves',
  offset: 0,
  opacity: 0,
  operator: 0,
  order: 0,
  orient: 0,
  orientation: 0,
  origin: 0,
  overflow: 0,
  overlinePosition: 'overline-position',
  overlineThickness: 'overline-thickness',
  paintOrder: 'paint-order',
  panose1: 'panose-1',
  pathLength: 'pathLength',
  patternContentUnits: 'patternContentUnits',
  patternTransform: 'patternTransform',
  patternUnits: 'patternUnits',
  pointerEvents: 'pointer-events',
  points: 0,
  pointsAtX: 'pointsAtX',
  pointsAtY: 'pointsAtY',
  pointsAtZ: 'pointsAtZ',
  preserveAlpha: 'preserveAlpha',
  preserveAspectRatio: 'preserveAspectRatio',
  primitiveUnits: 'primitiveUnits',
  r: 0,
  radius: 0,
  refX: 'refX',
  refY: 'refY',
  renderingIntent: 'rendering-intent',
  repeatCount: 'repeatCount',
  repeatDur: 'repeatDur',
  requiredExtensions: 'requiredExtensions',
  requiredFeatures: 'requiredFeatures',
  restart: 0,
  result: 0,
  rotate: 0,
  rx: 0,
  ry: 0,
  scale: 0,
  seed: 0,
  shapeRendering: 'shape-rendering',
  slope: 0,
  spacing: 0,
  specularConstant: 'specularConstant',
  specularExponent: 'specularExponent',
  speed: 0,
  spreadMethod: 'spreadMethod',
  startOffset: 'startOffset',
  stdDeviation: 'stdDeviation',
  stemh: 0,
  stemv: 0,
  stitchTiles: 'stitchTiles',
  stopColor: 'stop-color',
  stopOpacity: 'stop-opacity',
  strikethroughPosition: 'strikethrough-position',
  strikethroughThickness: 'strikethrough-thickness',
  string: 0,
  stroke: 0,
  strokeDasharray: 'stroke-dasharray',
  strokeDashoffset: 'stroke-dashoffset',
  strokeLinecap: 'stroke-linecap',
  strokeLinejoin: 'stroke-linejoin',
  strokeMiterlimit: 'stroke-miterlimit',
  strokeOpacity: 'stroke-opacity',
  strokeWidth: 'stroke-width',
  surfaceScale: 'surfaceScale',
  systemLanguage: 'systemLanguage',
  tableValues: 'tableValues',
  targetX: 'targetX',
  targetY: 'targetY',
  textAnchor: 'text-anchor',
  textDecoration: 'text-decoration',
  textRendering: 'text-rendering',
  textLength: 'textLength',
  to: 0,
  transform: 0,
  u1: 0,
  u2: 0,
  underlinePosition: 'underline-position',
  underlineThickness: 'underline-thickness',
  unicode: 0,
  unicodeBidi: 'unicode-bidi',
  unicodeRange: 'unicode-range',
  unitsPerEm: 'units-per-em',
  vAlphabetic: 'v-alphabetic',
  vHanging: 'v-hanging',
  vIdeographic: 'v-ideographic',
  vMathematical: 'v-mathematical',
  values: 0,
  vectorEffect: 'vector-effect',
  version: 0,
  vertAdvY: 'vert-adv-y',
  vertOriginX: 'vert-origin-x',
  vertOriginY: 'vert-origin-y',
  viewBox: 'viewBox',
  viewTarget: 'viewTarget',
  visibility: 0,
  widths: 0,
  wordSpacing: 'word-spacing',
  writingMode: 'writing-mode',
  x: 0,
  xHeight: 'x-height',
  x1: 0,
  x2: 0,
  xChannelSelector: 'xChannelSelector',
  xlinkActuate: 'xlink:actuate',
  xlinkArcrole: 'xlink:arcrole',
  xlinkHref: 'xlink:href',
  xlinkRole: 'xlink:role',
  xlinkShow: 'xlink:show',
  xlinkTitle: 'xlink:title',
  xlinkType: 'xlink:type',
  xmlBase: 'xml:base',
  xmlns: 0,
  xmlnsXlink: 'xmlns:xlink',
  xmlLang: 'xml:lang',
  xmlSpace: 'xml:space',
  y: 0,
  y1: 0,
  y2: 0,
  yChannelSelector: 'yChannelSelector',
  z: 0,
  zoomAndPan: 'zoomAndPan'
};

var reactdomlibSVGDOMPropertyConfig__SVGDOMPropertyConfig = {
  Properties: {},
  DOMAttributeNamespaces: {
    xlinkActuate: reactdomlibSVGDOMPropertyConfig__NS.xlink,
    xlinkArcrole: reactdomlibSVGDOMPropertyConfig__NS.xlink,
    xlinkHref: reactdomlibSVGDOMPropertyConfig__NS.xlink,
    xlinkRole: reactdomlibSVGDOMPropertyConfig__NS.xlink,
    xlinkShow: reactdomlibSVGDOMPropertyConfig__NS.xlink,
    xlinkTitle: reactdomlibSVGDOMPropertyConfig__NS.xlink,
    xlinkType: reactdomlibSVGDOMPropertyConfig__NS.xlink,
    xmlBase: reactdomlibSVGDOMPropertyConfig__NS.xml,
    xmlLang: reactdomlibSVGDOMPropertyConfig__NS.xml,
    xmlSpace: reactdomlibSVGDOMPropertyConfig__NS.xml
  },
  DOMAttributeNames: {}
};

Object.keys(reactdomlibSVGDOMPropertyConfig__ATTRS).forEach(function (key) {
  reactdomlibSVGDOMPropertyConfig__SVGDOMPropertyConfig.Properties[key] = 0;
  if (reactdomlibSVGDOMPropertyConfig__ATTRS[key]) {
    reactdomlibSVGDOMPropertyConfig__SVGDOMPropertyConfig.DOMAttributeNames[key] = reactdomlibSVGDOMPropertyConfig__ATTRS[key];
  }
});

$m['react-dom/lib/SVGDOMPropertyConfig'].exports = reactdomlibSVGDOMPropertyConfig__SVGDOMPropertyConfig;
/*≠≠ node_modules/@yr/component/nod...om/lib/SVGDOMPropertyConfig.js ≠≠*/


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


/*== node_modules/react/lib/ReactCurrentOwner.js ==*/
$m['react/lib/ReactCurrentOwner'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var reactlibReactCurrentOwner__ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

$m['react/lib/ReactCurrentOwner'].exports = reactlibReactCurrentOwner__ReactCurrentOwner;
/*≠≠ node_modules/react/lib/ReactCurrentOwner.js ≠≠*/


/*== node_modules/react/lib/reactProdInvariant.js ==*/
$m['react/lib/reactProdInvariant'] = { exports: {} };
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

/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */

function reactlibreactProdInvariant__reactProdInvariant(code) {
  var argCount = arguments.length - 1;

  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

  for (var argIdx = 0; argIdx < argCount; argIdx++) {
    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
  }

  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

  var error = new Error(message);
  error.name = 'Invariant Violation';
  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

  throw error;
}

$m['react/lib/reactProdInvariant'].exports = reactlibreactProdInvariant__reactProdInvariant;
/*≠≠ node_modules/react/lib/reactProdInvariant.js ≠≠*/


/*== node_modules/fbjs/lib/getUnboundedScrollPosition.js ==*/
$m['fbjs/lib/getUnboundedScrollPosition'] = { exports: {} };
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

/**
 * Gets the scroll position of the supplied element or window.
 *
 * The return values are unbounded, unlike `getScrollPosition`. This means they
 * may be negative or exceed the element boundaries (which is possible using
 * inertial scrolling).
 *
 * @param {DOMWindow|DOMElement} scrollable
 * @return {object} Map with `x` and `y` keys.
 */

function fbjslibgetUnboundedScrollPosition__getUnboundedScrollPosition(scrollable) {
  if (scrollable.Window && scrollable instanceof scrollable.Window) {
    return {
      x: scrollable.pageXOffset || scrollable.document.documentElement.scrollLeft,
      y: scrollable.pageYOffset || scrollable.document.documentElement.scrollTop
    };
  }
  return {
    x: scrollable.scrollLeft,
    y: scrollable.scrollTop
  };
}

$m['fbjs/lib/getUnboundedScrollPosition'].exports = fbjslibgetUnboundedScrollPosition__getUnboundedScrollPosition;
/*≠≠ node_modules/fbjs/lib/getUnboundedScrollPosition.js ≠≠*/


/*== node_modules/@yr/component/nod...-dom/lib/reactProdInvariant.js ==*/
$m['react-dom/lib/reactProdInvariant'] = { exports: {} };
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

/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */

function reactdomlibreactProdInvariant__reactProdInvariant(code) {
  var argCount = arguments.length - 1;

  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

  for (var argIdx = 0; argIdx < argCount; argIdx++) {
    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
  }

  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

  var error = new Error(message);
  error.name = 'Invariant Violation';
  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

  throw error;
}

$m['react-dom/lib/reactProdInvariant'].exports = reactdomlibreactProdInvariant__reactProdInvariant;
/*≠≠ node_modules/@yr/component/nod...-dom/lib/reactProdInvariant.js ≠≠*/


/*== node_modules/@yr/component/nod...eact-dom/lib/KeyEscapeUtils.js ==*/
$m['react-dom/lib/KeyEscapeUtils'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function reactdomlibKeyEscapeUtils__escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * Unescape and unwrap key for human-readable display
 *
 * @param {string} key to unescape.
 * @return {string} the unescaped key.
 */
function reactdomlibKeyEscapeUtils__unescape(key) {
  var unescapeRegex = /(=0|=2)/g;
  var unescaperLookup = {
    '=0': '=',
    '=2': ':'
  };
  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

  return ('' + keySubstring).replace(unescapeRegex, function (match) {
    return unescaperLookup[match];
  });
}

var reactdomlibKeyEscapeUtils__KeyEscapeUtils = {
  escape: reactdomlibKeyEscapeUtils__escape,
  unescape: reactdomlibKeyEscapeUtils__unescape
};

$m['react-dom/lib/KeyEscapeUtils'].exports = reactdomlibKeyEscapeUtils__KeyEscapeUtils;
/*≠≠ node_modules/@yr/component/nod...eact-dom/lib/KeyEscapeUtils.js ≠≠*/


/*== node_modules/@yr/component/nod...react-dom/lib/getIteratorFn.js ==*/
$m['react-dom/lib/getIteratorFn'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

/* global Symbol */

var reactdomlibgetIteratorFn__ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var reactdomlibgetIteratorFn__FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

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
function reactdomlibgetIteratorFn__getIteratorFn(maybeIterable) {
  var iteratorFn = maybeIterable && (reactdomlibgetIteratorFn__ITERATOR_SYMBOL && maybeIterable[reactdomlibgetIteratorFn__ITERATOR_SYMBOL] || maybeIterable[reactdomlibgetIteratorFn__FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

$m['react-dom/lib/getIteratorFn'].exports = reactdomlibgetIteratorFn__getIteratorFn;
/*≠≠ node_modules/@yr/component/nod...react-dom/lib/getIteratorFn.js ≠≠*/


/*== node_modules/@yr/component/nod...-dom/lib/ReactElementSymbol.js ==*/
$m['react-dom/lib/ReactElementSymbol'] = { exports: {} };
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.

var reactdomlibReactElementSymbol__REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

$m['react-dom/lib/ReactElementSymbol'].exports = reactdomlibReactElementSymbol__REACT_ELEMENT_TYPE;
/*≠≠ node_modules/@yr/component/nod...-dom/lib/ReactElementSymbol.js ≠≠*/


/*== node_modules/fbjs/lib/memoizeStringOnly.js ==*/
$m['fbjs/lib/memoizeStringOnly'] = { exports: {} };
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 * @typechecks static-only
 */

/**
 * Memoizes the return value of a function that accepts one string argument.
 */

function fbjslibmemoizeStringOnly__memoizeStringOnly(callback) {
  var cache = {};
  return function (string) {
    if (!cache.hasOwnProperty(string)) {
      cache[string] = callback.call(this, string);
    }
    return cache[string];
  };
}

$m['fbjs/lib/memoizeStringOnly'].exports = fbjslibmemoizeStringOnly__memoizeStringOnly;
/*≠≠ node_modules/fbjs/lib/memoizeStringOnly.js ≠≠*/


/*== node_modules/fbjs/lib/hyphenate.js ==*/
$m['fbjs/lib/hyphenate'] = { exports: {} };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var fbjslibhyphenate___uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function fbjslibhyphenate__hyphenate(string) {
  return string.replace(fbjslibhyphenate___uppercasePattern, '-$1').toLowerCase();
}

$m['fbjs/lib/hyphenate'].exports = fbjslibhyphenate__hyphenate;
/*≠≠ node_modules/fbjs/lib/hyphenate.js ≠≠*/


/*== node_modules/fbjs/lib/ExecutionEnvironment.js ==*/
$m['fbjs/lib/ExecutionEnvironment'] = { exports: {} };
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var fbjslibExecutionEnvironment__canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var fbjslibExecutionEnvironment__ExecutionEnvironment = {

  canUseDOM: fbjslibExecutionEnvironment__canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners: fbjslibExecutionEnvironment__canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: fbjslibExecutionEnvironment__canUseDOM && !!window.screen,

  isInWorker: !fbjslibExecutionEnvironment__canUseDOM // For now, this is true - might change in the future.

};

$m['fbjs/lib/ExecutionEnvironment'].exports = fbjslibExecutionEnvironment__ExecutionEnvironment;
/*≠≠ node_modules/fbjs/lib/ExecutionEnvironment.js ≠≠*/


/*== node_modules/@yr/component/nod...s/react-dom/lib/CSSProperty.js ==*/
$m['react-dom/lib/CSSProperty'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * CSS properties which accept numbers but are not in units of "px".
 */

var reactdomlibCSSProperty__isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */
function reactdomlibCSSProperty__prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var reactdomlibCSSProperty__prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(reactdomlibCSSProperty__isUnitlessNumber).forEach(function (prop) {
  reactdomlibCSSProperty__prefixes.forEach(function (prefix) {
    reactdomlibCSSProperty__isUnitlessNumber[reactdomlibCSSProperty__prefixKey(prefix, prop)] = reactdomlibCSSProperty__isUnitlessNumber[prop];
  });
});

/**
 * Most style properties can be unset by doing .style[prop] = '' but IE8
 * doesn't like doing that with shorthand properties so for the properties that
 * IE8 breaks on, which are listed here, we instead unset each of the
 * individual properties. See http://bugs.jquery.com/ticket/12385.
 * The 4-value 'clock' properties like margin, padding, border-width seem to
 * behave without any problems. Curiously, list-style works too without any
 * special prodding.
 */
var reactdomlibCSSProperty__shorthandPropertyExpansions = {
  background: {
    backgroundAttachment: true,
    backgroundColor: true,
    backgroundImage: true,
    backgroundPositionX: true,
    backgroundPositionY: true,
    backgroundRepeat: true
  },
  backgroundPosition: {
    backgroundPositionX: true,
    backgroundPositionY: true
  },
  border: {
    borderWidth: true,
    borderStyle: true,
    borderColor: true
  },
  borderBottom: {
    borderBottomWidth: true,
    borderBottomStyle: true,
    borderBottomColor: true
  },
  borderLeft: {
    borderLeftWidth: true,
    borderLeftStyle: true,
    borderLeftColor: true
  },
  borderRight: {
    borderRightWidth: true,
    borderRightStyle: true,
    borderRightColor: true
  },
  borderTop: {
    borderTopWidth: true,
    borderTopStyle: true,
    borderTopColor: true
  },
  font: {
    fontStyle: true,
    fontVariant: true,
    fontWeight: true,
    fontSize: true,
    lineHeight: true,
    fontFamily: true
  },
  outline: {
    outlineWidth: true,
    outlineStyle: true,
    outlineColor: true
  }
};

var reactdomlibCSSProperty__CSSProperty = {
  isUnitlessNumber: reactdomlibCSSProperty__isUnitlessNumber,
  shorthandPropertyExpansions: reactdomlibCSSProperty__shorthandPropertyExpansions
};

$m['react-dom/lib/CSSProperty'].exports = reactdomlibCSSProperty__CSSProperty;
/*≠≠ node_modules/@yr/component/nod...s/react-dom/lib/CSSProperty.js ≠≠*/


/*== node_modules/fbjs/lib/camelize.js ==*/
$m['fbjs/lib/camelize'] = { exports: {} };
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var fbjslibcamelize___hyphenPattern = /-(.)/g;

/**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 * @param {string} string
 * @return {string}
 */
function fbjslibcamelize__camelize(string) {
  return string.replace(fbjslibcamelize___hyphenPattern, function (_, character) {
    return character.toUpperCase();
  });
}

$m['fbjs/lib/camelize'].exports = fbjslibcamelize__camelize;
/*≠≠ node_modules/fbjs/lib/camelize.js ≠≠*/


/*== node_modules/@yr/component/nod...actHostOperationHistoryHook.js ==*/
$m['react-dom/lib/ReactHostOperationHistoryHook'] = { exports: {} };
/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var reactdomlibReactHostOperationHistoryHook__history = [];

var reactdomlibReactHostOperationHistoryHook__ReactHostOperationHistoryHook = {
  onHostOperation: function (operation) {
    reactdomlibReactHostOperationHistoryHook__history.push(operation);
  },
  clearHistory: function () {
    if (reactdomlibReactHostOperationHistoryHook__ReactHostOperationHistoryHook._preventClearing) {
      // Should only be used for tests.
      return;
    }

    reactdomlibReactHostOperationHistoryHook__history = [];
  },
  getHistory: function () {
    return reactdomlibReactHostOperationHistoryHook__history;
  }
};

$m['react-dom/lib/ReactHostOperationHistoryHook'].exports = reactdomlibReactHostOperationHistoryHook__ReactHostOperationHistoryHook;
/*≠≠ node_modules/@yr/component/nod...actHostOperationHistoryHook.js ≠≠*/


/*== node_modules/@yr/component/nod...lib/DefaultEventPluginOrder.js ==*/
$m['react-dom/lib/DefaultEventPluginOrder'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * Module that is injectable into `EventPluginHub`, that specifies a
 * deterministic ordering of `EventPlugin`s. A convenient way to reason about
 * plugins, without having to package every one of them. This is better than
 * having plugins be ordered in the same order that they are injected because
 * that ordering would be influenced by the packaging order.
 * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
 * preventing default on events is convenient in `SimpleEventPlugin` handlers.
 */

var reactdomlibDefaultEventPluginOrder__DefaultEventPluginOrder = ['ResponderEventPlugin', 'SimpleEventPlugin', 'TapEventPlugin', 'EnterLeaveEventPlugin', 'ChangeEventPlugin', 'SelectEventPlugin', 'BeforeInputEventPlugin'];

$m['react-dom/lib/DefaultEventPluginOrder'].exports = reactdomlibDefaultEventPluginOrder__DefaultEventPluginOrder;
/*≠≠ node_modules/@yr/component/nod...lib/DefaultEventPluginOrder.js ≠≠*/


/*== node_modules/@yr/component/nod...eact-dom/lib/getEventTarget.js ==*/
$m['react-dom/lib/getEventTarget'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * Gets the target node from a native browser event by accounting for
 * inconsistencies in browser DOM APIs.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {DOMEventTarget} Target node.
 */

function reactdomlibgetEventTarget__getEventTarget(nativeEvent) {
  var target = nativeEvent.target || nativeEvent.srcElement || window;

  // Normalize SVG <use> element events #4963
  if (target.correspondingUseElement) {
    target = target.correspondingUseElement;
  }

  // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
  // @see http://www.quirksmode.org/js/events_properties.html
  return target.nodeType === 3 ? target.parentNode : target;
}

$m['react-dom/lib/getEventTarget'].exports = reactdomlibgetEventTarget__getEventTarget;
/*≠≠ node_modules/@yr/component/nod...eact-dom/lib/getEventTarget.js ≠≠*/


/*== node_modules/@yr/component/nod...m/lib/getEventModifierState.js ==*/
$m['react-dom/lib/getEventModifierState'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * Translation from modifier key to the associated property in the event.
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
 */

var reactdomlibgetEventModifierState__modifierKeyToProp = {
  Alt: 'altKey',
  Control: 'ctrlKey',
  Meta: 'metaKey',
  Shift: 'shiftKey'
};

// IE8 does not implement getModifierState so we simply map it to the only
// modifier keys exposed by the event itself, does not support Lock-keys.
// Currently, all major browsers except Chrome seems to support Lock-keys.
function reactdomlibgetEventModifierState__modifierStateGetter(keyArg) {
  var syntheticEvent = this;
  var nativeEvent = syntheticEvent.nativeEvent;
  if (nativeEvent.getModifierState) {
    return nativeEvent.getModifierState(keyArg);
  }
  var keyProp = reactdomlibgetEventModifierState__modifierKeyToProp[keyArg];
  return keyProp ? !!nativeEvent[keyProp] : false;
}

function reactdomlibgetEventModifierState__getEventModifierState(nativeEvent) {
  return reactdomlibgetEventModifierState__modifierStateGetter;
}

$m['react-dom/lib/getEventModifierState'].exports = reactdomlibgetEventModifierState__getEventModifierState;
/*≠≠ node_modules/@yr/component/nod...m/lib/getEventModifierState.js ≠≠*/


/*== node_modules/@yr/component/nod.../shouldUpdateReactComponent.js ==*/
$m['react-dom/lib/shouldUpdateReactComponent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * Given a `prevElement` and `nextElement`, determines if the existing
 * instance should be updated as opposed to being destroyed or replaced by a new
 * instance. Both arguments are elements. This ensures that this logic can
 * operate on stateless trees without any backing instance.
 *
 * @param {?object} prevElement
 * @param {?object} nextElement
 * @return {boolean} True if the existing instance should be updated.
 * @protected
 */

function reactdomlibshouldUpdateReactComponent__shouldUpdateReactComponent(prevElement, nextElement) {
  var prevEmpty = prevElement === null || prevElement === false;
  var nextEmpty = nextElement === null || nextElement === false;
  if (prevEmpty || nextEmpty) {
    return prevEmpty === nextEmpty;
  }

  var prevType = typeof prevElement;
  var nextType = typeof nextElement;
  if (prevType === 'string' || prevType === 'number') {
    return nextType === 'string' || nextType === 'number';
  } else {
    return nextType === 'object' && prevElement.type === nextElement.type && prevElement.key === nextElement.key;
  }
}

$m['react-dom/lib/shouldUpdateReactComponent'].exports = reactdomlibshouldUpdateReactComponent__shouldUpdateReactComponent;
/*≠≠ node_modules/@yr/component/nod.../shouldUpdateReactComponent.js ≠≠*/


/*== node_modules/@yr/component/nod...icrosoftUnsafeLocalFunction.js ==*/
$m['react-dom/lib/createMicrosoftUnsafeLocalFunction'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/* globals MSApp */

/**
 * Create a function which has 'unsafe' privileges (required by windows8 apps)
 */

var reactdomlibcreateMicrosoftUnsafeLocalFunction__createMicrosoftUnsafeLocalFunction = function (func) {
  if (typeof MSApp !== 'undefined' && MSApp.execUnsafeLocalFunction) {
    return function (arg0, arg1, arg2, arg3) {
      MSApp.execUnsafeLocalFunction(function () {
        return func(arg0, arg1, arg2, arg3);
      });
    };
  } else {
    return func;
  }
};

$m['react-dom/lib/createMicrosoftUnsafeLocalFunction'].exports = reactdomlibcreateMicrosoftUnsafeLocalFunction__createMicrosoftUnsafeLocalFunction;
/*≠≠ node_modules/@yr/component/nod...icrosoftUnsafeLocalFunction.js ≠≠*/


/*== node_modules/@yr/component/nod...react-dom/lib/DOMNamespaces.js ==*/
$m['react-dom/lib/DOMNamespaces'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibDOMNamespaces__DOMNamespaces = {
  html: 'http://www.w3.org/1999/xhtml',
  mathml: 'http://www.w3.org/1998/Math/MathML',
  svg: 'http://www.w3.org/2000/svg'
};

$m['react-dom/lib/DOMNamespaces'].exports = reactdomlibDOMNamespaces__DOMNamespaces;
/*≠≠ node_modules/@yr/component/nod...react-dom/lib/DOMNamespaces.js ≠≠*/


/*== node_modules/@yr/component/nod...ct-dom/lib/getEventCharCode.js ==*/
$m['react-dom/lib/getEventCharCode'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * `charCode` represents the actual "character code" and is safe to use with
 * `String.fromCharCode`. As such, only keys that correspond to printable
 * characters produce a valid `charCode`, the only exception to this is Enter.
 * The Tab-key is considered non-printable and does not have a `charCode`,
 * presumably because it does not produce a tab-character in browsers.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {number} Normalized `charCode` property.
 */

function reactdomlibgetEventCharCode__getEventCharCode(nativeEvent) {
  var charCode;
  var keyCode = nativeEvent.keyCode;

  if ('charCode' in nativeEvent) {
    charCode = nativeEvent.charCode;

    // FF does not set `charCode` for the Enter-key, check against `keyCode`.
    if (charCode === 0 && keyCode === 13) {
      charCode = 13;
    }
  } else {
    // IE8 does not implement `charCode`, but `keyCode` has the correct value.
    charCode = keyCode;
  }

  // Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
  // Must not discard the (non-)printable Enter-key.
  if (charCode >= 32 || charCode === 13) {
    return charCode;
  }

  return 0;
}

$m['react-dom/lib/getEventCharCode'].exports = reactdomlibgetEventCharCode__getEventCharCode;
/*≠≠ node_modules/@yr/component/nod...ct-dom/lib/getEventCharCode.js ≠≠*/


/*== node_modules/react/lib/getNextDebugID.js ==*/
$m['react/lib/getNextDebugID'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var reactlibgetNextDebugID__nextDebugID = 1;

function reactlibgetNextDebugID__getNextDebugID() {
  return reactlibgetNextDebugID__nextDebugID++;
}

$m['react/lib/getNextDebugID'].exports = reactlibgetNextDebugID__getNextDebugID;
/*≠≠ node_modules/react/lib/getNextDebugID.js ≠≠*/


/*== node_modules/@yr/component/nod.../react-dom/lib/ReactVersion.js ==*/
$m['react-dom/lib/ReactVersion'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

$m['react-dom/lib/ReactVersion'].exports = '15.6.1';
/*≠≠ node_modules/@yr/component/nod.../react-dom/lib/ReactVersion.js ≠≠*/


/*== node_modules/@yr/component/nod...dom/lib/ReactEmptyComponent.js ==*/
$m['react-dom/lib/ReactEmptyComponent'] = { exports: {} };
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactEmptyComponent__emptyComponentFactory;

var reactdomlibReactEmptyComponent__ReactEmptyComponentInjection = {
  injectEmptyComponentFactory: function (factory) {
    reactdomlibReactEmptyComponent__emptyComponentFactory = factory;
  }
};

var reactdomlibReactEmptyComponent__ReactEmptyComponent = {
  create: function (instantiate) {
    return reactdomlibReactEmptyComponent__emptyComponentFactory(instantiate);
  }
};

reactdomlibReactEmptyComponent__ReactEmptyComponent.injection = reactdomlibReactEmptyComponent__ReactEmptyComponentInjection;

$m['react-dom/lib/ReactEmptyComponent'].exports = reactdomlibReactEmptyComponent__ReactEmptyComponent;
/*≠≠ node_modules/@yr/component/nod...dom/lib/ReactEmptyComponent.js ≠≠*/


/*== node_modules/fbjs/lib/shallowEqual.js ==*/
$m['fbjs/lib/shallowEqual'] = { exports: {} };
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */

var fbjslibshallowEqual__hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function fbjslibshallowEqual__is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function fbjslibshallowEqual__shallowEqual(objA, objB) {
  if (fbjslibshallowEqual__is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!fbjslibshallowEqual__hasOwnProperty.call(objB, keysA[i]) || !fbjslibshallowEqual__is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

$m['fbjs/lib/shallowEqual'].exports = fbjslibshallowEqual__shallowEqual;
/*≠≠ node_modules/fbjs/lib/shallowEqual.js ≠≠*/


/*== node_modules/fbjs/lib/emptyObject.js ==*/
$m['fbjs/lib/emptyObject'] = { exports: {} };
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var fbjslibemptyObject__emptyObject = {};

if ('development' !== 'production') {
  Object.freeze(fbjslibemptyObject__emptyObject);
}

$m['fbjs/lib/emptyObject'].exports = fbjslibemptyObject__emptyObject;
/*≠≠ node_modules/fbjs/lib/emptyObject.js ≠≠*/


/*== node_modules/@yr/component/nod...om/lib/ReactPropTypesSecret.js ==*/
$m['react-dom/lib/ReactPropTypesSecret'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var reactdomlibReactPropTypesSecret__ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

$m['react-dom/lib/ReactPropTypesSecret'].exports = reactdomlibReactPropTypesSecret__ReactPropTypesSecret;
/*≠≠ node_modules/@yr/component/nod...om/lib/ReactPropTypesSecret.js ≠≠*/


/*== node_modules/@yr/component/nod.../ReactPropTypeLocationNames.js ==*/
$m['react-dom/lib/ReactPropTypeLocationNames'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var reactdomlibReactPropTypeLocationNames__ReactPropTypeLocationNames = {};

if ('development' !== 'production') {
  reactdomlibReactPropTypeLocationNames__ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
}

$m['react-dom/lib/ReactPropTypeLocationNames'].exports = reactdomlibReactPropTypeLocationNames__ReactPropTypeLocationNames;
/*≠≠ node_modules/@yr/component/nod.../ReactPropTypeLocationNames.js ≠≠*/


/*== node_modules/@yr/component/nod...m/lib/ARIADOMPropertyConfig.js ==*/
$m['react-dom/lib/ARIADOMPropertyConfig'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibARIADOMPropertyConfig__ARIADOMPropertyConfig = {
  Properties: {
    // Global States and Properties
    'aria-current': 0, // state
    'aria-details': 0,
    'aria-disabled': 0, // state
    'aria-hidden': 0, // state
    'aria-invalid': 0, // state
    'aria-keyshortcuts': 0,
    'aria-label': 0,
    'aria-roledescription': 0,
    // Widget Attributes
    'aria-autocomplete': 0,
    'aria-checked': 0,
    'aria-expanded': 0,
    'aria-haspopup': 0,
    'aria-level': 0,
    'aria-modal': 0,
    'aria-multiline': 0,
    'aria-multiselectable': 0,
    'aria-orientation': 0,
    'aria-placeholder': 0,
    'aria-pressed': 0,
    'aria-readonly': 0,
    'aria-required': 0,
    'aria-selected': 0,
    'aria-sort': 0,
    'aria-valuemax': 0,
    'aria-valuemin': 0,
    'aria-valuenow': 0,
    'aria-valuetext': 0,
    // Live Region Attributes
    'aria-atomic': 0,
    'aria-busy': 0,
    'aria-live': 0,
    'aria-relevant': 0,
    // Drag-and-Drop Attributes
    'aria-dropeffect': 0,
    'aria-grabbed': 0,
    // Relationship Attributes
    'aria-activedescendant': 0,
    'aria-colcount': 0,
    'aria-colindex': 0,
    'aria-colspan': 0,
    'aria-controls': 0,
    'aria-describedby': 0,
    'aria-errormessage': 0,
    'aria-flowto': 0,
    'aria-labelledby': 0,
    'aria-owns': 0,
    'aria-posinset': 0,
    'aria-rowcount': 0,
    'aria-rowindex': 0,
    'aria-rowspan': 0,
    'aria-setsize': 0
  },
  DOMAttributeNames: {},
  DOMPropertyNames: {}
};

$m['react-dom/lib/ARIADOMPropertyConfig'].exports = reactdomlibARIADOMPropertyConfig__ARIADOMPropertyConfig;
/*≠≠ node_modules/@yr/component/nod...m/lib/ARIADOMPropertyConfig.js ≠≠*/


/*== src/lib/recipes.js ==*/
$m['src/lib/recipes'] = { exports: {} };

var srclibrecipes__base = {
  sun1: [{
    primitive: 'sun',
    x: 9,
    y: 9
  }],
  sun2: [{
    primitive: 'sun',
    x: 4,
    y: 9
  }],
  sun3: [{
    primitive: 'sun',
    x: 0,
    y: 2,
    scaleX: 0.7,
    scaleY: 0.7
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
    y: 19,
    scaleX: 0.7,
    scaleY: 0.7,
    winter: true
  }],
  moon1: [{
    primitive: 'moon',
    x: 20,
    y: 20
  }],
  moon2: [{
    primitive: 'moon',
    x: 15,
    y: 20
  }],
  moon3: [{
    primitive: 'moon',
    x: 2,
    y: 5,
    scaleX: 0.714285714,
    scaleY: 0.714285714
  }],
  '02': [{
    primitive: 'cloud',
    x: 43,
    y: 37,
    scaleX: 0.63,
    scaleY: 0.63,
    variation: 1
  }],
  '03': [{
    primitive: 'cloud',
    x: 3,
    y: 18,
    variation: 1
  }],
  40: [{
    primitive: 'cloud',
    x: 3,
    y: 18,
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
    x: 3,
    y: 18,
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
    x: 3,
    y: 18,
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
    x: 3,
    y: 18,
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
    x: 3,
    y: 18,
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
    x: 3,
    y: 18,
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
    x: 3,
    y: 18,
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
    x: 3,
    y: 18,
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
    x: 3,
    y: 18,
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
    x: 3,
    y: 18,
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
    x: 3,
    y: 18,
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
    x: 3,
    y: 18,
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
    x: 3,
    y: 18,
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
    x: 3,
    y: 18,
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
    x: 3,
    y: 18,
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
    x: 3,
    y: 18,
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
    x: 3,
    y: 18,
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
    x: 3,
    y: 18,
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
    x: 3,
    y: 18,
    variation: 1
  }, {
    primitive: 'fog',
    x: 0,
    y: 76
  }],
  '04': [{
    primitive: 'cloud',
    x: 3,
    y: 18,
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


/*== node_modules/@yr/component/nod...escapeTextContentForBrowser.js ==*/
$m['react-dom/lib/escapeTextContentForBrowser'] = { exports: {} };
/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * Based on the escape-html library, which is used under the MIT License below:
 *
 * Copyright (c) 2012-2013 TJ Holowaychuk
 * Copyright (c) 2015 Andreas Lubbe
 * Copyright (c) 2015 Tiancheng "Timothy" Gu
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * 'Software'), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

// code copied and modified from escape-html
/**
 * Module variables.
 * @private
 */

var reactdomlibescapeTextContentForBrowser__matchHtmlRegExp = /["'&<>]/;

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function reactdomlibescapeTextContentForBrowser__escapeHtml(string) {
  var str = '' + string;
  var match = reactdomlibescapeTextContentForBrowser__matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escape = '&quot;';
        break;
      case 38:
        // &
        escape = '&amp;';
        break;
      case 39:
        // '
        escape = '&#x27;'; // modified from escape-html; used to be '&#39'
        break;
      case 60:
        // <
        escape = '&lt;';
        break;
      case 62:
        // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}
// end code copied and modified from escape-html

/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */
function reactdomlibescapeTextContentForBrowser__escapeTextContentForBrowser(text) {
  if (typeof text === 'boolean' || typeof text === 'number') {
    // this shortcircuit helps perf for types that we know will never have
    // special characters, especially given that this function is used often
    // for numeric dom ids.
    return '' + text;
  }
  return reactdomlibescapeTextContentForBrowser__escapeHtml(text);
}

$m['react-dom/lib/escapeTextContentForBrowser'].exports = reactdomlibescapeTextContentForBrowser__escapeTextContentForBrowser;
/*≠≠ node_modules/@yr/component/nod...escapeTextContentForBrowser.js ≠≠*/


/*== node_modules/react/lib/lowPriorityWarning.js ==*/
$m['react/lib/lowPriorityWarning'] = { exports: {} };
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var reactliblowPriorityWarning__lowPriorityWarning = function reactliblowPriorityWarning__lowPriorityWarning() {};

if ('development' !== 'production') {
  var reactliblowPriorityWarning__printWarning = function reactliblowPriorityWarning__printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  reactliblowPriorityWarning__lowPriorityWarning = function reactliblowPriorityWarning__lowPriorityWarning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      reactliblowPriorityWarning__printWarning.apply(undefined, [format].concat(args));
    }
  };
}

$m['react/lib/lowPriorityWarning'].exports = reactliblowPriorityWarning__lowPriorityWarning;
/*≠≠ node_modules/react/lib/lowPriorityWarning.js ≠≠*/


/*== node_modules/react/lib/getIteratorFn.js ==*/
$m['react/lib/getIteratorFn'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

/* global Symbol */

var reactlibgetIteratorFn__ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var reactlibgetIteratorFn__FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

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
function reactlibgetIteratorFn__getIteratorFn(maybeIterable) {
  var iteratorFn = maybeIterable && (reactlibgetIteratorFn__ITERATOR_SYMBOL && maybeIterable[reactlibgetIteratorFn__ITERATOR_SYMBOL] || maybeIterable[reactlibgetIteratorFn__FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

$m['react/lib/getIteratorFn'].exports = reactlibgetIteratorFn__getIteratorFn;
/*≠≠ node_modules/react/lib/getIteratorFn.js ≠≠*/


/*== node_modules/react/lib/canDefineProperty.js ==*/
$m['react/lib/canDefineProperty'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var reactlibcanDefineProperty__canDefineProperty = false;
if ('development' !== 'production') {
  try {
    // $FlowFixMe https://github.com/facebook/flow/issues/285
    Object.defineProperty({}, 'x', { get: function get() {} });
    reactlibcanDefineProperty__canDefineProperty = true;
  } catch (x) {
    // IE will fail on defineProperty
  }
}

$m['react/lib/canDefineProperty'].exports = reactlibcanDefineProperty__canDefineProperty;
/*≠≠ node_modules/react/lib/canDefineProperty.js ≠≠*/


/*== node_modules/react/lib/ReactPropTypeLocationNames.js ==*/
$m['react/lib/ReactPropTypeLocationNames'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var reactlibReactPropTypeLocationNames__ReactPropTypeLocationNames = {};

if ('development' !== 'production') {
  reactlibReactPropTypeLocationNames__ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
}

$m['react/lib/ReactPropTypeLocationNames'].exports = reactlibReactPropTypeLocationNames__ReactPropTypeLocationNames;
/*≠≠ node_modules/react/lib/ReactPropTypeLocationNames.js ≠≠*/


/*== node_modules/@yr/component/nod...-dom/lib/forEachAccumulated.js ==*/
$m['react-dom/lib/forEachAccumulated'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

/**
 * @param {array} arr an "accumulation" of items which is either an Array or
 * a single item. Useful when paired with the `accumulate` module. This is a
 * simple utility that allows us to reason about a collection of items, but
 * handling the case when there is exactly one item (and we do not need to
 * allocate an array).
 */

function reactdomlibforEachAccumulated__forEachAccumulated(arr, cb, scope) {
  if (Array.isArray(arr)) {
    arr.forEach(cb, scope);
  } else if (arr) {
    cb.call(scope, arr);
  }
}

$m['react-dom/lib/forEachAccumulated'].exports = reactdomlibforEachAccumulated__forEachAccumulated;
/*≠≠ node_modules/@yr/component/nod...-dom/lib/forEachAccumulated.js ≠≠*/


/*== node_modules/react/lib/ReactElementSymbol.js ==*/
$m['react/lib/ReactElementSymbol'] = { exports: {} };
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.

var reactlibReactElementSymbol__REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

$m['react/lib/ReactElementSymbol'].exports = reactlibReactElementSymbol__REACT_ELEMENT_TYPE;
/*≠≠ node_modules/react/lib/ReactElementSymbol.js ≠≠*/


/*== node_modules/@yr/component/nod...act-dom/lib/ViewportMetrics.js ==*/
$m['react-dom/lib/ViewportMetrics'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibViewportMetrics__ViewportMetrics = {
  currentScrollLeft: 0,

  currentScrollTop: 0,

  refreshScrollValues: function (scrollPosition) {
    reactdomlibViewportMetrics__ViewportMetrics.currentScrollLeft = scrollPosition.x;
    reactdomlibViewportMetrics__ViewportMetrics.currentScrollTop = scrollPosition.y;
  }
};

$m['react-dom/lib/ViewportMetrics'].exports = reactdomlibViewportMetrics__ViewportMetrics;
/*≠≠ node_modules/@yr/component/nod...act-dom/lib/ViewportMetrics.js ≠≠*/


/*== node_modules/@yr/component/nod.../lib/ReactDOMComponentFlags.js ==*/
$m['react-dom/lib/ReactDOMComponentFlags'] = { exports: {} };
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactDOMComponentFlags__ReactDOMComponentFlags = {
  hasCachedChildNodes: 1 << 0
};

$m['react-dom/lib/ReactDOMComponentFlags'].exports = reactdomlibReactDOMComponentFlags__ReactDOMComponentFlags;
/*≠≠ node_modules/@yr/component/nod.../lib/ReactDOMComponentFlags.js ≠≠*/


/*== node_modules/@yr/component/nod...om/lib/ReactDOMFeatureFlags.js ==*/
$m['react-dom/lib/ReactDOMFeatureFlags'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactDOMFeatureFlags__ReactDOMFeatureFlags = {
  useCreateElement: true,
  useFiber: false
};

$m['react-dom/lib/ReactDOMFeatureFlags'].exports = reactdomlibReactDOMFeatureFlags__ReactDOMFeatureFlags;
/*≠≠ node_modules/@yr/component/nod...om/lib/ReactDOMFeatureFlags.js ≠≠*/


/*== node_modules/@yr/component/nod...dules/react-dom/lib/adler32.js ==*/
$m['react-dom/lib/adler32'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var reactdomlibadler32__MOD = 65521;

// adler32 is not cryptographically strong, and is only used to sanity check that
// markup generated on the server matches the markup generated on the client.
// This implementation (a modified version of the SheetJS version) has been optimized
// for our use case, at the expense of conforming to the adler32 specification
// for non-ascii inputs.
function reactdomlibadler32__adler32(data) {
  var a = 1;
  var b = 0;
  var i = 0;
  var l = data.length;
  var m = l & ~0x3;
  while (i < m) {
    var n = Math.min(i + 4096, m);
    for (; i < n; i += 4) {
      b += (a += data.charCodeAt(i)) + (a += data.charCodeAt(i + 1)) + (a += data.charCodeAt(i + 2)) + (a += data.charCodeAt(i + 3));
    }
    a %= reactdomlibadler32__MOD;
    b %= reactdomlibadler32__MOD;
  }
  for (; i < l; i++) {
    b += a += data.charCodeAt(i);
  }
  a %= reactdomlibadler32__MOD;
  b %= reactdomlibadler32__MOD;
  return a | b << 16;
}

$m['react-dom/lib/adler32'].exports = reactdomlibadler32__adler32;
/*≠≠ node_modules/@yr/component/nod...dules/react-dom/lib/adler32.js ≠≠*/


/*== node_modules/@yr/component/nod...t-dom/lib/ReactFeatureFlags.js ==*/
$m['react-dom/lib/ReactFeatureFlags'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var reactdomlibReactFeatureFlags__ReactFeatureFlags = {
  // When true, call console.time() before and .timeEnd() after each top-level
  // render (both initial renders and updates). Useful when looking at prod-mode
  // timeline profiles in Chrome, for example.
  logTopLevelRenders: false
};

$m['react-dom/lib/ReactFeatureFlags'].exports = reactdomlibReactFeatureFlags__ReactFeatureFlags;
/*≠≠ node_modules/@yr/component/nod...t-dom/lib/ReactFeatureFlags.js ≠≠*/


/*== node_modules/@yr/component/nod...act-dom/lib/ReactErrorUtils.js ==*/
$m['react-dom/lib/ReactErrorUtils'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var reactdomlibReactErrorUtils__caughtError = null;

/**
 * Call a function while guarding against errors that happens within it.
 *
 * @param {String} name of the guard to use for logging or debugging
 * @param {Function} func The function to invoke
 * @param {*} a First argument
 * @param {*} b Second argument
 */
function reactdomlibReactErrorUtils__invokeGuardedCallback(name, func, a) {
  try {
    func(a);
  } catch (x) {
    if (reactdomlibReactErrorUtils__caughtError === null) {
      reactdomlibReactErrorUtils__caughtError = x;
    }
  }
}

var reactdomlibReactErrorUtils__ReactErrorUtils = {
  invokeGuardedCallback: reactdomlibReactErrorUtils__invokeGuardedCallback,

  /**
   * Invoked by ReactTestUtils.Simulate so that any errors thrown by the event
   * handler are sure to be rethrown by rethrowCaughtError.
   */
  invokeGuardedCallbackWithCatch: reactdomlibReactErrorUtils__invokeGuardedCallback,

  /**
   * During execution of guarded functions we will capture the first error which
   * we will rethrow to be handled by the top level error handler.
   */
  rethrowCaughtError: function () {
    if (reactdomlibReactErrorUtils__caughtError) {
      var error = reactdomlibReactErrorUtils__caughtError;
      reactdomlibReactErrorUtils__caughtError = null;
      throw error;
    }
  }
};

if ('development' !== 'production') {
  /**
   * To help development we can get better devtools integration by simulating a
   * real browser event.
   */
  if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof document !== 'undefined' && typeof document.createEvent === 'function') {
    var reactdomlibReactErrorUtils__fakeNode = document.createElement('react');
    reactdomlibReactErrorUtils__ReactErrorUtils.invokeGuardedCallback = function (name, func, a) {
      var boundFunc = func.bind(null, a);
      var evtType = 'react-' + name;
      reactdomlibReactErrorUtils__fakeNode.addEventListener(evtType, boundFunc, false);
      var evt = document.createEvent('Event');
      evt.initEvent(evtType, false, false);
      reactdomlibReactErrorUtils__fakeNode.dispatchEvent(evt);
      reactdomlibReactErrorUtils__fakeNode.removeEventListener(evtType, boundFunc, false);
    };
  }
}

$m['react-dom/lib/ReactErrorUtils'].exports = reactdomlibReactErrorUtils__ReactErrorUtils;
/*≠≠ node_modules/@yr/component/nod...act-dom/lib/ReactErrorUtils.js ≠≠*/


/*== node_modules/@yr/component/nod...ct-dom/lib/ReactInstanceMap.js ==*/
$m['react-dom/lib/ReactInstanceMap'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * `ReactInstanceMap` maintains a mapping from a public facing stateful
 * instance (key) and the internal representation (value). This allows public
 * methods to accept the user facing instance as an argument and map them back
 * to internal methods.
 */

// TODO: Replace this with ES6: var ReactInstanceMap = new Map();

var reactdomlibReactInstanceMap__ReactInstanceMap = {
  /**
   * This API should be called `delete` but we'd have to make sure to always
   * transform these to strings for IE support. When this transform is fully
   * supported we can rename it.
   */
  remove: function (key) {
    key._reactInternalInstance = undefined;
  },

  get: function (key) {
    return key._reactInternalInstance;
  },

  has: function (key) {
    return key._reactInternalInstance !== undefined;
  },

  set: function (key, value) {
    key._reactInternalInstance = value;
  }
};

$m['react-dom/lib/ReactInstanceMap'].exports = reactdomlibReactInstanceMap__ReactInstanceMap;
/*≠≠ node_modules/@yr/component/nod...ct-dom/lib/ReactInstanceMap.js ≠≠*/


/*== node_modules/react/lib/ReactVersion.js ==*/
$m['react/lib/ReactVersion'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

$m['react/lib/ReactVersion'].exports = '15.6.1';
/*≠≠ node_modules/react/lib/ReactVersion.js ≠≠*/


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


/*== node_modules/react/lib/KeyEscapeUtils.js ==*/
$m['react/lib/KeyEscapeUtils'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function reactlibKeyEscapeUtils__escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * Unescape and unwrap key for human-readable display
 *
 * @param {string} key to unescape.
 * @return {string} the unescaped key.
 */
function reactlibKeyEscapeUtils__unescape(key) {
  var unescapeRegex = /(=0|=2)/g;
  var unescaperLookup = {
    '=0': '=',
    '=2': ':'
  };
  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

  return ('' + keySubstring).replace(unescapeRegex, function (match) {
    return unescaperLookup[match];
  });
}

var reactlibKeyEscapeUtils__KeyEscapeUtils = {
  escape: reactlibKeyEscapeUtils__escape,
  unescape: reactlibKeyEscapeUtils__unescape
};

$m['react/lib/KeyEscapeUtils'].exports = reactlibKeyEscapeUtils__KeyEscapeUtils;
/*≠≠ node_modules/react/lib/KeyEscapeUtils.js ≠≠*/


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
  if (yrclock__runTimeoutId > 0) {
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
    yrclock__runTimeoutId = interval < yrclock__INTERVAL_CUTOFF ? yrclock__raf(yrclock__run) : setTimeout(yrclock__run, interval);
  }
}

/**
 * Stop running
 */
function yrclock__stop() {
  if (yrclock__runTimeoutId > 0) {
    yrclock__raf.cancel(yrclock__runTimeoutId);
    clearTimeout(yrclock__runTimeoutId);
  }
  yrclock__runTimeoutId = 0;
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
  (function () {
    var printWarning = function printWarning(format) {
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

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

$m['fbjs/lib/warning'].exports = fbjslibwarning__warning;
/*≠≠ node_modules/fbjs/lib/warning.js ≠≠*/


/*== node_modules/react/lib/ReactComponentTreeHook.js ==*/
$m['react/lib/ReactComponentTreeHook'] = { exports: {} };
/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var reactlibReactComponentTreeHook___prodInvariant = $m['react/lib/reactProdInvariant'].exports;

var reactlibReactComponentTreeHook__ReactCurrentOwner = $m['react/lib/ReactCurrentOwner'].exports;

var reactlibReactComponentTreeHook__invariant = $m['fbjs/lib/invariant'].exports;
var reactlibReactComponentTreeHook__warning = $m['fbjs/lib/warning'].exports;

function reactlibReactComponentTreeHook__isNative(fn) {
  // Based on isNative() from Lodash
  var funcToString = Function.prototype.toString;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var reIsNative = RegExp('^' + funcToString
  // Take an example native function source for comparison
  .call(hasOwnProperty
  // Strip regex characters so we can use it for regex
  ).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&'
  // Remove hasOwnProperty from the template to make it generic
  ).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  try {
    var source = funcToString.call(fn);
    return reIsNative.test(source);
  } catch (err) {
    return false;
  }
}

var reactlibReactComponentTreeHook__canUseCollections =
// Array.from
typeof Array.from === 'function' &&
// Map
typeof Map === 'function' && reactlibReactComponentTreeHook__isNative(Map) &&
// Map.prototype.keys
Map.prototype != null && typeof Map.prototype.keys === 'function' && reactlibReactComponentTreeHook__isNative(Map.prototype.keys) &&
// Set
typeof Set === 'function' && reactlibReactComponentTreeHook__isNative(Set) &&
// Set.prototype.keys
Set.prototype != null && typeof Set.prototype.keys === 'function' && reactlibReactComponentTreeHook__isNative(Set.prototype.keys);

var reactlibReactComponentTreeHook__setItem;
var reactlibReactComponentTreeHook__getItem;
var reactlibReactComponentTreeHook__removeItem;
var reactlibReactComponentTreeHook__getItemIDs;
var reactlibReactComponentTreeHook__addRoot;
var reactlibReactComponentTreeHook__removeRoot;
var reactlibReactComponentTreeHook__getRootIDs;

if (reactlibReactComponentTreeHook__canUseCollections) {
  var reactlibReactComponentTreeHook__itemMap = new Map();
  var reactlibReactComponentTreeHook__rootIDSet = new Set();

  reactlibReactComponentTreeHook__setItem = function reactlibReactComponentTreeHook__setItem(id, item) {
    reactlibReactComponentTreeHook__itemMap.set(id, item);
  };
  reactlibReactComponentTreeHook__getItem = function reactlibReactComponentTreeHook__getItem(id) {
    return reactlibReactComponentTreeHook__itemMap.get(id);
  };
  reactlibReactComponentTreeHook__removeItem = function reactlibReactComponentTreeHook__removeItem(id) {
    reactlibReactComponentTreeHook__itemMap['delete'](id);
  };
  reactlibReactComponentTreeHook__getItemIDs = function reactlibReactComponentTreeHook__getItemIDs() {
    return Array.from(reactlibReactComponentTreeHook__itemMap.keys());
  };

  reactlibReactComponentTreeHook__addRoot = function reactlibReactComponentTreeHook__addRoot(id) {
    reactlibReactComponentTreeHook__rootIDSet.add(id);
  };
  reactlibReactComponentTreeHook__removeRoot = function reactlibReactComponentTreeHook__removeRoot(id) {
    reactlibReactComponentTreeHook__rootIDSet['delete'](id);
  };
  reactlibReactComponentTreeHook__getRootIDs = function reactlibReactComponentTreeHook__getRootIDs() {
    return Array.from(reactlibReactComponentTreeHook__rootIDSet.keys());
  };
} else {
  var reactlibReactComponentTreeHook__itemByKey = {};
  var reactlibReactComponentTreeHook__rootByKey = {};

  // Use non-numeric keys to prevent V8 performance issues:
  // https://github.com/facebook/react/pull/7232
  var reactlibReactComponentTreeHook__getKeyFromID = function reactlibReactComponentTreeHook__getKeyFromID(id) {
    return '.' + id;
  };
  var reactlibReactComponentTreeHook__getIDFromKey = function reactlibReactComponentTreeHook__getIDFromKey(key) {
    return parseInt(key.substr(1), 10);
  };

  reactlibReactComponentTreeHook__setItem = function reactlibReactComponentTreeHook__setItem(id, item) {
    var key = reactlibReactComponentTreeHook__getKeyFromID(id);
    reactlibReactComponentTreeHook__itemByKey[key] = item;
  };
  reactlibReactComponentTreeHook__getItem = function reactlibReactComponentTreeHook__getItem(id) {
    var key = reactlibReactComponentTreeHook__getKeyFromID(id);
    return reactlibReactComponentTreeHook__itemByKey[key];
  };
  reactlibReactComponentTreeHook__removeItem = function reactlibReactComponentTreeHook__removeItem(id) {
    var key = reactlibReactComponentTreeHook__getKeyFromID(id);
    delete reactlibReactComponentTreeHook__itemByKey[key];
  };
  reactlibReactComponentTreeHook__getItemIDs = function reactlibReactComponentTreeHook__getItemIDs() {
    return Object.keys(reactlibReactComponentTreeHook__itemByKey).map(reactlibReactComponentTreeHook__getIDFromKey);
  };

  reactlibReactComponentTreeHook__addRoot = function reactlibReactComponentTreeHook__addRoot(id) {
    var key = reactlibReactComponentTreeHook__getKeyFromID(id);
    reactlibReactComponentTreeHook__rootByKey[key] = true;
  };
  reactlibReactComponentTreeHook__removeRoot = function reactlibReactComponentTreeHook__removeRoot(id) {
    var key = reactlibReactComponentTreeHook__getKeyFromID(id);
    delete reactlibReactComponentTreeHook__rootByKey[key];
  };
  reactlibReactComponentTreeHook__getRootIDs = function reactlibReactComponentTreeHook__getRootIDs() {
    return Object.keys(reactlibReactComponentTreeHook__rootByKey).map(reactlibReactComponentTreeHook__getIDFromKey);
  };
}

var reactlibReactComponentTreeHook__unmountedIDs = [];

function reactlibReactComponentTreeHook__purgeDeep(id) {
  var item = reactlibReactComponentTreeHook__getItem(id);
  if (item) {
    var childIDs = item.childIDs;

    reactlibReactComponentTreeHook__removeItem(id);
    childIDs.forEach(reactlibReactComponentTreeHook__purgeDeep);
  }
}

function reactlibReactComponentTreeHook__describeComponentFrame(name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
}

function reactlibReactComponentTreeHook__getDisplayName(element) {
  if (element == null) {
    return '#empty';
  } else if (typeof element === 'string' || typeof element === 'number') {
    return '#text';
  } else if (typeof element.type === 'string') {
    return element.type;
  } else {
    return element.type.displayName || element.type.name || 'Unknown';
  }
}

function reactlibReactComponentTreeHook__describeID(id) {
  var name = reactlibReactComponentTreeHook__ReactComponentTreeHook.getDisplayName(id);
  var element = reactlibReactComponentTreeHook__ReactComponentTreeHook.getElement(id);
  var ownerID = reactlibReactComponentTreeHook__ReactComponentTreeHook.getOwnerID(id);
  var ownerName;
  if (ownerID) {
    ownerName = reactlibReactComponentTreeHook__ReactComponentTreeHook.getDisplayName(ownerID);
  }
  'development' !== 'production' ? reactlibReactComponentTreeHook__warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
  return reactlibReactComponentTreeHook__describeComponentFrame(name, element && element._source, ownerName);
}

var reactlibReactComponentTreeHook__ReactComponentTreeHook = {
  onSetChildren: function onSetChildren(id, nextChildIDs) {
    var item = reactlibReactComponentTreeHook__getItem(id);
    !item ? 'development' !== 'production' ? reactlibReactComponentTreeHook__invariant(false, 'Item must have been set') : reactlibReactComponentTreeHook___prodInvariant('144') : void 0;
    item.childIDs = nextChildIDs;

    for (var i = 0; i < nextChildIDs.length; i++) {
      var nextChildID = nextChildIDs[i];
      var nextChild = reactlibReactComponentTreeHook__getItem(nextChildID);
      !nextChild ? 'development' !== 'production' ? reactlibReactComponentTreeHook__invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : reactlibReactComponentTreeHook___prodInvariant('140') : void 0;
      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? 'development' !== 'production' ? reactlibReactComponentTreeHook__invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : reactlibReactComponentTreeHook___prodInvariant('141') : void 0;
      !nextChild.isMounted ? 'development' !== 'production' ? reactlibReactComponentTreeHook__invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : reactlibReactComponentTreeHook___prodInvariant('71') : void 0;
      if (nextChild.parentID == null) {
        nextChild.parentID = id;
        // TODO: This shouldn't be necessary but mounting a new root during in
        // componentWillMount currently causes not-yet-mounted components to
        // be purged from our tree data so their parent id is missing.
      }
      !(nextChild.parentID === id) ? 'development' !== 'production' ? reactlibReactComponentTreeHook__invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : reactlibReactComponentTreeHook___prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
    }
  },
  onBeforeMountComponent: function onBeforeMountComponent(id, element, parentID) {
    var item = {
      element: element,
      parentID: parentID,
      text: null,
      childIDs: [],
      isMounted: false,
      updateCount: 0
    };
    reactlibReactComponentTreeHook__setItem(id, item);
  },
  onBeforeUpdateComponent: function onBeforeUpdateComponent(id, element) {
    var item = reactlibReactComponentTreeHook__getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.element = element;
  },
  onMountComponent: function onMountComponent(id) {
    var item = reactlibReactComponentTreeHook__getItem(id);
    !item ? 'development' !== 'production' ? reactlibReactComponentTreeHook__invariant(false, 'Item must have been set') : reactlibReactComponentTreeHook___prodInvariant('144') : void 0;
    item.isMounted = true;
    var isRoot = item.parentID === 0;
    if (isRoot) {
      reactlibReactComponentTreeHook__addRoot(id);
    }
  },
  onUpdateComponent: function onUpdateComponent(id) {
    var item = reactlibReactComponentTreeHook__getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.updateCount++;
  },
  onUnmountComponent: function onUnmountComponent(id) {
    var item = reactlibReactComponentTreeHook__getItem(id);
    if (item) {
      // We need to check if it exists.
      // `item` might not exist if it is inside an error boundary, and a sibling
      // error boundary child threw while mounting. Then this instance never
      // got a chance to mount, but it still gets an unmounting event during
      // the error boundary cleanup.
      item.isMounted = false;
      var isRoot = item.parentID === 0;
      if (isRoot) {
        reactlibReactComponentTreeHook__removeRoot(id);
      }
    }
    reactlibReactComponentTreeHook__unmountedIDs.push(id);
  },
  purgeUnmountedComponents: function purgeUnmountedComponents() {
    if (reactlibReactComponentTreeHook__ReactComponentTreeHook._preventPurging) {
      // Should only be used for testing.
      return;
    }

    for (var i = 0; i < reactlibReactComponentTreeHook__unmountedIDs.length; i++) {
      var id = reactlibReactComponentTreeHook__unmountedIDs[i];
      reactlibReactComponentTreeHook__purgeDeep(id);
    }
    reactlibReactComponentTreeHook__unmountedIDs.length = 0;
  },
  isMounted: function isMounted(id) {
    var item = reactlibReactComponentTreeHook__getItem(id);
    return item ? item.isMounted : false;
  },
  getCurrentStackAddendum: function getCurrentStackAddendum(topElement) {
    var info = '';
    if (topElement) {
      var name = reactlibReactComponentTreeHook__getDisplayName(topElement);
      var owner = topElement._owner;
      info += reactlibReactComponentTreeHook__describeComponentFrame(name, topElement._source, owner && owner.getName());
    }

    var currentOwner = reactlibReactComponentTreeHook__ReactCurrentOwner.current;
    var id = currentOwner && currentOwner._debugID;

    info += reactlibReactComponentTreeHook__ReactComponentTreeHook.getStackAddendumByID(id);
    return info;
  },
  getStackAddendumByID: function getStackAddendumByID(id) {
    var info = '';
    while (id) {
      info += reactlibReactComponentTreeHook__describeID(id);
      id = reactlibReactComponentTreeHook__ReactComponentTreeHook.getParentID(id);
    }
    return info;
  },
  getChildIDs: function getChildIDs(id) {
    var item = reactlibReactComponentTreeHook__getItem(id);
    return item ? item.childIDs : [];
  },
  getDisplayName: function getDisplayName(id) {
    var element = reactlibReactComponentTreeHook__ReactComponentTreeHook.getElement(id);
    if (!element) {
      return null;
    }
    return reactlibReactComponentTreeHook__getDisplayName(element);
  },
  getElement: function getElement(id) {
    var item = reactlibReactComponentTreeHook__getItem(id);
    return item ? item.element : null;
  },
  getOwnerID: function getOwnerID(id) {
    var element = reactlibReactComponentTreeHook__ReactComponentTreeHook.getElement(id);
    if (!element || !element._owner) {
      return null;
    }
    return element._owner._debugID;
  },
  getParentID: function getParentID(id) {
    var item = reactlibReactComponentTreeHook__getItem(id);
    return item ? item.parentID : null;
  },
  getSource: function getSource(id) {
    var item = reactlibReactComponentTreeHook__getItem(id);
    var element = item ? item.element : null;
    var source = element != null ? element._source : null;
    return source;
  },
  getText: function getText(id) {
    var element = reactlibReactComponentTreeHook__ReactComponentTreeHook.getElement(id);
    if (typeof element === 'string') {
      return element;
    } else if (typeof element === 'number') {
      return '' + element;
    } else {
      return null;
    }
  },
  getUpdateCount: function getUpdateCount(id) {
    var item = reactlibReactComponentTreeHook__getItem(id);
    return item ? item.updateCount : 0;
  },

  getRootIDs: reactlibReactComponentTreeHook__getRootIDs,
  getRegisteredIDs: reactlibReactComponentTreeHook__getItemIDs,

  pushNonStandardWarningStack: function pushNonStandardWarningStack(isCreatingElement, currentSource) {
    if (typeof console.reactStack !== 'function') {
      return;
    }

    var stack = [];
    var currentOwner = reactlibReactComponentTreeHook__ReactCurrentOwner.current;
    var id = currentOwner && currentOwner._debugID;

    try {
      if (isCreatingElement) {
        stack.push({
          name: id ? reactlibReactComponentTreeHook__ReactComponentTreeHook.getDisplayName(id) : null,
          fileName: currentSource ? currentSource.fileName : null,
          lineNumber: currentSource ? currentSource.lineNumber : null
        });
      }

      while (id) {
        var element = reactlibReactComponentTreeHook__ReactComponentTreeHook.getElement(id);
        var parentID = reactlibReactComponentTreeHook__ReactComponentTreeHook.getParentID(id);
        var ownerID = reactlibReactComponentTreeHook__ReactComponentTreeHook.getOwnerID(id);
        var ownerName = ownerID ? reactlibReactComponentTreeHook__ReactComponentTreeHook.getDisplayName(ownerID) : null;
        var source = element && element._source;
        stack.push({
          name: ownerName,
          fileName: source ? source.fileName : null,
          lineNumber: source ? source.lineNumber : null
        });
        id = parentID;
      }
    } catch (err) {
      // Internal state is messed up.
      // Stop building the stack (it's just a nice to have).
    }

    console.reactStack(stack);
  },
  popNonStandardWarningStack: function popNonStandardWarningStack() {
    if (typeof console.reactStackEnd !== 'function') {
      return;
    }
    console.reactStackEnd();
  }
};

$m['react/lib/ReactComponentTreeHook'].exports = reactlibReactComponentTreeHook__ReactComponentTreeHook;
/*≠≠ node_modules/react/lib/ReactComponentTreeHook.js ≠≠*/


/*== node_modules/@yr/component/nod...s/react-dom/lib/DOMProperty.js ==*/
$m['react-dom/lib/DOMProperty'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibDOMProperty___prodInvariant = $m['react-dom/lib/reactProdInvariant'].exports;

var reactdomlibDOMProperty__invariant = $m['fbjs/lib/invariant'].exports;

function reactdomlibDOMProperty__checkMask(value, bitmask) {
  return (value & bitmask) === bitmask;
}

var reactdomlibDOMProperty__DOMPropertyInjection = {
  /**
   * Mapping from normalized, camelcased property names to a configuration that
   * specifies how the associated DOM property should be accessed or rendered.
   */
  MUST_USE_PROPERTY: 0x1,
  HAS_BOOLEAN_VALUE: 0x4,
  HAS_NUMERIC_VALUE: 0x8,
  HAS_POSITIVE_NUMERIC_VALUE: 0x10 | 0x8,
  HAS_OVERLOADED_BOOLEAN_VALUE: 0x20,

  /**
   * Inject some specialized knowledge about the DOM. This takes a config object
   * with the following properties:
   *
   * isCustomAttribute: function that given an attribute name will return true
   * if it can be inserted into the DOM verbatim. Useful for data-* or aria-*
   * attributes where it's impossible to enumerate all of the possible
   * attribute names,
   *
   * Properties: object mapping DOM property name to one of the
   * DOMPropertyInjection constants or null. If your attribute isn't in here,
   * it won't get written to the DOM.
   *
   * DOMAttributeNames: object mapping React attribute name to the DOM
   * attribute name. Attribute names not specified use the **lowercase**
   * normalized name.
   *
   * DOMAttributeNamespaces: object mapping React attribute name to the DOM
   * attribute namespace URL. (Attribute names not specified use no namespace.)
   *
   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
   * Property names not specified use the normalized name.
   *
   * DOMMutationMethods: Properties that require special mutation methods. If
   * `value` is undefined, the mutation method should unset the property.
   *
   * @param {object} domPropertyConfig the config as described above.
   */
  injectDOMPropertyConfig: function (domPropertyConfig) {
    var Injection = reactdomlibDOMProperty__DOMPropertyInjection;
    var Properties = domPropertyConfig.Properties || {};
    var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
    var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
    var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
    var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};

    if (domPropertyConfig.isCustomAttribute) {
      reactdomlibDOMProperty__DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);
    }

    for (var propName in Properties) {
      !!reactdomlibDOMProperty__DOMProperty.properties.hasOwnProperty(propName) ? 'development' !== 'production' ? reactdomlibDOMProperty__invariant(false, 'injectDOMPropertyConfig(...): You\'re trying to inject DOM property \'%s\' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.', propName) : reactdomlibDOMProperty___prodInvariant('48', propName) : void 0;

      var lowerCased = propName.toLowerCase();
      var propConfig = Properties[propName];

      var propertyInfo = {
        attributeName: lowerCased,
        attributeNamespace: null,
        propertyName: propName,
        mutationMethod: null,

        mustUseProperty: reactdomlibDOMProperty__checkMask(propConfig, Injection.MUST_USE_PROPERTY),
        hasBooleanValue: reactdomlibDOMProperty__checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE),
        hasNumericValue: reactdomlibDOMProperty__checkMask(propConfig, Injection.HAS_NUMERIC_VALUE),
        hasPositiveNumericValue: reactdomlibDOMProperty__checkMask(propConfig, Injection.HAS_POSITIVE_NUMERIC_VALUE),
        hasOverloadedBooleanValue: reactdomlibDOMProperty__checkMask(propConfig, Injection.HAS_OVERLOADED_BOOLEAN_VALUE)
      };
      !(propertyInfo.hasBooleanValue + propertyInfo.hasNumericValue + propertyInfo.hasOverloadedBooleanValue <= 1) ? 'development' !== 'production' ? reactdomlibDOMProperty__invariant(false, 'DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s', propName) : reactdomlibDOMProperty___prodInvariant('50', propName) : void 0;

      if ('development' !== 'production') {
        reactdomlibDOMProperty__DOMProperty.getPossibleStandardName[lowerCased] = propName;
      }

      if (DOMAttributeNames.hasOwnProperty(propName)) {
        var attributeName = DOMAttributeNames[propName];
        propertyInfo.attributeName = attributeName;
        if ('development' !== 'production') {
          reactdomlibDOMProperty__DOMProperty.getPossibleStandardName[attributeName] = propName;
        }
      }

      if (DOMAttributeNamespaces.hasOwnProperty(propName)) {
        propertyInfo.attributeNamespace = DOMAttributeNamespaces[propName];
      }

      if (DOMPropertyNames.hasOwnProperty(propName)) {
        propertyInfo.propertyName = DOMPropertyNames[propName];
      }

      if (DOMMutationMethods.hasOwnProperty(propName)) {
        propertyInfo.mutationMethod = DOMMutationMethods[propName];
      }

      reactdomlibDOMProperty__DOMProperty.properties[propName] = propertyInfo;
    }
  }
};

/* eslint-disable max-len */
var reactdomlibDOMProperty__ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
/* eslint-enable max-len */

/**
 * DOMProperty exports lookup objects that can be used like functions:
 *
 *   > DOMProperty.isValid['id']
 *   true
 *   > DOMProperty.isValid['foobar']
 *   undefined
 *
 * Although this may be confusing, it performs better in general.
 *
 * @see http://jsperf.com/key-exists
 * @see http://jsperf.com/key-missing
 */
var reactdomlibDOMProperty__DOMProperty = {
  ID_ATTRIBUTE_NAME: 'data-reactid',
  ROOT_ATTRIBUTE_NAME: 'data-reactroot',

  ATTRIBUTE_NAME_START_CHAR: reactdomlibDOMProperty__ATTRIBUTE_NAME_START_CHAR,
  ATTRIBUTE_NAME_CHAR: reactdomlibDOMProperty__ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040',

  /**
   * Map from property "standard name" to an object with info about how to set
   * the property in the DOM. Each object contains:
   *
   * attributeName:
   *   Used when rendering markup or with `*Attribute()`.
   * attributeNamespace
   * propertyName:
   *   Used on DOM node instances. (This includes properties that mutate due to
   *   external factors.)
   * mutationMethod:
   *   If non-null, used instead of the property or `setAttribute()` after
   *   initial render.
   * mustUseProperty:
   *   Whether the property must be accessed and mutated as an object property.
   * hasBooleanValue:
   *   Whether the property should be removed when set to a falsey value.
   * hasNumericValue:
   *   Whether the property must be numeric or parse as a numeric and should be
   *   removed when set to a falsey value.
   * hasPositiveNumericValue:
   *   Whether the property must be positive numeric or parse as a positive
   *   numeric and should be removed when set to a falsey value.
   * hasOverloadedBooleanValue:
   *   Whether the property can be used as a flag as well as with a value.
   *   Removed when strictly equal to false; present without a value when
   *   strictly equal to true; present with a value otherwise.
   */
  properties: {},

  /**
   * Mapping from lowercase property names to the properly cased version, used
   * to warn in the case of missing properties. Available only in __DEV__.
   *
   * autofocus is predefined, because adding it to the property whitelist
   * causes unintended side effects.
   *
   * @type {Object}
   */
  getPossibleStandardName: 'development' !== 'production' ? { autofocus: 'autoFocus' } : null,

  /**
   * All of the isCustomAttribute() functions that have been injected.
   */
  _isCustomAttributeFunctions: [],

  /**
   * Checks whether a property name is a custom attribute.
   * @method
   */
  isCustomAttribute: function (attributeName) {
    for (var i = 0; i < reactdomlibDOMProperty__DOMProperty._isCustomAttributeFunctions.length; i++) {
      var isCustomAttributeFn = reactdomlibDOMProperty__DOMProperty._isCustomAttributeFunctions[i];
      if (isCustomAttributeFn(attributeName)) {
        return true;
      }
    }
    return false;
  },

  injection: reactdomlibDOMProperty__DOMPropertyInjection
};

$m['react-dom/lib/DOMProperty'].exports = reactdomlibDOMProperty__DOMProperty;
/*≠≠ node_modules/@yr/component/nod...s/react-dom/lib/DOMProperty.js ≠≠*/


/*== node_modules/@yr/component/nod...lib/ReactDOMInvalidARIAHook.js ==*/
$m['react-dom/lib/ReactDOMInvalidARIAHook'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactDOMInvalidARIAHook__DOMProperty = $m['react-dom/lib/DOMProperty'].exports;
var reactdomlibReactDOMInvalidARIAHook__ReactComponentTreeHook = $m['react/lib/ReactComponentTreeHook'].exports;

var reactdomlibReactDOMInvalidARIAHook__warning = $m['fbjs/lib/warning'].exports;

var reactdomlibReactDOMInvalidARIAHook__warnedProperties = {};
var reactdomlibReactDOMInvalidARIAHook__rARIA = new RegExp('^(aria)-[' + reactdomlibReactDOMInvalidARIAHook__DOMProperty.ATTRIBUTE_NAME_CHAR + ']*$');

function reactdomlibReactDOMInvalidARIAHook__validateProperty(tagName, name, debugID) {
  if (reactdomlibReactDOMInvalidARIAHook__warnedProperties.hasOwnProperty(name) && reactdomlibReactDOMInvalidARIAHook__warnedProperties[name]) {
    return true;
  }

  if (reactdomlibReactDOMInvalidARIAHook__rARIA.test(name)) {
    var lowerCasedName = name.toLowerCase();
    var standardName = reactdomlibReactDOMInvalidARIAHook__DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName) ? reactdomlibReactDOMInvalidARIAHook__DOMProperty.getPossibleStandardName[lowerCasedName] : null;

    // If this is an aria-* attribute, but is not listed in the known DOM
    // DOM properties, then it is an invalid aria-* attribute.
    if (standardName == null) {
      reactdomlibReactDOMInvalidARIAHook__warnedProperties[name] = true;
      return false;
    }
    // aria-* attributes should be lowercase; suggest the lowercase version.
    if (name !== standardName) {
      'development' !== 'production' ? reactdomlibReactDOMInvalidARIAHook__warning(false, 'Unknown ARIA attribute %s. Did you mean %s?%s', name, standardName, reactdomlibReactDOMInvalidARIAHook__ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;
      reactdomlibReactDOMInvalidARIAHook__warnedProperties[name] = true;
      return true;
    }
  }

  return true;
}

function reactdomlibReactDOMInvalidARIAHook__warnInvalidARIAProps(debugID, element) {
  var invalidProps = [];

  for (var key in element.props) {
    var isValid = reactdomlibReactDOMInvalidARIAHook__validateProperty(element.type, key, debugID);
    if (!isValid) {
      invalidProps.push(key);
    }
  }

  var unknownPropString = invalidProps.map(function (prop) {
    return '`' + prop + '`';
  }).join(', ');

  if (invalidProps.length === 1) {
    'development' !== 'production' ? reactdomlibReactDOMInvalidARIAHook__warning(false, 'Invalid aria prop %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop%s', unknownPropString, element.type, reactdomlibReactDOMInvalidARIAHook__ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;
  } else if (invalidProps.length > 1) {
    'development' !== 'production' ? reactdomlibReactDOMInvalidARIAHook__warning(false, 'Invalid aria props %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop%s', unknownPropString, element.type, reactdomlibReactDOMInvalidARIAHook__ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;
  }
}

function reactdomlibReactDOMInvalidARIAHook__handleElement(debugID, element) {
  if (element == null || typeof element.type !== 'string') {
    return;
  }
  if (element.type.indexOf('-') >= 0 || element.props.is) {
    return;
  }

  reactdomlibReactDOMInvalidARIAHook__warnInvalidARIAProps(debugID, element);
}

var reactdomlibReactDOMInvalidARIAHook__ReactDOMInvalidARIAHook = {
  onBeforeMountComponent: function (debugID, element) {
    if ('development' !== 'production') {
      reactdomlibReactDOMInvalidARIAHook__handleElement(debugID, element);
    }
  },
  onBeforeUpdateComponent: function (debugID, element) {
    if ('development' !== 'production') {
      reactdomlibReactDOMInvalidARIAHook__handleElement(debugID, element);
    }
  }
};

$m['react-dom/lib/ReactDOMInvalidARIAHook'].exports = reactdomlibReactDOMInvalidARIAHook__ReactDOMInvalidARIAHook;
/*≠≠ node_modules/@yr/component/nod...lib/ReactDOMInvalidARIAHook.js ≠≠*/


/*== node_modules/@yr/component/nod...ctDOMNullInputValuePropHook.js ==*/
$m['react-dom/lib/ReactDOMNullInputValuePropHook'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactDOMNullInputValuePropHook__ReactComponentTreeHook = $m['react/lib/ReactComponentTreeHook'].exports;

var reactdomlibReactDOMNullInputValuePropHook__warning = $m['fbjs/lib/warning'].exports;

var reactdomlibReactDOMNullInputValuePropHook__didWarnValueNull = false;

function reactdomlibReactDOMNullInputValuePropHook__handleElement(debugID, element) {
  if (element == null) {
    return;
  }
  if (element.type !== 'input' && element.type !== 'textarea' && element.type !== 'select') {
    return;
  }
  if (element.props != null && element.props.value === null && !reactdomlibReactDOMNullInputValuePropHook__didWarnValueNull) {
    'development' !== 'production' ? reactdomlibReactDOMNullInputValuePropHook__warning(false, '`value` prop on `%s` should not be null. ' + 'Consider using the empty string to clear the component or `undefined` ' + 'for uncontrolled components.%s', element.type, reactdomlibReactDOMNullInputValuePropHook__ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;

    reactdomlibReactDOMNullInputValuePropHook__didWarnValueNull = true;
  }
}

var reactdomlibReactDOMNullInputValuePropHook__ReactDOMNullInputValuePropHook = {
  onBeforeMountComponent: function (debugID, element) {
    reactdomlibReactDOMNullInputValuePropHook__handleElement(debugID, element);
  },
  onBeforeUpdateComponent: function (debugID, element) {
    reactdomlibReactDOMNullInputValuePropHook__handleElement(debugID, element);
  }
};

$m['react-dom/lib/ReactDOMNullInputValuePropHook'].exports = reactdomlibReactDOMNullInputValuePropHook__ReactDOMNullInputValuePropHook;
/*≠≠ node_modules/@yr/component/nod...ctDOMNullInputValuePropHook.js ≠≠*/


/*== node_modules/@yr/component/nod...dom/lib/EventPluginRegistry.js ==*/
$m['react-dom/lib/EventPluginRegistry'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var reactdomlibEventPluginRegistry___prodInvariant = $m['react-dom/lib/reactProdInvariant'].exports;

var reactdomlibEventPluginRegistry__invariant = $m['fbjs/lib/invariant'].exports;

/**
 * Injectable ordering of event plugins.
 */
var reactdomlibEventPluginRegistry__eventPluginOrder = null;

/**
 * Injectable mapping from names to event plugin modules.
 */
var reactdomlibEventPluginRegistry__namesToPlugins = {};

/**
 * Recomputes the plugin list using the injected plugins and plugin ordering.
 *
 * @private
 */
function reactdomlibEventPluginRegistry__recomputePluginOrdering() {
  if (!reactdomlibEventPluginRegistry__eventPluginOrder) {
    // Wait until an `eventPluginOrder` is injected.
    return;
  }
  for (var pluginName in reactdomlibEventPluginRegistry__namesToPlugins) {
    var pluginModule = reactdomlibEventPluginRegistry__namesToPlugins[pluginName];
    var pluginIndex = reactdomlibEventPluginRegistry__eventPluginOrder.indexOf(pluginName);
    !(pluginIndex > -1) ? 'development' !== 'production' ? reactdomlibEventPluginRegistry__invariant(false, 'EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.', pluginName) : reactdomlibEventPluginRegistry___prodInvariant('96', pluginName) : void 0;
    if (reactdomlibEventPluginRegistry__EventPluginRegistry.plugins[pluginIndex]) {
      continue;
    }
    !pluginModule.extractEvents ? 'development' !== 'production' ? reactdomlibEventPluginRegistry__invariant(false, 'EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.', pluginName) : reactdomlibEventPluginRegistry___prodInvariant('97', pluginName) : void 0;
    reactdomlibEventPluginRegistry__EventPluginRegistry.plugins[pluginIndex] = pluginModule;
    var publishedEvents = pluginModule.eventTypes;
    for (var eventName in publishedEvents) {
      !reactdomlibEventPluginRegistry__publishEventForPlugin(publishedEvents[eventName], pluginModule, eventName) ? 'development' !== 'production' ? reactdomlibEventPluginRegistry__invariant(false, 'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.', eventName, pluginName) : reactdomlibEventPluginRegistry___prodInvariant('98', eventName, pluginName) : void 0;
    }
  }
}

/**
 * Publishes an event so that it can be dispatched by the supplied plugin.
 *
 * @param {object} dispatchConfig Dispatch configuration for the event.
 * @param {object} PluginModule Plugin publishing the event.
 * @return {boolean} True if the event was successfully published.
 * @private
 */
function reactdomlibEventPluginRegistry__publishEventForPlugin(dispatchConfig, pluginModule, eventName) {
  !!reactdomlibEventPluginRegistry__EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName) ? 'development' !== 'production' ? reactdomlibEventPluginRegistry__invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.', eventName) : reactdomlibEventPluginRegistry___prodInvariant('99', eventName) : void 0;
  reactdomlibEventPluginRegistry__EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;

  var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
  if (phasedRegistrationNames) {
    for (var phaseName in phasedRegistrationNames) {
      if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
        var phasedRegistrationName = phasedRegistrationNames[phaseName];
        reactdomlibEventPluginRegistry__publishRegistrationName(phasedRegistrationName, pluginModule, eventName);
      }
    }
    return true;
  } else if (dispatchConfig.registrationName) {
    reactdomlibEventPluginRegistry__publishRegistrationName(dispatchConfig.registrationName, pluginModule, eventName);
    return true;
  }
  return false;
}

/**
 * Publishes a registration name that is used to identify dispatched events and
 * can be used with `EventPluginHub.putListener` to register listeners.
 *
 * @param {string} registrationName Registration name to add.
 * @param {object} PluginModule Plugin publishing the event.
 * @private
 */
function reactdomlibEventPluginRegistry__publishRegistrationName(registrationName, pluginModule, eventName) {
  !!reactdomlibEventPluginRegistry__EventPluginRegistry.registrationNameModules[registrationName] ? 'development' !== 'production' ? reactdomlibEventPluginRegistry__invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.', registrationName) : reactdomlibEventPluginRegistry___prodInvariant('100', registrationName) : void 0;
  reactdomlibEventPluginRegistry__EventPluginRegistry.registrationNameModules[registrationName] = pluginModule;
  reactdomlibEventPluginRegistry__EventPluginRegistry.registrationNameDependencies[registrationName] = pluginModule.eventTypes[eventName].dependencies;

  if ('development' !== 'production') {
    var lowerCasedName = registrationName.toLowerCase();
    reactdomlibEventPluginRegistry__EventPluginRegistry.possibleRegistrationNames[lowerCasedName] = registrationName;

    if (registrationName === 'onDoubleClick') {
      reactdomlibEventPluginRegistry__EventPluginRegistry.possibleRegistrationNames.ondblclick = registrationName;
    }
  }
}

/**
 * Registers plugins so that they can extract and dispatch events.
 *
 * @see {EventPluginHub}
 */
var reactdomlibEventPluginRegistry__EventPluginRegistry = {
  /**
   * Ordered list of injected plugins.
   */
  plugins: [],

  /**
   * Mapping from event name to dispatch config
   */
  eventNameDispatchConfigs: {},

  /**
   * Mapping from registration name to plugin module
   */
  registrationNameModules: {},

  /**
   * Mapping from registration name to event name
   */
  registrationNameDependencies: {},

  /**
   * Mapping from lowercase registration names to the properly cased version,
   * used to warn in the case of missing event handlers. Available
   * only in __DEV__.
   * @type {Object}
   */
  possibleRegistrationNames: 'development' !== 'production' ? {} : null,
  // Trust the developer to only use possibleRegistrationNames in __DEV__

  /**
   * Injects an ordering of plugins (by plugin name). This allows the ordering
   * to be decoupled from injection of the actual plugins so that ordering is
   * always deterministic regardless of packaging, on-the-fly injection, etc.
   *
   * @param {array} InjectedEventPluginOrder
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginOrder}
   */
  injectEventPluginOrder: function (injectedEventPluginOrder) {
    !!reactdomlibEventPluginRegistry__eventPluginOrder ? 'development' !== 'production' ? reactdomlibEventPluginRegistry__invariant(false, 'EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.') : reactdomlibEventPluginRegistry___prodInvariant('101') : void 0;
    // Clone the ordering so it cannot be dynamically mutated.
    reactdomlibEventPluginRegistry__eventPluginOrder = Array.prototype.slice.call(injectedEventPluginOrder);
    reactdomlibEventPluginRegistry__recomputePluginOrdering();
  },

  /**
   * Injects plugins to be used by `EventPluginHub`. The plugin names must be
   * in the ordering injected by `injectEventPluginOrder`.
   *
   * Plugins can be injected as part of page initialization or on-the-fly.
   *
   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginsByName}
   */
  injectEventPluginsByName: function (injectedNamesToPlugins) {
    var isOrderingDirty = false;
    for (var pluginName in injectedNamesToPlugins) {
      if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
        continue;
      }
      var pluginModule = injectedNamesToPlugins[pluginName];
      if (!reactdomlibEventPluginRegistry__namesToPlugins.hasOwnProperty(pluginName) || reactdomlibEventPluginRegistry__namesToPlugins[pluginName] !== pluginModule) {
        !!reactdomlibEventPluginRegistry__namesToPlugins[pluginName] ? 'development' !== 'production' ? reactdomlibEventPluginRegistry__invariant(false, 'EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.', pluginName) : reactdomlibEventPluginRegistry___prodInvariant('102', pluginName) : void 0;
        reactdomlibEventPluginRegistry__namesToPlugins[pluginName] = pluginModule;
        isOrderingDirty = true;
      }
    }
    if (isOrderingDirty) {
      reactdomlibEventPluginRegistry__recomputePluginOrdering();
    }
  },

  /**
   * Looks up the plugin for the supplied event.
   *
   * @param {object} event A synthetic event.
   * @return {?object} The plugin that created the supplied event.
   * @internal
   */
  getPluginModuleForEvent: function (event) {
    var dispatchConfig = event.dispatchConfig;
    if (dispatchConfig.registrationName) {
      return reactdomlibEventPluginRegistry__EventPluginRegistry.registrationNameModules[dispatchConfig.registrationName] || null;
    }
    if (dispatchConfig.phasedRegistrationNames !== undefined) {
      // pulling phasedRegistrationNames out of dispatchConfig helps Flow see
      // that it is not undefined.
      var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;

      for (var phase in phasedRegistrationNames) {
        if (!phasedRegistrationNames.hasOwnProperty(phase)) {
          continue;
        }
        var pluginModule = reactdomlibEventPluginRegistry__EventPluginRegistry.registrationNameModules[phasedRegistrationNames[phase]];
        if (pluginModule) {
          return pluginModule;
        }
      }
    }
    return null;
  },

  /**
   * Exposed for unit testing.
   * @private
   */
  _resetEventPlugins: function () {
    reactdomlibEventPluginRegistry__eventPluginOrder = null;
    for (var pluginName in reactdomlibEventPluginRegistry__namesToPlugins) {
      if (reactdomlibEventPluginRegistry__namesToPlugins.hasOwnProperty(pluginName)) {
        delete reactdomlibEventPluginRegistry__namesToPlugins[pluginName];
      }
    }
    reactdomlibEventPluginRegistry__EventPluginRegistry.plugins.length = 0;

    var eventNameDispatchConfigs = reactdomlibEventPluginRegistry__EventPluginRegistry.eventNameDispatchConfigs;
    for (var eventName in eventNameDispatchConfigs) {
      if (eventNameDispatchConfigs.hasOwnProperty(eventName)) {
        delete eventNameDispatchConfigs[eventName];
      }
    }

    var registrationNameModules = reactdomlibEventPluginRegistry__EventPluginRegistry.registrationNameModules;
    for (var registrationName in registrationNameModules) {
      if (registrationNameModules.hasOwnProperty(registrationName)) {
        delete registrationNameModules[registrationName];
      }
    }

    if ('development' !== 'production') {
      var possibleRegistrationNames = reactdomlibEventPluginRegistry__EventPluginRegistry.possibleRegistrationNames;
      for (var lowerCasedName in possibleRegistrationNames) {
        if (possibleRegistrationNames.hasOwnProperty(lowerCasedName)) {
          delete possibleRegistrationNames[lowerCasedName];
        }
      }
    }
  }
};

$m['react-dom/lib/EventPluginRegistry'].exports = reactdomlibEventPluginRegistry__EventPluginRegistry;
/*≠≠ node_modules/@yr/component/nod...dom/lib/EventPluginRegistry.js ≠≠*/


/*== node_modules/@yr/component/nod...ReactDOMUnknownPropertyHook.js ==*/
$m['react-dom/lib/ReactDOMUnknownPropertyHook'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactDOMUnknownPropertyHook__DOMProperty = $m['react-dom/lib/DOMProperty'].exports;
var reactdomlibReactDOMUnknownPropertyHook__EventPluginRegistry = $m['react-dom/lib/EventPluginRegistry'].exports;
var reactdomlibReactDOMUnknownPropertyHook__ReactComponentTreeHook = $m['react/lib/ReactComponentTreeHook'].exports;

var reactdomlibReactDOMUnknownPropertyHook__warning = $m['fbjs/lib/warning'].exports;

if ('development' !== 'production') {
  var reactdomlibReactDOMUnknownPropertyHook__reactProps = {
    children: true,
    dangerouslySetInnerHTML: true,
    key: true,
    ref: true,

    autoFocus: true,
    defaultValue: true,
    valueLink: true,
    defaultChecked: true,
    checkedLink: true,
    innerHTML: true,
    suppressContentEditableWarning: true,
    onFocusIn: true,
    onFocusOut: true
  };
  var reactdomlibReactDOMUnknownPropertyHook__warnedProperties = {};

  var reactdomlibReactDOMUnknownPropertyHook__validateProperty = function (tagName, name, debugID) {
    if (reactdomlibReactDOMUnknownPropertyHook__DOMProperty.properties.hasOwnProperty(name) || reactdomlibReactDOMUnknownPropertyHook__DOMProperty.isCustomAttribute(name)) {
      return true;
    }
    if (reactdomlibReactDOMUnknownPropertyHook__reactProps.hasOwnProperty(name) && reactdomlibReactDOMUnknownPropertyHook__reactProps[name] || reactdomlibReactDOMUnknownPropertyHook__warnedProperties.hasOwnProperty(name) && reactdomlibReactDOMUnknownPropertyHook__warnedProperties[name]) {
      return true;
    }
    if (reactdomlibReactDOMUnknownPropertyHook__EventPluginRegistry.registrationNameModules.hasOwnProperty(name)) {
      return true;
    }
    reactdomlibReactDOMUnknownPropertyHook__warnedProperties[name] = true;
    var lowerCasedName = name.toLowerCase();

    // data-* attributes should be lowercase; suggest the lowercase version
    var standardName = reactdomlibReactDOMUnknownPropertyHook__DOMProperty.isCustomAttribute(lowerCasedName) ? lowerCasedName : reactdomlibReactDOMUnknownPropertyHook__DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName) ? reactdomlibReactDOMUnknownPropertyHook__DOMProperty.getPossibleStandardName[lowerCasedName] : null;

    var registrationName = reactdomlibReactDOMUnknownPropertyHook__EventPluginRegistry.possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? reactdomlibReactDOMUnknownPropertyHook__EventPluginRegistry.possibleRegistrationNames[lowerCasedName] : null;

    if (standardName != null) {
      'development' !== 'production' ? reactdomlibReactDOMUnknownPropertyHook__warning(false, 'Unknown DOM property %s. Did you mean %s?%s', name, standardName, reactdomlibReactDOMUnknownPropertyHook__ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;
      return true;
    } else if (registrationName != null) {
      'development' !== 'production' ? reactdomlibReactDOMUnknownPropertyHook__warning(false, 'Unknown event handler property %s. Did you mean `%s`?%s', name, registrationName, reactdomlibReactDOMUnknownPropertyHook__ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;
      return true;
    } else {
      // We were unable to guess which prop the user intended.
      // It is likely that the user was just blindly spreading/forwarding props
      // Components should be careful to only render valid props/attributes.
      // Warning will be invoked in warnUnknownProperties to allow grouping.
      return false;
    }
  };
}

var reactdomlibReactDOMUnknownPropertyHook__warnUnknownProperties = function (debugID, element) {
  var unknownProps = [];
  for (var key in element.props) {
    var isValid = reactdomlibReactDOMUnknownPropertyHook__validateProperty(element.type, key, debugID);
    if (!isValid) {
      unknownProps.push(key);
    }
  }

  var unknownPropString = unknownProps.map(function (prop) {
    return '`' + prop + '`';
  }).join(', ');

  if (unknownProps.length === 1) {
    'development' !== 'production' ? reactdomlibReactDOMUnknownPropertyHook__warning(false, 'Unknown prop %s on <%s> tag. Remove this prop from the element. ' + 'For details, see https://fb.me/react-unknown-prop%s', unknownPropString, element.type, reactdomlibReactDOMUnknownPropertyHook__ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;
  } else if (unknownProps.length > 1) {
    'development' !== 'production' ? reactdomlibReactDOMUnknownPropertyHook__warning(false, 'Unknown props %s on <%s> tag. Remove these props from the element. ' + 'For details, see https://fb.me/react-unknown-prop%s', unknownPropString, element.type, reactdomlibReactDOMUnknownPropertyHook__ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;
  }
};

function reactdomlibReactDOMUnknownPropertyHook__handleElement(debugID, element) {
  if (element == null || typeof element.type !== 'string') {
    return;
  }
  if (element.type.indexOf('-') >= 0 || element.props.is) {
    return;
  }
  reactdomlibReactDOMUnknownPropertyHook__warnUnknownProperties(debugID, element);
}

var reactdomlibReactDOMUnknownPropertyHook__ReactDOMUnknownPropertyHook = {
  onBeforeMountComponent: function (debugID, element) {
    reactdomlibReactDOMUnknownPropertyHook__handleElement(debugID, element);
  },
  onBeforeUpdateComponent: function (debugID, element) {
    reactdomlibReactDOMUnknownPropertyHook__handleElement(debugID, element);
  }
};

$m['react-dom/lib/ReactDOMUnknownPropertyHook'].exports = reactdomlibReactDOMUnknownPropertyHook__ReactDOMUnknownPropertyHook;
/*≠≠ node_modules/@yr/component/nod...ReactDOMUnknownPropertyHook.js ≠≠*/


/*== node_modules/fbjs/lib/performance.js ==*/
$m['fbjs/lib/performance'] = { exports: {} };
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var fbjslibperformance__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;

var fbjslibperformance__performance;

if (fbjslibperformance__ExecutionEnvironment.canUseDOM) {
  fbjslibperformance__performance = window.performance || window.msPerformance || window.webkitPerformance;
}

$m['fbjs/lib/performance'].exports = fbjslibperformance__performance || {};
/*≠≠ node_modules/fbjs/lib/performance.js ≠≠*/


/*== node_modules/fbjs/lib/performanceNow.js ==*/
$m['fbjs/lib/performanceNow'] = { exports: {} };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var fbjslibperformanceNow__performance = $m['fbjs/lib/performance'].exports;

var fbjslibperformanceNow__performanceNow;

/**
 * Detect if we can use `window.performance.now()` and gracefully fallback to
 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
 * because of Facebook's testing infrastructure.
 */
if (fbjslibperformanceNow__performance.now) {
  fbjslibperformanceNow__performanceNow = function performanceNow() {
    return fbjslibperformanceNow__performance.now();
  };
} else {
  fbjslibperformanceNow__performanceNow = function performanceNow() {
    return Date.now();
  };
}

$m['fbjs/lib/performanceNow'].exports = fbjslibperformanceNow__performanceNow;
/*≠≠ node_modules/fbjs/lib/performanceNow.js ≠≠*/


/*== node_modules/@yr/component/nod...tInvalidSetStateWarningHook.js ==*/
$m['react-dom/lib/ReactInvalidSetStateWarningHook'] = { exports: {} };
/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var reactdomlibReactInvalidSetStateWarningHook__warning = $m['fbjs/lib/warning'].exports;

if ('development' !== 'production') {
  var reactdomlibReactInvalidSetStateWarningHook__processingChildContext = false;

  var reactdomlibReactInvalidSetStateWarningHook__warnInvalidSetState = function () {
    'development' !== 'production' ? reactdomlibReactInvalidSetStateWarningHook__warning(!reactdomlibReactInvalidSetStateWarningHook__processingChildContext, 'setState(...): Cannot call setState() inside getChildContext()') : void 0;
  };
}

var reactdomlibReactInvalidSetStateWarningHook__ReactInvalidSetStateWarningHook = {
  onBeginProcessingChildContext: function () {
    reactdomlibReactInvalidSetStateWarningHook__processingChildContext = true;
  },
  onEndProcessingChildContext: function () {
    reactdomlibReactInvalidSetStateWarningHook__processingChildContext = false;
  },
  onSetState: function () {
    reactdomlibReactInvalidSetStateWarningHook__warnInvalidSetState();
  }
};

$m['react-dom/lib/ReactInvalidSetStateWarningHook'].exports = reactdomlibReactInvalidSetStateWarningHook__ReactInvalidSetStateWarningHook;
/*≠≠ node_modules/@yr/component/nod...tInvalidSetStateWarningHook.js ≠≠*/


/*== node_modules/@yr/component/nod...eact-dom/lib/ReactDebugTool.js ==*/
$m['react-dom/lib/ReactDebugTool'] = { exports: {} };
/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var reactdomlibReactDebugTool__ReactInvalidSetStateWarningHook = $m['react-dom/lib/ReactInvalidSetStateWarningHook'].exports;
var reactdomlibReactDebugTool__ReactHostOperationHistoryHook = $m['react-dom/lib/ReactHostOperationHistoryHook'].exports;
var reactdomlibReactDebugTool__ReactComponentTreeHook = $m['react/lib/ReactComponentTreeHook'].exports;
var reactdomlibReactDebugTool__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;

var reactdomlibReactDebugTool__performanceNow = $m['fbjs/lib/performanceNow'].exports;
var reactdomlibReactDebugTool__warning = $m['fbjs/lib/warning'].exports;

var reactdomlibReactDebugTool__hooks = [];
var reactdomlibReactDebugTool__didHookThrowForEvent = {};

function reactdomlibReactDebugTool__callHook(event, fn, context, arg1, arg2, arg3, arg4, arg5) {
  try {
    fn.call(context, arg1, arg2, arg3, arg4, arg5);
  } catch (e) {
    'development' !== 'production' ? reactdomlibReactDebugTool__warning(reactdomlibReactDebugTool__didHookThrowForEvent[event], 'Exception thrown by hook while handling %s: %s', event, e + '\n' + e.stack) : void 0;
    reactdomlibReactDebugTool__didHookThrowForEvent[event] = true;
  }
}

function reactdomlibReactDebugTool__emitEvent(event, arg1, arg2, arg3, arg4, arg5) {
  for (var i = 0; i < reactdomlibReactDebugTool__hooks.length; i++) {
    var hook = reactdomlibReactDebugTool__hooks[i];
    var fn = hook[event];
    if (fn) {
      reactdomlibReactDebugTool__callHook(event, fn, hook, arg1, arg2, arg3, arg4, arg5);
    }
  }
}

var reactdomlibReactDebugTool__isProfiling = false;
var reactdomlibReactDebugTool__flushHistory = [];
var reactdomlibReactDebugTool__lifeCycleTimerStack = [];
var reactdomlibReactDebugTool__currentFlushNesting = 0;
var reactdomlibReactDebugTool__currentFlushMeasurements = [];
var reactdomlibReactDebugTool__currentFlushStartTime = 0;
var reactdomlibReactDebugTool__currentTimerDebugID = null;
var reactdomlibReactDebugTool__currentTimerStartTime = 0;
var reactdomlibReactDebugTool__currentTimerNestedFlushDuration = 0;
var reactdomlibReactDebugTool__currentTimerType = null;

var reactdomlibReactDebugTool__lifeCycleTimerHasWarned = false;

function reactdomlibReactDebugTool__clearHistory() {
  reactdomlibReactDebugTool__ReactComponentTreeHook.purgeUnmountedComponents();
  reactdomlibReactDebugTool__ReactHostOperationHistoryHook.clearHistory();
}

function reactdomlibReactDebugTool__getTreeSnapshot(registeredIDs) {
  return registeredIDs.reduce(function (tree, id) {
    var ownerID = reactdomlibReactDebugTool__ReactComponentTreeHook.getOwnerID(id);
    var parentID = reactdomlibReactDebugTool__ReactComponentTreeHook.getParentID(id);
    tree[id] = {
      displayName: reactdomlibReactDebugTool__ReactComponentTreeHook.getDisplayName(id),
      text: reactdomlibReactDebugTool__ReactComponentTreeHook.getText(id),
      updateCount: reactdomlibReactDebugTool__ReactComponentTreeHook.getUpdateCount(id),
      childIDs: reactdomlibReactDebugTool__ReactComponentTreeHook.getChildIDs(id),
      // Text nodes don't have owners but this is close enough.
      ownerID: ownerID || parentID && reactdomlibReactDebugTool__ReactComponentTreeHook.getOwnerID(parentID) || 0,
      parentID: parentID
    };
    return tree;
  }, {});
}

function reactdomlibReactDebugTool__resetMeasurements() {
  var previousStartTime = reactdomlibReactDebugTool__currentFlushStartTime;
  var previousMeasurements = reactdomlibReactDebugTool__currentFlushMeasurements;
  var previousOperations = reactdomlibReactDebugTool__ReactHostOperationHistoryHook.getHistory();

  if (reactdomlibReactDebugTool__currentFlushNesting === 0) {
    reactdomlibReactDebugTool__currentFlushStartTime = 0;
    reactdomlibReactDebugTool__currentFlushMeasurements = [];
    reactdomlibReactDebugTool__clearHistory();
    return;
  }

  if (previousMeasurements.length || previousOperations.length) {
    var registeredIDs = reactdomlibReactDebugTool__ReactComponentTreeHook.getRegisteredIDs();
    reactdomlibReactDebugTool__flushHistory.push({
      duration: reactdomlibReactDebugTool__performanceNow() - previousStartTime,
      measurements: previousMeasurements || [],
      operations: previousOperations || [],
      treeSnapshot: reactdomlibReactDebugTool__getTreeSnapshot(registeredIDs)
    });
  }

  reactdomlibReactDebugTool__clearHistory();
  reactdomlibReactDebugTool__currentFlushStartTime = reactdomlibReactDebugTool__performanceNow();
  reactdomlibReactDebugTool__currentFlushMeasurements = [];
}

function reactdomlibReactDebugTool__checkDebugID(debugID) {
  var allowRoot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (allowRoot && debugID === 0) {
    return;
  }
  if (!debugID) {
    'development' !== 'production' ? reactdomlibReactDebugTool__warning(false, 'ReactDebugTool: debugID may not be empty.') : void 0;
  }
}

function reactdomlibReactDebugTool__beginLifeCycleTimer(debugID, timerType) {
  if (reactdomlibReactDebugTool__currentFlushNesting === 0) {
    return;
  }
  if (reactdomlibReactDebugTool__currentTimerType && !reactdomlibReactDebugTool__lifeCycleTimerHasWarned) {
    'development' !== 'production' ? reactdomlibReactDebugTool__warning(false, 'There is an internal error in the React performance measurement code. ' + 'Did not expect %s timer to start while %s timer is still in ' + 'progress for %s instance.', timerType, reactdomlibReactDebugTool__currentTimerType || 'no', debugID === reactdomlibReactDebugTool__currentTimerDebugID ? 'the same' : 'another') : void 0;
    reactdomlibReactDebugTool__lifeCycleTimerHasWarned = true;
  }
  reactdomlibReactDebugTool__currentTimerStartTime = reactdomlibReactDebugTool__performanceNow();
  reactdomlibReactDebugTool__currentTimerNestedFlushDuration = 0;
  reactdomlibReactDebugTool__currentTimerDebugID = debugID;
  reactdomlibReactDebugTool__currentTimerType = timerType;
}

function reactdomlibReactDebugTool__endLifeCycleTimer(debugID, timerType) {
  if (reactdomlibReactDebugTool__currentFlushNesting === 0) {
    return;
  }
  if (reactdomlibReactDebugTool__currentTimerType !== timerType && !reactdomlibReactDebugTool__lifeCycleTimerHasWarned) {
    'development' !== 'production' ? reactdomlibReactDebugTool__warning(false, 'There is an internal error in the React performance measurement code. ' + 'We did not expect %s timer to stop while %s timer is still in ' + 'progress for %s instance. Please report this as a bug in React.', timerType, reactdomlibReactDebugTool__currentTimerType || 'no', debugID === reactdomlibReactDebugTool__currentTimerDebugID ? 'the same' : 'another') : void 0;
    reactdomlibReactDebugTool__lifeCycleTimerHasWarned = true;
  }
  if (reactdomlibReactDebugTool__isProfiling) {
    reactdomlibReactDebugTool__currentFlushMeasurements.push({
      timerType: timerType,
      instanceID: debugID,
      duration: reactdomlibReactDebugTool__performanceNow() - reactdomlibReactDebugTool__currentTimerStartTime - reactdomlibReactDebugTool__currentTimerNestedFlushDuration
    });
  }
  reactdomlibReactDebugTool__currentTimerStartTime = 0;
  reactdomlibReactDebugTool__currentTimerNestedFlushDuration = 0;
  reactdomlibReactDebugTool__currentTimerDebugID = null;
  reactdomlibReactDebugTool__currentTimerType = null;
}

function reactdomlibReactDebugTool__pauseCurrentLifeCycleTimer() {
  var currentTimer = {
    startTime: reactdomlibReactDebugTool__currentTimerStartTime,
    nestedFlushStartTime: reactdomlibReactDebugTool__performanceNow(),
    debugID: reactdomlibReactDebugTool__currentTimerDebugID,
    timerType: reactdomlibReactDebugTool__currentTimerType
  };
  reactdomlibReactDebugTool__lifeCycleTimerStack.push(currentTimer);
  reactdomlibReactDebugTool__currentTimerStartTime = 0;
  reactdomlibReactDebugTool__currentTimerNestedFlushDuration = 0;
  reactdomlibReactDebugTool__currentTimerDebugID = null;
  reactdomlibReactDebugTool__currentTimerType = null;
}

function reactdomlibReactDebugTool__resumeCurrentLifeCycleTimer() {
  var _lifeCycleTimerStack$ = reactdomlibReactDebugTool__lifeCycleTimerStack.pop(),
      startTime = _lifeCycleTimerStack$.startTime,
      nestedFlushStartTime = _lifeCycleTimerStack$.nestedFlushStartTime,
      debugID = _lifeCycleTimerStack$.debugID,
      timerType = _lifeCycleTimerStack$.timerType;

  var nestedFlushDuration = reactdomlibReactDebugTool__performanceNow() - nestedFlushStartTime;
  reactdomlibReactDebugTool__currentTimerStartTime = startTime;
  reactdomlibReactDebugTool__currentTimerNestedFlushDuration += nestedFlushDuration;
  reactdomlibReactDebugTool__currentTimerDebugID = debugID;
  reactdomlibReactDebugTool__currentTimerType = timerType;
}

var reactdomlibReactDebugTool__lastMarkTimeStamp = 0;
var reactdomlibReactDebugTool__canUsePerformanceMeasure = typeof performance !== 'undefined' && typeof performance.mark === 'function' && typeof performance.clearMarks === 'function' && typeof performance.measure === 'function' && typeof performance.clearMeasures === 'function';

function reactdomlibReactDebugTool__shouldMark(debugID) {
  if (!reactdomlibReactDebugTool__isProfiling || !reactdomlibReactDebugTool__canUsePerformanceMeasure) {
    return false;
  }
  var element = reactdomlibReactDebugTool__ReactComponentTreeHook.getElement(debugID);
  if (element == null || typeof element !== 'object') {
    return false;
  }
  var isHostElement = typeof element.type === 'string';
  if (isHostElement) {
    return false;
  }
  return true;
}

function reactdomlibReactDebugTool__markBegin(debugID, markType) {
  if (!reactdomlibReactDebugTool__shouldMark(debugID)) {
    return;
  }

  var markName = debugID + '::' + markType;
  reactdomlibReactDebugTool__lastMarkTimeStamp = reactdomlibReactDebugTool__performanceNow();
  performance.mark(markName);
}

function reactdomlibReactDebugTool__markEnd(debugID, markType) {
  if (!reactdomlibReactDebugTool__shouldMark(debugID)) {
    return;
  }

  var markName = debugID + '::' + markType;
  var displayName = reactdomlibReactDebugTool__ReactComponentTreeHook.getDisplayName(debugID) || 'Unknown';

  // Chrome has an issue of dropping markers recorded too fast:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=640652
  // To work around this, we will not report very small measurements.
  // I determined the magic number by tweaking it back and forth.
  // 0.05ms was enough to prevent the issue, but I set it to 0.1ms to be safe.
  // When the bug is fixed, we can `measure()` unconditionally if we want to.
  var timeStamp = reactdomlibReactDebugTool__performanceNow();
  if (timeStamp - reactdomlibReactDebugTool__lastMarkTimeStamp > 0.1) {
    var measurementName = displayName + ' [' + markType + ']';
    performance.measure(measurementName, markName);
  }

  performance.clearMarks(markName);
  if (measurementName) {
    performance.clearMeasures(measurementName);
  }
}

var reactdomlibReactDebugTool__ReactDebugTool = {
  addHook: function (hook) {
    reactdomlibReactDebugTool__hooks.push(hook);
  },
  removeHook: function (hook) {
    for (var i = 0; i < reactdomlibReactDebugTool__hooks.length; i++) {
      if (reactdomlibReactDebugTool__hooks[i] === hook) {
        reactdomlibReactDebugTool__hooks.splice(i, 1);
        i--;
      }
    }
  },
  isProfiling: function () {
    return reactdomlibReactDebugTool__isProfiling;
  },
  beginProfiling: function () {
    if (reactdomlibReactDebugTool__isProfiling) {
      return;
    }

    reactdomlibReactDebugTool__isProfiling = true;
    reactdomlibReactDebugTool__flushHistory.length = 0;
    reactdomlibReactDebugTool__resetMeasurements();
    reactdomlibReactDebugTool__ReactDebugTool.addHook(reactdomlibReactDebugTool__ReactHostOperationHistoryHook);
  },
  endProfiling: function () {
    if (!reactdomlibReactDebugTool__isProfiling) {
      return;
    }

    reactdomlibReactDebugTool__isProfiling = false;
    reactdomlibReactDebugTool__resetMeasurements();
    reactdomlibReactDebugTool__ReactDebugTool.removeHook(reactdomlibReactDebugTool__ReactHostOperationHistoryHook);
  },
  getFlushHistory: function () {
    return reactdomlibReactDebugTool__flushHistory;
  },
  onBeginFlush: function () {
    reactdomlibReactDebugTool__currentFlushNesting++;
    reactdomlibReactDebugTool__resetMeasurements();
    reactdomlibReactDebugTool__pauseCurrentLifeCycleTimer();
    reactdomlibReactDebugTool__emitEvent('onBeginFlush');
  },
  onEndFlush: function () {
    reactdomlibReactDebugTool__resetMeasurements();
    reactdomlibReactDebugTool__currentFlushNesting--;
    reactdomlibReactDebugTool__resumeCurrentLifeCycleTimer();
    reactdomlibReactDebugTool__emitEvent('onEndFlush');
  },
  onBeginLifeCycleTimer: function (debugID, timerType) {
    reactdomlibReactDebugTool__checkDebugID(debugID);
    reactdomlibReactDebugTool__emitEvent('onBeginLifeCycleTimer', debugID, timerType);
    reactdomlibReactDebugTool__markBegin(debugID, timerType);
    reactdomlibReactDebugTool__beginLifeCycleTimer(debugID, timerType);
  },
  onEndLifeCycleTimer: function (debugID, timerType) {
    reactdomlibReactDebugTool__checkDebugID(debugID);
    reactdomlibReactDebugTool__endLifeCycleTimer(debugID, timerType);
    reactdomlibReactDebugTool__markEnd(debugID, timerType);
    reactdomlibReactDebugTool__emitEvent('onEndLifeCycleTimer', debugID, timerType);
  },
  onBeginProcessingChildContext: function () {
    reactdomlibReactDebugTool__emitEvent('onBeginProcessingChildContext');
  },
  onEndProcessingChildContext: function () {
    reactdomlibReactDebugTool__emitEvent('onEndProcessingChildContext');
  },
  onHostOperation: function (operation) {
    reactdomlibReactDebugTool__checkDebugID(operation.instanceID);
    reactdomlibReactDebugTool__emitEvent('onHostOperation', operation);
  },
  onSetState: function () {
    reactdomlibReactDebugTool__emitEvent('onSetState');
  },
  onSetChildren: function (debugID, childDebugIDs) {
    reactdomlibReactDebugTool__checkDebugID(debugID);
    childDebugIDs.forEach(reactdomlibReactDebugTool__checkDebugID);
    reactdomlibReactDebugTool__emitEvent('onSetChildren', debugID, childDebugIDs);
  },
  onBeforeMountComponent: function (debugID, element, parentDebugID) {
    reactdomlibReactDebugTool__checkDebugID(debugID);
    reactdomlibReactDebugTool__checkDebugID(parentDebugID, true);
    reactdomlibReactDebugTool__emitEvent('onBeforeMountComponent', debugID, element, parentDebugID);
    reactdomlibReactDebugTool__markBegin(debugID, 'mount');
  },
  onMountComponent: function (debugID) {
    reactdomlibReactDebugTool__checkDebugID(debugID);
    reactdomlibReactDebugTool__markEnd(debugID, 'mount');
    reactdomlibReactDebugTool__emitEvent('onMountComponent', debugID);
  },
  onBeforeUpdateComponent: function (debugID, element) {
    reactdomlibReactDebugTool__checkDebugID(debugID);
    reactdomlibReactDebugTool__emitEvent('onBeforeUpdateComponent', debugID, element);
    reactdomlibReactDebugTool__markBegin(debugID, 'update');
  },
  onUpdateComponent: function (debugID) {
    reactdomlibReactDebugTool__checkDebugID(debugID);
    reactdomlibReactDebugTool__markEnd(debugID, 'update');
    reactdomlibReactDebugTool__emitEvent('onUpdateComponent', debugID);
  },
  onBeforeUnmountComponent: function (debugID) {
    reactdomlibReactDebugTool__checkDebugID(debugID);
    reactdomlibReactDebugTool__emitEvent('onBeforeUnmountComponent', debugID);
    reactdomlibReactDebugTool__markBegin(debugID, 'unmount');
  },
  onUnmountComponent: function (debugID) {
    reactdomlibReactDebugTool__checkDebugID(debugID);
    reactdomlibReactDebugTool__markEnd(debugID, 'unmount');
    reactdomlibReactDebugTool__emitEvent('onUnmountComponent', debugID);
  },
  onTestEvent: function () {
    reactdomlibReactDebugTool__emitEvent('onTestEvent');
  }
};

// TODO remove these when RN/www gets updated
reactdomlibReactDebugTool__ReactDebugTool.addDevtool = reactdomlibReactDebugTool__ReactDebugTool.addHook;
reactdomlibReactDebugTool__ReactDebugTool.removeDevtool = reactdomlibReactDebugTool__ReactDebugTool.removeHook;

reactdomlibReactDebugTool__ReactDebugTool.addHook(reactdomlibReactDebugTool__ReactInvalidSetStateWarningHook);
reactdomlibReactDebugTool__ReactDebugTool.addHook(reactdomlibReactDebugTool__ReactComponentTreeHook);
var reactdomlibReactDebugTool__url = reactdomlibReactDebugTool__ExecutionEnvironment.canUseDOM && window.location.href || '';
if (/[?&]react_perf\b/.test(reactdomlibReactDebugTool__url)) {
  reactdomlibReactDebugTool__ReactDebugTool.beginProfiling();
}

$m['react-dom/lib/ReactDebugTool'].exports = reactdomlibReactDebugTool__ReactDebugTool;
/*≠≠ node_modules/@yr/component/nod...eact-dom/lib/ReactDebugTool.js ≠≠*/


/*== node_modules/@yr/component/nod...om/lib/ReactInstrumentation.js ==*/
$m['react-dom/lib/ReactInstrumentation'] = { exports: {} };
/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

// Trust the developer to only use ReactInstrumentation with a __DEV__ check

var reactdomlibReactInstrumentation__debugTool = null;

if ('development' !== 'production') {
  var reactdomlibReactInstrumentation__ReactDebugTool = $m['react-dom/lib/ReactDebugTool'].exports;
  reactdomlibReactInstrumentation__debugTool = reactdomlibReactInstrumentation__ReactDebugTool;
}

$m['react-dom/lib/ReactInstrumentation'].exports = { debugTool: reactdomlibReactInstrumentation__debugTool };
/*≠≠ node_modules/@yr/component/nod...om/lib/ReactInstrumentation.js ≠≠*/


/*== node_modules/@yr/component/nod.../react-dom/lib/setInnerHTML.js ==*/
$m['react-dom/lib/setInnerHTML'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibsetInnerHTML__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;
var reactdomlibsetInnerHTML__DOMNamespaces = $m['react-dom/lib/DOMNamespaces'].exports;

var reactdomlibsetInnerHTML__WHITESPACE_TEST = /^[ \r\n\t\f]/;
var reactdomlibsetInnerHTML__NONVISIBLE_TEST = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;

var reactdomlibsetInnerHTML__createMicrosoftUnsafeLocalFunction = $m['react-dom/lib/createMicrosoftUnsafeLocalFunction'].exports;

// SVG temp container for IE lacking innerHTML
var reactdomlibsetInnerHTML__reusableSVGContainer;

/**
 * Set the innerHTML property of a node, ensuring that whitespace is preserved
 * even in IE8.
 *
 * @param {DOMElement} node
 * @param {string} html
 * @internal
 */
var reactdomlibsetInnerHTML__setInnerHTML = reactdomlibsetInnerHTML__createMicrosoftUnsafeLocalFunction(function (node, html) {
  // IE does not have innerHTML for SVG nodes, so instead we inject the
  // new markup in a temp node and then move the child nodes across into
  // the target node
  if (node.namespaceURI === reactdomlibsetInnerHTML__DOMNamespaces.svg && !('innerHTML' in node)) {
    reactdomlibsetInnerHTML__reusableSVGContainer = reactdomlibsetInnerHTML__reusableSVGContainer || document.createElement('div');
    reactdomlibsetInnerHTML__reusableSVGContainer.innerHTML = '<svg>' + html + '</svg>';
    var svgNode = reactdomlibsetInnerHTML__reusableSVGContainer.firstChild;
    while (svgNode.firstChild) {
      node.appendChild(svgNode.firstChild);
    }
  } else {
    node.innerHTML = html;
  }
});

if (reactdomlibsetInnerHTML__ExecutionEnvironment.canUseDOM) {
  // IE8: When updating a just created node with innerHTML only leading
  // whitespace is removed. When updating an existing node with innerHTML
  // whitespace in root TextNodes is also collapsed.
  // @see quirksmode.org/bugreports/archives/2004/11/innerhtml_and_t.html

  // Feature detection; only IE8 is known to behave improperly like this.
  var reactdomlibsetInnerHTML__testElement = document.createElement('div');
  reactdomlibsetInnerHTML__testElement.innerHTML = ' ';
  if (reactdomlibsetInnerHTML__testElement.innerHTML === '') {
    reactdomlibsetInnerHTML__setInnerHTML = function (node, html) {
      // Magic theory: IE8 supposedly differentiates between added and updated
      // nodes when processing innerHTML, innerHTML on updated nodes suffers
      // from worse whitespace behavior. Re-adding a node like this triggers
      // the initial and more favorable whitespace behavior.
      // TODO: What to do on a detached node?
      if (node.parentNode) {
        node.parentNode.replaceChild(node, node);
      }

      // We also implement a workaround for non-visible tags disappearing into
      // thin air on IE8, this only happens if there is no visible text
      // in-front of the non-visible tags. Piggyback on the whitespace fix
      // and simply check if any non-visible tags appear in the source.
      if (reactdomlibsetInnerHTML__WHITESPACE_TEST.test(html) || html[0] === '<' && reactdomlibsetInnerHTML__NONVISIBLE_TEST.test(html)) {
        // Recover leading whitespace by temporarily prepending any character.
        // \uFEFF has the potential advantage of being zero-width/invisible.
        // UglifyJS drops U+FEFF chars when parsing, so use String.fromCharCode
        // in hopes that this is preserved even if "\uFEFF" is transformed to
        // the actual Unicode character (by Babel, for example).
        // https://github.com/mishoo/UglifyJS2/blob/v2.4.20/lib/parse.js#L216
        node.innerHTML = String.fromCharCode(0xfeff) + html;

        // deleteData leaves an empty `TextNode` which offsets the index of all
        // children. Definitely want to avoid this.
        var textNode = node.firstChild;
        if (textNode.data.length === 1) {
          node.removeChild(textNode);
        } else {
          textNode.deleteData(0, 1);
        }
      } else {
        node.innerHTML = html;
      }
    };
  }
  reactdomlibsetInnerHTML__testElement = null;
}

$m['react-dom/lib/setInnerHTML'].exports = reactdomlibsetInnerHTML__setInnerHTML;
/*≠≠ node_modules/@yr/component/nod.../react-dom/lib/setInnerHTML.js ≠≠*/


/*== node_modules/@yr/component/nod...-dom/lib/ReactHostComponent.js ==*/
$m['react-dom/lib/ReactHostComponent'] = { exports: {} };
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactHostComponent___prodInvariant = $m['react-dom/lib/reactProdInvariant'].exports;

var reactdomlibReactHostComponent__invariant = $m['fbjs/lib/invariant'].exports;

var reactdomlibReactHostComponent__genericComponentClass = null;
var reactdomlibReactHostComponent__textComponentClass = null;

var reactdomlibReactHostComponent__ReactHostComponentInjection = {
  // This accepts a class that receives the tag string. This is a catch all
  // that can render any kind of tag.
  injectGenericComponentClass: function (componentClass) {
    reactdomlibReactHostComponent__genericComponentClass = componentClass;
  },
  // This accepts a text component class that takes the text string to be
  // rendered as props.
  injectTextComponentClass: function (componentClass) {
    reactdomlibReactHostComponent__textComponentClass = componentClass;
  }
};

/**
 * Get a host internal component class for a specific tag.
 *
 * @param {ReactElement} element The element to create.
 * @return {function} The internal class constructor function.
 */
function reactdomlibReactHostComponent__createInternalComponent(element) {
  !reactdomlibReactHostComponent__genericComponentClass ? 'development' !== 'production' ? reactdomlibReactHostComponent__invariant(false, 'There is no registered component for the tag %s', element.type) : reactdomlibReactHostComponent___prodInvariant('111', element.type) : void 0;
  return new reactdomlibReactHostComponent__genericComponentClass(element);
}

/**
 * @param {ReactText} text
 * @return {ReactComponent}
 */
function reactdomlibReactHostComponent__createInstanceForText(text) {
  return new reactdomlibReactHostComponent__textComponentClass(text);
}

/**
 * @param {ReactComponent} component
 * @return {boolean}
 */
function reactdomlibReactHostComponent__isTextComponent(component) {
  return component instanceof reactdomlibReactHostComponent__textComponentClass;
}

var reactdomlibReactHostComponent__ReactHostComponent = {
  createInternalComponent: reactdomlibReactHostComponent__createInternalComponent,
  createInstanceForText: reactdomlibReactHostComponent__createInstanceForText,
  isTextComponent: reactdomlibReactHostComponent__isTextComponent,
  injection: reactdomlibReactHostComponent__ReactHostComponentInjection
};

$m['react-dom/lib/ReactHostComponent'].exports = reactdomlibReactHostComponent__ReactHostComponent;
/*≠≠ node_modules/@yr/component/nod...-dom/lib/ReactHostComponent.js ≠≠*/


/*== node_modules/@yr/component/nod...-dom/lib/checkReactTypeSpec.js ==*/
$m['react-dom/lib/checkReactTypeSpec'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibcheckReactTypeSpec___prodInvariant = $m['react-dom/lib/reactProdInvariant'].exports;

var reactdomlibcheckReactTypeSpec__ReactPropTypeLocationNames = $m['react-dom/lib/ReactPropTypeLocationNames'].exports;
var reactdomlibcheckReactTypeSpec__ReactPropTypesSecret = $m['react-dom/lib/ReactPropTypesSecret'].exports;

var reactdomlibcheckReactTypeSpec__invariant = $m['fbjs/lib/invariant'].exports;
var reactdomlibcheckReactTypeSpec__warning = $m['fbjs/lib/warning'].exports;

var reactdomlibcheckReactTypeSpec__ReactComponentTreeHook;

if (typeof process !== 'undefined' && process.env && 'development' === 'test') {
  // Temporary hack.
  // Inline requires don't work well with Jest:
  // https://github.com/facebook/react/issues/7240
  // Remove the inline requires when we don't need them anymore:
  // https://github.com/facebook/react/pull/7178
  reactdomlibcheckReactTypeSpec__ReactComponentTreeHook = $m['react/lib/ReactComponentTreeHook'].exports;
}

var reactdomlibcheckReactTypeSpec__loggedTypeFailures = {};

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?object} element The React element that is being type-checked
 * @param {?number} debugID The React component instance that is being type-checked
 * @private
 */
function reactdomlibcheckReactTypeSpec__checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
  for (var typeSpecName in typeSpecs) {
    if (typeSpecs.hasOwnProperty(typeSpecName)) {
      var error;
      // Prop type validation may throw. In case they do, we don't want to
      // fail the render phase where it didn't fail before. So we log it.
      // After these have been cleaned up, we'll let them throw.
      try {
        // This is intentionally an invariant that gets caught. It's the same
        // behavior as without this statement except with a better message.
        !(typeof typeSpecs[typeSpecName] === 'function') ? 'development' !== 'production' ? reactdomlibcheckReactTypeSpec__invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', reactdomlibcheckReactTypeSpec__ReactPropTypeLocationNames[location], typeSpecName) : reactdomlibcheckReactTypeSpec___prodInvariant('84', componentName || 'React class', reactdomlibcheckReactTypeSpec__ReactPropTypeLocationNames[location], typeSpecName) : void 0;
        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, reactdomlibcheckReactTypeSpec__ReactPropTypesSecret);
      } catch (ex) {
        error = ex;
      }
      'development' !== 'production' ? reactdomlibcheckReactTypeSpec__warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', reactdomlibcheckReactTypeSpec__ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
      if (error instanceof Error && !(error.message in reactdomlibcheckReactTypeSpec__loggedTypeFailures)) {
        // Only monitor this failure once because there tends to be a lot of the
        // same error.
        reactdomlibcheckReactTypeSpec__loggedTypeFailures[error.message] = true;

        var componentStackInfo = '';

        if ('development' !== 'production') {
          if (!reactdomlibcheckReactTypeSpec__ReactComponentTreeHook) {
            reactdomlibcheckReactTypeSpec__ReactComponentTreeHook = $m['react/lib/ReactComponentTreeHook'].exports;
          }
          if (debugID !== null) {
            componentStackInfo = reactdomlibcheckReactTypeSpec__ReactComponentTreeHook.getStackAddendumByID(debugID);
          } else if (element !== null) {
            componentStackInfo = reactdomlibcheckReactTypeSpec__ReactComponentTreeHook.getCurrentStackAddendum(element);
          }
        }

        'development' !== 'production' ? reactdomlibcheckReactTypeSpec__warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
      }
    }
  }
}

$m['react-dom/lib/checkReactTypeSpec'].exports = reactdomlibcheckReactTypeSpec__checkReactTypeSpec;
/*≠≠ node_modules/@yr/component/nod...-dom/lib/checkReactTypeSpec.js ≠≠*/


/*== node_modules/@yr/component/nod...es/react-dom/lib/ReactOwner.js ==*/
$m['react-dom/lib/ReactOwner'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var reactdomlibReactOwner___prodInvariant = $m['react-dom/lib/reactProdInvariant'].exports;

var reactdomlibReactOwner__invariant = $m['fbjs/lib/invariant'].exports;

/**
 * @param {?object} object
 * @return {boolean} True if `object` is a valid owner.
 * @final
 */
function reactdomlibReactOwner__isValidOwner(object) {
  return !!(object && typeof object.attachRef === 'function' && typeof object.detachRef === 'function');
}

/**
 * ReactOwners are capable of storing references to owned components.
 *
 * All components are capable of //being// referenced by owner components, but
 * only ReactOwner components are capable of //referencing// owned components.
 * The named reference is known as a "ref".
 *
 * Refs are available when mounted and updated during reconciliation.
 *
 *   var MyComponent = React.createClass({
 *     render: function() {
 *       return (
 *         <div onClick={this.handleClick}>
 *           <CustomComponent ref="custom" />
 *         </div>
 *       );
 *     },
 *     handleClick: function() {
 *       this.refs.custom.handleClick();
 *     },
 *     componentDidMount: function() {
 *       this.refs.custom.initialize();
 *     }
 *   });
 *
 * Refs should rarely be used. When refs are used, they should only be done to
 * control data that is not handled by React's data flow.
 *
 * @class ReactOwner
 */
var reactdomlibReactOwner__ReactOwner = {
  /**
   * Adds a component by ref to an owner component.
   *
   * @param {ReactComponent} component Component to reference.
   * @param {string} ref Name by which to refer to the component.
   * @param {ReactOwner} owner Component on which to record the ref.
   * @final
   * @internal
   */
  addComponentAsRefTo: function (component, ref, owner) {
    !reactdomlibReactOwner__isValidOwner(owner) ? 'development' !== 'production' ? reactdomlibReactOwner__invariant(false, 'addComponentAsRefTo(...): Only a ReactOwner can have refs. You might be adding a ref to a component that was not created inside a component\'s `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner).') : reactdomlibReactOwner___prodInvariant('119') : void 0;
    owner.attachRef(ref, component);
  },

  /**
   * Removes a component by ref from an owner component.
   *
   * @param {ReactComponent} component Component to dereference.
   * @param {string} ref Name of the ref to remove.
   * @param {ReactOwner} owner Component on which the ref is recorded.
   * @final
   * @internal
   */
  removeComponentAsRefFrom: function (component, ref, owner) {
    !reactdomlibReactOwner__isValidOwner(owner) ? 'development' !== 'production' ? reactdomlibReactOwner__invariant(false, 'removeComponentAsRefFrom(...): Only a ReactOwner can have refs. You might be removing a ref to a component that was not created inside a component\'s `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner).') : reactdomlibReactOwner___prodInvariant('120') : void 0;
    var ownerPublicInstance = owner.getPublicInstance();
    // Check that `component`'s owner is still alive and that `component` is still the current ref
    // because we do not want to detach the ref if another component stole it.
    if (ownerPublicInstance && ownerPublicInstance.refs[ref] === component.getPublicInstance()) {
      owner.detachRef(ref);
    }
  }
};

$m['react-dom/lib/ReactOwner'].exports = reactdomlibReactOwner__ReactOwner;
/*≠≠ node_modules/@yr/component/nod...es/react-dom/lib/ReactOwner.js ≠≠*/


/*== node_modules/@yr/component/nod...ules/react-dom/lib/ReactRef.js ==*/
$m['react-dom/lib/ReactRef'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var reactdomlibReactRef__ReactOwner = $m['react-dom/lib/ReactOwner'].exports;

var reactdomlibReactRef__ReactRef = {};

function reactdomlibReactRef__attachRef(ref, component, owner) {
  if (typeof ref === 'function') {
    ref(component.getPublicInstance());
  } else {
    // Legacy ref
    reactdomlibReactRef__ReactOwner.addComponentAsRefTo(component, ref, owner);
  }
}

function reactdomlibReactRef__detachRef(ref, component, owner) {
  if (typeof ref === 'function') {
    ref(null);
  } else {
    // Legacy ref
    reactdomlibReactRef__ReactOwner.removeComponentAsRefFrom(component, ref, owner);
  }
}

reactdomlibReactRef__ReactRef.attachRefs = function (instance, element) {
  if (element === null || typeof element !== 'object') {
    return;
  }
  var ref = element.ref;
  if (ref != null) {
    reactdomlibReactRef__attachRef(ref, instance, element._owner);
  }
};

reactdomlibReactRef__ReactRef.shouldUpdateRefs = function (prevElement, nextElement) {
  // If either the owner or a `ref` has changed, make sure the newest owner
  // has stored a reference to `this`, and the previous owner (if different)
  // has forgotten the reference to `this`. We use the element instead
  // of the public this.props because the post processing cannot determine
  // a ref. The ref conceptually lives on the element.

  // TODO: Should this even be possible? The owner cannot change because
  // it's forbidden by shouldUpdateReactComponent. The ref can change
  // if you swap the keys of but not the refs. Reconsider where this check
  // is made. It probably belongs where the key checking and
  // instantiateReactComponent is done.

  var prevRef = null;
  var prevOwner = null;
  if (prevElement !== null && typeof prevElement === 'object') {
    prevRef = prevElement.ref;
    prevOwner = prevElement._owner;
  }

  var nextRef = null;
  var nextOwner = null;
  if (nextElement !== null && typeof nextElement === 'object') {
    nextRef = nextElement.ref;
    nextOwner = nextElement._owner;
  }

  return prevRef !== nextRef ||
  // If owner changes but we have an unchanged function ref, don't update refs
  typeof nextRef === 'string' && nextOwner !== prevOwner;
};

reactdomlibReactRef__ReactRef.detachRefs = function (instance, element) {
  if (element === null || typeof element !== 'object') {
    return;
  }
  var ref = element.ref;
  if (ref != null) {
    reactdomlibReactRef__detachRef(ref, instance, element._owner);
  }
};

$m['react-dom/lib/ReactRef'].exports = reactdomlibReactRef__ReactRef;
/*≠≠ node_modules/@yr/component/nod...ules/react-dom/lib/ReactRef.js ≠≠*/


/*== node_modules/@yr/component/nod...act-dom/lib/ReactReconciler.js ==*/
$m['react-dom/lib/ReactReconciler'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactReconciler__ReactRef = $m['react-dom/lib/ReactRef'].exports;
var reactdomlibReactReconciler__ReactInstrumentation = $m['react-dom/lib/ReactInstrumentation'].exports;

var reactdomlibReactReconciler__warning = $m['fbjs/lib/warning'].exports;

/**
 * Helper to call ReactRef.attachRefs with this composite component, split out
 * to avoid allocations in the transaction mount-ready queue.
 */
function reactdomlibReactReconciler__attachRefs() {
  reactdomlibReactReconciler__ReactRef.attachRefs(this, this._currentElement);
}

var reactdomlibReactReconciler__ReactReconciler = {
  /**
   * Initializes the component, renders markup, and registers event listeners.
   *
   * @param {ReactComponent} internalInstance
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {?object} the containing host component instance
   * @param {?object} info about the host container
   * @return {?string} Rendered markup to be inserted into the DOM.
   * @final
   * @internal
   */
  mountComponent: function (internalInstance, transaction, hostParent, hostContainerInfo, context, parentDebugID) // 0 in production and for roots
  {
    if ('development' !== 'production') {
      if (internalInstance._debugID !== 0) {
        reactdomlibReactReconciler__ReactInstrumentation.debugTool.onBeforeMountComponent(internalInstance._debugID, internalInstance._currentElement, parentDebugID);
      }
    }
    var markup = internalInstance.mountComponent(transaction, hostParent, hostContainerInfo, context, parentDebugID);
    if (internalInstance._currentElement && internalInstance._currentElement.ref != null) {
      transaction.getReactMountReady().enqueue(reactdomlibReactReconciler__attachRefs, internalInstance);
    }
    if ('development' !== 'production') {
      if (internalInstance._debugID !== 0) {
        reactdomlibReactReconciler__ReactInstrumentation.debugTool.onMountComponent(internalInstance._debugID);
      }
    }
    return markup;
  },

  /**
   * Returns a value that can be passed to
   * ReactComponentEnvironment.replaceNodeWithMarkup.
   */
  getHostNode: function (internalInstance) {
    return internalInstance.getHostNode();
  },

  /**
   * Releases any resources allocated by `mountComponent`.
   *
   * @final
   * @internal
   */
  unmountComponent: function (internalInstance, safely) {
    if ('development' !== 'production') {
      if (internalInstance._debugID !== 0) {
        reactdomlibReactReconciler__ReactInstrumentation.debugTool.onBeforeUnmountComponent(internalInstance._debugID);
      }
    }
    reactdomlibReactReconciler__ReactRef.detachRefs(internalInstance, internalInstance._currentElement);
    internalInstance.unmountComponent(safely);
    if ('development' !== 'production') {
      if (internalInstance._debugID !== 0) {
        reactdomlibReactReconciler__ReactInstrumentation.debugTool.onUnmountComponent(internalInstance._debugID);
      }
    }
  },

  /**
   * Update a component using a new element.
   *
   * @param {ReactComponent} internalInstance
   * @param {ReactElement} nextElement
   * @param {ReactReconcileTransaction} transaction
   * @param {object} context
   * @internal
   */
  receiveComponent: function (internalInstance, nextElement, transaction, context) {
    var prevElement = internalInstance._currentElement;

    if (nextElement === prevElement && context === internalInstance._context) {
      // Since elements are immutable after the owner is rendered,
      // we can do a cheap identity compare here to determine if this is a
      // superfluous reconcile. It's possible for state to be mutable but such
      // change should trigger an update of the owner which would recreate
      // the element. We explicitly check for the existence of an owner since
      // it's possible for an element created outside a composite to be
      // deeply mutated and reused.

      // TODO: Bailing out early is just a perf optimization right?
      // TODO: Removing the return statement should affect correctness?
      return;
    }

    if ('development' !== 'production') {
      if (internalInstance._debugID !== 0) {
        reactdomlibReactReconciler__ReactInstrumentation.debugTool.onBeforeUpdateComponent(internalInstance._debugID, nextElement);
      }
    }

    var refsChanged = reactdomlibReactReconciler__ReactRef.shouldUpdateRefs(prevElement, nextElement);

    if (refsChanged) {
      reactdomlibReactReconciler__ReactRef.detachRefs(internalInstance, prevElement);
    }

    internalInstance.receiveComponent(nextElement, transaction, context);

    if (refsChanged && internalInstance._currentElement && internalInstance._currentElement.ref != null) {
      transaction.getReactMountReady().enqueue(reactdomlibReactReconciler__attachRefs, internalInstance);
    }

    if ('development' !== 'production') {
      if (internalInstance._debugID !== 0) {
        reactdomlibReactReconciler__ReactInstrumentation.debugTool.onUpdateComponent(internalInstance._debugID);
      }
    }
  },

  /**
   * Flush any dirty changes in a component.
   *
   * @param {ReactComponent} internalInstance
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */
  performUpdateIfNecessary: function (internalInstance, transaction, updateBatchNumber) {
    if (internalInstance._updateBatchNumber !== updateBatchNumber) {
      // The component's enqueued batch number should always be the current
      // batch or the following one.
      'development' !== 'production' ? reactdomlibReactReconciler__warning(internalInstance._updateBatchNumber == null || internalInstance._updateBatchNumber === updateBatchNumber + 1, 'performUpdateIfNecessary: Unexpected batch number (current %s, ' + 'pending %s)', updateBatchNumber, internalInstance._updateBatchNumber) : void 0;
      return;
    }
    if ('development' !== 'production') {
      if (internalInstance._debugID !== 0) {
        reactdomlibReactReconciler__ReactInstrumentation.debugTool.onBeforeUpdateComponent(internalInstance._debugID, internalInstance._currentElement);
      }
    }
    internalInstance.performUpdateIfNecessary(transaction);
    if ('development' !== 'production') {
      if (internalInstance._debugID !== 0) {
        reactdomlibReactReconciler__ReactInstrumentation.debugTool.onUpdateComponent(internalInstance._debugID);
      }
    }
  }
};

$m['react-dom/lib/ReactReconciler'].exports = reactdomlibReactReconciler__ReactReconciler;
/*≠≠ node_modules/@yr/component/nod...act-dom/lib/ReactReconciler.js ≠≠*/


/*== node_modules/react/lib/checkReactTypeSpec.js ==*/
$m['react/lib/checkReactTypeSpec'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactlibcheckReactTypeSpec___prodInvariant = $m['react/lib/reactProdInvariant'].exports;

var reactlibcheckReactTypeSpec__ReactPropTypeLocationNames = $m['react/lib/ReactPropTypeLocationNames'].exports;
var reactlibcheckReactTypeSpec__ReactPropTypesSecret = $m['react/lib/ReactPropTypesSecret'].exports;

var reactlibcheckReactTypeSpec__invariant = $m['fbjs/lib/invariant'].exports;
var reactlibcheckReactTypeSpec__warning = $m['fbjs/lib/warning'].exports;

var reactlibcheckReactTypeSpec__ReactComponentTreeHook;

if (typeof process !== 'undefined' && process.env && 'development' === 'test') {
  // Temporary hack.
  // Inline requires don't work well with Jest:
  // https://github.com/facebook/react/issues/7240
  // Remove the inline requires when we don't need them anymore:
  // https://github.com/facebook/react/pull/7178
  reactlibcheckReactTypeSpec__ReactComponentTreeHook = $m['react/lib/ReactComponentTreeHook'].exports;
}

var reactlibcheckReactTypeSpec__loggedTypeFailures = {};

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?object} element The React element that is being type-checked
 * @param {?number} debugID The React component instance that is being type-checked
 * @private
 */
function reactlibcheckReactTypeSpec__checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
  for (var typeSpecName in typeSpecs) {
    if (typeSpecs.hasOwnProperty(typeSpecName)) {
      var error;
      // Prop type validation may throw. In case they do, we don't want to
      // fail the render phase where it didn't fail before. So we log it.
      // After these have been cleaned up, we'll let them throw.
      try {
        // This is intentionally an invariant that gets caught. It's the same
        // behavior as without this statement except with a better message.
        !(typeof typeSpecs[typeSpecName] === 'function') ? 'development' !== 'production' ? reactlibcheckReactTypeSpec__invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', reactlibcheckReactTypeSpec__ReactPropTypeLocationNames[location], typeSpecName) : reactlibcheckReactTypeSpec___prodInvariant('84', componentName || 'React class', reactlibcheckReactTypeSpec__ReactPropTypeLocationNames[location], typeSpecName) : void 0;
        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, reactlibcheckReactTypeSpec__ReactPropTypesSecret);
      } catch (ex) {
        error = ex;
      }
      'development' !== 'production' ? reactlibcheckReactTypeSpec__warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', reactlibcheckReactTypeSpec__ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
      if (error instanceof Error && !(error.message in reactlibcheckReactTypeSpec__loggedTypeFailures)) {
        // Only monitor this failure once because there tends to be a lot of the
        // same error.
        reactlibcheckReactTypeSpec__loggedTypeFailures[error.message] = true;

        var componentStackInfo = '';

        if ('development' !== 'production') {
          if (!reactlibcheckReactTypeSpec__ReactComponentTreeHook) {
            reactlibcheckReactTypeSpec__ReactComponentTreeHook = $m['react/lib/ReactComponentTreeHook'].exports;
          }
          if (debugID !== null) {
            componentStackInfo = reactlibcheckReactTypeSpec__ReactComponentTreeHook.getStackAddendumByID(debugID);
          } else if (element !== null) {
            componentStackInfo = reactlibcheckReactTypeSpec__ReactComponentTreeHook.getCurrentStackAddendum(element);
          }
        }

        'development' !== 'production' ? reactlibcheckReactTypeSpec__warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
      }
    }
  }
}

$m['react/lib/checkReactTypeSpec'].exports = reactlibcheckReactTypeSpec__checkReactTypeSpec;
/*≠≠ node_modules/react/lib/checkReactTypeSpec.js ≠≠*/


/*== node_modules/react/lib/ReactElement.js ==*/
$m['react/lib/ReactElement'] = { exports: {} };
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactlibReactElement___assign = $m['object-assign'].exports;

var reactlibReactElement__ReactCurrentOwner = $m['react/lib/ReactCurrentOwner'].exports;

var reactlibReactElement__warning = $m['fbjs/lib/warning'].exports;
var reactlibReactElement__canDefineProperty = $m['react/lib/canDefineProperty'].exports;
var reactlibReactElement__hasOwnProperty = Object.prototype.hasOwnProperty;

var reactlibReactElement__REACT_ELEMENT_TYPE = $m['react/lib/ReactElementSymbol'].exports;

var reactlibReactElement__RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var reactlibReactElement__specialPropKeyWarningShown, reactlibReactElement__specialPropRefWarningShown;

function reactlibReactElement__hasValidRef(config) {
  if ('development' !== 'production') {
    if (reactlibReactElement__hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function reactlibReactElement__hasValidKey(config) {
  if ('development' !== 'production') {
    if (reactlibReactElement__hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function reactlibReactElement__defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function warnAboutAccessingKey() {
    if (!reactlibReactElement__specialPropKeyWarningShown) {
      reactlibReactElement__specialPropKeyWarningShown = true;
      'development' !== 'production' ? reactlibReactElement__warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function reactlibReactElement__defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function warnAboutAccessingRef() {
    if (!reactlibReactElement__specialPropRefWarningShown) {
      reactlibReactElement__specialPropRefWarningShown = true;
      'development' !== 'production' ? reactlibReactElement__warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var reactlibReactElement__ReactElement = function reactlibReactElement__ReactElement(type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allow us to uniquely identify this as a React Element
    $$typeof: reactlibReactElement__REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  if ('development' !== 'production') {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    if (reactlibReactElement__canDefineProperty) {
      Object.defineProperty(element._store, 'validated', {
        configurable: false,
        enumerable: false,
        writable: true,
        value: false
      });
      // self and source are DEV only properties.
      Object.defineProperty(element, '_self', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: self
      });
      // Two elements created in two different places should be considered
      // equal for testing purposes and therefore we hide it from enumeration.
      Object.defineProperty(element, '_source', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: source
      });
    } else {
      element._store.validated = false;
      element._self = self;
      element._source = source;
    }
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
 */
reactlibReactElement__ReactElement.createElement = function (type, config, children) {
  var propName;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (reactlibReactElement__hasValidRef(config)) {
      ref = config.ref;
    }
    if (reactlibReactElement__hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (reactlibReactElement__hasOwnProperty.call(config, propName) && !reactlibReactElement__RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    if ('development' !== 'production') {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  if ('development' !== 'production') {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== reactlibReactElement__REACT_ELEMENT_TYPE) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          reactlibReactElement__defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          reactlibReactElement__defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return reactlibReactElement__ReactElement(type, key, ref, self, source, reactlibReactElement__ReactCurrentOwner.current, props);
};

/**
 * Return a function that produces ReactElements of a given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
 */
reactlibReactElement__ReactElement.createFactory = function (type) {
  var factory = reactlibReactElement__ReactElement.createElement.bind(null, type);
  // Expose the type on the factory and the prototype so that it can be
  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
  // This should not be named `constructor` since this may not be the function
  // that created the element, and it may not even be a constructor.
  // Legacy hook TODO: Warn if this is accessed
  factory.type = type;
  return factory;
};

reactlibReactElement__ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
  var newElement = reactlibReactElement__ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
};

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
 */
reactlibReactElement__ReactElement.cloneElement = function (element, config, children) {
  var propName;

  // Original props are copied
  var props = reactlibReactElement___assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (reactlibReactElement__hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = reactlibReactElement__ReactCurrentOwner.current;
    }
    if (reactlibReactElement__hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (reactlibReactElement__hasOwnProperty.call(config, propName) && !reactlibReactElement__RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return reactlibReactElement__ReactElement(element.type, key, ref, self, source, owner, props);
};

/**
 * Verifies the object is a ReactElement.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
reactlibReactElement__ReactElement.isValidElement = function (object) {
  return typeof object === 'object' && object !== null && object.$$typeof === reactlibReactElement__REACT_ELEMENT_TYPE;
};

$m['react/lib/ReactElement'].exports = reactlibReactElement__ReactElement;
/*≠≠ node_modules/react/lib/ReactElement.js ≠≠*/


/*== node_modules/react/lib/ReactElementValidator.js ==*/
$m['react/lib/ReactElementValidator'] = { exports: {} };
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

var reactlibReactElementValidator__ReactCurrentOwner = $m['react/lib/ReactCurrentOwner'].exports;
var reactlibReactElementValidator__ReactComponentTreeHook = $m['react/lib/ReactComponentTreeHook'].exports;
var reactlibReactElementValidator__ReactElement = $m['react/lib/ReactElement'].exports;

var reactlibReactElementValidator__checkReactTypeSpec = $m['react/lib/checkReactTypeSpec'].exports;

var reactlibReactElementValidator__canDefineProperty = $m['react/lib/canDefineProperty'].exports;
var reactlibReactElementValidator__getIteratorFn = $m['react/lib/getIteratorFn'].exports;
var reactlibReactElementValidator__warning = $m['fbjs/lib/warning'].exports;
var reactlibReactElementValidator__lowPriorityWarning = $m['react/lib/lowPriorityWarning'].exports;

function reactlibReactElementValidator__getDeclarationErrorAddendum() {
  if (reactlibReactElementValidator__ReactCurrentOwner.current) {
    var name = reactlibReactElementValidator__ReactCurrentOwner.current.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
  }
  return '';
}

function reactlibReactElementValidator__getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return ' Check your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var reactlibReactElementValidator__ownerHasKeyUseWarning = {};

function reactlibReactElementValidator__getCurrentComponentErrorInfo(parentType) {
  var info = reactlibReactElementValidator__getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = ' Check the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function reactlibReactElementValidator__validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var memoizer = reactlibReactElementValidator__ownerHasKeyUseWarning.uniqueKey || (reactlibReactElementValidator__ownerHasKeyUseWarning.uniqueKey = {});

  var currentComponentErrorInfo = reactlibReactElementValidator__getCurrentComponentErrorInfo(parentType);
  if (memoizer[currentComponentErrorInfo]) {
    return;
  }
  memoizer[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== reactlibReactElementValidator__ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
  }

  'development' !== 'production' ? reactlibReactElementValidator__warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, reactlibReactElementValidator__ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function reactlibReactElementValidator__validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (reactlibReactElementValidator__ReactElement.isValidElement(child)) {
        reactlibReactElementValidator__validateExplicitKey(child, parentType);
      }
    }
  } else if (reactlibReactElementValidator__ReactElement.isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = reactlibReactElementValidator__getIteratorFn(node);
    // Entry iterators provide implicit keys.
    if (iteratorFn) {
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;
        while (!(step = iterator.next()).done) {
          if (reactlibReactElementValidator__ReactElement.isValidElement(step.value)) {
            reactlibReactElementValidator__validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function reactlibReactElementValidator__validatePropTypes(element) {
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;
  }
  var name = componentClass.displayName || componentClass.name;
  if (componentClass.propTypes) {
    reactlibReactElementValidator__checkReactTypeSpec(componentClass.propTypes, element.props, 'prop', name, element, null);
  }
  if (typeof componentClass.getDefaultProps === 'function') {
    'development' !== 'production' ? reactlibReactElementValidator__warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

var reactlibReactElementValidator__ReactElementValidator = {
  createElement: function createElement(type, props, children) {
    var validType = typeof type === 'string' || typeof type === 'function';
    // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.
    if (!validType) {
      if (typeof type !== 'function' && typeof type !== 'string') {
        var info = '';
        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in.";
        }

        var sourceInfo = reactlibReactElementValidator__getSourceInfoErrorAddendum(props);
        if (sourceInfo) {
          info += sourceInfo;
        } else {
          info += reactlibReactElementValidator__getDeclarationErrorAddendum();
        }

        info += reactlibReactElementValidator__ReactComponentTreeHook.getCurrentStackAddendum();

        var currentSource = props !== null && props !== undefined && props.__source !== undefined ? props.__source : null;
        reactlibReactElementValidator__ReactComponentTreeHook.pushNonStandardWarningStack(true, currentSource);
        'development' !== 'production' ? reactlibReactElementValidator__warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info) : void 0;
        reactlibReactElementValidator__ReactComponentTreeHook.popNonStandardWarningStack();
      }
    }

    var element = reactlibReactElementValidator__ReactElement.createElement.apply(this, arguments);

    // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.
    if (element == null) {
      return element;
    }

    // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)
    if (validType) {
      for (var i = 2; i < arguments.length; i++) {
        reactlibReactElementValidator__validateChildKeys(arguments[i], type);
      }
    }

    reactlibReactElementValidator__validatePropTypes(element);

    return element;
  },

  createFactory: function createFactory(type) {
    var validatedFactory = reactlibReactElementValidator__ReactElementValidator.createElement.bind(null, type);
    // Legacy hook TODO: Warn if this is accessed
    validatedFactory.type = type;

    if ('development' !== 'production') {
      if (reactlibReactElementValidator__canDefineProperty) {
        Object.defineProperty(validatedFactory, 'type', {
          enumerable: false,
          get: function get() {
            reactlibReactElementValidator__lowPriorityWarning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
            Object.defineProperty(this, 'type', {
              value: type
            });
            return type;
          }
        });
      }
    }

    return validatedFactory;
  },

  cloneElement: function cloneElement(element, props, children) {
    var newElement = reactlibReactElementValidator__ReactElement.cloneElement.apply(this, arguments);
    for (var i = 2; i < arguments.length; i++) {
      reactlibReactElementValidator__validateChildKeys(arguments[i], newElement.type);
    }
    reactlibReactElementValidator__validatePropTypes(newElement);
    return newElement;
  }
};

$m['react/lib/ReactElementValidator'].exports = reactlibReactElementValidator__ReactElementValidator;
/*≠≠ node_modules/react/lib/ReactElementValidator.js ≠≠*/


/*== node_modules/react/lib/onlyChild.js ==*/
$m['react/lib/onlyChild'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactlibonlyChild___prodInvariant = $m['react/lib/reactProdInvariant'].exports;

var reactlibonlyChild__ReactElement = $m['react/lib/ReactElement'].exports;

var reactlibonlyChild__invariant = $m['fbjs/lib/invariant'].exports;

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function reactlibonlyChild__onlyChild(children) {
  !reactlibonlyChild__ReactElement.isValidElement(children) ? 'development' !== 'production' ? reactlibonlyChild__invariant(false, 'React.Children.only expected to receive a single React element child.') : reactlibonlyChild___prodInvariant('143') : void 0;
  return children;
}

$m['react/lib/onlyChild'].exports = reactlibonlyChild__onlyChild;
/*≠≠ node_modules/react/lib/onlyChild.js ≠≠*/


/*== node_modules/create-react-class/factory.js ==*/
$m['create-react-class/factory'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var createreactclassfactory___assign = $m['object-assign'].exports;

var createreactclassfactory__emptyObject = $m['fbjs/lib/emptyObject'].exports;
var createreactclassfactory___invariant = $m['fbjs/lib/invariant'].exports;

if ('development' !== 'production') {
  var createreactclassfactory__warning = $m['fbjs/lib/warning'].exports;
}

var createreactclassfactory__MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function createreactclassfactory__identity(fn) {
  return fn;
}

var createreactclassfactory__ReactPropTypeLocationNames;
if ('development' !== 'production') {
  createreactclassfactory__ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
} else {
  createreactclassfactory__ReactPropTypeLocationNames = {};
}

function createreactclassfactory__factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  /**
   * Policies that describe methods in `ReactClassInterface`.
   */

  var injectedMixins = [];

  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */
  var ReactClassInterface = {
    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: 'DEFINE_MANY',

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: 'DEFINE_MANY',

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: 'DEFINE_MANY',

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: 'DEFINE_MANY',

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: 'DEFINE_MANY',

    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: 'DEFINE_MANY_MERGED',

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: 'DEFINE_MANY_MERGED',

    /**
     * @return {object}
     * @optional
     */
    getChildContext: 'DEFINE_MANY_MERGED',

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
    render: 'DEFINE_ONCE',

    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: 'DEFINE_MANY',

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: 'DEFINE_MANY',

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: 'DEFINE_ONCE',

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: 'DEFINE_MANY',

    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: 'OVERRIDE_BASE'
  };

  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */
  var RESERVED_SPEC_KEYS = {
    displayName: function displayName(Constructor, _displayName) {
      Constructor.displayName = _displayName;
    },
    mixins: function mixins(Constructor, _mixins) {
      if (_mixins) {
        for (var i = 0; i < _mixins.length; i++) {
          mixSpecIntoComponent(Constructor, _mixins[i]);
        }
      }
    },
    childContextTypes: function childContextTypes(Constructor, _childContextTypes) {
      if ('development' !== 'production') {
        validateTypeDef(Constructor, _childContextTypes, 'childContext');
      }
      Constructor.childContextTypes = createreactclassfactory___assign({}, Constructor.childContextTypes, _childContextTypes);
    },
    contextTypes: function contextTypes(Constructor, _contextTypes) {
      if ('development' !== 'production') {
        validateTypeDef(Constructor, _contextTypes, 'context');
      }
      Constructor.contextTypes = createreactclassfactory___assign({}, Constructor.contextTypes, _contextTypes);
    },
    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function getDefaultProps(Constructor, _getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, _getDefaultProps);
      } else {
        Constructor.getDefaultProps = _getDefaultProps;
      }
    },
    propTypes: function propTypes(Constructor, _propTypes) {
      if ('development' !== 'production') {
        validateTypeDef(Constructor, _propTypes, 'prop');
      }
      Constructor.propTypes = createreactclassfactory___assign({}, Constructor.propTypes, _propTypes);
    },
    statics: function statics(Constructor, _statics) {
      mixStaticSpecIntoComponent(Constructor, _statics);
    },
    autobind: function autobind() {}
  };

  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        // use a warning instead of an _invariant so components
        // don't show up in prod but only in __DEV__
        if ('development' !== 'production') {
          createreactclassfactory__warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', createreactclassfactory__ReactPropTypeLocationNames[location], propName);
        }
      }
    }
  }

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

    // Disallow overriding of base class methods unless explicitly allowed.
    if (ReactClassMixin.hasOwnProperty(name)) {
      createreactclassfactory___invariant(specPolicy === 'OVERRIDE_BASE', 'ReactClassInterface: You are attempting to override ' + '`%s` from your class specification. Ensure that your method names ' + 'do not overlap with React methods.', name);
    }

    // Disallow defining methods more than once unless explicitly allowed.
    if (isAlreadyDefined) {
      createreactclassfactory___invariant(specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED', 'ReactClassInterface: You are attempting to define ' + '`%s` on your component more than once. This conflict may be due ' + 'to a mixin.', name);
    }
  }

  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      if ('development' !== 'production') {
        var typeofSpec = typeof spec;
        var isMixinValid = typeofSpec === 'object' && spec !== null;

        if ('development' !== 'production') {
          createreactclassfactory__warning(isMixinValid, "%s: You're attempting to include a mixin that is either null " + 'or not an object. Check the mixins included by the component, ' + 'as well as any mixins they include themselves. ' + 'Expected object but got %s.', Constructor.displayName || 'ReactClass', spec === null ? null : typeofSpec);
        }
      }

      return;
    }

    createreactclassfactory___invariant(typeof spec !== 'function', "ReactClass: You're attempting to " + 'use a component class or function as a mixin. Instead, just use a ' + 'regular object.');
    createreactclassfactory___invariant(!isValidElement(spec), "ReactClass: You're attempting to " + 'use a component as a mixin. Instead, just use a regular object.');

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;

    // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.
    if (spec.hasOwnProperty(createreactclassfactory__MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === createreactclassfactory__MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];

            // These cases should already be caught by validateMethodOverride.
            createreactclassfactory___invariant(isReactClassMethod && (specPolicy === 'DEFINE_MANY_MERGED' || specPolicy === 'DEFINE_MANY'), 'ReactClass: Unexpected spec policy %s for key %s ' + 'when mixing in component specs.', specPolicy, name);

            // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.
            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            if ('development' !== 'production') {
              // Add verbose displayName to the function, which helps when looking
              // at profiling tools.
              if (typeof property === 'function' && spec.displayName) {
                proto[name].displayName = spec.displayName + '_' + name;
              }
            }
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }
    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      var isReserved = name in RESERVED_SPEC_KEYS;
      createreactclassfactory___invariant(!isReserved, 'ReactClass: You are attempting to define a reserved ' + 'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' + 'as an instance property instead; it will still be accessible on the ' + 'constructor.', name);

      var isInherited = name in Constructor;
      createreactclassfactory___invariant(!isInherited, 'ReactClass: You are attempting to define ' + '`%s` on your component more than once. This conflict may be ' + 'due to a mixin.', name);
      Constructor[name] = property;
    }
  }

  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
  function mergeIntoWithNoDuplicateKeys(one, two) {
    createreactclassfactory___invariant(one && two && typeof one === 'object' && typeof two === 'object', 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.');

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        createreactclassfactory___invariant(one[key] === undefined, 'mergeIntoWithNoDuplicateKeys(): ' + 'Tried to merge two objects with the same key: `%s`. This conflict ' + 'may be due to a mixin; in particular, this may be caused by two ' + 'getInitialState() or getDefaultProps() methods returning objects ' + 'with clashing keys.', key);
        one[key] = two[key];
      }
    }
    return one;
  }

  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }

  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }

  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    if ('development' !== 'production') {
      boundMethod.__reactBoundContext = component;
      boundMethod.__reactBoundMethod = method;
      boundMethod.__reactBoundArguments = null;
      var componentName = component.constructor.displayName;
      var _bind = boundMethod.bind;
      boundMethod.bind = function (newThis) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        // User is trying to bind() an autobound method; we effectively will
        // ignore the value of "this" that the user is trying to use, so
        // let's warn.
        if (newThis !== component && newThis !== null) {
          if ('development' !== 'production') {
            createreactclassfactory__warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName);
          }
        } else if (!args.length) {
          if ('development' !== 'production') {
            createreactclassfactory__warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName);
          }
          return boundMethod;
        }
        var reboundMethod = _bind.apply(boundMethod, arguments);
        reboundMethod.__reactBoundContext = component;
        reboundMethod.__reactBoundMethod = method;
        reboundMethod.__reactBoundArguments = args;
        return reboundMethod;
      };
    }
    return boundMethod;
  }

  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  var IsMountedPreMixin = {
    componentDidMount: function componentDidMount() {
      this.__isMounted = true;
    }
  };

  var IsMountedPostMixin = {
    componentWillUnmount: function componentWillUnmount() {
      this.__isMounted = false;
    }
  };

  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */
  var ReactClassMixin = {
    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function replaceState(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function isMounted() {
      if ('development' !== 'production') {
        createreactclassfactory__warning(this.__didWarnIsMounted, '%s: isMounted is deprecated. Instead, make sure to clean up ' + 'subscriptions and pending requests in componentWillUnmount to ' + 'prevent memory leaks.', this.constructor && this.constructor.displayName || this.name || 'Component');
        this.__didWarnIsMounted = true;
      }
      return !!this.__isMounted;
    }
  };

  var ReactClassComponent = function ReactClassComponent() {};
  createreactclassfactory___assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  function createClass(spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = createreactclassfactory__identity(function (props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if ('development' !== 'production') {
        createreactclassfactory__warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory');
      }

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = createreactclassfactory__emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if ('development' !== 'production') {
        // We allow auto-mocks to proceed as if they're returning null.
        if (initialState === undefined && this.getInitialState._isMockFunction) {
          // This is probably bad practice. Consider warning here and
          // deprecating this convenience.
          initialState = null;
        }
      }
      createreactclassfactory___invariant(typeof initialState === 'object' && !Array.isArray(initialState), '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent');

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if ('development' !== 'production') {
      // This is a tag to indicate that the use of these method names is ok,
      // since it's used with createClass. If it's not, then it's likely a
      // mistake so we'll warn you to use the static property, property
      // initializer or constructor respectively.
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};
      }
      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};
      }
    }

    createreactclassfactory___invariant(Constructor.prototype.render, 'createClass(...): Class specification must implement a `render` method.');

    if ('development' !== 'production') {
      createreactclassfactory__warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component');
      createreactclassfactory__warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component');
    }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  }

  return createClass;
}

$m['create-react-class/factory'].exports = createreactclassfactory__factory;
/*≠≠ node_modules/create-react-class/factory.js ≠≠*/


/*== node_modules/react/lib/ReactNoopUpdateQueue.js ==*/
$m['react/lib/ReactNoopUpdateQueue'] = { exports: {} };
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactlibReactNoopUpdateQueue__warning = $m['fbjs/lib/warning'].exports;

function reactlibReactNoopUpdateQueue__warnNoop(publicInstance, callerName) {
  if ('development' !== 'production') {
    var constructor = publicInstance.constructor;
    'development' !== 'production' ? reactlibReactNoopUpdateQueue__warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var reactlibReactNoopUpdateQueue__ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function isMounted(publicInstance) {
    return false;
  },

  /**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */
  enqueueCallback: function enqueueCallback(publicInstance, callback) {},

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */
  enqueueForceUpdate: function enqueueForceUpdate(publicInstance) {
    reactlibReactNoopUpdateQueue__warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */
  enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState) {
    reactlibReactNoopUpdateQueue__warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */
  enqueueSetState: function enqueueSetState(publicInstance, partialState) {
    reactlibReactNoopUpdateQueue__warnNoop(publicInstance, 'setState');
  }
};

$m['react/lib/ReactNoopUpdateQueue'].exports = reactlibReactNoopUpdateQueue__ReactNoopUpdateQueue;
/*≠≠ node_modules/react/lib/ReactNoopUpdateQueue.js ≠≠*/


/*== node_modules/react/lib/ReactBaseClasses.js ==*/
$m['react/lib/ReactBaseClasses'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactlibReactBaseClasses___prodInvariant = $m['react/lib/reactProdInvariant'].exports,
    reactlibReactBaseClasses___assign = $m['object-assign'].exports;

var reactlibReactBaseClasses__ReactNoopUpdateQueue = $m['react/lib/ReactNoopUpdateQueue'].exports;

var reactlibReactBaseClasses__canDefineProperty = $m['react/lib/canDefineProperty'].exports;
var reactlibReactBaseClasses__emptyObject = $m['fbjs/lib/emptyObject'].exports;
var reactlibReactBaseClasses__invariant = $m['fbjs/lib/invariant'].exports;
var reactlibReactBaseClasses__lowPriorityWarning = $m['react/lib/lowPriorityWarning'].exports;

/**
 * Base class helpers for the updating state of a component.
 */
function reactlibReactBaseClasses__ReactComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = reactlibReactBaseClasses__emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || reactlibReactBaseClasses__ReactNoopUpdateQueue;
}

reactlibReactBaseClasses__ReactComponent.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
reactlibReactBaseClasses__ReactComponent.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? 'development' !== 'production' ? reactlibReactBaseClasses__invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : reactlibReactBaseClasses___prodInvariant('85') : void 0;
  this.updater.enqueueSetState(this, partialState);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'setState');
  }
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
reactlibReactBaseClasses__ReactComponent.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'forceUpdate');
  }
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
if ('development' !== 'production') {
  var reactlibReactBaseClasses__deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var reactlibReactBaseClasses__defineDeprecationWarning = function reactlibReactBaseClasses__defineDeprecationWarning(methodName, info) {
    if (reactlibReactBaseClasses__canDefineProperty) {
      Object.defineProperty(reactlibReactBaseClasses__ReactComponent.prototype, methodName, {
        get: function get() {
          reactlibReactBaseClasses__lowPriorityWarning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
          return undefined;
        }
      });
    }
  };
  for (var reactlibReactBaseClasses__fnName in reactlibReactBaseClasses__deprecatedAPIs) {
    if (reactlibReactBaseClasses__deprecatedAPIs.hasOwnProperty(reactlibReactBaseClasses__fnName)) {
      reactlibReactBaseClasses__defineDeprecationWarning(reactlibReactBaseClasses__fnName, reactlibReactBaseClasses__deprecatedAPIs[reactlibReactBaseClasses__fnName]);
    }
  }
}

/**
 * Base class helpers for the updating state of a component.
 */
function reactlibReactBaseClasses__ReactPureComponent(props, context, updater) {
  // Duplicated from ReactComponent.
  this.props = props;
  this.context = context;
  this.refs = reactlibReactBaseClasses__emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || reactlibReactBaseClasses__ReactNoopUpdateQueue;
}

function reactlibReactBaseClasses__ComponentDummy() {}
reactlibReactBaseClasses__ComponentDummy.prototype = reactlibReactBaseClasses__ReactComponent.prototype;
reactlibReactBaseClasses__ReactPureComponent.prototype = new reactlibReactBaseClasses__ComponentDummy();
reactlibReactBaseClasses__ReactPureComponent.prototype.constructor = reactlibReactBaseClasses__ReactPureComponent;
// Avoid an extra prototype jump for these methods.
reactlibReactBaseClasses___assign(reactlibReactBaseClasses__ReactPureComponent.prototype, reactlibReactBaseClasses__ReactComponent.prototype);
reactlibReactBaseClasses__ReactPureComponent.prototype.isPureReactComponent = true;

$m['react/lib/ReactBaseClasses'].exports = {
  Component: reactlibReactBaseClasses__ReactComponent,
  PureComponent: reactlibReactBaseClasses__ReactPureComponent
};
/*≠≠ node_modules/react/lib/ReactBaseClasses.js ≠≠*/


/*== node_modules/react/lib/createClass.js ==*/
$m['react/lib/createClass'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactlibcreateClass___require = $m['react/lib/ReactBaseClasses'].exports,
    reactlibcreateClass__Component = reactlibcreateClass___require.Component;

var reactlibcreateClass___require2 = $m['react/lib/ReactElement'].exports,
    reactlibcreateClass__isValidElement = reactlibcreateClass___require2.isValidElement;

var reactlibcreateClass__ReactNoopUpdateQueue = $m['react/lib/ReactNoopUpdateQueue'].exports;
var reactlibcreateClass__factory = $m['create-react-class/factory'].exports;

$m['react/lib/createClass'].exports = reactlibcreateClass__factory(reactlibcreateClass__Component, reactlibcreateClass__isValidElement, reactlibcreateClass__ReactNoopUpdateQueue);
/*≠≠ node_modules/react/lib/createClass.js ≠≠*/


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


/*== node_modules/prop-types/factory.js ==*/
$m['prop-types/factory'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

// React 15.5 references this module, and assumes PropTypes are still callable in production.
// Therefore we re-export development-only version with all the PropTypes checks here.
// However if one is migrating to the `prop-types` npm library, they will go through the
// `index.js` entry point, and it will branch depending on the environment.
var proptypesfactory__factory = $m['prop-types/factoryWithTypeCheckers'].exports;
$m['prop-types/factory'].exports = function (isValidElement) {
  // It is still allowed in 15.5.
  var throwOnDirectAccess = false;
  return proptypesfactory__factory(isValidElement, throwOnDirectAccess);
};
/*≠≠ node_modules/prop-types/factory.js ≠≠*/


/*== node_modules/react/lib/ReactPropTypes.js ==*/
$m['react/lib/ReactPropTypes'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactlibReactPropTypes___require = $m['react/lib/ReactElement'].exports,
    reactlibReactPropTypes__isValidElement = reactlibReactPropTypes___require.isValidElement;

var reactlibReactPropTypes__factory = $m['prop-types/factory'].exports;

$m['react/lib/ReactPropTypes'].exports = reactlibReactPropTypes__factory(reactlibReactPropTypes__isValidElement);
/*≠≠ node_modules/react/lib/ReactPropTypes.js ≠≠*/


/*== node_modules/react/lib/ReactDOMFactories.js ==*/
$m['react/lib/ReactDOMFactories'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactlibReactDOMFactories__ReactElement = $m['react/lib/ReactElement'].exports;

/**
 * Create a factory that creates HTML tag elements.
 *
 * @private
 */
var reactlibReactDOMFactories__createDOMFactory = reactlibReactDOMFactories__ReactElement.createFactory;
if ('development' !== 'production') {
  var reactlibReactDOMFactories__ReactElementValidator = $m['react/lib/ReactElementValidator'].exports;
  reactlibReactDOMFactories__createDOMFactory = reactlibReactDOMFactories__ReactElementValidator.createFactory;
}

/**
 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
 *
 * @public
 */
var reactlibReactDOMFactories__ReactDOMFactories = {
  a: reactlibReactDOMFactories__createDOMFactory('a'),
  abbr: reactlibReactDOMFactories__createDOMFactory('abbr'),
  address: reactlibReactDOMFactories__createDOMFactory('address'),
  area: reactlibReactDOMFactories__createDOMFactory('area'),
  article: reactlibReactDOMFactories__createDOMFactory('article'),
  aside: reactlibReactDOMFactories__createDOMFactory('aside'),
  audio: reactlibReactDOMFactories__createDOMFactory('audio'),
  b: reactlibReactDOMFactories__createDOMFactory('b'),
  base: reactlibReactDOMFactories__createDOMFactory('base'),
  bdi: reactlibReactDOMFactories__createDOMFactory('bdi'),
  bdo: reactlibReactDOMFactories__createDOMFactory('bdo'),
  big: reactlibReactDOMFactories__createDOMFactory('big'),
  blockquote: reactlibReactDOMFactories__createDOMFactory('blockquote'),
  body: reactlibReactDOMFactories__createDOMFactory('body'),
  br: reactlibReactDOMFactories__createDOMFactory('br'),
  button: reactlibReactDOMFactories__createDOMFactory('button'),
  canvas: reactlibReactDOMFactories__createDOMFactory('canvas'),
  caption: reactlibReactDOMFactories__createDOMFactory('caption'),
  cite: reactlibReactDOMFactories__createDOMFactory('cite'),
  code: reactlibReactDOMFactories__createDOMFactory('code'),
  col: reactlibReactDOMFactories__createDOMFactory('col'),
  colgroup: reactlibReactDOMFactories__createDOMFactory('colgroup'),
  data: reactlibReactDOMFactories__createDOMFactory('data'),
  datalist: reactlibReactDOMFactories__createDOMFactory('datalist'),
  dd: reactlibReactDOMFactories__createDOMFactory('dd'),
  del: reactlibReactDOMFactories__createDOMFactory('del'),
  details: reactlibReactDOMFactories__createDOMFactory('details'),
  dfn: reactlibReactDOMFactories__createDOMFactory('dfn'),
  dialog: reactlibReactDOMFactories__createDOMFactory('dialog'),
  div: reactlibReactDOMFactories__createDOMFactory('div'),
  dl: reactlibReactDOMFactories__createDOMFactory('dl'),
  dt: reactlibReactDOMFactories__createDOMFactory('dt'),
  em: reactlibReactDOMFactories__createDOMFactory('em'),
  embed: reactlibReactDOMFactories__createDOMFactory('embed'),
  fieldset: reactlibReactDOMFactories__createDOMFactory('fieldset'),
  figcaption: reactlibReactDOMFactories__createDOMFactory('figcaption'),
  figure: reactlibReactDOMFactories__createDOMFactory('figure'),
  footer: reactlibReactDOMFactories__createDOMFactory('footer'),
  form: reactlibReactDOMFactories__createDOMFactory('form'),
  h1: reactlibReactDOMFactories__createDOMFactory('h1'),
  h2: reactlibReactDOMFactories__createDOMFactory('h2'),
  h3: reactlibReactDOMFactories__createDOMFactory('h3'),
  h4: reactlibReactDOMFactories__createDOMFactory('h4'),
  h5: reactlibReactDOMFactories__createDOMFactory('h5'),
  h6: reactlibReactDOMFactories__createDOMFactory('h6'),
  head: reactlibReactDOMFactories__createDOMFactory('head'),
  header: reactlibReactDOMFactories__createDOMFactory('header'),
  hgroup: reactlibReactDOMFactories__createDOMFactory('hgroup'),
  hr: reactlibReactDOMFactories__createDOMFactory('hr'),
  html: reactlibReactDOMFactories__createDOMFactory('html'),
  i: reactlibReactDOMFactories__createDOMFactory('i'),
  iframe: reactlibReactDOMFactories__createDOMFactory('iframe'),
  img: reactlibReactDOMFactories__createDOMFactory('img'),
  input: reactlibReactDOMFactories__createDOMFactory('input'),
  ins: reactlibReactDOMFactories__createDOMFactory('ins'),
  kbd: reactlibReactDOMFactories__createDOMFactory('kbd'),
  keygen: reactlibReactDOMFactories__createDOMFactory('keygen'),
  label: reactlibReactDOMFactories__createDOMFactory('label'),
  legend: reactlibReactDOMFactories__createDOMFactory('legend'),
  li: reactlibReactDOMFactories__createDOMFactory('li'),
  link: reactlibReactDOMFactories__createDOMFactory('link'),
  main: reactlibReactDOMFactories__createDOMFactory('main'),
  map: reactlibReactDOMFactories__createDOMFactory('map'),
  mark: reactlibReactDOMFactories__createDOMFactory('mark'),
  menu: reactlibReactDOMFactories__createDOMFactory('menu'),
  menuitem: reactlibReactDOMFactories__createDOMFactory('menuitem'),
  meta: reactlibReactDOMFactories__createDOMFactory('meta'),
  meter: reactlibReactDOMFactories__createDOMFactory('meter'),
  nav: reactlibReactDOMFactories__createDOMFactory('nav'),
  noscript: reactlibReactDOMFactories__createDOMFactory('noscript'),
  object: reactlibReactDOMFactories__createDOMFactory('object'),
  ol: reactlibReactDOMFactories__createDOMFactory('ol'),
  optgroup: reactlibReactDOMFactories__createDOMFactory('optgroup'),
  option: reactlibReactDOMFactories__createDOMFactory('option'),
  output: reactlibReactDOMFactories__createDOMFactory('output'),
  p: reactlibReactDOMFactories__createDOMFactory('p'),
  param: reactlibReactDOMFactories__createDOMFactory('param'),
  picture: reactlibReactDOMFactories__createDOMFactory('picture'),
  pre: reactlibReactDOMFactories__createDOMFactory('pre'),
  progress: reactlibReactDOMFactories__createDOMFactory('progress'),
  q: reactlibReactDOMFactories__createDOMFactory('q'),
  rp: reactlibReactDOMFactories__createDOMFactory('rp'),
  rt: reactlibReactDOMFactories__createDOMFactory('rt'),
  ruby: reactlibReactDOMFactories__createDOMFactory('ruby'),
  s: reactlibReactDOMFactories__createDOMFactory('s'),
  samp: reactlibReactDOMFactories__createDOMFactory('samp'),
  script: reactlibReactDOMFactories__createDOMFactory('script'),
  section: reactlibReactDOMFactories__createDOMFactory('section'),
  select: reactlibReactDOMFactories__createDOMFactory('select'),
  small: reactlibReactDOMFactories__createDOMFactory('small'),
  source: reactlibReactDOMFactories__createDOMFactory('source'),
  span: reactlibReactDOMFactories__createDOMFactory('span'),
  strong: reactlibReactDOMFactories__createDOMFactory('strong'),
  style: reactlibReactDOMFactories__createDOMFactory('style'),
  sub: reactlibReactDOMFactories__createDOMFactory('sub'),
  summary: reactlibReactDOMFactories__createDOMFactory('summary'),
  sup: reactlibReactDOMFactories__createDOMFactory('sup'),
  table: reactlibReactDOMFactories__createDOMFactory('table'),
  tbody: reactlibReactDOMFactories__createDOMFactory('tbody'),
  td: reactlibReactDOMFactories__createDOMFactory('td'),
  textarea: reactlibReactDOMFactories__createDOMFactory('textarea'),
  tfoot: reactlibReactDOMFactories__createDOMFactory('tfoot'),
  th: reactlibReactDOMFactories__createDOMFactory('th'),
  thead: reactlibReactDOMFactories__createDOMFactory('thead'),
  time: reactlibReactDOMFactories__createDOMFactory('time'),
  title: reactlibReactDOMFactories__createDOMFactory('title'),
  tr: reactlibReactDOMFactories__createDOMFactory('tr'),
  track: reactlibReactDOMFactories__createDOMFactory('track'),
  u: reactlibReactDOMFactories__createDOMFactory('u'),
  ul: reactlibReactDOMFactories__createDOMFactory('ul'),
  'var': reactlibReactDOMFactories__createDOMFactory('var'),
  video: reactlibReactDOMFactories__createDOMFactory('video'),
  wbr: reactlibReactDOMFactories__createDOMFactory('wbr'),

  // SVG
  circle: reactlibReactDOMFactories__createDOMFactory('circle'),
  clipPath: reactlibReactDOMFactories__createDOMFactory('clipPath'),
  defs: reactlibReactDOMFactories__createDOMFactory('defs'),
  ellipse: reactlibReactDOMFactories__createDOMFactory('ellipse'),
  g: reactlibReactDOMFactories__createDOMFactory('g'),
  image: reactlibReactDOMFactories__createDOMFactory('image'),
  line: reactlibReactDOMFactories__createDOMFactory('line'),
  linearGradient: reactlibReactDOMFactories__createDOMFactory('linearGradient'),
  mask: reactlibReactDOMFactories__createDOMFactory('mask'),
  path: reactlibReactDOMFactories__createDOMFactory('path'),
  pattern: reactlibReactDOMFactories__createDOMFactory('pattern'),
  polygon: reactlibReactDOMFactories__createDOMFactory('polygon'),
  polyline: reactlibReactDOMFactories__createDOMFactory('polyline'),
  radialGradient: reactlibReactDOMFactories__createDOMFactory('radialGradient'),
  rect: reactlibReactDOMFactories__createDOMFactory('rect'),
  stop: reactlibReactDOMFactories__createDOMFactory('stop'),
  svg: reactlibReactDOMFactories__createDOMFactory('svg'),
  text: reactlibReactDOMFactories__createDOMFactory('text'),
  tspan: reactlibReactDOMFactories__createDOMFactory('tspan')
};

$m['react/lib/ReactDOMFactories'].exports = reactlibReactDOMFactories__ReactDOMFactories;
/*≠≠ node_modules/react/lib/ReactDOMFactories.js ≠≠*/


/*== node_modules/react/lib/traverseAllChildren.js ==*/
$m['react/lib/traverseAllChildren'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactlibtraverseAllChildren___prodInvariant = $m['react/lib/reactProdInvariant'].exports;

var reactlibtraverseAllChildren__ReactCurrentOwner = $m['react/lib/ReactCurrentOwner'].exports;
var reactlibtraverseAllChildren__REACT_ELEMENT_TYPE = $m['react/lib/ReactElementSymbol'].exports;

var reactlibtraverseAllChildren__getIteratorFn = $m['react/lib/getIteratorFn'].exports;
var reactlibtraverseAllChildren__invariant = $m['fbjs/lib/invariant'].exports;
var reactlibtraverseAllChildren__KeyEscapeUtils = $m['react/lib/KeyEscapeUtils'].exports;
var reactlibtraverseAllChildren__warning = $m['fbjs/lib/warning'].exports;

var reactlibtraverseAllChildren__SEPARATOR = '.';
var reactlibtraverseAllChildren__SUBSEPARATOR = ':';

/**
 * This is inlined from ReactElement since this file is shared between
 * isomorphic and renderers. We could extract this to a
 *
 */

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var reactlibtraverseAllChildren__didWarnAboutMaps = false;

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function reactlibtraverseAllChildren__getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (component && typeof component === 'object' && component.key != null) {
    // Explicit key
    return reactlibtraverseAllChildren__KeyEscapeUtils.escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function reactlibtraverseAllChildren__traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  if (children === null || type === 'string' || type === 'number' ||
  // The following is inlined from ReactElement. This means we can optimize
  // some checks. React Fiber also inlines this logic for similar purposes.
  type === 'object' && children.$$typeof === reactlibtraverseAllChildren__REACT_ELEMENT_TYPE) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? reactlibtraverseAllChildren__SEPARATOR + reactlibtraverseAllChildren__getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? reactlibtraverseAllChildren__SEPARATOR : nameSoFar + reactlibtraverseAllChildren__SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + reactlibtraverseAllChildren__getComponentKey(child, i);
      subtreeCount += reactlibtraverseAllChildren__traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = reactlibtraverseAllChildren__getIteratorFn(children);
    if (iteratorFn) {
      var iterator = iteratorFn.call(children);
      var step;
      if (iteratorFn !== children.entries) {
        var ii = 0;
        while (!(step = iterator.next()).done) {
          child = step.value;
          nextName = nextNamePrefix + reactlibtraverseAllChildren__getComponentKey(child, ii++);
          subtreeCount += reactlibtraverseAllChildren__traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        if ('development' !== 'production') {
          var mapsAsChildrenAddendum = '';
          if (reactlibtraverseAllChildren__ReactCurrentOwner.current) {
            var mapsAsChildrenOwnerName = reactlibtraverseAllChildren__ReactCurrentOwner.current.getName();
            if (mapsAsChildrenOwnerName) {
              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
            }
          }
          'development' !== 'production' ? reactlibtraverseAllChildren__warning(reactlibtraverseAllChildren__didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
          reactlibtraverseAllChildren__didWarnAboutMaps = true;
        }
        // Iterator will provide entry [k,v] tuples rather than values.
        while (!(step = iterator.next()).done) {
          var entry = step.value;
          if (entry) {
            child = entry[1];
            nextName = nextNamePrefix + reactlibtraverseAllChildren__KeyEscapeUtils.escape(entry[0]) + reactlibtraverseAllChildren__SUBSEPARATOR + reactlibtraverseAllChildren__getComponentKey(child, 0);
            subtreeCount += reactlibtraverseAllChildren__traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        }
      }
    } else if (type === 'object') {
      var addendum = '';
      if ('development' !== 'production') {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
        if (children._isReactElement) {
          addendum = " It looks like you're using an element created by a different " + 'version of React. Make sure to use only one copy of React.';
        }
        if (reactlibtraverseAllChildren__ReactCurrentOwner.current) {
          var name = reactlibtraverseAllChildren__ReactCurrentOwner.current.getName();
          if (name) {
            addendum += ' Check the render method of `' + name + '`.';
          }
        }
      }
      var childrenString = String(children);
      !false ? 'development' !== 'production' ? reactlibtraverseAllChildren__invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : reactlibtraverseAllChildren___prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function reactlibtraverseAllChildren__traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return reactlibtraverseAllChildren__traverseAllChildrenImpl(children, '', callback, traverseContext);
}

$m['react/lib/traverseAllChildren'].exports = reactlibtraverseAllChildren__traverseAllChildren;
/*≠≠ node_modules/react/lib/traverseAllChildren.js ≠≠*/


/*== node_modules/react/lib/PooledClass.js ==*/
$m['react/lib/PooledClass'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var reactlibPooledClass___prodInvariant = $m['react/lib/reactProdInvariant'].exports;

var reactlibPooledClass__invariant = $m['fbjs/lib/invariant'].exports;

/**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */
var reactlibPooledClass__oneArgumentPooler = function reactlibPooledClass__oneArgumentPooler(copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};

var reactlibPooledClass__twoArgumentPooler = function reactlibPooledClass__twoArgumentPooler(a1, a2) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;
  } else {
    return new Klass(a1, a2);
  }
};

var reactlibPooledClass__threeArgumentPooler = function reactlibPooledClass__threeArgumentPooler(a1, a2, a3) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance;
  } else {
    return new Klass(a1, a2, a3);
  }
};

var reactlibPooledClass__fourArgumentPooler = function reactlibPooledClass__fourArgumentPooler(a1, a2, a3, a4) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4);
  }
};

var reactlibPooledClass__standardReleaser = function reactlibPooledClass__standardReleaser(instance) {
  var Klass = this;
  !(instance instanceof Klass) ? 'development' !== 'production' ? reactlibPooledClass__invariant(false, 'Trying to release an instance into a pool of a different type.') : reactlibPooledClass___prodInvariant('25') : void 0;
  instance.destructor();
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};

var reactlibPooledClass__DEFAULT_POOL_SIZE = 10;
var reactlibPooledClass__DEFAULT_POOLER = reactlibPooledClass__oneArgumentPooler;

/**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances.
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */
var reactlibPooledClass__addPoolingTo = function reactlibPooledClass__addPoolingTo(CopyConstructor, pooler) {
  // Casting as any so that flow ignores the actual implementation and trusts
  // it to match the type we declared
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || reactlibPooledClass__DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = reactlibPooledClass__DEFAULT_POOL_SIZE;
  }
  NewKlass.release = reactlibPooledClass__standardReleaser;
  return NewKlass;
};

var reactlibPooledClass__PooledClass = {
  addPoolingTo: reactlibPooledClass__addPoolingTo,
  oneArgumentPooler: reactlibPooledClass__oneArgumentPooler,
  twoArgumentPooler: reactlibPooledClass__twoArgumentPooler,
  threeArgumentPooler: reactlibPooledClass__threeArgumentPooler,
  fourArgumentPooler: reactlibPooledClass__fourArgumentPooler
};

$m['react/lib/PooledClass'].exports = reactlibPooledClass__PooledClass;
/*≠≠ node_modules/react/lib/PooledClass.js ≠≠*/


/*== node_modules/react/lib/ReactChildren.js ==*/
$m['react/lib/ReactChildren'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactlibReactChildren__PooledClass = $m['react/lib/PooledClass'].exports;
var reactlibReactChildren__ReactElement = $m['react/lib/ReactElement'].exports;

var reactlibReactChildren__emptyFunction = $m['fbjs/lib/emptyFunction'].exports;
var reactlibReactChildren__traverseAllChildren = $m['react/lib/traverseAllChildren'].exports;

var reactlibReactChildren__twoArgumentPooler = reactlibReactChildren__PooledClass.twoArgumentPooler;
var reactlibReactChildren__fourArgumentPooler = reactlibReactChildren__PooledClass.fourArgumentPooler;

var reactlibReactChildren__userProvidedKeyEscapeRegex = /\/+/g;
function reactlibReactChildren__escapeUserProvidedKey(text) {
  return ('' + text).replace(reactlibReactChildren__userProvidedKeyEscapeRegex, '$&/');
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * traversal. Allows avoiding binding callbacks.
 *
 * @constructor ForEachBookKeeping
 * @param {!function} forEachFunction Function to perform traversal with.
 * @param {?*} forEachContext Context to perform context with.
 */
function reactlibReactChildren__ForEachBookKeeping(forEachFunction, forEachContext) {
  this.func = forEachFunction;
  this.context = forEachContext;
  this.count = 0;
}
reactlibReactChildren__ForEachBookKeeping.prototype.destructor = function () {
  this.func = null;
  this.context = null;
  this.count = 0;
};
reactlibReactChildren__PooledClass.addPoolingTo(reactlibReactChildren__ForEachBookKeeping, reactlibReactChildren__twoArgumentPooler);

function reactlibReactChildren__forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function reactlibReactChildren__forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = reactlibReactChildren__ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
  reactlibReactChildren__traverseAllChildren(children, reactlibReactChildren__forEachSingleChild, traverseContext);
  reactlibReactChildren__ForEachBookKeeping.release(traverseContext);
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * mapping. Allows avoiding binding callbacks.
 *
 * @constructor MapBookKeeping
 * @param {!*} mapResult Object containing the ordered map of results.
 * @param {!function} mapFunction Function to perform mapping with.
 * @param {?*} mapContext Context to perform mapping with.
 */
function reactlibReactChildren__MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
  this.result = mapResult;
  this.keyPrefix = keyPrefix;
  this.func = mapFunction;
  this.context = mapContext;
  this.count = 0;
}
reactlibReactChildren__MapBookKeeping.prototype.destructor = function () {
  this.result = null;
  this.keyPrefix = null;
  this.func = null;
  this.context = null;
  this.count = 0;
};
reactlibReactChildren__PooledClass.addPoolingTo(reactlibReactChildren__MapBookKeeping, reactlibReactChildren__fourArgumentPooler);

function reactlibReactChildren__mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;

  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    reactlibReactChildren__mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, reactlibReactChildren__emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (reactlibReactChildren__ReactElement.isValidElement(mappedChild)) {
      mappedChild = reactlibReactChildren__ReactElement.cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? reactlibReactChildren__escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function reactlibReactChildren__mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = reactlibReactChildren__escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = reactlibReactChildren__MapBookKeeping.getPooled(array, escapedPrefix, func, context);
  reactlibReactChildren__traverseAllChildren(children, reactlibReactChildren__mapSingleChildIntoContext, traverseContext);
  reactlibReactChildren__MapBookKeeping.release(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function reactlibReactChildren__mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  reactlibReactChildren__mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

function reactlibReactChildren__forEachSingleChildDummy(traverseContext, child, name) {
  return null;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function reactlibReactChildren__countChildren(children, context) {
  return reactlibReactChildren__traverseAllChildren(children, reactlibReactChildren__forEachSingleChildDummy, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
 */
function reactlibReactChildren__toArray(children) {
  var result = [];
  reactlibReactChildren__mapIntoWithKeyPrefixInternal(children, result, null, reactlibReactChildren__emptyFunction.thatReturnsArgument);
  return result;
}

var reactlibReactChildren__ReactChildren = {
  forEach: reactlibReactChildren__forEachChildren,
  map: reactlibReactChildren__mapChildren,
  mapIntoWithKeyPrefixInternal: reactlibReactChildren__mapIntoWithKeyPrefixInternal,
  count: reactlibReactChildren__countChildren,
  toArray: reactlibReactChildren__toArray
};

$m['react/lib/ReactChildren'].exports = reactlibReactChildren__ReactChildren;
/*≠≠ node_modules/react/lib/ReactChildren.js ≠≠*/


/*== node_modules/react/lib/React.js ==*/
$m['react/lib/React'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactlibReact___assign = $m['object-assign'].exports;

var reactlibReact__ReactBaseClasses = $m['react/lib/ReactBaseClasses'].exports;
var reactlibReact__ReactChildren = $m['react/lib/ReactChildren'].exports;
var reactlibReact__ReactDOMFactories = $m['react/lib/ReactDOMFactories'].exports;
var reactlibReact__ReactElement = $m['react/lib/ReactElement'].exports;
var reactlibReact__ReactPropTypes = $m['react/lib/ReactPropTypes'].exports;
var reactlibReact__ReactVersion = $m['react/lib/ReactVersion'].exports;

var reactlibReact__createReactClass = $m['react/lib/createClass'].exports;
var reactlibReact__onlyChild = $m['react/lib/onlyChild'].exports;

var reactlibReact__createElement = reactlibReact__ReactElement.createElement;
var reactlibReact__createFactory = reactlibReact__ReactElement.createFactory;
var reactlibReact__cloneElement = reactlibReact__ReactElement.cloneElement;

if ('development' !== 'production') {
  var reactlibReact__lowPriorityWarning = $m['react/lib/lowPriorityWarning'].exports;
  var reactlibReact__canDefineProperty = $m['react/lib/canDefineProperty'].exports;
  var reactlibReact__ReactElementValidator = $m['react/lib/ReactElementValidator'].exports;
  var reactlibReact__didWarnPropTypesDeprecated = false;
  reactlibReact__createElement = reactlibReact__ReactElementValidator.createElement;
  reactlibReact__createFactory = reactlibReact__ReactElementValidator.createFactory;
  reactlibReact__cloneElement = reactlibReact__ReactElementValidator.cloneElement;
}

var reactlibReact____spread = reactlibReact___assign;
var reactlibReact__createMixin = function reactlibReact__createMixin(mixin) {
  return mixin;
};

if ('development' !== 'production') {
  var reactlibReact__warnedForSpread = false;
  var reactlibReact__warnedForCreateMixin = false;
  reactlibReact____spread = function reactlibReact____spread() {
    reactlibReact__lowPriorityWarning(reactlibReact__warnedForSpread, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.');
    reactlibReact__warnedForSpread = true;
    return reactlibReact___assign.apply(null, arguments);
  };

  reactlibReact__createMixin = function reactlibReact__createMixin(mixin) {
    reactlibReact__lowPriorityWarning(reactlibReact__warnedForCreateMixin, 'React.createMixin is deprecated and should not be used. ' + 'In React v16.0, it will be removed. ' + 'You can use this mixin directly instead. ' + 'See https://fb.me/createmixin-was-never-implemented for more info.');
    reactlibReact__warnedForCreateMixin = true;
    return mixin;
  };
}

var reactlibReact__React = {
  // Modern

  Children: {
    map: reactlibReact__ReactChildren.map,
    forEach: reactlibReact__ReactChildren.forEach,
    count: reactlibReact__ReactChildren.count,
    toArray: reactlibReact__ReactChildren.toArray,
    only: reactlibReact__onlyChild
  },

  Component: reactlibReact__ReactBaseClasses.Component,
  PureComponent: reactlibReact__ReactBaseClasses.PureComponent,

  createElement: reactlibReact__createElement,
  cloneElement: reactlibReact__cloneElement,
  isValidElement: reactlibReact__ReactElement.isValidElement,

  // Classic

  PropTypes: reactlibReact__ReactPropTypes,
  createClass: reactlibReact__createReactClass,
  createFactory: reactlibReact__createFactory,
  createMixin: reactlibReact__createMixin,

  // This looks DOM specific but these are actually isomorphic helpers
  // since they are just generating DOM strings.
  DOM: reactlibReact__ReactDOMFactories,

  version: reactlibReact__ReactVersion,

  // Deprecated hook for JSX spread, don't use this for anything.
  __spread: reactlibReact____spread
};

if ('development' !== 'production') {
  var reactlibReact__warnedForCreateClass = false;
  if (reactlibReact__canDefineProperty) {
    Object.defineProperty(reactlibReact__React, 'PropTypes', {
      get: function get() {
        reactlibReact__lowPriorityWarning(reactlibReact__didWarnPropTypesDeprecated, 'Accessing PropTypes via the main React package is deprecated,' + ' and will be removed in  React v16.0.' + ' Use the latest available v15.* prop-types package from npm instead.' + ' For info on usage, compatibility, migration and more, see ' + 'https://fb.me/prop-types-docs');
        reactlibReact__didWarnPropTypesDeprecated = true;
        return reactlibReact__ReactPropTypes;
      }
    });

    Object.defineProperty(reactlibReact__React, 'createClass', {
      get: function get() {
        reactlibReact__lowPriorityWarning(reactlibReact__warnedForCreateClass, 'Accessing createClass via the main React package is deprecated,' + ' and will be removed in React v16.0.' + " Use a plain JavaScript class instead. If you're not yet " + 'ready to migrate, create-react-class v15.* is available ' + 'on npm as a temporary, drop-in replacement. ' + 'For more info see https://fb.me/react-create-class');
        reactlibReact__warnedForCreateClass = true;
        return reactlibReact__createReactClass;
      }
    });
  }

  // React.DOM factories are deprecated. Wrap these methods so that
  // invocations of the React.DOM namespace and alert users to switch
  // to the `react-dom-factories` package.
  reactlibReact__React.DOM = {};
  var reactlibReact__warnedForFactories = false;
  Object.keys(reactlibReact__ReactDOMFactories).forEach(function (factory) {
    reactlibReact__React.DOM[factory] = function () {
      if (!reactlibReact__warnedForFactories) {
        reactlibReact__lowPriorityWarning(false, 'Accessing factories like React.DOM.%s has been deprecated ' + 'and will be removed in v16.0+. Use the ' + 'react-dom-factories package instead. ' + ' Version 1.0 provides a drop-in replacement.' + ' For more info, see https://fb.me/react-dom-factories', factory);
        reactlibReact__warnedForFactories = true;
      }
      return reactlibReact__ReactDOMFactories[factory].apply(reactlibReact__ReactDOMFactories, arguments);
    };
  });
}

$m['react/lib/React'].exports = reactlibReact__React;
/*≠≠ node_modules/react/lib/React.js ≠≠*/


/*== node_modules/@yr/component/nod...eact-dom/lib/ReactNodeTypes.js ==*/
$m['react-dom/lib/ReactNodeTypes'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var reactdomlibReactNodeTypes___prodInvariant = $m['react-dom/lib/reactProdInvariant'].exports;

var reactdomlibReactNodeTypes__React = $m['react/lib/React'].exports;

var reactdomlibReactNodeTypes__invariant = $m['fbjs/lib/invariant'].exports;

var reactdomlibReactNodeTypes__ReactNodeTypes = {
  HOST: 0,
  COMPOSITE: 1,
  EMPTY: 2,

  getType: function (node) {
    if (node === null || node === false) {
      return reactdomlibReactNodeTypes__ReactNodeTypes.EMPTY;
    } else if (reactdomlibReactNodeTypes__React.isValidElement(node)) {
      if (typeof node.type === 'function') {
        return reactdomlibReactNodeTypes__ReactNodeTypes.COMPOSITE;
      } else {
        return reactdomlibReactNodeTypes__ReactNodeTypes.HOST;
      }
    }
    !false ? 'development' !== 'production' ? reactdomlibReactNodeTypes__invariant(false, 'Unexpected node: %s', node) : reactdomlibReactNodeTypes___prodInvariant('26', node) : void 0;
  }
};

$m['react-dom/lib/ReactNodeTypes'].exports = reactdomlibReactNodeTypes__ReactNodeTypes;
/*≠≠ node_modules/@yr/component/nod...eact-dom/lib/ReactNodeTypes.js ≠≠*/


/*== node_modules/@yr/component/nod...b/ReactComponentEnvironment.js ==*/
$m['react-dom/lib/ReactComponentEnvironment'] = { exports: {} };
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var reactdomlibReactComponentEnvironment___prodInvariant = $m['react-dom/lib/reactProdInvariant'].exports;

var reactdomlibReactComponentEnvironment__invariant = $m['fbjs/lib/invariant'].exports;

var reactdomlibReactComponentEnvironment__injected = false;

var reactdomlibReactComponentEnvironment__ReactComponentEnvironment = {
  /**
   * Optionally injectable hook for swapping out mount images in the middle of
   * the tree.
   */
  replaceNodeWithMarkup: null,

  /**
   * Optionally injectable hook for processing a queue of child updates. Will
   * later move into MultiChildComponents.
   */
  processChildrenUpdates: null,

  injection: {
    injectEnvironment: function (environment) {
      !!reactdomlibReactComponentEnvironment__injected ? 'development' !== 'production' ? reactdomlibReactComponentEnvironment__invariant(false, 'ReactCompositeComponent: injectEnvironment() can only be called once.') : reactdomlibReactComponentEnvironment___prodInvariant('104') : void 0;
      reactdomlibReactComponentEnvironment__ReactComponentEnvironment.replaceNodeWithMarkup = environment.replaceNodeWithMarkup;
      reactdomlibReactComponentEnvironment__ReactComponentEnvironment.processChildrenUpdates = environment.processChildrenUpdates;
      reactdomlibReactComponentEnvironment__injected = true;
    }
  }
};

$m['react-dom/lib/ReactComponentEnvironment'].exports = reactdomlibReactComponentEnvironment__ReactComponentEnvironment;
/*≠≠ node_modules/@yr/component/nod...b/ReactComponentEnvironment.js ≠≠*/


/*== node_modules/@yr/component/nod...lib/ReactCompositeComponent.js ==*/
$m['react-dom/lib/ReactCompositeComponent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactCompositeComponent___prodInvariant = $m['react-dom/lib/reactProdInvariant'].exports,
    reactdomlibReactCompositeComponent___assign = $m['object-assign'].exports;

var reactdomlibReactCompositeComponent__React = $m['react/lib/React'].exports;
var reactdomlibReactCompositeComponent__ReactComponentEnvironment = $m['react-dom/lib/ReactComponentEnvironment'].exports;
var reactdomlibReactCompositeComponent__ReactCurrentOwner = $m['react/lib/ReactCurrentOwner'].exports;
var reactdomlibReactCompositeComponent__ReactErrorUtils = $m['react-dom/lib/ReactErrorUtils'].exports;
var reactdomlibReactCompositeComponent__ReactInstanceMap = $m['react-dom/lib/ReactInstanceMap'].exports;
var reactdomlibReactCompositeComponent__ReactInstrumentation = $m['react-dom/lib/ReactInstrumentation'].exports;
var reactdomlibReactCompositeComponent__ReactNodeTypes = $m['react-dom/lib/ReactNodeTypes'].exports;
var reactdomlibReactCompositeComponent__ReactReconciler = $m['react-dom/lib/ReactReconciler'].exports;

if ('development' !== 'production') {
  var reactdomlibReactCompositeComponent__checkReactTypeSpec = $m['react-dom/lib/checkReactTypeSpec'].exports;
}

var reactdomlibReactCompositeComponent__emptyObject = $m['fbjs/lib/emptyObject'].exports;
var reactdomlibReactCompositeComponent__invariant = $m['fbjs/lib/invariant'].exports;
var reactdomlibReactCompositeComponent__shallowEqual = $m['fbjs/lib/shallowEqual'].exports;
var reactdomlibReactCompositeComponent__shouldUpdateReactComponent = $m['react-dom/lib/shouldUpdateReactComponent'].exports;
var reactdomlibReactCompositeComponent__warning = $m['fbjs/lib/warning'].exports;

var reactdomlibReactCompositeComponent__CompositeTypes = {
  ImpureClass: 0,
  PureClass: 1,
  StatelessFunctional: 2
};

function reactdomlibReactCompositeComponent__StatelessComponent(Component) {}
reactdomlibReactCompositeComponent__StatelessComponent.prototype.render = function () {
  var Component = reactdomlibReactCompositeComponent__ReactInstanceMap.get(this)._currentElement.type;
  var element = Component(this.props, this.context, this.updater);
  reactdomlibReactCompositeComponent__warnIfInvalidElement(Component, element);
  return element;
};

function reactdomlibReactCompositeComponent__warnIfInvalidElement(Component, element) {
  if ('development' !== 'production') {
    'development' !== 'production' ? reactdomlibReactCompositeComponent__warning(element === null || element === false || reactdomlibReactCompositeComponent__React.isValidElement(element), '%s(...): A valid React element (or null) must be returned. You may have ' + 'returned undefined, an array or some other invalid object.', Component.displayName || Component.name || 'Component') : void 0;
    'development' !== 'production' ? reactdomlibReactCompositeComponent__warning(!Component.childContextTypes, '%s(...): childContextTypes cannot be defined on a functional component.', Component.displayName || Component.name || 'Component') : void 0;
  }
}

function reactdomlibReactCompositeComponent__shouldConstruct(Component) {
  return !!(Component.prototype && Component.prototype.isReactComponent);
}

function reactdomlibReactCompositeComponent__isPureComponent(Component) {
  return !!(Component.prototype && Component.prototype.isPureReactComponent);
}

// Separated into a function to contain deoptimizations caused by try/finally.
function reactdomlibReactCompositeComponent__measureLifeCyclePerf(fn, debugID, timerType) {
  if (debugID === 0) {
    // Top-level wrappers (see ReactMount) and empty components (see
    // ReactDOMEmptyComponent) are invisible to hooks and devtools.
    // Both are implementation details that should go away in the future.
    return fn();
  }

  reactdomlibReactCompositeComponent__ReactInstrumentation.debugTool.onBeginLifeCycleTimer(debugID, timerType);
  try {
    return fn();
  } finally {
    reactdomlibReactCompositeComponent__ReactInstrumentation.debugTool.onEndLifeCycleTimer(debugID, timerType);
  }
}

/**
 * ------------------ The Life-Cycle of a Composite Component ------------------
 *
 * - constructor: Initialization of state. The instance is now retained.
 *   - componentWillMount
 *   - render
 *   - [children's constructors]
 *     - [children's componentWillMount and render]
 *     - [children's componentDidMount]
 *     - componentDidMount
 *
 *       Update Phases:
 *       - componentWillReceiveProps (only called if parent updated)
 *       - shouldComponentUpdate
 *         - componentWillUpdate
 *           - render
 *           - [children's constructors or receive props phases]
 *         - componentDidUpdate
 *
 *     - componentWillUnmount
 *     - [children's componentWillUnmount]
 *   - [children destroyed]
 * - (destroyed): The instance is now blank, released by React and ready for GC.
 *
 * -----------------------------------------------------------------------------
 */

/**
 * An incrementing ID assigned to each component when it is mounted. This is
 * used to enforce the order in which `ReactUpdates` updates dirty components.
 *
 * @private
 */
var reactdomlibReactCompositeComponent__nextMountID = 1;

/**
 * @lends {ReactCompositeComponent.prototype}
 */
var reactdomlibReactCompositeComponent__ReactCompositeComponent = {
  /**
   * Base constructor for all composite component.
   *
   * @param {ReactElement} element
   * @final
   * @internal
   */
  construct: function (element) {
    this._currentElement = element;
    this._rootNodeID = 0;
    this._compositeType = null;
    this._instance = null;
    this._hostParent = null;
    this._hostContainerInfo = null;

    // See ReactUpdateQueue
    this._updateBatchNumber = null;
    this._pendingElement = null;
    this._pendingStateQueue = null;
    this._pendingReplaceState = false;
    this._pendingForceUpdate = false;

    this._renderedNodeType = null;
    this._renderedComponent = null;
    this._context = null;
    this._mountOrder = 0;
    this._topLevelWrapper = null;

    // See ReactUpdates and ReactUpdateQueue.
    this._pendingCallbacks = null;

    // ComponentWillUnmount shall only be called once
    this._calledComponentWillUnmount = false;

    if ('development' !== 'production') {
      this._warnedAboutRefsInRender = false;
    }
  },

  /**
   * Initializes the component, renders markup, and registers event listeners.
   *
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {?object} hostParent
   * @param {?object} hostContainerInfo
   * @param {?object} context
   * @return {?string} Rendered markup to be inserted into the DOM.
   * @final
   * @internal
   */
  mountComponent: function (transaction, hostParent, hostContainerInfo, context) {
    var _this = this;

    this._context = context;
    this._mountOrder = reactdomlibReactCompositeComponent__nextMountID++;
    this._hostParent = hostParent;
    this._hostContainerInfo = hostContainerInfo;

    var publicProps = this._currentElement.props;
    var publicContext = this._processContext(context);

    var Component = this._currentElement.type;

    var updateQueue = transaction.getUpdateQueue();

    // Initialize the public class
    var doConstruct = reactdomlibReactCompositeComponent__shouldConstruct(Component);
    var inst = this._constructComponent(doConstruct, publicProps, publicContext, updateQueue);
    var renderedElement;

    // Support functional components
    if (!doConstruct && (inst == null || inst.render == null)) {
      renderedElement = inst;
      reactdomlibReactCompositeComponent__warnIfInvalidElement(Component, renderedElement);
      !(inst === null || inst === false || reactdomlibReactCompositeComponent__React.isValidElement(inst)) ? 'development' !== 'production' ? reactdomlibReactCompositeComponent__invariant(false, '%s(...): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.', Component.displayName || Component.name || 'Component') : reactdomlibReactCompositeComponent___prodInvariant('105', Component.displayName || Component.name || 'Component') : void 0;
      inst = new reactdomlibReactCompositeComponent__StatelessComponent(Component);
      this._compositeType = reactdomlibReactCompositeComponent__CompositeTypes.StatelessFunctional;
    } else {
      if (reactdomlibReactCompositeComponent__isPureComponent(Component)) {
        this._compositeType = reactdomlibReactCompositeComponent__CompositeTypes.PureClass;
      } else {
        this._compositeType = reactdomlibReactCompositeComponent__CompositeTypes.ImpureClass;
      }
    }

    if ('development' !== 'production') {
      // This will throw later in _renderValidatedComponent, but add an early
      // warning now to help debugging
      if (inst.render == null) {
        'development' !== 'production' ? reactdomlibReactCompositeComponent__warning(false, '%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render`.', Component.displayName || Component.name || 'Component') : void 0;
      }

      var propsMutated = inst.props !== publicProps;
      var componentName = Component.displayName || Component.name || 'Component';

      'development' !== 'production' ? reactdomlibReactCompositeComponent__warning(inst.props === undefined || !propsMutated, '%s(...): When calling super() in `%s`, make sure to pass ' + "up the same props that your component's constructor was passed.", componentName, componentName) : void 0;
    }

    // These should be set up in the constructor, but as a convenience for
    // simpler class abstractions, we set them up after the fact.
    inst.props = publicProps;
    inst.context = publicContext;
    inst.refs = reactdomlibReactCompositeComponent__emptyObject;
    inst.updater = updateQueue;

    this._instance = inst;

    // Store a reference from the instance back to the internal representation
    reactdomlibReactCompositeComponent__ReactInstanceMap.set(inst, this);

    if ('development' !== 'production') {
      // Since plain JS classes are defined without any special initialization
      // logic, we can not catch common errors early. Therefore, we have to
      // catch them here, at initialization time, instead.
      'development' !== 'production' ? reactdomlibReactCompositeComponent__warning(!inst.getInitialState || inst.getInitialState.isReactClassApproved || inst.state, 'getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', this.getName() || 'a component') : void 0;
      'development' !== 'production' ? reactdomlibReactCompositeComponent__warning(!inst.getDefaultProps || inst.getDefaultProps.isReactClassApproved, 'getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', this.getName() || 'a component') : void 0;
      'development' !== 'production' ? reactdomlibReactCompositeComponent__warning(!inst.propTypes, 'propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', this.getName() || 'a component') : void 0;
      'development' !== 'production' ? reactdomlibReactCompositeComponent__warning(!inst.contextTypes, 'contextTypes was defined as an instance property on %s. Use a ' + 'static property to define contextTypes instead.', this.getName() || 'a component') : void 0;
      'development' !== 'production' ? reactdomlibReactCompositeComponent__warning(typeof inst.componentShouldUpdate !== 'function', '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', this.getName() || 'A component') : void 0;
      'development' !== 'production' ? reactdomlibReactCompositeComponent__warning(typeof inst.componentDidUnmount !== 'function', '%s has a method called ' + 'componentDidUnmount(). But there is no such lifecycle method. ' + 'Did you mean componentWillUnmount()?', this.getName() || 'A component') : void 0;
      'development' !== 'production' ? reactdomlibReactCompositeComponent__warning(typeof inst.componentWillRecieveProps !== 'function', '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', this.getName() || 'A component') : void 0;
    }

    var initialState = inst.state;
    if (initialState === undefined) {
      inst.state = initialState = null;
    }
    !(typeof initialState === 'object' && !Array.isArray(initialState)) ? 'development' !== 'production' ? reactdomlibReactCompositeComponent__invariant(false, '%s.state: must be set to an object or null', this.getName() || 'ReactCompositeComponent') : reactdomlibReactCompositeComponent___prodInvariant('106', this.getName() || 'ReactCompositeComponent') : void 0;

    this._pendingStateQueue = null;
    this._pendingReplaceState = false;
    this._pendingForceUpdate = false;

    var markup;
    if (inst.unstable_handleError) {
      markup = this.performInitialMountWithErrorHandling(renderedElement, hostParent, hostContainerInfo, transaction, context);
    } else {
      markup = this.performInitialMount(renderedElement, hostParent, hostContainerInfo, transaction, context);
    }

    if (inst.componentDidMount) {
      if ('development' !== 'production') {
        transaction.getReactMountReady().enqueue(function () {
          reactdomlibReactCompositeComponent__measureLifeCyclePerf(function () {
            return inst.componentDidMount();
          }, _this._debugID, 'componentDidMount');
        });
      } else {
        transaction.getReactMountReady().enqueue(inst.componentDidMount, inst);
      }
    }

    return markup;
  },

  _constructComponent: function (doConstruct, publicProps, publicContext, updateQueue) {
    if ('development' !== 'production') {
      reactdomlibReactCompositeComponent__ReactCurrentOwner.current = this;
      try {
        return this._constructComponentWithoutOwner(doConstruct, publicProps, publicContext, updateQueue);
      } finally {
        reactdomlibReactCompositeComponent__ReactCurrentOwner.current = null;
      }
    } else {
      return this._constructComponentWithoutOwner(doConstruct, publicProps, publicContext, updateQueue);
    }
  },

  _constructComponentWithoutOwner: function (doConstruct, publicProps, publicContext, updateQueue) {
    var Component = this._currentElement.type;

    if (doConstruct) {
      if ('development' !== 'production') {
        return reactdomlibReactCompositeComponent__measureLifeCyclePerf(function () {
          return new Component(publicProps, publicContext, updateQueue);
        }, this._debugID, 'ctor');
      } else {
        return new Component(publicProps, publicContext, updateQueue);
      }
    }

    // This can still be an instance in case of factory components
    // but we'll count this as time spent rendering as the more common case.
    if ('development' !== 'production') {
      return reactdomlibReactCompositeComponent__measureLifeCyclePerf(function () {
        return Component(publicProps, publicContext, updateQueue);
      }, this._debugID, 'render');
    } else {
      return Component(publicProps, publicContext, updateQueue);
    }
  },

  performInitialMountWithErrorHandling: function (renderedElement, hostParent, hostContainerInfo, transaction, context) {
    var markup;
    var checkpoint = transaction.checkpoint();
    try {
      markup = this.performInitialMount(renderedElement, hostParent, hostContainerInfo, transaction, context);
    } catch (e) {
      // Roll back to checkpoint, handle error (which may add items to the transaction), and take a new checkpoint
      transaction.rollback(checkpoint);
      this._instance.unstable_handleError(e);
      if (this._pendingStateQueue) {
        this._instance.state = this._processPendingState(this._instance.props, this._instance.context);
      }
      checkpoint = transaction.checkpoint();

      this._renderedComponent.unmountComponent(true);
      transaction.rollback(checkpoint);

      // Try again - we've informed the component about the error, so they can render an error message this time.
      // If this throws again, the error will bubble up (and can be caught by a higher error boundary).
      markup = this.performInitialMount(renderedElement, hostParent, hostContainerInfo, transaction, context);
    }
    return markup;
  },

  performInitialMount: function (renderedElement, hostParent, hostContainerInfo, transaction, context) {
    var inst = this._instance;

    var debugID = 0;
    if ('development' !== 'production') {
      debugID = this._debugID;
    }

    if (inst.componentWillMount) {
      if ('development' !== 'production') {
        reactdomlibReactCompositeComponent__measureLifeCyclePerf(function () {
          return inst.componentWillMount();
        }, debugID, 'componentWillMount');
      } else {
        inst.componentWillMount();
      }
      // When mounting, calls to `setState` by `componentWillMount` will set
      // `this._pendingStateQueue` without triggering a re-render.
      if (this._pendingStateQueue) {
        inst.state = this._processPendingState(inst.props, inst.context);
      }
    }

    // If not a stateless component, we now render
    if (renderedElement === undefined) {
      renderedElement = this._renderValidatedComponent();
    }

    var nodeType = reactdomlibReactCompositeComponent__ReactNodeTypes.getType(renderedElement);
    this._renderedNodeType = nodeType;
    var child = this._instantiateReactComponent(renderedElement, nodeType !== reactdomlibReactCompositeComponent__ReactNodeTypes.EMPTY /* shouldHaveDebugID */
    );
    this._renderedComponent = child;

    var markup = reactdomlibReactCompositeComponent__ReactReconciler.mountComponent(child, transaction, hostParent, hostContainerInfo, this._processChildContext(context), debugID);

    if ('development' !== 'production') {
      if (debugID !== 0) {
        var childDebugIDs = child._debugID !== 0 ? [child._debugID] : [];
        reactdomlibReactCompositeComponent__ReactInstrumentation.debugTool.onSetChildren(debugID, childDebugIDs);
      }
    }

    return markup;
  },

  getHostNode: function () {
    return reactdomlibReactCompositeComponent__ReactReconciler.getHostNode(this._renderedComponent);
  },

  /**
   * Releases any resources allocated by `mountComponent`.
   *
   * @final
   * @internal
   */
  unmountComponent: function (safely) {
    if (!this._renderedComponent) {
      return;
    }

    var inst = this._instance;

    if (inst.componentWillUnmount && !inst._calledComponentWillUnmount) {
      inst._calledComponentWillUnmount = true;

      if (safely) {
        var name = this.getName() + '.componentWillUnmount()';
        reactdomlibReactCompositeComponent__ReactErrorUtils.invokeGuardedCallback(name, inst.componentWillUnmount.bind(inst));
      } else {
        if ('development' !== 'production') {
          reactdomlibReactCompositeComponent__measureLifeCyclePerf(function () {
            return inst.componentWillUnmount();
          }, this._debugID, 'componentWillUnmount');
        } else {
          inst.componentWillUnmount();
        }
      }
    }

    if (this._renderedComponent) {
      reactdomlibReactCompositeComponent__ReactReconciler.unmountComponent(this._renderedComponent, safely);
      this._renderedNodeType = null;
      this._renderedComponent = null;
      this._instance = null;
    }

    // Reset pending fields
    // Even if this component is scheduled for another update in ReactUpdates,
    // it would still be ignored because these fields are reset.
    this._pendingStateQueue = null;
    this._pendingReplaceState = false;
    this._pendingForceUpdate = false;
    this._pendingCallbacks = null;
    this._pendingElement = null;

    // These fields do not really need to be reset since this object is no
    // longer accessible.
    this._context = null;
    this._rootNodeID = 0;
    this._topLevelWrapper = null;

    // Delete the reference from the instance to this internal representation
    // which allow the internals to be properly cleaned up even if the user
    // leaks a reference to the public instance.
    reactdomlibReactCompositeComponent__ReactInstanceMap.remove(inst);

    // Some existing components rely on inst.props even after they've been
    // destroyed (in event handlers).
    // TODO: inst.props = null;
    // TODO: inst.state = null;
    // TODO: inst.context = null;
  },

  /**
   * Filters the context object to only contain keys specified in
   * `contextTypes`
   *
   * @param {object} context
   * @return {?object}
   * @private
   */
  _maskContext: function (context) {
    var Component = this._currentElement.type;
    var contextTypes = Component.contextTypes;
    if (!contextTypes) {
      return reactdomlibReactCompositeComponent__emptyObject;
    }
    var maskedContext = {};
    for (var contextName in contextTypes) {
      maskedContext[contextName] = context[contextName];
    }
    return maskedContext;
  },

  /**
   * Filters the context object to only contain keys specified in
   * `contextTypes`, and asserts that they are valid.
   *
   * @param {object} context
   * @return {?object}
   * @private
   */
  _processContext: function (context) {
    var maskedContext = this._maskContext(context);
    if ('development' !== 'production') {
      var Component = this._currentElement.type;
      if (Component.contextTypes) {
        this._checkContextTypes(Component.contextTypes, maskedContext, 'context');
      }
    }
    return maskedContext;
  },

  /**
   * @param {object} currentContext
   * @return {object}
   * @private
   */
  _processChildContext: function (currentContext) {
    var Component = this._currentElement.type;
    var inst = this._instance;
    var childContext;

    if (inst.getChildContext) {
      if ('development' !== 'production') {
        reactdomlibReactCompositeComponent__ReactInstrumentation.debugTool.onBeginProcessingChildContext();
        try {
          childContext = inst.getChildContext();
        } finally {
          reactdomlibReactCompositeComponent__ReactInstrumentation.debugTool.onEndProcessingChildContext();
        }
      } else {
        childContext = inst.getChildContext();
      }
    }

    if (childContext) {
      !(typeof Component.childContextTypes === 'object') ? 'development' !== 'production' ? reactdomlibReactCompositeComponent__invariant(false, '%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().', this.getName() || 'ReactCompositeComponent') : reactdomlibReactCompositeComponent___prodInvariant('107', this.getName() || 'ReactCompositeComponent') : void 0;
      if ('development' !== 'production') {
        this._checkContextTypes(Component.childContextTypes, childContext, 'child context');
      }
      for (var name in childContext) {
        !(name in Component.childContextTypes) ? 'development' !== 'production' ? reactdomlibReactCompositeComponent__invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', this.getName() || 'ReactCompositeComponent', name) : reactdomlibReactCompositeComponent___prodInvariant('108', this.getName() || 'ReactCompositeComponent', name) : void 0;
      }
      return reactdomlibReactCompositeComponent___assign({}, currentContext, childContext);
    }
    return currentContext;
  },

  /**
   * Assert that the context types are valid
   *
   * @param {object} typeSpecs Map of context field to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @private
   */
  _checkContextTypes: function (typeSpecs, values, location) {
    if ('development' !== 'production') {
      reactdomlibReactCompositeComponent__checkReactTypeSpec(typeSpecs, values, location, this.getName(), null, this._debugID);
    }
  },

  receiveComponent: function (nextElement, transaction, nextContext) {
    var prevElement = this._currentElement;
    var prevContext = this._context;

    this._pendingElement = null;

    this.updateComponent(transaction, prevElement, nextElement, prevContext, nextContext);
  },

  /**
   * If any of `_pendingElement`, `_pendingStateQueue`, or `_pendingForceUpdate`
   * is set, update the component.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */
  performUpdateIfNecessary: function (transaction) {
    if (this._pendingElement != null) {
      reactdomlibReactCompositeComponent__ReactReconciler.receiveComponent(this, this._pendingElement, transaction, this._context);
    } else if (this._pendingStateQueue !== null || this._pendingForceUpdate) {
      this.updateComponent(transaction, this._currentElement, this._currentElement, this._context, this._context);
    } else {
      this._updateBatchNumber = null;
    }
  },

  /**
   * Perform an update to a mounted component. The componentWillReceiveProps and
   * shouldComponentUpdate methods are called, then (assuming the update isn't
   * skipped) the remaining update lifecycle methods are called and the DOM
   * representation is updated.
   *
   * By default, this implements React's rendering and reconciliation algorithm.
   * Sophisticated clients may wish to override this.
   *
   * @param {ReactReconcileTransaction} transaction
   * @param {ReactElement} prevParentElement
   * @param {ReactElement} nextParentElement
   * @internal
   * @overridable
   */
  updateComponent: function (transaction, prevParentElement, nextParentElement, prevUnmaskedContext, nextUnmaskedContext) {
    var inst = this._instance;
    !(inst != null) ? 'development' !== 'production' ? reactdomlibReactCompositeComponent__invariant(false, 'Attempted to update component `%s` that has already been unmounted (or failed to mount).', this.getName() || 'ReactCompositeComponent') : reactdomlibReactCompositeComponent___prodInvariant('136', this.getName() || 'ReactCompositeComponent') : void 0;

    var willReceive = false;
    var nextContext;

    // Determine if the context has changed or not
    if (this._context === nextUnmaskedContext) {
      nextContext = inst.context;
    } else {
      nextContext = this._processContext(nextUnmaskedContext);
      willReceive = true;
    }

    var prevProps = prevParentElement.props;
    var nextProps = nextParentElement.props;

    // Not a simple state update but a props update
    if (prevParentElement !== nextParentElement) {
      willReceive = true;
    }

    // An update here will schedule an update but immediately set
    // _pendingStateQueue which will ensure that any state updates gets
    // immediately reconciled instead of waiting for the next batch.
    if (willReceive && inst.componentWillReceiveProps) {
      if ('development' !== 'production') {
        reactdomlibReactCompositeComponent__measureLifeCyclePerf(function () {
          return inst.componentWillReceiveProps(nextProps, nextContext);
        }, this._debugID, 'componentWillReceiveProps');
      } else {
        inst.componentWillReceiveProps(nextProps, nextContext);
      }
    }

    var nextState = this._processPendingState(nextProps, nextContext);
    var shouldUpdate = true;

    if (!this._pendingForceUpdate) {
      if (inst.shouldComponentUpdate) {
        if ('development' !== 'production') {
          shouldUpdate = reactdomlibReactCompositeComponent__measureLifeCyclePerf(function () {
            return inst.shouldComponentUpdate(nextProps, nextState, nextContext);
          }, this._debugID, 'shouldComponentUpdate');
        } else {
          shouldUpdate = inst.shouldComponentUpdate(nextProps, nextState, nextContext);
        }
      } else {
        if (this._compositeType === reactdomlibReactCompositeComponent__CompositeTypes.PureClass) {
          shouldUpdate = !reactdomlibReactCompositeComponent__shallowEqual(prevProps, nextProps) || !reactdomlibReactCompositeComponent__shallowEqual(inst.state, nextState);
        }
      }
    }

    if ('development' !== 'production') {
      'development' !== 'production' ? reactdomlibReactCompositeComponent__warning(shouldUpdate !== undefined, '%s.shouldComponentUpdate(): Returned undefined instead of a ' + 'boolean value. Make sure to return true or false.', this.getName() || 'ReactCompositeComponent') : void 0;
    }

    this._updateBatchNumber = null;
    if (shouldUpdate) {
      this._pendingForceUpdate = false;
      // Will set `this.props`, `this.state` and `this.context`.
      this._performComponentUpdate(nextParentElement, nextProps, nextState, nextContext, transaction, nextUnmaskedContext);
    } else {
      // If it's determined that a component should not update, we still want
      // to set props and state but we shortcut the rest of the update.
      this._currentElement = nextParentElement;
      this._context = nextUnmaskedContext;
      inst.props = nextProps;
      inst.state = nextState;
      inst.context = nextContext;
    }
  },

  _processPendingState: function (props, context) {
    var inst = this._instance;
    var queue = this._pendingStateQueue;
    var replace = this._pendingReplaceState;
    this._pendingReplaceState = false;
    this._pendingStateQueue = null;

    if (!queue) {
      return inst.state;
    }

    if (replace && queue.length === 1) {
      return queue[0];
    }

    var nextState = reactdomlibReactCompositeComponent___assign({}, replace ? queue[0] : inst.state);
    for (var i = replace ? 1 : 0; i < queue.length; i++) {
      var partial = queue[i];
      reactdomlibReactCompositeComponent___assign(nextState, typeof partial === 'function' ? partial.call(inst, nextState, props, context) : partial);
    }

    return nextState;
  },

  /**
   * Merges new props and state, notifies delegate methods of update and
   * performs update.
   *
   * @param {ReactElement} nextElement Next element
   * @param {object} nextProps Next public object to set as properties.
   * @param {?object} nextState Next object to set as state.
   * @param {?object} nextContext Next public object to set as context.
   * @param {ReactReconcileTransaction} transaction
   * @param {?object} unmaskedContext
   * @private
   */
  _performComponentUpdate: function (nextElement, nextProps, nextState, nextContext, transaction, unmaskedContext) {
    var _this2 = this;

    var inst = this._instance;

    var hasComponentDidUpdate = Boolean(inst.componentDidUpdate);
    var prevProps;
    var prevState;
    var prevContext;
    if (hasComponentDidUpdate) {
      prevProps = inst.props;
      prevState = inst.state;
      prevContext = inst.context;
    }

    if (inst.componentWillUpdate) {
      if ('development' !== 'production') {
        reactdomlibReactCompositeComponent__measureLifeCyclePerf(function () {
          return inst.componentWillUpdate(nextProps, nextState, nextContext);
        }, this._debugID, 'componentWillUpdate');
      } else {
        inst.componentWillUpdate(nextProps, nextState, nextContext);
      }
    }

    this._currentElement = nextElement;
    this._context = unmaskedContext;
    inst.props = nextProps;
    inst.state = nextState;
    inst.context = nextContext;

    this._updateRenderedComponent(transaction, unmaskedContext);

    if (hasComponentDidUpdate) {
      if ('development' !== 'production') {
        transaction.getReactMountReady().enqueue(function () {
          reactdomlibReactCompositeComponent__measureLifeCyclePerf(inst.componentDidUpdate.bind(inst, prevProps, prevState, prevContext), _this2._debugID, 'componentDidUpdate');
        });
      } else {
        transaction.getReactMountReady().enqueue(inst.componentDidUpdate.bind(inst, prevProps, prevState, prevContext), inst);
      }
    }
  },

  /**
   * Call the component's `render` method and update the DOM accordingly.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */
  _updateRenderedComponent: function (transaction, context) {
    var prevComponentInstance = this._renderedComponent;
    var prevRenderedElement = prevComponentInstance._currentElement;
    var nextRenderedElement = this._renderValidatedComponent();

    var debugID = 0;
    if ('development' !== 'production') {
      debugID = this._debugID;
    }

    if (reactdomlibReactCompositeComponent__shouldUpdateReactComponent(prevRenderedElement, nextRenderedElement)) {
      reactdomlibReactCompositeComponent__ReactReconciler.receiveComponent(prevComponentInstance, nextRenderedElement, transaction, this._processChildContext(context));
    } else {
      var oldHostNode = reactdomlibReactCompositeComponent__ReactReconciler.getHostNode(prevComponentInstance);
      reactdomlibReactCompositeComponent__ReactReconciler.unmountComponent(prevComponentInstance, false);

      var nodeType = reactdomlibReactCompositeComponent__ReactNodeTypes.getType(nextRenderedElement);
      this._renderedNodeType = nodeType;
      var child = this._instantiateReactComponent(nextRenderedElement, nodeType !== reactdomlibReactCompositeComponent__ReactNodeTypes.EMPTY /* shouldHaveDebugID */
      );
      this._renderedComponent = child;

      var nextMarkup = reactdomlibReactCompositeComponent__ReactReconciler.mountComponent(child, transaction, this._hostParent, this._hostContainerInfo, this._processChildContext(context), debugID);

      if ('development' !== 'production') {
        if (debugID !== 0) {
          var childDebugIDs = child._debugID !== 0 ? [child._debugID] : [];
          reactdomlibReactCompositeComponent__ReactInstrumentation.debugTool.onSetChildren(debugID, childDebugIDs);
        }
      }

      this._replaceNodeWithMarkup(oldHostNode, nextMarkup, prevComponentInstance);
    }
  },

  /**
   * Overridden in shallow rendering.
   *
   * @protected
   */
  _replaceNodeWithMarkup: function (oldHostNode, nextMarkup, prevInstance) {
    reactdomlibReactCompositeComponent__ReactComponentEnvironment.replaceNodeWithMarkup(oldHostNode, nextMarkup, prevInstance);
  },

  /**
   * @protected
   */
  _renderValidatedComponentWithoutOwnerOrContext: function () {
    var inst = this._instance;
    var renderedElement;

    if ('development' !== 'production') {
      renderedElement = reactdomlibReactCompositeComponent__measureLifeCyclePerf(function () {
        return inst.render();
      }, this._debugID, 'render');
    } else {
      renderedElement = inst.render();
    }

    if ('development' !== 'production') {
      // We allow auto-mocks to proceed as if they're returning null.
      if (renderedElement === undefined && inst.render._isMockFunction) {
        // This is probably bad practice. Consider warning here and
        // deprecating this convenience.
        renderedElement = null;
      }
    }

    return renderedElement;
  },

  /**
   * @private
   */
  _renderValidatedComponent: function () {
    var renderedElement;
    if ('development' !== 'production' || this._compositeType !== reactdomlibReactCompositeComponent__CompositeTypes.StatelessFunctional) {
      reactdomlibReactCompositeComponent__ReactCurrentOwner.current = this;
      try {
        renderedElement = this._renderValidatedComponentWithoutOwnerOrContext();
      } finally {
        reactdomlibReactCompositeComponent__ReactCurrentOwner.current = null;
      }
    } else {
      renderedElement = this._renderValidatedComponentWithoutOwnerOrContext();
    }
    !(
    // TODO: An `isValidNode` function would probably be more appropriate
    renderedElement === null || renderedElement === false || reactdomlibReactCompositeComponent__React.isValidElement(renderedElement)) ? 'development' !== 'production' ? reactdomlibReactCompositeComponent__invariant(false, '%s.render(): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.', this.getName() || 'ReactCompositeComponent') : reactdomlibReactCompositeComponent___prodInvariant('109', this.getName() || 'ReactCompositeComponent') : void 0;

    return renderedElement;
  },

  /**
   * Lazily allocates the refs object and stores `component` as `ref`.
   *
   * @param {string} ref Reference name.
   * @param {component} component Component to store as `ref`.
   * @final
   * @private
   */
  attachRef: function (ref, component) {
    var inst = this.getPublicInstance();
    !(inst != null) ? 'development' !== 'production' ? reactdomlibReactCompositeComponent__invariant(false, 'Stateless function components cannot have refs.') : reactdomlibReactCompositeComponent___prodInvariant('110') : void 0;
    var publicComponentInstance = component.getPublicInstance();
    if ('development' !== 'production') {
      var componentName = component && component.getName ? component.getName() : 'a component';
      'development' !== 'production' ? reactdomlibReactCompositeComponent__warning(publicComponentInstance != null || component._compositeType !== reactdomlibReactCompositeComponent__CompositeTypes.StatelessFunctional, 'Stateless function components cannot be given refs ' + '(See ref "%s" in %s created by %s). ' + 'Attempts to access this ref will fail.', ref, componentName, this.getName()) : void 0;
    }
    var refs = inst.refs === reactdomlibReactCompositeComponent__emptyObject ? inst.refs = {} : inst.refs;
    refs[ref] = publicComponentInstance;
  },

  /**
   * Detaches a reference name.
   *
   * @param {string} ref Name to dereference.
   * @final
   * @private
   */
  detachRef: function (ref) {
    var refs = this.getPublicInstance().refs;
    delete refs[ref];
  },

  /**
   * Get a text description of the component that can be used to identify it
   * in error messages.
   * @return {string} The name or null.
   * @internal
   */
  getName: function () {
    var type = this._currentElement.type;
    var constructor = this._instance && this._instance.constructor;
    return type.displayName || constructor && constructor.displayName || type.name || constructor && constructor.name || null;
  },

  /**
   * Get the publicly accessible representation of this component - i.e. what
   * is exposed by refs and returned by render. Can be null for stateless
   * components.
   *
   * @return {ReactComponent} the public component instance.
   * @internal
   */
  getPublicInstance: function () {
    var inst = this._instance;
    if (this._compositeType === reactdomlibReactCompositeComponent__CompositeTypes.StatelessFunctional) {
      return null;
    }
    return inst;
  },

  // Stub
  _instantiateReactComponent: null
};

$m['react-dom/lib/ReactCompositeComponent'].exports = reactdomlibReactCompositeComponent__ReactCompositeComponent;
/*≠≠ node_modules/@yr/component/nod...lib/ReactCompositeComponent.js ≠≠*/


/*== node_modules/@yr/component/nod...b/instantiateReactComponent.js ==*/
$m['react-dom/lib/instantiateReactComponent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibinstantiateReactComponent___prodInvariant = $m['react-dom/lib/reactProdInvariant'].exports,
    reactdomlibinstantiateReactComponent___assign = $m['object-assign'].exports;

var reactdomlibinstantiateReactComponent__ReactCompositeComponent = $m['react-dom/lib/ReactCompositeComponent'].exports;
var reactdomlibinstantiateReactComponent__ReactEmptyComponent = $m['react-dom/lib/ReactEmptyComponent'].exports;
var reactdomlibinstantiateReactComponent__ReactHostComponent = $m['react-dom/lib/ReactHostComponent'].exports;

var reactdomlibinstantiateReactComponent__getNextDebugID = $m['react/lib/getNextDebugID'].exports;
var reactdomlibinstantiateReactComponent__invariant = $m['fbjs/lib/invariant'].exports;
var reactdomlibinstantiateReactComponent__warning = $m['fbjs/lib/warning'].exports;

// To avoid a cyclic dependency, we create the final class in this module
var reactdomlibinstantiateReactComponent__ReactCompositeComponentWrapper = function (element) {
  this.construct(element);
};

function reactdomlibinstantiateReactComponent__getDeclarationErrorAddendum(owner) {
  if (owner) {
    var name = owner.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
  }
  return '';
}

/**
 * Check if the type reference is a known internal type. I.e. not a user
 * provided composite type.
 *
 * @param {function} type
 * @return {boolean} Returns true if this is a valid internal type.
 */
function reactdomlibinstantiateReactComponent__isInternalComponentType(type) {
  return typeof type === 'function' && typeof type.prototype !== 'undefined' && typeof type.prototype.mountComponent === 'function' && typeof type.prototype.receiveComponent === 'function';
}

/**
 * Given a ReactNode, create an instance that will actually be mounted.
 *
 * @param {ReactNode} node
 * @param {boolean} shouldHaveDebugID
 * @return {object} A new instance of the element's constructor.
 * @protected
 */
function reactdomlibinstantiateReactComponent__instantiateReactComponent(node, shouldHaveDebugID) {
  var instance;

  if (node === null || node === false) {
    instance = reactdomlibinstantiateReactComponent__ReactEmptyComponent.create(reactdomlibinstantiateReactComponent__instantiateReactComponent);
  } else if (typeof node === 'object') {
    var element = node;
    var type = element.type;
    if (typeof type !== 'function' && typeof type !== 'string') {
      var info = '';
      if ('development' !== 'production') {
        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in.";
        }
      }
      info += reactdomlibinstantiateReactComponent__getDeclarationErrorAddendum(element._owner);
      !false ? 'development' !== 'production' ? reactdomlibinstantiateReactComponent__invariant(false, 'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s', type == null ? type : typeof type, info) : reactdomlibinstantiateReactComponent___prodInvariant('130', type == null ? type : typeof type, info) : void 0;
    }

    // Special case string values
    if (typeof element.type === 'string') {
      instance = reactdomlibinstantiateReactComponent__ReactHostComponent.createInternalComponent(element);
    } else if (reactdomlibinstantiateReactComponent__isInternalComponentType(element.type)) {
      // This is temporarily available for custom components that are not string
      // representations. I.e. ART. Once those are updated to use the string
      // representation, we can drop this code path.
      instance = new element.type(element);

      // We renamed this. Allow the old name for compat. :(
      if (!instance.getHostNode) {
        instance.getHostNode = instance.getNativeNode;
      }
    } else {
      instance = new reactdomlibinstantiateReactComponent__ReactCompositeComponentWrapper(element);
    }
  } else if (typeof node === 'string' || typeof node === 'number') {
    instance = reactdomlibinstantiateReactComponent__ReactHostComponent.createInstanceForText(node);
  } else {
    !false ? 'development' !== 'production' ? reactdomlibinstantiateReactComponent__invariant(false, 'Encountered invalid React node of type %s', typeof node) : reactdomlibinstantiateReactComponent___prodInvariant('131', typeof node) : void 0;
  }

  if ('development' !== 'production') {
    'development' !== 'production' ? reactdomlibinstantiateReactComponent__warning(typeof instance.mountComponent === 'function' && typeof instance.receiveComponent === 'function' && typeof instance.getHostNode === 'function' && typeof instance.unmountComponent === 'function', 'Only React Components can be mounted.') : void 0;
  }

  // These two fields are used by the DOM and ART diffing algorithms
  // respectively. Instead of using expandos on components, we should be
  // storing the state needed by the diffing algorithms elsewhere.
  instance._mountIndex = 0;
  instance._mountImage = null;

  if ('development' !== 'production') {
    instance._debugID = shouldHaveDebugID ? reactdomlibinstantiateReactComponent__getNextDebugID() : 0;
  }

  // Internal instances should fully constructed at this point, so they should
  // not get any new fields added to them at this point.
  if ('development' !== 'production') {
    if (Object.preventExtensions) {
      Object.preventExtensions(instance);
    }
  }

  return instance;
}

reactdomlibinstantiateReactComponent___assign(reactdomlibinstantiateReactComponent__ReactCompositeComponentWrapper.prototype, reactdomlibinstantiateReactComponent__ReactCompositeComponent, {
  _instantiateReactComponent: reactdomlibinstantiateReactComponent__instantiateReactComponent
});

$m['react-dom/lib/instantiateReactComponent'].exports = reactdomlibinstantiateReactComponent__instantiateReactComponent;
/*≠≠ node_modules/@yr/component/nod...b/instantiateReactComponent.js ≠≠*/


/*== node_modules/@yr/component/nod...s/react-dom/lib/Transaction.js ==*/
$m['react-dom/lib/Transaction'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var reactdomlibTransaction___prodInvariant = $m['react-dom/lib/reactProdInvariant'].exports;

var reactdomlibTransaction__invariant = $m['fbjs/lib/invariant'].exports;

var reactdomlibTransaction__OBSERVED_ERROR = {};

/**
 * `Transaction` creates a black box that is able to wrap any method such that
 * certain invariants are maintained before and after the method is invoked
 * (Even if an exception is thrown while invoking the wrapped method). Whoever
 * instantiates a transaction can provide enforcers of the invariants at
 * creation time. The `Transaction` class itself will supply one additional
 * automatic invariant for you - the invariant that any transaction instance
 * should not be run while it is already being run. You would typically create a
 * single instance of a `Transaction` for reuse multiple times, that potentially
 * is used to wrap several different methods. Wrappers are extremely simple -
 * they only require implementing two methods.
 *
 * <pre>
 *                       wrappers (injected at creation time)
 *                                      +        +
 *                                      |        |
 *                    +-----------------|--------|--------------+
 *                    |                 v        |              |
 *                    |      +---------------+   |              |
 *                    |   +--|    wrapper1   |---|----+         |
 *                    |   |  +---------------+   v    |         |
 *                    |   |          +-------------+  |         |
 *                    |   |     +----|   wrapper2  |--------+   |
 *                    |   |     |    +-------------+  |     |   |
 *                    |   |     |                     |     |   |
 *                    |   v     v                     v     v   | wrapper
 *                    | +---+ +---+   +---------+   +---+ +---+ | invariants
 * perform(anyMethod) | |   | |   |   |         |   |   | |   | | maintained
 * +----------------->|-|---|-|---|-->|anyMethod|---|---|-|---|-|-------->
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | +---+ +---+   +---------+   +---+ +---+ |
 *                    |  initialize                    close    |
 *                    +-----------------------------------------+
 * </pre>
 *
 * Use cases:
 * - Preserving the input selection ranges before/after reconciliation.
 *   Restoring selection even in the event of an unexpected error.
 * - Deactivating events while rearranging the DOM, preventing blurs/focuses,
 *   while guaranteeing that afterwards, the event system is reactivated.
 * - Flushing a queue of collected DOM mutations to the main UI thread after a
 *   reconciliation takes place in a worker thread.
 * - Invoking any collected `componentDidUpdate` callbacks after rendering new
 *   content.
 * - (Future use case): Wrapping particular flushes of the `ReactWorker` queue
 *   to preserve the `scrollTop` (an automatic scroll aware DOM).
 * - (Future use case): Layout calculations before and after DOM updates.
 *
 * Transactional plugin API:
 * - A module that has an `initialize` method that returns any precomputation.
 * - and a `close` method that accepts the precomputation. `close` is invoked
 *   when the wrapped process is completed, or has failed.
 *
 * @param {Array<TransactionalWrapper>} transactionWrapper Wrapper modules
 * that implement `initialize` and `close`.
 * @return {Transaction} Single transaction for reuse in thread.
 *
 * @class Transaction
 */
var reactdomlibTransaction__TransactionImpl = {
  /**
   * Sets up this instance so that it is prepared for collecting metrics. Does
   * so such that this setup method may be used on an instance that is already
   * initialized, in a way that does not consume additional memory upon reuse.
   * That can be useful if you decide to make your subclass of this mixin a
   * "PooledClass".
   */
  reinitializeTransaction: function () {
    this.transactionWrappers = this.getTransactionWrappers();
    if (this.wrapperInitData) {
      this.wrapperInitData.length = 0;
    } else {
      this.wrapperInitData = [];
    }
    this._isInTransaction = false;
  },

  _isInTransaction: false,

  /**
   * @abstract
   * @return {Array<TransactionWrapper>} Array of transaction wrappers.
   */
  getTransactionWrappers: null,

  isInTransaction: function () {
    return !!this._isInTransaction;
  },

  /* eslint-disable space-before-function-paren */

  /**
   * Executes the function within a safety window. Use this for the top level
   * methods that result in large amounts of computation/mutations that would
   * need to be safety checked. The optional arguments helps prevent the need
   * to bind in many cases.
   *
   * @param {function} method Member of scope to call.
   * @param {Object} scope Scope to invoke from.
   * @param {Object?=} a Argument to pass to the method.
   * @param {Object?=} b Argument to pass to the method.
   * @param {Object?=} c Argument to pass to the method.
   * @param {Object?=} d Argument to pass to the method.
   * @param {Object?=} e Argument to pass to the method.
   * @param {Object?=} f Argument to pass to the method.
   *
   * @return {*} Return value from `method`.
   */
  perform: function (method, scope, a, b, c, d, e, f) {
    /* eslint-enable space-before-function-paren */
    !!this.isInTransaction() ? 'development' !== 'production' ? reactdomlibTransaction__invariant(false, 'Transaction.perform(...): Cannot initialize a transaction when there is already an outstanding transaction.') : reactdomlibTransaction___prodInvariant('27') : void 0;
    var errorThrown;
    var ret;
    try {
      this._isInTransaction = true;
      // Catching errors makes debugging more difficult, so we start with
      // errorThrown set to true before setting it to false after calling
      // close -- if it's still set to true in the finally block, it means
      // one of these calls threw.
      errorThrown = true;
      this.initializeAll(0);
      ret = method.call(scope, a, b, c, d, e, f);
      errorThrown = false;
    } finally {
      try {
        if (errorThrown) {
          // If `method` throws, prefer to show that stack trace over any thrown
          // by invoking `closeAll`.
          try {
            this.closeAll(0);
          } catch (err) {}
        } else {
          // Since `method` didn't throw, we don't want to silence the exception
          // here.
          this.closeAll(0);
        }
      } finally {
        this._isInTransaction = false;
      }
    }
    return ret;
  },

  initializeAll: function (startIndex) {
    var transactionWrappers = this.transactionWrappers;
    for (var i = startIndex; i < transactionWrappers.length; i++) {
      var wrapper = transactionWrappers[i];
      try {
        // Catching errors makes debugging more difficult, so we start with the
        // OBSERVED_ERROR state before overwriting it with the real return value
        // of initialize -- if it's still set to OBSERVED_ERROR in the finally
        // block, it means wrapper.initialize threw.
        this.wrapperInitData[i] = reactdomlibTransaction__OBSERVED_ERROR;
        this.wrapperInitData[i] = wrapper.initialize ? wrapper.initialize.call(this) : null;
      } finally {
        if (this.wrapperInitData[i] === reactdomlibTransaction__OBSERVED_ERROR) {
          // The initializer for wrapper i threw an error; initialize the
          // remaining wrappers but silence any exceptions from them to ensure
          // that the first error is the one to bubble up.
          try {
            this.initializeAll(i + 1);
          } catch (err) {}
        }
      }
    }
  },

  /**
   * Invokes each of `this.transactionWrappers.close[i]` functions, passing into
   * them the respective return values of `this.transactionWrappers.init[i]`
   * (`close`rs that correspond to initializers that failed will not be
   * invoked).
   */
  closeAll: function (startIndex) {
    !this.isInTransaction() ? 'development' !== 'production' ? reactdomlibTransaction__invariant(false, 'Transaction.closeAll(): Cannot close transaction when none are open.') : reactdomlibTransaction___prodInvariant('28') : void 0;
    var transactionWrappers = this.transactionWrappers;
    for (var i = startIndex; i < transactionWrappers.length; i++) {
      var wrapper = transactionWrappers[i];
      var initData = this.wrapperInitData[i];
      var errorThrown;
      try {
        // Catching errors makes debugging more difficult, so we start with
        // errorThrown set to true before setting it to false after calling
        // close -- if it's still set to true in the finally block, it means
        // wrapper.close threw.
        errorThrown = true;
        if (initData !== reactdomlibTransaction__OBSERVED_ERROR && wrapper.close) {
          wrapper.close.call(this, initData);
        }
        errorThrown = false;
      } finally {
        if (errorThrown) {
          // The closer for wrapper i threw an error; close the remaining
          // wrappers but silence any exceptions from them to ensure that the
          // first error is the one to bubble up.
          try {
            this.closeAll(i + 1);
          } catch (e) {}
        }
      }
    }
    this.wrapperInitData.length = 0;
  }
};

$m['react-dom/lib/Transaction'].exports = reactdomlibTransaction__TransactionImpl;
/*≠≠ node_modules/@yr/component/nod...s/react-dom/lib/Transaction.js ≠≠*/


/*== node_modules/@yr/component/nod...s/react-dom/lib/PooledClass.js ==*/
$m['react-dom/lib/PooledClass'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var reactdomlibPooledClass___prodInvariant = $m['react-dom/lib/reactProdInvariant'].exports;

var reactdomlibPooledClass__invariant = $m['fbjs/lib/invariant'].exports;

/**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */
var reactdomlibPooledClass__oneArgumentPooler = function (copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};

var reactdomlibPooledClass__twoArgumentPooler = function (a1, a2) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;
  } else {
    return new Klass(a1, a2);
  }
};

var reactdomlibPooledClass__threeArgumentPooler = function (a1, a2, a3) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance;
  } else {
    return new Klass(a1, a2, a3);
  }
};

var reactdomlibPooledClass__fourArgumentPooler = function (a1, a2, a3, a4) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4);
  }
};

var reactdomlibPooledClass__standardReleaser = function (instance) {
  var Klass = this;
  !(instance instanceof Klass) ? 'development' !== 'production' ? reactdomlibPooledClass__invariant(false, 'Trying to release an instance into a pool of a different type.') : reactdomlibPooledClass___prodInvariant('25') : void 0;
  instance.destructor();
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};

var reactdomlibPooledClass__DEFAULT_POOL_SIZE = 10;
var reactdomlibPooledClass__DEFAULT_POOLER = reactdomlibPooledClass__oneArgumentPooler;

/**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances.
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */
var reactdomlibPooledClass__addPoolingTo = function (CopyConstructor, pooler) {
  // Casting as any so that flow ignores the actual implementation and trusts
  // it to match the type we declared
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || reactdomlibPooledClass__DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = reactdomlibPooledClass__DEFAULT_POOL_SIZE;
  }
  NewKlass.release = reactdomlibPooledClass__standardReleaser;
  return NewKlass;
};

var reactdomlibPooledClass__PooledClass = {
  addPoolingTo: reactdomlibPooledClass__addPoolingTo,
  oneArgumentPooler: reactdomlibPooledClass__oneArgumentPooler,
  twoArgumentPooler: reactdomlibPooledClass__twoArgumentPooler,
  threeArgumentPooler: reactdomlibPooledClass__threeArgumentPooler,
  fourArgumentPooler: reactdomlibPooledClass__fourArgumentPooler
};

$m['react-dom/lib/PooledClass'].exports = reactdomlibPooledClass__PooledClass;
/*≠≠ node_modules/@yr/component/nod...s/react-dom/lib/PooledClass.js ≠≠*/


/*== node_modules/@yr/component/nod...react-dom/lib/CallbackQueue.js ==*/
$m['react-dom/lib/CallbackQueue'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var reactdomlibCallbackQueue___prodInvariant = $m['react-dom/lib/reactProdInvariant'].exports;

function reactdomlibCallbackQueue___classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var reactdomlibCallbackQueue__PooledClass = $m['react-dom/lib/PooledClass'].exports;

var reactdomlibCallbackQueue__invariant = $m['fbjs/lib/invariant'].exports;

/**
 * A specialized pseudo-event module to help keep track of components waiting to
 * be notified when their DOM representations are available for use.
 *
 * This implements `PooledClass`, so you should never need to instantiate this.
 * Instead, use `CallbackQueue.getPooled()`.
 *
 * @class ReactMountReady
 * @implements PooledClass
 * @internal
 */

var reactdomlibCallbackQueue__CallbackQueue = function () {
  function CallbackQueue(arg) {
    reactdomlibCallbackQueue___classCallCheck(this, CallbackQueue);

    this._callbacks = null;
    this._contexts = null;
    this._arg = arg;
  }

  /**
   * Enqueues a callback to be invoked when `notifyAll` is invoked.
   *
   * @param {function} callback Invoked when `notifyAll` is invoked.
   * @param {?object} context Context to call `callback` with.
   * @internal
   */

  CallbackQueue.prototype.enqueue = function enqueue(callback, context) {
    this._callbacks = this._callbacks || [];
    this._callbacks.push(callback);
    this._contexts = this._contexts || [];
    this._contexts.push(context);
  };

  /**
   * Invokes all enqueued callbacks and clears the queue. This is invoked after
   * the DOM representation of a component has been created or updated.
   *
   * @internal
   */

  CallbackQueue.prototype.notifyAll = function notifyAll() {
    var callbacks = this._callbacks;
    var contexts = this._contexts;
    var arg = this._arg;
    if (callbacks && contexts) {
      !(callbacks.length === contexts.length) ? 'development' !== 'production' ? reactdomlibCallbackQueue__invariant(false, 'Mismatched list of contexts in callback queue') : reactdomlibCallbackQueue___prodInvariant('24') : void 0;
      this._callbacks = null;
      this._contexts = null;
      for (var i = 0; i < callbacks.length; i++) {
        callbacks[i].call(contexts[i], arg);
      }
      callbacks.length = 0;
      contexts.length = 0;
    }
  };

  CallbackQueue.prototype.checkpoint = function checkpoint() {
    return this._callbacks ? this._callbacks.length : 0;
  };

  CallbackQueue.prototype.rollback = function rollback(len) {
    if (this._callbacks && this._contexts) {
      this._callbacks.length = len;
      this._contexts.length = len;
    }
  };

  /**
   * Resets the internal queue.
   *
   * @internal
   */

  CallbackQueue.prototype.reset = function reset() {
    this._callbacks = null;
    this._contexts = null;
  };

  /**
   * `PooledClass` looks for this.
   */

  CallbackQueue.prototype.destructor = function destructor() {
    this.reset();
  };

  return CallbackQueue;
}();

$m['react-dom/lib/CallbackQueue'].exports = reactdomlibCallbackQueue__PooledClass.addPoolingTo(reactdomlibCallbackQueue__CallbackQueue);
/*≠≠ node_modules/@yr/component/nod...react-dom/lib/CallbackQueue.js ≠≠*/


/*== node_modules/@yr/component/nod.../react-dom/lib/ReactUpdates.js ==*/
$m['react-dom/lib/ReactUpdates'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactUpdates___prodInvariant = $m['react-dom/lib/reactProdInvariant'].exports,
    reactdomlibReactUpdates___assign = $m['object-assign'].exports;

var reactdomlibReactUpdates__CallbackQueue = $m['react-dom/lib/CallbackQueue'].exports;
var reactdomlibReactUpdates__PooledClass = $m['react-dom/lib/PooledClass'].exports;
var reactdomlibReactUpdates__ReactFeatureFlags = $m['react-dom/lib/ReactFeatureFlags'].exports;
var reactdomlibReactUpdates__ReactReconciler = $m['react-dom/lib/ReactReconciler'].exports;
var reactdomlibReactUpdates__Transaction = $m['react-dom/lib/Transaction'].exports;

var reactdomlibReactUpdates__invariant = $m['fbjs/lib/invariant'].exports;

var reactdomlibReactUpdates__dirtyComponents = [];
var reactdomlibReactUpdates__updateBatchNumber = 0;
var reactdomlibReactUpdates__asapCallbackQueue = reactdomlibReactUpdates__CallbackQueue.getPooled();
var reactdomlibReactUpdates__asapEnqueued = false;

var reactdomlibReactUpdates__batchingStrategy = null;

function reactdomlibReactUpdates__ensureInjected() {
  !(reactdomlibReactUpdates__ReactUpdates.ReactReconcileTransaction && reactdomlibReactUpdates__batchingStrategy) ? 'development' !== 'production' ? reactdomlibReactUpdates__invariant(false, 'ReactUpdates: must inject a reconcile transaction class and batching strategy') : reactdomlibReactUpdates___prodInvariant('123') : void 0;
}

var reactdomlibReactUpdates__NESTED_UPDATES = {
  initialize: function () {
    this.dirtyComponentsLength = reactdomlibReactUpdates__dirtyComponents.length;
  },
  close: function () {
    if (this.dirtyComponentsLength !== reactdomlibReactUpdates__dirtyComponents.length) {
      // Additional updates were enqueued by componentDidUpdate handlers or
      // similar; before our own UPDATE_QUEUEING wrapper closes, we want to run
      // these new updates so that if A's componentDidUpdate calls setState on
      // B, B will update before the callback A's updater provided when calling
      // setState.
      reactdomlibReactUpdates__dirtyComponents.splice(0, this.dirtyComponentsLength);
      reactdomlibReactUpdates__flushBatchedUpdates();
    } else {
      reactdomlibReactUpdates__dirtyComponents.length = 0;
    }
  }
};

var reactdomlibReactUpdates__UPDATE_QUEUEING = {
  initialize: function () {
    this.callbackQueue.reset();
  },
  close: function () {
    this.callbackQueue.notifyAll();
  }
};

var reactdomlibReactUpdates__TRANSACTION_WRAPPERS = [reactdomlibReactUpdates__NESTED_UPDATES, reactdomlibReactUpdates__UPDATE_QUEUEING];

function reactdomlibReactUpdates__ReactUpdatesFlushTransaction() {
  this.reinitializeTransaction();
  this.dirtyComponentsLength = null;
  this.callbackQueue = reactdomlibReactUpdates__CallbackQueue.getPooled();
  this.reconcileTransaction = reactdomlibReactUpdates__ReactUpdates.ReactReconcileTransaction.getPooled(
  /* useCreateElement */true);
}

reactdomlibReactUpdates___assign(reactdomlibReactUpdates__ReactUpdatesFlushTransaction.prototype, reactdomlibReactUpdates__Transaction, {
  getTransactionWrappers: function () {
    return reactdomlibReactUpdates__TRANSACTION_WRAPPERS;
  },

  destructor: function () {
    this.dirtyComponentsLength = null;
    reactdomlibReactUpdates__CallbackQueue.release(this.callbackQueue);
    this.callbackQueue = null;
    reactdomlibReactUpdates__ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);
    this.reconcileTransaction = null;
  },

  perform: function (method, scope, a) {
    // Essentially calls `this.reconcileTransaction.perform(method, scope, a)`
    // with this transaction's wrappers around it.
    return reactdomlibReactUpdates__Transaction.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, method, scope, a);
  }
});

reactdomlibReactUpdates__PooledClass.addPoolingTo(reactdomlibReactUpdates__ReactUpdatesFlushTransaction);

function reactdomlibReactUpdates__batchedUpdates(callback, a, b, c, d, e) {
  reactdomlibReactUpdates__ensureInjected();
  return reactdomlibReactUpdates__batchingStrategy.batchedUpdates(callback, a, b, c, d, e);
}

/**
 * Array comparator for ReactComponents by mount ordering.
 *
 * @param {ReactComponent} c1 first component you're comparing
 * @param {ReactComponent} c2 second component you're comparing
 * @return {number} Return value usable by Array.prototype.sort().
 */
function reactdomlibReactUpdates__mountOrderComparator(c1, c2) {
  return c1._mountOrder - c2._mountOrder;
}

function reactdomlibReactUpdates__runBatchedUpdates(transaction) {
  var len = transaction.dirtyComponentsLength;
  !(len === reactdomlibReactUpdates__dirtyComponents.length) ? 'development' !== 'production' ? reactdomlibReactUpdates__invariant(false, 'Expected flush transaction\'s stored dirty-components length (%s) to match dirty-components array length (%s).', len, reactdomlibReactUpdates__dirtyComponents.length) : reactdomlibReactUpdates___prodInvariant('124', len, reactdomlibReactUpdates__dirtyComponents.length) : void 0;

  // Since reconciling a component higher in the owner hierarchy usually (not
  // always -- see shouldComponentUpdate()) will reconcile children, reconcile
  // them before their children by sorting the array.
  reactdomlibReactUpdates__dirtyComponents.sort(reactdomlibReactUpdates__mountOrderComparator);

  // Any updates enqueued while reconciling must be performed after this entire
  // batch. Otherwise, if dirtyComponents is [A, B] where A has children B and
  // C, B could update twice in a single batch if C's render enqueues an update
  // to B (since B would have already updated, we should skip it, and the only
  // way we can know to do so is by checking the batch counter).
  reactdomlibReactUpdates__updateBatchNumber++;

  for (var i = 0; i < len; i++) {
    // If a component is unmounted before pending changes apply, it will still
    // be here, but we assume that it has cleared its _pendingCallbacks and
    // that performUpdateIfNecessary is a noop.
    var component = reactdomlibReactUpdates__dirtyComponents[i];

    // If performUpdateIfNecessary happens to enqueue any new updates, we
    // shouldn't execute the callbacks until the next render happens, so
    // stash the callbacks first
    var callbacks = component._pendingCallbacks;
    component._pendingCallbacks = null;

    var markerName;
    if (reactdomlibReactUpdates__ReactFeatureFlags.logTopLevelRenders) {
      var namedComponent = component;
      // Duck type TopLevelWrapper. This is probably always true.
      if (component._currentElement.type.isReactTopLevelWrapper) {
        namedComponent = component._renderedComponent;
      }
      markerName = 'React update: ' + namedComponent.getName();
      console.time(markerName);
    }

    reactdomlibReactUpdates__ReactReconciler.performUpdateIfNecessary(component, transaction.reconcileTransaction, reactdomlibReactUpdates__updateBatchNumber);

    if (markerName) {
      console.timeEnd(markerName);
    }

    if (callbacks) {
      for (var j = 0; j < callbacks.length; j++) {
        transaction.callbackQueue.enqueue(callbacks[j], component.getPublicInstance());
      }
    }
  }
}

var reactdomlibReactUpdates__flushBatchedUpdates = function () {
  // ReactUpdatesFlushTransaction's wrappers will clear the dirtyComponents
  // array and perform any updates enqueued by mount-ready handlers (i.e.,
  // componentDidUpdate) but we need to check here too in order to catch
  // updates enqueued by setState callbacks and asap calls.
  while (reactdomlibReactUpdates__dirtyComponents.length || reactdomlibReactUpdates__asapEnqueued) {
    if (reactdomlibReactUpdates__dirtyComponents.length) {
      var transaction = reactdomlibReactUpdates__ReactUpdatesFlushTransaction.getPooled();
      transaction.perform(reactdomlibReactUpdates__runBatchedUpdates, null, transaction);
      reactdomlibReactUpdates__ReactUpdatesFlushTransaction.release(transaction);
    }

    if (reactdomlibReactUpdates__asapEnqueued) {
      reactdomlibReactUpdates__asapEnqueued = false;
      var queue = reactdomlibReactUpdates__asapCallbackQueue;
      reactdomlibReactUpdates__asapCallbackQueue = reactdomlibReactUpdates__CallbackQueue.getPooled();
      queue.notifyAll();
      reactdomlibReactUpdates__CallbackQueue.release(queue);
    }
  }
};

/**
 * Mark a component as needing a rerender, adding an optional callback to a
 * list of functions which will be executed once the rerender occurs.
 */
function reactdomlibReactUpdates__enqueueUpdate(component) {
  reactdomlibReactUpdates__ensureInjected();

  // Various parts of our code (such as ReactCompositeComponent's
  // _renderValidatedComponent) assume that calls to render aren't nested;
  // verify that that's the case. (This is called by each top-level update
  // function, like setState, forceUpdate, etc.; creation and
  // destruction of top-level components is guarded in ReactMount.)

  if (!reactdomlibReactUpdates__batchingStrategy.isBatchingUpdates) {
    reactdomlibReactUpdates__batchingStrategy.batchedUpdates(reactdomlibReactUpdates__enqueueUpdate, component);
    return;
  }

  reactdomlibReactUpdates__dirtyComponents.push(component);
  if (component._updateBatchNumber == null) {
    component._updateBatchNumber = reactdomlibReactUpdates__updateBatchNumber + 1;
  }
}

/**
 * Enqueue a callback to be run at the end of the current batching cycle. Throws
 * if no updates are currently being performed.
 */
function reactdomlibReactUpdates__asap(callback, context) {
  !reactdomlibReactUpdates__batchingStrategy.isBatchingUpdates ? 'development' !== 'production' ? reactdomlibReactUpdates__invariant(false, 'ReactUpdates.asap: Can\'t enqueue an asap callback in a context whereupdates are not being batched.') : reactdomlibReactUpdates___prodInvariant('125') : void 0;
  reactdomlibReactUpdates__asapCallbackQueue.enqueue(callback, context);
  reactdomlibReactUpdates__asapEnqueued = true;
}

var reactdomlibReactUpdates__ReactUpdatesInjection = {
  injectReconcileTransaction: function (ReconcileTransaction) {
    !ReconcileTransaction ? 'development' !== 'production' ? reactdomlibReactUpdates__invariant(false, 'ReactUpdates: must provide a reconcile transaction class') : reactdomlibReactUpdates___prodInvariant('126') : void 0;
    reactdomlibReactUpdates__ReactUpdates.ReactReconcileTransaction = ReconcileTransaction;
  },

  injectBatchingStrategy: function (_batchingStrategy) {
    !_batchingStrategy ? 'development' !== 'production' ? reactdomlibReactUpdates__invariant(false, 'ReactUpdates: must provide a batching strategy') : reactdomlibReactUpdates___prodInvariant('127') : void 0;
    !(typeof _batchingStrategy.batchedUpdates === 'function') ? 'development' !== 'production' ? reactdomlibReactUpdates__invariant(false, 'ReactUpdates: must provide a batchedUpdates() function') : reactdomlibReactUpdates___prodInvariant('128') : void 0;
    !(typeof _batchingStrategy.isBatchingUpdates === 'boolean') ? 'development' !== 'production' ? reactdomlibReactUpdates__invariant(false, 'ReactUpdates: must provide an isBatchingUpdates boolean attribute') : reactdomlibReactUpdates___prodInvariant('129') : void 0;
    reactdomlibReactUpdates__batchingStrategy = _batchingStrategy;
  }
};

var reactdomlibReactUpdates__ReactUpdates = {
  /**
   * React references `ReactReconcileTransaction` using this property in order
   * to allow dependency injection.
   *
   * @internal
   */
  ReactReconcileTransaction: null,

  batchedUpdates: reactdomlibReactUpdates__batchedUpdates,
  enqueueUpdate: reactdomlibReactUpdates__enqueueUpdate,
  flushBatchedUpdates: reactdomlibReactUpdates__flushBatchedUpdates,
  injection: reactdomlibReactUpdates__ReactUpdatesInjection,
  asap: reactdomlibReactUpdates__asap
};

$m['react-dom/lib/ReactUpdates'].exports = reactdomlibReactUpdates__ReactUpdates;
/*≠≠ node_modules/@yr/component/nod.../react-dom/lib/ReactUpdates.js ≠≠*/


/*== node_modules/@yr/component/nod...ct-dom/lib/ReactUpdateQueue.js ==*/
$m['react-dom/lib/ReactUpdateQueue'] = { exports: {} };
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactUpdateQueue___prodInvariant = $m['react-dom/lib/reactProdInvariant'].exports;

var reactdomlibReactUpdateQueue__ReactCurrentOwner = $m['react/lib/ReactCurrentOwner'].exports;
var reactdomlibReactUpdateQueue__ReactInstanceMap = $m['react-dom/lib/ReactInstanceMap'].exports;
var reactdomlibReactUpdateQueue__ReactInstrumentation = $m['react-dom/lib/ReactInstrumentation'].exports;
var reactdomlibReactUpdateQueue__ReactUpdates = $m['react-dom/lib/ReactUpdates'].exports;

var reactdomlibReactUpdateQueue__invariant = $m['fbjs/lib/invariant'].exports;
var reactdomlibReactUpdateQueue__warning = $m['fbjs/lib/warning'].exports;

function reactdomlibReactUpdateQueue__enqueueUpdate(internalInstance) {
  reactdomlibReactUpdateQueue__ReactUpdates.enqueueUpdate(internalInstance);
}

function reactdomlibReactUpdateQueue__formatUnexpectedArgument(arg) {
  var type = typeof arg;
  if (type !== 'object') {
    return type;
  }
  var displayName = arg.constructor && arg.constructor.name || type;
  var keys = Object.keys(arg);
  if (keys.length > 0 && keys.length < 20) {
    return displayName + ' (keys: ' + keys.join(', ') + ')';
  }
  return displayName;
}

function reactdomlibReactUpdateQueue__getInternalInstanceReadyForUpdate(publicInstance, callerName) {
  var internalInstance = reactdomlibReactUpdateQueue__ReactInstanceMap.get(publicInstance);
  if (!internalInstance) {
    if ('development' !== 'production') {
      var ctor = publicInstance.constructor;
      // Only warn when we have a callerName. Otherwise we should be silent.
      // We're probably calling from enqueueCallback. We don't want to warn
      // there because we already warned for the corresponding lifecycle method.
      'development' !== 'production' ? reactdomlibReactUpdateQueue__warning(!callerName, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, ctor && (ctor.displayName || ctor.name) || 'ReactClass') : void 0;
    }
    return null;
  }

  if ('development' !== 'production') {
    'development' !== 'production' ? reactdomlibReactUpdateQueue__warning(reactdomlibReactUpdateQueue__ReactCurrentOwner.current == null, '%s(...): Cannot update during an existing state transition (such as ' + "within `render` or another component's constructor). Render methods " + 'should be a pure function of props and state; constructor ' + 'side-effects are an anti-pattern, but can be moved to ' + '`componentWillMount`.', callerName) : void 0;
  }

  return internalInstance;
}

/**
 * ReactUpdateQueue allows for state updates to be scheduled into a later
 * reconciliation step.
 */
var reactdomlibReactUpdateQueue__ReactUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    if ('development' !== 'production') {
      var owner = reactdomlibReactUpdateQueue__ReactCurrentOwner.current;
      if (owner !== null) {
        'development' !== 'production' ? reactdomlibReactUpdateQueue__warning(owner._warnedAboutRefsInRender, '%s is accessing isMounted inside its render() function. ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : void 0;
        owner._warnedAboutRefsInRender = true;
      }
    }
    var internalInstance = reactdomlibReactUpdateQueue__ReactInstanceMap.get(publicInstance);
    if (internalInstance) {
      // During componentWillMount and render this will still be null but after
      // that will always render to something. At least for now. So we can use
      // this hack.
      return !!internalInstance._renderedComponent;
    } else {
      return false;
    }
  },

  /**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @param {string} callerName Name of the calling function in the public API.
   * @internal
   */
  enqueueCallback: function (publicInstance, callback, callerName) {
    reactdomlibReactUpdateQueue__ReactUpdateQueue.validateCallback(callback, callerName);
    var internalInstance = reactdomlibReactUpdateQueue__getInternalInstanceReadyForUpdate(publicInstance);

    // Previously we would throw an error if we didn't have an internal
    // instance. Since we want to make it a no-op instead, we mirror the same
    // behavior we have in other enqueue* methods.
    // We also need to ignore callbacks in componentWillMount. See
    // enqueueUpdates.
    if (!internalInstance) {
      return null;
    }

    if (internalInstance._pendingCallbacks) {
      internalInstance._pendingCallbacks.push(callback);
    } else {
      internalInstance._pendingCallbacks = [callback];
    }
    // TODO: The callback here is ignored when setState is called from
    // componentWillMount. Either fix it or disallow doing so completely in
    // favor of getInitialState. Alternatively, we can disallow
    // componentWillMount during server-side rendering.
    reactdomlibReactUpdateQueue__enqueueUpdate(internalInstance);
  },

  enqueueCallbackInternal: function (internalInstance, callback) {
    if (internalInstance._pendingCallbacks) {
      internalInstance._pendingCallbacks.push(callback);
    } else {
      internalInstance._pendingCallbacks = [callback];
    }
    reactdomlibReactUpdateQueue__enqueueUpdate(internalInstance);
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance) {
    var internalInstance = reactdomlibReactUpdateQueue__getInternalInstanceReadyForUpdate(publicInstance, 'forceUpdate');

    if (!internalInstance) {
      return;
    }

    internalInstance._pendingForceUpdate = true;

    reactdomlibReactUpdateQueue__enqueueUpdate(internalInstance);
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback) {
    var internalInstance = reactdomlibReactUpdateQueue__getInternalInstanceReadyForUpdate(publicInstance, 'replaceState');

    if (!internalInstance) {
      return;
    }

    internalInstance._pendingStateQueue = [completeState];
    internalInstance._pendingReplaceState = true;

    // Future-proof 15.5
    if (callback !== undefined && callback !== null) {
      reactdomlibReactUpdateQueue__ReactUpdateQueue.validateCallback(callback, 'replaceState');
      if (internalInstance._pendingCallbacks) {
        internalInstance._pendingCallbacks.push(callback);
      } else {
        internalInstance._pendingCallbacks = [callback];
      }
    }

    reactdomlibReactUpdateQueue__enqueueUpdate(internalInstance);
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState) {
    if ('development' !== 'production') {
      reactdomlibReactUpdateQueue__ReactInstrumentation.debugTool.onSetState();
      'development' !== 'production' ? reactdomlibReactUpdateQueue__warning(partialState != null, 'setState(...): You passed an undefined or null state object; ' + 'instead, use forceUpdate().') : void 0;
    }

    var internalInstance = reactdomlibReactUpdateQueue__getInternalInstanceReadyForUpdate(publicInstance, 'setState');

    if (!internalInstance) {
      return;
    }

    var queue = internalInstance._pendingStateQueue || (internalInstance._pendingStateQueue = []);
    queue.push(partialState);

    reactdomlibReactUpdateQueue__enqueueUpdate(internalInstance);
  },

  enqueueElementInternal: function (internalInstance, nextElement, nextContext) {
    internalInstance._pendingElement = nextElement;
    // TODO: introduce _pendingContext instead of setting it directly.
    internalInstance._context = nextContext;
    reactdomlibReactUpdateQueue__enqueueUpdate(internalInstance);
  },

  validateCallback: function (callback, callerName) {
    !(!callback || typeof callback === 'function') ? 'development' !== 'production' ? reactdomlibReactUpdateQueue__invariant(false, '%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.', callerName, reactdomlibReactUpdateQueue__formatUnexpectedArgument(callback)) : reactdomlibReactUpdateQueue___prodInvariant('122', callerName, reactdomlibReactUpdateQueue__formatUnexpectedArgument(callback)) : void 0;
  }
};

$m['react-dom/lib/ReactUpdateQueue'].exports = reactdomlibReactUpdateQueue__ReactUpdateQueue;
/*≠≠ node_modules/@yr/component/nod...ct-dom/lib/ReactUpdateQueue.js ≠≠*/


/*== node_modules/@yr/component/nod...dom/lib/ReactMarkupChecksum.js ==*/
$m['react-dom/lib/ReactMarkupChecksum'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactMarkupChecksum__adler32 = $m['react-dom/lib/adler32'].exports;

var reactdomlibReactMarkupChecksum__TAG_END = /\/?>/;
var reactdomlibReactMarkupChecksum__COMMENT_START = /^<\!\-\-/;

var reactdomlibReactMarkupChecksum__ReactMarkupChecksum = {
  CHECKSUM_ATTR_NAME: 'data-react-checksum',

  /**
   * @param {string} markup Markup string
   * @return {string} Markup string with checksum attribute attached
   */
  addChecksumToMarkup: function (markup) {
    var checksum = reactdomlibReactMarkupChecksum__adler32(markup);

    // Add checksum (handle both parent tags, comments and self-closing tags)
    if (reactdomlibReactMarkupChecksum__COMMENT_START.test(markup)) {
      return markup;
    } else {
      return markup.replace(reactdomlibReactMarkupChecksum__TAG_END, ' ' + reactdomlibReactMarkupChecksum__ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '="' + checksum + '"$&');
    }
  },

  /**
   * @param {string} markup to use
   * @param {DOMElement} element root React element
   * @returns {boolean} whether or not the markup is the same
   */
  canReuseMarkup: function (markup, element) {
    var existingChecksum = element.getAttribute(reactdomlibReactMarkupChecksum__ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
    existingChecksum = existingChecksum && parseInt(existingChecksum, 10);
    var markupChecksum = reactdomlibReactMarkupChecksum__adler32(markup);
    return markupChecksum === existingChecksum;
  }
};

$m['react-dom/lib/ReactMarkupChecksum'].exports = reactdomlibReactMarkupChecksum__ReactMarkupChecksum;
/*≠≠ node_modules/@yr/component/nod...dom/lib/ReactMarkupChecksum.js ≠≠*/


/*== node_modules/@yr/component/nod...-dom/lib/validateDOMNesting.js ==*/
$m['react-dom/lib/validateDOMNesting'] = { exports: {} };
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibvalidateDOMNesting___assign = $m['object-assign'].exports;

var reactdomlibvalidateDOMNesting__emptyFunction = $m['fbjs/lib/emptyFunction'].exports;
var reactdomlibvalidateDOMNesting__warning = $m['fbjs/lib/warning'].exports;

var reactdomlibvalidateDOMNesting__validateDOMNesting = reactdomlibvalidateDOMNesting__emptyFunction;

if ('development' !== 'production') {
  // This validation code was written based on the HTML5 parsing spec:
  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
  //
  // Note: this does not catch all invalid nesting, nor does it try to (as it's
  // not clear what practical benefit doing so provides); instead, we warn only
  // for cases where the parser will give a parse tree differing from what React
  // intended. For example, <b><div></div></b> is invalid but we don't warn
  // because it still parses correctly; we do warn for other cases like nested
  // <p> tags where the beginning of the second element implicitly closes the
  // first, causing a confusing mess.

  // https://html.spec.whatwg.org/multipage/syntax.html#special
  var reactdomlibvalidateDOMNesting__specialTags = ['address', 'applet', 'area', 'article', 'aside', 'base', 'basefont', 'bgsound', 'blockquote', 'body', 'br', 'button', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dir', 'div', 'dl', 'dt', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'iframe', 'img', 'input', 'isindex', 'li', 'link', 'listing', 'main', 'marquee', 'menu', 'menuitem', 'meta', 'nav', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'p', 'param', 'plaintext', 'pre', 'script', 'section', 'select', 'source', 'style', 'summary', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul', 'wbr', 'xmp'];

  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
  var reactdomlibvalidateDOMNesting__inScopeTags = ['applet', 'caption', 'html', 'table', 'td', 'th', 'marquee', 'object', 'template',

  // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
  // TODO: Distinguish by namespace here -- for <title>, including it here
  // errs on the side of fewer warnings
  'foreignObject', 'desc', 'title'];

  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-button-scope
  var reactdomlibvalidateDOMNesting__buttonScopeTags = reactdomlibvalidateDOMNesting__inScopeTags.concat(['button']);

  // https://html.spec.whatwg.org/multipage/syntax.html#generate-implied-end-tags
  var reactdomlibvalidateDOMNesting__impliedEndTags = ['dd', 'dt', 'li', 'option', 'optgroup', 'p', 'rp', 'rt'];

  var reactdomlibvalidateDOMNesting__emptyAncestorInfo = {
    current: null,

    formTag: null,
    aTagInScope: null,
    buttonTagInScope: null,
    nobrTagInScope: null,
    pTagInButtonScope: null,

    listItemTagAutoclosing: null,
    dlItemTagAutoclosing: null
  };

  var reactdomlibvalidateDOMNesting__updatedAncestorInfo = function (oldInfo, tag, instance) {
    var ancestorInfo = reactdomlibvalidateDOMNesting___assign({}, oldInfo || reactdomlibvalidateDOMNesting__emptyAncestorInfo);
    var info = { tag: tag, instance: instance };

    if (reactdomlibvalidateDOMNesting__inScopeTags.indexOf(tag) !== -1) {
      ancestorInfo.aTagInScope = null;
      ancestorInfo.buttonTagInScope = null;
      ancestorInfo.nobrTagInScope = null;
    }
    if (reactdomlibvalidateDOMNesting__buttonScopeTags.indexOf(tag) !== -1) {
      ancestorInfo.pTagInButtonScope = null;
    }

    // See rules for 'li', 'dd', 'dt' start tags in
    // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
    if (reactdomlibvalidateDOMNesting__specialTags.indexOf(tag) !== -1 && tag !== 'address' && tag !== 'div' && tag !== 'p') {
      ancestorInfo.listItemTagAutoclosing = null;
      ancestorInfo.dlItemTagAutoclosing = null;
    }

    ancestorInfo.current = info;

    if (tag === 'form') {
      ancestorInfo.formTag = info;
    }
    if (tag === 'a') {
      ancestorInfo.aTagInScope = info;
    }
    if (tag === 'button') {
      ancestorInfo.buttonTagInScope = info;
    }
    if (tag === 'nobr') {
      ancestorInfo.nobrTagInScope = info;
    }
    if (tag === 'p') {
      ancestorInfo.pTagInButtonScope = info;
    }
    if (tag === 'li') {
      ancestorInfo.listItemTagAutoclosing = info;
    }
    if (tag === 'dd' || tag === 'dt') {
      ancestorInfo.dlItemTagAutoclosing = info;
    }

    return ancestorInfo;
  };

  /**
   * Returns whether
   */
  var reactdomlibvalidateDOMNesting__isTagValidWithParent = function (tag, parentTag) {
    // First, let's check if we're in an unusual parsing mode...
    switch (parentTag) {
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
      case 'select':
        return tag === 'option' || tag === 'optgroup' || tag === '#text';
      case 'optgroup':
        return tag === 'option' || tag === '#text';
      // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
      // but
      case 'option':
        return tag === '#text';
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
      // No special behavior since these rules fall back to "in body" mode for
      // all except special table nodes which cause bad parsing behavior anyway.

      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
      case 'tr':
        return tag === 'th' || tag === 'td' || tag === 'style' || tag === 'script' || tag === 'template';
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
      case 'tbody':
      case 'thead':
      case 'tfoot':
        return tag === 'tr' || tag === 'style' || tag === 'script' || tag === 'template';
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
      case 'colgroup':
        return tag === 'col' || tag === 'template';
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
      case 'table':
        return tag === 'caption' || tag === 'colgroup' || tag === 'tbody' || tag === 'tfoot' || tag === 'thead' || tag === 'style' || tag === 'script' || tag === 'template';
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
      case 'head':
        return tag === 'base' || tag === 'basefont' || tag === 'bgsound' || tag === 'link' || tag === 'meta' || tag === 'title' || tag === 'noscript' || tag === 'noframes' || tag === 'style' || tag === 'script' || tag === 'template';
      // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
      case 'html':
        return tag === 'head' || tag === 'body';
      case '#document':
        return tag === 'html';
    }

    // Probably in the "in body" parsing mode, so we outlaw only tag combos
    // where the parsing rules cause implicit opens or closes to be added.
    // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
    switch (tag) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        return parentTag !== 'h1' && parentTag !== 'h2' && parentTag !== 'h3' && parentTag !== 'h4' && parentTag !== 'h5' && parentTag !== 'h6';

      case 'rp':
      case 'rt':
        return reactdomlibvalidateDOMNesting__impliedEndTags.indexOf(parentTag) === -1;

      case 'body':
      case 'caption':
      case 'col':
      case 'colgroup':
      case 'frame':
      case 'head':
      case 'html':
      case 'tbody':
      case 'td':
      case 'tfoot':
      case 'th':
      case 'thead':
      case 'tr':
        // These tags are only valid with a few parents that have special child
        // parsing rules -- if we're down here, then none of those matched and
        // so we allow it only if we don't know what the parent is, as all other
        // cases are invalid.
        return parentTag == null;
    }

    return true;
  };

  /**
   * Returns whether
   */
  var reactdomlibvalidateDOMNesting__findInvalidAncestorForTag = function (tag, ancestorInfo) {
    switch (tag) {
      case 'address':
      case 'article':
      case 'aside':
      case 'blockquote':
      case 'center':
      case 'details':
      case 'dialog':
      case 'dir':
      case 'div':
      case 'dl':
      case 'fieldset':
      case 'figcaption':
      case 'figure':
      case 'footer':
      case 'header':
      case 'hgroup':
      case 'main':
      case 'menu':
      case 'nav':
      case 'ol':
      case 'p':
      case 'section':
      case 'summary':
      case 'ul':
      case 'pre':
      case 'listing':
      case 'table':
      case 'hr':
      case 'xmp':
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        return ancestorInfo.pTagInButtonScope;

      case 'form':
        return ancestorInfo.formTag || ancestorInfo.pTagInButtonScope;

      case 'li':
        return ancestorInfo.listItemTagAutoclosing;

      case 'dd':
      case 'dt':
        return ancestorInfo.dlItemTagAutoclosing;

      case 'button':
        return ancestorInfo.buttonTagInScope;

      case 'a':
        // Spec says something about storing a list of markers, but it sounds
        // equivalent to this check.
        return ancestorInfo.aTagInScope;

      case 'nobr':
        return ancestorInfo.nobrTagInScope;
    }

    return null;
  };

  /**
   * Given a ReactCompositeComponent instance, return a list of its recursive
   * owners, starting at the root and ending with the instance itself.
   */
  var reactdomlibvalidateDOMNesting__findOwnerStack = function (instance) {
    if (!instance) {
      return [];
    }

    var stack = [];
    do {
      stack.push(instance);
    } while (instance = instance._currentElement._owner);
    stack.reverse();
    return stack;
  };

  var reactdomlibvalidateDOMNesting__didWarn = {};

  reactdomlibvalidateDOMNesting__validateDOMNesting = function (childTag, childText, childInstance, ancestorInfo) {
    ancestorInfo = ancestorInfo || reactdomlibvalidateDOMNesting__emptyAncestorInfo;
    var parentInfo = ancestorInfo.current;
    var parentTag = parentInfo && parentInfo.tag;

    if (childText != null) {
      'development' !== 'production' ? reactdomlibvalidateDOMNesting__warning(childTag == null, 'validateDOMNesting: when childText is passed, childTag should be null') : void 0;
      childTag = '#text';
    }

    var invalidParent = reactdomlibvalidateDOMNesting__isTagValidWithParent(childTag, parentTag) ? null : parentInfo;
    var invalidAncestor = invalidParent ? null : reactdomlibvalidateDOMNesting__findInvalidAncestorForTag(childTag, ancestorInfo);
    var problematic = invalidParent || invalidAncestor;

    if (problematic) {
      var ancestorTag = problematic.tag;
      var ancestorInstance = problematic.instance;

      var childOwner = childInstance && childInstance._currentElement._owner;
      var ancestorOwner = ancestorInstance && ancestorInstance._currentElement._owner;

      var childOwners = reactdomlibvalidateDOMNesting__findOwnerStack(childOwner);
      var ancestorOwners = reactdomlibvalidateDOMNesting__findOwnerStack(ancestorOwner);

      var minStackLen = Math.min(childOwners.length, ancestorOwners.length);
      var i;

      var deepestCommon = -1;
      for (i = 0; i < minStackLen; i++) {
        if (childOwners[i] === ancestorOwners[i]) {
          deepestCommon = i;
        } else {
          break;
        }
      }

      var UNKNOWN = '(unknown)';
      var childOwnerNames = childOwners.slice(deepestCommon + 1).map(function (inst) {
        return inst.getName() || UNKNOWN;
      });
      var ancestorOwnerNames = ancestorOwners.slice(deepestCommon + 1).map(function (inst) {
        return inst.getName() || UNKNOWN;
      });
      var ownerInfo = [].concat(
      // If the parent and child instances have a common owner ancestor, start
      // with that -- otherwise we just start with the parent's owners.
      deepestCommon !== -1 ? childOwners[deepestCommon].getName() || UNKNOWN : [], ancestorOwnerNames, ancestorTag,
      // If we're warning about an invalid (non-parent) ancestry, add '...'
      invalidAncestor ? ['...'] : [], childOwnerNames, childTag).join(' > ');

      var warnKey = !!invalidParent + '|' + childTag + '|' + ancestorTag + '|' + ownerInfo;
      if (reactdomlibvalidateDOMNesting__didWarn[warnKey]) {
        return;
      }
      reactdomlibvalidateDOMNesting__didWarn[warnKey] = true;

      var tagDisplayName = childTag;
      var whitespaceInfo = '';
      if (childTag === '#text') {
        if (/\S/.test(childText)) {
          tagDisplayName = 'Text nodes';
        } else {
          tagDisplayName = 'Whitespace text nodes';
          whitespaceInfo = " Make sure you don't have any extra whitespace between tags on " + 'each line of your source code.';
        }
      } else {
        tagDisplayName = '<' + childTag + '>';
      }

      if (invalidParent) {
        var info = '';
        if (ancestorTag === 'table' && childTag === 'tr') {
          info += ' Add a <tbody> to your code to match the DOM tree generated by ' + 'the browser.';
        }
        'development' !== 'production' ? reactdomlibvalidateDOMNesting__warning(false, 'validateDOMNesting(...): %s cannot appear as a child of <%s>.%s ' + 'See %s.%s', tagDisplayName, ancestorTag, whitespaceInfo, ownerInfo, info) : void 0;
      } else {
        'development' !== 'production' ? reactdomlibvalidateDOMNesting__warning(false, 'validateDOMNesting(...): %s cannot appear as a descendant of ' + '<%s>. See %s.', tagDisplayName, ancestorTag, ownerInfo) : void 0;
      }
    }
  };

  reactdomlibvalidateDOMNesting__validateDOMNesting.updatedAncestorInfo = reactdomlibvalidateDOMNesting__updatedAncestorInfo;

  // For testing
  reactdomlibvalidateDOMNesting__validateDOMNesting.isTagValidInContext = function (tag, ancestorInfo) {
    ancestorInfo = ancestorInfo || reactdomlibvalidateDOMNesting__emptyAncestorInfo;
    var parentInfo = ancestorInfo.current;
    var parentTag = parentInfo && parentInfo.tag;
    return reactdomlibvalidateDOMNesting__isTagValidWithParent(tag, parentTag) && !reactdomlibvalidateDOMNesting__findInvalidAncestorForTag(tag, ancestorInfo);
  };
}

$m['react-dom/lib/validateDOMNesting'].exports = reactdomlibvalidateDOMNesting__validateDOMNesting;
/*≠≠ node_modules/@yr/component/nod...-dom/lib/validateDOMNesting.js ≠≠*/


/*== node_modules/@yr/component/nod...m/lib/ReactDOMContainerInfo.js ==*/
$m['react-dom/lib/ReactDOMContainerInfo'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactDOMContainerInfo__validateDOMNesting = $m['react-dom/lib/validateDOMNesting'].exports;

var reactdomlibReactDOMContainerInfo__DOC_NODE_TYPE = 9;

function reactdomlibReactDOMContainerInfo__ReactDOMContainerInfo(topLevelWrapper, node) {
  var info = {
    _topLevelWrapper: topLevelWrapper,
    _idCounter: 1,
    _ownerDocument: node ? node.nodeType === reactdomlibReactDOMContainerInfo__DOC_NODE_TYPE ? node : node.ownerDocument : null,
    _node: node,
    _tag: node ? node.nodeName.toLowerCase() : null,
    _namespaceURI: node ? node.namespaceURI : null
  };
  if ('development' !== 'production') {
    info._ancestorInfo = node ? reactdomlibReactDOMContainerInfo__validateDOMNesting.updatedAncestorInfo(null, info._tag, null) : null;
  }
  return info;
}

$m['react-dom/lib/ReactDOMContainerInfo'].exports = reactdomlibReactDOMContainerInfo__ReactDOMContainerInfo;
/*≠≠ node_modules/@yr/component/nod...m/lib/ReactDOMContainerInfo.js ≠≠*/


/*== node_modules/@yr/component/nod...m/lib/ReactDOMComponentTree.js ==*/
$m['react-dom/lib/ReactDOMComponentTree'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactDOMComponentTree___prodInvariant = $m['react-dom/lib/reactProdInvariant'].exports;

var reactdomlibReactDOMComponentTree__DOMProperty = $m['react-dom/lib/DOMProperty'].exports;
var reactdomlibReactDOMComponentTree__ReactDOMComponentFlags = $m['react-dom/lib/ReactDOMComponentFlags'].exports;

var reactdomlibReactDOMComponentTree__invariant = $m['fbjs/lib/invariant'].exports;

var reactdomlibReactDOMComponentTree__ATTR_NAME = reactdomlibReactDOMComponentTree__DOMProperty.ID_ATTRIBUTE_NAME;
var reactdomlibReactDOMComponentTree__Flags = reactdomlibReactDOMComponentTree__ReactDOMComponentFlags;

var reactdomlibReactDOMComponentTree__internalInstanceKey = '__reactInternalInstance$' + Math.random().toString(36).slice(2);

/**
 * Check if a given node should be cached.
 */
function reactdomlibReactDOMComponentTree__shouldPrecacheNode(node, nodeID) {
  return node.nodeType === 1 && node.getAttribute(reactdomlibReactDOMComponentTree__ATTR_NAME) === String(nodeID) || node.nodeType === 8 && node.nodeValue === ' react-text: ' + nodeID + ' ' || node.nodeType === 8 && node.nodeValue === ' react-empty: ' + nodeID + ' ';
}

/**
 * Drill down (through composites and empty components) until we get a host or
 * host text component.
 *
 * This is pretty polymorphic but unavoidable with the current structure we have
 * for `_renderedChildren`.
 */
function reactdomlibReactDOMComponentTree__getRenderedHostOrTextFromComponent(component) {
  var rendered;
  while (rendered = component._renderedComponent) {
    component = rendered;
  }
  return component;
}

/**
 * Populate `_hostNode` on the rendered host/text component with the given
 * DOM node. The passed `inst` can be a composite.
 */
function reactdomlibReactDOMComponentTree__precacheNode(inst, node) {
  var hostInst = reactdomlibReactDOMComponentTree__getRenderedHostOrTextFromComponent(inst);
  hostInst._hostNode = node;
  node[reactdomlibReactDOMComponentTree__internalInstanceKey] = hostInst;
}

function reactdomlibReactDOMComponentTree__uncacheNode(inst) {
  var node = inst._hostNode;
  if (node) {
    delete node[reactdomlibReactDOMComponentTree__internalInstanceKey];
    inst._hostNode = null;
  }
}

/**
 * Populate `_hostNode` on each child of `inst`, assuming that the children
 * match up with the DOM (element) children of `node`.
 *
 * We cache entire levels at once to avoid an n^2 problem where we access the
 * children of a node sequentially and have to walk from the start to our target
 * node every time.
 *
 * Since we update `_renderedChildren` and the actual DOM at (slightly)
 * different times, we could race here and see a newer `_renderedChildren` than
 * the DOM nodes we see. To avoid this, ReactMultiChild calls
 * `prepareToManageChildren` before we change `_renderedChildren`, at which
 * time the container's child nodes are always cached (until it unmounts).
 */
function reactdomlibReactDOMComponentTree__precacheChildNodes(inst, node) {
  if (inst._flags & reactdomlibReactDOMComponentTree__Flags.hasCachedChildNodes) {
    return;
  }
  var children = inst._renderedChildren;
  var childNode = node.firstChild;
  outer: for (var name in children) {
    if (!children.hasOwnProperty(name)) {
      continue;
    }
    var childInst = children[name];
    var childID = reactdomlibReactDOMComponentTree__getRenderedHostOrTextFromComponent(childInst)._domID;
    if (childID === 0) {
      // We're currently unmounting this child in ReactMultiChild; skip it.
      continue;
    }
    // We assume the child nodes are in the same order as the child instances.
    for (; childNode !== null; childNode = childNode.nextSibling) {
      if (reactdomlibReactDOMComponentTree__shouldPrecacheNode(childNode, childID)) {
        reactdomlibReactDOMComponentTree__precacheNode(childInst, childNode);
        continue outer;
      }
    }
    // We reached the end of the DOM children without finding an ID match.
    !false ? 'development' !== 'production' ? reactdomlibReactDOMComponentTree__invariant(false, 'Unable to find element with ID %s.', childID) : reactdomlibReactDOMComponentTree___prodInvariant('32', childID) : void 0;
  }
  inst._flags |= reactdomlibReactDOMComponentTree__Flags.hasCachedChildNodes;
}

/**
 * Given a DOM node, return the closest ReactDOMComponent or
 * ReactDOMTextComponent instance ancestor.
 */
function reactdomlibReactDOMComponentTree__getClosestInstanceFromNode(node) {
  if (node[reactdomlibReactDOMComponentTree__internalInstanceKey]) {
    return node[reactdomlibReactDOMComponentTree__internalInstanceKey];
  }

  // Walk up the tree until we find an ancestor whose instance we have cached.
  var parents = [];
  while (!node[reactdomlibReactDOMComponentTree__internalInstanceKey]) {
    parents.push(node);
    if (node.parentNode) {
      node = node.parentNode;
    } else {
      // Top of the tree. This node must not be part of a React tree (or is
      // unmounted, potentially).
      return null;
    }
  }

  var closest;
  var inst;
  for (; node && (inst = node[reactdomlibReactDOMComponentTree__internalInstanceKey]); node = parents.pop()) {
    closest = inst;
    if (parents.length) {
      reactdomlibReactDOMComponentTree__precacheChildNodes(inst, node);
    }
  }

  return closest;
}

/**
 * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
 * instance, or null if the node was not rendered by this React.
 */
function reactdomlibReactDOMComponentTree__getInstanceFromNode(node) {
  var inst = reactdomlibReactDOMComponentTree__getClosestInstanceFromNode(node);
  if (inst != null && inst._hostNode === node) {
    return inst;
  } else {
    return null;
  }
}

/**
 * Given a ReactDOMComponent or ReactDOMTextComponent, return the corresponding
 * DOM node.
 */
function reactdomlibReactDOMComponentTree__getNodeFromInstance(inst) {
  // Without this first invariant, passing a non-DOM-component triggers the next
  // invariant for a missing parent, which is super confusing.
  !(inst._hostNode !== undefined) ? 'development' !== 'production' ? reactdomlibReactDOMComponentTree__invariant(false, 'getNodeFromInstance: Invalid argument.') : reactdomlibReactDOMComponentTree___prodInvariant('33') : void 0;

  if (inst._hostNode) {
    return inst._hostNode;
  }

  // Walk up the tree until we find an ancestor whose DOM node we have cached.
  var parents = [];
  while (!inst._hostNode) {
    parents.push(inst);
    !inst._hostParent ? 'development' !== 'production' ? reactdomlibReactDOMComponentTree__invariant(false, 'React DOM tree root should always have a node reference.') : reactdomlibReactDOMComponentTree___prodInvariant('34') : void 0;
    inst = inst._hostParent;
  }

  // Now parents contains each ancestor that does *not* have a cached native
  // node, and `inst` is the deepest ancestor that does.
  for (; parents.length; inst = parents.pop()) {
    reactdomlibReactDOMComponentTree__precacheChildNodes(inst, inst._hostNode);
  }

  return inst._hostNode;
}

var reactdomlibReactDOMComponentTree__ReactDOMComponentTree = {
  getClosestInstanceFromNode: reactdomlibReactDOMComponentTree__getClosestInstanceFromNode,
  getInstanceFromNode: reactdomlibReactDOMComponentTree__getInstanceFromNode,
  getNodeFromInstance: reactdomlibReactDOMComponentTree__getNodeFromInstance,
  precacheChildNodes: reactdomlibReactDOMComponentTree__precacheChildNodes,
  precacheNode: reactdomlibReactDOMComponentTree__precacheNode,
  uncacheNode: reactdomlibReactDOMComponentTree__uncacheNode
};

$m['react-dom/lib/ReactDOMComponentTree'].exports = reactdomlibReactDOMComponentTree__ReactDOMComponentTree;
/*≠≠ node_modules/@yr/component/nod...m/lib/ReactDOMComponentTree.js ≠≠*/


/*== node_modules/@yr/component/nod...ct-dom/lib/isEventSupported.js ==*/
$m['react-dom/lib/isEventSupported'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibisEventSupported__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;

var reactdomlibisEventSupported__useHasFeature;
if (reactdomlibisEventSupported__ExecutionEnvironment.canUseDOM) {
  reactdomlibisEventSupported__useHasFeature = document.implementation && document.implementation.hasFeature &&
  // always returns true in newer browsers as per the standard.
  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
  document.implementation.hasFeature('', '') !== true;
}

/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
function reactdomlibisEventSupported__isEventSupported(eventNameSuffix, capture) {
  if (!reactdomlibisEventSupported__ExecutionEnvironment.canUseDOM || capture && !('addEventListener' in document)) {
    return false;
  }

  var eventName = 'on' + eventNameSuffix;
  var isSupported = eventName in document;

  if (!isSupported) {
    var element = document.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  if (!isSupported && reactdomlibisEventSupported__useHasFeature && eventNameSuffix === 'wheel') {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
  }

  return isSupported;
}

$m['react-dom/lib/isEventSupported'].exports = reactdomlibisEventSupported__isEventSupported;
/*≠≠ node_modules/@yr/component/nod...ct-dom/lib/isEventSupported.js ≠≠*/


/*== node_modules/@yr/component/nod.../getVendorPrefixedEventName.js ==*/
$m['react-dom/lib/getVendorPrefixedEventName'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibgetVendorPrefixedEventName__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;

/**
 * Generate a mapping of standard vendor prefixes using the defined style property and event name.
 *
 * @param {string} styleProp
 * @param {string} eventName
 * @returns {object}
 */
function reactdomlibgetVendorPrefixedEventName__makePrefixMap(styleProp, eventName) {
  var prefixes = {};

  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes['Webkit' + styleProp] = 'webkit' + eventName;
  prefixes['Moz' + styleProp] = 'moz' + eventName;
  prefixes['ms' + styleProp] = 'MS' + eventName;
  prefixes['O' + styleProp] = 'o' + eventName.toLowerCase();

  return prefixes;
}

/**
 * A list of event names to a configurable list of vendor prefixes.
 */
var reactdomlibgetVendorPrefixedEventName__vendorPrefixes = {
  animationend: reactdomlibgetVendorPrefixedEventName__makePrefixMap('Animation', 'AnimationEnd'),
  animationiteration: reactdomlibgetVendorPrefixedEventName__makePrefixMap('Animation', 'AnimationIteration'),
  animationstart: reactdomlibgetVendorPrefixedEventName__makePrefixMap('Animation', 'AnimationStart'),
  transitionend: reactdomlibgetVendorPrefixedEventName__makePrefixMap('Transition', 'TransitionEnd')
};

/**
 * Event names that have already been detected and prefixed (if applicable).
 */
var reactdomlibgetVendorPrefixedEventName__prefixedEventNames = {};

/**
 * Element to check for prefixes on.
 */
var reactdomlibgetVendorPrefixedEventName__style = {};

/**
 * Bootstrap if a DOM exists.
 */
if (reactdomlibgetVendorPrefixedEventName__ExecutionEnvironment.canUseDOM) {
  reactdomlibgetVendorPrefixedEventName__style = document.createElement('div').style;

  // On some platforms, in particular some releases of Android 4.x,
  // the un-prefixed "animation" and "transition" properties are defined on the
  // style object but the events that fire will still be prefixed, so we need
  // to check if the un-prefixed events are usable, and if not remove them from the map.
  if (!('AnimationEvent' in window)) {
    delete reactdomlibgetVendorPrefixedEventName__vendorPrefixes.animationend.animation;
    delete reactdomlibgetVendorPrefixedEventName__vendorPrefixes.animationiteration.animation;
    delete reactdomlibgetVendorPrefixedEventName__vendorPrefixes.animationstart.animation;
  }

  // Same as above
  if (!('TransitionEvent' in window)) {
    delete reactdomlibgetVendorPrefixedEventName__vendorPrefixes.transitionend.transition;
  }
}

/**
 * Attempts to determine the correct vendor prefixed event name.
 *
 * @param {string} eventName
 * @returns {string}
 */
function reactdomlibgetVendorPrefixedEventName__getVendorPrefixedEventName(eventName) {
  if (reactdomlibgetVendorPrefixedEventName__prefixedEventNames[eventName]) {
    return reactdomlibgetVendorPrefixedEventName__prefixedEventNames[eventName];
  } else if (!reactdomlibgetVendorPrefixedEventName__vendorPrefixes[eventName]) {
    return eventName;
  }

  var prefixMap = reactdomlibgetVendorPrefixedEventName__vendorPrefixes[eventName];

  for (var styleProp in prefixMap) {
    if (prefixMap.hasOwnProperty(styleProp) && styleProp in reactdomlibgetVendorPrefixedEventName__style) {
      return reactdomlibgetVendorPrefixedEventName__prefixedEventNames[eventName] = prefixMap[styleProp];
    }
  }

  return '';
}

$m['react-dom/lib/getVendorPrefixedEventName'].exports = reactdomlibgetVendorPrefixedEventName__getVendorPrefixedEventName;
/*≠≠ node_modules/@yr/component/nod.../getVendorPrefixedEventName.js ≠≠*/


/*== node_modules/@yr/component/nod...eact-dom/lib/accumulateInto.js ==*/
$m['react-dom/lib/accumulateInto'] = { exports: {} };
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var reactdomlibaccumulateInto___prodInvariant = $m['react-dom/lib/reactProdInvariant'].exports;

var reactdomlibaccumulateInto__invariant = $m['fbjs/lib/invariant'].exports;

/**
 * Accumulates items that must not be null or undefined into the first one. This
 * is used to conserve memory by avoiding array allocations, and thus sacrifices
 * API cleanness. Since `current` can be null before being passed in and not
 * null after this function, make sure to assign it back to `current`:
 *
 * `a = accumulateInto(a, b);`
 *
 * This API should be sparingly used. Try `accumulate` for something cleaner.
 *
 * @return {*|array<*>} An accumulation of items.
 */

function reactdomlibaccumulateInto__accumulateInto(current, next) {
  !(next != null) ? 'development' !== 'production' ? reactdomlibaccumulateInto__invariant(false, 'accumulateInto(...): Accumulated items must not be null or undefined.') : reactdomlibaccumulateInto___prodInvariant('30') : void 0;

  if (current == null) {
    return next;
  }

  // Both are not empty. Warning: Never call x.concat(y) when you are not
  // certain that x is an Array (x could be a string with concat method).
  if (Array.isArray(current)) {
    if (Array.isArray(next)) {
      current.push.apply(current, next);
      return current;
    }
    current.push(next);
    return current;
  }

  if (Array.isArray(next)) {
    // A bit too dangerous to mutate `next`.
    return [current].concat(next);
  }

  return [current, next];
}

$m['react-dom/lib/accumulateInto'].exports = reactdomlibaccumulateInto__accumulateInto;
/*≠≠ node_modules/@yr/component/nod...eact-dom/lib/accumulateInto.js ≠≠*/


/*== node_modules/@yr/component/nod...ct-dom/lib/EventPluginUtils.js ==*/
$m['react-dom/lib/EventPluginUtils'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibEventPluginUtils___prodInvariant = $m['react-dom/lib/reactProdInvariant'].exports;

var reactdomlibEventPluginUtils__ReactErrorUtils = $m['react-dom/lib/ReactErrorUtils'].exports;

var reactdomlibEventPluginUtils__invariant = $m['fbjs/lib/invariant'].exports;
var reactdomlibEventPluginUtils__warning = $m['fbjs/lib/warning'].exports;

/**
 * Injected dependencies:
 */

/**
 * - `ComponentTree`: [required] Module that can convert between React instances
 *   and actual node references.
 */
var reactdomlibEventPluginUtils__ComponentTree;
var reactdomlibEventPluginUtils__TreeTraversal;
var reactdomlibEventPluginUtils__injection = {
  injectComponentTree: function (Injected) {
    reactdomlibEventPluginUtils__ComponentTree = Injected;
    if ('development' !== 'production') {
      'development' !== 'production' ? reactdomlibEventPluginUtils__warning(Injected && Injected.getNodeFromInstance && Injected.getInstanceFromNode, 'EventPluginUtils.injection.injectComponentTree(...): Injected ' + 'module is missing getNodeFromInstance or getInstanceFromNode.') : void 0;
    }
  },
  injectTreeTraversal: function (Injected) {
    reactdomlibEventPluginUtils__TreeTraversal = Injected;
    if ('development' !== 'production') {
      'development' !== 'production' ? reactdomlibEventPluginUtils__warning(Injected && Injected.isAncestor && Injected.getLowestCommonAncestor, 'EventPluginUtils.injection.injectTreeTraversal(...): Injected ' + 'module is missing isAncestor or getLowestCommonAncestor.') : void 0;
    }
  }
};

function reactdomlibEventPluginUtils__isEndish(topLevelType) {
  return topLevelType === 'topMouseUp' || topLevelType === 'topTouchEnd' || topLevelType === 'topTouchCancel';
}

function reactdomlibEventPluginUtils__isMoveish(topLevelType) {
  return topLevelType === 'topMouseMove' || topLevelType === 'topTouchMove';
}
function reactdomlibEventPluginUtils__isStartish(topLevelType) {
  return topLevelType === 'topMouseDown' || topLevelType === 'topTouchStart';
}

var reactdomlibEventPluginUtils__validateEventDispatches;
if ('development' !== 'production') {
  reactdomlibEventPluginUtils__validateEventDispatches = function (event) {
    var dispatchListeners = event._dispatchListeners;
    var dispatchInstances = event._dispatchInstances;

    var listenersIsArr = Array.isArray(dispatchListeners);
    var listenersLen = listenersIsArr ? dispatchListeners.length : dispatchListeners ? 1 : 0;

    var instancesIsArr = Array.isArray(dispatchInstances);
    var instancesLen = instancesIsArr ? dispatchInstances.length : dispatchInstances ? 1 : 0;

    'development' !== 'production' ? reactdomlibEventPluginUtils__warning(instancesIsArr === listenersIsArr && instancesLen === listenersLen, 'EventPluginUtils: Invalid `event`.') : void 0;
  };
}

/**
 * Dispatch the event to the listener.
 * @param {SyntheticEvent} event SyntheticEvent to handle
 * @param {boolean} simulated If the event is simulated (changes exn behavior)
 * @param {function} listener Application-level callback
 * @param {*} inst Internal component instance
 */
function reactdomlibEventPluginUtils__executeDispatch(event, simulated, listener, inst) {
  var type = event.type || 'unknown-event';
  event.currentTarget = reactdomlibEventPluginUtils__EventPluginUtils.getNodeFromInstance(inst);
  if (simulated) {
    reactdomlibEventPluginUtils__ReactErrorUtils.invokeGuardedCallbackWithCatch(type, listener, event);
  } else {
    reactdomlibEventPluginUtils__ReactErrorUtils.invokeGuardedCallback(type, listener, event);
  }
  event.currentTarget = null;
}

/**
 * Standard/simple iteration through an event's collected dispatches.
 */
function reactdomlibEventPluginUtils__executeDispatchesInOrder(event, simulated) {
  var dispatchListeners = event._dispatchListeners;
  var dispatchInstances = event._dispatchInstances;
  if ('development' !== 'production') {
    reactdomlibEventPluginUtils__validateEventDispatches(event);
  }
  if (Array.isArray(dispatchListeners)) {
    for (var i = 0; i < dispatchListeners.length; i++) {
      if (event.isPropagationStopped()) {
        break;
      }
      // Listeners and Instances are two parallel arrays that are always in sync.
      reactdomlibEventPluginUtils__executeDispatch(event, simulated, dispatchListeners[i], dispatchInstances[i]);
    }
  } else if (dispatchListeners) {
    reactdomlibEventPluginUtils__executeDispatch(event, simulated, dispatchListeners, dispatchInstances);
  }
  event._dispatchListeners = null;
  event._dispatchInstances = null;
}

/**
 * Standard/simple iteration through an event's collected dispatches, but stops
 * at the first dispatch execution returning true, and returns that id.
 *
 * @return {?string} id of the first dispatch execution who's listener returns
 * true, or null if no listener returned true.
 */
function reactdomlibEventPluginUtils__executeDispatchesInOrderStopAtTrueImpl(event) {
  var dispatchListeners = event._dispatchListeners;
  var dispatchInstances = event._dispatchInstances;
  if ('development' !== 'production') {
    reactdomlibEventPluginUtils__validateEventDispatches(event);
  }
  if (Array.isArray(dispatchListeners)) {
    for (var i = 0; i < dispatchListeners.length; i++) {
      if (event.isPropagationStopped()) {
        break;
      }
      // Listeners and Instances are two parallel arrays that are always in sync.
      if (dispatchListeners[i](event, dispatchInstances[i])) {
        return dispatchInstances[i];
      }
    }
  } else if (dispatchListeners) {
    if (dispatchListeners(event, dispatchInstances)) {
      return dispatchInstances;
    }
  }
  return null;
}

/**
 * @see executeDispatchesInOrderStopAtTrueImpl
 */
function reactdomlibEventPluginUtils__executeDispatchesInOrderStopAtTrue(event) {
  var ret = reactdomlibEventPluginUtils__executeDispatchesInOrderStopAtTrueImpl(event);
  event._dispatchInstances = null;
  event._dispatchListeners = null;
  return ret;
}

/**
 * Execution of a "direct" dispatch - there must be at most one dispatch
 * accumulated on the event or it is considered an error. It doesn't really make
 * sense for an event with multiple dispatches (bubbled) to keep track of the
 * return values at each dispatch execution, but it does tend to make sense when
 * dealing with "direct" dispatches.
 *
 * @return {*} The return value of executing the single dispatch.
 */
function reactdomlibEventPluginUtils__executeDirectDispatch(event) {
  if ('development' !== 'production') {
    reactdomlibEventPluginUtils__validateEventDispatches(event);
  }
  var dispatchListener = event._dispatchListeners;
  var dispatchInstance = event._dispatchInstances;
  !!Array.isArray(dispatchListener) ? 'development' !== 'production' ? reactdomlibEventPluginUtils__invariant(false, 'executeDirectDispatch(...): Invalid `event`.') : reactdomlibEventPluginUtils___prodInvariant('103') : void 0;
  event.currentTarget = dispatchListener ? reactdomlibEventPluginUtils__EventPluginUtils.getNodeFromInstance(dispatchInstance) : null;
  var res = dispatchListener ? dispatchListener(event) : null;
  event.currentTarget = null;
  event._dispatchListeners = null;
  event._dispatchInstances = null;
  return res;
}

/**
 * @param {SyntheticEvent} event
 * @return {boolean} True iff number of dispatches accumulated is greater than 0.
 */
function reactdomlibEventPluginUtils__hasDispatches(event) {
  return !!event._dispatchListeners;
}

/**
 * General utilities that are useful in creating custom Event Plugins.
 */
var reactdomlibEventPluginUtils__EventPluginUtils = {
  isEndish: reactdomlibEventPluginUtils__isEndish,
  isMoveish: reactdomlibEventPluginUtils__isMoveish,
  isStartish: reactdomlibEventPluginUtils__isStartish,

  executeDirectDispatch: reactdomlibEventPluginUtils__executeDirectDispatch,
  executeDispatchesInOrder: reactdomlibEventPluginUtils__executeDispatchesInOrder,
  executeDispatchesInOrderStopAtTrue: reactdomlibEventPluginUtils__executeDispatchesInOrderStopAtTrue,
  hasDispatches: reactdomlibEventPluginUtils__hasDispatches,

  getInstanceFromNode: function (node) {
    return reactdomlibEventPluginUtils__ComponentTree.getInstanceFromNode(node);
  },
  getNodeFromInstance: function (node) {
    return reactdomlibEventPluginUtils__ComponentTree.getNodeFromInstance(node);
  },
  isAncestor: function (a, b) {
    return reactdomlibEventPluginUtils__TreeTraversal.isAncestor(a, b);
  },
  getLowestCommonAncestor: function (a, b) {
    return reactdomlibEventPluginUtils__TreeTraversal.getLowestCommonAncestor(a, b);
  },
  getParentInstance: function (inst) {
    return reactdomlibEventPluginUtils__TreeTraversal.getParentInstance(inst);
  },
  traverseTwoPhase: function (target, fn, arg) {
    return reactdomlibEventPluginUtils__TreeTraversal.traverseTwoPhase(target, fn, arg);
  },
  traverseEnterLeave: function (from, to, fn, argFrom, argTo) {
    return reactdomlibEventPluginUtils__TreeTraversal.traverseEnterLeave(from, to, fn, argFrom, argTo);
  },

  injection: reactdomlibEventPluginUtils__injection
};

$m['react-dom/lib/EventPluginUtils'].exports = reactdomlibEventPluginUtils__EventPluginUtils;
/*≠≠ node_modules/@yr/component/nod...ct-dom/lib/EventPluginUtils.js ≠≠*/


/*== node_modules/@yr/component/nod...eact-dom/lib/EventPluginHub.js ==*/
$m['react-dom/lib/EventPluginHub'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibEventPluginHub___prodInvariant = $m['react-dom/lib/reactProdInvariant'].exports;

var reactdomlibEventPluginHub__EventPluginRegistry = $m['react-dom/lib/EventPluginRegistry'].exports;
var reactdomlibEventPluginHub__EventPluginUtils = $m['react-dom/lib/EventPluginUtils'].exports;
var reactdomlibEventPluginHub__ReactErrorUtils = $m['react-dom/lib/ReactErrorUtils'].exports;

var reactdomlibEventPluginHub__accumulateInto = $m['react-dom/lib/accumulateInto'].exports;
var reactdomlibEventPluginHub__forEachAccumulated = $m['react-dom/lib/forEachAccumulated'].exports;
var reactdomlibEventPluginHub__invariant = $m['fbjs/lib/invariant'].exports;

/**
 * Internal store for event listeners
 */
var reactdomlibEventPluginHub__listenerBank = {};

/**
 * Internal queue of events that have accumulated their dispatches and are
 * waiting to have their dispatches executed.
 */
var reactdomlibEventPluginHub__eventQueue = null;

/**
 * Dispatches an event and releases it back into the pool, unless persistent.
 *
 * @param {?object} event Synthetic event to be dispatched.
 * @param {boolean} simulated If the event is simulated (changes exn behavior)
 * @private
 */
var reactdomlibEventPluginHub__executeDispatchesAndRelease = function (event, simulated) {
  if (event) {
    reactdomlibEventPluginHub__EventPluginUtils.executeDispatchesInOrder(event, simulated);

    if (!event.isPersistent()) {
      event.constructor.release(event);
    }
  }
};
var reactdomlibEventPluginHub__executeDispatchesAndReleaseSimulated = function (e) {
  return reactdomlibEventPluginHub__executeDispatchesAndRelease(e, true);
};
var reactdomlibEventPluginHub__executeDispatchesAndReleaseTopLevel = function (e) {
  return reactdomlibEventPluginHub__executeDispatchesAndRelease(e, false);
};

var reactdomlibEventPluginHub__getDictionaryKey = function (inst) {
  // Prevents V8 performance issue:
  // https://github.com/facebook/react/pull/7232
  return '.' + inst._rootNodeID;
};

function reactdomlibEventPluginHub__isInteractive(tag) {
  return tag === 'button' || tag === 'input' || tag === 'select' || tag === 'textarea';
}

function reactdomlibEventPluginHub__shouldPreventMouseEvent(name, type, props) {
  switch (name) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
      return !!(props.disabled && reactdomlibEventPluginHub__isInteractive(type));
    default:
      return false;
  }
}

/**
 * This is a unified interface for event plugins to be installed and configured.
 *
 * Event plugins can implement the following properties:
 *
 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
 *     Required. When a top-level event is fired, this method is expected to
 *     extract synthetic events that will in turn be queued and dispatched.
 *
 *   `eventTypes` {object}
 *     Optional, plugins that fire events must publish a mapping of registration
 *     names that are used to register listeners. Values of this mapping must
 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
 *
 *   `executeDispatch` {function(object, function, string)}
 *     Optional, allows plugins to override how an event gets dispatched. By
 *     default, the listener is simply invoked.
 *
 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
 *
 * @public
 */
var reactdomlibEventPluginHub__EventPluginHub = {
  /**
   * Methods for injecting dependencies.
   */
  injection: {
    /**
     * @param {array} InjectedEventPluginOrder
     * @public
     */
    injectEventPluginOrder: reactdomlibEventPluginHub__EventPluginRegistry.injectEventPluginOrder,

    /**
     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
     */
    injectEventPluginsByName: reactdomlibEventPluginHub__EventPluginRegistry.injectEventPluginsByName
  },

  /**
   * Stores `listener` at `listenerBank[registrationName][key]`. Is idempotent.
   *
   * @param {object} inst The instance, which is the source of events.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @param {function} listener The callback to store.
   */
  putListener: function (inst, registrationName, listener) {
    !(typeof listener === 'function') ? 'development' !== 'production' ? reactdomlibEventPluginHub__invariant(false, 'Expected %s listener to be a function, instead got type %s', registrationName, typeof listener) : reactdomlibEventPluginHub___prodInvariant('94', registrationName, typeof listener) : void 0;

    var key = reactdomlibEventPluginHub__getDictionaryKey(inst);
    var bankForRegistrationName = reactdomlibEventPluginHub__listenerBank[registrationName] || (reactdomlibEventPluginHub__listenerBank[registrationName] = {});
    bankForRegistrationName[key] = listener;

    var PluginModule = reactdomlibEventPluginHub__EventPluginRegistry.registrationNameModules[registrationName];
    if (PluginModule && PluginModule.didPutListener) {
      PluginModule.didPutListener(inst, registrationName, listener);
    }
  },

  /**
   * @param {object} inst The instance, which is the source of events.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @return {?function} The stored callback.
   */
  getListener: function (inst, registrationName) {
    // TODO: shouldPreventMouseEvent is DOM-specific and definitely should not
    // live here; needs to be moved to a better place soon
    var bankForRegistrationName = reactdomlibEventPluginHub__listenerBank[registrationName];
    if (reactdomlibEventPluginHub__shouldPreventMouseEvent(registrationName, inst._currentElement.type, inst._currentElement.props)) {
      return null;
    }
    var key = reactdomlibEventPluginHub__getDictionaryKey(inst);
    return bankForRegistrationName && bankForRegistrationName[key];
  },

  /**
   * Deletes a listener from the registration bank.
   *
   * @param {object} inst The instance, which is the source of events.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   */
  deleteListener: function (inst, registrationName) {
    var PluginModule = reactdomlibEventPluginHub__EventPluginRegistry.registrationNameModules[registrationName];
    if (PluginModule && PluginModule.willDeleteListener) {
      PluginModule.willDeleteListener(inst, registrationName);
    }

    var bankForRegistrationName = reactdomlibEventPluginHub__listenerBank[registrationName];
    // TODO: This should never be null -- when is it?
    if (bankForRegistrationName) {
      var key = reactdomlibEventPluginHub__getDictionaryKey(inst);
      delete bankForRegistrationName[key];
    }
  },

  /**
   * Deletes all listeners for the DOM element with the supplied ID.
   *
   * @param {object} inst The instance, which is the source of events.
   */
  deleteAllListeners: function (inst) {
    var key = reactdomlibEventPluginHub__getDictionaryKey(inst);
    for (var registrationName in reactdomlibEventPluginHub__listenerBank) {
      if (!reactdomlibEventPluginHub__listenerBank.hasOwnProperty(registrationName)) {
        continue;
      }

      if (!reactdomlibEventPluginHub__listenerBank[registrationName][key]) {
        continue;
      }

      var PluginModule = reactdomlibEventPluginHub__EventPluginRegistry.registrationNameModules[registrationName];
      if (PluginModule && PluginModule.willDeleteListener) {
        PluginModule.willDeleteListener(inst, registrationName);
      }

      delete reactdomlibEventPluginHub__listenerBank[registrationName][key];
    }
  },

  /**
   * Allows registered plugins an opportunity to extract events from top-level
   * native browser events.
   *
   * @return {*} An accumulation of synthetic events.
   * @internal
   */
  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    var events;
    var plugins = reactdomlibEventPluginHub__EventPluginRegistry.plugins;
    for (var i = 0; i < plugins.length; i++) {
      // Not every plugin in the ordering may be loaded at runtime.
      var possiblePlugin = plugins[i];
      if (possiblePlugin) {
        var extractedEvents = possiblePlugin.extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget);
        if (extractedEvents) {
          events = reactdomlibEventPluginHub__accumulateInto(events, extractedEvents);
        }
      }
    }
    return events;
  },

  /**
   * Enqueues a synthetic event that should be dispatched when
   * `processEventQueue` is invoked.
   *
   * @param {*} events An accumulation of synthetic events.
   * @internal
   */
  enqueueEvents: function (events) {
    if (events) {
      reactdomlibEventPluginHub__eventQueue = reactdomlibEventPluginHub__accumulateInto(reactdomlibEventPluginHub__eventQueue, events);
    }
  },

  /**
   * Dispatches all synthetic events on the event queue.
   *
   * @internal
   */
  processEventQueue: function (simulated) {
    // Set `eventQueue` to null before processing it so that we can tell if more
    // events get enqueued while processing.
    var processingEventQueue = reactdomlibEventPluginHub__eventQueue;
    reactdomlibEventPluginHub__eventQueue = null;
    if (simulated) {
      reactdomlibEventPluginHub__forEachAccumulated(processingEventQueue, reactdomlibEventPluginHub__executeDispatchesAndReleaseSimulated);
    } else {
      reactdomlibEventPluginHub__forEachAccumulated(processingEventQueue, reactdomlibEventPluginHub__executeDispatchesAndReleaseTopLevel);
    }
    !!reactdomlibEventPluginHub__eventQueue ? 'development' !== 'production' ? reactdomlibEventPluginHub__invariant(false, 'processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.') : reactdomlibEventPluginHub___prodInvariant('95') : void 0;
    // This would be a good time to rethrow if any of the event handlers threw.
    reactdomlibEventPluginHub__ReactErrorUtils.rethrowCaughtError();
  },

  /**
   * These are needed for tests only. Do not use!
   */
  __purge: function () {
    reactdomlibEventPluginHub__listenerBank = {};
  },

  __getListenerBank: function () {
    return reactdomlibEventPluginHub__listenerBank;
  }
};

$m['react-dom/lib/EventPluginHub'].exports = reactdomlibEventPluginHub__EventPluginHub;
/*≠≠ node_modules/@yr/component/nod...eact-dom/lib/EventPluginHub.js ≠≠*/


/*== node_modules/@yr/component/nod.../lib/ReactEventEmitterMixin.js ==*/
$m['react-dom/lib/ReactEventEmitterMixin'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactEventEmitterMixin__EventPluginHub = $m['react-dom/lib/EventPluginHub'].exports;

function reactdomlibReactEventEmitterMixin__runEventQueueInBatch(events) {
  reactdomlibReactEventEmitterMixin__EventPluginHub.enqueueEvents(events);
  reactdomlibReactEventEmitterMixin__EventPluginHub.processEventQueue(false);
}

var reactdomlibReactEventEmitterMixin__ReactEventEmitterMixin = {
  /**
   * Streams a fired top-level event to `EventPluginHub` where plugins have the
   * opportunity to create `ReactEvent`s to be dispatched.
   */
  handleTopLevel: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    var events = reactdomlibReactEventEmitterMixin__EventPluginHub.extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget);
    reactdomlibReactEventEmitterMixin__runEventQueueInBatch(events);
  }
};

$m['react-dom/lib/ReactEventEmitterMixin'].exports = reactdomlibReactEventEmitterMixin__ReactEventEmitterMixin;
/*≠≠ node_modules/@yr/component/nod.../lib/ReactEventEmitterMixin.js ≠≠*/


/*== node_modules/@yr/component/nod...ib/ReactBrowserEventEmitter.js ==*/
$m['react-dom/lib/ReactBrowserEventEmitter'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactBrowserEventEmitter___assign = $m['object-assign'].exports;

var reactdomlibReactBrowserEventEmitter__EventPluginRegistry = $m['react-dom/lib/EventPluginRegistry'].exports;
var reactdomlibReactBrowserEventEmitter__ReactEventEmitterMixin = $m['react-dom/lib/ReactEventEmitterMixin'].exports;
var reactdomlibReactBrowserEventEmitter__ViewportMetrics = $m['react-dom/lib/ViewportMetrics'].exports;

var reactdomlibReactBrowserEventEmitter__getVendorPrefixedEventName = $m['react-dom/lib/getVendorPrefixedEventName'].exports;
var reactdomlibReactBrowserEventEmitter__isEventSupported = $m['react-dom/lib/isEventSupported'].exports;

/**
 * Summary of `ReactBrowserEventEmitter` event handling:
 *
 *  - Top-level delegation is used to trap most native browser events. This
 *    may only occur in the main thread and is the responsibility of
 *    ReactEventListener, which is injected and can therefore support pluggable
 *    event sources. This is the only work that occurs in the main thread.
 *
 *  - We normalize and de-duplicate events to account for browser quirks. This
 *    may be done in the worker thread.
 *
 *  - Forward these native events (with the associated top-level type used to
 *    trap it) to `EventPluginHub`, which in turn will ask plugins if they want
 *    to extract any synthetic events.
 *
 *  - The `EventPluginHub` will then process each event by annotating them with
 *    "dispatches", a sequence of listeners and IDs that care about that event.
 *
 *  - The `EventPluginHub` then dispatches the events.
 *
 * Overview of React and the event system:
 *
 * +------------+    .
 * |    DOM     |    .
 * +------------+    .
 *       |           .
 *       v           .
 * +------------+    .
 * | ReactEvent |    .
 * |  Listener  |    .
 * +------------+    .                         +-----------+
 *       |           .               +--------+|SimpleEvent|
 *       |           .               |         |Plugin     |
 * +-----|------+    .               v         +-----------+
 * |     |      |    .    +--------------+                    +------------+
 * |     +-----------.--->|EventPluginHub|                    |    Event   |
 * |            |    .    |              |     +-----------+  | Propagators|
 * | ReactEvent |    .    |              |     |TapEvent   |  |------------|
 * |  Emitter   |    .    |              |<---+|Plugin     |  |other plugin|
 * |            |    .    |              |     +-----------+  |  utilities |
 * |     +-----------.--->|              |                    +------------+
 * |     |      |    .    +--------------+
 * +-----|------+    .                ^        +-----------+
 *       |           .                |        |Enter/Leave|
 *       +           .                +-------+|Plugin     |
 * +-------------+   .                         +-----------+
 * | application |   .
 * |-------------|   .
 * |             |   .
 * |             |   .
 * +-------------+   .
 *                   .
 *    React Core     .  General Purpose Event Plugin System
 */

var reactdomlibReactBrowserEventEmitter__hasEventPageXY;
var reactdomlibReactBrowserEventEmitter__alreadyListeningTo = {};
var reactdomlibReactBrowserEventEmitter__isMonitoringScrollValue = false;
var reactdomlibReactBrowserEventEmitter__reactTopListenersCounter = 0;

// For events like 'submit' which don't consistently bubble (which we trap at a
// lower node than `document`), binding at `document` would cause duplicate
// events so we don't include them here
var reactdomlibReactBrowserEventEmitter__topEventMapping = {
  topAbort: 'abort',
  topAnimationEnd: reactdomlibReactBrowserEventEmitter__getVendorPrefixedEventName('animationend') || 'animationend',
  topAnimationIteration: reactdomlibReactBrowserEventEmitter__getVendorPrefixedEventName('animationiteration') || 'animationiteration',
  topAnimationStart: reactdomlibReactBrowserEventEmitter__getVendorPrefixedEventName('animationstart') || 'animationstart',
  topBlur: 'blur',
  topCanPlay: 'canplay',
  topCanPlayThrough: 'canplaythrough',
  topChange: 'change',
  topClick: 'click',
  topCompositionEnd: 'compositionend',
  topCompositionStart: 'compositionstart',
  topCompositionUpdate: 'compositionupdate',
  topContextMenu: 'contextmenu',
  topCopy: 'copy',
  topCut: 'cut',
  topDoubleClick: 'dblclick',
  topDrag: 'drag',
  topDragEnd: 'dragend',
  topDragEnter: 'dragenter',
  topDragExit: 'dragexit',
  topDragLeave: 'dragleave',
  topDragOver: 'dragover',
  topDragStart: 'dragstart',
  topDrop: 'drop',
  topDurationChange: 'durationchange',
  topEmptied: 'emptied',
  topEncrypted: 'encrypted',
  topEnded: 'ended',
  topError: 'error',
  topFocus: 'focus',
  topInput: 'input',
  topKeyDown: 'keydown',
  topKeyPress: 'keypress',
  topKeyUp: 'keyup',
  topLoadedData: 'loadeddata',
  topLoadedMetadata: 'loadedmetadata',
  topLoadStart: 'loadstart',
  topMouseDown: 'mousedown',
  topMouseMove: 'mousemove',
  topMouseOut: 'mouseout',
  topMouseOver: 'mouseover',
  topMouseUp: 'mouseup',
  topPaste: 'paste',
  topPause: 'pause',
  topPlay: 'play',
  topPlaying: 'playing',
  topProgress: 'progress',
  topRateChange: 'ratechange',
  topScroll: 'scroll',
  topSeeked: 'seeked',
  topSeeking: 'seeking',
  topSelectionChange: 'selectionchange',
  topStalled: 'stalled',
  topSuspend: 'suspend',
  topTextInput: 'textInput',
  topTimeUpdate: 'timeupdate',
  topTouchCancel: 'touchcancel',
  topTouchEnd: 'touchend',
  topTouchMove: 'touchmove',
  topTouchStart: 'touchstart',
  topTransitionEnd: reactdomlibReactBrowserEventEmitter__getVendorPrefixedEventName('transitionend') || 'transitionend',
  topVolumeChange: 'volumechange',
  topWaiting: 'waiting',
  topWheel: 'wheel'
};

/**
 * To ensure no conflicts with other potential React instances on the page
 */
var reactdomlibReactBrowserEventEmitter__topListenersIDKey = '_reactListenersID' + String(Math.random()).slice(2);

function reactdomlibReactBrowserEventEmitter__getListeningForDocument(mountAt) {
  // In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
  // directly.
  if (!Object.prototype.hasOwnProperty.call(mountAt, reactdomlibReactBrowserEventEmitter__topListenersIDKey)) {
    mountAt[reactdomlibReactBrowserEventEmitter__topListenersIDKey] = reactdomlibReactBrowserEventEmitter__reactTopListenersCounter++;
    reactdomlibReactBrowserEventEmitter__alreadyListeningTo[mountAt[reactdomlibReactBrowserEventEmitter__topListenersIDKey]] = {};
  }
  return reactdomlibReactBrowserEventEmitter__alreadyListeningTo[mountAt[reactdomlibReactBrowserEventEmitter__topListenersIDKey]];
}

/**
 * `ReactBrowserEventEmitter` is used to attach top-level event listeners. For
 * example:
 *
 *   EventPluginHub.putListener('myID', 'onClick', myFunction);
 *
 * This would allocate a "registration" of `('onClick', myFunction)` on 'myID'.
 *
 * @internal
 */
var reactdomlibReactBrowserEventEmitter__ReactBrowserEventEmitter = reactdomlibReactBrowserEventEmitter___assign({}, reactdomlibReactBrowserEventEmitter__ReactEventEmitterMixin, {
  /**
   * Injectable event backend
   */
  ReactEventListener: null,

  injection: {
    /**
     * @param {object} ReactEventListener
     */
    injectReactEventListener: function (ReactEventListener) {
      ReactEventListener.setHandleTopLevel(reactdomlibReactBrowserEventEmitter__ReactBrowserEventEmitter.handleTopLevel);
      reactdomlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener = ReactEventListener;
    }
  },

  /**
   * Sets whether or not any created callbacks should be enabled.
   *
   * @param {boolean} enabled True if callbacks should be enabled.
   */
  setEnabled: function (enabled) {
    if (reactdomlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener) {
      reactdomlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);
    }
  },

  /**
   * @return {boolean} True if callbacks are enabled.
   */
  isEnabled: function () {
    return !!(reactdomlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener && reactdomlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.isEnabled());
  },

  /**
   * We listen for bubbled touch events on the document object.
   *
   * Firefox v8.01 (and possibly others) exhibited strange behavior when
   * mounting `onmousemove` events at some node that was not the document
   * element. The symptoms were that if your mouse is not moving over something
   * contained within that mount point (for example on the background) the
   * top-level listeners for `onmousemove` won't be called. However, if you
   * register the `mousemove` on the document object, then it will of course
   * catch all `mousemove`s. This along with iOS quirks, justifies restricting
   * top-level listeners to the document object only, at least for these
   * movement types of events and possibly all events.
   *
   * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
   *
   * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
   * they bubble to document.
   *
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @param {object} contentDocumentHandle Document which owns the container
   */
  listenTo: function (registrationName, contentDocumentHandle) {
    var mountAt = contentDocumentHandle;
    var isListening = reactdomlibReactBrowserEventEmitter__getListeningForDocument(mountAt);
    var dependencies = reactdomlibReactBrowserEventEmitter__EventPluginRegistry.registrationNameDependencies[registrationName];

    for (var i = 0; i < dependencies.length; i++) {
      var dependency = dependencies[i];
      if (!(isListening.hasOwnProperty(dependency) && isListening[dependency])) {
        if (dependency === 'topWheel') {
          if (reactdomlibReactBrowserEventEmitter__isEventSupported('wheel')) {
            reactdomlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent('topWheel', 'wheel', mountAt);
          } else if (reactdomlibReactBrowserEventEmitter__isEventSupported('mousewheel')) {
            reactdomlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent('topWheel', 'mousewheel', mountAt);
          } else {
            // Firefox needs to capture a different mouse scroll event.
            // @see http://www.quirksmode.org/dom/events/tests/scroll.html
            reactdomlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent('topWheel', 'DOMMouseScroll', mountAt);
          }
        } else if (dependency === 'topScroll') {
          if (reactdomlibReactBrowserEventEmitter__isEventSupported('scroll', true)) {
            reactdomlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent('topScroll', 'scroll', mountAt);
          } else {
            reactdomlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent('topScroll', 'scroll', reactdomlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE);
          }
        } else if (dependency === 'topFocus' || dependency === 'topBlur') {
          if (reactdomlibReactBrowserEventEmitter__isEventSupported('focus', true)) {
            reactdomlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent('topFocus', 'focus', mountAt);
            reactdomlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent('topBlur', 'blur', mountAt);
          } else if (reactdomlibReactBrowserEventEmitter__isEventSupported('focusin')) {
            // IE has `focusin` and `focusout` events which bubble.
            // @see http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html
            reactdomlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent('topFocus', 'focusin', mountAt);
            reactdomlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent('topBlur', 'focusout', mountAt);
          }

          // to make sure blur and focus event listeners are only attached once
          isListening.topBlur = true;
          isListening.topFocus = true;
        } else if (reactdomlibReactBrowserEventEmitter__topEventMapping.hasOwnProperty(dependency)) {
          reactdomlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(dependency, reactdomlibReactBrowserEventEmitter__topEventMapping[dependency], mountAt);
        }

        isListening[dependency] = true;
      }
    }
  },

  trapBubbledEvent: function (topLevelType, handlerBaseName, handle) {
    return reactdomlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelType, handlerBaseName, handle);
  },

  trapCapturedEvent: function (topLevelType, handlerBaseName, handle) {
    return reactdomlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelType, handlerBaseName, handle);
  },

  /**
   * Protect against document.createEvent() returning null
   * Some popup blocker extensions appear to do this:
   * https://github.com/facebook/react/issues/6887
   */
  supportsEventPageXY: function () {
    if (!document.createEvent) {
      return false;
    }
    var ev = document.createEvent('MouseEvent');
    return ev != null && 'pageX' in ev;
  },

  /**
   * Listens to window scroll and resize events. We cache scroll values so that
   * application code can access them without triggering reflows.
   *
   * ViewportMetrics is only used by SyntheticMouse/TouchEvent and only when
   * pageX/pageY isn't supported (legacy browsers).
   *
   * NOTE: Scroll events do not bubble.
   *
   * @see http://www.quirksmode.org/dom/events/scroll.html
   */
  ensureScrollValueMonitoring: function () {
    if (reactdomlibReactBrowserEventEmitter__hasEventPageXY === undefined) {
      reactdomlibReactBrowserEventEmitter__hasEventPageXY = reactdomlibReactBrowserEventEmitter__ReactBrowserEventEmitter.supportsEventPageXY();
    }
    if (!reactdomlibReactBrowserEventEmitter__hasEventPageXY && !reactdomlibReactBrowserEventEmitter__isMonitoringScrollValue) {
      var refresh = reactdomlibReactBrowserEventEmitter__ViewportMetrics.refreshScrollValues;
      reactdomlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);
      reactdomlibReactBrowserEventEmitter__isMonitoringScrollValue = true;
    }
  }
});

$m['react-dom/lib/ReactBrowserEventEmitter'].exports = reactdomlibReactBrowserEventEmitter__ReactBrowserEventEmitter;
/*≠≠ node_modules/@yr/component/nod...ib/ReactBrowserEventEmitter.js ≠≠*/


/*== node_modules/@yr/component/nod...eact-dom/lib/setTextContent.js ==*/
$m['react-dom/lib/setTextContent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibsetTextContent__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;
var reactdomlibsetTextContent__escapeTextContentForBrowser = $m['react-dom/lib/escapeTextContentForBrowser'].exports;
var reactdomlibsetTextContent__setInnerHTML = $m['react-dom/lib/setInnerHTML'].exports;

/**
 * Set the textContent property of a node, ensuring that whitespace is preserved
 * even in IE8. innerText is a poor substitute for textContent and, among many
 * issues, inserts <br> instead of the literal newline chars. innerHTML behaves
 * as it should.
 *
 * @param {DOMElement} node
 * @param {string} text
 * @internal
 */
var reactdomlibsetTextContent__setTextContent = function (node, text) {
  if (text) {
    var firstChild = node.firstChild;

    if (firstChild && firstChild === node.lastChild && firstChild.nodeType === 3) {
      firstChild.nodeValue = text;
      return;
    }
  }
  node.textContent = text;
};

if (reactdomlibsetTextContent__ExecutionEnvironment.canUseDOM) {
  if (!('textContent' in document.documentElement)) {
    reactdomlibsetTextContent__setTextContent = function (node, text) {
      if (node.nodeType === 3) {
        node.nodeValue = text;
        return;
      }
      reactdomlibsetTextContent__setInnerHTML(node, reactdomlibsetTextContent__escapeTextContentForBrowser(text));
    };
  }
}

$m['react-dom/lib/setTextContent'].exports = reactdomlibsetTextContent__setTextContent;
/*≠≠ node_modules/@yr/component/nod...eact-dom/lib/setTextContent.js ≠≠*/


/*== node_modules/@yr/component/nod...s/react-dom/lib/DOMLazyTree.js ==*/
$m['react-dom/lib/DOMLazyTree'] = { exports: {} };
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibDOMLazyTree__DOMNamespaces = $m['react-dom/lib/DOMNamespaces'].exports;
var reactdomlibDOMLazyTree__setInnerHTML = $m['react-dom/lib/setInnerHTML'].exports;

var reactdomlibDOMLazyTree__createMicrosoftUnsafeLocalFunction = $m['react-dom/lib/createMicrosoftUnsafeLocalFunction'].exports;
var reactdomlibDOMLazyTree__setTextContent = $m['react-dom/lib/setTextContent'].exports;

var reactdomlibDOMLazyTree__ELEMENT_NODE_TYPE = 1;
var reactdomlibDOMLazyTree__DOCUMENT_FRAGMENT_NODE_TYPE = 11;

/**
 * In IE (8-11) and Edge, appending nodes with no children is dramatically
 * faster than appending a full subtree, so we essentially queue up the
 * .appendChild calls here and apply them so each node is added to its parent
 * before any children are added.
 *
 * In other browsers, doing so is slower or neutral compared to the other order
 * (in Firefox, twice as slow) so we only do this inversion in IE.
 *
 * See https://github.com/spicyj/innerhtml-vs-createelement-vs-clonenode.
 */
var reactdomlibDOMLazyTree__enableLazy = typeof document !== 'undefined' && typeof document.documentMode === 'number' || typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string' && /\bEdge\/\d/.test(navigator.userAgent);

function reactdomlibDOMLazyTree__insertTreeChildren(tree) {
  if (!reactdomlibDOMLazyTree__enableLazy) {
    return;
  }
  var node = tree.node;
  var children = tree.children;
  if (children.length) {
    for (var i = 0; i < children.length; i++) {
      reactdomlibDOMLazyTree__insertTreeBefore(node, children[i], null);
    }
  } else if (tree.html != null) {
    reactdomlibDOMLazyTree__setInnerHTML(node, tree.html);
  } else if (tree.text != null) {
    reactdomlibDOMLazyTree__setTextContent(node, tree.text);
  }
}

var reactdomlibDOMLazyTree__insertTreeBefore = reactdomlibDOMLazyTree__createMicrosoftUnsafeLocalFunction(function (parentNode, tree, referenceNode) {
  // DocumentFragments aren't actually part of the DOM after insertion so
  // appending children won't update the DOM. We need to ensure the fragment
  // is properly populated first, breaking out of our lazy approach for just
  // this level. Also, some <object> plugins (like Flash Player) will read
  // <param> nodes immediately upon insertion into the DOM, so <object>
  // must also be populated prior to insertion into the DOM.
  if (tree.node.nodeType === reactdomlibDOMLazyTree__DOCUMENT_FRAGMENT_NODE_TYPE || tree.node.nodeType === reactdomlibDOMLazyTree__ELEMENT_NODE_TYPE && tree.node.nodeName.toLowerCase() === 'object' && (tree.node.namespaceURI == null || tree.node.namespaceURI === reactdomlibDOMLazyTree__DOMNamespaces.html)) {
    reactdomlibDOMLazyTree__insertTreeChildren(tree);
    parentNode.insertBefore(tree.node, referenceNode);
  } else {
    parentNode.insertBefore(tree.node, referenceNode);
    reactdomlibDOMLazyTree__insertTreeChildren(tree);
  }
});

function reactdomlibDOMLazyTree__replaceChildWithTree(oldNode, newTree) {
  oldNode.parentNode.replaceChild(newTree.node, oldNode);
  reactdomlibDOMLazyTree__insertTreeChildren(newTree);
}

function reactdomlibDOMLazyTree__queueChild(parentTree, childTree) {
  if (reactdomlibDOMLazyTree__enableLazy) {
    parentTree.children.push(childTree);
  } else {
    parentTree.node.appendChild(childTree.node);
  }
}

function reactdomlibDOMLazyTree__queueHTML(tree, html) {
  if (reactdomlibDOMLazyTree__enableLazy) {
    tree.html = html;
  } else {
    reactdomlibDOMLazyTree__setInnerHTML(tree.node, html);
  }
}

function reactdomlibDOMLazyTree__queueText(tree, text) {
  if (reactdomlibDOMLazyTree__enableLazy) {
    tree.text = text;
  } else {
    reactdomlibDOMLazyTree__setTextContent(tree.node, text);
  }
}

function reactdomlibDOMLazyTree__toString() {
  return this.node.nodeName;
}

function reactdomlibDOMLazyTree__DOMLazyTree(node) {
  return {
    node: node,
    children: [],
    html: null,
    text: null,
    toString: reactdomlibDOMLazyTree__toString
  };
}

reactdomlibDOMLazyTree__DOMLazyTree.insertTreeBefore = reactdomlibDOMLazyTree__insertTreeBefore;
reactdomlibDOMLazyTree__DOMLazyTree.replaceChildWithTree = reactdomlibDOMLazyTree__replaceChildWithTree;
reactdomlibDOMLazyTree__DOMLazyTree.queueChild = reactdomlibDOMLazyTree__queueChild;
reactdomlibDOMLazyTree__DOMLazyTree.queueHTML = reactdomlibDOMLazyTree__queueHTML;
reactdomlibDOMLazyTree__DOMLazyTree.queueText = reactdomlibDOMLazyTree__queueText;

$m['react-dom/lib/DOMLazyTree'].exports = reactdomlibDOMLazyTree__DOMLazyTree;
/*≠≠ node_modules/@yr/component/nod...s/react-dom/lib/DOMLazyTree.js ≠≠*/


/*== node_modules/@yr/component/nod...es/react-dom/lib/ReactMount.js ==*/
$m['react-dom/lib/ReactMount'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactMount___prodInvariant = $m['react-dom/lib/reactProdInvariant'].exports;

var reactdomlibReactMount__DOMLazyTree = $m['react-dom/lib/DOMLazyTree'].exports;
var reactdomlibReactMount__DOMProperty = $m['react-dom/lib/DOMProperty'].exports;
var reactdomlibReactMount__React = $m['react/lib/React'].exports;
var reactdomlibReactMount__ReactBrowserEventEmitter = $m['react-dom/lib/ReactBrowserEventEmitter'].exports;
var reactdomlibReactMount__ReactCurrentOwner = $m['react/lib/ReactCurrentOwner'].exports;
var reactdomlibReactMount__ReactDOMComponentTree = $m['react-dom/lib/ReactDOMComponentTree'].exports;
var reactdomlibReactMount__ReactDOMContainerInfo = $m['react-dom/lib/ReactDOMContainerInfo'].exports;
var reactdomlibReactMount__ReactDOMFeatureFlags = $m['react-dom/lib/ReactDOMFeatureFlags'].exports;
var reactdomlibReactMount__ReactFeatureFlags = $m['react-dom/lib/ReactFeatureFlags'].exports;
var reactdomlibReactMount__ReactInstanceMap = $m['react-dom/lib/ReactInstanceMap'].exports;
var reactdomlibReactMount__ReactInstrumentation = $m['react-dom/lib/ReactInstrumentation'].exports;
var reactdomlibReactMount__ReactMarkupChecksum = $m['react-dom/lib/ReactMarkupChecksum'].exports;
var reactdomlibReactMount__ReactReconciler = $m['react-dom/lib/ReactReconciler'].exports;
var reactdomlibReactMount__ReactUpdateQueue = $m['react-dom/lib/ReactUpdateQueue'].exports;
var reactdomlibReactMount__ReactUpdates = $m['react-dom/lib/ReactUpdates'].exports;

var reactdomlibReactMount__emptyObject = $m['fbjs/lib/emptyObject'].exports;
var reactdomlibReactMount__instantiateReactComponent = $m['react-dom/lib/instantiateReactComponent'].exports;
var reactdomlibReactMount__invariant = $m['fbjs/lib/invariant'].exports;
var reactdomlibReactMount__setInnerHTML = $m['react-dom/lib/setInnerHTML'].exports;
var reactdomlibReactMount__shouldUpdateReactComponent = $m['react-dom/lib/shouldUpdateReactComponent'].exports;
var reactdomlibReactMount__warning = $m['fbjs/lib/warning'].exports;

var reactdomlibReactMount__ATTR_NAME = reactdomlibReactMount__DOMProperty.ID_ATTRIBUTE_NAME;
var reactdomlibReactMount__ROOT_ATTR_NAME = reactdomlibReactMount__DOMProperty.ROOT_ATTRIBUTE_NAME;

var reactdomlibReactMount__ELEMENT_NODE_TYPE = 1;
var reactdomlibReactMount__DOC_NODE_TYPE = 9;
var reactdomlibReactMount__DOCUMENT_FRAGMENT_NODE_TYPE = 11;

var reactdomlibReactMount__instancesByReactRootID = {};

/**
 * Finds the index of the first character
 * that's not common between the two given strings.
 *
 * @return {number} the index of the character where the strings diverge
 */
function reactdomlibReactMount__firstDifferenceIndex(string1, string2) {
  var minLen = Math.min(string1.length, string2.length);
  for (var i = 0; i < minLen; i++) {
    if (string1.charAt(i) !== string2.charAt(i)) {
      return i;
    }
  }
  return string1.length === string2.length ? -1 : minLen;
}

/**
 * @param {DOMElement|DOMDocument} container DOM element that may contain
 * a React component
 * @return {?*} DOM element that may have the reactRoot ID, or null.
 */
function reactdomlibReactMount__getReactRootElementInContainer(container) {
  if (!container) {
    return null;
  }

  if (container.nodeType === reactdomlibReactMount__DOC_NODE_TYPE) {
    return container.documentElement;
  } else {
    return container.firstChild;
  }
}

function reactdomlibReactMount__internalGetID(node) {
  // If node is something like a window, document, or text node, none of
  // which support attributes or a .getAttribute method, gracefully return
  // the empty string, as if the attribute were missing.
  return node.getAttribute && node.getAttribute(reactdomlibReactMount__ATTR_NAME) || '';
}

/**
 * Mounts this component and inserts it into the DOM.
 *
 * @param {ReactComponent} componentInstance The instance to mount.
 * @param {DOMElement} container DOM element to mount into.
 * @param {ReactReconcileTransaction} transaction
 * @param {boolean} shouldReuseMarkup If true, do not insert markup
 */
function reactdomlibReactMount__mountComponentIntoNode(wrapperInstance, container, transaction, shouldReuseMarkup, context) {
  var markerName;
  if (reactdomlibReactMount__ReactFeatureFlags.logTopLevelRenders) {
    var wrappedElement = wrapperInstance._currentElement.props.child;
    var type = wrappedElement.type;
    markerName = 'React mount: ' + (typeof type === 'string' ? type : type.displayName || type.name);
    console.time(markerName);
  }

  var markup = reactdomlibReactMount__ReactReconciler.mountComponent(wrapperInstance, transaction, null, reactdomlibReactMount__ReactDOMContainerInfo(wrapperInstance, container), context, 0 /* parentDebugID */
  );

  if (markerName) {
    console.timeEnd(markerName);
  }

  wrapperInstance._renderedComponent._topLevelWrapper = wrapperInstance;
  reactdomlibReactMount__ReactMount._mountImageIntoNode(markup, container, wrapperInstance, shouldReuseMarkup, transaction);
}

/**
 * Batched mount.
 *
 * @param {ReactComponent} componentInstance The instance to mount.
 * @param {DOMElement} container DOM element to mount into.
 * @param {boolean} shouldReuseMarkup If true, do not insert markup
 */
function reactdomlibReactMount__batchedMountComponentIntoNode(componentInstance, container, shouldReuseMarkup, context) {
  var transaction = reactdomlibReactMount__ReactUpdates.ReactReconcileTransaction.getPooled(
  /* useCreateElement */
  !shouldReuseMarkup && reactdomlibReactMount__ReactDOMFeatureFlags.useCreateElement);
  transaction.perform(reactdomlibReactMount__mountComponentIntoNode, null, componentInstance, container, transaction, shouldReuseMarkup, context);
  reactdomlibReactMount__ReactUpdates.ReactReconcileTransaction.release(transaction);
}

/**
 * Unmounts a component and removes it from the DOM.
 *
 * @param {ReactComponent} instance React component instance.
 * @param {DOMElement} container DOM element to unmount from.
 * @final
 * @internal
 * @see {ReactMount.unmountComponentAtNode}
 */
function reactdomlibReactMount__unmountComponentFromNode(instance, container, safely) {
  if ('development' !== 'production') {
    reactdomlibReactMount__ReactInstrumentation.debugTool.onBeginFlush();
  }
  reactdomlibReactMount__ReactReconciler.unmountComponent(instance, safely);
  if ('development' !== 'production') {
    reactdomlibReactMount__ReactInstrumentation.debugTool.onEndFlush();
  }

  if (container.nodeType === reactdomlibReactMount__DOC_NODE_TYPE) {
    container = container.documentElement;
  }

  // http://jsperf.com/emptying-a-node
  while (container.lastChild) {
    container.removeChild(container.lastChild);
  }
}

/**
 * True if the supplied DOM node has a direct React-rendered child that is
 * not a React root element. Useful for warning in `render`,
 * `unmountComponentAtNode`, etc.
 *
 * @param {?DOMElement} node The candidate DOM node.
 * @return {boolean} True if the DOM element contains a direct child that was
 * rendered by React but is not a root element.
 * @internal
 */
function reactdomlibReactMount__hasNonRootReactChild(container) {
  var rootEl = reactdomlibReactMount__getReactRootElementInContainer(container);
  if (rootEl) {
    var inst = reactdomlibReactMount__ReactDOMComponentTree.getInstanceFromNode(rootEl);
    return !!(inst && inst._hostParent);
  }
}

/**
 * True if the supplied DOM node is a React DOM element and
 * it has been rendered by another copy of React.
 *
 * @param {?DOMElement} node The candidate DOM node.
 * @return {boolean} True if the DOM has been rendered by another copy of React
 * @internal
 */
function reactdomlibReactMount__nodeIsRenderedByOtherInstance(container) {
  var rootEl = reactdomlibReactMount__getReactRootElementInContainer(container);
  return !!(rootEl && reactdomlibReactMount__isReactNode(rootEl) && !reactdomlibReactMount__ReactDOMComponentTree.getInstanceFromNode(rootEl));
}

/**
 * True if the supplied DOM node is a valid node element.
 *
 * @param {?DOMElement} node The candidate DOM node.
 * @return {boolean} True if the DOM is a valid DOM node.
 * @internal
 */
function reactdomlibReactMount__isValidContainer(node) {
  return !!(node && (node.nodeType === reactdomlibReactMount__ELEMENT_NODE_TYPE || node.nodeType === reactdomlibReactMount__DOC_NODE_TYPE || node.nodeType === reactdomlibReactMount__DOCUMENT_FRAGMENT_NODE_TYPE));
}

/**
 * True if the supplied DOM node is a valid React node element.
 *
 * @param {?DOMElement} node The candidate DOM node.
 * @return {boolean} True if the DOM is a valid React DOM node.
 * @internal
 */
function reactdomlibReactMount__isReactNode(node) {
  return reactdomlibReactMount__isValidContainer(node) && (node.hasAttribute(reactdomlibReactMount__ROOT_ATTR_NAME) || node.hasAttribute(reactdomlibReactMount__ATTR_NAME));
}

function reactdomlibReactMount__getHostRootInstanceInContainer(container) {
  var rootEl = reactdomlibReactMount__getReactRootElementInContainer(container);
  var prevHostInstance = rootEl && reactdomlibReactMount__ReactDOMComponentTree.getInstanceFromNode(rootEl);
  return prevHostInstance && !prevHostInstance._hostParent ? prevHostInstance : null;
}

function reactdomlibReactMount__getTopLevelWrapperInContainer(container) {
  var root = reactdomlibReactMount__getHostRootInstanceInContainer(container);
  return root ? root._hostContainerInfo._topLevelWrapper : null;
}

/**
 * Temporary (?) hack so that we can store all top-level pending updates on
 * composites instead of having to worry about different types of components
 * here.
 */
var reactdomlibReactMount__topLevelRootCounter = 1;
var reactdomlibReactMount__TopLevelWrapper = function () {
  this.rootID = reactdomlibReactMount__topLevelRootCounter++;
};
reactdomlibReactMount__TopLevelWrapper.prototype.isReactComponent = {};
if ('development' !== 'production') {
  reactdomlibReactMount__TopLevelWrapper.displayName = 'TopLevelWrapper';
}
reactdomlibReactMount__TopLevelWrapper.prototype.render = function () {
  return this.props.child;
};
reactdomlibReactMount__TopLevelWrapper.isReactTopLevelWrapper = true;

/**
 * Mounting is the process of initializing a React component by creating its
 * representative DOM elements and inserting them into a supplied `container`.
 * Any prior content inside `container` is destroyed in the process.
 *
 *   ReactMount.render(
 *     component,
 *     document.getElementById('container')
 *   );
 *
 *   <div id="container">                   <-- Supplied `container`.
 *     <div data-reactid=".3">              <-- Rendered reactRoot of React
 *       // ...                                 component.
 *     </div>
 *   </div>
 *
 * Inside of `container`, the first element rendered is the "reactRoot".
 */
var reactdomlibReactMount__ReactMount = {
  TopLevelWrapper: reactdomlibReactMount__TopLevelWrapper,

  /**
   * Used by devtools. The keys are not important.
   */
  _instancesByReactRootID: reactdomlibReactMount__instancesByReactRootID,

  /**
   * This is a hook provided to support rendering React components while
   * ensuring that the apparent scroll position of its `container` does not
   * change.
   *
   * @param {DOMElement} container The `container` being rendered into.
   * @param {function} renderCallback This must be called once to do the render.
   */
  scrollMonitor: function (container, renderCallback) {
    renderCallback();
  },

  /**
   * Take a component that's already mounted into the DOM and replace its props
   * @param {ReactComponent} prevComponent component instance already in the DOM
   * @param {ReactElement} nextElement component instance to render
   * @param {DOMElement} container container to render into
   * @param {?function} callback function triggered on completion
   */
  _updateRootComponent: function (prevComponent, nextElement, nextContext, container, callback) {
    reactdomlibReactMount__ReactMount.scrollMonitor(container, function () {
      reactdomlibReactMount__ReactUpdateQueue.enqueueElementInternal(prevComponent, nextElement, nextContext);
      if (callback) {
        reactdomlibReactMount__ReactUpdateQueue.enqueueCallbackInternal(prevComponent, callback);
      }
    });

    return prevComponent;
  },

  /**
   * Render a new component into the DOM. Hooked by hooks!
   *
   * @param {ReactElement} nextElement element to render
   * @param {DOMElement} container container to render into
   * @param {boolean} shouldReuseMarkup if we should skip the markup insertion
   * @return {ReactComponent} nextComponent
   */
  _renderNewRootComponent: function (nextElement, container, shouldReuseMarkup, context) {
    // Various parts of our code (such as ReactCompositeComponent's
    // _renderValidatedComponent) assume that calls to render aren't nested;
    // verify that that's the case.
    'development' !== 'production' ? reactdomlibReactMount__warning(reactdomlibReactMount__ReactCurrentOwner.current == null, '_renderNewRootComponent(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from ' + 'render is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate. Check the render method of %s.', reactdomlibReactMount__ReactCurrentOwner.current && reactdomlibReactMount__ReactCurrentOwner.current.getName() || 'ReactCompositeComponent') : void 0;

    !reactdomlibReactMount__isValidContainer(container) ? 'development' !== 'production' ? reactdomlibReactMount__invariant(false, '_registerComponent(...): Target container is not a DOM element.') : reactdomlibReactMount___prodInvariant('37') : void 0;

    reactdomlibReactMount__ReactBrowserEventEmitter.ensureScrollValueMonitoring();
    var componentInstance = reactdomlibReactMount__instantiateReactComponent(nextElement, false);

    // The initial render is synchronous but any updates that happen during
    // rendering, in componentWillMount or componentDidMount, will be batched
    // according to the current batching strategy.

    reactdomlibReactMount__ReactUpdates.batchedUpdates(reactdomlibReactMount__batchedMountComponentIntoNode, componentInstance, container, shouldReuseMarkup, context);

    var wrapperID = componentInstance._instance.rootID;
    reactdomlibReactMount__instancesByReactRootID[wrapperID] = componentInstance;

    return componentInstance;
  },

  /**
   * Renders a React component into the DOM in the supplied `container`.
   *
   * If the React component was previously rendered into `container`, this will
   * perform an update on it and only mutate the DOM as necessary to reflect the
   * latest React component.
   *
   * @param {ReactComponent} parentComponent The conceptual parent of this render tree.
   * @param {ReactElement} nextElement Component element to render.
   * @param {DOMElement} container DOM element to render into.
   * @param {?function} callback function triggered on completion
   * @return {ReactComponent} Component instance rendered in `container`.
   */
  renderSubtreeIntoContainer: function (parentComponent, nextElement, container, callback) {
    !(parentComponent != null && reactdomlibReactMount__ReactInstanceMap.has(parentComponent)) ? 'development' !== 'production' ? reactdomlibReactMount__invariant(false, 'parentComponent must be a valid React Component') : reactdomlibReactMount___prodInvariant('38') : void 0;
    return reactdomlibReactMount__ReactMount._renderSubtreeIntoContainer(parentComponent, nextElement, container, callback);
  },

  _renderSubtreeIntoContainer: function (parentComponent, nextElement, container, callback) {
    reactdomlibReactMount__ReactUpdateQueue.validateCallback(callback, 'ReactDOM.render');
    !reactdomlibReactMount__React.isValidElement(nextElement) ? 'development' !== 'production' ? reactdomlibReactMount__invariant(false, 'ReactDOM.render(): Invalid component element.%s', typeof nextElement === 'string' ? " Instead of passing a string like 'div', pass " + "React.createElement('div') or <div />." : typeof nextElement === 'function' ? ' Instead of passing a class like Foo, pass ' + 'React.createElement(Foo) or <Foo />.' : // Check if it quacks like an element
    nextElement != null && nextElement.props !== undefined ? ' This may be caused by unintentionally loading two independent ' + 'copies of React.' : '') : reactdomlibReactMount___prodInvariant('39', typeof nextElement === 'string' ? " Instead of passing a string like 'div', pass " + "React.createElement('div') or <div />." : typeof nextElement === 'function' ? ' Instead of passing a class like Foo, pass ' + 'React.createElement(Foo) or <Foo />.' : nextElement != null && nextElement.props !== undefined ? ' This may be caused by unintentionally loading two independent ' + 'copies of React.' : '') : void 0;

    'development' !== 'production' ? reactdomlibReactMount__warning(!container || !container.tagName || container.tagName.toUpperCase() !== 'BODY', 'render(): Rendering components directly into document.body is ' + 'discouraged, since its children are often manipulated by third-party ' + 'scripts and browser extensions. This may lead to subtle ' + 'reconciliation issues. Try rendering into a container element created ' + 'for your app.') : void 0;

    var nextWrappedElement = reactdomlibReactMount__React.createElement(reactdomlibReactMount__TopLevelWrapper, {
      child: nextElement
    });

    var nextContext;
    if (parentComponent) {
      var parentInst = reactdomlibReactMount__ReactInstanceMap.get(parentComponent);
      nextContext = parentInst._processChildContext(parentInst._context);
    } else {
      nextContext = reactdomlibReactMount__emptyObject;
    }

    var prevComponent = reactdomlibReactMount__getTopLevelWrapperInContainer(container);

    if (prevComponent) {
      var prevWrappedElement = prevComponent._currentElement;
      var prevElement = prevWrappedElement.props.child;
      if (reactdomlibReactMount__shouldUpdateReactComponent(prevElement, nextElement)) {
        var publicInst = prevComponent._renderedComponent.getPublicInstance();
        var updatedCallback = callback && function () {
          callback.call(publicInst);
        };
        reactdomlibReactMount__ReactMount._updateRootComponent(prevComponent, nextWrappedElement, nextContext, container, updatedCallback);
        return publicInst;
      } else {
        reactdomlibReactMount__ReactMount.unmountComponentAtNode(container);
      }
    }

    var reactRootElement = reactdomlibReactMount__getReactRootElementInContainer(container);
    var containerHasReactMarkup = reactRootElement && !!reactdomlibReactMount__internalGetID(reactRootElement);
    var containerHasNonRootReactChild = reactdomlibReactMount__hasNonRootReactChild(container);

    if ('development' !== 'production') {
      'development' !== 'production' ? reactdomlibReactMount__warning(!containerHasNonRootReactChild, 'render(...): Replacing React-rendered children with a new root ' + 'component. If you intended to update the children of this node, ' + 'you should instead have the existing children update their state ' + 'and render the new components instead of calling ReactDOM.render.') : void 0;

      if (!containerHasReactMarkup || reactRootElement.nextSibling) {
        var rootElementSibling = reactRootElement;
        while (rootElementSibling) {
          if (reactdomlibReactMount__internalGetID(rootElementSibling)) {
            'development' !== 'production' ? reactdomlibReactMount__warning(false, 'render(): Target node has markup rendered by React, but there ' + 'are unrelated nodes as well. This is most commonly caused by ' + 'white-space inserted around server-rendered markup.') : void 0;
            break;
          }
          rootElementSibling = rootElementSibling.nextSibling;
        }
      }
    }

    var shouldReuseMarkup = containerHasReactMarkup && !prevComponent && !containerHasNonRootReactChild;
    var component = reactdomlibReactMount__ReactMount._renderNewRootComponent(nextWrappedElement, container, shouldReuseMarkup, nextContext)._renderedComponent.getPublicInstance();
    if (callback) {
      callback.call(component);
    }
    return component;
  },

  /**
   * Renders a React component into the DOM in the supplied `container`.
   * See https://facebook.github.io/react/docs/top-level-api.html#reactdom.render
   *
   * If the React component was previously rendered into `container`, this will
   * perform an update on it and only mutate the DOM as necessary to reflect the
   * latest React component.
   *
   * @param {ReactElement} nextElement Component element to render.
   * @param {DOMElement} container DOM element to render into.
   * @param {?function} callback function triggered on completion
   * @return {ReactComponent} Component instance rendered in `container`.
   */
  render: function (nextElement, container, callback) {
    return reactdomlibReactMount__ReactMount._renderSubtreeIntoContainer(null, nextElement, container, callback);
  },

  /**
   * Unmounts and destroys the React component rendered in the `container`.
   * See https://facebook.github.io/react/docs/top-level-api.html#reactdom.unmountcomponentatnode
   *
   * @param {DOMElement} container DOM element containing a React component.
   * @return {boolean} True if a component was found in and unmounted from
   *                   `container`
   */
  unmountComponentAtNode: function (container) {
    // Various parts of our code (such as ReactCompositeComponent's
    // _renderValidatedComponent) assume that calls to render aren't nested;
    // verify that that's the case. (Strictly speaking, unmounting won't cause a
    // render but we still don't expect to be in a render call here.)
    'development' !== 'production' ? reactdomlibReactMount__warning(reactdomlibReactMount__ReactCurrentOwner.current == null, 'unmountComponentAtNode(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from render ' + 'is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate. Check the render method of %s.', reactdomlibReactMount__ReactCurrentOwner.current && reactdomlibReactMount__ReactCurrentOwner.current.getName() || 'ReactCompositeComponent') : void 0;

    !reactdomlibReactMount__isValidContainer(container) ? 'development' !== 'production' ? reactdomlibReactMount__invariant(false, 'unmountComponentAtNode(...): Target container is not a DOM element.') : reactdomlibReactMount___prodInvariant('40') : void 0;

    if ('development' !== 'production') {
      'development' !== 'production' ? reactdomlibReactMount__warning(!reactdomlibReactMount__nodeIsRenderedByOtherInstance(container), "unmountComponentAtNode(): The node you're attempting to unmount " + 'was rendered by another copy of React.') : void 0;
    }

    var prevComponent = reactdomlibReactMount__getTopLevelWrapperInContainer(container);
    if (!prevComponent) {
      // Check if the node being unmounted was rendered by React, but isn't a
      // root node.
      var containerHasNonRootReactChild = reactdomlibReactMount__hasNonRootReactChild(container);

      // Check if the container itself is a React root node.
      var isContainerReactRoot = container.nodeType === 1 && container.hasAttribute(reactdomlibReactMount__ROOT_ATTR_NAME);

      if ('development' !== 'production') {
        'development' !== 'production' ? reactdomlibReactMount__warning(!containerHasNonRootReactChild, "unmountComponentAtNode(): The node you're attempting to unmount " + 'was rendered by React and is not a top-level container. %s', isContainerReactRoot ? 'You may have accidentally passed in a React root node instead ' + 'of its container.' : 'Instead, have the parent component update its state and ' + 'rerender in order to remove this component.') : void 0;
      }

      return false;
    }
    delete reactdomlibReactMount__instancesByReactRootID[prevComponent._instance.rootID];
    reactdomlibReactMount__ReactUpdates.batchedUpdates(reactdomlibReactMount__unmountComponentFromNode, prevComponent, container, false);
    return true;
  },

  _mountImageIntoNode: function (markup, container, instance, shouldReuseMarkup, transaction) {
    !reactdomlibReactMount__isValidContainer(container) ? 'development' !== 'production' ? reactdomlibReactMount__invariant(false, 'mountComponentIntoNode(...): Target container is not valid.') : reactdomlibReactMount___prodInvariant('41') : void 0;

    if (shouldReuseMarkup) {
      var rootElement = reactdomlibReactMount__getReactRootElementInContainer(container);
      if (reactdomlibReactMount__ReactMarkupChecksum.canReuseMarkup(markup, rootElement)) {
        reactdomlibReactMount__ReactDOMComponentTree.precacheNode(instance, rootElement);
        return;
      } else {
        var checksum = rootElement.getAttribute(reactdomlibReactMount__ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
        rootElement.removeAttribute(reactdomlibReactMount__ReactMarkupChecksum.CHECKSUM_ATTR_NAME);

        var rootMarkup = rootElement.outerHTML;
        rootElement.setAttribute(reactdomlibReactMount__ReactMarkupChecksum.CHECKSUM_ATTR_NAME, checksum);

        var normalizedMarkup = markup;
        if ('development' !== 'production') {
          // because rootMarkup is retrieved from the DOM, various normalizations
          // will have occurred which will not be present in `markup`. Here,
          // insert markup into a <div> or <iframe> depending on the container
          // type to perform the same normalizations before comparing.
          var normalizer;
          if (container.nodeType === reactdomlibReactMount__ELEMENT_NODE_TYPE) {
            normalizer = document.createElement('div');
            normalizer.innerHTML = markup;
            normalizedMarkup = normalizer.innerHTML;
          } else {
            normalizer = document.createElement('iframe');
            document.body.appendChild(normalizer);
            normalizer.contentDocument.write(markup);
            normalizedMarkup = normalizer.contentDocument.documentElement.outerHTML;
            document.body.removeChild(normalizer);
          }
        }

        var diffIndex = reactdomlibReactMount__firstDifferenceIndex(normalizedMarkup, rootMarkup);
        var difference = ' (client) ' + normalizedMarkup.substring(diffIndex - 20, diffIndex + 20) + '\n (server) ' + rootMarkup.substring(diffIndex - 20, diffIndex + 20);

        !(container.nodeType !== reactdomlibReactMount__DOC_NODE_TYPE) ? 'development' !== 'production' ? reactdomlibReactMount__invariant(false, 'You\'re trying to render a component to the document using server rendering but the checksum was invalid. This usually means you rendered a different component type or props on the client from the one on the server, or your render() methods are impure. React cannot handle this case due to cross-browser quirks by rendering at the document root. You should look for environment dependent code in your components and ensure the props are the same client and server side:\n%s', difference) : reactdomlibReactMount___prodInvariant('42', difference) : void 0;

        if ('development' !== 'production') {
          'development' !== 'production' ? reactdomlibReactMount__warning(false, 'React attempted to reuse markup in a container but the ' + 'checksum was invalid. This generally means that you are ' + 'using server rendering and the markup generated on the ' + 'server was not what the client was expecting. React injected ' + 'new markup to compensate which works but you have lost many ' + 'of the benefits of server rendering. Instead, figure out ' + 'why the markup being generated is different on the client ' + 'or server:\n%s', difference) : void 0;
        }
      }
    }

    !(container.nodeType !== reactdomlibReactMount__DOC_NODE_TYPE) ? 'development' !== 'production' ? reactdomlibReactMount__invariant(false, 'You\'re trying to render a component to the document but you didn\'t use server rendering. We can\'t do this without using server rendering due to cross-browser quirks. See ReactDOMServer.renderToString() for server rendering.') : reactdomlibReactMount___prodInvariant('43') : void 0;

    if (transaction.useCreateElement) {
      while (container.lastChild) {
        container.removeChild(container.lastChild);
      }
      reactdomlibReactMount__DOMLazyTree.insertTreeBefore(container, markup, null);
    } else {
      reactdomlibReactMount__setInnerHTML(container, markup);
      reactdomlibReactMount__ReactDOMComponentTree.precacheNode(instance, container.firstChild);
    }

    if ('development' !== 'production') {
      var hostNode = reactdomlibReactMount__ReactDOMComponentTree.getInstanceFromNode(container.firstChild);
      if (hostNode._debugID !== 0) {
        reactdomlibReactMount__ReactInstrumentation.debugTool.onHostOperation({
          instanceID: hostNode._debugID,
          type: 'mount',
          payload: markup.toString()
        });
      }
    }
  }
};

$m['react-dom/lib/ReactMount'].exports = reactdomlibReactMount__ReactMount;
/*≠≠ node_modules/@yr/component/nod...es/react-dom/lib/ReactMount.js ≠≠*/


/*== node_modules/@yr/component/nod.../renderSubtreeIntoContainer.js ==*/
$m['react-dom/lib/renderSubtreeIntoContainer'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibrenderSubtreeIntoContainer__ReactMount = $m['react-dom/lib/ReactMount'].exports;

$m['react-dom/lib/renderSubtreeIntoContainer'].exports = reactdomlibrenderSubtreeIntoContainer__ReactMount.renderSubtreeIntoContainer;
/*≠≠ node_modules/@yr/component/nod.../renderSubtreeIntoContainer.js ≠≠*/


/*== node_modules/@yr/component/nod...tHostComponentFromComposite.js ==*/
$m['react-dom/lib/getHostComponentFromComposite'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibgetHostComponentFromComposite__ReactNodeTypes = $m['react-dom/lib/ReactNodeTypes'].exports;

function reactdomlibgetHostComponentFromComposite__getHostComponentFromComposite(inst) {
  var type;

  while ((type = inst._renderedNodeType) === reactdomlibgetHostComponentFromComposite__ReactNodeTypes.COMPOSITE) {
    inst = inst._renderedComponent;
  }

  if (type === reactdomlibgetHostComponentFromComposite__ReactNodeTypes.HOST) {
    return inst._renderedComponent;
  } else if (type === reactdomlibgetHostComponentFromComposite__ReactNodeTypes.EMPTY) {
    return null;
  }
}

$m['react-dom/lib/getHostComponentFromComposite'].exports = reactdomlibgetHostComponentFromComposite__getHostComponentFromComposite;
/*≠≠ node_modules/@yr/component/nod...tHostComponentFromComposite.js ≠≠*/


/*== node_modules/@yr/component/nod...s/react-dom/lib/findDOMNode.js ==*/
$m['react-dom/lib/findDOMNode'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibfindDOMNode___prodInvariant = $m['react-dom/lib/reactProdInvariant'].exports;

var reactdomlibfindDOMNode__ReactCurrentOwner = $m['react/lib/ReactCurrentOwner'].exports;
var reactdomlibfindDOMNode__ReactDOMComponentTree = $m['react-dom/lib/ReactDOMComponentTree'].exports;
var reactdomlibfindDOMNode__ReactInstanceMap = $m['react-dom/lib/ReactInstanceMap'].exports;

var reactdomlibfindDOMNode__getHostComponentFromComposite = $m['react-dom/lib/getHostComponentFromComposite'].exports;
var reactdomlibfindDOMNode__invariant = $m['fbjs/lib/invariant'].exports;
var reactdomlibfindDOMNode__warning = $m['fbjs/lib/warning'].exports;

/**
 * Returns the DOM node rendered by this element.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#reactdom.finddomnode
 *
 * @param {ReactComponent|DOMElement} componentOrElement
 * @return {?DOMElement} The root node of this element.
 */
function reactdomlibfindDOMNode__findDOMNode(componentOrElement) {
  if ('development' !== 'production') {
    var owner = reactdomlibfindDOMNode__ReactCurrentOwner.current;
    if (owner !== null) {
      'development' !== 'production' ? reactdomlibfindDOMNode__warning(owner._warnedAboutRefsInRender, '%s is accessing findDOMNode inside its render(). ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : void 0;
      owner._warnedAboutRefsInRender = true;
    }
  }
  if (componentOrElement == null) {
    return null;
  }
  if (componentOrElement.nodeType === 1) {
    return componentOrElement;
  }

  var inst = reactdomlibfindDOMNode__ReactInstanceMap.get(componentOrElement);
  if (inst) {
    inst = reactdomlibfindDOMNode__getHostComponentFromComposite(inst);
    return inst ? reactdomlibfindDOMNode__ReactDOMComponentTree.getNodeFromInstance(inst) : null;
  }

  if (typeof componentOrElement.render === 'function') {
    !false ? 'development' !== 'production' ? reactdomlibfindDOMNode__invariant(false, 'findDOMNode was called on an unmounted component.') : reactdomlibfindDOMNode___prodInvariant('44') : void 0;
  } else {
    !false ? 'development' !== 'production' ? reactdomlibfindDOMNode__invariant(false, 'Element appears to be neither ReactComponent nor DOMNode (keys: %s)', Object.keys(componentOrElement)) : reactdomlibfindDOMNode___prodInvariant('45', Object.keys(componentOrElement)) : void 0;
  }
}

$m['react-dom/lib/findDOMNode'].exports = reactdomlibfindDOMNode__findDOMNode;
/*≠≠ node_modules/@yr/component/nod...s/react-dom/lib/findDOMNode.js ≠≠*/


/*== node_modules/@yr/component/nod...eact-dom/lib/SyntheticEvent.js ==*/
$m['react-dom/lib/SyntheticEvent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibSyntheticEvent___assign = $m['object-assign'].exports;

var reactdomlibSyntheticEvent__PooledClass = $m['react-dom/lib/PooledClass'].exports;

var reactdomlibSyntheticEvent__emptyFunction = $m['fbjs/lib/emptyFunction'].exports;
var reactdomlibSyntheticEvent__warning = $m['fbjs/lib/warning'].exports;

var reactdomlibSyntheticEvent__didWarnForAddedNewProperty = false;
var reactdomlibSyntheticEvent__isProxySupported = typeof Proxy === 'function';

var reactdomlibSyntheticEvent__shouldBeReleasedProperties = ['dispatchConfig', '_targetInst', 'nativeEvent', 'isDefaultPrevented', 'isPropagationStopped', '_dispatchListeners', '_dispatchInstances'];

/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var reactdomlibSyntheticEvent__EventInterface = {
  type: null,
  target: null,
  // currentTarget is set when dispatching; no use in copying it here
  currentTarget: reactdomlibSyntheticEvent__emptyFunction.thatReturnsNull,
  eventPhase: null,
  bubbles: null,
  cancelable: null,
  timeStamp: function (event) {
    return event.timeStamp || Date.now();
  },
  defaultPrevented: null,
  isTrusted: null
};

/**
 * Synthetic events are dispatched by event plugins, typically in response to a
 * top-level event delegation handler.
 *
 * These systems should generally use pooling to reduce the frequency of garbage
 * collection. The system should check `isPersistent` to determine whether the
 * event should be released into the pool after being dispatched. Users that
 * need a persisted event should invoke `persist`.
 *
 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
 * normalizing browser quirks. Subclasses do not necessarily have to implement a
 * DOM interface; custom application-specific events can also subclass this.
 *
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {*} targetInst Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @param {DOMEventTarget} nativeEventTarget Target node.
 */
function reactdomlibSyntheticEvent__SyntheticEvent(dispatchConfig, targetInst, nativeEvent, nativeEventTarget) {
  if ('development' !== 'production') {
    // these have a getter/setter for warnings
    delete this.nativeEvent;
    delete this.preventDefault;
    delete this.stopPropagation;
  }

  this.dispatchConfig = dispatchConfig;
  this._targetInst = targetInst;
  this.nativeEvent = nativeEvent;

  var Interface = this.constructor.Interface;
  for (var propName in Interface) {
    if (!Interface.hasOwnProperty(propName)) {
      continue;
    }
    if ('development' !== 'production') {
      delete this[propName]; // this has a getter/setter for warnings
    }
    var normalize = Interface[propName];
    if (normalize) {
      this[propName] = normalize(nativeEvent);
    } else {
      if (propName === 'target') {
        this.target = nativeEventTarget;
      } else {
        this[propName] = nativeEvent[propName];
      }
    }
  }

  var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
  if (defaultPrevented) {
    this.isDefaultPrevented = reactdomlibSyntheticEvent__emptyFunction.thatReturnsTrue;
  } else {
    this.isDefaultPrevented = reactdomlibSyntheticEvent__emptyFunction.thatReturnsFalse;
  }
  this.isPropagationStopped = reactdomlibSyntheticEvent__emptyFunction.thatReturnsFalse;
  return this;
}

reactdomlibSyntheticEvent___assign(reactdomlibSyntheticEvent__SyntheticEvent.prototype, {
  preventDefault: function () {
    this.defaultPrevented = true;
    var event = this.nativeEvent;
    if (!event) {
      return;
    }

    if (event.preventDefault) {
      event.preventDefault();
      // eslint-disable-next-line valid-typeof
    } else if (typeof event.returnValue !== 'unknown') {
      event.returnValue = false;
    }
    this.isDefaultPrevented = reactdomlibSyntheticEvent__emptyFunction.thatReturnsTrue;
  },

  stopPropagation: function () {
    var event = this.nativeEvent;
    if (!event) {
      return;
    }

    if (event.stopPropagation) {
      event.stopPropagation();
      // eslint-disable-next-line valid-typeof
    } else if (typeof event.cancelBubble !== 'unknown') {
      // The ChangeEventPlugin registers a "propertychange" event for
      // IE. This event does not support bubbling or cancelling, and
      // any references to cancelBubble throw "Member not found".  A
      // typeof check of "unknown" circumvents this issue (and is also
      // IE specific).
      event.cancelBubble = true;
    }

    this.isPropagationStopped = reactdomlibSyntheticEvent__emptyFunction.thatReturnsTrue;
  },

  /**
   * We release all dispatched `SyntheticEvent`s after each event loop, adding
   * them back into the pool. This allows a way to hold onto a reference that
   * won't be added back into the pool.
   */
  persist: function () {
    this.isPersistent = reactdomlibSyntheticEvent__emptyFunction.thatReturnsTrue;
  },

  /**
   * Checks if this event should be released back into the pool.
   *
   * @return {boolean} True if this should not be released, false otherwise.
   */
  isPersistent: reactdomlibSyntheticEvent__emptyFunction.thatReturnsFalse,

  /**
   * `PooledClass` looks for `destructor` on each instance it releases.
   */
  destructor: function () {
    var Interface = this.constructor.Interface;
    for (var propName in Interface) {
      if ('development' !== 'production') {
        Object.defineProperty(this, propName, reactdomlibSyntheticEvent__getPooledWarningPropertyDefinition(propName, Interface[propName]));
      } else {
        this[propName] = null;
      }
    }
    for (var i = 0; i < reactdomlibSyntheticEvent__shouldBeReleasedProperties.length; i++) {
      this[reactdomlibSyntheticEvent__shouldBeReleasedProperties[i]] = null;
    }
    if ('development' !== 'production') {
      Object.defineProperty(this, 'nativeEvent', reactdomlibSyntheticEvent__getPooledWarningPropertyDefinition('nativeEvent', null));
      Object.defineProperty(this, 'preventDefault', reactdomlibSyntheticEvent__getPooledWarningPropertyDefinition('preventDefault', reactdomlibSyntheticEvent__emptyFunction));
      Object.defineProperty(this, 'stopPropagation', reactdomlibSyntheticEvent__getPooledWarningPropertyDefinition('stopPropagation', reactdomlibSyntheticEvent__emptyFunction));
    }
  }
});

reactdomlibSyntheticEvent__SyntheticEvent.Interface = reactdomlibSyntheticEvent__EventInterface;

if ('development' !== 'production') {
  if (reactdomlibSyntheticEvent__isProxySupported) {
    /*eslint-disable no-func-assign */
    reactdomlibSyntheticEvent__SyntheticEvent = new Proxy(reactdomlibSyntheticEvent__SyntheticEvent, {
      construct: function (target, args) {
        return this.apply(target, Object.create(target.prototype), args);
      },
      apply: function (constructor, that, args) {
        return new Proxy(constructor.apply(that, args), {
          set: function (target, prop, value) {
            if (prop !== 'isPersistent' && !target.constructor.Interface.hasOwnProperty(prop) && reactdomlibSyntheticEvent__shouldBeReleasedProperties.indexOf(prop) === -1) {
              'development' !== 'production' ? reactdomlibSyntheticEvent__warning(reactdomlibSyntheticEvent__didWarnForAddedNewProperty || target.isPersistent(), "This synthetic event is reused for performance reasons. If you're " + "seeing this, you're adding a new property in the synthetic event object. " + 'The property is never released. See ' + 'https://fb.me/react-event-pooling for more information.') : void 0;
              reactdomlibSyntheticEvent__didWarnForAddedNewProperty = true;
            }
            target[prop] = value;
            return true;
          }
        });
      }
    });
    /*eslint-enable no-func-assign */
  }
}
/**
 * Helper to reduce boilerplate when creating subclasses.
 *
 * @param {function} Class
 * @param {?object} Interface
 */
reactdomlibSyntheticEvent__SyntheticEvent.augmentClass = function (Class, Interface) {
  var Super = this;

  var E = function () {};
  E.prototype = Super.prototype;
  var prototype = new E();

  reactdomlibSyntheticEvent___assign(prototype, Class.prototype);
  Class.prototype = prototype;
  Class.prototype.constructor = Class;

  Class.Interface = reactdomlibSyntheticEvent___assign({}, Super.Interface, Interface);
  Class.augmentClass = Super.augmentClass;

  reactdomlibSyntheticEvent__PooledClass.addPoolingTo(Class, reactdomlibSyntheticEvent__PooledClass.fourArgumentPooler);
};

reactdomlibSyntheticEvent__PooledClass.addPoolingTo(reactdomlibSyntheticEvent__SyntheticEvent, reactdomlibSyntheticEvent__PooledClass.fourArgumentPooler);

$m['react-dom/lib/SyntheticEvent'].exports = reactdomlibSyntheticEvent__SyntheticEvent;

/**
  * Helper to nullify syntheticEvent instance properties when destructing
  *
  * @param {object} SyntheticEvent
  * @param {String} propName
  * @return {object} defineProperty object
  */
function reactdomlibSyntheticEvent__getPooledWarningPropertyDefinition(propName, getVal) {
  var isFunction = typeof getVal === 'function';
  return {
    configurable: true,
    set: set,
    get: get
  };

  function set(val) {
    var action = isFunction ? 'setting the method' : 'setting the property';
    warn(action, 'This is effectively a no-op');
    return val;
  }

  function get() {
    var action = isFunction ? 'accessing the method' : 'accessing the property';
    var result = isFunction ? 'This is a no-op function' : 'This is set to null';
    warn(action, result);
    return getVal;
  }

  function warn(action, result) {
    var warningCondition = false;
    'development' !== 'production' ? reactdomlibSyntheticEvent__warning(warningCondition, "This synthetic event is reused for performance reasons. If you're seeing this, " + "you're %s `%s` on a released/nullified synthetic event. %s. " + 'If you must keep the original synthetic event around, use event.persist(). ' + 'See https://fb.me/react-event-pooling for more information.', action, propName, result) : void 0;
  }
}
/*≠≠ node_modules/@yr/component/nod...eact-dom/lib/SyntheticEvent.js ≠≠*/


/*== node_modules/@yr/component/nod...ct-dom/lib/SyntheticUIEvent.js ==*/
$m['react-dom/lib/SyntheticUIEvent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibSyntheticUIEvent__SyntheticEvent = $m['react-dom/lib/SyntheticEvent'].exports;

var reactdomlibSyntheticUIEvent__getEventTarget = $m['react-dom/lib/getEventTarget'].exports;

/**
 * @interface UIEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var reactdomlibSyntheticUIEvent__UIEventInterface = {
  view: function (event) {
    if (event.view) {
      return event.view;
    }

    var target = reactdomlibSyntheticUIEvent__getEventTarget(event);
    if (target.window === target) {
      // target is a window object
      return target;
    }

    var doc = target.ownerDocument;
    // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
    if (doc) {
      return doc.defaultView || doc.parentWindow;
    } else {
      return window;
    }
  },
  detail: function (event) {
    return event.detail || 0;
  }
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */
function reactdomlibSyntheticUIEvent__SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return reactdomlibSyntheticUIEvent__SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

reactdomlibSyntheticUIEvent__SyntheticEvent.augmentClass(reactdomlibSyntheticUIEvent__SyntheticUIEvent, reactdomlibSyntheticUIEvent__UIEventInterface);

$m['react-dom/lib/SyntheticUIEvent'].exports = reactdomlibSyntheticUIEvent__SyntheticUIEvent;
/*≠≠ node_modules/@yr/component/nod...ct-dom/lib/SyntheticUIEvent.js ≠≠*/


/*== node_modules/@yr/component/nod...dom/lib/SyntheticMouseEvent.js ==*/
$m['react-dom/lib/SyntheticMouseEvent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibSyntheticMouseEvent__SyntheticUIEvent = $m['react-dom/lib/SyntheticUIEvent'].exports;
var reactdomlibSyntheticMouseEvent__ViewportMetrics = $m['react-dom/lib/ViewportMetrics'].exports;

var reactdomlibSyntheticMouseEvent__getEventModifierState = $m['react-dom/lib/getEventModifierState'].exports;

/**
 * @interface MouseEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var reactdomlibSyntheticMouseEvent__MouseEventInterface = {
  screenX: null,
  screenY: null,
  clientX: null,
  clientY: null,
  ctrlKey: null,
  shiftKey: null,
  altKey: null,
  metaKey: null,
  getModifierState: reactdomlibSyntheticMouseEvent__getEventModifierState,
  button: function (event) {
    // Webkit, Firefox, IE9+
    // which:  1 2 3
    // button: 0 1 2 (standard)
    var button = event.button;
    if ('which' in event) {
      return button;
    }
    // IE<9
    // which:  undefined
    // button: 0 0 0
    // button: 1 4 2 (onmouseup)
    return button === 2 ? 2 : button === 4 ? 1 : 0;
  },
  buttons: null,
  relatedTarget: function (event) {
    return event.relatedTarget || (event.fromElement === event.srcElement ? event.toElement : event.fromElement);
  },
  // "Proprietary" Interface.
  pageX: function (event) {
    return 'pageX' in event ? event.pageX : event.clientX + reactdomlibSyntheticMouseEvent__ViewportMetrics.currentScrollLeft;
  },
  pageY: function (event) {
    return 'pageY' in event ? event.pageY : event.clientY + reactdomlibSyntheticMouseEvent__ViewportMetrics.currentScrollTop;
  }
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function reactdomlibSyntheticMouseEvent__SyntheticMouseEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return reactdomlibSyntheticMouseEvent__SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

reactdomlibSyntheticMouseEvent__SyntheticUIEvent.augmentClass(reactdomlibSyntheticMouseEvent__SyntheticMouseEvent, reactdomlibSyntheticMouseEvent__MouseEventInterface);

$m['react-dom/lib/SyntheticMouseEvent'].exports = reactdomlibSyntheticMouseEvent__SyntheticMouseEvent;
/*≠≠ node_modules/@yr/component/nod...dom/lib/SyntheticMouseEvent.js ≠≠*/


/*== node_modules/@yr/component/nod...dom/lib/SyntheticWheelEvent.js ==*/
$m['react-dom/lib/SyntheticWheelEvent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibSyntheticWheelEvent__SyntheticMouseEvent = $m['react-dom/lib/SyntheticMouseEvent'].exports;

/**
 * @interface WheelEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var reactdomlibSyntheticWheelEvent__WheelEventInterface = {
  deltaX: function (event) {
    return 'deltaX' in event ? event.deltaX : // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
    'wheelDeltaX' in event ? -event.wheelDeltaX : 0;
  },
  deltaY: function (event) {
    return 'deltaY' in event ? event.deltaY : // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
    'wheelDeltaY' in event ? -event.wheelDeltaY : // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
    'wheelDelta' in event ? -event.wheelDelta : 0;
  },
  deltaZ: null,

  // Browsers without "deltaMode" is reporting in raw wheel delta where one
  // notch on the scroll is always +/- 120, roughly equivalent to pixels.
  // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
  // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
  deltaMode: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticMouseEvent}
 */
function reactdomlibSyntheticWheelEvent__SyntheticWheelEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return reactdomlibSyntheticWheelEvent__SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

reactdomlibSyntheticWheelEvent__SyntheticMouseEvent.augmentClass(reactdomlibSyntheticWheelEvent__SyntheticWheelEvent, reactdomlibSyntheticWheelEvent__WheelEventInterface);

$m['react-dom/lib/SyntheticWheelEvent'].exports = reactdomlibSyntheticWheelEvent__SyntheticWheelEvent;
/*≠≠ node_modules/@yr/component/nod...dom/lib/SyntheticWheelEvent.js ≠≠*/


/*== node_modules/@yr/component/nod...ib/SyntheticTransitionEvent.js ==*/
$m['react-dom/lib/SyntheticTransitionEvent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibSyntheticTransitionEvent__SyntheticEvent = $m['react-dom/lib/SyntheticEvent'].exports;

/**
 * @interface Event
 * @see http://www.w3.org/TR/2009/WD-css3-transitions-20090320/#transition-events-
 * @see https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent
 */
var reactdomlibSyntheticTransitionEvent__TransitionEventInterface = {
  propertyName: null,
  elapsedTime: null,
  pseudoElement: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */
function reactdomlibSyntheticTransitionEvent__SyntheticTransitionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return reactdomlibSyntheticTransitionEvent__SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

reactdomlibSyntheticTransitionEvent__SyntheticEvent.augmentClass(reactdomlibSyntheticTransitionEvent__SyntheticTransitionEvent, reactdomlibSyntheticTransitionEvent__TransitionEventInterface);

$m['react-dom/lib/SyntheticTransitionEvent'].exports = reactdomlibSyntheticTransitionEvent__SyntheticTransitionEvent;
/*≠≠ node_modules/@yr/component/nod...ib/SyntheticTransitionEvent.js ≠≠*/


/*== node_modules/@yr/component/nod...dom/lib/SyntheticTouchEvent.js ==*/
$m['react-dom/lib/SyntheticTouchEvent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibSyntheticTouchEvent__SyntheticUIEvent = $m['react-dom/lib/SyntheticUIEvent'].exports;

var reactdomlibSyntheticTouchEvent__getEventModifierState = $m['react-dom/lib/getEventModifierState'].exports;

/**
 * @interface TouchEvent
 * @see http://www.w3.org/TR/touch-events/
 */
var reactdomlibSyntheticTouchEvent__TouchEventInterface = {
  touches: null,
  targetTouches: null,
  changedTouches: null,
  altKey: null,
  metaKey: null,
  ctrlKey: null,
  shiftKey: null,
  getModifierState: reactdomlibSyntheticTouchEvent__getEventModifierState
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function reactdomlibSyntheticTouchEvent__SyntheticTouchEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return reactdomlibSyntheticTouchEvent__SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

reactdomlibSyntheticTouchEvent__SyntheticUIEvent.augmentClass(reactdomlibSyntheticTouchEvent__SyntheticTouchEvent, reactdomlibSyntheticTouchEvent__TouchEventInterface);

$m['react-dom/lib/SyntheticTouchEvent'].exports = reactdomlibSyntheticTouchEvent__SyntheticTouchEvent;
/*≠≠ node_modules/@yr/component/nod...dom/lib/SyntheticTouchEvent.js ≠≠*/


/*== node_modules/@yr/component/nod...-dom/lib/SyntheticDragEvent.js ==*/
$m['react-dom/lib/SyntheticDragEvent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibSyntheticDragEvent__SyntheticMouseEvent = $m['react-dom/lib/SyntheticMouseEvent'].exports;

/**
 * @interface DragEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var reactdomlibSyntheticDragEvent__DragEventInterface = {
  dataTransfer: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function reactdomlibSyntheticDragEvent__SyntheticDragEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return reactdomlibSyntheticDragEvent__SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

reactdomlibSyntheticDragEvent__SyntheticMouseEvent.augmentClass(reactdomlibSyntheticDragEvent__SyntheticDragEvent, reactdomlibSyntheticDragEvent__DragEventInterface);

$m['react-dom/lib/SyntheticDragEvent'].exports = reactdomlibSyntheticDragEvent__SyntheticDragEvent;
/*≠≠ node_modules/@yr/component/nod...-dom/lib/SyntheticDragEvent.js ≠≠*/


/*== node_modules/@yr/component/nod...s/react-dom/lib/getEventKey.js ==*/
$m['react-dom/lib/getEventKey'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibgetEventKey__getEventCharCode = $m['react-dom/lib/getEventCharCode'].exports;

/**
 * Normalization of deprecated HTML5 `key` values
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */
var reactdomlibgetEventKey__normalizeKey = {
  Esc: 'Escape',
  Spacebar: ' ',
  Left: 'ArrowLeft',
  Up: 'ArrowUp',
  Right: 'ArrowRight',
  Down: 'ArrowDown',
  Del: 'Delete',
  Win: 'OS',
  Menu: 'ContextMenu',
  Apps: 'ContextMenu',
  Scroll: 'ScrollLock',
  MozPrintableKey: 'Unidentified'
};

/**
 * Translation from legacy `keyCode` to HTML5 `key`
 * Only special keys supported, all others depend on keyboard layout or browser
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */
var reactdomlibgetEventKey__translateToKey = {
  8: 'Backspace',
  9: 'Tab',
  12: 'Clear',
  13: 'Enter',
  16: 'Shift',
  17: 'Control',
  18: 'Alt',
  19: 'Pause',
  20: 'CapsLock',
  27: 'Escape',
  32: ' ',
  33: 'PageUp',
  34: 'PageDown',
  35: 'End',
  36: 'Home',
  37: 'ArrowLeft',
  38: 'ArrowUp',
  39: 'ArrowRight',
  40: 'ArrowDown',
  45: 'Insert',
  46: 'Delete',
  112: 'F1',
  113: 'F2',
  114: 'F3',
  115: 'F4',
  116: 'F5',
  117: 'F6',
  118: 'F7',
  119: 'F8',
  120: 'F9',
  121: 'F10',
  122: 'F11',
  123: 'F12',
  144: 'NumLock',
  145: 'ScrollLock',
  224: 'Meta'
};

/**
 * @param {object} nativeEvent Native browser event.
 * @return {string} Normalized `key` property.
 */
function reactdomlibgetEventKey__getEventKey(nativeEvent) {
  if (nativeEvent.key) {
    // Normalize inconsistent values reported by browsers due to
    // implementations of a working draft specification.

    // FireFox implements `key` but returns `MozPrintableKey` for all
    // printable characters (normalized to `Unidentified`), ignore it.
    var key = reactdomlibgetEventKey__normalizeKey[nativeEvent.key] || nativeEvent.key;
    if (key !== 'Unidentified') {
      return key;
    }
  }

  // Browser does not implement `key`, polyfill as much of it as we can.
  if (nativeEvent.type === 'keypress') {
    var charCode = reactdomlibgetEventKey__getEventCharCode(nativeEvent);

    // The enter-key is technically both printable and non-printable and can
    // thus be captured by `keypress`, no other non-printable key should.
    return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
  }
  if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
    // While user keyboard layout determines the actual meaning of each
    // `keyCode` value, almost all function keys have a universal value.
    return reactdomlibgetEventKey__translateToKey[nativeEvent.keyCode] || 'Unidentified';
  }
  return '';
}

$m['react-dom/lib/getEventKey'].exports = reactdomlibgetEventKey__getEventKey;
/*≠≠ node_modules/@yr/component/nod...s/react-dom/lib/getEventKey.js ≠≠*/


/*== node_modules/@yr/component/nod.../lib/SyntheticKeyboardEvent.js ==*/
$m['react-dom/lib/SyntheticKeyboardEvent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibSyntheticKeyboardEvent__SyntheticUIEvent = $m['react-dom/lib/SyntheticUIEvent'].exports;

var reactdomlibSyntheticKeyboardEvent__getEventCharCode = $m['react-dom/lib/getEventCharCode'].exports;
var reactdomlibSyntheticKeyboardEvent__getEventKey = $m['react-dom/lib/getEventKey'].exports;
var reactdomlibSyntheticKeyboardEvent__getEventModifierState = $m['react-dom/lib/getEventModifierState'].exports;

/**
 * @interface KeyboardEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var reactdomlibSyntheticKeyboardEvent__KeyboardEventInterface = {
  key: reactdomlibSyntheticKeyboardEvent__getEventKey,
  location: null,
  ctrlKey: null,
  shiftKey: null,
  altKey: null,
  metaKey: null,
  repeat: null,
  locale: null,
  getModifierState: reactdomlibSyntheticKeyboardEvent__getEventModifierState,
  // Legacy Interface
  charCode: function (event) {
    // `charCode` is the result of a KeyPress event and represents the value of
    // the actual printable character.

    // KeyPress is deprecated, but its replacement is not yet final and not
    // implemented in any major browser. Only KeyPress has charCode.
    if (event.type === 'keypress') {
      return reactdomlibSyntheticKeyboardEvent__getEventCharCode(event);
    }
    return 0;
  },
  keyCode: function (event) {
    // `keyCode` is the result of a KeyDown/Up event and represents the value of
    // physical keyboard key.

    // The actual meaning of the value depends on the users' keyboard layout
    // which cannot be detected. Assuming that it is a US keyboard layout
    // provides a surprisingly accurate mapping for US and European users.
    // Due to this, it is left to the user to implement at this time.
    if (event.type === 'keydown' || event.type === 'keyup') {
      return event.keyCode;
    }
    return 0;
  },
  which: function (event) {
    // `which` is an alias for either `keyCode` or `charCode` depending on the
    // type of the event.
    if (event.type === 'keypress') {
      return reactdomlibSyntheticKeyboardEvent__getEventCharCode(event);
    }
    if (event.type === 'keydown' || event.type === 'keyup') {
      return event.keyCode;
    }
    return 0;
  }
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function reactdomlibSyntheticKeyboardEvent__SyntheticKeyboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return reactdomlibSyntheticKeyboardEvent__SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

reactdomlibSyntheticKeyboardEvent__SyntheticUIEvent.augmentClass(reactdomlibSyntheticKeyboardEvent__SyntheticKeyboardEvent, reactdomlibSyntheticKeyboardEvent__KeyboardEventInterface);

$m['react-dom/lib/SyntheticKeyboardEvent'].exports = reactdomlibSyntheticKeyboardEvent__SyntheticKeyboardEvent;
/*≠≠ node_modules/@yr/component/nod.../lib/SyntheticKeyboardEvent.js ≠≠*/


/*== node_modules/@yr/component/nod...dom/lib/SyntheticFocusEvent.js ==*/
$m['react-dom/lib/SyntheticFocusEvent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibSyntheticFocusEvent__SyntheticUIEvent = $m['react-dom/lib/SyntheticUIEvent'].exports;

/**
 * @interface FocusEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var reactdomlibSyntheticFocusEvent__FocusEventInterface = {
  relatedTarget: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function reactdomlibSyntheticFocusEvent__SyntheticFocusEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return reactdomlibSyntheticFocusEvent__SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

reactdomlibSyntheticFocusEvent__SyntheticUIEvent.augmentClass(reactdomlibSyntheticFocusEvent__SyntheticFocusEvent, reactdomlibSyntheticFocusEvent__FocusEventInterface);

$m['react-dom/lib/SyntheticFocusEvent'].exports = reactdomlibSyntheticFocusEvent__SyntheticFocusEvent;
/*≠≠ node_modules/@yr/component/nod...dom/lib/SyntheticFocusEvent.js ≠≠*/


/*== node_modules/@yr/component/nod...lib/SyntheticClipboardEvent.js ==*/
$m['react-dom/lib/SyntheticClipboardEvent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibSyntheticClipboardEvent__SyntheticEvent = $m['react-dom/lib/SyntheticEvent'].exports;

/**
 * @interface Event
 * @see http://www.w3.org/TR/clipboard-apis/
 */
var reactdomlibSyntheticClipboardEvent__ClipboardEventInterface = {
  clipboardData: function (event) {
    return 'clipboardData' in event ? event.clipboardData : window.clipboardData;
  }
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function reactdomlibSyntheticClipboardEvent__SyntheticClipboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return reactdomlibSyntheticClipboardEvent__SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

reactdomlibSyntheticClipboardEvent__SyntheticEvent.augmentClass(reactdomlibSyntheticClipboardEvent__SyntheticClipboardEvent, reactdomlibSyntheticClipboardEvent__ClipboardEventInterface);

$m['react-dom/lib/SyntheticClipboardEvent'].exports = reactdomlibSyntheticClipboardEvent__SyntheticClipboardEvent;
/*≠≠ node_modules/@yr/component/nod...lib/SyntheticClipboardEvent.js ≠≠*/


/*== node_modules/@yr/component/nod...lib/SyntheticAnimationEvent.js ==*/
$m['react-dom/lib/SyntheticAnimationEvent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibSyntheticAnimationEvent__SyntheticEvent = $m['react-dom/lib/SyntheticEvent'].exports;

/**
 * @interface Event
 * @see http://www.w3.org/TR/css3-animations/#AnimationEvent-interface
 * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent
 */
var reactdomlibSyntheticAnimationEvent__AnimationEventInterface = {
  animationName: null,
  elapsedTime: null,
  pseudoElement: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */
function reactdomlibSyntheticAnimationEvent__SyntheticAnimationEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return reactdomlibSyntheticAnimationEvent__SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

reactdomlibSyntheticAnimationEvent__SyntheticEvent.augmentClass(reactdomlibSyntheticAnimationEvent__SyntheticAnimationEvent, reactdomlibSyntheticAnimationEvent__AnimationEventInterface);

$m['react-dom/lib/SyntheticAnimationEvent'].exports = reactdomlibSyntheticAnimationEvent__SyntheticAnimationEvent;
/*≠≠ node_modules/@yr/component/nod...lib/SyntheticAnimationEvent.js ≠≠*/


/*== node_modules/@yr/component/nod...ct-dom/lib/EventPropagators.js ==*/
$m['react-dom/lib/EventPropagators'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibEventPropagators__EventPluginHub = $m['react-dom/lib/EventPluginHub'].exports;
var reactdomlibEventPropagators__EventPluginUtils = $m['react-dom/lib/EventPluginUtils'].exports;

var reactdomlibEventPropagators__accumulateInto = $m['react-dom/lib/accumulateInto'].exports;
var reactdomlibEventPropagators__forEachAccumulated = $m['react-dom/lib/forEachAccumulated'].exports;
var reactdomlibEventPropagators__warning = $m['fbjs/lib/warning'].exports;

var reactdomlibEventPropagators__getListener = reactdomlibEventPropagators__EventPluginHub.getListener;

/**
 * Some event types have a notion of different registration names for different
 * "phases" of propagation. This finds listeners by a given phase.
 */
function reactdomlibEventPropagators__listenerAtPhase(inst, event, propagationPhase) {
  var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
  return reactdomlibEventPropagators__getListener(inst, registrationName);
}

/**
 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
 * here, allows us to not have to bind or create functions for each event.
 * Mutating the event's members allows us to not have to create a wrapping
 * "dispatch" object that pairs the event with the listener.
 */
function reactdomlibEventPropagators__accumulateDirectionalDispatches(inst, phase, event) {
  if ('development' !== 'production') {
    'development' !== 'production' ? reactdomlibEventPropagators__warning(inst, 'Dispatching inst must not be null') : void 0;
  }
  var listener = reactdomlibEventPropagators__listenerAtPhase(inst, event, phase);
  if (listener) {
    event._dispatchListeners = reactdomlibEventPropagators__accumulateInto(event._dispatchListeners, listener);
    event._dispatchInstances = reactdomlibEventPropagators__accumulateInto(event._dispatchInstances, inst);
  }
}

/**
 * Collect dispatches (must be entirely collected before dispatching - see unit
 * tests). Lazily allocate the array to conserve memory.  We must loop through
 * each event and perform the traversal for each one. We cannot perform a
 * single traversal for the entire collection of events because each event may
 * have a different target.
 */
function reactdomlibEventPropagators__accumulateTwoPhaseDispatchesSingle(event) {
  if (event && event.dispatchConfig.phasedRegistrationNames) {
    reactdomlibEventPropagators__EventPluginUtils.traverseTwoPhase(event._targetInst, reactdomlibEventPropagators__accumulateDirectionalDispatches, event);
  }
}

/**
 * Same as `accumulateTwoPhaseDispatchesSingle`, but skips over the targetID.
 */
function reactdomlibEventPropagators__accumulateTwoPhaseDispatchesSingleSkipTarget(event) {
  if (event && event.dispatchConfig.phasedRegistrationNames) {
    var targetInst = event._targetInst;
    var parentInst = targetInst ? reactdomlibEventPropagators__EventPluginUtils.getParentInstance(targetInst) : null;
    reactdomlibEventPropagators__EventPluginUtils.traverseTwoPhase(parentInst, reactdomlibEventPropagators__accumulateDirectionalDispatches, event);
  }
}

/**
 * Accumulates without regard to direction, does not look for phased
 * registration names. Same as `accumulateDirectDispatchesSingle` but without
 * requiring that the `dispatchMarker` be the same as the dispatched ID.
 */
function reactdomlibEventPropagators__accumulateDispatches(inst, ignoredDirection, event) {
  if (event && event.dispatchConfig.registrationName) {
    var registrationName = event.dispatchConfig.registrationName;
    var listener = reactdomlibEventPropagators__getListener(inst, registrationName);
    if (listener) {
      event._dispatchListeners = reactdomlibEventPropagators__accumulateInto(event._dispatchListeners, listener);
      event._dispatchInstances = reactdomlibEventPropagators__accumulateInto(event._dispatchInstances, inst);
    }
  }
}

/**
 * Accumulates dispatches on an `SyntheticEvent`, but only for the
 * `dispatchMarker`.
 * @param {SyntheticEvent} event
 */
function reactdomlibEventPropagators__accumulateDirectDispatchesSingle(event) {
  if (event && event.dispatchConfig.registrationName) {
    reactdomlibEventPropagators__accumulateDispatches(event._targetInst, null, event);
  }
}

function reactdomlibEventPropagators__accumulateTwoPhaseDispatches(events) {
  reactdomlibEventPropagators__forEachAccumulated(events, reactdomlibEventPropagators__accumulateTwoPhaseDispatchesSingle);
}

function reactdomlibEventPropagators__accumulateTwoPhaseDispatchesSkipTarget(events) {
  reactdomlibEventPropagators__forEachAccumulated(events, reactdomlibEventPropagators__accumulateTwoPhaseDispatchesSingleSkipTarget);
}

function reactdomlibEventPropagators__accumulateEnterLeaveDispatches(leave, enter, from, to) {
  reactdomlibEventPropagators__EventPluginUtils.traverseEnterLeave(from, to, reactdomlibEventPropagators__accumulateDispatches, leave, enter);
}

function reactdomlibEventPropagators__accumulateDirectDispatches(events) {
  reactdomlibEventPropagators__forEachAccumulated(events, reactdomlibEventPropagators__accumulateDirectDispatchesSingle);
}

/**
 * A small set of propagation patterns, each of which will accept a small amount
 * of information, and generate a set of "dispatch ready event objects" - which
 * are sets of events that have already been annotated with a set of dispatched
 * listener functions/ids. The API is designed this way to discourage these
 * propagation strategies from actually executing the dispatches, since we
 * always want to collect the entire set of dispatches before executing event a
 * single one.
 *
 * @constructor EventPropagators
 */
var reactdomlibEventPropagators__EventPropagators = {
  accumulateTwoPhaseDispatches: reactdomlibEventPropagators__accumulateTwoPhaseDispatches,
  accumulateTwoPhaseDispatchesSkipTarget: reactdomlibEventPropagators__accumulateTwoPhaseDispatchesSkipTarget,
  accumulateDirectDispatches: reactdomlibEventPropagators__accumulateDirectDispatches,
  accumulateEnterLeaveDispatches: reactdomlibEventPropagators__accumulateEnterLeaveDispatches
};

$m['react-dom/lib/EventPropagators'].exports = reactdomlibEventPropagators__EventPropagators;
/*≠≠ node_modules/@yr/component/nod...ct-dom/lib/EventPropagators.js ≠≠*/


/*== node_modules/fbjs/lib/EventListener.js ==*/
$m['fbjs/lib/EventListener'] = { exports: {} };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @typechecks
 */

var fbjslibEventListener__emptyFunction = $m['fbjs/lib/emptyFunction'].exports;

/**
 * Upstream version of event listener. Does not take into account specific
 * nature of platform.
 */
var fbjslibEventListener__EventListener = {
  /**
   * Listen to DOM events during the bubble phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  listen: function listen(target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, false);
      return {
        remove: function remove() {
          target.removeEventListener(eventType, callback, false);
        }
      };
    } else if (target.attachEvent) {
      target.attachEvent('on' + eventType, callback);
      return {
        remove: function remove() {
          target.detachEvent('on' + eventType, callback);
        }
      };
    }
  },

  /**
   * Listen to DOM events during the capture phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  capture: function capture(target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, true);
      return {
        remove: function remove() {
          target.removeEventListener(eventType, callback, true);
        }
      };
    } else {
      if ('development' !== 'production') {
        console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
      }
      return {
        remove: fbjslibEventListener__emptyFunction
      };
    }
  },

  registerDefault: function registerDefault() {}
};

$m['fbjs/lib/EventListener'].exports = fbjslibEventListener__EventListener;
/*≠≠ node_modules/fbjs/lib/EventListener.js ≠≠*/


/*== node_modules/@yr/component/nod...t-dom/lib/SimpleEventPlugin.js ==*/
$m['react-dom/lib/SimpleEventPlugin'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var reactdomlibSimpleEventPlugin___prodInvariant = $m['react-dom/lib/reactProdInvariant'].exports;

var reactdomlibSimpleEventPlugin__EventListener = $m['fbjs/lib/EventListener'].exports;
var reactdomlibSimpleEventPlugin__EventPropagators = $m['react-dom/lib/EventPropagators'].exports;
var reactdomlibSimpleEventPlugin__ReactDOMComponentTree = $m['react-dom/lib/ReactDOMComponentTree'].exports;
var reactdomlibSimpleEventPlugin__SyntheticAnimationEvent = $m['react-dom/lib/SyntheticAnimationEvent'].exports;
var reactdomlibSimpleEventPlugin__SyntheticClipboardEvent = $m['react-dom/lib/SyntheticClipboardEvent'].exports;
var reactdomlibSimpleEventPlugin__SyntheticEvent = $m['react-dom/lib/SyntheticEvent'].exports;
var reactdomlibSimpleEventPlugin__SyntheticFocusEvent = $m['react-dom/lib/SyntheticFocusEvent'].exports;
var reactdomlibSimpleEventPlugin__SyntheticKeyboardEvent = $m['react-dom/lib/SyntheticKeyboardEvent'].exports;
var reactdomlibSimpleEventPlugin__SyntheticMouseEvent = $m['react-dom/lib/SyntheticMouseEvent'].exports;
var reactdomlibSimpleEventPlugin__SyntheticDragEvent = $m['react-dom/lib/SyntheticDragEvent'].exports;
var reactdomlibSimpleEventPlugin__SyntheticTouchEvent = $m['react-dom/lib/SyntheticTouchEvent'].exports;
var reactdomlibSimpleEventPlugin__SyntheticTransitionEvent = $m['react-dom/lib/SyntheticTransitionEvent'].exports;
var reactdomlibSimpleEventPlugin__SyntheticUIEvent = $m['react-dom/lib/SyntheticUIEvent'].exports;
var reactdomlibSimpleEventPlugin__SyntheticWheelEvent = $m['react-dom/lib/SyntheticWheelEvent'].exports;

var reactdomlibSimpleEventPlugin__emptyFunction = $m['fbjs/lib/emptyFunction'].exports;
var reactdomlibSimpleEventPlugin__getEventCharCode = $m['react-dom/lib/getEventCharCode'].exports;
var reactdomlibSimpleEventPlugin__invariant = $m['fbjs/lib/invariant'].exports;

/**
 * Turns
 * ['abort', ...]
 * into
 * eventTypes = {
 *   'abort': {
 *     phasedRegistrationNames: {
 *       bubbled: 'onAbort',
 *       captured: 'onAbortCapture',
 *     },
 *     dependencies: ['topAbort'],
 *   },
 *   ...
 * };
 * topLevelEventsToDispatchConfig = {
 *   'topAbort': { sameConfig }
 * };
 */
var reactdomlibSimpleEventPlugin__eventTypes = {};
var reactdomlibSimpleEventPlugin__topLevelEventsToDispatchConfig = {};
['abort', 'animationEnd', 'animationIteration', 'animationStart', 'blur', 'canPlay', 'canPlayThrough', 'click', 'contextMenu', 'copy', 'cut', 'doubleClick', 'drag', 'dragEnd', 'dragEnter', 'dragExit', 'dragLeave', 'dragOver', 'dragStart', 'drop', 'durationChange', 'emptied', 'encrypted', 'ended', 'error', 'focus', 'input', 'invalid', 'keyDown', 'keyPress', 'keyUp', 'load', 'loadedData', 'loadedMetadata', 'loadStart', 'mouseDown', 'mouseMove', 'mouseOut', 'mouseOver', 'mouseUp', 'paste', 'pause', 'play', 'playing', 'progress', 'rateChange', 'reset', 'scroll', 'seeked', 'seeking', 'stalled', 'submit', 'suspend', 'timeUpdate', 'touchCancel', 'touchEnd', 'touchMove', 'touchStart', 'transitionEnd', 'volumeChange', 'waiting', 'wheel'].forEach(function (event) {
  var capitalizedEvent = event[0].toUpperCase() + event.slice(1);
  var onEvent = 'on' + capitalizedEvent;
  var topEvent = 'top' + capitalizedEvent;

  var type = {
    phasedRegistrationNames: {
      bubbled: onEvent,
      captured: onEvent + 'Capture'
    },
    dependencies: [topEvent]
  };
  reactdomlibSimpleEventPlugin__eventTypes[event] = type;
  reactdomlibSimpleEventPlugin__topLevelEventsToDispatchConfig[topEvent] = type;
});

var reactdomlibSimpleEventPlugin__onClickListeners = {};

function reactdomlibSimpleEventPlugin__getDictionaryKey(inst) {
  // Prevents V8 performance issue:
  // https://github.com/facebook/react/pull/7232
  return '.' + inst._rootNodeID;
}

function reactdomlibSimpleEventPlugin__isInteractive(tag) {
  return tag === 'button' || tag === 'input' || tag === 'select' || tag === 'textarea';
}

var reactdomlibSimpleEventPlugin__SimpleEventPlugin = {
  eventTypes: reactdomlibSimpleEventPlugin__eventTypes,

  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    var dispatchConfig = reactdomlibSimpleEventPlugin__topLevelEventsToDispatchConfig[topLevelType];
    if (!dispatchConfig) {
      return null;
    }
    var EventConstructor;
    switch (topLevelType) {
      case 'topAbort':
      case 'topCanPlay':
      case 'topCanPlayThrough':
      case 'topDurationChange':
      case 'topEmptied':
      case 'topEncrypted':
      case 'topEnded':
      case 'topError':
      case 'topInput':
      case 'topInvalid':
      case 'topLoad':
      case 'topLoadedData':
      case 'topLoadedMetadata':
      case 'topLoadStart':
      case 'topPause':
      case 'topPlay':
      case 'topPlaying':
      case 'topProgress':
      case 'topRateChange':
      case 'topReset':
      case 'topSeeked':
      case 'topSeeking':
      case 'topStalled':
      case 'topSubmit':
      case 'topSuspend':
      case 'topTimeUpdate':
      case 'topVolumeChange':
      case 'topWaiting':
        // HTML Events
        // @see http://www.w3.org/TR/html5/index.html#events-0
        EventConstructor = reactdomlibSimpleEventPlugin__SyntheticEvent;
        break;
      case 'topKeyPress':
        // Firefox creates a keypress event for function keys too. This removes
        // the unwanted keypress events. Enter is however both printable and
        // non-printable. One would expect Tab to be as well (but it isn't).
        if (reactdomlibSimpleEventPlugin__getEventCharCode(nativeEvent) === 0) {
          return null;
        }
      /* falls through */
      case 'topKeyDown':
      case 'topKeyUp':
        EventConstructor = reactdomlibSimpleEventPlugin__SyntheticKeyboardEvent;
        break;
      case 'topBlur':
      case 'topFocus':
        EventConstructor = reactdomlibSimpleEventPlugin__SyntheticFocusEvent;
        break;
      case 'topClick':
        // Firefox creates a click event on right mouse clicks. This removes the
        // unwanted click events.
        if (nativeEvent.button === 2) {
          return null;
        }
      /* falls through */
      case 'topDoubleClick':
      case 'topMouseDown':
      case 'topMouseMove':
      case 'topMouseUp':
      // TODO: Disabled elements should not respond to mouse events
      /* falls through */
      case 'topMouseOut':
      case 'topMouseOver':
      case 'topContextMenu':
        EventConstructor = reactdomlibSimpleEventPlugin__SyntheticMouseEvent;
        break;
      case 'topDrag':
      case 'topDragEnd':
      case 'topDragEnter':
      case 'topDragExit':
      case 'topDragLeave':
      case 'topDragOver':
      case 'topDragStart':
      case 'topDrop':
        EventConstructor = reactdomlibSimpleEventPlugin__SyntheticDragEvent;
        break;
      case 'topTouchCancel':
      case 'topTouchEnd':
      case 'topTouchMove':
      case 'topTouchStart':
        EventConstructor = reactdomlibSimpleEventPlugin__SyntheticTouchEvent;
        break;
      case 'topAnimationEnd':
      case 'topAnimationIteration':
      case 'topAnimationStart':
        EventConstructor = reactdomlibSimpleEventPlugin__SyntheticAnimationEvent;
        break;
      case 'topTransitionEnd':
        EventConstructor = reactdomlibSimpleEventPlugin__SyntheticTransitionEvent;
        break;
      case 'topScroll':
        EventConstructor = reactdomlibSimpleEventPlugin__SyntheticUIEvent;
        break;
      case 'topWheel':
        EventConstructor = reactdomlibSimpleEventPlugin__SyntheticWheelEvent;
        break;
      case 'topCopy':
      case 'topCut':
      case 'topPaste':
        EventConstructor = reactdomlibSimpleEventPlugin__SyntheticClipboardEvent;
        break;
    }
    !EventConstructor ? 'development' !== 'production' ? reactdomlibSimpleEventPlugin__invariant(false, 'SimpleEventPlugin: Unhandled event type, `%s`.', topLevelType) : reactdomlibSimpleEventPlugin___prodInvariant('86', topLevelType) : void 0;
    var event = EventConstructor.getPooled(dispatchConfig, targetInst, nativeEvent, nativeEventTarget);
    reactdomlibSimpleEventPlugin__EventPropagators.accumulateTwoPhaseDispatches(event);
    return event;
  },

  didPutListener: function (inst, registrationName, listener) {
    // Mobile Safari does not fire properly bubble click events on
    // non-interactive elements, which means delegated click listeners do not
    // fire. The workaround for this bug involves attaching an empty click
    // listener on the target node.
    // http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
    if (registrationName === 'onClick' && !reactdomlibSimpleEventPlugin__isInteractive(inst._tag)) {
      var key = reactdomlibSimpleEventPlugin__getDictionaryKey(inst);
      var node = reactdomlibSimpleEventPlugin__ReactDOMComponentTree.getNodeFromInstance(inst);
      if (!reactdomlibSimpleEventPlugin__onClickListeners[key]) {
        reactdomlibSimpleEventPlugin__onClickListeners[key] = reactdomlibSimpleEventPlugin__EventListener.listen(node, 'click', reactdomlibSimpleEventPlugin__emptyFunction);
      }
    }
  },

  willDeleteListener: function (inst, registrationName) {
    if (registrationName === 'onClick' && !reactdomlibSimpleEventPlugin__isInteractive(inst._tag)) {
      var key = reactdomlibSimpleEventPlugin__getDictionaryKey(inst);
      reactdomlibSimpleEventPlugin__onClickListeners[key].remove();
      delete reactdomlibSimpleEventPlugin__onClickListeners[key];
    }
  }
};

$m['react-dom/lib/SimpleEventPlugin'].exports = reactdomlibSimpleEventPlugin__SimpleEventPlugin;
/*≠≠ node_modules/@yr/component/nod...t-dom/lib/SimpleEventPlugin.js ≠≠*/


/*== node_modules/fbjs/lib/isTextNode.js ==*/
$m['fbjs/lib/isTextNode'] = { exports: {} };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var fbjslibisTextNode__isNode = $m['fbjs/lib/isNode'].exports;

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM text node.
 */
function fbjslibisTextNode__isTextNode(object) {
  return fbjslibisTextNode__isNode(object) && object.nodeType == 3;
}

$m['fbjs/lib/isTextNode'].exports = fbjslibisTextNode__isTextNode;
/*≠≠ node_modules/fbjs/lib/isTextNode.js ≠≠*/


/*== node_modules/fbjs/lib/containsNode.js ==*/
$m['fbjs/lib/containsNode'] = { exports: {} };

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

var fbjslibcontainsNode__isTextNode = $m['fbjs/lib/isTextNode'].exports;

/*eslint-disable no-bitwise */

/**
 * Checks if a given DOM node contains or is another DOM node.
 */
function fbjslibcontainsNode__containsNode(outerNode, innerNode) {
  if (!outerNode || !innerNode) {
    return false;
  } else if (outerNode === innerNode) {
    return true;
  } else if (fbjslibcontainsNode__isTextNode(outerNode)) {
    return false;
  } else if (fbjslibcontainsNode__isTextNode(innerNode)) {
    return fbjslibcontainsNode__containsNode(outerNode, innerNode.parentNode);
  } else if ('contains' in outerNode) {
    return outerNode.contains(innerNode);
  } else if (outerNode.compareDocumentPosition) {
    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
  } else {
    return false;
  }
}

$m['fbjs/lib/containsNode'].exports = fbjslibcontainsNode__containsNode;
/*≠≠ node_modules/fbjs/lib/containsNode.js ≠≠*/


/*== node_modules/@yr/component/nod.../lib/getTextContentAccessor.js ==*/
$m['react-dom/lib/getTextContentAccessor'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibgetTextContentAccessor__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;

var reactdomlibgetTextContentAccessor__contentKey = null;

/**
 * Gets the key used to access text content on a DOM node.
 *
 * @return {?string} Key used to access text content.
 * @internal
 */
function reactdomlibgetTextContentAccessor__getTextContentAccessor() {
  if (!reactdomlibgetTextContentAccessor__contentKey && reactdomlibgetTextContentAccessor__ExecutionEnvironment.canUseDOM) {
    // Prefer textContent to innerText because many browsers support both but
    // SVG <text> elements don't support innerText even when <div> does.
    reactdomlibgetTextContentAccessor__contentKey = 'textContent' in document.documentElement ? 'textContent' : 'innerText';
  }
  return reactdomlibgetTextContentAccessor__contentKey;
}

$m['react-dom/lib/getTextContentAccessor'].exports = reactdomlibgetTextContentAccessor__getTextContentAccessor;
/*≠≠ node_modules/@yr/component/nod.../lib/getTextContentAccessor.js ≠≠*/


/*== node_modules/@yr/component/nod...t-dom/lib/ReactDOMSelection.js ==*/
$m['react-dom/lib/ReactDOMSelection'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactDOMSelection__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;

var reactdomlibReactDOMSelection__getNodeForCharacterOffset = $m['react-dom/lib/getNodeForCharacterOffset'].exports;
var reactdomlibReactDOMSelection__getTextContentAccessor = $m['react-dom/lib/getTextContentAccessor'].exports;

/**
 * While `isCollapsed` is available on the Selection object and `collapsed`
 * is available on the Range object, IE11 sometimes gets them wrong.
 * If the anchor/focus nodes and offsets are the same, the range is collapsed.
 */
function reactdomlibReactDOMSelection__isCollapsed(anchorNode, anchorOffset, focusNode, focusOffset) {
  return anchorNode === focusNode && anchorOffset === focusOffset;
}

/**
 * Get the appropriate anchor and focus node/offset pairs for IE.
 *
 * The catch here is that IE's selection API doesn't provide information
 * about whether the selection is forward or backward, so we have to
 * behave as though it's always forward.
 *
 * IE text differs from modern selection in that it behaves as though
 * block elements end with a new line. This means character offsets will
 * differ between the two APIs.
 *
 * @param {DOMElement} node
 * @return {object}
 */
function reactdomlibReactDOMSelection__getIEOffsets(node) {
  var selection = document.selection;
  var selectedRange = selection.createRange();
  var selectedLength = selectedRange.text.length;

  // Duplicate selection so we can move range without breaking user selection.
  var fromStart = selectedRange.duplicate();
  fromStart.moveToElementText(node);
  fromStart.setEndPoint('EndToStart', selectedRange);

  var startOffset = fromStart.text.length;
  var endOffset = startOffset + selectedLength;

  return {
    start: startOffset,
    end: endOffset
  };
}

/**
 * @param {DOMElement} node
 * @return {?object}
 */
function reactdomlibReactDOMSelection__getModernOffsets(node) {
  var selection = window.getSelection && window.getSelection();

  if (!selection || selection.rangeCount === 0) {
    return null;
  }

  var anchorNode = selection.anchorNode;
  var anchorOffset = selection.anchorOffset;
  var focusNode = selection.focusNode;
  var focusOffset = selection.focusOffset;

  var currentRange = selection.getRangeAt(0);

  // In Firefox, range.startContainer and range.endContainer can be "anonymous
  // divs", e.g. the up/down buttons on an <input type="number">. Anonymous
  // divs do not seem to expose properties, triggering a "Permission denied
  // error" if any of its properties are accessed. The only seemingly possible
  // way to avoid erroring is to access a property that typically works for
  // non-anonymous divs and catch any error that may otherwise arise. See
  // https://bugzilla.mozilla.org/show_bug.cgi?id=208427
  try {
    /* eslint-disable no-unused-expressions */
    currentRange.startContainer.nodeType;
    currentRange.endContainer.nodeType;
    /* eslint-enable no-unused-expressions */
  } catch (e) {
    return null;
  }

  // If the node and offset values are the same, the selection is collapsed.
  // `Selection.isCollapsed` is available natively, but IE sometimes gets
  // this value wrong.
  var isSelectionCollapsed = reactdomlibReactDOMSelection__isCollapsed(selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset);

  var rangeLength = isSelectionCollapsed ? 0 : currentRange.toString().length;

  var tempRange = currentRange.cloneRange();
  tempRange.selectNodeContents(node);
  tempRange.setEnd(currentRange.startContainer, currentRange.startOffset);

  var isTempRangeCollapsed = reactdomlibReactDOMSelection__isCollapsed(tempRange.startContainer, tempRange.startOffset, tempRange.endContainer, tempRange.endOffset);

  var start = isTempRangeCollapsed ? 0 : tempRange.toString().length;
  var end = start + rangeLength;

  // Detect whether the selection is backward.
  var detectionRange = document.createRange();
  detectionRange.setStart(anchorNode, anchorOffset);
  detectionRange.setEnd(focusNode, focusOffset);
  var isBackward = detectionRange.collapsed;

  return {
    start: isBackward ? end : start,
    end: isBackward ? start : end
  };
}

/**
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */
function reactdomlibReactDOMSelection__setIEOffsets(node, offsets) {
  var range = document.selection.createRange().duplicate();
  var start, end;

  if (offsets.end === undefined) {
    start = offsets.start;
    end = start;
  } else if (offsets.start > offsets.end) {
    start = offsets.end;
    end = offsets.start;
  } else {
    start = offsets.start;
    end = offsets.end;
  }

  range.moveToElementText(node);
  range.moveStart('character', start);
  range.setEndPoint('EndToStart', range);
  range.moveEnd('character', end - start);
  range.select();
}

/**
 * In modern non-IE browsers, we can support both forward and backward
 * selections.
 *
 * Note: IE10+ supports the Selection object, but it does not support
 * the `extend` method, which means that even in modern IE, it's not possible
 * to programmatically create a backward selection. Thus, for all IE
 * versions, we use the old IE API to create our selections.
 *
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */
function reactdomlibReactDOMSelection__setModernOffsets(node, offsets) {
  if (!window.getSelection) {
    return;
  }

  var selection = window.getSelection();
  var length = node[reactdomlibReactDOMSelection__getTextContentAccessor()].length;
  var start = Math.min(offsets.start, length);
  var end = offsets.end === undefined ? start : Math.min(offsets.end, length);

  // IE 11 uses modern selection, but doesn't support the extend method.
  // Flip backward selections, so we can set with a single range.
  if (!selection.extend && start > end) {
    var temp = end;
    end = start;
    start = temp;
  }

  var startMarker = reactdomlibReactDOMSelection__getNodeForCharacterOffset(node, start);
  var endMarker = reactdomlibReactDOMSelection__getNodeForCharacterOffset(node, end);

  if (startMarker && endMarker) {
    var range = document.createRange();
    range.setStart(startMarker.node, startMarker.offset);
    selection.removeAllRanges();

    if (start > end) {
      selection.addRange(range);
      selection.extend(endMarker.node, endMarker.offset);
    } else {
      range.setEnd(endMarker.node, endMarker.offset);
      selection.addRange(range);
    }
  }
}

var reactdomlibReactDOMSelection__useIEOffsets = reactdomlibReactDOMSelection__ExecutionEnvironment.canUseDOM && 'selection' in document && !('getSelection' in window);

var reactdomlibReactDOMSelection__ReactDOMSelection = {
  /**
   * @param {DOMElement} node
   */
  getOffsets: reactdomlibReactDOMSelection__useIEOffsets ? reactdomlibReactDOMSelection__getIEOffsets : reactdomlibReactDOMSelection__getModernOffsets,

  /**
   * @param {DOMElement|DOMTextNode} node
   * @param {object} offsets
   */
  setOffsets: reactdomlibReactDOMSelection__useIEOffsets ? reactdomlibReactDOMSelection__setIEOffsets : reactdomlibReactDOMSelection__setModernOffsets
};

$m['react-dom/lib/ReactDOMSelection'].exports = reactdomlibReactDOMSelection__ReactDOMSelection;
/*≠≠ node_modules/@yr/component/nod...t-dom/lib/ReactDOMSelection.js ≠≠*/


/*== node_modules/@yr/component/nod...dom/lib/ReactInputSelection.js ==*/
$m['react-dom/lib/ReactInputSelection'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactInputSelection__ReactDOMSelection = $m['react-dom/lib/ReactDOMSelection'].exports;

var reactdomlibReactInputSelection__containsNode = $m['fbjs/lib/containsNode'].exports;
var reactdomlibReactInputSelection__focusNode = $m['fbjs/lib/focusNode'].exports;
var reactdomlibReactInputSelection__getActiveElement = $m['fbjs/lib/getActiveElement'].exports;

function reactdomlibReactInputSelection__isInDocument(node) {
  return reactdomlibReactInputSelection__containsNode(document.documentElement, node);
}

/**
 * @ReactInputSelection: React input selection module. Based on Selection.js,
 * but modified to be suitable for react and has a couple of bug fixes (doesn't
 * assume buttons have range selections allowed).
 * Input selection module for React.
 */
var reactdomlibReactInputSelection__ReactInputSelection = {
  hasSelectionCapabilities: function (elem) {
    var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
    return nodeName && (nodeName === 'input' && elem.type === 'text' || nodeName === 'textarea' || elem.contentEditable === 'true');
  },

  getSelectionInformation: function () {
    var focusedElem = reactdomlibReactInputSelection__getActiveElement();
    return {
      focusedElem: focusedElem,
      selectionRange: reactdomlibReactInputSelection__ReactInputSelection.hasSelectionCapabilities(focusedElem) ? reactdomlibReactInputSelection__ReactInputSelection.getSelection(focusedElem) : null
    };
  },

  /**
   * @restoreSelection: If any selection information was potentially lost,
   * restore it. This is useful when performing operations that could remove dom
   * nodes and place them back in, resulting in focus being lost.
   */
  restoreSelection: function (priorSelectionInformation) {
    var curFocusedElem = reactdomlibReactInputSelection__getActiveElement();
    var priorFocusedElem = priorSelectionInformation.focusedElem;
    var priorSelectionRange = priorSelectionInformation.selectionRange;
    if (curFocusedElem !== priorFocusedElem && reactdomlibReactInputSelection__isInDocument(priorFocusedElem)) {
      if (reactdomlibReactInputSelection__ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)) {
        reactdomlibReactInputSelection__ReactInputSelection.setSelection(priorFocusedElem, priorSelectionRange);
      }
      reactdomlibReactInputSelection__focusNode(priorFocusedElem);
    }
  },

  /**
   * @getSelection: Gets the selection bounds of a focused textarea, input or
   * contentEditable node.
   * -@input: Look up selection bounds of this input
   * -@return {start: selectionStart, end: selectionEnd}
   */
  getSelection: function (input) {
    var selection;

    if ('selectionStart' in input) {
      // Modern browser with input or textarea.
      selection = {
        start: input.selectionStart,
        end: input.selectionEnd
      };
    } else if (document.selection && input.nodeName && input.nodeName.toLowerCase() === 'input') {
      // IE8 input.
      var range = document.selection.createRange();
      // There can only be one selection per document in IE, so it must
      // be in our element.
      if (range.parentElement() === input) {
        selection = {
          start: -range.moveStart('character', -input.value.length),
          end: -range.moveEnd('character', -input.value.length)
        };
      }
    } else {
      // Content editable or old IE textarea.
      selection = reactdomlibReactInputSelection__ReactDOMSelection.getOffsets(input);
    }

    return selection || { start: 0, end: 0 };
  },

  /**
   * @setSelection: Sets the selection bounds of a textarea or input and focuses
   * the input.
   * -@input     Set selection bounds of this input or textarea
   * -@offsets   Object of same form that is returned from get*
   */
  setSelection: function (input, offsets) {
    var start = offsets.start;
    var end = offsets.end;
    if (end === undefined) {
      end = start;
    }

    if ('selectionStart' in input) {
      input.selectionStart = start;
      input.selectionEnd = Math.min(end, input.value.length);
    } else if (document.selection && input.nodeName && input.nodeName.toLowerCase() === 'input') {
      var range = input.createTextRange();
      range.collapse(true);
      range.moveStart('character', start);
      range.moveEnd('character', end - start);
      range.select();
    } else {
      reactdomlibReactInputSelection__ReactDOMSelection.setOffsets(input, offsets);
    }
  }
};

$m['react-dom/lib/ReactInputSelection'].exports = reactdomlibReactInputSelection__ReactInputSelection;
/*≠≠ node_modules/@yr/component/nod...dom/lib/ReactInputSelection.js ≠≠*/


/*== node_modules/@yr/component/nod...t-dom/lib/SelectEventPlugin.js ==*/
$m['react-dom/lib/SelectEventPlugin'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibSelectEventPlugin__EventPropagators = $m['react-dom/lib/EventPropagators'].exports;
var reactdomlibSelectEventPlugin__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;
var reactdomlibSelectEventPlugin__ReactDOMComponentTree = $m['react-dom/lib/ReactDOMComponentTree'].exports;
var reactdomlibSelectEventPlugin__ReactInputSelection = $m['react-dom/lib/ReactInputSelection'].exports;
var reactdomlibSelectEventPlugin__SyntheticEvent = $m['react-dom/lib/SyntheticEvent'].exports;

var reactdomlibSelectEventPlugin__getActiveElement = $m['fbjs/lib/getActiveElement'].exports;
var reactdomlibSelectEventPlugin__isTextInputElement = $m['react-dom/lib/isTextInputElement'].exports;
var reactdomlibSelectEventPlugin__shallowEqual = $m['fbjs/lib/shallowEqual'].exports;

var reactdomlibSelectEventPlugin__skipSelectionChangeEvent = reactdomlibSelectEventPlugin__ExecutionEnvironment.canUseDOM && 'documentMode' in document && document.documentMode <= 11;

var reactdomlibSelectEventPlugin__eventTypes = {
  select: {
    phasedRegistrationNames: {
      bubbled: 'onSelect',
      captured: 'onSelectCapture'
    },
    dependencies: ['topBlur', 'topContextMenu', 'topFocus', 'topKeyDown', 'topKeyUp', 'topMouseDown', 'topMouseUp', 'topSelectionChange']
  }
};

var reactdomlibSelectEventPlugin__activeElement = null;
var reactdomlibSelectEventPlugin__activeElementInst = null;
var reactdomlibSelectEventPlugin__lastSelection = null;
var reactdomlibSelectEventPlugin__mouseDown = false;

// Track whether a listener exists for this plugin. If none exist, we do
// not extract events. See #3639.
var reactdomlibSelectEventPlugin__hasListener = false;

/**
 * Get an object which is a unique representation of the current selection.
 *
 * The return value will not be consistent across nodes or browsers, but
 * two identical selections on the same node will return identical objects.
 *
 * @param {DOMElement} node
 * @return {object}
 */
function reactdomlibSelectEventPlugin__getSelection(node) {
  if ('selectionStart' in node && reactdomlibSelectEventPlugin__ReactInputSelection.hasSelectionCapabilities(node)) {
    return {
      start: node.selectionStart,
      end: node.selectionEnd
    };
  } else if (window.getSelection) {
    var selection = window.getSelection();
    return {
      anchorNode: selection.anchorNode,
      anchorOffset: selection.anchorOffset,
      focusNode: selection.focusNode,
      focusOffset: selection.focusOffset
    };
  } else if (document.selection) {
    var range = document.selection.createRange();
    return {
      parentElement: range.parentElement(),
      text: range.text,
      top: range.boundingTop,
      left: range.boundingLeft
    };
  }
}

/**
 * Poll selection to see whether it's changed.
 *
 * @param {object} nativeEvent
 * @return {?SyntheticEvent}
 */
function reactdomlibSelectEventPlugin__constructSelectEvent(nativeEvent, nativeEventTarget) {
  // Ensure we have the right element, and that the user is not dragging a
  // selection (this matches native `select` event behavior). In HTML5, select
  // fires only on input and textarea thus if there's no focused element we
  // won't dispatch.
  if (reactdomlibSelectEventPlugin__mouseDown || reactdomlibSelectEventPlugin__activeElement == null || reactdomlibSelectEventPlugin__activeElement !== reactdomlibSelectEventPlugin__getActiveElement()) {
    return null;
  }

  // Only fire when selection has actually changed.
  var currentSelection = reactdomlibSelectEventPlugin__getSelection(reactdomlibSelectEventPlugin__activeElement);
  if (!reactdomlibSelectEventPlugin__lastSelection || !reactdomlibSelectEventPlugin__shallowEqual(reactdomlibSelectEventPlugin__lastSelection, currentSelection)) {
    reactdomlibSelectEventPlugin__lastSelection = currentSelection;

    var syntheticEvent = reactdomlibSelectEventPlugin__SyntheticEvent.getPooled(reactdomlibSelectEventPlugin__eventTypes.select, reactdomlibSelectEventPlugin__activeElementInst, nativeEvent, nativeEventTarget);

    syntheticEvent.type = 'select';
    syntheticEvent.target = reactdomlibSelectEventPlugin__activeElement;

    reactdomlibSelectEventPlugin__EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);

    return syntheticEvent;
  }

  return null;
}

/**
 * This plugin creates an `onSelect` event that normalizes select events
 * across form elements.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - contentEditable
 *
 * This differs from native browser implementations in the following ways:
 * - Fires on contentEditable fields as well as inputs.
 * - Fires for collapsed selection.
 * - Fires after user input.
 */
var reactdomlibSelectEventPlugin__SelectEventPlugin = {
  eventTypes: reactdomlibSelectEventPlugin__eventTypes,

  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    if (!reactdomlibSelectEventPlugin__hasListener) {
      return null;
    }

    var targetNode = targetInst ? reactdomlibSelectEventPlugin__ReactDOMComponentTree.getNodeFromInstance(targetInst) : window;

    switch (topLevelType) {
      // Track the input node that has focus.
      case 'topFocus':
        if (reactdomlibSelectEventPlugin__isTextInputElement(targetNode) || targetNode.contentEditable === 'true') {
          reactdomlibSelectEventPlugin__activeElement = targetNode;
          reactdomlibSelectEventPlugin__activeElementInst = targetInst;
          reactdomlibSelectEventPlugin__lastSelection = null;
        }
        break;
      case 'topBlur':
        reactdomlibSelectEventPlugin__activeElement = null;
        reactdomlibSelectEventPlugin__activeElementInst = null;
        reactdomlibSelectEventPlugin__lastSelection = null;
        break;
      // Don't fire the event while the user is dragging. This matches the
      // semantics of the native select event.
      case 'topMouseDown':
        reactdomlibSelectEventPlugin__mouseDown = true;
        break;
      case 'topContextMenu':
      case 'topMouseUp':
        reactdomlibSelectEventPlugin__mouseDown = false;
        return reactdomlibSelectEventPlugin__constructSelectEvent(nativeEvent, nativeEventTarget);
      // Chrome and IE fire non-standard event when selection is changed (and
      // sometimes when it hasn't). IE's event fires out of order with respect
      // to key and input events on deletion, so we discard it.
      //
      // Firefox doesn't support selectionchange, so check selection status
      // after each key entry. The selection changes after keydown and before
      // keyup, but we check on keydown as well in the case of holding down a
      // key, when multiple keydown events are fired but only one keyup is.
      // This is also our approach for IE handling, for the reason above.
      case 'topSelectionChange':
        if (reactdomlibSelectEventPlugin__skipSelectionChangeEvent) {
          break;
        }
      // falls through
      case 'topKeyDown':
      case 'topKeyUp':
        return reactdomlibSelectEventPlugin__constructSelectEvent(nativeEvent, nativeEventTarget);
    }

    return null;
  },

  didPutListener: function (inst, registrationName, listener) {
    if (registrationName === 'onSelect') {
      reactdomlibSelectEventPlugin__hasListener = true;
    }
  }
};

$m['react-dom/lib/SelectEventPlugin'].exports = reactdomlibSelectEventPlugin__SelectEventPlugin;
/*≠≠ node_modules/@yr/component/nod...t-dom/lib/SelectEventPlugin.js ≠≠*/


/*== node_modules/@yr/component/nod...b/ReactReconcileTransaction.js ==*/
$m['react-dom/lib/ReactReconcileTransaction'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactReconcileTransaction___assign = $m['object-assign'].exports;

var reactdomlibReactReconcileTransaction__CallbackQueue = $m['react-dom/lib/CallbackQueue'].exports;
var reactdomlibReactReconcileTransaction__PooledClass = $m['react-dom/lib/PooledClass'].exports;
var reactdomlibReactReconcileTransaction__ReactBrowserEventEmitter = $m['react-dom/lib/ReactBrowserEventEmitter'].exports;
var reactdomlibReactReconcileTransaction__ReactInputSelection = $m['react-dom/lib/ReactInputSelection'].exports;
var reactdomlibReactReconcileTransaction__ReactInstrumentation = $m['react-dom/lib/ReactInstrumentation'].exports;
var reactdomlibReactReconcileTransaction__Transaction = $m['react-dom/lib/Transaction'].exports;
var reactdomlibReactReconcileTransaction__ReactUpdateQueue = $m['react-dom/lib/ReactUpdateQueue'].exports;

/**
 * Ensures that, when possible, the selection range (currently selected text
 * input) is not disturbed by performing the transaction.
 */
var reactdomlibReactReconcileTransaction__SELECTION_RESTORATION = {
  /**
   * @return {Selection} Selection information.
   */
  initialize: reactdomlibReactReconcileTransaction__ReactInputSelection.getSelectionInformation,
  /**
   * @param {Selection} sel Selection information returned from `initialize`.
   */
  close: reactdomlibReactReconcileTransaction__ReactInputSelection.restoreSelection
};

/**
 * Suppresses events (blur/focus) that could be inadvertently dispatched due to
 * high level DOM manipulations (like temporarily removing a text input from the
 * DOM).
 */
var reactdomlibReactReconcileTransaction__EVENT_SUPPRESSION = {
  /**
   * @return {boolean} The enabled status of `ReactBrowserEventEmitter` before
   * the reconciliation.
   */
  initialize: function () {
    var currentlyEnabled = reactdomlibReactReconcileTransaction__ReactBrowserEventEmitter.isEnabled();
    reactdomlibReactReconcileTransaction__ReactBrowserEventEmitter.setEnabled(false);
    return currentlyEnabled;
  },

  /**
   * @param {boolean} previouslyEnabled Enabled status of
   *   `ReactBrowserEventEmitter` before the reconciliation occurred. `close`
   *   restores the previous value.
   */
  close: function (previouslyEnabled) {
    reactdomlibReactReconcileTransaction__ReactBrowserEventEmitter.setEnabled(previouslyEnabled);
  }
};

/**
 * Provides a queue for collecting `componentDidMount` and
 * `componentDidUpdate` callbacks during the transaction.
 */
var reactdomlibReactReconcileTransaction__ON_DOM_READY_QUEUEING = {
  /**
   * Initializes the internal `onDOMReady` queue.
   */
  initialize: function () {
    this.reactMountReady.reset();
  },

  /**
   * After DOM is flushed, invoke all registered `onDOMReady` callbacks.
   */
  close: function () {
    this.reactMountReady.notifyAll();
  }
};

/**
 * Executed within the scope of the `Transaction` instance. Consider these as
 * being member methods, but with an implied ordering while being isolated from
 * each other.
 */
var reactdomlibReactReconcileTransaction__TRANSACTION_WRAPPERS = [reactdomlibReactReconcileTransaction__SELECTION_RESTORATION, reactdomlibReactReconcileTransaction__EVENT_SUPPRESSION, reactdomlibReactReconcileTransaction__ON_DOM_READY_QUEUEING];

if ('development' !== 'production') {
  reactdomlibReactReconcileTransaction__TRANSACTION_WRAPPERS.push({
    initialize: reactdomlibReactReconcileTransaction__ReactInstrumentation.debugTool.onBeginFlush,
    close: reactdomlibReactReconcileTransaction__ReactInstrumentation.debugTool.onEndFlush
  });
}

/**
 * Currently:
 * - The order that these are listed in the transaction is critical:
 * - Suppresses events.
 * - Restores selection range.
 *
 * Future:
 * - Restore document/overflow scroll positions that were unintentionally
 *   modified via DOM insertions above the top viewport boundary.
 * - Implement/integrate with customized constraint based layout system and keep
 *   track of which dimensions must be remeasured.
 *
 * @class ReactReconcileTransaction
 */
function reactdomlibReactReconcileTransaction__ReactReconcileTransaction(useCreateElement) {
  this.reinitializeTransaction();
  // Only server-side rendering really needs this option (see
  // `ReactServerRendering`), but server-side uses
  // `ReactServerRenderingTransaction` instead. This option is here so that it's
  // accessible and defaults to false when `ReactDOMComponent` and
  // `ReactDOMTextComponent` checks it in `mountComponent`.`
  this.renderToStaticMarkup = false;
  this.reactMountReady = reactdomlibReactReconcileTransaction__CallbackQueue.getPooled(null);
  this.useCreateElement = useCreateElement;
}

var reactdomlibReactReconcileTransaction__Mixin = {
  /**
   * @see Transaction
   * @abstract
   * @final
   * @return {array<object>} List of operation wrap procedures.
   *   TODO: convert to array<TransactionWrapper>
   */
  getTransactionWrappers: function () {
    return reactdomlibReactReconcileTransaction__TRANSACTION_WRAPPERS;
  },

  /**
   * @return {object} The queue to collect `onDOMReady` callbacks with.
   */
  getReactMountReady: function () {
    return this.reactMountReady;
  },

  /**
   * @return {object} The queue to collect React async events.
   */
  getUpdateQueue: function () {
    return reactdomlibReactReconcileTransaction__ReactUpdateQueue;
  },

  /**
   * Save current transaction state -- if the return value from this method is
   * passed to `rollback`, the transaction will be reset to that state.
   */
  checkpoint: function () {
    // reactMountReady is the our only stateful wrapper
    return this.reactMountReady.checkpoint();
  },

  rollback: function (checkpoint) {
    this.reactMountReady.rollback(checkpoint);
  },

  /**
   * `PooledClass` looks for this, and will invoke this before allowing this
   * instance to be reused.
   */
  destructor: function () {
    reactdomlibReactReconcileTransaction__CallbackQueue.release(this.reactMountReady);
    this.reactMountReady = null;
  }
};

reactdomlibReactReconcileTransaction___assign(reactdomlibReactReconcileTransaction__ReactReconcileTransaction.prototype, reactdomlibReactReconcileTransaction__Transaction, reactdomlibReactReconcileTransaction__Mixin);

reactdomlibReactReconcileTransaction__PooledClass.addPoolingTo(reactdomlibReactReconcileTransaction__ReactReconcileTransaction);

$m['react-dom/lib/ReactReconcileTransaction'].exports = reactdomlibReactReconcileTransaction__ReactReconcileTransaction;
/*≠≠ node_modules/@yr/component/nod...b/ReactReconcileTransaction.js ≠≠*/


/*== node_modules/@yr/component/nod...eact-dom/lib/ReactInjection.js ==*/
$m['react-dom/lib/ReactInjection'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactInjection__DOMProperty = $m['react-dom/lib/DOMProperty'].exports;
var reactdomlibReactInjection__EventPluginHub = $m['react-dom/lib/EventPluginHub'].exports;
var reactdomlibReactInjection__EventPluginUtils = $m['react-dom/lib/EventPluginUtils'].exports;
var reactdomlibReactInjection__ReactComponentEnvironment = $m['react-dom/lib/ReactComponentEnvironment'].exports;
var reactdomlibReactInjection__ReactEmptyComponent = $m['react-dom/lib/ReactEmptyComponent'].exports;
var reactdomlibReactInjection__ReactBrowserEventEmitter = $m['react-dom/lib/ReactBrowserEventEmitter'].exports;
var reactdomlibReactInjection__ReactHostComponent = $m['react-dom/lib/ReactHostComponent'].exports;
var reactdomlibReactInjection__ReactUpdates = $m['react-dom/lib/ReactUpdates'].exports;

var reactdomlibReactInjection__ReactInjection = {
  Component: reactdomlibReactInjection__ReactComponentEnvironment.injection,
  DOMProperty: reactdomlibReactInjection__DOMProperty.injection,
  EmptyComponent: reactdomlibReactInjection__ReactEmptyComponent.injection,
  EventPluginHub: reactdomlibReactInjection__EventPluginHub.injection,
  EventPluginUtils: reactdomlibReactInjection__EventPluginUtils.injection,
  EventEmitter: reactdomlibReactInjection__ReactBrowserEventEmitter.injection,
  HostComponent: reactdomlibReactInjection__ReactHostComponent.injection,
  Updates: reactdomlibReactInjection__ReactUpdates.injection
};

$m['react-dom/lib/ReactInjection'].exports = reactdomlibReactInjection__ReactInjection;
/*≠≠ node_modules/@yr/component/nod...eact-dom/lib/ReactInjection.js ≠≠*/


/*== node_modules/@yr/component/nod...-dom/lib/ReactEventListener.js ==*/
$m['react-dom/lib/ReactEventListener'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactEventListener___assign = $m['object-assign'].exports;

var reactdomlibReactEventListener__EventListener = $m['fbjs/lib/EventListener'].exports;
var reactdomlibReactEventListener__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;
var reactdomlibReactEventListener__PooledClass = $m['react-dom/lib/PooledClass'].exports;
var reactdomlibReactEventListener__ReactDOMComponentTree = $m['react-dom/lib/ReactDOMComponentTree'].exports;
var reactdomlibReactEventListener__ReactUpdates = $m['react-dom/lib/ReactUpdates'].exports;

var reactdomlibReactEventListener__getEventTarget = $m['react-dom/lib/getEventTarget'].exports;
var reactdomlibReactEventListener__getUnboundedScrollPosition = $m['fbjs/lib/getUnboundedScrollPosition'].exports;

/**
 * Find the deepest React component completely containing the root of the
 * passed-in instance (for use when entire React trees are nested within each
 * other). If React trees are not nested, returns null.
 */
function reactdomlibReactEventListener__findParent(inst) {
  // TODO: It may be a good idea to cache this to prevent unnecessary DOM
  // traversal, but caching is difficult to do correctly without using a
  // mutation observer to listen for all DOM changes.
  while (inst._hostParent) {
    inst = inst._hostParent;
  }
  var rootNode = reactdomlibReactEventListener__ReactDOMComponentTree.getNodeFromInstance(inst);
  var container = rootNode.parentNode;
  return reactdomlibReactEventListener__ReactDOMComponentTree.getClosestInstanceFromNode(container);
}

// Used to store ancestor hierarchy in top level callback
function reactdomlibReactEventListener__TopLevelCallbackBookKeeping(topLevelType, nativeEvent) {
  this.topLevelType = topLevelType;
  this.nativeEvent = nativeEvent;
  this.ancestors = [];
}
reactdomlibReactEventListener___assign(reactdomlibReactEventListener__TopLevelCallbackBookKeeping.prototype, {
  destructor: function () {
    this.topLevelType = null;
    this.nativeEvent = null;
    this.ancestors.length = 0;
  }
});
reactdomlibReactEventListener__PooledClass.addPoolingTo(reactdomlibReactEventListener__TopLevelCallbackBookKeeping, reactdomlibReactEventListener__PooledClass.twoArgumentPooler);

function reactdomlibReactEventListener__handleTopLevelImpl(bookKeeping) {
  var nativeEventTarget = reactdomlibReactEventListener__getEventTarget(bookKeeping.nativeEvent);
  var targetInst = reactdomlibReactEventListener__ReactDOMComponentTree.getClosestInstanceFromNode(nativeEventTarget);

  // Loop through the hierarchy, in case there's any nested components.
  // It's important that we build the array of ancestors before calling any
  // event handlers, because event handlers can modify the DOM, leading to
  // inconsistencies with ReactMount's node cache. See #1105.
  var ancestor = targetInst;
  do {
    bookKeeping.ancestors.push(ancestor);
    ancestor = ancestor && reactdomlibReactEventListener__findParent(ancestor);
  } while (ancestor);

  for (var i = 0; i < bookKeeping.ancestors.length; i++) {
    targetInst = bookKeeping.ancestors[i];
    reactdomlibReactEventListener__ReactEventListener._handleTopLevel(bookKeeping.topLevelType, targetInst, bookKeeping.nativeEvent, reactdomlibReactEventListener__getEventTarget(bookKeeping.nativeEvent));
  }
}

function reactdomlibReactEventListener__scrollValueMonitor(cb) {
  var scrollPosition = reactdomlibReactEventListener__getUnboundedScrollPosition(window);
  cb(scrollPosition);
}

var reactdomlibReactEventListener__ReactEventListener = {
  _enabled: true,
  _handleTopLevel: null,

  WINDOW_HANDLE: reactdomlibReactEventListener__ExecutionEnvironment.canUseDOM ? window : null,

  setHandleTopLevel: function (handleTopLevel) {
    reactdomlibReactEventListener__ReactEventListener._handleTopLevel = handleTopLevel;
  },

  setEnabled: function (enabled) {
    reactdomlibReactEventListener__ReactEventListener._enabled = !!enabled;
  },

  isEnabled: function () {
    return reactdomlibReactEventListener__ReactEventListener._enabled;
  },

  /**
   * Traps top-level events by using event bubbling.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {string} handlerBaseName Event name (e.g. "click").
   * @param {object} element Element on which to attach listener.
   * @return {?object} An object with a remove function which will forcefully
   *                  remove the listener.
   * @internal
   */
  trapBubbledEvent: function (topLevelType, handlerBaseName, element) {
    if (!element) {
      return null;
    }
    return reactdomlibReactEventListener__EventListener.listen(element, handlerBaseName, reactdomlibReactEventListener__ReactEventListener.dispatchEvent.bind(null, topLevelType));
  },

  /**
   * Traps a top-level event by using event capturing.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {string} handlerBaseName Event name (e.g. "click").
   * @param {object} element Element on which to attach listener.
   * @return {?object} An object with a remove function which will forcefully
   *                  remove the listener.
   * @internal
   */
  trapCapturedEvent: function (topLevelType, handlerBaseName, element) {
    if (!element) {
      return null;
    }
    return reactdomlibReactEventListener__EventListener.capture(element, handlerBaseName, reactdomlibReactEventListener__ReactEventListener.dispatchEvent.bind(null, topLevelType));
  },

  monitorScrollValue: function (refresh) {
    var callback = reactdomlibReactEventListener__scrollValueMonitor.bind(null, refresh);
    reactdomlibReactEventListener__EventListener.listen(window, 'scroll', callback);
  },

  dispatchEvent: function (topLevelType, nativeEvent) {
    if (!reactdomlibReactEventListener__ReactEventListener._enabled) {
      return;
    }

    var bookKeeping = reactdomlibReactEventListener__TopLevelCallbackBookKeeping.getPooled(topLevelType, nativeEvent);
    try {
      // Event queue being processed in the same cycle allows
      // `preventDefault`.
      reactdomlibReactEventListener__ReactUpdates.batchedUpdates(reactdomlibReactEventListener__handleTopLevelImpl, bookKeeping);
    } finally {
      reactdomlibReactEventListener__TopLevelCallbackBookKeeping.release(bookKeeping);
    }
  }
};

$m['react-dom/lib/ReactEventListener'].exports = reactdomlibReactEventListener__ReactEventListener;
/*≠≠ node_modules/@yr/component/nod...-dom/lib/ReactEventListener.js ≠≠*/


/*== node_modules/@yr/component/nod...eactDefaultBatchingStrategy.js ==*/
$m['react-dom/lib/ReactDefaultBatchingStrategy'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactDefaultBatchingStrategy___assign = $m['object-assign'].exports;

var reactdomlibReactDefaultBatchingStrategy__ReactUpdates = $m['react-dom/lib/ReactUpdates'].exports;
var reactdomlibReactDefaultBatchingStrategy__Transaction = $m['react-dom/lib/Transaction'].exports;

var reactdomlibReactDefaultBatchingStrategy__emptyFunction = $m['fbjs/lib/emptyFunction'].exports;

var reactdomlibReactDefaultBatchingStrategy__RESET_BATCHED_UPDATES = {
  initialize: reactdomlibReactDefaultBatchingStrategy__emptyFunction,
  close: function () {
    reactdomlibReactDefaultBatchingStrategy__ReactDefaultBatchingStrategy.isBatchingUpdates = false;
  }
};

var reactdomlibReactDefaultBatchingStrategy__FLUSH_BATCHED_UPDATES = {
  initialize: reactdomlibReactDefaultBatchingStrategy__emptyFunction,
  close: reactdomlibReactDefaultBatchingStrategy__ReactUpdates.flushBatchedUpdates.bind(reactdomlibReactDefaultBatchingStrategy__ReactUpdates)
};

var reactdomlibReactDefaultBatchingStrategy__TRANSACTION_WRAPPERS = [reactdomlibReactDefaultBatchingStrategy__FLUSH_BATCHED_UPDATES, reactdomlibReactDefaultBatchingStrategy__RESET_BATCHED_UPDATES];

function reactdomlibReactDefaultBatchingStrategy__ReactDefaultBatchingStrategyTransaction() {
  this.reinitializeTransaction();
}

reactdomlibReactDefaultBatchingStrategy___assign(reactdomlibReactDefaultBatchingStrategy__ReactDefaultBatchingStrategyTransaction.prototype, reactdomlibReactDefaultBatchingStrategy__Transaction, {
  getTransactionWrappers: function () {
    return reactdomlibReactDefaultBatchingStrategy__TRANSACTION_WRAPPERS;
  }
});

var reactdomlibReactDefaultBatchingStrategy__transaction = new reactdomlibReactDefaultBatchingStrategy__ReactDefaultBatchingStrategyTransaction();

var reactdomlibReactDefaultBatchingStrategy__ReactDefaultBatchingStrategy = {
  isBatchingUpdates: false,

  /**
   * Call the provided function in a context within which calls to `setState`
   * and friends are batched such that components aren't updated unnecessarily.
   */
  batchedUpdates: function (callback, a, b, c, d, e) {
    var alreadyBatchingUpdates = reactdomlibReactDefaultBatchingStrategy__ReactDefaultBatchingStrategy.isBatchingUpdates;

    reactdomlibReactDefaultBatchingStrategy__ReactDefaultBatchingStrategy.isBatchingUpdates = true;

    // The code is written this way to avoid extra allocations
    if (alreadyBatchingUpdates) {
      return callback(a, b, c, d, e);
    } else {
      return reactdomlibReactDefaultBatchingStrategy__transaction.perform(callback, null, a, b, c, d, e);
    }
  }
};

$m['react-dom/lib/ReactDefaultBatchingStrategy'].exports = reactdomlibReactDefaultBatchingStrategy__ReactDefaultBatchingStrategy;
/*≠≠ node_modules/@yr/component/nod...eactDefaultBatchingStrategy.js ≠≠*/


/*== node_modules/fbjs/lib/getMarkupWrap.js ==*/
$m['fbjs/lib/getMarkupWrap'] = { exports: {} };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/*eslint-disable fb-www/unsafe-html */

var fbjslibgetMarkupWrap__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;

var fbjslibgetMarkupWrap__invariant = $m['fbjs/lib/invariant'].exports;

/**
 * Dummy container used to detect which wraps are necessary.
 */
var fbjslibgetMarkupWrap__dummyNode = fbjslibgetMarkupWrap__ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;

/**
 * Some browsers cannot use `innerHTML` to render certain elements standalone,
 * so we wrap them, render the wrapped nodes, then extract the desired node.
 *
 * In IE8, certain elements cannot render alone, so wrap all elements ('*').
 */

var fbjslibgetMarkupWrap__shouldWrap = {};

var fbjslibgetMarkupWrap__selectWrap = [1, '<select multiple="true">', '</select>'];
var fbjslibgetMarkupWrap__tableWrap = [1, '<table>', '</table>'];
var fbjslibgetMarkupWrap__trWrap = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

var fbjslibgetMarkupWrap__svgWrap = [1, '<svg xmlns="http://www.w3.org/2000/svg">', '</svg>'];

var fbjslibgetMarkupWrap__markupWrap = {
  '*': [1, '?<div>', '</div>'],

  'area': [1, '<map>', '</map>'],
  'col': [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
  'legend': [1, '<fieldset>', '</fieldset>'],
  'param': [1, '<object>', '</object>'],
  'tr': [2, '<table><tbody>', '</tbody></table>'],

  'optgroup': fbjslibgetMarkupWrap__selectWrap,
  'option': fbjslibgetMarkupWrap__selectWrap,

  'caption': fbjslibgetMarkupWrap__tableWrap,
  'colgroup': fbjslibgetMarkupWrap__tableWrap,
  'tbody': fbjslibgetMarkupWrap__tableWrap,
  'tfoot': fbjslibgetMarkupWrap__tableWrap,
  'thead': fbjslibgetMarkupWrap__tableWrap,

  'td': fbjslibgetMarkupWrap__trWrap,
  'th': fbjslibgetMarkupWrap__trWrap
};

// Initialize the SVG elements since we know they'll always need to be wrapped
// consistently. If they are created inside a <div> they will be initialized in
// the wrong namespace (and will not display).
var fbjslibgetMarkupWrap__svgElements = ['circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'text', 'tspan'];
fbjslibgetMarkupWrap__svgElements.forEach(function (nodeName) {
  fbjslibgetMarkupWrap__markupWrap[nodeName] = fbjslibgetMarkupWrap__svgWrap;
  fbjslibgetMarkupWrap__shouldWrap[nodeName] = true;
});

/**
 * Gets the markup wrap configuration for the supplied `nodeName`.
 *
 * NOTE: This lazily detects which wraps are necessary for the current browser.
 *
 * @param {string} nodeName Lowercase `nodeName`.
 * @return {?array} Markup wrap configuration, if applicable.
 */
function fbjslibgetMarkupWrap__getMarkupWrap(nodeName) {
  !!!fbjslibgetMarkupWrap__dummyNode ? 'development' !== 'production' ? fbjslibgetMarkupWrap__invariant(false, 'Markup wrapping node not initialized') : fbjslibgetMarkupWrap__invariant(false) : void 0;
  if (!fbjslibgetMarkupWrap__markupWrap.hasOwnProperty(nodeName)) {
    nodeName = '*';
  }
  if (!fbjslibgetMarkupWrap__shouldWrap.hasOwnProperty(nodeName)) {
    if (nodeName === '*') {
      fbjslibgetMarkupWrap__dummyNode.innerHTML = '<link />';
    } else {
      fbjslibgetMarkupWrap__dummyNode.innerHTML = '<' + nodeName + '></' + nodeName + '>';
    }
    fbjslibgetMarkupWrap__shouldWrap[nodeName] = !fbjslibgetMarkupWrap__dummyNode.firstChild;
  }
  return fbjslibgetMarkupWrap__shouldWrap[nodeName] ? fbjslibgetMarkupWrap__markupWrap[nodeName] : null;
}

$m['fbjs/lib/getMarkupWrap'].exports = fbjslibgetMarkupWrap__getMarkupWrap;
/*≠≠ node_modules/fbjs/lib/getMarkupWrap.js ≠≠*/


/*== node_modules/fbjs/lib/createArrayFromMixed.js ==*/
$m['fbjs/lib/createArrayFromMixed'] = { exports: {} };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var fbjslibcreateArrayFromMixed__invariant = $m['fbjs/lib/invariant'].exports;

/**
 * Convert array-like objects to arrays.
 *
 * This API assumes the caller knows the contents of the data type. For less
 * well defined inputs use createArrayFromMixed.
 *
 * @param {object|function|filelist} obj
 * @return {array}
 */
function fbjslibcreateArrayFromMixed__toArray(obj) {
  var length = obj.length;

  // Some browsers builtin objects can report typeof 'function' (e.g. NodeList
  // in old versions of Safari).
  !(!Array.isArray(obj) && (typeof obj === 'object' || typeof obj === 'function')) ? 'development' !== 'production' ? fbjslibcreateArrayFromMixed__invariant(false, 'toArray: Array-like object expected') : fbjslibcreateArrayFromMixed__invariant(false) : void 0;

  !(typeof length === 'number') ? 'development' !== 'production' ? fbjslibcreateArrayFromMixed__invariant(false, 'toArray: Object needs a length property') : fbjslibcreateArrayFromMixed__invariant(false) : void 0;

  !(length === 0 || length - 1 in obj) ? 'development' !== 'production' ? fbjslibcreateArrayFromMixed__invariant(false, 'toArray: Object should have keys for indices') : fbjslibcreateArrayFromMixed__invariant(false) : void 0;

  !(typeof obj.callee !== 'function') ? 'development' !== 'production' ? fbjslibcreateArrayFromMixed__invariant(false, 'toArray: Object can\'t be `arguments`. Use rest params ' + '(function(...args) {}) or Array.from() instead.') : fbjslibcreateArrayFromMixed__invariant(false) : void 0;

  // Old IE doesn't give collections access to hasOwnProperty. Assume inputs
  // without method will throw during the slice call and skip straight to the
  // fallback.
  if (obj.hasOwnProperty) {
    try {
      return Array.prototype.slice.call(obj);
    } catch (e) {
      // IE < 9 does not support Array#slice on collections objects
    }
  }

  // Fall back to copying key by key. This assumes all keys have a value,
  // so will not preserve sparsely populated inputs.
  var ret = Array(length);
  for (var ii = 0; ii < length; ii++) {
    ret[ii] = obj[ii];
  }
  return ret;
}

/**
 * Perform a heuristic test to determine if an object is "array-like".
 *
 *   A monk asked Joshu, a Zen master, "Has a dog Buddha nature?"
 *   Joshu replied: "Mu."
 *
 * This function determines if its argument has "array nature": it returns
 * true if the argument is an actual array, an `arguments' object, or an
 * HTMLCollection (e.g. node.childNodes or node.getElementsByTagName()).
 *
 * It will return false for other array-like objects like Filelist.
 *
 * @param {*} obj
 * @return {boolean}
 */
function fbjslibcreateArrayFromMixed__hasArrayNature(obj) {
  return (
    // not null/false
    !!obj && (
    // arrays are objects, NodeLists are functions in Safari
    typeof obj == 'object' || typeof obj == 'function') &&
    // quacks like an array
    'length' in obj &&
    // not window
    !('setInterval' in obj) &&
    // no DOM node should be considered an array-like
    // a 'select' element has 'length' and 'item' properties on IE8
    typeof obj.nodeType != 'number' && (
    // a real array
    Array.isArray(obj) ||
    // arguments
    'callee' in obj ||
    // HTMLCollection/NodeList
    'item' in obj)
  );
}

/**
 * Ensure that the argument is an array by wrapping it in an array if it is not.
 * Creates a copy of the argument if it is already an array.
 *
 * This is mostly useful idiomatically:
 *
 *   var createArrayFromMixed = require('createArrayFromMixed');
 *
 *   function takesOneOrMoreThings(things) {
 *     things = createArrayFromMixed(things);
 *     ...
 *   }
 *
 * This allows you to treat `things' as an array, but accept scalars in the API.
 *
 * If you need to convert an array-like object, like `arguments`, into an array
 * use toArray instead.
 *
 * @param {*} obj
 * @return {array}
 */
function fbjslibcreateArrayFromMixed__createArrayFromMixed(obj) {
  if (!fbjslibcreateArrayFromMixed__hasArrayNature(obj)) {
    return [obj];
  } else if (Array.isArray(obj)) {
    return obj.slice();
  } else {
    return fbjslibcreateArrayFromMixed__toArray(obj);
  }
}

$m['fbjs/lib/createArrayFromMixed'].exports = fbjslibcreateArrayFromMixed__createArrayFromMixed;
/*≠≠ node_modules/fbjs/lib/createArrayFromMixed.js ≠≠*/


/*== node_modules/fbjs/lib/createNodesFromMarkup.js ==*/
$m['fbjs/lib/createNodesFromMarkup'] = { exports: {} };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

/*eslint-disable fb-www/unsafe-html*/

var fbjslibcreateNodesFromMarkup__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;

var fbjslibcreateNodesFromMarkup__createArrayFromMixed = $m['fbjs/lib/createArrayFromMixed'].exports;
var fbjslibcreateNodesFromMarkup__getMarkupWrap = $m['fbjs/lib/getMarkupWrap'].exports;
var fbjslibcreateNodesFromMarkup__invariant = $m['fbjs/lib/invariant'].exports;

/**
 * Dummy container used to render all markup.
 */
var fbjslibcreateNodesFromMarkup__dummyNode = fbjslibcreateNodesFromMarkup__ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;

/**
 * Pattern used by `getNodeName`.
 */
var fbjslibcreateNodesFromMarkup__nodeNamePattern = /^\s*<(\w+)/;

/**
 * Extracts the `nodeName` of the first element in a string of markup.
 *
 * @param {string} markup String of markup.
 * @return {?string} Node name of the supplied markup.
 */
function fbjslibcreateNodesFromMarkup__getNodeName(markup) {
  var nodeNameMatch = markup.match(fbjslibcreateNodesFromMarkup__nodeNamePattern);
  return nodeNameMatch && nodeNameMatch[1].toLowerCase();
}

/**
 * Creates an array containing the nodes rendered from the supplied markup. The
 * optionally supplied `handleScript` function will be invoked once for each
 * <script> element that is rendered. If no `handleScript` function is supplied,
 * an exception is thrown if any <script> elements are rendered.
 *
 * @param {string} markup A string of valid HTML markup.
 * @param {?function} handleScript Invoked once for each rendered <script>.
 * @return {array<DOMElement|DOMTextNode>} An array of rendered nodes.
 */
function fbjslibcreateNodesFromMarkup__createNodesFromMarkup(markup, handleScript) {
  var node = fbjslibcreateNodesFromMarkup__dummyNode;
  !!!fbjslibcreateNodesFromMarkup__dummyNode ? 'development' !== 'production' ? fbjslibcreateNodesFromMarkup__invariant(false, 'createNodesFromMarkup dummy not initialized') : fbjslibcreateNodesFromMarkup__invariant(false) : void 0;
  var nodeName = fbjslibcreateNodesFromMarkup__getNodeName(markup);

  var wrap = nodeName && fbjslibcreateNodesFromMarkup__getMarkupWrap(nodeName);
  if (wrap) {
    node.innerHTML = wrap[1] + markup + wrap[2];

    var wrapDepth = wrap[0];
    while (wrapDepth--) {
      node = node.lastChild;
    }
  } else {
    node.innerHTML = markup;
  }

  var scripts = node.getElementsByTagName('script');
  if (scripts.length) {
    !handleScript ? 'development' !== 'production' ? fbjslibcreateNodesFromMarkup__invariant(false, 'createNodesFromMarkup(...): Unexpected <script> element rendered.') : fbjslibcreateNodesFromMarkup__invariant(false) : void 0;
    fbjslibcreateNodesFromMarkup__createArrayFromMixed(scripts).forEach(handleScript);
  }

  var nodes = Array.from(node.childNodes);
  while (node.lastChild) {
    node.removeChild(node.lastChild);
  }
  return nodes;
}

$m['fbjs/lib/createNodesFromMarkup'].exports = fbjslibcreateNodesFromMarkup__createNodesFromMarkup;
/*≠≠ node_modules/fbjs/lib/createNodesFromMarkup.js ≠≠*/


/*== node_modules/@yr/component/node_modules/react-dom/lib/Danger.js ==*/
$m['react-dom/lib/Danger'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibDanger___prodInvariant = $m['react-dom/lib/reactProdInvariant'].exports;

var reactdomlibDanger__DOMLazyTree = $m['react-dom/lib/DOMLazyTree'].exports;
var reactdomlibDanger__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;

var reactdomlibDanger__createNodesFromMarkup = $m['fbjs/lib/createNodesFromMarkup'].exports;
var reactdomlibDanger__emptyFunction = $m['fbjs/lib/emptyFunction'].exports;
var reactdomlibDanger__invariant = $m['fbjs/lib/invariant'].exports;

var reactdomlibDanger__Danger = {
  /**
   * Replaces a node with a string of markup at its current position within its
   * parent. The markup must render into a single root node.
   *
   * @param {DOMElement} oldChild Child node to replace.
   * @param {string} markup Markup to render in place of the child node.
   * @internal
   */
  dangerouslyReplaceNodeWithMarkup: function (oldChild, markup) {
    !reactdomlibDanger__ExecutionEnvironment.canUseDOM ? 'development' !== 'production' ? reactdomlibDanger__invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a worker thread. Make sure `window` and `document` are available globally before requiring React when unit testing or use ReactDOMServer.renderToString() for server rendering.') : reactdomlibDanger___prodInvariant('56') : void 0;
    !markup ? 'development' !== 'production' ? reactdomlibDanger__invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Missing markup.') : reactdomlibDanger___prodInvariant('57') : void 0;
    !(oldChild.nodeName !== 'HTML') ? 'development' !== 'production' ? reactdomlibDanger__invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the <html> node. This is because browser quirks make this unreliable and/or slow. If you want to render to the root you must use server rendering. See ReactDOMServer.renderToString().') : reactdomlibDanger___prodInvariant('58') : void 0;

    if (typeof markup === 'string') {
      var newChild = reactdomlibDanger__createNodesFromMarkup(markup, reactdomlibDanger__emptyFunction)[0];
      oldChild.parentNode.replaceChild(newChild, oldChild);
    } else {
      reactdomlibDanger__DOMLazyTree.replaceChildWithTree(oldChild, markup);
    }
  }
};

$m['react-dom/lib/Danger'].exports = reactdomlibDanger__Danger;
/*≠≠ node_modules/@yr/component/node_modules/react-dom/lib/Danger.js ≠≠*/


/*== node_modules/@yr/component/nod...m/lib/DOMChildrenOperations.js ==*/
$m['react-dom/lib/DOMChildrenOperations'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibDOMChildrenOperations__DOMLazyTree = $m['react-dom/lib/DOMLazyTree'].exports;
var reactdomlibDOMChildrenOperations__Danger = $m['react-dom/lib/Danger'].exports;
var reactdomlibDOMChildrenOperations__ReactDOMComponentTree = $m['react-dom/lib/ReactDOMComponentTree'].exports;
var reactdomlibDOMChildrenOperations__ReactInstrumentation = $m['react-dom/lib/ReactInstrumentation'].exports;

var reactdomlibDOMChildrenOperations__createMicrosoftUnsafeLocalFunction = $m['react-dom/lib/createMicrosoftUnsafeLocalFunction'].exports;
var reactdomlibDOMChildrenOperations__setInnerHTML = $m['react-dom/lib/setInnerHTML'].exports;
var reactdomlibDOMChildrenOperations__setTextContent = $m['react-dom/lib/setTextContent'].exports;

function reactdomlibDOMChildrenOperations__getNodeAfter(parentNode, node) {
  // Special case for text components, which return [open, close] comments
  // from getHostNode.
  if (Array.isArray(node)) {
    node = node[1];
  }
  return node ? node.nextSibling : parentNode.firstChild;
}

/**
 * Inserts `childNode` as a child of `parentNode` at the `index`.
 *
 * @param {DOMElement} parentNode Parent node in which to insert.
 * @param {DOMElement} childNode Child node to insert.
 * @param {number} index Index at which to insert the child.
 * @internal
 */
var reactdomlibDOMChildrenOperations__insertChildAt = reactdomlibDOMChildrenOperations__createMicrosoftUnsafeLocalFunction(function (parentNode, childNode, referenceNode) {
  // We rely exclusively on `insertBefore(node, null)` instead of also using
  // `appendChild(node)`. (Using `undefined` is not allowed by all browsers so
  // we are careful to use `null`.)
  parentNode.insertBefore(childNode, referenceNode);
});

function reactdomlibDOMChildrenOperations__insertLazyTreeChildAt(parentNode, childTree, referenceNode) {
  reactdomlibDOMChildrenOperations__DOMLazyTree.insertTreeBefore(parentNode, childTree, referenceNode);
}

function reactdomlibDOMChildrenOperations__moveChild(parentNode, childNode, referenceNode) {
  if (Array.isArray(childNode)) {
    reactdomlibDOMChildrenOperations__moveDelimitedText(parentNode, childNode[0], childNode[1], referenceNode);
  } else {
    reactdomlibDOMChildrenOperations__insertChildAt(parentNode, childNode, referenceNode);
  }
}

function reactdomlibDOMChildrenOperations__removeChild(parentNode, childNode) {
  if (Array.isArray(childNode)) {
    var closingComment = childNode[1];
    childNode = childNode[0];
    reactdomlibDOMChildrenOperations__removeDelimitedText(parentNode, childNode, closingComment);
    parentNode.removeChild(closingComment);
  }
  parentNode.removeChild(childNode);
}

function reactdomlibDOMChildrenOperations__moveDelimitedText(parentNode, openingComment, closingComment, referenceNode) {
  var node = openingComment;
  while (true) {
    var nextNode = node.nextSibling;
    reactdomlibDOMChildrenOperations__insertChildAt(parentNode, node, referenceNode);
    if (node === closingComment) {
      break;
    }
    node = nextNode;
  }
}

function reactdomlibDOMChildrenOperations__removeDelimitedText(parentNode, startNode, closingComment) {
  while (true) {
    var node = startNode.nextSibling;
    if (node === closingComment) {
      // The closing comment is removed by ReactMultiChild.
      break;
    } else {
      parentNode.removeChild(node);
    }
  }
}

function reactdomlibDOMChildrenOperations__replaceDelimitedText(openingComment, closingComment, stringText) {
  var parentNode = openingComment.parentNode;
  var nodeAfterComment = openingComment.nextSibling;
  if (nodeAfterComment === closingComment) {
    // There are no text nodes between the opening and closing comments; insert
    // a new one if stringText isn't empty.
    if (stringText) {
      reactdomlibDOMChildrenOperations__insertChildAt(parentNode, document.createTextNode(stringText), nodeAfterComment);
    }
  } else {
    if (stringText) {
      // Set the text content of the first node after the opening comment, and
      // remove all following nodes up until the closing comment.
      reactdomlibDOMChildrenOperations__setTextContent(nodeAfterComment, stringText);
      reactdomlibDOMChildrenOperations__removeDelimitedText(parentNode, nodeAfterComment, closingComment);
    } else {
      reactdomlibDOMChildrenOperations__removeDelimitedText(parentNode, openingComment, closingComment);
    }
  }

  if ('development' !== 'production') {
    reactdomlibDOMChildrenOperations__ReactInstrumentation.debugTool.onHostOperation({
      instanceID: reactdomlibDOMChildrenOperations__ReactDOMComponentTree.getInstanceFromNode(openingComment)._debugID,
      type: 'replace text',
      payload: stringText
    });
  }
}

var reactdomlibDOMChildrenOperations__dangerouslyReplaceNodeWithMarkup = reactdomlibDOMChildrenOperations__Danger.dangerouslyReplaceNodeWithMarkup;
if ('development' !== 'production') {
  reactdomlibDOMChildrenOperations__dangerouslyReplaceNodeWithMarkup = function (oldChild, markup, prevInstance) {
    reactdomlibDOMChildrenOperations__Danger.dangerouslyReplaceNodeWithMarkup(oldChild, markup);
    if (prevInstance._debugID !== 0) {
      reactdomlibDOMChildrenOperations__ReactInstrumentation.debugTool.onHostOperation({
        instanceID: prevInstance._debugID,
        type: 'replace with',
        payload: markup.toString()
      });
    } else {
      var nextInstance = reactdomlibDOMChildrenOperations__ReactDOMComponentTree.getInstanceFromNode(markup.node);
      if (nextInstance._debugID !== 0) {
        reactdomlibDOMChildrenOperations__ReactInstrumentation.debugTool.onHostOperation({
          instanceID: nextInstance._debugID,
          type: 'mount',
          payload: markup.toString()
        });
      }
    }
  };
}

/**
 * Operations for updating with DOM children.
 */
var reactdomlibDOMChildrenOperations__DOMChildrenOperations = {
  dangerouslyReplaceNodeWithMarkup: reactdomlibDOMChildrenOperations__dangerouslyReplaceNodeWithMarkup,

  replaceDelimitedText: reactdomlibDOMChildrenOperations__replaceDelimitedText,

  /**
   * Updates a component's children by processing a series of updates. The
   * update configurations are each expected to have a `parentNode` property.
   *
   * @param {array<object>} updates List of update configurations.
   * @internal
   */
  processUpdates: function (parentNode, updates) {
    if ('development' !== 'production') {
      var parentNodeDebugID = reactdomlibDOMChildrenOperations__ReactDOMComponentTree.getInstanceFromNode(parentNode)._debugID;
    }

    for (var k = 0; k < updates.length; k++) {
      var update = updates[k];
      switch (update.type) {
        case 'INSERT_MARKUP':
          reactdomlibDOMChildrenOperations__insertLazyTreeChildAt(parentNode, update.content, reactdomlibDOMChildrenOperations__getNodeAfter(parentNode, update.afterNode));
          if ('development' !== 'production') {
            reactdomlibDOMChildrenOperations__ReactInstrumentation.debugTool.onHostOperation({
              instanceID: parentNodeDebugID,
              type: 'insert child',
              payload: {
                toIndex: update.toIndex,
                content: update.content.toString()
              }
            });
          }
          break;
        case 'MOVE_EXISTING':
          reactdomlibDOMChildrenOperations__moveChild(parentNode, update.fromNode, reactdomlibDOMChildrenOperations__getNodeAfter(parentNode, update.afterNode));
          if ('development' !== 'production') {
            reactdomlibDOMChildrenOperations__ReactInstrumentation.debugTool.onHostOperation({
              instanceID: parentNodeDebugID,
              type: 'move child',
              payload: { fromIndex: update.fromIndex, toIndex: update.toIndex }
            });
          }
          break;
        case 'SET_MARKUP':
          reactdomlibDOMChildrenOperations__setInnerHTML(parentNode, update.content);
          if ('development' !== 'production') {
            reactdomlibDOMChildrenOperations__ReactInstrumentation.debugTool.onHostOperation({
              instanceID: parentNodeDebugID,
              type: 'replace children',
              payload: update.content.toString()
            });
          }
          break;
        case 'TEXT_CONTENT':
          reactdomlibDOMChildrenOperations__setTextContent(parentNode, update.content);
          if ('development' !== 'production') {
            reactdomlibDOMChildrenOperations__ReactInstrumentation.debugTool.onHostOperation({
              instanceID: parentNodeDebugID,
              type: 'replace text',
              payload: update.content.toString()
            });
          }
          break;
        case 'REMOVE_NODE':
          reactdomlibDOMChildrenOperations__removeChild(parentNode, update.fromNode);
          if ('development' !== 'production') {
            reactdomlibDOMChildrenOperations__ReactInstrumentation.debugTool.onHostOperation({
              instanceID: parentNodeDebugID,
              type: 'remove child',
              payload: { fromIndex: update.fromIndex }
            });
          }
          break;
      }
    }
  }
};

$m['react-dom/lib/DOMChildrenOperations'].exports = reactdomlibDOMChildrenOperations__DOMChildrenOperations;
/*≠≠ node_modules/@yr/component/nod...m/lib/DOMChildrenOperations.js ≠≠*/


/*== node_modules/@yr/component/nod...m/lib/ReactDOMTextComponent.js ==*/
$m['react-dom/lib/ReactDOMTextComponent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactDOMTextComponent___prodInvariant = $m['react-dom/lib/reactProdInvariant'].exports,
    reactdomlibReactDOMTextComponent___assign = $m['object-assign'].exports;

var reactdomlibReactDOMTextComponent__DOMChildrenOperations = $m['react-dom/lib/DOMChildrenOperations'].exports;
var reactdomlibReactDOMTextComponent__DOMLazyTree = $m['react-dom/lib/DOMLazyTree'].exports;
var reactdomlibReactDOMTextComponent__ReactDOMComponentTree = $m['react-dom/lib/ReactDOMComponentTree'].exports;

var reactdomlibReactDOMTextComponent__escapeTextContentForBrowser = $m['react-dom/lib/escapeTextContentForBrowser'].exports;
var reactdomlibReactDOMTextComponent__invariant = $m['fbjs/lib/invariant'].exports;
var reactdomlibReactDOMTextComponent__validateDOMNesting = $m['react-dom/lib/validateDOMNesting'].exports;

/**
 * Text nodes violate a couple assumptions that React makes about components:
 *
 *  - When mounting text into the DOM, adjacent text nodes are merged.
 *  - Text nodes cannot be assigned a React root ID.
 *
 * This component is used to wrap strings between comment nodes so that they
 * can undergo the same reconciliation that is applied to elements.
 *
 * TODO: Investigate representing React components in the DOM with text nodes.
 *
 * @class ReactDOMTextComponent
 * @extends ReactComponent
 * @internal
 */
var reactdomlibReactDOMTextComponent__ReactDOMTextComponent = function (text) {
  // TODO: This is really a ReactText (ReactNode), not a ReactElement
  this._currentElement = text;
  this._stringText = '' + text;
  // ReactDOMComponentTree uses these:
  this._hostNode = null;
  this._hostParent = null;

  // Properties
  this._domID = 0;
  this._mountIndex = 0;
  this._closingComment = null;
  this._commentNodes = null;
};

reactdomlibReactDOMTextComponent___assign(reactdomlibReactDOMTextComponent__ReactDOMTextComponent.prototype, {
  /**
   * Creates the markup for this text node. This node is not intended to have
   * any features besides containing text content.
   *
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @return {string} Markup for this text node.
   * @internal
   */
  mountComponent: function (transaction, hostParent, hostContainerInfo, context) {
    if ('development' !== 'production') {
      var parentInfo;
      if (hostParent != null) {
        parentInfo = hostParent._ancestorInfo;
      } else if (hostContainerInfo != null) {
        parentInfo = hostContainerInfo._ancestorInfo;
      }
      if (parentInfo) {
        // parentInfo should always be present except for the top-level
        // component when server rendering
        reactdomlibReactDOMTextComponent__validateDOMNesting(null, this._stringText, this, parentInfo);
      }
    }

    var domID = hostContainerInfo._idCounter++;
    var openingValue = ' react-text: ' + domID + ' ';
    var closingValue = ' /react-text ';
    this._domID = domID;
    this._hostParent = hostParent;
    if (transaction.useCreateElement) {
      var ownerDocument = hostContainerInfo._ownerDocument;
      var openingComment = ownerDocument.createComment(openingValue);
      var closingComment = ownerDocument.createComment(closingValue);
      var lazyTree = reactdomlibReactDOMTextComponent__DOMLazyTree(ownerDocument.createDocumentFragment());
      reactdomlibReactDOMTextComponent__DOMLazyTree.queueChild(lazyTree, reactdomlibReactDOMTextComponent__DOMLazyTree(openingComment));
      if (this._stringText) {
        reactdomlibReactDOMTextComponent__DOMLazyTree.queueChild(lazyTree, reactdomlibReactDOMTextComponent__DOMLazyTree(ownerDocument.createTextNode(this._stringText)));
      }
      reactdomlibReactDOMTextComponent__DOMLazyTree.queueChild(lazyTree, reactdomlibReactDOMTextComponent__DOMLazyTree(closingComment));
      reactdomlibReactDOMTextComponent__ReactDOMComponentTree.precacheNode(this, openingComment);
      this._closingComment = closingComment;
      return lazyTree;
    } else {
      var escapedText = reactdomlibReactDOMTextComponent__escapeTextContentForBrowser(this._stringText);

      if (transaction.renderToStaticMarkup) {
        // Normally we'd wrap this between comment nodes for the reasons stated
        // above, but since this is a situation where React won't take over
        // (static pages), we can simply return the text as it is.
        return escapedText;
      }

      return '<!--' + openingValue + '-->' + escapedText + '<!--' + closingValue + '-->';
    }
  },

  /**
   * Updates this component by updating the text content.
   *
   * @param {ReactText} nextText The next text content
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */
  receiveComponent: function (nextText, transaction) {
    if (nextText !== this._currentElement) {
      this._currentElement = nextText;
      var nextStringText = '' + nextText;
      if (nextStringText !== this._stringText) {
        // TODO: Save this as pending props and use performUpdateIfNecessary
        // and/or updateComponent to do the actual update for consistency with
        // other component types?
        this._stringText = nextStringText;
        var commentNodes = this.getHostNode();
        reactdomlibReactDOMTextComponent__DOMChildrenOperations.replaceDelimitedText(commentNodes[0], commentNodes[1], nextStringText);
      }
    }
  },

  getHostNode: function () {
    var hostNode = this._commentNodes;
    if (hostNode) {
      return hostNode;
    }
    if (!this._closingComment) {
      var openingComment = reactdomlibReactDOMTextComponent__ReactDOMComponentTree.getNodeFromInstance(this);
      var node = openingComment.nextSibling;
      while (true) {
        !(node != null) ? 'development' !== 'production' ? reactdomlibReactDOMTextComponent__invariant(false, 'Missing closing comment for text component %s', this._domID) : reactdomlibReactDOMTextComponent___prodInvariant('67', this._domID) : void 0;
        if (node.nodeType === 8 && node.nodeValue === ' /react-text ') {
          this._closingComment = node;
          break;
        }
        node = node.nextSibling;
      }
    }
    hostNode = [this._hostNode, this._closingComment];
    this._commentNodes = hostNode;
    return hostNode;
  },

  unmountComponent: function () {
    this._closingComment = null;
    this._commentNodes = null;
    reactdomlibReactDOMTextComponent__ReactDOMComponentTree.uncacheNode(this);
  }
});

$m['react-dom/lib/ReactDOMTextComponent'].exports = reactdomlibReactDOMTextComponent__ReactDOMTextComponent;
/*≠≠ node_modules/@yr/component/nod...m/lib/ReactDOMTextComponent.js ≠≠*/


/*== node_modules/@yr/component/nod...m/lib/ReactDOMTreeTraversal.js ==*/
$m['react-dom/lib/ReactDOMTreeTraversal'] = { exports: {} };
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactDOMTreeTraversal___prodInvariant = $m['react-dom/lib/reactProdInvariant'].exports;

var reactdomlibReactDOMTreeTraversal__invariant = $m['fbjs/lib/invariant'].exports;

/**
 * Return the lowest common ancestor of A and B, or null if they are in
 * different trees.
 */
function reactdomlibReactDOMTreeTraversal__getLowestCommonAncestor(instA, instB) {
  !('_hostNode' in instA) ? 'development' !== 'production' ? reactdomlibReactDOMTreeTraversal__invariant(false, 'getNodeFromInstance: Invalid argument.') : reactdomlibReactDOMTreeTraversal___prodInvariant('33') : void 0;
  !('_hostNode' in instB) ? 'development' !== 'production' ? reactdomlibReactDOMTreeTraversal__invariant(false, 'getNodeFromInstance: Invalid argument.') : reactdomlibReactDOMTreeTraversal___prodInvariant('33') : void 0;

  var depthA = 0;
  for (var tempA = instA; tempA; tempA = tempA._hostParent) {
    depthA++;
  }
  var depthB = 0;
  for (var tempB = instB; tempB; tempB = tempB._hostParent) {
    depthB++;
  }

  // If A is deeper, crawl up.
  while (depthA - depthB > 0) {
    instA = instA._hostParent;
    depthA--;
  }

  // If B is deeper, crawl up.
  while (depthB - depthA > 0) {
    instB = instB._hostParent;
    depthB--;
  }

  // Walk in lockstep until we find a match.
  var depth = depthA;
  while (depth--) {
    if (instA === instB) {
      return instA;
    }
    instA = instA._hostParent;
    instB = instB._hostParent;
  }
  return null;
}

/**
 * Return if A is an ancestor of B.
 */
function reactdomlibReactDOMTreeTraversal__isAncestor(instA, instB) {
  !('_hostNode' in instA) ? 'development' !== 'production' ? reactdomlibReactDOMTreeTraversal__invariant(false, 'isAncestor: Invalid argument.') : reactdomlibReactDOMTreeTraversal___prodInvariant('35') : void 0;
  !('_hostNode' in instB) ? 'development' !== 'production' ? reactdomlibReactDOMTreeTraversal__invariant(false, 'isAncestor: Invalid argument.') : reactdomlibReactDOMTreeTraversal___prodInvariant('35') : void 0;

  while (instB) {
    if (instB === instA) {
      return true;
    }
    instB = instB._hostParent;
  }
  return false;
}

/**
 * Return the parent instance of the passed-in instance.
 */
function reactdomlibReactDOMTreeTraversal__getParentInstance(inst) {
  !('_hostNode' in inst) ? 'development' !== 'production' ? reactdomlibReactDOMTreeTraversal__invariant(false, 'getParentInstance: Invalid argument.') : reactdomlibReactDOMTreeTraversal___prodInvariant('36') : void 0;

  return inst._hostParent;
}

/**
 * Simulates the traversal of a two-phase, capture/bubble event dispatch.
 */
function reactdomlibReactDOMTreeTraversal__traverseTwoPhase(inst, fn, arg) {
  var path = [];
  while (inst) {
    path.push(inst);
    inst = inst._hostParent;
  }
  var i;
  for (i = path.length; i-- > 0;) {
    fn(path[i], 'captured', arg);
  }
  for (i = 0; i < path.length; i++) {
    fn(path[i], 'bubbled', arg);
  }
}

/**
 * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
 * should would receive a `mouseEnter` or `mouseLeave` event.
 *
 * Does not invoke the callback on the nearest common ancestor because nothing
 * "entered" or "left" that element.
 */
function reactdomlibReactDOMTreeTraversal__traverseEnterLeave(from, to, fn, argFrom, argTo) {
  var common = from && to ? reactdomlibReactDOMTreeTraversal__getLowestCommonAncestor(from, to) : null;
  var pathFrom = [];
  while (from && from !== common) {
    pathFrom.push(from);
    from = from._hostParent;
  }
  var pathTo = [];
  while (to && to !== common) {
    pathTo.push(to);
    to = to._hostParent;
  }
  var i;
  for (i = 0; i < pathFrom.length; i++) {
    fn(pathFrom[i], 'bubbled', argFrom);
  }
  for (i = pathTo.length; i-- > 0;) {
    fn(pathTo[i], 'captured', argTo);
  }
}

$m['react-dom/lib/ReactDOMTreeTraversal'].exports = {
  isAncestor: reactdomlibReactDOMTreeTraversal__isAncestor,
  getLowestCommonAncestor: reactdomlibReactDOMTreeTraversal__getLowestCommonAncestor,
  getParentInstance: reactdomlibReactDOMTreeTraversal__getParentInstance,
  traverseTwoPhase: reactdomlibReactDOMTreeTraversal__traverseTwoPhase,
  traverseEnterLeave: reactdomlibReactDOMTreeTraversal__traverseEnterLeave
};
/*≠≠ node_modules/@yr/component/nod...m/lib/ReactDOMTreeTraversal.js ≠≠*/


/*== node_modules/@yr/component/nod.../lib/ReactDOMEmptyComponent.js ==*/
$m['react-dom/lib/ReactDOMEmptyComponent'] = { exports: {} };
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactDOMEmptyComponent___assign = $m['object-assign'].exports;

var reactdomlibReactDOMEmptyComponent__DOMLazyTree = $m['react-dom/lib/DOMLazyTree'].exports;
var reactdomlibReactDOMEmptyComponent__ReactDOMComponentTree = $m['react-dom/lib/ReactDOMComponentTree'].exports;

var reactdomlibReactDOMEmptyComponent__ReactDOMEmptyComponent = function (instantiate) {
  // ReactCompositeComponent uses this:
  this._currentElement = null;
  // ReactDOMComponentTree uses these:
  this._hostNode = null;
  this._hostParent = null;
  this._hostContainerInfo = null;
  this._domID = 0;
};
reactdomlibReactDOMEmptyComponent___assign(reactdomlibReactDOMEmptyComponent__ReactDOMEmptyComponent.prototype, {
  mountComponent: function (transaction, hostParent, hostContainerInfo, context) {
    var domID = hostContainerInfo._idCounter++;
    this._domID = domID;
    this._hostParent = hostParent;
    this._hostContainerInfo = hostContainerInfo;

    var nodeValue = ' react-empty: ' + this._domID + ' ';
    if (transaction.useCreateElement) {
      var ownerDocument = hostContainerInfo._ownerDocument;
      var node = ownerDocument.createComment(nodeValue);
      reactdomlibReactDOMEmptyComponent__ReactDOMComponentTree.precacheNode(this, node);
      return reactdomlibReactDOMEmptyComponent__DOMLazyTree(node);
    } else {
      if (transaction.renderToStaticMarkup) {
        // Normally we'd insert a comment node, but since this is a situation
        // where React won't take over (static pages), we can simply return
        // nothing.
        return '';
      }
      return '<!--' + nodeValue + '-->';
    }
  },
  receiveComponent: function () {},
  getHostNode: function () {
    return reactdomlibReactDOMEmptyComponent__ReactDOMComponentTree.getNodeFromInstance(this);
  },
  unmountComponent: function () {
    reactdomlibReactDOMEmptyComponent__ReactDOMComponentTree.uncacheNode(this);
  }
});

$m['react-dom/lib/ReactDOMEmptyComponent'].exports = reactdomlibReactDOMEmptyComponent__ReactDOMEmptyComponent;
/*≠≠ node_modules/@yr/component/nod.../lib/ReactDOMEmptyComponent.js ≠≠*/


/*== node_modules/@yr/component/nod...-dom/lib/inputValueTracking.js ==*/
$m['react-dom/lib/inputValueTracking'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibinputValueTracking__ReactDOMComponentTree = $m['react-dom/lib/ReactDOMComponentTree'].exports;

function reactdomlibinputValueTracking__isCheckable(elem) {
  var type = elem.type;
  var nodeName = elem.nodeName;
  return nodeName && nodeName.toLowerCase() === 'input' && (type === 'checkbox' || type === 'radio');
}

function reactdomlibinputValueTracking__getTracker(inst) {
  return inst._wrapperState.valueTracker;
}

function reactdomlibinputValueTracking__attachTracker(inst, tracker) {
  inst._wrapperState.valueTracker = tracker;
}

function reactdomlibinputValueTracking__detachTracker(inst) {
  delete inst._wrapperState.valueTracker;
}

function reactdomlibinputValueTracking__getValueFromNode(node) {
  var value;
  if (node) {
    value = reactdomlibinputValueTracking__isCheckable(node) ? '' + node.checked : node.value;
  }
  return value;
}

var reactdomlibinputValueTracking__inputValueTracking = {
  // exposed for testing
  _getTrackerFromNode: function (node) {
    return reactdomlibinputValueTracking__getTracker(reactdomlibinputValueTracking__ReactDOMComponentTree.getInstanceFromNode(node));
  },

  track: function (inst) {
    if (reactdomlibinputValueTracking__getTracker(inst)) {
      return;
    }

    var node = reactdomlibinputValueTracking__ReactDOMComponentTree.getNodeFromInstance(inst);
    var valueField = reactdomlibinputValueTracking__isCheckable(node) ? 'checked' : 'value';
    var descriptor = Object.getOwnPropertyDescriptor(node.constructor.prototype, valueField);

    var currentValue = '' + node[valueField];

    // if someone has already defined a value or Safari, then bail
    // and don't track value will cause over reporting of changes,
    // but it's better then a hard failure
    // (needed for certain tests that spyOn input values and Safari)
    if (node.hasOwnProperty(valueField) || typeof descriptor.get !== 'function' || typeof descriptor.set !== 'function') {
      return;
    }

    Object.defineProperty(node, valueField, {
      enumerable: descriptor.enumerable,
      configurable: true,
      get: function () {
        return descriptor.get.call(this);
      },
      set: function (value) {
        currentValue = '' + value;
        descriptor.set.call(this, value);
      }
    });

    reactdomlibinputValueTracking__attachTracker(inst, {
      getValue: function () {
        return currentValue;
      },
      setValue: function (value) {
        currentValue = '' + value;
      },
      stopTracking: function () {
        reactdomlibinputValueTracking__detachTracker(inst);
        delete node[valueField];
      }
    });
  },

  updateValueIfChanged: function (inst) {
    if (!inst) {
      return false;
    }
    var tracker = reactdomlibinputValueTracking__getTracker(inst);

    if (!tracker) {
      reactdomlibinputValueTracking__inputValueTracking.track(inst);
      return true;
    }

    var lastValue = tracker.getValue();
    var nextValue = reactdomlibinputValueTracking__getValueFromNode(reactdomlibinputValueTracking__ReactDOMComponentTree.getNodeFromInstance(inst));

    if (nextValue !== lastValue) {
      tracker.setValue(nextValue);
      return true;
    }

    return false;
  },
  stopTracking: function (inst) {
    var tracker = reactdomlibinputValueTracking__getTracker(inst);
    if (tracker) {
      tracker.stopTracking();
    }
  }
};

$m['react-dom/lib/inputValueTracking'].exports = reactdomlibinputValueTracking__inputValueTracking;
/*≠≠ node_modules/@yr/component/nod...-dom/lib/inputValueTracking.js ≠≠*/


/*== node_modules/@yr/component/nod.../lib/ReactServerUpdateQueue.js ==*/
$m['react-dom/lib/ReactServerUpdateQueue'] = { exports: {} };
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function reactdomlibReactServerUpdateQueue___classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var reactdomlibReactServerUpdateQueue__ReactUpdateQueue = $m['react-dom/lib/ReactUpdateQueue'].exports;

var reactdomlibReactServerUpdateQueue__warning = $m['fbjs/lib/warning'].exports;

function reactdomlibReactServerUpdateQueue__warnNoop(publicInstance, callerName) {
  if ('development' !== 'production') {
    var constructor = publicInstance.constructor;
    'development' !== 'production' ? reactdomlibReactServerUpdateQueue__warning(false, '%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
  }
}

/**
 * This is the update queue used for server rendering.
 * It delegates to ReactUpdateQueue while server rendering is in progress and
 * switches to ReactNoopUpdateQueue after the transaction has completed.
 * @class ReactServerUpdateQueue
 * @param {Transaction} transaction
 */

var reactdomlibReactServerUpdateQueue__ReactServerUpdateQueue = function () {
  function ReactServerUpdateQueue(transaction) {
    reactdomlibReactServerUpdateQueue___classCallCheck(this, ReactServerUpdateQueue);

    this.transaction = transaction;
  }

  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */

  ReactServerUpdateQueue.prototype.isMounted = function isMounted(publicInstance) {
    return false;
  };

  /**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */

  ReactServerUpdateQueue.prototype.enqueueCallback = function enqueueCallback(publicInstance, callback, callerName) {
    if (this.transaction.isInTransaction()) {
      reactdomlibReactServerUpdateQueue__ReactUpdateQueue.enqueueCallback(publicInstance, callback, callerName);
    }
  };

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */

  ReactServerUpdateQueue.prototype.enqueueForceUpdate = function enqueueForceUpdate(publicInstance) {
    if (this.transaction.isInTransaction()) {
      reactdomlibReactServerUpdateQueue__ReactUpdateQueue.enqueueForceUpdate(publicInstance);
    } else {
      reactdomlibReactServerUpdateQueue__warnNoop(publicInstance, 'forceUpdate');
    }
  };

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object|function} completeState Next state.
   * @internal
   */

  ReactServerUpdateQueue.prototype.enqueueReplaceState = function enqueueReplaceState(publicInstance, completeState) {
    if (this.transaction.isInTransaction()) {
      reactdomlibReactServerUpdateQueue__ReactUpdateQueue.enqueueReplaceState(publicInstance, completeState);
    } else {
      reactdomlibReactServerUpdateQueue__warnNoop(publicInstance, 'replaceState');
    }
  };

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object|function} partialState Next partial state to be merged with state.
   * @internal
   */

  ReactServerUpdateQueue.prototype.enqueueSetState = function enqueueSetState(publicInstance, partialState) {
    if (this.transaction.isInTransaction()) {
      reactdomlibReactServerUpdateQueue__ReactUpdateQueue.enqueueSetState(publicInstance, partialState);
    } else {
      reactdomlibReactServerUpdateQueue__warnNoop(publicInstance, 'setState');
    }
  };

  return ReactServerUpdateQueue;
}();

$m['react-dom/lib/ReactServerUpdateQueue'].exports = reactdomlibReactServerUpdateQueue__ReactServerUpdateQueue;
/*≠≠ node_modules/@yr/component/nod.../lib/ReactServerUpdateQueue.js ≠≠*/


/*== node_modules/@yr/component/nod...tServerRenderingTransaction.js ==*/
$m['react-dom/lib/ReactServerRenderingTransaction'] = { exports: {} };
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactServerRenderingTransaction___assign = $m['object-assign'].exports;

var reactdomlibReactServerRenderingTransaction__PooledClass = $m['react-dom/lib/PooledClass'].exports;
var reactdomlibReactServerRenderingTransaction__Transaction = $m['react-dom/lib/Transaction'].exports;
var reactdomlibReactServerRenderingTransaction__ReactInstrumentation = $m['react-dom/lib/ReactInstrumentation'].exports;
var reactdomlibReactServerRenderingTransaction__ReactServerUpdateQueue = $m['react-dom/lib/ReactServerUpdateQueue'].exports;

/**
 * Executed within the scope of the `Transaction` instance. Consider these as
 * being member methods, but with an implied ordering while being isolated from
 * each other.
 */
var reactdomlibReactServerRenderingTransaction__TRANSACTION_WRAPPERS = [];

if ('development' !== 'production') {
  reactdomlibReactServerRenderingTransaction__TRANSACTION_WRAPPERS.push({
    initialize: reactdomlibReactServerRenderingTransaction__ReactInstrumentation.debugTool.onBeginFlush,
    close: reactdomlibReactServerRenderingTransaction__ReactInstrumentation.debugTool.onEndFlush
  });
}

var reactdomlibReactServerRenderingTransaction__noopCallbackQueue = {
  enqueue: function () {}
};

/**
 * @class ReactServerRenderingTransaction
 * @param {boolean} renderToStaticMarkup
 */
function reactdomlibReactServerRenderingTransaction__ReactServerRenderingTransaction(renderToStaticMarkup) {
  this.reinitializeTransaction();
  this.renderToStaticMarkup = renderToStaticMarkup;
  this.useCreateElement = false;
  this.updateQueue = new reactdomlibReactServerRenderingTransaction__ReactServerUpdateQueue(this);
}

var reactdomlibReactServerRenderingTransaction__Mixin = {
  /**
   * @see Transaction
   * @abstract
   * @final
   * @return {array} Empty list of operation wrap procedures.
   */
  getTransactionWrappers: function () {
    return reactdomlibReactServerRenderingTransaction__TRANSACTION_WRAPPERS;
  },

  /**
   * @return {object} The queue to collect `onDOMReady` callbacks with.
   */
  getReactMountReady: function () {
    return reactdomlibReactServerRenderingTransaction__noopCallbackQueue;
  },

  /**
   * @return {object} The queue to collect React async events.
   */
  getUpdateQueue: function () {
    return this.updateQueue;
  },

  /**
   * `PooledClass` looks for this, and will invoke this before allowing this
   * instance to be reused.
   */
  destructor: function () {},

  checkpoint: function () {},

  rollback: function () {}
};

reactdomlibReactServerRenderingTransaction___assign(reactdomlibReactServerRenderingTransaction__ReactServerRenderingTransaction.prototype, reactdomlibReactServerRenderingTransaction__Transaction, reactdomlibReactServerRenderingTransaction__Mixin);

reactdomlibReactServerRenderingTransaction__PooledClass.addPoolingTo(reactdomlibReactServerRenderingTransaction__ReactServerRenderingTransaction);

$m['react-dom/lib/ReactServerRenderingTransaction'].exports = reactdomlibReactServerRenderingTransaction__ReactServerRenderingTransaction;
/*≠≠ node_modules/@yr/component/nod...tServerRenderingTransaction.js ≠≠*/


/*== node_modules/@yr/component/nod...dom/lib/traverseAllChildren.js ==*/
$m['react-dom/lib/traverseAllChildren'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibtraverseAllChildren___prodInvariant = $m['react-dom/lib/reactProdInvariant'].exports;

var reactdomlibtraverseAllChildren__ReactCurrentOwner = $m['react/lib/ReactCurrentOwner'].exports;
var reactdomlibtraverseAllChildren__REACT_ELEMENT_TYPE = $m['react-dom/lib/ReactElementSymbol'].exports;

var reactdomlibtraverseAllChildren__getIteratorFn = $m['react-dom/lib/getIteratorFn'].exports;
var reactdomlibtraverseAllChildren__invariant = $m['fbjs/lib/invariant'].exports;
var reactdomlibtraverseAllChildren__KeyEscapeUtils = $m['react-dom/lib/KeyEscapeUtils'].exports;
var reactdomlibtraverseAllChildren__warning = $m['fbjs/lib/warning'].exports;

var reactdomlibtraverseAllChildren__SEPARATOR = '.';
var reactdomlibtraverseAllChildren__SUBSEPARATOR = ':';

/**
 * This is inlined from ReactElement since this file is shared between
 * isomorphic and renderers. We could extract this to a
 *
 */

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var reactdomlibtraverseAllChildren__didWarnAboutMaps = false;

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function reactdomlibtraverseAllChildren__getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (component && typeof component === 'object' && component.key != null) {
    // Explicit key
    return reactdomlibtraverseAllChildren__KeyEscapeUtils.escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function reactdomlibtraverseAllChildren__traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  if (children === null || type === 'string' || type === 'number' ||
  // The following is inlined from ReactElement. This means we can optimize
  // some checks. React Fiber also inlines this logic for similar purposes.
  type === 'object' && children.$$typeof === reactdomlibtraverseAllChildren__REACT_ELEMENT_TYPE) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? reactdomlibtraverseAllChildren__SEPARATOR + reactdomlibtraverseAllChildren__getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? reactdomlibtraverseAllChildren__SEPARATOR : nameSoFar + reactdomlibtraverseAllChildren__SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + reactdomlibtraverseAllChildren__getComponentKey(child, i);
      subtreeCount += reactdomlibtraverseAllChildren__traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = reactdomlibtraverseAllChildren__getIteratorFn(children);
    if (iteratorFn) {
      var iterator = iteratorFn.call(children);
      var step;
      if (iteratorFn !== children.entries) {
        var ii = 0;
        while (!(step = iterator.next()).done) {
          child = step.value;
          nextName = nextNamePrefix + reactdomlibtraverseAllChildren__getComponentKey(child, ii++);
          subtreeCount += reactdomlibtraverseAllChildren__traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        if ('development' !== 'production') {
          var mapsAsChildrenAddendum = '';
          if (reactdomlibtraverseAllChildren__ReactCurrentOwner.current) {
            var mapsAsChildrenOwnerName = reactdomlibtraverseAllChildren__ReactCurrentOwner.current.getName();
            if (mapsAsChildrenOwnerName) {
              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
            }
          }
          'development' !== 'production' ? reactdomlibtraverseAllChildren__warning(reactdomlibtraverseAllChildren__didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
          reactdomlibtraverseAllChildren__didWarnAboutMaps = true;
        }
        // Iterator will provide entry [k,v] tuples rather than values.
        while (!(step = iterator.next()).done) {
          var entry = step.value;
          if (entry) {
            child = entry[1];
            nextName = nextNamePrefix + reactdomlibtraverseAllChildren__KeyEscapeUtils.escape(entry[0]) + reactdomlibtraverseAllChildren__SUBSEPARATOR + reactdomlibtraverseAllChildren__getComponentKey(child, 0);
            subtreeCount += reactdomlibtraverseAllChildren__traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        }
      }
    } else if (type === 'object') {
      var addendum = '';
      if ('development' !== 'production') {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
        if (children._isReactElement) {
          addendum = " It looks like you're using an element created by a different " + 'version of React. Make sure to use only one copy of React.';
        }
        if (reactdomlibtraverseAllChildren__ReactCurrentOwner.current) {
          var name = reactdomlibtraverseAllChildren__ReactCurrentOwner.current.getName();
          if (name) {
            addendum += ' Check the render method of `' + name + '`.';
          }
        }
      }
      var childrenString = String(children);
      !false ? 'development' !== 'production' ? reactdomlibtraverseAllChildren__invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : reactdomlibtraverseAllChildren___prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function reactdomlibtraverseAllChildren__traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return reactdomlibtraverseAllChildren__traverseAllChildrenImpl(children, '', callback, traverseContext);
}

$m['react-dom/lib/traverseAllChildren'].exports = reactdomlibtraverseAllChildren__traverseAllChildren;
/*≠≠ node_modules/@yr/component/nod...dom/lib/traverseAllChildren.js ≠≠*/


/*== node_modules/@yr/component/nod...act-dom/lib/flattenChildren.js ==*/
$m['react-dom/lib/flattenChildren'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var reactdomlibflattenChildren__KeyEscapeUtils = $m['react-dom/lib/KeyEscapeUtils'].exports;
var reactdomlibflattenChildren__traverseAllChildren = $m['react-dom/lib/traverseAllChildren'].exports;
var reactdomlibflattenChildren__warning = $m['fbjs/lib/warning'].exports;

var reactdomlibflattenChildren__ReactComponentTreeHook;

if (typeof process !== 'undefined' && process.env && 'development' === 'test') {
  // Temporary hack.
  // Inline requires don't work well with Jest:
  // https://github.com/facebook/react/issues/7240
  // Remove the inline requires when we don't need them anymore:
  // https://github.com/facebook/react/pull/7178
  reactdomlibflattenChildren__ReactComponentTreeHook = $m['react/lib/ReactComponentTreeHook'].exports;
}

/**
 * @param {function} traverseContext Context passed through traversal.
 * @param {?ReactComponent} child React child component.
 * @param {!string} name String name of key path to child.
 * @param {number=} selfDebugID Optional debugID of the current internal instance.
 */
function reactdomlibflattenChildren__flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID) {
  // We found a component instance.
  if (traverseContext && typeof traverseContext === 'object') {
    var result = traverseContext;
    var keyUnique = result[name] === undefined;
    if ('development' !== 'production') {
      if (!reactdomlibflattenChildren__ReactComponentTreeHook) {
        reactdomlibflattenChildren__ReactComponentTreeHook = $m['react/lib/ReactComponentTreeHook'].exports;
      }
      if (!keyUnique) {
        'development' !== 'production' ? reactdomlibflattenChildren__warning(false, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.%s', reactdomlibflattenChildren__KeyEscapeUtils.unescape(name), reactdomlibflattenChildren__ReactComponentTreeHook.getStackAddendumByID(selfDebugID)) : void 0;
      }
    }
    if (keyUnique && child != null) {
      result[name] = child;
    }
  }
}

/**
 * Flattens children that are typically specified as `props.children`. Any null
 * children will not be included in the resulting object.
 * @return {!object} flattened children keyed by name.
 */
function reactdomlibflattenChildren__flattenChildren(children, selfDebugID) {
  if (children == null) {
    return children;
  }
  var result = {};

  if ('development' !== 'production') {
    reactdomlibflattenChildren__traverseAllChildren(children, function (traverseContext, child, name) {
      return reactdomlibflattenChildren__flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID);
    }, result);
  } else {
    reactdomlibflattenChildren__traverseAllChildren(children, reactdomlibflattenChildren__flattenSingleChildIntoContext, result);
  }
  return result;
}

$m['react-dom/lib/flattenChildren'].exports = reactdomlibflattenChildren__flattenChildren;
/*≠≠ node_modules/@yr/component/nod...act-dom/lib/flattenChildren.js ≠≠*/


/*== node_modules/@yr/component/nod...om/lib/ReactChildReconciler.js ==*/
$m['react-dom/lib/ReactChildReconciler'] = { exports: {} };
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactChildReconciler__ReactReconciler = $m['react-dom/lib/ReactReconciler'].exports;

var reactdomlibReactChildReconciler__instantiateReactComponent = $m['react-dom/lib/instantiateReactComponent'].exports;
var reactdomlibReactChildReconciler__KeyEscapeUtils = $m['react-dom/lib/KeyEscapeUtils'].exports;
var reactdomlibReactChildReconciler__shouldUpdateReactComponent = $m['react-dom/lib/shouldUpdateReactComponent'].exports;
var reactdomlibReactChildReconciler__traverseAllChildren = $m['react-dom/lib/traverseAllChildren'].exports;
var reactdomlibReactChildReconciler__warning = $m['fbjs/lib/warning'].exports;

var reactdomlibReactChildReconciler__ReactComponentTreeHook;

if (typeof process !== 'undefined' && process.env && 'development' === 'test') {
  // Temporary hack.
  // Inline requires don't work well with Jest:
  // https://github.com/facebook/react/issues/7240
  // Remove the inline requires when we don't need them anymore:
  // https://github.com/facebook/react/pull/7178
  reactdomlibReactChildReconciler__ReactComponentTreeHook = $m['react/lib/ReactComponentTreeHook'].exports;
}

function reactdomlibReactChildReconciler__instantiateChild(childInstances, child, name, selfDebugID) {
  // We found a component instance.
  var keyUnique = childInstances[name] === undefined;
  if ('development' !== 'production') {
    if (!reactdomlibReactChildReconciler__ReactComponentTreeHook) {
      reactdomlibReactChildReconciler__ReactComponentTreeHook = $m['react/lib/ReactComponentTreeHook'].exports;
    }
    if (!keyUnique) {
      'development' !== 'production' ? reactdomlibReactChildReconciler__warning(false, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.%s', reactdomlibReactChildReconciler__KeyEscapeUtils.unescape(name), reactdomlibReactChildReconciler__ReactComponentTreeHook.getStackAddendumByID(selfDebugID)) : void 0;
    }
  }
  if (child != null && keyUnique) {
    childInstances[name] = reactdomlibReactChildReconciler__instantiateReactComponent(child, true);
  }
}

/**
 * ReactChildReconciler provides helpers for initializing or updating a set of
 * children. Its output is suitable for passing it onto ReactMultiChild which
 * does diffed reordering and insertion.
 */
var reactdomlibReactChildReconciler__ReactChildReconciler = {
  /**
   * Generates a "mount image" for each of the supplied children. In the case
   * of `ReactDOMComponent`, a mount image is a string of markup.
   *
   * @param {?object} nestedChildNodes Nested child maps.
   * @return {?object} A set of child instances.
   * @internal
   */
  instantiateChildren: function (nestedChildNodes, transaction, context, selfDebugID) // 0 in production and for roots
  {
    if (nestedChildNodes == null) {
      return null;
    }
    var childInstances = {};

    if ('development' !== 'production') {
      reactdomlibReactChildReconciler__traverseAllChildren(nestedChildNodes, function (childInsts, child, name) {
        return reactdomlibReactChildReconciler__instantiateChild(childInsts, child, name, selfDebugID);
      }, childInstances);
    } else {
      reactdomlibReactChildReconciler__traverseAllChildren(nestedChildNodes, reactdomlibReactChildReconciler__instantiateChild, childInstances);
    }
    return childInstances;
  },

  /**
   * Updates the rendered children and returns a new set of children.
   *
   * @param {?object} prevChildren Previously initialized set of children.
   * @param {?object} nextChildren Flat child element maps.
   * @param {ReactReconcileTransaction} transaction
   * @param {object} context
   * @return {?object} A new set of child instances.
   * @internal
   */
  updateChildren: function (prevChildren, nextChildren, mountImages, removedNodes, transaction, hostParent, hostContainerInfo, context, selfDebugID) // 0 in production and for roots
  {
    // We currently don't have a way to track moves here but if we use iterators
    // instead of for..in we can zip the iterators and check if an item has
    // moved.
    // TODO: If nothing has changed, return the prevChildren object so that we
    // can quickly bailout if nothing has changed.
    if (!nextChildren && !prevChildren) {
      return;
    }
    var name;
    var prevChild;
    for (name in nextChildren) {
      if (!nextChildren.hasOwnProperty(name)) {
        continue;
      }
      prevChild = prevChildren && prevChildren[name];
      var prevElement = prevChild && prevChild._currentElement;
      var nextElement = nextChildren[name];
      if (prevChild != null && reactdomlibReactChildReconciler__shouldUpdateReactComponent(prevElement, nextElement)) {
        reactdomlibReactChildReconciler__ReactReconciler.receiveComponent(prevChild, nextElement, transaction, context);
        nextChildren[name] = prevChild;
      } else {
        if (prevChild) {
          removedNodes[name] = reactdomlibReactChildReconciler__ReactReconciler.getHostNode(prevChild);
          reactdomlibReactChildReconciler__ReactReconciler.unmountComponent(prevChild, false);
        }
        // The child must be instantiated before it's mounted.
        var nextChildInstance = reactdomlibReactChildReconciler__instantiateReactComponent(nextElement, true);
        nextChildren[name] = nextChildInstance;
        // Creating mount image now ensures refs are resolved in right order
        // (see https://github.com/facebook/react/pull/7101 for explanation).
        var nextChildMountImage = reactdomlibReactChildReconciler__ReactReconciler.mountComponent(nextChildInstance, transaction, hostParent, hostContainerInfo, context, selfDebugID);
        mountImages.push(nextChildMountImage);
      }
    }
    // Unmount children that are no longer present.
    for (name in prevChildren) {
      if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
        prevChild = prevChildren[name];
        removedNodes[name] = reactdomlibReactChildReconciler__ReactReconciler.getHostNode(prevChild);
        reactdomlibReactChildReconciler__ReactReconciler.unmountComponent(prevChild, false);
      }
    }
  },

  /**
   * Unmounts all rendered children. This should be used to clean up children
   * when this component is unmounted.
   *
   * @param {?object} renderedChildren Previously initialized set of children.
   * @internal
   */
  unmountChildren: function (renderedChildren, safely) {
    for (var name in renderedChildren) {
      if (renderedChildren.hasOwnProperty(name)) {
        var renderedChild = renderedChildren[name];
        reactdomlibReactChildReconciler__ReactReconciler.unmountComponent(renderedChild, safely);
      }
    }
  }
};

$m['react-dom/lib/ReactChildReconciler'].exports = reactdomlibReactChildReconciler__ReactChildReconciler;
/*≠≠ node_modules/@yr/component/nod...om/lib/ReactChildReconciler.js ≠≠*/


/*== node_modules/@yr/component/nod...act-dom/lib/ReactMultiChild.js ==*/
$m['react-dom/lib/ReactMultiChild'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactMultiChild___prodInvariant = $m['react-dom/lib/reactProdInvariant'].exports;

var reactdomlibReactMultiChild__ReactComponentEnvironment = $m['react-dom/lib/ReactComponentEnvironment'].exports;
var reactdomlibReactMultiChild__ReactInstanceMap = $m['react-dom/lib/ReactInstanceMap'].exports;
var reactdomlibReactMultiChild__ReactInstrumentation = $m['react-dom/lib/ReactInstrumentation'].exports;

var reactdomlibReactMultiChild__ReactCurrentOwner = $m['react/lib/ReactCurrentOwner'].exports;
var reactdomlibReactMultiChild__ReactReconciler = $m['react-dom/lib/ReactReconciler'].exports;
var reactdomlibReactMultiChild__ReactChildReconciler = $m['react-dom/lib/ReactChildReconciler'].exports;

var reactdomlibReactMultiChild__emptyFunction = $m['fbjs/lib/emptyFunction'].exports;
var reactdomlibReactMultiChild__flattenChildren = $m['react-dom/lib/flattenChildren'].exports;
var reactdomlibReactMultiChild__invariant = $m['fbjs/lib/invariant'].exports;

/**
 * Make an update for markup to be rendered and inserted at a supplied index.
 *
 * @param {string} markup Markup that renders into an element.
 * @param {number} toIndex Destination index.
 * @private
 */
function reactdomlibReactMultiChild__makeInsertMarkup(markup, afterNode, toIndex) {
  // NOTE: Null values reduce hidden classes.
  return {
    type: 'INSERT_MARKUP',
    content: markup,
    fromIndex: null,
    fromNode: null,
    toIndex: toIndex,
    afterNode: afterNode
  };
}

/**
 * Make an update for moving an existing element to another index.
 *
 * @param {number} fromIndex Source index of the existing element.
 * @param {number} toIndex Destination index of the element.
 * @private
 */
function reactdomlibReactMultiChild__makeMove(child, afterNode, toIndex) {
  // NOTE: Null values reduce hidden classes.
  return {
    type: 'MOVE_EXISTING',
    content: null,
    fromIndex: child._mountIndex,
    fromNode: reactdomlibReactMultiChild__ReactReconciler.getHostNode(child),
    toIndex: toIndex,
    afterNode: afterNode
  };
}

/**
 * Make an update for removing an element at an index.
 *
 * @param {number} fromIndex Index of the element to remove.
 * @private
 */
function reactdomlibReactMultiChild__makeRemove(child, node) {
  // NOTE: Null values reduce hidden classes.
  return {
    type: 'REMOVE_NODE',
    content: null,
    fromIndex: child._mountIndex,
    fromNode: node,
    toIndex: null,
    afterNode: null
  };
}

/**
 * Make an update for setting the markup of a node.
 *
 * @param {string} markup Markup that renders into an element.
 * @private
 */
function reactdomlibReactMultiChild__makeSetMarkup(markup) {
  // NOTE: Null values reduce hidden classes.
  return {
    type: 'SET_MARKUP',
    content: markup,
    fromIndex: null,
    fromNode: null,
    toIndex: null,
    afterNode: null
  };
}

/**
 * Make an update for setting the text content.
 *
 * @param {string} textContent Text content to set.
 * @private
 */
function reactdomlibReactMultiChild__makeTextContent(textContent) {
  // NOTE: Null values reduce hidden classes.
  return {
    type: 'TEXT_CONTENT',
    content: textContent,
    fromIndex: null,
    fromNode: null,
    toIndex: null,
    afterNode: null
  };
}

/**
 * Push an update, if any, onto the queue. Creates a new queue if none is
 * passed and always returns the queue. Mutative.
 */
function reactdomlibReactMultiChild__enqueue(queue, update) {
  if (update) {
    queue = queue || [];
    queue.push(update);
  }
  return queue;
}

/**
 * Processes any enqueued updates.
 *
 * @private
 */
function reactdomlibReactMultiChild__processQueue(inst, updateQueue) {
  reactdomlibReactMultiChild__ReactComponentEnvironment.processChildrenUpdates(inst, updateQueue);
}

var reactdomlibReactMultiChild__setChildrenForInstrumentation = reactdomlibReactMultiChild__emptyFunction;
if ('development' !== 'production') {
  var reactdomlibReactMultiChild__getDebugID = function (inst) {
    if (!inst._debugID) {
      // Check for ART-like instances. TODO: This is silly/gross.
      var internal;
      if (internal = reactdomlibReactMultiChild__ReactInstanceMap.get(inst)) {
        inst = internal;
      }
    }
    return inst._debugID;
  };
  reactdomlibReactMultiChild__setChildrenForInstrumentation = function (children) {
    var debugID = reactdomlibReactMultiChild__getDebugID(this);
    // TODO: React Native empty components are also multichild.
    // This means they still get into this method but don't have _debugID.
    if (debugID !== 0) {
      reactdomlibReactMultiChild__ReactInstrumentation.debugTool.onSetChildren(debugID, children ? Object.keys(children).map(function (key) {
        return children[key]._debugID;
      }) : []);
    }
  };
}

/**
 * ReactMultiChild are capable of reconciling multiple children.
 *
 * @class ReactMultiChild
 * @internal
 */
var reactdomlibReactMultiChild__ReactMultiChild = {
  /**
   * Provides common functionality for components that must reconcile multiple
   * children. This is used by `ReactDOMComponent` to mount, update, and
   * unmount child components.
   *
   * @lends {ReactMultiChild.prototype}
   */
  Mixin: {
    _reconcilerInstantiateChildren: function (nestedChildren, transaction, context) {
      if ('development' !== 'production') {
        var selfDebugID = reactdomlibReactMultiChild__getDebugID(this);
        if (this._currentElement) {
          try {
            reactdomlibReactMultiChild__ReactCurrentOwner.current = this._currentElement._owner;
            return reactdomlibReactMultiChild__ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context, selfDebugID);
          } finally {
            reactdomlibReactMultiChild__ReactCurrentOwner.current = null;
          }
        }
      }
      return reactdomlibReactMultiChild__ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
    },

    _reconcilerUpdateChildren: function (prevChildren, nextNestedChildrenElements, mountImages, removedNodes, transaction, context) {
      var nextChildren;
      var selfDebugID = 0;
      if ('development' !== 'production') {
        selfDebugID = reactdomlibReactMultiChild__getDebugID(this);
        if (this._currentElement) {
          try {
            reactdomlibReactMultiChild__ReactCurrentOwner.current = this._currentElement._owner;
            nextChildren = reactdomlibReactMultiChild__flattenChildren(nextNestedChildrenElements, selfDebugID);
          } finally {
            reactdomlibReactMultiChild__ReactCurrentOwner.current = null;
          }
          reactdomlibReactMultiChild__ReactChildReconciler.updateChildren(prevChildren, nextChildren, mountImages, removedNodes, transaction, this, this._hostContainerInfo, context, selfDebugID);
          return nextChildren;
        }
      }
      nextChildren = reactdomlibReactMultiChild__flattenChildren(nextNestedChildrenElements, selfDebugID);
      reactdomlibReactMultiChild__ReactChildReconciler.updateChildren(prevChildren, nextChildren, mountImages, removedNodes, transaction, this, this._hostContainerInfo, context, selfDebugID);
      return nextChildren;
    },

    /**
     * Generates a "mount image" for each of the supplied children. In the case
     * of `ReactDOMComponent`, a mount image is a string of markup.
     *
     * @param {?object} nestedChildren Nested child maps.
     * @return {array} An array of mounted representations.
     * @internal
     */
    mountChildren: function (nestedChildren, transaction, context) {
      var children = this._reconcilerInstantiateChildren(nestedChildren, transaction, context);
      this._renderedChildren = children;

      var mountImages = [];
      var index = 0;
      for (var name in children) {
        if (children.hasOwnProperty(name)) {
          var child = children[name];
          var selfDebugID = 0;
          if ('development' !== 'production') {
            selfDebugID = reactdomlibReactMultiChild__getDebugID(this);
          }
          var mountImage = reactdomlibReactMultiChild__ReactReconciler.mountComponent(child, transaction, this, this._hostContainerInfo, context, selfDebugID);
          child._mountIndex = index++;
          mountImages.push(mountImage);
        }
      }

      if ('development' !== 'production') {
        reactdomlibReactMultiChild__setChildrenForInstrumentation.call(this, children);
      }

      return mountImages;
    },

    /**
     * Replaces any rendered children with a text content string.
     *
     * @param {string} nextContent String of content.
     * @internal
     */
    updateTextContent: function (nextContent) {
      var prevChildren = this._renderedChildren;
      // Remove any rendered children.
      reactdomlibReactMultiChild__ReactChildReconciler.unmountChildren(prevChildren, false);
      for (var name in prevChildren) {
        if (prevChildren.hasOwnProperty(name)) {
          !false ? 'development' !== 'production' ? reactdomlibReactMultiChild__invariant(false, 'updateTextContent called on non-empty component.') : reactdomlibReactMultiChild___prodInvariant('118') : void 0;
        }
      }
      // Set new text content.
      var updates = [reactdomlibReactMultiChild__makeTextContent(nextContent)];
      reactdomlibReactMultiChild__processQueue(this, updates);
    },

    /**
     * Replaces any rendered children with a markup string.
     *
     * @param {string} nextMarkup String of markup.
     * @internal
     */
    updateMarkup: function (nextMarkup) {
      var prevChildren = this._renderedChildren;
      // Remove any rendered children.
      reactdomlibReactMultiChild__ReactChildReconciler.unmountChildren(prevChildren, false);
      for (var name in prevChildren) {
        if (prevChildren.hasOwnProperty(name)) {
          !false ? 'development' !== 'production' ? reactdomlibReactMultiChild__invariant(false, 'updateTextContent called on non-empty component.') : reactdomlibReactMultiChild___prodInvariant('118') : void 0;
        }
      }
      var updates = [reactdomlibReactMultiChild__makeSetMarkup(nextMarkup)];
      reactdomlibReactMultiChild__processQueue(this, updates);
    },

    /**
     * Updates the rendered children with new children.
     *
     * @param {?object} nextNestedChildrenElements Nested child element maps.
     * @param {ReactReconcileTransaction} transaction
     * @internal
     */
    updateChildren: function (nextNestedChildrenElements, transaction, context) {
      // Hook used by React ART
      this._updateChildren(nextNestedChildrenElements, transaction, context);
    },

    /**
     * @param {?object} nextNestedChildrenElements Nested child element maps.
     * @param {ReactReconcileTransaction} transaction
     * @final
     * @protected
     */
    _updateChildren: function (nextNestedChildrenElements, transaction, context) {
      var prevChildren = this._renderedChildren;
      var removedNodes = {};
      var mountImages = [];
      var nextChildren = this._reconcilerUpdateChildren(prevChildren, nextNestedChildrenElements, mountImages, removedNodes, transaction, context);
      if (!nextChildren && !prevChildren) {
        return;
      }
      var updates = null;
      var name;
      // `nextIndex` will increment for each child in `nextChildren`, but
      // `lastIndex` will be the last index visited in `prevChildren`.
      var nextIndex = 0;
      var lastIndex = 0;
      // `nextMountIndex` will increment for each newly mounted child.
      var nextMountIndex = 0;
      var lastPlacedNode = null;
      for (name in nextChildren) {
        if (!nextChildren.hasOwnProperty(name)) {
          continue;
        }
        var prevChild = prevChildren && prevChildren[name];
        var nextChild = nextChildren[name];
        if (prevChild === nextChild) {
          updates = reactdomlibReactMultiChild__enqueue(updates, this.moveChild(prevChild, lastPlacedNode, nextIndex, lastIndex));
          lastIndex = Math.max(prevChild._mountIndex, lastIndex);
          prevChild._mountIndex = nextIndex;
        } else {
          if (prevChild) {
            // Update `lastIndex` before `_mountIndex` gets unset by unmounting.
            lastIndex = Math.max(prevChild._mountIndex, lastIndex);
            // The `removedNodes` loop below will actually remove the child.
          }
          // The child must be instantiated before it's mounted.
          updates = reactdomlibReactMultiChild__enqueue(updates, this._mountChildAtIndex(nextChild, mountImages[nextMountIndex], lastPlacedNode, nextIndex, transaction, context));
          nextMountIndex++;
        }
        nextIndex++;
        lastPlacedNode = reactdomlibReactMultiChild__ReactReconciler.getHostNode(nextChild);
      }
      // Remove children that are no longer present.
      for (name in removedNodes) {
        if (removedNodes.hasOwnProperty(name)) {
          updates = reactdomlibReactMultiChild__enqueue(updates, this._unmountChild(prevChildren[name], removedNodes[name]));
        }
      }
      if (updates) {
        reactdomlibReactMultiChild__processQueue(this, updates);
      }
      this._renderedChildren = nextChildren;

      if ('development' !== 'production') {
        reactdomlibReactMultiChild__setChildrenForInstrumentation.call(this, nextChildren);
      }
    },

    /**
     * Unmounts all rendered children. This should be used to clean up children
     * when this component is unmounted. It does not actually perform any
     * backend operations.
     *
     * @internal
     */
    unmountChildren: function (safely) {
      var renderedChildren = this._renderedChildren;
      reactdomlibReactMultiChild__ReactChildReconciler.unmountChildren(renderedChildren, safely);
      this._renderedChildren = null;
    },

    /**
     * Moves a child component to the supplied index.
     *
     * @param {ReactComponent} child Component to move.
     * @param {number} toIndex Destination index of the element.
     * @param {number} lastIndex Last index visited of the siblings of `child`.
     * @protected
     */
    moveChild: function (child, afterNode, toIndex, lastIndex) {
      // If the index of `child` is less than `lastIndex`, then it needs to
      // be moved. Otherwise, we do not need to move it because a child will be
      // inserted or moved before `child`.
      if (child._mountIndex < lastIndex) {
        return reactdomlibReactMultiChild__makeMove(child, afterNode, toIndex);
      }
    },

    /**
     * Creates a child component.
     *
     * @param {ReactComponent} child Component to create.
     * @param {string} mountImage Markup to insert.
     * @protected
     */
    createChild: function (child, afterNode, mountImage) {
      return reactdomlibReactMultiChild__makeInsertMarkup(mountImage, afterNode, child._mountIndex);
    },

    /**
     * Removes a child component.
     *
     * @param {ReactComponent} child Child to remove.
     * @protected
     */
    removeChild: function (child, node) {
      return reactdomlibReactMultiChild__makeRemove(child, node);
    },

    /**
     * Mounts a child with the supplied name.
     *
     * NOTE: This is part of `updateChildren` and is here for readability.
     *
     * @param {ReactComponent} child Component to mount.
     * @param {string} name Name of the child.
     * @param {number} index Index at which to insert the child.
     * @param {ReactReconcileTransaction} transaction
     * @private
     */
    _mountChildAtIndex: function (child, mountImage, afterNode, index, transaction, context) {
      child._mountIndex = index;
      return this.createChild(child, afterNode, mountImage);
    },

    /**
     * Unmounts a rendered child.
     *
     * NOTE: This is part of `updateChildren` and is here for readability.
     *
     * @param {ReactComponent} child Component to unmount.
     * @private
     */
    _unmountChild: function (child, node) {
      var update = this.removeChild(child, node);
      child._mountIndex = null;
      return update;
    }
  }
};

$m['react-dom/lib/ReactMultiChild'].exports = reactdomlibReactMultiChild__ReactMultiChild;
/*≠≠ node_modules/@yr/component/nod...act-dom/lib/ReactMultiChild.js ≠≠*/


/*== node_modules/@yr/component/nod...ct-dom/lib/LinkedValueUtils.js ==*/
$m['react-dom/lib/LinkedValueUtils'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibLinkedValueUtils___prodInvariant = $m['react-dom/lib/reactProdInvariant'].exports;

var reactdomlibLinkedValueUtils__ReactPropTypesSecret = $m['react-dom/lib/ReactPropTypesSecret'].exports;
var reactdomlibLinkedValueUtils__propTypesFactory = $m['prop-types/factory'].exports;

var reactdomlibLinkedValueUtils__React = $m['react/lib/React'].exports;
var reactdomlibLinkedValueUtils__PropTypes = reactdomlibLinkedValueUtils__propTypesFactory(reactdomlibLinkedValueUtils__React.isValidElement);

var reactdomlibLinkedValueUtils__invariant = $m['fbjs/lib/invariant'].exports;
var reactdomlibLinkedValueUtils__warning = $m['fbjs/lib/warning'].exports;

var reactdomlibLinkedValueUtils__hasReadOnlyValue = {
  button: true,
  checkbox: true,
  image: true,
  hidden: true,
  radio: true,
  reset: true,
  submit: true
};

function reactdomlibLinkedValueUtils___assertSingleLink(inputProps) {
  !(inputProps.checkedLink == null || inputProps.valueLink == null) ? 'development' !== 'production' ? reactdomlibLinkedValueUtils__invariant(false, 'Cannot provide a checkedLink and a valueLink. If you want to use checkedLink, you probably don\'t want to use valueLink and vice versa.') : reactdomlibLinkedValueUtils___prodInvariant('87') : void 0;
}
function reactdomlibLinkedValueUtils___assertValueLink(inputProps) {
  reactdomlibLinkedValueUtils___assertSingleLink(inputProps);
  !(inputProps.value == null && inputProps.onChange == null) ? 'development' !== 'production' ? reactdomlibLinkedValueUtils__invariant(false, 'Cannot provide a valueLink and a value or onChange event. If you want to use value or onChange, you probably don\'t want to use valueLink.') : reactdomlibLinkedValueUtils___prodInvariant('88') : void 0;
}

function reactdomlibLinkedValueUtils___assertCheckedLink(inputProps) {
  reactdomlibLinkedValueUtils___assertSingleLink(inputProps);
  !(inputProps.checked == null && inputProps.onChange == null) ? 'development' !== 'production' ? reactdomlibLinkedValueUtils__invariant(false, 'Cannot provide a checkedLink and a checked property or onChange event. If you want to use checked or onChange, you probably don\'t want to use checkedLink') : reactdomlibLinkedValueUtils___prodInvariant('89') : void 0;
}

var reactdomlibLinkedValueUtils__propTypes = {
  value: function (props, propName, componentName) {
    if (!props[propName] || reactdomlibLinkedValueUtils__hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled) {
      return null;
    }
    return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
  },
  checked: function (props, propName, componentName) {
    if (!props[propName] || props.onChange || props.readOnly || props.disabled) {
      return null;
    }
    return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
  },
  onChange: reactdomlibLinkedValueUtils__PropTypes.func
};

var reactdomlibLinkedValueUtils__loggedTypeFailures = {};
function reactdomlibLinkedValueUtils__getDeclarationErrorAddendum(owner) {
  if (owner) {
    var name = owner.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
  }
  return '';
}

/**
 * Provide a linked `value` attribute for controlled forms. You should not use
 * this outside of the ReactDOM controlled form components.
 */
var reactdomlibLinkedValueUtils__LinkedValueUtils = {
  checkPropTypes: function (tagName, props, owner) {
    for (var propName in reactdomlibLinkedValueUtils__propTypes) {
      if (reactdomlibLinkedValueUtils__propTypes.hasOwnProperty(propName)) {
        var error = reactdomlibLinkedValueUtils__propTypes[propName](props, propName, tagName, 'prop', null, reactdomlibLinkedValueUtils__ReactPropTypesSecret);
      }
      if (error instanceof Error && !(error.message in reactdomlibLinkedValueUtils__loggedTypeFailures)) {
        // Only monitor this failure once because there tends to be a lot of the
        // same error.
        reactdomlibLinkedValueUtils__loggedTypeFailures[error.message] = true;

        var addendum = reactdomlibLinkedValueUtils__getDeclarationErrorAddendum(owner);
        'development' !== 'production' ? reactdomlibLinkedValueUtils__warning(false, 'Failed form propType: %s%s', error.message, addendum) : void 0;
      }
    }
  },

  /**
   * @param {object} inputProps Props for form component
   * @return {*} current value of the input either from value prop or link.
   */
  getValue: function (inputProps) {
    if (inputProps.valueLink) {
      reactdomlibLinkedValueUtils___assertValueLink(inputProps);
      return inputProps.valueLink.value;
    }
    return inputProps.value;
  },

  /**
   * @param {object} inputProps Props for form component
   * @return {*} current checked status of the input either from checked prop
   *             or link.
   */
  getChecked: function (inputProps) {
    if (inputProps.checkedLink) {
      reactdomlibLinkedValueUtils___assertCheckedLink(inputProps);
      return inputProps.checkedLink.value;
    }
    return inputProps.checked;
  },

  /**
   * @param {object} inputProps Props for form component
   * @param {SyntheticEvent} event change event to handle
   */
  executeOnChange: function (inputProps, event) {
    if (inputProps.valueLink) {
      reactdomlibLinkedValueUtils___assertValueLink(inputProps);
      return inputProps.valueLink.requestChange(event.target.value);
    } else if (inputProps.checkedLink) {
      reactdomlibLinkedValueUtils___assertCheckedLink(inputProps);
      return inputProps.checkedLink.requestChange(event.target.checked);
    } else if (inputProps.onChange) {
      return inputProps.onChange.call(undefined, event);
    }
  }
};

$m['react-dom/lib/LinkedValueUtils'].exports = reactdomlibLinkedValueUtils__LinkedValueUtils;
/*≠≠ node_modules/@yr/component/nod...ct-dom/lib/LinkedValueUtils.js ≠≠*/


/*== node_modules/@yr/component/nod...ct-dom/lib/ReactDOMTextarea.js ==*/
$m['react-dom/lib/ReactDOMTextarea'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactDOMTextarea___prodInvariant = $m['react-dom/lib/reactProdInvariant'].exports,
    reactdomlibReactDOMTextarea___assign = $m['object-assign'].exports;

var reactdomlibReactDOMTextarea__LinkedValueUtils = $m['react-dom/lib/LinkedValueUtils'].exports;
var reactdomlibReactDOMTextarea__ReactDOMComponentTree = $m['react-dom/lib/ReactDOMComponentTree'].exports;
var reactdomlibReactDOMTextarea__ReactUpdates = $m['react-dom/lib/ReactUpdates'].exports;

var reactdomlibReactDOMTextarea__invariant = $m['fbjs/lib/invariant'].exports;
var reactdomlibReactDOMTextarea__warning = $m['fbjs/lib/warning'].exports;

var reactdomlibReactDOMTextarea__didWarnValueLink = false;
var reactdomlibReactDOMTextarea__didWarnValDefaultVal = false;

function reactdomlibReactDOMTextarea__forceUpdateIfMounted() {
  if (this._rootNodeID) {
    // DOM component is still mounted; update
    reactdomlibReactDOMTextarea__ReactDOMTextarea.updateWrapper(this);
  }
}

/**
 * Implements a <textarea> host component that allows setting `value`, and
 * `defaultValue`. This differs from the traditional DOM API because value is
 * usually set as PCDATA children.
 *
 * If `value` is not supplied (or null/undefined), user actions that affect the
 * value will trigger updates to the element.
 *
 * If `value` is supplied (and not null/undefined), the rendered element will
 * not trigger updates to the element. Instead, the `value` prop must change in
 * order for the rendered element to be updated.
 *
 * The rendered element will be initialized with an empty value, the prop
 * `defaultValue` if specified, or the children content (deprecated).
 */
var reactdomlibReactDOMTextarea__ReactDOMTextarea = {
  getHostProps: function (inst, props) {
    !(props.dangerouslySetInnerHTML == null) ? 'development' !== 'production' ? reactdomlibReactDOMTextarea__invariant(false, '`dangerouslySetInnerHTML` does not make sense on <textarea>.') : reactdomlibReactDOMTextarea___prodInvariant('91') : void 0;

    // Always set children to the same thing. In IE9, the selection range will
    // get reset if `textContent` is mutated.  We could add a check in setTextContent
    // to only set the value if/when the value differs from the node value (which would
    // completely solve this IE9 bug), but Sebastian+Ben seemed to like this solution.
    // The value can be a boolean or object so that's why it's forced to be a string.
    var hostProps = reactdomlibReactDOMTextarea___assign({}, props, {
      value: undefined,
      defaultValue: undefined,
      children: '' + inst._wrapperState.initialValue,
      onChange: inst._wrapperState.onChange
    });

    return hostProps;
  },

  mountWrapper: function (inst, props) {
    if ('development' !== 'production') {
      reactdomlibReactDOMTextarea__LinkedValueUtils.checkPropTypes('textarea', props, inst._currentElement._owner);
      if (props.valueLink !== undefined && !reactdomlibReactDOMTextarea__didWarnValueLink) {
        'development' !== 'production' ? reactdomlibReactDOMTextarea__warning(false, '`valueLink` prop on `textarea` is deprecated; set `value` and `onChange` instead.') : void 0;
        reactdomlibReactDOMTextarea__didWarnValueLink = true;
      }
      if (props.value !== undefined && props.defaultValue !== undefined && !reactdomlibReactDOMTextarea__didWarnValDefaultVal) {
        'development' !== 'production' ? reactdomlibReactDOMTextarea__warning(false, 'Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components') : void 0;
        reactdomlibReactDOMTextarea__didWarnValDefaultVal = true;
      }
    }

    var value = reactdomlibReactDOMTextarea__LinkedValueUtils.getValue(props);
    var initialValue = value;

    // Only bother fetching default value if we're going to use it
    if (value == null) {
      var defaultValue = props.defaultValue;
      // TODO (yungsters): Remove support for children content in <textarea>.
      var children = props.children;
      if (children != null) {
        if ('development' !== 'production') {
          'development' !== 'production' ? reactdomlibReactDOMTextarea__warning(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.') : void 0;
        }
        !(defaultValue == null) ? 'development' !== 'production' ? reactdomlibReactDOMTextarea__invariant(false, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : reactdomlibReactDOMTextarea___prodInvariant('92') : void 0;
        if (Array.isArray(children)) {
          !(children.length <= 1) ? 'development' !== 'production' ? reactdomlibReactDOMTextarea__invariant(false, '<textarea> can only have at most one child.') : reactdomlibReactDOMTextarea___prodInvariant('93') : void 0;
          children = children[0];
        }

        defaultValue = '' + children;
      }
      if (defaultValue == null) {
        defaultValue = '';
      }
      initialValue = defaultValue;
    }

    inst._wrapperState = {
      initialValue: '' + initialValue,
      listeners: null,
      onChange: reactdomlibReactDOMTextarea___handleChange.bind(inst)
    };
  },

  updateWrapper: function (inst) {
    var props = inst._currentElement.props;

    var node = reactdomlibReactDOMTextarea__ReactDOMComponentTree.getNodeFromInstance(inst);
    var value = reactdomlibReactDOMTextarea__LinkedValueUtils.getValue(props);
    if (value != null) {
      // Cast `value` to a string to ensure the value is set correctly. While
      // browsers typically do this as necessary, jsdom doesn't.
      var newValue = '' + value;

      // To avoid side effects (such as losing text selection), only set value if changed
      if (newValue !== node.value) {
        node.value = newValue;
      }
      if (props.defaultValue == null) {
        node.defaultValue = newValue;
      }
    }
    if (props.defaultValue != null) {
      node.defaultValue = props.defaultValue;
    }
  },

  postMountWrapper: function (inst) {
    // This is in postMount because we need access to the DOM node, which is not
    // available until after the component has mounted.
    var node = reactdomlibReactDOMTextarea__ReactDOMComponentTree.getNodeFromInstance(inst);
    var textContent = node.textContent;

    // Only set node.value if textContent is equal to the expected
    // initial value. In IE10/IE11 there is a bug where the placeholder attribute
    // will populate textContent as well.
    // https://developer.microsoft.com/microsoft-edge/platform/issues/101525/
    if (textContent === inst._wrapperState.initialValue) {
      node.value = textContent;
    }
  }
};

function reactdomlibReactDOMTextarea___handleChange(event) {
  var props = this._currentElement.props;
  var returnValue = reactdomlibReactDOMTextarea__LinkedValueUtils.executeOnChange(props, event);
  reactdomlibReactDOMTextarea__ReactUpdates.asap(reactdomlibReactDOMTextarea__forceUpdateIfMounted, this);
  return returnValue;
}

$m['react-dom/lib/ReactDOMTextarea'].exports = reactdomlibReactDOMTextarea__ReactDOMTextarea;
/*≠≠ node_modules/@yr/component/nod...ct-dom/lib/ReactDOMTextarea.js ≠≠*/


/*== node_modules/@yr/component/nod...eact-dom/lib/ReactDOMSelect.js ==*/
$m['react-dom/lib/ReactDOMSelect'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactDOMSelect___assign = $m['object-assign'].exports;

var reactdomlibReactDOMSelect__LinkedValueUtils = $m['react-dom/lib/LinkedValueUtils'].exports;
var reactdomlibReactDOMSelect__ReactDOMComponentTree = $m['react-dom/lib/ReactDOMComponentTree'].exports;
var reactdomlibReactDOMSelect__ReactUpdates = $m['react-dom/lib/ReactUpdates'].exports;

var reactdomlibReactDOMSelect__warning = $m['fbjs/lib/warning'].exports;

var reactdomlibReactDOMSelect__didWarnValueLink = false;
var reactdomlibReactDOMSelect__didWarnValueDefaultValue = false;

function reactdomlibReactDOMSelect__updateOptionsIfPendingUpdateAndMounted() {
  if (this._rootNodeID && this._wrapperState.pendingUpdate) {
    this._wrapperState.pendingUpdate = false;

    var props = this._currentElement.props;
    var value = reactdomlibReactDOMSelect__LinkedValueUtils.getValue(props);

    if (value != null) {
      reactdomlibReactDOMSelect__updateOptions(this, Boolean(props.multiple), value);
    }
  }
}

function reactdomlibReactDOMSelect__getDeclarationErrorAddendum(owner) {
  if (owner) {
    var name = owner.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
  }
  return '';
}

var reactdomlibReactDOMSelect__valuePropNames = ['value', 'defaultValue'];

/**
 * Validation function for `value` and `defaultValue`.
 * @private
 */
function reactdomlibReactDOMSelect__checkSelectPropTypes(inst, props) {
  var owner = inst._currentElement._owner;
  reactdomlibReactDOMSelect__LinkedValueUtils.checkPropTypes('select', props, owner);

  if (props.valueLink !== undefined && !reactdomlibReactDOMSelect__didWarnValueLink) {
    'development' !== 'production' ? reactdomlibReactDOMSelect__warning(false, '`valueLink` prop on `select` is deprecated; set `value` and `onChange` instead.') : void 0;
    reactdomlibReactDOMSelect__didWarnValueLink = true;
  }

  for (var i = 0; i < reactdomlibReactDOMSelect__valuePropNames.length; i++) {
    var propName = reactdomlibReactDOMSelect__valuePropNames[i];
    if (props[propName] == null) {
      continue;
    }
    var isArray = Array.isArray(props[propName]);
    if (props.multiple && !isArray) {
      'development' !== 'production' ? reactdomlibReactDOMSelect__warning(false, 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.%s', propName, reactdomlibReactDOMSelect__getDeclarationErrorAddendum(owner)) : void 0;
    } else if (!props.multiple && isArray) {
      'development' !== 'production' ? reactdomlibReactDOMSelect__warning(false, 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.%s', propName, reactdomlibReactDOMSelect__getDeclarationErrorAddendum(owner)) : void 0;
    }
  }
}

/**
 * @param {ReactDOMComponent} inst
 * @param {boolean} multiple
 * @param {*} propValue A stringable (with `multiple`, a list of stringables).
 * @private
 */
function reactdomlibReactDOMSelect__updateOptions(inst, multiple, propValue) {
  var selectedValue, i;
  var options = reactdomlibReactDOMSelect__ReactDOMComponentTree.getNodeFromInstance(inst).options;

  if (multiple) {
    selectedValue = {};
    for (i = 0; i < propValue.length; i++) {
      selectedValue['' + propValue[i]] = true;
    }
    for (i = 0; i < options.length; i++) {
      var selected = selectedValue.hasOwnProperty(options[i].value);
      if (options[i].selected !== selected) {
        options[i].selected = selected;
      }
    }
  } else {
    // Do not set `select.value` as exact behavior isn't consistent across all
    // browsers for all cases.
    selectedValue = '' + propValue;
    for (i = 0; i < options.length; i++) {
      if (options[i].value === selectedValue) {
        options[i].selected = true;
        return;
      }
    }
    if (options.length) {
      options[0].selected = true;
    }
  }
}

/**
 * Implements a <select> host component that allows optionally setting the
 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
 * stringable. If `multiple` is true, the prop must be an array of stringables.
 *
 * If `value` is not supplied (or null/undefined), user actions that change the
 * selected option will trigger updates to the rendered options.
 *
 * If it is supplied (and not null/undefined), the rendered options will not
 * update in response to user actions. Instead, the `value` prop must change in
 * order for the rendered options to update.
 *
 * If `defaultValue` is provided, any options with the supplied values will be
 * selected.
 */
var reactdomlibReactDOMSelect__ReactDOMSelect = {
  getHostProps: function (inst, props) {
    return reactdomlibReactDOMSelect___assign({}, props, {
      onChange: inst._wrapperState.onChange,
      value: undefined
    });
  },

  mountWrapper: function (inst, props) {
    if ('development' !== 'production') {
      reactdomlibReactDOMSelect__checkSelectPropTypes(inst, props);
    }

    var value = reactdomlibReactDOMSelect__LinkedValueUtils.getValue(props);
    inst._wrapperState = {
      pendingUpdate: false,
      initialValue: value != null ? value : props.defaultValue,
      listeners: null,
      onChange: reactdomlibReactDOMSelect___handleChange.bind(inst),
      wasMultiple: Boolean(props.multiple)
    };

    if (props.value !== undefined && props.defaultValue !== undefined && !reactdomlibReactDOMSelect__didWarnValueDefaultValue) {
      'development' !== 'production' ? reactdomlibReactDOMSelect__warning(false, 'Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components') : void 0;
      reactdomlibReactDOMSelect__didWarnValueDefaultValue = true;
    }
  },

  getSelectValueContext: function (inst) {
    // ReactDOMOption looks at this initial value so the initial generated
    // markup has correct `selected` attributes
    return inst._wrapperState.initialValue;
  },

  postUpdateWrapper: function (inst) {
    var props = inst._currentElement.props;

    // After the initial mount, we control selected-ness manually so don't pass
    // this value down
    inst._wrapperState.initialValue = undefined;

    var wasMultiple = inst._wrapperState.wasMultiple;
    inst._wrapperState.wasMultiple = Boolean(props.multiple);

    var value = reactdomlibReactDOMSelect__LinkedValueUtils.getValue(props);
    if (value != null) {
      inst._wrapperState.pendingUpdate = false;
      reactdomlibReactDOMSelect__updateOptions(inst, Boolean(props.multiple), value);
    } else if (wasMultiple !== Boolean(props.multiple)) {
      // For simplicity, reapply `defaultValue` if `multiple` is toggled.
      if (props.defaultValue != null) {
        reactdomlibReactDOMSelect__updateOptions(inst, Boolean(props.multiple), props.defaultValue);
      } else {
        // Revert the select back to its default unselected state.
        reactdomlibReactDOMSelect__updateOptions(inst, Boolean(props.multiple), props.multiple ? [] : '');
      }
    }
  }
};

function reactdomlibReactDOMSelect___handleChange(event) {
  var props = this._currentElement.props;
  var returnValue = reactdomlibReactDOMSelect__LinkedValueUtils.executeOnChange(props, event);

  if (this._rootNodeID) {
    this._wrapperState.pendingUpdate = true;
  }
  reactdomlibReactDOMSelect__ReactUpdates.asap(reactdomlibReactDOMSelect__updateOptionsIfPendingUpdateAndMounted, this);
  return returnValue;
}

$m['react-dom/lib/ReactDOMSelect'].exports = reactdomlibReactDOMSelect__ReactDOMSelect;
/*≠≠ node_modules/@yr/component/nod...eact-dom/lib/ReactDOMSelect.js ≠≠*/


/*== node_modules/@yr/component/nod...eact-dom/lib/ReactDOMOption.js ==*/
$m['react-dom/lib/ReactDOMOption'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactDOMOption___assign = $m['object-assign'].exports;

var reactdomlibReactDOMOption__React = $m['react/lib/React'].exports;
var reactdomlibReactDOMOption__ReactDOMComponentTree = $m['react-dom/lib/ReactDOMComponentTree'].exports;
var reactdomlibReactDOMOption__ReactDOMSelect = $m['react-dom/lib/ReactDOMSelect'].exports;

var reactdomlibReactDOMOption__warning = $m['fbjs/lib/warning'].exports;
var reactdomlibReactDOMOption__didWarnInvalidOptionChildren = false;

function reactdomlibReactDOMOption__flattenChildren(children) {
  var content = '';

  // Flatten children and warn if they aren't strings or numbers;
  // invalid types are ignored.
  reactdomlibReactDOMOption__React.Children.forEach(children, function (child) {
    if (child == null) {
      return;
    }
    if (typeof child === 'string' || typeof child === 'number') {
      content += child;
    } else if (!reactdomlibReactDOMOption__didWarnInvalidOptionChildren) {
      reactdomlibReactDOMOption__didWarnInvalidOptionChildren = true;
      'development' !== 'production' ? reactdomlibReactDOMOption__warning(false, 'Only strings and numbers are supported as <option> children.') : void 0;
    }
  });

  return content;
}

/**
 * Implements an <option> host component that warns when `selected` is set.
 */
var reactdomlibReactDOMOption__ReactDOMOption = {
  mountWrapper: function (inst, props, hostParent) {
    // TODO (yungsters): Remove support for `selected` in <option>.
    if ('development' !== 'production') {
      'development' !== 'production' ? reactdomlibReactDOMOption__warning(props.selected == null, 'Use the `defaultValue` or `value` props on <select> instead of ' + 'setting `selected` on <option>.') : void 0;
    }

    // Look up whether this option is 'selected'
    var selectValue = null;
    if (hostParent != null) {
      var selectParent = hostParent;

      if (selectParent._tag === 'optgroup') {
        selectParent = selectParent._hostParent;
      }

      if (selectParent != null && selectParent._tag === 'select') {
        selectValue = reactdomlibReactDOMOption__ReactDOMSelect.getSelectValueContext(selectParent);
      }
    }

    // If the value is null (e.g., no specified value or after initial mount)
    // or missing (e.g., for <datalist>), we don't change props.selected
    var selected = null;
    if (selectValue != null) {
      var value;
      if (props.value != null) {
        value = props.value + '';
      } else {
        value = reactdomlibReactDOMOption__flattenChildren(props.children);
      }
      selected = false;
      if (Array.isArray(selectValue)) {
        // multiple
        for (var i = 0; i < selectValue.length; i++) {
          if ('' + selectValue[i] === value) {
            selected = true;
            break;
          }
        }
      } else {
        selected = '' + selectValue === value;
      }
    }

    inst._wrapperState = { selected: selected };
  },

  postMountWrapper: function (inst) {
    // value="" should make a value attribute (#6219)
    var props = inst._currentElement.props;
    if (props.value != null) {
      var node = reactdomlibReactDOMOption__ReactDOMComponentTree.getNodeFromInstance(inst);
      node.setAttribute('value', props.value);
    }
  },

  getHostProps: function (inst, props) {
    var hostProps = reactdomlibReactDOMOption___assign({ selected: undefined, children: undefined }, props);

    // Read state only from initial mount because <select> updates value
    // manually; we need the initial state only for server rendering
    if (inst._wrapperState.selected != null) {
      hostProps.selected = inst._wrapperState.selected;
    }

    var content = reactdomlibReactDOMOption__flattenChildren(props.children);

    if (content) {
      hostProps.children = content;
    }

    return hostProps;
  }
};

$m['react-dom/lib/ReactDOMOption'].exports = reactdomlibReactDOMOption__ReactDOMOption;
/*≠≠ node_modules/@yr/component/nod...eact-dom/lib/ReactDOMOption.js ≠≠*/


/*== node_modules/@yr/component/nod...oteAttributeValueForBrowser.js ==*/
$m['react-dom/lib/quoteAttributeValueForBrowser'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibquoteAttributeValueForBrowser__escapeTextContentForBrowser = $m['react-dom/lib/escapeTextContentForBrowser'].exports;

/**
 * Escapes attribute value to prevent scripting attacks.
 *
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */
function reactdomlibquoteAttributeValueForBrowser__quoteAttributeValueForBrowser(value) {
  return '"' + reactdomlibquoteAttributeValueForBrowser__escapeTextContentForBrowser(value) + '"';
}

$m['react-dom/lib/quoteAttributeValueForBrowser'].exports = reactdomlibquoteAttributeValueForBrowser__quoteAttributeValueForBrowser;
/*≠≠ node_modules/@yr/component/nod...oteAttributeValueForBrowser.js ≠≠*/


/*== node_modules/@yr/component/nod...m/lib/DOMPropertyOperations.js ==*/
$m['react-dom/lib/DOMPropertyOperations'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibDOMPropertyOperations__DOMProperty = $m['react-dom/lib/DOMProperty'].exports;
var reactdomlibDOMPropertyOperations__ReactDOMComponentTree = $m['react-dom/lib/ReactDOMComponentTree'].exports;
var reactdomlibDOMPropertyOperations__ReactInstrumentation = $m['react-dom/lib/ReactInstrumentation'].exports;

var reactdomlibDOMPropertyOperations__quoteAttributeValueForBrowser = $m['react-dom/lib/quoteAttributeValueForBrowser'].exports;
var reactdomlibDOMPropertyOperations__warning = $m['fbjs/lib/warning'].exports;

var reactdomlibDOMPropertyOperations__VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + reactdomlibDOMPropertyOperations__DOMProperty.ATTRIBUTE_NAME_START_CHAR + '][' + reactdomlibDOMPropertyOperations__DOMProperty.ATTRIBUTE_NAME_CHAR + ']*$');
var reactdomlibDOMPropertyOperations__illegalAttributeNameCache = {};
var reactdomlibDOMPropertyOperations__validatedAttributeNameCache = {};

function reactdomlibDOMPropertyOperations__isAttributeNameSafe(attributeName) {
  if (reactdomlibDOMPropertyOperations__validatedAttributeNameCache.hasOwnProperty(attributeName)) {
    return true;
  }
  if (reactdomlibDOMPropertyOperations__illegalAttributeNameCache.hasOwnProperty(attributeName)) {
    return false;
  }
  if (reactdomlibDOMPropertyOperations__VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
    reactdomlibDOMPropertyOperations__validatedAttributeNameCache[attributeName] = true;
    return true;
  }
  reactdomlibDOMPropertyOperations__illegalAttributeNameCache[attributeName] = true;
  'development' !== 'production' ? reactdomlibDOMPropertyOperations__warning(false, 'Invalid attribute name: `%s`', attributeName) : void 0;
  return false;
}

function reactdomlibDOMPropertyOperations__shouldIgnoreValue(propertyInfo, value) {
  return value == null || propertyInfo.hasBooleanValue && !value || propertyInfo.hasNumericValue && isNaN(value) || propertyInfo.hasPositiveNumericValue && value < 1 || propertyInfo.hasOverloadedBooleanValue && value === false;
}

/**
 * Operations for dealing with DOM properties.
 */
var reactdomlibDOMPropertyOperations__DOMPropertyOperations = {
  /**
   * Creates markup for the ID property.
   *
   * @param {string} id Unescaped ID.
   * @return {string} Markup string.
   */
  createMarkupForID: function (id) {
    return reactdomlibDOMPropertyOperations__DOMProperty.ID_ATTRIBUTE_NAME + '=' + reactdomlibDOMPropertyOperations__quoteAttributeValueForBrowser(id);
  },

  setAttributeForID: function (node, id) {
    node.setAttribute(reactdomlibDOMPropertyOperations__DOMProperty.ID_ATTRIBUTE_NAME, id);
  },

  createMarkupForRoot: function () {
    return reactdomlibDOMPropertyOperations__DOMProperty.ROOT_ATTRIBUTE_NAME + '=""';
  },

  setAttributeForRoot: function (node) {
    node.setAttribute(reactdomlibDOMPropertyOperations__DOMProperty.ROOT_ATTRIBUTE_NAME, '');
  },

  /**
   * Creates markup for a property.
   *
   * @param {string} name
   * @param {*} value
   * @return {?string} Markup string, or null if the property was invalid.
   */
  createMarkupForProperty: function (name, value) {
    var propertyInfo = reactdomlibDOMPropertyOperations__DOMProperty.properties.hasOwnProperty(name) ? reactdomlibDOMPropertyOperations__DOMProperty.properties[name] : null;
    if (propertyInfo) {
      if (reactdomlibDOMPropertyOperations__shouldIgnoreValue(propertyInfo, value)) {
        return '';
      }
      var attributeName = propertyInfo.attributeName;
      if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
        return attributeName + '=""';
      }
      return attributeName + '=' + reactdomlibDOMPropertyOperations__quoteAttributeValueForBrowser(value);
    } else if (reactdomlibDOMPropertyOperations__DOMProperty.isCustomAttribute(name)) {
      if (value == null) {
        return '';
      }
      return name + '=' + reactdomlibDOMPropertyOperations__quoteAttributeValueForBrowser(value);
    }
    return null;
  },

  /**
   * Creates markup for a custom property.
   *
   * @param {string} name
   * @param {*} value
   * @return {string} Markup string, or empty string if the property was invalid.
   */
  createMarkupForCustomAttribute: function (name, value) {
    if (!reactdomlibDOMPropertyOperations__isAttributeNameSafe(name) || value == null) {
      return '';
    }
    return name + '=' + reactdomlibDOMPropertyOperations__quoteAttributeValueForBrowser(value);
  },

  /**
   * Sets the value for a property on a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   * @param {*} value
   */
  setValueForProperty: function (node, name, value) {
    var propertyInfo = reactdomlibDOMPropertyOperations__DOMProperty.properties.hasOwnProperty(name) ? reactdomlibDOMPropertyOperations__DOMProperty.properties[name] : null;
    if (propertyInfo) {
      var mutationMethod = propertyInfo.mutationMethod;
      if (mutationMethod) {
        mutationMethod(node, value);
      } else if (reactdomlibDOMPropertyOperations__shouldIgnoreValue(propertyInfo, value)) {
        this.deleteValueForProperty(node, name);
        return;
      } else if (propertyInfo.mustUseProperty) {
        // Contrary to `setAttribute`, object properties are properly
        // `toString`ed by IE8/9.
        node[propertyInfo.propertyName] = value;
      } else {
        var attributeName = propertyInfo.attributeName;
        var namespace = propertyInfo.attributeNamespace;
        // `setAttribute` with objects becomes only `[object]` in IE8/9,
        // ('' + value) makes it output the correct toString()-value.
        if (namespace) {
          node.setAttributeNS(namespace, attributeName, '' + value);
        } else if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
          node.setAttribute(attributeName, '');
        } else {
          node.setAttribute(attributeName, '' + value);
        }
      }
    } else if (reactdomlibDOMPropertyOperations__DOMProperty.isCustomAttribute(name)) {
      reactdomlibDOMPropertyOperations__DOMPropertyOperations.setValueForAttribute(node, name, value);
      return;
    }

    if ('development' !== 'production') {
      var payload = {};
      payload[name] = value;
      reactdomlibDOMPropertyOperations__ReactInstrumentation.debugTool.onHostOperation({
        instanceID: reactdomlibDOMPropertyOperations__ReactDOMComponentTree.getInstanceFromNode(node)._debugID,
        type: 'update attribute',
        payload: payload
      });
    }
  },

  setValueForAttribute: function (node, name, value) {
    if (!reactdomlibDOMPropertyOperations__isAttributeNameSafe(name)) {
      return;
    }
    if (value == null) {
      node.removeAttribute(name);
    } else {
      node.setAttribute(name, '' + value);
    }

    if ('development' !== 'production') {
      var payload = {};
      payload[name] = value;
      reactdomlibDOMPropertyOperations__ReactInstrumentation.debugTool.onHostOperation({
        instanceID: reactdomlibDOMPropertyOperations__ReactDOMComponentTree.getInstanceFromNode(node)._debugID,
        type: 'update attribute',
        payload: payload
      });
    }
  },

  /**
   * Deletes an attributes from a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   */
  deleteValueForAttribute: function (node, name) {
    node.removeAttribute(name);
    if ('development' !== 'production') {
      reactdomlibDOMPropertyOperations__ReactInstrumentation.debugTool.onHostOperation({
        instanceID: reactdomlibDOMPropertyOperations__ReactDOMComponentTree.getInstanceFromNode(node)._debugID,
        type: 'remove attribute',
        payload: name
      });
    }
  },

  /**
   * Deletes the value for a property on a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   */
  deleteValueForProperty: function (node, name) {
    var propertyInfo = reactdomlibDOMPropertyOperations__DOMProperty.properties.hasOwnProperty(name) ? reactdomlibDOMPropertyOperations__DOMProperty.properties[name] : null;
    if (propertyInfo) {
      var mutationMethod = propertyInfo.mutationMethod;
      if (mutationMethod) {
        mutationMethod(node, undefined);
      } else if (propertyInfo.mustUseProperty) {
        var propName = propertyInfo.propertyName;
        if (propertyInfo.hasBooleanValue) {
          node[propName] = false;
        } else {
          node[propName] = '';
        }
      } else {
        node.removeAttribute(propertyInfo.attributeName);
      }
    } else if (reactdomlibDOMPropertyOperations__DOMProperty.isCustomAttribute(name)) {
      node.removeAttribute(name);
    }

    if ('development' !== 'production') {
      reactdomlibDOMPropertyOperations__ReactInstrumentation.debugTool.onHostOperation({
        instanceID: reactdomlibDOMPropertyOperations__ReactDOMComponentTree.getInstanceFromNode(node)._debugID,
        type: 'remove attribute',
        payload: name
      });
    }
  }
};

$m['react-dom/lib/DOMPropertyOperations'].exports = reactdomlibDOMPropertyOperations__DOMPropertyOperations;
/*≠≠ node_modules/@yr/component/nod...m/lib/DOMPropertyOperations.js ≠≠*/


/*== node_modules/@yr/component/nod...react-dom/lib/ReactDOMInput.js ==*/
$m['react-dom/lib/ReactDOMInput'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactDOMInput___prodInvariant = $m['react-dom/lib/reactProdInvariant'].exports,
    reactdomlibReactDOMInput___assign = $m['object-assign'].exports;

var reactdomlibReactDOMInput__DOMPropertyOperations = $m['react-dom/lib/DOMPropertyOperations'].exports;
var reactdomlibReactDOMInput__LinkedValueUtils = $m['react-dom/lib/LinkedValueUtils'].exports;
var reactdomlibReactDOMInput__ReactDOMComponentTree = $m['react-dom/lib/ReactDOMComponentTree'].exports;
var reactdomlibReactDOMInput__ReactUpdates = $m['react-dom/lib/ReactUpdates'].exports;

var reactdomlibReactDOMInput__invariant = $m['fbjs/lib/invariant'].exports;
var reactdomlibReactDOMInput__warning = $m['fbjs/lib/warning'].exports;

var reactdomlibReactDOMInput__didWarnValueLink = false;
var reactdomlibReactDOMInput__didWarnCheckedLink = false;
var reactdomlibReactDOMInput__didWarnValueDefaultValue = false;
var reactdomlibReactDOMInput__didWarnCheckedDefaultChecked = false;
var reactdomlibReactDOMInput__didWarnControlledToUncontrolled = false;
var reactdomlibReactDOMInput__didWarnUncontrolledToControlled = false;

function reactdomlibReactDOMInput__forceUpdateIfMounted() {
  if (this._rootNodeID) {
    // DOM component is still mounted; update
    reactdomlibReactDOMInput__ReactDOMInput.updateWrapper(this);
  }
}

function reactdomlibReactDOMInput__isControlled(props) {
  var usesChecked = props.type === 'checkbox' || props.type === 'radio';
  return usesChecked ? props.checked != null : props.value != null;
}

/**
 * Implements an <input> host component that allows setting these optional
 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
 *
 * If `checked` or `value` are not supplied (or null/undefined), user actions
 * that affect the checked state or value will trigger updates to the element.
 *
 * If they are supplied (and not null/undefined), the rendered element will not
 * trigger updates to the element. Instead, the props must change in order for
 * the rendered element to be updated.
 *
 * The rendered element will be initialized as unchecked (or `defaultChecked`)
 * with an empty value (or `defaultValue`).
 *
 * @see http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
 */
var reactdomlibReactDOMInput__ReactDOMInput = {
  getHostProps: function (inst, props) {
    var value = reactdomlibReactDOMInput__LinkedValueUtils.getValue(props);
    var checked = reactdomlibReactDOMInput__LinkedValueUtils.getChecked(props);

    var hostProps = reactdomlibReactDOMInput___assign({
      // Make sure we set .type before any other properties (setting .value
      // before .type means .value is lost in IE11 and below)
      type: undefined,
      // Make sure we set .step before .value (setting .value before .step
      // means .value is rounded on mount, based upon step precision)
      step: undefined,
      // Make sure we set .min & .max before .value (to ensure proper order
      // in corner cases such as min or max deriving from value, e.g. Issue #7170)
      min: undefined,
      max: undefined
    }, props, {
      defaultChecked: undefined,
      defaultValue: undefined,
      value: value != null ? value : inst._wrapperState.initialValue,
      checked: checked != null ? checked : inst._wrapperState.initialChecked,
      onChange: inst._wrapperState.onChange
    });

    return hostProps;
  },

  mountWrapper: function (inst, props) {
    if ('development' !== 'production') {
      reactdomlibReactDOMInput__LinkedValueUtils.checkPropTypes('input', props, inst._currentElement._owner);

      var owner = inst._currentElement._owner;

      if (props.valueLink !== undefined && !reactdomlibReactDOMInput__didWarnValueLink) {
        'development' !== 'production' ? reactdomlibReactDOMInput__warning(false, '`valueLink` prop on `input` is deprecated; set `value` and `onChange` instead.') : void 0;
        reactdomlibReactDOMInput__didWarnValueLink = true;
      }
      if (props.checkedLink !== undefined && !reactdomlibReactDOMInput__didWarnCheckedLink) {
        'development' !== 'production' ? reactdomlibReactDOMInput__warning(false, '`checkedLink` prop on `input` is deprecated; set `value` and `onChange` instead.') : void 0;
        reactdomlibReactDOMInput__didWarnCheckedLink = true;
      }
      if (props.checked !== undefined && props.defaultChecked !== undefined && !reactdomlibReactDOMInput__didWarnCheckedDefaultChecked) {
        'development' !== 'production' ? reactdomlibReactDOMInput__warning(false, '%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', owner && owner.getName() || 'A component', props.type) : void 0;
        reactdomlibReactDOMInput__didWarnCheckedDefaultChecked = true;
      }
      if (props.value !== undefined && props.defaultValue !== undefined && !reactdomlibReactDOMInput__didWarnValueDefaultValue) {
        'development' !== 'production' ? reactdomlibReactDOMInput__warning(false, '%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', owner && owner.getName() || 'A component', props.type) : void 0;
        reactdomlibReactDOMInput__didWarnValueDefaultValue = true;
      }
    }

    var defaultValue = props.defaultValue;
    inst._wrapperState = {
      initialChecked: props.checked != null ? props.checked : props.defaultChecked,
      initialValue: props.value != null ? props.value : defaultValue,
      listeners: null,
      onChange: reactdomlibReactDOMInput___handleChange.bind(inst),
      controlled: reactdomlibReactDOMInput__isControlled(props)
    };
  },

  updateWrapper: function (inst) {
    var props = inst._currentElement.props;

    if ('development' !== 'production') {
      var controlled = reactdomlibReactDOMInput__isControlled(props);
      var owner = inst._currentElement._owner;

      if (!inst._wrapperState.controlled && controlled && !reactdomlibReactDOMInput__didWarnUncontrolledToControlled) {
        'development' !== 'production' ? reactdomlibReactDOMInput__warning(false, '%s is changing an uncontrolled input of type %s to be controlled. ' + 'Input elements should not switch from uncontrolled to controlled (or vice versa). ' + 'Decide between using a controlled or uncontrolled input ' + 'element for the lifetime of the component. More info: https://fb.me/react-controlled-components', owner && owner.getName() || 'A component', props.type) : void 0;
        reactdomlibReactDOMInput__didWarnUncontrolledToControlled = true;
      }
      if (inst._wrapperState.controlled && !controlled && !reactdomlibReactDOMInput__didWarnControlledToUncontrolled) {
        'development' !== 'production' ? reactdomlibReactDOMInput__warning(false, '%s is changing a controlled input of type %s to be uncontrolled. ' + 'Input elements should not switch from controlled to uncontrolled (or vice versa). ' + 'Decide between using a controlled or uncontrolled input ' + 'element for the lifetime of the component. More info: https://fb.me/react-controlled-components', owner && owner.getName() || 'A component', props.type) : void 0;
        reactdomlibReactDOMInput__didWarnControlledToUncontrolled = true;
      }
    }

    // TODO: Shouldn't this be getChecked(props)?
    var checked = props.checked;
    if (checked != null) {
      reactdomlibReactDOMInput__DOMPropertyOperations.setValueForProperty(reactdomlibReactDOMInput__ReactDOMComponentTree.getNodeFromInstance(inst), 'checked', checked || false);
    }

    var node = reactdomlibReactDOMInput__ReactDOMComponentTree.getNodeFromInstance(inst);
    var value = reactdomlibReactDOMInput__LinkedValueUtils.getValue(props);
    if (value != null) {
      if (value === 0 && node.value === '') {
        node.value = '0';
        // Note: IE9 reports a number inputs as 'text', so check props instead.
      } else if (props.type === 'number') {
        // Simulate `input.valueAsNumber`. IE9 does not support it
        var valueAsNumber = parseFloat(node.value, 10) || 0;

        if (
        // eslint-disable-next-line
        value != valueAsNumber ||
        // eslint-disable-next-line
        value == valueAsNumber && node.value != value) {
          // Cast `value` to a string to ensure the value is set correctly. While
          // browsers typically do this as necessary, jsdom doesn't.
          node.value = '' + value;
        }
      } else if (node.value !== '' + value) {
        // Cast `value` to a string to ensure the value is set correctly. While
        // browsers typically do this as necessary, jsdom doesn't.
        node.value = '' + value;
      }
    } else {
      if (props.value == null && props.defaultValue != null) {
        // In Chrome, assigning defaultValue to certain input types triggers input validation.
        // For number inputs, the display value loses trailing decimal points. For email inputs,
        // Chrome raises "The specified value <x> is not a valid email address".
        //
        // Here we check to see if the defaultValue has actually changed, avoiding these problems
        // when the user is inputting text
        //
        // https://github.com/facebook/react/issues/7253
        if (node.defaultValue !== '' + props.defaultValue) {
          node.defaultValue = '' + props.defaultValue;
        }
      }
      if (props.checked == null && props.defaultChecked != null) {
        node.defaultChecked = !!props.defaultChecked;
      }
    }
  },

  postMountWrapper: function (inst) {
    var props = inst._currentElement.props;

    // This is in postMount because we need access to the DOM node, which is not
    // available until after the component has mounted.
    var node = reactdomlibReactDOMInput__ReactDOMComponentTree.getNodeFromInstance(inst);

    // Detach value from defaultValue. We won't do anything if we're working on
    // submit or reset inputs as those values & defaultValues are linked. They
    // are not resetable nodes so this operation doesn't matter and actually
    // removes browser-default values (eg "Submit Query") when no value is
    // provided.

    switch (props.type) {
      case 'submit':
      case 'reset':
        break;
      case 'color':
      case 'date':
      case 'datetime':
      case 'datetime-local':
      case 'month':
      case 'time':
      case 'week':
        // This fixes the no-show issue on iOS Safari and Android Chrome:
        // https://github.com/facebook/react/issues/7233
        node.value = '';
        node.value = node.defaultValue;
        break;
      default:
        node.value = node.value;
        break;
    }

    // Normally, we'd just do `node.checked = node.checked` upon initial mount, less this bug
    // this is needed to work around a chrome bug where setting defaultChecked
    // will sometimes influence the value of checked (even after detachment).
    // Reference: https://bugs.chromium.org/p/chromium/issues/detail?id=608416
    // We need to temporarily unset name to avoid disrupting radio button groups.
    var name = node.name;
    if (name !== '') {
      node.name = '';
    }
    node.defaultChecked = !node.defaultChecked;
    node.defaultChecked = !node.defaultChecked;
    if (name !== '') {
      node.name = name;
    }
  }
};

function reactdomlibReactDOMInput___handleChange(event) {
  var props = this._currentElement.props;

  var returnValue = reactdomlibReactDOMInput__LinkedValueUtils.executeOnChange(props, event);

  // Here we use asap to wait until all updates have propagated, which
  // is important when using controlled components within layers:
  // https://github.com/facebook/react/issues/1698
  reactdomlibReactDOMInput__ReactUpdates.asap(reactdomlibReactDOMInput__forceUpdateIfMounted, this);

  var name = props.name;
  if (props.type === 'radio' && name != null) {
    var rootNode = reactdomlibReactDOMInput__ReactDOMComponentTree.getNodeFromInstance(this);
    var queryRoot = rootNode;

    while (queryRoot.parentNode) {
      queryRoot = queryRoot.parentNode;
    }

    // If `rootNode.form` was non-null, then we could try `form.elements`,
    // but that sometimes behaves strangely in IE8. We could also try using
    // `form.getElementsByName`, but that will only return direct children
    // and won't include inputs that use the HTML5 `form=` attribute. Since
    // the input might not even be in a form, let's just use the global
    // `querySelectorAll` to ensure we don't miss anything.
    var group = queryRoot.querySelectorAll('input[name=' + JSON.stringify('' + name) + '][type="radio"]');

    for (var i = 0; i < group.length; i++) {
      var otherNode = group[i];
      if (otherNode === rootNode || otherNode.form !== rootNode.form) {
        continue;
      }
      // This will throw if radio buttons rendered by different copies of React
      // and the same name are rendered into the same form (same as #1939).
      // That's probably okay; we don't support it just as we don't support
      // mixing React radio buttons with non-React ones.
      var otherInstance = reactdomlibReactDOMInput__ReactDOMComponentTree.getInstanceFromNode(otherNode);
      !otherInstance ? 'development' !== 'production' ? reactdomlibReactDOMInput__invariant(false, 'ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.') : reactdomlibReactDOMInput___prodInvariant('90') : void 0;
      // If this is a controlled radio button group, forcing the input that
      // was previously checked to update will cause it to be come re-checked
      // as appropriate.
      reactdomlibReactDOMInput__ReactUpdates.asap(reactdomlibReactDOMInput__forceUpdateIfMounted, otherInstance);
    }
  }

  return returnValue;
}

$m['react-dom/lib/ReactDOMInput'].exports = reactdomlibReactDOMInput__ReactDOMInput;
/*≠≠ node_modules/@yr/component/nod...react-dom/lib/ReactDOMInput.js ≠≠*/


/*== node_modules/fbjs/lib/hyphenateStyleName.js ==*/
$m['fbjs/lib/hyphenateStyleName'] = { exports: {} };
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var fbjslibhyphenateStyleName__hyphenate = $m['fbjs/lib/hyphenate'].exports;

var fbjslibhyphenateStyleName__msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function fbjslibhyphenateStyleName__hyphenateStyleName(string) {
  return fbjslibhyphenateStyleName__hyphenate(string).replace(fbjslibhyphenateStyleName__msPattern, '-ms-');
}

$m['fbjs/lib/hyphenateStyleName'].exports = fbjslibhyphenateStyleName__hyphenateStyleName;
/*≠≠ node_modules/fbjs/lib/hyphenateStyleName.js ≠≠*/


/*== node_modules/@yr/component/nod...dom/lib/dangerousStyleValue.js ==*/
$m['react-dom/lib/dangerousStyleValue'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibdangerousStyleValue__CSSProperty = $m['react-dom/lib/CSSProperty'].exports;
var reactdomlibdangerousStyleValue__warning = $m['fbjs/lib/warning'].exports;

var reactdomlibdangerousStyleValue__isUnitlessNumber = reactdomlibdangerousStyleValue__CSSProperty.isUnitlessNumber;
var reactdomlibdangerousStyleValue__styleWarnings = {};

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @param {ReactDOMComponent} component
 * @return {string} Normalized style value with dimensions applied.
 */
function reactdomlibdangerousStyleValue__dangerousStyleValue(name, value, component, isCustomProperty) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901

  var isEmpty = value == null || typeof value === 'boolean' || value === '';
  if (isEmpty) {
    return '';
  }

  var isNonNumeric = isNaN(value);
  if (isCustomProperty || isNonNumeric || value === 0 || reactdomlibdangerousStyleValue__isUnitlessNumber.hasOwnProperty(name) && reactdomlibdangerousStyleValue__isUnitlessNumber[name]) {
    return '' + value; // cast to string
  }

  if (typeof value === 'string') {
    if ('development' !== 'production') {
      // Allow '0' to pass through without warning. 0 is already special and
      // doesn't require units, so we don't need to warn about it.
      if (component && value !== '0') {
        var owner = component._currentElement._owner;
        var ownerName = owner ? owner.getName() : null;
        if (ownerName && !reactdomlibdangerousStyleValue__styleWarnings[ownerName]) {
          reactdomlibdangerousStyleValue__styleWarnings[ownerName] = {};
        }
        var warned = false;
        if (ownerName) {
          var warnings = reactdomlibdangerousStyleValue__styleWarnings[ownerName];
          warned = warnings[name];
          if (!warned) {
            warnings[name] = true;
          }
        }
        if (!warned) {
          'development' !== 'production' ? reactdomlibdangerousStyleValue__warning(false, 'a `%s` tag (owner: `%s`) was passed a numeric string value ' + 'for CSS property `%s` (value: `%s`) which will be treated ' + 'as a unitless number in a future version of React.', component._currentElement.type, ownerName || 'unknown', name, value) : void 0;
        }
      }
    }
    value = value.trim();
  }
  return value + 'px';
}

$m['react-dom/lib/dangerousStyleValue'].exports = reactdomlibdangerousStyleValue__dangerousStyleValue;
/*≠≠ node_modules/@yr/component/nod...dom/lib/dangerousStyleValue.js ≠≠*/


/*== node_modules/fbjs/lib/camelizeStyleName.js ==*/
$m['fbjs/lib/camelizeStyleName'] = { exports: {} };
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var fbjslibcamelizeStyleName__camelize = $m['fbjs/lib/camelize'].exports;

var fbjslibcamelizeStyleName__msPattern = /^-ms-/;

/**
 * Camelcases a hyphenated CSS property name, for example:
 *
 *   > camelizeStyleName('background-color')
 *   < "backgroundColor"
 *   > camelizeStyleName('-moz-transition')
 *   < "MozTransition"
 *   > camelizeStyleName('-ms-transition')
 *   < "msTransition"
 *
 * As Andi Smith suggests
 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
 * is converted to lowercase `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function fbjslibcamelizeStyleName__camelizeStyleName(string) {
  return fbjslibcamelizeStyleName__camelize(string.replace(fbjslibcamelizeStyleName__msPattern, 'ms-'));
}

$m['fbjs/lib/camelizeStyleName'].exports = fbjslibcamelizeStyleName__camelizeStyleName;
/*≠≠ node_modules/fbjs/lib/camelizeStyleName.js ≠≠*/


/*== node_modules/@yr/component/nod...m/lib/CSSPropertyOperations.js ==*/
$m['react-dom/lib/CSSPropertyOperations'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibCSSPropertyOperations__CSSProperty = $m['react-dom/lib/CSSProperty'].exports;
var reactdomlibCSSPropertyOperations__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;
var reactdomlibCSSPropertyOperations__ReactInstrumentation = $m['react-dom/lib/ReactInstrumentation'].exports;

var reactdomlibCSSPropertyOperations__camelizeStyleName = $m['fbjs/lib/camelizeStyleName'].exports;
var reactdomlibCSSPropertyOperations__dangerousStyleValue = $m['react-dom/lib/dangerousStyleValue'].exports;
var reactdomlibCSSPropertyOperations__hyphenateStyleName = $m['fbjs/lib/hyphenateStyleName'].exports;
var reactdomlibCSSPropertyOperations__memoizeStringOnly = $m['fbjs/lib/memoizeStringOnly'].exports;
var reactdomlibCSSPropertyOperations__warning = $m['fbjs/lib/warning'].exports;

var reactdomlibCSSPropertyOperations__processStyleName = reactdomlibCSSPropertyOperations__memoizeStringOnly(function (styleName) {
  return reactdomlibCSSPropertyOperations__hyphenateStyleName(styleName);
});

var reactdomlibCSSPropertyOperations__hasShorthandPropertyBug = false;
var reactdomlibCSSPropertyOperations__styleFloatAccessor = 'cssFloat';
if (reactdomlibCSSPropertyOperations__ExecutionEnvironment.canUseDOM) {
  var reactdomlibCSSPropertyOperations__tempStyle = document.createElement('div').style;
  try {
    // IE8 throws "Invalid argument." if resetting shorthand style properties.
    reactdomlibCSSPropertyOperations__tempStyle.font = '';
  } catch (e) {
    reactdomlibCSSPropertyOperations__hasShorthandPropertyBug = true;
  }
  // IE8 only supports accessing cssFloat (standard) as styleFloat
  if (document.documentElement.style.cssFloat === undefined) {
    reactdomlibCSSPropertyOperations__styleFloatAccessor = 'styleFloat';
  }
}

if ('development' !== 'production') {
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var reactdomlibCSSPropertyOperations__badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

  // style values shouldn't contain a semicolon
  var reactdomlibCSSPropertyOperations__badStyleValueWithSemicolonPattern = /;\s*$/;

  var reactdomlibCSSPropertyOperations__warnedStyleNames = {};
  var reactdomlibCSSPropertyOperations__warnedStyleValues = {};
  var reactdomlibCSSPropertyOperations__warnedForNaNValue = false;

  var reactdomlibCSSPropertyOperations__warnHyphenatedStyleName = function (name, owner) {
    if (reactdomlibCSSPropertyOperations__warnedStyleNames.hasOwnProperty(name) && reactdomlibCSSPropertyOperations__warnedStyleNames[name]) {
      return;
    }

    reactdomlibCSSPropertyOperations__warnedStyleNames[name] = true;
    'development' !== 'production' ? reactdomlibCSSPropertyOperations__warning(false, 'Unsupported style property %s. Did you mean %s?%s', name, reactdomlibCSSPropertyOperations__camelizeStyleName(name), reactdomlibCSSPropertyOperations__checkRenderMessage(owner)) : void 0;
  };

  var reactdomlibCSSPropertyOperations__warnBadVendoredStyleName = function (name, owner) {
    if (reactdomlibCSSPropertyOperations__warnedStyleNames.hasOwnProperty(name) && reactdomlibCSSPropertyOperations__warnedStyleNames[name]) {
      return;
    }

    reactdomlibCSSPropertyOperations__warnedStyleNames[name] = true;
    'development' !== 'production' ? reactdomlibCSSPropertyOperations__warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), reactdomlibCSSPropertyOperations__checkRenderMessage(owner)) : void 0;
  };

  var reactdomlibCSSPropertyOperations__warnStyleValueWithSemicolon = function (name, value, owner) {
    if (reactdomlibCSSPropertyOperations__warnedStyleValues.hasOwnProperty(value) && reactdomlibCSSPropertyOperations__warnedStyleValues[value]) {
      return;
    }

    reactdomlibCSSPropertyOperations__warnedStyleValues[value] = true;
    'development' !== 'production' ? reactdomlibCSSPropertyOperations__warning(false, "Style property values shouldn't contain a semicolon.%s " + 'Try "%s: %s" instead.', reactdomlibCSSPropertyOperations__checkRenderMessage(owner), name, value.replace(reactdomlibCSSPropertyOperations__badStyleValueWithSemicolonPattern, '')) : void 0;
  };

  var reactdomlibCSSPropertyOperations__warnStyleValueIsNaN = function (name, value, owner) {
    if (reactdomlibCSSPropertyOperations__warnedForNaNValue) {
      return;
    }

    reactdomlibCSSPropertyOperations__warnedForNaNValue = true;
    'development' !== 'production' ? reactdomlibCSSPropertyOperations__warning(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, reactdomlibCSSPropertyOperations__checkRenderMessage(owner)) : void 0;
  };

  var reactdomlibCSSPropertyOperations__checkRenderMessage = function (owner) {
    if (owner) {
      var name = owner.getName();
      if (name) {
        return ' Check the render method of `' + name + '`.';
      }
    }
    return '';
  };

  /**
   * @param {string} name
   * @param {*} value
   * @param {ReactDOMComponent} component
   */
  var reactdomlibCSSPropertyOperations__warnValidStyle = function (name, value, component) {
    var owner;
    if (component) {
      owner = component._currentElement._owner;
    }
    if (name.indexOf('-') > -1) {
      reactdomlibCSSPropertyOperations__warnHyphenatedStyleName(name, owner);
    } else if (reactdomlibCSSPropertyOperations__badVendoredStyleNamePattern.test(name)) {
      reactdomlibCSSPropertyOperations__warnBadVendoredStyleName(name, owner);
    } else if (reactdomlibCSSPropertyOperations__badStyleValueWithSemicolonPattern.test(value)) {
      reactdomlibCSSPropertyOperations__warnStyleValueWithSemicolon(name, value, owner);
    }

    if (typeof value === 'number' && isNaN(value)) {
      reactdomlibCSSPropertyOperations__warnStyleValueIsNaN(name, value, owner);
    }
  };
}

/**
 * Operations for dealing with CSS properties.
 */
var reactdomlibCSSPropertyOperations__CSSPropertyOperations = {
  /**
   * Serializes a mapping of style properties for use as inline styles:
   *
   *   > createMarkupForStyles({width: '200px', height: 0})
   *   "width:200px;height:0;"
   *
   * Undefined values are ignored so that declarative programming is easier.
   * The result should be HTML-escaped before insertion into the DOM.
   *
   * @param {object} styles
   * @param {ReactDOMComponent} component
   * @return {?string}
   */
  createMarkupForStyles: function (styles, component) {
    var serialized = '';
    for (var styleName in styles) {
      if (!styles.hasOwnProperty(styleName)) {
        continue;
      }
      var isCustomProperty = styleName.indexOf('--') === 0;
      var styleValue = styles[styleName];
      if ('development' !== 'production') {
        if (!isCustomProperty) {
          reactdomlibCSSPropertyOperations__warnValidStyle(styleName, styleValue, component);
        }
      }
      if (styleValue != null) {
        serialized += reactdomlibCSSPropertyOperations__processStyleName(styleName) + ':';
        serialized += reactdomlibCSSPropertyOperations__dangerousStyleValue(styleName, styleValue, component, isCustomProperty) + ';';
      }
    }
    return serialized || null;
  },

  /**
   * Sets the value for multiple styles on a node.  If a value is specified as
   * '' (empty string), the corresponding style property will be unset.
   *
   * @param {DOMElement} node
   * @param {object} styles
   * @param {ReactDOMComponent} component
   */
  setValueForStyles: function (node, styles, component) {
    if ('development' !== 'production') {
      reactdomlibCSSPropertyOperations__ReactInstrumentation.debugTool.onHostOperation({
        instanceID: component._debugID,
        type: 'update styles',
        payload: styles
      });
    }

    var style = node.style;
    for (var styleName in styles) {
      if (!styles.hasOwnProperty(styleName)) {
        continue;
      }
      var isCustomProperty = styleName.indexOf('--') === 0;
      if ('development' !== 'production') {
        if (!isCustomProperty) {
          reactdomlibCSSPropertyOperations__warnValidStyle(styleName, styles[styleName], component);
        }
      }
      var styleValue = reactdomlibCSSPropertyOperations__dangerousStyleValue(styleName, styles[styleName], component, isCustomProperty);
      if (styleName === 'float' || styleName === 'cssFloat') {
        styleName = reactdomlibCSSPropertyOperations__styleFloatAccessor;
      }
      if (isCustomProperty) {
        style.setProperty(styleName, styleValue);
      } else if (styleValue) {
        style[styleName] = styleValue;
      } else {
        var expansion = reactdomlibCSSPropertyOperations__hasShorthandPropertyBug && reactdomlibCSSPropertyOperations__CSSProperty.shorthandPropertyExpansions[styleName];
        if (expansion) {
          // Shorthand property that IE8 won't like unsetting, so unset each
          // component to placate it
          for (var individualStyleName in expansion) {
            style[individualStyleName] = '';
          }
        } else {
          style[styleName] = '';
        }
      }
    }
  }
};

$m['react-dom/lib/CSSPropertyOperations'].exports = reactdomlibCSSPropertyOperations__CSSPropertyOperations;
/*≠≠ node_modules/@yr/component/nod...m/lib/CSSPropertyOperations.js ≠≠*/


/*== node_modules/@yr/component/nod...eact-dom/lib/AutoFocusUtils.js ==*/
$m['react-dom/lib/AutoFocusUtils'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibAutoFocusUtils__ReactDOMComponentTree = $m['react-dom/lib/ReactDOMComponentTree'].exports;

var reactdomlibAutoFocusUtils__focusNode = $m['fbjs/lib/focusNode'].exports;

var reactdomlibAutoFocusUtils__AutoFocusUtils = {
  focusDOMComponent: function () {
    reactdomlibAutoFocusUtils__focusNode(reactdomlibAutoFocusUtils__ReactDOMComponentTree.getNodeFromInstance(this));
  }
};

$m['react-dom/lib/AutoFocusUtils'].exports = reactdomlibAutoFocusUtils__AutoFocusUtils;
/*≠≠ node_modules/@yr/component/nod...eact-dom/lib/AutoFocusUtils.js ≠≠*/


/*== node_modules/@yr/component/nod...t-dom/lib/ReactDOMComponent.js ==*/
$m['react-dom/lib/ReactDOMComponent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/* global hasOwnProperty:true */

var reactdomlibReactDOMComponent___prodInvariant = $m['react-dom/lib/reactProdInvariant'].exports,
    reactdomlibReactDOMComponent___assign = $m['object-assign'].exports;

var reactdomlibReactDOMComponent__AutoFocusUtils = $m['react-dom/lib/AutoFocusUtils'].exports;
var reactdomlibReactDOMComponent__CSSPropertyOperations = $m['react-dom/lib/CSSPropertyOperations'].exports;
var reactdomlibReactDOMComponent__DOMLazyTree = $m['react-dom/lib/DOMLazyTree'].exports;
var reactdomlibReactDOMComponent__DOMNamespaces = $m['react-dom/lib/DOMNamespaces'].exports;
var reactdomlibReactDOMComponent__DOMProperty = $m['react-dom/lib/DOMProperty'].exports;
var reactdomlibReactDOMComponent__DOMPropertyOperations = $m['react-dom/lib/DOMPropertyOperations'].exports;
var reactdomlibReactDOMComponent__EventPluginHub = $m['react-dom/lib/EventPluginHub'].exports;
var reactdomlibReactDOMComponent__EventPluginRegistry = $m['react-dom/lib/EventPluginRegistry'].exports;
var reactdomlibReactDOMComponent__ReactBrowserEventEmitter = $m['react-dom/lib/ReactBrowserEventEmitter'].exports;
var reactdomlibReactDOMComponent__ReactDOMComponentFlags = $m['react-dom/lib/ReactDOMComponentFlags'].exports;
var reactdomlibReactDOMComponent__ReactDOMComponentTree = $m['react-dom/lib/ReactDOMComponentTree'].exports;
var reactdomlibReactDOMComponent__ReactDOMInput = $m['react-dom/lib/ReactDOMInput'].exports;
var reactdomlibReactDOMComponent__ReactDOMOption = $m['react-dom/lib/ReactDOMOption'].exports;
var reactdomlibReactDOMComponent__ReactDOMSelect = $m['react-dom/lib/ReactDOMSelect'].exports;
var reactdomlibReactDOMComponent__ReactDOMTextarea = $m['react-dom/lib/ReactDOMTextarea'].exports;
var reactdomlibReactDOMComponent__ReactInstrumentation = $m['react-dom/lib/ReactInstrumentation'].exports;
var reactdomlibReactDOMComponent__ReactMultiChild = $m['react-dom/lib/ReactMultiChild'].exports;
var reactdomlibReactDOMComponent__ReactServerRenderingTransaction = $m['react-dom/lib/ReactServerRenderingTransaction'].exports;

var reactdomlibReactDOMComponent__emptyFunction = $m['fbjs/lib/emptyFunction'].exports;
var reactdomlibReactDOMComponent__escapeTextContentForBrowser = $m['react-dom/lib/escapeTextContentForBrowser'].exports;
var reactdomlibReactDOMComponent__invariant = $m['fbjs/lib/invariant'].exports;
var reactdomlibReactDOMComponent__isEventSupported = $m['react-dom/lib/isEventSupported'].exports;
var reactdomlibReactDOMComponent__shallowEqual = $m['fbjs/lib/shallowEqual'].exports;
var reactdomlibReactDOMComponent__inputValueTracking = $m['react-dom/lib/inputValueTracking'].exports;
var reactdomlibReactDOMComponent__validateDOMNesting = $m['react-dom/lib/validateDOMNesting'].exports;
var reactdomlibReactDOMComponent__warning = $m['fbjs/lib/warning'].exports;

var reactdomlibReactDOMComponent__Flags = reactdomlibReactDOMComponent__ReactDOMComponentFlags;
var reactdomlibReactDOMComponent__deleteListener = reactdomlibReactDOMComponent__EventPluginHub.deleteListener;
var reactdomlibReactDOMComponent__getNode = reactdomlibReactDOMComponent__ReactDOMComponentTree.getNodeFromInstance;
var reactdomlibReactDOMComponent__listenTo = reactdomlibReactDOMComponent__ReactBrowserEventEmitter.listenTo;
var reactdomlibReactDOMComponent__registrationNameModules = reactdomlibReactDOMComponent__EventPluginRegistry.registrationNameModules;

// For quickly matching children type, to test if can be treated as content.
var reactdomlibReactDOMComponent__CONTENT_TYPES = { string: true, number: true };

var reactdomlibReactDOMComponent__STYLE = 'style';
var reactdomlibReactDOMComponent__HTML = '__html';
var reactdomlibReactDOMComponent__RESERVED_PROPS = {
  children: null,
  dangerouslySetInnerHTML: null,
  suppressContentEditableWarning: null
};

// Node type for document fragments (Node.DOCUMENT_FRAGMENT_NODE).
var reactdomlibReactDOMComponent__DOC_FRAGMENT_TYPE = 11;

function reactdomlibReactDOMComponent__getDeclarationErrorAddendum(internalInstance) {
  if (internalInstance) {
    var owner = internalInstance._currentElement._owner || null;
    if (owner) {
      var name = owner.getName();
      if (name) {
        return ' This DOM node was rendered by `' + name + '`.';
      }
    }
  }
  return '';
}

function reactdomlibReactDOMComponent__friendlyStringify(obj) {
  if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      return '[' + obj.map(reactdomlibReactDOMComponent__friendlyStringify).join(', ') + ']';
    } else {
      var pairs = [];
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var keyEscaped = /^[a-z$_][\w$_]*$/i.test(key) ? key : JSON.stringify(key);
          pairs.push(keyEscaped + ': ' + reactdomlibReactDOMComponent__friendlyStringify(obj[key]));
        }
      }
      return '{' + pairs.join(', ') + '}';
    }
  } else if (typeof obj === 'string') {
    return JSON.stringify(obj);
  } else if (typeof obj === 'function') {
    return '[function object]';
  }
  // Differs from JSON.stringify in that undefined because undefined and that
  // inf and nan don't become null
  return String(obj);
}

var reactdomlibReactDOMComponent__styleMutationWarning = {};

function reactdomlibReactDOMComponent__checkAndWarnForMutatedStyle(style1, style2, component) {
  if (style1 == null || style2 == null) {
    return;
  }
  if (reactdomlibReactDOMComponent__shallowEqual(style1, style2)) {
    return;
  }

  var componentName = component._tag;
  var owner = component._currentElement._owner;
  var ownerName;
  if (owner) {
    ownerName = owner.getName();
  }

  var hash = ownerName + '|' + componentName;

  if (reactdomlibReactDOMComponent__styleMutationWarning.hasOwnProperty(hash)) {
    return;
  }

  reactdomlibReactDOMComponent__styleMutationWarning[hash] = true;

  'development' !== 'production' ? reactdomlibReactDOMComponent__warning(false, '`%s` was passed a style object that has previously been mutated. ' + 'Mutating `style` is deprecated. Consider cloning it beforehand. Check ' + 'the `render` %s. Previous style: %s. Mutated style: %s.', componentName, owner ? 'of `' + ownerName + '`' : 'using <' + componentName + '>', reactdomlibReactDOMComponent__friendlyStringify(style1), reactdomlibReactDOMComponent__friendlyStringify(style2)) : void 0;
}

/**
 * @param {object} component
 * @param {?object} props
 */
function reactdomlibReactDOMComponent__assertValidProps(component, props) {
  if (!props) {
    return;
  }
  // Note the use of `==` which checks for null or undefined.
  if (reactdomlibReactDOMComponent__voidElementTags[component._tag]) {
    !(props.children == null && props.dangerouslySetInnerHTML == null) ? 'development' !== 'production' ? reactdomlibReactDOMComponent__invariant(false, '%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s', component._tag, component._currentElement._owner ? ' Check the render method of ' + component._currentElement._owner.getName() + '.' : '') : reactdomlibReactDOMComponent___prodInvariant('137', component._tag, component._currentElement._owner ? ' Check the render method of ' + component._currentElement._owner.getName() + '.' : '') : void 0;
  }
  if (props.dangerouslySetInnerHTML != null) {
    !(props.children == null) ? 'development' !== 'production' ? reactdomlibReactDOMComponent__invariant(false, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.') : reactdomlibReactDOMComponent___prodInvariant('60') : void 0;
    !(typeof props.dangerouslySetInnerHTML === 'object' && reactdomlibReactDOMComponent__HTML in props.dangerouslySetInnerHTML) ? 'development' !== 'production' ? reactdomlibReactDOMComponent__invariant(false, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.') : reactdomlibReactDOMComponent___prodInvariant('61') : void 0;
  }
  if ('development' !== 'production') {
    'development' !== 'production' ? reactdomlibReactDOMComponent__warning(props.innerHTML == null, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.') : void 0;
    'development' !== 'production' ? reactdomlibReactDOMComponent__warning(props.suppressContentEditableWarning || !props.contentEditable || props.children == null, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.') : void 0;
    'development' !== 'production' ? reactdomlibReactDOMComponent__warning(props.onFocusIn == null && props.onFocusOut == null, 'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.') : void 0;
  }
  !(props.style == null || typeof props.style === 'object') ? 'development' !== 'production' ? reactdomlibReactDOMComponent__invariant(false, 'The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + \'em\'}} when using JSX.%s', reactdomlibReactDOMComponent__getDeclarationErrorAddendum(component)) : reactdomlibReactDOMComponent___prodInvariant('62', reactdomlibReactDOMComponent__getDeclarationErrorAddendum(component)) : void 0;
}

function reactdomlibReactDOMComponent__enqueuePutListener(inst, registrationName, listener, transaction) {
  if (transaction instanceof reactdomlibReactDOMComponent__ReactServerRenderingTransaction) {
    return;
  }
  if ('development' !== 'production') {
    // IE8 has no API for event capturing and the `onScroll` event doesn't
    // bubble.
    'development' !== 'production' ? reactdomlibReactDOMComponent__warning(registrationName !== 'onScroll' || reactdomlibReactDOMComponent__isEventSupported('scroll', true), "This browser doesn't support the `onScroll` event") : void 0;
  }
  var containerInfo = inst._hostContainerInfo;
  var isDocumentFragment = containerInfo._node && containerInfo._node.nodeType === reactdomlibReactDOMComponent__DOC_FRAGMENT_TYPE;
  var doc = isDocumentFragment ? containerInfo._node : containerInfo._ownerDocument;
  reactdomlibReactDOMComponent__listenTo(registrationName, doc);
  transaction.getReactMountReady().enqueue(reactdomlibReactDOMComponent__putListener, {
    inst: inst,
    registrationName: registrationName,
    listener: listener
  });
}

function reactdomlibReactDOMComponent__putListener() {
  var listenerToPut = this;
  reactdomlibReactDOMComponent__EventPluginHub.putListener(listenerToPut.inst, listenerToPut.registrationName, listenerToPut.listener);
}

function reactdomlibReactDOMComponent__inputPostMount() {
  var inst = this;
  reactdomlibReactDOMComponent__ReactDOMInput.postMountWrapper(inst);
}

function reactdomlibReactDOMComponent__textareaPostMount() {
  var inst = this;
  reactdomlibReactDOMComponent__ReactDOMTextarea.postMountWrapper(inst);
}

function reactdomlibReactDOMComponent__optionPostMount() {
  var inst = this;
  reactdomlibReactDOMComponent__ReactDOMOption.postMountWrapper(inst);
}

var reactdomlibReactDOMComponent__setAndValidateContentChildDev = reactdomlibReactDOMComponent__emptyFunction;
if ('development' !== 'production') {
  reactdomlibReactDOMComponent__setAndValidateContentChildDev = function (content) {
    var hasExistingContent = this._contentDebugID != null;
    var debugID = this._debugID;
    // This ID represents the inlined child that has no backing instance:
    var contentDebugID = -debugID;

    if (content == null) {
      if (hasExistingContent) {
        reactdomlibReactDOMComponent__ReactInstrumentation.debugTool.onUnmountComponent(this._contentDebugID);
      }
      this._contentDebugID = null;
      return;
    }

    reactdomlibReactDOMComponent__validateDOMNesting(null, String(content), this, this._ancestorInfo);
    this._contentDebugID = contentDebugID;
    if (hasExistingContent) {
      reactdomlibReactDOMComponent__ReactInstrumentation.debugTool.onBeforeUpdateComponent(contentDebugID, content);
      reactdomlibReactDOMComponent__ReactInstrumentation.debugTool.onUpdateComponent(contentDebugID);
    } else {
      reactdomlibReactDOMComponent__ReactInstrumentation.debugTool.onBeforeMountComponent(contentDebugID, content, debugID);
      reactdomlibReactDOMComponent__ReactInstrumentation.debugTool.onMountComponent(contentDebugID);
      reactdomlibReactDOMComponent__ReactInstrumentation.debugTool.onSetChildren(debugID, [contentDebugID]);
    }
  };
}

// There are so many media events, it makes sense to just
// maintain a list rather than create a `trapBubbledEvent` for each
var reactdomlibReactDOMComponent__mediaEvents = {
  topAbort: 'abort',
  topCanPlay: 'canplay',
  topCanPlayThrough: 'canplaythrough',
  topDurationChange: 'durationchange',
  topEmptied: 'emptied',
  topEncrypted: 'encrypted',
  topEnded: 'ended',
  topError: 'error',
  topLoadedData: 'loadeddata',
  topLoadedMetadata: 'loadedmetadata',
  topLoadStart: 'loadstart',
  topPause: 'pause',
  topPlay: 'play',
  topPlaying: 'playing',
  topProgress: 'progress',
  topRateChange: 'ratechange',
  topSeeked: 'seeked',
  topSeeking: 'seeking',
  topStalled: 'stalled',
  topSuspend: 'suspend',
  topTimeUpdate: 'timeupdate',
  topVolumeChange: 'volumechange',
  topWaiting: 'waiting'
};

function reactdomlibReactDOMComponent__trackInputValue() {
  reactdomlibReactDOMComponent__inputValueTracking.track(this);
}

function reactdomlibReactDOMComponent__trapBubbledEventsLocal() {
  var inst = this;
  // If a component renders to null or if another component fatals and causes
  // the state of the tree to be corrupted, `node` here can be null.
  !inst._rootNodeID ? 'development' !== 'production' ? reactdomlibReactDOMComponent__invariant(false, 'Must be mounted to trap events') : reactdomlibReactDOMComponent___prodInvariant('63') : void 0;
  var node = reactdomlibReactDOMComponent__getNode(inst);
  !node ? 'development' !== 'production' ? reactdomlibReactDOMComponent__invariant(false, 'trapBubbledEvent(...): Requires node to be rendered.') : reactdomlibReactDOMComponent___prodInvariant('64') : void 0;

  switch (inst._tag) {
    case 'iframe':
    case 'object':
      inst._wrapperState.listeners = [reactdomlibReactDOMComponent__ReactBrowserEventEmitter.trapBubbledEvent('topLoad', 'load', node)];
      break;
    case 'video':
    case 'audio':
      inst._wrapperState.listeners = [];
      // Create listener for each media event
      for (var event in reactdomlibReactDOMComponent__mediaEvents) {
        if (reactdomlibReactDOMComponent__mediaEvents.hasOwnProperty(event)) {
          inst._wrapperState.listeners.push(reactdomlibReactDOMComponent__ReactBrowserEventEmitter.trapBubbledEvent(event, reactdomlibReactDOMComponent__mediaEvents[event], node));
        }
      }
      break;
    case 'source':
      inst._wrapperState.listeners = [reactdomlibReactDOMComponent__ReactBrowserEventEmitter.trapBubbledEvent('topError', 'error', node)];
      break;
    case 'img':
      inst._wrapperState.listeners = [reactdomlibReactDOMComponent__ReactBrowserEventEmitter.trapBubbledEvent('topError', 'error', node), reactdomlibReactDOMComponent__ReactBrowserEventEmitter.trapBubbledEvent('topLoad', 'load', node)];
      break;
    case 'form':
      inst._wrapperState.listeners = [reactdomlibReactDOMComponent__ReactBrowserEventEmitter.trapBubbledEvent('topReset', 'reset', node), reactdomlibReactDOMComponent__ReactBrowserEventEmitter.trapBubbledEvent('topSubmit', 'submit', node)];
      break;
    case 'input':
    case 'select':
    case 'textarea':
      inst._wrapperState.listeners = [reactdomlibReactDOMComponent__ReactBrowserEventEmitter.trapBubbledEvent('topInvalid', 'invalid', node)];
      break;
  }
}

function reactdomlibReactDOMComponent__postUpdateSelectWrapper() {
  reactdomlibReactDOMComponent__ReactDOMSelect.postUpdateWrapper(this);
}

// For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special-case tags.

var reactdomlibReactDOMComponent__omittedCloseTags = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
  // NOTE: menuitem's close tag should be omitted, but that causes problems.
};

var reactdomlibReactDOMComponent__newlineEatingTags = {
  listing: true,
  pre: true,
  textarea: true
};

// For HTML, certain tags cannot have children. This has the same purpose as
// `omittedCloseTags` except that `menuitem` should still have its closing tag.

var reactdomlibReactDOMComponent__voidElementTags = reactdomlibReactDOMComponent___assign({
  menuitem: true
}, reactdomlibReactDOMComponent__omittedCloseTags);

// We accept any tag to be rendered but since this gets injected into arbitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name

var reactdomlibReactDOMComponent__VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
var reactdomlibReactDOMComponent__validatedTagCache = {};
var reactdomlibReactDOMComponent__hasOwnProperty = {}.hasOwnProperty;

function reactdomlibReactDOMComponent__validateDangerousTag(tag) {
  if (!reactdomlibReactDOMComponent__hasOwnProperty.call(reactdomlibReactDOMComponent__validatedTagCache, tag)) {
    !reactdomlibReactDOMComponent__VALID_TAG_REGEX.test(tag) ? 'development' !== 'production' ? reactdomlibReactDOMComponent__invariant(false, 'Invalid tag: %s', tag) : reactdomlibReactDOMComponent___prodInvariant('65', tag) : void 0;
    reactdomlibReactDOMComponent__validatedTagCache[tag] = true;
  }
}

function reactdomlibReactDOMComponent__isCustomComponent(tagName, props) {
  return tagName.indexOf('-') >= 0 || props.is != null;
}

var reactdomlibReactDOMComponent__globalIdCounter = 1;

/**
 * Creates a new React class that is idempotent and capable of containing other
 * React components. It accepts event listeners and DOM properties that are
 * valid according to `DOMProperty`.
 *
 *  - Event listeners: `onClick`, `onMouseDown`, etc.
 *  - DOM properties: `className`, `name`, `title`, etc.
 *
 * The `style` property functions differently from the DOM API. It accepts an
 * object mapping of style properties to values.
 *
 * @constructor ReactDOMComponent
 * @extends ReactMultiChild
 */
function reactdomlibReactDOMComponent__ReactDOMComponent(element) {
  var tag = element.type;
  reactdomlibReactDOMComponent__validateDangerousTag(tag);
  this._currentElement = element;
  this._tag = tag.toLowerCase();
  this._namespaceURI = null;
  this._renderedChildren = null;
  this._previousStyle = null;
  this._previousStyleCopy = null;
  this._hostNode = null;
  this._hostParent = null;
  this._rootNodeID = 0;
  this._domID = 0;
  this._hostContainerInfo = null;
  this._wrapperState = null;
  this._topLevelWrapper = null;
  this._flags = 0;
  if ('development' !== 'production') {
    this._ancestorInfo = null;
    reactdomlibReactDOMComponent__setAndValidateContentChildDev.call(this, null);
  }
}

reactdomlibReactDOMComponent__ReactDOMComponent.displayName = 'ReactDOMComponent';

reactdomlibReactDOMComponent__ReactDOMComponent.Mixin = {
  /**
   * Generates root tag markup then recurses. This method has side effects and
   * is not idempotent.
   *
   * @internal
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {?ReactDOMComponent} the parent component instance
   * @param {?object} info about the host container
   * @param {object} context
   * @return {string} The computed markup.
   */
  mountComponent: function (transaction, hostParent, hostContainerInfo, context) {
    this._rootNodeID = reactdomlibReactDOMComponent__globalIdCounter++;
    this._domID = hostContainerInfo._idCounter++;
    this._hostParent = hostParent;
    this._hostContainerInfo = hostContainerInfo;

    var props = this._currentElement.props;

    switch (this._tag) {
      case 'audio':
      case 'form':
      case 'iframe':
      case 'img':
      case 'link':
      case 'object':
      case 'source':
      case 'video':
        this._wrapperState = {
          listeners: null
        };
        transaction.getReactMountReady().enqueue(reactdomlibReactDOMComponent__trapBubbledEventsLocal, this);
        break;
      case 'input':
        reactdomlibReactDOMComponent__ReactDOMInput.mountWrapper(this, props, hostParent);
        props = reactdomlibReactDOMComponent__ReactDOMInput.getHostProps(this, props);
        transaction.getReactMountReady().enqueue(reactdomlibReactDOMComponent__trackInputValue, this);
        transaction.getReactMountReady().enqueue(reactdomlibReactDOMComponent__trapBubbledEventsLocal, this);
        break;
      case 'option':
        reactdomlibReactDOMComponent__ReactDOMOption.mountWrapper(this, props, hostParent);
        props = reactdomlibReactDOMComponent__ReactDOMOption.getHostProps(this, props);
        break;
      case 'select':
        reactdomlibReactDOMComponent__ReactDOMSelect.mountWrapper(this, props, hostParent);
        props = reactdomlibReactDOMComponent__ReactDOMSelect.getHostProps(this, props);
        transaction.getReactMountReady().enqueue(reactdomlibReactDOMComponent__trapBubbledEventsLocal, this);
        break;
      case 'textarea':
        reactdomlibReactDOMComponent__ReactDOMTextarea.mountWrapper(this, props, hostParent);
        props = reactdomlibReactDOMComponent__ReactDOMTextarea.getHostProps(this, props);
        transaction.getReactMountReady().enqueue(reactdomlibReactDOMComponent__trackInputValue, this);
        transaction.getReactMountReady().enqueue(reactdomlibReactDOMComponent__trapBubbledEventsLocal, this);
        break;
    }

    reactdomlibReactDOMComponent__assertValidProps(this, props);

    // We create tags in the namespace of their parent container, except HTML
    // tags get no namespace.
    var namespaceURI;
    var parentTag;
    if (hostParent != null) {
      namespaceURI = hostParent._namespaceURI;
      parentTag = hostParent._tag;
    } else if (hostContainerInfo._tag) {
      namespaceURI = hostContainerInfo._namespaceURI;
      parentTag = hostContainerInfo._tag;
    }
    if (namespaceURI == null || namespaceURI === reactdomlibReactDOMComponent__DOMNamespaces.svg && parentTag === 'foreignobject') {
      namespaceURI = reactdomlibReactDOMComponent__DOMNamespaces.html;
    }
    if (namespaceURI === reactdomlibReactDOMComponent__DOMNamespaces.html) {
      if (this._tag === 'svg') {
        namespaceURI = reactdomlibReactDOMComponent__DOMNamespaces.svg;
      } else if (this._tag === 'math') {
        namespaceURI = reactdomlibReactDOMComponent__DOMNamespaces.mathml;
      }
    }
    this._namespaceURI = namespaceURI;

    if ('development' !== 'production') {
      var parentInfo;
      if (hostParent != null) {
        parentInfo = hostParent._ancestorInfo;
      } else if (hostContainerInfo._tag) {
        parentInfo = hostContainerInfo._ancestorInfo;
      }
      if (parentInfo) {
        // parentInfo should always be present except for the top-level
        // component when server rendering
        reactdomlibReactDOMComponent__validateDOMNesting(this._tag, null, this, parentInfo);
      }
      this._ancestorInfo = reactdomlibReactDOMComponent__validateDOMNesting.updatedAncestorInfo(parentInfo, this._tag, this);
    }

    var mountImage;
    if (transaction.useCreateElement) {
      var ownerDocument = hostContainerInfo._ownerDocument;
      var el;
      if (namespaceURI === reactdomlibReactDOMComponent__DOMNamespaces.html) {
        if (this._tag === 'script') {
          // Create the script via .innerHTML so its "parser-inserted" flag is
          // set to true and it does not execute
          var div = ownerDocument.createElement('div');
          var type = this._currentElement.type;
          div.innerHTML = '<' + type + '></' + type + '>';
          el = div.removeChild(div.firstChild);
        } else if (props.is) {
          el = ownerDocument.createElement(this._currentElement.type, props.is);
        } else {
          // Separate else branch instead of using `props.is || undefined` above becuase of a Firefox bug.
          // See discussion in https://github.com/facebook/react/pull/6896
          // and discussion in https://bugzilla.mozilla.org/show_bug.cgi?id=1276240
          el = ownerDocument.createElement(this._currentElement.type);
        }
      } else {
        el = ownerDocument.createElementNS(namespaceURI, this._currentElement.type);
      }
      reactdomlibReactDOMComponent__ReactDOMComponentTree.precacheNode(this, el);
      this._flags |= reactdomlibReactDOMComponent__Flags.hasCachedChildNodes;
      if (!this._hostParent) {
        reactdomlibReactDOMComponent__DOMPropertyOperations.setAttributeForRoot(el);
      }
      this._updateDOMProperties(null, props, transaction);
      var lazyTree = reactdomlibReactDOMComponent__DOMLazyTree(el);
      this._createInitialChildren(transaction, props, context, lazyTree);
      mountImage = lazyTree;
    } else {
      var tagOpen = this._createOpenTagMarkupAndPutListeners(transaction, props);
      var tagContent = this._createContentMarkup(transaction, props, context);
      if (!tagContent && reactdomlibReactDOMComponent__omittedCloseTags[this._tag]) {
        mountImage = tagOpen + '/>';
      } else {
        mountImage = tagOpen + '>' + tagContent + '</' + this._currentElement.type + '>';
      }
    }

    switch (this._tag) {
      case 'input':
        transaction.getReactMountReady().enqueue(reactdomlibReactDOMComponent__inputPostMount, this);
        if (props.autoFocus) {
          transaction.getReactMountReady().enqueue(reactdomlibReactDOMComponent__AutoFocusUtils.focusDOMComponent, this);
        }
        break;
      case 'textarea':
        transaction.getReactMountReady().enqueue(reactdomlibReactDOMComponent__textareaPostMount, this);
        if (props.autoFocus) {
          transaction.getReactMountReady().enqueue(reactdomlibReactDOMComponent__AutoFocusUtils.focusDOMComponent, this);
        }
        break;
      case 'select':
        if (props.autoFocus) {
          transaction.getReactMountReady().enqueue(reactdomlibReactDOMComponent__AutoFocusUtils.focusDOMComponent, this);
        }
        break;
      case 'button':
        if (props.autoFocus) {
          transaction.getReactMountReady().enqueue(reactdomlibReactDOMComponent__AutoFocusUtils.focusDOMComponent, this);
        }
        break;
      case 'option':
        transaction.getReactMountReady().enqueue(reactdomlibReactDOMComponent__optionPostMount, this);
        break;
    }

    return mountImage;
  },

  /**
   * Creates markup for the open tag and all attributes.
   *
   * This method has side effects because events get registered.
   *
   * Iterating over object properties is faster than iterating over arrays.
   * @see http://jsperf.com/obj-vs-arr-iteration
   *
   * @private
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {object} props
   * @return {string} Markup of opening tag.
   */
  _createOpenTagMarkupAndPutListeners: function (transaction, props) {
    var ret = '<' + this._currentElement.type;

    for (var propKey in props) {
      if (!props.hasOwnProperty(propKey)) {
        continue;
      }
      var propValue = props[propKey];
      if (propValue == null) {
        continue;
      }
      if (reactdomlibReactDOMComponent__registrationNameModules.hasOwnProperty(propKey)) {
        if (propValue) {
          reactdomlibReactDOMComponent__enqueuePutListener(this, propKey, propValue, transaction);
        }
      } else {
        if (propKey === reactdomlibReactDOMComponent__STYLE) {
          if (propValue) {
            if ('development' !== 'production') {
              // See `_updateDOMProperties`. style block
              this._previousStyle = propValue;
            }
            propValue = this._previousStyleCopy = reactdomlibReactDOMComponent___assign({}, props.style);
          }
          propValue = reactdomlibReactDOMComponent__CSSPropertyOperations.createMarkupForStyles(propValue, this);
        }
        var markup = null;
        if (this._tag != null && reactdomlibReactDOMComponent__isCustomComponent(this._tag, props)) {
          if (!reactdomlibReactDOMComponent__RESERVED_PROPS.hasOwnProperty(propKey)) {
            markup = reactdomlibReactDOMComponent__DOMPropertyOperations.createMarkupForCustomAttribute(propKey, propValue);
          }
        } else {
          markup = reactdomlibReactDOMComponent__DOMPropertyOperations.createMarkupForProperty(propKey, propValue);
        }
        if (markup) {
          ret += ' ' + markup;
        }
      }
    }

    // For static pages, no need to put React ID and checksum. Saves lots of
    // bytes.
    if (transaction.renderToStaticMarkup) {
      return ret;
    }

    if (!this._hostParent) {
      ret += ' ' + reactdomlibReactDOMComponent__DOMPropertyOperations.createMarkupForRoot();
    }
    ret += ' ' + reactdomlibReactDOMComponent__DOMPropertyOperations.createMarkupForID(this._domID);
    return ret;
  },

  /**
   * Creates markup for the content between the tags.
   *
   * @private
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {object} props
   * @param {object} context
   * @return {string} Content markup.
   */
  _createContentMarkup: function (transaction, props, context) {
    var ret = '';

    // Intentional use of != to avoid catching zero/false.
    var innerHTML = props.dangerouslySetInnerHTML;
    if (innerHTML != null) {
      if (innerHTML.__html != null) {
        ret = innerHTML.__html;
      }
    } else {
      var contentToUse = reactdomlibReactDOMComponent__CONTENT_TYPES[typeof props.children] ? props.children : null;
      var childrenToUse = contentToUse != null ? null : props.children;
      if (contentToUse != null) {
        // TODO: Validate that text is allowed as a child of this node
        ret = reactdomlibReactDOMComponent__escapeTextContentForBrowser(contentToUse);
        if ('development' !== 'production') {
          reactdomlibReactDOMComponent__setAndValidateContentChildDev.call(this, contentToUse);
        }
      } else if (childrenToUse != null) {
        var mountImages = this.mountChildren(childrenToUse, transaction, context);
        ret = mountImages.join('');
      }
    }
    if (reactdomlibReactDOMComponent__newlineEatingTags[this._tag] && ret.charAt(0) === '\n') {
      // text/html ignores the first character in these tags if it's a newline
      // Prefer to break application/xml over text/html (for now) by adding
      // a newline specifically to get eaten by the parser. (Alternately for
      // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
      // \r is normalized out by HTMLTextAreaElement#value.)
      // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
      // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
      // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
      // See: Parsing of "textarea" "listing" and "pre" elements
      //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
      return '\n' + ret;
    } else {
      return ret;
    }
  },

  _createInitialChildren: function (transaction, props, context, lazyTree) {
    // Intentional use of != to avoid catching zero/false.
    var innerHTML = props.dangerouslySetInnerHTML;
    if (innerHTML != null) {
      if (innerHTML.__html != null) {
        reactdomlibReactDOMComponent__DOMLazyTree.queueHTML(lazyTree, innerHTML.__html);
      }
    } else {
      var contentToUse = reactdomlibReactDOMComponent__CONTENT_TYPES[typeof props.children] ? props.children : null;
      var childrenToUse = contentToUse != null ? null : props.children;
      // TODO: Validate that text is allowed as a child of this node
      if (contentToUse != null) {
        // Avoid setting textContent when the text is empty. In IE11 setting
        // textContent on a text area will cause the placeholder to not
        // show within the textarea until it has been focused and blurred again.
        // https://github.com/facebook/react/issues/6731#issuecomment-254874553
        if (contentToUse !== '') {
          if ('development' !== 'production') {
            reactdomlibReactDOMComponent__setAndValidateContentChildDev.call(this, contentToUse);
          }
          reactdomlibReactDOMComponent__DOMLazyTree.queueText(lazyTree, contentToUse);
        }
      } else if (childrenToUse != null) {
        var mountImages = this.mountChildren(childrenToUse, transaction, context);
        for (var i = 0; i < mountImages.length; i++) {
          reactdomlibReactDOMComponent__DOMLazyTree.queueChild(lazyTree, mountImages[i]);
        }
      }
    }
  },

  /**
   * Receives a next element and updates the component.
   *
   * @internal
   * @param {ReactElement} nextElement
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {object} context
   */
  receiveComponent: function (nextElement, transaction, context) {
    var prevElement = this._currentElement;
    this._currentElement = nextElement;
    this.updateComponent(transaction, prevElement, nextElement, context);
  },

  /**
   * Updates a DOM component after it has already been allocated and
   * attached to the DOM. Reconciles the root DOM node, then recurses.
   *
   * @param {ReactReconcileTransaction} transaction
   * @param {ReactElement} prevElement
   * @param {ReactElement} nextElement
   * @internal
   * @overridable
   */
  updateComponent: function (transaction, prevElement, nextElement, context) {
    var lastProps = prevElement.props;
    var nextProps = this._currentElement.props;

    switch (this._tag) {
      case 'input':
        lastProps = reactdomlibReactDOMComponent__ReactDOMInput.getHostProps(this, lastProps);
        nextProps = reactdomlibReactDOMComponent__ReactDOMInput.getHostProps(this, nextProps);
        break;
      case 'option':
        lastProps = reactdomlibReactDOMComponent__ReactDOMOption.getHostProps(this, lastProps);
        nextProps = reactdomlibReactDOMComponent__ReactDOMOption.getHostProps(this, nextProps);
        break;
      case 'select':
        lastProps = reactdomlibReactDOMComponent__ReactDOMSelect.getHostProps(this, lastProps);
        nextProps = reactdomlibReactDOMComponent__ReactDOMSelect.getHostProps(this, nextProps);
        break;
      case 'textarea':
        lastProps = reactdomlibReactDOMComponent__ReactDOMTextarea.getHostProps(this, lastProps);
        nextProps = reactdomlibReactDOMComponent__ReactDOMTextarea.getHostProps(this, nextProps);
        break;
    }

    reactdomlibReactDOMComponent__assertValidProps(this, nextProps);
    this._updateDOMProperties(lastProps, nextProps, transaction);
    this._updateDOMChildren(lastProps, nextProps, transaction, context);

    switch (this._tag) {
      case 'input':
        // Update the wrapper around inputs *after* updating props. This has to
        // happen after `_updateDOMProperties`. Otherwise HTML5 input validations
        // raise warnings and prevent the new value from being assigned.
        reactdomlibReactDOMComponent__ReactDOMInput.updateWrapper(this);
        break;
      case 'textarea':
        reactdomlibReactDOMComponent__ReactDOMTextarea.updateWrapper(this);
        break;
      case 'select':
        // <select> value update needs to occur after <option> children
        // reconciliation
        transaction.getReactMountReady().enqueue(reactdomlibReactDOMComponent__postUpdateSelectWrapper, this);
        break;
    }
  },

  /**
   * Reconciles the properties by detecting differences in property values and
   * updating the DOM as necessary. This function is probably the single most
   * critical path for performance optimization.
   *
   * TODO: Benchmark whether checking for changed values in memory actually
   *       improves performance (especially statically positioned elements).
   * TODO: Benchmark the effects of putting this at the top since 99% of props
   *       do not change for a given reconciliation.
   * TODO: Benchmark areas that can be improved with caching.
   *
   * @private
   * @param {object} lastProps
   * @param {object} nextProps
   * @param {?DOMElement} node
   */
  _updateDOMProperties: function (lastProps, nextProps, transaction) {
    var propKey;
    var styleName;
    var styleUpdates;
    for (propKey in lastProps) {
      if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey) || lastProps[propKey] == null) {
        continue;
      }
      if (propKey === reactdomlibReactDOMComponent__STYLE) {
        var lastStyle = this._previousStyleCopy;
        for (styleName in lastStyle) {
          if (lastStyle.hasOwnProperty(styleName)) {
            styleUpdates = styleUpdates || {};
            styleUpdates[styleName] = '';
          }
        }
        this._previousStyleCopy = null;
      } else if (reactdomlibReactDOMComponent__registrationNameModules.hasOwnProperty(propKey)) {
        if (lastProps[propKey]) {
          // Only call deleteListener if there was a listener previously or
          // else willDeleteListener gets called when there wasn't actually a
          // listener (e.g., onClick={null})
          reactdomlibReactDOMComponent__deleteListener(this, propKey);
        }
      } else if (reactdomlibReactDOMComponent__isCustomComponent(this._tag, lastProps)) {
        if (!reactdomlibReactDOMComponent__RESERVED_PROPS.hasOwnProperty(propKey)) {
          reactdomlibReactDOMComponent__DOMPropertyOperations.deleteValueForAttribute(reactdomlibReactDOMComponent__getNode(this), propKey);
        }
      } else if (reactdomlibReactDOMComponent__DOMProperty.properties[propKey] || reactdomlibReactDOMComponent__DOMProperty.isCustomAttribute(propKey)) {
        reactdomlibReactDOMComponent__DOMPropertyOperations.deleteValueForProperty(reactdomlibReactDOMComponent__getNode(this), propKey);
      }
    }
    for (propKey in nextProps) {
      var nextProp = nextProps[propKey];
      var lastProp = propKey === reactdomlibReactDOMComponent__STYLE ? this._previousStyleCopy : lastProps != null ? lastProps[propKey] : undefined;
      if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp || nextProp == null && lastProp == null) {
        continue;
      }
      if (propKey === reactdomlibReactDOMComponent__STYLE) {
        if (nextProp) {
          if ('development' !== 'production') {
            reactdomlibReactDOMComponent__checkAndWarnForMutatedStyle(this._previousStyleCopy, this._previousStyle, this);
            this._previousStyle = nextProp;
          }
          nextProp = this._previousStyleCopy = reactdomlibReactDOMComponent___assign({}, nextProp);
        } else {
          this._previousStyleCopy = null;
        }
        if (lastProp) {
          // Unset styles on `lastProp` but not on `nextProp`.
          for (styleName in lastProp) {
            if (lastProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
              styleUpdates = styleUpdates || {};
              styleUpdates[styleName] = '';
            }
          }
          // Update styles that changed since `lastProp`.
          for (styleName in nextProp) {
            if (nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]) {
              styleUpdates = styleUpdates || {};
              styleUpdates[styleName] = nextProp[styleName];
            }
          }
        } else {
          // Relies on `updateStylesByID` not mutating `styleUpdates`.
          styleUpdates = nextProp;
        }
      } else if (reactdomlibReactDOMComponent__registrationNameModules.hasOwnProperty(propKey)) {
        if (nextProp) {
          reactdomlibReactDOMComponent__enqueuePutListener(this, propKey, nextProp, transaction);
        } else if (lastProp) {
          reactdomlibReactDOMComponent__deleteListener(this, propKey);
        }
      } else if (reactdomlibReactDOMComponent__isCustomComponent(this._tag, nextProps)) {
        if (!reactdomlibReactDOMComponent__RESERVED_PROPS.hasOwnProperty(propKey)) {
          reactdomlibReactDOMComponent__DOMPropertyOperations.setValueForAttribute(reactdomlibReactDOMComponent__getNode(this), propKey, nextProp);
        }
      } else if (reactdomlibReactDOMComponent__DOMProperty.properties[propKey] || reactdomlibReactDOMComponent__DOMProperty.isCustomAttribute(propKey)) {
        var node = reactdomlibReactDOMComponent__getNode(this);
        // If we're updating to null or undefined, we should remove the property
        // from the DOM node instead of inadvertently setting to a string. This
        // brings us in line with the same behavior we have on initial render.
        if (nextProp != null) {
          reactdomlibReactDOMComponent__DOMPropertyOperations.setValueForProperty(node, propKey, nextProp);
        } else {
          reactdomlibReactDOMComponent__DOMPropertyOperations.deleteValueForProperty(node, propKey);
        }
      }
    }
    if (styleUpdates) {
      reactdomlibReactDOMComponent__CSSPropertyOperations.setValueForStyles(reactdomlibReactDOMComponent__getNode(this), styleUpdates, this);
    }
  },

  /**
   * Reconciles the children with the various properties that affect the
   * children content.
   *
   * @param {object} lastProps
   * @param {object} nextProps
   * @param {ReactReconcileTransaction} transaction
   * @param {object} context
   */
  _updateDOMChildren: function (lastProps, nextProps, transaction, context) {
    var lastContent = reactdomlibReactDOMComponent__CONTENT_TYPES[typeof lastProps.children] ? lastProps.children : null;
    var nextContent = reactdomlibReactDOMComponent__CONTENT_TYPES[typeof nextProps.children] ? nextProps.children : null;

    var lastHtml = lastProps.dangerouslySetInnerHTML && lastProps.dangerouslySetInnerHTML.__html;
    var nextHtml = nextProps.dangerouslySetInnerHTML && nextProps.dangerouslySetInnerHTML.__html;

    // Note the use of `!=` which checks for null or undefined.
    var lastChildren = lastContent != null ? null : lastProps.children;
    var nextChildren = nextContent != null ? null : nextProps.children;

    // If we're switching from children to content/html or vice versa, remove
    // the old content
    var lastHasContentOrHtml = lastContent != null || lastHtml != null;
    var nextHasContentOrHtml = nextContent != null || nextHtml != null;
    if (lastChildren != null && nextChildren == null) {
      this.updateChildren(null, transaction, context);
    } else if (lastHasContentOrHtml && !nextHasContentOrHtml) {
      this.updateTextContent('');
      if ('development' !== 'production') {
        reactdomlibReactDOMComponent__ReactInstrumentation.debugTool.onSetChildren(this._debugID, []);
      }
    }

    if (nextContent != null) {
      if (lastContent !== nextContent) {
        this.updateTextContent('' + nextContent);
        if ('development' !== 'production') {
          reactdomlibReactDOMComponent__setAndValidateContentChildDev.call(this, nextContent);
        }
      }
    } else if (nextHtml != null) {
      if (lastHtml !== nextHtml) {
        this.updateMarkup('' + nextHtml);
      }
      if ('development' !== 'production') {
        reactdomlibReactDOMComponent__ReactInstrumentation.debugTool.onSetChildren(this._debugID, []);
      }
    } else if (nextChildren != null) {
      if ('development' !== 'production') {
        reactdomlibReactDOMComponent__setAndValidateContentChildDev.call(this, null);
      }

      this.updateChildren(nextChildren, transaction, context);
    }
  },

  getHostNode: function () {
    return reactdomlibReactDOMComponent__getNode(this);
  },

  /**
   * Destroys all event registrations for this instance. Does not remove from
   * the DOM. That must be done by the parent.
   *
   * @internal
   */
  unmountComponent: function (safely) {
    switch (this._tag) {
      case 'audio':
      case 'form':
      case 'iframe':
      case 'img':
      case 'link':
      case 'object':
      case 'source':
      case 'video':
        var listeners = this._wrapperState.listeners;
        if (listeners) {
          for (var i = 0; i < listeners.length; i++) {
            listeners[i].remove();
          }
        }
        break;
      case 'input':
      case 'textarea':
        reactdomlibReactDOMComponent__inputValueTracking.stopTracking(this);
        break;
      case 'html':
      case 'head':
      case 'body':
        /**
         * Components like <html> <head> and <body> can't be removed or added
         * easily in a cross-browser way, however it's valuable to be able to
         * take advantage of React's reconciliation for styling and <title>
         * management. So we just document it and throw in dangerous cases.
         */
        !false ? 'development' !== 'production' ? reactdomlibReactDOMComponent__invariant(false, '<%s> tried to unmount. Because of cross-browser quirks it is impossible to unmount some top-level components (eg <html>, <head>, and <body>) reliably and efficiently. To fix this, have a single top-level component that never unmounts render these elements.', this._tag) : reactdomlibReactDOMComponent___prodInvariant('66', this._tag) : void 0;
        break;
    }

    this.unmountChildren(safely);
    reactdomlibReactDOMComponent__ReactDOMComponentTree.uncacheNode(this);
    reactdomlibReactDOMComponent__EventPluginHub.deleteAllListeners(this);
    this._rootNodeID = 0;
    this._domID = 0;
    this._wrapperState = null;

    if ('development' !== 'production') {
      reactdomlibReactDOMComponent__setAndValidateContentChildDev.call(this, null);
    }
  },

  getPublicInstance: function () {
    return reactdomlibReactDOMComponent__getNode(this);
  }
};

reactdomlibReactDOMComponent___assign(reactdomlibReactDOMComponent__ReactDOMComponent.prototype, reactdomlibReactDOMComponent__ReactDOMComponent.Mixin, reactdomlibReactDOMComponent__ReactMultiChild.Mixin);

$m['react-dom/lib/ReactDOMComponent'].exports = reactdomlibReactDOMComponent__ReactDOMComponent;
/*≠≠ node_modules/@yr/component/nod...t-dom/lib/ReactDOMComponent.js ≠≠*/


/*== node_modules/@yr/component/nod...om/lib/ReactDOMIDOperations.js ==*/
$m['react-dom/lib/ReactDOMIDOperations'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactDOMIDOperations__DOMChildrenOperations = $m['react-dom/lib/DOMChildrenOperations'].exports;
var reactdomlibReactDOMIDOperations__ReactDOMComponentTree = $m['react-dom/lib/ReactDOMComponentTree'].exports;

/**
 * Operations used to process updates to DOM nodes.
 */
var reactdomlibReactDOMIDOperations__ReactDOMIDOperations = {
  /**
   * Updates a component's children by processing a series of updates.
   *
   * @param {array<object>} updates List of update configurations.
   * @internal
   */
  dangerouslyProcessChildrenUpdates: function (parentInst, updates) {
    var node = reactdomlibReactDOMIDOperations__ReactDOMComponentTree.getNodeFromInstance(parentInst);
    reactdomlibReactDOMIDOperations__DOMChildrenOperations.processUpdates(node, updates);
  }
};

$m['react-dom/lib/ReactDOMIDOperations'].exports = reactdomlibReactDOMIDOperations__ReactDOMIDOperations;
/*≠≠ node_modules/@yr/component/nod...om/lib/ReactDOMIDOperations.js ≠≠*/


/*== node_modules/@yr/component/nod...ComponentBrowserEnvironment.js ==*/
$m['react-dom/lib/ReactComponentBrowserEnvironment'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactComponentBrowserEnvironment__DOMChildrenOperations = $m['react-dom/lib/DOMChildrenOperations'].exports;
var reactdomlibReactComponentBrowserEnvironment__ReactDOMIDOperations = $m['react-dom/lib/ReactDOMIDOperations'].exports;

/**
 * Abstracts away all functionality of the reconciler that requires knowledge of
 * the browser context. TODO: These callers should be refactored to avoid the
 * need for this injection.
 */
var reactdomlibReactComponentBrowserEnvironment__ReactComponentBrowserEnvironment = {
  processChildrenUpdates: reactdomlibReactComponentBrowserEnvironment__ReactDOMIDOperations.dangerouslyProcessChildrenUpdates,

  replaceNodeWithMarkup: reactdomlibReactComponentBrowserEnvironment__DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup
};

$m['react-dom/lib/ReactComponentBrowserEnvironment'].exports = reactdomlibReactComponentBrowserEnvironment__ReactComponentBrowserEnvironment;
/*≠≠ node_modules/@yr/component/nod...ComponentBrowserEnvironment.js ≠≠*/


/*== node_modules/@yr/component/nod...m/lib/HTMLDOMPropertyConfig.js ==*/
$m['react-dom/lib/HTMLDOMPropertyConfig'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibHTMLDOMPropertyConfig__DOMProperty = $m['react-dom/lib/DOMProperty'].exports;

var reactdomlibHTMLDOMPropertyConfig__MUST_USE_PROPERTY = reactdomlibHTMLDOMPropertyConfig__DOMProperty.injection.MUST_USE_PROPERTY;
var reactdomlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE = reactdomlibHTMLDOMPropertyConfig__DOMProperty.injection.HAS_BOOLEAN_VALUE;
var reactdomlibHTMLDOMPropertyConfig__HAS_NUMERIC_VALUE = reactdomlibHTMLDOMPropertyConfig__DOMProperty.injection.HAS_NUMERIC_VALUE;
var reactdomlibHTMLDOMPropertyConfig__HAS_POSITIVE_NUMERIC_VALUE = reactdomlibHTMLDOMPropertyConfig__DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;
var reactdomlibHTMLDOMPropertyConfig__HAS_OVERLOADED_BOOLEAN_VALUE = reactdomlibHTMLDOMPropertyConfig__DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;

var reactdomlibHTMLDOMPropertyConfig__HTMLDOMPropertyConfig = {
  isCustomAttribute: RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + reactdomlibHTMLDOMPropertyConfig__DOMProperty.ATTRIBUTE_NAME_CHAR + ']*$')),
  Properties: {
    /**
     * Standard Properties
     */
    accept: 0,
    acceptCharset: 0,
    accessKey: 0,
    action: 0,
    allowFullScreen: reactdomlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    allowTransparency: 0,
    alt: 0,
    // specifies target context for links with `preload` type
    as: 0,
    async: reactdomlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    autoComplete: 0,
    // autoFocus is polyfilled/normalized by AutoFocusUtils
    // autoFocus: HAS_BOOLEAN_VALUE,
    autoPlay: reactdomlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    capture: reactdomlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    cellPadding: 0,
    cellSpacing: 0,
    charSet: 0,
    challenge: 0,
    checked: reactdomlibHTMLDOMPropertyConfig__MUST_USE_PROPERTY | reactdomlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    cite: 0,
    classID: 0,
    className: 0,
    cols: reactdomlibHTMLDOMPropertyConfig__HAS_POSITIVE_NUMERIC_VALUE,
    colSpan: 0,
    content: 0,
    contentEditable: 0,
    contextMenu: 0,
    controls: reactdomlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    coords: 0,
    crossOrigin: 0,
    data: 0, // For `<object />` acts as `src`.
    dateTime: 0,
    'default': reactdomlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    defer: reactdomlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    dir: 0,
    disabled: reactdomlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    download: reactdomlibHTMLDOMPropertyConfig__HAS_OVERLOADED_BOOLEAN_VALUE,
    draggable: 0,
    encType: 0,
    form: 0,
    formAction: 0,
    formEncType: 0,
    formMethod: 0,
    formNoValidate: reactdomlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    formTarget: 0,
    frameBorder: 0,
    headers: 0,
    height: 0,
    hidden: reactdomlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    high: 0,
    href: 0,
    hrefLang: 0,
    htmlFor: 0,
    httpEquiv: 0,
    icon: 0,
    id: 0,
    inputMode: 0,
    integrity: 0,
    is: 0,
    keyParams: 0,
    keyType: 0,
    kind: 0,
    label: 0,
    lang: 0,
    list: 0,
    loop: reactdomlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    low: 0,
    manifest: 0,
    marginHeight: 0,
    marginWidth: 0,
    max: 0,
    maxLength: 0,
    media: 0,
    mediaGroup: 0,
    method: 0,
    min: 0,
    minLength: 0,
    // Caution; `option.selected` is not updated if `select.multiple` is
    // disabled with `removeAttribute`.
    multiple: reactdomlibHTMLDOMPropertyConfig__MUST_USE_PROPERTY | reactdomlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    muted: reactdomlibHTMLDOMPropertyConfig__MUST_USE_PROPERTY | reactdomlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    name: 0,
    nonce: 0,
    noValidate: reactdomlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    open: reactdomlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    optimum: 0,
    pattern: 0,
    placeholder: 0,
    playsInline: reactdomlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    poster: 0,
    preload: 0,
    profile: 0,
    radioGroup: 0,
    readOnly: reactdomlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    referrerPolicy: 0,
    rel: 0,
    required: reactdomlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    reversed: reactdomlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    role: 0,
    rows: reactdomlibHTMLDOMPropertyConfig__HAS_POSITIVE_NUMERIC_VALUE,
    rowSpan: reactdomlibHTMLDOMPropertyConfig__HAS_NUMERIC_VALUE,
    sandbox: 0,
    scope: 0,
    scoped: reactdomlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    scrolling: 0,
    seamless: reactdomlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    selected: reactdomlibHTMLDOMPropertyConfig__MUST_USE_PROPERTY | reactdomlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    shape: 0,
    size: reactdomlibHTMLDOMPropertyConfig__HAS_POSITIVE_NUMERIC_VALUE,
    sizes: 0,
    span: reactdomlibHTMLDOMPropertyConfig__HAS_POSITIVE_NUMERIC_VALUE,
    spellCheck: 0,
    src: 0,
    srcDoc: 0,
    srcLang: 0,
    srcSet: 0,
    start: reactdomlibHTMLDOMPropertyConfig__HAS_NUMERIC_VALUE,
    step: 0,
    style: 0,
    summary: 0,
    tabIndex: 0,
    target: 0,
    title: 0,
    // Setting .type throws on non-<input> tags
    type: 0,
    useMap: 0,
    value: 0,
    width: 0,
    wmode: 0,
    wrap: 0,

    /**
     * RDFa Properties
     */
    about: 0,
    datatype: 0,
    inlist: 0,
    prefix: 0,
    // property is also supported for OpenGraph in meta tags.
    property: 0,
    resource: 0,
    'typeof': 0,
    vocab: 0,

    /**
     * Non-standard Properties
     */
    // autoCapitalize and autoCorrect are supported in Mobile Safari for
    // keyboard hints.
    autoCapitalize: 0,
    autoCorrect: 0,
    // autoSave allows WebKit/Blink to persist values of input fields on page reloads
    autoSave: 0,
    // color is for Safari mask-icon link
    color: 0,
    // itemProp, itemScope, itemType are for
    // Microdata support. See http://schema.org/docs/gs.html
    itemProp: 0,
    itemScope: reactdomlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    itemType: 0,
    // itemID and itemRef are for Microdata support as well but
    // only specified in the WHATWG spec document. See
    // https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
    itemID: 0,
    itemRef: 0,
    // results show looking glass icon and recent searches on input
    // search fields in WebKit/Blink
    results: 0,
    // IE-only attribute that specifies security restrictions on an iframe
    // as an alternative to the sandbox attribute on IE<10
    security: 0,
    // IE-only attribute that controls focus behavior
    unselectable: 0
  },
  DOMAttributeNames: {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv'
  },
  DOMPropertyNames: {},
  DOMMutationMethods: {
    value: function (node, value) {
      if (value == null) {
        return node.removeAttribute('value');
      }

      // Number inputs get special treatment due to some edge cases in
      // Chrome. Let everything else assign the value attribute as normal.
      // https://github.com/facebook/react/issues/7253#issuecomment-236074326
      if (node.type !== 'number' || node.hasAttribute('value') === false) {
        node.setAttribute('value', '' + value);
      } else if (node.validity && !node.validity.badInput && node.ownerDocument.activeElement !== node) {
        // Don't assign an attribute if validation reports bad
        // input. Chrome will clear the value. Additionally, don't
        // operate on inputs that have focus, otherwise Chrome might
        // strip off trailing decimal places and cause the user's
        // cursor position to jump to the beginning of the input.
        //
        // In ReactDOMInput, we have an onBlur event that will trigger
        // this function again when focus is lost.
        node.setAttribute('value', '' + value);
      }
    }
  }
};

$m['react-dom/lib/HTMLDOMPropertyConfig'].exports = reactdomlibHTMLDOMPropertyConfig__HTMLDOMPropertyConfig;
/*≠≠ node_modules/@yr/component/nod...m/lib/HTMLDOMPropertyConfig.js ≠≠*/


/*== node_modules/@yr/component/nod...m/lib/EnterLeaveEventPlugin.js ==*/
$m['react-dom/lib/EnterLeaveEventPlugin'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibEnterLeaveEventPlugin__EventPropagators = $m['react-dom/lib/EventPropagators'].exports;
var reactdomlibEnterLeaveEventPlugin__ReactDOMComponentTree = $m['react-dom/lib/ReactDOMComponentTree'].exports;
var reactdomlibEnterLeaveEventPlugin__SyntheticMouseEvent = $m['react-dom/lib/SyntheticMouseEvent'].exports;

var reactdomlibEnterLeaveEventPlugin__eventTypes = {
  mouseEnter: {
    registrationName: 'onMouseEnter',
    dependencies: ['topMouseOut', 'topMouseOver']
  },
  mouseLeave: {
    registrationName: 'onMouseLeave',
    dependencies: ['topMouseOut', 'topMouseOver']
  }
};

var reactdomlibEnterLeaveEventPlugin__EnterLeaveEventPlugin = {
  eventTypes: reactdomlibEnterLeaveEventPlugin__eventTypes,

  /**
   * For almost every interaction we care about, there will be both a top-level
   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
   * we do not extract duplicate events. However, moving the mouse into the
   * browser from outside will not fire a `mouseout` event. In this case, we use
   * the `mouseover` top-level event.
   */
  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    if (topLevelType === 'topMouseOver' && (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
      return null;
    }
    if (topLevelType !== 'topMouseOut' && topLevelType !== 'topMouseOver') {
      // Must not be a mouse in or mouse out - ignoring.
      return null;
    }

    var win;
    if (nativeEventTarget.window === nativeEventTarget) {
      // `nativeEventTarget` is probably a window object.
      win = nativeEventTarget;
    } else {
      // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
      var doc = nativeEventTarget.ownerDocument;
      if (doc) {
        win = doc.defaultView || doc.parentWindow;
      } else {
        win = window;
      }
    }

    var from;
    var to;
    if (topLevelType === 'topMouseOut') {
      from = targetInst;
      var related = nativeEvent.relatedTarget || nativeEvent.toElement;
      to = related ? reactdomlibEnterLeaveEventPlugin__ReactDOMComponentTree.getClosestInstanceFromNode(related) : null;
    } else {
      // Moving to a node from outside the window.
      from = null;
      to = targetInst;
    }

    if (from === to) {
      // Nothing pertains to our managed components.
      return null;
    }

    var fromNode = from == null ? win : reactdomlibEnterLeaveEventPlugin__ReactDOMComponentTree.getNodeFromInstance(from);
    var toNode = to == null ? win : reactdomlibEnterLeaveEventPlugin__ReactDOMComponentTree.getNodeFromInstance(to);

    var leave = reactdomlibEnterLeaveEventPlugin__SyntheticMouseEvent.getPooled(reactdomlibEnterLeaveEventPlugin__eventTypes.mouseLeave, from, nativeEvent, nativeEventTarget);
    leave.type = 'mouseleave';
    leave.target = fromNode;
    leave.relatedTarget = toNode;

    var enter = reactdomlibEnterLeaveEventPlugin__SyntheticMouseEvent.getPooled(reactdomlibEnterLeaveEventPlugin__eventTypes.mouseEnter, to, nativeEvent, nativeEventTarget);
    enter.type = 'mouseenter';
    enter.target = toNode;
    enter.relatedTarget = fromNode;

    reactdomlibEnterLeaveEventPlugin__EventPropagators.accumulateEnterLeaveDispatches(leave, enter, from, to);

    return [leave, enter];
  }
};

$m['react-dom/lib/EnterLeaveEventPlugin'].exports = reactdomlibEnterLeaveEventPlugin__EnterLeaveEventPlugin;
/*≠≠ node_modules/@yr/component/nod...m/lib/EnterLeaveEventPlugin.js ≠≠*/


/*== node_modules/@yr/component/nod...t-dom/lib/ChangeEventPlugin.js ==*/
$m['react-dom/lib/ChangeEventPlugin'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibChangeEventPlugin__EventPluginHub = $m['react-dom/lib/EventPluginHub'].exports;
var reactdomlibChangeEventPlugin__EventPropagators = $m['react-dom/lib/EventPropagators'].exports;
var reactdomlibChangeEventPlugin__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;
var reactdomlibChangeEventPlugin__ReactDOMComponentTree = $m['react-dom/lib/ReactDOMComponentTree'].exports;
var reactdomlibChangeEventPlugin__ReactUpdates = $m['react-dom/lib/ReactUpdates'].exports;
var reactdomlibChangeEventPlugin__SyntheticEvent = $m['react-dom/lib/SyntheticEvent'].exports;

var reactdomlibChangeEventPlugin__inputValueTracking = $m['react-dom/lib/inputValueTracking'].exports;
var reactdomlibChangeEventPlugin__getEventTarget = $m['react-dom/lib/getEventTarget'].exports;
var reactdomlibChangeEventPlugin__isEventSupported = $m['react-dom/lib/isEventSupported'].exports;
var reactdomlibChangeEventPlugin__isTextInputElement = $m['react-dom/lib/isTextInputElement'].exports;

var reactdomlibChangeEventPlugin__eventTypes = {
  change: {
    phasedRegistrationNames: {
      bubbled: 'onChange',
      captured: 'onChangeCapture'
    },
    dependencies: ['topBlur', 'topChange', 'topClick', 'topFocus', 'topInput', 'topKeyDown', 'topKeyUp', 'topSelectionChange']
  }
};

function reactdomlibChangeEventPlugin__createAndAccumulateChangeEvent(inst, nativeEvent, target) {
  var event = reactdomlibChangeEventPlugin__SyntheticEvent.getPooled(reactdomlibChangeEventPlugin__eventTypes.change, inst, nativeEvent, target);
  event.type = 'change';
  reactdomlibChangeEventPlugin__EventPropagators.accumulateTwoPhaseDispatches(event);
  return event;
}
/**
 * For IE shims
 */
var reactdomlibChangeEventPlugin__activeElement = null;
var reactdomlibChangeEventPlugin__activeElementInst = null;

/**
 * SECTION: handle `change` event
 */
function reactdomlibChangeEventPlugin__shouldUseChangeEvent(elem) {
  var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
  return nodeName === 'select' || nodeName === 'input' && elem.type === 'file';
}

var reactdomlibChangeEventPlugin__doesChangeEventBubble = false;
if (reactdomlibChangeEventPlugin__ExecutionEnvironment.canUseDOM) {
  // See `handleChange` comment below
  reactdomlibChangeEventPlugin__doesChangeEventBubble = reactdomlibChangeEventPlugin__isEventSupported('change') && (!document.documentMode || document.documentMode > 8);
}

function reactdomlibChangeEventPlugin__manualDispatchChangeEvent(nativeEvent) {
  var event = reactdomlibChangeEventPlugin__createAndAccumulateChangeEvent(reactdomlibChangeEventPlugin__activeElementInst, nativeEvent, reactdomlibChangeEventPlugin__getEventTarget(nativeEvent));

  // If change and propertychange bubbled, we'd just bind to it like all the
  // other events and have it go through ReactBrowserEventEmitter. Since it
  // doesn't, we manually listen for the events and so we have to enqueue and
  // process the abstract event manually.
  //
  // Batching is necessary here in order to ensure that all event handlers run
  // before the next rerender (including event handlers attached to ancestor
  // elements instead of directly on the input). Without this, controlled
  // components don't work properly in conjunction with event bubbling because
  // the component is rerendered and the value reverted before all the event
  // handlers can run. See https://github.com/facebook/react/issues/708.
  reactdomlibChangeEventPlugin__ReactUpdates.batchedUpdates(reactdomlibChangeEventPlugin__runEventInBatch, event);
}

function reactdomlibChangeEventPlugin__runEventInBatch(event) {
  reactdomlibChangeEventPlugin__EventPluginHub.enqueueEvents(event);
  reactdomlibChangeEventPlugin__EventPluginHub.processEventQueue(false);
}

function reactdomlibChangeEventPlugin__startWatchingForChangeEventIE8(target, targetInst) {
  reactdomlibChangeEventPlugin__activeElement = target;
  reactdomlibChangeEventPlugin__activeElementInst = targetInst;
  reactdomlibChangeEventPlugin__activeElement.attachEvent('onchange', reactdomlibChangeEventPlugin__manualDispatchChangeEvent);
}

function reactdomlibChangeEventPlugin__stopWatchingForChangeEventIE8() {
  if (!reactdomlibChangeEventPlugin__activeElement) {
    return;
  }
  reactdomlibChangeEventPlugin__activeElement.detachEvent('onchange', reactdomlibChangeEventPlugin__manualDispatchChangeEvent);
  reactdomlibChangeEventPlugin__activeElement = null;
  reactdomlibChangeEventPlugin__activeElementInst = null;
}

function reactdomlibChangeEventPlugin__getInstIfValueChanged(targetInst, nativeEvent) {
  var updated = reactdomlibChangeEventPlugin__inputValueTracking.updateValueIfChanged(targetInst);
  var simulated = nativeEvent.simulated === true && reactdomlibChangeEventPlugin__ChangeEventPlugin._allowSimulatedPassThrough;

  if (updated || simulated) {
    return targetInst;
  }
}

function reactdomlibChangeEventPlugin__getTargetInstForChangeEvent(topLevelType, targetInst) {
  if (topLevelType === 'topChange') {
    return targetInst;
  }
}

function reactdomlibChangeEventPlugin__handleEventsForChangeEventIE8(topLevelType, target, targetInst) {
  if (topLevelType === 'topFocus') {
    // stopWatching() should be a noop here but we call it just in case we
    // missed a blur event somehow.
    reactdomlibChangeEventPlugin__stopWatchingForChangeEventIE8();
    reactdomlibChangeEventPlugin__startWatchingForChangeEventIE8(target, targetInst);
  } else if (topLevelType === 'topBlur') {
    reactdomlibChangeEventPlugin__stopWatchingForChangeEventIE8();
  }
}

/**
 * SECTION: handle `input` event
 */
var reactdomlibChangeEventPlugin__isInputEventSupported = false;
if (reactdomlibChangeEventPlugin__ExecutionEnvironment.canUseDOM) {
  // IE9 claims to support the input event but fails to trigger it when
  // deleting text, so we ignore its input events.

  reactdomlibChangeEventPlugin__isInputEventSupported = reactdomlibChangeEventPlugin__isEventSupported('input') && (!('documentMode' in document) || document.documentMode > 9);
}

/**
 * (For IE <=9) Starts tracking propertychange events on the passed-in element
 * and override the value property so that we can distinguish user events from
 * value changes in JS.
 */
function reactdomlibChangeEventPlugin__startWatchingForValueChange(target, targetInst) {
  reactdomlibChangeEventPlugin__activeElement = target;
  reactdomlibChangeEventPlugin__activeElementInst = targetInst;
  reactdomlibChangeEventPlugin__activeElement.attachEvent('onpropertychange', reactdomlibChangeEventPlugin__handlePropertyChange);
}

/**
 * (For IE <=9) Removes the event listeners from the currently-tracked element,
 * if any exists.
 */
function reactdomlibChangeEventPlugin__stopWatchingForValueChange() {
  if (!reactdomlibChangeEventPlugin__activeElement) {
    return;
  }
  reactdomlibChangeEventPlugin__activeElement.detachEvent('onpropertychange', reactdomlibChangeEventPlugin__handlePropertyChange);

  reactdomlibChangeEventPlugin__activeElement = null;
  reactdomlibChangeEventPlugin__activeElementInst = null;
}

/**
 * (For IE <=9) Handles a propertychange event, sending a `change` event if
 * the value of the active element has changed.
 */
function reactdomlibChangeEventPlugin__handlePropertyChange(nativeEvent) {
  if (nativeEvent.propertyName !== 'value') {
    return;
  }
  if (reactdomlibChangeEventPlugin__getInstIfValueChanged(reactdomlibChangeEventPlugin__activeElementInst, nativeEvent)) {
    reactdomlibChangeEventPlugin__manualDispatchChangeEvent(nativeEvent);
  }
}

function reactdomlibChangeEventPlugin__handleEventsForInputEventPolyfill(topLevelType, target, targetInst) {
  if (topLevelType === 'topFocus') {
    // In IE8, we can capture almost all .value changes by adding a
    // propertychange handler and looking for events with propertyName
    // equal to 'value'
    // In IE9, propertychange fires for most input events but is buggy and
    // doesn't fire when text is deleted, but conveniently, selectionchange
    // appears to fire in all of the remaining cases so we catch those and
    // forward the event if the value has changed
    // In either case, we don't want to call the event handler if the value
    // is changed from JS so we redefine a setter for `.value` that updates
    // our activeElementValue variable, allowing us to ignore those changes
    //
    // stopWatching() should be a noop here but we call it just in case we
    // missed a blur event somehow.
    reactdomlibChangeEventPlugin__stopWatchingForValueChange();
    reactdomlibChangeEventPlugin__startWatchingForValueChange(target, targetInst);
  } else if (topLevelType === 'topBlur') {
    reactdomlibChangeEventPlugin__stopWatchingForValueChange();
  }
}

// For IE8 and IE9.
function reactdomlibChangeEventPlugin__getTargetInstForInputEventPolyfill(topLevelType, targetInst, nativeEvent) {
  if (topLevelType === 'topSelectionChange' || topLevelType === 'topKeyUp' || topLevelType === 'topKeyDown') {
    // On the selectionchange event, the target is just document which isn't
    // helpful for us so just check activeElement instead.
    //
    // 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
    // propertychange on the first input event after setting `value` from a
    // script and fires only keydown, keypress, keyup. Catching keyup usually
    // gets it and catching keydown lets us fire an event for the first
    // keystroke if user does a key repeat (it'll be a little delayed: right
    // before the second keystroke). Other input methods (e.g., paste) seem to
    // fire selectionchange normally.
    return reactdomlibChangeEventPlugin__getInstIfValueChanged(reactdomlibChangeEventPlugin__activeElementInst, nativeEvent);
  }
}

/**
 * SECTION: handle `click` event
 */
function reactdomlibChangeEventPlugin__shouldUseClickEvent(elem) {
  // Use the `click` event to detect changes to checkbox and radio inputs.
  // This approach works across all browsers, whereas `change` does not fire
  // until `blur` in IE8.
  var nodeName = elem.nodeName;
  return nodeName && nodeName.toLowerCase() === 'input' && (elem.type === 'checkbox' || elem.type === 'radio');
}

function reactdomlibChangeEventPlugin__getTargetInstForClickEvent(topLevelType, targetInst, nativeEvent) {
  if (topLevelType === 'topClick') {
    return reactdomlibChangeEventPlugin__getInstIfValueChanged(targetInst, nativeEvent);
  }
}

function reactdomlibChangeEventPlugin__getTargetInstForInputOrChangeEvent(topLevelType, targetInst, nativeEvent) {
  if (topLevelType === 'topInput' || topLevelType === 'topChange') {
    return reactdomlibChangeEventPlugin__getInstIfValueChanged(targetInst, nativeEvent);
  }
}

function reactdomlibChangeEventPlugin__handleControlledInputBlur(inst, node) {
  // TODO: In IE, inst is occasionally null. Why?
  if (inst == null) {
    return;
  }

  // Fiber and ReactDOM keep wrapper state in separate places
  var state = inst._wrapperState || node._wrapperState;

  if (!state || !state.controlled || node.type !== 'number') {
    return;
  }

  // If controlled, assign the value attribute to the current value on blur
  var value = '' + node.value;
  if (node.getAttribute('value') !== value) {
    node.setAttribute('value', value);
  }
}

/**
 * This plugin creates an `onChange` event that normalizes change events
 * across form elements. This event fires at a time when it's possible to
 * change the element's value without seeing a flicker.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - select
 */
var reactdomlibChangeEventPlugin__ChangeEventPlugin = {
  eventTypes: reactdomlibChangeEventPlugin__eventTypes,

  _allowSimulatedPassThrough: true,
  _isInputEventSupported: reactdomlibChangeEventPlugin__isInputEventSupported,

  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    var targetNode = targetInst ? reactdomlibChangeEventPlugin__ReactDOMComponentTree.getNodeFromInstance(targetInst) : window;

    var getTargetInstFunc, handleEventFunc;
    if (reactdomlibChangeEventPlugin__shouldUseChangeEvent(targetNode)) {
      if (reactdomlibChangeEventPlugin__doesChangeEventBubble) {
        getTargetInstFunc = reactdomlibChangeEventPlugin__getTargetInstForChangeEvent;
      } else {
        handleEventFunc = reactdomlibChangeEventPlugin__handleEventsForChangeEventIE8;
      }
    } else if (reactdomlibChangeEventPlugin__isTextInputElement(targetNode)) {
      if (reactdomlibChangeEventPlugin__isInputEventSupported) {
        getTargetInstFunc = reactdomlibChangeEventPlugin__getTargetInstForInputOrChangeEvent;
      } else {
        getTargetInstFunc = reactdomlibChangeEventPlugin__getTargetInstForInputEventPolyfill;
        handleEventFunc = reactdomlibChangeEventPlugin__handleEventsForInputEventPolyfill;
      }
    } else if (reactdomlibChangeEventPlugin__shouldUseClickEvent(targetNode)) {
      getTargetInstFunc = reactdomlibChangeEventPlugin__getTargetInstForClickEvent;
    }

    if (getTargetInstFunc) {
      var inst = getTargetInstFunc(topLevelType, targetInst, nativeEvent);
      if (inst) {
        var event = reactdomlibChangeEventPlugin__createAndAccumulateChangeEvent(inst, nativeEvent, nativeEventTarget);
        return event;
      }
    }

    if (handleEventFunc) {
      handleEventFunc(topLevelType, targetNode, targetInst);
    }

    // When blurring, set the value attribute for number inputs
    if (topLevelType === 'topBlur') {
      reactdomlibChangeEventPlugin__handleControlledInputBlur(targetInst, targetNode);
    }
  }
};

$m['react-dom/lib/ChangeEventPlugin'].exports = reactdomlibChangeEventPlugin__ChangeEventPlugin;
/*≠≠ node_modules/@yr/component/nod...t-dom/lib/ChangeEventPlugin.js ≠≠*/


/*== node_modules/@yr/component/nod...dom/lib/SyntheticInputEvent.js ==*/
$m['react-dom/lib/SyntheticInputEvent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibSyntheticInputEvent__SyntheticEvent = $m['react-dom/lib/SyntheticEvent'].exports;

/**
 * @interface Event
 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
 *      /#events-inputevents
 */
var reactdomlibSyntheticInputEvent__InputEventInterface = {
  data: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function reactdomlibSyntheticInputEvent__SyntheticInputEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return reactdomlibSyntheticInputEvent__SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

reactdomlibSyntheticInputEvent__SyntheticEvent.augmentClass(reactdomlibSyntheticInputEvent__SyntheticInputEvent, reactdomlibSyntheticInputEvent__InputEventInterface);

$m['react-dom/lib/SyntheticInputEvent'].exports = reactdomlibSyntheticInputEvent__SyntheticInputEvent;
/*≠≠ node_modules/@yr/component/nod...dom/lib/SyntheticInputEvent.js ≠≠*/


/*== node_modules/@yr/component/nod...b/SyntheticCompositionEvent.js ==*/
$m['react-dom/lib/SyntheticCompositionEvent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibSyntheticCompositionEvent__SyntheticEvent = $m['react-dom/lib/SyntheticEvent'].exports;

/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
 */
var reactdomlibSyntheticCompositionEvent__CompositionEventInterface = {
  data: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function reactdomlibSyntheticCompositionEvent__SyntheticCompositionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return reactdomlibSyntheticCompositionEvent__SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

reactdomlibSyntheticCompositionEvent__SyntheticEvent.augmentClass(reactdomlibSyntheticCompositionEvent__SyntheticCompositionEvent, reactdomlibSyntheticCompositionEvent__CompositionEventInterface);

$m['react-dom/lib/SyntheticCompositionEvent'].exports = reactdomlibSyntheticCompositionEvent__SyntheticCompositionEvent;
/*≠≠ node_modules/@yr/component/nod...b/SyntheticCompositionEvent.js ≠≠*/


/*== node_modules/@yr/component/nod...ib/FallbackCompositionState.js ==*/
$m['react-dom/lib/FallbackCompositionState'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibFallbackCompositionState___assign = $m['object-assign'].exports;

var reactdomlibFallbackCompositionState__PooledClass = $m['react-dom/lib/PooledClass'].exports;

var reactdomlibFallbackCompositionState__getTextContentAccessor = $m['react-dom/lib/getTextContentAccessor'].exports;

/**
 * This helper class stores information about text content of a target node,
 * allowing comparison of content before and after a given event.
 *
 * Identify the node where selection currently begins, then observe
 * both its text content and its current position in the DOM. Since the
 * browser may natively replace the target node during composition, we can
 * use its position to find its replacement.
 *
 * @param {DOMEventTarget} root
 */
function reactdomlibFallbackCompositionState__FallbackCompositionState(root) {
  this._root = root;
  this._startText = this.getText();
  this._fallbackText = null;
}

reactdomlibFallbackCompositionState___assign(reactdomlibFallbackCompositionState__FallbackCompositionState.prototype, {
  destructor: function () {
    this._root = null;
    this._startText = null;
    this._fallbackText = null;
  },

  /**
   * Get current text of input.
   *
   * @return {string}
   */
  getText: function () {
    if ('value' in this._root) {
      return this._root.value;
    }
    return this._root[reactdomlibFallbackCompositionState__getTextContentAccessor()];
  },

  /**
   * Determine the differing substring between the initially stored
   * text content and the current content.
   *
   * @return {string}
   */
  getData: function () {
    if (this._fallbackText) {
      return this._fallbackText;
    }

    var start;
    var startValue = this._startText;
    var startLength = startValue.length;
    var end;
    var endValue = this.getText();
    var endLength = endValue.length;

    for (start = 0; start < startLength; start++) {
      if (startValue[start] !== endValue[start]) {
        break;
      }
    }

    var minEnd = startLength - start;
    for (end = 1; end <= minEnd; end++) {
      if (startValue[startLength - end] !== endValue[endLength - end]) {
        break;
      }
    }

    var sliceTail = end > 1 ? 1 - end : undefined;
    this._fallbackText = endValue.slice(start, sliceTail);
    return this._fallbackText;
  }
});

reactdomlibFallbackCompositionState__PooledClass.addPoolingTo(reactdomlibFallbackCompositionState__FallbackCompositionState);

$m['react-dom/lib/FallbackCompositionState'].exports = reactdomlibFallbackCompositionState__FallbackCompositionState;
/*≠≠ node_modules/@yr/component/nod...ib/FallbackCompositionState.js ≠≠*/


/*== node_modules/@yr/component/nod.../lib/BeforeInputEventPlugin.js ==*/
$m['react-dom/lib/BeforeInputEventPlugin'] = { exports: {} };
/**
 * Copyright 2013-present Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibBeforeInputEventPlugin__EventPropagators = $m['react-dom/lib/EventPropagators'].exports;
var reactdomlibBeforeInputEventPlugin__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;
var reactdomlibBeforeInputEventPlugin__FallbackCompositionState = $m['react-dom/lib/FallbackCompositionState'].exports;
var reactdomlibBeforeInputEventPlugin__SyntheticCompositionEvent = $m['react-dom/lib/SyntheticCompositionEvent'].exports;
var reactdomlibBeforeInputEventPlugin__SyntheticInputEvent = $m['react-dom/lib/SyntheticInputEvent'].exports;

var reactdomlibBeforeInputEventPlugin__END_KEYCODES = [9, 13, 27, 32]; // Tab, Return, Esc, Space
var reactdomlibBeforeInputEventPlugin__START_KEYCODE = 229;

var reactdomlibBeforeInputEventPlugin__canUseCompositionEvent = reactdomlibBeforeInputEventPlugin__ExecutionEnvironment.canUseDOM && 'CompositionEvent' in window;

var reactdomlibBeforeInputEventPlugin__documentMode = null;
if (reactdomlibBeforeInputEventPlugin__ExecutionEnvironment.canUseDOM && 'documentMode' in document) {
  reactdomlibBeforeInputEventPlugin__documentMode = document.documentMode;
}

// Webkit offers a very useful `textInput` event that can be used to
// directly represent `beforeInput`. The IE `textinput` event is not as
// useful, so we don't use it.
var reactdomlibBeforeInputEventPlugin__canUseTextInputEvent = reactdomlibBeforeInputEventPlugin__ExecutionEnvironment.canUseDOM && 'TextEvent' in window && !reactdomlibBeforeInputEventPlugin__documentMode && !reactdomlibBeforeInputEventPlugin__isPresto();

// In IE9+, we have access to composition events, but the data supplied
// by the native compositionend event may be incorrect. Japanese ideographic
// spaces, for instance (\u3000) are not recorded correctly.
var reactdomlibBeforeInputEventPlugin__useFallbackCompositionData = reactdomlibBeforeInputEventPlugin__ExecutionEnvironment.canUseDOM && (!reactdomlibBeforeInputEventPlugin__canUseCompositionEvent || reactdomlibBeforeInputEventPlugin__documentMode && reactdomlibBeforeInputEventPlugin__documentMode > 8 && reactdomlibBeforeInputEventPlugin__documentMode <= 11);

/**
 * Opera <= 12 includes TextEvent in window, but does not fire
 * text input events. Rely on keypress instead.
 */
function reactdomlibBeforeInputEventPlugin__isPresto() {
  var opera = window.opera;
  return typeof opera === 'object' && typeof opera.version === 'function' && parseInt(opera.version(), 10) <= 12;
}

var reactdomlibBeforeInputEventPlugin__SPACEBAR_CODE = 32;
var reactdomlibBeforeInputEventPlugin__SPACEBAR_CHAR = String.fromCharCode(reactdomlibBeforeInputEventPlugin__SPACEBAR_CODE);

// Events and their corresponding property names.
var reactdomlibBeforeInputEventPlugin__eventTypes = {
  beforeInput: {
    phasedRegistrationNames: {
      bubbled: 'onBeforeInput',
      captured: 'onBeforeInputCapture'
    },
    dependencies: ['topCompositionEnd', 'topKeyPress', 'topTextInput', 'topPaste']
  },
  compositionEnd: {
    phasedRegistrationNames: {
      bubbled: 'onCompositionEnd',
      captured: 'onCompositionEndCapture'
    },
    dependencies: ['topBlur', 'topCompositionEnd', 'topKeyDown', 'topKeyPress', 'topKeyUp', 'topMouseDown']
  },
  compositionStart: {
    phasedRegistrationNames: {
      bubbled: 'onCompositionStart',
      captured: 'onCompositionStartCapture'
    },
    dependencies: ['topBlur', 'topCompositionStart', 'topKeyDown', 'topKeyPress', 'topKeyUp', 'topMouseDown']
  },
  compositionUpdate: {
    phasedRegistrationNames: {
      bubbled: 'onCompositionUpdate',
      captured: 'onCompositionUpdateCapture'
    },
    dependencies: ['topBlur', 'topCompositionUpdate', 'topKeyDown', 'topKeyPress', 'topKeyUp', 'topMouseDown']
  }
};

// Track whether we've ever handled a keypress on the space key.
var reactdomlibBeforeInputEventPlugin__hasSpaceKeypress = false;

/**
 * Return whether a native keypress event is assumed to be a command.
 * This is required because Firefox fires `keypress` events for key commands
 * (cut, copy, select-all, etc.) even though no character is inserted.
 */
function reactdomlibBeforeInputEventPlugin__isKeypressCommand(nativeEvent) {
  return (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) &&
  // ctrlKey && altKey is equivalent to AltGr, and is not a command.
  !(nativeEvent.ctrlKey && nativeEvent.altKey);
}

/**
 * Translate native top level events into event types.
 *
 * @param {string} topLevelType
 * @return {object}
 */
function reactdomlibBeforeInputEventPlugin__getCompositionEventType(topLevelType) {
  switch (topLevelType) {
    case 'topCompositionStart':
      return reactdomlibBeforeInputEventPlugin__eventTypes.compositionStart;
    case 'topCompositionEnd':
      return reactdomlibBeforeInputEventPlugin__eventTypes.compositionEnd;
    case 'topCompositionUpdate':
      return reactdomlibBeforeInputEventPlugin__eventTypes.compositionUpdate;
  }
}

/**
 * Does our fallback best-guess model think this event signifies that
 * composition has begun?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */
function reactdomlibBeforeInputEventPlugin__isFallbackCompositionStart(topLevelType, nativeEvent) {
  return topLevelType === 'topKeyDown' && nativeEvent.keyCode === reactdomlibBeforeInputEventPlugin__START_KEYCODE;
}

/**
 * Does our fallback mode think that this event is the end of composition?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */
function reactdomlibBeforeInputEventPlugin__isFallbackCompositionEnd(topLevelType, nativeEvent) {
  switch (topLevelType) {
    case 'topKeyUp':
      // Command keys insert or clear IME input.
      return reactdomlibBeforeInputEventPlugin__END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;
    case 'topKeyDown':
      // Expect IME keyCode on each keydown. If we get any other
      // code we must have exited earlier.
      return nativeEvent.keyCode !== reactdomlibBeforeInputEventPlugin__START_KEYCODE;
    case 'topKeyPress':
    case 'topMouseDown':
    case 'topBlur':
      // Events are not possible without cancelling IME.
      return true;
    default:
      return false;
  }
}

/**
 * Google Input Tools provides composition data via a CustomEvent,
 * with the `data` property populated in the `detail` object. If this
 * is available on the event object, use it. If not, this is a plain
 * composition event and we have nothing special to extract.
 *
 * @param {object} nativeEvent
 * @return {?string}
 */
function reactdomlibBeforeInputEventPlugin__getDataFromCustomEvent(nativeEvent) {
  var detail = nativeEvent.detail;
  if (typeof detail === 'object' && 'data' in detail) {
    return detail.data;
  }
  return null;
}

// Track the current IME composition fallback object, if any.
var reactdomlibBeforeInputEventPlugin__currentComposition = null;

/**
 * @return {?object} A SyntheticCompositionEvent.
 */
function reactdomlibBeforeInputEventPlugin__extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
  var eventType;
  var fallbackData;

  if (reactdomlibBeforeInputEventPlugin__canUseCompositionEvent) {
    eventType = reactdomlibBeforeInputEventPlugin__getCompositionEventType(topLevelType);
  } else if (!reactdomlibBeforeInputEventPlugin__currentComposition) {
    if (reactdomlibBeforeInputEventPlugin__isFallbackCompositionStart(topLevelType, nativeEvent)) {
      eventType = reactdomlibBeforeInputEventPlugin__eventTypes.compositionStart;
    }
  } else if (reactdomlibBeforeInputEventPlugin__isFallbackCompositionEnd(topLevelType, nativeEvent)) {
    eventType = reactdomlibBeforeInputEventPlugin__eventTypes.compositionEnd;
  }

  if (!eventType) {
    return null;
  }

  if (reactdomlibBeforeInputEventPlugin__useFallbackCompositionData) {
    // The current composition is stored statically and must not be
    // overwritten while composition continues.
    if (!reactdomlibBeforeInputEventPlugin__currentComposition && eventType === reactdomlibBeforeInputEventPlugin__eventTypes.compositionStart) {
      reactdomlibBeforeInputEventPlugin__currentComposition = reactdomlibBeforeInputEventPlugin__FallbackCompositionState.getPooled(nativeEventTarget);
    } else if (eventType === reactdomlibBeforeInputEventPlugin__eventTypes.compositionEnd) {
      if (reactdomlibBeforeInputEventPlugin__currentComposition) {
        fallbackData = reactdomlibBeforeInputEventPlugin__currentComposition.getData();
      }
    }
  }

  var event = reactdomlibBeforeInputEventPlugin__SyntheticCompositionEvent.getPooled(eventType, targetInst, nativeEvent, nativeEventTarget);

  if (fallbackData) {
    // Inject data generated from fallback path into the synthetic event.
    // This matches the property of native CompositionEventInterface.
    event.data = fallbackData;
  } else {
    var customData = reactdomlibBeforeInputEventPlugin__getDataFromCustomEvent(nativeEvent);
    if (customData !== null) {
      event.data = customData;
    }
  }

  reactdomlibBeforeInputEventPlugin__EventPropagators.accumulateTwoPhaseDispatches(event);
  return event;
}

/**
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The string corresponding to this `beforeInput` event.
 */
function reactdomlibBeforeInputEventPlugin__getNativeBeforeInputChars(topLevelType, nativeEvent) {
  switch (topLevelType) {
    case 'topCompositionEnd':
      return reactdomlibBeforeInputEventPlugin__getDataFromCustomEvent(nativeEvent);
    case 'topKeyPress':
      /**
       * If native `textInput` events are available, our goal is to make
       * use of them. However, there is a special case: the spacebar key.
       * In Webkit, preventing default on a spacebar `textInput` event
       * cancels character insertion, but it *also* causes the browser
       * to fall back to its default spacebar behavior of scrolling the
       * page.
       *
       * Tracking at:
       * https://code.google.com/p/chromium/issues/detail?id=355103
       *
       * To avoid this issue, use the keypress event as if no `textInput`
       * event is available.
       */
      var which = nativeEvent.which;
      if (which !== reactdomlibBeforeInputEventPlugin__SPACEBAR_CODE) {
        return null;
      }

      reactdomlibBeforeInputEventPlugin__hasSpaceKeypress = true;
      return reactdomlibBeforeInputEventPlugin__SPACEBAR_CHAR;

    case 'topTextInput':
      // Record the characters to be added to the DOM.
      var chars = nativeEvent.data;

      // If it's a spacebar character, assume that we have already handled
      // it at the keypress level and bail immediately. Android Chrome
      // doesn't give us keycodes, so we need to blacklist it.
      if (chars === reactdomlibBeforeInputEventPlugin__SPACEBAR_CHAR && reactdomlibBeforeInputEventPlugin__hasSpaceKeypress) {
        return null;
      }

      return chars;

    default:
      // For other native event types, do nothing.
      return null;
  }
}

/**
 * For browsers that do not provide the `textInput` event, extract the
 * appropriate string to use for SyntheticInputEvent.
 *
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The fallback string for this `beforeInput` event.
 */
function reactdomlibBeforeInputEventPlugin__getFallbackBeforeInputChars(topLevelType, nativeEvent) {
  // If we are currently composing (IME) and using a fallback to do so,
  // try to extract the composed characters from the fallback object.
  // If composition event is available, we extract a string only at
  // compositionevent, otherwise extract it at fallback events.
  if (reactdomlibBeforeInputEventPlugin__currentComposition) {
    if (topLevelType === 'topCompositionEnd' || !reactdomlibBeforeInputEventPlugin__canUseCompositionEvent && reactdomlibBeforeInputEventPlugin__isFallbackCompositionEnd(topLevelType, nativeEvent)) {
      var chars = reactdomlibBeforeInputEventPlugin__currentComposition.getData();
      reactdomlibBeforeInputEventPlugin__FallbackCompositionState.release(reactdomlibBeforeInputEventPlugin__currentComposition);
      reactdomlibBeforeInputEventPlugin__currentComposition = null;
      return chars;
    }
    return null;
  }

  switch (topLevelType) {
    case 'topPaste':
      // If a paste event occurs after a keypress, throw out the input
      // chars. Paste events should not lead to BeforeInput events.
      return null;
    case 'topKeyPress':
      /**
       * As of v27, Firefox may fire keypress events even when no character
       * will be inserted. A few possibilities:
       *
       * - `which` is `0`. Arrow keys, Esc key, etc.
       *
       * - `which` is the pressed key code, but no char is available.
       *   Ex: 'AltGr + d` in Polish. There is no modified character for
       *   this key combination and no character is inserted into the
       *   document, but FF fires the keypress for char code `100` anyway.
       *   No `input` event will occur.
       *
       * - `which` is the pressed key code, but a command combination is
       *   being used. Ex: `Cmd+C`. No character is inserted, and no
       *   `input` event will occur.
       */
      if (nativeEvent.which && !reactdomlibBeforeInputEventPlugin__isKeypressCommand(nativeEvent)) {
        return String.fromCharCode(nativeEvent.which);
      }
      return null;
    case 'topCompositionEnd':
      return reactdomlibBeforeInputEventPlugin__useFallbackCompositionData ? null : nativeEvent.data;
    default:
      return null;
  }
}

/**
 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
 * `textInput` or fallback behavior.
 *
 * @return {?object} A SyntheticInputEvent.
 */
function reactdomlibBeforeInputEventPlugin__extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
  var chars;

  if (reactdomlibBeforeInputEventPlugin__canUseTextInputEvent) {
    chars = reactdomlibBeforeInputEventPlugin__getNativeBeforeInputChars(topLevelType, nativeEvent);
  } else {
    chars = reactdomlibBeforeInputEventPlugin__getFallbackBeforeInputChars(topLevelType, nativeEvent);
  }

  // If no characters are being inserted, no BeforeInput event should
  // be fired.
  if (!chars) {
    return null;
  }

  var event = reactdomlibBeforeInputEventPlugin__SyntheticInputEvent.getPooled(reactdomlibBeforeInputEventPlugin__eventTypes.beforeInput, targetInst, nativeEvent, nativeEventTarget);

  event.data = chars;
  reactdomlibBeforeInputEventPlugin__EventPropagators.accumulateTwoPhaseDispatches(event);
  return event;
}

/**
 * Create an `onBeforeInput` event to match
 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
 *
 * This event plugin is based on the native `textInput` event
 * available in Chrome, Safari, Opera, and IE. This event fires after
 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
 *
 * `beforeInput` is spec'd but not implemented in any browsers, and
 * the `input` event does not provide any useful information about what has
 * actually been added, contrary to the spec. Thus, `textInput` is the best
 * available event to identify the characters that have actually been inserted
 * into the target node.
 *
 * This plugin is also responsible for emitting `composition` events, thus
 * allowing us to share composition fallback code for both `beforeInput` and
 * `composition` event types.
 */
var reactdomlibBeforeInputEventPlugin__BeforeInputEventPlugin = {
  eventTypes: reactdomlibBeforeInputEventPlugin__eventTypes,

  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    return [reactdomlibBeforeInputEventPlugin__extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget), reactdomlibBeforeInputEventPlugin__extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget)];
  }
};

$m['react-dom/lib/BeforeInputEventPlugin'].exports = reactdomlibBeforeInputEventPlugin__BeforeInputEventPlugin;
/*≠≠ node_modules/@yr/component/nod.../lib/BeforeInputEventPlugin.js ≠≠*/


/*== node_modules/@yr/component/nod...m/lib/ReactDefaultInjection.js ==*/
$m['react-dom/lib/ReactDefaultInjection'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var reactdomlibReactDefaultInjection__ARIADOMPropertyConfig = $m['react-dom/lib/ARIADOMPropertyConfig'].exports;
var reactdomlibReactDefaultInjection__BeforeInputEventPlugin = $m['react-dom/lib/BeforeInputEventPlugin'].exports;
var reactdomlibReactDefaultInjection__ChangeEventPlugin = $m['react-dom/lib/ChangeEventPlugin'].exports;
var reactdomlibReactDefaultInjection__DefaultEventPluginOrder = $m['react-dom/lib/DefaultEventPluginOrder'].exports;
var reactdomlibReactDefaultInjection__EnterLeaveEventPlugin = $m['react-dom/lib/EnterLeaveEventPlugin'].exports;
var reactdomlibReactDefaultInjection__HTMLDOMPropertyConfig = $m['react-dom/lib/HTMLDOMPropertyConfig'].exports;
var reactdomlibReactDefaultInjection__ReactComponentBrowserEnvironment = $m['react-dom/lib/ReactComponentBrowserEnvironment'].exports;
var reactdomlibReactDefaultInjection__ReactDOMComponent = $m['react-dom/lib/ReactDOMComponent'].exports;
var reactdomlibReactDefaultInjection__ReactDOMComponentTree = $m['react-dom/lib/ReactDOMComponentTree'].exports;
var reactdomlibReactDefaultInjection__ReactDOMEmptyComponent = $m['react-dom/lib/ReactDOMEmptyComponent'].exports;
var reactdomlibReactDefaultInjection__ReactDOMTreeTraversal = $m['react-dom/lib/ReactDOMTreeTraversal'].exports;
var reactdomlibReactDefaultInjection__ReactDOMTextComponent = $m['react-dom/lib/ReactDOMTextComponent'].exports;
var reactdomlibReactDefaultInjection__ReactDefaultBatchingStrategy = $m['react-dom/lib/ReactDefaultBatchingStrategy'].exports;
var reactdomlibReactDefaultInjection__ReactEventListener = $m['react-dom/lib/ReactEventListener'].exports;
var reactdomlibReactDefaultInjection__ReactInjection = $m['react-dom/lib/ReactInjection'].exports;
var reactdomlibReactDefaultInjection__ReactReconcileTransaction = $m['react-dom/lib/ReactReconcileTransaction'].exports;
var reactdomlibReactDefaultInjection__SVGDOMPropertyConfig = $m['react-dom/lib/SVGDOMPropertyConfig'].exports;
var reactdomlibReactDefaultInjection__SelectEventPlugin = $m['react-dom/lib/SelectEventPlugin'].exports;
var reactdomlibReactDefaultInjection__SimpleEventPlugin = $m['react-dom/lib/SimpleEventPlugin'].exports;

var reactdomlibReactDefaultInjection__alreadyInjected = false;

function reactdomlibReactDefaultInjection__inject() {
  if (reactdomlibReactDefaultInjection__alreadyInjected) {
    // TODO: This is currently true because these injections are shared between
    // the client and the server package. They should be built independently
    // and not share any injection state. Then this problem will be solved.
    return;
  }
  reactdomlibReactDefaultInjection__alreadyInjected = true;

  reactdomlibReactDefaultInjection__ReactInjection.EventEmitter.injectReactEventListener(reactdomlibReactDefaultInjection__ReactEventListener);

  /**
   * Inject modules for resolving DOM hierarchy and plugin ordering.
   */
  reactdomlibReactDefaultInjection__ReactInjection.EventPluginHub.injectEventPluginOrder(reactdomlibReactDefaultInjection__DefaultEventPluginOrder);
  reactdomlibReactDefaultInjection__ReactInjection.EventPluginUtils.injectComponentTree(reactdomlibReactDefaultInjection__ReactDOMComponentTree);
  reactdomlibReactDefaultInjection__ReactInjection.EventPluginUtils.injectTreeTraversal(reactdomlibReactDefaultInjection__ReactDOMTreeTraversal);

  /**
   * Some important event plugins included by default (without having to require
   * them).
   */
  reactdomlibReactDefaultInjection__ReactInjection.EventPluginHub.injectEventPluginsByName({
    SimpleEventPlugin: reactdomlibReactDefaultInjection__SimpleEventPlugin,
    EnterLeaveEventPlugin: reactdomlibReactDefaultInjection__EnterLeaveEventPlugin,
    ChangeEventPlugin: reactdomlibReactDefaultInjection__ChangeEventPlugin,
    SelectEventPlugin: reactdomlibReactDefaultInjection__SelectEventPlugin,
    BeforeInputEventPlugin: reactdomlibReactDefaultInjection__BeforeInputEventPlugin
  });

  reactdomlibReactDefaultInjection__ReactInjection.HostComponent.injectGenericComponentClass(reactdomlibReactDefaultInjection__ReactDOMComponent);

  reactdomlibReactDefaultInjection__ReactInjection.HostComponent.injectTextComponentClass(reactdomlibReactDefaultInjection__ReactDOMTextComponent);

  reactdomlibReactDefaultInjection__ReactInjection.DOMProperty.injectDOMPropertyConfig(reactdomlibReactDefaultInjection__ARIADOMPropertyConfig);
  reactdomlibReactDefaultInjection__ReactInjection.DOMProperty.injectDOMPropertyConfig(reactdomlibReactDefaultInjection__HTMLDOMPropertyConfig);
  reactdomlibReactDefaultInjection__ReactInjection.DOMProperty.injectDOMPropertyConfig(reactdomlibReactDefaultInjection__SVGDOMPropertyConfig);

  reactdomlibReactDefaultInjection__ReactInjection.EmptyComponent.injectEmptyComponentFactory(function (instantiate) {
    return new reactdomlibReactDefaultInjection__ReactDOMEmptyComponent(instantiate);
  });

  reactdomlibReactDefaultInjection__ReactInjection.Updates.injectReconcileTransaction(reactdomlibReactDefaultInjection__ReactReconcileTransaction);
  reactdomlibReactDefaultInjection__ReactInjection.Updates.injectBatchingStrategy(reactdomlibReactDefaultInjection__ReactDefaultBatchingStrategy);

  reactdomlibReactDefaultInjection__ReactInjection.Component.injectEnvironment(reactdomlibReactDefaultInjection__ReactComponentBrowserEnvironment);
}

$m['react-dom/lib/ReactDefaultInjection'].exports = {
  inject: reactdomlibReactDefaultInjection__inject
};
/*≠≠ node_modules/@yr/component/nod...m/lib/ReactDefaultInjection.js ≠≠*/


/*== node_modules/@yr/component/nod...ules/react-dom/lib/ReactDOM.js ==*/
$m['react-dom/lib/ReactDOM'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/* globals __REACT_DEVTOOLS_GLOBAL_HOOK__*/

var reactdomlibReactDOM__ReactDOMComponentTree = $m['react-dom/lib/ReactDOMComponentTree'].exports;
var reactdomlibReactDOM__ReactDefaultInjection = $m['react-dom/lib/ReactDefaultInjection'].exports;
var reactdomlibReactDOM__ReactMount = $m['react-dom/lib/ReactMount'].exports;
var reactdomlibReactDOM__ReactReconciler = $m['react-dom/lib/ReactReconciler'].exports;
var reactdomlibReactDOM__ReactUpdates = $m['react-dom/lib/ReactUpdates'].exports;
var reactdomlibReactDOM__ReactVersion = $m['react-dom/lib/ReactVersion'].exports;

var reactdomlibReactDOM__findDOMNode = $m['react-dom/lib/findDOMNode'].exports;
var reactdomlibReactDOM__getHostComponentFromComposite = $m['react-dom/lib/getHostComponentFromComposite'].exports;
var reactdomlibReactDOM__renderSubtreeIntoContainer = $m['react-dom/lib/renderSubtreeIntoContainer'].exports;
var reactdomlibReactDOM__warning = $m['fbjs/lib/warning'].exports;

reactdomlibReactDOM__ReactDefaultInjection.inject();

var reactdomlibReactDOM__ReactDOM = {
  findDOMNode: reactdomlibReactDOM__findDOMNode,
  render: reactdomlibReactDOM__ReactMount.render,
  unmountComponentAtNode: reactdomlibReactDOM__ReactMount.unmountComponentAtNode,
  version: reactdomlibReactDOM__ReactVersion,

  /* eslint-disable camelcase */
  unstable_batchedUpdates: reactdomlibReactDOM__ReactUpdates.batchedUpdates,
  unstable_renderSubtreeIntoContainer: reactdomlibReactDOM__renderSubtreeIntoContainer
  /* eslint-enable camelcase */
};

// Inject the runtime into a devtools global hook regardless of browser.
// Allows for debugging when the hook is injected on the page.
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
    ComponentTree: {
      getClosestInstanceFromNode: reactdomlibReactDOM__ReactDOMComponentTree.getClosestInstanceFromNode,
      getNodeFromInstance: function (inst) {
        // inst is an internal instance (but could be a composite)
        if (inst._renderedComponent) {
          inst = reactdomlibReactDOM__getHostComponentFromComposite(inst);
        }
        if (inst) {
          return reactdomlibReactDOM__ReactDOMComponentTree.getNodeFromInstance(inst);
        } else {
          return null;
        }
      }
    },
    Mount: reactdomlibReactDOM__ReactMount,
    Reconciler: reactdomlibReactDOM__ReactReconciler
  });
}

if ('development' !== 'production') {
  var reactdomlibReactDOM__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;
  if (reactdomlibReactDOM__ExecutionEnvironment.canUseDOM && window.top === window.self) {
    // First check if devtools is not installed
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
      // If we're in Chrome or Firefox, provide a download link if not installed.
      if (navigator.userAgent.indexOf('Chrome') > -1 && navigator.userAgent.indexOf('Edge') === -1 || navigator.userAgent.indexOf('Firefox') > -1) {
        // Firefox does not have the issue with devtools loaded over file://
        var reactdomlibReactDOM__showFileUrlMessage = window.location.protocol.indexOf('http') === -1 && navigator.userAgent.indexOf('Firefox') === -1;
        console.debug('Download the React DevTools ' + (reactdomlibReactDOM__showFileUrlMessage ? 'and use an HTTP server (instead of a file: URL) ' : '') + 'for a better development experience: ' + 'https://fb.me/react-devtools');
      }
    }

    var reactdomlibReactDOM__testFunc = function testFn() {};
    'development' !== 'production' ? reactdomlibReactDOM__warning((reactdomlibReactDOM__testFunc.name || reactdomlibReactDOM__testFunc.toString()).indexOf('testFn') !== -1, "It looks like you're using a minified copy of the development build " + 'of React. When deploying React apps to production, make sure to use ' + 'the production build which skips development warnings and is faster. ' + 'See https://fb.me/react-minification for more details.') : void 0;

    // If we're in IE8, check to see if we are in compatibility mode and provide
    // information on preventing compatibility mode
    var reactdomlibReactDOM__ieCompatibilityMode = document.documentMode && document.documentMode < 8;

    'development' !== 'production' ? reactdomlibReactDOM__warning(!reactdomlibReactDOM__ieCompatibilityMode, 'Internet Explorer is running in compatibility mode; please add the ' + 'following tag to your HTML to prevent this from happening: ' + '<meta http-equiv="X-UA-Compatible" content="IE=edge" />') : void 0;

    var reactdomlibReactDOM__expectedFeatures = [
    // shims
    Array.isArray, Array.prototype.every, Array.prototype.forEach, Array.prototype.indexOf, Array.prototype.map, Date.now, Function.prototype.bind, Object.keys, String.prototype.trim];

    for (var reactdomlibReactDOM__i = 0; reactdomlibReactDOM__i < reactdomlibReactDOM__expectedFeatures.length; reactdomlibReactDOM__i++) {
      if (!reactdomlibReactDOM__expectedFeatures[reactdomlibReactDOM__i]) {
        'development' !== 'production' ? reactdomlibReactDOM__warning(false, 'One or more ES5 shims expected by React are not available: ' + 'https://fb.me/react-warning-polyfills') : void 0;
        break;
      }
    }
  }
}

if ('development' !== 'production') {
  var reactdomlibReactDOM__ReactInstrumentation = $m['react-dom/lib/ReactInstrumentation'].exports;
  var reactdomlibReactDOM__ReactDOMUnknownPropertyHook = $m['react-dom/lib/ReactDOMUnknownPropertyHook'].exports;
  var reactdomlibReactDOM__ReactDOMNullInputValuePropHook = $m['react-dom/lib/ReactDOMNullInputValuePropHook'].exports;
  var reactdomlibReactDOM__ReactDOMInvalidARIAHook = $m['react-dom/lib/ReactDOMInvalidARIAHook'].exports;

  reactdomlibReactDOM__ReactInstrumentation.debugTool.addHook(reactdomlibReactDOM__ReactDOMUnknownPropertyHook);
  reactdomlibReactDOM__ReactInstrumentation.debugTool.addHook(reactdomlibReactDOM__ReactDOMNullInputValuePropHook);
  reactdomlibReactDOM__ReactInstrumentation.debugTool.addHook(reactdomlibReactDOM__ReactDOMInvalidARIAHook);
}

$m['react-dom/lib/ReactDOM'].exports = reactdomlibReactDOM__ReactDOM;
/*≠≠ node_modules/@yr/component/nod...ules/react-dom/lib/ReactDOM.js ≠≠*/


/*== node_modules/@yr/component/lib/react-browser.js ==*/
$m['@yr/component/lib/react-browser'] = { exports: {} };

$m['@yr/component/lib/react-browser'].exports = {
  React: $m['react/lib/React'].exports,
  // Remapped on client to 'react-dom/lib/ReactDOM'
  ReactDOM: $m['react-dom/lib/ReactDOM'].exports
};
/*≠≠ node_modules/@yr/component/lib/react-browser.js ≠≠*/


/*== node_modules/@yr/component/lib/Component.js ==*/
$m['@yr/component/lib/Component'] = { exports: {} };

/**
 * Base component class (client)
 */

var yrcomponentlibComponent___require = $m['@yr/component/lib/react-browser'].exports,
    yrcomponentlibComponent__React = yrcomponentlibComponent___require.React;

var yrcomponentlibComponent__assign = $m['object-assign'].exports;
var yrcomponentlibComponent__clock = $m['@yr/clock'].exports;
var yrcomponentlibComponent__Debug = $m['debug'].exports;
var yrcomponentlibComponent__isEqual = $m['@yr/is-equal'].exports;

var yrcomponentlibComponent__DEFAULT_TRANSITION_DURATION = 250;
var yrcomponentlibComponent__TIMEOUT = 20;

var yrcomponentlibComponent__debug = yrcomponentlibComponent__Debug('yr:component');

$m['@yr/component/lib/Component'].exports = function (_React$Component) {
  babelHelpers.inherits(Component, _React$Component);

  /**
   * Constructor
   * @param {Object} props
   */
  function Component(props) {
    babelHelpers.classCallCheck(this, Component);

    var _this = babelHelpers.possibleConstructorReturn(this, _React$Component.call(this, props));

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
   * React: render
   * @returns {React}
   */

  Component.prototype.render = function render() {
    return this.__render(this.props, this.state);
  };

  /**
   * React: shouldComponentUpdate
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
   * React: componentWillUnmount
   */

  Component.prototype.componentWillUnmount = function componentWillUnmount() {
    // Reset
    if (this.state && this.state.visibility) this.state.visibility = 0;
    if (this.__timerID) yrcomponentlibComponent__clock.cancel(this.__timerID);
    if (this.__componentWillUnmount) this.__componentWillUnmount();
  };

  return Component;
}(yrcomponentlibComponent__React.Component);
/*≠≠ node_modules/@yr/component/lib/Component.js ≠≠*/


/*== node_modules/@yr/component/index.js ==*/
$m['@yr/component'] = { exports: {} };

/**
 * A factory utility for creating React.js components
 * https://github.com/yr/component
 * @copyright Yr
 * @license MIT
 */

var yrcomponent___require = $m['@yr/component/lib/react-browser'].exports,
    yrcomponent__React = yrcomponent___require.React,
    yrcomponent__ReactDOM = yrcomponent___require.ReactDOM;

var yrcomponent__assign = $m['object-assign'].exports;
var yrcomponent__Component = $m['@yr/component/lib/Component'].exports;
var yrcomponent__runtime = $m['@yr/runtime'].exports;

var yrcomponent__LIFECYCLE_METHODS = ['componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount'];
var yrcomponent__PROXY_KEYS = ['componentWillUnmount', 'render', 'state'];
var yrcomponent__RESERVED_METHODS = yrcomponent__LIFECYCLE_METHODS.concat(['render', 'shouldComponentUpdate', 'shouldComponentTransition', 'getTransitionDuration']);

$m['@yr/component'].exports = {
  NOT_TRANSITIONING: 0,
  WILL_TRANSITION: 1,
  IS_TRANSITIONING: 2,
  DID_TRANSITION: 3,

  React: yrcomponent__React,
  ReactDOM: yrcomponent__ReactDOM,

  dataTypes: yrcomponent__React.PropTypes,
  el: yrcomponent__React.createElement,

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

      return yrcomponent__React.createElement.apply(yrcomponent__React, [comp, props].concat(children));
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
      defaultProps = specification.defaultProps,
      displayName = specification.displayName;

  // Extract missing props defined in 'data'

  if (data && props && 'extract' in props) props.extract(Object.keys(data));

  // Copy default props
  if (defaultProps) {
    for (var prop in defaultProps) {
      if (props[prop] == null) props[prop] = defaultProps[prop];
    }
  }

  if (!data) return;

  if ('development' == 'development' && 'browser' == 'browser') {
    var ReactSecret = $m['react/lib/ReactPropTypesSecret'].exports;

    // Validate prop types
    for (var key in data) {
      var err = data[key](props, key, displayName, 'data property', key, ReactSecret);

      if (err) console.error(err);
    }
  }
}
/*≠≠ node_modules/@yr/component/index.js ≠≠*/


/*== src/lib/utils.js ==*/
$m['src/lib/utils'] = { exports: {} };

var srclibutils__component = $m['@yr/component'].exports;

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
    return srclibutils__component.el('use', {
      className: options.class,
      xlinkHref: link,
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

        if (rootImagePath && rootImagePath.charAt(rootImagePath.length - 1) !== '/') rootImagePath += '/';

        if (type === yrgraphicscomponent__TYPE_SVG) {
          var children = options.renderInnerSvg ? options.renderInnerSvg(id) : [yrgraphicscomponent__el('use', { xlinkHref: '#' + id, x: 0, y: 0, width: 100, height: 100 })];

          if (!Array.isArray(children)) children = [children];
          if (options.fallback) children.push(yrgraphicscomponent__el('image', { src: '' + rootImagePath + id + '.png', xlinkHref: '' }));

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
    yrgraphicscomponentpreviewGrid__el = yrgraphicscomponentpreviewGrid___require.el,
    yrgraphicscomponentpreviewGrid__stateless = yrgraphicscomponentpreviewGrid___require.stateless;

$m['@yr/graphics-component/previewGrid'].exports = yrgraphicscomponentpreviewGrid__stateless({
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
    srcpreviewpreview__ReactDOM = srcpreviewpreview___require.ReactDOM;

var srcpreviewpreview__grid = $m['@yr/graphics-component/previewGrid'].exports;
var srcpreviewpreview__recipes = $m['src/lib/recipes'].exports;
var srcpreviewpreview__symbolComponent = $m['src/lib/index'].exports;

var srcpreviewpreview__el = document.getElementById('viewport');
var srcpreviewpreview__symbol = srcpreviewpreview__symbolComponent.create({ rootImagePath: 'png' });

srcpreviewpreview__ReactDOM.render(srcpreviewpreview__grid({
  ids: Object.keys(srcpreviewpreview__recipes),
  graphic: srcpreviewpreview__symbol
}), srcpreviewpreview__el);
/*≠≠ src/preview/preview.js ≠≠*/
})()