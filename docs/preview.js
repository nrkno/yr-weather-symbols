'use strict';

/** BUDDY BUILT **/
if ('undefined' === typeof self) var self = this;
if ('undefined' === typeof global) var global = self;
if ('undefined' === typeof process) var process = { env: {} };
var $m = self.$m = self.$m || {};
var require = self.require || function require (id) {
  if ($m[id]) {
    if ('function' == typeof $m[id]) $m[id]();
    return $m[id].exports;
  }

  if (process.env.NODE_ENV == 'development') {
    console.warn('module ' + id + ' not found');
  }
};

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
/*== node_modules/react/lib/forEachAccumulated.js ==*/
$m['react/lib/forEachAccumulated'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule forEachAccumulated
 * 
 */


/**
 * @param {array} arr an "accumulation" of items which is either an Array or
 * a single item. Useful when paired with the `accumulate` module. This is a
 * simple utility that allows us to reason about a collection of items, but
 * handling the case when there is exactly one item (and we do not need to
 * allocate an array).
 */

function reactlibforEachAccumulated__forEachAccumulated(arr, cb, scope) {
  if (Array.isArray(arr)) {
    arr.forEach(cb, scope);
  } else if (arr) {
    cb.call(scope, arr);
  }
}

$m['react/lib/forEachAccumulated'].exports = reactlibforEachAccumulated__forEachAccumulated;
/*≠≠ node_modules/react/lib/forEachAccumulated.js ≠≠*/

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
 * @providesModule ReactPropTypesSecret
 */


var reactlibReactPropTypesSecret__ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

$m['react/lib/ReactPropTypesSecret'].exports = reactlibReactPropTypesSecret__ReactPropTypesSecret;
/*≠≠ node_modules/react/lib/ReactPropTypesSecret.js ≠≠*/

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
 * @providesModule getIteratorFn
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
 * @providesModule canDefineProperty
 */


var reactlibcanDefineProperty__canDefineProperty = false;
if (process.env.NODE_ENV !== 'production') {
  try {
    Object.defineProperty({}, 'x', { get: function () {} });
    reactlibcanDefineProperty__canDefineProperty = true;
  } catch (x) {
    // IE will fail on defineProperty
  }
}

$m['react/lib/canDefineProperty'].exports = reactlibcanDefineProperty__canDefineProperty;
/*≠≠ node_modules/react/lib/canDefineProperty.js ≠≠*/

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

function fbjslibinvariant__invariant(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

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
 * @providesModule ReactCurrentOwner
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
 * @providesModule reactProdInvariant
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

/*== node_modules/react/lib/CSSProperty.js ==*/
$m['react/lib/CSSProperty'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSProperty
 */


/**
 * CSS properties which accept numbers but are not in units of "px".
 */

var reactlibCSSProperty__isUnitlessNumber = {
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
  gridColumn: true,
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
function reactlibCSSProperty__prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var reactlibCSSProperty__prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(reactlibCSSProperty__isUnitlessNumber).forEach(function (prop) {
  reactlibCSSProperty__prefixes.forEach(function (prefix) {
    reactlibCSSProperty__isUnitlessNumber[reactlibCSSProperty__prefixKey(prefix, prop)] = reactlibCSSProperty__isUnitlessNumber[prop];
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
var reactlibCSSProperty__shorthandPropertyExpansions = {
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

var reactlibCSSProperty__CSSProperty = {
  isUnitlessNumber: reactlibCSSProperty__isUnitlessNumber,
  shorthandPropertyExpansions: reactlibCSSProperty__shorthandPropertyExpansions
};

$m['react/lib/CSSProperty'].exports = reactlibCSSProperty__CSSProperty;
/*≠≠ node_modules/react/lib/CSSProperty.js ≠≠*/

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
 * @providesModule ReactPropTypeLocationNames
 */


var reactlibReactPropTypeLocationNames__ReactPropTypeLocationNames = {};

if (process.env.NODE_ENV !== 'production') {
  reactlibReactPropTypeLocationNames__ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
}

$m['react/lib/ReactPropTypeLocationNames'].exports = reactlibReactPropTypeLocationNames__ReactPropTypeLocationNames;
/*≠≠ node_modules/react/lib/ReactPropTypeLocationNames.js ≠≠*/

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

/*== node_modules/react/lib/DisabledInputUtils.js ==*/
$m['react/lib/DisabledInputUtils'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DisabledInputUtils
 */


var reactlibDisabledInputUtils__disableableMouseListenerNames = {
  onClick: true,
  onDoubleClick: true,
  onMouseDown: true,
  onMouseMove: true,
  onMouseUp: true,

  onClickCapture: true,
  onDoubleClickCapture: true,
  onMouseDownCapture: true,
  onMouseMoveCapture: true,
  onMouseUpCapture: true
};

/**
 * Implements a host component that does not receive mouse events
 * when `disabled` is set.
 */
var reactlibDisabledInputUtils__DisabledInputUtils = {
  getHostProps: function (inst, props) {
    if (!props.disabled) {
      return props;
    }

    // Copy the props, except the mouse listeners
    var hostProps = {};
    for (var key in props) {
      if (!reactlibDisabledInputUtils__disableableMouseListenerNames[key] && props.hasOwnProperty(key)) {
        hostProps[key] = props[key];
      }
    }

    return hostProps;
  }
};

$m['react/lib/DisabledInputUtils'].exports = reactlibDisabledInputUtils__DisabledInputUtils;
/*≠≠ node_modules/react/lib/DisabledInputUtils.js ≠≠*/

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
  if (scrollable === window) {
    return {
      x: window.pageXOffset || document.documentElement.scrollLeft,
      y: window.pageYOffset || document.documentElement.scrollTop
    };
  }
  return {
    x: scrollable.scrollLeft,
    y: scrollable.scrollTop
  };
}

$m['fbjs/lib/getUnboundedScrollPosition'].exports = fbjslibgetUnboundedScrollPosition__getUnboundedScrollPosition;
/*≠≠ node_modules/fbjs/lib/getUnboundedScrollPosition.js ≠≠*/

/*== node_modules/react/lib/SVGDOMPropertyConfig.js ==*/
$m['react/lib/SVGDOMPropertyConfig'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SVGDOMPropertyConfig
 */


var reactlibSVGDOMPropertyConfig__NS = {
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
var reactlibSVGDOMPropertyConfig__ATTRS = {
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

var reactlibSVGDOMPropertyConfig__SVGDOMPropertyConfig = {
  Properties: {},
  DOMAttributeNamespaces: {
    xlinkActuate: reactlibSVGDOMPropertyConfig__NS.xlink,
    xlinkArcrole: reactlibSVGDOMPropertyConfig__NS.xlink,
    xlinkHref: reactlibSVGDOMPropertyConfig__NS.xlink,
    xlinkRole: reactlibSVGDOMPropertyConfig__NS.xlink,
    xlinkShow: reactlibSVGDOMPropertyConfig__NS.xlink,
    xlinkTitle: reactlibSVGDOMPropertyConfig__NS.xlink,
    xlinkType: reactlibSVGDOMPropertyConfig__NS.xlink,
    xmlBase: reactlibSVGDOMPropertyConfig__NS.xml,
    xmlLang: reactlibSVGDOMPropertyConfig__NS.xml,
    xmlSpace: reactlibSVGDOMPropertyConfig__NS.xml
  },
  DOMAttributeNames: {}
};

Object.keys(reactlibSVGDOMPropertyConfig__ATTRS).forEach(function (key) {
  reactlibSVGDOMPropertyConfig__SVGDOMPropertyConfig.Properties[key] = 0;
  if (reactlibSVGDOMPropertyConfig__ATTRS[key]) {
    reactlibSVGDOMPropertyConfig__SVGDOMPropertyConfig.DOMAttributeNames[key] = reactlibSVGDOMPropertyConfig__ATTRS[key];
  }
});

$m['react/lib/SVGDOMPropertyConfig'].exports = reactlibSVGDOMPropertyConfig__SVGDOMPropertyConfig;
/*≠≠ node_modules/react/lib/SVGDOMPropertyConfig.js ≠≠*/

/*== node_modules/react/lib/getNodeForCharacterOffset.js ==*/
$m['react/lib/getNodeForCharacterOffset'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getNodeForCharacterOffset
 */


/**
 * Given any node return the first leaf node without children.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {DOMElement|DOMTextNode}
 */

function reactlibgetNodeForCharacterOffset__getLeafNode(node) {
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
function reactlibgetNodeForCharacterOffset__getSiblingNode(node) {
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
function reactlibgetNodeForCharacterOffset__getNodeForCharacterOffset(root, offset) {
  var node = reactlibgetNodeForCharacterOffset__getLeafNode(root);
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

    node = reactlibgetNodeForCharacterOffset__getLeafNode(reactlibgetNodeForCharacterOffset__getSiblingNode(node));
  }
}

$m['react/lib/getNodeForCharacterOffset'].exports = reactlibgetNodeForCharacterOffset__getNodeForCharacterOffset;
/*≠≠ node_modules/react/lib/getNodeForCharacterOffset.js ≠≠*/

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
 * @providesModule ReactVersion
 */


$m['react/lib/ReactVersion'].exports = '15.3.2';
/*≠≠ node_modules/react/lib/ReactVersion.js ≠≠*/

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
  return !!(object && (typeof Node === 'function' ? object instanceof Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
}

$m['fbjs/lib/isNode'].exports = fbjslibisNode__isNode;
/*≠≠ node_modules/fbjs/lib/isNode.js ≠≠*/

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

/*== node_modules/fbjs/lib/keyOf.js ==*/
$m['fbjs/lib/keyOf'] = { exports: {} };
"use strict";

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
 * Allows extraction of a minified key. Let's the build system minify keys
 * without losing the ability to dynamically use key strings as values
 * themselves. Pass in an object with a single key/val pair and it will return
 * you the string key of that single record. Suppose you want to grab the
 * value for a key 'className' inside of an object. Key/val minification may
 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
 * reuse those resolutions.
 */

var fbjslibkeyOf__keyOf = function keyOf(oneKeyObj) {
  var key;
  for (key in oneKeyObj) {
    if (!oneKeyObj.hasOwnProperty(key)) {
      continue;
    }
    return key;
  }
  return null;
};

$m['fbjs/lib/keyOf'].exports = fbjslibkeyOf__keyOf;
/*≠≠ node_modules/fbjs/lib/keyOf.js ≠≠*/

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

if (process.env.NODE_ENV !== 'production') {
  Object.freeze(fbjslibemptyObject__emptyObject);
}

$m['fbjs/lib/emptyObject'].exports = fbjslibemptyObject__emptyObject;
/*≠≠ node_modules/fbjs/lib/emptyObject.js ≠≠*/

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
 */

function fbjslibgetActiveElement__getActiveElement() /*?DOMElement*/{
  if (typeof document === 'undefined') {
    return null;
  }
  try {
    return document.activeElement || document.body;
  } catch (e) {
    return document.body;
  }
}

$m['fbjs/lib/getActiveElement'].exports = fbjslibgetActiveElement__getActiveElement;
/*≠≠ node_modules/fbjs/lib/getActiveElement.js ≠≠*/

/*== node_modules/react/lib/isTextInputElement.js ==*/
$m['react/lib/isTextInputElement'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isTextInputElement
 * 
 */


/**
 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
 */

var reactlibisTextInputElement__supportedInputTypes = {
  'color': true,
  'date': true,
  'datetime': true,
  'datetime-local': true,
  'email': true,
  'month': true,
  'number': true,
  'password': true,
  'range': true,
  'search': true,
  'tel': true,
  'text': true,
  'time': true,
  'url': true,
  'week': true
};

function reactlibisTextInputElement__isTextInputElement(elem) {
  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();

  if (nodeName === 'input') {
    return !!reactlibisTextInputElement__supportedInputTypes[elem.type];
  }

  if (nodeName === 'textarea') {
    return true;
  }

  return false;
}

$m['react/lib/isTextInputElement'].exports = reactlibisTextInputElement__isTextInputElement;
/*≠≠ node_modules/react/lib/isTextInputElement.js ≠≠*/

/*== node_modules/react/lib/getEventTarget.js ==*/
$m['react/lib/getEventTarget'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventTarget
 */


/**
 * Gets the target node from a native browser event by accounting for
 * inconsistencies in browser DOM APIs.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {DOMEventTarget} Target node.
 */

function reactlibgetEventTarget__getEventTarget(nativeEvent) {
  var target = nativeEvent.target || nativeEvent.srcElement || window;

  // Normalize SVG <use> element events #4963
  if (target.correspondingUseElement) {
    target = target.correspondingUseElement;
  }

  // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
  // @see http://www.quirksmode.org/js/events_properties.html
  return target.nodeType === 3 ? target.parentNode : target;
}

$m['react/lib/getEventTarget'].exports = reactlibgetEventTarget__getEventTarget;
/*≠≠ node_modules/react/lib/getEventTarget.js ≠≠*/

/*== node_modules/react/lib/getEventModifierState.js ==*/
$m['react/lib/getEventModifierState'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventModifierState
 */


/**
 * Translation from modifier key to the associated property in the event.
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
 */

var reactlibgetEventModifierState__modifierKeyToProp = {
  'Alt': 'altKey',
  'Control': 'ctrlKey',
  'Meta': 'metaKey',
  'Shift': 'shiftKey'
};

// IE8 does not implement getModifierState so we simply map it to the only
// modifier keys exposed by the event itself, does not support Lock-keys.
// Currently, all major browsers except Chrome seems to support Lock-keys.
function reactlibgetEventModifierState__modifierStateGetter(keyArg) {
  var syntheticEvent = this;
  var nativeEvent = syntheticEvent.nativeEvent;
  if (nativeEvent.getModifierState) {
    return nativeEvent.getModifierState(keyArg);
  }
  var keyProp = reactlibgetEventModifierState__modifierKeyToProp[keyArg];
  return keyProp ? !!nativeEvent[keyProp] : false;
}

function reactlibgetEventModifierState__getEventModifierState(nativeEvent) {
  return reactlibgetEventModifierState__modifierStateGetter;
}

$m['react/lib/getEventModifierState'].exports = reactlibgetEventModifierState__getEventModifierState;
/*≠≠ node_modules/react/lib/getEventModifierState.js ≠≠*/

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
 * @providesModule KeyEscapeUtils
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

/*== node_modules/react/lib/getEventCharCode.js ==*/
$m['react/lib/getEventCharCode'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventCharCode
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

function reactlibgetEventCharCode__getEventCharCode(nativeEvent) {
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

$m['react/lib/getEventCharCode'].exports = reactlibgetEventCharCode__getEventCharCode;
/*≠≠ node_modules/react/lib/getEventCharCode.js ≠≠*/

/*== node_modules/react/lib/escapeTextContentForBrowser.js ==*/
$m['react/lib/escapeTextContentForBrowser'] = { exports: {} };
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
 * @providesModule escapeTextContentForBrowser
 */


// code copied and modified from escape-html
/**
 * Module variables.
 * @private
 */

var reactlibescapeTextContentForBrowser__matchHtmlRegExp = /["'&<>]/;

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function reactlibescapeTextContentForBrowser__escapeHtml(string) {
  var str = '' + string;
  var match = reactlibescapeTextContentForBrowser__matchHtmlRegExp.exec(str);

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
function reactlibescapeTextContentForBrowser__escapeTextContentForBrowser(text) {
  if (typeof text === 'boolean' || typeof text === 'number') {
    // this shortcircuit helps perf for types that we know will never have
    // special characters, especially given that this function is used often
    // for numeric dom ids.
    return '' + text;
  }
  return reactlibescapeTextContentForBrowser__escapeHtml(text);
}

$m['react/lib/escapeTextContentForBrowser'].exports = reactlibescapeTextContentForBrowser__escapeTextContentForBrowser;
/*≠≠ node_modules/react/lib/escapeTextContentForBrowser.js ≠≠*/

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

/*== node_modules/react/lib/ViewportMetrics.js ==*/
$m['react/lib/ViewportMetrics'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ViewportMetrics
 */


var reactlibViewportMetrics__ViewportMetrics = {

  currentScrollLeft: 0,

  currentScrollTop: 0,

  refreshScrollValues: function (scrollPosition) {
    reactlibViewportMetrics__ViewportMetrics.currentScrollLeft = scrollPosition.x;
    reactlibViewportMetrics__ViewportMetrics.currentScrollTop = scrollPosition.y;
  }

};

$m['react/lib/ViewportMetrics'].exports = reactlibViewportMetrics__ViewportMetrics;
/*≠≠ node_modules/react/lib/ViewportMetrics.js ≠≠*/

/*== node_modules/react/lib/ReactDOMComponentFlags.js ==*/
$m['react/lib/ReactDOMComponentFlags'] = { exports: {} };
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMComponentFlags
 */


var reactlibReactDOMComponentFlags__ReactDOMComponentFlags = {
  hasCachedChildNodes: 1 << 0
};

$m['react/lib/ReactDOMComponentFlags'].exports = reactlibReactDOMComponentFlags__ReactDOMComponentFlags;
/*≠≠ node_modules/react/lib/ReactDOMComponentFlags.js ≠≠*/

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
 * @return {String|Number}
 * @api public
 */

$m['ms'].exports = function (val, options) {
  options = options || {};
  if ('string' == typeof val) return ms__parse(val);
  return options.long ? ms__long(val) : ms__short(val);
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function ms__parse(str) {
  str = '' + str;
  if (str.length > 10000) return;
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
  if (!match) return;
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
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function ms__short(ms) {
  if (ms >= ms__d) return Math.round(ms / ms__d) + 'd';
  if (ms >= ms__h) return Math.round(ms / ms__h) + 'h';
  if (ms >= ms__m) return Math.round(ms / ms__m) + 'm';
  if (ms >= ms__s) return Math.round(ms / ms__s) + 's';
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function ms__long(ms) {
  return ms__plural(ms, ms__d, 'day') || ms__plural(ms, ms__h, 'hour') || ms__plural(ms, ms__m, 'minute') || ms__plural(ms, ms__s, 'second') || ms + ' ms';
}

/**
 * Pluralization helper.
 */

function ms__plural(ms, n, name) {
  if (ms < n) return;
  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
  return Math.ceil(ms / n) + ' ' + name + 's';
}
/*≠≠ node_modules/ms/index.js ≠≠*/

/*== node_modules/react/lib/ReactDOMFeatureFlags.js ==*/
$m['react/lib/ReactDOMFeatureFlags'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMFeatureFlags
 */


var reactlibReactDOMFeatureFlags__ReactDOMFeatureFlags = {
  useCreateElement: true
};

$m['react/lib/ReactDOMFeatureFlags'].exports = reactlibReactDOMFeatureFlags__ReactDOMFeatureFlags;
/*≠≠ node_modules/react/lib/ReactDOMFeatureFlags.js ≠≠*/

/*== node_modules/react/lib/adler32.js ==*/
$m['react/lib/adler32'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule adler32
 * 
 */


var reactlibadler32__MOD = 65521;

// adler32 is not cryptographically strong, and is only used to sanity check that
// markup generated on the server matches the markup generated on the client.
// This implementation (a modified version of the SheetJS version) has been optimized
// for our use case, at the expense of conforming to the adler32 specification
// for non-ascii inputs.
function reactlibadler32__adler32(data) {
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
    a %= reactlibadler32__MOD;
    b %= reactlibadler32__MOD;
  }
  for (; i < l; i++) {
    b += a += data.charCodeAt(i);
  }
  a %= reactlibadler32__MOD;
  b %= reactlibadler32__MOD;
  return a | b << 16;
}

$m['react/lib/adler32'].exports = reactlibadler32__adler32;
/*≠≠ node_modules/react/lib/adler32.js ≠≠*/

/*== node_modules/performance-now/lib/performance-now.js ==*/
$m['performance-now'] = { exports: {} };
"use strict";

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
    getNanoSeconds = function () {
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

/*== node_modules/react/lib/ReactFeatureFlags.js ==*/
$m['react/lib/ReactFeatureFlags'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactFeatureFlags
 * 
 */


var reactlibReactFeatureFlags__ReactFeatureFlags = {
  // When true, call console.time() before and .timeEnd() after each top-level
  // render (both initial renders and updates). Useful when looking at prod-mode
  // timeline profiles in Chrome, for example.
  logTopLevelRenders: false
};

$m['react/lib/ReactFeatureFlags'].exports = reactlibReactFeatureFlags__ReactFeatureFlags;
/*≠≠ node_modules/react/lib/ReactFeatureFlags.js ≠≠*/

/*== node_modules/react/lib/ReactErrorUtils.js ==*/
$m['react/lib/ReactErrorUtils'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactErrorUtils
 */


var reactlibReactErrorUtils__caughtError = null;

/**
 * Call a function while guarding against errors that happens within it.
 *
 * @param {?String} name of the guard to use for logging or debugging
 * @param {Function} func The function to invoke
 * @param {*} a First argument
 * @param {*} b Second argument
 */
function reactlibReactErrorUtils__invokeGuardedCallback(name, func, a, b) {
  try {
    return func(a, b);
  } catch (x) {
    if (reactlibReactErrorUtils__caughtError === null) {
      reactlibReactErrorUtils__caughtError = x;
    }
    return undefined;
  }
}

var reactlibReactErrorUtils__ReactErrorUtils = {
  invokeGuardedCallback: reactlibReactErrorUtils__invokeGuardedCallback,

  /**
   * Invoked by ReactTestUtils.Simulate so that any errors thrown by the event
   * handler are sure to be rethrown by rethrowCaughtError.
   */
  invokeGuardedCallbackWithCatch: reactlibReactErrorUtils__invokeGuardedCallback,

  /**
   * During execution of guarded functions we will capture the first error which
   * we will rethrow to be handled by the top level error handler.
   */
  rethrowCaughtError: function () {
    if (reactlibReactErrorUtils__caughtError) {
      var error = reactlibReactErrorUtils__caughtError;
      reactlibReactErrorUtils__caughtError = null;
      throw error;
    }
  }
};

if (process.env.NODE_ENV !== 'production') {
  /**
   * To help development we can get better devtools integration by simulating a
   * real browser event.
   */
  if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof document !== 'undefined' && typeof document.createEvent === 'function') {
    var reactlibReactErrorUtils__fakeNode = document.createElement('react');
    reactlibReactErrorUtils__ReactErrorUtils.invokeGuardedCallback = function (name, func, a, b) {
      var boundFunc = func.bind(null, a, b);
      var evtType = 'react-' + name;
      reactlibReactErrorUtils__fakeNode.addEventListener(evtType, boundFunc, false);
      var evt = document.createEvent('Event');
      evt.initEvent(evtType, false, false);
      reactlibReactErrorUtils__fakeNode.dispatchEvent(evt);
      reactlibReactErrorUtils__fakeNode.removeEventListener(evtType, boundFunc, false);
    };
  }
}

$m['react/lib/ReactErrorUtils'].exports = reactlibReactErrorUtils__ReactErrorUtils;
/*≠≠ node_modules/react/lib/ReactErrorUtils.js ≠≠*/

/*== node_modules/react/lib/ReactInstanceMap.js ==*/
$m['react/lib/ReactInstanceMap'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInstanceMap
 */


/**
 * `ReactInstanceMap` maintains a mapping from a public facing stateful
 * instance (key) and the internal representation (value). This allows public
 * methods to accept the user facing instance as an argument and map them back
 * to internal methods.
 */

// TODO: Replace this with ES6: var ReactInstanceMap = new Map();

var reactlibReactInstanceMap__ReactInstanceMap = {

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

$m['react/lib/ReactInstanceMap'].exports = reactlibReactInstanceMap__ReactInstanceMap;
/*≠≠ node_modules/react/lib/ReactInstanceMap.js ≠≠*/

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

/*== node_modules/react/lib/ReactEmptyComponent.js ==*/
$m['react/lib/ReactEmptyComponent'] = { exports: {} };
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEmptyComponent
 */


var reactlibReactEmptyComponent__emptyComponentFactory;

var reactlibReactEmptyComponent__ReactEmptyComponentInjection = {
  injectEmptyComponentFactory: function (factory) {
    reactlibReactEmptyComponent__emptyComponentFactory = factory;
  }
};

var reactlibReactEmptyComponent__ReactEmptyComponent = {
  create: function (instantiate) {
    return reactlibReactEmptyComponent__emptyComponentFactory(instantiate);
  }
};

reactlibReactEmptyComponent__ReactEmptyComponent.injection = reactlibReactEmptyComponent__ReactEmptyComponentInjection;

$m['react/lib/ReactEmptyComponent'].exports = reactlibReactEmptyComponent__ReactEmptyComponent;
/*≠≠ node_modules/react/lib/ReactEmptyComponent.js ≠≠*/

/*== src/js/lib/recipes.js ==*/
$m['src/js/lib/recipes'] = { exports: {} };

const srcjslibrecipes__base = {
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

/*== node_modules/react/lib/DOMNamespaces.js ==*/
$m['react/lib/DOMNamespaces'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMNamespaces
 */


var reactlibDOMNamespaces__DOMNamespaces = {
  html: 'http://www.w3.org/1999/xhtml',
  mathml: 'http://www.w3.org/1998/Math/MathML',
  svg: 'http://www.w3.org/2000/svg'
};

$m['react/lib/DOMNamespaces'].exports = reactlibDOMNamespaces__DOMNamespaces;
/*≠≠ node_modules/react/lib/DOMNamespaces.js ≠≠*/

/*== node_modules/react/lib/createMicrosoftUnsafeLocalFunction.js ==*/
$m['react/lib/createMicrosoftUnsafeLocalFunction'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule createMicrosoftUnsafeLocalFunction
 */

/* globals MSApp */


/**
 * Create a function which has 'unsafe' privileges (required by windows8 apps)
 */

var reactlibcreateMicrosoftUnsafeLocalFunction__createMicrosoftUnsafeLocalFunction = function (func) {
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

$m['react/lib/createMicrosoftUnsafeLocalFunction'].exports = reactlibcreateMicrosoftUnsafeLocalFunction__createMicrosoftUnsafeLocalFunction;
/*≠≠ node_modules/react/lib/createMicrosoftUnsafeLocalFunction.js ≠≠*/

/*== node_modules/react/lib/shouldUpdateReactComponent.js ==*/
$m['react/lib/shouldUpdateReactComponent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule shouldUpdateReactComponent
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

function reactlibshouldUpdateReactComponent__shouldUpdateReactComponent(prevElement, nextElement) {
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

$m['react/lib/shouldUpdateReactComponent'].exports = reactlibshouldUpdateReactComponent__shouldUpdateReactComponent;
/*≠≠ node_modules/react/lib/shouldUpdateReactComponent.js ≠≠*/

/*== node_modules/react/lib/ReactHostOperationHistoryHook.js ==*/
$m['react/lib/ReactHostOperationHistoryHook'] = { exports: {} };
/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactHostOperationHistoryHook
 */


var reactlibReactHostOperationHistoryHook__history = [];

var reactlibReactHostOperationHistoryHook__ReactHostOperationHistoryHook = {
  onHostOperation: function (debugID, type, payload) {
    reactlibReactHostOperationHistoryHook__history.push({
      instanceID: debugID,
      type: type,
      payload: payload
    });
  },
  clearHistory: function () {
    if (reactlibReactHostOperationHistoryHook__ReactHostOperationHistoryHook._preventClearing) {
      // Should only be used for tests.
      return;
    }

    reactlibReactHostOperationHistoryHook__history = [];
  },
  getHistory: function () {
    return reactlibReactHostOperationHistoryHook__history;
  }
};

$m['react/lib/ReactHostOperationHistoryHook'].exports = reactlibReactHostOperationHistoryHook__ReactHostOperationHistoryHook;
/*≠≠ node_modules/react/lib/ReactHostOperationHistoryHook.js ≠≠*/

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

if (process.env.NODE_ENV !== 'production') {
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

    fbjslibwarning__warning = function fbjslibwarning__warning(condition, format) {
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
 * @providesModule ReactComponentTreeHook
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
  .call(hasOwnProperty)
  // Strip regex characters so we can use it for regex
  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  // Remove hasOwnProperty from the template to make it generic
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
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

var reactlibReactComponentTreeHook__itemMap;
var reactlibReactComponentTreeHook__rootIDSet;

var reactlibReactComponentTreeHook__itemByKey;
var reactlibReactComponentTreeHook__rootByKey;

if (reactlibReactComponentTreeHook__canUseCollections) {
  reactlibReactComponentTreeHook__itemMap = new Map();
  reactlibReactComponentTreeHook__rootIDSet = new Set();
} else {
  reactlibReactComponentTreeHook__itemByKey = {};
  reactlibReactComponentTreeHook__rootByKey = {};
}

var reactlibReactComponentTreeHook__unmountedIDs = [];

// Use non-numeric keys to prevent V8 performance issues:
// https://github.com/facebook/react/pull/7232
function reactlibReactComponentTreeHook__getKeyFromID(id) {
  return '.' + id;
}
function reactlibReactComponentTreeHook__getIDFromKey(key) {
  return parseInt(key.substr(1), 10);
}

function reactlibReactComponentTreeHook__get(id) {
  if (reactlibReactComponentTreeHook__canUseCollections) {
    return reactlibReactComponentTreeHook__itemMap.get(id);
  } else {
    var key = reactlibReactComponentTreeHook__getKeyFromID(id);
    return reactlibReactComponentTreeHook__itemByKey[key];
  }
}

function reactlibReactComponentTreeHook__remove(id) {
  if (reactlibReactComponentTreeHook__canUseCollections) {
    reactlibReactComponentTreeHook__itemMap['delete'](id);
  } else {
    var key = reactlibReactComponentTreeHook__getKeyFromID(id);
    delete reactlibReactComponentTreeHook__itemByKey[key];
  }
}

function reactlibReactComponentTreeHook__create(id, element, parentID) {
  var item = {
    element: element,
    parentID: parentID,
    text: null,
    childIDs: [],
    isMounted: false,
    updateCount: 0
  };

  if (reactlibReactComponentTreeHook__canUseCollections) {
    reactlibReactComponentTreeHook__itemMap.set(id, item);
  } else {
    var key = reactlibReactComponentTreeHook__getKeyFromID(id);
    reactlibReactComponentTreeHook__itemByKey[key] = item;
  }
}

function reactlibReactComponentTreeHook__addRoot(id) {
  if (reactlibReactComponentTreeHook__canUseCollections) {
    reactlibReactComponentTreeHook__rootIDSet.add(id);
  } else {
    var key = reactlibReactComponentTreeHook__getKeyFromID(id);
    reactlibReactComponentTreeHook__rootByKey[key] = true;
  }
}

function reactlibReactComponentTreeHook__removeRoot(id) {
  if (reactlibReactComponentTreeHook__canUseCollections) {
    reactlibReactComponentTreeHook__rootIDSet['delete'](id);
  } else {
    var key = reactlibReactComponentTreeHook__getKeyFromID(id);
    delete reactlibReactComponentTreeHook__rootByKey[key];
  }
}

function reactlibReactComponentTreeHook__getRegisteredIDs() {
  if (reactlibReactComponentTreeHook__canUseCollections) {
    return Array.from(reactlibReactComponentTreeHook__itemMap.keys());
  } else {
    return Object.keys(reactlibReactComponentTreeHook__itemByKey).map(reactlibReactComponentTreeHook__getIDFromKey);
  }
}

function reactlibReactComponentTreeHook__getRootIDs() {
  if (reactlibReactComponentTreeHook__canUseCollections) {
    return Array.from(reactlibReactComponentTreeHook__rootIDSet.keys());
  } else {
    return Object.keys(reactlibReactComponentTreeHook__rootByKey).map(reactlibReactComponentTreeHook__getIDFromKey);
  }
}

function reactlibReactComponentTreeHook__purgeDeep(id) {
  var item = reactlibReactComponentTreeHook__get(id);
  if (item) {
    var childIDs = item.childIDs;

    reactlibReactComponentTreeHook__remove(id);
    childIDs.forEach(reactlibReactComponentTreeHook__purgeDeep);
  }
}

function reactlibReactComponentTreeHook__describeComponentFrame(name, source, ownerName) {
  return '\n    in ' + name + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
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
  process.env.NODE_ENV !== 'production' ? reactlibReactComponentTreeHook__warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
  return reactlibReactComponentTreeHook__describeComponentFrame(name, element && element._source, ownerName);
}

var reactlibReactComponentTreeHook__ReactComponentTreeHook = {
  onSetChildren: function (id, nextChildIDs) {
    var item = reactlibReactComponentTreeHook__get(id);
    item.childIDs = nextChildIDs;

    for (var i = 0; i < nextChildIDs.length; i++) {
      var nextChildID = nextChildIDs[i];
      var nextChild = reactlibReactComponentTreeHook__get(nextChildID);
      !nextChild ? process.env.NODE_ENV !== 'production' ? reactlibReactComponentTreeHook__invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : reactlibReactComponentTreeHook___prodInvariant('140') : void 0;
      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? process.env.NODE_ENV !== 'production' ? reactlibReactComponentTreeHook__invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : reactlibReactComponentTreeHook___prodInvariant('141') : void 0;
      !nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? reactlibReactComponentTreeHook__invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : reactlibReactComponentTreeHook___prodInvariant('71') : void 0;
      if (nextChild.parentID == null) {
        nextChild.parentID = id;
        // TODO: This shouldn't be necessary but mounting a new root during in
        // componentWillMount currently causes not-yet-mounted components to
        // be purged from our tree data so their parent ID is missing.
      }
      !(nextChild.parentID === id) ? process.env.NODE_ENV !== 'production' ? reactlibReactComponentTreeHook__invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : reactlibReactComponentTreeHook___prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
    }
  },
  onBeforeMountComponent: function (id, element, parentID) {
    reactlibReactComponentTreeHook__create(id, element, parentID);
  },
  onBeforeUpdateComponent: function (id, element) {
    var item = reactlibReactComponentTreeHook__get(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.element = element;
  },
  onMountComponent: function (id) {
    var item = reactlibReactComponentTreeHook__get(id);
    item.isMounted = true;
    var isRoot = item.parentID === 0;
    if (isRoot) {
      reactlibReactComponentTreeHook__addRoot(id);
    }
  },
  onUpdateComponent: function (id) {
    var item = reactlibReactComponentTreeHook__get(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.updateCount++;
  },
  onUnmountComponent: function (id) {
    var item = reactlibReactComponentTreeHook__get(id);
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
  purgeUnmountedComponents: function () {
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
  isMounted: function (id) {
    var item = reactlibReactComponentTreeHook__get(id);
    return item ? item.isMounted : false;
  },
  getCurrentStackAddendum: function (topElement) {
    var info = '';
    if (topElement) {
      var type = topElement.type;
      var name = typeof type === 'function' ? type.displayName || type.name : type;
      var owner = topElement._owner;
      info += reactlibReactComponentTreeHook__describeComponentFrame(name || 'Unknown', topElement._source, owner && owner.getName());
    }

    var currentOwner = reactlibReactComponentTreeHook__ReactCurrentOwner.current;
    var id = currentOwner && currentOwner._debugID;

    info += reactlibReactComponentTreeHook__ReactComponentTreeHook.getStackAddendumByID(id);
    return info;
  },
  getStackAddendumByID: function (id) {
    var info = '';
    while (id) {
      info += reactlibReactComponentTreeHook__describeID(id);
      id = reactlibReactComponentTreeHook__ReactComponentTreeHook.getParentID(id);
    }
    return info;
  },
  getChildIDs: function (id) {
    var item = reactlibReactComponentTreeHook__get(id);
    return item ? item.childIDs : [];
  },
  getDisplayName: function (id) {
    var element = reactlibReactComponentTreeHook__ReactComponentTreeHook.getElement(id);
    if (!element) {
      return null;
    }
    return reactlibReactComponentTreeHook__getDisplayName(element);
  },
  getElement: function (id) {
    var item = reactlibReactComponentTreeHook__get(id);
    return item ? item.element : null;
  },
  getOwnerID: function (id) {
    var element = reactlibReactComponentTreeHook__ReactComponentTreeHook.getElement(id);
    if (!element || !element._owner) {
      return null;
    }
    return element._owner._debugID;
  },
  getParentID: function (id) {
    var item = reactlibReactComponentTreeHook__get(id);
    return item ? item.parentID : null;
  },
  getSource: function (id) {
    var item = reactlibReactComponentTreeHook__get(id);
    var element = item ? item.element : null;
    var source = element != null ? element._source : null;
    return source;
  },
  getText: function (id) {
    var element = reactlibReactComponentTreeHook__ReactComponentTreeHook.getElement(id);
    if (typeof element === 'string') {
      return element;
    } else if (typeof element === 'number') {
      return '' + element;
    } else {
      return null;
    }
  },
  getUpdateCount: function (id) {
    var item = reactlibReactComponentTreeHook__get(id);
    return item ? item.updateCount : 0;
  },

  getRegisteredIDs: reactlibReactComponentTreeHook__getRegisteredIDs,

  getRootIDs: reactlibReactComponentTreeHook__getRootIDs
};

$m['react/lib/ReactComponentTreeHook'].exports = reactlibReactComponentTreeHook__ReactComponentTreeHook;
/*≠≠ node_modules/react/lib/ReactComponentTreeHook.js ≠≠*/

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
 * @providesModule checkReactTypeSpec
 */


var reactlibcheckReactTypeSpec___prodInvariant = $m['react/lib/reactProdInvariant'].exports;

var reactlibcheckReactTypeSpec__ReactPropTypeLocationNames = $m['react/lib/ReactPropTypeLocationNames'].exports;
var reactlibcheckReactTypeSpec__ReactPropTypesSecret = $m['react/lib/ReactPropTypesSecret'].exports;

var reactlibcheckReactTypeSpec__invariant = $m['fbjs/lib/invariant'].exports;
var reactlibcheckReactTypeSpec__warning = $m['fbjs/lib/warning'].exports;

var reactlibcheckReactTypeSpec__ReactComponentTreeHook;

if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
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
        !(typeof typeSpecs[typeSpecName] === 'function') ? process.env.NODE_ENV !== 'production' ? reactlibcheckReactTypeSpec__invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', reactlibcheckReactTypeSpec__ReactPropTypeLocationNames[location], typeSpecName) : reactlibcheckReactTypeSpec___prodInvariant('84', componentName || 'React class', reactlibcheckReactTypeSpec__ReactPropTypeLocationNames[location], typeSpecName) : void 0;
        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, reactlibcheckReactTypeSpec__ReactPropTypesSecret);
      } catch (ex) {
        error = ex;
      }
      process.env.NODE_ENV !== 'production' ? reactlibcheckReactTypeSpec__warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', reactlibcheckReactTypeSpec__ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
      if (error instanceof Error && !(error.message in reactlibcheckReactTypeSpec__loggedTypeFailures)) {
        // Only monitor this failure once because there tends to be a lot of the
        // same error.
        reactlibcheckReactTypeSpec__loggedTypeFailures[error.message] = true;

        var componentStackInfo = '';

        if (process.env.NODE_ENV !== 'production') {
          if (!reactlibcheckReactTypeSpec__ReactComponentTreeHook) {
            reactlibcheckReactTypeSpec__ReactComponentTreeHook = $m['react/lib/ReactComponentTreeHook'].exports;
          }
          if (debugID !== null) {
            componentStackInfo = reactlibcheckReactTypeSpec__ReactComponentTreeHook.getStackAddendumByID(debugID);
          } else if (element !== null) {
            componentStackInfo = reactlibcheckReactTypeSpec__ReactComponentTreeHook.getCurrentStackAddendum(element);
          }
        }

        process.env.NODE_ENV !== 'production' ? reactlibcheckReactTypeSpec__warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
      }
    }
  }
}

$m['react/lib/checkReactTypeSpec'].exports = reactlibcheckReactTypeSpec__checkReactTypeSpec;
/*≠≠ node_modules/react/lib/checkReactTypeSpec.js ≠≠*/

/*== node_modules/fbjs/lib/keyMirror.js ==*/
$m['fbjs/lib/keyMirror'] = { exports: {} };
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks static-only
 */


var fbjslibkeyMirror__invariant = $m['fbjs/lib/invariant'].exports;

/**
 * Constructs an enumeration with keys equal to their value.
 *
 * For example:
 *
 *   var COLORS = keyMirror({blue: null, red: null});
 *   var myColor = COLORS.blue;
 *   var isColorValid = !!COLORS[myColor];
 *
 * The last line could not be performed if the values of the generated enum were
 * not equal to their keys.
 *
 *   Input:  {key1: val1, key2: val2}
 *   Output: {key1: key1, key2: key2}
 *
 * @param {object} obj
 * @return {object}
 */
var fbjslibkeyMirror__keyMirror = function keyMirror(obj) {
  var ret = {};
  var key;
  !(obj instanceof Object && !Array.isArray(obj)) ? process.env.NODE_ENV !== 'production' ? fbjslibkeyMirror__invariant(false, 'keyMirror(...): Argument must be an object.') : fbjslibkeyMirror__invariant(false) : void 0;
  for (key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }
    ret[key] = key;
  }
  return ret;
};

$m['fbjs/lib/keyMirror'].exports = fbjslibkeyMirror__keyMirror;
/*≠≠ node_modules/fbjs/lib/keyMirror.js ≠≠*/

/*== node_modules/react/lib/ReactPropTypeLocations.js ==*/
$m['react/lib/ReactPropTypeLocations'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypeLocations
 */


var reactlibReactPropTypeLocations__keyMirror = $m['fbjs/lib/keyMirror'].exports;

var reactlibReactPropTypeLocations__ReactPropTypeLocations = reactlibReactPropTypeLocations__keyMirror({
  prop: null,
  context: null,
  childContext: null
});

$m['react/lib/ReactPropTypeLocations'].exports = reactlibReactPropTypeLocations__ReactPropTypeLocations;
/*≠≠ node_modules/react/lib/ReactPropTypeLocations.js ≠≠*/

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
 * @providesModule ReactElement
 */


var reactlibReactElement___assign = $m['object-assign'].exports;

var reactlibReactElement__ReactCurrentOwner = $m['react/lib/ReactCurrentOwner'].exports;

var reactlibReactElement__warning = $m['fbjs/lib/warning'].exports;
var reactlibReactElement__canDefineProperty = $m['react/lib/canDefineProperty'].exports;
var reactlibReactElement__hasOwnProperty = Object.prototype.hasOwnProperty;

// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var reactlibReactElement__REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

var reactlibReactElement__RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var reactlibReactElement__specialPropKeyWarningShown, reactlibReactElement__specialPropRefWarningShown;

function reactlibReactElement__hasValidRef(config) {
  if (process.env.NODE_ENV !== 'production') {
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
  if (process.env.NODE_ENV !== 'production') {
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
  var warnAboutAccessingKey = function () {
    if (!reactlibReactElement__specialPropKeyWarningShown) {
      reactlibReactElement__specialPropKeyWarningShown = true;
      process.env.NODE_ENV !== 'production' ? reactlibReactElement__warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function reactlibReactElement__defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!reactlibReactElement__specialPropRefWarningShown) {
      reactlibReactElement__specialPropRefWarningShown = true;
      process.env.NODE_ENV !== 'production' ? reactlibReactElement__warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
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
var reactlibReactElement__ReactElement = function (type, key, ref, self, source, owner, props) {
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

  if (process.env.NODE_ENV !== 'production') {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};
    var shadowChildren = Array.isArray(props.children) ? props.children.slice(0) : props.children;

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
      Object.defineProperty(element, '_shadowChildren', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: shadowChildren
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
      element._shadowChildren = shadowChildren;
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
  if (process.env.NODE_ENV !== 'production') {
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

reactlibReactElement__ReactElement.REACT_ELEMENT_TYPE = reactlibReactElement__REACT_ELEMENT_TYPE;

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
 * @providesModule ReactElementValidator
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
var reactlibReactElementValidator__ReactPropTypeLocations = $m['react/lib/ReactPropTypeLocations'].exports;

var reactlibReactElementValidator__checkReactTypeSpec = $m['react/lib/checkReactTypeSpec'].exports;

var reactlibReactElementValidator__canDefineProperty = $m['react/lib/canDefineProperty'].exports;
var reactlibReactElementValidator__getIteratorFn = $m['react/lib/getIteratorFn'].exports;
var reactlibReactElementValidator__warning = $m['fbjs/lib/warning'].exports;

function reactlibReactElementValidator__getDeclarationErrorAddendum() {
  if (reactlibReactElementValidator__ReactCurrentOwner.current) {
    var name = reactlibReactElementValidator__ReactCurrentOwner.current.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
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

  process.env.NODE_ENV !== 'production' ? reactlibReactElementValidator__warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, reactlibReactElementValidator__ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
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
    reactlibReactElementValidator__checkReactTypeSpec(componentClass.propTypes, element.props, reactlibReactElementValidator__ReactPropTypeLocations.prop, name, element, null);
  }
  if (typeof componentClass.getDefaultProps === 'function') {
    process.env.NODE_ENV !== 'production' ? reactlibReactElementValidator__warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

var reactlibReactElementValidator__ReactElementValidator = {

  createElement: function (type, props, children) {
    var validType = typeof type === 'string' || typeof type === 'function';
    // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.
    if (!validType) {
      process.env.NODE_ENV !== 'production' ? reactlibReactElementValidator__warning(false, 'React.createElement: type should not be null, undefined, boolean, or ' + 'number. It should be a string (for DOM elements) or a ReactClass ' + '(for composite components).%s', reactlibReactElementValidator__getDeclarationErrorAddendum()) : void 0;
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

  createFactory: function (type) {
    var validatedFactory = reactlibReactElementValidator__ReactElementValidator.createElement.bind(null, type);
    // Legacy hook TODO: Warn if this is accessed
    validatedFactory.type = type;

    if (process.env.NODE_ENV !== 'production') {
      if (reactlibReactElementValidator__canDefineProperty) {
        Object.defineProperty(validatedFactory, 'type', {
          enumerable: false,
          get: function () {
            process.env.NODE_ENV !== 'production' ? reactlibReactElementValidator__warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : void 0;
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

  cloneElement: function (element, props, children) {
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
 * @providesModule onlyChild
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
  !reactlibonlyChild__ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? reactlibonlyChild__invariant(false, 'React.Children.only expected to receive a single React element child.') : reactlibonlyChild___prodInvariant('143') : void 0;
  return children;
}

$m['react/lib/onlyChild'].exports = reactlibonlyChild__onlyChild;
/*≠≠ node_modules/react/lib/onlyChild.js ≠≠*/

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
 * @providesModule ReactPropTypes
 */


var reactlibReactPropTypes__ReactElement = $m['react/lib/ReactElement'].exports;
var reactlibReactPropTypes__ReactPropTypeLocationNames = $m['react/lib/ReactPropTypeLocationNames'].exports;
var reactlibReactPropTypes__ReactPropTypesSecret = $m['react/lib/ReactPropTypesSecret'].exports;

var reactlibReactPropTypes__emptyFunction = $m['fbjs/lib/emptyFunction'].exports;
var reactlibReactPropTypes__getIteratorFn = $m['react/lib/getIteratorFn'].exports;
var reactlibReactPropTypes__warning = $m['fbjs/lib/warning'].exports;

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

var reactlibReactPropTypes__ANONYMOUS = '<<anonymous>>';

var reactlibReactPropTypes__ReactPropTypes = {
  array: reactlibReactPropTypes__createPrimitiveTypeChecker('array'),
  bool: reactlibReactPropTypes__createPrimitiveTypeChecker('boolean'),
  func: reactlibReactPropTypes__createPrimitiveTypeChecker('function'),
  number: reactlibReactPropTypes__createPrimitiveTypeChecker('number'),
  object: reactlibReactPropTypes__createPrimitiveTypeChecker('object'),
  string: reactlibReactPropTypes__createPrimitiveTypeChecker('string'),
  symbol: reactlibReactPropTypes__createPrimitiveTypeChecker('symbol'),

  any: reactlibReactPropTypes__createAnyTypeChecker(),
  arrayOf: reactlibReactPropTypes__createArrayOfTypeChecker,
  element: reactlibReactPropTypes__createElementTypeChecker(),
  instanceOf: reactlibReactPropTypes__createInstanceTypeChecker,
  node: reactlibReactPropTypes__createNodeChecker(),
  objectOf: reactlibReactPropTypes__createObjectOfTypeChecker,
  oneOf: reactlibReactPropTypes__createEnumTypeChecker,
  oneOfType: reactlibReactPropTypes__createUnionTypeChecker,
  shape: reactlibReactPropTypes__createShapeTypeChecker
};

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
/*eslint-disable no-self-compare*/
function reactlibReactPropTypes__is(x, y) {
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
 * PropTypes directly and inspect their output. However we don't use real
 * Errors anymore. We don't inspect their stack anyway, and creating them
 * is prohibitively expensive if they are created too often, such as what
 * happens in oneOfType() for any type before the one that matched.
 */
function reactlibReactPropTypes__PropTypeError(message) {
  this.message = message;
  this.stack = '';
}
// Make `instanceof Error` still work for returned errors.
reactlibReactPropTypes__PropTypeError.prototype = Error.prototype;

function reactlibReactPropTypes__createChainableTypeChecker(validate) {
  if (process.env.NODE_ENV !== 'production') {
    var manualPropTypeCallCache = {};
  }
  function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
    componentName = componentName || reactlibReactPropTypes__ANONYMOUS;
    propFullName = propFullName || propName;
    if (process.env.NODE_ENV !== 'production') {
      if (secret !== reactlibReactPropTypes__ReactPropTypesSecret && typeof console !== 'undefined') {
        var cacheKey = componentName + ':' + propName;
        if (!manualPropTypeCallCache[cacheKey]) {
          process.env.NODE_ENV !== 'production' ? reactlibReactPropTypes__warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will not work in the next major version. You may be ' + 'seeing this warning due to a third-party PropTypes library. ' + 'See https://fb.me/react-warning-dont-call-proptypes for details.', propFullName, componentName) : void 0;
          manualPropTypeCallCache[cacheKey] = true;
        }
      }
    }
    if (props[propName] == null) {
      var locationName = reactlibReactPropTypes__ReactPropTypeLocationNames[location];
      if (isRequired) {
        return new reactlibReactPropTypes__PropTypeError('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
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

function reactlibReactPropTypes__createPrimitiveTypeChecker(expectedType) {
  function validate(props, propName, componentName, location, propFullName, secret) {
    var propValue = props[propName];
    var propType = reactlibReactPropTypes__getPropType(propValue);
    if (propType !== expectedType) {
      var locationName = reactlibReactPropTypes__ReactPropTypeLocationNames[location];
      // `propValue` being instance of, say, date/regexp, pass the 'object'
      // check, but we can offer a more precise error message here rather than
      // 'of type `object`'.
      var preciseType = reactlibReactPropTypes__getPreciseType(propValue);

      return new reactlibReactPropTypes__PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
    }
    return null;
  }
  return reactlibReactPropTypes__createChainableTypeChecker(validate);
}

function reactlibReactPropTypes__createAnyTypeChecker() {
  return reactlibReactPropTypes__createChainableTypeChecker(reactlibReactPropTypes__emptyFunction.thatReturns(null));
}

function reactlibReactPropTypes__createArrayOfTypeChecker(typeChecker) {
  function validate(props, propName, componentName, location, propFullName) {
    if (typeof typeChecker !== 'function') {
      return new reactlibReactPropTypes__PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
    }
    var propValue = props[propName];
    if (!Array.isArray(propValue)) {
      var locationName = reactlibReactPropTypes__ReactPropTypeLocationNames[location];
      var propType = reactlibReactPropTypes__getPropType(propValue);
      return new reactlibReactPropTypes__PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
    }
    for (var i = 0; i < propValue.length; i++) {
      var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', reactlibReactPropTypes__ReactPropTypesSecret);
      if (error instanceof Error) {
        return error;
      }
    }
    return null;
  }
  return reactlibReactPropTypes__createChainableTypeChecker(validate);
}

function reactlibReactPropTypes__createElementTypeChecker() {
  function validate(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];
    if (!reactlibReactPropTypes__ReactElement.isValidElement(propValue)) {
      var locationName = reactlibReactPropTypes__ReactPropTypeLocationNames[location];
      var propType = reactlibReactPropTypes__getPropType(propValue);
      return new reactlibReactPropTypes__PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
    }
    return null;
  }
  return reactlibReactPropTypes__createChainableTypeChecker(validate);
}

function reactlibReactPropTypes__createInstanceTypeChecker(expectedClass) {
  function validate(props, propName, componentName, location, propFullName) {
    if (!(props[propName] instanceof expectedClass)) {
      var locationName = reactlibReactPropTypes__ReactPropTypeLocationNames[location];
      var expectedClassName = expectedClass.name || reactlibReactPropTypes__ANONYMOUS;
      var actualClassName = reactlibReactPropTypes__getClassName(props[propName]);
      return new reactlibReactPropTypes__PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
    }
    return null;
  }
  return reactlibReactPropTypes__createChainableTypeChecker(validate);
}

function reactlibReactPropTypes__createEnumTypeChecker(expectedValues) {
  if (!Array.isArray(expectedValues)) {
    process.env.NODE_ENV !== 'production' ? reactlibReactPropTypes__warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
    return reactlibReactPropTypes__emptyFunction.thatReturnsNull;
  }

  function validate(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];
    for (var i = 0; i < expectedValues.length; i++) {
      if (reactlibReactPropTypes__is(propValue, expectedValues[i])) {
        return null;
      }
    }

    var locationName = reactlibReactPropTypes__ReactPropTypeLocationNames[location];
    var valuesString = JSON.stringify(expectedValues);
    return new reactlibReactPropTypes__PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
  }
  return reactlibReactPropTypes__createChainableTypeChecker(validate);
}

function reactlibReactPropTypes__createObjectOfTypeChecker(typeChecker) {
  function validate(props, propName, componentName, location, propFullName) {
    if (typeof typeChecker !== 'function') {
      return new reactlibReactPropTypes__PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
    }
    var propValue = props[propName];
    var propType = reactlibReactPropTypes__getPropType(propValue);
    if (propType !== 'object') {
      var locationName = reactlibReactPropTypes__ReactPropTypeLocationNames[location];
      return new reactlibReactPropTypes__PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
    }
    for (var key in propValue) {
      if (propValue.hasOwnProperty(key)) {
        var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, reactlibReactPropTypes__ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
    }
    return null;
  }
  return reactlibReactPropTypes__createChainableTypeChecker(validate);
}

function reactlibReactPropTypes__createUnionTypeChecker(arrayOfTypeCheckers) {
  if (!Array.isArray(arrayOfTypeCheckers)) {
    process.env.NODE_ENV !== 'production' ? reactlibReactPropTypes__warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
    return reactlibReactPropTypes__emptyFunction.thatReturnsNull;
  }

  function validate(props, propName, componentName, location, propFullName) {
    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (checker(props, propName, componentName, location, propFullName, reactlibReactPropTypes__ReactPropTypesSecret) == null) {
        return null;
      }
    }

    var locationName = reactlibReactPropTypes__ReactPropTypeLocationNames[location];
    return new reactlibReactPropTypes__PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
  }
  return reactlibReactPropTypes__createChainableTypeChecker(validate);
}

function reactlibReactPropTypes__createNodeChecker() {
  function validate(props, propName, componentName, location, propFullName) {
    if (!reactlibReactPropTypes__isNode(props[propName])) {
      var locationName = reactlibReactPropTypes__ReactPropTypeLocationNames[location];
      return new reactlibReactPropTypes__PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
    }
    return null;
  }
  return reactlibReactPropTypes__createChainableTypeChecker(validate);
}

function reactlibReactPropTypes__createShapeTypeChecker(shapeTypes) {
  function validate(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];
    var propType = reactlibReactPropTypes__getPropType(propValue);
    if (propType !== 'object') {
      var locationName = reactlibReactPropTypes__ReactPropTypeLocationNames[location];
      return new reactlibReactPropTypes__PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
    }
    for (var key in shapeTypes) {
      var checker = shapeTypes[key];
      if (!checker) {
        continue;
      }
      var error = checker(propValue, key, componentName, location, propFullName + '.' + key, reactlibReactPropTypes__ReactPropTypesSecret);
      if (error) {
        return error;
      }
    }
    return null;
  }
  return reactlibReactPropTypes__createChainableTypeChecker(validate);
}

function reactlibReactPropTypes__isNode(propValue) {
  switch (typeof propValue) {
    case 'number':
    case 'string':
    case 'undefined':
      return true;
    case 'boolean':
      return !propValue;
    case 'object':
      if (Array.isArray(propValue)) {
        return propValue.every(reactlibReactPropTypes__isNode);
      }
      if (propValue === null || reactlibReactPropTypes__ReactElement.isValidElement(propValue)) {
        return true;
      }

      var iteratorFn = reactlibReactPropTypes__getIteratorFn(propValue);
      if (iteratorFn) {
        var iterator = iteratorFn.call(propValue);
        var step;
        if (iteratorFn !== propValue.entries) {
          while (!(step = iterator.next()).done) {
            if (!reactlibReactPropTypes__isNode(step.value)) {
              return false;
            }
          }
        } else {
          // Iterator will provide entry [k,v] tuples rather than values.
          while (!(step = iterator.next()).done) {
            var entry = step.value;
            if (entry) {
              if (!reactlibReactPropTypes__isNode(entry[1])) {
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

function reactlibReactPropTypes__isSymbol(propType, propValue) {
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
function reactlibReactPropTypes__getPropType(propValue) {
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
  if (reactlibReactPropTypes__isSymbol(propType, propValue)) {
    return 'symbol';
  }
  return propType;
}

// This handles more types than `getPropType`. Only used for error messages.
// See `createPrimitiveTypeChecker`.
function reactlibReactPropTypes__getPreciseType(propValue) {
  var propType = reactlibReactPropTypes__getPropType(propValue);
  if (propType === 'object') {
    if (propValue instanceof Date) {
      return 'date';
    } else if (propValue instanceof RegExp) {
      return 'regexp';
    }
  }
  return propType;
}

// Returns class name of the object, if any.
function reactlibReactPropTypes__getClassName(propValue) {
  if (!propValue.constructor || !propValue.constructor.name) {
    return reactlibReactPropTypes__ANONYMOUS;
  }
  return propValue.constructor.name;
}

$m['react/lib/ReactPropTypes'].exports = reactlibReactPropTypes__ReactPropTypes;
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
 * @providesModule ReactDOMFactories
 */


var reactlibReactDOMFactories__ReactElement = $m['react/lib/ReactElement'].exports;

/**
 * Create a factory that creates HTML tag elements.
 *
 * @private
 */
var reactlibReactDOMFactories__createDOMFactory = reactlibReactDOMFactories__ReactElement.createFactory;
if (process.env.NODE_ENV !== 'production') {
  var reactlibReactDOMFactories__ReactElementValidator = $m['react/lib/ReactElementValidator'].exports;
  reactlibReactDOMFactories__createDOMFactory = reactlibReactDOMFactories__ReactElementValidator.createFactory;
}

/**
 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
 * This is also accessible via `React.DOM`.
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
 * @providesModule ReactNoopUpdateQueue
 */


var reactlibReactNoopUpdateQueue__warning = $m['fbjs/lib/warning'].exports;

function reactlibReactNoopUpdateQueue__warnNoop(publicInstance, callerName) {
  if (process.env.NODE_ENV !== 'production') {
    var constructor = publicInstance.constructor;
    process.env.NODE_ENV !== 'production' ? reactlibReactNoopUpdateQueue__warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
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
  isMounted: function (publicInstance) {
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
  enqueueCallback: function (publicInstance, callback) {},

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
  enqueueReplaceState: function (publicInstance, completeState) {
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
  enqueueSetState: function (publicInstance, partialState) {
    reactlibReactNoopUpdateQueue__warnNoop(publicInstance, 'setState');
  }
};

$m['react/lib/ReactNoopUpdateQueue'].exports = reactlibReactNoopUpdateQueue__ReactNoopUpdateQueue;
/*≠≠ node_modules/react/lib/ReactNoopUpdateQueue.js ≠≠*/

/*== node_modules/react/lib/ReactComponent.js ==*/
$m['react/lib/ReactComponent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponent
 */


var reactlibReactComponent___prodInvariant = $m['react/lib/reactProdInvariant'].exports;

var reactlibReactComponent__ReactNoopUpdateQueue = $m['react/lib/ReactNoopUpdateQueue'].exports;

var reactlibReactComponent__canDefineProperty = $m['react/lib/canDefineProperty'].exports;
var reactlibReactComponent__emptyObject = $m['fbjs/lib/emptyObject'].exports;
var reactlibReactComponent__invariant = $m['fbjs/lib/invariant'].exports;
var reactlibReactComponent__warning = $m['fbjs/lib/warning'].exports;

/**
 * Base class helpers for the updating state of a component.
 */
function reactlibReactComponent__ReactComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = reactlibReactComponent__emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || reactlibReactComponent__ReactNoopUpdateQueue;
}

reactlibReactComponent__ReactComponent.prototype.isReactComponent = {};

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
reactlibReactComponent__ReactComponent.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? reactlibReactComponent__invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : reactlibReactComponent___prodInvariant('85') : void 0;
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
reactlibReactComponent__ReactComponent.prototype.forceUpdate = function (callback) {
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
if (process.env.NODE_ENV !== 'production') {
  var reactlibReactComponent__deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var reactlibReactComponent__defineDeprecationWarning = function (methodName, info) {
    if (reactlibReactComponent__canDefineProperty) {
      Object.defineProperty(reactlibReactComponent__ReactComponent.prototype, methodName, {
        get: function () {
          process.env.NODE_ENV !== 'production' ? reactlibReactComponent__warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : void 0;
          return undefined;
        }
      });
    }
  };
  for (var reactlibReactComponent__fnName in reactlibReactComponent__deprecatedAPIs) {
    if (reactlibReactComponent__deprecatedAPIs.hasOwnProperty(reactlibReactComponent__fnName)) {
      reactlibReactComponent__defineDeprecationWarning(reactlibReactComponent__fnName, reactlibReactComponent__deprecatedAPIs[reactlibReactComponent__fnName]);
    }
  }
}

$m['react/lib/ReactComponent'].exports = reactlibReactComponent__ReactComponent;
/*≠≠ node_modules/react/lib/ReactComponent.js ≠≠*/

/*== node_modules/react/lib/ReactClass.js ==*/
$m['react/lib/ReactClass'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactClass
 */


var reactlibReactClass___prodInvariant = $m['react/lib/reactProdInvariant'].exports,
    reactlibReactClass___assign = $m['object-assign'].exports;

var reactlibReactClass__ReactComponent = $m['react/lib/ReactComponent'].exports;
var reactlibReactClass__ReactElement = $m['react/lib/ReactElement'].exports;
var reactlibReactClass__ReactPropTypeLocations = $m['react/lib/ReactPropTypeLocations'].exports;
var reactlibReactClass__ReactPropTypeLocationNames = $m['react/lib/ReactPropTypeLocationNames'].exports;
var reactlibReactClass__ReactNoopUpdateQueue = $m['react/lib/ReactNoopUpdateQueue'].exports;

var reactlibReactClass__emptyObject = $m['fbjs/lib/emptyObject'].exports;
var reactlibReactClass__invariant = $m['fbjs/lib/invariant'].exports;
var reactlibReactClass__keyMirror = $m['fbjs/lib/keyMirror'].exports;
var reactlibReactClass__keyOf = $m['fbjs/lib/keyOf'].exports;
var reactlibReactClass__warning = $m['fbjs/lib/warning'].exports;

var reactlibReactClass__MIXINS_KEY = reactlibReactClass__keyOf({ mixins: null });

/**
 * Policies that describe methods in `ReactClassInterface`.
 */
var reactlibReactClass__SpecPolicy = reactlibReactClass__keyMirror({
  /**
   * These methods may be defined only once by the class specification or mixin.
   */
  DEFINE_ONCE: null,
  /**
   * These methods may be defined by both the class specification and mixins.
   * Subsequent definitions will be chained. These methods must return void.
   */
  DEFINE_MANY: null,
  /**
   * These methods are overriding the base class.
   */
  OVERRIDE_BASE: null,
  /**
   * These methods are similar to DEFINE_MANY, except we assume they return
   * objects. We try to merge the keys of the return values of all the mixed in
   * functions. If there is a key conflict we throw.
   */
  DEFINE_MANY_MERGED: null
});

var reactlibReactClass__injectedMixins = [];

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
var reactlibReactClass__ReactClassInterface = {

  /**
   * An array of Mixin objects to include when defining your component.
   *
   * @type {array}
   * @optional
   */
  mixins: reactlibReactClass__SpecPolicy.DEFINE_MANY,

  /**
   * An object containing properties and methods that should be defined on
   * the component's constructor instead of its prototype (static methods).
   *
   * @type {object}
   * @optional
   */
  statics: reactlibReactClass__SpecPolicy.DEFINE_MANY,

  /**
   * Definition of prop types for this component.
   *
   * @type {object}
   * @optional
   */
  propTypes: reactlibReactClass__SpecPolicy.DEFINE_MANY,

  /**
   * Definition of context types for this component.
   *
   * @type {object}
   * @optional
   */
  contextTypes: reactlibReactClass__SpecPolicy.DEFINE_MANY,

  /**
   * Definition of context types this component sets for its children.
   *
   * @type {object}
   * @optional
   */
  childContextTypes: reactlibReactClass__SpecPolicy.DEFINE_MANY,

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
  getDefaultProps: reactlibReactClass__SpecPolicy.DEFINE_MANY_MERGED,

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
  getInitialState: reactlibReactClass__SpecPolicy.DEFINE_MANY_MERGED,

  /**
   * @return {object}
   * @optional
   */
  getChildContext: reactlibReactClass__SpecPolicy.DEFINE_MANY_MERGED,

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
   * @nosideeffects
   * @required
   */
  render: reactlibReactClass__SpecPolicy.DEFINE_ONCE,

  // ==== Delegate methods ====

  /**
   * Invoked when the component is initially created and about to be mounted.
   * This may have side effects, but any external subscriptions or data created
   * by this method must be cleaned up in `componentWillUnmount`.
   *
   * @optional
   */
  componentWillMount: reactlibReactClass__SpecPolicy.DEFINE_MANY,

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
  componentDidMount: reactlibReactClass__SpecPolicy.DEFINE_MANY,

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
  componentWillReceiveProps: reactlibReactClass__SpecPolicy.DEFINE_MANY,

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
  shouldComponentUpdate: reactlibReactClass__SpecPolicy.DEFINE_ONCE,

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
  componentWillUpdate: reactlibReactClass__SpecPolicy.DEFINE_MANY,

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
  componentDidUpdate: reactlibReactClass__SpecPolicy.DEFINE_MANY,

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
  componentWillUnmount: reactlibReactClass__SpecPolicy.DEFINE_MANY,

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
  updateComponent: reactlibReactClass__SpecPolicy.OVERRIDE_BASE

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
var reactlibReactClass__RESERVED_SPEC_KEYS = {
  displayName: function (Constructor, displayName) {
    Constructor.displayName = displayName;
  },
  mixins: function (Constructor, mixins) {
    if (mixins) {
      for (var i = 0; i < mixins.length; i++) {
        reactlibReactClass__mixSpecIntoComponent(Constructor, mixins[i]);
      }
    }
  },
  childContextTypes: function (Constructor, childContextTypes) {
    if (process.env.NODE_ENV !== 'production') {
      reactlibReactClass__validateTypeDef(Constructor, childContextTypes, reactlibReactClass__ReactPropTypeLocations.childContext);
    }
    Constructor.childContextTypes = reactlibReactClass___assign({}, Constructor.childContextTypes, childContextTypes);
  },
  contextTypes: function (Constructor, contextTypes) {
    if (process.env.NODE_ENV !== 'production') {
      reactlibReactClass__validateTypeDef(Constructor, contextTypes, reactlibReactClass__ReactPropTypeLocations.context);
    }
    Constructor.contextTypes = reactlibReactClass___assign({}, Constructor.contextTypes, contextTypes);
  },
  /**
   * Special case getDefaultProps which should move into statics but requires
   * automatic merging.
   */
  getDefaultProps: function (Constructor, getDefaultProps) {
    if (Constructor.getDefaultProps) {
      Constructor.getDefaultProps = reactlibReactClass__createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
    } else {
      Constructor.getDefaultProps = getDefaultProps;
    }
  },
  propTypes: function (Constructor, propTypes) {
    if (process.env.NODE_ENV !== 'production') {
      reactlibReactClass__validateTypeDef(Constructor, propTypes, reactlibReactClass__ReactPropTypeLocations.prop);
    }
    Constructor.propTypes = reactlibReactClass___assign({}, Constructor.propTypes, propTypes);
  },
  statics: function (Constructor, statics) {
    reactlibReactClass__mixStaticSpecIntoComponent(Constructor, statics);
  },
  autobind: function () {} };

// noop
function reactlibReactClass__validateTypeDef(Constructor, typeDef, location) {
  for (var propName in typeDef) {
    if (typeDef.hasOwnProperty(propName)) {
      // use a warning instead of an invariant so components
      // don't show up in prod but only in __DEV__
      process.env.NODE_ENV !== 'production' ? reactlibReactClass__warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', reactlibReactClass__ReactPropTypeLocationNames[location], propName) : void 0;
    }
  }
}

function reactlibReactClass__validateMethodOverride(isAlreadyDefined, name) {
  var specPolicy = reactlibReactClass__ReactClassInterface.hasOwnProperty(name) ? reactlibReactClass__ReactClassInterface[name] : null;

  // Disallow overriding of base class methods unless explicitly allowed.
  if (reactlibReactClass__ReactClassMixin.hasOwnProperty(name)) {
    !(specPolicy === reactlibReactClass__SpecPolicy.OVERRIDE_BASE) ? process.env.NODE_ENV !== 'production' ? reactlibReactClass__invariant(false, 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.', name) : reactlibReactClass___prodInvariant('73', name) : void 0;
  }

  // Disallow defining methods more than once unless explicitly allowed.
  if (isAlreadyDefined) {
    !(specPolicy === reactlibReactClass__SpecPolicy.DEFINE_MANY || specPolicy === reactlibReactClass__SpecPolicy.DEFINE_MANY_MERGED) ? process.env.NODE_ENV !== 'production' ? reactlibReactClass__invariant(false, 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : reactlibReactClass___prodInvariant('74', name) : void 0;
  }
}

/**
 * Mixin helper which handles policy validation and reserved
 * specification keys when building React classes.
 */
function reactlibReactClass__mixSpecIntoComponent(Constructor, spec) {
  if (!spec) {
    if (process.env.NODE_ENV !== 'production') {
      var typeofSpec = typeof spec;
      var isMixinValid = typeofSpec === 'object' && spec !== null;

      process.env.NODE_ENV !== 'production' ? reactlibReactClass__warning(isMixinValid, '%s: You\'re attempting to include a mixin that is either null ' + 'or not an object. Check the mixins included by the component, ' + 'as well as any mixins they include themselves. ' + 'Expected object but got %s.', Constructor.displayName || 'ReactClass', spec === null ? null : typeofSpec) : void 0;
    }

    return;
  }

  !(typeof spec !== 'function') ? process.env.NODE_ENV !== 'production' ? reactlibReactClass__invariant(false, 'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.') : reactlibReactClass___prodInvariant('75') : void 0;
  !!reactlibReactClass__ReactElement.isValidElement(spec) ? process.env.NODE_ENV !== 'production' ? reactlibReactClass__invariant(false, 'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.') : reactlibReactClass___prodInvariant('76') : void 0;

  var proto = Constructor.prototype;
  var autoBindPairs = proto.__reactAutoBindPairs;

  // By handling mixins before any other properties, we ensure the same
  // chaining order is applied to methods with DEFINE_MANY policy, whether
  // mixins are listed before or after these methods in the spec.
  if (spec.hasOwnProperty(reactlibReactClass__MIXINS_KEY)) {
    reactlibReactClass__RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
  }

  for (var name in spec) {
    if (!spec.hasOwnProperty(name)) {
      continue;
    }

    if (name === reactlibReactClass__MIXINS_KEY) {
      // We have already handled mixins in a special case above.
      continue;
    }

    var property = spec[name];
    var isAlreadyDefined = proto.hasOwnProperty(name);
    reactlibReactClass__validateMethodOverride(isAlreadyDefined, name);

    if (reactlibReactClass__RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
      reactlibReactClass__RESERVED_SPEC_KEYS[name](Constructor, property);
    } else {
      // Setup methods on prototype:
      // The following member methods should not be automatically bound:
      // 1. Expected ReactClass methods (in the "interface").
      // 2. Overridden methods (that were mixed in).
      var isReactClassMethod = reactlibReactClass__ReactClassInterface.hasOwnProperty(name);
      var isFunction = typeof property === 'function';
      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

      if (shouldAutoBind) {
        autoBindPairs.push(name, property);
        proto[name] = property;
      } else {
        if (isAlreadyDefined) {
          var specPolicy = reactlibReactClass__ReactClassInterface[name];

          // These cases should already be caught by validateMethodOverride.
          !(isReactClassMethod && (specPolicy === reactlibReactClass__SpecPolicy.DEFINE_MANY_MERGED || specPolicy === reactlibReactClass__SpecPolicy.DEFINE_MANY)) ? process.env.NODE_ENV !== 'production' ? reactlibReactClass__invariant(false, 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', specPolicy, name) : reactlibReactClass___prodInvariant('77', specPolicy, name) : void 0;

          // For methods which are defined more than once, call the existing
          // methods before calling the new property, merging if appropriate.
          if (specPolicy === reactlibReactClass__SpecPolicy.DEFINE_MANY_MERGED) {
            proto[name] = reactlibReactClass__createMergedResultFunction(proto[name], property);
          } else if (specPolicy === reactlibReactClass__SpecPolicy.DEFINE_MANY) {
            proto[name] = reactlibReactClass__createChainedFunction(proto[name], property);
          }
        } else {
          proto[name] = property;
          if (process.env.NODE_ENV !== 'production') {
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

function reactlibReactClass__mixStaticSpecIntoComponent(Constructor, statics) {
  if (!statics) {
    return;
  }
  for (var name in statics) {
    var property = statics[name];
    if (!statics.hasOwnProperty(name)) {
      continue;
    }

    var isReserved = name in reactlibReactClass__RESERVED_SPEC_KEYS;
    !!isReserved ? process.env.NODE_ENV !== 'production' ? reactlibReactClass__invariant(false, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', name) : reactlibReactClass___prodInvariant('78', name) : void 0;

    var isInherited = name in Constructor;
    !!isInherited ? process.env.NODE_ENV !== 'production' ? reactlibReactClass__invariant(false, 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : reactlibReactClass___prodInvariant('79', name) : void 0;
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
function reactlibReactClass__mergeIntoWithNoDuplicateKeys(one, two) {
  !(one && two && typeof one === 'object' && typeof two === 'object') ? process.env.NODE_ENV !== 'production' ? reactlibReactClass__invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : reactlibReactClass___prodInvariant('80') : void 0;

  for (var key in two) {
    if (two.hasOwnProperty(key)) {
      !(one[key] === undefined) ? process.env.NODE_ENV !== 'production' ? reactlibReactClass__invariant(false, 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.', key) : reactlibReactClass___prodInvariant('81', key) : void 0;
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
function reactlibReactClass__createMergedResultFunction(one, two) {
  return function mergedResult() {
    var a = one.apply(this, arguments);
    var b = two.apply(this, arguments);
    if (a == null) {
      return b;
    } else if (b == null) {
      return a;
    }
    var c = {};
    reactlibReactClass__mergeIntoWithNoDuplicateKeys(c, a);
    reactlibReactClass__mergeIntoWithNoDuplicateKeys(c, b);
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
function reactlibReactClass__createChainedFunction(one, two) {
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
function reactlibReactClass__bindAutoBindMethod(component, method) {
  var boundMethod = method.bind(component);
  if (process.env.NODE_ENV !== 'production') {
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
        process.env.NODE_ENV !== 'production' ? reactlibReactClass__warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : void 0;
      } else if (!args.length) {
        process.env.NODE_ENV !== 'production' ? reactlibReactClass__warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : void 0;
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
function reactlibReactClass__bindAutoBindMethods(component) {
  var pairs = component.__reactAutoBindPairs;
  for (var i = 0; i < pairs.length; i += 2) {
    var autoBindKey = pairs[i];
    var method = pairs[i + 1];
    component[autoBindKey] = reactlibReactClass__bindAutoBindMethod(component, method);
  }
}

/**
 * Add more to the ReactClass base class. These are all legacy features and
 * therefore not already part of the modern ReactComponent.
 */
var reactlibReactClass__ReactClassMixin = {

  /**
   * TODO: This will be deprecated because state should always keep a consistent
   * type signature and the only use case for this, is to avoid that.
   */
  replaceState: function (newState, callback) {
    this.updater.enqueueReplaceState(this, newState);
    if (callback) {
      this.updater.enqueueCallback(this, callback, 'replaceState');
    }
  },

  /**
   * Checks whether or not this composite component is mounted.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function () {
    return this.updater.isMounted(this);
  }
};

var reactlibReactClass__ReactClassComponent = function () {};
reactlibReactClass___assign(reactlibReactClass__ReactClassComponent.prototype, reactlibReactClass__ReactComponent.prototype, reactlibReactClass__ReactClassMixin);

/**
 * Module for creating composite components.
 *
 * @class ReactClass
 */
var reactlibReactClass__ReactClass = {

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  createClass: function (spec) {
    var Constructor = function (props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (process.env.NODE_ENV !== 'production') {
        process.env.NODE_ENV !== 'production' ? reactlibReactClass__warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
      }

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        reactlibReactClass__bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = reactlibReactClass__emptyObject;
      this.updater = updater || reactlibReactClass__ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (process.env.NODE_ENV !== 'production') {
        // We allow auto-mocks to proceed as if they're returning null.
        if (initialState === undefined && this.getInitialState._isMockFunction) {
          // This is probably bad practice. Consider warning here and
          // deprecating this convenience.
          initialState = null;
        }
      }
      !(typeof initialState === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? reactlibReactClass__invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : reactlibReactClass___prodInvariant('82', Constructor.displayName || 'ReactCompositeComponent') : void 0;

      this.state = initialState;
    };
    Constructor.prototype = new reactlibReactClass__ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    reactlibReactClass__injectedMixins.forEach(reactlibReactClass__mixSpecIntoComponent.bind(null, Constructor));

    reactlibReactClass__mixSpecIntoComponent(Constructor, spec);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (process.env.NODE_ENV !== 'production') {
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

    !Constructor.prototype.render ? process.env.NODE_ENV !== 'production' ? reactlibReactClass__invariant(false, 'createClass(...): Class specification must implement a `render` method.') : reactlibReactClass___prodInvariant('83') : void 0;

    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? reactlibReactClass__warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
      process.env.NODE_ENV !== 'production' ? reactlibReactClass__warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
    }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in reactlibReactClass__ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  },

  injection: {
    injectMixin: function (mixin) {
      reactlibReactClass__injectedMixins.push(mixin);
    }
  }

};

$m['react/lib/ReactClass'].exports = reactlibReactClass__ReactClass;
/*≠≠ node_modules/react/lib/ReactClass.js ≠≠*/

/*== node_modules/react/lib/ReactPureComponent.js ==*/
$m['react/lib/ReactPureComponent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPureComponent
 */


var reactlibReactPureComponent___assign = $m['object-assign'].exports;

var reactlibReactPureComponent__ReactComponent = $m['react/lib/ReactComponent'].exports;
var reactlibReactPureComponent__ReactNoopUpdateQueue = $m['react/lib/ReactNoopUpdateQueue'].exports;

var reactlibReactPureComponent__emptyObject = $m['fbjs/lib/emptyObject'].exports;

/**
 * Base class helpers for the updating state of a component.
 */
function reactlibReactPureComponent__ReactPureComponent(props, context, updater) {
  // Duplicated from ReactComponent.
  this.props = props;
  this.context = context;
  this.refs = reactlibReactPureComponent__emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || reactlibReactPureComponent__ReactNoopUpdateQueue;
}

function reactlibReactPureComponent__ComponentDummy() {}
reactlibReactPureComponent__ComponentDummy.prototype = reactlibReactPureComponent__ReactComponent.prototype;
reactlibReactPureComponent__ReactPureComponent.prototype = new reactlibReactPureComponent__ComponentDummy();
reactlibReactPureComponent__ReactPureComponent.prototype.constructor = reactlibReactPureComponent__ReactPureComponent;
// Avoid an extra prototype jump for these methods.
reactlibReactPureComponent___assign(reactlibReactPureComponent__ReactPureComponent.prototype, reactlibReactPureComponent__ReactComponent.prototype);
reactlibReactPureComponent__ReactPureComponent.prototype.isPureReactComponent = true;

$m['react/lib/ReactPureComponent'].exports = reactlibReactPureComponent__ReactPureComponent;
/*≠≠ node_modules/react/lib/ReactPureComponent.js ≠≠*/

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
 * @providesModule traverseAllChildren
 */


var reactlibtraverseAllChildren___prodInvariant = $m['react/lib/reactProdInvariant'].exports;

var reactlibtraverseAllChildren__ReactCurrentOwner = $m['react/lib/ReactCurrentOwner'].exports;
var reactlibtraverseAllChildren__ReactElement = $m['react/lib/ReactElement'].exports;

var reactlibtraverseAllChildren__getIteratorFn = $m['react/lib/getIteratorFn'].exports;
var reactlibtraverseAllChildren__invariant = $m['fbjs/lib/invariant'].exports;
var reactlibtraverseAllChildren__KeyEscapeUtils = $m['react/lib/KeyEscapeUtils'].exports;
var reactlibtraverseAllChildren__warning = $m['fbjs/lib/warning'].exports;

var reactlibtraverseAllChildren__SEPARATOR = '.';
var reactlibtraverseAllChildren__SUBSEPARATOR = ':';

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

  if (children === null || type === 'string' || type === 'number' || reactlibtraverseAllChildren__ReactElement.isValidElement(children)) {
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
        if (process.env.NODE_ENV !== 'production') {
          var mapsAsChildrenAddendum = '';
          if (reactlibtraverseAllChildren__ReactCurrentOwner.current) {
            var mapsAsChildrenOwnerName = reactlibtraverseAllChildren__ReactCurrentOwner.current.getName();
            if (mapsAsChildrenOwnerName) {
              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
            }
          }
          process.env.NODE_ENV !== 'production' ? reactlibtraverseAllChildren__warning(reactlibtraverseAllChildren__didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
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
      if (process.env.NODE_ENV !== 'production') {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
        if (children._isReactElement) {
          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
        }
        if (reactlibtraverseAllChildren__ReactCurrentOwner.current) {
          var name = reactlibtraverseAllChildren__ReactCurrentOwner.current.getName();
          if (name) {
            addendum += ' Check the render method of `' + name + '`.';
          }
        }
      }
      var childrenString = String(children);
      !false ? process.env.NODE_ENV !== 'production' ? reactlibtraverseAllChildren__invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : reactlibtraverseAllChildren___prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
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
 * @providesModule PooledClass
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
var reactlibPooledClass__oneArgumentPooler = function (copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};

var reactlibPooledClass__twoArgumentPooler = function (a1, a2) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;
  } else {
    return new Klass(a1, a2);
  }
};

var reactlibPooledClass__threeArgumentPooler = function (a1, a2, a3) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance;
  } else {
    return new Klass(a1, a2, a3);
  }
};

var reactlibPooledClass__fourArgumentPooler = function (a1, a2, a3, a4) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4);
  }
};

var reactlibPooledClass__fiveArgumentPooler = function (a1, a2, a3, a4, a5) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4, a5);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4, a5);
  }
};

var reactlibPooledClass__standardReleaser = function (instance) {
  var Klass = this;
  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? reactlibPooledClass__invariant(false, 'Trying to release an instance into a pool of a different type.') : reactlibPooledClass___prodInvariant('25') : void 0;
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
var reactlibPooledClass__addPoolingTo = function (CopyConstructor, pooler) {
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
  fourArgumentPooler: reactlibPooledClass__fourArgumentPooler,
  fiveArgumentPooler: reactlibPooledClass__fiveArgumentPooler
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
 * @providesModule ReactChildren
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
  var func = bookKeeping.func;
  var context = bookKeeping.context;

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
  var result = bookKeeping.result;
  var keyPrefix = bookKeeping.keyPrefix;
  var func = bookKeeping.func;
  var context = bookKeeping.context;

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
 * @providesModule React
 */


var reactlibReact___assign = $m['object-assign'].exports;

var reactlibReact__ReactChildren = $m['react/lib/ReactChildren'].exports;
var reactlibReact__ReactComponent = $m['react/lib/ReactComponent'].exports;
var reactlibReact__ReactPureComponent = $m['react/lib/ReactPureComponent'].exports;
var reactlibReact__ReactClass = $m['react/lib/ReactClass'].exports;
var reactlibReact__ReactDOMFactories = $m['react/lib/ReactDOMFactories'].exports;
var reactlibReact__ReactElement = $m['react/lib/ReactElement'].exports;
var reactlibReact__ReactPropTypes = $m['react/lib/ReactPropTypes'].exports;
var reactlibReact__ReactVersion = $m['react/lib/ReactVersion'].exports;

var reactlibReact__onlyChild = $m['react/lib/onlyChild'].exports;
var reactlibReact__warning = $m['fbjs/lib/warning'].exports;

var reactlibReact__createElement = reactlibReact__ReactElement.createElement;
var reactlibReact__createFactory = reactlibReact__ReactElement.createFactory;
var reactlibReact__cloneElement = reactlibReact__ReactElement.cloneElement;

if (process.env.NODE_ENV !== 'production') {
  var reactlibReact__ReactElementValidator = $m['react/lib/ReactElementValidator'].exports;
  reactlibReact__createElement = reactlibReact__ReactElementValidator.createElement;
  reactlibReact__createFactory = reactlibReact__ReactElementValidator.createFactory;
  reactlibReact__cloneElement = reactlibReact__ReactElementValidator.cloneElement;
}

var reactlibReact____spread = reactlibReact___assign;

if (process.env.NODE_ENV !== 'production') {
  var reactlibReact__warned = false;
  reactlibReact____spread = function () {
    process.env.NODE_ENV !== 'production' ? reactlibReact__warning(reactlibReact__warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.') : void 0;
    reactlibReact__warned = true;
    return reactlibReact___assign.apply(null, arguments);
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

  Component: reactlibReact__ReactComponent,
  PureComponent: reactlibReact__ReactPureComponent,

  createElement: reactlibReact__createElement,
  cloneElement: reactlibReact__cloneElement,
  isValidElement: reactlibReact__ReactElement.isValidElement,

  // Classic

  PropTypes: reactlibReact__ReactPropTypes,
  createClass: reactlibReact__ReactClass.createClass,
  createFactory: reactlibReact__createFactory,
  createMixin: function (mixin) {
    // Currently a noop. Will be used to validate and trace mixins.
    return mixin;
  },

  // This looks DOM specific but these are actually isomorphic helpers
  // since they are just generating DOM strings.
  DOM: reactlibReact__ReactDOMFactories,

  version: reactlibReact__ReactVersion,

  // Deprecated hook for JSX spread, don't use this for anything.
  __spread: reactlibReact____spread
};

$m['react/lib/React'].exports = reactlibReact__React;
/*≠≠ node_modules/react/lib/React.js ≠≠*/

/*== node_modules/react/react.js ==*/
$m['react'] = { exports: {} };

$m['react'].exports = $m['react/lib/React'].exports;
/*≠≠ node_modules/react/react.js ≠≠*/

/*== node_modules/debug/debug.js ==*/
$m['debug/debug'] = { exports: {} };

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

$m['debug/debug'].exports = $m['debug/debug'].exports = debugdebug__debug;
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

    var args = Array.prototype.slice.call(arguments);

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

    if ('function' === typeof $m['debug/debug'].exports.formatArgs) {
      args = $m['debug/debug'].exports.formatArgs.apply(self, args);
    }
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
    namespaces = split[i].replace(/\*/g, '.*?');
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
  return 'WebkitAppearance' in document.documentElement.style ||
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
  return JSON.stringify(v);
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
    r = $m['debug'].exports.storage.debug;
  } catch (e) {}
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
    return yrclock__hasImmediate ? setImmediate(fn) : yrclock__raf(fn);
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
      // Immediate raf
      case 'number':
        yrclock__raf.cancel(id);
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

var yrcomponentlibComponent__assign = $m['object-assign'].exports;
var yrcomponentlibComponent__clock = $m['@yr/clock'].exports;
var yrcomponentlibComponent__Debug = $m['debug'].exports;
var yrcomponentlibComponent__isEqual = $m['@yr/is-equal'].exports;
var yrcomponentlibComponent__React = $m['react'].exports;

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

var yrcomponent__assign = $m['object-assign'].exports;
var yrcomponent__Component = $m['@yr/component/lib/Component'].exports;
var yrcomponent__runtime = $m['@yr/runtime'].exports;
// Use production build for server
// Override with package.json "browser" field for client to enable debug during dev
var yrcomponent__React = $m['react'].exports;
var yrcomponent__ReactSecret = $m['react/lib/ReactPropTypesSecret'].exports;

var yrcomponent__LIFECYCLE_METHODS = ['componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount'];
var yrcomponent__PROXY_KEYS = ['componentWillUnmount', 'render', 'state'];
var yrcomponent__RESERVED_METHODS = yrcomponent__LIFECYCLE_METHODS.concat(['render', 'shouldComponentUpdate', 'shouldComponentTransition', 'getTransitionDuration']);

$m['@yr/component'].exports = {
  NOT_TRANSITIONING: 0,
  WILL_TRANSITION: 1,
  IS_TRANSITIONING: 2,
  DID_TRANSITION: 3,

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
  var data = specification.data;
  var defaultProps = specification.defaultProps;
  var displayName = specification.displayName;

  // Extract missing props defined in 'data'

  if (data && props && 'extract' in props) props.extract(Object.keys(data));

  // Copy default props
  if (defaultProps) {
    for (var prop in defaultProps) {
      if (props[prop] == null) props[prop] = defaultProps[prop];
    }
  }

  if (!data) return;

  if (process.env.NODE_ENV == 'development') {
    // Validate prop types
    for (var key in data) {
      var err = data[key](props, key, displayName, 'data property', key, yrcomponent__ReactSecret);

      if (err) console.error(err);
    }
  }
}
/*≠≠ node_modules/@yr/component/index.js ≠≠*/

/*== src/js/lib/utils.js ==*/
$m['src/js/lib/utils'] = { exports: {} };

const srcjslibutils__component = $m['@yr/component'].exports;

const srcjslibutils__MAX_WIDTH = 100;

$m['src/js/lib/utils'].exports = {
  /**
   * Parse 'options'
   * @param {Object} options
   * @returns {Object}
   */
  parse(options) {
    let opts = {};

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
  getElement(link, options) {
    return srcjslibutils__component.el('use', {
      className: options.class,
      xlinkHref: link,
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

const srcjslibprimitivesprecipitation__utils = $m['src/js/lib/utils'].exports;

/**
 * Render precipitation svg primitive
 * @param {Object} options
 * @returns {String}
 */
$m['src/js/lib/primitives/precipitation'].exports = function render(options) {
  return srcjslibprimitivesprecipitation__utils.getElement(`#${ options.primitive }`, options);
};
/*≠≠ src/js/lib/primitives/precipitation.js ≠≠*/

/*== src/js/lib/primitives/lightning.js ==*/
$m['src/js/lib/primitives/lightning'] = { exports: {} };

const srcjslibprimitiveslightning__utils = $m['src/js/lib/utils'].exports;

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

const srcjslibprimitivesfog__utils = $m['src/js/lib/utils'].exports;

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

const srcjslibprimitivescloud__utils = $m['src/js/lib/utils'].exports;

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

const srcjslibprimitivescelestial__utils = $m['src/js/lib/utils'].exports;

/**
 * Render sun, winter sun, or moon svg primitive
 * @param {Object} options
 * @returns {String}
 */
$m['src/js/lib/primitives/celestial'].exports = function render(options = {}) {
  return srcjslibprimitivescelestial__utils.getElement(options.primitive == 'moon' ? '#moon' : options.winter ? '#sunWinter' : '#sun', options);
};
/*≠≠ src/js/lib/primitives/celestial.js ≠≠*/

/*== src/js/lib/primitives/index.js ==*/
$m['src/js/lib/primitives/index'] = { exports: {} };

const srcjslibprimitivesindex__celestial = $m['src/js/lib/primitives/celestial'].exports;
const srcjslibprimitivesindex__cloud = $m['src/js/lib/primitives/cloud'].exports;
const srcjslibprimitivesindex__fog = $m['src/js/lib/primitives/fog'].exports;
const srcjslibprimitivesindex__lightning = $m['src/js/lib/primitives/lightning'].exports;
const srcjslibprimitivesindex__precipitation = $m['src/js/lib/primitives/precipitation'].exports;

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

const yrgraphicscomponent__component = $m['@yr/component'].exports;

const yrgraphicscomponent__TYPE_IMG = 'img';
const yrgraphicscomponent__TYPE_SVG = 'svg';

const { dataTypes, el } = yrgraphicscomponent__component;

$m['@yr/graphics-component'].exports = {
  TYPE_IMG: yrgraphicscomponent__TYPE_IMG,
  TYPE_SVG: yrgraphicscomponent__TYPE_SVG,

  /**
   * Instance factory
   * @param {Object} options
   * @returns {Function}
   */
  create(options = {}) {
    if (!('fallback' in options)) options.fallback = true;

    return yrgraphicscomponent__component.stateless({
      displayName: 'graphicsComponent',

      data: {
        id: dataTypes.string,
        renderInnerSvg: dataTypes.func,
        rootImagePath: dataTypes.string,
        type: dataTypes.string
      },

      /**
       * React render
       * @param {Object} props
       * @param {Object} state
       * @returns {React}
       */
      render: function (props = {}, state) {
        const { id = options.id, type = options.type || yrgraphicscomponent__TYPE_SVG } = props;

        if (!id) return null;

        let rootImagePath = props.rootImagePath || options.rootImagePath || '';

        if (rootImagePath && rootImagePath.charAt(rootImagePath.length - 1) != '/') rootImagePath += '/';

        if (type == yrgraphicscomponent__TYPE_SVG) {
          let children = options.renderInnerSvg ? options.renderInnerSvg(id) : [el('use', { xlinkHref: `#${ id }`, x: 0, y: 0, width: 100, height: 100 })];

          if (!Array.isArray(children)) children = [children];
          if (options.fallback) children.push(el('image', { src: `${ rootImagePath }${ id }.png`, xlinkHref: '' }));

          return el('svg', {
            // Force redraw on change (fixes Safari svg <use> bug)
            key: id,
            children,
            x: '0',
            y: '0',
            height: options.height || '25px',
            // Fix for IE tabbing
            focusable: false,
            width: options.width || '25px',
            viewBox: '0 0 100 100'
          });
        } else if (type == yrgraphicscomponent__TYPE_IMG) {
          return el('img', { src: `${ rootImagePath }${ id }.png` });
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

const srcjsindex__graphicsComponent = $m['@yr/graphics-component'].exports;
const srcjsindex__primitives = $m['src/js/lib/primitives/index'].exports;
const srcjsindex__recipes = $m['src/js/lib/recipes'].exports;
const srcjsindex__utils = $m['src/js/lib/utils'].exports;

$m['src/js/index'].exports = {
  /**
   * Instance factory
   * @param {Object} options
   * @returns {Function}
   */
  create(options = {}) {
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
  const recipe = srcjsindex__recipes[id];

  if (!recipe) return null;

  return recipe.map(item => {
    const options = srcjsindex__utils.parse(item);

    return srcjsindex__primitives[options.primitive](options);
  });
}
/*≠≠ src/js/index.js ≠≠*/

/*== node_modules/react/lib/ReactDOMNullInputValuePropHook.js ==*/
$m['react/lib/ReactDOMNullInputValuePropHook'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMNullInputValuePropHook
 */


var reactlibReactDOMNullInputValuePropHook__ReactComponentTreeHook = $m['react/lib/ReactComponentTreeHook'].exports;

var reactlibReactDOMNullInputValuePropHook__warning = $m['fbjs/lib/warning'].exports;

var reactlibReactDOMNullInputValuePropHook__didWarnValueNull = false;

function reactlibReactDOMNullInputValuePropHook__handleElement(debugID, element) {
  if (element == null) {
    return;
  }
  if (element.type !== 'input' && element.type !== 'textarea' && element.type !== 'select') {
    return;
  }
  if (element.props != null && element.props.value === null && !reactlibReactDOMNullInputValuePropHook__didWarnValueNull) {
    process.env.NODE_ENV !== 'production' ? reactlibReactDOMNullInputValuePropHook__warning(false, '`value` prop on `%s` should not be null. ' + 'Consider using the empty string to clear the component or `undefined` ' + 'for uncontrolled components.%s', element.type, reactlibReactDOMNullInputValuePropHook__ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;

    reactlibReactDOMNullInputValuePropHook__didWarnValueNull = true;
  }
}

var reactlibReactDOMNullInputValuePropHook__ReactDOMNullInputValuePropHook = {
  onBeforeMountComponent: function (debugID, element) {
    reactlibReactDOMNullInputValuePropHook__handleElement(debugID, element);
  },
  onBeforeUpdateComponent: function (debugID, element) {
    reactlibReactDOMNullInputValuePropHook__handleElement(debugID, element);
  }
};

$m['react/lib/ReactDOMNullInputValuePropHook'].exports = reactlibReactDOMNullInputValuePropHook__ReactDOMNullInputValuePropHook;
/*≠≠ node_modules/react/lib/ReactDOMNullInputValuePropHook.js ≠≠*/

/*== node_modules/react/lib/EventPluginRegistry.js ==*/
$m['react/lib/EventPluginRegistry'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginRegistry
 */


var reactlibEventPluginRegistry___prodInvariant = $m['react/lib/reactProdInvariant'].exports;

var reactlibEventPluginRegistry__invariant = $m['fbjs/lib/invariant'].exports;

/**
 * Injectable ordering of event plugins.
 */
var reactlibEventPluginRegistry__EventPluginOrder = null;

/**
 * Injectable mapping from names to event plugin modules.
 */
var reactlibEventPluginRegistry__namesToPlugins = {};

/**
 * Recomputes the plugin list using the injected plugins and plugin ordering.
 *
 * @private
 */
function reactlibEventPluginRegistry__recomputePluginOrdering() {
  if (!reactlibEventPluginRegistry__EventPluginOrder) {
    // Wait until an `EventPluginOrder` is injected.
    return;
  }
  for (var pluginName in reactlibEventPluginRegistry__namesToPlugins) {
    var PluginModule = reactlibEventPluginRegistry__namesToPlugins[pluginName];
    var pluginIndex = reactlibEventPluginRegistry__EventPluginOrder.indexOf(pluginName);
    !(pluginIndex > -1) ? process.env.NODE_ENV !== 'production' ? reactlibEventPluginRegistry__invariant(false, 'EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.', pluginName) : reactlibEventPluginRegistry___prodInvariant('96', pluginName) : void 0;
    if (reactlibEventPluginRegistry__EventPluginRegistry.plugins[pluginIndex]) {
      continue;
    }
    !PluginModule.extractEvents ? process.env.NODE_ENV !== 'production' ? reactlibEventPluginRegistry__invariant(false, 'EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.', pluginName) : reactlibEventPluginRegistry___prodInvariant('97', pluginName) : void 0;
    reactlibEventPluginRegistry__EventPluginRegistry.plugins[pluginIndex] = PluginModule;
    var publishedEvents = PluginModule.eventTypes;
    for (var eventName in publishedEvents) {
      !reactlibEventPluginRegistry__publishEventForPlugin(publishedEvents[eventName], PluginModule, eventName) ? process.env.NODE_ENV !== 'production' ? reactlibEventPluginRegistry__invariant(false, 'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.', eventName, pluginName) : reactlibEventPluginRegistry___prodInvariant('98', eventName, pluginName) : void 0;
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
function reactlibEventPluginRegistry__publishEventForPlugin(dispatchConfig, PluginModule, eventName) {
  !!reactlibEventPluginRegistry__EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName) ? process.env.NODE_ENV !== 'production' ? reactlibEventPluginRegistry__invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.', eventName) : reactlibEventPluginRegistry___prodInvariant('99', eventName) : void 0;
  reactlibEventPluginRegistry__EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;

  var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
  if (phasedRegistrationNames) {
    for (var phaseName in phasedRegistrationNames) {
      if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
        var phasedRegistrationName = phasedRegistrationNames[phaseName];
        reactlibEventPluginRegistry__publishRegistrationName(phasedRegistrationName, PluginModule, eventName);
      }
    }
    return true;
  } else if (dispatchConfig.registrationName) {
    reactlibEventPluginRegistry__publishRegistrationName(dispatchConfig.registrationName, PluginModule, eventName);
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
function reactlibEventPluginRegistry__publishRegistrationName(registrationName, PluginModule, eventName) {
  !!reactlibEventPluginRegistry__EventPluginRegistry.registrationNameModules[registrationName] ? process.env.NODE_ENV !== 'production' ? reactlibEventPluginRegistry__invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.', registrationName) : reactlibEventPluginRegistry___prodInvariant('100', registrationName) : void 0;
  reactlibEventPluginRegistry__EventPluginRegistry.registrationNameModules[registrationName] = PluginModule;
  reactlibEventPluginRegistry__EventPluginRegistry.registrationNameDependencies[registrationName] = PluginModule.eventTypes[eventName].dependencies;

  if (process.env.NODE_ENV !== 'production') {
    var lowerCasedName = registrationName.toLowerCase();
    reactlibEventPluginRegistry__EventPluginRegistry.possibleRegistrationNames[lowerCasedName] = registrationName;

    if (registrationName === 'onDoubleClick') {
      reactlibEventPluginRegistry__EventPluginRegistry.possibleRegistrationNames.ondblclick = registrationName;
    }
  }
}

/**
 * Registers plugins so that they can extract and dispatch events.
 *
 * @see {EventPluginHub}
 */
var reactlibEventPluginRegistry__EventPluginRegistry = {

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
  possibleRegistrationNames: process.env.NODE_ENV !== 'production' ? {} : null,

  /**
   * Injects an ordering of plugins (by plugin name). This allows the ordering
   * to be decoupled from injection of the actual plugins so that ordering is
   * always deterministic regardless of packaging, on-the-fly injection, etc.
   *
   * @param {array} InjectedEventPluginOrder
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginOrder}
   */
  injectEventPluginOrder: function (InjectedEventPluginOrder) {
    !!reactlibEventPluginRegistry__EventPluginOrder ? process.env.NODE_ENV !== 'production' ? reactlibEventPluginRegistry__invariant(false, 'EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.') : reactlibEventPluginRegistry___prodInvariant('101') : void 0;
    // Clone the ordering so it cannot be dynamically mutated.
    reactlibEventPluginRegistry__EventPluginOrder = Array.prototype.slice.call(InjectedEventPluginOrder);
    reactlibEventPluginRegistry__recomputePluginOrdering();
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
      var PluginModule = injectedNamesToPlugins[pluginName];
      if (!reactlibEventPluginRegistry__namesToPlugins.hasOwnProperty(pluginName) || reactlibEventPluginRegistry__namesToPlugins[pluginName] !== PluginModule) {
        !!reactlibEventPluginRegistry__namesToPlugins[pluginName] ? process.env.NODE_ENV !== 'production' ? reactlibEventPluginRegistry__invariant(false, 'EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.', pluginName) : reactlibEventPluginRegistry___prodInvariant('102', pluginName) : void 0;
        reactlibEventPluginRegistry__namesToPlugins[pluginName] = PluginModule;
        isOrderingDirty = true;
      }
    }
    if (isOrderingDirty) {
      reactlibEventPluginRegistry__recomputePluginOrdering();
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
      return reactlibEventPluginRegistry__EventPluginRegistry.registrationNameModules[dispatchConfig.registrationName] || null;
    }
    for (var phase in dispatchConfig.phasedRegistrationNames) {
      if (!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)) {
        continue;
      }
      var PluginModule = reactlibEventPluginRegistry__EventPluginRegistry.registrationNameModules[dispatchConfig.phasedRegistrationNames[phase]];
      if (PluginModule) {
        return PluginModule;
      }
    }
    return null;
  },

  /**
   * Exposed for unit testing.
   * @private
   */
  _resetEventPlugins: function () {
    reactlibEventPluginRegistry__EventPluginOrder = null;
    for (var pluginName in reactlibEventPluginRegistry__namesToPlugins) {
      if (reactlibEventPluginRegistry__namesToPlugins.hasOwnProperty(pluginName)) {
        delete reactlibEventPluginRegistry__namesToPlugins[pluginName];
      }
    }
    reactlibEventPluginRegistry__EventPluginRegistry.plugins.length = 0;

    var eventNameDispatchConfigs = reactlibEventPluginRegistry__EventPluginRegistry.eventNameDispatchConfigs;
    for (var eventName in eventNameDispatchConfigs) {
      if (eventNameDispatchConfigs.hasOwnProperty(eventName)) {
        delete eventNameDispatchConfigs[eventName];
      }
    }

    var registrationNameModules = reactlibEventPluginRegistry__EventPluginRegistry.registrationNameModules;
    for (var registrationName in registrationNameModules) {
      if (registrationNameModules.hasOwnProperty(registrationName)) {
        delete registrationNameModules[registrationName];
      }
    }

    if (process.env.NODE_ENV !== 'production') {
      var possibleRegistrationNames = reactlibEventPluginRegistry__EventPluginRegistry.possibleRegistrationNames;
      for (var lowerCasedName in possibleRegistrationNames) {
        if (possibleRegistrationNames.hasOwnProperty(lowerCasedName)) {
          delete possibleRegistrationNames[lowerCasedName];
        }
      }
    }
  }

};

$m['react/lib/EventPluginRegistry'].exports = reactlibEventPluginRegistry__EventPluginRegistry;
/*≠≠ node_modules/react/lib/EventPluginRegistry.js ≠≠*/

/*== node_modules/react/lib/DOMProperty.js ==*/
$m['react/lib/DOMProperty'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMProperty
 */


var reactlibDOMProperty___prodInvariant = $m['react/lib/reactProdInvariant'].exports;

var reactlibDOMProperty__invariant = $m['fbjs/lib/invariant'].exports;

function reactlibDOMProperty__checkMask(value, bitmask) {
  return (value & bitmask) === bitmask;
}

var reactlibDOMProperty__DOMPropertyInjection = {
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
    var Injection = reactlibDOMProperty__DOMPropertyInjection;
    var Properties = domPropertyConfig.Properties || {};
    var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
    var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
    var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
    var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};

    if (domPropertyConfig.isCustomAttribute) {
      reactlibDOMProperty__DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);
    }

    for (var propName in Properties) {
      !!reactlibDOMProperty__DOMProperty.properties.hasOwnProperty(propName) ? process.env.NODE_ENV !== 'production' ? reactlibDOMProperty__invariant(false, 'injectDOMPropertyConfig(...): You\'re trying to inject DOM property \'%s\' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.', propName) : reactlibDOMProperty___prodInvariant('48', propName) : void 0;

      var lowerCased = propName.toLowerCase();
      var propConfig = Properties[propName];

      var propertyInfo = {
        attributeName: lowerCased,
        attributeNamespace: null,
        propertyName: propName,
        mutationMethod: null,

        mustUseProperty: reactlibDOMProperty__checkMask(propConfig, Injection.MUST_USE_PROPERTY),
        hasBooleanValue: reactlibDOMProperty__checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE),
        hasNumericValue: reactlibDOMProperty__checkMask(propConfig, Injection.HAS_NUMERIC_VALUE),
        hasPositiveNumericValue: reactlibDOMProperty__checkMask(propConfig, Injection.HAS_POSITIVE_NUMERIC_VALUE),
        hasOverloadedBooleanValue: reactlibDOMProperty__checkMask(propConfig, Injection.HAS_OVERLOADED_BOOLEAN_VALUE)
      };
      !(propertyInfo.hasBooleanValue + propertyInfo.hasNumericValue + propertyInfo.hasOverloadedBooleanValue <= 1) ? process.env.NODE_ENV !== 'production' ? reactlibDOMProperty__invariant(false, 'DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s', propName) : reactlibDOMProperty___prodInvariant('50', propName) : void 0;

      if (process.env.NODE_ENV !== 'production') {
        reactlibDOMProperty__DOMProperty.getPossibleStandardName[lowerCased] = propName;
      }

      if (DOMAttributeNames.hasOwnProperty(propName)) {
        var attributeName = DOMAttributeNames[propName];
        propertyInfo.attributeName = attributeName;
        if (process.env.NODE_ENV !== 'production') {
          reactlibDOMProperty__DOMProperty.getPossibleStandardName[attributeName] = propName;
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

      reactlibDOMProperty__DOMProperty.properties[propName] = propertyInfo;
    }
  }
};

/* eslint-disable max-len */
var reactlibDOMProperty__ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
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
var reactlibDOMProperty__DOMProperty = {

  ID_ATTRIBUTE_NAME: 'data-reactid',
  ROOT_ATTRIBUTE_NAME: 'data-reactroot',

  ATTRIBUTE_NAME_START_CHAR: reactlibDOMProperty__ATTRIBUTE_NAME_START_CHAR,
  ATTRIBUTE_NAME_CHAR: reactlibDOMProperty__ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040',

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
   * @type {Object}
   */
  getPossibleStandardName: process.env.NODE_ENV !== 'production' ? {} : null,

  /**
   * All of the isCustomAttribute() functions that have been injected.
   */
  _isCustomAttributeFunctions: [],

  /**
   * Checks whether a property name is a custom attribute.
   * @method
   */
  isCustomAttribute: function (attributeName) {
    for (var i = 0; i < reactlibDOMProperty__DOMProperty._isCustomAttributeFunctions.length; i++) {
      var isCustomAttributeFn = reactlibDOMProperty__DOMProperty._isCustomAttributeFunctions[i];
      if (isCustomAttributeFn(attributeName)) {
        return true;
      }
    }
    return false;
  },

  injection: reactlibDOMProperty__DOMPropertyInjection
};

$m['react/lib/DOMProperty'].exports = reactlibDOMProperty__DOMProperty;
/*≠≠ node_modules/react/lib/DOMProperty.js ≠≠*/

/*== node_modules/react/lib/ReactDOMUnknownPropertyHook.js ==*/
$m['react/lib/ReactDOMUnknownPropertyHook'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMUnknownPropertyHook
 */


var reactlibReactDOMUnknownPropertyHook__DOMProperty = $m['react/lib/DOMProperty'].exports;
var reactlibReactDOMUnknownPropertyHook__EventPluginRegistry = $m['react/lib/EventPluginRegistry'].exports;
var reactlibReactDOMUnknownPropertyHook__ReactComponentTreeHook = $m['react/lib/ReactComponentTreeHook'].exports;

var reactlibReactDOMUnknownPropertyHook__warning = $m['fbjs/lib/warning'].exports;

if (process.env.NODE_ENV !== 'production') {
  var reactlibReactDOMUnknownPropertyHook__reactProps = {
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
  var reactlibReactDOMUnknownPropertyHook__warnedProperties = {};

  var reactlibReactDOMUnknownPropertyHook__validateProperty = function (tagName, name, debugID) {
    if (reactlibReactDOMUnknownPropertyHook__DOMProperty.properties.hasOwnProperty(name) || reactlibReactDOMUnknownPropertyHook__DOMProperty.isCustomAttribute(name)) {
      return true;
    }
    if (reactlibReactDOMUnknownPropertyHook__reactProps.hasOwnProperty(name) && reactlibReactDOMUnknownPropertyHook__reactProps[name] || reactlibReactDOMUnknownPropertyHook__warnedProperties.hasOwnProperty(name) && reactlibReactDOMUnknownPropertyHook__warnedProperties[name]) {
      return true;
    }
    if (reactlibReactDOMUnknownPropertyHook__EventPluginRegistry.registrationNameModules.hasOwnProperty(name)) {
      return true;
    }
    reactlibReactDOMUnknownPropertyHook__warnedProperties[name] = true;
    var lowerCasedName = name.toLowerCase();

    // data-* attributes should be lowercase; suggest the lowercase version
    var standardName = reactlibReactDOMUnknownPropertyHook__DOMProperty.isCustomAttribute(lowerCasedName) ? lowerCasedName : reactlibReactDOMUnknownPropertyHook__DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName) ? reactlibReactDOMUnknownPropertyHook__DOMProperty.getPossibleStandardName[lowerCasedName] : null;

    var registrationName = reactlibReactDOMUnknownPropertyHook__EventPluginRegistry.possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? reactlibReactDOMUnknownPropertyHook__EventPluginRegistry.possibleRegistrationNames[lowerCasedName] : null;

    if (standardName != null) {
      process.env.NODE_ENV !== 'production' ? reactlibReactDOMUnknownPropertyHook__warning(false, 'Unknown DOM property %s. Did you mean %s?%s', name, standardName, reactlibReactDOMUnknownPropertyHook__ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;
      return true;
    } else if (registrationName != null) {
      process.env.NODE_ENV !== 'production' ? reactlibReactDOMUnknownPropertyHook__warning(false, 'Unknown event handler property %s. Did you mean `%s`?%s', name, registrationName, reactlibReactDOMUnknownPropertyHook__ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;
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

var reactlibReactDOMUnknownPropertyHook__warnUnknownProperties = function (debugID, element) {
  var unknownProps = [];
  for (var key in element.props) {
    var isValid = reactlibReactDOMUnknownPropertyHook__validateProperty(element.type, key, debugID);
    if (!isValid) {
      unknownProps.push(key);
    }
  }

  var unknownPropString = unknownProps.map(function (prop) {
    return '`' + prop + '`';
  }).join(', ');

  if (unknownProps.length === 1) {
    process.env.NODE_ENV !== 'production' ? reactlibReactDOMUnknownPropertyHook__warning(false, 'Unknown prop %s on <%s> tag. Remove this prop from the element. ' + 'For details, see https://fb.me/react-unknown-prop%s', unknownPropString, element.type, reactlibReactDOMUnknownPropertyHook__ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;
  } else if (unknownProps.length > 1) {
    process.env.NODE_ENV !== 'production' ? reactlibReactDOMUnknownPropertyHook__warning(false, 'Unknown props %s on <%s> tag. Remove these props from the element. ' + 'For details, see https://fb.me/react-unknown-prop%s', unknownPropString, element.type, reactlibReactDOMUnknownPropertyHook__ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;
  }
};

function reactlibReactDOMUnknownPropertyHook__handleElement(debugID, element) {
  if (element == null || typeof element.type !== 'string') {
    return;
  }
  if (element.type.indexOf('-') >= 0 || element.props.is) {
    return;
  }
  reactlibReactDOMUnknownPropertyHook__warnUnknownProperties(debugID, element);
}

var reactlibReactDOMUnknownPropertyHook__ReactDOMUnknownPropertyHook = {
  onBeforeMountComponent: function (debugID, element) {
    reactlibReactDOMUnknownPropertyHook__handleElement(debugID, element);
  },
  onBeforeUpdateComponent: function (debugID, element) {
    reactlibReactDOMUnknownPropertyHook__handleElement(debugID, element);
  }
};

$m['react/lib/ReactDOMUnknownPropertyHook'].exports = reactlibReactDOMUnknownPropertyHook__ReactDOMUnknownPropertyHook;
/*≠≠ node_modules/react/lib/ReactDOMUnknownPropertyHook.js ≠≠*/

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
  fbjslibperformanceNow__performanceNow = function fbjslibperformanceNow__performanceNow() {
    return fbjslibperformanceNow__performance.now();
  };
} else {
  fbjslibperformanceNow__performanceNow = function fbjslibperformanceNow__performanceNow() {
    return Date.now();
  };
}

$m['fbjs/lib/performanceNow'].exports = fbjslibperformanceNow__performanceNow;
/*≠≠ node_modules/fbjs/lib/performanceNow.js ≠≠*/

/*== node_modules/react/lib/ReactChildrenMutationWarningHook.js ==*/
$m['react/lib/ReactChildrenMutationWarningHook'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactChildrenMutationWarningHook
 */


var reactlibReactChildrenMutationWarningHook__ReactComponentTreeHook = $m['react/lib/ReactComponentTreeHook'].exports;

var reactlibReactChildrenMutationWarningHook__warning = $m['fbjs/lib/warning'].exports;

function reactlibReactChildrenMutationWarningHook__handleElement(debugID, element) {
  if (element == null) {
    return;
  }
  if (element._shadowChildren === undefined) {
    return;
  }
  if (element._shadowChildren === element.props.children) {
    return;
  }
  var isMutated = false;
  if (Array.isArray(element._shadowChildren)) {
    if (element._shadowChildren.length === element.props.children.length) {
      for (var i = 0; i < element._shadowChildren.length; i++) {
        if (element._shadowChildren[i] !== element.props.children[i]) {
          isMutated = true;
        }
      }
    } else {
      isMutated = true;
    }
  }
  if (!Array.isArray(element._shadowChildren) || isMutated) {
    process.env.NODE_ENV !== 'production' ? reactlibReactChildrenMutationWarningHook__warning(false, 'Component\'s children should not be mutated.%s', reactlibReactChildrenMutationWarningHook__ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;
  }
}

var reactlibReactChildrenMutationWarningHook__ReactChildrenMutationWarningHook = {
  onMountComponent: function (debugID) {
    reactlibReactChildrenMutationWarningHook__handleElement(debugID, reactlibReactChildrenMutationWarningHook__ReactComponentTreeHook.getElement(debugID));
  },
  onUpdateComponent: function (debugID) {
    reactlibReactChildrenMutationWarningHook__handleElement(debugID, reactlibReactChildrenMutationWarningHook__ReactComponentTreeHook.getElement(debugID));
  }
};

$m['react/lib/ReactChildrenMutationWarningHook'].exports = reactlibReactChildrenMutationWarningHook__ReactChildrenMutationWarningHook;
/*≠≠ node_modules/react/lib/ReactChildrenMutationWarningHook.js ≠≠*/

/*== node_modules/react/lib/ReactInvalidSetStateWarningHook.js ==*/
$m['react/lib/ReactInvalidSetStateWarningHook'] = { exports: {} };
/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInvalidSetStateWarningHook
 */


var reactlibReactInvalidSetStateWarningHook__warning = $m['fbjs/lib/warning'].exports;

if (process.env.NODE_ENV !== 'production') {
  var reactlibReactInvalidSetStateWarningHook__processingChildContext = false;

  var reactlibReactInvalidSetStateWarningHook__warnInvalidSetState = function () {
    process.env.NODE_ENV !== 'production' ? reactlibReactInvalidSetStateWarningHook__warning(!reactlibReactInvalidSetStateWarningHook__processingChildContext, 'setState(...): Cannot call setState() inside getChildContext()') : void 0;
  };
}

var reactlibReactInvalidSetStateWarningHook__ReactInvalidSetStateWarningHook = {
  onBeginProcessingChildContext: function () {
    reactlibReactInvalidSetStateWarningHook__processingChildContext = true;
  },
  onEndProcessingChildContext: function () {
    reactlibReactInvalidSetStateWarningHook__processingChildContext = false;
  },
  onSetState: function () {
    reactlibReactInvalidSetStateWarningHook__warnInvalidSetState();
  }
};

$m['react/lib/ReactInvalidSetStateWarningHook'].exports = reactlibReactInvalidSetStateWarningHook__ReactInvalidSetStateWarningHook;
/*≠≠ node_modules/react/lib/ReactInvalidSetStateWarningHook.js ≠≠*/

/*== node_modules/react/lib/ReactDebugTool.js ==*/
$m['react/lib/ReactDebugTool'] = { exports: {} };
/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDebugTool
 */


var reactlibReactDebugTool__ReactInvalidSetStateWarningHook = $m['react/lib/ReactInvalidSetStateWarningHook'].exports;
var reactlibReactDebugTool__ReactHostOperationHistoryHook = $m['react/lib/ReactHostOperationHistoryHook'].exports;
var reactlibReactDebugTool__ReactComponentTreeHook = $m['react/lib/ReactComponentTreeHook'].exports;
var reactlibReactDebugTool__ReactChildrenMutationWarningHook = $m['react/lib/ReactChildrenMutationWarningHook'].exports;
var reactlibReactDebugTool__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;

var reactlibReactDebugTool__performanceNow = $m['fbjs/lib/performanceNow'].exports;
var reactlibReactDebugTool__warning = $m['fbjs/lib/warning'].exports;

var reactlibReactDebugTool__hooks = [];
var reactlibReactDebugTool__didHookThrowForEvent = {};

function reactlibReactDebugTool__callHook(event, fn, context, arg1, arg2, arg3, arg4, arg5) {
  try {
    fn.call(context, arg1, arg2, arg3, arg4, arg5);
  } catch (e) {
    process.env.NODE_ENV !== 'production' ? reactlibReactDebugTool__warning(reactlibReactDebugTool__didHookThrowForEvent[event], 'Exception thrown by hook while handling %s: %s', event, e + '\n' + e.stack) : void 0;
    reactlibReactDebugTool__didHookThrowForEvent[event] = true;
  }
}

function reactlibReactDebugTool__emitEvent(event, arg1, arg2, arg3, arg4, arg5) {
  for (var i = 0; i < reactlibReactDebugTool__hooks.length; i++) {
    var hook = reactlibReactDebugTool__hooks[i];
    var fn = hook[event];
    if (fn) {
      reactlibReactDebugTool__callHook(event, fn, hook, arg1, arg2, arg3, arg4, arg5);
    }
  }
}

var reactlibReactDebugTool__isProfiling = false;
var reactlibReactDebugTool__flushHistory = [];
var reactlibReactDebugTool__lifeCycleTimerStack = [];
var reactlibReactDebugTool__currentFlushNesting = 0;
var reactlibReactDebugTool__currentFlushMeasurements = null;
var reactlibReactDebugTool__currentFlushStartTime = null;
var reactlibReactDebugTool__currentTimerDebugID = null;
var reactlibReactDebugTool__currentTimerStartTime = null;
var reactlibReactDebugTool__currentTimerNestedFlushDuration = null;
var reactlibReactDebugTool__currentTimerType = null;

var reactlibReactDebugTool__lifeCycleTimerHasWarned = false;

function reactlibReactDebugTool__clearHistory() {
  reactlibReactDebugTool__ReactComponentTreeHook.purgeUnmountedComponents();
  reactlibReactDebugTool__ReactHostOperationHistoryHook.clearHistory();
}

function reactlibReactDebugTool__getTreeSnapshot(registeredIDs) {
  return registeredIDs.reduce(function (tree, id) {
    var ownerID = reactlibReactDebugTool__ReactComponentTreeHook.getOwnerID(id);
    var parentID = reactlibReactDebugTool__ReactComponentTreeHook.getParentID(id);
    tree[id] = {
      displayName: reactlibReactDebugTool__ReactComponentTreeHook.getDisplayName(id),
      text: reactlibReactDebugTool__ReactComponentTreeHook.getText(id),
      updateCount: reactlibReactDebugTool__ReactComponentTreeHook.getUpdateCount(id),
      childIDs: reactlibReactDebugTool__ReactComponentTreeHook.getChildIDs(id),
      // Text nodes don't have owners but this is close enough.
      ownerID: ownerID || reactlibReactDebugTool__ReactComponentTreeHook.getOwnerID(parentID),
      parentID: parentID
    };
    return tree;
  }, {});
}

function reactlibReactDebugTool__resetMeasurements() {
  var previousStartTime = reactlibReactDebugTool__currentFlushStartTime;
  var previousMeasurements = reactlibReactDebugTool__currentFlushMeasurements || [];
  var previousOperations = reactlibReactDebugTool__ReactHostOperationHistoryHook.getHistory();

  if (reactlibReactDebugTool__currentFlushNesting === 0) {
    reactlibReactDebugTool__currentFlushStartTime = null;
    reactlibReactDebugTool__currentFlushMeasurements = null;
    reactlibReactDebugTool__clearHistory();
    return;
  }

  if (previousMeasurements.length || previousOperations.length) {
    var registeredIDs = reactlibReactDebugTool__ReactComponentTreeHook.getRegisteredIDs();
    reactlibReactDebugTool__flushHistory.push({
      duration: reactlibReactDebugTool__performanceNow() - previousStartTime,
      measurements: previousMeasurements || [],
      operations: previousOperations || [],
      treeSnapshot: reactlibReactDebugTool__getTreeSnapshot(registeredIDs)
    });
  }

  reactlibReactDebugTool__clearHistory();
  reactlibReactDebugTool__currentFlushStartTime = reactlibReactDebugTool__performanceNow();
  reactlibReactDebugTool__currentFlushMeasurements = [];
}

function reactlibReactDebugTool__checkDebugID(debugID) {
  var allowRoot = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

  if (allowRoot && debugID === 0) {
    return;
  }
  if (!debugID) {
    process.env.NODE_ENV !== 'production' ? reactlibReactDebugTool__warning(false, 'ReactDebugTool: debugID may not be empty.') : void 0;
  }
}

function reactlibReactDebugTool__beginLifeCycleTimer(debugID, timerType) {
  if (reactlibReactDebugTool__currentFlushNesting === 0) {
    return;
  }
  if (reactlibReactDebugTool__currentTimerType && !reactlibReactDebugTool__lifeCycleTimerHasWarned) {
    process.env.NODE_ENV !== 'production' ? reactlibReactDebugTool__warning(false, 'There is an internal error in the React performance measurement code. ' + 'Did not expect %s timer to start while %s timer is still in ' + 'progress for %s instance.', timerType, reactlibReactDebugTool__currentTimerType || 'no', debugID === reactlibReactDebugTool__currentTimerDebugID ? 'the same' : 'another') : void 0;
    reactlibReactDebugTool__lifeCycleTimerHasWarned = true;
  }
  reactlibReactDebugTool__currentTimerStartTime = reactlibReactDebugTool__performanceNow();
  reactlibReactDebugTool__currentTimerNestedFlushDuration = 0;
  reactlibReactDebugTool__currentTimerDebugID = debugID;
  reactlibReactDebugTool__currentTimerType = timerType;
}

function reactlibReactDebugTool__endLifeCycleTimer(debugID, timerType) {
  if (reactlibReactDebugTool__currentFlushNesting === 0) {
    return;
  }
  if (reactlibReactDebugTool__currentTimerType !== timerType && !reactlibReactDebugTool__lifeCycleTimerHasWarned) {
    process.env.NODE_ENV !== 'production' ? reactlibReactDebugTool__warning(false, 'There is an internal error in the React performance measurement code. ' + 'We did not expect %s timer to stop while %s timer is still in ' + 'progress for %s instance. Please report this as a bug in React.', timerType, reactlibReactDebugTool__currentTimerType || 'no', debugID === reactlibReactDebugTool__currentTimerDebugID ? 'the same' : 'another') : void 0;
    reactlibReactDebugTool__lifeCycleTimerHasWarned = true;
  }
  if (reactlibReactDebugTool__isProfiling) {
    reactlibReactDebugTool__currentFlushMeasurements.push({
      timerType: timerType,
      instanceID: debugID,
      duration: reactlibReactDebugTool__performanceNow() - reactlibReactDebugTool__currentTimerStartTime - reactlibReactDebugTool__currentTimerNestedFlushDuration
    });
  }
  reactlibReactDebugTool__currentTimerStartTime = null;
  reactlibReactDebugTool__currentTimerNestedFlushDuration = null;
  reactlibReactDebugTool__currentTimerDebugID = null;
  reactlibReactDebugTool__currentTimerType = null;
}

function reactlibReactDebugTool__pauseCurrentLifeCycleTimer() {
  var currentTimer = {
    startTime: reactlibReactDebugTool__currentTimerStartTime,
    nestedFlushStartTime: reactlibReactDebugTool__performanceNow(),
    debugID: reactlibReactDebugTool__currentTimerDebugID,
    timerType: reactlibReactDebugTool__currentTimerType
  };
  reactlibReactDebugTool__lifeCycleTimerStack.push(currentTimer);
  reactlibReactDebugTool__currentTimerStartTime = null;
  reactlibReactDebugTool__currentTimerNestedFlushDuration = null;
  reactlibReactDebugTool__currentTimerDebugID = null;
  reactlibReactDebugTool__currentTimerType = null;
}

function reactlibReactDebugTool__resumeCurrentLifeCycleTimer() {
  var _lifeCycleTimerStack$ = reactlibReactDebugTool__lifeCycleTimerStack.pop();

  var startTime = _lifeCycleTimerStack$.startTime;
  var nestedFlushStartTime = _lifeCycleTimerStack$.nestedFlushStartTime;
  var debugID = _lifeCycleTimerStack$.debugID;
  var timerType = _lifeCycleTimerStack$.timerType;

  var nestedFlushDuration = reactlibReactDebugTool__performanceNow() - nestedFlushStartTime;
  reactlibReactDebugTool__currentTimerStartTime = startTime;
  reactlibReactDebugTool__currentTimerNestedFlushDuration += nestedFlushDuration;
  reactlibReactDebugTool__currentTimerDebugID = debugID;
  reactlibReactDebugTool__currentTimerType = timerType;
}

var reactlibReactDebugTool__ReactDebugTool = {
  addHook: function (hook) {
    reactlibReactDebugTool__hooks.push(hook);
  },
  removeHook: function (hook) {
    for (var i = 0; i < reactlibReactDebugTool__hooks.length; i++) {
      if (reactlibReactDebugTool__hooks[i] === hook) {
        reactlibReactDebugTool__hooks.splice(i, 1);
        i--;
      }
    }
  },
  isProfiling: function () {
    return reactlibReactDebugTool__isProfiling;
  },
  beginProfiling: function () {
    if (reactlibReactDebugTool__isProfiling) {
      return;
    }

    reactlibReactDebugTool__isProfiling = true;
    reactlibReactDebugTool__flushHistory.length = 0;
    reactlibReactDebugTool__resetMeasurements();
    reactlibReactDebugTool__ReactDebugTool.addHook(reactlibReactDebugTool__ReactHostOperationHistoryHook);
  },
  endProfiling: function () {
    if (!reactlibReactDebugTool__isProfiling) {
      return;
    }

    reactlibReactDebugTool__isProfiling = false;
    reactlibReactDebugTool__resetMeasurements();
    reactlibReactDebugTool__ReactDebugTool.removeHook(reactlibReactDebugTool__ReactHostOperationHistoryHook);
  },
  getFlushHistory: function () {
    return reactlibReactDebugTool__flushHistory;
  },
  onBeginFlush: function () {
    reactlibReactDebugTool__currentFlushNesting++;
    reactlibReactDebugTool__resetMeasurements();
    reactlibReactDebugTool__pauseCurrentLifeCycleTimer();
    reactlibReactDebugTool__emitEvent('onBeginFlush');
  },
  onEndFlush: function () {
    reactlibReactDebugTool__resetMeasurements();
    reactlibReactDebugTool__currentFlushNesting--;
    reactlibReactDebugTool__resumeCurrentLifeCycleTimer();
    reactlibReactDebugTool__emitEvent('onEndFlush');
  },
  onBeginLifeCycleTimer: function (debugID, timerType) {
    reactlibReactDebugTool__checkDebugID(debugID);
    reactlibReactDebugTool__emitEvent('onBeginLifeCycleTimer', debugID, timerType);
    reactlibReactDebugTool__beginLifeCycleTimer(debugID, timerType);
  },
  onEndLifeCycleTimer: function (debugID, timerType) {
    reactlibReactDebugTool__checkDebugID(debugID);
    reactlibReactDebugTool__endLifeCycleTimer(debugID, timerType);
    reactlibReactDebugTool__emitEvent('onEndLifeCycleTimer', debugID, timerType);
  },
  onBeginProcessingChildContext: function () {
    reactlibReactDebugTool__emitEvent('onBeginProcessingChildContext');
  },
  onEndProcessingChildContext: function () {
    reactlibReactDebugTool__emitEvent('onEndProcessingChildContext');
  },
  onHostOperation: function (debugID, type, payload) {
    reactlibReactDebugTool__checkDebugID(debugID);
    reactlibReactDebugTool__emitEvent('onHostOperation', debugID, type, payload);
  },
  onSetState: function () {
    reactlibReactDebugTool__emitEvent('onSetState');
  },
  onSetChildren: function (debugID, childDebugIDs) {
    reactlibReactDebugTool__checkDebugID(debugID);
    childDebugIDs.forEach(reactlibReactDebugTool__checkDebugID);
    reactlibReactDebugTool__emitEvent('onSetChildren', debugID, childDebugIDs);
  },
  onBeforeMountComponent: function (debugID, element, parentDebugID) {
    reactlibReactDebugTool__checkDebugID(debugID);
    reactlibReactDebugTool__checkDebugID(parentDebugID, true);
    reactlibReactDebugTool__emitEvent('onBeforeMountComponent', debugID, element, parentDebugID);
  },
  onMountComponent: function (debugID) {
    reactlibReactDebugTool__checkDebugID(debugID);
    reactlibReactDebugTool__emitEvent('onMountComponent', debugID);
  },
  onBeforeUpdateComponent: function (debugID, element) {
    reactlibReactDebugTool__checkDebugID(debugID);
    reactlibReactDebugTool__emitEvent('onBeforeUpdateComponent', debugID, element);
  },
  onUpdateComponent: function (debugID) {
    reactlibReactDebugTool__checkDebugID(debugID);
    reactlibReactDebugTool__emitEvent('onUpdateComponent', debugID);
  },
  onBeforeUnmountComponent: function (debugID) {
    reactlibReactDebugTool__checkDebugID(debugID);
    reactlibReactDebugTool__emitEvent('onBeforeUnmountComponent', debugID);
  },
  onUnmountComponent: function (debugID) {
    reactlibReactDebugTool__checkDebugID(debugID);
    reactlibReactDebugTool__emitEvent('onUnmountComponent', debugID);
  },
  onTestEvent: function () {
    reactlibReactDebugTool__emitEvent('onTestEvent');
  }
};

// TODO remove these when RN/www gets updated
reactlibReactDebugTool__ReactDebugTool.addDevtool = reactlibReactDebugTool__ReactDebugTool.addHook;
reactlibReactDebugTool__ReactDebugTool.removeDevtool = reactlibReactDebugTool__ReactDebugTool.removeHook;

reactlibReactDebugTool__ReactDebugTool.addHook(reactlibReactDebugTool__ReactInvalidSetStateWarningHook);
reactlibReactDebugTool__ReactDebugTool.addHook(reactlibReactDebugTool__ReactComponentTreeHook);
reactlibReactDebugTool__ReactDebugTool.addHook(reactlibReactDebugTool__ReactChildrenMutationWarningHook);
var reactlibReactDebugTool__url = reactlibReactDebugTool__ExecutionEnvironment.canUseDOM && window.location.href || '';
if (/[?&]react_perf\b/.test(reactlibReactDebugTool__url)) {
  reactlibReactDebugTool__ReactDebugTool.beginProfiling();
}

$m['react/lib/ReactDebugTool'].exports = reactlibReactDebugTool__ReactDebugTool;
/*≠≠ node_modules/react/lib/ReactDebugTool.js ≠≠*/

/*== node_modules/react/lib/ReactInstrumentation.js ==*/
$m['react/lib/ReactInstrumentation'] = { exports: {} };
/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInstrumentation
 */


var reactlibReactInstrumentation__debugTool = null;

if (process.env.NODE_ENV !== 'production') {
  var reactlibReactInstrumentation__ReactDebugTool = $m['react/lib/ReactDebugTool'].exports;
  reactlibReactInstrumentation__debugTool = reactlibReactInstrumentation__ReactDebugTool;
}

$m['react/lib/ReactInstrumentation'].exports = { debugTool: reactlibReactInstrumentation__debugTool };
/*≠≠ node_modules/react/lib/ReactInstrumentation.js ≠≠*/

/*== node_modules/react/lib/setInnerHTML.js ==*/
$m['react/lib/setInnerHTML'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule setInnerHTML
 */


var reactlibsetInnerHTML__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;
var reactlibsetInnerHTML__DOMNamespaces = $m['react/lib/DOMNamespaces'].exports;

var reactlibsetInnerHTML__WHITESPACE_TEST = /^[ \r\n\t\f]/;
var reactlibsetInnerHTML__NONVISIBLE_TEST = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;

var reactlibsetInnerHTML__createMicrosoftUnsafeLocalFunction = $m['react/lib/createMicrosoftUnsafeLocalFunction'].exports;

// SVG temp container for IE lacking innerHTML
var reactlibsetInnerHTML__reusableSVGContainer;

/**
 * Set the innerHTML property of a node, ensuring that whitespace is preserved
 * even in IE8.
 *
 * @param {DOMElement} node
 * @param {string} html
 * @internal
 */
var reactlibsetInnerHTML__setInnerHTML = reactlibsetInnerHTML__createMicrosoftUnsafeLocalFunction(function (node, html) {
  // IE does not have innerHTML for SVG nodes, so instead we inject the
  // new markup in a temp node and then move the child nodes across into
  // the target node
  if (node.namespaceURI === reactlibsetInnerHTML__DOMNamespaces.svg && !('innerHTML' in node)) {
    reactlibsetInnerHTML__reusableSVGContainer = reactlibsetInnerHTML__reusableSVGContainer || document.createElement('div');
    reactlibsetInnerHTML__reusableSVGContainer.innerHTML = '<svg>' + html + '</svg>';
    var svgNode = reactlibsetInnerHTML__reusableSVGContainer.firstChild;
    while (svgNode.firstChild) {
      node.appendChild(svgNode.firstChild);
    }
  } else {
    node.innerHTML = html;
  }
});

if (reactlibsetInnerHTML__ExecutionEnvironment.canUseDOM) {
  // IE8: When updating a just created node with innerHTML only leading
  // whitespace is removed. When updating an existing node with innerHTML
  // whitespace in root TextNodes is also collapsed.
  // @see quirksmode.org/bugreports/archives/2004/11/innerhtml_and_t.html

  // Feature detection; only IE8 is known to behave improperly like this.
  var reactlibsetInnerHTML__testElement = document.createElement('div');
  reactlibsetInnerHTML__testElement.innerHTML = ' ';
  if (reactlibsetInnerHTML__testElement.innerHTML === '') {
    reactlibsetInnerHTML__setInnerHTML = function (node, html) {
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
      if (reactlibsetInnerHTML__WHITESPACE_TEST.test(html) || html[0] === '<' && reactlibsetInnerHTML__NONVISIBLE_TEST.test(html)) {
        // Recover leading whitespace by temporarily prepending any character.
        // \uFEFF has the potential advantage of being zero-width/invisible.
        // UglifyJS drops U+FEFF chars when parsing, so use String.fromCharCode
        // in hopes that this is preserved even if "\uFEFF" is transformed to
        // the actual Unicode character (by Babel, for example).
        // https://github.com/mishoo/UglifyJS2/blob/v2.4.20/lib/parse.js#L216
        node.innerHTML = String.fromCharCode(0xFEFF) + html;

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
  reactlibsetInnerHTML__testElement = null;
}

$m['react/lib/setInnerHTML'].exports = reactlibsetInnerHTML__setInnerHTML;
/*≠≠ node_modules/react/lib/setInnerHTML.js ≠≠*/

/*== node_modules/react/lib/ReactHostComponent.js ==*/
$m['react/lib/ReactHostComponent'] = { exports: {} };
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactHostComponent
 */


var reactlibReactHostComponent___prodInvariant = $m['react/lib/reactProdInvariant'].exports,
    reactlibReactHostComponent___assign = $m['object-assign'].exports;

var reactlibReactHostComponent__invariant = $m['fbjs/lib/invariant'].exports;

var reactlibReactHostComponent__genericComponentClass = null;
// This registry keeps track of wrapper classes around host tags.
var reactlibReactHostComponent__tagToComponentClass = {};
var reactlibReactHostComponent__textComponentClass = null;

var reactlibReactHostComponent__ReactHostComponentInjection = {
  // This accepts a class that receives the tag string. This is a catch all
  // that can render any kind of tag.
  injectGenericComponentClass: function (componentClass) {
    reactlibReactHostComponent__genericComponentClass = componentClass;
  },
  // This accepts a text component class that takes the text string to be
  // rendered as props.
  injectTextComponentClass: function (componentClass) {
    reactlibReactHostComponent__textComponentClass = componentClass;
  },
  // This accepts a keyed object with classes as values. Each key represents a
  // tag. That particular tag will use this class instead of the generic one.
  injectComponentClasses: function (componentClasses) {
    reactlibReactHostComponent___assign(reactlibReactHostComponent__tagToComponentClass, componentClasses);
  }
};

/**
 * Get a host internal component class for a specific tag.
 *
 * @param {ReactElement} element The element to create.
 * @return {function} The internal class constructor function.
 */
function reactlibReactHostComponent__createInternalComponent(element) {
  !reactlibReactHostComponent__genericComponentClass ? process.env.NODE_ENV !== 'production' ? reactlibReactHostComponent__invariant(false, 'There is no registered component for the tag %s', element.type) : reactlibReactHostComponent___prodInvariant('111', element.type) : void 0;
  return new reactlibReactHostComponent__genericComponentClass(element);
}

/**
 * @param {ReactText} text
 * @return {ReactComponent}
 */
function reactlibReactHostComponent__createInstanceForText(text) {
  return new reactlibReactHostComponent__textComponentClass(text);
}

/**
 * @param {ReactComponent} component
 * @return {boolean}
 */
function reactlibReactHostComponent__isTextComponent(component) {
  return component instanceof reactlibReactHostComponent__textComponentClass;
}

var reactlibReactHostComponent__ReactHostComponent = {
  createInternalComponent: reactlibReactHostComponent__createInternalComponent,
  createInstanceForText: reactlibReactHostComponent__createInstanceForText,
  isTextComponent: reactlibReactHostComponent__isTextComponent,
  injection: reactlibReactHostComponent__ReactHostComponentInjection
};

$m['react/lib/ReactHostComponent'].exports = reactlibReactHostComponent__ReactHostComponent;
/*≠≠ node_modules/react/lib/ReactHostComponent.js ≠≠*/

/*== node_modules/react/lib/ReactOwner.js ==*/
$m['react/lib/ReactOwner'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactOwner
 */


var reactlibReactOwner___prodInvariant = $m['react/lib/reactProdInvariant'].exports;

var reactlibReactOwner__invariant = $m['fbjs/lib/invariant'].exports;

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
var reactlibReactOwner__ReactOwner = {

  /**
   * @param {?object} object
   * @return {boolean} True if `object` is a valid owner.
   * @final
   */
  isValidOwner: function (object) {
    return !!(object && typeof object.attachRef === 'function' && typeof object.detachRef === 'function');
  },

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
    !reactlibReactOwner__ReactOwner.isValidOwner(owner) ? process.env.NODE_ENV !== 'production' ? reactlibReactOwner__invariant(false, 'addComponentAsRefTo(...): Only a ReactOwner can have refs. You might be adding a ref to a component that was not created inside a component\'s `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner).') : reactlibReactOwner___prodInvariant('119') : void 0;
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
    !reactlibReactOwner__ReactOwner.isValidOwner(owner) ? process.env.NODE_ENV !== 'production' ? reactlibReactOwner__invariant(false, 'removeComponentAsRefFrom(...): Only a ReactOwner can have refs. You might be removing a ref to a component that was not created inside a component\'s `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner).') : reactlibReactOwner___prodInvariant('120') : void 0;
    var ownerPublicInstance = owner.getPublicInstance();
    // Check that `component`'s owner is still alive and that `component` is still the current ref
    // because we do not want to detach the ref if another component stole it.
    if (ownerPublicInstance && ownerPublicInstance.refs[ref] === component.getPublicInstance()) {
      owner.detachRef(ref);
    }
  }

};

$m['react/lib/ReactOwner'].exports = reactlibReactOwner__ReactOwner;
/*≠≠ node_modules/react/lib/ReactOwner.js ≠≠*/

/*== node_modules/react/lib/ReactRef.js ==*/
$m['react/lib/ReactRef'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactRef
 */


var reactlibReactRef__ReactOwner = $m['react/lib/ReactOwner'].exports;

var reactlibReactRef__ReactRef = {};

function reactlibReactRef__attachRef(ref, component, owner) {
  if (typeof ref === 'function') {
    ref(component.getPublicInstance());
  } else {
    // Legacy ref
    reactlibReactRef__ReactOwner.addComponentAsRefTo(component, ref, owner);
  }
}

function reactlibReactRef__detachRef(ref, component, owner) {
  if (typeof ref === 'function') {
    ref(null);
  } else {
    // Legacy ref
    reactlibReactRef__ReactOwner.removeComponentAsRefFrom(component, ref, owner);
  }
}

reactlibReactRef__ReactRef.attachRefs = function (instance, element) {
  if (element === null || element === false) {
    return;
  }
  var ref = element.ref;
  if (ref != null) {
    reactlibReactRef__attachRef(ref, instance, element._owner);
  }
};

reactlibReactRef__ReactRef.shouldUpdateRefs = function (prevElement, nextElement) {
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

  var prevEmpty = prevElement === null || prevElement === false;
  var nextEmpty = nextElement === null || nextElement === false;

  return (
    // This has a few false positives w/r/t empty components.
    prevEmpty || nextEmpty || nextElement.ref !== prevElement.ref ||
    // If owner changes but we have an unchanged function ref, don't update refs
    typeof nextElement.ref === 'string' && nextElement._owner !== prevElement._owner
  );
};

reactlibReactRef__ReactRef.detachRefs = function (instance, element) {
  if (element === null || element === false) {
    return;
  }
  var ref = element.ref;
  if (ref != null) {
    reactlibReactRef__detachRef(ref, instance, element._owner);
  }
};

$m['react/lib/ReactRef'].exports = reactlibReactRef__ReactRef;
/*≠≠ node_modules/react/lib/ReactRef.js ≠≠*/

/*== node_modules/react/lib/ReactReconciler.js ==*/
$m['react/lib/ReactReconciler'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactReconciler
 */


var reactlibReactReconciler__ReactRef = $m['react/lib/ReactRef'].exports;
var reactlibReactReconciler__ReactInstrumentation = $m['react/lib/ReactInstrumentation'].exports;

var reactlibReactReconciler__warning = $m['fbjs/lib/warning'].exports;

/**
 * Helper to call ReactRef.attachRefs with this composite component, split out
 * to avoid allocations in the transaction mount-ready queue.
 */
function reactlibReactReconciler__attachRefs() {
  reactlibReactReconciler__ReactRef.attachRefs(this, this._currentElement);
}

var reactlibReactReconciler__ReactReconciler = {

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
  mountComponent: function (internalInstance, transaction, hostParent, hostContainerInfo, context, parentDebugID // 0 in production and for roots
  ) {
    if (process.env.NODE_ENV !== 'production') {
      if (internalInstance._debugID !== 0) {
        reactlibReactReconciler__ReactInstrumentation.debugTool.onBeforeMountComponent(internalInstance._debugID, internalInstance._currentElement, parentDebugID);
      }
    }
    var markup = internalInstance.mountComponent(transaction, hostParent, hostContainerInfo, context, parentDebugID);
    if (internalInstance._currentElement && internalInstance._currentElement.ref != null) {
      transaction.getReactMountReady().enqueue(reactlibReactReconciler__attachRefs, internalInstance);
    }
    if (process.env.NODE_ENV !== 'production') {
      if (internalInstance._debugID !== 0) {
        reactlibReactReconciler__ReactInstrumentation.debugTool.onMountComponent(internalInstance._debugID);
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
    if (process.env.NODE_ENV !== 'production') {
      if (internalInstance._debugID !== 0) {
        reactlibReactReconciler__ReactInstrumentation.debugTool.onBeforeUnmountComponent(internalInstance._debugID);
      }
    }
    reactlibReactReconciler__ReactRef.detachRefs(internalInstance, internalInstance._currentElement);
    internalInstance.unmountComponent(safely);
    if (process.env.NODE_ENV !== 'production') {
      if (internalInstance._debugID !== 0) {
        reactlibReactReconciler__ReactInstrumentation.debugTool.onUnmountComponent(internalInstance._debugID);
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

    if (process.env.NODE_ENV !== 'production') {
      if (internalInstance._debugID !== 0) {
        reactlibReactReconciler__ReactInstrumentation.debugTool.onBeforeUpdateComponent(internalInstance._debugID, nextElement);
      }
    }

    var refsChanged = reactlibReactReconciler__ReactRef.shouldUpdateRefs(prevElement, nextElement);

    if (refsChanged) {
      reactlibReactReconciler__ReactRef.detachRefs(internalInstance, prevElement);
    }

    internalInstance.receiveComponent(nextElement, transaction, context);

    if (refsChanged && internalInstance._currentElement && internalInstance._currentElement.ref != null) {
      transaction.getReactMountReady().enqueue(reactlibReactReconciler__attachRefs, internalInstance);
    }

    if (process.env.NODE_ENV !== 'production') {
      if (internalInstance._debugID !== 0) {
        reactlibReactReconciler__ReactInstrumentation.debugTool.onUpdateComponent(internalInstance._debugID);
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
      process.env.NODE_ENV !== 'production' ? reactlibReactReconciler__warning(internalInstance._updateBatchNumber == null || internalInstance._updateBatchNumber === updateBatchNumber + 1, 'performUpdateIfNecessary: Unexpected batch number (current %s, ' + 'pending %s)', updateBatchNumber, internalInstance._updateBatchNumber) : void 0;
      return;
    }
    if (process.env.NODE_ENV !== 'production') {
      if (internalInstance._debugID !== 0) {
        reactlibReactReconciler__ReactInstrumentation.debugTool.onBeforeUpdateComponent(internalInstance._debugID, internalInstance._currentElement);
      }
    }
    internalInstance.performUpdateIfNecessary(transaction);
    if (process.env.NODE_ENV !== 'production') {
      if (internalInstance._debugID !== 0) {
        reactlibReactReconciler__ReactInstrumentation.debugTool.onUpdateComponent(internalInstance._debugID);
      }
    }
  }

};

$m['react/lib/ReactReconciler'].exports = reactlibReactReconciler__ReactReconciler;
/*≠≠ node_modules/react/lib/ReactReconciler.js ≠≠*/

/*== node_modules/react/lib/ReactNodeTypes.js ==*/
$m['react/lib/ReactNodeTypes'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactNodeTypes
 * 
 */


var reactlibReactNodeTypes___prodInvariant = $m['react/lib/reactProdInvariant'].exports;

var reactlibReactNodeTypes__ReactElement = $m['react/lib/ReactElement'].exports;

var reactlibReactNodeTypes__invariant = $m['fbjs/lib/invariant'].exports;

var reactlibReactNodeTypes__ReactNodeTypes = {
  HOST: 0,
  COMPOSITE: 1,
  EMPTY: 2,

  getType: function (node) {
    if (node === null || node === false) {
      return reactlibReactNodeTypes__ReactNodeTypes.EMPTY;
    } else if (reactlibReactNodeTypes__ReactElement.isValidElement(node)) {
      if (typeof node.type === 'function') {
        return reactlibReactNodeTypes__ReactNodeTypes.COMPOSITE;
      } else {
        return reactlibReactNodeTypes__ReactNodeTypes.HOST;
      }
    }
    !false ? process.env.NODE_ENV !== 'production' ? reactlibReactNodeTypes__invariant(false, 'Unexpected node: %s', node) : reactlibReactNodeTypes___prodInvariant('26', node) : void 0;
  }
};

$m['react/lib/ReactNodeTypes'].exports = reactlibReactNodeTypes__ReactNodeTypes;
/*≠≠ node_modules/react/lib/ReactNodeTypes.js ≠≠*/

/*== node_modules/react/lib/ReactComponentEnvironment.js ==*/
$m['react/lib/ReactComponentEnvironment'] = { exports: {} };
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentEnvironment
 */


var reactlibReactComponentEnvironment___prodInvariant = $m['react/lib/reactProdInvariant'].exports;

var reactlibReactComponentEnvironment__invariant = $m['fbjs/lib/invariant'].exports;

var reactlibReactComponentEnvironment__injected = false;

var reactlibReactComponentEnvironment__ReactComponentEnvironment = {

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
      !!reactlibReactComponentEnvironment__injected ? process.env.NODE_ENV !== 'production' ? reactlibReactComponentEnvironment__invariant(false, 'ReactCompositeComponent: injectEnvironment() can only be called once.') : reactlibReactComponentEnvironment___prodInvariant('104') : void 0;
      reactlibReactComponentEnvironment__ReactComponentEnvironment.replaceNodeWithMarkup = environment.replaceNodeWithMarkup;
      reactlibReactComponentEnvironment__ReactComponentEnvironment.processChildrenUpdates = environment.processChildrenUpdates;
      reactlibReactComponentEnvironment__injected = true;
    }
  }

};

$m['react/lib/ReactComponentEnvironment'].exports = reactlibReactComponentEnvironment__ReactComponentEnvironment;
/*≠≠ node_modules/react/lib/ReactComponentEnvironment.js ≠≠*/

/*== node_modules/react/lib/ReactCompositeComponent.js ==*/
$m['react/lib/ReactCompositeComponent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactCompositeComponent
 */


var reactlibReactCompositeComponent___prodInvariant = $m['react/lib/reactProdInvariant'].exports,
    reactlibReactCompositeComponent___assign = $m['object-assign'].exports;

var reactlibReactCompositeComponent__ReactComponentEnvironment = $m['react/lib/ReactComponentEnvironment'].exports;
var reactlibReactCompositeComponent__ReactCurrentOwner = $m['react/lib/ReactCurrentOwner'].exports;
var reactlibReactCompositeComponent__ReactElement = $m['react/lib/ReactElement'].exports;
var reactlibReactCompositeComponent__ReactErrorUtils = $m['react/lib/ReactErrorUtils'].exports;
var reactlibReactCompositeComponent__ReactInstanceMap = $m['react/lib/ReactInstanceMap'].exports;
var reactlibReactCompositeComponent__ReactInstrumentation = $m['react/lib/ReactInstrumentation'].exports;
var reactlibReactCompositeComponent__ReactNodeTypes = $m['react/lib/ReactNodeTypes'].exports;
var reactlibReactCompositeComponent__ReactPropTypeLocations = $m['react/lib/ReactPropTypeLocations'].exports;
var reactlibReactCompositeComponent__ReactReconciler = $m['react/lib/ReactReconciler'].exports;

var reactlibReactCompositeComponent__checkReactTypeSpec = $m['react/lib/checkReactTypeSpec'].exports;
var reactlibReactCompositeComponent__emptyObject = $m['fbjs/lib/emptyObject'].exports;
var reactlibReactCompositeComponent__invariant = $m['fbjs/lib/invariant'].exports;
var reactlibReactCompositeComponent__shallowEqual = $m['fbjs/lib/shallowEqual'].exports;
var reactlibReactCompositeComponent__shouldUpdateReactComponent = $m['react/lib/shouldUpdateReactComponent'].exports;
var reactlibReactCompositeComponent__warning = $m['fbjs/lib/warning'].exports;

var reactlibReactCompositeComponent__CompositeTypes = {
  ImpureClass: 0,
  PureClass: 1,
  StatelessFunctional: 2
};

function reactlibReactCompositeComponent__StatelessComponent(Component) {}
reactlibReactCompositeComponent__StatelessComponent.prototype.render = function () {
  var Component = reactlibReactCompositeComponent__ReactInstanceMap.get(this)._currentElement.type;
  var element = Component(this.props, this.context, this.updater);
  reactlibReactCompositeComponent__warnIfInvalidElement(Component, element);
  return element;
};

function reactlibReactCompositeComponent__warnIfInvalidElement(Component, element) {
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== 'production' ? reactlibReactCompositeComponent__warning(element === null || element === false || reactlibReactCompositeComponent__ReactElement.isValidElement(element), '%s(...): A valid React element (or null) must be returned. You may have ' + 'returned undefined, an array or some other invalid object.', Component.displayName || Component.name || 'Component') : void 0;
    process.env.NODE_ENV !== 'production' ? reactlibReactCompositeComponent__warning(!Component.childContextTypes, '%s(...): childContextTypes cannot be defined on a functional component.', Component.displayName || Component.name || 'Component') : void 0;
  }
}

function reactlibReactCompositeComponent__shouldConstruct(Component) {
  return !!(Component.prototype && Component.prototype.isReactComponent);
}

function reactlibReactCompositeComponent__isPureComponent(Component) {
  return !!(Component.prototype && Component.prototype.isPureReactComponent);
}

// Separated into a function to contain deoptimizations caused by try/finally.
function reactlibReactCompositeComponent__measureLifeCyclePerf(fn, debugID, timerType) {
  if (debugID === 0) {
    // Top-level wrappers (see ReactMount) and empty components (see
    // ReactDOMEmptyComponent) are invisible to hooks and devtools.
    // Both are implementation details that should go away in the future.
    return fn();
  }

  reactlibReactCompositeComponent__ReactInstrumentation.debugTool.onBeginLifeCycleTimer(debugID, timerType);
  try {
    return fn();
  } finally {
    reactlibReactCompositeComponent__ReactInstrumentation.debugTool.onEndLifeCycleTimer(debugID, timerType);
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
var reactlibReactCompositeComponent__nextMountID = 1;

/**
 * @lends {ReactCompositeComponent.prototype}
 */
var reactlibReactCompositeComponent__ReactCompositeComponentMixin = {

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

    if (process.env.NODE_ENV !== 'production') {
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
    this._mountOrder = reactlibReactCompositeComponent__nextMountID++;
    this._hostParent = hostParent;
    this._hostContainerInfo = hostContainerInfo;

    var publicProps = this._currentElement.props;
    var publicContext = this._processContext(context);

    var Component = this._currentElement.type;

    var updateQueue = transaction.getUpdateQueue();

    // Initialize the public class
    var doConstruct = reactlibReactCompositeComponent__shouldConstruct(Component);
    var inst = this._constructComponent(doConstruct, publicProps, publicContext, updateQueue);
    var renderedElement;

    // Support functional components
    if (!doConstruct && (inst == null || inst.render == null)) {
      renderedElement = inst;
      reactlibReactCompositeComponent__warnIfInvalidElement(Component, renderedElement);
      !(inst === null || inst === false || reactlibReactCompositeComponent__ReactElement.isValidElement(inst)) ? process.env.NODE_ENV !== 'production' ? reactlibReactCompositeComponent__invariant(false, '%s(...): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.', Component.displayName || Component.name || 'Component') : reactlibReactCompositeComponent___prodInvariant('105', Component.displayName || Component.name || 'Component') : void 0;
      inst = new reactlibReactCompositeComponent__StatelessComponent(Component);
      this._compositeType = reactlibReactCompositeComponent__CompositeTypes.StatelessFunctional;
    } else {
      if (reactlibReactCompositeComponent__isPureComponent(Component)) {
        this._compositeType = reactlibReactCompositeComponent__CompositeTypes.PureClass;
      } else {
        this._compositeType = reactlibReactCompositeComponent__CompositeTypes.ImpureClass;
      }
    }

    if (process.env.NODE_ENV !== 'production') {
      // This will throw later in _renderValidatedComponent, but add an early
      // warning now to help debugging
      if (inst.render == null) {
        process.env.NODE_ENV !== 'production' ? reactlibReactCompositeComponent__warning(false, '%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render`.', Component.displayName || Component.name || 'Component') : void 0;
      }

      var propsMutated = inst.props !== publicProps;
      var componentName = Component.displayName || Component.name || 'Component';

      process.env.NODE_ENV !== 'production' ? reactlibReactCompositeComponent__warning(inst.props === undefined || !propsMutated, '%s(...): When calling super() in `%s`, make sure to pass ' + 'up the same props that your component\'s constructor was passed.', componentName, componentName) : void 0;
    }

    // These should be set up in the constructor, but as a convenience for
    // simpler class abstractions, we set them up after the fact.
    inst.props = publicProps;
    inst.context = publicContext;
    inst.refs = reactlibReactCompositeComponent__emptyObject;
    inst.updater = updateQueue;

    this._instance = inst;

    // Store a reference from the instance back to the internal representation
    reactlibReactCompositeComponent__ReactInstanceMap.set(inst, this);

    if (process.env.NODE_ENV !== 'production') {
      // Since plain JS classes are defined without any special initialization
      // logic, we can not catch common errors early. Therefore, we have to
      // catch them here, at initialization time, instead.
      process.env.NODE_ENV !== 'production' ? reactlibReactCompositeComponent__warning(!inst.getInitialState || inst.getInitialState.isReactClassApproved, 'getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', this.getName() || 'a component') : void 0;
      process.env.NODE_ENV !== 'production' ? reactlibReactCompositeComponent__warning(!inst.getDefaultProps || inst.getDefaultProps.isReactClassApproved, 'getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', this.getName() || 'a component') : void 0;
      process.env.NODE_ENV !== 'production' ? reactlibReactCompositeComponent__warning(!inst.propTypes, 'propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', this.getName() || 'a component') : void 0;
      process.env.NODE_ENV !== 'production' ? reactlibReactCompositeComponent__warning(!inst.contextTypes, 'contextTypes was defined as an instance property on %s. Use a ' + 'static property to define contextTypes instead.', this.getName() || 'a component') : void 0;
      process.env.NODE_ENV !== 'production' ? reactlibReactCompositeComponent__warning(typeof inst.componentShouldUpdate !== 'function', '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', this.getName() || 'A component') : void 0;
      process.env.NODE_ENV !== 'production' ? reactlibReactCompositeComponent__warning(typeof inst.componentDidUnmount !== 'function', '%s has a method called ' + 'componentDidUnmount(). But there is no such lifecycle method. ' + 'Did you mean componentWillUnmount()?', this.getName() || 'A component') : void 0;
      process.env.NODE_ENV !== 'production' ? reactlibReactCompositeComponent__warning(typeof inst.componentWillRecieveProps !== 'function', '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', this.getName() || 'A component') : void 0;
    }

    var initialState = inst.state;
    if (initialState === undefined) {
      inst.state = initialState = null;
    }
    !(typeof initialState === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? reactlibReactCompositeComponent__invariant(false, '%s.state: must be set to an object or null', this.getName() || 'ReactCompositeComponent') : reactlibReactCompositeComponent___prodInvariant('106', this.getName() || 'ReactCompositeComponent') : void 0;

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
      if (process.env.NODE_ENV !== 'production') {
        transaction.getReactMountReady().enqueue(function () {
          reactlibReactCompositeComponent__measureLifeCyclePerf(function () {
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
    if (process.env.NODE_ENV !== 'production') {
      reactlibReactCompositeComponent__ReactCurrentOwner.current = this;
      try {
        return this._constructComponentWithoutOwner(doConstruct, publicProps, publicContext, updateQueue);
      } finally {
        reactlibReactCompositeComponent__ReactCurrentOwner.current = null;
      }
    } else {
      return this._constructComponentWithoutOwner(doConstruct, publicProps, publicContext, updateQueue);
    }
  },

  _constructComponentWithoutOwner: function (doConstruct, publicProps, publicContext, updateQueue) {
    var Component = this._currentElement.type;

    if (doConstruct) {
      if (process.env.NODE_ENV !== 'production') {
        return reactlibReactCompositeComponent__measureLifeCyclePerf(function () {
          return new Component(publicProps, publicContext, updateQueue);
        }, this._debugID, 'ctor');
      } else {
        return new Component(publicProps, publicContext, updateQueue);
      }
    }

    // This can still be an instance in case of factory components
    // but we'll count this as time spent rendering as the more common case.
    if (process.env.NODE_ENV !== 'production') {
      return reactlibReactCompositeComponent__measureLifeCyclePerf(function () {
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
    if (process.env.NODE_ENV !== 'production') {
      debugID = this._debugID;
    }

    if (inst.componentWillMount) {
      if (process.env.NODE_ENV !== 'production') {
        reactlibReactCompositeComponent__measureLifeCyclePerf(function () {
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

    var nodeType = reactlibReactCompositeComponent__ReactNodeTypes.getType(renderedElement);
    this._renderedNodeType = nodeType;
    var child = this._instantiateReactComponent(renderedElement, nodeType !== reactlibReactCompositeComponent__ReactNodeTypes.EMPTY /* shouldHaveDebugID */
    );
    this._renderedComponent = child;

    var markup = reactlibReactCompositeComponent__ReactReconciler.mountComponent(child, transaction, hostParent, hostContainerInfo, this._processChildContext(context), debugID);

    if (process.env.NODE_ENV !== 'production') {
      if (debugID !== 0) {
        var childDebugIDs = child._debugID !== 0 ? [child._debugID] : [];
        reactlibReactCompositeComponent__ReactInstrumentation.debugTool.onSetChildren(debugID, childDebugIDs);
      }
    }

    return markup;
  },

  getHostNode: function () {
    return reactlibReactCompositeComponent__ReactReconciler.getHostNode(this._renderedComponent);
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
        reactlibReactCompositeComponent__ReactErrorUtils.invokeGuardedCallback(name, inst.componentWillUnmount.bind(inst));
      } else {
        if (process.env.NODE_ENV !== 'production') {
          reactlibReactCompositeComponent__measureLifeCyclePerf(function () {
            return inst.componentWillUnmount();
          }, this._debugID, 'componentWillUnmount');
        } else {
          inst.componentWillUnmount();
        }
      }
    }

    if (this._renderedComponent) {
      reactlibReactCompositeComponent__ReactReconciler.unmountComponent(this._renderedComponent, safely);
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
    reactlibReactCompositeComponent__ReactInstanceMap.remove(inst);

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
      return reactlibReactCompositeComponent__emptyObject;
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
    if (process.env.NODE_ENV !== 'production') {
      var Component = this._currentElement.type;
      if (Component.contextTypes) {
        this._checkContextTypes(Component.contextTypes, maskedContext, reactlibReactCompositeComponent__ReactPropTypeLocations.context);
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
      if (process.env.NODE_ENV !== 'production') {
        reactlibReactCompositeComponent__ReactInstrumentation.debugTool.onBeginProcessingChildContext();
        try {
          childContext = inst.getChildContext();
        } finally {
          reactlibReactCompositeComponent__ReactInstrumentation.debugTool.onEndProcessingChildContext();
        }
      } else {
        childContext = inst.getChildContext();
      }
    }

    if (childContext) {
      !(typeof Component.childContextTypes === 'object') ? process.env.NODE_ENV !== 'production' ? reactlibReactCompositeComponent__invariant(false, '%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().', this.getName() || 'ReactCompositeComponent') : reactlibReactCompositeComponent___prodInvariant('107', this.getName() || 'ReactCompositeComponent') : void 0;
      if (process.env.NODE_ENV !== 'production') {
        this._checkContextTypes(Component.childContextTypes, childContext, reactlibReactCompositeComponent__ReactPropTypeLocations.childContext);
      }
      for (var name in childContext) {
        !(name in Component.childContextTypes) ? process.env.NODE_ENV !== 'production' ? reactlibReactCompositeComponent__invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', this.getName() || 'ReactCompositeComponent', name) : reactlibReactCompositeComponent___prodInvariant('108', this.getName() || 'ReactCompositeComponent', name) : void 0;
      }
      return reactlibReactCompositeComponent___assign({}, currentContext, childContext);
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
    reactlibReactCompositeComponent__checkReactTypeSpec(typeSpecs, values, location, this.getName(), null, this._debugID);
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
      reactlibReactCompositeComponent__ReactReconciler.receiveComponent(this, this._pendingElement, transaction, this._context);
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
    !(inst != null) ? process.env.NODE_ENV !== 'production' ? reactlibReactCompositeComponent__invariant(false, 'Attempted to update component `%s` that has already been unmounted (or failed to mount).', this.getName() || 'ReactCompositeComponent') : reactlibReactCompositeComponent___prodInvariant('136', this.getName() || 'ReactCompositeComponent') : void 0;

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
      if (process.env.NODE_ENV !== 'production') {
        reactlibReactCompositeComponent__measureLifeCyclePerf(function () {
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
        if (process.env.NODE_ENV !== 'production') {
          shouldUpdate = reactlibReactCompositeComponent__measureLifeCyclePerf(function () {
            return inst.shouldComponentUpdate(nextProps, nextState, nextContext);
          }, this._debugID, 'shouldComponentUpdate');
        } else {
          shouldUpdate = inst.shouldComponentUpdate(nextProps, nextState, nextContext);
        }
      } else {
        if (this._compositeType === reactlibReactCompositeComponent__CompositeTypes.PureClass) {
          shouldUpdate = !reactlibReactCompositeComponent__shallowEqual(prevProps, nextProps) || !reactlibReactCompositeComponent__shallowEqual(inst.state, nextState);
        }
      }
    }

    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? reactlibReactCompositeComponent__warning(shouldUpdate !== undefined, '%s.shouldComponentUpdate(): Returned undefined instead of a ' + 'boolean value. Make sure to return true or false.', this.getName() || 'ReactCompositeComponent') : void 0;
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

    var nextState = reactlibReactCompositeComponent___assign({}, replace ? queue[0] : inst.state);
    for (var i = replace ? 1 : 0; i < queue.length; i++) {
      var partial = queue[i];
      reactlibReactCompositeComponent___assign(nextState, typeof partial === 'function' ? partial.call(inst, nextState, props, context) : partial);
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
      if (process.env.NODE_ENV !== 'production') {
        reactlibReactCompositeComponent__measureLifeCyclePerf(function () {
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
      if (process.env.NODE_ENV !== 'production') {
        transaction.getReactMountReady().enqueue(function () {
          reactlibReactCompositeComponent__measureLifeCyclePerf(inst.componentDidUpdate.bind(inst, prevProps, prevState, prevContext), _this2._debugID, 'componentDidUpdate');
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
    if (process.env.NODE_ENV !== 'production') {
      debugID = this._debugID;
    }

    if (reactlibReactCompositeComponent__shouldUpdateReactComponent(prevRenderedElement, nextRenderedElement)) {
      reactlibReactCompositeComponent__ReactReconciler.receiveComponent(prevComponentInstance, nextRenderedElement, transaction, this._processChildContext(context));
    } else {
      var oldHostNode = reactlibReactCompositeComponent__ReactReconciler.getHostNode(prevComponentInstance);
      reactlibReactCompositeComponent__ReactReconciler.unmountComponent(prevComponentInstance, false);

      var nodeType = reactlibReactCompositeComponent__ReactNodeTypes.getType(nextRenderedElement);
      this._renderedNodeType = nodeType;
      var child = this._instantiateReactComponent(nextRenderedElement, nodeType !== reactlibReactCompositeComponent__ReactNodeTypes.EMPTY /* shouldHaveDebugID */
      );
      this._renderedComponent = child;

      var nextMarkup = reactlibReactCompositeComponent__ReactReconciler.mountComponent(child, transaction, this._hostParent, this._hostContainerInfo, this._processChildContext(context), debugID);

      if (process.env.NODE_ENV !== 'production') {
        if (debugID !== 0) {
          var childDebugIDs = child._debugID !== 0 ? [child._debugID] : [];
          reactlibReactCompositeComponent__ReactInstrumentation.debugTool.onSetChildren(debugID, childDebugIDs);
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
    reactlibReactCompositeComponent__ReactComponentEnvironment.replaceNodeWithMarkup(oldHostNode, nextMarkup, prevInstance);
  },

  /**
   * @protected
   */
  _renderValidatedComponentWithoutOwnerOrContext: function () {
    var inst = this._instance;
    var renderedComponent;

    if (process.env.NODE_ENV !== 'production') {
      renderedComponent = reactlibReactCompositeComponent__measureLifeCyclePerf(function () {
        return inst.render();
      }, this._debugID, 'render');
    } else {
      renderedComponent = inst.render();
    }

    if (process.env.NODE_ENV !== 'production') {
      // We allow auto-mocks to proceed as if they're returning null.
      if (renderedComponent === undefined && inst.render._isMockFunction) {
        // This is probably bad practice. Consider warning here and
        // deprecating this convenience.
        renderedComponent = null;
      }
    }

    return renderedComponent;
  },

  /**
   * @private
   */
  _renderValidatedComponent: function () {
    var renderedComponent;
    if (process.env.NODE_ENV !== 'production' || this._compositeType !== reactlibReactCompositeComponent__CompositeTypes.StatelessFunctional) {
      reactlibReactCompositeComponent__ReactCurrentOwner.current = this;
      try {
        renderedComponent = this._renderValidatedComponentWithoutOwnerOrContext();
      } finally {
        reactlibReactCompositeComponent__ReactCurrentOwner.current = null;
      }
    } else {
      renderedComponent = this._renderValidatedComponentWithoutOwnerOrContext();
    }
    !(
    // TODO: An `isValidNode` function would probably be more appropriate
    renderedComponent === null || renderedComponent === false || reactlibReactCompositeComponent__ReactElement.isValidElement(renderedComponent)) ? process.env.NODE_ENV !== 'production' ? reactlibReactCompositeComponent__invariant(false, '%s.render(): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.', this.getName() || 'ReactCompositeComponent') : reactlibReactCompositeComponent___prodInvariant('109', this.getName() || 'ReactCompositeComponent') : void 0;

    return renderedComponent;
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
    !(inst != null) ? process.env.NODE_ENV !== 'production' ? reactlibReactCompositeComponent__invariant(false, 'Stateless function components cannot have refs.') : reactlibReactCompositeComponent___prodInvariant('110') : void 0;
    var publicComponentInstance = component.getPublicInstance();
    if (process.env.NODE_ENV !== 'production') {
      var componentName = component && component.getName ? component.getName() : 'a component';
      process.env.NODE_ENV !== 'production' ? reactlibReactCompositeComponent__warning(publicComponentInstance != null || component._compositeType !== reactlibReactCompositeComponent__CompositeTypes.StatelessFunctional, 'Stateless function components cannot be given refs ' + '(See ref "%s" in %s created by %s). ' + 'Attempts to access this ref will fail.', ref, componentName, this.getName()) : void 0;
    }
    var refs = inst.refs === reactlibReactCompositeComponent__emptyObject ? inst.refs = {} : inst.refs;
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
    if (this._compositeType === reactlibReactCompositeComponent__CompositeTypes.StatelessFunctional) {
      return null;
    }
    return inst;
  },

  // Stub
  _instantiateReactComponent: null

};

var reactlibReactCompositeComponent__ReactCompositeComponent = {

  Mixin: reactlibReactCompositeComponent__ReactCompositeComponentMixin

};

$m['react/lib/ReactCompositeComponent'].exports = reactlibReactCompositeComponent__ReactCompositeComponent;
/*≠≠ node_modules/react/lib/ReactCompositeComponent.js ≠≠*/

/*== node_modules/react/lib/instantiateReactComponent.js ==*/
$m['react/lib/instantiateReactComponent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule instantiateReactComponent
 */


var reactlibinstantiateReactComponent___prodInvariant = $m['react/lib/reactProdInvariant'].exports,
    reactlibinstantiateReactComponent___assign = $m['object-assign'].exports;

var reactlibinstantiateReactComponent__ReactCompositeComponent = $m['react/lib/ReactCompositeComponent'].exports;
var reactlibinstantiateReactComponent__ReactEmptyComponent = $m['react/lib/ReactEmptyComponent'].exports;
var reactlibinstantiateReactComponent__ReactHostComponent = $m['react/lib/ReactHostComponent'].exports;

var reactlibinstantiateReactComponent__invariant = $m['fbjs/lib/invariant'].exports;
var reactlibinstantiateReactComponent__warning = $m['fbjs/lib/warning'].exports;

// To avoid a cyclic dependency, we create the final class in this module
var reactlibinstantiateReactComponent__ReactCompositeComponentWrapper = function (element) {
  this.construct(element);
};
reactlibinstantiateReactComponent___assign(reactlibinstantiateReactComponent__ReactCompositeComponentWrapper.prototype, reactlibinstantiateReactComponent__ReactCompositeComponent.Mixin, {
  _instantiateReactComponent: reactlibinstantiateReactComponent__instantiateReactComponent
});

function reactlibinstantiateReactComponent__getDeclarationErrorAddendum(owner) {
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
function reactlibinstantiateReactComponent__isInternalComponentType(type) {
  return typeof type === 'function' && typeof type.prototype !== 'undefined' && typeof type.prototype.mountComponent === 'function' && typeof type.prototype.receiveComponent === 'function';
}

var reactlibinstantiateReactComponent__nextDebugID = 1;

/**
 * Given a ReactNode, create an instance that will actually be mounted.
 *
 * @param {ReactNode} node
 * @param {boolean} shouldHaveDebugID
 * @return {object} A new instance of the element's constructor.
 * @protected
 */
function reactlibinstantiateReactComponent__instantiateReactComponent(node, shouldHaveDebugID) {
  var instance;

  if (node === null || node === false) {
    instance = reactlibinstantiateReactComponent__ReactEmptyComponent.create(reactlibinstantiateReactComponent__instantiateReactComponent);
  } else if (typeof node === 'object') {
    var element = node;
    !(element && (typeof element.type === 'function' || typeof element.type === 'string')) ? process.env.NODE_ENV !== 'production' ? reactlibinstantiateReactComponent__invariant(false, 'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s', element.type == null ? element.type : typeof element.type, reactlibinstantiateReactComponent__getDeclarationErrorAddendum(element._owner)) : reactlibinstantiateReactComponent___prodInvariant('130', element.type == null ? element.type : typeof element.type, reactlibinstantiateReactComponent__getDeclarationErrorAddendum(element._owner)) : void 0;

    // Special case string values
    if (typeof element.type === 'string') {
      instance = reactlibinstantiateReactComponent__ReactHostComponent.createInternalComponent(element);
    } else if (reactlibinstantiateReactComponent__isInternalComponentType(element.type)) {
      // This is temporarily available for custom components that are not string
      // representations. I.e. ART. Once those are updated to use the string
      // representation, we can drop this code path.
      instance = new element.type(element);

      // We renamed this. Allow the old name for compat. :(
      if (!instance.getHostNode) {
        instance.getHostNode = instance.getNativeNode;
      }
    } else {
      instance = new reactlibinstantiateReactComponent__ReactCompositeComponentWrapper(element);
    }
  } else if (typeof node === 'string' || typeof node === 'number') {
    instance = reactlibinstantiateReactComponent__ReactHostComponent.createInstanceForText(node);
  } else {
    !false ? process.env.NODE_ENV !== 'production' ? reactlibinstantiateReactComponent__invariant(false, 'Encountered invalid React node of type %s', typeof node) : reactlibinstantiateReactComponent___prodInvariant('131', typeof node) : void 0;
  }

  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== 'production' ? reactlibinstantiateReactComponent__warning(typeof instance.mountComponent === 'function' && typeof instance.receiveComponent === 'function' && typeof instance.getHostNode === 'function' && typeof instance.unmountComponent === 'function', 'Only React Components can be mounted.') : void 0;
  }

  // These two fields are used by the DOM and ART diffing algorithms
  // respectively. Instead of using expandos on components, we should be
  // storing the state needed by the diffing algorithms elsewhere.
  instance._mountIndex = 0;
  instance._mountImage = null;

  if (process.env.NODE_ENV !== 'production') {
    instance._debugID = shouldHaveDebugID ? reactlibinstantiateReactComponent__nextDebugID++ : 0;
  }

  // Internal instances should fully constructed at this point, so they should
  // not get any new fields added to them at this point.
  if (process.env.NODE_ENV !== 'production') {
    if (Object.preventExtensions) {
      Object.preventExtensions(instance);
    }
  }

  return instance;
}

$m['react/lib/instantiateReactComponent'].exports = reactlibinstantiateReactComponent__instantiateReactComponent;
/*≠≠ node_modules/react/lib/instantiateReactComponent.js ≠≠*/

/*== node_modules/react/lib/Transaction.js ==*/
$m['react/lib/Transaction'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Transaction
 */


var reactlibTransaction___prodInvariant = $m['react/lib/reactProdInvariant'].exports;

var reactlibTransaction__invariant = $m['fbjs/lib/invariant'].exports;

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
var reactlibTransaction__Mixin = {
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
    !!this.isInTransaction() ? process.env.NODE_ENV !== 'production' ? reactlibTransaction__invariant(false, 'Transaction.perform(...): Cannot initialize a transaction when there is already an outstanding transaction.') : reactlibTransaction___prodInvariant('27') : void 0;
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
        this.wrapperInitData[i] = reactlibTransaction__Transaction.OBSERVED_ERROR;
        this.wrapperInitData[i] = wrapper.initialize ? wrapper.initialize.call(this) : null;
      } finally {
        if (this.wrapperInitData[i] === reactlibTransaction__Transaction.OBSERVED_ERROR) {
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
    !this.isInTransaction() ? process.env.NODE_ENV !== 'production' ? reactlibTransaction__invariant(false, 'Transaction.closeAll(): Cannot close transaction when none are open.') : reactlibTransaction___prodInvariant('28') : void 0;
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
        if (initData !== reactlibTransaction__Transaction.OBSERVED_ERROR && wrapper.close) {
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

var reactlibTransaction__Transaction = {

  Mixin: reactlibTransaction__Mixin,

  /**
   * Token to look for to determine if an error occurred.
   */
  OBSERVED_ERROR: {}

};

$m['react/lib/Transaction'].exports = reactlibTransaction__Transaction;
/*≠≠ node_modules/react/lib/Transaction.js ≠≠*/

/*== node_modules/react/lib/CallbackQueue.js ==*/
$m['react/lib/CallbackQueue'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CallbackQueue
 */


var reactlibCallbackQueue___prodInvariant = $m['react/lib/reactProdInvariant'].exports,
    reactlibCallbackQueue___assign = $m['object-assign'].exports;

var reactlibCallbackQueue__PooledClass = $m['react/lib/PooledClass'].exports;

var reactlibCallbackQueue__invariant = $m['fbjs/lib/invariant'].exports;

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
function reactlibCallbackQueue__CallbackQueue() {
  this._callbacks = null;
  this._contexts = null;
}

reactlibCallbackQueue___assign(reactlibCallbackQueue__CallbackQueue.prototype, {

  /**
   * Enqueues a callback to be invoked when `notifyAll` is invoked.
   *
   * @param {function} callback Invoked when `notifyAll` is invoked.
   * @param {?object} context Context to call `callback` with.
   * @internal
   */
  enqueue: function (callback, context) {
    this._callbacks = this._callbacks || [];
    this._contexts = this._contexts || [];
    this._callbacks.push(callback);
    this._contexts.push(context);
  },

  /**
   * Invokes all enqueued callbacks and clears the queue. This is invoked after
   * the DOM representation of a component has been created or updated.
   *
   * @internal
   */
  notifyAll: function () {
    var callbacks = this._callbacks;
    var contexts = this._contexts;
    if (callbacks) {
      !(callbacks.length === contexts.length) ? process.env.NODE_ENV !== 'production' ? reactlibCallbackQueue__invariant(false, 'Mismatched list of contexts in callback queue') : reactlibCallbackQueue___prodInvariant('24') : void 0;
      this._callbacks = null;
      this._contexts = null;
      for (var i = 0; i < callbacks.length; i++) {
        callbacks[i].call(contexts[i]);
      }
      callbacks.length = 0;
      contexts.length = 0;
    }
  },

  checkpoint: function () {
    return this._callbacks ? this._callbacks.length : 0;
  },

  rollback: function (len) {
    if (this._callbacks) {
      this._callbacks.length = len;
      this._contexts.length = len;
    }
  },

  /**
   * Resets the internal queue.
   *
   * @internal
   */
  reset: function () {
    this._callbacks = null;
    this._contexts = null;
  },

  /**
   * `PooledClass` looks for this.
   */
  destructor: function () {
    this.reset();
  }

});

reactlibCallbackQueue__PooledClass.addPoolingTo(reactlibCallbackQueue__CallbackQueue);

$m['react/lib/CallbackQueue'].exports = reactlibCallbackQueue__CallbackQueue;
/*≠≠ node_modules/react/lib/CallbackQueue.js ≠≠*/

/*== node_modules/react/lib/ReactUpdates.js ==*/
$m['react/lib/ReactUpdates'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactUpdates
 */


var reactlibReactUpdates___prodInvariant = $m['react/lib/reactProdInvariant'].exports,
    reactlibReactUpdates___assign = $m['object-assign'].exports;

var reactlibReactUpdates__CallbackQueue = $m['react/lib/CallbackQueue'].exports;
var reactlibReactUpdates__PooledClass = $m['react/lib/PooledClass'].exports;
var reactlibReactUpdates__ReactFeatureFlags = $m['react/lib/ReactFeatureFlags'].exports;
var reactlibReactUpdates__ReactReconciler = $m['react/lib/ReactReconciler'].exports;
var reactlibReactUpdates__Transaction = $m['react/lib/Transaction'].exports;

var reactlibReactUpdates__invariant = $m['fbjs/lib/invariant'].exports;

var reactlibReactUpdates__dirtyComponents = [];
var reactlibReactUpdates__updateBatchNumber = 0;
var reactlibReactUpdates__asapCallbackQueue = reactlibReactUpdates__CallbackQueue.getPooled();
var reactlibReactUpdates__asapEnqueued = false;

var reactlibReactUpdates__batchingStrategy = null;

function reactlibReactUpdates__ensureInjected() {
  !(reactlibReactUpdates__ReactUpdates.ReactReconcileTransaction && reactlibReactUpdates__batchingStrategy) ? process.env.NODE_ENV !== 'production' ? reactlibReactUpdates__invariant(false, 'ReactUpdates: must inject a reconcile transaction class and batching strategy') : reactlibReactUpdates___prodInvariant('123') : void 0;
}

var reactlibReactUpdates__NESTED_UPDATES = {
  initialize: function () {
    this.dirtyComponentsLength = reactlibReactUpdates__dirtyComponents.length;
  },
  close: function () {
    if (this.dirtyComponentsLength !== reactlibReactUpdates__dirtyComponents.length) {
      // Additional updates were enqueued by componentDidUpdate handlers or
      // similar; before our own UPDATE_QUEUEING wrapper closes, we want to run
      // these new updates so that if A's componentDidUpdate calls setState on
      // B, B will update before the callback A's updater provided when calling
      // setState.
      reactlibReactUpdates__dirtyComponents.splice(0, this.dirtyComponentsLength);
      reactlibReactUpdates__flushBatchedUpdates();
    } else {
      reactlibReactUpdates__dirtyComponents.length = 0;
    }
  }
};

var reactlibReactUpdates__UPDATE_QUEUEING = {
  initialize: function () {
    this.callbackQueue.reset();
  },
  close: function () {
    this.callbackQueue.notifyAll();
  }
};

var reactlibReactUpdates__TRANSACTION_WRAPPERS = [reactlibReactUpdates__NESTED_UPDATES, reactlibReactUpdates__UPDATE_QUEUEING];

function reactlibReactUpdates__ReactUpdatesFlushTransaction() {
  this.reinitializeTransaction();
  this.dirtyComponentsLength = null;
  this.callbackQueue = reactlibReactUpdates__CallbackQueue.getPooled();
  this.reconcileTransaction = reactlibReactUpdates__ReactUpdates.ReactReconcileTransaction.getPooled(
  /* useCreateElement */true);
}

reactlibReactUpdates___assign(reactlibReactUpdates__ReactUpdatesFlushTransaction.prototype, reactlibReactUpdates__Transaction.Mixin, {
  getTransactionWrappers: function () {
    return reactlibReactUpdates__TRANSACTION_WRAPPERS;
  },

  destructor: function () {
    this.dirtyComponentsLength = null;
    reactlibReactUpdates__CallbackQueue.release(this.callbackQueue);
    this.callbackQueue = null;
    reactlibReactUpdates__ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);
    this.reconcileTransaction = null;
  },

  perform: function (method, scope, a) {
    // Essentially calls `this.reconcileTransaction.perform(method, scope, a)`
    // with this transaction's wrappers around it.
    return reactlibReactUpdates__Transaction.Mixin.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, method, scope, a);
  }
});

reactlibReactUpdates__PooledClass.addPoolingTo(reactlibReactUpdates__ReactUpdatesFlushTransaction);

function reactlibReactUpdates__batchedUpdates(callback, a, b, c, d, e) {
  reactlibReactUpdates__ensureInjected();
  reactlibReactUpdates__batchingStrategy.batchedUpdates(callback, a, b, c, d, e);
}

/**
 * Array comparator for ReactComponents by mount ordering.
 *
 * @param {ReactComponent} c1 first component you're comparing
 * @param {ReactComponent} c2 second component you're comparing
 * @return {number} Return value usable by Array.prototype.sort().
 */
function reactlibReactUpdates__mountOrderComparator(c1, c2) {
  return c1._mountOrder - c2._mountOrder;
}

function reactlibReactUpdates__runBatchedUpdates(transaction) {
  var len = transaction.dirtyComponentsLength;
  !(len === reactlibReactUpdates__dirtyComponents.length) ? process.env.NODE_ENV !== 'production' ? reactlibReactUpdates__invariant(false, 'Expected flush transaction\'s stored dirty-components length (%s) to match dirty-components array length (%s).', len, reactlibReactUpdates__dirtyComponents.length) : reactlibReactUpdates___prodInvariant('124', len, reactlibReactUpdates__dirtyComponents.length) : void 0;

  // Since reconciling a component higher in the owner hierarchy usually (not
  // always -- see shouldComponentUpdate()) will reconcile children, reconcile
  // them before their children by sorting the array.
  reactlibReactUpdates__dirtyComponents.sort(reactlibReactUpdates__mountOrderComparator);

  // Any updates enqueued while reconciling must be performed after this entire
  // batch. Otherwise, if dirtyComponents is [A, B] where A has children B and
  // C, B could update twice in a single batch if C's render enqueues an update
  // to B (since B would have already updated, we should skip it, and the only
  // way we can know to do so is by checking the batch counter).
  reactlibReactUpdates__updateBatchNumber++;

  for (var i = 0; i < len; i++) {
    // If a component is unmounted before pending changes apply, it will still
    // be here, but we assume that it has cleared its _pendingCallbacks and
    // that performUpdateIfNecessary is a noop.
    var component = reactlibReactUpdates__dirtyComponents[i];

    // If performUpdateIfNecessary happens to enqueue any new updates, we
    // shouldn't execute the callbacks until the next render happens, so
    // stash the callbacks first
    var callbacks = component._pendingCallbacks;
    component._pendingCallbacks = null;

    var markerName;
    if (reactlibReactUpdates__ReactFeatureFlags.logTopLevelRenders) {
      var namedComponent = component;
      // Duck type TopLevelWrapper. This is probably always true.
      if (component._currentElement.props === component._renderedComponent._currentElement) {
        namedComponent = component._renderedComponent;
      }
      markerName = 'React update: ' + namedComponent.getName();
      console.time(markerName);
    }

    reactlibReactUpdates__ReactReconciler.performUpdateIfNecessary(component, transaction.reconcileTransaction, reactlibReactUpdates__updateBatchNumber);

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

var reactlibReactUpdates__flushBatchedUpdates = function () {
  // ReactUpdatesFlushTransaction's wrappers will clear the dirtyComponents
  // array and perform any updates enqueued by mount-ready handlers (i.e.,
  // componentDidUpdate) but we need to check here too in order to catch
  // updates enqueued by setState callbacks and asap calls.
  while (reactlibReactUpdates__dirtyComponents.length || reactlibReactUpdates__asapEnqueued) {
    if (reactlibReactUpdates__dirtyComponents.length) {
      var transaction = reactlibReactUpdates__ReactUpdatesFlushTransaction.getPooled();
      transaction.perform(reactlibReactUpdates__runBatchedUpdates, null, transaction);
      reactlibReactUpdates__ReactUpdatesFlushTransaction.release(transaction);
    }

    if (reactlibReactUpdates__asapEnqueued) {
      reactlibReactUpdates__asapEnqueued = false;
      var queue = reactlibReactUpdates__asapCallbackQueue;
      reactlibReactUpdates__asapCallbackQueue = reactlibReactUpdates__CallbackQueue.getPooled();
      queue.notifyAll();
      reactlibReactUpdates__CallbackQueue.release(queue);
    }
  }
};

/**
 * Mark a component as needing a rerender, adding an optional callback to a
 * list of functions which will be executed once the rerender occurs.
 */
function reactlibReactUpdates__enqueueUpdate(component) {
  reactlibReactUpdates__ensureInjected();

  // Various parts of our code (such as ReactCompositeComponent's
  // _renderValidatedComponent) assume that calls to render aren't nested;
  // verify that that's the case. (This is called by each top-level update
  // function, like setState, forceUpdate, etc.; creation and
  // destruction of top-level components is guarded in ReactMount.)

  if (!reactlibReactUpdates__batchingStrategy.isBatchingUpdates) {
    reactlibReactUpdates__batchingStrategy.batchedUpdates(reactlibReactUpdates__enqueueUpdate, component);
    return;
  }

  reactlibReactUpdates__dirtyComponents.push(component);
  if (component._updateBatchNumber == null) {
    component._updateBatchNumber = reactlibReactUpdates__updateBatchNumber + 1;
  }
}

/**
 * Enqueue a callback to be run at the end of the current batching cycle. Throws
 * if no updates are currently being performed.
 */
function reactlibReactUpdates__asap(callback, context) {
  !reactlibReactUpdates__batchingStrategy.isBatchingUpdates ? process.env.NODE_ENV !== 'production' ? reactlibReactUpdates__invariant(false, 'ReactUpdates.asap: Can\'t enqueue an asap callback in a context whereupdates are not being batched.') : reactlibReactUpdates___prodInvariant('125') : void 0;
  reactlibReactUpdates__asapCallbackQueue.enqueue(callback, context);
  reactlibReactUpdates__asapEnqueued = true;
}

var reactlibReactUpdates__ReactUpdatesInjection = {
  injectReconcileTransaction: function (ReconcileTransaction) {
    !ReconcileTransaction ? process.env.NODE_ENV !== 'production' ? reactlibReactUpdates__invariant(false, 'ReactUpdates: must provide a reconcile transaction class') : reactlibReactUpdates___prodInvariant('126') : void 0;
    reactlibReactUpdates__ReactUpdates.ReactReconcileTransaction = ReconcileTransaction;
  },

  injectBatchingStrategy: function (_batchingStrategy) {
    !_batchingStrategy ? process.env.NODE_ENV !== 'production' ? reactlibReactUpdates__invariant(false, 'ReactUpdates: must provide a batching strategy') : reactlibReactUpdates___prodInvariant('127') : void 0;
    !(typeof _batchingStrategy.batchedUpdates === 'function') ? process.env.NODE_ENV !== 'production' ? reactlibReactUpdates__invariant(false, 'ReactUpdates: must provide a batchedUpdates() function') : reactlibReactUpdates___prodInvariant('128') : void 0;
    !(typeof _batchingStrategy.isBatchingUpdates === 'boolean') ? process.env.NODE_ENV !== 'production' ? reactlibReactUpdates__invariant(false, 'ReactUpdates: must provide an isBatchingUpdates boolean attribute') : reactlibReactUpdates___prodInvariant('129') : void 0;
    reactlibReactUpdates__batchingStrategy = _batchingStrategy;
  }
};

var reactlibReactUpdates__ReactUpdates = {
  /**
   * React references `ReactReconcileTransaction` using this property in order
   * to allow dependency injection.
   *
   * @internal
   */
  ReactReconcileTransaction: null,

  batchedUpdates: reactlibReactUpdates__batchedUpdates,
  enqueueUpdate: reactlibReactUpdates__enqueueUpdate,
  flushBatchedUpdates: reactlibReactUpdates__flushBatchedUpdates,
  injection: reactlibReactUpdates__ReactUpdatesInjection,
  asap: reactlibReactUpdates__asap
};

$m['react/lib/ReactUpdates'].exports = reactlibReactUpdates__ReactUpdates;
/*≠≠ node_modules/react/lib/ReactUpdates.js ≠≠*/

/*== node_modules/react/lib/ReactUpdateQueue.js ==*/
$m['react/lib/ReactUpdateQueue'] = { exports: {} };
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactUpdateQueue
 */


var reactlibReactUpdateQueue___prodInvariant = $m['react/lib/reactProdInvariant'].exports;

var reactlibReactUpdateQueue__ReactCurrentOwner = $m['react/lib/ReactCurrentOwner'].exports;
var reactlibReactUpdateQueue__ReactInstanceMap = $m['react/lib/ReactInstanceMap'].exports;
var reactlibReactUpdateQueue__ReactInstrumentation = $m['react/lib/ReactInstrumentation'].exports;
var reactlibReactUpdateQueue__ReactUpdates = $m['react/lib/ReactUpdates'].exports;

var reactlibReactUpdateQueue__invariant = $m['fbjs/lib/invariant'].exports;
var reactlibReactUpdateQueue__warning = $m['fbjs/lib/warning'].exports;

function reactlibReactUpdateQueue__enqueueUpdate(internalInstance) {
  reactlibReactUpdateQueue__ReactUpdates.enqueueUpdate(internalInstance);
}

function reactlibReactUpdateQueue__formatUnexpectedArgument(arg) {
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

function reactlibReactUpdateQueue__getInternalInstanceReadyForUpdate(publicInstance, callerName) {
  var internalInstance = reactlibReactUpdateQueue__ReactInstanceMap.get(publicInstance);
  if (!internalInstance) {
    if (process.env.NODE_ENV !== 'production') {
      var ctor = publicInstance.constructor;
      // Only warn when we have a callerName. Otherwise we should be silent.
      // We're probably calling from enqueueCallback. We don't want to warn
      // there because we already warned for the corresponding lifecycle method.
      process.env.NODE_ENV !== 'production' ? reactlibReactUpdateQueue__warning(!callerName, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, ctor && (ctor.displayName || ctor.name) || 'ReactClass') : void 0;
    }
    return null;
  }

  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== 'production' ? reactlibReactUpdateQueue__warning(reactlibReactUpdateQueue__ReactCurrentOwner.current == null, '%s(...): Cannot update during an existing state transition (such as ' + 'within `render` or another component\'s constructor). Render methods ' + 'should be a pure function of props and state; constructor ' + 'side-effects are an anti-pattern, but can be moved to ' + '`componentWillMount`.', callerName) : void 0;
  }

  return internalInstance;
}

/**
 * ReactUpdateQueue allows for state updates to be scheduled into a later
 * reconciliation step.
 */
var reactlibReactUpdateQueue__ReactUpdateQueue = {

  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    if (process.env.NODE_ENV !== 'production') {
      var owner = reactlibReactUpdateQueue__ReactCurrentOwner.current;
      if (owner !== null) {
        process.env.NODE_ENV !== 'production' ? reactlibReactUpdateQueue__warning(owner._warnedAboutRefsInRender, '%s is accessing isMounted inside its render() function. ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : void 0;
        owner._warnedAboutRefsInRender = true;
      }
    }
    var internalInstance = reactlibReactUpdateQueue__ReactInstanceMap.get(publicInstance);
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
    reactlibReactUpdateQueue__ReactUpdateQueue.validateCallback(callback, callerName);
    var internalInstance = reactlibReactUpdateQueue__getInternalInstanceReadyForUpdate(publicInstance);

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
    reactlibReactUpdateQueue__enqueueUpdate(internalInstance);
  },

  enqueueCallbackInternal: function (internalInstance, callback) {
    if (internalInstance._pendingCallbacks) {
      internalInstance._pendingCallbacks.push(callback);
    } else {
      internalInstance._pendingCallbacks = [callback];
    }
    reactlibReactUpdateQueue__enqueueUpdate(internalInstance);
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
    var internalInstance = reactlibReactUpdateQueue__getInternalInstanceReadyForUpdate(publicInstance, 'forceUpdate');

    if (!internalInstance) {
      return;
    }

    internalInstance._pendingForceUpdate = true;

    reactlibReactUpdateQueue__enqueueUpdate(internalInstance);
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
  enqueueReplaceState: function (publicInstance, completeState) {
    var internalInstance = reactlibReactUpdateQueue__getInternalInstanceReadyForUpdate(publicInstance, 'replaceState');

    if (!internalInstance) {
      return;
    }

    internalInstance._pendingStateQueue = [completeState];
    internalInstance._pendingReplaceState = true;

    reactlibReactUpdateQueue__enqueueUpdate(internalInstance);
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
    if (process.env.NODE_ENV !== 'production') {
      reactlibReactUpdateQueue__ReactInstrumentation.debugTool.onSetState();
      process.env.NODE_ENV !== 'production' ? reactlibReactUpdateQueue__warning(partialState != null, 'setState(...): You passed an undefined or null state object; ' + 'instead, use forceUpdate().') : void 0;
    }

    var internalInstance = reactlibReactUpdateQueue__getInternalInstanceReadyForUpdate(publicInstance, 'setState');

    if (!internalInstance) {
      return;
    }

    var queue = internalInstance._pendingStateQueue || (internalInstance._pendingStateQueue = []);
    queue.push(partialState);

    reactlibReactUpdateQueue__enqueueUpdate(internalInstance);
  },

  enqueueElementInternal: function (internalInstance, nextElement, nextContext) {
    internalInstance._pendingElement = nextElement;
    // TODO: introduce _pendingContext instead of setting it directly.
    internalInstance._context = nextContext;
    reactlibReactUpdateQueue__enqueueUpdate(internalInstance);
  },

  validateCallback: function (callback, callerName) {
    !(!callback || typeof callback === 'function') ? process.env.NODE_ENV !== 'production' ? reactlibReactUpdateQueue__invariant(false, '%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.', callerName, reactlibReactUpdateQueue__formatUnexpectedArgument(callback)) : reactlibReactUpdateQueue___prodInvariant('122', callerName, reactlibReactUpdateQueue__formatUnexpectedArgument(callback)) : void 0;
  }

};

$m['react/lib/ReactUpdateQueue'].exports = reactlibReactUpdateQueue__ReactUpdateQueue;
/*≠≠ node_modules/react/lib/ReactUpdateQueue.js ≠≠*/

/*== node_modules/react/lib/ReactMarkupChecksum.js ==*/
$m['react/lib/ReactMarkupChecksum'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMarkupChecksum
 */


var reactlibReactMarkupChecksum__adler32 = $m['react/lib/adler32'].exports;

var reactlibReactMarkupChecksum__TAG_END = /\/?>/;
var reactlibReactMarkupChecksum__COMMENT_START = /^<\!\-\-/;

var reactlibReactMarkupChecksum__ReactMarkupChecksum = {
  CHECKSUM_ATTR_NAME: 'data-react-checksum',

  /**
   * @param {string} markup Markup string
   * @return {string} Markup string with checksum attribute attached
   */
  addChecksumToMarkup: function (markup) {
    var checksum = reactlibReactMarkupChecksum__adler32(markup);

    // Add checksum (handle both parent tags, comments and self-closing tags)
    if (reactlibReactMarkupChecksum__COMMENT_START.test(markup)) {
      return markup;
    } else {
      return markup.replace(reactlibReactMarkupChecksum__TAG_END, ' ' + reactlibReactMarkupChecksum__ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '="' + checksum + '"$&');
    }
  },

  /**
   * @param {string} markup to use
   * @param {DOMElement} element root React element
   * @returns {boolean} whether or not the markup is the same
   */
  canReuseMarkup: function (markup, element) {
    var existingChecksum = element.getAttribute(reactlibReactMarkupChecksum__ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
    existingChecksum = existingChecksum && parseInt(existingChecksum, 10);
    var markupChecksum = reactlibReactMarkupChecksum__adler32(markup);
    return markupChecksum === existingChecksum;
  }
};

$m['react/lib/ReactMarkupChecksum'].exports = reactlibReactMarkupChecksum__ReactMarkupChecksum;
/*≠≠ node_modules/react/lib/ReactMarkupChecksum.js ≠≠*/

/*== node_modules/react/lib/validateDOMNesting.js ==*/
$m['react/lib/validateDOMNesting'] = { exports: {} };
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule validateDOMNesting
 */


var reactlibvalidateDOMNesting___assign = $m['object-assign'].exports;

var reactlibvalidateDOMNesting__emptyFunction = $m['fbjs/lib/emptyFunction'].exports;
var reactlibvalidateDOMNesting__warning = $m['fbjs/lib/warning'].exports;

var reactlibvalidateDOMNesting__validateDOMNesting = reactlibvalidateDOMNesting__emptyFunction;

if (process.env.NODE_ENV !== 'production') {
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
  var reactlibvalidateDOMNesting__specialTags = ['address', 'applet', 'area', 'article', 'aside', 'base', 'basefont', 'bgsound', 'blockquote', 'body', 'br', 'button', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dir', 'div', 'dl', 'dt', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'iframe', 'img', 'input', 'isindex', 'li', 'link', 'listing', 'main', 'marquee', 'menu', 'menuitem', 'meta', 'nav', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'p', 'param', 'plaintext', 'pre', 'script', 'section', 'select', 'source', 'style', 'summary', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul', 'wbr', 'xmp'];

  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
  var reactlibvalidateDOMNesting__inScopeTags = ['applet', 'caption', 'html', 'table', 'td', 'th', 'marquee', 'object', 'template',

  // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
  // TODO: Distinguish by namespace here -- for <title>, including it here
  // errs on the side of fewer warnings
  'foreignObject', 'desc', 'title'];

  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-button-scope
  var reactlibvalidateDOMNesting__buttonScopeTags = reactlibvalidateDOMNesting__inScopeTags.concat(['button']);

  // https://html.spec.whatwg.org/multipage/syntax.html#generate-implied-end-tags
  var reactlibvalidateDOMNesting__impliedEndTags = ['dd', 'dt', 'li', 'option', 'optgroup', 'p', 'rp', 'rt'];

  var reactlibvalidateDOMNesting__emptyAncestorInfo = {
    current: null,

    formTag: null,
    aTagInScope: null,
    buttonTagInScope: null,
    nobrTagInScope: null,
    pTagInButtonScope: null,

    listItemTagAutoclosing: null,
    dlItemTagAutoclosing: null
  };

  var reactlibvalidateDOMNesting__updatedAncestorInfo = function (oldInfo, tag, instance) {
    var ancestorInfo = reactlibvalidateDOMNesting___assign({}, oldInfo || reactlibvalidateDOMNesting__emptyAncestorInfo);
    var info = { tag: tag, instance: instance };

    if (reactlibvalidateDOMNesting__inScopeTags.indexOf(tag) !== -1) {
      ancestorInfo.aTagInScope = null;
      ancestorInfo.buttonTagInScope = null;
      ancestorInfo.nobrTagInScope = null;
    }
    if (reactlibvalidateDOMNesting__buttonScopeTags.indexOf(tag) !== -1) {
      ancestorInfo.pTagInButtonScope = null;
    }

    // See rules for 'li', 'dd', 'dt' start tags in
    // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
    if (reactlibvalidateDOMNesting__specialTags.indexOf(tag) !== -1 && tag !== 'address' && tag !== 'div' && tag !== 'p') {
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
  var reactlibvalidateDOMNesting__isTagValidWithParent = function (tag, parentTag) {
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
        return reactlibvalidateDOMNesting__impliedEndTags.indexOf(parentTag) === -1;

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
  var reactlibvalidateDOMNesting__findInvalidAncestorForTag = function (tag, ancestorInfo) {
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
  var reactlibvalidateDOMNesting__findOwnerStack = function (instance) {
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

  var reactlibvalidateDOMNesting__didWarn = {};

  reactlibvalidateDOMNesting__validateDOMNesting = function (childTag, childText, childInstance, ancestorInfo) {
    ancestorInfo = ancestorInfo || reactlibvalidateDOMNesting__emptyAncestorInfo;
    var parentInfo = ancestorInfo.current;
    var parentTag = parentInfo && parentInfo.tag;

    if (childText != null) {
      process.env.NODE_ENV !== 'production' ? reactlibvalidateDOMNesting__warning(childTag == null, 'validateDOMNesting: when childText is passed, childTag should be null') : void 0;
      childTag = '#text';
    }

    var invalidParent = reactlibvalidateDOMNesting__isTagValidWithParent(childTag, parentTag) ? null : parentInfo;
    var invalidAncestor = invalidParent ? null : reactlibvalidateDOMNesting__findInvalidAncestorForTag(childTag, ancestorInfo);
    var problematic = invalidParent || invalidAncestor;

    if (problematic) {
      var ancestorTag = problematic.tag;
      var ancestorInstance = problematic.instance;

      var childOwner = childInstance && childInstance._currentElement._owner;
      var ancestorOwner = ancestorInstance && ancestorInstance._currentElement._owner;

      var childOwners = reactlibvalidateDOMNesting__findOwnerStack(childOwner);
      var ancestorOwners = reactlibvalidateDOMNesting__findOwnerStack(ancestorOwner);

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
      if (reactlibvalidateDOMNesting__didWarn[warnKey]) {
        return;
      }
      reactlibvalidateDOMNesting__didWarn[warnKey] = true;

      var tagDisplayName = childTag;
      var whitespaceInfo = '';
      if (childTag === '#text') {
        if (/\S/.test(childText)) {
          tagDisplayName = 'Text nodes';
        } else {
          tagDisplayName = 'Whitespace text nodes';
          whitespaceInfo = ' Make sure you don\'t have any extra whitespace between tags on ' + 'each line of your source code.';
        }
      } else {
        tagDisplayName = '<' + childTag + '>';
      }

      if (invalidParent) {
        var info = '';
        if (ancestorTag === 'table' && childTag === 'tr') {
          info += ' Add a <tbody> to your code to match the DOM tree generated by ' + 'the browser.';
        }
        process.env.NODE_ENV !== 'production' ? reactlibvalidateDOMNesting__warning(false, 'validateDOMNesting(...): %s cannot appear as a child of <%s>.%s ' + 'See %s.%s', tagDisplayName, ancestorTag, whitespaceInfo, ownerInfo, info) : void 0;
      } else {
        process.env.NODE_ENV !== 'production' ? reactlibvalidateDOMNesting__warning(false, 'validateDOMNesting(...): %s cannot appear as a descendant of ' + '<%s>. See %s.', tagDisplayName, ancestorTag, ownerInfo) : void 0;
      }
    }
  };

  reactlibvalidateDOMNesting__validateDOMNesting.updatedAncestorInfo = reactlibvalidateDOMNesting__updatedAncestorInfo;

  // For testing
  reactlibvalidateDOMNesting__validateDOMNesting.isTagValidInContext = function (tag, ancestorInfo) {
    ancestorInfo = ancestorInfo || reactlibvalidateDOMNesting__emptyAncestorInfo;
    var parentInfo = ancestorInfo.current;
    var parentTag = parentInfo && parentInfo.tag;
    return reactlibvalidateDOMNesting__isTagValidWithParent(tag, parentTag) && !reactlibvalidateDOMNesting__findInvalidAncestorForTag(tag, ancestorInfo);
  };
}

$m['react/lib/validateDOMNesting'].exports = reactlibvalidateDOMNesting__validateDOMNesting;
/*≠≠ node_modules/react/lib/validateDOMNesting.js ≠≠*/

/*== node_modules/react/lib/ReactDOMContainerInfo.js ==*/
$m['react/lib/ReactDOMContainerInfo'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMContainerInfo
 */


var reactlibReactDOMContainerInfo__validateDOMNesting = $m['react/lib/validateDOMNesting'].exports;

var reactlibReactDOMContainerInfo__DOC_NODE_TYPE = 9;

function reactlibReactDOMContainerInfo__ReactDOMContainerInfo(topLevelWrapper, node) {
  var info = {
    _topLevelWrapper: topLevelWrapper,
    _idCounter: 1,
    _ownerDocument: node ? node.nodeType === reactlibReactDOMContainerInfo__DOC_NODE_TYPE ? node : node.ownerDocument : null,
    _node: node,
    _tag: node ? node.nodeName.toLowerCase() : null,
    _namespaceURI: node ? node.namespaceURI : null
  };
  if (process.env.NODE_ENV !== 'production') {
    info._ancestorInfo = node ? reactlibReactDOMContainerInfo__validateDOMNesting.updatedAncestorInfo(null, info._tag, null) : null;
  }
  return info;
}

$m['react/lib/ReactDOMContainerInfo'].exports = reactlibReactDOMContainerInfo__ReactDOMContainerInfo;
/*≠≠ node_modules/react/lib/ReactDOMContainerInfo.js ≠≠*/

/*== node_modules/react/lib/ReactDOMComponentTree.js ==*/
$m['react/lib/ReactDOMComponentTree'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMComponentTree
 */


var reactlibReactDOMComponentTree___prodInvariant = $m['react/lib/reactProdInvariant'].exports;

var reactlibReactDOMComponentTree__DOMProperty = $m['react/lib/DOMProperty'].exports;
var reactlibReactDOMComponentTree__ReactDOMComponentFlags = $m['react/lib/ReactDOMComponentFlags'].exports;

var reactlibReactDOMComponentTree__invariant = $m['fbjs/lib/invariant'].exports;

var reactlibReactDOMComponentTree__ATTR_NAME = reactlibReactDOMComponentTree__DOMProperty.ID_ATTRIBUTE_NAME;
var reactlibReactDOMComponentTree__Flags = reactlibReactDOMComponentTree__ReactDOMComponentFlags;

var reactlibReactDOMComponentTree__internalInstanceKey = '__reactInternalInstance$' + Math.random().toString(36).slice(2);

/**
 * Drill down (through composites and empty components) until we get a host or
 * host text component.
 *
 * This is pretty polymorphic but unavoidable with the current structure we have
 * for `_renderedChildren`.
 */
function reactlibReactDOMComponentTree__getRenderedHostOrTextFromComponent(component) {
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
function reactlibReactDOMComponentTree__precacheNode(inst, node) {
  var hostInst = reactlibReactDOMComponentTree__getRenderedHostOrTextFromComponent(inst);
  hostInst._hostNode = node;
  node[reactlibReactDOMComponentTree__internalInstanceKey] = hostInst;
}

function reactlibReactDOMComponentTree__uncacheNode(inst) {
  var node = inst._hostNode;
  if (node) {
    delete node[reactlibReactDOMComponentTree__internalInstanceKey];
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
function reactlibReactDOMComponentTree__precacheChildNodes(inst, node) {
  if (inst._flags & reactlibReactDOMComponentTree__Flags.hasCachedChildNodes) {
    return;
  }
  var children = inst._renderedChildren;
  var childNode = node.firstChild;
  outer: for (var name in children) {
    if (!children.hasOwnProperty(name)) {
      continue;
    }
    var childInst = children[name];
    var childID = reactlibReactDOMComponentTree__getRenderedHostOrTextFromComponent(childInst)._domID;
    if (childID === 0) {
      // We're currently unmounting this child in ReactMultiChild; skip it.
      continue;
    }
    // We assume the child nodes are in the same order as the child instances.
    for (; childNode !== null; childNode = childNode.nextSibling) {
      if (childNode.nodeType === 1 && childNode.getAttribute(reactlibReactDOMComponentTree__ATTR_NAME) === String(childID) || childNode.nodeType === 8 && childNode.nodeValue === ' react-text: ' + childID + ' ' || childNode.nodeType === 8 && childNode.nodeValue === ' react-empty: ' + childID + ' ') {
        reactlibReactDOMComponentTree__precacheNode(childInst, childNode);
        continue outer;
      }
    }
    // We reached the end of the DOM children without finding an ID match.
    !false ? process.env.NODE_ENV !== 'production' ? reactlibReactDOMComponentTree__invariant(false, 'Unable to find element with ID %s.', childID) : reactlibReactDOMComponentTree___prodInvariant('32', childID) : void 0;
  }
  inst._flags |= reactlibReactDOMComponentTree__Flags.hasCachedChildNodes;
}

/**
 * Given a DOM node, return the closest ReactDOMComponent or
 * ReactDOMTextComponent instance ancestor.
 */
function reactlibReactDOMComponentTree__getClosestInstanceFromNode(node) {
  if (node[reactlibReactDOMComponentTree__internalInstanceKey]) {
    return node[reactlibReactDOMComponentTree__internalInstanceKey];
  }

  // Walk up the tree until we find an ancestor whose instance we have cached.
  var parents = [];
  while (!node[reactlibReactDOMComponentTree__internalInstanceKey]) {
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
  for (; node && (inst = node[reactlibReactDOMComponentTree__internalInstanceKey]); node = parents.pop()) {
    closest = inst;
    if (parents.length) {
      reactlibReactDOMComponentTree__precacheChildNodes(inst, node);
    }
  }

  return closest;
}

/**
 * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
 * instance, or null if the node was not rendered by this React.
 */
function reactlibReactDOMComponentTree__getInstanceFromNode(node) {
  var inst = reactlibReactDOMComponentTree__getClosestInstanceFromNode(node);
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
function reactlibReactDOMComponentTree__getNodeFromInstance(inst) {
  // Without this first invariant, passing a non-DOM-component triggers the next
  // invariant for a missing parent, which is super confusing.
  !(inst._hostNode !== undefined) ? process.env.NODE_ENV !== 'production' ? reactlibReactDOMComponentTree__invariant(false, 'getNodeFromInstance: Invalid argument.') : reactlibReactDOMComponentTree___prodInvariant('33') : void 0;

  if (inst._hostNode) {
    return inst._hostNode;
  }

  // Walk up the tree until we find an ancestor whose DOM node we have cached.
  var parents = [];
  while (!inst._hostNode) {
    parents.push(inst);
    !inst._hostParent ? process.env.NODE_ENV !== 'production' ? reactlibReactDOMComponentTree__invariant(false, 'React DOM tree root should always have a node reference.') : reactlibReactDOMComponentTree___prodInvariant('34') : void 0;
    inst = inst._hostParent;
  }

  // Now parents contains each ancestor that does *not* have a cached native
  // node, and `inst` is the deepest ancestor that does.
  for (; parents.length; inst = parents.pop()) {
    reactlibReactDOMComponentTree__precacheChildNodes(inst, inst._hostNode);
  }

  return inst._hostNode;
}

var reactlibReactDOMComponentTree__ReactDOMComponentTree = {
  getClosestInstanceFromNode: reactlibReactDOMComponentTree__getClosestInstanceFromNode,
  getInstanceFromNode: reactlibReactDOMComponentTree__getInstanceFromNode,
  getNodeFromInstance: reactlibReactDOMComponentTree__getNodeFromInstance,
  precacheChildNodes: reactlibReactDOMComponentTree__precacheChildNodes,
  precacheNode: reactlibReactDOMComponentTree__precacheNode,
  uncacheNode: reactlibReactDOMComponentTree__uncacheNode
};

$m['react/lib/ReactDOMComponentTree'].exports = reactlibReactDOMComponentTree__ReactDOMComponentTree;
/*≠≠ node_modules/react/lib/ReactDOMComponentTree.js ≠≠*/

/*== node_modules/react/lib/isEventSupported.js ==*/
$m['react/lib/isEventSupported'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isEventSupported
 */


var reactlibisEventSupported__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;

var reactlibisEventSupported__useHasFeature;
if (reactlibisEventSupported__ExecutionEnvironment.canUseDOM) {
  reactlibisEventSupported__useHasFeature = document.implementation && document.implementation.hasFeature &&
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
function reactlibisEventSupported__isEventSupported(eventNameSuffix, capture) {
  if (!reactlibisEventSupported__ExecutionEnvironment.canUseDOM || capture && !('addEventListener' in document)) {
    return false;
  }

  var eventName = 'on' + eventNameSuffix;
  var isSupported = eventName in document;

  if (!isSupported) {
    var element = document.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  if (!isSupported && reactlibisEventSupported__useHasFeature && eventNameSuffix === 'wheel') {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
  }

  return isSupported;
}

$m['react/lib/isEventSupported'].exports = reactlibisEventSupported__isEventSupported;
/*≠≠ node_modules/react/lib/isEventSupported.js ≠≠*/

/*== node_modules/react/lib/getVendorPrefixedEventName.js ==*/
$m['react/lib/getVendorPrefixedEventName'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getVendorPrefixedEventName
 */


var reactlibgetVendorPrefixedEventName__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;

/**
 * Generate a mapping of standard vendor prefixes using the defined style property and event name.
 *
 * @param {string} styleProp
 * @param {string} eventName
 * @returns {object}
 */
function reactlibgetVendorPrefixedEventName__makePrefixMap(styleProp, eventName) {
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
var reactlibgetVendorPrefixedEventName__vendorPrefixes = {
  animationend: reactlibgetVendorPrefixedEventName__makePrefixMap('Animation', 'AnimationEnd'),
  animationiteration: reactlibgetVendorPrefixedEventName__makePrefixMap('Animation', 'AnimationIteration'),
  animationstart: reactlibgetVendorPrefixedEventName__makePrefixMap('Animation', 'AnimationStart'),
  transitionend: reactlibgetVendorPrefixedEventName__makePrefixMap('Transition', 'TransitionEnd')
};

/**
 * Event names that have already been detected and prefixed (if applicable).
 */
var reactlibgetVendorPrefixedEventName__prefixedEventNames = {};

/**
 * Element to check for prefixes on.
 */
var reactlibgetVendorPrefixedEventName__style = {};

/**
 * Bootstrap if a DOM exists.
 */
if (reactlibgetVendorPrefixedEventName__ExecutionEnvironment.canUseDOM) {
  reactlibgetVendorPrefixedEventName__style = document.createElement('div').style;

  // On some platforms, in particular some releases of Android 4.x,
  // the un-prefixed "animation" and "transition" properties are defined on the
  // style object but the events that fire will still be prefixed, so we need
  // to check if the un-prefixed events are usable, and if not remove them from the map.
  if (!('AnimationEvent' in window)) {
    delete reactlibgetVendorPrefixedEventName__vendorPrefixes.animationend.animation;
    delete reactlibgetVendorPrefixedEventName__vendorPrefixes.animationiteration.animation;
    delete reactlibgetVendorPrefixedEventName__vendorPrefixes.animationstart.animation;
  }

  // Same as above
  if (!('TransitionEvent' in window)) {
    delete reactlibgetVendorPrefixedEventName__vendorPrefixes.transitionend.transition;
  }
}

/**
 * Attempts to determine the correct vendor prefixed event name.
 *
 * @param {string} eventName
 * @returns {string}
 */
function reactlibgetVendorPrefixedEventName__getVendorPrefixedEventName(eventName) {
  if (reactlibgetVendorPrefixedEventName__prefixedEventNames[eventName]) {
    return reactlibgetVendorPrefixedEventName__prefixedEventNames[eventName];
  } else if (!reactlibgetVendorPrefixedEventName__vendorPrefixes[eventName]) {
    return eventName;
  }

  var prefixMap = reactlibgetVendorPrefixedEventName__vendorPrefixes[eventName];

  for (var styleProp in prefixMap) {
    if (prefixMap.hasOwnProperty(styleProp) && styleProp in reactlibgetVendorPrefixedEventName__style) {
      return reactlibgetVendorPrefixedEventName__prefixedEventNames[eventName] = prefixMap[styleProp];
    }
  }

  return '';
}

$m['react/lib/getVendorPrefixedEventName'].exports = reactlibgetVendorPrefixedEventName__getVendorPrefixedEventName;
/*≠≠ node_modules/react/lib/getVendorPrefixedEventName.js ≠≠*/

/*== node_modules/react/lib/accumulateInto.js ==*/
$m['react/lib/accumulateInto'] = { exports: {} };
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule accumulateInto
 * 
 */


var reactlibaccumulateInto___prodInvariant = $m['react/lib/reactProdInvariant'].exports;

var reactlibaccumulateInto__invariant = $m['fbjs/lib/invariant'].exports;

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

function reactlibaccumulateInto__accumulateInto(current, next) {
  !(next != null) ? process.env.NODE_ENV !== 'production' ? reactlibaccumulateInto__invariant(false, 'accumulateInto(...): Accumulated items must not be null or undefined.') : reactlibaccumulateInto___prodInvariant('30') : void 0;

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

$m['react/lib/accumulateInto'].exports = reactlibaccumulateInto__accumulateInto;
/*≠≠ node_modules/react/lib/accumulateInto.js ≠≠*/

/*== node_modules/react/lib/EventConstants.js ==*/
$m['react/lib/EventConstants'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventConstants
 */


var reactlibEventConstants__keyMirror = $m['fbjs/lib/keyMirror'].exports;

var reactlibEventConstants__PropagationPhases = reactlibEventConstants__keyMirror({ bubbled: null, captured: null });

/**
 * Types of raw signals from the browser caught at the top level.
 */
var reactlibEventConstants__topLevelTypes = reactlibEventConstants__keyMirror({
  topAbort: null,
  topAnimationEnd: null,
  topAnimationIteration: null,
  topAnimationStart: null,
  topBlur: null,
  topCanPlay: null,
  topCanPlayThrough: null,
  topChange: null,
  topClick: null,
  topCompositionEnd: null,
  topCompositionStart: null,
  topCompositionUpdate: null,
  topContextMenu: null,
  topCopy: null,
  topCut: null,
  topDoubleClick: null,
  topDrag: null,
  topDragEnd: null,
  topDragEnter: null,
  topDragExit: null,
  topDragLeave: null,
  topDragOver: null,
  topDragStart: null,
  topDrop: null,
  topDurationChange: null,
  topEmptied: null,
  topEncrypted: null,
  topEnded: null,
  topError: null,
  topFocus: null,
  topInput: null,
  topInvalid: null,
  topKeyDown: null,
  topKeyPress: null,
  topKeyUp: null,
  topLoad: null,
  topLoadedData: null,
  topLoadedMetadata: null,
  topLoadStart: null,
  topMouseDown: null,
  topMouseMove: null,
  topMouseOut: null,
  topMouseOver: null,
  topMouseUp: null,
  topPaste: null,
  topPause: null,
  topPlay: null,
  topPlaying: null,
  topProgress: null,
  topRateChange: null,
  topReset: null,
  topScroll: null,
  topSeeked: null,
  topSeeking: null,
  topSelectionChange: null,
  topStalled: null,
  topSubmit: null,
  topSuspend: null,
  topTextInput: null,
  topTimeUpdate: null,
  topTouchCancel: null,
  topTouchEnd: null,
  topTouchMove: null,
  topTouchStart: null,
  topTransitionEnd: null,
  topVolumeChange: null,
  topWaiting: null,
  topWheel: null
});

var reactlibEventConstants__EventConstants = {
  topLevelTypes: reactlibEventConstants__topLevelTypes,
  PropagationPhases: reactlibEventConstants__PropagationPhases
};

$m['react/lib/EventConstants'].exports = reactlibEventConstants__EventConstants;
/*≠≠ node_modules/react/lib/EventConstants.js ≠≠*/

/*== node_modules/react/lib/EventPluginUtils.js ==*/
$m['react/lib/EventPluginUtils'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginUtils
 */


var reactlibEventPluginUtils___prodInvariant = $m['react/lib/reactProdInvariant'].exports;

var reactlibEventPluginUtils__EventConstants = $m['react/lib/EventConstants'].exports;
var reactlibEventPluginUtils__ReactErrorUtils = $m['react/lib/ReactErrorUtils'].exports;

var reactlibEventPluginUtils__invariant = $m['fbjs/lib/invariant'].exports;
var reactlibEventPluginUtils__warning = $m['fbjs/lib/warning'].exports;

/**
 * Injected dependencies:
 */

/**
 * - `ComponentTree`: [required] Module that can convert between React instances
 *   and actual node references.
 */
var reactlibEventPluginUtils__ComponentTree;
var reactlibEventPluginUtils__TreeTraversal;
var reactlibEventPluginUtils__injection = {
  injectComponentTree: function (Injected) {
    reactlibEventPluginUtils__ComponentTree = Injected;
    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? reactlibEventPluginUtils__warning(Injected && Injected.getNodeFromInstance && Injected.getInstanceFromNode, 'EventPluginUtils.injection.injectComponentTree(...): Injected ' + 'module is missing getNodeFromInstance or getInstanceFromNode.') : void 0;
    }
  },
  injectTreeTraversal: function (Injected) {
    reactlibEventPluginUtils__TreeTraversal = Injected;
    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? reactlibEventPluginUtils__warning(Injected && Injected.isAncestor && Injected.getLowestCommonAncestor, 'EventPluginUtils.injection.injectTreeTraversal(...): Injected ' + 'module is missing isAncestor or getLowestCommonAncestor.') : void 0;
    }
  }
};

var reactlibEventPluginUtils__topLevelTypes = reactlibEventPluginUtils__EventConstants.topLevelTypes;

function reactlibEventPluginUtils__isEndish(topLevelType) {
  return topLevelType === reactlibEventPluginUtils__topLevelTypes.topMouseUp || topLevelType === reactlibEventPluginUtils__topLevelTypes.topTouchEnd || topLevelType === reactlibEventPluginUtils__topLevelTypes.topTouchCancel;
}

function reactlibEventPluginUtils__isMoveish(topLevelType) {
  return topLevelType === reactlibEventPluginUtils__topLevelTypes.topMouseMove || topLevelType === reactlibEventPluginUtils__topLevelTypes.topTouchMove;
}
function reactlibEventPluginUtils__isStartish(topLevelType) {
  return topLevelType === reactlibEventPluginUtils__topLevelTypes.topMouseDown || topLevelType === reactlibEventPluginUtils__topLevelTypes.topTouchStart;
}

var reactlibEventPluginUtils__validateEventDispatches;
if (process.env.NODE_ENV !== 'production') {
  reactlibEventPluginUtils__validateEventDispatches = function (event) {
    var dispatchListeners = event._dispatchListeners;
    var dispatchInstances = event._dispatchInstances;

    var listenersIsArr = Array.isArray(dispatchListeners);
    var listenersLen = listenersIsArr ? dispatchListeners.length : dispatchListeners ? 1 : 0;

    var instancesIsArr = Array.isArray(dispatchInstances);
    var instancesLen = instancesIsArr ? dispatchInstances.length : dispatchInstances ? 1 : 0;

    process.env.NODE_ENV !== 'production' ? reactlibEventPluginUtils__warning(instancesIsArr === listenersIsArr && instancesLen === listenersLen, 'EventPluginUtils: Invalid `event`.') : void 0;
  };
}

/**
 * Dispatch the event to the listener.
 * @param {SyntheticEvent} event SyntheticEvent to handle
 * @param {boolean} simulated If the event is simulated (changes exn behavior)
 * @param {function} listener Application-level callback
 * @param {*} inst Internal component instance
 */
function reactlibEventPluginUtils__executeDispatch(event, simulated, listener, inst) {
  var type = event.type || 'unknown-event';
  event.currentTarget = reactlibEventPluginUtils__EventPluginUtils.getNodeFromInstance(inst);
  if (simulated) {
    reactlibEventPluginUtils__ReactErrorUtils.invokeGuardedCallbackWithCatch(type, listener, event);
  } else {
    reactlibEventPluginUtils__ReactErrorUtils.invokeGuardedCallback(type, listener, event);
  }
  event.currentTarget = null;
}

/**
 * Standard/simple iteration through an event's collected dispatches.
 */
function reactlibEventPluginUtils__executeDispatchesInOrder(event, simulated) {
  var dispatchListeners = event._dispatchListeners;
  var dispatchInstances = event._dispatchInstances;
  if (process.env.NODE_ENV !== 'production') {
    reactlibEventPluginUtils__validateEventDispatches(event);
  }
  if (Array.isArray(dispatchListeners)) {
    for (var i = 0; i < dispatchListeners.length; i++) {
      if (event.isPropagationStopped()) {
        break;
      }
      // Listeners and Instances are two parallel arrays that are always in sync.
      reactlibEventPluginUtils__executeDispatch(event, simulated, dispatchListeners[i], dispatchInstances[i]);
    }
  } else if (dispatchListeners) {
    reactlibEventPluginUtils__executeDispatch(event, simulated, dispatchListeners, dispatchInstances);
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
function reactlibEventPluginUtils__executeDispatchesInOrderStopAtTrueImpl(event) {
  var dispatchListeners = event._dispatchListeners;
  var dispatchInstances = event._dispatchInstances;
  if (process.env.NODE_ENV !== 'production') {
    reactlibEventPluginUtils__validateEventDispatches(event);
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
function reactlibEventPluginUtils__executeDispatchesInOrderStopAtTrue(event) {
  var ret = reactlibEventPluginUtils__executeDispatchesInOrderStopAtTrueImpl(event);
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
function reactlibEventPluginUtils__executeDirectDispatch(event) {
  if (process.env.NODE_ENV !== 'production') {
    reactlibEventPluginUtils__validateEventDispatches(event);
  }
  var dispatchListener = event._dispatchListeners;
  var dispatchInstance = event._dispatchInstances;
  !!Array.isArray(dispatchListener) ? process.env.NODE_ENV !== 'production' ? reactlibEventPluginUtils__invariant(false, 'executeDirectDispatch(...): Invalid `event`.') : reactlibEventPluginUtils___prodInvariant('103') : void 0;
  event.currentTarget = dispatchListener ? reactlibEventPluginUtils__EventPluginUtils.getNodeFromInstance(dispatchInstance) : null;
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
function reactlibEventPluginUtils__hasDispatches(event) {
  return !!event._dispatchListeners;
}

/**
 * General utilities that are useful in creating custom Event Plugins.
 */
var reactlibEventPluginUtils__EventPluginUtils = {
  isEndish: reactlibEventPluginUtils__isEndish,
  isMoveish: reactlibEventPluginUtils__isMoveish,
  isStartish: reactlibEventPluginUtils__isStartish,

  executeDirectDispatch: reactlibEventPluginUtils__executeDirectDispatch,
  executeDispatchesInOrder: reactlibEventPluginUtils__executeDispatchesInOrder,
  executeDispatchesInOrderStopAtTrue: reactlibEventPluginUtils__executeDispatchesInOrderStopAtTrue,
  hasDispatches: reactlibEventPluginUtils__hasDispatches,

  getInstanceFromNode: function (node) {
    return reactlibEventPluginUtils__ComponentTree.getInstanceFromNode(node);
  },
  getNodeFromInstance: function (node) {
    return reactlibEventPluginUtils__ComponentTree.getNodeFromInstance(node);
  },
  isAncestor: function (a, b) {
    return reactlibEventPluginUtils__TreeTraversal.isAncestor(a, b);
  },
  getLowestCommonAncestor: function (a, b) {
    return reactlibEventPluginUtils__TreeTraversal.getLowestCommonAncestor(a, b);
  },
  getParentInstance: function (inst) {
    return reactlibEventPluginUtils__TreeTraversal.getParentInstance(inst);
  },
  traverseTwoPhase: function (target, fn, arg) {
    return reactlibEventPluginUtils__TreeTraversal.traverseTwoPhase(target, fn, arg);
  },
  traverseEnterLeave: function (from, to, fn, argFrom, argTo) {
    return reactlibEventPluginUtils__TreeTraversal.traverseEnterLeave(from, to, fn, argFrom, argTo);
  },

  injection: reactlibEventPluginUtils__injection
};

$m['react/lib/EventPluginUtils'].exports = reactlibEventPluginUtils__EventPluginUtils;
/*≠≠ node_modules/react/lib/EventPluginUtils.js ≠≠*/

/*== node_modules/react/lib/EventPluginHub.js ==*/
$m['react/lib/EventPluginHub'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginHub
 */


var reactlibEventPluginHub___prodInvariant = $m['react/lib/reactProdInvariant'].exports;

var reactlibEventPluginHub__EventPluginRegistry = $m['react/lib/EventPluginRegistry'].exports;
var reactlibEventPluginHub__EventPluginUtils = $m['react/lib/EventPluginUtils'].exports;
var reactlibEventPluginHub__ReactErrorUtils = $m['react/lib/ReactErrorUtils'].exports;

var reactlibEventPluginHub__accumulateInto = $m['react/lib/accumulateInto'].exports;
var reactlibEventPluginHub__forEachAccumulated = $m['react/lib/forEachAccumulated'].exports;
var reactlibEventPluginHub__invariant = $m['fbjs/lib/invariant'].exports;

/**
 * Internal store for event listeners
 */
var reactlibEventPluginHub__listenerBank = {};

/**
 * Internal queue of events that have accumulated their dispatches and are
 * waiting to have their dispatches executed.
 */
var reactlibEventPluginHub__eventQueue = null;

/**
 * Dispatches an event and releases it back into the pool, unless persistent.
 *
 * @param {?object} event Synthetic event to be dispatched.
 * @param {boolean} simulated If the event is simulated (changes exn behavior)
 * @private
 */
var reactlibEventPluginHub__executeDispatchesAndRelease = function (event, simulated) {
  if (event) {
    reactlibEventPluginHub__EventPluginUtils.executeDispatchesInOrder(event, simulated);

    if (!event.isPersistent()) {
      event.constructor.release(event);
    }
  }
};
var reactlibEventPluginHub__executeDispatchesAndReleaseSimulated = function (e) {
  return reactlibEventPluginHub__executeDispatchesAndRelease(e, true);
};
var reactlibEventPluginHub__executeDispatchesAndReleaseTopLevel = function (e) {
  return reactlibEventPluginHub__executeDispatchesAndRelease(e, false);
};

var reactlibEventPluginHub__getDictionaryKey = function (inst) {
  // Prevents V8 performance issue:
  // https://github.com/facebook/react/pull/7232
  return '.' + inst._rootNodeID;
};

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
var reactlibEventPluginHub__EventPluginHub = {

  /**
   * Methods for injecting dependencies.
   */
  injection: {

    /**
     * @param {array} InjectedEventPluginOrder
     * @public
     */
    injectEventPluginOrder: reactlibEventPluginHub__EventPluginRegistry.injectEventPluginOrder,

    /**
     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
     */
    injectEventPluginsByName: reactlibEventPluginHub__EventPluginRegistry.injectEventPluginsByName

  },

  /**
   * Stores `listener` at `listenerBank[registrationName][key]`. Is idempotent.
   *
   * @param {object} inst The instance, which is the source of events.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @param {function} listener The callback to store.
   */
  putListener: function (inst, registrationName, listener) {
    !(typeof listener === 'function') ? process.env.NODE_ENV !== 'production' ? reactlibEventPluginHub__invariant(false, 'Expected %s listener to be a function, instead got type %s', registrationName, typeof listener) : reactlibEventPluginHub___prodInvariant('94', registrationName, typeof listener) : void 0;

    var key = reactlibEventPluginHub__getDictionaryKey(inst);
    var bankForRegistrationName = reactlibEventPluginHub__listenerBank[registrationName] || (reactlibEventPluginHub__listenerBank[registrationName] = {});
    bankForRegistrationName[key] = listener;

    var PluginModule = reactlibEventPluginHub__EventPluginRegistry.registrationNameModules[registrationName];
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
    var bankForRegistrationName = reactlibEventPluginHub__listenerBank[registrationName];
    var key = reactlibEventPluginHub__getDictionaryKey(inst);
    return bankForRegistrationName && bankForRegistrationName[key];
  },

  /**
   * Deletes a listener from the registration bank.
   *
   * @param {object} inst The instance, which is the source of events.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   */
  deleteListener: function (inst, registrationName) {
    var PluginModule = reactlibEventPluginHub__EventPluginRegistry.registrationNameModules[registrationName];
    if (PluginModule && PluginModule.willDeleteListener) {
      PluginModule.willDeleteListener(inst, registrationName);
    }

    var bankForRegistrationName = reactlibEventPluginHub__listenerBank[registrationName];
    // TODO: This should never be null -- when is it?
    if (bankForRegistrationName) {
      var key = reactlibEventPluginHub__getDictionaryKey(inst);
      delete bankForRegistrationName[key];
    }
  },

  /**
   * Deletes all listeners for the DOM element with the supplied ID.
   *
   * @param {object} inst The instance, which is the source of events.
   */
  deleteAllListeners: function (inst) {
    var key = reactlibEventPluginHub__getDictionaryKey(inst);
    for (var registrationName in reactlibEventPluginHub__listenerBank) {
      if (!reactlibEventPluginHub__listenerBank.hasOwnProperty(registrationName)) {
        continue;
      }

      if (!reactlibEventPluginHub__listenerBank[registrationName][key]) {
        continue;
      }

      var PluginModule = reactlibEventPluginHub__EventPluginRegistry.registrationNameModules[registrationName];
      if (PluginModule && PluginModule.willDeleteListener) {
        PluginModule.willDeleteListener(inst, registrationName);
      }

      delete reactlibEventPluginHub__listenerBank[registrationName][key];
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
    var plugins = reactlibEventPluginHub__EventPluginRegistry.plugins;
    for (var i = 0; i < plugins.length; i++) {
      // Not every plugin in the ordering may be loaded at runtime.
      var possiblePlugin = plugins[i];
      if (possiblePlugin) {
        var extractedEvents = possiblePlugin.extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget);
        if (extractedEvents) {
          events = reactlibEventPluginHub__accumulateInto(events, extractedEvents);
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
      reactlibEventPluginHub__eventQueue = reactlibEventPluginHub__accumulateInto(reactlibEventPluginHub__eventQueue, events);
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
    var processingEventQueue = reactlibEventPluginHub__eventQueue;
    reactlibEventPluginHub__eventQueue = null;
    if (simulated) {
      reactlibEventPluginHub__forEachAccumulated(processingEventQueue, reactlibEventPluginHub__executeDispatchesAndReleaseSimulated);
    } else {
      reactlibEventPluginHub__forEachAccumulated(processingEventQueue, reactlibEventPluginHub__executeDispatchesAndReleaseTopLevel);
    }
    !!reactlibEventPluginHub__eventQueue ? process.env.NODE_ENV !== 'production' ? reactlibEventPluginHub__invariant(false, 'processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.') : reactlibEventPluginHub___prodInvariant('95') : void 0;
    // This would be a good time to rethrow if any of the event handlers threw.
    reactlibEventPluginHub__ReactErrorUtils.rethrowCaughtError();
  },

  /**
   * These are needed for tests only. Do not use!
   */
  __purge: function () {
    reactlibEventPluginHub__listenerBank = {};
  },

  __getListenerBank: function () {
    return reactlibEventPluginHub__listenerBank;
  }

};

$m['react/lib/EventPluginHub'].exports = reactlibEventPluginHub__EventPluginHub;
/*≠≠ node_modules/react/lib/EventPluginHub.js ≠≠*/

/*== node_modules/react/lib/ReactEventEmitterMixin.js ==*/
$m['react/lib/ReactEventEmitterMixin'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEventEmitterMixin
 */


var reactlibReactEventEmitterMixin__EventPluginHub = $m['react/lib/EventPluginHub'].exports;

function reactlibReactEventEmitterMixin__runEventQueueInBatch(events) {
  reactlibReactEventEmitterMixin__EventPluginHub.enqueueEvents(events);
  reactlibReactEventEmitterMixin__EventPluginHub.processEventQueue(false);
}

var reactlibReactEventEmitterMixin__ReactEventEmitterMixin = {

  /**
   * Streams a fired top-level event to `EventPluginHub` where plugins have the
   * opportunity to create `ReactEvent`s to be dispatched.
   */
  handleTopLevel: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    var events = reactlibReactEventEmitterMixin__EventPluginHub.extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget);
    reactlibReactEventEmitterMixin__runEventQueueInBatch(events);
  }
};

$m['react/lib/ReactEventEmitterMixin'].exports = reactlibReactEventEmitterMixin__ReactEventEmitterMixin;
/*≠≠ node_modules/react/lib/ReactEventEmitterMixin.js ≠≠*/

/*== node_modules/react/lib/ReactBrowserEventEmitter.js ==*/
$m['react/lib/ReactBrowserEventEmitter'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactBrowserEventEmitter
 */


var reactlibReactBrowserEventEmitter___assign = $m['object-assign'].exports;

var reactlibReactBrowserEventEmitter__EventConstants = $m['react/lib/EventConstants'].exports;
var reactlibReactBrowserEventEmitter__EventPluginRegistry = $m['react/lib/EventPluginRegistry'].exports;
var reactlibReactBrowserEventEmitter__ReactEventEmitterMixin = $m['react/lib/ReactEventEmitterMixin'].exports;
var reactlibReactBrowserEventEmitter__ViewportMetrics = $m['react/lib/ViewportMetrics'].exports;

var reactlibReactBrowserEventEmitter__getVendorPrefixedEventName = $m['react/lib/getVendorPrefixedEventName'].exports;
var reactlibReactBrowserEventEmitter__isEventSupported = $m['react/lib/isEventSupported'].exports;

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

var reactlibReactBrowserEventEmitter__hasEventPageXY;
var reactlibReactBrowserEventEmitter__alreadyListeningTo = {};
var reactlibReactBrowserEventEmitter__isMonitoringScrollValue = false;
var reactlibReactBrowserEventEmitter__reactTopListenersCounter = 0;

// For events like 'submit' which don't consistently bubble (which we trap at a
// lower node than `document`), binding at `document` would cause duplicate
// events so we don't include them here
var reactlibReactBrowserEventEmitter__topEventMapping = {
  topAbort: 'abort',
  topAnimationEnd: reactlibReactBrowserEventEmitter__getVendorPrefixedEventName('animationend') || 'animationend',
  topAnimationIteration: reactlibReactBrowserEventEmitter__getVendorPrefixedEventName('animationiteration') || 'animationiteration',
  topAnimationStart: reactlibReactBrowserEventEmitter__getVendorPrefixedEventName('animationstart') || 'animationstart',
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
  topTransitionEnd: reactlibReactBrowserEventEmitter__getVendorPrefixedEventName('transitionend') || 'transitionend',
  topVolumeChange: 'volumechange',
  topWaiting: 'waiting',
  topWheel: 'wheel'
};

/**
 * To ensure no conflicts with other potential React instances on the page
 */
var reactlibReactBrowserEventEmitter__topListenersIDKey = '_reactListenersID' + String(Math.random()).slice(2);

function reactlibReactBrowserEventEmitter__getListeningForDocument(mountAt) {
  // In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
  // directly.
  if (!Object.prototype.hasOwnProperty.call(mountAt, reactlibReactBrowserEventEmitter__topListenersIDKey)) {
    mountAt[reactlibReactBrowserEventEmitter__topListenersIDKey] = reactlibReactBrowserEventEmitter__reactTopListenersCounter++;
    reactlibReactBrowserEventEmitter__alreadyListeningTo[mountAt[reactlibReactBrowserEventEmitter__topListenersIDKey]] = {};
  }
  return reactlibReactBrowserEventEmitter__alreadyListeningTo[mountAt[reactlibReactBrowserEventEmitter__topListenersIDKey]];
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
var reactlibReactBrowserEventEmitter__ReactBrowserEventEmitter = reactlibReactBrowserEventEmitter___assign({}, reactlibReactBrowserEventEmitter__ReactEventEmitterMixin, {

  /**
   * Injectable event backend
   */
  ReactEventListener: null,

  injection: {
    /**
     * @param {object} ReactEventListener
     */
    injectReactEventListener: function (ReactEventListener) {
      ReactEventListener.setHandleTopLevel(reactlibReactBrowserEventEmitter__ReactBrowserEventEmitter.handleTopLevel);
      reactlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener = ReactEventListener;
    }
  },

  /**
   * Sets whether or not any created callbacks should be enabled.
   *
   * @param {boolean} enabled True if callbacks should be enabled.
   */
  setEnabled: function (enabled) {
    if (reactlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener) {
      reactlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);
    }
  },

  /**
   * @return {boolean} True if callbacks are enabled.
   */
  isEnabled: function () {
    return !!(reactlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener && reactlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.isEnabled());
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
    var isListening = reactlibReactBrowserEventEmitter__getListeningForDocument(mountAt);
    var dependencies = reactlibReactBrowserEventEmitter__EventPluginRegistry.registrationNameDependencies[registrationName];

    var topLevelTypes = reactlibReactBrowserEventEmitter__EventConstants.topLevelTypes;
    for (var i = 0; i < dependencies.length; i++) {
      var dependency = dependencies[i];
      if (!(isListening.hasOwnProperty(dependency) && isListening[dependency])) {
        if (dependency === topLevelTypes.topWheel) {
          if (reactlibReactBrowserEventEmitter__isEventSupported('wheel')) {
            reactlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'wheel', mountAt);
          } else if (reactlibReactBrowserEventEmitter__isEventSupported('mousewheel')) {
            reactlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'mousewheel', mountAt);
          } else {
            // Firefox needs to capture a different mouse scroll event.
            // @see http://www.quirksmode.org/dom/events/tests/scroll.html
            reactlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'DOMMouseScroll', mountAt);
          }
        } else if (dependency === topLevelTypes.topScroll) {

          if (reactlibReactBrowserEventEmitter__isEventSupported('scroll', true)) {
            reactlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topScroll, 'scroll', mountAt);
          } else {
            reactlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topScroll, 'scroll', reactlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE);
          }
        } else if (dependency === topLevelTypes.topFocus || dependency === topLevelTypes.topBlur) {

          if (reactlibReactBrowserEventEmitter__isEventSupported('focus', true)) {
            reactlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topFocus, 'focus', mountAt);
            reactlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topBlur, 'blur', mountAt);
          } else if (reactlibReactBrowserEventEmitter__isEventSupported('focusin')) {
            // IE has `focusin` and `focusout` events which bubble.
            // @see http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html
            reactlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topFocus, 'focusin', mountAt);
            reactlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topBlur, 'focusout', mountAt);
          }

          // to make sure blur and focus event listeners are only attached once
          isListening[topLevelTypes.topBlur] = true;
          isListening[topLevelTypes.topFocus] = true;
        } else if (reactlibReactBrowserEventEmitter__topEventMapping.hasOwnProperty(dependency)) {
          reactlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(dependency, reactlibReactBrowserEventEmitter__topEventMapping[dependency], mountAt);
        }

        isListening[dependency] = true;
      }
    }
  },

  trapBubbledEvent: function (topLevelType, handlerBaseName, handle) {
    return reactlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelType, handlerBaseName, handle);
  },

  trapCapturedEvent: function (topLevelType, handlerBaseName, handle) {
    return reactlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelType, handlerBaseName, handle);
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
    if (reactlibReactBrowserEventEmitter__hasEventPageXY === undefined) {
      reactlibReactBrowserEventEmitter__hasEventPageXY = reactlibReactBrowserEventEmitter__ReactBrowserEventEmitter.supportsEventPageXY();
    }
    if (!reactlibReactBrowserEventEmitter__hasEventPageXY && !reactlibReactBrowserEventEmitter__isMonitoringScrollValue) {
      var refresh = reactlibReactBrowserEventEmitter__ViewportMetrics.refreshScrollValues;
      reactlibReactBrowserEventEmitter__ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);
      reactlibReactBrowserEventEmitter__isMonitoringScrollValue = true;
    }
  }

});

$m['react/lib/ReactBrowserEventEmitter'].exports = reactlibReactBrowserEventEmitter__ReactBrowserEventEmitter;
/*≠≠ node_modules/react/lib/ReactBrowserEventEmitter.js ≠≠*/

/*== node_modules/react/lib/setTextContent.js ==*/
$m['react/lib/setTextContent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule setTextContent
 */


var reactlibsetTextContent__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;
var reactlibsetTextContent__escapeTextContentForBrowser = $m['react/lib/escapeTextContentForBrowser'].exports;
var reactlibsetTextContent__setInnerHTML = $m['react/lib/setInnerHTML'].exports;

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
var reactlibsetTextContent__setTextContent = function (node, text) {
  if (text) {
    var firstChild = node.firstChild;

    if (firstChild && firstChild === node.lastChild && firstChild.nodeType === 3) {
      firstChild.nodeValue = text;
      return;
    }
  }
  node.textContent = text;
};

if (reactlibsetTextContent__ExecutionEnvironment.canUseDOM) {
  if (!('textContent' in document.documentElement)) {
    reactlibsetTextContent__setTextContent = function (node, text) {
      reactlibsetTextContent__setInnerHTML(node, reactlibsetTextContent__escapeTextContentForBrowser(text));
    };
  }
}

$m['react/lib/setTextContent'].exports = reactlibsetTextContent__setTextContent;
/*≠≠ node_modules/react/lib/setTextContent.js ≠≠*/

/*== node_modules/react/lib/DOMLazyTree.js ==*/
$m['react/lib/DOMLazyTree'] = { exports: {} };
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMLazyTree
 */


var reactlibDOMLazyTree__DOMNamespaces = $m['react/lib/DOMNamespaces'].exports;
var reactlibDOMLazyTree__setInnerHTML = $m['react/lib/setInnerHTML'].exports;

var reactlibDOMLazyTree__createMicrosoftUnsafeLocalFunction = $m['react/lib/createMicrosoftUnsafeLocalFunction'].exports;
var reactlibDOMLazyTree__setTextContent = $m['react/lib/setTextContent'].exports;

var reactlibDOMLazyTree__ELEMENT_NODE_TYPE = 1;
var reactlibDOMLazyTree__DOCUMENT_FRAGMENT_NODE_TYPE = 11;

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
var reactlibDOMLazyTree__enableLazy = typeof document !== 'undefined' && typeof document.documentMode === 'number' || typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string' && /\bEdge\/\d/.test(navigator.userAgent);

function reactlibDOMLazyTree__insertTreeChildren(tree) {
  if (!reactlibDOMLazyTree__enableLazy) {
    return;
  }
  var node = tree.node;
  var children = tree.children;
  if (children.length) {
    for (var i = 0; i < children.length; i++) {
      reactlibDOMLazyTree__insertTreeBefore(node, children[i], null);
    }
  } else if (tree.html != null) {
    reactlibDOMLazyTree__setInnerHTML(node, tree.html);
  } else if (tree.text != null) {
    reactlibDOMLazyTree__setTextContent(node, tree.text);
  }
}

var reactlibDOMLazyTree__insertTreeBefore = reactlibDOMLazyTree__createMicrosoftUnsafeLocalFunction(function (parentNode, tree, referenceNode) {
  // DocumentFragments aren't actually part of the DOM after insertion so
  // appending children won't update the DOM. We need to ensure the fragment
  // is properly populated first, breaking out of our lazy approach for just
  // this level. Also, some <object> plugins (like Flash Player) will read
  // <param> nodes immediately upon insertion into the DOM, so <object>
  // must also be populated prior to insertion into the DOM.
  if (tree.node.nodeType === reactlibDOMLazyTree__DOCUMENT_FRAGMENT_NODE_TYPE || tree.node.nodeType === reactlibDOMLazyTree__ELEMENT_NODE_TYPE && tree.node.nodeName.toLowerCase() === 'object' && (tree.node.namespaceURI == null || tree.node.namespaceURI === reactlibDOMLazyTree__DOMNamespaces.html)) {
    reactlibDOMLazyTree__insertTreeChildren(tree);
    parentNode.insertBefore(tree.node, referenceNode);
  } else {
    parentNode.insertBefore(tree.node, referenceNode);
    reactlibDOMLazyTree__insertTreeChildren(tree);
  }
});

function reactlibDOMLazyTree__replaceChildWithTree(oldNode, newTree) {
  oldNode.parentNode.replaceChild(newTree.node, oldNode);
  reactlibDOMLazyTree__insertTreeChildren(newTree);
}

function reactlibDOMLazyTree__queueChild(parentTree, childTree) {
  if (reactlibDOMLazyTree__enableLazy) {
    parentTree.children.push(childTree);
  } else {
    parentTree.node.appendChild(childTree.node);
  }
}

function reactlibDOMLazyTree__queueHTML(tree, html) {
  if (reactlibDOMLazyTree__enableLazy) {
    tree.html = html;
  } else {
    reactlibDOMLazyTree__setInnerHTML(tree.node, html);
  }
}

function reactlibDOMLazyTree__queueText(tree, text) {
  if (reactlibDOMLazyTree__enableLazy) {
    tree.text = text;
  } else {
    reactlibDOMLazyTree__setTextContent(tree.node, text);
  }
}

function reactlibDOMLazyTree__toString() {
  return this.node.nodeName;
}

function reactlibDOMLazyTree__DOMLazyTree(node) {
  return {
    node: node,
    children: [],
    html: null,
    text: null,
    toString: reactlibDOMLazyTree__toString
  };
}

reactlibDOMLazyTree__DOMLazyTree.insertTreeBefore = reactlibDOMLazyTree__insertTreeBefore;
reactlibDOMLazyTree__DOMLazyTree.replaceChildWithTree = reactlibDOMLazyTree__replaceChildWithTree;
reactlibDOMLazyTree__DOMLazyTree.queueChild = reactlibDOMLazyTree__queueChild;
reactlibDOMLazyTree__DOMLazyTree.queueHTML = reactlibDOMLazyTree__queueHTML;
reactlibDOMLazyTree__DOMLazyTree.queueText = reactlibDOMLazyTree__queueText;

$m['react/lib/DOMLazyTree'].exports = reactlibDOMLazyTree__DOMLazyTree;
/*≠≠ node_modules/react/lib/DOMLazyTree.js ≠≠*/

/*== node_modules/react/lib/ReactMount.js ==*/
$m['react/lib/ReactMount'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMount
 */


var reactlibReactMount___prodInvariant = $m['react/lib/reactProdInvariant'].exports;

var reactlibReactMount__DOMLazyTree = $m['react/lib/DOMLazyTree'].exports;
var reactlibReactMount__DOMProperty = $m['react/lib/DOMProperty'].exports;
var reactlibReactMount__ReactBrowserEventEmitter = $m['react/lib/ReactBrowserEventEmitter'].exports;
var reactlibReactMount__ReactCurrentOwner = $m['react/lib/ReactCurrentOwner'].exports;
var reactlibReactMount__ReactDOMComponentTree = $m['react/lib/ReactDOMComponentTree'].exports;
var reactlibReactMount__ReactDOMContainerInfo = $m['react/lib/ReactDOMContainerInfo'].exports;
var reactlibReactMount__ReactDOMFeatureFlags = $m['react/lib/ReactDOMFeatureFlags'].exports;
var reactlibReactMount__ReactElement = $m['react/lib/ReactElement'].exports;
var reactlibReactMount__ReactFeatureFlags = $m['react/lib/ReactFeatureFlags'].exports;
var reactlibReactMount__ReactInstanceMap = $m['react/lib/ReactInstanceMap'].exports;
var reactlibReactMount__ReactInstrumentation = $m['react/lib/ReactInstrumentation'].exports;
var reactlibReactMount__ReactMarkupChecksum = $m['react/lib/ReactMarkupChecksum'].exports;
var reactlibReactMount__ReactReconciler = $m['react/lib/ReactReconciler'].exports;
var reactlibReactMount__ReactUpdateQueue = $m['react/lib/ReactUpdateQueue'].exports;
var reactlibReactMount__ReactUpdates = $m['react/lib/ReactUpdates'].exports;

var reactlibReactMount__emptyObject = $m['fbjs/lib/emptyObject'].exports;
var reactlibReactMount__instantiateReactComponent = $m['react/lib/instantiateReactComponent'].exports;
var reactlibReactMount__invariant = $m['fbjs/lib/invariant'].exports;
var reactlibReactMount__setInnerHTML = $m['react/lib/setInnerHTML'].exports;
var reactlibReactMount__shouldUpdateReactComponent = $m['react/lib/shouldUpdateReactComponent'].exports;
var reactlibReactMount__warning = $m['fbjs/lib/warning'].exports;

var reactlibReactMount__ATTR_NAME = reactlibReactMount__DOMProperty.ID_ATTRIBUTE_NAME;
var reactlibReactMount__ROOT_ATTR_NAME = reactlibReactMount__DOMProperty.ROOT_ATTRIBUTE_NAME;

var reactlibReactMount__ELEMENT_NODE_TYPE = 1;
var reactlibReactMount__DOC_NODE_TYPE = 9;
var reactlibReactMount__DOCUMENT_FRAGMENT_NODE_TYPE = 11;

var reactlibReactMount__instancesByReactRootID = {};

/**
 * Finds the index of the first character
 * that's not common between the two given strings.
 *
 * @return {number} the index of the character where the strings diverge
 */
function reactlibReactMount__firstDifferenceIndex(string1, string2) {
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
function reactlibReactMount__getReactRootElementInContainer(container) {
  if (!container) {
    return null;
  }

  if (container.nodeType === reactlibReactMount__DOC_NODE_TYPE) {
    return container.documentElement;
  } else {
    return container.firstChild;
  }
}

function reactlibReactMount__internalGetID(node) {
  // If node is something like a window, document, or text node, none of
  // which support attributes or a .getAttribute method, gracefully return
  // the empty string, as if the attribute were missing.
  return node.getAttribute && node.getAttribute(reactlibReactMount__ATTR_NAME) || '';
}

/**
 * Mounts this component and inserts it into the DOM.
 *
 * @param {ReactComponent} componentInstance The instance to mount.
 * @param {DOMElement} container DOM element to mount into.
 * @param {ReactReconcileTransaction} transaction
 * @param {boolean} shouldReuseMarkup If true, do not insert markup
 */
function reactlibReactMount__mountComponentIntoNode(wrapperInstance, container, transaction, shouldReuseMarkup, context) {
  var markerName;
  if (reactlibReactMount__ReactFeatureFlags.logTopLevelRenders) {
    var wrappedElement = wrapperInstance._currentElement.props;
    var type = wrappedElement.type;
    markerName = 'React mount: ' + (typeof type === 'string' ? type : type.displayName || type.name);
    console.time(markerName);
  }

  var markup = reactlibReactMount__ReactReconciler.mountComponent(wrapperInstance, transaction, null, reactlibReactMount__ReactDOMContainerInfo(wrapperInstance, container), context, 0 /* parentDebugID */
  );

  if (markerName) {
    console.timeEnd(markerName);
  }

  wrapperInstance._renderedComponent._topLevelWrapper = wrapperInstance;
  reactlibReactMount__ReactMount._mountImageIntoNode(markup, container, wrapperInstance, shouldReuseMarkup, transaction);
}

/**
 * Batched mount.
 *
 * @param {ReactComponent} componentInstance The instance to mount.
 * @param {DOMElement} container DOM element to mount into.
 * @param {boolean} shouldReuseMarkup If true, do not insert markup
 */
function reactlibReactMount__batchedMountComponentIntoNode(componentInstance, container, shouldReuseMarkup, context) {
  var transaction = reactlibReactMount__ReactUpdates.ReactReconcileTransaction.getPooled(
  /* useCreateElement */
  !shouldReuseMarkup && reactlibReactMount__ReactDOMFeatureFlags.useCreateElement);
  transaction.perform(reactlibReactMount__mountComponentIntoNode, null, componentInstance, container, transaction, shouldReuseMarkup, context);
  reactlibReactMount__ReactUpdates.ReactReconcileTransaction.release(transaction);
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
function reactlibReactMount__unmountComponentFromNode(instance, container, safely) {
  if (process.env.NODE_ENV !== 'production') {
    reactlibReactMount__ReactInstrumentation.debugTool.onBeginFlush();
  }
  reactlibReactMount__ReactReconciler.unmountComponent(instance, safely);
  if (process.env.NODE_ENV !== 'production') {
    reactlibReactMount__ReactInstrumentation.debugTool.onEndFlush();
  }

  if (container.nodeType === reactlibReactMount__DOC_NODE_TYPE) {
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
function reactlibReactMount__hasNonRootReactChild(container) {
  var rootEl = reactlibReactMount__getReactRootElementInContainer(container);
  if (rootEl) {
    var inst = reactlibReactMount__ReactDOMComponentTree.getInstanceFromNode(rootEl);
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
function reactlibReactMount__nodeIsRenderedByOtherInstance(container) {
  var rootEl = reactlibReactMount__getReactRootElementInContainer(container);
  return !!(rootEl && reactlibReactMount__isReactNode(rootEl) && !reactlibReactMount__ReactDOMComponentTree.getInstanceFromNode(rootEl));
}

/**
 * True if the supplied DOM node is a valid node element.
 *
 * @param {?DOMElement} node The candidate DOM node.
 * @return {boolean} True if the DOM is a valid DOM node.
 * @internal
 */
function reactlibReactMount__isValidContainer(node) {
  return !!(node && (node.nodeType === reactlibReactMount__ELEMENT_NODE_TYPE || node.nodeType === reactlibReactMount__DOC_NODE_TYPE || node.nodeType === reactlibReactMount__DOCUMENT_FRAGMENT_NODE_TYPE));
}

/**
 * True if the supplied DOM node is a valid React node element.
 *
 * @param {?DOMElement} node The candidate DOM node.
 * @return {boolean} True if the DOM is a valid React DOM node.
 * @internal
 */
function reactlibReactMount__isReactNode(node) {
  return reactlibReactMount__isValidContainer(node) && (node.hasAttribute(reactlibReactMount__ROOT_ATTR_NAME) || node.hasAttribute(reactlibReactMount__ATTR_NAME));
}

function reactlibReactMount__getHostRootInstanceInContainer(container) {
  var rootEl = reactlibReactMount__getReactRootElementInContainer(container);
  var prevHostInstance = rootEl && reactlibReactMount__ReactDOMComponentTree.getInstanceFromNode(rootEl);
  return prevHostInstance && !prevHostInstance._hostParent ? prevHostInstance : null;
}

function reactlibReactMount__getTopLevelWrapperInContainer(container) {
  var root = reactlibReactMount__getHostRootInstanceInContainer(container);
  return root ? root._hostContainerInfo._topLevelWrapper : null;
}

/**
 * Temporary (?) hack so that we can store all top-level pending updates on
 * composites instead of having to worry about different types of components
 * here.
 */
var reactlibReactMount__topLevelRootCounter = 1;
var reactlibReactMount__TopLevelWrapper = function () {
  this.rootID = reactlibReactMount__topLevelRootCounter++;
};
reactlibReactMount__TopLevelWrapper.prototype.isReactComponent = {};
if (process.env.NODE_ENV !== 'production') {
  reactlibReactMount__TopLevelWrapper.displayName = 'TopLevelWrapper';
}
reactlibReactMount__TopLevelWrapper.prototype.render = function () {
  // this.props is actually a ReactElement
  return this.props;
};

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
var reactlibReactMount__ReactMount = {

  TopLevelWrapper: reactlibReactMount__TopLevelWrapper,

  /**
   * Used by devtools. The keys are not important.
   */
  _instancesByReactRootID: reactlibReactMount__instancesByReactRootID,

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
    reactlibReactMount__ReactMount.scrollMonitor(container, function () {
      reactlibReactMount__ReactUpdateQueue.enqueueElementInternal(prevComponent, nextElement, nextContext);
      if (callback) {
        reactlibReactMount__ReactUpdateQueue.enqueueCallbackInternal(prevComponent, callback);
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
    process.env.NODE_ENV !== 'production' ? reactlibReactMount__warning(reactlibReactMount__ReactCurrentOwner.current == null, '_renderNewRootComponent(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from ' + 'render is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate. Check the render method of %s.', reactlibReactMount__ReactCurrentOwner.current && reactlibReactMount__ReactCurrentOwner.current.getName() || 'ReactCompositeComponent') : void 0;

    !reactlibReactMount__isValidContainer(container) ? process.env.NODE_ENV !== 'production' ? reactlibReactMount__invariant(false, '_registerComponent(...): Target container is not a DOM element.') : reactlibReactMount___prodInvariant('37') : void 0;

    reactlibReactMount__ReactBrowserEventEmitter.ensureScrollValueMonitoring();
    var componentInstance = reactlibReactMount__instantiateReactComponent(nextElement, false);

    // The initial render is synchronous but any updates that happen during
    // rendering, in componentWillMount or componentDidMount, will be batched
    // according to the current batching strategy.

    reactlibReactMount__ReactUpdates.batchedUpdates(reactlibReactMount__batchedMountComponentIntoNode, componentInstance, container, shouldReuseMarkup, context);

    var wrapperID = componentInstance._instance.rootID;
    reactlibReactMount__instancesByReactRootID[wrapperID] = componentInstance;

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
    !(parentComponent != null && reactlibReactMount__ReactInstanceMap.has(parentComponent)) ? process.env.NODE_ENV !== 'production' ? reactlibReactMount__invariant(false, 'parentComponent must be a valid React Component') : reactlibReactMount___prodInvariant('38') : void 0;
    return reactlibReactMount__ReactMount._renderSubtreeIntoContainer(parentComponent, nextElement, container, callback);
  },

  _renderSubtreeIntoContainer: function (parentComponent, nextElement, container, callback) {
    reactlibReactMount__ReactUpdateQueue.validateCallback(callback, 'ReactDOM.render');
    !reactlibReactMount__ReactElement.isValidElement(nextElement) ? process.env.NODE_ENV !== 'production' ? reactlibReactMount__invariant(false, 'ReactDOM.render(): Invalid component element.%s', typeof nextElement === 'string' ? ' Instead of passing a string like \'div\', pass ' + 'React.createElement(\'div\') or <div />.' : typeof nextElement === 'function' ? ' Instead of passing a class like Foo, pass ' + 'React.createElement(Foo) or <Foo />.' :
    // Check if it quacks like an element
    nextElement != null && nextElement.props !== undefined ? ' This may be caused by unintentionally loading two independent ' + 'copies of React.' : '') : reactlibReactMount___prodInvariant('39', typeof nextElement === 'string' ? ' Instead of passing a string like \'div\', pass ' + 'React.createElement(\'div\') or <div />.' : typeof nextElement === 'function' ? ' Instead of passing a class like Foo, pass ' + 'React.createElement(Foo) or <Foo />.' : nextElement != null && nextElement.props !== undefined ? ' This may be caused by unintentionally loading two independent ' + 'copies of React.' : '') : void 0;

    process.env.NODE_ENV !== 'production' ? reactlibReactMount__warning(!container || !container.tagName || container.tagName.toUpperCase() !== 'BODY', 'render(): Rendering components directly into document.body is ' + 'discouraged, since its children are often manipulated by third-party ' + 'scripts and browser extensions. This may lead to subtle ' + 'reconciliation issues. Try rendering into a container element created ' + 'for your app.') : void 0;

    var nextWrappedElement = reactlibReactMount__ReactElement(reactlibReactMount__TopLevelWrapper, null, null, null, null, null, nextElement);

    var nextContext;
    if (parentComponent) {
      var parentInst = reactlibReactMount__ReactInstanceMap.get(parentComponent);
      nextContext = parentInst._processChildContext(parentInst._context);
    } else {
      nextContext = reactlibReactMount__emptyObject;
    }

    var prevComponent = reactlibReactMount__getTopLevelWrapperInContainer(container);

    if (prevComponent) {
      var prevWrappedElement = prevComponent._currentElement;
      var prevElement = prevWrappedElement.props;
      if (reactlibReactMount__shouldUpdateReactComponent(prevElement, nextElement)) {
        var publicInst = prevComponent._renderedComponent.getPublicInstance();
        var updatedCallback = callback && function () {
          callback.call(publicInst);
        };
        reactlibReactMount__ReactMount._updateRootComponent(prevComponent, nextWrappedElement, nextContext, container, updatedCallback);
        return publicInst;
      } else {
        reactlibReactMount__ReactMount.unmountComponentAtNode(container);
      }
    }

    var reactRootElement = reactlibReactMount__getReactRootElementInContainer(container);
    var containerHasReactMarkup = reactRootElement && !!reactlibReactMount__internalGetID(reactRootElement);
    var containerHasNonRootReactChild = reactlibReactMount__hasNonRootReactChild(container);

    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? reactlibReactMount__warning(!containerHasNonRootReactChild, 'render(...): Replacing React-rendered children with a new root ' + 'component. If you intended to update the children of this node, ' + 'you should instead have the existing children update their state ' + 'and render the new components instead of calling ReactDOM.render.') : void 0;

      if (!containerHasReactMarkup || reactRootElement.nextSibling) {
        var rootElementSibling = reactRootElement;
        while (rootElementSibling) {
          if (reactlibReactMount__internalGetID(rootElementSibling)) {
            process.env.NODE_ENV !== 'production' ? reactlibReactMount__warning(false, 'render(): Target node has markup rendered by React, but there ' + 'are unrelated nodes as well. This is most commonly caused by ' + 'white-space inserted around server-rendered markup.') : void 0;
            break;
          }
          rootElementSibling = rootElementSibling.nextSibling;
        }
      }
    }

    var shouldReuseMarkup = containerHasReactMarkup && !prevComponent && !containerHasNonRootReactChild;
    var component = reactlibReactMount__ReactMount._renderNewRootComponent(nextWrappedElement, container, shouldReuseMarkup, nextContext)._renderedComponent.getPublicInstance();
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
    return reactlibReactMount__ReactMount._renderSubtreeIntoContainer(null, nextElement, container, callback);
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
    process.env.NODE_ENV !== 'production' ? reactlibReactMount__warning(reactlibReactMount__ReactCurrentOwner.current == null, 'unmountComponentAtNode(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from render ' + 'is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate. Check the render method of %s.', reactlibReactMount__ReactCurrentOwner.current && reactlibReactMount__ReactCurrentOwner.current.getName() || 'ReactCompositeComponent') : void 0;

    !reactlibReactMount__isValidContainer(container) ? process.env.NODE_ENV !== 'production' ? reactlibReactMount__invariant(false, 'unmountComponentAtNode(...): Target container is not a DOM element.') : reactlibReactMount___prodInvariant('40') : void 0;

    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? reactlibReactMount__warning(!reactlibReactMount__nodeIsRenderedByOtherInstance(container), 'unmountComponentAtNode(): The node you\'re attempting to unmount ' + 'was rendered by another copy of React.') : void 0;
    }

    var prevComponent = reactlibReactMount__getTopLevelWrapperInContainer(container);
    if (!prevComponent) {
      // Check if the node being unmounted was rendered by React, but isn't a
      // root node.
      var containerHasNonRootReactChild = reactlibReactMount__hasNonRootReactChild(container);

      // Check if the container itself is a React root node.
      var isContainerReactRoot = container.nodeType === 1 && container.hasAttribute(reactlibReactMount__ROOT_ATTR_NAME);

      if (process.env.NODE_ENV !== 'production') {
        process.env.NODE_ENV !== 'production' ? reactlibReactMount__warning(!containerHasNonRootReactChild, 'unmountComponentAtNode(): The node you\'re attempting to unmount ' + 'was rendered by React and is not a top-level container. %s', isContainerReactRoot ? 'You may have accidentally passed in a React root node instead ' + 'of its container.' : 'Instead, have the parent component update its state and ' + 'rerender in order to remove this component.') : void 0;
      }

      return false;
    }
    delete reactlibReactMount__instancesByReactRootID[prevComponent._instance.rootID];
    reactlibReactMount__ReactUpdates.batchedUpdates(reactlibReactMount__unmountComponentFromNode, prevComponent, container, false);
    return true;
  },

  _mountImageIntoNode: function (markup, container, instance, shouldReuseMarkup, transaction) {
    !reactlibReactMount__isValidContainer(container) ? process.env.NODE_ENV !== 'production' ? reactlibReactMount__invariant(false, 'mountComponentIntoNode(...): Target container is not valid.') : reactlibReactMount___prodInvariant('41') : void 0;

    if (shouldReuseMarkup) {
      var rootElement = reactlibReactMount__getReactRootElementInContainer(container);
      if (reactlibReactMount__ReactMarkupChecksum.canReuseMarkup(markup, rootElement)) {
        reactlibReactMount__ReactDOMComponentTree.precacheNode(instance, rootElement);
        return;
      } else {
        var checksum = rootElement.getAttribute(reactlibReactMount__ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
        rootElement.removeAttribute(reactlibReactMount__ReactMarkupChecksum.CHECKSUM_ATTR_NAME);

        var rootMarkup = rootElement.outerHTML;
        rootElement.setAttribute(reactlibReactMount__ReactMarkupChecksum.CHECKSUM_ATTR_NAME, checksum);

        var normalizedMarkup = markup;
        if (process.env.NODE_ENV !== 'production') {
          // because rootMarkup is retrieved from the DOM, various normalizations
          // will have occurred which will not be present in `markup`. Here,
          // insert markup into a <div> or <iframe> depending on the container
          // type to perform the same normalizations before comparing.
          var normalizer;
          if (container.nodeType === reactlibReactMount__ELEMENT_NODE_TYPE) {
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

        var diffIndex = reactlibReactMount__firstDifferenceIndex(normalizedMarkup, rootMarkup);
        var difference = ' (client) ' + normalizedMarkup.substring(diffIndex - 20, diffIndex + 20) + '\n (server) ' + rootMarkup.substring(diffIndex - 20, diffIndex + 20);

        !(container.nodeType !== reactlibReactMount__DOC_NODE_TYPE) ? process.env.NODE_ENV !== 'production' ? reactlibReactMount__invariant(false, 'You\'re trying to render a component to the document using server rendering but the checksum was invalid. This usually means you rendered a different component type or props on the client from the one on the server, or your render() methods are impure. React cannot handle this case due to cross-browser quirks by rendering at the document root. You should look for environment dependent code in your components and ensure the props are the same client and server side:\n%s', difference) : reactlibReactMount___prodInvariant('42', difference) : void 0;

        if (process.env.NODE_ENV !== 'production') {
          process.env.NODE_ENV !== 'production' ? reactlibReactMount__warning(false, 'React attempted to reuse markup in a container but the ' + 'checksum was invalid. This generally means that you are ' + 'using server rendering and the markup generated on the ' + 'server was not what the client was expecting. React injected ' + 'new markup to compensate which works but you have lost many ' + 'of the benefits of server rendering. Instead, figure out ' + 'why the markup being generated is different on the client ' + 'or server:\n%s', difference) : void 0;
        }
      }
    }

    !(container.nodeType !== reactlibReactMount__DOC_NODE_TYPE) ? process.env.NODE_ENV !== 'production' ? reactlibReactMount__invariant(false, 'You\'re trying to render a component to the document but you didn\'t use server rendering. We can\'t do this without using server rendering due to cross-browser quirks. See ReactDOMServer.renderToString() for server rendering.') : reactlibReactMount___prodInvariant('43') : void 0;

    if (transaction.useCreateElement) {
      while (container.lastChild) {
        container.removeChild(container.lastChild);
      }
      reactlibReactMount__DOMLazyTree.insertTreeBefore(container, markup, null);
    } else {
      reactlibReactMount__setInnerHTML(container, markup);
      reactlibReactMount__ReactDOMComponentTree.precacheNode(instance, container.firstChild);
    }

    if (process.env.NODE_ENV !== 'production') {
      var hostNode = reactlibReactMount__ReactDOMComponentTree.getInstanceFromNode(container.firstChild);
      if (hostNode._debugID !== 0) {
        reactlibReactMount__ReactInstrumentation.debugTool.onHostOperation(hostNode._debugID, 'mount', markup.toString());
      }
    }
  }
};

$m['react/lib/ReactMount'].exports = reactlibReactMount__ReactMount;
/*≠≠ node_modules/react/lib/ReactMount.js ≠≠*/

/*== node_modules/react/lib/renderSubtreeIntoContainer.js ==*/
$m['react/lib/renderSubtreeIntoContainer'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
* @providesModule renderSubtreeIntoContainer
*/


var reactlibrenderSubtreeIntoContainer__ReactMount = $m['react/lib/ReactMount'].exports;

$m['react/lib/renderSubtreeIntoContainer'].exports = reactlibrenderSubtreeIntoContainer__ReactMount.renderSubtreeIntoContainer;
/*≠≠ node_modules/react/lib/renderSubtreeIntoContainer.js ≠≠*/

/*== node_modules/react/lib/getHostComponentFromComposite.js ==*/
$m['react/lib/getHostComponentFromComposite'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getHostComponentFromComposite
 */


var reactlibgetHostComponentFromComposite__ReactNodeTypes = $m['react/lib/ReactNodeTypes'].exports;

function reactlibgetHostComponentFromComposite__getHostComponentFromComposite(inst) {
  var type;

  while ((type = inst._renderedNodeType) === reactlibgetHostComponentFromComposite__ReactNodeTypes.COMPOSITE) {
    inst = inst._renderedComponent;
  }

  if (type === reactlibgetHostComponentFromComposite__ReactNodeTypes.HOST) {
    return inst._renderedComponent;
  } else if (type === reactlibgetHostComponentFromComposite__ReactNodeTypes.EMPTY) {
    return null;
  }
}

$m['react/lib/getHostComponentFromComposite'].exports = reactlibgetHostComponentFromComposite__getHostComponentFromComposite;
/*≠≠ node_modules/react/lib/getHostComponentFromComposite.js ≠≠*/

/*== node_modules/react/lib/findDOMNode.js ==*/
$m['react/lib/findDOMNode'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule findDOMNode
 */


var reactlibfindDOMNode___prodInvariant = $m['react/lib/reactProdInvariant'].exports;

var reactlibfindDOMNode__ReactCurrentOwner = $m['react/lib/ReactCurrentOwner'].exports;
var reactlibfindDOMNode__ReactDOMComponentTree = $m['react/lib/ReactDOMComponentTree'].exports;
var reactlibfindDOMNode__ReactInstanceMap = $m['react/lib/ReactInstanceMap'].exports;

var reactlibfindDOMNode__getHostComponentFromComposite = $m['react/lib/getHostComponentFromComposite'].exports;
var reactlibfindDOMNode__invariant = $m['fbjs/lib/invariant'].exports;
var reactlibfindDOMNode__warning = $m['fbjs/lib/warning'].exports;

/**
 * Returns the DOM node rendered by this element.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#reactdom.finddomnode
 *
 * @param {ReactComponent|DOMElement} componentOrElement
 * @return {?DOMElement} The root node of this element.
 */
function reactlibfindDOMNode__findDOMNode(componentOrElement) {
  if (process.env.NODE_ENV !== 'production') {
    var owner = reactlibfindDOMNode__ReactCurrentOwner.current;
    if (owner !== null) {
      process.env.NODE_ENV !== 'production' ? reactlibfindDOMNode__warning(owner._warnedAboutRefsInRender, '%s is accessing findDOMNode inside its render(). ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : void 0;
      owner._warnedAboutRefsInRender = true;
    }
  }
  if (componentOrElement == null) {
    return null;
  }
  if (componentOrElement.nodeType === 1) {
    return componentOrElement;
  }

  var inst = reactlibfindDOMNode__ReactInstanceMap.get(componentOrElement);
  if (inst) {
    inst = reactlibfindDOMNode__getHostComponentFromComposite(inst);
    return inst ? reactlibfindDOMNode__ReactDOMComponentTree.getNodeFromInstance(inst) : null;
  }

  if (typeof componentOrElement.render === 'function') {
    !false ? process.env.NODE_ENV !== 'production' ? reactlibfindDOMNode__invariant(false, 'findDOMNode was called on an unmounted component.') : reactlibfindDOMNode___prodInvariant('44') : void 0;
  } else {
    !false ? process.env.NODE_ENV !== 'production' ? reactlibfindDOMNode__invariant(false, 'Element appears to be neither ReactComponent nor DOMNode (keys: %s)', Object.keys(componentOrElement)) : reactlibfindDOMNode___prodInvariant('45', Object.keys(componentOrElement)) : void 0;
  }
}

$m['react/lib/findDOMNode'].exports = reactlibfindDOMNode__findDOMNode;
/*≠≠ node_modules/react/lib/findDOMNode.js ≠≠*/

/*== node_modules/react/lib/SyntheticEvent.js ==*/
$m['react/lib/SyntheticEvent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticEvent
 */


var reactlibSyntheticEvent___assign = $m['object-assign'].exports;

var reactlibSyntheticEvent__PooledClass = $m['react/lib/PooledClass'].exports;

var reactlibSyntheticEvent__emptyFunction = $m['fbjs/lib/emptyFunction'].exports;
var reactlibSyntheticEvent__warning = $m['fbjs/lib/warning'].exports;

var reactlibSyntheticEvent__didWarnForAddedNewProperty = false;
var reactlibSyntheticEvent__isProxySupported = typeof Proxy === 'function';

var reactlibSyntheticEvent__shouldBeReleasedProperties = ['dispatchConfig', '_targetInst', 'nativeEvent', 'isDefaultPrevented', 'isPropagationStopped', '_dispatchListeners', '_dispatchInstances'];

/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var reactlibSyntheticEvent__EventInterface = {
  type: null,
  target: null,
  // currentTarget is set when dispatching; no use in copying it here
  currentTarget: reactlibSyntheticEvent__emptyFunction.thatReturnsNull,
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
function reactlibSyntheticEvent__SyntheticEvent(dispatchConfig, targetInst, nativeEvent, nativeEventTarget) {
  if (process.env.NODE_ENV !== 'production') {
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
    if (process.env.NODE_ENV !== 'production') {
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
    this.isDefaultPrevented = reactlibSyntheticEvent__emptyFunction.thatReturnsTrue;
  } else {
    this.isDefaultPrevented = reactlibSyntheticEvent__emptyFunction.thatReturnsFalse;
  }
  this.isPropagationStopped = reactlibSyntheticEvent__emptyFunction.thatReturnsFalse;
  return this;
}

reactlibSyntheticEvent___assign(reactlibSyntheticEvent__SyntheticEvent.prototype, {

  preventDefault: function () {
    this.defaultPrevented = true;
    var event = this.nativeEvent;
    if (!event) {
      return;
    }

    if (event.preventDefault) {
      event.preventDefault();
    } else if (typeof event.returnValue !== 'unknown') {
      // eslint-disable-line valid-typeof
      event.returnValue = false;
    }
    this.isDefaultPrevented = reactlibSyntheticEvent__emptyFunction.thatReturnsTrue;
  },

  stopPropagation: function () {
    var event = this.nativeEvent;
    if (!event) {
      return;
    }

    if (event.stopPropagation) {
      event.stopPropagation();
    } else if (typeof event.cancelBubble !== 'unknown') {
      // eslint-disable-line valid-typeof
      // The ChangeEventPlugin registers a "propertychange" event for
      // IE. This event does not support bubbling or cancelling, and
      // any references to cancelBubble throw "Member not found".  A
      // typeof check of "unknown" circumvents this issue (and is also
      // IE specific).
      event.cancelBubble = true;
    }

    this.isPropagationStopped = reactlibSyntheticEvent__emptyFunction.thatReturnsTrue;
  },

  /**
   * We release all dispatched `SyntheticEvent`s after each event loop, adding
   * them back into the pool. This allows a way to hold onto a reference that
   * won't be added back into the pool.
   */
  persist: function () {
    this.isPersistent = reactlibSyntheticEvent__emptyFunction.thatReturnsTrue;
  },

  /**
   * Checks if this event should be released back into the pool.
   *
   * @return {boolean} True if this should not be released, false otherwise.
   */
  isPersistent: reactlibSyntheticEvent__emptyFunction.thatReturnsFalse,

  /**
   * `PooledClass` looks for `destructor` on each instance it releases.
   */
  destructor: function () {
    var Interface = this.constructor.Interface;
    for (var propName in Interface) {
      if (process.env.NODE_ENV !== 'production') {
        Object.defineProperty(this, propName, reactlibSyntheticEvent__getPooledWarningPropertyDefinition(propName, Interface[propName]));
      } else {
        this[propName] = null;
      }
    }
    for (var i = 0; i < reactlibSyntheticEvent__shouldBeReleasedProperties.length; i++) {
      this[reactlibSyntheticEvent__shouldBeReleasedProperties[i]] = null;
    }
    if (process.env.NODE_ENV !== 'production') {
      Object.defineProperty(this, 'nativeEvent', reactlibSyntheticEvent__getPooledWarningPropertyDefinition('nativeEvent', null));
      Object.defineProperty(this, 'preventDefault', reactlibSyntheticEvent__getPooledWarningPropertyDefinition('preventDefault', reactlibSyntheticEvent__emptyFunction));
      Object.defineProperty(this, 'stopPropagation', reactlibSyntheticEvent__getPooledWarningPropertyDefinition('stopPropagation', reactlibSyntheticEvent__emptyFunction));
    }
  }

});

reactlibSyntheticEvent__SyntheticEvent.Interface = reactlibSyntheticEvent__EventInterface;

if (process.env.NODE_ENV !== 'production') {
  if (reactlibSyntheticEvent__isProxySupported) {
    /*eslint-disable no-func-assign */
    reactlibSyntheticEvent__SyntheticEvent = new Proxy(reactlibSyntheticEvent__SyntheticEvent, {
      construct: function (target, args) {
        return this.apply(target, Object.create(target.prototype), args);
      },
      apply: function (constructor, that, args) {
        return new Proxy(constructor.apply(that, args), {
          set: function (target, prop, value) {
            if (prop !== 'isPersistent' && !target.constructor.Interface.hasOwnProperty(prop) && reactlibSyntheticEvent__shouldBeReleasedProperties.indexOf(prop) === -1) {
              process.env.NODE_ENV !== 'production' ? reactlibSyntheticEvent__warning(reactlibSyntheticEvent__didWarnForAddedNewProperty || target.isPersistent(), 'This synthetic event is reused for performance reasons. If you\'re ' + 'seeing this, you\'re adding a new property in the synthetic event object. ' + 'The property is never released. See ' + 'https://fb.me/react-event-pooling for more information.') : void 0;
              reactlibSyntheticEvent__didWarnForAddedNewProperty = true;
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
reactlibSyntheticEvent__SyntheticEvent.augmentClass = function (Class, Interface) {
  var Super = this;

  var E = function () {};
  E.prototype = Super.prototype;
  var prototype = new E();

  reactlibSyntheticEvent___assign(prototype, Class.prototype);
  Class.prototype = prototype;
  Class.prototype.constructor = Class;

  Class.Interface = reactlibSyntheticEvent___assign({}, Super.Interface, Interface);
  Class.augmentClass = Super.augmentClass;

  reactlibSyntheticEvent__PooledClass.addPoolingTo(Class, reactlibSyntheticEvent__PooledClass.fourArgumentPooler);
};

reactlibSyntheticEvent__PooledClass.addPoolingTo(reactlibSyntheticEvent__SyntheticEvent, reactlibSyntheticEvent__PooledClass.fourArgumentPooler);

$m['react/lib/SyntheticEvent'].exports = reactlibSyntheticEvent__SyntheticEvent;

/**
  * Helper to nullify syntheticEvent instance properties when destructing
  *
  * @param {object} SyntheticEvent
  * @param {String} propName
  * @return {object} defineProperty object
  */
function reactlibSyntheticEvent__getPooledWarningPropertyDefinition(propName, getVal) {
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
    process.env.NODE_ENV !== 'production' ? reactlibSyntheticEvent__warning(warningCondition, 'This synthetic event is reused for performance reasons. If you\'re seeing this, ' + 'you\'re %s `%s` on a released/nullified synthetic event. %s. ' + 'If you must keep the original synthetic event around, use event.persist(). ' + 'See https://fb.me/react-event-pooling for more information.', action, propName, result) : void 0;
  }
}
/*≠≠ node_modules/react/lib/SyntheticEvent.js ≠≠*/

/*== node_modules/react/lib/SyntheticUIEvent.js ==*/
$m['react/lib/SyntheticUIEvent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticUIEvent
 */


var reactlibSyntheticUIEvent__SyntheticEvent = $m['react/lib/SyntheticEvent'].exports;

var reactlibSyntheticUIEvent__getEventTarget = $m['react/lib/getEventTarget'].exports;

/**
 * @interface UIEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var reactlibSyntheticUIEvent__UIEventInterface = {
  view: function (event) {
    if (event.view) {
      return event.view;
    }

    var target = reactlibSyntheticUIEvent__getEventTarget(event);
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
function reactlibSyntheticUIEvent__SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return reactlibSyntheticUIEvent__SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

reactlibSyntheticUIEvent__SyntheticEvent.augmentClass(reactlibSyntheticUIEvent__SyntheticUIEvent, reactlibSyntheticUIEvent__UIEventInterface);

$m['react/lib/SyntheticUIEvent'].exports = reactlibSyntheticUIEvent__SyntheticUIEvent;
/*≠≠ node_modules/react/lib/SyntheticUIEvent.js ≠≠*/

/*== node_modules/react/lib/SyntheticMouseEvent.js ==*/
$m['react/lib/SyntheticMouseEvent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticMouseEvent
 */


var reactlibSyntheticMouseEvent__SyntheticUIEvent = $m['react/lib/SyntheticUIEvent'].exports;
var reactlibSyntheticMouseEvent__ViewportMetrics = $m['react/lib/ViewportMetrics'].exports;

var reactlibSyntheticMouseEvent__getEventModifierState = $m['react/lib/getEventModifierState'].exports;

/**
 * @interface MouseEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var reactlibSyntheticMouseEvent__MouseEventInterface = {
  screenX: null,
  screenY: null,
  clientX: null,
  clientY: null,
  ctrlKey: null,
  shiftKey: null,
  altKey: null,
  metaKey: null,
  getModifierState: reactlibSyntheticMouseEvent__getEventModifierState,
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
    return 'pageX' in event ? event.pageX : event.clientX + reactlibSyntheticMouseEvent__ViewportMetrics.currentScrollLeft;
  },
  pageY: function (event) {
    return 'pageY' in event ? event.pageY : event.clientY + reactlibSyntheticMouseEvent__ViewportMetrics.currentScrollTop;
  }
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function reactlibSyntheticMouseEvent__SyntheticMouseEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return reactlibSyntheticMouseEvent__SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

reactlibSyntheticMouseEvent__SyntheticUIEvent.augmentClass(reactlibSyntheticMouseEvent__SyntheticMouseEvent, reactlibSyntheticMouseEvent__MouseEventInterface);

$m['react/lib/SyntheticMouseEvent'].exports = reactlibSyntheticMouseEvent__SyntheticMouseEvent;
/*≠≠ node_modules/react/lib/SyntheticMouseEvent.js ≠≠*/

/*== node_modules/react/lib/SyntheticWheelEvent.js ==*/
$m['react/lib/SyntheticWheelEvent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticWheelEvent
 */


var reactlibSyntheticWheelEvent__SyntheticMouseEvent = $m['react/lib/SyntheticMouseEvent'].exports;

/**
 * @interface WheelEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var reactlibSyntheticWheelEvent__WheelEventInterface = {
  deltaX: function (event) {
    return 'deltaX' in event ? event.deltaX :
    // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
    'wheelDeltaX' in event ? -event.wheelDeltaX : 0;
  },
  deltaY: function (event) {
    return 'deltaY' in event ? event.deltaY :
    // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
    'wheelDeltaY' in event ? -event.wheelDeltaY :
    // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
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
function reactlibSyntheticWheelEvent__SyntheticWheelEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return reactlibSyntheticWheelEvent__SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

reactlibSyntheticWheelEvent__SyntheticMouseEvent.augmentClass(reactlibSyntheticWheelEvent__SyntheticWheelEvent, reactlibSyntheticWheelEvent__WheelEventInterface);

$m['react/lib/SyntheticWheelEvent'].exports = reactlibSyntheticWheelEvent__SyntheticWheelEvent;
/*≠≠ node_modules/react/lib/SyntheticWheelEvent.js ≠≠*/

/*== node_modules/react/lib/SyntheticTransitionEvent.js ==*/
$m['react/lib/SyntheticTransitionEvent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticTransitionEvent
 */


var reactlibSyntheticTransitionEvent__SyntheticEvent = $m['react/lib/SyntheticEvent'].exports;

/**
 * @interface Event
 * @see http://www.w3.org/TR/2009/WD-css3-transitions-20090320/#transition-events-
 * @see https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent
 */
var reactlibSyntheticTransitionEvent__TransitionEventInterface = {
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
function reactlibSyntheticTransitionEvent__SyntheticTransitionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return reactlibSyntheticTransitionEvent__SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

reactlibSyntheticTransitionEvent__SyntheticEvent.augmentClass(reactlibSyntheticTransitionEvent__SyntheticTransitionEvent, reactlibSyntheticTransitionEvent__TransitionEventInterface);

$m['react/lib/SyntheticTransitionEvent'].exports = reactlibSyntheticTransitionEvent__SyntheticTransitionEvent;
/*≠≠ node_modules/react/lib/SyntheticTransitionEvent.js ≠≠*/

/*== node_modules/react/lib/SyntheticTouchEvent.js ==*/
$m['react/lib/SyntheticTouchEvent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticTouchEvent
 */


var reactlibSyntheticTouchEvent__SyntheticUIEvent = $m['react/lib/SyntheticUIEvent'].exports;

var reactlibSyntheticTouchEvent__getEventModifierState = $m['react/lib/getEventModifierState'].exports;

/**
 * @interface TouchEvent
 * @see http://www.w3.org/TR/touch-events/
 */
var reactlibSyntheticTouchEvent__TouchEventInterface = {
  touches: null,
  targetTouches: null,
  changedTouches: null,
  altKey: null,
  metaKey: null,
  ctrlKey: null,
  shiftKey: null,
  getModifierState: reactlibSyntheticTouchEvent__getEventModifierState
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function reactlibSyntheticTouchEvent__SyntheticTouchEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return reactlibSyntheticTouchEvent__SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

reactlibSyntheticTouchEvent__SyntheticUIEvent.augmentClass(reactlibSyntheticTouchEvent__SyntheticTouchEvent, reactlibSyntheticTouchEvent__TouchEventInterface);

$m['react/lib/SyntheticTouchEvent'].exports = reactlibSyntheticTouchEvent__SyntheticTouchEvent;
/*≠≠ node_modules/react/lib/SyntheticTouchEvent.js ≠≠*/

/*== node_modules/react/lib/SyntheticDragEvent.js ==*/
$m['react/lib/SyntheticDragEvent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticDragEvent
 */


var reactlibSyntheticDragEvent__SyntheticMouseEvent = $m['react/lib/SyntheticMouseEvent'].exports;

/**
 * @interface DragEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var reactlibSyntheticDragEvent__DragEventInterface = {
  dataTransfer: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function reactlibSyntheticDragEvent__SyntheticDragEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return reactlibSyntheticDragEvent__SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

reactlibSyntheticDragEvent__SyntheticMouseEvent.augmentClass(reactlibSyntheticDragEvent__SyntheticDragEvent, reactlibSyntheticDragEvent__DragEventInterface);

$m['react/lib/SyntheticDragEvent'].exports = reactlibSyntheticDragEvent__SyntheticDragEvent;
/*≠≠ node_modules/react/lib/SyntheticDragEvent.js ≠≠*/

/*== node_modules/react/lib/getEventKey.js ==*/
$m['react/lib/getEventKey'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventKey
 */


var reactlibgetEventKey__getEventCharCode = $m['react/lib/getEventCharCode'].exports;

/**
 * Normalization of deprecated HTML5 `key` values
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */
var reactlibgetEventKey__normalizeKey = {
  'Esc': 'Escape',
  'Spacebar': ' ',
  'Left': 'ArrowLeft',
  'Up': 'ArrowUp',
  'Right': 'ArrowRight',
  'Down': 'ArrowDown',
  'Del': 'Delete',
  'Win': 'OS',
  'Menu': 'ContextMenu',
  'Apps': 'ContextMenu',
  'Scroll': 'ScrollLock',
  'MozPrintableKey': 'Unidentified'
};

/**
 * Translation from legacy `keyCode` to HTML5 `key`
 * Only special keys supported, all others depend on keyboard layout or browser
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */
var reactlibgetEventKey__translateToKey = {
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
  112: 'F1', 113: 'F2', 114: 'F3', 115: 'F4', 116: 'F5', 117: 'F6',
  118: 'F7', 119: 'F8', 120: 'F9', 121: 'F10', 122: 'F11', 123: 'F12',
  144: 'NumLock',
  145: 'ScrollLock',
  224: 'Meta'
};

/**
 * @param {object} nativeEvent Native browser event.
 * @return {string} Normalized `key` property.
 */
function reactlibgetEventKey__getEventKey(nativeEvent) {
  if (nativeEvent.key) {
    // Normalize inconsistent values reported by browsers due to
    // implementations of a working draft specification.

    // FireFox implements `key` but returns `MozPrintableKey` for all
    // printable characters (normalized to `Unidentified`), ignore it.
    var key = reactlibgetEventKey__normalizeKey[nativeEvent.key] || nativeEvent.key;
    if (key !== 'Unidentified') {
      return key;
    }
  }

  // Browser does not implement `key`, polyfill as much of it as we can.
  if (nativeEvent.type === 'keypress') {
    var charCode = reactlibgetEventKey__getEventCharCode(nativeEvent);

    // The enter-key is technically both printable and non-printable and can
    // thus be captured by `keypress`, no other non-printable key should.
    return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
  }
  if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
    // While user keyboard layout determines the actual meaning of each
    // `keyCode` value, almost all function keys have a universal value.
    return reactlibgetEventKey__translateToKey[nativeEvent.keyCode] || 'Unidentified';
  }
  return '';
}

$m['react/lib/getEventKey'].exports = reactlibgetEventKey__getEventKey;
/*≠≠ node_modules/react/lib/getEventKey.js ≠≠*/

/*== node_modules/react/lib/SyntheticKeyboardEvent.js ==*/
$m['react/lib/SyntheticKeyboardEvent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticKeyboardEvent
 */


var reactlibSyntheticKeyboardEvent__SyntheticUIEvent = $m['react/lib/SyntheticUIEvent'].exports;

var reactlibSyntheticKeyboardEvent__getEventCharCode = $m['react/lib/getEventCharCode'].exports;
var reactlibSyntheticKeyboardEvent__getEventKey = $m['react/lib/getEventKey'].exports;
var reactlibSyntheticKeyboardEvent__getEventModifierState = $m['react/lib/getEventModifierState'].exports;

/**
 * @interface KeyboardEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var reactlibSyntheticKeyboardEvent__KeyboardEventInterface = {
  key: reactlibSyntheticKeyboardEvent__getEventKey,
  location: null,
  ctrlKey: null,
  shiftKey: null,
  altKey: null,
  metaKey: null,
  repeat: null,
  locale: null,
  getModifierState: reactlibSyntheticKeyboardEvent__getEventModifierState,
  // Legacy Interface
  charCode: function (event) {
    // `charCode` is the result of a KeyPress event and represents the value of
    // the actual printable character.

    // KeyPress is deprecated, but its replacement is not yet final and not
    // implemented in any major browser. Only KeyPress has charCode.
    if (event.type === 'keypress') {
      return reactlibSyntheticKeyboardEvent__getEventCharCode(event);
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
      return reactlibSyntheticKeyboardEvent__getEventCharCode(event);
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
function reactlibSyntheticKeyboardEvent__SyntheticKeyboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return reactlibSyntheticKeyboardEvent__SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

reactlibSyntheticKeyboardEvent__SyntheticUIEvent.augmentClass(reactlibSyntheticKeyboardEvent__SyntheticKeyboardEvent, reactlibSyntheticKeyboardEvent__KeyboardEventInterface);

$m['react/lib/SyntheticKeyboardEvent'].exports = reactlibSyntheticKeyboardEvent__SyntheticKeyboardEvent;
/*≠≠ node_modules/react/lib/SyntheticKeyboardEvent.js ≠≠*/

/*== node_modules/react/lib/SyntheticFocusEvent.js ==*/
$m['react/lib/SyntheticFocusEvent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticFocusEvent
 */


var reactlibSyntheticFocusEvent__SyntheticUIEvent = $m['react/lib/SyntheticUIEvent'].exports;

/**
 * @interface FocusEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var reactlibSyntheticFocusEvent__FocusEventInterface = {
  relatedTarget: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function reactlibSyntheticFocusEvent__SyntheticFocusEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return reactlibSyntheticFocusEvent__SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

reactlibSyntheticFocusEvent__SyntheticUIEvent.augmentClass(reactlibSyntheticFocusEvent__SyntheticFocusEvent, reactlibSyntheticFocusEvent__FocusEventInterface);

$m['react/lib/SyntheticFocusEvent'].exports = reactlibSyntheticFocusEvent__SyntheticFocusEvent;
/*≠≠ node_modules/react/lib/SyntheticFocusEvent.js ≠≠*/

/*== node_modules/react/lib/SyntheticClipboardEvent.js ==*/
$m['react/lib/SyntheticClipboardEvent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticClipboardEvent
 */


var reactlibSyntheticClipboardEvent__SyntheticEvent = $m['react/lib/SyntheticEvent'].exports;

/**
 * @interface Event
 * @see http://www.w3.org/TR/clipboard-apis/
 */
var reactlibSyntheticClipboardEvent__ClipboardEventInterface = {
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
function reactlibSyntheticClipboardEvent__SyntheticClipboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return reactlibSyntheticClipboardEvent__SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

reactlibSyntheticClipboardEvent__SyntheticEvent.augmentClass(reactlibSyntheticClipboardEvent__SyntheticClipboardEvent, reactlibSyntheticClipboardEvent__ClipboardEventInterface);

$m['react/lib/SyntheticClipboardEvent'].exports = reactlibSyntheticClipboardEvent__SyntheticClipboardEvent;
/*≠≠ node_modules/react/lib/SyntheticClipboardEvent.js ≠≠*/

/*== node_modules/react/lib/SyntheticAnimationEvent.js ==*/
$m['react/lib/SyntheticAnimationEvent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticAnimationEvent
 */


var reactlibSyntheticAnimationEvent__SyntheticEvent = $m['react/lib/SyntheticEvent'].exports;

/**
 * @interface Event
 * @see http://www.w3.org/TR/css3-animations/#AnimationEvent-interface
 * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent
 */
var reactlibSyntheticAnimationEvent__AnimationEventInterface = {
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
function reactlibSyntheticAnimationEvent__SyntheticAnimationEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return reactlibSyntheticAnimationEvent__SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

reactlibSyntheticAnimationEvent__SyntheticEvent.augmentClass(reactlibSyntheticAnimationEvent__SyntheticAnimationEvent, reactlibSyntheticAnimationEvent__AnimationEventInterface);

$m['react/lib/SyntheticAnimationEvent'].exports = reactlibSyntheticAnimationEvent__SyntheticAnimationEvent;
/*≠≠ node_modules/react/lib/SyntheticAnimationEvent.js ≠≠*/

/*== node_modules/react/lib/EventPropagators.js ==*/
$m['react/lib/EventPropagators'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPropagators
 */


var reactlibEventPropagators__EventConstants = $m['react/lib/EventConstants'].exports;
var reactlibEventPropagators__EventPluginHub = $m['react/lib/EventPluginHub'].exports;
var reactlibEventPropagators__EventPluginUtils = $m['react/lib/EventPluginUtils'].exports;

var reactlibEventPropagators__accumulateInto = $m['react/lib/accumulateInto'].exports;
var reactlibEventPropagators__forEachAccumulated = $m['react/lib/forEachAccumulated'].exports;
var reactlibEventPropagators__warning = $m['fbjs/lib/warning'].exports;

var reactlibEventPropagators__PropagationPhases = reactlibEventPropagators__EventConstants.PropagationPhases;
var reactlibEventPropagators__getListener = reactlibEventPropagators__EventPluginHub.getListener;

/**
 * Some event types have a notion of different registration names for different
 * "phases" of propagation. This finds listeners by a given phase.
 */
function reactlibEventPropagators__listenerAtPhase(inst, event, propagationPhase) {
  var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
  return reactlibEventPropagators__getListener(inst, registrationName);
}

/**
 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
 * here, allows us to not have to bind or create functions for each event.
 * Mutating the event's members allows us to not have to create a wrapping
 * "dispatch" object that pairs the event with the listener.
 */
function reactlibEventPropagators__accumulateDirectionalDispatches(inst, upwards, event) {
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== 'production' ? reactlibEventPropagators__warning(inst, 'Dispatching inst must not be null') : void 0;
  }
  var phase = upwards ? reactlibEventPropagators__PropagationPhases.bubbled : reactlibEventPropagators__PropagationPhases.captured;
  var listener = reactlibEventPropagators__listenerAtPhase(inst, event, phase);
  if (listener) {
    event._dispatchListeners = reactlibEventPropagators__accumulateInto(event._dispatchListeners, listener);
    event._dispatchInstances = reactlibEventPropagators__accumulateInto(event._dispatchInstances, inst);
  }
}

/**
 * Collect dispatches (must be entirely collected before dispatching - see unit
 * tests). Lazily allocate the array to conserve memory.  We must loop through
 * each event and perform the traversal for each one. We cannot perform a
 * single traversal for the entire collection of events because each event may
 * have a different target.
 */
function reactlibEventPropagators__accumulateTwoPhaseDispatchesSingle(event) {
  if (event && event.dispatchConfig.phasedRegistrationNames) {
    reactlibEventPropagators__EventPluginUtils.traverseTwoPhase(event._targetInst, reactlibEventPropagators__accumulateDirectionalDispatches, event);
  }
}

/**
 * Same as `accumulateTwoPhaseDispatchesSingle`, but skips over the targetID.
 */
function reactlibEventPropagators__accumulateTwoPhaseDispatchesSingleSkipTarget(event) {
  if (event && event.dispatchConfig.phasedRegistrationNames) {
    var targetInst = event._targetInst;
    var parentInst = targetInst ? reactlibEventPropagators__EventPluginUtils.getParentInstance(targetInst) : null;
    reactlibEventPropagators__EventPluginUtils.traverseTwoPhase(parentInst, reactlibEventPropagators__accumulateDirectionalDispatches, event);
  }
}

/**
 * Accumulates without regard to direction, does not look for phased
 * registration names. Same as `accumulateDirectDispatchesSingle` but without
 * requiring that the `dispatchMarker` be the same as the dispatched ID.
 */
function reactlibEventPropagators__accumulateDispatches(inst, ignoredDirection, event) {
  if (event && event.dispatchConfig.registrationName) {
    var registrationName = event.dispatchConfig.registrationName;
    var listener = reactlibEventPropagators__getListener(inst, registrationName);
    if (listener) {
      event._dispatchListeners = reactlibEventPropagators__accumulateInto(event._dispatchListeners, listener);
      event._dispatchInstances = reactlibEventPropagators__accumulateInto(event._dispatchInstances, inst);
    }
  }
}

/**
 * Accumulates dispatches on an `SyntheticEvent`, but only for the
 * `dispatchMarker`.
 * @param {SyntheticEvent} event
 */
function reactlibEventPropagators__accumulateDirectDispatchesSingle(event) {
  if (event && event.dispatchConfig.registrationName) {
    reactlibEventPropagators__accumulateDispatches(event._targetInst, null, event);
  }
}

function reactlibEventPropagators__accumulateTwoPhaseDispatches(events) {
  reactlibEventPropagators__forEachAccumulated(events, reactlibEventPropagators__accumulateTwoPhaseDispatchesSingle);
}

function reactlibEventPropagators__accumulateTwoPhaseDispatchesSkipTarget(events) {
  reactlibEventPropagators__forEachAccumulated(events, reactlibEventPropagators__accumulateTwoPhaseDispatchesSingleSkipTarget);
}

function reactlibEventPropagators__accumulateEnterLeaveDispatches(leave, enter, from, to) {
  reactlibEventPropagators__EventPluginUtils.traverseEnterLeave(from, to, reactlibEventPropagators__accumulateDispatches, leave, enter);
}

function reactlibEventPropagators__accumulateDirectDispatches(events) {
  reactlibEventPropagators__forEachAccumulated(events, reactlibEventPropagators__accumulateDirectDispatchesSingle);
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
var reactlibEventPropagators__EventPropagators = {
  accumulateTwoPhaseDispatches: reactlibEventPropagators__accumulateTwoPhaseDispatches,
  accumulateTwoPhaseDispatchesSkipTarget: reactlibEventPropagators__accumulateTwoPhaseDispatchesSkipTarget,
  accumulateDirectDispatches: reactlibEventPropagators__accumulateDirectDispatches,
  accumulateEnterLeaveDispatches: reactlibEventPropagators__accumulateEnterLeaveDispatches
};

$m['react/lib/EventPropagators'].exports = reactlibEventPropagators__EventPropagators;
/*≠≠ node_modules/react/lib/EventPropagators.js ≠≠*/

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
      if (process.env.NODE_ENV !== 'production') {
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

/*== node_modules/react/lib/SimpleEventPlugin.js ==*/
$m['react/lib/SimpleEventPlugin'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SimpleEventPlugin
 */


var reactlibSimpleEventPlugin___prodInvariant = $m['react/lib/reactProdInvariant'].exports;

var reactlibSimpleEventPlugin__EventConstants = $m['react/lib/EventConstants'].exports;
var reactlibSimpleEventPlugin__EventListener = $m['fbjs/lib/EventListener'].exports;
var reactlibSimpleEventPlugin__EventPropagators = $m['react/lib/EventPropagators'].exports;
var reactlibSimpleEventPlugin__ReactDOMComponentTree = $m['react/lib/ReactDOMComponentTree'].exports;
var reactlibSimpleEventPlugin__SyntheticAnimationEvent = $m['react/lib/SyntheticAnimationEvent'].exports;
var reactlibSimpleEventPlugin__SyntheticClipboardEvent = $m['react/lib/SyntheticClipboardEvent'].exports;
var reactlibSimpleEventPlugin__SyntheticEvent = $m['react/lib/SyntheticEvent'].exports;
var reactlibSimpleEventPlugin__SyntheticFocusEvent = $m['react/lib/SyntheticFocusEvent'].exports;
var reactlibSimpleEventPlugin__SyntheticKeyboardEvent = $m['react/lib/SyntheticKeyboardEvent'].exports;
var reactlibSimpleEventPlugin__SyntheticMouseEvent = $m['react/lib/SyntheticMouseEvent'].exports;
var reactlibSimpleEventPlugin__SyntheticDragEvent = $m['react/lib/SyntheticDragEvent'].exports;
var reactlibSimpleEventPlugin__SyntheticTouchEvent = $m['react/lib/SyntheticTouchEvent'].exports;
var reactlibSimpleEventPlugin__SyntheticTransitionEvent = $m['react/lib/SyntheticTransitionEvent'].exports;
var reactlibSimpleEventPlugin__SyntheticUIEvent = $m['react/lib/SyntheticUIEvent'].exports;
var reactlibSimpleEventPlugin__SyntheticWheelEvent = $m['react/lib/SyntheticWheelEvent'].exports;

var reactlibSimpleEventPlugin__emptyFunction = $m['fbjs/lib/emptyFunction'].exports;
var reactlibSimpleEventPlugin__getEventCharCode = $m['react/lib/getEventCharCode'].exports;
var reactlibSimpleEventPlugin__invariant = $m['fbjs/lib/invariant'].exports;
var reactlibSimpleEventPlugin__keyOf = $m['fbjs/lib/keyOf'].exports;

var reactlibSimpleEventPlugin__topLevelTypes = reactlibSimpleEventPlugin__EventConstants.topLevelTypes;

var reactlibSimpleEventPlugin__eventTypes = {
  abort: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onAbort: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onAbortCapture: true })
    }
  },
  animationEnd: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onAnimationEnd: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onAnimationEndCapture: true })
    }
  },
  animationIteration: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onAnimationIteration: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onAnimationIterationCapture: true })
    }
  },
  animationStart: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onAnimationStart: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onAnimationStartCapture: true })
    }
  },
  blur: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onBlur: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onBlurCapture: true })
    }
  },
  canPlay: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onCanPlay: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onCanPlayCapture: true })
    }
  },
  canPlayThrough: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onCanPlayThrough: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onCanPlayThroughCapture: true })
    }
  },
  click: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onClick: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onClickCapture: true })
    }
  },
  contextMenu: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onContextMenu: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onContextMenuCapture: true })
    }
  },
  copy: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onCopy: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onCopyCapture: true })
    }
  },
  cut: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onCut: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onCutCapture: true })
    }
  },
  doubleClick: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onDoubleClick: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onDoubleClickCapture: true })
    }
  },
  drag: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onDrag: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onDragCapture: true })
    }
  },
  dragEnd: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onDragEnd: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onDragEndCapture: true })
    }
  },
  dragEnter: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onDragEnter: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onDragEnterCapture: true })
    }
  },
  dragExit: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onDragExit: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onDragExitCapture: true })
    }
  },
  dragLeave: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onDragLeave: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onDragLeaveCapture: true })
    }
  },
  dragOver: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onDragOver: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onDragOverCapture: true })
    }
  },
  dragStart: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onDragStart: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onDragStartCapture: true })
    }
  },
  drop: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onDrop: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onDropCapture: true })
    }
  },
  durationChange: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onDurationChange: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onDurationChangeCapture: true })
    }
  },
  emptied: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onEmptied: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onEmptiedCapture: true })
    }
  },
  encrypted: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onEncrypted: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onEncryptedCapture: true })
    }
  },
  ended: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onEnded: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onEndedCapture: true })
    }
  },
  error: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onError: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onErrorCapture: true })
    }
  },
  focus: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onFocus: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onFocusCapture: true })
    }
  },
  input: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onInput: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onInputCapture: true })
    }
  },
  invalid: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onInvalid: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onInvalidCapture: true })
    }
  },
  keyDown: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onKeyDown: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onKeyDownCapture: true })
    }
  },
  keyPress: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onKeyPress: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onKeyPressCapture: true })
    }
  },
  keyUp: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onKeyUp: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onKeyUpCapture: true })
    }
  },
  load: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onLoad: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onLoadCapture: true })
    }
  },
  loadedData: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onLoadedData: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onLoadedDataCapture: true })
    }
  },
  loadedMetadata: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onLoadedMetadata: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onLoadedMetadataCapture: true })
    }
  },
  loadStart: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onLoadStart: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onLoadStartCapture: true })
    }
  },
  // Note: We do not allow listening to mouseOver events. Instead, use the
  // onMouseEnter/onMouseLeave created by `EnterLeaveEventPlugin`.
  mouseDown: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onMouseDown: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onMouseDownCapture: true })
    }
  },
  mouseMove: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onMouseMove: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onMouseMoveCapture: true })
    }
  },
  mouseOut: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onMouseOut: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onMouseOutCapture: true })
    }
  },
  mouseOver: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onMouseOver: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onMouseOverCapture: true })
    }
  },
  mouseUp: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onMouseUp: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onMouseUpCapture: true })
    }
  },
  paste: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onPaste: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onPasteCapture: true })
    }
  },
  pause: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onPause: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onPauseCapture: true })
    }
  },
  play: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onPlay: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onPlayCapture: true })
    }
  },
  playing: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onPlaying: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onPlayingCapture: true })
    }
  },
  progress: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onProgress: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onProgressCapture: true })
    }
  },
  rateChange: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onRateChange: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onRateChangeCapture: true })
    }
  },
  reset: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onReset: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onResetCapture: true })
    }
  },
  scroll: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onScroll: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onScrollCapture: true })
    }
  },
  seeked: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onSeeked: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onSeekedCapture: true })
    }
  },
  seeking: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onSeeking: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onSeekingCapture: true })
    }
  },
  stalled: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onStalled: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onStalledCapture: true })
    }
  },
  submit: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onSubmit: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onSubmitCapture: true })
    }
  },
  suspend: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onSuspend: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onSuspendCapture: true })
    }
  },
  timeUpdate: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onTimeUpdate: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onTimeUpdateCapture: true })
    }
  },
  touchCancel: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onTouchCancel: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onTouchCancelCapture: true })
    }
  },
  touchEnd: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onTouchEnd: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onTouchEndCapture: true })
    }
  },
  touchMove: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onTouchMove: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onTouchMoveCapture: true })
    }
  },
  touchStart: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onTouchStart: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onTouchStartCapture: true })
    }
  },
  transitionEnd: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onTransitionEnd: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onTransitionEndCapture: true })
    }
  },
  volumeChange: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onVolumeChange: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onVolumeChangeCapture: true })
    }
  },
  waiting: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onWaiting: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onWaitingCapture: true })
    }
  },
  wheel: {
    phasedRegistrationNames: {
      bubbled: reactlibSimpleEventPlugin__keyOf({ onWheel: true }),
      captured: reactlibSimpleEventPlugin__keyOf({ onWheelCapture: true })
    }
  }
};

var reactlibSimpleEventPlugin__topLevelEventsToDispatchConfig = {
  topAbort: reactlibSimpleEventPlugin__eventTypes.abort,
  topAnimationEnd: reactlibSimpleEventPlugin__eventTypes.animationEnd,
  topAnimationIteration: reactlibSimpleEventPlugin__eventTypes.animationIteration,
  topAnimationStart: reactlibSimpleEventPlugin__eventTypes.animationStart,
  topBlur: reactlibSimpleEventPlugin__eventTypes.blur,
  topCanPlay: reactlibSimpleEventPlugin__eventTypes.canPlay,
  topCanPlayThrough: reactlibSimpleEventPlugin__eventTypes.canPlayThrough,
  topClick: reactlibSimpleEventPlugin__eventTypes.click,
  topContextMenu: reactlibSimpleEventPlugin__eventTypes.contextMenu,
  topCopy: reactlibSimpleEventPlugin__eventTypes.copy,
  topCut: reactlibSimpleEventPlugin__eventTypes.cut,
  topDoubleClick: reactlibSimpleEventPlugin__eventTypes.doubleClick,
  topDrag: reactlibSimpleEventPlugin__eventTypes.drag,
  topDragEnd: reactlibSimpleEventPlugin__eventTypes.dragEnd,
  topDragEnter: reactlibSimpleEventPlugin__eventTypes.dragEnter,
  topDragExit: reactlibSimpleEventPlugin__eventTypes.dragExit,
  topDragLeave: reactlibSimpleEventPlugin__eventTypes.dragLeave,
  topDragOver: reactlibSimpleEventPlugin__eventTypes.dragOver,
  topDragStart: reactlibSimpleEventPlugin__eventTypes.dragStart,
  topDrop: reactlibSimpleEventPlugin__eventTypes.drop,
  topDurationChange: reactlibSimpleEventPlugin__eventTypes.durationChange,
  topEmptied: reactlibSimpleEventPlugin__eventTypes.emptied,
  topEncrypted: reactlibSimpleEventPlugin__eventTypes.encrypted,
  topEnded: reactlibSimpleEventPlugin__eventTypes.ended,
  topError: reactlibSimpleEventPlugin__eventTypes.error,
  topFocus: reactlibSimpleEventPlugin__eventTypes.focus,
  topInput: reactlibSimpleEventPlugin__eventTypes.input,
  topInvalid: reactlibSimpleEventPlugin__eventTypes.invalid,
  topKeyDown: reactlibSimpleEventPlugin__eventTypes.keyDown,
  topKeyPress: reactlibSimpleEventPlugin__eventTypes.keyPress,
  topKeyUp: reactlibSimpleEventPlugin__eventTypes.keyUp,
  topLoad: reactlibSimpleEventPlugin__eventTypes.load,
  topLoadedData: reactlibSimpleEventPlugin__eventTypes.loadedData,
  topLoadedMetadata: reactlibSimpleEventPlugin__eventTypes.loadedMetadata,
  topLoadStart: reactlibSimpleEventPlugin__eventTypes.loadStart,
  topMouseDown: reactlibSimpleEventPlugin__eventTypes.mouseDown,
  topMouseMove: reactlibSimpleEventPlugin__eventTypes.mouseMove,
  topMouseOut: reactlibSimpleEventPlugin__eventTypes.mouseOut,
  topMouseOver: reactlibSimpleEventPlugin__eventTypes.mouseOver,
  topMouseUp: reactlibSimpleEventPlugin__eventTypes.mouseUp,
  topPaste: reactlibSimpleEventPlugin__eventTypes.paste,
  topPause: reactlibSimpleEventPlugin__eventTypes.pause,
  topPlay: reactlibSimpleEventPlugin__eventTypes.play,
  topPlaying: reactlibSimpleEventPlugin__eventTypes.playing,
  topProgress: reactlibSimpleEventPlugin__eventTypes.progress,
  topRateChange: reactlibSimpleEventPlugin__eventTypes.rateChange,
  topReset: reactlibSimpleEventPlugin__eventTypes.reset,
  topScroll: reactlibSimpleEventPlugin__eventTypes.scroll,
  topSeeked: reactlibSimpleEventPlugin__eventTypes.seeked,
  topSeeking: reactlibSimpleEventPlugin__eventTypes.seeking,
  topStalled: reactlibSimpleEventPlugin__eventTypes.stalled,
  topSubmit: reactlibSimpleEventPlugin__eventTypes.submit,
  topSuspend: reactlibSimpleEventPlugin__eventTypes.suspend,
  topTimeUpdate: reactlibSimpleEventPlugin__eventTypes.timeUpdate,
  topTouchCancel: reactlibSimpleEventPlugin__eventTypes.touchCancel,
  topTouchEnd: reactlibSimpleEventPlugin__eventTypes.touchEnd,
  topTouchMove: reactlibSimpleEventPlugin__eventTypes.touchMove,
  topTouchStart: reactlibSimpleEventPlugin__eventTypes.touchStart,
  topTransitionEnd: reactlibSimpleEventPlugin__eventTypes.transitionEnd,
  topVolumeChange: reactlibSimpleEventPlugin__eventTypes.volumeChange,
  topWaiting: reactlibSimpleEventPlugin__eventTypes.waiting,
  topWheel: reactlibSimpleEventPlugin__eventTypes.wheel
};

for (var reactlibSimpleEventPlugin__type in reactlibSimpleEventPlugin__topLevelEventsToDispatchConfig) {
  reactlibSimpleEventPlugin__topLevelEventsToDispatchConfig[reactlibSimpleEventPlugin__type].dependencies = [reactlibSimpleEventPlugin__type];
}

var reactlibSimpleEventPlugin__ON_CLICK_KEY = reactlibSimpleEventPlugin__keyOf({ onClick: null });
var reactlibSimpleEventPlugin__onClickListeners = {};

function reactlibSimpleEventPlugin__getDictionaryKey(inst) {
  // Prevents V8 performance issue:
  // https://github.com/facebook/react/pull/7232
  return '.' + inst._rootNodeID;
}

var reactlibSimpleEventPlugin__SimpleEventPlugin = {

  eventTypes: reactlibSimpleEventPlugin__eventTypes,

  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    var dispatchConfig = reactlibSimpleEventPlugin__topLevelEventsToDispatchConfig[topLevelType];
    if (!dispatchConfig) {
      return null;
    }
    var EventConstructor;
    switch (topLevelType) {
      case reactlibSimpleEventPlugin__topLevelTypes.topAbort:
      case reactlibSimpleEventPlugin__topLevelTypes.topCanPlay:
      case reactlibSimpleEventPlugin__topLevelTypes.topCanPlayThrough:
      case reactlibSimpleEventPlugin__topLevelTypes.topDurationChange:
      case reactlibSimpleEventPlugin__topLevelTypes.topEmptied:
      case reactlibSimpleEventPlugin__topLevelTypes.topEncrypted:
      case reactlibSimpleEventPlugin__topLevelTypes.topEnded:
      case reactlibSimpleEventPlugin__topLevelTypes.topError:
      case reactlibSimpleEventPlugin__topLevelTypes.topInput:
      case reactlibSimpleEventPlugin__topLevelTypes.topInvalid:
      case reactlibSimpleEventPlugin__topLevelTypes.topLoad:
      case reactlibSimpleEventPlugin__topLevelTypes.topLoadedData:
      case reactlibSimpleEventPlugin__topLevelTypes.topLoadedMetadata:
      case reactlibSimpleEventPlugin__topLevelTypes.topLoadStart:
      case reactlibSimpleEventPlugin__topLevelTypes.topPause:
      case reactlibSimpleEventPlugin__topLevelTypes.topPlay:
      case reactlibSimpleEventPlugin__topLevelTypes.topPlaying:
      case reactlibSimpleEventPlugin__topLevelTypes.topProgress:
      case reactlibSimpleEventPlugin__topLevelTypes.topRateChange:
      case reactlibSimpleEventPlugin__topLevelTypes.topReset:
      case reactlibSimpleEventPlugin__topLevelTypes.topSeeked:
      case reactlibSimpleEventPlugin__topLevelTypes.topSeeking:
      case reactlibSimpleEventPlugin__topLevelTypes.topStalled:
      case reactlibSimpleEventPlugin__topLevelTypes.topSubmit:
      case reactlibSimpleEventPlugin__topLevelTypes.topSuspend:
      case reactlibSimpleEventPlugin__topLevelTypes.topTimeUpdate:
      case reactlibSimpleEventPlugin__topLevelTypes.topVolumeChange:
      case reactlibSimpleEventPlugin__topLevelTypes.topWaiting:
        // HTML Events
        // @see http://www.w3.org/TR/html5/index.html#events-0
        EventConstructor = reactlibSimpleEventPlugin__SyntheticEvent;
        break;
      case reactlibSimpleEventPlugin__topLevelTypes.topKeyPress:
        // Firefox creates a keypress event for function keys too. This removes
        // the unwanted keypress events. Enter is however both printable and
        // non-printable. One would expect Tab to be as well (but it isn't).
        if (reactlibSimpleEventPlugin__getEventCharCode(nativeEvent) === 0) {
          return null;
        }
      /* falls through */
      case reactlibSimpleEventPlugin__topLevelTypes.topKeyDown:
      case reactlibSimpleEventPlugin__topLevelTypes.topKeyUp:
        EventConstructor = reactlibSimpleEventPlugin__SyntheticKeyboardEvent;
        break;
      case reactlibSimpleEventPlugin__topLevelTypes.topBlur:
      case reactlibSimpleEventPlugin__topLevelTypes.topFocus:
        EventConstructor = reactlibSimpleEventPlugin__SyntheticFocusEvent;
        break;
      case reactlibSimpleEventPlugin__topLevelTypes.topClick:
        // Firefox creates a click event on right mouse clicks. This removes the
        // unwanted click events.
        if (nativeEvent.button === 2) {
          return null;
        }
      /* falls through */
      case reactlibSimpleEventPlugin__topLevelTypes.topContextMenu:
      case reactlibSimpleEventPlugin__topLevelTypes.topDoubleClick:
      case reactlibSimpleEventPlugin__topLevelTypes.topMouseDown:
      case reactlibSimpleEventPlugin__topLevelTypes.topMouseMove:
      case reactlibSimpleEventPlugin__topLevelTypes.topMouseOut:
      case reactlibSimpleEventPlugin__topLevelTypes.topMouseOver:
      case reactlibSimpleEventPlugin__topLevelTypes.topMouseUp:
        EventConstructor = reactlibSimpleEventPlugin__SyntheticMouseEvent;
        break;
      case reactlibSimpleEventPlugin__topLevelTypes.topDrag:
      case reactlibSimpleEventPlugin__topLevelTypes.topDragEnd:
      case reactlibSimpleEventPlugin__topLevelTypes.topDragEnter:
      case reactlibSimpleEventPlugin__topLevelTypes.topDragExit:
      case reactlibSimpleEventPlugin__topLevelTypes.topDragLeave:
      case reactlibSimpleEventPlugin__topLevelTypes.topDragOver:
      case reactlibSimpleEventPlugin__topLevelTypes.topDragStart:
      case reactlibSimpleEventPlugin__topLevelTypes.topDrop:
        EventConstructor = reactlibSimpleEventPlugin__SyntheticDragEvent;
        break;
      case reactlibSimpleEventPlugin__topLevelTypes.topTouchCancel:
      case reactlibSimpleEventPlugin__topLevelTypes.topTouchEnd:
      case reactlibSimpleEventPlugin__topLevelTypes.topTouchMove:
      case reactlibSimpleEventPlugin__topLevelTypes.topTouchStart:
        EventConstructor = reactlibSimpleEventPlugin__SyntheticTouchEvent;
        break;
      case reactlibSimpleEventPlugin__topLevelTypes.topAnimationEnd:
      case reactlibSimpleEventPlugin__topLevelTypes.topAnimationIteration:
      case reactlibSimpleEventPlugin__topLevelTypes.topAnimationStart:
        EventConstructor = reactlibSimpleEventPlugin__SyntheticAnimationEvent;
        break;
      case reactlibSimpleEventPlugin__topLevelTypes.topTransitionEnd:
        EventConstructor = reactlibSimpleEventPlugin__SyntheticTransitionEvent;
        break;
      case reactlibSimpleEventPlugin__topLevelTypes.topScroll:
        EventConstructor = reactlibSimpleEventPlugin__SyntheticUIEvent;
        break;
      case reactlibSimpleEventPlugin__topLevelTypes.topWheel:
        EventConstructor = reactlibSimpleEventPlugin__SyntheticWheelEvent;
        break;
      case reactlibSimpleEventPlugin__topLevelTypes.topCopy:
      case reactlibSimpleEventPlugin__topLevelTypes.topCut:
      case reactlibSimpleEventPlugin__topLevelTypes.topPaste:
        EventConstructor = reactlibSimpleEventPlugin__SyntheticClipboardEvent;
        break;
    }
    !EventConstructor ? process.env.NODE_ENV !== 'production' ? reactlibSimpleEventPlugin__invariant(false, 'SimpleEventPlugin: Unhandled event type, `%s`.', topLevelType) : reactlibSimpleEventPlugin___prodInvariant('86', topLevelType) : void 0;
    var event = EventConstructor.getPooled(dispatchConfig, targetInst, nativeEvent, nativeEventTarget);
    reactlibSimpleEventPlugin__EventPropagators.accumulateTwoPhaseDispatches(event);
    return event;
  },

  didPutListener: function (inst, registrationName, listener) {
    // Mobile Safari does not fire properly bubble click events on
    // non-interactive elements, which means delegated click listeners do not
    // fire. The workaround for this bug involves attaching an empty click
    // listener on the target node.
    if (registrationName === reactlibSimpleEventPlugin__ON_CLICK_KEY) {
      var key = reactlibSimpleEventPlugin__getDictionaryKey(inst);
      var node = reactlibSimpleEventPlugin__ReactDOMComponentTree.getNodeFromInstance(inst);
      if (!reactlibSimpleEventPlugin__onClickListeners[key]) {
        reactlibSimpleEventPlugin__onClickListeners[key] = reactlibSimpleEventPlugin__EventListener.listen(node, 'click', reactlibSimpleEventPlugin__emptyFunction);
      }
    }
  },

  willDeleteListener: function (inst, registrationName) {
    if (registrationName === reactlibSimpleEventPlugin__ON_CLICK_KEY) {
      var key = reactlibSimpleEventPlugin__getDictionaryKey(inst);
      reactlibSimpleEventPlugin__onClickListeners[key].remove();
      delete reactlibSimpleEventPlugin__onClickListeners[key];
    }
  }

};

$m['react/lib/SimpleEventPlugin'].exports = reactlibSimpleEventPlugin__SimpleEventPlugin;
/*≠≠ node_modules/react/lib/SimpleEventPlugin.js ≠≠*/

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

/*== node_modules/react/lib/getTextContentAccessor.js ==*/
$m['react/lib/getTextContentAccessor'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getTextContentAccessor
 */


var reactlibgetTextContentAccessor__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;

var reactlibgetTextContentAccessor__contentKey = null;

/**
 * Gets the key used to access text content on a DOM node.
 *
 * @return {?string} Key used to access text content.
 * @internal
 */
function reactlibgetTextContentAccessor__getTextContentAccessor() {
  if (!reactlibgetTextContentAccessor__contentKey && reactlibgetTextContentAccessor__ExecutionEnvironment.canUseDOM) {
    // Prefer textContent to innerText because many browsers support both but
    // SVG <text> elements don't support innerText even when <div> does.
    reactlibgetTextContentAccessor__contentKey = 'textContent' in document.documentElement ? 'textContent' : 'innerText';
  }
  return reactlibgetTextContentAccessor__contentKey;
}

$m['react/lib/getTextContentAccessor'].exports = reactlibgetTextContentAccessor__getTextContentAccessor;
/*≠≠ node_modules/react/lib/getTextContentAccessor.js ≠≠*/

/*== node_modules/react/lib/ReactDOMSelection.js ==*/
$m['react/lib/ReactDOMSelection'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMSelection
 */


var reactlibReactDOMSelection__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;

var reactlibReactDOMSelection__getNodeForCharacterOffset = $m['react/lib/getNodeForCharacterOffset'].exports;
var reactlibReactDOMSelection__getTextContentAccessor = $m['react/lib/getTextContentAccessor'].exports;

/**
 * While `isCollapsed` is available on the Selection object and `collapsed`
 * is available on the Range object, IE11 sometimes gets them wrong.
 * If the anchor/focus nodes and offsets are the same, the range is collapsed.
 */
function reactlibReactDOMSelection__isCollapsed(anchorNode, anchorOffset, focusNode, focusOffset) {
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
function reactlibReactDOMSelection__getIEOffsets(node) {
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
function reactlibReactDOMSelection__getModernOffsets(node) {
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
  var isSelectionCollapsed = reactlibReactDOMSelection__isCollapsed(selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset);

  var rangeLength = isSelectionCollapsed ? 0 : currentRange.toString().length;

  var tempRange = currentRange.cloneRange();
  tempRange.selectNodeContents(node);
  tempRange.setEnd(currentRange.startContainer, currentRange.startOffset);

  var isTempRangeCollapsed = reactlibReactDOMSelection__isCollapsed(tempRange.startContainer, tempRange.startOffset, tempRange.endContainer, tempRange.endOffset);

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
function reactlibReactDOMSelection__setIEOffsets(node, offsets) {
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
function reactlibReactDOMSelection__setModernOffsets(node, offsets) {
  if (!window.getSelection) {
    return;
  }

  var selection = window.getSelection();
  var length = node[reactlibReactDOMSelection__getTextContentAccessor()].length;
  var start = Math.min(offsets.start, length);
  var end = offsets.end === undefined ? start : Math.min(offsets.end, length);

  // IE 11 uses modern selection, but doesn't support the extend method.
  // Flip backward selections, so we can set with a single range.
  if (!selection.extend && start > end) {
    var temp = end;
    end = start;
    start = temp;
  }

  var startMarker = reactlibReactDOMSelection__getNodeForCharacterOffset(node, start);
  var endMarker = reactlibReactDOMSelection__getNodeForCharacterOffset(node, end);

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

var reactlibReactDOMSelection__useIEOffsets = reactlibReactDOMSelection__ExecutionEnvironment.canUseDOM && 'selection' in document && !('getSelection' in window);

var reactlibReactDOMSelection__ReactDOMSelection = {
  /**
   * @param {DOMElement} node
   */
  getOffsets: reactlibReactDOMSelection__useIEOffsets ? reactlibReactDOMSelection__getIEOffsets : reactlibReactDOMSelection__getModernOffsets,

  /**
   * @param {DOMElement|DOMTextNode} node
   * @param {object} offsets
   */
  setOffsets: reactlibReactDOMSelection__useIEOffsets ? reactlibReactDOMSelection__setIEOffsets : reactlibReactDOMSelection__setModernOffsets
};

$m['react/lib/ReactDOMSelection'].exports = reactlibReactDOMSelection__ReactDOMSelection;
/*≠≠ node_modules/react/lib/ReactDOMSelection.js ≠≠*/

/*== node_modules/react/lib/ReactInputSelection.js ==*/
$m['react/lib/ReactInputSelection'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInputSelection
 */


var reactlibReactInputSelection__ReactDOMSelection = $m['react/lib/ReactDOMSelection'].exports;

var reactlibReactInputSelection__containsNode = $m['fbjs/lib/containsNode'].exports;
var reactlibReactInputSelection__focusNode = $m['fbjs/lib/focusNode'].exports;
var reactlibReactInputSelection__getActiveElement = $m['fbjs/lib/getActiveElement'].exports;

function reactlibReactInputSelection__isInDocument(node) {
  return reactlibReactInputSelection__containsNode(document.documentElement, node);
}

/**
 * @ReactInputSelection: React input selection module. Based on Selection.js,
 * but modified to be suitable for react and has a couple of bug fixes (doesn't
 * assume buttons have range selections allowed).
 * Input selection module for React.
 */
var reactlibReactInputSelection__ReactInputSelection = {

  hasSelectionCapabilities: function (elem) {
    var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
    return nodeName && (nodeName === 'input' && elem.type === 'text' || nodeName === 'textarea' || elem.contentEditable === 'true');
  },

  getSelectionInformation: function () {
    var focusedElem = reactlibReactInputSelection__getActiveElement();
    return {
      focusedElem: focusedElem,
      selectionRange: reactlibReactInputSelection__ReactInputSelection.hasSelectionCapabilities(focusedElem) ? reactlibReactInputSelection__ReactInputSelection.getSelection(focusedElem) : null
    };
  },

  /**
   * @restoreSelection: If any selection information was potentially lost,
   * restore it. This is useful when performing operations that could remove dom
   * nodes and place them back in, resulting in focus being lost.
   */
  restoreSelection: function (priorSelectionInformation) {
    var curFocusedElem = reactlibReactInputSelection__getActiveElement();
    var priorFocusedElem = priorSelectionInformation.focusedElem;
    var priorSelectionRange = priorSelectionInformation.selectionRange;
    if (curFocusedElem !== priorFocusedElem && reactlibReactInputSelection__isInDocument(priorFocusedElem)) {
      if (reactlibReactInputSelection__ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)) {
        reactlibReactInputSelection__ReactInputSelection.setSelection(priorFocusedElem, priorSelectionRange);
      }
      reactlibReactInputSelection__focusNode(priorFocusedElem);
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
      selection = reactlibReactInputSelection__ReactDOMSelection.getOffsets(input);
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
      reactlibReactInputSelection__ReactDOMSelection.setOffsets(input, offsets);
    }
  }
};

$m['react/lib/ReactInputSelection'].exports = reactlibReactInputSelection__ReactInputSelection;
/*≠≠ node_modules/react/lib/ReactInputSelection.js ≠≠*/

/*== node_modules/react/lib/SelectEventPlugin.js ==*/
$m['react/lib/SelectEventPlugin'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SelectEventPlugin
 */


var reactlibSelectEventPlugin__EventConstants = $m['react/lib/EventConstants'].exports;
var reactlibSelectEventPlugin__EventPropagators = $m['react/lib/EventPropagators'].exports;
var reactlibSelectEventPlugin__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;
var reactlibSelectEventPlugin__ReactDOMComponentTree = $m['react/lib/ReactDOMComponentTree'].exports;
var reactlibSelectEventPlugin__ReactInputSelection = $m['react/lib/ReactInputSelection'].exports;
var reactlibSelectEventPlugin__SyntheticEvent = $m['react/lib/SyntheticEvent'].exports;

var reactlibSelectEventPlugin__getActiveElement = $m['fbjs/lib/getActiveElement'].exports;
var reactlibSelectEventPlugin__isTextInputElement = $m['react/lib/isTextInputElement'].exports;
var reactlibSelectEventPlugin__keyOf = $m['fbjs/lib/keyOf'].exports;
var reactlibSelectEventPlugin__shallowEqual = $m['fbjs/lib/shallowEqual'].exports;

var reactlibSelectEventPlugin__topLevelTypes = reactlibSelectEventPlugin__EventConstants.topLevelTypes;

var reactlibSelectEventPlugin__skipSelectionChangeEvent = reactlibSelectEventPlugin__ExecutionEnvironment.canUseDOM && 'documentMode' in document && document.documentMode <= 11;

var reactlibSelectEventPlugin__eventTypes = {
  select: {
    phasedRegistrationNames: {
      bubbled: reactlibSelectEventPlugin__keyOf({ onSelect: null }),
      captured: reactlibSelectEventPlugin__keyOf({ onSelectCapture: null })
    },
    dependencies: [reactlibSelectEventPlugin__topLevelTypes.topBlur, reactlibSelectEventPlugin__topLevelTypes.topContextMenu, reactlibSelectEventPlugin__topLevelTypes.topFocus, reactlibSelectEventPlugin__topLevelTypes.topKeyDown, reactlibSelectEventPlugin__topLevelTypes.topKeyUp, reactlibSelectEventPlugin__topLevelTypes.topMouseDown, reactlibSelectEventPlugin__topLevelTypes.topMouseUp, reactlibSelectEventPlugin__topLevelTypes.topSelectionChange]
  }
};

var reactlibSelectEventPlugin__activeElement = null;
var reactlibSelectEventPlugin__activeElementInst = null;
var reactlibSelectEventPlugin__lastSelection = null;
var reactlibSelectEventPlugin__mouseDown = false;

// Track whether a listener exists for this plugin. If none exist, we do
// not extract events. See #3639.
var reactlibSelectEventPlugin__hasListener = false;
var reactlibSelectEventPlugin__ON_SELECT_KEY = reactlibSelectEventPlugin__keyOf({ onSelect: null });

/**
 * Get an object which is a unique representation of the current selection.
 *
 * The return value will not be consistent across nodes or browsers, but
 * two identical selections on the same node will return identical objects.
 *
 * @param {DOMElement} node
 * @return {object}
 */
function reactlibSelectEventPlugin__getSelection(node) {
  if ('selectionStart' in node && reactlibSelectEventPlugin__ReactInputSelection.hasSelectionCapabilities(node)) {
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
function reactlibSelectEventPlugin__constructSelectEvent(nativeEvent, nativeEventTarget) {
  // Ensure we have the right element, and that the user is not dragging a
  // selection (this matches native `select` event behavior). In HTML5, select
  // fires only on input and textarea thus if there's no focused element we
  // won't dispatch.
  if (reactlibSelectEventPlugin__mouseDown || reactlibSelectEventPlugin__activeElement == null || reactlibSelectEventPlugin__activeElement !== reactlibSelectEventPlugin__getActiveElement()) {
    return null;
  }

  // Only fire when selection has actually changed.
  var currentSelection = reactlibSelectEventPlugin__getSelection(reactlibSelectEventPlugin__activeElement);
  if (!reactlibSelectEventPlugin__lastSelection || !reactlibSelectEventPlugin__shallowEqual(reactlibSelectEventPlugin__lastSelection, currentSelection)) {
    reactlibSelectEventPlugin__lastSelection = currentSelection;

    var syntheticEvent = reactlibSelectEventPlugin__SyntheticEvent.getPooled(reactlibSelectEventPlugin__eventTypes.select, reactlibSelectEventPlugin__activeElementInst, nativeEvent, nativeEventTarget);

    syntheticEvent.type = 'select';
    syntheticEvent.target = reactlibSelectEventPlugin__activeElement;

    reactlibSelectEventPlugin__EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);

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
var reactlibSelectEventPlugin__SelectEventPlugin = {

  eventTypes: reactlibSelectEventPlugin__eventTypes,

  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    if (!reactlibSelectEventPlugin__hasListener) {
      return null;
    }

    var targetNode = targetInst ? reactlibSelectEventPlugin__ReactDOMComponentTree.getNodeFromInstance(targetInst) : window;

    switch (topLevelType) {
      // Track the input node that has focus.
      case reactlibSelectEventPlugin__topLevelTypes.topFocus:
        if (reactlibSelectEventPlugin__isTextInputElement(targetNode) || targetNode.contentEditable === 'true') {
          reactlibSelectEventPlugin__activeElement = targetNode;
          reactlibSelectEventPlugin__activeElementInst = targetInst;
          reactlibSelectEventPlugin__lastSelection = null;
        }
        break;
      case reactlibSelectEventPlugin__topLevelTypes.topBlur:
        reactlibSelectEventPlugin__activeElement = null;
        reactlibSelectEventPlugin__activeElementInst = null;
        reactlibSelectEventPlugin__lastSelection = null;
        break;

      // Don't fire the event while the user is dragging. This matches the
      // semantics of the native select event.
      case reactlibSelectEventPlugin__topLevelTypes.topMouseDown:
        reactlibSelectEventPlugin__mouseDown = true;
        break;
      case reactlibSelectEventPlugin__topLevelTypes.topContextMenu:
      case reactlibSelectEventPlugin__topLevelTypes.topMouseUp:
        reactlibSelectEventPlugin__mouseDown = false;
        return reactlibSelectEventPlugin__constructSelectEvent(nativeEvent, nativeEventTarget);

      // Chrome and IE fire non-standard event when selection is changed (and
      // sometimes when it hasn't). IE's event fires out of order with respect
      // to key and input events on deletion, so we discard it.
      //
      // Firefox doesn't support selectionchange, so check selection status
      // after each key entry. The selection changes after keydown and before
      // keyup, but we check on keydown as well in the case of holding down a
      // key, when multiple keydown events are fired but only one keyup is.
      // This is also our approach for IE handling, for the reason above.
      case reactlibSelectEventPlugin__topLevelTypes.topSelectionChange:
        if (reactlibSelectEventPlugin__skipSelectionChangeEvent) {
          break;
        }
      // falls through
      case reactlibSelectEventPlugin__topLevelTypes.topKeyDown:
      case reactlibSelectEventPlugin__topLevelTypes.topKeyUp:
        return reactlibSelectEventPlugin__constructSelectEvent(nativeEvent, nativeEventTarget);
    }

    return null;
  },

  didPutListener: function (inst, registrationName, listener) {
    if (registrationName === reactlibSelectEventPlugin__ON_SELECT_KEY) {
      reactlibSelectEventPlugin__hasListener = true;
    }
  }
};

$m['react/lib/SelectEventPlugin'].exports = reactlibSelectEventPlugin__SelectEventPlugin;
/*≠≠ node_modules/react/lib/SelectEventPlugin.js ≠≠*/

/*== node_modules/react/lib/ReactReconcileTransaction.js ==*/
$m['react/lib/ReactReconcileTransaction'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactReconcileTransaction
 */


var reactlibReactReconcileTransaction___assign = $m['object-assign'].exports;

var reactlibReactReconcileTransaction__CallbackQueue = $m['react/lib/CallbackQueue'].exports;
var reactlibReactReconcileTransaction__PooledClass = $m['react/lib/PooledClass'].exports;
var reactlibReactReconcileTransaction__ReactBrowserEventEmitter = $m['react/lib/ReactBrowserEventEmitter'].exports;
var reactlibReactReconcileTransaction__ReactInputSelection = $m['react/lib/ReactInputSelection'].exports;
var reactlibReactReconcileTransaction__ReactInstrumentation = $m['react/lib/ReactInstrumentation'].exports;
var reactlibReactReconcileTransaction__Transaction = $m['react/lib/Transaction'].exports;
var reactlibReactReconcileTransaction__ReactUpdateQueue = $m['react/lib/ReactUpdateQueue'].exports;

/**
 * Ensures that, when possible, the selection range (currently selected text
 * input) is not disturbed by performing the transaction.
 */
var reactlibReactReconcileTransaction__SELECTION_RESTORATION = {
  /**
   * @return {Selection} Selection information.
   */
  initialize: reactlibReactReconcileTransaction__ReactInputSelection.getSelectionInformation,
  /**
   * @param {Selection} sel Selection information returned from `initialize`.
   */
  close: reactlibReactReconcileTransaction__ReactInputSelection.restoreSelection
};

/**
 * Suppresses events (blur/focus) that could be inadvertently dispatched due to
 * high level DOM manipulations (like temporarily removing a text input from the
 * DOM).
 */
var reactlibReactReconcileTransaction__EVENT_SUPPRESSION = {
  /**
   * @return {boolean} The enabled status of `ReactBrowserEventEmitter` before
   * the reconciliation.
   */
  initialize: function () {
    var currentlyEnabled = reactlibReactReconcileTransaction__ReactBrowserEventEmitter.isEnabled();
    reactlibReactReconcileTransaction__ReactBrowserEventEmitter.setEnabled(false);
    return currentlyEnabled;
  },

  /**
   * @param {boolean} previouslyEnabled Enabled status of
   *   `ReactBrowserEventEmitter` before the reconciliation occurred. `close`
   *   restores the previous value.
   */
  close: function (previouslyEnabled) {
    reactlibReactReconcileTransaction__ReactBrowserEventEmitter.setEnabled(previouslyEnabled);
  }
};

/**
 * Provides a queue for collecting `componentDidMount` and
 * `componentDidUpdate` callbacks during the transaction.
 */
var reactlibReactReconcileTransaction__ON_DOM_READY_QUEUEING = {
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
var reactlibReactReconcileTransaction__TRANSACTION_WRAPPERS = [reactlibReactReconcileTransaction__SELECTION_RESTORATION, reactlibReactReconcileTransaction__EVENT_SUPPRESSION, reactlibReactReconcileTransaction__ON_DOM_READY_QUEUEING];

if (process.env.NODE_ENV !== 'production') {
  reactlibReactReconcileTransaction__TRANSACTION_WRAPPERS.push({
    initialize: reactlibReactReconcileTransaction__ReactInstrumentation.debugTool.onBeginFlush,
    close: reactlibReactReconcileTransaction__ReactInstrumentation.debugTool.onEndFlush
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
function reactlibReactReconcileTransaction__ReactReconcileTransaction(useCreateElement) {
  this.reinitializeTransaction();
  // Only server-side rendering really needs this option (see
  // `ReactServerRendering`), but server-side uses
  // `ReactServerRenderingTransaction` instead. This option is here so that it's
  // accessible and defaults to false when `ReactDOMComponent` and
  // `ReactDOMTextComponent` checks it in `mountComponent`.`
  this.renderToStaticMarkup = false;
  this.reactMountReady = reactlibReactReconcileTransaction__CallbackQueue.getPooled(null);
  this.useCreateElement = useCreateElement;
}

var reactlibReactReconcileTransaction__Mixin = {
  /**
   * @see Transaction
   * @abstract
   * @final
   * @return {array<object>} List of operation wrap procedures.
   *   TODO: convert to array<TransactionWrapper>
   */
  getTransactionWrappers: function () {
    return reactlibReactReconcileTransaction__TRANSACTION_WRAPPERS;
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
    return reactlibReactReconcileTransaction__ReactUpdateQueue;
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
    reactlibReactReconcileTransaction__CallbackQueue.release(this.reactMountReady);
    this.reactMountReady = null;
  }
};

reactlibReactReconcileTransaction___assign(reactlibReactReconcileTransaction__ReactReconcileTransaction.prototype, reactlibReactReconcileTransaction__Transaction.Mixin, reactlibReactReconcileTransaction__Mixin);

reactlibReactReconcileTransaction__PooledClass.addPoolingTo(reactlibReactReconcileTransaction__ReactReconcileTransaction);

$m['react/lib/ReactReconcileTransaction'].exports = reactlibReactReconcileTransaction__ReactReconcileTransaction;
/*≠≠ node_modules/react/lib/ReactReconcileTransaction.js ≠≠*/

/*== node_modules/react/lib/ReactInjection.js ==*/
$m['react/lib/ReactInjection'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInjection
 */


var reactlibReactInjection__DOMProperty = $m['react/lib/DOMProperty'].exports;
var reactlibReactInjection__EventPluginHub = $m['react/lib/EventPluginHub'].exports;
var reactlibReactInjection__EventPluginUtils = $m['react/lib/EventPluginUtils'].exports;
var reactlibReactInjection__ReactComponentEnvironment = $m['react/lib/ReactComponentEnvironment'].exports;
var reactlibReactInjection__ReactClass = $m['react/lib/ReactClass'].exports;
var reactlibReactInjection__ReactEmptyComponent = $m['react/lib/ReactEmptyComponent'].exports;
var reactlibReactInjection__ReactBrowserEventEmitter = $m['react/lib/ReactBrowserEventEmitter'].exports;
var reactlibReactInjection__ReactHostComponent = $m['react/lib/ReactHostComponent'].exports;
var reactlibReactInjection__ReactUpdates = $m['react/lib/ReactUpdates'].exports;

var reactlibReactInjection__ReactInjection = {
  Component: reactlibReactInjection__ReactComponentEnvironment.injection,
  Class: reactlibReactInjection__ReactClass.injection,
  DOMProperty: reactlibReactInjection__DOMProperty.injection,
  EmptyComponent: reactlibReactInjection__ReactEmptyComponent.injection,
  EventPluginHub: reactlibReactInjection__EventPluginHub.injection,
  EventPluginUtils: reactlibReactInjection__EventPluginUtils.injection,
  EventEmitter: reactlibReactInjection__ReactBrowserEventEmitter.injection,
  HostComponent: reactlibReactInjection__ReactHostComponent.injection,
  Updates: reactlibReactInjection__ReactUpdates.injection
};

$m['react/lib/ReactInjection'].exports = reactlibReactInjection__ReactInjection;
/*≠≠ node_modules/react/lib/ReactInjection.js ≠≠*/

/*== node_modules/react/lib/ReactEventListener.js ==*/
$m['react/lib/ReactEventListener'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEventListener
 */


var reactlibReactEventListener___assign = $m['object-assign'].exports;

var reactlibReactEventListener__EventListener = $m['fbjs/lib/EventListener'].exports;
var reactlibReactEventListener__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;
var reactlibReactEventListener__PooledClass = $m['react/lib/PooledClass'].exports;
var reactlibReactEventListener__ReactDOMComponentTree = $m['react/lib/ReactDOMComponentTree'].exports;
var reactlibReactEventListener__ReactUpdates = $m['react/lib/ReactUpdates'].exports;

var reactlibReactEventListener__getEventTarget = $m['react/lib/getEventTarget'].exports;
var reactlibReactEventListener__getUnboundedScrollPosition = $m['fbjs/lib/getUnboundedScrollPosition'].exports;

/**
 * Find the deepest React component completely containing the root of the
 * passed-in instance (for use when entire React trees are nested within each
 * other). If React trees are not nested, returns null.
 */
function reactlibReactEventListener__findParent(inst) {
  // TODO: It may be a good idea to cache this to prevent unnecessary DOM
  // traversal, but caching is difficult to do correctly without using a
  // mutation observer to listen for all DOM changes.
  while (inst._hostParent) {
    inst = inst._hostParent;
  }
  var rootNode = reactlibReactEventListener__ReactDOMComponentTree.getNodeFromInstance(inst);
  var container = rootNode.parentNode;
  return reactlibReactEventListener__ReactDOMComponentTree.getClosestInstanceFromNode(container);
}

// Used to store ancestor hierarchy in top level callback
function reactlibReactEventListener__TopLevelCallbackBookKeeping(topLevelType, nativeEvent) {
  this.topLevelType = topLevelType;
  this.nativeEvent = nativeEvent;
  this.ancestors = [];
}
reactlibReactEventListener___assign(reactlibReactEventListener__TopLevelCallbackBookKeeping.prototype, {
  destructor: function () {
    this.topLevelType = null;
    this.nativeEvent = null;
    this.ancestors.length = 0;
  }
});
reactlibReactEventListener__PooledClass.addPoolingTo(reactlibReactEventListener__TopLevelCallbackBookKeeping, reactlibReactEventListener__PooledClass.twoArgumentPooler);

function reactlibReactEventListener__handleTopLevelImpl(bookKeeping) {
  var nativeEventTarget = reactlibReactEventListener__getEventTarget(bookKeeping.nativeEvent);
  var targetInst = reactlibReactEventListener__ReactDOMComponentTree.getClosestInstanceFromNode(nativeEventTarget);

  // Loop through the hierarchy, in case there's any nested components.
  // It's important that we build the array of ancestors before calling any
  // event handlers, because event handlers can modify the DOM, leading to
  // inconsistencies with ReactMount's node cache. See #1105.
  var ancestor = targetInst;
  do {
    bookKeeping.ancestors.push(ancestor);
    ancestor = ancestor && reactlibReactEventListener__findParent(ancestor);
  } while (ancestor);

  for (var i = 0; i < bookKeeping.ancestors.length; i++) {
    targetInst = bookKeeping.ancestors[i];
    reactlibReactEventListener__ReactEventListener._handleTopLevel(bookKeeping.topLevelType, targetInst, bookKeeping.nativeEvent, reactlibReactEventListener__getEventTarget(bookKeeping.nativeEvent));
  }
}

function reactlibReactEventListener__scrollValueMonitor(cb) {
  var scrollPosition = reactlibReactEventListener__getUnboundedScrollPosition(window);
  cb(scrollPosition);
}

var reactlibReactEventListener__ReactEventListener = {
  _enabled: true,
  _handleTopLevel: null,

  WINDOW_HANDLE: reactlibReactEventListener__ExecutionEnvironment.canUseDOM ? window : null,

  setHandleTopLevel: function (handleTopLevel) {
    reactlibReactEventListener__ReactEventListener._handleTopLevel = handleTopLevel;
  },

  setEnabled: function (enabled) {
    reactlibReactEventListener__ReactEventListener._enabled = !!enabled;
  },

  isEnabled: function () {
    return reactlibReactEventListener__ReactEventListener._enabled;
  },

  /**
   * Traps top-level events by using event bubbling.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {string} handlerBaseName Event name (e.g. "click").
   * @param {object} handle Element on which to attach listener.
   * @return {?object} An object with a remove function which will forcefully
   *                  remove the listener.
   * @internal
   */
  trapBubbledEvent: function (topLevelType, handlerBaseName, handle) {
    var element = handle;
    if (!element) {
      return null;
    }
    return reactlibReactEventListener__EventListener.listen(element, handlerBaseName, reactlibReactEventListener__ReactEventListener.dispatchEvent.bind(null, topLevelType));
  },

  /**
   * Traps a top-level event by using event capturing.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {string} handlerBaseName Event name (e.g. "click").
   * @param {object} handle Element on which to attach listener.
   * @return {?object} An object with a remove function which will forcefully
   *                  remove the listener.
   * @internal
   */
  trapCapturedEvent: function (topLevelType, handlerBaseName, handle) {
    var element = handle;
    if (!element) {
      return null;
    }
    return reactlibReactEventListener__EventListener.capture(element, handlerBaseName, reactlibReactEventListener__ReactEventListener.dispatchEvent.bind(null, topLevelType));
  },

  monitorScrollValue: function (refresh) {
    var callback = reactlibReactEventListener__scrollValueMonitor.bind(null, refresh);
    reactlibReactEventListener__EventListener.listen(window, 'scroll', callback);
  },

  dispatchEvent: function (topLevelType, nativeEvent) {
    if (!reactlibReactEventListener__ReactEventListener._enabled) {
      return;
    }

    var bookKeeping = reactlibReactEventListener__TopLevelCallbackBookKeeping.getPooled(topLevelType, nativeEvent);
    try {
      // Event queue being processed in the same cycle allows
      // `preventDefault`.
      reactlibReactEventListener__ReactUpdates.batchedUpdates(reactlibReactEventListener__handleTopLevelImpl, bookKeeping);
    } finally {
      reactlibReactEventListener__TopLevelCallbackBookKeeping.release(bookKeeping);
    }
  }
};

$m['react/lib/ReactEventListener'].exports = reactlibReactEventListener__ReactEventListener;
/*≠≠ node_modules/react/lib/ReactEventListener.js ≠≠*/

/*== node_modules/react/lib/ReactDefaultBatchingStrategy.js ==*/
$m['react/lib/ReactDefaultBatchingStrategy'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultBatchingStrategy
 */


var reactlibReactDefaultBatchingStrategy___assign = $m['object-assign'].exports;

var reactlibReactDefaultBatchingStrategy__ReactUpdates = $m['react/lib/ReactUpdates'].exports;
var reactlibReactDefaultBatchingStrategy__Transaction = $m['react/lib/Transaction'].exports;

var reactlibReactDefaultBatchingStrategy__emptyFunction = $m['fbjs/lib/emptyFunction'].exports;

var reactlibReactDefaultBatchingStrategy__RESET_BATCHED_UPDATES = {
  initialize: reactlibReactDefaultBatchingStrategy__emptyFunction,
  close: function () {
    reactlibReactDefaultBatchingStrategy__ReactDefaultBatchingStrategy.isBatchingUpdates = false;
  }
};

var reactlibReactDefaultBatchingStrategy__FLUSH_BATCHED_UPDATES = {
  initialize: reactlibReactDefaultBatchingStrategy__emptyFunction,
  close: reactlibReactDefaultBatchingStrategy__ReactUpdates.flushBatchedUpdates.bind(reactlibReactDefaultBatchingStrategy__ReactUpdates)
};

var reactlibReactDefaultBatchingStrategy__TRANSACTION_WRAPPERS = [reactlibReactDefaultBatchingStrategy__FLUSH_BATCHED_UPDATES, reactlibReactDefaultBatchingStrategy__RESET_BATCHED_UPDATES];

function reactlibReactDefaultBatchingStrategy__ReactDefaultBatchingStrategyTransaction() {
  this.reinitializeTransaction();
}

reactlibReactDefaultBatchingStrategy___assign(reactlibReactDefaultBatchingStrategy__ReactDefaultBatchingStrategyTransaction.prototype, reactlibReactDefaultBatchingStrategy__Transaction.Mixin, {
  getTransactionWrappers: function () {
    return reactlibReactDefaultBatchingStrategy__TRANSACTION_WRAPPERS;
  }
});

var reactlibReactDefaultBatchingStrategy__transaction = new reactlibReactDefaultBatchingStrategy__ReactDefaultBatchingStrategyTransaction();

var reactlibReactDefaultBatchingStrategy__ReactDefaultBatchingStrategy = {
  isBatchingUpdates: false,

  /**
   * Call the provided function in a context within which calls to `setState`
   * and friends are batched such that components aren't updated unnecessarily.
   */
  batchedUpdates: function (callback, a, b, c, d, e) {
    var alreadyBatchingUpdates = reactlibReactDefaultBatchingStrategy__ReactDefaultBatchingStrategy.isBatchingUpdates;

    reactlibReactDefaultBatchingStrategy__ReactDefaultBatchingStrategy.isBatchingUpdates = true;

    // The code is written this way to avoid extra allocations
    if (alreadyBatchingUpdates) {
      callback(a, b, c, d, e);
    } else {
      reactlibReactDefaultBatchingStrategy__transaction.perform(callback, null, a, b, c, d, e);
    }
  }
};

$m['react/lib/ReactDefaultBatchingStrategy'].exports = reactlibReactDefaultBatchingStrategy__ReactDefaultBatchingStrategy;
/*≠≠ node_modules/react/lib/ReactDefaultBatchingStrategy.js ≠≠*/

/*== node_modules/react/lib/ReactMultiChildUpdateTypes.js ==*/
$m['react/lib/ReactMultiChildUpdateTypes'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMultiChildUpdateTypes
 */


var reactlibReactMultiChildUpdateTypes__keyMirror = $m['fbjs/lib/keyMirror'].exports;

/**
 * When a component's children are updated, a series of update configuration
 * objects are created in order to batch and serialize the required changes.
 *
 * Enumerates all the possible types of update configurations.
 *
 * @internal
 */
var reactlibReactMultiChildUpdateTypes__ReactMultiChildUpdateTypes = reactlibReactMultiChildUpdateTypes__keyMirror({
  INSERT_MARKUP: null,
  MOVE_EXISTING: null,
  REMOVE_NODE: null,
  SET_MARKUP: null,
  TEXT_CONTENT: null
});

$m['react/lib/ReactMultiChildUpdateTypes'].exports = reactlibReactMultiChildUpdateTypes__ReactMultiChildUpdateTypes;
/*≠≠ node_modules/react/lib/ReactMultiChildUpdateTypes.js ≠≠*/

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
  !!!fbjslibgetMarkupWrap__dummyNode ? process.env.NODE_ENV !== 'production' ? fbjslibgetMarkupWrap__invariant(false, 'Markup wrapping node not initialized') : fbjslibgetMarkupWrap__invariant(false) : void 0;
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
  !(!Array.isArray(obj) && (typeof obj === 'object' || typeof obj === 'function')) ? process.env.NODE_ENV !== 'production' ? fbjslibcreateArrayFromMixed__invariant(false, 'toArray: Array-like object expected') : fbjslibcreateArrayFromMixed__invariant(false) : void 0;

  !(typeof length === 'number') ? process.env.NODE_ENV !== 'production' ? fbjslibcreateArrayFromMixed__invariant(false, 'toArray: Object needs a length property') : fbjslibcreateArrayFromMixed__invariant(false) : void 0;

  !(length === 0 || length - 1 in obj) ? process.env.NODE_ENV !== 'production' ? fbjslibcreateArrayFromMixed__invariant(false, 'toArray: Object should have keys for indices') : fbjslibcreateArrayFromMixed__invariant(false) : void 0;

  !(typeof obj.callee !== 'function') ? process.env.NODE_ENV !== 'production' ? fbjslibcreateArrayFromMixed__invariant(false, 'toArray: Object can\'t be `arguments`. Use rest params ' + '(function(...args) {}) or Array.from() instead.') : fbjslibcreateArrayFromMixed__invariant(false) : void 0;

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
  !!!fbjslibcreateNodesFromMarkup__dummyNode ? process.env.NODE_ENV !== 'production' ? fbjslibcreateNodesFromMarkup__invariant(false, 'createNodesFromMarkup dummy not initialized') : fbjslibcreateNodesFromMarkup__invariant(false) : void 0;
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
    !handleScript ? process.env.NODE_ENV !== 'production' ? fbjslibcreateNodesFromMarkup__invariant(false, 'createNodesFromMarkup(...): Unexpected <script> element rendered.') : fbjslibcreateNodesFromMarkup__invariant(false) : void 0;
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

/*== node_modules/react/lib/Danger.js ==*/
$m['react/lib/Danger'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Danger
 */


var reactlibDanger___prodInvariant = $m['react/lib/reactProdInvariant'].exports;

var reactlibDanger__DOMLazyTree = $m['react/lib/DOMLazyTree'].exports;
var reactlibDanger__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;

var reactlibDanger__createNodesFromMarkup = $m['fbjs/lib/createNodesFromMarkup'].exports;
var reactlibDanger__emptyFunction = $m['fbjs/lib/emptyFunction'].exports;
var reactlibDanger__invariant = $m['fbjs/lib/invariant'].exports;

var reactlibDanger__Danger = {

  /**
   * Replaces a node with a string of markup at its current position within its
   * parent. The markup must render into a single root node.
   *
   * @param {DOMElement} oldChild Child node to replace.
   * @param {string} markup Markup to render in place of the child node.
   * @internal
   */
  dangerouslyReplaceNodeWithMarkup: function (oldChild, markup) {
    !reactlibDanger__ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? reactlibDanger__invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a worker thread. Make sure `window` and `document` are available globally before requiring React when unit testing or use ReactDOMServer.renderToString() for server rendering.') : reactlibDanger___prodInvariant('56') : void 0;
    !markup ? process.env.NODE_ENV !== 'production' ? reactlibDanger__invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Missing markup.') : reactlibDanger___prodInvariant('57') : void 0;
    !(oldChild.nodeName !== 'HTML') ? process.env.NODE_ENV !== 'production' ? reactlibDanger__invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the <html> node. This is because browser quirks make this unreliable and/or slow. If you want to render to the root you must use server rendering. See ReactDOMServer.renderToString().') : reactlibDanger___prodInvariant('58') : void 0;

    if (typeof markup === 'string') {
      var newChild = reactlibDanger__createNodesFromMarkup(markup, reactlibDanger__emptyFunction)[0];
      oldChild.parentNode.replaceChild(newChild, oldChild);
    } else {
      reactlibDanger__DOMLazyTree.replaceChildWithTree(oldChild, markup);
    }
  }

};

$m['react/lib/Danger'].exports = reactlibDanger__Danger;
/*≠≠ node_modules/react/lib/Danger.js ≠≠*/

/*== node_modules/react/lib/DOMChildrenOperations.js ==*/
$m['react/lib/DOMChildrenOperations'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMChildrenOperations
 */


var reactlibDOMChildrenOperations__DOMLazyTree = $m['react/lib/DOMLazyTree'].exports;
var reactlibDOMChildrenOperations__Danger = $m['react/lib/Danger'].exports;
var reactlibDOMChildrenOperations__ReactMultiChildUpdateTypes = $m['react/lib/ReactMultiChildUpdateTypes'].exports;
var reactlibDOMChildrenOperations__ReactDOMComponentTree = $m['react/lib/ReactDOMComponentTree'].exports;
var reactlibDOMChildrenOperations__ReactInstrumentation = $m['react/lib/ReactInstrumentation'].exports;

var reactlibDOMChildrenOperations__createMicrosoftUnsafeLocalFunction = $m['react/lib/createMicrosoftUnsafeLocalFunction'].exports;
var reactlibDOMChildrenOperations__setInnerHTML = $m['react/lib/setInnerHTML'].exports;
var reactlibDOMChildrenOperations__setTextContent = $m['react/lib/setTextContent'].exports;

function reactlibDOMChildrenOperations__getNodeAfter(parentNode, node) {
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
var reactlibDOMChildrenOperations__insertChildAt = reactlibDOMChildrenOperations__createMicrosoftUnsafeLocalFunction(function (parentNode, childNode, referenceNode) {
  // We rely exclusively on `insertBefore(node, null)` instead of also using
  // `appendChild(node)`. (Using `undefined` is not allowed by all browsers so
  // we are careful to use `null`.)
  parentNode.insertBefore(childNode, referenceNode);
});

function reactlibDOMChildrenOperations__insertLazyTreeChildAt(parentNode, childTree, referenceNode) {
  reactlibDOMChildrenOperations__DOMLazyTree.insertTreeBefore(parentNode, childTree, referenceNode);
}

function reactlibDOMChildrenOperations__moveChild(parentNode, childNode, referenceNode) {
  if (Array.isArray(childNode)) {
    reactlibDOMChildrenOperations__moveDelimitedText(parentNode, childNode[0], childNode[1], referenceNode);
  } else {
    reactlibDOMChildrenOperations__insertChildAt(parentNode, childNode, referenceNode);
  }
}

function reactlibDOMChildrenOperations__removeChild(parentNode, childNode) {
  if (Array.isArray(childNode)) {
    var closingComment = childNode[1];
    childNode = childNode[0];
    reactlibDOMChildrenOperations__removeDelimitedText(parentNode, childNode, closingComment);
    parentNode.removeChild(closingComment);
  }
  parentNode.removeChild(childNode);
}

function reactlibDOMChildrenOperations__moveDelimitedText(parentNode, openingComment, closingComment, referenceNode) {
  var node = openingComment;
  while (true) {
    var nextNode = node.nextSibling;
    reactlibDOMChildrenOperations__insertChildAt(parentNode, node, referenceNode);
    if (node === closingComment) {
      break;
    }
    node = nextNode;
  }
}

function reactlibDOMChildrenOperations__removeDelimitedText(parentNode, startNode, closingComment) {
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

function reactlibDOMChildrenOperations__replaceDelimitedText(openingComment, closingComment, stringText) {
  var parentNode = openingComment.parentNode;
  var nodeAfterComment = openingComment.nextSibling;
  if (nodeAfterComment === closingComment) {
    // There are no text nodes between the opening and closing comments; insert
    // a new one if stringText isn't empty.
    if (stringText) {
      reactlibDOMChildrenOperations__insertChildAt(parentNode, document.createTextNode(stringText), nodeAfterComment);
    }
  } else {
    if (stringText) {
      // Set the text content of the first node after the opening comment, and
      // remove all following nodes up until the closing comment.
      reactlibDOMChildrenOperations__setTextContent(nodeAfterComment, stringText);
      reactlibDOMChildrenOperations__removeDelimitedText(parentNode, nodeAfterComment, closingComment);
    } else {
      reactlibDOMChildrenOperations__removeDelimitedText(parentNode, openingComment, closingComment);
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    reactlibDOMChildrenOperations__ReactInstrumentation.debugTool.onHostOperation(reactlibDOMChildrenOperations__ReactDOMComponentTree.getInstanceFromNode(openingComment)._debugID, 'replace text', stringText);
  }
}

var reactlibDOMChildrenOperations__dangerouslyReplaceNodeWithMarkup = reactlibDOMChildrenOperations__Danger.dangerouslyReplaceNodeWithMarkup;
if (process.env.NODE_ENV !== 'production') {
  reactlibDOMChildrenOperations__dangerouslyReplaceNodeWithMarkup = function (oldChild, markup, prevInstance) {
    reactlibDOMChildrenOperations__Danger.dangerouslyReplaceNodeWithMarkup(oldChild, markup);
    if (prevInstance._debugID !== 0) {
      reactlibDOMChildrenOperations__ReactInstrumentation.debugTool.onHostOperation(prevInstance._debugID, 'replace with', markup.toString());
    } else {
      var nextInstance = reactlibDOMChildrenOperations__ReactDOMComponentTree.getInstanceFromNode(markup.node);
      if (nextInstance._debugID !== 0) {
        reactlibDOMChildrenOperations__ReactInstrumentation.debugTool.onHostOperation(nextInstance._debugID, 'mount', markup.toString());
      }
    }
  };
}

/**
 * Operations for updating with DOM children.
 */
var reactlibDOMChildrenOperations__DOMChildrenOperations = {

  dangerouslyReplaceNodeWithMarkup: reactlibDOMChildrenOperations__dangerouslyReplaceNodeWithMarkup,

  replaceDelimitedText: reactlibDOMChildrenOperations__replaceDelimitedText,

  /**
   * Updates a component's children by processing a series of updates. The
   * update configurations are each expected to have a `parentNode` property.
   *
   * @param {array<object>} updates List of update configurations.
   * @internal
   */
  processUpdates: function (parentNode, updates) {
    if (process.env.NODE_ENV !== 'production') {
      var parentNodeDebugID = reactlibDOMChildrenOperations__ReactDOMComponentTree.getInstanceFromNode(parentNode)._debugID;
    }

    for (var k = 0; k < updates.length; k++) {
      var update = updates[k];
      switch (update.type) {
        case reactlibDOMChildrenOperations__ReactMultiChildUpdateTypes.INSERT_MARKUP:
          reactlibDOMChildrenOperations__insertLazyTreeChildAt(parentNode, update.content, reactlibDOMChildrenOperations__getNodeAfter(parentNode, update.afterNode));
          if (process.env.NODE_ENV !== 'production') {
            reactlibDOMChildrenOperations__ReactInstrumentation.debugTool.onHostOperation(parentNodeDebugID, 'insert child', { toIndex: update.toIndex, content: update.content.toString() });
          }
          break;
        case reactlibDOMChildrenOperations__ReactMultiChildUpdateTypes.MOVE_EXISTING:
          reactlibDOMChildrenOperations__moveChild(parentNode, update.fromNode, reactlibDOMChildrenOperations__getNodeAfter(parentNode, update.afterNode));
          if (process.env.NODE_ENV !== 'production') {
            reactlibDOMChildrenOperations__ReactInstrumentation.debugTool.onHostOperation(parentNodeDebugID, 'move child', { fromIndex: update.fromIndex, toIndex: update.toIndex });
          }
          break;
        case reactlibDOMChildrenOperations__ReactMultiChildUpdateTypes.SET_MARKUP:
          reactlibDOMChildrenOperations__setInnerHTML(parentNode, update.content);
          if (process.env.NODE_ENV !== 'production') {
            reactlibDOMChildrenOperations__ReactInstrumentation.debugTool.onHostOperation(parentNodeDebugID, 'replace children', update.content.toString());
          }
          break;
        case reactlibDOMChildrenOperations__ReactMultiChildUpdateTypes.TEXT_CONTENT:
          reactlibDOMChildrenOperations__setTextContent(parentNode, update.content);
          if (process.env.NODE_ENV !== 'production') {
            reactlibDOMChildrenOperations__ReactInstrumentation.debugTool.onHostOperation(parentNodeDebugID, 'replace text', update.content.toString());
          }
          break;
        case reactlibDOMChildrenOperations__ReactMultiChildUpdateTypes.REMOVE_NODE:
          reactlibDOMChildrenOperations__removeChild(parentNode, update.fromNode);
          if (process.env.NODE_ENV !== 'production') {
            reactlibDOMChildrenOperations__ReactInstrumentation.debugTool.onHostOperation(parentNodeDebugID, 'remove child', { fromIndex: update.fromIndex });
          }
          break;
      }
    }
  }

};

$m['react/lib/DOMChildrenOperations'].exports = reactlibDOMChildrenOperations__DOMChildrenOperations;
/*≠≠ node_modules/react/lib/DOMChildrenOperations.js ≠≠*/

/*== node_modules/react/lib/ReactDOMTextComponent.js ==*/
$m['react/lib/ReactDOMTextComponent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMTextComponent
 */


var reactlibReactDOMTextComponent___prodInvariant = $m['react/lib/reactProdInvariant'].exports,
    reactlibReactDOMTextComponent___assign = $m['object-assign'].exports;

var reactlibReactDOMTextComponent__DOMChildrenOperations = $m['react/lib/DOMChildrenOperations'].exports;
var reactlibReactDOMTextComponent__DOMLazyTree = $m['react/lib/DOMLazyTree'].exports;
var reactlibReactDOMTextComponent__ReactDOMComponentTree = $m['react/lib/ReactDOMComponentTree'].exports;

var reactlibReactDOMTextComponent__escapeTextContentForBrowser = $m['react/lib/escapeTextContentForBrowser'].exports;
var reactlibReactDOMTextComponent__invariant = $m['fbjs/lib/invariant'].exports;
var reactlibReactDOMTextComponent__validateDOMNesting = $m['react/lib/validateDOMNesting'].exports;

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
var reactlibReactDOMTextComponent__ReactDOMTextComponent = function (text) {
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

reactlibReactDOMTextComponent___assign(reactlibReactDOMTextComponent__ReactDOMTextComponent.prototype, {

  /**
   * Creates the markup for this text node. This node is not intended to have
   * any features besides containing text content.
   *
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @return {string} Markup for this text node.
   * @internal
   */
  mountComponent: function (transaction, hostParent, hostContainerInfo, context) {
    if (process.env.NODE_ENV !== 'production') {
      var parentInfo;
      if (hostParent != null) {
        parentInfo = hostParent._ancestorInfo;
      } else if (hostContainerInfo != null) {
        parentInfo = hostContainerInfo._ancestorInfo;
      }
      if (parentInfo) {
        // parentInfo should always be present except for the top-level
        // component when server rendering
        reactlibReactDOMTextComponent__validateDOMNesting(null, this._stringText, this, parentInfo);
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
      var lazyTree = reactlibReactDOMTextComponent__DOMLazyTree(ownerDocument.createDocumentFragment());
      reactlibReactDOMTextComponent__DOMLazyTree.queueChild(lazyTree, reactlibReactDOMTextComponent__DOMLazyTree(openingComment));
      if (this._stringText) {
        reactlibReactDOMTextComponent__DOMLazyTree.queueChild(lazyTree, reactlibReactDOMTextComponent__DOMLazyTree(ownerDocument.createTextNode(this._stringText)));
      }
      reactlibReactDOMTextComponent__DOMLazyTree.queueChild(lazyTree, reactlibReactDOMTextComponent__DOMLazyTree(closingComment));
      reactlibReactDOMTextComponent__ReactDOMComponentTree.precacheNode(this, openingComment);
      this._closingComment = closingComment;
      return lazyTree;
    } else {
      var escapedText = reactlibReactDOMTextComponent__escapeTextContentForBrowser(this._stringText);

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
        reactlibReactDOMTextComponent__DOMChildrenOperations.replaceDelimitedText(commentNodes[0], commentNodes[1], nextStringText);
      }
    }
  },

  getHostNode: function () {
    var hostNode = this._commentNodes;
    if (hostNode) {
      return hostNode;
    }
    if (!this._closingComment) {
      var openingComment = reactlibReactDOMTextComponent__ReactDOMComponentTree.getNodeFromInstance(this);
      var node = openingComment.nextSibling;
      while (true) {
        !(node != null) ? process.env.NODE_ENV !== 'production' ? reactlibReactDOMTextComponent__invariant(false, 'Missing closing comment for text component %s', this._domID) : reactlibReactDOMTextComponent___prodInvariant('67', this._domID) : void 0;
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
    reactlibReactDOMTextComponent__ReactDOMComponentTree.uncacheNode(this);
  }

});

$m['react/lib/ReactDOMTextComponent'].exports = reactlibReactDOMTextComponent__ReactDOMTextComponent;
/*≠≠ node_modules/react/lib/ReactDOMTextComponent.js ≠≠*/

/*== node_modules/react/lib/ReactDOMTreeTraversal.js ==*/
$m['react/lib/ReactDOMTreeTraversal'] = { exports: {} };
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMTreeTraversal
 */


var reactlibReactDOMTreeTraversal___prodInvariant = $m['react/lib/reactProdInvariant'].exports;

var reactlibReactDOMTreeTraversal__invariant = $m['fbjs/lib/invariant'].exports;

/**
 * Return the lowest common ancestor of A and B, or null if they are in
 * different trees.
 */
function reactlibReactDOMTreeTraversal__getLowestCommonAncestor(instA, instB) {
  !('_hostNode' in instA) ? process.env.NODE_ENV !== 'production' ? reactlibReactDOMTreeTraversal__invariant(false, 'getNodeFromInstance: Invalid argument.') : reactlibReactDOMTreeTraversal___prodInvariant('33') : void 0;
  !('_hostNode' in instB) ? process.env.NODE_ENV !== 'production' ? reactlibReactDOMTreeTraversal__invariant(false, 'getNodeFromInstance: Invalid argument.') : reactlibReactDOMTreeTraversal___prodInvariant('33') : void 0;

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
function reactlibReactDOMTreeTraversal__isAncestor(instA, instB) {
  !('_hostNode' in instA) ? process.env.NODE_ENV !== 'production' ? reactlibReactDOMTreeTraversal__invariant(false, 'isAncestor: Invalid argument.') : reactlibReactDOMTreeTraversal___prodInvariant('35') : void 0;
  !('_hostNode' in instB) ? process.env.NODE_ENV !== 'production' ? reactlibReactDOMTreeTraversal__invariant(false, 'isAncestor: Invalid argument.') : reactlibReactDOMTreeTraversal___prodInvariant('35') : void 0;

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
function reactlibReactDOMTreeTraversal__getParentInstance(inst) {
  !('_hostNode' in inst) ? process.env.NODE_ENV !== 'production' ? reactlibReactDOMTreeTraversal__invariant(false, 'getParentInstance: Invalid argument.') : reactlibReactDOMTreeTraversal___prodInvariant('36') : void 0;

  return inst._hostParent;
}

/**
 * Simulates the traversal of a two-phase, capture/bubble event dispatch.
 */
function reactlibReactDOMTreeTraversal__traverseTwoPhase(inst, fn, arg) {
  var path = [];
  while (inst) {
    path.push(inst);
    inst = inst._hostParent;
  }
  var i;
  for (i = path.length; i-- > 0;) {
    fn(path[i], false, arg);
  }
  for (i = 0; i < path.length; i++) {
    fn(path[i], true, arg);
  }
}

/**
 * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
 * should would receive a `mouseEnter` or `mouseLeave` event.
 *
 * Does not invoke the callback on the nearest common ancestor because nothing
 * "entered" or "left" that element.
 */
function reactlibReactDOMTreeTraversal__traverseEnterLeave(from, to, fn, argFrom, argTo) {
  var common = from && to ? reactlibReactDOMTreeTraversal__getLowestCommonAncestor(from, to) : null;
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
    fn(pathFrom[i], true, argFrom);
  }
  for (i = pathTo.length; i-- > 0;) {
    fn(pathTo[i], false, argTo);
  }
}

$m['react/lib/ReactDOMTreeTraversal'].exports = {
  isAncestor: reactlibReactDOMTreeTraversal__isAncestor,
  getLowestCommonAncestor: reactlibReactDOMTreeTraversal__getLowestCommonAncestor,
  getParentInstance: reactlibReactDOMTreeTraversal__getParentInstance,
  traverseTwoPhase: reactlibReactDOMTreeTraversal__traverseTwoPhase,
  traverseEnterLeave: reactlibReactDOMTreeTraversal__traverseEnterLeave
};
/*≠≠ node_modules/react/lib/ReactDOMTreeTraversal.js ≠≠*/

/*== node_modules/react/lib/ReactDOMEmptyComponent.js ==*/
$m['react/lib/ReactDOMEmptyComponent'] = { exports: {} };
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMEmptyComponent
 */


var reactlibReactDOMEmptyComponent___assign = $m['object-assign'].exports;

var reactlibReactDOMEmptyComponent__DOMLazyTree = $m['react/lib/DOMLazyTree'].exports;
var reactlibReactDOMEmptyComponent__ReactDOMComponentTree = $m['react/lib/ReactDOMComponentTree'].exports;

var reactlibReactDOMEmptyComponent__ReactDOMEmptyComponent = function (instantiate) {
  // ReactCompositeComponent uses this:
  this._currentElement = null;
  // ReactDOMComponentTree uses these:
  this._hostNode = null;
  this._hostParent = null;
  this._hostContainerInfo = null;
  this._domID = 0;
};
reactlibReactDOMEmptyComponent___assign(reactlibReactDOMEmptyComponent__ReactDOMEmptyComponent.prototype, {
  mountComponent: function (transaction, hostParent, hostContainerInfo, context) {
    var domID = hostContainerInfo._idCounter++;
    this._domID = domID;
    this._hostParent = hostParent;
    this._hostContainerInfo = hostContainerInfo;

    var nodeValue = ' react-empty: ' + this._domID + ' ';
    if (transaction.useCreateElement) {
      var ownerDocument = hostContainerInfo._ownerDocument;
      var node = ownerDocument.createComment(nodeValue);
      reactlibReactDOMEmptyComponent__ReactDOMComponentTree.precacheNode(this, node);
      return reactlibReactDOMEmptyComponent__DOMLazyTree(node);
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
    return reactlibReactDOMEmptyComponent__ReactDOMComponentTree.getNodeFromInstance(this);
  },
  unmountComponent: function () {
    reactlibReactDOMEmptyComponent__ReactDOMComponentTree.uncacheNode(this);
  }
});

$m['react/lib/ReactDOMEmptyComponent'].exports = reactlibReactDOMEmptyComponent__ReactDOMEmptyComponent;
/*≠≠ node_modules/react/lib/ReactDOMEmptyComponent.js ≠≠*/

/*== node_modules/react/lib/ReactServerUpdateQueue.js ==*/
$m['react/lib/ReactServerUpdateQueue'] = { exports: {} };
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactServerUpdateQueue
 * 
 */


function reactlibReactServerUpdateQueue___classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var reactlibReactServerUpdateQueue__ReactUpdateQueue = $m['react/lib/ReactUpdateQueue'].exports;
var reactlibReactServerUpdateQueue__Transaction = $m['react/lib/Transaction'].exports;
var reactlibReactServerUpdateQueue__warning = $m['fbjs/lib/warning'].exports;

function reactlibReactServerUpdateQueue__warnNoop(publicInstance, callerName) {
  if (process.env.NODE_ENV !== 'production') {
    var constructor = publicInstance.constructor;
    process.env.NODE_ENV !== 'production' ? reactlibReactServerUpdateQueue__warning(false, '%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
  }
}

/**
 * This is the update queue used for server rendering.
 * It delegates to ReactUpdateQueue while server rendering is in progress and
 * switches to ReactNoopUpdateQueue after the transaction has completed.
 * @class ReactServerUpdateQueue
 * @param {Transaction} transaction
 */

var reactlibReactServerUpdateQueue__ReactServerUpdateQueue = function () {
  /* :: transaction: Transaction; */

  function ReactServerUpdateQueue(transaction) {
    reactlibReactServerUpdateQueue___classCallCheck(this, ReactServerUpdateQueue);

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
      reactlibReactServerUpdateQueue__ReactUpdateQueue.enqueueCallback(publicInstance, callback, callerName);
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
      reactlibReactServerUpdateQueue__ReactUpdateQueue.enqueueForceUpdate(publicInstance);
    } else {
      reactlibReactServerUpdateQueue__warnNoop(publicInstance, 'forceUpdate');
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
      reactlibReactServerUpdateQueue__ReactUpdateQueue.enqueueReplaceState(publicInstance, completeState);
    } else {
      reactlibReactServerUpdateQueue__warnNoop(publicInstance, 'replaceState');
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
      reactlibReactServerUpdateQueue__ReactUpdateQueue.enqueueSetState(publicInstance, partialState);
    } else {
      reactlibReactServerUpdateQueue__warnNoop(publicInstance, 'setState');
    }
  };

  return ReactServerUpdateQueue;
}();

$m['react/lib/ReactServerUpdateQueue'].exports = reactlibReactServerUpdateQueue__ReactServerUpdateQueue;
/*≠≠ node_modules/react/lib/ReactServerUpdateQueue.js ≠≠*/

/*== node_modules/react/lib/ReactServerRenderingTransaction.js ==*/
$m['react/lib/ReactServerRenderingTransaction'] = { exports: {} };
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactServerRenderingTransaction
 */


var reactlibReactServerRenderingTransaction___assign = $m['object-assign'].exports;

var reactlibReactServerRenderingTransaction__PooledClass = $m['react/lib/PooledClass'].exports;
var reactlibReactServerRenderingTransaction__Transaction = $m['react/lib/Transaction'].exports;
var reactlibReactServerRenderingTransaction__ReactInstrumentation = $m['react/lib/ReactInstrumentation'].exports;
var reactlibReactServerRenderingTransaction__ReactServerUpdateQueue = $m['react/lib/ReactServerUpdateQueue'].exports;

/**
 * Executed within the scope of the `Transaction` instance. Consider these as
 * being member methods, but with an implied ordering while being isolated from
 * each other.
 */
var reactlibReactServerRenderingTransaction__TRANSACTION_WRAPPERS = [];

if (process.env.NODE_ENV !== 'production') {
  reactlibReactServerRenderingTransaction__TRANSACTION_WRAPPERS.push({
    initialize: reactlibReactServerRenderingTransaction__ReactInstrumentation.debugTool.onBeginFlush,
    close: reactlibReactServerRenderingTransaction__ReactInstrumentation.debugTool.onEndFlush
  });
}

var reactlibReactServerRenderingTransaction__noopCallbackQueue = {
  enqueue: function () {}
};

/**
 * @class ReactServerRenderingTransaction
 * @param {boolean} renderToStaticMarkup
 */
function reactlibReactServerRenderingTransaction__ReactServerRenderingTransaction(renderToStaticMarkup) {
  this.reinitializeTransaction();
  this.renderToStaticMarkup = renderToStaticMarkup;
  this.useCreateElement = false;
  this.updateQueue = new reactlibReactServerRenderingTransaction__ReactServerUpdateQueue(this);
}

var reactlibReactServerRenderingTransaction__Mixin = {
  /**
   * @see Transaction
   * @abstract
   * @final
   * @return {array} Empty list of operation wrap procedures.
   */
  getTransactionWrappers: function () {
    return reactlibReactServerRenderingTransaction__TRANSACTION_WRAPPERS;
  },

  /**
   * @return {object} The queue to collect `onDOMReady` callbacks with.
   */
  getReactMountReady: function () {
    return reactlibReactServerRenderingTransaction__noopCallbackQueue;
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

reactlibReactServerRenderingTransaction___assign(reactlibReactServerRenderingTransaction__ReactServerRenderingTransaction.prototype, reactlibReactServerRenderingTransaction__Transaction.Mixin, reactlibReactServerRenderingTransaction__Mixin);

reactlibReactServerRenderingTransaction__PooledClass.addPoolingTo(reactlibReactServerRenderingTransaction__ReactServerRenderingTransaction);

$m['react/lib/ReactServerRenderingTransaction'].exports = reactlibReactServerRenderingTransaction__ReactServerRenderingTransaction;
/*≠≠ node_modules/react/lib/ReactServerRenderingTransaction.js ≠≠*/

/*== node_modules/react/lib/flattenChildren.js ==*/
$m['react/lib/flattenChildren'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule flattenChildren
 * 
 */


var reactlibflattenChildren__KeyEscapeUtils = $m['react/lib/KeyEscapeUtils'].exports;
var reactlibflattenChildren__traverseAllChildren = $m['react/lib/traverseAllChildren'].exports;
var reactlibflattenChildren__warning = $m['fbjs/lib/warning'].exports;

var reactlibflattenChildren__ReactComponentTreeHook;

if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
  // Temporary hack.
  // Inline requires don't work well with Jest:
  // https://github.com/facebook/react/issues/7240
  // Remove the inline requires when we don't need them anymore:
  // https://github.com/facebook/react/pull/7178
  reactlibflattenChildren__ReactComponentTreeHook = $m['react/lib/ReactComponentTreeHook'].exports;
}

/**
 * @param {function} traverseContext Context passed through traversal.
 * @param {?ReactComponent} child React child component.
 * @param {!string} name String name of key path to child.
 * @param {number=} selfDebugID Optional debugID of the current internal instance.
 */
function reactlibflattenChildren__flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID) {
  // We found a component instance.
  if (traverseContext && typeof traverseContext === 'object') {
    var result = traverseContext;
    var keyUnique = result[name] === undefined;
    if (process.env.NODE_ENV !== 'production') {
      if (!reactlibflattenChildren__ReactComponentTreeHook) {
        reactlibflattenChildren__ReactComponentTreeHook = $m['react/lib/ReactComponentTreeHook'].exports;
      }
      if (!keyUnique) {
        process.env.NODE_ENV !== 'production' ? reactlibflattenChildren__warning(false, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.%s', reactlibflattenChildren__KeyEscapeUtils.unescape(name), reactlibflattenChildren__ReactComponentTreeHook.getStackAddendumByID(selfDebugID)) : void 0;
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
function reactlibflattenChildren__flattenChildren(children, selfDebugID) {
  if (children == null) {
    return children;
  }
  var result = {};

  if (process.env.NODE_ENV !== 'production') {
    reactlibflattenChildren__traverseAllChildren(children, function (traverseContext, child, name) {
      return reactlibflattenChildren__flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID);
    }, result);
  } else {
    reactlibflattenChildren__traverseAllChildren(children, reactlibflattenChildren__flattenSingleChildIntoContext, result);
  }
  return result;
}

$m['react/lib/flattenChildren'].exports = reactlibflattenChildren__flattenChildren;
/*≠≠ node_modules/react/lib/flattenChildren.js ≠≠*/

/*== node_modules/react/lib/ReactChildReconciler.js ==*/
$m['react/lib/ReactChildReconciler'] = { exports: {} };
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactChildReconciler
 */


var reactlibReactChildReconciler__ReactReconciler = $m['react/lib/ReactReconciler'].exports;

var reactlibReactChildReconciler__instantiateReactComponent = $m['react/lib/instantiateReactComponent'].exports;
var reactlibReactChildReconciler__KeyEscapeUtils = $m['react/lib/KeyEscapeUtils'].exports;
var reactlibReactChildReconciler__shouldUpdateReactComponent = $m['react/lib/shouldUpdateReactComponent'].exports;
var reactlibReactChildReconciler__traverseAllChildren = $m['react/lib/traverseAllChildren'].exports;
var reactlibReactChildReconciler__warning = $m['fbjs/lib/warning'].exports;

var reactlibReactChildReconciler__ReactComponentTreeHook;

if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
  // Temporary hack.
  // Inline requires don't work well with Jest:
  // https://github.com/facebook/react/issues/7240
  // Remove the inline requires when we don't need them anymore:
  // https://github.com/facebook/react/pull/7178
  reactlibReactChildReconciler__ReactComponentTreeHook = $m['react/lib/ReactComponentTreeHook'].exports;
}

function reactlibReactChildReconciler__instantiateChild(childInstances, child, name, selfDebugID) {
  // We found a component instance.
  var keyUnique = childInstances[name] === undefined;
  if (process.env.NODE_ENV !== 'production') {
    if (!reactlibReactChildReconciler__ReactComponentTreeHook) {
      reactlibReactChildReconciler__ReactComponentTreeHook = $m['react/lib/ReactComponentTreeHook'].exports;
    }
    if (!keyUnique) {
      process.env.NODE_ENV !== 'production' ? reactlibReactChildReconciler__warning(false, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.%s', reactlibReactChildReconciler__KeyEscapeUtils.unescape(name), reactlibReactChildReconciler__ReactComponentTreeHook.getStackAddendumByID(selfDebugID)) : void 0;
    }
  }
  if (child != null && keyUnique) {
    childInstances[name] = reactlibReactChildReconciler__instantiateReactComponent(child, true);
  }
}

/**
 * ReactChildReconciler provides helpers for initializing or updating a set of
 * children. Its output is suitable for passing it onto ReactMultiChild which
 * does diffed reordering and insertion.
 */
var reactlibReactChildReconciler__ReactChildReconciler = {
  /**
   * Generates a "mount image" for each of the supplied children. In the case
   * of `ReactDOMComponent`, a mount image is a string of markup.
   *
   * @param {?object} nestedChildNodes Nested child maps.
   * @return {?object} A set of child instances.
   * @internal
   */
  instantiateChildren: function (nestedChildNodes, transaction, context, selfDebugID // 0 in production and for roots
  ) {
    if (nestedChildNodes == null) {
      return null;
    }
    var childInstances = {};

    if (process.env.NODE_ENV !== 'production') {
      reactlibReactChildReconciler__traverseAllChildren(nestedChildNodes, function (childInsts, child, name) {
        return reactlibReactChildReconciler__instantiateChild(childInsts, child, name, selfDebugID);
      }, childInstances);
    } else {
      reactlibReactChildReconciler__traverseAllChildren(nestedChildNodes, reactlibReactChildReconciler__instantiateChild, childInstances);
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
  updateChildren: function (prevChildren, nextChildren, mountImages, removedNodes, transaction, hostParent, hostContainerInfo, context, selfDebugID // 0 in production and for roots
  ) {
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
      if (prevChild != null && reactlibReactChildReconciler__shouldUpdateReactComponent(prevElement, nextElement)) {
        reactlibReactChildReconciler__ReactReconciler.receiveComponent(prevChild, nextElement, transaction, context);
        nextChildren[name] = prevChild;
      } else {
        if (prevChild) {
          removedNodes[name] = reactlibReactChildReconciler__ReactReconciler.getHostNode(prevChild);
          reactlibReactChildReconciler__ReactReconciler.unmountComponent(prevChild, false);
        }
        // The child must be instantiated before it's mounted.
        var nextChildInstance = reactlibReactChildReconciler__instantiateReactComponent(nextElement, true);
        nextChildren[name] = nextChildInstance;
        // Creating mount image now ensures refs are resolved in right order
        // (see https://github.com/facebook/react/pull/7101 for explanation).
        var nextChildMountImage = reactlibReactChildReconciler__ReactReconciler.mountComponent(nextChildInstance, transaction, hostParent, hostContainerInfo, context, selfDebugID);
        mountImages.push(nextChildMountImage);
      }
    }
    // Unmount children that are no longer present.
    for (name in prevChildren) {
      if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
        prevChild = prevChildren[name];
        removedNodes[name] = reactlibReactChildReconciler__ReactReconciler.getHostNode(prevChild);
        reactlibReactChildReconciler__ReactReconciler.unmountComponent(prevChild, false);
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
        reactlibReactChildReconciler__ReactReconciler.unmountComponent(renderedChild, safely);
      }
    }
  }

};

$m['react/lib/ReactChildReconciler'].exports = reactlibReactChildReconciler__ReactChildReconciler;
/*≠≠ node_modules/react/lib/ReactChildReconciler.js ≠≠*/

/*== node_modules/react/lib/ReactMultiChild.js ==*/
$m['react/lib/ReactMultiChild'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMultiChild
 */


var reactlibReactMultiChild___prodInvariant = $m['react/lib/reactProdInvariant'].exports;

var reactlibReactMultiChild__ReactComponentEnvironment = $m['react/lib/ReactComponentEnvironment'].exports;
var reactlibReactMultiChild__ReactInstanceMap = $m['react/lib/ReactInstanceMap'].exports;
var reactlibReactMultiChild__ReactInstrumentation = $m['react/lib/ReactInstrumentation'].exports;
var reactlibReactMultiChild__ReactMultiChildUpdateTypes = $m['react/lib/ReactMultiChildUpdateTypes'].exports;

var reactlibReactMultiChild__ReactCurrentOwner = $m['react/lib/ReactCurrentOwner'].exports;
var reactlibReactMultiChild__ReactReconciler = $m['react/lib/ReactReconciler'].exports;
var reactlibReactMultiChild__ReactChildReconciler = $m['react/lib/ReactChildReconciler'].exports;

var reactlibReactMultiChild__emptyFunction = $m['fbjs/lib/emptyFunction'].exports;
var reactlibReactMultiChild__flattenChildren = $m['react/lib/flattenChildren'].exports;
var reactlibReactMultiChild__invariant = $m['fbjs/lib/invariant'].exports;

/**
 * Make an update for markup to be rendered and inserted at a supplied index.
 *
 * @param {string} markup Markup that renders into an element.
 * @param {number} toIndex Destination index.
 * @private
 */
function reactlibReactMultiChild__makeInsertMarkup(markup, afterNode, toIndex) {
  // NOTE: Null values reduce hidden classes.
  return {
    type: reactlibReactMultiChild__ReactMultiChildUpdateTypes.INSERT_MARKUP,
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
function reactlibReactMultiChild__makeMove(child, afterNode, toIndex) {
  // NOTE: Null values reduce hidden classes.
  return {
    type: reactlibReactMultiChild__ReactMultiChildUpdateTypes.MOVE_EXISTING,
    content: null,
    fromIndex: child._mountIndex,
    fromNode: reactlibReactMultiChild__ReactReconciler.getHostNode(child),
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
function reactlibReactMultiChild__makeRemove(child, node) {
  // NOTE: Null values reduce hidden classes.
  return {
    type: reactlibReactMultiChild__ReactMultiChildUpdateTypes.REMOVE_NODE,
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
function reactlibReactMultiChild__makeSetMarkup(markup) {
  // NOTE: Null values reduce hidden classes.
  return {
    type: reactlibReactMultiChild__ReactMultiChildUpdateTypes.SET_MARKUP,
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
function reactlibReactMultiChild__makeTextContent(textContent) {
  // NOTE: Null values reduce hidden classes.
  return {
    type: reactlibReactMultiChild__ReactMultiChildUpdateTypes.TEXT_CONTENT,
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
function reactlibReactMultiChild__enqueue(queue, update) {
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
function reactlibReactMultiChild__processQueue(inst, updateQueue) {
  reactlibReactMultiChild__ReactComponentEnvironment.processChildrenUpdates(inst, updateQueue);
}

var reactlibReactMultiChild__setChildrenForInstrumentation = reactlibReactMultiChild__emptyFunction;
if (process.env.NODE_ENV !== 'production') {
  var reactlibReactMultiChild__getDebugID = function (inst) {
    if (!inst._debugID) {
      // Check for ART-like instances. TODO: This is silly/gross.
      var internal;
      if (internal = reactlibReactMultiChild__ReactInstanceMap.get(inst)) {
        inst = internal;
      }
    }
    return inst._debugID;
  };
  reactlibReactMultiChild__setChildrenForInstrumentation = function (children) {
    var debugID = reactlibReactMultiChild__getDebugID(this);
    // TODO: React Native empty components are also multichild.
    // This means they still get into this method but don't have _debugID.
    if (debugID !== 0) {
      reactlibReactMultiChild__ReactInstrumentation.debugTool.onSetChildren(debugID, children ? Object.keys(children).map(function (key) {
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
var reactlibReactMultiChild__ReactMultiChild = {

  /**
   * Provides common functionality for components that must reconcile multiple
   * children. This is used by `ReactDOMComponent` to mount, update, and
   * unmount child components.
   *
   * @lends {ReactMultiChild.prototype}
   */
  Mixin: {

    _reconcilerInstantiateChildren: function (nestedChildren, transaction, context) {
      if (process.env.NODE_ENV !== 'production') {
        var selfDebugID = reactlibReactMultiChild__getDebugID(this);
        if (this._currentElement) {
          try {
            reactlibReactMultiChild__ReactCurrentOwner.current = this._currentElement._owner;
            return reactlibReactMultiChild__ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context, selfDebugID);
          } finally {
            reactlibReactMultiChild__ReactCurrentOwner.current = null;
          }
        }
      }
      return reactlibReactMultiChild__ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
    },

    _reconcilerUpdateChildren: function (prevChildren, nextNestedChildrenElements, mountImages, removedNodes, transaction, context) {
      var nextChildren;
      var selfDebugID = 0;
      if (process.env.NODE_ENV !== 'production') {
        selfDebugID = reactlibReactMultiChild__getDebugID(this);
        if (this._currentElement) {
          try {
            reactlibReactMultiChild__ReactCurrentOwner.current = this._currentElement._owner;
            nextChildren = reactlibReactMultiChild__flattenChildren(nextNestedChildrenElements, selfDebugID);
          } finally {
            reactlibReactMultiChild__ReactCurrentOwner.current = null;
          }
          reactlibReactMultiChild__ReactChildReconciler.updateChildren(prevChildren, nextChildren, mountImages, removedNodes, transaction, this, this._hostContainerInfo, context, selfDebugID);
          return nextChildren;
        }
      }
      nextChildren = reactlibReactMultiChild__flattenChildren(nextNestedChildrenElements, selfDebugID);
      reactlibReactMultiChild__ReactChildReconciler.updateChildren(prevChildren, nextChildren, mountImages, removedNodes, transaction, this, this._hostContainerInfo, context, selfDebugID);
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
          if (process.env.NODE_ENV !== 'production') {
            selfDebugID = reactlibReactMultiChild__getDebugID(this);
          }
          var mountImage = reactlibReactMultiChild__ReactReconciler.mountComponent(child, transaction, this, this._hostContainerInfo, context, selfDebugID);
          child._mountIndex = index++;
          mountImages.push(mountImage);
        }
      }

      if (process.env.NODE_ENV !== 'production') {
        reactlibReactMultiChild__setChildrenForInstrumentation.call(this, children);
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
      reactlibReactMultiChild__ReactChildReconciler.unmountChildren(prevChildren, false);
      for (var name in prevChildren) {
        if (prevChildren.hasOwnProperty(name)) {
          !false ? process.env.NODE_ENV !== 'production' ? reactlibReactMultiChild__invariant(false, 'updateTextContent called on non-empty component.') : reactlibReactMultiChild___prodInvariant('118') : void 0;
        }
      }
      // Set new text content.
      var updates = [reactlibReactMultiChild__makeTextContent(nextContent)];
      reactlibReactMultiChild__processQueue(this, updates);
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
      reactlibReactMultiChild__ReactChildReconciler.unmountChildren(prevChildren, false);
      for (var name in prevChildren) {
        if (prevChildren.hasOwnProperty(name)) {
          !false ? process.env.NODE_ENV !== 'production' ? reactlibReactMultiChild__invariant(false, 'updateTextContent called on non-empty component.') : reactlibReactMultiChild___prodInvariant('118') : void 0;
        }
      }
      var updates = [reactlibReactMultiChild__makeSetMarkup(nextMarkup)];
      reactlibReactMultiChild__processQueue(this, updates);
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
          updates = reactlibReactMultiChild__enqueue(updates, this.moveChild(prevChild, lastPlacedNode, nextIndex, lastIndex));
          lastIndex = Math.max(prevChild._mountIndex, lastIndex);
          prevChild._mountIndex = nextIndex;
        } else {
          if (prevChild) {
            // Update `lastIndex` before `_mountIndex` gets unset by unmounting.
            lastIndex = Math.max(prevChild._mountIndex, lastIndex);
            // The `removedNodes` loop below will actually remove the child.
          }
          // The child must be instantiated before it's mounted.
          updates = reactlibReactMultiChild__enqueue(updates, this._mountChildAtIndex(nextChild, mountImages[nextMountIndex], lastPlacedNode, nextIndex, transaction, context));
          nextMountIndex++;
        }
        nextIndex++;
        lastPlacedNode = reactlibReactMultiChild__ReactReconciler.getHostNode(nextChild);
      }
      // Remove children that are no longer present.
      for (name in removedNodes) {
        if (removedNodes.hasOwnProperty(name)) {
          updates = reactlibReactMultiChild__enqueue(updates, this._unmountChild(prevChildren[name], removedNodes[name]));
        }
      }
      if (updates) {
        reactlibReactMultiChild__processQueue(this, updates);
      }
      this._renderedChildren = nextChildren;

      if (process.env.NODE_ENV !== 'production') {
        reactlibReactMultiChild__setChildrenForInstrumentation.call(this, nextChildren);
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
      reactlibReactMultiChild__ReactChildReconciler.unmountChildren(renderedChildren, safely);
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
        return reactlibReactMultiChild__makeMove(child, afterNode, toIndex);
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
      return reactlibReactMultiChild__makeInsertMarkup(mountImage, afterNode, child._mountIndex);
    },

    /**
     * Removes a child component.
     *
     * @param {ReactComponent} child Child to remove.
     * @protected
     */
    removeChild: function (child, node) {
      return reactlibReactMultiChild__makeRemove(child, node);
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

$m['react/lib/ReactMultiChild'].exports = reactlibReactMultiChild__ReactMultiChild;
/*≠≠ node_modules/react/lib/ReactMultiChild.js ≠≠*/

/*== node_modules/react/lib/LinkedValueUtils.js ==*/
$m['react/lib/LinkedValueUtils'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule LinkedValueUtils
 */


var reactlibLinkedValueUtils___prodInvariant = $m['react/lib/reactProdInvariant'].exports;

var reactlibLinkedValueUtils__ReactPropTypes = $m['react/lib/ReactPropTypes'].exports;
var reactlibLinkedValueUtils__ReactPropTypeLocations = $m['react/lib/ReactPropTypeLocations'].exports;
var reactlibLinkedValueUtils__ReactPropTypesSecret = $m['react/lib/ReactPropTypesSecret'].exports;

var reactlibLinkedValueUtils__invariant = $m['fbjs/lib/invariant'].exports;
var reactlibLinkedValueUtils__warning = $m['fbjs/lib/warning'].exports;

var reactlibLinkedValueUtils__hasReadOnlyValue = {
  'button': true,
  'checkbox': true,
  'image': true,
  'hidden': true,
  'radio': true,
  'reset': true,
  'submit': true
};

function reactlibLinkedValueUtils___assertSingleLink(inputProps) {
  !(inputProps.checkedLink == null || inputProps.valueLink == null) ? process.env.NODE_ENV !== 'production' ? reactlibLinkedValueUtils__invariant(false, 'Cannot provide a checkedLink and a valueLink. If you want to use checkedLink, you probably don\'t want to use valueLink and vice versa.') : reactlibLinkedValueUtils___prodInvariant('87') : void 0;
}
function reactlibLinkedValueUtils___assertValueLink(inputProps) {
  reactlibLinkedValueUtils___assertSingleLink(inputProps);
  !(inputProps.value == null && inputProps.onChange == null) ? process.env.NODE_ENV !== 'production' ? reactlibLinkedValueUtils__invariant(false, 'Cannot provide a valueLink and a value or onChange event. If you want to use value or onChange, you probably don\'t want to use valueLink.') : reactlibLinkedValueUtils___prodInvariant('88') : void 0;
}

function reactlibLinkedValueUtils___assertCheckedLink(inputProps) {
  reactlibLinkedValueUtils___assertSingleLink(inputProps);
  !(inputProps.checked == null && inputProps.onChange == null) ? process.env.NODE_ENV !== 'production' ? reactlibLinkedValueUtils__invariant(false, 'Cannot provide a checkedLink and a checked property or onChange event. If you want to use checked or onChange, you probably don\'t want to use checkedLink') : reactlibLinkedValueUtils___prodInvariant('89') : void 0;
}

var reactlibLinkedValueUtils__propTypes = {
  value: function (props, propName, componentName) {
    if (!props[propName] || reactlibLinkedValueUtils__hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled) {
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
  onChange: reactlibLinkedValueUtils__ReactPropTypes.func
};

var reactlibLinkedValueUtils__loggedTypeFailures = {};
function reactlibLinkedValueUtils__getDeclarationErrorAddendum(owner) {
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
var reactlibLinkedValueUtils__LinkedValueUtils = {
  checkPropTypes: function (tagName, props, owner) {
    for (var propName in reactlibLinkedValueUtils__propTypes) {
      if (reactlibLinkedValueUtils__propTypes.hasOwnProperty(propName)) {
        var error = reactlibLinkedValueUtils__propTypes[propName](props, propName, tagName, reactlibLinkedValueUtils__ReactPropTypeLocations.prop, null, reactlibLinkedValueUtils__ReactPropTypesSecret);
      }
      if (error instanceof Error && !(error.message in reactlibLinkedValueUtils__loggedTypeFailures)) {
        // Only monitor this failure once because there tends to be a lot of the
        // same error.
        reactlibLinkedValueUtils__loggedTypeFailures[error.message] = true;

        var addendum = reactlibLinkedValueUtils__getDeclarationErrorAddendum(owner);
        process.env.NODE_ENV !== 'production' ? reactlibLinkedValueUtils__warning(false, 'Failed form propType: %s%s', error.message, addendum) : void 0;
      }
    }
  },

  /**
   * @param {object} inputProps Props for form component
   * @return {*} current value of the input either from value prop or link.
   */
  getValue: function (inputProps) {
    if (inputProps.valueLink) {
      reactlibLinkedValueUtils___assertValueLink(inputProps);
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
      reactlibLinkedValueUtils___assertCheckedLink(inputProps);
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
      reactlibLinkedValueUtils___assertValueLink(inputProps);
      return inputProps.valueLink.requestChange(event.target.value);
    } else if (inputProps.checkedLink) {
      reactlibLinkedValueUtils___assertCheckedLink(inputProps);
      return inputProps.checkedLink.requestChange(event.target.checked);
    } else if (inputProps.onChange) {
      return inputProps.onChange.call(undefined, event);
    }
  }
};

$m['react/lib/LinkedValueUtils'].exports = reactlibLinkedValueUtils__LinkedValueUtils;
/*≠≠ node_modules/react/lib/LinkedValueUtils.js ≠≠*/

/*== node_modules/react/lib/ReactDOMTextarea.js ==*/
$m['react/lib/ReactDOMTextarea'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMTextarea
 */


var reactlibReactDOMTextarea___prodInvariant = $m['react/lib/reactProdInvariant'].exports,
    reactlibReactDOMTextarea___assign = $m['object-assign'].exports;

var reactlibReactDOMTextarea__DisabledInputUtils = $m['react/lib/DisabledInputUtils'].exports;
var reactlibReactDOMTextarea__LinkedValueUtils = $m['react/lib/LinkedValueUtils'].exports;
var reactlibReactDOMTextarea__ReactDOMComponentTree = $m['react/lib/ReactDOMComponentTree'].exports;
var reactlibReactDOMTextarea__ReactUpdates = $m['react/lib/ReactUpdates'].exports;

var reactlibReactDOMTextarea__invariant = $m['fbjs/lib/invariant'].exports;
var reactlibReactDOMTextarea__warning = $m['fbjs/lib/warning'].exports;

var reactlibReactDOMTextarea__didWarnValueLink = false;
var reactlibReactDOMTextarea__didWarnValDefaultVal = false;

function reactlibReactDOMTextarea__forceUpdateIfMounted() {
  if (this._rootNodeID) {
    // DOM component is still mounted; update
    reactlibReactDOMTextarea__ReactDOMTextarea.updateWrapper(this);
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
var reactlibReactDOMTextarea__ReactDOMTextarea = {
  getHostProps: function (inst, props) {
    !(props.dangerouslySetInnerHTML == null) ? process.env.NODE_ENV !== 'production' ? reactlibReactDOMTextarea__invariant(false, '`dangerouslySetInnerHTML` does not make sense on <textarea>.') : reactlibReactDOMTextarea___prodInvariant('91') : void 0;

    // Always set children to the same thing. In IE9, the selection range will
    // get reset if `textContent` is mutated.  We could add a check in setTextContent
    // to only set the value if/when the value differs from the node value (which would
    // completely solve this IE9 bug), but Sebastian+Ben seemed to like this solution.
    // The value can be a boolean or object so that's why it's forced to be a string.
    var hostProps = reactlibReactDOMTextarea___assign({}, reactlibReactDOMTextarea__DisabledInputUtils.getHostProps(inst, props), {
      value: undefined,
      defaultValue: undefined,
      children: '' + inst._wrapperState.initialValue,
      onChange: inst._wrapperState.onChange
    });

    return hostProps;
  },

  mountWrapper: function (inst, props) {
    if (process.env.NODE_ENV !== 'production') {
      reactlibReactDOMTextarea__LinkedValueUtils.checkPropTypes('textarea', props, inst._currentElement._owner);
      if (props.valueLink !== undefined && !reactlibReactDOMTextarea__didWarnValueLink) {
        process.env.NODE_ENV !== 'production' ? reactlibReactDOMTextarea__warning(false, '`valueLink` prop on `textarea` is deprecated; set `value` and `onChange` instead.') : void 0;
        reactlibReactDOMTextarea__didWarnValueLink = true;
      }
      if (props.value !== undefined && props.defaultValue !== undefined && !reactlibReactDOMTextarea__didWarnValDefaultVal) {
        process.env.NODE_ENV !== 'production' ? reactlibReactDOMTextarea__warning(false, 'Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components') : void 0;
        reactlibReactDOMTextarea__didWarnValDefaultVal = true;
      }
    }

    var value = reactlibReactDOMTextarea__LinkedValueUtils.getValue(props);
    var initialValue = value;

    // Only bother fetching default value if we're going to use it
    if (value == null) {
      var defaultValue = props.defaultValue;
      // TODO (yungsters): Remove support for children content in <textarea>.
      var children = props.children;
      if (children != null) {
        if (process.env.NODE_ENV !== 'production') {
          process.env.NODE_ENV !== 'production' ? reactlibReactDOMTextarea__warning(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.') : void 0;
        }
        !(defaultValue == null) ? process.env.NODE_ENV !== 'production' ? reactlibReactDOMTextarea__invariant(false, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : reactlibReactDOMTextarea___prodInvariant('92') : void 0;
        if (Array.isArray(children)) {
          !(children.length <= 1) ? process.env.NODE_ENV !== 'production' ? reactlibReactDOMTextarea__invariant(false, '<textarea> can only have at most one child.') : reactlibReactDOMTextarea___prodInvariant('93') : void 0;
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
      onChange: reactlibReactDOMTextarea___handleChange.bind(inst)
    };
  },

  updateWrapper: function (inst) {
    var props = inst._currentElement.props;

    var node = reactlibReactDOMTextarea__ReactDOMComponentTree.getNodeFromInstance(inst);
    var value = reactlibReactDOMTextarea__LinkedValueUtils.getValue(props);
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
    var node = reactlibReactDOMTextarea__ReactDOMComponentTree.getNodeFromInstance(inst);

    // Warning: node.value may be the empty string at this point (IE11) if placeholder is set.
    node.value = node.textContent; // Detach value from defaultValue
  }
};

function reactlibReactDOMTextarea___handleChange(event) {
  var props = this._currentElement.props;
  var returnValue = reactlibReactDOMTextarea__LinkedValueUtils.executeOnChange(props, event);
  reactlibReactDOMTextarea__ReactUpdates.asap(reactlibReactDOMTextarea__forceUpdateIfMounted, this);
  return returnValue;
}

$m['react/lib/ReactDOMTextarea'].exports = reactlibReactDOMTextarea__ReactDOMTextarea;
/*≠≠ node_modules/react/lib/ReactDOMTextarea.js ≠≠*/

/*== node_modules/react/lib/ReactDOMSelect.js ==*/
$m['react/lib/ReactDOMSelect'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMSelect
 */


var reactlibReactDOMSelect___assign = $m['object-assign'].exports;

var reactlibReactDOMSelect__DisabledInputUtils = $m['react/lib/DisabledInputUtils'].exports;
var reactlibReactDOMSelect__LinkedValueUtils = $m['react/lib/LinkedValueUtils'].exports;
var reactlibReactDOMSelect__ReactDOMComponentTree = $m['react/lib/ReactDOMComponentTree'].exports;
var reactlibReactDOMSelect__ReactUpdates = $m['react/lib/ReactUpdates'].exports;

var reactlibReactDOMSelect__warning = $m['fbjs/lib/warning'].exports;

var reactlibReactDOMSelect__didWarnValueLink = false;
var reactlibReactDOMSelect__didWarnValueDefaultValue = false;

function reactlibReactDOMSelect__updateOptionsIfPendingUpdateAndMounted() {
  if (this._rootNodeID && this._wrapperState.pendingUpdate) {
    this._wrapperState.pendingUpdate = false;

    var props = this._currentElement.props;
    var value = reactlibReactDOMSelect__LinkedValueUtils.getValue(props);

    if (value != null) {
      reactlibReactDOMSelect__updateOptions(this, Boolean(props.multiple), value);
    }
  }
}

function reactlibReactDOMSelect__getDeclarationErrorAddendum(owner) {
  if (owner) {
    var name = owner.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
  }
  return '';
}

var reactlibReactDOMSelect__valuePropNames = ['value', 'defaultValue'];

/**
 * Validation function for `value` and `defaultValue`.
 * @private
 */
function reactlibReactDOMSelect__checkSelectPropTypes(inst, props) {
  var owner = inst._currentElement._owner;
  reactlibReactDOMSelect__LinkedValueUtils.checkPropTypes('select', props, owner);

  if (props.valueLink !== undefined && !reactlibReactDOMSelect__didWarnValueLink) {
    process.env.NODE_ENV !== 'production' ? reactlibReactDOMSelect__warning(false, '`valueLink` prop on `select` is deprecated; set `value` and `onChange` instead.') : void 0;
    reactlibReactDOMSelect__didWarnValueLink = true;
  }

  for (var i = 0; i < reactlibReactDOMSelect__valuePropNames.length; i++) {
    var propName = reactlibReactDOMSelect__valuePropNames[i];
    if (props[propName] == null) {
      continue;
    }
    var isArray = Array.isArray(props[propName]);
    if (props.multiple && !isArray) {
      process.env.NODE_ENV !== 'production' ? reactlibReactDOMSelect__warning(false, 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.%s', propName, reactlibReactDOMSelect__getDeclarationErrorAddendum(owner)) : void 0;
    } else if (!props.multiple && isArray) {
      process.env.NODE_ENV !== 'production' ? reactlibReactDOMSelect__warning(false, 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.%s', propName, reactlibReactDOMSelect__getDeclarationErrorAddendum(owner)) : void 0;
    }
  }
}

/**
 * @param {ReactDOMComponent} inst
 * @param {boolean} multiple
 * @param {*} propValue A stringable (with `multiple`, a list of stringables).
 * @private
 */
function reactlibReactDOMSelect__updateOptions(inst, multiple, propValue) {
  var selectedValue, i;
  var options = reactlibReactDOMSelect__ReactDOMComponentTree.getNodeFromInstance(inst).options;

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
var reactlibReactDOMSelect__ReactDOMSelect = {
  getHostProps: function (inst, props) {
    return reactlibReactDOMSelect___assign({}, reactlibReactDOMSelect__DisabledInputUtils.getHostProps(inst, props), {
      onChange: inst._wrapperState.onChange,
      value: undefined
    });
  },

  mountWrapper: function (inst, props) {
    if (process.env.NODE_ENV !== 'production') {
      reactlibReactDOMSelect__checkSelectPropTypes(inst, props);
    }

    var value = reactlibReactDOMSelect__LinkedValueUtils.getValue(props);
    inst._wrapperState = {
      pendingUpdate: false,
      initialValue: value != null ? value : props.defaultValue,
      listeners: null,
      onChange: reactlibReactDOMSelect___handleChange.bind(inst),
      wasMultiple: Boolean(props.multiple)
    };

    if (props.value !== undefined && props.defaultValue !== undefined && !reactlibReactDOMSelect__didWarnValueDefaultValue) {
      process.env.NODE_ENV !== 'production' ? reactlibReactDOMSelect__warning(false, 'Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components') : void 0;
      reactlibReactDOMSelect__didWarnValueDefaultValue = true;
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

    var value = reactlibReactDOMSelect__LinkedValueUtils.getValue(props);
    if (value != null) {
      inst._wrapperState.pendingUpdate = false;
      reactlibReactDOMSelect__updateOptions(inst, Boolean(props.multiple), value);
    } else if (wasMultiple !== Boolean(props.multiple)) {
      // For simplicity, reapply `defaultValue` if `multiple` is toggled.
      if (props.defaultValue != null) {
        reactlibReactDOMSelect__updateOptions(inst, Boolean(props.multiple), props.defaultValue);
      } else {
        // Revert the select back to its default unselected state.
        reactlibReactDOMSelect__updateOptions(inst, Boolean(props.multiple), props.multiple ? [] : '');
      }
    }
  }
};

function reactlibReactDOMSelect___handleChange(event) {
  var props = this._currentElement.props;
  var returnValue = reactlibReactDOMSelect__LinkedValueUtils.executeOnChange(props, event);

  if (this._rootNodeID) {
    this._wrapperState.pendingUpdate = true;
  }
  reactlibReactDOMSelect__ReactUpdates.asap(reactlibReactDOMSelect__updateOptionsIfPendingUpdateAndMounted, this);
  return returnValue;
}

$m['react/lib/ReactDOMSelect'].exports = reactlibReactDOMSelect__ReactDOMSelect;
/*≠≠ node_modules/react/lib/ReactDOMSelect.js ≠≠*/

/*== node_modules/react/lib/ReactDOMOption.js ==*/
$m['react/lib/ReactDOMOption'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMOption
 */


var reactlibReactDOMOption___assign = $m['object-assign'].exports;

var reactlibReactDOMOption__ReactChildren = $m['react/lib/ReactChildren'].exports;
var reactlibReactDOMOption__ReactDOMComponentTree = $m['react/lib/ReactDOMComponentTree'].exports;
var reactlibReactDOMOption__ReactDOMSelect = $m['react/lib/ReactDOMSelect'].exports;

var reactlibReactDOMOption__warning = $m['fbjs/lib/warning'].exports;
var reactlibReactDOMOption__didWarnInvalidOptionChildren = false;

function reactlibReactDOMOption__flattenChildren(children) {
  var content = '';

  // Flatten children and warn if they aren't strings or numbers;
  // invalid types are ignored.
  reactlibReactDOMOption__ReactChildren.forEach(children, function (child) {
    if (child == null) {
      return;
    }
    if (typeof child === 'string' || typeof child === 'number') {
      content += child;
    } else if (!reactlibReactDOMOption__didWarnInvalidOptionChildren) {
      reactlibReactDOMOption__didWarnInvalidOptionChildren = true;
      process.env.NODE_ENV !== 'production' ? reactlibReactDOMOption__warning(false, 'Only strings and numbers are supported as <option> children.') : void 0;
    }
  });

  return content;
}

/**
 * Implements an <option> host component that warns when `selected` is set.
 */
var reactlibReactDOMOption__ReactDOMOption = {
  mountWrapper: function (inst, props, hostParent) {
    // TODO (yungsters): Remove support for `selected` in <option>.
    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? reactlibReactDOMOption__warning(props.selected == null, 'Use the `defaultValue` or `value` props on <select> instead of ' + 'setting `selected` on <option>.') : void 0;
    }

    // Look up whether this option is 'selected'
    var selectValue = null;
    if (hostParent != null) {
      var selectParent = hostParent;

      if (selectParent._tag === 'optgroup') {
        selectParent = selectParent._hostParent;
      }

      if (selectParent != null && selectParent._tag === 'select') {
        selectValue = reactlibReactDOMOption__ReactDOMSelect.getSelectValueContext(selectParent);
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
        value = reactlibReactDOMOption__flattenChildren(props.children);
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
      var node = reactlibReactDOMOption__ReactDOMComponentTree.getNodeFromInstance(inst);
      node.setAttribute('value', props.value);
    }
  },

  getHostProps: function (inst, props) {
    var hostProps = reactlibReactDOMOption___assign({ selected: undefined, children: undefined }, props);

    // Read state only from initial mount because <select> updates value
    // manually; we need the initial state only for server rendering
    if (inst._wrapperState.selected != null) {
      hostProps.selected = inst._wrapperState.selected;
    }

    var content = reactlibReactDOMOption__flattenChildren(props.children);

    if (content) {
      hostProps.children = content;
    }

    return hostProps;
  }

};

$m['react/lib/ReactDOMOption'].exports = reactlibReactDOMOption__ReactDOMOption;
/*≠≠ node_modules/react/lib/ReactDOMOption.js ≠≠*/

/*== node_modules/react/lib/quoteAttributeValueForBrowser.js ==*/
$m['react/lib/quoteAttributeValueForBrowser'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule quoteAttributeValueForBrowser
 */


var reactlibquoteAttributeValueForBrowser__escapeTextContentForBrowser = $m['react/lib/escapeTextContentForBrowser'].exports;

/**
 * Escapes attribute value to prevent scripting attacks.
 *
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */
function reactlibquoteAttributeValueForBrowser__quoteAttributeValueForBrowser(value) {
  return '"' + reactlibquoteAttributeValueForBrowser__escapeTextContentForBrowser(value) + '"';
}

$m['react/lib/quoteAttributeValueForBrowser'].exports = reactlibquoteAttributeValueForBrowser__quoteAttributeValueForBrowser;
/*≠≠ node_modules/react/lib/quoteAttributeValueForBrowser.js ≠≠*/

/*== node_modules/react/lib/DOMPropertyOperations.js ==*/
$m['react/lib/DOMPropertyOperations'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMPropertyOperations
 */


var reactlibDOMPropertyOperations__DOMProperty = $m['react/lib/DOMProperty'].exports;
var reactlibDOMPropertyOperations__ReactDOMComponentTree = $m['react/lib/ReactDOMComponentTree'].exports;
var reactlibDOMPropertyOperations__ReactInstrumentation = $m['react/lib/ReactInstrumentation'].exports;

var reactlibDOMPropertyOperations__quoteAttributeValueForBrowser = $m['react/lib/quoteAttributeValueForBrowser'].exports;
var reactlibDOMPropertyOperations__warning = $m['fbjs/lib/warning'].exports;

var reactlibDOMPropertyOperations__VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + reactlibDOMPropertyOperations__DOMProperty.ATTRIBUTE_NAME_START_CHAR + '][' + reactlibDOMPropertyOperations__DOMProperty.ATTRIBUTE_NAME_CHAR + ']*$');
var reactlibDOMPropertyOperations__illegalAttributeNameCache = {};
var reactlibDOMPropertyOperations__validatedAttributeNameCache = {};

function reactlibDOMPropertyOperations__isAttributeNameSafe(attributeName) {
  if (reactlibDOMPropertyOperations__validatedAttributeNameCache.hasOwnProperty(attributeName)) {
    return true;
  }
  if (reactlibDOMPropertyOperations__illegalAttributeNameCache.hasOwnProperty(attributeName)) {
    return false;
  }
  if (reactlibDOMPropertyOperations__VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
    reactlibDOMPropertyOperations__validatedAttributeNameCache[attributeName] = true;
    return true;
  }
  reactlibDOMPropertyOperations__illegalAttributeNameCache[attributeName] = true;
  process.env.NODE_ENV !== 'production' ? reactlibDOMPropertyOperations__warning(false, 'Invalid attribute name: `%s`', attributeName) : void 0;
  return false;
}

function reactlibDOMPropertyOperations__shouldIgnoreValue(propertyInfo, value) {
  return value == null || propertyInfo.hasBooleanValue && !value || propertyInfo.hasNumericValue && isNaN(value) || propertyInfo.hasPositiveNumericValue && value < 1 || propertyInfo.hasOverloadedBooleanValue && value === false;
}

/**
 * Operations for dealing with DOM properties.
 */
var reactlibDOMPropertyOperations__DOMPropertyOperations = {

  /**
   * Creates markup for the ID property.
   *
   * @param {string} id Unescaped ID.
   * @return {string} Markup string.
   */
  createMarkupForID: function (id) {
    return reactlibDOMPropertyOperations__DOMProperty.ID_ATTRIBUTE_NAME + '=' + reactlibDOMPropertyOperations__quoteAttributeValueForBrowser(id);
  },

  setAttributeForID: function (node, id) {
    node.setAttribute(reactlibDOMPropertyOperations__DOMProperty.ID_ATTRIBUTE_NAME, id);
  },

  createMarkupForRoot: function () {
    return reactlibDOMPropertyOperations__DOMProperty.ROOT_ATTRIBUTE_NAME + '=""';
  },

  setAttributeForRoot: function (node) {
    node.setAttribute(reactlibDOMPropertyOperations__DOMProperty.ROOT_ATTRIBUTE_NAME, '');
  },

  /**
   * Creates markup for a property.
   *
   * @param {string} name
   * @param {*} value
   * @return {?string} Markup string, or null if the property was invalid.
   */
  createMarkupForProperty: function (name, value) {
    var propertyInfo = reactlibDOMPropertyOperations__DOMProperty.properties.hasOwnProperty(name) ? reactlibDOMPropertyOperations__DOMProperty.properties[name] : null;
    if (propertyInfo) {
      if (reactlibDOMPropertyOperations__shouldIgnoreValue(propertyInfo, value)) {
        return '';
      }
      var attributeName = propertyInfo.attributeName;
      if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
        return attributeName + '=""';
      }
      return attributeName + '=' + reactlibDOMPropertyOperations__quoteAttributeValueForBrowser(value);
    } else if (reactlibDOMPropertyOperations__DOMProperty.isCustomAttribute(name)) {
      if (value == null) {
        return '';
      }
      return name + '=' + reactlibDOMPropertyOperations__quoteAttributeValueForBrowser(value);
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
    if (!reactlibDOMPropertyOperations__isAttributeNameSafe(name) || value == null) {
      return '';
    }
    return name + '=' + reactlibDOMPropertyOperations__quoteAttributeValueForBrowser(value);
  },

  /**
   * Sets the value for a property on a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   * @param {*} value
   */
  setValueForProperty: function (node, name, value) {
    var propertyInfo = reactlibDOMPropertyOperations__DOMProperty.properties.hasOwnProperty(name) ? reactlibDOMPropertyOperations__DOMProperty.properties[name] : null;
    if (propertyInfo) {
      var mutationMethod = propertyInfo.mutationMethod;
      if (mutationMethod) {
        mutationMethod(node, value);
      } else if (reactlibDOMPropertyOperations__shouldIgnoreValue(propertyInfo, value)) {
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
    } else if (reactlibDOMPropertyOperations__DOMProperty.isCustomAttribute(name)) {
      reactlibDOMPropertyOperations__DOMPropertyOperations.setValueForAttribute(node, name, value);
      return;
    }

    if (process.env.NODE_ENV !== 'production') {
      var payload = {};
      payload[name] = value;
      reactlibDOMPropertyOperations__ReactInstrumentation.debugTool.onHostOperation(reactlibDOMPropertyOperations__ReactDOMComponentTree.getInstanceFromNode(node)._debugID, 'update attribute', payload);
    }
  },

  setValueForAttribute: function (node, name, value) {
    if (!reactlibDOMPropertyOperations__isAttributeNameSafe(name)) {
      return;
    }
    if (value == null) {
      node.removeAttribute(name);
    } else {
      node.setAttribute(name, '' + value);
    }

    if (process.env.NODE_ENV !== 'production') {
      var payload = {};
      payload[name] = value;
      reactlibDOMPropertyOperations__ReactInstrumentation.debugTool.onHostOperation(reactlibDOMPropertyOperations__ReactDOMComponentTree.getInstanceFromNode(node)._debugID, 'update attribute', payload);
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
    if (process.env.NODE_ENV !== 'production') {
      reactlibDOMPropertyOperations__ReactInstrumentation.debugTool.onHostOperation(reactlibDOMPropertyOperations__ReactDOMComponentTree.getInstanceFromNode(node)._debugID, 'remove attribute', name);
    }
  },

  /**
   * Deletes the value for a property on a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   */
  deleteValueForProperty: function (node, name) {
    var propertyInfo = reactlibDOMPropertyOperations__DOMProperty.properties.hasOwnProperty(name) ? reactlibDOMPropertyOperations__DOMProperty.properties[name] : null;
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
    } else if (reactlibDOMPropertyOperations__DOMProperty.isCustomAttribute(name)) {
      node.removeAttribute(name);
    }

    if (process.env.NODE_ENV !== 'production') {
      reactlibDOMPropertyOperations__ReactInstrumentation.debugTool.onHostOperation(reactlibDOMPropertyOperations__ReactDOMComponentTree.getInstanceFromNode(node)._debugID, 'remove attribute', name);
    }
  }

};

$m['react/lib/DOMPropertyOperations'].exports = reactlibDOMPropertyOperations__DOMPropertyOperations;
/*≠≠ node_modules/react/lib/DOMPropertyOperations.js ≠≠*/

/*== node_modules/react/lib/ReactDOMInput.js ==*/
$m['react/lib/ReactDOMInput'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMInput
 */


var reactlibReactDOMInput___prodInvariant = $m['react/lib/reactProdInvariant'].exports,
    reactlibReactDOMInput___assign = $m['object-assign'].exports;

var reactlibReactDOMInput__DisabledInputUtils = $m['react/lib/DisabledInputUtils'].exports;
var reactlibReactDOMInput__DOMPropertyOperations = $m['react/lib/DOMPropertyOperations'].exports;
var reactlibReactDOMInput__LinkedValueUtils = $m['react/lib/LinkedValueUtils'].exports;
var reactlibReactDOMInput__ReactDOMComponentTree = $m['react/lib/ReactDOMComponentTree'].exports;
var reactlibReactDOMInput__ReactUpdates = $m['react/lib/ReactUpdates'].exports;

var reactlibReactDOMInput__invariant = $m['fbjs/lib/invariant'].exports;
var reactlibReactDOMInput__warning = $m['fbjs/lib/warning'].exports;

var reactlibReactDOMInput__didWarnValueLink = false;
var reactlibReactDOMInput__didWarnCheckedLink = false;
var reactlibReactDOMInput__didWarnValueDefaultValue = false;
var reactlibReactDOMInput__didWarnCheckedDefaultChecked = false;
var reactlibReactDOMInput__didWarnControlledToUncontrolled = false;
var reactlibReactDOMInput__didWarnUncontrolledToControlled = false;

function reactlibReactDOMInput__forceUpdateIfMounted() {
  if (this._rootNodeID) {
    // DOM component is still mounted; update
    reactlibReactDOMInput__ReactDOMInput.updateWrapper(this);
  }
}

function reactlibReactDOMInput__isControlled(props) {
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
var reactlibReactDOMInput__ReactDOMInput = {
  getHostProps: function (inst, props) {
    var value = reactlibReactDOMInput__LinkedValueUtils.getValue(props);
    var checked = reactlibReactDOMInput__LinkedValueUtils.getChecked(props);

    var hostProps = reactlibReactDOMInput___assign({
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
    }, reactlibReactDOMInput__DisabledInputUtils.getHostProps(inst, props), {
      defaultChecked: undefined,
      defaultValue: undefined,
      value: value != null ? value : inst._wrapperState.initialValue,
      checked: checked != null ? checked : inst._wrapperState.initialChecked,
      onChange: inst._wrapperState.onChange
    });

    return hostProps;
  },

  mountWrapper: function (inst, props) {
    if (process.env.NODE_ENV !== 'production') {
      reactlibReactDOMInput__LinkedValueUtils.checkPropTypes('input', props, inst._currentElement._owner);

      var owner = inst._currentElement._owner;

      if (props.valueLink !== undefined && !reactlibReactDOMInput__didWarnValueLink) {
        process.env.NODE_ENV !== 'production' ? reactlibReactDOMInput__warning(false, '`valueLink` prop on `input` is deprecated; set `value` and `onChange` instead.') : void 0;
        reactlibReactDOMInput__didWarnValueLink = true;
      }
      if (props.checkedLink !== undefined && !reactlibReactDOMInput__didWarnCheckedLink) {
        process.env.NODE_ENV !== 'production' ? reactlibReactDOMInput__warning(false, '`checkedLink` prop on `input` is deprecated; set `value` and `onChange` instead.') : void 0;
        reactlibReactDOMInput__didWarnCheckedLink = true;
      }
      if (props.checked !== undefined && props.defaultChecked !== undefined && !reactlibReactDOMInput__didWarnCheckedDefaultChecked) {
        process.env.NODE_ENV !== 'production' ? reactlibReactDOMInput__warning(false, '%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', owner && owner.getName() || 'A component', props.type) : void 0;
        reactlibReactDOMInput__didWarnCheckedDefaultChecked = true;
      }
      if (props.value !== undefined && props.defaultValue !== undefined && !reactlibReactDOMInput__didWarnValueDefaultValue) {
        process.env.NODE_ENV !== 'production' ? reactlibReactDOMInput__warning(false, '%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', owner && owner.getName() || 'A component', props.type) : void 0;
        reactlibReactDOMInput__didWarnValueDefaultValue = true;
      }
    }

    var defaultValue = props.defaultValue;
    inst._wrapperState = {
      initialChecked: props.checked != null ? props.checked : props.defaultChecked,
      initialValue: props.value != null ? props.value : defaultValue,
      listeners: null,
      onChange: reactlibReactDOMInput___handleChange.bind(inst)
    };

    if (process.env.NODE_ENV !== 'production') {
      inst._wrapperState.controlled = reactlibReactDOMInput__isControlled(props);
    }
  },

  updateWrapper: function (inst) {
    var props = inst._currentElement.props;

    if (process.env.NODE_ENV !== 'production') {
      var controlled = reactlibReactDOMInput__isControlled(props);
      var owner = inst._currentElement._owner;

      if (!inst._wrapperState.controlled && controlled && !reactlibReactDOMInput__didWarnUncontrolledToControlled) {
        process.env.NODE_ENV !== 'production' ? reactlibReactDOMInput__warning(false, '%s is changing an uncontrolled input of type %s to be controlled. ' + 'Input elements should not switch from uncontrolled to controlled (or vice versa). ' + 'Decide between using a controlled or uncontrolled input ' + 'element for the lifetime of the component. More info: https://fb.me/react-controlled-components', owner && owner.getName() || 'A component', props.type) : void 0;
        reactlibReactDOMInput__didWarnUncontrolledToControlled = true;
      }
      if (inst._wrapperState.controlled && !controlled && !reactlibReactDOMInput__didWarnControlledToUncontrolled) {
        process.env.NODE_ENV !== 'production' ? reactlibReactDOMInput__warning(false, '%s is changing a controlled input of type %s to be uncontrolled. ' + 'Input elements should not switch from controlled to uncontrolled (or vice versa). ' + 'Decide between using a controlled or uncontrolled input ' + 'element for the lifetime of the component. More info: https://fb.me/react-controlled-components', owner && owner.getName() || 'A component', props.type) : void 0;
        reactlibReactDOMInput__didWarnControlledToUncontrolled = true;
      }
    }

    // TODO: Shouldn't this be getChecked(props)?
    var checked = props.checked;
    if (checked != null) {
      reactlibReactDOMInput__DOMPropertyOperations.setValueForProperty(reactlibReactDOMInput__ReactDOMComponentTree.getNodeFromInstance(inst), 'checked', checked || false);
    }

    var node = reactlibReactDOMInput__ReactDOMComponentTree.getNodeFromInstance(inst);
    var value = reactlibReactDOMInput__LinkedValueUtils.getValue(props);
    if (value != null) {

      // Cast `value` to a string to ensure the value is set correctly. While
      // browsers typically do this as necessary, jsdom doesn't.
      var newValue = '' + value;

      // To avoid side effects (such as losing text selection), only set value if changed
      if (newValue !== node.value) {
        node.value = newValue;
      }
    } else {
      if (props.value == null && props.defaultValue != null) {
        node.defaultValue = '' + props.defaultValue;
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
    var node = reactlibReactDOMInput__ReactDOMComponentTree.getNodeFromInstance(inst);

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

function reactlibReactDOMInput___handleChange(event) {
  var props = this._currentElement.props;

  var returnValue = reactlibReactDOMInput__LinkedValueUtils.executeOnChange(props, event);

  // Here we use asap to wait until all updates have propagated, which
  // is important when using controlled components within layers:
  // https://github.com/facebook/react/issues/1698
  reactlibReactDOMInput__ReactUpdates.asap(reactlibReactDOMInput__forceUpdateIfMounted, this);

  var name = props.name;
  if (props.type === 'radio' && name != null) {
    var rootNode = reactlibReactDOMInput__ReactDOMComponentTree.getNodeFromInstance(this);
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
      var otherInstance = reactlibReactDOMInput__ReactDOMComponentTree.getInstanceFromNode(otherNode);
      !otherInstance ? process.env.NODE_ENV !== 'production' ? reactlibReactDOMInput__invariant(false, 'ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.') : reactlibReactDOMInput___prodInvariant('90') : void 0;
      // If this is a controlled radio button group, forcing the input that
      // was previously checked to update will cause it to be come re-checked
      // as appropriate.
      reactlibReactDOMInput__ReactUpdates.asap(reactlibReactDOMInput__forceUpdateIfMounted, otherInstance);
    }
  }

  return returnValue;
}

$m['react/lib/ReactDOMInput'].exports = reactlibReactDOMInput__ReactDOMInput;
/*≠≠ node_modules/react/lib/ReactDOMInput.js ≠≠*/

/*== node_modules/react/lib/ReactDOMButton.js ==*/
$m['react/lib/ReactDOMButton'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMButton
 */


var reactlibReactDOMButton__DisabledInputUtils = $m['react/lib/DisabledInputUtils'].exports;

/**
 * Implements a <button> host component that does not receive mouse events
 * when `disabled` is set.
 */
var reactlibReactDOMButton__ReactDOMButton = {
  getHostProps: reactlibReactDOMButton__DisabledInputUtils.getHostProps
};

$m['react/lib/ReactDOMButton'].exports = reactlibReactDOMButton__ReactDOMButton;
/*≠≠ node_modules/react/lib/ReactDOMButton.js ≠≠*/

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

/*== node_modules/react/lib/dangerousStyleValue.js ==*/
$m['react/lib/dangerousStyleValue'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule dangerousStyleValue
 */


var reactlibdangerousStyleValue__CSSProperty = $m['react/lib/CSSProperty'].exports;
var reactlibdangerousStyleValue__warning = $m['fbjs/lib/warning'].exports;

var reactlibdangerousStyleValue__isUnitlessNumber = reactlibdangerousStyleValue__CSSProperty.isUnitlessNumber;
var reactlibdangerousStyleValue__styleWarnings = {};

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
function reactlibdangerousStyleValue__dangerousStyleValue(name, value, component) {
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
  if (isNonNumeric || value === 0 || reactlibdangerousStyleValue__isUnitlessNumber.hasOwnProperty(name) && reactlibdangerousStyleValue__isUnitlessNumber[name]) {
    return '' + value; // cast to string
  }

  if (typeof value === 'string') {
    if (process.env.NODE_ENV !== 'production') {
      // Allow '0' to pass through without warning. 0 is already special and
      // doesn't require units, so we don't need to warn about it.
      if (component && value !== '0') {
        var owner = component._currentElement._owner;
        var ownerName = owner ? owner.getName() : null;
        if (ownerName && !reactlibdangerousStyleValue__styleWarnings[ownerName]) {
          reactlibdangerousStyleValue__styleWarnings[ownerName] = {};
        }
        var warned = false;
        if (ownerName) {
          var warnings = reactlibdangerousStyleValue__styleWarnings[ownerName];
          warned = warnings[name];
          if (!warned) {
            warnings[name] = true;
          }
        }
        if (!warned) {
          process.env.NODE_ENV !== 'production' ? reactlibdangerousStyleValue__warning(false, 'a `%s` tag (owner: `%s`) was passed a numeric string value ' + 'for CSS property `%s` (value: `%s`) which will be treated ' + 'as a unitless number in a future version of React.', component._currentElement.type, ownerName || 'unknown', name, value) : void 0;
        }
      }
    }
    value = value.trim();
  }
  return value + 'px';
}

$m['react/lib/dangerousStyleValue'].exports = reactlibdangerousStyleValue__dangerousStyleValue;
/*≠≠ node_modules/react/lib/dangerousStyleValue.js ≠≠*/

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

/*== node_modules/react/lib/CSSPropertyOperations.js ==*/
$m['react/lib/CSSPropertyOperations'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSPropertyOperations
 */


var reactlibCSSPropertyOperations__CSSProperty = $m['react/lib/CSSProperty'].exports;
var reactlibCSSPropertyOperations__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;
var reactlibCSSPropertyOperations__ReactInstrumentation = $m['react/lib/ReactInstrumentation'].exports;

var reactlibCSSPropertyOperations__camelizeStyleName = $m['fbjs/lib/camelizeStyleName'].exports;
var reactlibCSSPropertyOperations__dangerousStyleValue = $m['react/lib/dangerousStyleValue'].exports;
var reactlibCSSPropertyOperations__hyphenateStyleName = $m['fbjs/lib/hyphenateStyleName'].exports;
var reactlibCSSPropertyOperations__memoizeStringOnly = $m['fbjs/lib/memoizeStringOnly'].exports;
var reactlibCSSPropertyOperations__warning = $m['fbjs/lib/warning'].exports;

var reactlibCSSPropertyOperations__processStyleName = reactlibCSSPropertyOperations__memoizeStringOnly(function (styleName) {
  return reactlibCSSPropertyOperations__hyphenateStyleName(styleName);
});

var reactlibCSSPropertyOperations__hasShorthandPropertyBug = false;
var reactlibCSSPropertyOperations__styleFloatAccessor = 'cssFloat';
if (reactlibCSSPropertyOperations__ExecutionEnvironment.canUseDOM) {
  var reactlibCSSPropertyOperations__tempStyle = document.createElement('div').style;
  try {
    // IE8 throws "Invalid argument." if resetting shorthand style properties.
    reactlibCSSPropertyOperations__tempStyle.font = '';
  } catch (e) {
    reactlibCSSPropertyOperations__hasShorthandPropertyBug = true;
  }
  // IE8 only supports accessing cssFloat (standard) as styleFloat
  if (document.documentElement.style.cssFloat === undefined) {
    reactlibCSSPropertyOperations__styleFloatAccessor = 'styleFloat';
  }
}

if (process.env.NODE_ENV !== 'production') {
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var reactlibCSSPropertyOperations__badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

  // style values shouldn't contain a semicolon
  var reactlibCSSPropertyOperations__badStyleValueWithSemicolonPattern = /;\s*$/;

  var reactlibCSSPropertyOperations__warnedStyleNames = {};
  var reactlibCSSPropertyOperations__warnedStyleValues = {};
  var reactlibCSSPropertyOperations__warnedForNaNValue = false;

  var reactlibCSSPropertyOperations__warnHyphenatedStyleName = function (name, owner) {
    if (reactlibCSSPropertyOperations__warnedStyleNames.hasOwnProperty(name) && reactlibCSSPropertyOperations__warnedStyleNames[name]) {
      return;
    }

    reactlibCSSPropertyOperations__warnedStyleNames[name] = true;
    process.env.NODE_ENV !== 'production' ? reactlibCSSPropertyOperations__warning(false, 'Unsupported style property %s. Did you mean %s?%s', name, reactlibCSSPropertyOperations__camelizeStyleName(name), reactlibCSSPropertyOperations__checkRenderMessage(owner)) : void 0;
  };

  var reactlibCSSPropertyOperations__warnBadVendoredStyleName = function (name, owner) {
    if (reactlibCSSPropertyOperations__warnedStyleNames.hasOwnProperty(name) && reactlibCSSPropertyOperations__warnedStyleNames[name]) {
      return;
    }

    reactlibCSSPropertyOperations__warnedStyleNames[name] = true;
    process.env.NODE_ENV !== 'production' ? reactlibCSSPropertyOperations__warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), reactlibCSSPropertyOperations__checkRenderMessage(owner)) : void 0;
  };

  var reactlibCSSPropertyOperations__warnStyleValueWithSemicolon = function (name, value, owner) {
    if (reactlibCSSPropertyOperations__warnedStyleValues.hasOwnProperty(value) && reactlibCSSPropertyOperations__warnedStyleValues[value]) {
      return;
    }

    reactlibCSSPropertyOperations__warnedStyleValues[value] = true;
    process.env.NODE_ENV !== 'production' ? reactlibCSSPropertyOperations__warning(false, 'Style property values shouldn\'t contain a semicolon.%s ' + 'Try "%s: %s" instead.', reactlibCSSPropertyOperations__checkRenderMessage(owner), name, value.replace(reactlibCSSPropertyOperations__badStyleValueWithSemicolonPattern, '')) : void 0;
  };

  var reactlibCSSPropertyOperations__warnStyleValueIsNaN = function (name, value, owner) {
    if (reactlibCSSPropertyOperations__warnedForNaNValue) {
      return;
    }

    reactlibCSSPropertyOperations__warnedForNaNValue = true;
    process.env.NODE_ENV !== 'production' ? reactlibCSSPropertyOperations__warning(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, reactlibCSSPropertyOperations__checkRenderMessage(owner)) : void 0;
  };

  var reactlibCSSPropertyOperations__checkRenderMessage = function (owner) {
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
  var reactlibCSSPropertyOperations__warnValidStyle = function (name, value, component) {
    var owner;
    if (component) {
      owner = component._currentElement._owner;
    }
    if (name.indexOf('-') > -1) {
      reactlibCSSPropertyOperations__warnHyphenatedStyleName(name, owner);
    } else if (reactlibCSSPropertyOperations__badVendoredStyleNamePattern.test(name)) {
      reactlibCSSPropertyOperations__warnBadVendoredStyleName(name, owner);
    } else if (reactlibCSSPropertyOperations__badStyleValueWithSemicolonPattern.test(value)) {
      reactlibCSSPropertyOperations__warnStyleValueWithSemicolon(name, value, owner);
    }

    if (typeof value === 'number' && isNaN(value)) {
      reactlibCSSPropertyOperations__warnStyleValueIsNaN(name, value, owner);
    }
  };
}

/**
 * Operations for dealing with CSS properties.
 */
var reactlibCSSPropertyOperations__CSSPropertyOperations = {

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
      var styleValue = styles[styleName];
      if (process.env.NODE_ENV !== 'production') {
        reactlibCSSPropertyOperations__warnValidStyle(styleName, styleValue, component);
      }
      if (styleValue != null) {
        serialized += reactlibCSSPropertyOperations__processStyleName(styleName) + ':';
        serialized += reactlibCSSPropertyOperations__dangerousStyleValue(styleName, styleValue, component) + ';';
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
    if (process.env.NODE_ENV !== 'production') {
      reactlibCSSPropertyOperations__ReactInstrumentation.debugTool.onHostOperation(component._debugID, 'update styles', styles);
    }

    var style = node.style;
    for (var styleName in styles) {
      if (!styles.hasOwnProperty(styleName)) {
        continue;
      }
      if (process.env.NODE_ENV !== 'production') {
        reactlibCSSPropertyOperations__warnValidStyle(styleName, styles[styleName], component);
      }
      var styleValue = reactlibCSSPropertyOperations__dangerousStyleValue(styleName, styles[styleName], component);
      if (styleName === 'float' || styleName === 'cssFloat') {
        styleName = reactlibCSSPropertyOperations__styleFloatAccessor;
      }
      if (styleValue) {
        style[styleName] = styleValue;
      } else {
        var expansion = reactlibCSSPropertyOperations__hasShorthandPropertyBug && reactlibCSSPropertyOperations__CSSProperty.shorthandPropertyExpansions[styleName];
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

$m['react/lib/CSSPropertyOperations'].exports = reactlibCSSPropertyOperations__CSSPropertyOperations;
/*≠≠ node_modules/react/lib/CSSPropertyOperations.js ≠≠*/

/*== node_modules/react/lib/AutoFocusUtils.js ==*/
$m['react/lib/AutoFocusUtils'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule AutoFocusUtils
 */


var reactlibAutoFocusUtils__ReactDOMComponentTree = $m['react/lib/ReactDOMComponentTree'].exports;

var reactlibAutoFocusUtils__focusNode = $m['fbjs/lib/focusNode'].exports;

var reactlibAutoFocusUtils__AutoFocusUtils = {
  focusDOMComponent: function () {
    reactlibAutoFocusUtils__focusNode(reactlibAutoFocusUtils__ReactDOMComponentTree.getNodeFromInstance(this));
  }
};

$m['react/lib/AutoFocusUtils'].exports = reactlibAutoFocusUtils__AutoFocusUtils;
/*≠≠ node_modules/react/lib/AutoFocusUtils.js ≠≠*/

/*== node_modules/react/lib/ReactDOMComponent.js ==*/
$m['react/lib/ReactDOMComponent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMComponent
 */

/* global hasOwnProperty:true */


var reactlibReactDOMComponent___prodInvariant = $m['react/lib/reactProdInvariant'].exports,
    reactlibReactDOMComponent___assign = $m['object-assign'].exports;

var reactlibReactDOMComponent__AutoFocusUtils = $m['react/lib/AutoFocusUtils'].exports;
var reactlibReactDOMComponent__CSSPropertyOperations = $m['react/lib/CSSPropertyOperations'].exports;
var reactlibReactDOMComponent__DOMLazyTree = $m['react/lib/DOMLazyTree'].exports;
var reactlibReactDOMComponent__DOMNamespaces = $m['react/lib/DOMNamespaces'].exports;
var reactlibReactDOMComponent__DOMProperty = $m['react/lib/DOMProperty'].exports;
var reactlibReactDOMComponent__DOMPropertyOperations = $m['react/lib/DOMPropertyOperations'].exports;
var reactlibReactDOMComponent__EventConstants = $m['react/lib/EventConstants'].exports;
var reactlibReactDOMComponent__EventPluginHub = $m['react/lib/EventPluginHub'].exports;
var reactlibReactDOMComponent__EventPluginRegistry = $m['react/lib/EventPluginRegistry'].exports;
var reactlibReactDOMComponent__ReactBrowserEventEmitter = $m['react/lib/ReactBrowserEventEmitter'].exports;
var reactlibReactDOMComponent__ReactDOMButton = $m['react/lib/ReactDOMButton'].exports;
var reactlibReactDOMComponent__ReactDOMComponentFlags = $m['react/lib/ReactDOMComponentFlags'].exports;
var reactlibReactDOMComponent__ReactDOMComponentTree = $m['react/lib/ReactDOMComponentTree'].exports;
var reactlibReactDOMComponent__ReactDOMInput = $m['react/lib/ReactDOMInput'].exports;
var reactlibReactDOMComponent__ReactDOMOption = $m['react/lib/ReactDOMOption'].exports;
var reactlibReactDOMComponent__ReactDOMSelect = $m['react/lib/ReactDOMSelect'].exports;
var reactlibReactDOMComponent__ReactDOMTextarea = $m['react/lib/ReactDOMTextarea'].exports;
var reactlibReactDOMComponent__ReactInstrumentation = $m['react/lib/ReactInstrumentation'].exports;
var reactlibReactDOMComponent__ReactMultiChild = $m['react/lib/ReactMultiChild'].exports;
var reactlibReactDOMComponent__ReactServerRenderingTransaction = $m['react/lib/ReactServerRenderingTransaction'].exports;

var reactlibReactDOMComponent__emptyFunction = $m['fbjs/lib/emptyFunction'].exports;
var reactlibReactDOMComponent__escapeTextContentForBrowser = $m['react/lib/escapeTextContentForBrowser'].exports;
var reactlibReactDOMComponent__invariant = $m['fbjs/lib/invariant'].exports;
var reactlibReactDOMComponent__isEventSupported = $m['react/lib/isEventSupported'].exports;
var reactlibReactDOMComponent__keyOf = $m['fbjs/lib/keyOf'].exports;
var reactlibReactDOMComponent__shallowEqual = $m['fbjs/lib/shallowEqual'].exports;
var reactlibReactDOMComponent__validateDOMNesting = $m['react/lib/validateDOMNesting'].exports;
var reactlibReactDOMComponent__warning = $m['fbjs/lib/warning'].exports;

var reactlibReactDOMComponent__Flags = reactlibReactDOMComponent__ReactDOMComponentFlags;
var reactlibReactDOMComponent__deleteListener = reactlibReactDOMComponent__EventPluginHub.deleteListener;
var reactlibReactDOMComponent__getNode = reactlibReactDOMComponent__ReactDOMComponentTree.getNodeFromInstance;
var reactlibReactDOMComponent__listenTo = reactlibReactDOMComponent__ReactBrowserEventEmitter.listenTo;
var reactlibReactDOMComponent__registrationNameModules = reactlibReactDOMComponent__EventPluginRegistry.registrationNameModules;

// For quickly matching children type, to test if can be treated as content.
var reactlibReactDOMComponent__CONTENT_TYPES = { 'string': true, 'number': true };

var reactlibReactDOMComponent__STYLE = reactlibReactDOMComponent__keyOf({ style: null });
var reactlibReactDOMComponent__HTML = reactlibReactDOMComponent__keyOf({ __html: null });
var reactlibReactDOMComponent__RESERVED_PROPS = {
  children: null,
  dangerouslySetInnerHTML: null,
  suppressContentEditableWarning: null
};

// Node type for document fragments (Node.DOCUMENT_FRAGMENT_NODE).
var reactlibReactDOMComponent__DOC_FRAGMENT_TYPE = 11;

function reactlibReactDOMComponent__getDeclarationErrorAddendum(internalInstance) {
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

function reactlibReactDOMComponent__friendlyStringify(obj) {
  if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      return '[' + obj.map(reactlibReactDOMComponent__friendlyStringify).join(', ') + ']';
    } else {
      var pairs = [];
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var keyEscaped = /^[a-z$_][\w$_]*$/i.test(key) ? key : JSON.stringify(key);
          pairs.push(keyEscaped + ': ' + reactlibReactDOMComponent__friendlyStringify(obj[key]));
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

var reactlibReactDOMComponent__styleMutationWarning = {};

function reactlibReactDOMComponent__checkAndWarnForMutatedStyle(style1, style2, component) {
  if (style1 == null || style2 == null) {
    return;
  }
  if (reactlibReactDOMComponent__shallowEqual(style1, style2)) {
    return;
  }

  var componentName = component._tag;
  var owner = component._currentElement._owner;
  var ownerName;
  if (owner) {
    ownerName = owner.getName();
  }

  var hash = ownerName + '|' + componentName;

  if (reactlibReactDOMComponent__styleMutationWarning.hasOwnProperty(hash)) {
    return;
  }

  reactlibReactDOMComponent__styleMutationWarning[hash] = true;

  process.env.NODE_ENV !== 'production' ? reactlibReactDOMComponent__warning(false, '`%s` was passed a style object that has previously been mutated. ' + 'Mutating `style` is deprecated. Consider cloning it beforehand. Check ' + 'the `render` %s. Previous style: %s. Mutated style: %s.', componentName, owner ? 'of `' + ownerName + '`' : 'using <' + componentName + '>', reactlibReactDOMComponent__friendlyStringify(style1), reactlibReactDOMComponent__friendlyStringify(style2)) : void 0;
}

/**
 * @param {object} component
 * @param {?object} props
 */
function reactlibReactDOMComponent__assertValidProps(component, props) {
  if (!props) {
    return;
  }
  // Note the use of `==` which checks for null or undefined.
  if (reactlibReactDOMComponent__voidElementTags[component._tag]) {
    !(props.children == null && props.dangerouslySetInnerHTML == null) ? process.env.NODE_ENV !== 'production' ? reactlibReactDOMComponent__invariant(false, '%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s', component._tag, component._currentElement._owner ? ' Check the render method of ' + component._currentElement._owner.getName() + '.' : '') : reactlibReactDOMComponent___prodInvariant('137', component._tag, component._currentElement._owner ? ' Check the render method of ' + component._currentElement._owner.getName() + '.' : '') : void 0;
  }
  if (props.dangerouslySetInnerHTML != null) {
    !(props.children == null) ? process.env.NODE_ENV !== 'production' ? reactlibReactDOMComponent__invariant(false, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.') : reactlibReactDOMComponent___prodInvariant('60') : void 0;
    !(typeof props.dangerouslySetInnerHTML === 'object' && reactlibReactDOMComponent__HTML in props.dangerouslySetInnerHTML) ? process.env.NODE_ENV !== 'production' ? reactlibReactDOMComponent__invariant(false, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.') : reactlibReactDOMComponent___prodInvariant('61') : void 0;
  }
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== 'production' ? reactlibReactDOMComponent__warning(props.innerHTML == null, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.') : void 0;
    process.env.NODE_ENV !== 'production' ? reactlibReactDOMComponent__warning(props.suppressContentEditableWarning || !props.contentEditable || props.children == null, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.') : void 0;
    process.env.NODE_ENV !== 'production' ? reactlibReactDOMComponent__warning(props.onFocusIn == null && props.onFocusOut == null, 'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.') : void 0;
  }
  !(props.style == null || typeof props.style === 'object') ? process.env.NODE_ENV !== 'production' ? reactlibReactDOMComponent__invariant(false, 'The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + \'em\'}} when using JSX.%s', reactlibReactDOMComponent__getDeclarationErrorAddendum(component)) : reactlibReactDOMComponent___prodInvariant('62', reactlibReactDOMComponent__getDeclarationErrorAddendum(component)) : void 0;
}

function reactlibReactDOMComponent__enqueuePutListener(inst, registrationName, listener, transaction) {
  if (transaction instanceof reactlibReactDOMComponent__ReactServerRenderingTransaction) {
    return;
  }
  if (process.env.NODE_ENV !== 'production') {
    // IE8 has no API for event capturing and the `onScroll` event doesn't
    // bubble.
    process.env.NODE_ENV !== 'production' ? reactlibReactDOMComponent__warning(registrationName !== 'onScroll' || reactlibReactDOMComponent__isEventSupported('scroll', true), 'This browser doesn\'t support the `onScroll` event') : void 0;
  }
  var containerInfo = inst._hostContainerInfo;
  var isDocumentFragment = containerInfo._node && containerInfo._node.nodeType === reactlibReactDOMComponent__DOC_FRAGMENT_TYPE;
  var doc = isDocumentFragment ? containerInfo._node : containerInfo._ownerDocument;
  reactlibReactDOMComponent__listenTo(registrationName, doc);
  transaction.getReactMountReady().enqueue(reactlibReactDOMComponent__putListener, {
    inst: inst,
    registrationName: registrationName,
    listener: listener
  });
}

function reactlibReactDOMComponent__putListener() {
  var listenerToPut = this;
  reactlibReactDOMComponent__EventPluginHub.putListener(listenerToPut.inst, listenerToPut.registrationName, listenerToPut.listener);
}

function reactlibReactDOMComponent__inputPostMount() {
  var inst = this;
  reactlibReactDOMComponent__ReactDOMInput.postMountWrapper(inst);
}

function reactlibReactDOMComponent__textareaPostMount() {
  var inst = this;
  reactlibReactDOMComponent__ReactDOMTextarea.postMountWrapper(inst);
}

function reactlibReactDOMComponent__optionPostMount() {
  var inst = this;
  reactlibReactDOMComponent__ReactDOMOption.postMountWrapper(inst);
}

var reactlibReactDOMComponent__setAndValidateContentChildDev = reactlibReactDOMComponent__emptyFunction;
if (process.env.NODE_ENV !== 'production') {
  reactlibReactDOMComponent__setAndValidateContentChildDev = function (content) {
    var hasExistingContent = this._contentDebugID != null;
    var debugID = this._debugID;
    // This ID represents the inlined child that has no backing instance:
    var contentDebugID = -debugID;

    if (content == null) {
      if (hasExistingContent) {
        reactlibReactDOMComponent__ReactInstrumentation.debugTool.onUnmountComponent(this._contentDebugID);
      }
      this._contentDebugID = null;
      return;
    }

    reactlibReactDOMComponent__validateDOMNesting(null, String(content), this, this._ancestorInfo);
    this._contentDebugID = contentDebugID;
    if (hasExistingContent) {
      reactlibReactDOMComponent__ReactInstrumentation.debugTool.onBeforeUpdateComponent(contentDebugID, content);
      reactlibReactDOMComponent__ReactInstrumentation.debugTool.onUpdateComponent(contentDebugID);
    } else {
      reactlibReactDOMComponent__ReactInstrumentation.debugTool.onBeforeMountComponent(contentDebugID, content, debugID);
      reactlibReactDOMComponent__ReactInstrumentation.debugTool.onMountComponent(contentDebugID);
      reactlibReactDOMComponent__ReactInstrumentation.debugTool.onSetChildren(debugID, [contentDebugID]);
    }
  };
}

// There are so many media events, it makes sense to just
// maintain a list rather than create a `trapBubbledEvent` for each
var reactlibReactDOMComponent__mediaEvents = {
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

function reactlibReactDOMComponent__trapBubbledEventsLocal() {
  var inst = this;
  // If a component renders to null or if another component fatals and causes
  // the state of the tree to be corrupted, `node` here can be null.
  !inst._rootNodeID ? process.env.NODE_ENV !== 'production' ? reactlibReactDOMComponent__invariant(false, 'Must be mounted to trap events') : reactlibReactDOMComponent___prodInvariant('63') : void 0;
  var node = reactlibReactDOMComponent__getNode(inst);
  !node ? process.env.NODE_ENV !== 'production' ? reactlibReactDOMComponent__invariant(false, 'trapBubbledEvent(...): Requires node to be rendered.') : reactlibReactDOMComponent___prodInvariant('64') : void 0;

  switch (inst._tag) {
    case 'iframe':
    case 'object':
      inst._wrapperState.listeners = [reactlibReactDOMComponent__ReactBrowserEventEmitter.trapBubbledEvent(reactlibReactDOMComponent__EventConstants.topLevelTypes.topLoad, 'load', node)];
      break;
    case 'video':
    case 'audio':

      inst._wrapperState.listeners = [];
      // Create listener for each media event
      for (var event in reactlibReactDOMComponent__mediaEvents) {
        if (reactlibReactDOMComponent__mediaEvents.hasOwnProperty(event)) {
          inst._wrapperState.listeners.push(reactlibReactDOMComponent__ReactBrowserEventEmitter.trapBubbledEvent(reactlibReactDOMComponent__EventConstants.topLevelTypes[event], reactlibReactDOMComponent__mediaEvents[event], node));
        }
      }
      break;
    case 'source':
      inst._wrapperState.listeners = [reactlibReactDOMComponent__ReactBrowserEventEmitter.trapBubbledEvent(reactlibReactDOMComponent__EventConstants.topLevelTypes.topError, 'error', node)];
      break;
    case 'img':
      inst._wrapperState.listeners = [reactlibReactDOMComponent__ReactBrowserEventEmitter.trapBubbledEvent(reactlibReactDOMComponent__EventConstants.topLevelTypes.topError, 'error', node), reactlibReactDOMComponent__ReactBrowserEventEmitter.trapBubbledEvent(reactlibReactDOMComponent__EventConstants.topLevelTypes.topLoad, 'load', node)];
      break;
    case 'form':
      inst._wrapperState.listeners = [reactlibReactDOMComponent__ReactBrowserEventEmitter.trapBubbledEvent(reactlibReactDOMComponent__EventConstants.topLevelTypes.topReset, 'reset', node), reactlibReactDOMComponent__ReactBrowserEventEmitter.trapBubbledEvent(reactlibReactDOMComponent__EventConstants.topLevelTypes.topSubmit, 'submit', node)];
      break;
    case 'input':
    case 'select':
    case 'textarea':
      inst._wrapperState.listeners = [reactlibReactDOMComponent__ReactBrowserEventEmitter.trapBubbledEvent(reactlibReactDOMComponent__EventConstants.topLevelTypes.topInvalid, 'invalid', node)];
      break;
  }
}

function reactlibReactDOMComponent__postUpdateSelectWrapper() {
  reactlibReactDOMComponent__ReactDOMSelect.postUpdateWrapper(this);
}

// For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special-case tags.

var reactlibReactDOMComponent__omittedCloseTags = {
  'area': true,
  'base': true,
  'br': true,
  'col': true,
  'embed': true,
  'hr': true,
  'img': true,
  'input': true,
  'keygen': true,
  'link': true,
  'meta': true,
  'param': true,
  'source': true,
  'track': true,
  'wbr': true
};

// NOTE: menuitem's close tag should be omitted, but that causes problems.
var reactlibReactDOMComponent__newlineEatingTags = {
  'listing': true,
  'pre': true,
  'textarea': true
};

// For HTML, certain tags cannot have children. This has the same purpose as
// `omittedCloseTags` except that `menuitem` should still have its closing tag.

var reactlibReactDOMComponent__voidElementTags = reactlibReactDOMComponent___assign({
  'menuitem': true
}, reactlibReactDOMComponent__omittedCloseTags);

// We accept any tag to be rendered but since this gets injected into arbitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name

var reactlibReactDOMComponent__VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
var reactlibReactDOMComponent__validatedTagCache = {};
var reactlibReactDOMComponent__hasOwnProperty = {}.hasOwnProperty;

function reactlibReactDOMComponent__validateDangerousTag(tag) {
  if (!reactlibReactDOMComponent__hasOwnProperty.call(reactlibReactDOMComponent__validatedTagCache, tag)) {
    !reactlibReactDOMComponent__VALID_TAG_REGEX.test(tag) ? process.env.NODE_ENV !== 'production' ? reactlibReactDOMComponent__invariant(false, 'Invalid tag: %s', tag) : reactlibReactDOMComponent___prodInvariant('65', tag) : void 0;
    reactlibReactDOMComponent__validatedTagCache[tag] = true;
  }
}

function reactlibReactDOMComponent__isCustomComponent(tagName, props) {
  return tagName.indexOf('-') >= 0 || props.is != null;
}

var reactlibReactDOMComponent__globalIdCounter = 1;

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
function reactlibReactDOMComponent__ReactDOMComponent(element) {
  var tag = element.type;
  reactlibReactDOMComponent__validateDangerousTag(tag);
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
  if (process.env.NODE_ENV !== 'production') {
    this._ancestorInfo = null;
    reactlibReactDOMComponent__setAndValidateContentChildDev.call(this, null);
  }
}

reactlibReactDOMComponent__ReactDOMComponent.displayName = 'ReactDOMComponent';

reactlibReactDOMComponent__ReactDOMComponent.Mixin = {

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
    this._rootNodeID = reactlibReactDOMComponent__globalIdCounter++;
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
        transaction.getReactMountReady().enqueue(reactlibReactDOMComponent__trapBubbledEventsLocal, this);
        break;
      case 'button':
        props = reactlibReactDOMComponent__ReactDOMButton.getHostProps(this, props, hostParent);
        break;
      case 'input':
        reactlibReactDOMComponent__ReactDOMInput.mountWrapper(this, props, hostParent);
        props = reactlibReactDOMComponent__ReactDOMInput.getHostProps(this, props);
        transaction.getReactMountReady().enqueue(reactlibReactDOMComponent__trapBubbledEventsLocal, this);
        break;
      case 'option':
        reactlibReactDOMComponent__ReactDOMOption.mountWrapper(this, props, hostParent);
        props = reactlibReactDOMComponent__ReactDOMOption.getHostProps(this, props);
        break;
      case 'select':
        reactlibReactDOMComponent__ReactDOMSelect.mountWrapper(this, props, hostParent);
        props = reactlibReactDOMComponent__ReactDOMSelect.getHostProps(this, props);
        transaction.getReactMountReady().enqueue(reactlibReactDOMComponent__trapBubbledEventsLocal, this);
        break;
      case 'textarea':
        reactlibReactDOMComponent__ReactDOMTextarea.mountWrapper(this, props, hostParent);
        props = reactlibReactDOMComponent__ReactDOMTextarea.getHostProps(this, props);
        transaction.getReactMountReady().enqueue(reactlibReactDOMComponent__trapBubbledEventsLocal, this);
        break;
    }

    reactlibReactDOMComponent__assertValidProps(this, props);

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
    if (namespaceURI == null || namespaceURI === reactlibReactDOMComponent__DOMNamespaces.svg && parentTag === 'foreignobject') {
      namespaceURI = reactlibReactDOMComponent__DOMNamespaces.html;
    }
    if (namespaceURI === reactlibReactDOMComponent__DOMNamespaces.html) {
      if (this._tag === 'svg') {
        namespaceURI = reactlibReactDOMComponent__DOMNamespaces.svg;
      } else if (this._tag === 'math') {
        namespaceURI = reactlibReactDOMComponent__DOMNamespaces.mathml;
      }
    }
    this._namespaceURI = namespaceURI;

    if (process.env.NODE_ENV !== 'production') {
      var parentInfo;
      if (hostParent != null) {
        parentInfo = hostParent._ancestorInfo;
      } else if (hostContainerInfo._tag) {
        parentInfo = hostContainerInfo._ancestorInfo;
      }
      if (parentInfo) {
        // parentInfo should always be present except for the top-level
        // component when server rendering
        reactlibReactDOMComponent__validateDOMNesting(this._tag, null, this, parentInfo);
      }
      this._ancestorInfo = reactlibReactDOMComponent__validateDOMNesting.updatedAncestorInfo(parentInfo, this._tag, this);
    }

    var mountImage;
    if (transaction.useCreateElement) {
      var ownerDocument = hostContainerInfo._ownerDocument;
      var el;
      if (namespaceURI === reactlibReactDOMComponent__DOMNamespaces.html) {
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
      reactlibReactDOMComponent__ReactDOMComponentTree.precacheNode(this, el);
      this._flags |= reactlibReactDOMComponent__Flags.hasCachedChildNodes;
      if (!this._hostParent) {
        reactlibReactDOMComponent__DOMPropertyOperations.setAttributeForRoot(el);
      }
      this._updateDOMProperties(null, props, transaction);
      var lazyTree = reactlibReactDOMComponent__DOMLazyTree(el);
      this._createInitialChildren(transaction, props, context, lazyTree);
      mountImage = lazyTree;
    } else {
      var tagOpen = this._createOpenTagMarkupAndPutListeners(transaction, props);
      var tagContent = this._createContentMarkup(transaction, props, context);
      if (!tagContent && reactlibReactDOMComponent__omittedCloseTags[this._tag]) {
        mountImage = tagOpen + '/>';
      } else {
        mountImage = tagOpen + '>' + tagContent + '</' + this._currentElement.type + '>';
      }
    }

    switch (this._tag) {
      case 'input':
        transaction.getReactMountReady().enqueue(reactlibReactDOMComponent__inputPostMount, this);
        if (props.autoFocus) {
          transaction.getReactMountReady().enqueue(reactlibReactDOMComponent__AutoFocusUtils.focusDOMComponent, this);
        }
        break;
      case 'textarea':
        transaction.getReactMountReady().enqueue(reactlibReactDOMComponent__textareaPostMount, this);
        if (props.autoFocus) {
          transaction.getReactMountReady().enqueue(reactlibReactDOMComponent__AutoFocusUtils.focusDOMComponent, this);
        }
        break;
      case 'select':
        if (props.autoFocus) {
          transaction.getReactMountReady().enqueue(reactlibReactDOMComponent__AutoFocusUtils.focusDOMComponent, this);
        }
        break;
      case 'button':
        if (props.autoFocus) {
          transaction.getReactMountReady().enqueue(reactlibReactDOMComponent__AutoFocusUtils.focusDOMComponent, this);
        }
        break;
      case 'option':
        transaction.getReactMountReady().enqueue(reactlibReactDOMComponent__optionPostMount, this);
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
      if (reactlibReactDOMComponent__registrationNameModules.hasOwnProperty(propKey)) {
        if (propValue) {
          reactlibReactDOMComponent__enqueuePutListener(this, propKey, propValue, transaction);
        }
      } else {
        if (propKey === reactlibReactDOMComponent__STYLE) {
          if (propValue) {
            if (process.env.NODE_ENV !== 'production') {
              // See `_updateDOMProperties`. style block
              this._previousStyle = propValue;
            }
            propValue = this._previousStyleCopy = reactlibReactDOMComponent___assign({}, props.style);
          }
          propValue = reactlibReactDOMComponent__CSSPropertyOperations.createMarkupForStyles(propValue, this);
        }
        var markup = null;
        if (this._tag != null && reactlibReactDOMComponent__isCustomComponent(this._tag, props)) {
          if (!reactlibReactDOMComponent__RESERVED_PROPS.hasOwnProperty(propKey)) {
            markup = reactlibReactDOMComponent__DOMPropertyOperations.createMarkupForCustomAttribute(propKey, propValue);
          }
        } else {
          markup = reactlibReactDOMComponent__DOMPropertyOperations.createMarkupForProperty(propKey, propValue);
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
      ret += ' ' + reactlibReactDOMComponent__DOMPropertyOperations.createMarkupForRoot();
    }
    ret += ' ' + reactlibReactDOMComponent__DOMPropertyOperations.createMarkupForID(this._domID);
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
      var contentToUse = reactlibReactDOMComponent__CONTENT_TYPES[typeof props.children] ? props.children : null;
      var childrenToUse = contentToUse != null ? null : props.children;
      if (contentToUse != null) {
        // TODO: Validate that text is allowed as a child of this node
        ret = reactlibReactDOMComponent__escapeTextContentForBrowser(contentToUse);
        if (process.env.NODE_ENV !== 'production') {
          reactlibReactDOMComponent__setAndValidateContentChildDev.call(this, contentToUse);
        }
      } else if (childrenToUse != null) {
        var mountImages = this.mountChildren(childrenToUse, transaction, context);
        ret = mountImages.join('');
      }
    }
    if (reactlibReactDOMComponent__newlineEatingTags[this._tag] && ret.charAt(0) === '\n') {
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
        reactlibReactDOMComponent__DOMLazyTree.queueHTML(lazyTree, innerHTML.__html);
      }
    } else {
      var contentToUse = reactlibReactDOMComponent__CONTENT_TYPES[typeof props.children] ? props.children : null;
      var childrenToUse = contentToUse != null ? null : props.children;
      if (contentToUse != null) {
        // TODO: Validate that text is allowed as a child of this node
        if (process.env.NODE_ENV !== 'production') {
          reactlibReactDOMComponent__setAndValidateContentChildDev.call(this, contentToUse);
        }
        reactlibReactDOMComponent__DOMLazyTree.queueText(lazyTree, contentToUse);
      } else if (childrenToUse != null) {
        var mountImages = this.mountChildren(childrenToUse, transaction, context);
        for (var i = 0; i < mountImages.length; i++) {
          reactlibReactDOMComponent__DOMLazyTree.queueChild(lazyTree, mountImages[i]);
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
      case 'button':
        lastProps = reactlibReactDOMComponent__ReactDOMButton.getHostProps(this, lastProps);
        nextProps = reactlibReactDOMComponent__ReactDOMButton.getHostProps(this, nextProps);
        break;
      case 'input':
        lastProps = reactlibReactDOMComponent__ReactDOMInput.getHostProps(this, lastProps);
        nextProps = reactlibReactDOMComponent__ReactDOMInput.getHostProps(this, nextProps);
        break;
      case 'option':
        lastProps = reactlibReactDOMComponent__ReactDOMOption.getHostProps(this, lastProps);
        nextProps = reactlibReactDOMComponent__ReactDOMOption.getHostProps(this, nextProps);
        break;
      case 'select':
        lastProps = reactlibReactDOMComponent__ReactDOMSelect.getHostProps(this, lastProps);
        nextProps = reactlibReactDOMComponent__ReactDOMSelect.getHostProps(this, nextProps);
        break;
      case 'textarea':
        lastProps = reactlibReactDOMComponent__ReactDOMTextarea.getHostProps(this, lastProps);
        nextProps = reactlibReactDOMComponent__ReactDOMTextarea.getHostProps(this, nextProps);
        break;
    }

    reactlibReactDOMComponent__assertValidProps(this, nextProps);
    this._updateDOMProperties(lastProps, nextProps, transaction);
    this._updateDOMChildren(lastProps, nextProps, transaction, context);

    switch (this._tag) {
      case 'input':
        // Update the wrapper around inputs *after* updating props. This has to
        // happen after `_updateDOMProperties`. Otherwise HTML5 input validations
        // raise warnings and prevent the new value from being assigned.
        reactlibReactDOMComponent__ReactDOMInput.updateWrapper(this);
        break;
      case 'textarea':
        reactlibReactDOMComponent__ReactDOMTextarea.updateWrapper(this);
        break;
      case 'select':
        // <select> value update needs to occur after <option> children
        // reconciliation
        transaction.getReactMountReady().enqueue(reactlibReactDOMComponent__postUpdateSelectWrapper, this);
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
      if (propKey === reactlibReactDOMComponent__STYLE) {
        var lastStyle = this._previousStyleCopy;
        for (styleName in lastStyle) {
          if (lastStyle.hasOwnProperty(styleName)) {
            styleUpdates = styleUpdates || {};
            styleUpdates[styleName] = '';
          }
        }
        this._previousStyleCopy = null;
      } else if (reactlibReactDOMComponent__registrationNameModules.hasOwnProperty(propKey)) {
        if (lastProps[propKey]) {
          // Only call deleteListener if there was a listener previously or
          // else willDeleteListener gets called when there wasn't actually a
          // listener (e.g., onClick={null})
          reactlibReactDOMComponent__deleteListener(this, propKey);
        }
      } else if (reactlibReactDOMComponent__isCustomComponent(this._tag, lastProps)) {
        if (!reactlibReactDOMComponent__RESERVED_PROPS.hasOwnProperty(propKey)) {
          reactlibReactDOMComponent__DOMPropertyOperations.deleteValueForAttribute(reactlibReactDOMComponent__getNode(this), propKey);
        }
      } else if (reactlibReactDOMComponent__DOMProperty.properties[propKey] || reactlibReactDOMComponent__DOMProperty.isCustomAttribute(propKey)) {
        reactlibReactDOMComponent__DOMPropertyOperations.deleteValueForProperty(reactlibReactDOMComponent__getNode(this), propKey);
      }
    }
    for (propKey in nextProps) {
      var nextProp = nextProps[propKey];
      var lastProp = propKey === reactlibReactDOMComponent__STYLE ? this._previousStyleCopy : lastProps != null ? lastProps[propKey] : undefined;
      if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp || nextProp == null && lastProp == null) {
        continue;
      }
      if (propKey === reactlibReactDOMComponent__STYLE) {
        if (nextProp) {
          if (process.env.NODE_ENV !== 'production') {
            reactlibReactDOMComponent__checkAndWarnForMutatedStyle(this._previousStyleCopy, this._previousStyle, this);
            this._previousStyle = nextProp;
          }
          nextProp = this._previousStyleCopy = reactlibReactDOMComponent___assign({}, nextProp);
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
      } else if (reactlibReactDOMComponent__registrationNameModules.hasOwnProperty(propKey)) {
        if (nextProp) {
          reactlibReactDOMComponent__enqueuePutListener(this, propKey, nextProp, transaction);
        } else if (lastProp) {
          reactlibReactDOMComponent__deleteListener(this, propKey);
        }
      } else if (reactlibReactDOMComponent__isCustomComponent(this._tag, nextProps)) {
        if (!reactlibReactDOMComponent__RESERVED_PROPS.hasOwnProperty(propKey)) {
          reactlibReactDOMComponent__DOMPropertyOperations.setValueForAttribute(reactlibReactDOMComponent__getNode(this), propKey, nextProp);
        }
      } else if (reactlibReactDOMComponent__DOMProperty.properties[propKey] || reactlibReactDOMComponent__DOMProperty.isCustomAttribute(propKey)) {
        var node = reactlibReactDOMComponent__getNode(this);
        // If we're updating to null or undefined, we should remove the property
        // from the DOM node instead of inadvertently setting to a string. This
        // brings us in line with the same behavior we have on initial render.
        if (nextProp != null) {
          reactlibReactDOMComponent__DOMPropertyOperations.setValueForProperty(node, propKey, nextProp);
        } else {
          reactlibReactDOMComponent__DOMPropertyOperations.deleteValueForProperty(node, propKey);
        }
      }
    }
    if (styleUpdates) {
      reactlibReactDOMComponent__CSSPropertyOperations.setValueForStyles(reactlibReactDOMComponent__getNode(this), styleUpdates, this);
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
    var lastContent = reactlibReactDOMComponent__CONTENT_TYPES[typeof lastProps.children] ? lastProps.children : null;
    var nextContent = reactlibReactDOMComponent__CONTENT_TYPES[typeof nextProps.children] ? nextProps.children : null;

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
      if (process.env.NODE_ENV !== 'production') {
        reactlibReactDOMComponent__ReactInstrumentation.debugTool.onSetChildren(this._debugID, []);
      }
    }

    if (nextContent != null) {
      if (lastContent !== nextContent) {
        this.updateTextContent('' + nextContent);
        if (process.env.NODE_ENV !== 'production') {
          reactlibReactDOMComponent__setAndValidateContentChildDev.call(this, nextContent);
        }
      }
    } else if (nextHtml != null) {
      if (lastHtml !== nextHtml) {
        this.updateMarkup('' + nextHtml);
      }
      if (process.env.NODE_ENV !== 'production') {
        reactlibReactDOMComponent__ReactInstrumentation.debugTool.onSetChildren(this._debugID, []);
      }
    } else if (nextChildren != null) {
      if (process.env.NODE_ENV !== 'production') {
        reactlibReactDOMComponent__setAndValidateContentChildDev.call(this, null);
      }

      this.updateChildren(nextChildren, transaction, context);
    }
  },

  getHostNode: function () {
    return reactlibReactDOMComponent__getNode(this);
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
      case 'html':
      case 'head':
      case 'body':
        /**
         * Components like <html> <head> and <body> can't be removed or added
         * easily in a cross-browser way, however it's valuable to be able to
         * take advantage of React's reconciliation for styling and <title>
         * management. So we just document it and throw in dangerous cases.
         */
        !false ? process.env.NODE_ENV !== 'production' ? reactlibReactDOMComponent__invariant(false, '<%s> tried to unmount. Because of cross-browser quirks it is impossible to unmount some top-level components (eg <html>, <head>, and <body>) reliably and efficiently. To fix this, have a single top-level component that never unmounts render these elements.', this._tag) : reactlibReactDOMComponent___prodInvariant('66', this._tag) : void 0;
        break;
    }

    this.unmountChildren(safely);
    reactlibReactDOMComponent__ReactDOMComponentTree.uncacheNode(this);
    reactlibReactDOMComponent__EventPluginHub.deleteAllListeners(this);
    this._rootNodeID = 0;
    this._domID = 0;
    this._wrapperState = null;

    if (process.env.NODE_ENV !== 'production') {
      reactlibReactDOMComponent__setAndValidateContentChildDev.call(this, null);
    }
  },

  getPublicInstance: function () {
    return reactlibReactDOMComponent__getNode(this);
  }

};

reactlibReactDOMComponent___assign(reactlibReactDOMComponent__ReactDOMComponent.prototype, reactlibReactDOMComponent__ReactDOMComponent.Mixin, reactlibReactDOMComponent__ReactMultiChild.Mixin);

$m['react/lib/ReactDOMComponent'].exports = reactlibReactDOMComponent__ReactDOMComponent;
/*≠≠ node_modules/react/lib/ReactDOMComponent.js ≠≠*/

/*== node_modules/react/lib/ReactDOMIDOperations.js ==*/
$m['react/lib/ReactDOMIDOperations'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMIDOperations
 */


var reactlibReactDOMIDOperations__DOMChildrenOperations = $m['react/lib/DOMChildrenOperations'].exports;
var reactlibReactDOMIDOperations__ReactDOMComponentTree = $m['react/lib/ReactDOMComponentTree'].exports;

/**
 * Operations used to process updates to DOM nodes.
 */
var reactlibReactDOMIDOperations__ReactDOMIDOperations = {

  /**
   * Updates a component's children by processing a series of updates.
   *
   * @param {array<object>} updates List of update configurations.
   * @internal
   */
  dangerouslyProcessChildrenUpdates: function (parentInst, updates) {
    var node = reactlibReactDOMIDOperations__ReactDOMComponentTree.getNodeFromInstance(parentInst);
    reactlibReactDOMIDOperations__DOMChildrenOperations.processUpdates(node, updates);
  }
};

$m['react/lib/ReactDOMIDOperations'].exports = reactlibReactDOMIDOperations__ReactDOMIDOperations;
/*≠≠ node_modules/react/lib/ReactDOMIDOperations.js ≠≠*/

/*== node_modules/react/lib/ReactComponentBrowserEnvironment.js ==*/
$m['react/lib/ReactComponentBrowserEnvironment'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentBrowserEnvironment
 */


var reactlibReactComponentBrowserEnvironment__DOMChildrenOperations = $m['react/lib/DOMChildrenOperations'].exports;
var reactlibReactComponentBrowserEnvironment__ReactDOMIDOperations = $m['react/lib/ReactDOMIDOperations'].exports;

/**
 * Abstracts away all functionality of the reconciler that requires knowledge of
 * the browser context. TODO: These callers should be refactored to avoid the
 * need for this injection.
 */
var reactlibReactComponentBrowserEnvironment__ReactComponentBrowserEnvironment = {

  processChildrenUpdates: reactlibReactComponentBrowserEnvironment__ReactDOMIDOperations.dangerouslyProcessChildrenUpdates,

  replaceNodeWithMarkup: reactlibReactComponentBrowserEnvironment__DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup

};

$m['react/lib/ReactComponentBrowserEnvironment'].exports = reactlibReactComponentBrowserEnvironment__ReactComponentBrowserEnvironment;
/*≠≠ node_modules/react/lib/ReactComponentBrowserEnvironment.js ≠≠*/

/*== node_modules/react/lib/HTMLDOMPropertyConfig.js ==*/
$m['react/lib/HTMLDOMPropertyConfig'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule HTMLDOMPropertyConfig
 */


var reactlibHTMLDOMPropertyConfig__DOMProperty = $m['react/lib/DOMProperty'].exports;

var reactlibHTMLDOMPropertyConfig__MUST_USE_PROPERTY = reactlibHTMLDOMPropertyConfig__DOMProperty.injection.MUST_USE_PROPERTY;
var reactlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE = reactlibHTMLDOMPropertyConfig__DOMProperty.injection.HAS_BOOLEAN_VALUE;
var reactlibHTMLDOMPropertyConfig__HAS_NUMERIC_VALUE = reactlibHTMLDOMPropertyConfig__DOMProperty.injection.HAS_NUMERIC_VALUE;
var reactlibHTMLDOMPropertyConfig__HAS_POSITIVE_NUMERIC_VALUE = reactlibHTMLDOMPropertyConfig__DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;
var reactlibHTMLDOMPropertyConfig__HAS_OVERLOADED_BOOLEAN_VALUE = reactlibHTMLDOMPropertyConfig__DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;

var reactlibHTMLDOMPropertyConfig__HTMLDOMPropertyConfig = {
  isCustomAttribute: RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + reactlibHTMLDOMPropertyConfig__DOMProperty.ATTRIBUTE_NAME_CHAR + ']*$')),
  Properties: {
    /**
     * Standard Properties
     */
    accept: 0,
    acceptCharset: 0,
    accessKey: 0,
    action: 0,
    allowFullScreen: reactlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    allowTransparency: 0,
    alt: 0,
    // specifies target context for links with `preload` type
    as: 0,
    async: reactlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    autoComplete: 0,
    // autoFocus is polyfilled/normalized by AutoFocusUtils
    // autoFocus: HAS_BOOLEAN_VALUE,
    autoPlay: reactlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    capture: reactlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    cellPadding: 0,
    cellSpacing: 0,
    charSet: 0,
    challenge: 0,
    checked: reactlibHTMLDOMPropertyConfig__MUST_USE_PROPERTY | reactlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    cite: 0,
    classID: 0,
    className: 0,
    cols: reactlibHTMLDOMPropertyConfig__HAS_POSITIVE_NUMERIC_VALUE,
    colSpan: 0,
    content: 0,
    contentEditable: 0,
    contextMenu: 0,
    controls: reactlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    coords: 0,
    crossOrigin: 0,
    data: 0, // For `<object />` acts as `src`.
    dateTime: 0,
    'default': reactlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    defer: reactlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    dir: 0,
    disabled: reactlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    download: reactlibHTMLDOMPropertyConfig__HAS_OVERLOADED_BOOLEAN_VALUE,
    draggable: 0,
    encType: 0,
    form: 0,
    formAction: 0,
    formEncType: 0,
    formMethod: 0,
    formNoValidate: reactlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    formTarget: 0,
    frameBorder: 0,
    headers: 0,
    height: 0,
    hidden: reactlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
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
    loop: reactlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
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
    multiple: reactlibHTMLDOMPropertyConfig__MUST_USE_PROPERTY | reactlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    muted: reactlibHTMLDOMPropertyConfig__MUST_USE_PROPERTY | reactlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    name: 0,
    nonce: 0,
    noValidate: reactlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    open: reactlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    optimum: 0,
    pattern: 0,
    placeholder: 0,
    playsInline: reactlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    poster: 0,
    preload: 0,
    profile: 0,
    radioGroup: 0,
    readOnly: reactlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    referrerPolicy: 0,
    rel: 0,
    required: reactlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    reversed: reactlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    role: 0,
    rows: reactlibHTMLDOMPropertyConfig__HAS_POSITIVE_NUMERIC_VALUE,
    rowSpan: reactlibHTMLDOMPropertyConfig__HAS_NUMERIC_VALUE,
    sandbox: 0,
    scope: 0,
    scoped: reactlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    scrolling: 0,
    seamless: reactlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    selected: reactlibHTMLDOMPropertyConfig__MUST_USE_PROPERTY | reactlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
    shape: 0,
    size: reactlibHTMLDOMPropertyConfig__HAS_POSITIVE_NUMERIC_VALUE,
    sizes: 0,
    span: reactlibHTMLDOMPropertyConfig__HAS_POSITIVE_NUMERIC_VALUE,
    spellCheck: 0,
    src: 0,
    srcDoc: 0,
    srcLang: 0,
    srcSet: 0,
    start: reactlibHTMLDOMPropertyConfig__HAS_NUMERIC_VALUE,
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
    itemScope: reactlibHTMLDOMPropertyConfig__HAS_BOOLEAN_VALUE,
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
  DOMPropertyNames: {}
};

$m['react/lib/HTMLDOMPropertyConfig'].exports = reactlibHTMLDOMPropertyConfig__HTMLDOMPropertyConfig;
/*≠≠ node_modules/react/lib/HTMLDOMPropertyConfig.js ≠≠*/

/*== node_modules/react/lib/EnterLeaveEventPlugin.js ==*/
$m['react/lib/EnterLeaveEventPlugin'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EnterLeaveEventPlugin
 */


var reactlibEnterLeaveEventPlugin__EventConstants = $m['react/lib/EventConstants'].exports;
var reactlibEnterLeaveEventPlugin__EventPropagators = $m['react/lib/EventPropagators'].exports;
var reactlibEnterLeaveEventPlugin__ReactDOMComponentTree = $m['react/lib/ReactDOMComponentTree'].exports;
var reactlibEnterLeaveEventPlugin__SyntheticMouseEvent = $m['react/lib/SyntheticMouseEvent'].exports;

var reactlibEnterLeaveEventPlugin__keyOf = $m['fbjs/lib/keyOf'].exports;

var reactlibEnterLeaveEventPlugin__topLevelTypes = reactlibEnterLeaveEventPlugin__EventConstants.topLevelTypes;

var reactlibEnterLeaveEventPlugin__eventTypes = {
  mouseEnter: {
    registrationName: reactlibEnterLeaveEventPlugin__keyOf({ onMouseEnter: null }),
    dependencies: [reactlibEnterLeaveEventPlugin__topLevelTypes.topMouseOut, reactlibEnterLeaveEventPlugin__topLevelTypes.topMouseOver]
  },
  mouseLeave: {
    registrationName: reactlibEnterLeaveEventPlugin__keyOf({ onMouseLeave: null }),
    dependencies: [reactlibEnterLeaveEventPlugin__topLevelTypes.topMouseOut, reactlibEnterLeaveEventPlugin__topLevelTypes.topMouseOver]
  }
};

var reactlibEnterLeaveEventPlugin__EnterLeaveEventPlugin = {

  eventTypes: reactlibEnterLeaveEventPlugin__eventTypes,

  /**
   * For almost every interaction we care about, there will be both a top-level
   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
   * we do not extract duplicate events. However, moving the mouse into the
   * browser from outside will not fire a `mouseout` event. In this case, we use
   * the `mouseover` top-level event.
   */
  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    if (topLevelType === reactlibEnterLeaveEventPlugin__topLevelTypes.topMouseOver && (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
      return null;
    }
    if (topLevelType !== reactlibEnterLeaveEventPlugin__topLevelTypes.topMouseOut && topLevelType !== reactlibEnterLeaveEventPlugin__topLevelTypes.topMouseOver) {
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
    if (topLevelType === reactlibEnterLeaveEventPlugin__topLevelTypes.topMouseOut) {
      from = targetInst;
      var related = nativeEvent.relatedTarget || nativeEvent.toElement;
      to = related ? reactlibEnterLeaveEventPlugin__ReactDOMComponentTree.getClosestInstanceFromNode(related) : null;
    } else {
      // Moving to a node from outside the window.
      from = null;
      to = targetInst;
    }

    if (from === to) {
      // Nothing pertains to our managed components.
      return null;
    }

    var fromNode = from == null ? win : reactlibEnterLeaveEventPlugin__ReactDOMComponentTree.getNodeFromInstance(from);
    var toNode = to == null ? win : reactlibEnterLeaveEventPlugin__ReactDOMComponentTree.getNodeFromInstance(to);

    var leave = reactlibEnterLeaveEventPlugin__SyntheticMouseEvent.getPooled(reactlibEnterLeaveEventPlugin__eventTypes.mouseLeave, from, nativeEvent, nativeEventTarget);
    leave.type = 'mouseleave';
    leave.target = fromNode;
    leave.relatedTarget = toNode;

    var enter = reactlibEnterLeaveEventPlugin__SyntheticMouseEvent.getPooled(reactlibEnterLeaveEventPlugin__eventTypes.mouseEnter, to, nativeEvent, nativeEventTarget);
    enter.type = 'mouseenter';
    enter.target = toNode;
    enter.relatedTarget = fromNode;

    reactlibEnterLeaveEventPlugin__EventPropagators.accumulateEnterLeaveDispatches(leave, enter, from, to);

    return [leave, enter];
  }

};

$m['react/lib/EnterLeaveEventPlugin'].exports = reactlibEnterLeaveEventPlugin__EnterLeaveEventPlugin;
/*≠≠ node_modules/react/lib/EnterLeaveEventPlugin.js ≠≠*/

/*== node_modules/react/lib/DefaultEventPluginOrder.js ==*/
$m['react/lib/DefaultEventPluginOrder'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DefaultEventPluginOrder
 */


var reactlibDefaultEventPluginOrder__keyOf = $m['fbjs/lib/keyOf'].exports;

/**
 * Module that is injectable into `EventPluginHub`, that specifies a
 * deterministic ordering of `EventPlugin`s. A convenient way to reason about
 * plugins, without having to package every one of them. This is better than
 * having plugins be ordered in the same order that they are injected because
 * that ordering would be influenced by the packaging order.
 * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
 * preventing default on events is convenient in `SimpleEventPlugin` handlers.
 */
var reactlibDefaultEventPluginOrder__DefaultEventPluginOrder = [reactlibDefaultEventPluginOrder__keyOf({ ResponderEventPlugin: null }), reactlibDefaultEventPluginOrder__keyOf({ SimpleEventPlugin: null }), reactlibDefaultEventPluginOrder__keyOf({ TapEventPlugin: null }), reactlibDefaultEventPluginOrder__keyOf({ EnterLeaveEventPlugin: null }), reactlibDefaultEventPluginOrder__keyOf({ ChangeEventPlugin: null }), reactlibDefaultEventPluginOrder__keyOf({ SelectEventPlugin: null }), reactlibDefaultEventPluginOrder__keyOf({ BeforeInputEventPlugin: null })];

$m['react/lib/DefaultEventPluginOrder'].exports = reactlibDefaultEventPluginOrder__DefaultEventPluginOrder;
/*≠≠ node_modules/react/lib/DefaultEventPluginOrder.js ≠≠*/

/*== node_modules/react/lib/ChangeEventPlugin.js ==*/
$m['react/lib/ChangeEventPlugin'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ChangeEventPlugin
 */


var reactlibChangeEventPlugin__EventConstants = $m['react/lib/EventConstants'].exports;
var reactlibChangeEventPlugin__EventPluginHub = $m['react/lib/EventPluginHub'].exports;
var reactlibChangeEventPlugin__EventPropagators = $m['react/lib/EventPropagators'].exports;
var reactlibChangeEventPlugin__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;
var reactlibChangeEventPlugin__ReactDOMComponentTree = $m['react/lib/ReactDOMComponentTree'].exports;
var reactlibChangeEventPlugin__ReactUpdates = $m['react/lib/ReactUpdates'].exports;
var reactlibChangeEventPlugin__SyntheticEvent = $m['react/lib/SyntheticEvent'].exports;

var reactlibChangeEventPlugin__getEventTarget = $m['react/lib/getEventTarget'].exports;
var reactlibChangeEventPlugin__isEventSupported = $m['react/lib/isEventSupported'].exports;
var reactlibChangeEventPlugin__isTextInputElement = $m['react/lib/isTextInputElement'].exports;
var reactlibChangeEventPlugin__keyOf = $m['fbjs/lib/keyOf'].exports;

var reactlibChangeEventPlugin__topLevelTypes = reactlibChangeEventPlugin__EventConstants.topLevelTypes;

var reactlibChangeEventPlugin__eventTypes = {
  change: {
    phasedRegistrationNames: {
      bubbled: reactlibChangeEventPlugin__keyOf({ onChange: null }),
      captured: reactlibChangeEventPlugin__keyOf({ onChangeCapture: null })
    },
    dependencies: [reactlibChangeEventPlugin__topLevelTypes.topBlur, reactlibChangeEventPlugin__topLevelTypes.topChange, reactlibChangeEventPlugin__topLevelTypes.topClick, reactlibChangeEventPlugin__topLevelTypes.topFocus, reactlibChangeEventPlugin__topLevelTypes.topInput, reactlibChangeEventPlugin__topLevelTypes.topKeyDown, reactlibChangeEventPlugin__topLevelTypes.topKeyUp, reactlibChangeEventPlugin__topLevelTypes.topSelectionChange]
  }
};

/**
 * For IE shims
 */
var reactlibChangeEventPlugin__activeElement = null;
var reactlibChangeEventPlugin__activeElementInst = null;
var reactlibChangeEventPlugin__activeElementValue = null;
var reactlibChangeEventPlugin__activeElementValueProp = null;

/**
 * SECTION: handle `change` event
 */
function reactlibChangeEventPlugin__shouldUseChangeEvent(elem) {
  var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
  return nodeName === 'select' || nodeName === 'input' && elem.type === 'file';
}

var reactlibChangeEventPlugin__doesChangeEventBubble = false;
if (reactlibChangeEventPlugin__ExecutionEnvironment.canUseDOM) {
  // See `handleChange` comment below
  reactlibChangeEventPlugin__doesChangeEventBubble = reactlibChangeEventPlugin__isEventSupported('change') && (!document.documentMode || document.documentMode > 8);
}

function reactlibChangeEventPlugin__manualDispatchChangeEvent(nativeEvent) {
  var event = reactlibChangeEventPlugin__SyntheticEvent.getPooled(reactlibChangeEventPlugin__eventTypes.change, reactlibChangeEventPlugin__activeElementInst, nativeEvent, reactlibChangeEventPlugin__getEventTarget(nativeEvent));
  reactlibChangeEventPlugin__EventPropagators.accumulateTwoPhaseDispatches(event);

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
  reactlibChangeEventPlugin__ReactUpdates.batchedUpdates(reactlibChangeEventPlugin__runEventInBatch, event);
}

function reactlibChangeEventPlugin__runEventInBatch(event) {
  reactlibChangeEventPlugin__EventPluginHub.enqueueEvents(event);
  reactlibChangeEventPlugin__EventPluginHub.processEventQueue(false);
}

function reactlibChangeEventPlugin__startWatchingForChangeEventIE8(target, targetInst) {
  reactlibChangeEventPlugin__activeElement = target;
  reactlibChangeEventPlugin__activeElementInst = targetInst;
  reactlibChangeEventPlugin__activeElement.attachEvent('onchange', reactlibChangeEventPlugin__manualDispatchChangeEvent);
}

function reactlibChangeEventPlugin__stopWatchingForChangeEventIE8() {
  if (!reactlibChangeEventPlugin__activeElement) {
    return;
  }
  reactlibChangeEventPlugin__activeElement.detachEvent('onchange', reactlibChangeEventPlugin__manualDispatchChangeEvent);
  reactlibChangeEventPlugin__activeElement = null;
  reactlibChangeEventPlugin__activeElementInst = null;
}

function reactlibChangeEventPlugin__getTargetInstForChangeEvent(topLevelType, targetInst) {
  if (topLevelType === reactlibChangeEventPlugin__topLevelTypes.topChange) {
    return targetInst;
  }
}
function reactlibChangeEventPlugin__handleEventsForChangeEventIE8(topLevelType, target, targetInst) {
  if (topLevelType === reactlibChangeEventPlugin__topLevelTypes.topFocus) {
    // stopWatching() should be a noop here but we call it just in case we
    // missed a blur event somehow.
    reactlibChangeEventPlugin__stopWatchingForChangeEventIE8();
    reactlibChangeEventPlugin__startWatchingForChangeEventIE8(target, targetInst);
  } else if (topLevelType === reactlibChangeEventPlugin__topLevelTypes.topBlur) {
    reactlibChangeEventPlugin__stopWatchingForChangeEventIE8();
  }
}

/**
 * SECTION: handle `input` event
 */
var reactlibChangeEventPlugin__isInputEventSupported = false;
if (reactlibChangeEventPlugin__ExecutionEnvironment.canUseDOM) {
  // IE9 claims to support the input event but fails to trigger it when
  // deleting text, so we ignore its input events.
  // IE10+ fire input events to often, such when a placeholder
  // changes or when an input with a placeholder is focused.
  reactlibChangeEventPlugin__isInputEventSupported = reactlibChangeEventPlugin__isEventSupported('input') && (!document.documentMode || document.documentMode > 11);
}

/**
 * (For IE <=11) Replacement getter/setter for the `value` property that gets
 * set on the active element.
 */
var reactlibChangeEventPlugin__newValueProp = {
  get: function () {
    return reactlibChangeEventPlugin__activeElementValueProp.get.call(this);
  },
  set: function (val) {
    // Cast to a string so we can do equality checks.
    reactlibChangeEventPlugin__activeElementValue = '' + val;
    reactlibChangeEventPlugin__activeElementValueProp.set.call(this, val);
  }
};

/**
 * (For IE <=11) Starts tracking propertychange events on the passed-in element
 * and override the value property so that we can distinguish user events from
 * value changes in JS.
 */
function reactlibChangeEventPlugin__startWatchingForValueChange(target, targetInst) {
  reactlibChangeEventPlugin__activeElement = target;
  reactlibChangeEventPlugin__activeElementInst = targetInst;
  reactlibChangeEventPlugin__activeElementValue = target.value;
  reactlibChangeEventPlugin__activeElementValueProp = Object.getOwnPropertyDescriptor(target.constructor.prototype, 'value');

  // Not guarded in a canDefineProperty check: IE8 supports defineProperty only
  // on DOM elements
  Object.defineProperty(reactlibChangeEventPlugin__activeElement, 'value', reactlibChangeEventPlugin__newValueProp);
  if (reactlibChangeEventPlugin__activeElement.attachEvent) {
    reactlibChangeEventPlugin__activeElement.attachEvent('onpropertychange', reactlibChangeEventPlugin__handlePropertyChange);
  } else {
    reactlibChangeEventPlugin__activeElement.addEventListener('propertychange', reactlibChangeEventPlugin__handlePropertyChange, false);
  }
}

/**
 * (For IE <=11) Removes the event listeners from the currently-tracked element,
 * if any exists.
 */
function reactlibChangeEventPlugin__stopWatchingForValueChange() {
  if (!reactlibChangeEventPlugin__activeElement) {
    return;
  }

  // delete restores the original property definition
  delete reactlibChangeEventPlugin__activeElement.value;

  if (reactlibChangeEventPlugin__activeElement.detachEvent) {
    reactlibChangeEventPlugin__activeElement.detachEvent('onpropertychange', reactlibChangeEventPlugin__handlePropertyChange);
  } else {
    reactlibChangeEventPlugin__activeElement.removeEventListener('propertychange', reactlibChangeEventPlugin__handlePropertyChange, false);
  }

  reactlibChangeEventPlugin__activeElement = null;
  reactlibChangeEventPlugin__activeElementInst = null;
  reactlibChangeEventPlugin__activeElementValue = null;
  reactlibChangeEventPlugin__activeElementValueProp = null;
}

/**
 * (For IE <=11) Handles a propertychange event, sending a `change` event if
 * the value of the active element has changed.
 */
function reactlibChangeEventPlugin__handlePropertyChange(nativeEvent) {
  if (nativeEvent.propertyName !== 'value') {
    return;
  }
  var value = nativeEvent.srcElement.value;
  if (value === reactlibChangeEventPlugin__activeElementValue) {
    return;
  }
  reactlibChangeEventPlugin__activeElementValue = value;

  reactlibChangeEventPlugin__manualDispatchChangeEvent(nativeEvent);
}

/**
 * If a `change` event should be fired, returns the target's ID.
 */
function reactlibChangeEventPlugin__getTargetInstForInputEvent(topLevelType, targetInst) {
  if (topLevelType === reactlibChangeEventPlugin__topLevelTypes.topInput) {
    // In modern browsers (i.e., not IE8 or IE9), the input event is exactly
    // what we want so fall through here and trigger an abstract event
    return targetInst;
  }
}

function reactlibChangeEventPlugin__handleEventsForInputEventIE(topLevelType, target, targetInst) {
  if (topLevelType === reactlibChangeEventPlugin__topLevelTypes.topFocus) {
    // In IE8, we can capture almost all .value changes by adding a
    // propertychange handler and looking for events with propertyName
    // equal to 'value'
    // In IE9-11, propertychange fires for most input events but is buggy and
    // doesn't fire when text is deleted, but conveniently, selectionchange
    // appears to fire in all of the remaining cases so we catch those and
    // forward the event if the value has changed
    // In either case, we don't want to call the event handler if the value
    // is changed from JS so we redefine a setter for `.value` that updates
    // our activeElementValue variable, allowing us to ignore those changes
    //
    // stopWatching() should be a noop here but we call it just in case we
    // missed a blur event somehow.
    reactlibChangeEventPlugin__stopWatchingForValueChange();
    reactlibChangeEventPlugin__startWatchingForValueChange(target, targetInst);
  } else if (topLevelType === reactlibChangeEventPlugin__topLevelTypes.topBlur) {
    reactlibChangeEventPlugin__stopWatchingForValueChange();
  }
}

// For IE8 and IE9.
function reactlibChangeEventPlugin__getTargetInstForInputEventIE(topLevelType, targetInst) {
  if (topLevelType === reactlibChangeEventPlugin__topLevelTypes.topSelectionChange || topLevelType === reactlibChangeEventPlugin__topLevelTypes.topKeyUp || topLevelType === reactlibChangeEventPlugin__topLevelTypes.topKeyDown) {
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
    if (reactlibChangeEventPlugin__activeElement && reactlibChangeEventPlugin__activeElement.value !== reactlibChangeEventPlugin__activeElementValue) {
      reactlibChangeEventPlugin__activeElementValue = reactlibChangeEventPlugin__activeElement.value;
      return reactlibChangeEventPlugin__activeElementInst;
    }
  }
}

/**
 * SECTION: handle `click` event
 */
function reactlibChangeEventPlugin__shouldUseClickEvent(elem) {
  // Use the `click` event to detect changes to checkbox and radio inputs.
  // This approach works across all browsers, whereas `change` does not fire
  // until `blur` in IE8.
  return elem.nodeName && elem.nodeName.toLowerCase() === 'input' && (elem.type === 'checkbox' || elem.type === 'radio');
}

function reactlibChangeEventPlugin__getTargetInstForClickEvent(topLevelType, targetInst) {
  if (topLevelType === reactlibChangeEventPlugin__topLevelTypes.topClick) {
    return targetInst;
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
var reactlibChangeEventPlugin__ChangeEventPlugin = {

  eventTypes: reactlibChangeEventPlugin__eventTypes,

  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    var targetNode = targetInst ? reactlibChangeEventPlugin__ReactDOMComponentTree.getNodeFromInstance(targetInst) : window;

    var getTargetInstFunc, handleEventFunc;
    if (reactlibChangeEventPlugin__shouldUseChangeEvent(targetNode)) {
      if (reactlibChangeEventPlugin__doesChangeEventBubble) {
        getTargetInstFunc = reactlibChangeEventPlugin__getTargetInstForChangeEvent;
      } else {
        handleEventFunc = reactlibChangeEventPlugin__handleEventsForChangeEventIE8;
      }
    } else if (reactlibChangeEventPlugin__isTextInputElement(targetNode)) {
      if (reactlibChangeEventPlugin__isInputEventSupported) {
        getTargetInstFunc = reactlibChangeEventPlugin__getTargetInstForInputEvent;
      } else {
        getTargetInstFunc = reactlibChangeEventPlugin__getTargetInstForInputEventIE;
        handleEventFunc = reactlibChangeEventPlugin__handleEventsForInputEventIE;
      }
    } else if (reactlibChangeEventPlugin__shouldUseClickEvent(targetNode)) {
      getTargetInstFunc = reactlibChangeEventPlugin__getTargetInstForClickEvent;
    }

    if (getTargetInstFunc) {
      var inst = getTargetInstFunc(topLevelType, targetInst);
      if (inst) {
        var event = reactlibChangeEventPlugin__SyntheticEvent.getPooled(reactlibChangeEventPlugin__eventTypes.change, inst, nativeEvent, nativeEventTarget);
        event.type = 'change';
        reactlibChangeEventPlugin__EventPropagators.accumulateTwoPhaseDispatches(event);
        return event;
      }
    }

    if (handleEventFunc) {
      handleEventFunc(topLevelType, targetNode, targetInst);
    }
  }

};

$m['react/lib/ChangeEventPlugin'].exports = reactlibChangeEventPlugin__ChangeEventPlugin;
/*≠≠ node_modules/react/lib/ChangeEventPlugin.js ≠≠*/

/*== node_modules/react/lib/SyntheticInputEvent.js ==*/
$m['react/lib/SyntheticInputEvent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticInputEvent
 */


var reactlibSyntheticInputEvent__SyntheticEvent = $m['react/lib/SyntheticEvent'].exports;

/**
 * @interface Event
 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
 *      /#events-inputevents
 */
var reactlibSyntheticInputEvent__InputEventInterface = {
  data: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function reactlibSyntheticInputEvent__SyntheticInputEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return reactlibSyntheticInputEvent__SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

reactlibSyntheticInputEvent__SyntheticEvent.augmentClass(reactlibSyntheticInputEvent__SyntheticInputEvent, reactlibSyntheticInputEvent__InputEventInterface);

$m['react/lib/SyntheticInputEvent'].exports = reactlibSyntheticInputEvent__SyntheticInputEvent;
/*≠≠ node_modules/react/lib/SyntheticInputEvent.js ≠≠*/

/*== node_modules/react/lib/SyntheticCompositionEvent.js ==*/
$m['react/lib/SyntheticCompositionEvent'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticCompositionEvent
 */


var reactlibSyntheticCompositionEvent__SyntheticEvent = $m['react/lib/SyntheticEvent'].exports;

/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
 */
var reactlibSyntheticCompositionEvent__CompositionEventInterface = {
  data: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function reactlibSyntheticCompositionEvent__SyntheticCompositionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return reactlibSyntheticCompositionEvent__SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
}

reactlibSyntheticCompositionEvent__SyntheticEvent.augmentClass(reactlibSyntheticCompositionEvent__SyntheticCompositionEvent, reactlibSyntheticCompositionEvent__CompositionEventInterface);

$m['react/lib/SyntheticCompositionEvent'].exports = reactlibSyntheticCompositionEvent__SyntheticCompositionEvent;
/*≠≠ node_modules/react/lib/SyntheticCompositionEvent.js ≠≠*/

/*== node_modules/react/lib/FallbackCompositionState.js ==*/
$m['react/lib/FallbackCompositionState'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FallbackCompositionState
 */


var reactlibFallbackCompositionState___assign = $m['object-assign'].exports;

var reactlibFallbackCompositionState__PooledClass = $m['react/lib/PooledClass'].exports;

var reactlibFallbackCompositionState__getTextContentAccessor = $m['react/lib/getTextContentAccessor'].exports;

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
function reactlibFallbackCompositionState__FallbackCompositionState(root) {
  this._root = root;
  this._startText = this.getText();
  this._fallbackText = null;
}

reactlibFallbackCompositionState___assign(reactlibFallbackCompositionState__FallbackCompositionState.prototype, {
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
    return this._root[reactlibFallbackCompositionState__getTextContentAccessor()];
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

reactlibFallbackCompositionState__PooledClass.addPoolingTo(reactlibFallbackCompositionState__FallbackCompositionState);

$m['react/lib/FallbackCompositionState'].exports = reactlibFallbackCompositionState__FallbackCompositionState;
/*≠≠ node_modules/react/lib/FallbackCompositionState.js ≠≠*/

/*== node_modules/react/lib/BeforeInputEventPlugin.js ==*/
$m['react/lib/BeforeInputEventPlugin'] = { exports: {} };
/**
 * Copyright 2013-present Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule BeforeInputEventPlugin
 */


var reactlibBeforeInputEventPlugin__EventConstants = $m['react/lib/EventConstants'].exports;
var reactlibBeforeInputEventPlugin__EventPropagators = $m['react/lib/EventPropagators'].exports;
var reactlibBeforeInputEventPlugin__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;
var reactlibBeforeInputEventPlugin__FallbackCompositionState = $m['react/lib/FallbackCompositionState'].exports;
var reactlibBeforeInputEventPlugin__SyntheticCompositionEvent = $m['react/lib/SyntheticCompositionEvent'].exports;
var reactlibBeforeInputEventPlugin__SyntheticInputEvent = $m['react/lib/SyntheticInputEvent'].exports;

var reactlibBeforeInputEventPlugin__keyOf = $m['fbjs/lib/keyOf'].exports;

var reactlibBeforeInputEventPlugin__END_KEYCODES = [9, 13, 27, 32]; // Tab, Return, Esc, Space
var reactlibBeforeInputEventPlugin__START_KEYCODE = 229;

var reactlibBeforeInputEventPlugin__canUseCompositionEvent = reactlibBeforeInputEventPlugin__ExecutionEnvironment.canUseDOM && 'CompositionEvent' in window;

var reactlibBeforeInputEventPlugin__documentMode = null;
if (reactlibBeforeInputEventPlugin__ExecutionEnvironment.canUseDOM && 'documentMode' in document) {
  reactlibBeforeInputEventPlugin__documentMode = document.documentMode;
}

// Webkit offers a very useful `textInput` event that can be used to
// directly represent `beforeInput`. The IE `textinput` event is not as
// useful, so we don't use it.
var reactlibBeforeInputEventPlugin__canUseTextInputEvent = reactlibBeforeInputEventPlugin__ExecutionEnvironment.canUseDOM && 'TextEvent' in window && !reactlibBeforeInputEventPlugin__documentMode && !reactlibBeforeInputEventPlugin__isPresto();

// In IE9+, we have access to composition events, but the data supplied
// by the native compositionend event may be incorrect. Japanese ideographic
// spaces, for instance (\u3000) are not recorded correctly.
var reactlibBeforeInputEventPlugin__useFallbackCompositionData = reactlibBeforeInputEventPlugin__ExecutionEnvironment.canUseDOM && (!reactlibBeforeInputEventPlugin__canUseCompositionEvent || reactlibBeforeInputEventPlugin__documentMode && reactlibBeforeInputEventPlugin__documentMode > 8 && reactlibBeforeInputEventPlugin__documentMode <= 11);

/**
 * Opera <= 12 includes TextEvent in window, but does not fire
 * text input events. Rely on keypress instead.
 */
function reactlibBeforeInputEventPlugin__isPresto() {
  var opera = window.opera;
  return typeof opera === 'object' && typeof opera.version === 'function' && parseInt(opera.version(), 10) <= 12;
}

var reactlibBeforeInputEventPlugin__SPACEBAR_CODE = 32;
var reactlibBeforeInputEventPlugin__SPACEBAR_CHAR = String.fromCharCode(reactlibBeforeInputEventPlugin__SPACEBAR_CODE);

var reactlibBeforeInputEventPlugin__topLevelTypes = reactlibBeforeInputEventPlugin__EventConstants.topLevelTypes;

// Events and their corresponding property names.
var reactlibBeforeInputEventPlugin__eventTypes = {
  beforeInput: {
    phasedRegistrationNames: {
      bubbled: reactlibBeforeInputEventPlugin__keyOf({ onBeforeInput: null }),
      captured: reactlibBeforeInputEventPlugin__keyOf({ onBeforeInputCapture: null })
    },
    dependencies: [reactlibBeforeInputEventPlugin__topLevelTypes.topCompositionEnd, reactlibBeforeInputEventPlugin__topLevelTypes.topKeyPress, reactlibBeforeInputEventPlugin__topLevelTypes.topTextInput, reactlibBeforeInputEventPlugin__topLevelTypes.topPaste]
  },
  compositionEnd: {
    phasedRegistrationNames: {
      bubbled: reactlibBeforeInputEventPlugin__keyOf({ onCompositionEnd: null }),
      captured: reactlibBeforeInputEventPlugin__keyOf({ onCompositionEndCapture: null })
    },
    dependencies: [reactlibBeforeInputEventPlugin__topLevelTypes.topBlur, reactlibBeforeInputEventPlugin__topLevelTypes.topCompositionEnd, reactlibBeforeInputEventPlugin__topLevelTypes.topKeyDown, reactlibBeforeInputEventPlugin__topLevelTypes.topKeyPress, reactlibBeforeInputEventPlugin__topLevelTypes.topKeyUp, reactlibBeforeInputEventPlugin__topLevelTypes.topMouseDown]
  },
  compositionStart: {
    phasedRegistrationNames: {
      bubbled: reactlibBeforeInputEventPlugin__keyOf({ onCompositionStart: null }),
      captured: reactlibBeforeInputEventPlugin__keyOf({ onCompositionStartCapture: null })
    },
    dependencies: [reactlibBeforeInputEventPlugin__topLevelTypes.topBlur, reactlibBeforeInputEventPlugin__topLevelTypes.topCompositionStart, reactlibBeforeInputEventPlugin__topLevelTypes.topKeyDown, reactlibBeforeInputEventPlugin__topLevelTypes.topKeyPress, reactlibBeforeInputEventPlugin__topLevelTypes.topKeyUp, reactlibBeforeInputEventPlugin__topLevelTypes.topMouseDown]
  },
  compositionUpdate: {
    phasedRegistrationNames: {
      bubbled: reactlibBeforeInputEventPlugin__keyOf({ onCompositionUpdate: null }),
      captured: reactlibBeforeInputEventPlugin__keyOf({ onCompositionUpdateCapture: null })
    },
    dependencies: [reactlibBeforeInputEventPlugin__topLevelTypes.topBlur, reactlibBeforeInputEventPlugin__topLevelTypes.topCompositionUpdate, reactlibBeforeInputEventPlugin__topLevelTypes.topKeyDown, reactlibBeforeInputEventPlugin__topLevelTypes.topKeyPress, reactlibBeforeInputEventPlugin__topLevelTypes.topKeyUp, reactlibBeforeInputEventPlugin__topLevelTypes.topMouseDown]
  }
};

// Track whether we've ever handled a keypress on the space key.
var reactlibBeforeInputEventPlugin__hasSpaceKeypress = false;

/**
 * Return whether a native keypress event is assumed to be a command.
 * This is required because Firefox fires `keypress` events for key commands
 * (cut, copy, select-all, etc.) even though no character is inserted.
 */
function reactlibBeforeInputEventPlugin__isKeypressCommand(nativeEvent) {
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
function reactlibBeforeInputEventPlugin__getCompositionEventType(topLevelType) {
  switch (topLevelType) {
    case reactlibBeforeInputEventPlugin__topLevelTypes.topCompositionStart:
      return reactlibBeforeInputEventPlugin__eventTypes.compositionStart;
    case reactlibBeforeInputEventPlugin__topLevelTypes.topCompositionEnd:
      return reactlibBeforeInputEventPlugin__eventTypes.compositionEnd;
    case reactlibBeforeInputEventPlugin__topLevelTypes.topCompositionUpdate:
      return reactlibBeforeInputEventPlugin__eventTypes.compositionUpdate;
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
function reactlibBeforeInputEventPlugin__isFallbackCompositionStart(topLevelType, nativeEvent) {
  return topLevelType === reactlibBeforeInputEventPlugin__topLevelTypes.topKeyDown && nativeEvent.keyCode === reactlibBeforeInputEventPlugin__START_KEYCODE;
}

/**
 * Does our fallback mode think that this event is the end of composition?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */
function reactlibBeforeInputEventPlugin__isFallbackCompositionEnd(topLevelType, nativeEvent) {
  switch (topLevelType) {
    case reactlibBeforeInputEventPlugin__topLevelTypes.topKeyUp:
      // Command keys insert or clear IME input.
      return reactlibBeforeInputEventPlugin__END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;
    case reactlibBeforeInputEventPlugin__topLevelTypes.topKeyDown:
      // Expect IME keyCode on each keydown. If we get any other
      // code we must have exited earlier.
      return nativeEvent.keyCode !== reactlibBeforeInputEventPlugin__START_KEYCODE;
    case reactlibBeforeInputEventPlugin__topLevelTypes.topKeyPress:
    case reactlibBeforeInputEventPlugin__topLevelTypes.topMouseDown:
    case reactlibBeforeInputEventPlugin__topLevelTypes.topBlur:
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
function reactlibBeforeInputEventPlugin__getDataFromCustomEvent(nativeEvent) {
  var detail = nativeEvent.detail;
  if (typeof detail === 'object' && 'data' in detail) {
    return detail.data;
  }
  return null;
}

// Track the current IME composition fallback object, if any.
var reactlibBeforeInputEventPlugin__currentComposition = null;

/**
 * @return {?object} A SyntheticCompositionEvent.
 */
function reactlibBeforeInputEventPlugin__extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
  var eventType;
  var fallbackData;

  if (reactlibBeforeInputEventPlugin__canUseCompositionEvent) {
    eventType = reactlibBeforeInputEventPlugin__getCompositionEventType(topLevelType);
  } else if (!reactlibBeforeInputEventPlugin__currentComposition) {
    if (reactlibBeforeInputEventPlugin__isFallbackCompositionStart(topLevelType, nativeEvent)) {
      eventType = reactlibBeforeInputEventPlugin__eventTypes.compositionStart;
    }
  } else if (reactlibBeforeInputEventPlugin__isFallbackCompositionEnd(topLevelType, nativeEvent)) {
    eventType = reactlibBeforeInputEventPlugin__eventTypes.compositionEnd;
  }

  if (!eventType) {
    return null;
  }

  if (reactlibBeforeInputEventPlugin__useFallbackCompositionData) {
    // The current composition is stored statically and must not be
    // overwritten while composition continues.
    if (!reactlibBeforeInputEventPlugin__currentComposition && eventType === reactlibBeforeInputEventPlugin__eventTypes.compositionStart) {
      reactlibBeforeInputEventPlugin__currentComposition = reactlibBeforeInputEventPlugin__FallbackCompositionState.getPooled(nativeEventTarget);
    } else if (eventType === reactlibBeforeInputEventPlugin__eventTypes.compositionEnd) {
      if (reactlibBeforeInputEventPlugin__currentComposition) {
        fallbackData = reactlibBeforeInputEventPlugin__currentComposition.getData();
      }
    }
  }

  var event = reactlibBeforeInputEventPlugin__SyntheticCompositionEvent.getPooled(eventType, targetInst, nativeEvent, nativeEventTarget);

  if (fallbackData) {
    // Inject data generated from fallback path into the synthetic event.
    // This matches the property of native CompositionEventInterface.
    event.data = fallbackData;
  } else {
    var customData = reactlibBeforeInputEventPlugin__getDataFromCustomEvent(nativeEvent);
    if (customData !== null) {
      event.data = customData;
    }
  }

  reactlibBeforeInputEventPlugin__EventPropagators.accumulateTwoPhaseDispatches(event);
  return event;
}

/**
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The string corresponding to this `beforeInput` event.
 */
function reactlibBeforeInputEventPlugin__getNativeBeforeInputChars(topLevelType, nativeEvent) {
  switch (topLevelType) {
    case reactlibBeforeInputEventPlugin__topLevelTypes.topCompositionEnd:
      return reactlibBeforeInputEventPlugin__getDataFromCustomEvent(nativeEvent);
    case reactlibBeforeInputEventPlugin__topLevelTypes.topKeyPress:
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
      if (which !== reactlibBeforeInputEventPlugin__SPACEBAR_CODE) {
        return null;
      }

      reactlibBeforeInputEventPlugin__hasSpaceKeypress = true;
      return reactlibBeforeInputEventPlugin__SPACEBAR_CHAR;

    case reactlibBeforeInputEventPlugin__topLevelTypes.topTextInput:
      // Record the characters to be added to the DOM.
      var chars = nativeEvent.data;

      // If it's a spacebar character, assume that we have already handled
      // it at the keypress level and bail immediately. Android Chrome
      // doesn't give us keycodes, so we need to blacklist it.
      if (chars === reactlibBeforeInputEventPlugin__SPACEBAR_CHAR && reactlibBeforeInputEventPlugin__hasSpaceKeypress) {
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
function reactlibBeforeInputEventPlugin__getFallbackBeforeInputChars(topLevelType, nativeEvent) {
  // If we are currently composing (IME) and using a fallback to do so,
  // try to extract the composed characters from the fallback object.
  // If composition event is available, we extract a string only at
  // compositionevent, otherwise extract it at fallback events.
  if (reactlibBeforeInputEventPlugin__currentComposition) {
    if (topLevelType === reactlibBeforeInputEventPlugin__topLevelTypes.topCompositionEnd || !reactlibBeforeInputEventPlugin__canUseCompositionEvent && reactlibBeforeInputEventPlugin__isFallbackCompositionEnd(topLevelType, nativeEvent)) {
      var chars = reactlibBeforeInputEventPlugin__currentComposition.getData();
      reactlibBeforeInputEventPlugin__FallbackCompositionState.release(reactlibBeforeInputEventPlugin__currentComposition);
      reactlibBeforeInputEventPlugin__currentComposition = null;
      return chars;
    }
    return null;
  }

  switch (topLevelType) {
    case reactlibBeforeInputEventPlugin__topLevelTypes.topPaste:
      // If a paste event occurs after a keypress, throw out the input
      // chars. Paste events should not lead to BeforeInput events.
      return null;
    case reactlibBeforeInputEventPlugin__topLevelTypes.topKeyPress:
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
      if (nativeEvent.which && !reactlibBeforeInputEventPlugin__isKeypressCommand(nativeEvent)) {
        return String.fromCharCode(nativeEvent.which);
      }
      return null;
    case reactlibBeforeInputEventPlugin__topLevelTypes.topCompositionEnd:
      return reactlibBeforeInputEventPlugin__useFallbackCompositionData ? null : nativeEvent.data;
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
function reactlibBeforeInputEventPlugin__extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
  var chars;

  if (reactlibBeforeInputEventPlugin__canUseTextInputEvent) {
    chars = reactlibBeforeInputEventPlugin__getNativeBeforeInputChars(topLevelType, nativeEvent);
  } else {
    chars = reactlibBeforeInputEventPlugin__getFallbackBeforeInputChars(topLevelType, nativeEvent);
  }

  // If no characters are being inserted, no BeforeInput event should
  // be fired.
  if (!chars) {
    return null;
  }

  var event = reactlibBeforeInputEventPlugin__SyntheticInputEvent.getPooled(reactlibBeforeInputEventPlugin__eventTypes.beforeInput, targetInst, nativeEvent, nativeEventTarget);

  event.data = chars;
  reactlibBeforeInputEventPlugin__EventPropagators.accumulateTwoPhaseDispatches(event);
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
var reactlibBeforeInputEventPlugin__BeforeInputEventPlugin = {

  eventTypes: reactlibBeforeInputEventPlugin__eventTypes,

  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    return [reactlibBeforeInputEventPlugin__extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget), reactlibBeforeInputEventPlugin__extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget)];
  }
};

$m['react/lib/BeforeInputEventPlugin'].exports = reactlibBeforeInputEventPlugin__BeforeInputEventPlugin;
/*≠≠ node_modules/react/lib/BeforeInputEventPlugin.js ≠≠*/

/*== node_modules/react/lib/ReactDefaultInjection.js ==*/
$m['react/lib/ReactDefaultInjection'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultInjection
 */


var reactlibReactDefaultInjection__BeforeInputEventPlugin = $m['react/lib/BeforeInputEventPlugin'].exports;
var reactlibReactDefaultInjection__ChangeEventPlugin = $m['react/lib/ChangeEventPlugin'].exports;
var reactlibReactDefaultInjection__DefaultEventPluginOrder = $m['react/lib/DefaultEventPluginOrder'].exports;
var reactlibReactDefaultInjection__EnterLeaveEventPlugin = $m['react/lib/EnterLeaveEventPlugin'].exports;
var reactlibReactDefaultInjection__HTMLDOMPropertyConfig = $m['react/lib/HTMLDOMPropertyConfig'].exports;
var reactlibReactDefaultInjection__ReactComponentBrowserEnvironment = $m['react/lib/ReactComponentBrowserEnvironment'].exports;
var reactlibReactDefaultInjection__ReactDOMComponent = $m['react/lib/ReactDOMComponent'].exports;
var reactlibReactDefaultInjection__ReactDOMComponentTree = $m['react/lib/ReactDOMComponentTree'].exports;
var reactlibReactDefaultInjection__ReactDOMEmptyComponent = $m['react/lib/ReactDOMEmptyComponent'].exports;
var reactlibReactDefaultInjection__ReactDOMTreeTraversal = $m['react/lib/ReactDOMTreeTraversal'].exports;
var reactlibReactDefaultInjection__ReactDOMTextComponent = $m['react/lib/ReactDOMTextComponent'].exports;
var reactlibReactDefaultInjection__ReactDefaultBatchingStrategy = $m['react/lib/ReactDefaultBatchingStrategy'].exports;
var reactlibReactDefaultInjection__ReactEventListener = $m['react/lib/ReactEventListener'].exports;
var reactlibReactDefaultInjection__ReactInjection = $m['react/lib/ReactInjection'].exports;
var reactlibReactDefaultInjection__ReactReconcileTransaction = $m['react/lib/ReactReconcileTransaction'].exports;
var reactlibReactDefaultInjection__SVGDOMPropertyConfig = $m['react/lib/SVGDOMPropertyConfig'].exports;
var reactlibReactDefaultInjection__SelectEventPlugin = $m['react/lib/SelectEventPlugin'].exports;
var reactlibReactDefaultInjection__SimpleEventPlugin = $m['react/lib/SimpleEventPlugin'].exports;

var reactlibReactDefaultInjection__alreadyInjected = false;

function reactlibReactDefaultInjection__inject() {
  if (reactlibReactDefaultInjection__alreadyInjected) {
    // TODO: This is currently true because these injections are shared between
    // the client and the server package. They should be built independently
    // and not share any injection state. Then this problem will be solved.
    return;
  }
  reactlibReactDefaultInjection__alreadyInjected = true;

  reactlibReactDefaultInjection__ReactInjection.EventEmitter.injectReactEventListener(reactlibReactDefaultInjection__ReactEventListener);

  /**
   * Inject modules for resolving DOM hierarchy and plugin ordering.
   */
  reactlibReactDefaultInjection__ReactInjection.EventPluginHub.injectEventPluginOrder(reactlibReactDefaultInjection__DefaultEventPluginOrder);
  reactlibReactDefaultInjection__ReactInjection.EventPluginUtils.injectComponentTree(reactlibReactDefaultInjection__ReactDOMComponentTree);
  reactlibReactDefaultInjection__ReactInjection.EventPluginUtils.injectTreeTraversal(reactlibReactDefaultInjection__ReactDOMTreeTraversal);

  /**
   * Some important event plugins included by default (without having to require
   * them).
   */
  reactlibReactDefaultInjection__ReactInjection.EventPluginHub.injectEventPluginsByName({
    SimpleEventPlugin: reactlibReactDefaultInjection__SimpleEventPlugin,
    EnterLeaveEventPlugin: reactlibReactDefaultInjection__EnterLeaveEventPlugin,
    ChangeEventPlugin: reactlibReactDefaultInjection__ChangeEventPlugin,
    SelectEventPlugin: reactlibReactDefaultInjection__SelectEventPlugin,
    BeforeInputEventPlugin: reactlibReactDefaultInjection__BeforeInputEventPlugin
  });

  reactlibReactDefaultInjection__ReactInjection.HostComponent.injectGenericComponentClass(reactlibReactDefaultInjection__ReactDOMComponent);

  reactlibReactDefaultInjection__ReactInjection.HostComponent.injectTextComponentClass(reactlibReactDefaultInjection__ReactDOMTextComponent);

  reactlibReactDefaultInjection__ReactInjection.DOMProperty.injectDOMPropertyConfig(reactlibReactDefaultInjection__HTMLDOMPropertyConfig);
  reactlibReactDefaultInjection__ReactInjection.DOMProperty.injectDOMPropertyConfig(reactlibReactDefaultInjection__SVGDOMPropertyConfig);

  reactlibReactDefaultInjection__ReactInjection.EmptyComponent.injectEmptyComponentFactory(function (instantiate) {
    return new reactlibReactDefaultInjection__ReactDOMEmptyComponent(instantiate);
  });

  reactlibReactDefaultInjection__ReactInjection.Updates.injectReconcileTransaction(reactlibReactDefaultInjection__ReactReconcileTransaction);
  reactlibReactDefaultInjection__ReactInjection.Updates.injectBatchingStrategy(reactlibReactDefaultInjection__ReactDefaultBatchingStrategy);

  reactlibReactDefaultInjection__ReactInjection.Component.injectEnvironment(reactlibReactDefaultInjection__ReactComponentBrowserEnvironment);
}

$m['react/lib/ReactDefaultInjection'].exports = {
  inject: reactlibReactDefaultInjection__inject
};
/*≠≠ node_modules/react/lib/ReactDefaultInjection.js ≠≠*/

/*== node_modules/react/lib/ReactDOM.js ==*/
$m['react/lib/ReactDOM'] = { exports: {} };
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOM
 */

/* globals __REACT_DEVTOOLS_GLOBAL_HOOK__*/


var reactlibReactDOM__ReactDOMComponentTree = $m['react/lib/ReactDOMComponentTree'].exports;
var reactlibReactDOM__ReactDefaultInjection = $m['react/lib/ReactDefaultInjection'].exports;
var reactlibReactDOM__ReactMount = $m['react/lib/ReactMount'].exports;
var reactlibReactDOM__ReactReconciler = $m['react/lib/ReactReconciler'].exports;
var reactlibReactDOM__ReactUpdates = $m['react/lib/ReactUpdates'].exports;
var reactlibReactDOM__ReactVersion = $m['react/lib/ReactVersion'].exports;

var reactlibReactDOM__findDOMNode = $m['react/lib/findDOMNode'].exports;
var reactlibReactDOM__getHostComponentFromComposite = $m['react/lib/getHostComponentFromComposite'].exports;
var reactlibReactDOM__renderSubtreeIntoContainer = $m['react/lib/renderSubtreeIntoContainer'].exports;
var reactlibReactDOM__warning = $m['fbjs/lib/warning'].exports;

reactlibReactDOM__ReactDefaultInjection.inject();

var reactlibReactDOM__ReactDOM = {
  findDOMNode: reactlibReactDOM__findDOMNode,
  render: reactlibReactDOM__ReactMount.render,
  unmountComponentAtNode: reactlibReactDOM__ReactMount.unmountComponentAtNode,
  version: reactlibReactDOM__ReactVersion,

  /* eslint-disable camelcase */
  unstable_batchedUpdates: reactlibReactDOM__ReactUpdates.batchedUpdates,
  unstable_renderSubtreeIntoContainer: reactlibReactDOM__renderSubtreeIntoContainer
};

// Inject the runtime into a devtools global hook regardless of browser.
// Allows for debugging when the hook is injected on the page.
/* eslint-enable camelcase */
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
    ComponentTree: {
      getClosestInstanceFromNode: reactlibReactDOM__ReactDOMComponentTree.getClosestInstanceFromNode,
      getNodeFromInstance: function (inst) {
        // inst is an internal instance (but could be a composite)
        if (inst._renderedComponent) {
          inst = reactlibReactDOM__getHostComponentFromComposite(inst);
        }
        if (inst) {
          return reactlibReactDOM__ReactDOMComponentTree.getNodeFromInstance(inst);
        } else {
          return null;
        }
      }
    },
    Mount: reactlibReactDOM__ReactMount,
    Reconciler: reactlibReactDOM__ReactReconciler
  });
}

if (process.env.NODE_ENV !== 'production') {
  var reactlibReactDOM__ExecutionEnvironment = $m['fbjs/lib/ExecutionEnvironment'].exports;
  if (reactlibReactDOM__ExecutionEnvironment.canUseDOM && window.top === window.self) {

    // First check if devtools is not installed
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
      // If we're in Chrome or Firefox, provide a download link if not installed.
      if (navigator.userAgent.indexOf('Chrome') > -1 && navigator.userAgent.indexOf('Edge') === -1 || navigator.userAgent.indexOf('Firefox') > -1) {
        // Firefox does not have the issue with devtools loaded over file://
        var reactlibReactDOM__showFileUrlMessage = window.location.protocol.indexOf('http') === -1 && navigator.userAgent.indexOf('Firefox') === -1;
        console.debug('Download the React DevTools ' + (reactlibReactDOM__showFileUrlMessage ? 'and use an HTTP server (instead of a file: URL) ' : '') + 'for a better development experience: ' + 'https://fb.me/react-devtools');
      }
    }

    var reactlibReactDOM__testFunc = function testFn() {};
    process.env.NODE_ENV !== 'production' ? reactlibReactDOM__warning((reactlibReactDOM__testFunc.name || reactlibReactDOM__testFunc.toString()).indexOf('testFn') !== -1, 'It looks like you\'re using a minified copy of the development build ' + 'of React. When deploying React apps to production, make sure to use ' + 'the production build which skips development warnings and is faster. ' + 'See https://fb.me/react-minification for more details.') : void 0;

    // If we're in IE8, check to see if we are in compatibility mode and provide
    // information on preventing compatibility mode
    var reactlibReactDOM__ieCompatibilityMode = document.documentMode && document.documentMode < 8;

    process.env.NODE_ENV !== 'production' ? reactlibReactDOM__warning(!reactlibReactDOM__ieCompatibilityMode, 'Internet Explorer is running in compatibility mode; please add the ' + 'following tag to your HTML to prevent this from happening: ' + '<meta http-equiv="X-UA-Compatible" content="IE=edge" />') : void 0;

    var reactlibReactDOM__expectedFeatures = [
    // shims
    Array.isArray, Array.prototype.every, Array.prototype.forEach, Array.prototype.indexOf, Array.prototype.map, Date.now, Function.prototype.bind, Object.keys, String.prototype.split, String.prototype.trim];

    for (var reactlibReactDOM__i = 0; reactlibReactDOM__i < reactlibReactDOM__expectedFeatures.length; reactlibReactDOM__i++) {
      if (!reactlibReactDOM__expectedFeatures[reactlibReactDOM__i]) {
        process.env.NODE_ENV !== 'production' ? reactlibReactDOM__warning(false, 'One or more ES5 shims expected by React are not available: ' + 'https://fb.me/react-warning-polyfills') : void 0;
        break;
      }
    }
  }
}

if (process.env.NODE_ENV !== 'production') {
  var reactlibReactDOM__ReactInstrumentation = $m['react/lib/ReactInstrumentation'].exports;
  var reactlibReactDOM__ReactDOMUnknownPropertyHook = $m['react/lib/ReactDOMUnknownPropertyHook'].exports;
  var reactlibReactDOM__ReactDOMNullInputValuePropHook = $m['react/lib/ReactDOMNullInputValuePropHook'].exports;

  reactlibReactDOM__ReactInstrumentation.debugTool.addHook(reactlibReactDOM__ReactDOMUnknownPropertyHook);
  reactlibReactDOM__ReactInstrumentation.debugTool.addHook(reactlibReactDOM__ReactDOMNullInputValuePropHook);
}

$m['react/lib/ReactDOM'].exports = reactlibReactDOM__ReactDOM;
/*≠≠ node_modules/react/lib/ReactDOM.js ≠≠*/

/*== node_modules/react-dom/index.js ==*/
$m['react-dom'] = { exports: {} };

$m['react-dom'].exports = $m['react/lib/ReactDOM'].exports;
/*≠≠ node_modules/react-dom/index.js ≠≠*/

/*== node_modules/@yr/graphics-component/previewGrid.js ==*/
$m['@yr/graphics-component/previewGrid'] = { exports: {} };

const yrgraphicscomponentpreviewGrid__component = $m['@yr/component'].exports;

const { el } = yrgraphicscomponentpreviewGrid__component;

$m['@yr/graphics-component/previewGrid'].exports = yrgraphicscomponentpreviewGrid__component.stateless({
  render(props) {
    return el('div', { children: props.ids.map(id => {
        return el('div', { className: 'graphic', id: `graphic-${ id }` }, el('h2', {}, id), el('span', { className: 'graphics-group' }, props.graphic({ id, type: 'svg', fallback: true }), el('h3', {}, 'svg')), el('span', { className: 'graphics-group' }, props.graphic({ id, type: 'img' }), el('h3', {}, 'png')));
      }) });
  }
});
/*≠≠ node_modules/@yr/graphics-component/previewGrid.js ≠≠*/

/*== src/preview/preview.js ==*/
$m['src/preview/preview'] = { exports: {} };

const srcpreviewpreview__grid = $m['@yr/graphics-component/previewGrid'].exports;
const srcpreviewpreview__ReactDOM = $m['react-dom'].exports;
const srcpreviewpreview__recipes = $m['src/js/lib/recipes'].exports;
const srcpreviewpreview__symbolComponent = $m['src/js/index'].exports;

const srcpreviewpreview__el = document.getElementById('viewport');
const srcpreviewpreview__symbol = srcpreviewpreview__symbolComponent.create({ rootImagePath: 'png' });

srcpreviewpreview__ReactDOM.render(srcpreviewpreview__grid({
  ids: Object.keys(srcpreviewpreview__recipes),
  graphic: srcpreviewpreview__symbol
}), srcpreviewpreview__el);
/*≠≠ src/preview/preview.js ≠≠*/
})()