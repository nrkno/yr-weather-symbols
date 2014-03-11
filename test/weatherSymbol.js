(function(root) {
	// Load or return cached version of requested module with id 'path' or 'path/index'
	// @param {String} path
	// @return {Object}
	function require (path) {
		// Convert relative path to absolute for cases where 'require' has not been resolved
		// called from outside of a module, for example
		if (!this.module && path.charAt(0) == '.') {
			path = path.slice((path.indexOf('..') === 0) ? 3 : 2);
		}
		// Check with/without root package (need to handle node_modules differently)
		var paths = [path, path.slice(path.indexOf('/') + 1)]
			, m;
		// Find in cache
		for (var i = 0, n = paths.length; i < n; i++) {
			path = paths[i];
			m = require.modules[path] || require.modules[path + '/index'];
			if (m) break;
		}
		if (!m) {
			throw "Couldn't find module for: " + path;
		}
		// Instantiate the module if it's export object is not yet defined
		if (!m.exports) {
			// Convert 'lazy' evaluated string to Function
			if ('string' == typeof m) {
				m = require.modules[path] = new Function('module', 'exports', 'require', m);
			}
			m.exports = {};
			m.filename = path;
			m.call(this, m, m.exports, require.relative(path));
		}
		// Return the exports object
		return m.exports;
	}

	// Cache of module objects
	require.modules = {};

	// Resolve 'to' an absolute path
	// @param {String} curr
	// @param {String} path
	// @return {String}
	require.resolve = function(from, to) {
		var fromSegs = from.split('/')
			, seg;

		// Non relative path
		if (to.charAt(0) != '.') return to;

		// Don't strip root paths (handled specially in require())
		if (fromSegs.length > 1) fromSegs.pop();
		to = to.split('/');
		// Use 'from' path segments to resolve relative 'to' path
		for (var i = 0; i < to.length; ++i) {
			seg = to[i];
			if (seg == '..') {
				fromSegs.pop();
			} else if (seg != '.') {
				fromSegs.push(seg);
			}
		}
		return fromSegs.join('/');
	};

	// Partial completion of the module's inner 'require' function
	// @param {String} path
	// @return {Object}
	require.relative = function(path) {
		return function(p) {
			return require(require.resolve(path, p));
		};
	};

	// Register a module with id of 'path' and callback of 'fn'
	// @param {String} path
	// @param {Function} fn [signature should be of type (module, exports, require)]
	require.register = function(path, fn) {
		require.modules[path] = fn;
	};

	// Expose
	root.require = require;
})(window != null ? window : global);

require.register('capabilities', function(module, exports, require) {
  var hasCanvas = false
  	, hasSVG = false
  	, backingRatio = 1
  	, test;
  
  // Test for inline svg (Modernizr)
  test = document.createElement('div');
  test.innerHTML = '<svg/>';
  hasSVG = (test.firstChild && test.firstChild.namespaceURI) == 'http://www.w3.org/2000/svg';
  
  // Test for canvas
  test = document.createElement('canvas');
  hasCanvas = !!(test.getContext && test.getContext('2d'));
  
  // Determine backing ratio (account for hi-dpi screens)
  if (hasCanvas) {
  	var ctx = test.getContext('2d')
  		, devicePixelRatio = window.devicePixelRatio || 1
  		, backingStorePixelRatio = ctx.webkitBackingStorePixelRatio
  			|| ctx.mozBackingStorePixelRatio
  			|| ctx.msBackingStorePixelRatio
  			|| ctx.oBackingStorePixelRatio
  			|| ctx.backingStorePixelRatio
  			|| 1;
  	backingRatio = devicePixelRatio / backingStorePixelRatio;
  	// Make it available globally
  	if (!window.backingRatio) window.backingRatio = backingRatio;
  }
  
  exports.hasCanvas = hasCanvas;
  exports.hasSVG = hasSVG;
  exports.backingRatio = backingRatio;
});
require.register('svg', function(module, exports, require) {
  var capabilities = require('capabilities');
  
  exports.NS = 'http://www.w3.org/2000/svg';
  exports.LINK = 'http://www.w3.org/1999/xlink';
  
  /**
   * Inject svg symbol definitions into the DOM
   * @param {String} id
   * @param {String} defs
   */
  exports.injectDefs = function (id, defs) {
  	if (capabilities.hasSVG && !document.getElementById(id)) {
  		var el = document.createElement('div')
  			, svg = '<svg id="'
  					+ id
  					+ '" style="display:none;">'
  					+ defs
  					+ '</svg>';
  
  		el.innerHTML = svg;
  		document.body.insertBefore(el.firstChild, document.body.firstChild);
  	}
  };
  
  /**
   * Append svg element of 'tye' to 'parent', setting 'attrs'
   * @parama {DOMElement} parent
   * @parama {String} type
   * @parama {Object} attrs
   */
  exports.appendChild = function (parent, type, attrs) {
  	var el = document.createElementNS(exports.NS, type);
  
  	if (attrs) {
  		for (var attr in attrs) {
  			if (attr.indexOf('xlink:') == 0) {
  				el.setAttributeNS(exports.LINK, attr.substring(6), attrs[attr]);
  			} else {
  				el.setAttribute(attr, attrs[attr]);
  			}
  		}
  	}
  
  	parent.appendChild(el);
  };
});
require.register('yr-colours', function(module, exports, require) {
  module.exports = {
  	// Symbols
  	SUN_RAY: '#e88d15',
  	SUN_CENTRE: '#faba2f',
  	SUN_HORIZON: '#4d4d4d',
  	MOON: '#afc1c9',
  	RAIN: '#1671CC',
  	SLEET: '#1EB9D8',
  	SNOW: '#89DDF0',
  	LIGHTNING: '#c9af16',
  	WIND: '#565656',
  
  	// UI
  	WHITE: '#fffcf5',
  	BLACK: '#252422',
  	BLUE_LIGHT: '#cbd9dd',
  	BLUE: '#0099cc',
  	BLUE_DARK: '#061E26',
  	ORANGE: '#c94a00',
  	GREY_LIGHT: '#e6e6e6',
  	GREY: '#808080',
  	GREY_DARK: '#403d39',
  	RED: '#df2918',
  	GREEN: '#46933b',
  	YELLOW: '#faba2f',
  	YELLOW_LIGHT: '#fffecc',
  	EXTREME: '#9e0067',
  	NIGHT: '#f5f5f5'
  };
});
require.register('lodash._isnative', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  
  /** Used for native method references */
  var objectProto = Object.prototype;
  
  /** Used to resolve the internal [[Class]] of values */
  var toString = objectProto.toString;
  
  /** Used to detect if a method is native */
  var reNative = RegExp('^' +
    String(toString)
      .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      .replace(/toString| for [^\]]+/g, '.*?') + '$'
  );
  
  /**
   * Checks if `value` is a native function.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if the `value` is a native function, else `false`.
   */
  function isNative(value) {
    return typeof value == 'function' && reNative.test(value);
  }
  
  module.exports = isNative;
  
});
require.register('lodash._objecttypes', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  
  /** Used to determine if values are of the language type Object */
  var objectTypes = {
    'boolean': false,
    'function': true,
    'object': true,
    'number': false,
    'string': false,
    'undefined': false
  };
  
  module.exports = objectTypes;
  
});
require.register('lodash.isobject', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var objectTypes = require('lodash._objecttypes');
  
  /**
   * Checks if `value` is the language type of Object.
   * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if the `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(1);
   * // => false
   */
  function isObject(value) {
    // check if the value is the ECMAScript language type of Object
    // http://es5.github.io/#x8
    // and avoid a V8 bug
    // http://code.google.com/p/v8/issues/detail?id=2291
    return !!(value && objectTypes[typeof value]);
  }
  
  module.exports = isObject;
  
});
require.register('lodash.noop', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  
  /**
   * A no-operation function.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @example
   *
   * var object = { 'name': 'fred' };
   * _.noop(object) === undefined;
   * // => true
   */
  function noop() {
    // no operation performed
  }
  
  module.exports = noop;
  
});
require.register('lodash._basecreate', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var isNative = require('lodash._isnative'),
      isObject = require('lodash.isobject'),
      noop = require('lodash.noop');
  
  /* Native method shortcuts for methods with the same name as other `lodash` methods */
  var nativeCreate = isNative(nativeCreate = Object.create) && nativeCreate;
  
  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} prototype The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  function baseCreate(prototype, properties) {
    return isObject(prototype) ? nativeCreate(prototype) : {};
  }
  // fallback for browsers without `Object.create`
  if (!nativeCreate) {
    baseCreate = (function() {
      function Object() {}
      return function(prototype) {
        if (isObject(prototype)) {
          Object.prototype = prototype;
          var result = new Object;
          Object.prototype = null;
        }
        return result || global.Object();
      };
    }());
  }
  
  module.exports = baseCreate;
  
});
require.register('lodash._setbinddata', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var isNative = require('lodash._isnative'),
      noop = require('lodash.noop');
  
  /** Used as the property descriptor for `__bindData__` */
  var descriptor = {
    'configurable': false,
    'enumerable': false,
    'value': null,
    'writable': false
  };
  
  /** Used to set meta data on functions */
  var defineProperty = (function() {
    // IE 8 only accepts DOM elements
    try {
      var o = {},
          func = isNative(func = Object.defineProperty) && func,
          result = func(o, o, o) && func;
    } catch(e) { }
    return result;
  }());
  
  /**
   * Sets `this` binding data on a given function.
   *
   * @private
   * @param {Function} func The function to set data on.
   * @param {Array} value The data array to set.
   */
  var setBindData = !defineProperty ? noop : function(func, value) {
    descriptor.value = value;
    defineProperty(func, '__bindData__', descriptor);
  };
  
  module.exports = setBindData;
  
});
require.register('lodash._slice', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  
  /**
   * Slices the `collection` from the `start` index up to, but not including,
   * the `end` index.
   *
   * Note: This function is used instead of `Array#slice` to support node lists
   * in IE < 9 and to ensure dense arrays are returned.
   *
   * @private
   * @param {Array|Object|string} collection The collection to slice.
   * @param {number} start The start index.
   * @param {number} end The end index.
   * @returns {Array} Returns the new array.
   */
  function slice(array, start, end) {
    start || (start = 0);
    if (typeof end == 'undefined') {
      end = array ? array.length : 0;
    }
    var index = -1,
        length = end - start || 0,
        result = Array(length < 0 ? 0 : length);
  
    while (++index < length) {
      result[index] = array[start + index];
    }
    return result;
  }
  
  module.exports = slice;
  
});
require.register('lodash._basebind', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var baseCreate = require('lodash._basecreate'),
      isObject = require('lodash.isobject'),
      setBindData = require('lodash._setbinddata'),
      slice = require('lodash._slice');
  
  /**
   * Used for `Array` method references.
   *
   * Normally `Array.prototype` would suffice, however, using an array literal
   * avoids issues in Narwhal.
   */
  var arrayRef = [];
  
  /** Native method shortcuts */
  var push = arrayRef.push;
  
  /**
   * The base implementation of `_.bind` that creates the bound function and
   * sets its meta data.
   *
   * @private
   * @param {Array} bindData The bind data array.
   * @returns {Function} Returns the new bound function.
   */
  function baseBind(bindData) {
    var func = bindData[0],
        partialArgs = bindData[2],
        thisArg = bindData[4];
  
    function bound() {
      // `Function#bind` spec
      // http://es5.github.io/#x15.3.4.5
      if (partialArgs) {
        // avoid `arguments` object deoptimizations by using `slice` instead
        // of `Array.prototype.slice.call` and not assigning `arguments` to a
        // variable as a ternary expression
        var args = slice(partialArgs);
        push.apply(args, arguments);
      }
      // mimic the constructor's `return` behavior
      // http://es5.github.io/#x13.2.2
      if (this instanceof bound) {
        // ensure `new bound` is an instance of `func`
        var thisBinding = baseCreate(func.prototype),
            result = func.apply(thisBinding, args || arguments);
        return isObject(result) ? result : thisBinding;
      }
      return func.apply(thisArg, args || arguments);
    }
    setBindData(bound, bindData);
    return bound;
  }
  
  module.exports = baseBind;
  
});
require.register('lodash._basecreatewrapper', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var baseCreate = require('lodash._basecreate'),
      isObject = require('lodash.isobject'),
      setBindData = require('lodash._setbinddata'),
      slice = require('lodash._slice');
  
  /**
   * Used for `Array` method references.
   *
   * Normally `Array.prototype` would suffice, however, using an array literal
   * avoids issues in Narwhal.
   */
  var arrayRef = [];
  
  /** Native method shortcuts */
  var push = arrayRef.push;
  
  /**
   * The base implementation of `createWrapper` that creates the wrapper and
   * sets its meta data.
   *
   * @private
   * @param {Array} bindData The bind data array.
   * @returns {Function} Returns the new function.
   */
  function baseCreateWrapper(bindData) {
    var func = bindData[0],
        bitmask = bindData[1],
        partialArgs = bindData[2],
        partialRightArgs = bindData[3],
        thisArg = bindData[4],
        arity = bindData[5];
  
    var isBind = bitmask & 1,
        isBindKey = bitmask & 2,
        isCurry = bitmask & 4,
        isCurryBound = bitmask & 8,
        key = func;
  
    function bound() {
      var thisBinding = isBind ? thisArg : this;
      if (partialArgs) {
        var args = slice(partialArgs);
        push.apply(args, arguments);
      }
      if (partialRightArgs || isCurry) {
        args || (args = slice(arguments));
        if (partialRightArgs) {
          push.apply(args, partialRightArgs);
        }
        if (isCurry && args.length < arity) {
          bitmask |= 16 & ~32;
          return baseCreateWrapper([func, (isCurryBound ? bitmask : bitmask & ~3), args, null, thisArg, arity]);
        }
      }
      args || (args = arguments);
      if (isBindKey) {
        func = thisBinding[key];
      }
      if (this instanceof bound) {
        thisBinding = baseCreate(func.prototype);
        var result = func.apply(thisBinding, args);
        return isObject(result) ? result : thisBinding;
      }
      return func.apply(thisBinding, args);
    }
    setBindData(bound, bindData);
    return bound;
  }
  
  module.exports = baseCreateWrapper;
  
});
require.register('lodash.isfunction', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  
  /**
   * Checks if `value` is a function.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if the `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   */
  function isFunction(value) {
    return typeof value == 'function';
  }
  
  module.exports = isFunction;
  
});
require.register('lodash._createwrapper', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var baseBind = require('lodash._basebind'),
      baseCreateWrapper = require('lodash._basecreatewrapper'),
      isFunction = require('lodash.isfunction'),
      slice = require('lodash._slice');
  
  /**
   * Used for `Array` method references.
   *
   * Normally `Array.prototype` would suffice, however, using an array literal
   * avoids issues in Narwhal.
   */
  var arrayRef = [];
  
  /** Native method shortcuts */
  var push = arrayRef.push,
      unshift = arrayRef.unshift;
  
  /**
   * Creates a function that, when called, either curries or invokes `func`
   * with an optional `this` binding and partially applied arguments.
   *
   * @private
   * @param {Function|string} func The function or method name to reference.
   * @param {number} bitmask The bitmask of method flags to compose.
   *  The bitmask may be composed of the following flags:
   *  1 - `_.bind`
   *  2 - `_.bindKey`
   *  4 - `_.curry`
   *  8 - `_.curry` (bound)
   *  16 - `_.partial`
   *  32 - `_.partialRight`
   * @param {Array} [partialArgs] An array of arguments to prepend to those
   *  provided to the new function.
   * @param {Array} [partialRightArgs] An array of arguments to append to those
   *  provided to the new function.
   * @param {*} [thisArg] The `this` binding of `func`.
   * @param {number} [arity] The arity of `func`.
   * @returns {Function} Returns the new function.
   */
  function createWrapper(func, bitmask, partialArgs, partialRightArgs, thisArg, arity) {
    var isBind = bitmask & 1,
        isBindKey = bitmask & 2,
        isCurry = bitmask & 4,
        isCurryBound = bitmask & 8,
        isPartial = bitmask & 16,
        isPartialRight = bitmask & 32;
  
    if (!isBindKey && !isFunction(func)) {
      throw new TypeError;
    }
    if (isPartial && !partialArgs.length) {
      bitmask &= ~16;
      isPartial = partialArgs = false;
    }
    if (isPartialRight && !partialRightArgs.length) {
      bitmask &= ~32;
      isPartialRight = partialRightArgs = false;
    }
    var bindData = func && func.__bindData__;
    if (bindData && bindData !== true) {
      // clone `bindData`
      bindData = slice(bindData);
      if (bindData[2]) {
        bindData[2] = slice(bindData[2]);
      }
      if (bindData[3]) {
        bindData[3] = slice(bindData[3]);
      }
      // set `thisBinding` is not previously bound
      if (isBind && !(bindData[1] & 1)) {
        bindData[4] = thisArg;
      }
      // set if previously bound but not currently (subsequent curried functions)
      if (!isBind && bindData[1] & 1) {
        bitmask |= 8;
      }
      // set curried arity if not yet set
      if (isCurry && !(bindData[1] & 4)) {
        bindData[5] = arity;
      }
      // append partial left arguments
      if (isPartial) {
        push.apply(bindData[2] || (bindData[2] = []), partialArgs);
      }
      // append partial right arguments
      if (isPartialRight) {
        unshift.apply(bindData[3] || (bindData[3] = []), partialRightArgs);
      }
      // merge flags
      bindData[1] |= bitmask;
      return createWrapper.apply(null, bindData);
    }
    // fast path for `_.bind`
    var creater = (bitmask == 1 || bitmask === 17) ? baseBind : baseCreateWrapper;
    return creater([func, bitmask, partialArgs, partialRightArgs, thisArg, arity]);
  }
  
  module.exports = createWrapper;
  
});
require.register('lodash.bind', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var createWrapper = require('lodash._createwrapper'),
      slice = require('lodash._slice');
  
  /**
   * Creates a function that, when called, invokes `func` with the `this`
   * binding of `thisArg` and prepends any additional `bind` arguments to those
   * provided to the bound function.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Function} func The function to bind.
   * @param {*} [thisArg] The `this` binding of `func`.
   * @param {...*} [arg] Arguments to be partially applied.
   * @returns {Function} Returns the new bound function.
   * @example
   *
   * var func = function(greeting) {
   *   return greeting + ' ' + this.name;
   * };
   *
   * func = _.bind(func, { 'name': 'fred' }, 'hi');
   * func();
   * // => 'hi fred'
   */
  function bind(func, thisArg) {
    return arguments.length > 2
      ? createWrapper(func, 17, slice(arguments, 2), null, thisArg)
      : createWrapper(func, 1, null, null, thisArg);
  }
  
  module.exports = bind;
  
});
require.register('lodash.identity', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  
  /**
   * This method returns the first argument provided to it.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'name': 'fred' };
   * _.identity(object) === object;
   * // => true
   */
  function identity(value) {
    return value;
  }
  
  module.exports = identity;
  
});
require.register('lodash.support', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var isNative = require('lodash._isnative');
  
  /** Used to detect functions containing a `this` reference */
  var reThis = /\bthis\b/;
  
  /**
   * An object used to flag environments features.
   *
   * @static
   * @memberOf _
   * @type Object
   */
  var support = {};
  
  /**
   * Detect if functions can be decompiled by `Function#toString`
   * (all but PS3 and older Opera mobile browsers & avoided in Windows 8 apps).
   *
   * @memberOf _.support
   * @type boolean
   */
  support.funcDecomp = !isNative(global.WinRTError) && reThis.test(function() { return this; });
  
  /**
   * Detect if `Function#name` is supported (all but IE).
   *
   * @memberOf _.support
   * @type boolean
   */
  support.funcNames = typeof Function.name == 'string';
  
  module.exports = support;
  
});
require.register('lodash._basecreatecallback', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var bind = require('lodash.bind'),
      identity = require('lodash.identity'),
      setBindData = require('lodash._setbinddata'),
      support = require('lodash.support');
  
  /** Used to detected named functions */
  var reFuncName = /^\s*function[ \n\r\t]+\w/;
  
  /** Used to detect functions containing a `this` reference */
  var reThis = /\bthis\b/;
  
  /** Native method shortcuts */
  var fnToString = Function.prototype.toString;
  
  /**
   * The base implementation of `_.createCallback` without support for creating
   * "_.pluck" or "_.where" style callbacks.
   *
   * @private
   * @param {*} [func=identity] The value to convert to a callback.
   * @param {*} [thisArg] The `this` binding of the created callback.
   * @param {number} [argCount] The number of arguments the callback accepts.
   * @returns {Function} Returns a callback function.
   */
  function baseCreateCallback(func, thisArg, argCount) {
    if (typeof func != 'function') {
      return identity;
    }
    // exit early for no `thisArg` or already bound by `Function#bind`
    if (typeof thisArg == 'undefined' || !('prototype' in func)) {
      return func;
    }
    var bindData = func.__bindData__;
    if (typeof bindData == 'undefined') {
      if (support.funcNames) {
        bindData = !func.name;
      }
      bindData = bindData || !support.funcDecomp;
      if (!bindData) {
        var source = fnToString.call(func);
        if (!support.funcNames) {
          bindData = !reFuncName.test(source);
        }
        if (!bindData) {
          // checks if `func` references the `this` keyword and stores the result
          bindData = reThis.test(source);
          setBindData(func, bindData);
        }
      }
    }
    // exit early if there are no `this` references or `func` is bound
    if (bindData === false || (bindData !== true && bindData[1] & 1)) {
      return func;
    }
    switch (argCount) {
      case 1: return function(value) {
        return func.call(thisArg, value);
      };
      case 2: return function(a, b) {
        return func.call(thisArg, a, b);
      };
      case 3: return function(value, index, collection) {
        return func.call(thisArg, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(thisArg, accumulator, value, index, collection);
      };
    }
    return bind(func, thisArg);
  }
  
  module.exports = baseCreateCallback;
  
});
require.register('lodash._shimkeys', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var objectTypes = require('lodash._objecttypes');
  
  /** Used for native method references */
  var objectProto = Object.prototype;
  
  /** Native method shortcuts */
  var hasOwnProperty = objectProto.hasOwnProperty;
  
  /**
   * A fallback implementation of `Object.keys` which produces an array of the
   * given object's own enumerable property names.
   *
   * @private
   * @type Function
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns an array of property names.
   */
  var shimKeys = function(object) {
    var index, iterable = object, result = [];
    if (!iterable) return result;
    if (!(objectTypes[typeof object])) return result;
      for (index in iterable) {
        if (hasOwnProperty.call(iterable, index)) {
          result.push(index);
        }
      }
    return result
  };
  
  module.exports = shimKeys;
  
});
require.register('lodash.keys', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var isNative = require('lodash._isnative'),
      isObject = require('lodash.isobject'),
      shimKeys = require('lodash._shimkeys');
  
  /* Native method shortcuts for methods with the same name as other `lodash` methods */
  var nativeKeys = isNative(nativeKeys = Object.keys) && nativeKeys;
  
  /**
   * Creates an array composed of the own enumerable property names of an object.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns an array of property names.
   * @example
   *
   * _.keys({ 'one': 1, 'two': 2, 'three': 3 });
   * // => ['one', 'two', 'three'] (property order is not guaranteed across environments)
   */
  var keys = !nativeKeys ? shimKeys : function(object) {
    if (!isObject(object)) {
      return [];
    }
    return nativeKeys(object);
  };
  
  module.exports = keys;
  
});
require.register('lodash.forown', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var baseCreateCallback = require('lodash._basecreatecallback'),
      keys = require('lodash.keys'),
      objectTypes = require('lodash._objecttypes');
  
  /**
   * Iterates over own enumerable properties of an object, executing the callback
   * for each property. The callback is bound to `thisArg` and invoked with three
   * arguments; (value, key, object). Callbacks may exit iteration early by
   * explicitly returning `false`.
   *
   * @static
   * @memberOf _
   * @type Function
   * @category Objects
   * @param {Object} object The object to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {Object} Returns `object`.
   * @example
   *
   * _.forOwn({ '0': 'zero', '1': 'one', 'length': 2 }, function(num, key) {
   *   console.log(key);
   * });
   * // => logs '0', '1', and 'length' (property order is not guaranteed across environments)
   */
  var forOwn = function(collection, callback, thisArg) {
    var index, iterable = collection, result = iterable;
    if (!iterable) return result;
    if (!objectTypes[typeof iterable]) return result;
    callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
      var ownIndex = -1,
          ownProps = objectTypes[typeof iterable] && keys(iterable),
          length = ownProps ? ownProps.length : 0;
  
      while (++ownIndex < length) {
        index = ownProps[ownIndex];
        if (callback(iterable[index], index, collection) === false) return result;
      }
    return result
  };
  
  module.exports = forOwn;
  
});
require.register('lodash.foreach', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var baseCreateCallback = require('lodash._basecreatecallback'),
      forOwn = require('lodash.forown');
  
  /**
   * Iterates over elements of a collection, executing the callback for each
   * element. The callback is bound to `thisArg` and invoked with three arguments;
   * (value, index|key, collection). Callbacks may exit iteration early by
   * explicitly returning `false`.
   *
   * Note: As with other "Collections" methods, objects with a `length` property
   * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
   * may be used for object iteration.
   *
   * @static
   * @memberOf _
   * @alias each
   * @category Collections
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {Array|Object|string} Returns `collection`.
   * @example
   *
   * _([1, 2, 3]).forEach(function(num) { console.log(num); }).join(',');
   * // => logs each number and returns '1,2,3'
   *
   * _.forEach({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { console.log(num); });
   * // => logs each number and returns the object (property order is not guaranteed across environments)
   */
  function forEach(collection, callback, thisArg) {
    var index = -1,
        length = collection ? collection.length : 0;
  
    callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
    if (typeof length == 'number') {
      while (++index < length) {
        if (callback(collection[index], index, collection) === false) {
          break;
        }
      }
    } else {
      forOwn(collection, callback);
    }
    return collection;
  }
  
  module.exports = forEach;
  
});
require.register('trait', function(module, exports, require) {
  var forEach = require('lodash.foreach')
  	, bind = require('lodash.bind')
  	, keys = require('lodash.keys')
  	, owns = bind(Function.prototype.call, Object.prototype.hasOwnProperty);
  
  /* Feature tests */
  var SUPPORTS_ACCESSORS = (function () {
  	try {
  		var test = {};
  		Object.defineProperty(test, 'x', {
  			get: function() {
  				return 1;
  			}
  		});
  		return test.x === 1;
  	} catch (err) {
  		return false;
  	}
  })();
  // IE8 implements Obejct.defineProperty and Object.getOwnPropertyDescriptor
  // only for DOM objects.
  var SUPPORTS_GET_OWN_PROP_DESCRIPTOR = (function () {
  	try {
  		if (Object.getOwnPropertyDescriptor) {
  			var test = {x: 1};
  			return !!Object.getOwnPropertyDescriptor(test, 'x');
  		}
  	} catch (err) {}
  	return false;
  })();
  var SUPPORTS_DEFINE_PROP = (function () {
  	try {
  		if (Object.defineProperty) {
  			var test = {};
  			Object.defineProperty(test, 'x', {value: 1});
  			return test.x === 1;
  		}
  	} catch (err) {}
  	return false;
  })();
  
  /* ES3 fallbacks */
  var freeze = Object.freeze
  	|| function (obj) { return obj; };
  var getPrototypeOf = Object.getPrototypeOf
  	|| function (obj) { return Object.prototype; };
  var getOwnPropertyNames = Object.getOwnPropertyNames
  	|| function (obj) {
  			var props = [];
  			for (var p in obj) {
  				if (hasOwnProperty(obj, p)) props.push(p);
  			}
  			return props;
  		};
  var getOwnPropertyDescriptor = SUPPORTS_GET_OWN_PROP_DESCRIPTOR
  	? Object.getOwnPropertyDescriptor
  	: function (obj, name) {
  			return {
  				value: obj[name],
  				enumerable: true,
  				writable: true,
  				configurable: true
  			};
  		};
  var defineProperty = SUPPORTS_DEFINE_PROP
  	? Object.defineProperty
  	: function (obj, name, pd) {
  			obj[name] = pd.value;
  		};
  var defineProperties = Object.defineProperties
  	|| function (obj, propMap) {
  			for (var name in propMap) {
  				if (hasOwnProperty(obj, name)) {
  					defineProperty(obj, name, propMap[name]);
  				}
  			}
  		};
  var objectCreate = Object.create
  	|| function (proto, propMap) {
  			var self;
  			function dummy() {};
  			dummy.prototype = proto || Object.prototype;
  			self = new dummy();
  			if (propMap) defineProperties(self, propMap);
  			return self;
  		};
  var getOwnProperties = Object.getOwnProperties
  	|| function (obj) {
  			var map = {};
  			forEach(getOwnPropertyNames(obj), function (name) {
  				map[name] = getOwnPropertyDescriptor(obj, name);
  			});
  			return map;
  		};
  
  // Polyfill
  if (!Object.create) Object.create = objectCreate;
  if (!Object.getOwnPropertyNames) Object.getOwnPropertyNames = getOwnPropertyNames;
  if (!Object.getOwnProperties) Object.getOwnProperties = getOwnProperties;
  if (!Object.getPrototypeOf) Object.getPrototypeOf = getPrototypeOf;
  
  
  /**
   * Whether or not given property descriptors are equivalent. They are
   * equivalent either if both are marked as 'conflict' or 'required' property
   * or if all the properties of descriptors are equal.
   * @param {Object} actual
   * @param {Object} expected
   * @returns {Boolean}
   */
  function equivalentDescriptors (actual, expected) {
  	return (actual.conflict && expected.conflict) ||
  		(actual.required && expected.required) ||
  		equalDescriptors(actual, expected);
  }
  
  /**
   * Whether or not given property descriptors define equal properties.
   * @param {Object} actual
   * @param {Object} expected
   * @returns {Boolean}
   */
  function equalDescriptors (actual, expected) {
  	return actual.get === expected.get &&
  		actual.set === expected.set &&
  		actual.value === expected.value &&
  		!!actual.enumerable === !!expected.enumerable &&
  		!!actual.configurable === !!expected.configurable &&
  		!!actual.writable === !!expected.writable;
  }
  
  // Utilities that throw exceptions for properties that are marked
  // as 'required' or 'conflict' properties.
  function throwConflictPropertyError (name) {
  	throw new Error('Remaining conflicting property: ' + name);
  }
  function throwRequiredPropertyError (name) {
  	throw new Error('Missing required property: ' + name);
  }
  
  /**
   * Generates custom **required** property descriptor. Descriptor contains
   * non-standard property `required` that is equal to `true`.
   * @param {String} name
   *    property name to generate descriptor for.
   * @returns {Object}
   *    custom property descriptor
   */
  function RequiredPropertyDescriptor (name) {
  	// Creating function by binding first argument to a property `name` on the
  	// `throwConflictPropertyError` function. Created function is used as a
  	// getter & setter of the created property descriptor. This way we ensure
  	// that we throw exception late (on property access) if object with
  	// `required` property was instantiated using built-in `Object.create`.
  	var accessor = bind(throwRequiredPropertyError, null, name);
  	if (SUPPORTS_ACCESSORS) {
  		return {
  			get: accessor,
  			set: accessor,
  			required: true
  		}
  	} else {
  		return {
  			value: accessor,
  			required: true
  		}
  	}
  }
  
  /**
   * Generates custom **conflicting** property descriptor. Descriptor contains
   * non-standard property `conflict` that is equal to `true`.
   * @param {String} name
   *    property name to generate descriptor for.
   * @returns {Object}
   *    custom property descriptor
   */
  function ConflictPropertyDescriptor (name) {
  	// For details see `RequiredPropertyDescriptor` since idea is same.
  	var accessor = bind(throwConflictPropertyError, null, name);
  	if (SUPPORTS_ACCESSORS) {
  		return {
  			get: accessor,
  			set: accessor,
  			conflict: true
  		}
  	} else {
  		return {
  			value: accessor,
  			conflict: true
  		}
  	}
  }
  
  /**
   * Tests if property is marked as `required` property.
   */
  function isRequiredProperty (object, name) {
  	return !!object[name].required;
  }
  
  /**
   * Tests if property is marked as `conflict` property.
   */
  function isConflictProperty (object, name) {
  	return !!object[name].conflict;
  }
  
  /**
   * Function tests whether or not method of the `source` object with a given
   * `name` is inherited from `Object.prototype`.
   */
  function isBuiltInMethod (name, source) {
  	var target = Object.prototype[name];
  
  	// If methods are equal then we know it's `true`.
  	return target == source
  		// If `source` object comes form a different sandbox `==` will evaluate
  		// to `false`, in that case we check if functions names and sources match.
  		|| (String(target) === String(source) && target.name === source.name);
  }
  
  /**
   * Function overrides `toString` and `constructor` methods of a given `target`
   * object with a same-named methods of a given `source` if methods of `target`
   * object are inherited / copied from `Object.prototype`.
   * @see create
   */
  function overrideBuiltInMethods (target, source) {
  	if (isBuiltInMethod('toString', target.toString)) {
  		defineProperty(target, 'toString',  {
  			value: source.toString,
  			configurable: true,
  			enumerable: false
  		});
  	}
  
  	if (isBuiltInMethod('constructor', target.constructor)) {
  		defineProperty(target, 'constructor', {
  			value: source.constructor,
  			configurable: true,
  			enumerable: false
  		});
  	}
  }
  
  /**
   * Composes new trait with the same own properties as the original trait,
   * except that all property names appearing in the first argument are replaced
   * by 'required' property descriptors.
   * @param {String[]} keys
   *    Array of strings property names.
   * @param {Object} trait
   *    A trait some properties of which should be excluded.
   * @returns {Object}
   * @example
   *    var newTrait = exclude(['name', ...], trait)
   */
  function exclude (names, trait) {
  	var map = {};
  
  	forEach(keys(trait), function(name) {
  
  		// If property is not excluded (the array of names does not contain it),
  		// or it is a 'required' property, copy it to the property descriptor `map`
  		// that will be used for creation of resulting trait.
  		if (!~names.indexOf(name) || isRequiredProperty(trait, name)) {
  			map[name] = { value: trait[name], enumerable: true };
  
  		// For all the `names` in the exclude name array we create required
  		// property descriptors and copy them to the `map`.
  		} else {
  			map[name] = { value: RequiredPropertyDescriptor(name), enumerable: true };
  		}
  	});
  
  	return Object.create(Trait.prototype, map);
  }
  
  /**
   * Composes new instance of `Trait` with a properties of a given `trait`,
   * except that all properties whose name is an own property of `renames` will
   * be renamed to `renames[name]` and a `'required'` property for name will be
   * added instead.
   *
   * For each renamed property, a required property is generated. If
   * the `renames` map two properties to the same name, a conflict is generated.
   * If the `renames` map a property to an existing unrenamed property, a
   * conflict is generated.
   *
   * @param {Object} renames
   *    An object whose own properties serve as a mapping from old names to new
   *    names.
   * @param {Object} trait
   *    A new trait with renamed properties.
   * @returns {Object}
   * @example
   *
   *    // Return trait with `bar` property equal to `trait.foo` and with
   *    // `foo` and `baz` 'required' properties.
   *    var renamedTrait = rename({ foo: 'bar', baz: null }), trait);
   *
   *    // t1 and t2 are equivalent traits
   *    var t1 = rename({a: 'b'}, t);
   *    var t2 = compose(exclude(['a'], t), { a: { required: true }, b: t[a] });
   */
  function rename (renames, trait) {
  	var map = {};
  
  	// Loop over all the properties of the given `trait` and copy them to a
  	// property descriptor `map` that will be used for creation of resulting
  	// trait. Also renaming properties in the `map` as specified by `renames`.
  	forEach(keys(trait), function(name) {
  		var alias;
  
  		// If the property is in the `renames` map, and it isn't a 'required'
  		// property (which should never need to be aliased because 'required'
  		// properties never conflict), then we must try to rename it.
  		if (owns(renames, name) && !isRequiredProperty(trait, name)) {
  			alias = renames[name];
  
  			// If the `map` already has the `alias`, and it isn't a 'required'
  			// property, that means the `alias` conflicts with an existing name for a
  			// provided trait (that can happen if >=2 properties are aliased to the
  			// same name). In this case we mark it as a conflicting property.
  			// Otherwise, everything is fine, and we copy property with an `alias`
  			// name.
  			if (owns(map, alias) && !map[alias].value.required) {
  				map[alias] = {
  					value: ConflictPropertyDescriptor(alias),
  					enumerable: true
  				};
  			} else {
  				map[alias] = {
  					value: trait[name],
  					enumerable: true
  				};
  			}
  
  			// Regardless of whether or not the rename was successful, we check to
  			// see if the original `name` exists in the map (such a property
  			// could exist if previous another property was aliased to this `name`).
  			// If it isn't, we mark it as 'required', to make sure the caller
  			// provides another value for the old name, to which methods of the trait
  			// might continue to reference.
  			if (!owns(map, name)) {
  				map[name] = {
  					value: RequiredPropertyDescriptor(name),
  					enumerable: true
  				};
  			}
  
  		// Otherwise, either the property isn't in the `renames` map (thus the
  		// caller is not trying to rename it) or it is a 'required' property.
  		// Either way, we don't have to alias the property, we just have to copy it
  		// to the map.
  		} else {
  			// The property isn't in the map yet, so we copy it over.
  			if (!owns(map, name)) {
  				map[name] = { value: trait[name], enumerable: true };
  
  			// The property is already in the map (that means another property was
  			// aliased with this `name`, which creates a conflict if the property is
  			// not marked as 'required'), so we have to mark it as a 'conflict'
  			// property.
  			} else if (!isRequiredProperty(trait, name)) {
  				map[name] = {
  					value: ConflictPropertyDescriptor(name),
  					enumerable: true
  				};
  			}
  		}
  	});
  
  	return Object.create(Trait.prototype, map);
  }
  
  /**
   * Composes new resolved trait, with all the same properties as the original
   * `trait`, except that all properties whose name is an own property of
   * `resolutions` will be renamed to `resolutions[name]`.
   *
   * If `resolutions[name]` is `null`, the value is mapped to a property
   * descriptor that is marked as a 'required' property.
   */
  function resolve (resolutions, trait) {
  	var renames = {}
  		, exclusions = [];
  
  	// Go through each mapping in `resolutions` object and distribute it either
  	// to `renames` or `exclusions`.
  	forEach(keys(resolutions), function(name) {
  
  		// If `resolutions[name]` is a truthy value then it's a mapping old -> new
  		// so we copy it to `renames` map.
  		if (resolutions[name]) {
  			renames[name] = resolutions[name];
  
  		// Otherwise it's not a mapping but an exclusion instead in which case we
  		// add it to the `exclusions` array.
  		} else {
  			exclusions.push(name);
  		}
  	});
  
  	// First `exclude` **then** `rename` and order is important since
  	// `exclude` and `rename` are not associative.
  	return rename(renames, exclude(exclusions, trait));
  }
  
  /**
   * Create a Trait (a custom property descriptor map) that represents the given
   * `object`'s own properties. Property descriptor map is a 'custom', because it
   * inherits from `Trait.prototype` and it's property descriptors may contain
   * two attributes that is not part of the ES5 specification:
   *
   *  - 'required' (this property must be provided by another trait
   *    before an instance of this trait can be created)
   *  - 'conflict' (when the trait is composed with another trait,
   *    a unique value for this property is provided by two or more traits)
   *
   * Data properties bound to the `Trait.required` singleton exported by
   * this module will be marked as 'required' properties.
   *
   * @param {Object} object
   *    Map of properties to compose trait from.
   * @returns {Trait}
   *    Trait / Property descriptor map containing all the own properties of the
   *    given argument.
   */
  function trait (object) {
  	var trait = object
  		, map;
  
  	if (!(object instanceof Trait)) {
  		// If passed `object` is not already an instance of `Trait` we create
  		// a property descriptor `map` containing descriptors of own properties of
  		// a given `object`. `map` is used to create a `Trait` instance after all
  		// properties are mapped. Please note that we can't create trait and then
  		// just copy properties into it since that will fails for inherited
  		// 'read-only' properties.
  		map = {};
  
  		// Each own property of a given `object` is mapped to a data property, who's
  		// value is a property descriptor.
  		forEach(keys(object), function (name) {
  
  			// If property of an `object` is equal to a `Trait.required`, it means
  			// that it was marked as 'required' property, in which case we map it
  			// to 'required' property.
  			if (Trait.required == getOwnPropertyDescriptor(object, name).value) {
  				map[name] = {
  					value: RequiredPropertyDescriptor(name),
  					enumerable: true
  				};
  
  			// Otherwise property is mapped to it's property descriptor.
  			} else {
  				map[name] = {
  					value: getOwnPropertyDescriptor(object, name),
  					enumerable: true
  				};
  			}
  		});
  
  		trait = Object.create(Trait.prototype, map);
  	}
  
  	return trait;
  }
  
  /**
   * Compose a property descriptor map that inherits from `Trait.prototype` and
   * contains property descriptors for all the own properties of the passed
   * traits.
   *
   * If two or more traits have own properties with the same name, the returned
   * trait will contain a 'conflict' property for that name. Composition is a
   * commutative and associative operation, and the order of its arguments is
   * irrelevant.
   */
  function compose () {
  	// Create a new property descriptor `map` to which all own properties of the
  	// passed traits are copied. This map will be used to create a `Trait`
  	// instance that will be result of this composition.
  	var map = {};
  
  	// Properties of each passed trait are copied to the composition.
  	forEach(arguments, function(trait) {
  		// Copying each property of the given trait.
  		forEach(keys(trait), function(name) {
  			// If `map` already owns a property with the `name` and it is not marked 'required'.
  			if (owns(map, name) && !map[name].value.required) {
  
  				// If source trait's property with the `name` is marked as 'required'
  				// we do nothing, as requirement was already resolved by a property in
  				// the `map` (because it already contains non-required property with
  				// that `name`). But if properties are just different, we have a name
  				// clash and we substitute it with a property that is marked 'conflict'.
  				if (!isRequiredProperty(trait, name) && !equivalentDescriptors(map[name].value, trait[name])) {
  					map[name] = {
  						value: ConflictPropertyDescriptor(name),
  						enumerable: true
  					};
  				}
  
  			// Otherwise, the `map` does not have an own property with the `name`, or
  			// it is marked 'required'. Either way trait's property is copied to the
  			// map (If property of the `map` is marked 'required' it is going to be
  			// resolved by the property that is being copied).
  			} else {
  				map[name] = { value: trait[name], enumerable: true };
  			}
  		});
  	});
  
  	return Object.create(Trait.prototype, map);
  }
  
  /**
   *  `defineProperties` is like `Object.defineProperties`, except that it
   *  ensures that:
   *    - An exception is thrown if any property in a given `properties` map
   *      is marked as 'required' property and same named property is not
   *      found in a given `prototype`.
   *    - An exception is thrown if any property in a given `properties` map
   *      is marked as 'conflict' property.
   * @param {Object} object
   *    Object to define properties on.
   * @param {Object} properties
   *    Properties descriptor map.
   * @returns {Object}
   *    `object` that was passed as a first argument.
   */
  function verifiedDefineProperties (object, properties) {
  
  	// Create a map into which we will copy each verified property from the given
  	// `properties` description map. We use it to verify that none of the
  	// provided properties is marked as a 'conflict' property and that all
  	// 'required' properties are resolved by a property of an `object`, so we
  	// can throw an exception before mutating object if that isn't the case.
  	var verifiedProperties = {};
  
  	// Coping each property from a given `properties` descriptor map to a
  	// verified map of property descriptors.
  	forEach(keys(properties), function(name) {
  
  		// If property is marked as 'required' property and we don't have a same
  		// named property in a given `object` we throw an exception. If `object`
  		// has same named property just skip this property since required property
  		// is was inherited and there for requirement was satisfied.
  		if (isRequiredProperty(properties, name)) {
  			if (!(name in object)) {
  				throwRequiredPropertyError(name);
  			}
  
  		// If property is marked as 'conflict' property we throw an exception.
  		} else if (isConflictProperty(properties, name)) {
  			throwConflictPropertyError(name);
  
  		// If property is not marked neither as 'required' nor 'conflict' property
  		// we copy it to verified properties map.
  		} else {
  			verifiedProperties[name] = properties[name];
  		}
  	});
  
  	// If no exceptions were thrown yet, we know that our verified property
  	// descriptor map has no properties marked as 'conflict' or 'required',
  	// so we just delegate to the built-in `Object.defineProperties`.
  	return defineProperties(object, verifiedProperties);
  }
  
  /**
   *  `create` is like `Object.create`, except that it ensures that:
   *    - An exception is thrown if any property in a given `properties` map
   *      is marked as 'required' property and same named property is not
   *      found in a given `prototype`.
   *    - An exception is thrown if any property in a given `properties` map
   *      is marked as 'conflict' property.
   * @param {Object} prototype
   *    prototype of the composed object
   * @param {Object} properties
   *    Properties descriptor map.
   * @returns {Object}
   *    An object that inherits form a given `prototype` and implements all the
   *    properties defined by a given `properties` descriptor map.
   */
  function create (prototype, properties) {
  
  	// Creating an instance of the given `prototype`.
  	var object = Object.create(prototype);
  
  	// Overriding `toString`, `constructor` methods if they are just inherited
  	// from `Object.prototype` with a same named methods of the `Trait.prototype`
  	// that will have more relevant behavior.
  	overrideBuiltInMethods(object, Trait.prototype);
  
  	// Trying to define given `properties` on the `object`. We use our custom
  	// `defineProperties` function instead of build-in `Object.defineProperties`
  	// that behaves exactly the same, except that it will throw if any
  	// property in the given `properties` descriptor is marked as 'required' or
  	// 'conflict' property.
  	return verifiedDefineProperties(object, properties);
  }
  
  /**
   * Composes new trait. If two or more traits have own properties with the
   * same name, the new trait will contain a 'conflict' property for that name.
   * 'compose' is a commutative and associative operation, and the order of its
   * arguments is not significant.
   *
   * **Note:** Use `Trait.compose` instead of calling this function with more
   * than one argument. The multiple-argument functionality is strictly for
   * backward compatibility.
   *
   * @params {Object} trait
   *    Takes traits as an arguments
   * @returns {Object}
   *    New trait containing the combined own properties of all the traits.
   * @example
   *    var newTrait = compose(trait_1, trait_2, ..., trait_N)
   */
  function Trait (trait1, trait2) {
  
  	// If the function was called with one argument, the argument should be
  	// an object whose properties are mapped to property descriptors on a new
  	// instance of Trait, so we delegate to the trait function.
  	// If the function was called with more than one argument, those arguments
  	// should be instances of Trait or plain property descriptor maps
  	// whose properties should be mixed into a new instance of Trait,
  	// so we delegate to the compose function.
  
  	return trait2 === undefined
  		? trait(trait1)
  		: compose.apply(null, arguments);
  }
  
  freeze(defineProperties(Trait.prototype, {
  	toString: {
  		value: function toString() {
  			return '[object ' + this.constructor.name + ']';
  		}
  	},
  
  	/**
  	 * `create` is like `Object.create`, except that it ensures that:
  	 *    - An exception is thrown if this trait defines a property that is
  	 *      marked as required property and same named property is not
  	 *      found in a given `prototype`.
  	 *    - An exception is thrown if this trait contains property that is
  	 *      marked as 'conflict' property.
  	 * @param {Object}
  	 *    prototype of the compared object
  	 * @returns {Object}
  	 *    An object with all of the properties described by the trait.
  	 */
  	create: {
  		value: function createTrait(prototype) {
  			return create(undefined === prototype
  				? Object.prototype
  				: prototype,
  			this);
  		},
  		enumerable: true
  	},
  
  	/**
  	 * Composes a new resolved trait, with all the same properties as the original
  	 * trait, except that all properties whose name is an own property of
  	 * `resolutions` will be renamed to the value of `resolutions[name]`. If
  	 * `resolutions[name]` is `null`, the property is marked as 'required'.
  	 * @param {Object} resolutions
  	 *   An object whose own properties serve as a mapping from old names to new
  	 *   names, or to `null` if the property should be excluded.
  	 * @returns {Object}
  	 *   New trait with the same own properties as the original trait but renamed.
  	 */
  	resolve: {
  		value: function resolveTrait(resolutions) {
  			return resolve(resolutions, this);
  		},
  		enumerable: true
  	}
  }));
  
  /**
   * @see compose
   */
  Trait.compose = freeze(compose);
  freeze(compose.prototype);
  
  /**
   * Constant singleton, representing placeholder for required properties.
   * @type {Object}
   */
  Trait.required = freeze(Object.create(Object.prototype, {
  	toString: {
  		value: freeze(function toString() {
  			return '<Trait.required>';
  		})
  	}
  }));
  freeze(Trait.required.toString.prototype);
  
  module.exports = freeze(Trait);
});
require.register('primitives/TPrimitive', function(module, exports, require) {
  var Trait = require('trait');
  
  module.exports = Trait({
  	TWO_PI: Math.PI * 2,
  	STROKE_WIDTH: 4,
  	WIDTH: 100,
  
  	/**
  	 * Render primitive in 'element'
  	 * @param {DOMElement} element
  	 * @param {Object} options
  	 */
  	render: function (element, options) {
  		if (options.type == 'svg') {
  			return this.renderSVG(element, options);
  		} else {
  			return this.renderCanvas(element, options);
  		}
  	},
  
  	/**
  	 * Retrieve attribute object for <use>
  	 * @param {String} link
  	 * @param {Object} options
  	 */
  	getUseAttributes: function (link, options) {
  		return {
  			'xlink:href': link,
  			x: '0',
  			y: '0',
  			width: '100',
  			height: '100',
  			transform: options.flip
  				? 'translate('
  					+ ((this.WIDTH * options.scale) + options.x)
  					+ ','
  					+ options.y
  					+ ') scale('
  					+ (-1 * options.scale)
  					+ ', '
  					+ options.scale
  					+ ')'
  				: 'translate('
  					+ options.x
  					+ ','
  					+ options.y
  					+ ') scale('
  					+ options.scale
  					+ ')'
  		}
  	},
  
  	renderSVG: Trait.required,
  	renderCanvas: Trait.required
  });
  
});
require.register('primitives/sunPrimitive', function(module, exports, require) {
  var svg = require('svg')  
  	, colours = require('yr-colours')  
  	, Trait = require('trait')  
  	, TPrimitive = require('primitives/TPrimitive')  
    
  	, RAY_COLOUR = colours.SUN_RAY  
  	, CENTER_COLOUR = colours.SUN_CENTRE  
  	, HORIZON_COLOUR = colours.SUN_HORIZON  
    
  	, TSunPrimitive;  
    
  TSunPrimitive = Trait({  
  	/**  
  	 * Render svg version  
  	 * @param {DOMElement} element  
  	 * @param {Object} options  
  	 * @returns {String}  
  	 */  
  	renderSVG: function (element, options) {  
  		svg.appendChild(  
  			element,  
  			'use',  
  			this.getUseAttributes(options.winter ? '#sunWinter' : '#sun', options)  
  		);  
  	},  
    
  	/**  
  	 * Render canvas version  
  	 * @param {DOMElement} element  
  	 * @param {Object} options  
  	 */  
  	renderCanvas: function (element, options) {  
  		var ctx = element.getContext('2d');  
    
  		ctx.save();  
  		ctx.translate(options.x, options.y);  
  		ctx.scale(options.scale, options.scale);  
  		ctx.strokeStyle = options.bg;  
  		ctx.lineWidth = this.STROKE_WIDTH;  
    
  		if (options.winter) {  
  			// Horizon  
  			ctx.fillStyle = HORIZON_COLOUR;  
  			ctx.beginPath();  
  			ctx.moveTo(2.5,0);  
  			ctx.lineTo(87.6,0);  
  			ctx.bezierCurveTo(88.9,0,90,0.9,90,2);  
  			ctx.lineTo(90,2);  
  			ctx.bezierCurveTo(90,3.1,88.9,4,87.5,4);  
  			ctx.lineTo(2.5,4);  
  			ctx.bezierCurveTo(1.1,4,0,3.1,0,2);  
  			ctx.lineTo(0,2);  
  			ctx.bezierCurveTo(0,0.9,1.1,0,2.5,0);  
  			ctx.fill();  
  			ctx.closePath();  
    
  			// Rays  
  			ctx.fillStyle = RAY_COLOUR;  
  			ctx.beginPath();  
  			ctx.moveTo(23.6,19.8);  
  			ctx.lineTo(13.600000000000001,36.8);  
  			ctx.bezierCurveTo(12.600000000000001,38.599999999999994,14.600000000000001,40.599999999999994,16.3,39.5);  
  			ctx.lineTo(33.3,29.5);  
  			ctx.bezierCurveTo(29.2,27.3,25.8,23.9,23.6,19.8);  
  			ctx.moveTo(66.6,19.8);  
  			ctx.bezierCurveTo(64.39999999999999,23.9,60.99999999999999,27.3,56.89999999999999,29.5);  
  			ctx.lineTo(73.89999999999999,39.5);  
  			ctx.bezierCurveTo(75.69999999999999,40.5,77.69999999999999,38.5,76.6,36.8);  
  			ctx.lineTo(66.6,19.8);  
  			ctx.moveTo(45.1,32.6);  
  			ctx.bezierCurveTo(42.7,32.6,40.4,32.300000000000004,38.2,31.6);  
  			ctx.lineTo(43.2,50.7);  
  			ctx.bezierCurveTo(43.7,52.7,46.5,52.7,47.1,50.7);  
  			ctx.lineTo(52.1,31.6);  
  			ctx.bezierCurveTo(49.8,32.2,47.5,32.6,45.1,32.6);  
  			ctx.moveTo(69.6,8);  
  			ctx.bezierCurveTo(69.6,8,69.6,8,69.6,8);  
  			ctx.bezierCurveTo(69.6,10.5,69.3,12.8,68.6,15);  
  			ctx.lineTo(87.69999999999999,10);  
  			ctx.bezierCurveTo(88.69999999999999,9.7,89.19999999999999,8.9,89.19999999999999,8);  
  			ctx.lineTo(69.6,8);  
  			ctx.moveTo(20.6,8);  
  			ctx.lineTo(1,8);  
  			ctx.bezierCurveTo(1,8.9,1.5,9.7,2.5,10);  
  			ctx.lineTo(21.6,15);  
  			ctx.bezierCurveTo(20.9,12.8,20.6,10.5,20.6,8);  
  			ctx.bezierCurveTo(20.6,8,20.6,8,20.6,8);  
  			ctx.closePath();  
  			ctx.fill();  
    
  			// Center fill  
  			ctx.fillStyle = CENTER_COLOUR;  
  			ctx.beginPath();  
  			ctx.moveTo(24.6,8);  
  			ctx.bezierCurveTo(24.6,8,24.6,8,24.6,8);  
  			ctx.bezierCurveTo(24.6,19.4,33.8,28.6,45.1,28.6);  
  			ctx.bezierCurveTo(56.400000000000006,28.6,65.6,19.400000000000002,65.6,8.100000000000001);  
  			ctx.bezierCurveTo(65.6,8.100000000000001,65.6,8.100000000000001,65.6,8.000000000000002);  
  			ctx.lineTo(24.6,8.000000000000002);  
  			ctx.closePath();  
  			ctx.fill();  
    
  		} else {  
  			// Rays  
  			ctx.fillStyle = RAY_COLOUR;  
  			ctx.beginPath();  
  			ctx.moveTo(23.5,33.2);  
  			ctx.bezierCurveTo(25.7,29.1,29.1,25.700000000000003,33.2,23.500000000000004);  
  			ctx.lineTo(16.200000000000003,13.500000000000004);  
  			ctx.bezierCurveTo(14.400000000000002,12.500000000000004,12.400000000000002,14.500000000000004,13.500000000000004,16.200000000000003);  
  			ctx.lineTo(23.5,33.2);  
  			ctx.moveTo(45,20.5);  
  			ctx.bezierCurveTo(47.4,20.5,49.7,20.8,51.9,21.5);  
  			ctx.lineTo(46.9,2.3999999999999986);  
  			ctx.bezierCurveTo(46.4,0.3999999999999986,43.6,0.3999999999999986,43,2.3999999999999986);  
  			ctx.lineTo(38,21.5);  
  			ctx.bezierCurveTo(40.3,20.8,42.6,20.5,45,20.5);  
  			ctx.moveTo(87.6,43.1);  
  			ctx.lineTo(68.5,38.1);  
  			ctx.bezierCurveTo(69.1,40.300000000000004,69.5,42.6,69.5,45);  
  			ctx.bezierCurveTo(69.5,47.4,69.2,49.7,68.5,51.9);  
  			ctx.lineTo(87.6,46.9);  
  			ctx.bezierCurveTo(89.6,46.4,89.6,43.6,87.6,43.1);  
  			ctx.moveTo(20.5,45);  
  			ctx.bezierCurveTo(20.5,42.6,20.8,40.3,21.5,38.1);  
  			ctx.lineTo(2.3999999999999986,43.1);  
  			ctx.bezierCurveTo(0.3999999999999986,43.6,0.3999999999999986,46.4,2.3999999999999986,47);  
  			ctx.lineTo(21.5,52);  
  			ctx.bezierCurveTo(20.8,49.7,20.5,47.4,20.5,45);  
  			ctx.moveTo(66.5,33.2);  
  			ctx.lineTo(76.5,16.200000000000003);  
  			ctx.bezierCurveTo(77.5,14.400000000000002,75.5,12.400000000000002,73.8,13.500000000000004);  
  			ctx.lineTo(56.8,23.500000000000004);  
  			ctx.bezierCurveTo(60.9,25.8,64.2,29.1,66.5,33.2);  
  			ctx.moveTo(23.5,56.8);  
  			ctx.lineTo(13.5,73.8);  
  			ctx.bezierCurveTo(12.5,75.6,14.5,77.6,16.2,76.5);  
  			ctx.lineTo(33.2,66.5);  
  			ctx.bezierCurveTo(29.1,64.2,25.8,60.9,23.5,56.8);  
  			ctx.moveTo(66.5,56.8);  
  			ctx.bezierCurveTo(64.3,60.9,60.9,64.3,56.8,66.5);  
  			ctx.lineTo(73.8,76.5);  
  			ctx.bezierCurveTo(75.6,77.5,77.6,75.5,76.5,73.8);  
  			ctx.lineTo(66.5,56.8);  
  			ctx.moveTo(45,69.5);  
  			ctx.bezierCurveTo(42.6,69.5,40.3,69.2,38.1,68.5);  
  			ctx.lineTo(43.1,87.6);  
  			ctx.bezierCurveTo(43.6,89.6,46.4,89.6,47,87.6);  
  			ctx.lineTo(52,68.5);  
  			ctx.bezierCurveTo(49.7,69.2,47.4,69.5,45,69.5);  
  			ctx.closePath();  
  			ctx.fill();  
    
  			// Center fill  
  			ctx.fillStyle = CENTER_COLOUR;  
  			ctx.beginPath();  
  			ctx.arc(45,45,20.5,0,this.TWO_PI,true);  
  			ctx.closePath();  
  			ctx.fill();  
  		}  
  		ctx.restore();  
  	}  
  });  
    
  module.exports = Trait.compose(  
  	TPrimitive,  
  	TSunPrimitive  
  ).create();
});
require.register('primitives/moonPrimitive', function(module, exports, require) {
  var svg = require('svg')  
  	, Trait = require('trait')  
  	, TPrimitive = require('primitives/TPrimitive')  
    
  	, FILL_COLOUR = require('yr-colours').MOON  
    
  	, TMoonPrimitive;  
    
  TMoonPrimitive = Trait({  
  	/**  
  	 * Render svg version  
  	 * @param {DOMElement} element  
  	 * @param {Object} options  
  	 * @returns {String}  
  	 */  
  	renderSVG: function (element, options) {  
  		svg.appendChild(  
  			element,  
  			'use',  
  			this.getUseAttributes('#moon', options)  
  		);  
  	},  
    
  	/**  
  	 * Render canvas version  
  	 * @param {DOMElement} element  
  	 * @param {Object} options  
  	 */  
  	renderCanvas: function (element, options) {  
  		var ctx = element.getContext('2d');  
    
  		ctx.save();  
    
  		ctx.translate(options.x, options.y)  
  		ctx.scale(options.scale, options.scale);  
  		ctx.fillStyle = FILL_COLOUR;  
  		ctx.beginPath();  
  		ctx.moveTo(23,20);  
  		ctx.bezierCurveTo(23,12.322,25.887999999999998,5.321999999999999,30.631,0.015999999999998238);  
  		ctx.bezierCurveTo(30.421,0.012,30.212,0,30,0);  
  		ctx.bezierCurveTo(13.432,0,0,13.432,0,30);  
  		ctx.bezierCurveTo(0,46.568,13.432,60,30,60);  
  		ctx.bezierCurveTo(38.891,60,46.875,56.129,52.369,49.984);  
  		ctx.bezierCurveTo(36.093,49.646,23,36.356,23,20);  
  		ctx.closePath();  
  		ctx.fill();  
  		ctx.restore();  
  	}  
  });  
    
  module.exports = Trait.compose(  
  	TPrimitive,  
  	TMoonPrimitive  
  ).create();  
  
});
require.register('primitives/cloudPrimitive', function(module, exports, require) {
  var svg = require('svg')  
  	, Trait = require('trait')  
  	, TPrimitive = require('primitives/TPrimitive')  
    
  	, TCloudPrimitive;  
    
  TCloudPrimitive = Trait({  
  	/**  
  	 * Render svg version  
  	 * @param {DOMElement} element  
  	 * @param {Object} options  
  	 * @returns {String}  
  	 */  
  	renderSVG: function (element, options) {  
  		svg.appendChild(  
  			element,  
  			'use',  
  			this.getUseAttributes('#cloud-' + options.tint * 100, options)  
  		);  
  	},  
    
  	/**  
  	 * Render canvas version  
  	 * @param {DOMElement} element  
  	 * @param {Object} options  
  	 */  
  	renderCanvas: function (element, options) {  
  		var ctx = element.getContext('2d')  
  			, tint = Math.floor(255 * (1-options.tint));  
    
  		ctx.save();  
  		if (options.flip) {  
  			ctx.translate((this.WIDTH * options.scale) + options.x, options.y)  
  			ctx.scale(-1 * options.scale, options.scale);  
  		} else {  
  			ctx.translate(options.x, options.y)  
  			ctx.scale(options.scale, options.scale);  
  		}  
    
  		// Mask  
  		ctx.save();  
  		ctx.globalCompositeOperation = 'destination-out';  
  		ctx.beginPath();  
  		ctx.moveTo(93.7,33.7);  
  		ctx.bezierCurveTo(92.60000000000001,26.700000000000003,87.7,18.900000000000002,77.6,17.000000000000004);  
  		ctx.bezierCurveTo(74.9,6.9,66.5,0.3,55.7,0);  
  		ctx.bezierCurveTo(55.400000000000006,0,55.2,0,54.900000000000006,0);  
  		ctx.bezierCurveTo(44.5,0,36.2,5.7,32.8,15.1);  
  		ctx.bezierCurveTo(32.3,15.1,31.9,15,31.4,15);  
  		ctx.bezierCurveTo(24.9,15,17.2,18.9,14.799999999999997,26.2);  
  		ctx.bezierCurveTo(5.9,26.9,0,34.5,0,41.6);  
  		ctx.bezierCurveTo(0,52,7.8,58,21.5,58);  
  		ctx.lineTo(65.1,58);  
  		ctx.bezierCurveTo(70.69999999999999,58,78.5,57.5,83.3,55.2);  
  		ctx.bezierCurveTo(91,51.5,95.2,42.8,93.7,33.7);  
  		ctx.closePath();  
  		ctx.fill();  
  		ctx.restore();  
    
  		// Fill  
  		ctx.strokeStyle = options.bg;  
  		ctx.lineWidth = this.STROKE_WIDTH;  
  		ctx.fillStyle = 'rgb(' + tint	+ ',' + tint + ',' + tint + ')';  
  		ctx.beginPath();  
  		ctx.moveTo(74.3,20.6);  
  		ctx.bezierCurveTo(72.4,8.3,63.1,4,54.9,4);  
  		ctx.bezierCurveTo(45.9,4,38,9.4,35.599999999999994,19.7);  
  		ctx.bezierCurveTo(27.699999999999996,17.099999999999998,18.599999999999994,22.599999999999998,18.099999999999994,30.299999999999997);  
  		ctx.bezierCurveTo(14.399999999999995,29.499999999999996,4.099999999999994,31.599999999999998,4.099999999999994,41.599999999999994);  
  		ctx.bezierCurveTo(4,51.9,13.5,54,21.5,54);  
  		ctx.lineTo(65.1,54);  
  		ctx.bezierCurveTo(72.5,54,78.3,53.2,81.5,51.6);  
  		ctx.bezierCurveTo(88.6,48.2,90.8,40.5,89.8,34.3);  
  		ctx.bezierCurveTo(88.8,28.5,84.6,21.3,74.3,20.6);  
  		ctx.closePath();  
  		ctx.fill();  
  		ctx.restore();  
  	}  
  });  
    
  module.exports = Trait.compose(  
  	TPrimitive,  
  	TCloudPrimitive  
  ).create();
});
require.register('primitives/raindropPrimitive', function(module, exports, require) {
  var svg = require('svg')  
  	, Trait = require('trait')  
  	, TPrimitive = require('primitives/TPrimitive')  
    
  	, FILL_COLOUR = require('yr-colours').RAIN  
    
  	, TRaindropPrimitive;  
    
  TRaindropPrimitive = Trait({  
  	/**  
  	 * Render svg version  
  	 * @param {DOMElement} element  
  	 * @param {Object} options  
  	 * @returns {String}  
  	 */  
  	renderSVG: function (element, options) {  
  		svg.appendChild(  
  			element,  
  			'use',  
  			this.getUseAttributes('#raindrop', options)  
  		);  
  	},  
    
  	/**  
  	 * Render canvas version  
  	 * @param {DOMElement} element  
  	 * @param {Object} options  
  	 */  
  	renderCanvas: function (element, options) {  
  		var ctx = element.getContext('2d');  
    
  		// Stroke  
  		ctx.save();  
  		ctx.fillStyle = options.bg;  
  		ctx.translate(options.x, options.y)  
  		ctx.scale(options.scale, options.scale);  
  		ctx.save();  
  		ctx.globalCompositeOperation = 'destination-out';  
  		ctx.beginPath();  
  		ctx.arc(9,9,9,0,this.TWO_PI,true);  
  		ctx.closePath();  
  		ctx.fill();  
  		ctx.restore();  
    
  		// Fill  
  		ctx.fillStyle = FILL_COLOUR;  
  		ctx.beginPath();  
  		ctx.moveTo(20,16.8);  
  		ctx.bezierCurveTo(20,20.2,17.3,23,14,23);  
  		ctx.bezierCurveTo(10.7,23,8,20.2,8,16.8);  
  		ctx.bezierCurveTo(8,14.9,8,6,8,6);  
  		ctx.bezierCurveTo(13.5,11.5,20,11.2,20,16.8);  
  		ctx.closePath();  
  		ctx.fill();  
  		ctx.restore();  
  	}  
  });  
    
  module.exports = Trait.compose(  
  	TPrimitive,  
  	TRaindropPrimitive  
  ).create();  
  
});
require.register('primitives/sleetPrimitive', function(module, exports, require) {
  var svg = require('svg')
  	, Trait = require('trait')
  	, TPrimitive = require('primitives/TPrimitive')
  
  	, FILL_COLOUR = require('yr-colours').SLEET
  
  	, TSleetPrimitive;
  
  TSleetPrimitive = Trait({
  	/**
  	 * Render svg version
  	 * @param {DOMElement} element
  	 * @param {Object} options
  	 * @returns {String}
  	 */
  	renderSVG: function (element, options) {
  		svg.appendChild(
  			element,
  			'use',
  			this.getUseAttributes('#sleet', options)
  		);
  	},
  
  	/**
  	 * Render canvas version
  	 * @param {DOMElement} element
  	 * @param {Object} options
  	 */
  	renderCanvas: function (element, options) {
  		var ctx = element.getContext('2d');
  
  		// Stroke
  		ctx.save();
  		ctx.fillStyle = options.bg;
  		ctx.translate(options.x, options.y)
  		ctx.scale(options.scale, options.scale);
  		ctx.save();
  		ctx.globalCompositeOperation = 'destination-out';
  		ctx.beginPath();
  		ctx.arc(9,9,9,0,this.TWO_PI,true);
  		ctx.closePath();
  		ctx.fill();
  		ctx.restore();
  
  		// Fill
  		ctx.fillStyle = FILL_COLOUR;
  		ctx.beginPath();
  		ctx.moveTo(19.9,16.6);
  		ctx.bezierCurveTo(18.099999999999998,18.900000000000002,16.5,22.1,15.999999999999998,25.5);
  		ctx.bezierCurveTo(15.899999999999999,26,15.399999999999999,26.2,14.999999999999998,25.9);
  		ctx.bezierCurveTo(12.7,23.799999999999997,10.2,22.599999999999998,6.499999999999998,22.099999999999998);
  		ctx.bezierCurveTo(6.099999999999998,21.999999999999996,5.899999999999999,21.599999999999998,6.099999999999998,21.299999999999997);
  		ctx.bezierCurveTo(8.4,17,8.6,10.1,7.8,5);
  		ctx.bezierCurveTo(10.5,9.2,14.899999999999999,14,19.6,15.7);
  		ctx.bezierCurveTo(20,15.8,20.1,16.3,19.9,16.6);
  		ctx.closePath();
  		ctx.fill();
  		ctx.restore();
  	}
  });
  
  module.exports = Trait.compose(
  	TPrimitive,
  	TSleetPrimitive
  ).create();
  
});
require.register('primitives/snowflakePrimitive', function(module, exports, require) {
  var svg = require('svg')  
  	, Trait = require('trait')  
  	, TPrimitive = require('primitives/TPrimitive')  
    
  	, FILL_COLOUR = require('yr-colours').SNOW  
    
  	, TSnowflakePrimitive;  
    
  TSnowflakePrimitive = Trait({  
  	/**  
  	 * Render svg version  
  	 * @param {DOMElement} element  
  	 * @param {Object} options  
  	 * @returns {String}  
  	 */  
  	renderSVG: function (element, options) {  
  		svg.appendChild(  
  			element,  
  			'use',  
  			this.getUseAttributes('#snowflake', options)  
  		);  
  	},  
    
  	/**  
  	 * Render canvas version  
  	 * @param {DOMElement} element  
  	 * @param {Object} options  
  	 */  
  	renderCanvas: function (element, options) {  
  		var ctx = element.getContext('2d');  
    
  		// Stroke  
  		ctx.save();  
  		ctx.fillStyle = options.bg;  
  		ctx.translate(options.x, options.y)  
  		ctx.scale(options.scale, options.scale);  
  		ctx.save();  
  		ctx.globalCompositeOperation = 'destination-out';  
  		ctx.beginPath();  
  		ctx.arc(9,9,9,0,this.TWO_PI,true);  
  		ctx.closePath();  
  		ctx.fill();  
  		ctx.restore();  
    
  		// Fill  
  		ctx.fillStyle = FILL_COLOUR;  
  		ctx.beginPath();  
  		ctx.moveTo(6.2,6.9);  
  		ctx.lineTo(7.300000000000001,10.7);  
  		ctx.bezierCurveTo(7.000000000000001,10.899999999999999,6.700000000000001,11.2,6.4,11.5);  
  		ctx.bezierCurveTo(6,11.7,5.8,12,5.6,12.4);  
  		ctx.lineTo(1.7999999999999998,11.4);  
  		ctx.bezierCurveTo(1,11.2,0.2,11.7,0,12.5);  
  		ctx.bezierCurveTo(-0.2,13.3,0.3,14.1,1.1,14.3);  
  		ctx.lineTo(4.9,15.3);  
  		ctx.bezierCurveTo(4.9,16.1,5.2,16.900000000000002,5.5,17.6);  
  		ctx.lineTo(2.8,20.400000000000002);  
  		ctx.bezierCurveTo(2.1999999999999997,21.000000000000004,2.1999999999999997,21.900000000000002,2.8,22.500000000000004);  
  		ctx.bezierCurveTo(3.4,23.100000000000005,4.3,23.100000000000005,4.9,22.500000000000004);  
  		ctx.lineTo(7.6000000000000005,19.700000000000003);  
  		ctx.bezierCurveTo(8.3,20.1,9.100000000000001,20.300000000000004,9.9,20.300000000000004);  
  		ctx.lineTo(10.9,24.100000000000005);  
  		ctx.bezierCurveTo(11.1,24.900000000000006,11.9,25.300000000000004,12.700000000000001,25.100000000000005);  
  		ctx.bezierCurveTo(13.500000000000002,24.900000000000006,13.9,24.100000000000005,13.700000000000001,23.300000000000004);  
  		ctx.lineTo(12.600000000000001,19.500000000000004);  
  		ctx.bezierCurveTo(12.900000000000002,19.300000000000004,13.3,19.100000000000005,13.600000000000001,18.800000000000004);  
  		ctx.bezierCurveTo(13.900000000000002,18.500000000000004,14.100000000000001,18.200000000000003,14.3,17.800000000000004);  
  		ctx.lineTo(18.1,18.800000000000004);  
  		ctx.bezierCurveTo(18.900000000000002,19.000000000000004,19.700000000000003,18.500000000000004,19.900000000000002,17.700000000000003);  
  		ctx.bezierCurveTo(20.1,16.900000000000002,19.6,16.1,18.8,15.900000000000002);  
  		ctx.lineTo(15,14.900000000000002);  
  		ctx.bezierCurveTo(15,14.100000000000001,14.7,13.300000000000002,14.3,12.600000000000001);  
  		ctx.lineTo(17,9.8);  
  		ctx.bezierCurveTo(17.6,9.200000000000001,17.5,8.3,17,7.700000000000001);  
  		ctx.bezierCurveTo(16.4,7.100000000000001,15.5,7.100000000000001,14.9,7.700000000000001);  
  		ctx.lineTo(12.2,10.5);  
  		ctx.bezierCurveTo(11.5,10.1,10.7,9.9,9.899999999999999,9.9);  
  		ctx.lineTo(9,6.1);  
  		ctx.bezierCurveTo(8.8,5.3,8,4.8999999999999995,7.2,5.1);  
  		ctx.bezierCurveTo(6.5,5.3,6,6.1,6.2,6.9);  
  		ctx.closePath();  
  		ctx.moveTo(11.8,13.2);  
  		ctx.bezierCurveTo(12.8,14.2,12.8,15.799999999999999,11.8,16.8);  
  		ctx.bezierCurveTo(10.8,17.8,9.200000000000001,17.8,8.200000000000001,16.8);  
  		ctx.bezierCurveTo(7.200000000000001,15.8,7.200000000000001,14.200000000000001,8.200000000000001,13.200000000000001);  
  		ctx.bezierCurveTo(9.2,12.2,10.8,12.2,11.8,13.2);  
  		ctx.closePath();  
  		ctx.fill();  
  		ctx.restore();  
  	}  
  });  
    
  module.exports = Trait.compose(  
  	TPrimitive,  
  	TSnowflakePrimitive  
  ).create();  
  
});
require.register('primitives/fogPrimitive', function(module, exports, require) {
  var svg = require('svg')  
  	, Trait = require('trait')  
  	, TPrimitive = require('primitives/TPrimitive')  
    
  	, TFogPrimitive;  
    
  TFogPrimitive = Trait({  
  	/**  
  	 * Render svg version  
  	 * @param {DOMElement} element  
  	 * @param {Object} options  
  	 * @returns {String}  
  	 */  
  	renderSVG: function (element, options) {  
  		svg.appendChild(  
  			element,  
  			'use',  
  			this.getUseAttributes('#fog', options)  
  		);  
  	},  
    
  	/**  
  	 * Render canvas version  
  	 * @param {DOMElement} element  
  	 * @param {Object} options  
  	 */  
  	renderCanvas: function (element, options) {  
  		var ctx = element.getContext('2d')  
  			, tint = Math.floor(255 * (1-options.tint));  
    
  		ctx.save();  
  		ctx.fillStyle = 'rgb(' + tint	+ ',' + tint + ',' + tint + ')';  
  		ctx.translate(options.x, options.y)  
  		ctx.scale(options.scale, options.scale);  
  		ctx.beginPath();  
  		ctx.moveTo(82.3,42);  
  		ctx.lineTo(2.7,42);  
  		ctx.bezierCurveTo(1.2,42,0,42.9,0,44);  
  		ctx.bezierCurveTo(0,45.1,1.2,46,2.7,46);  
  		ctx.lineTo(82.4,46);  
  		ctx.bezierCurveTo(83.9,46,85.10000000000001,45.1,85.10000000000001,44);  
  		ctx.bezierCurveTo(85.10000000000001,42.9,83.8,42,82.3,42);  
  		ctx.closePath();  
  		ctx.fill();  
    
  		ctx.beginPath();  
  		ctx.moveTo(80.1,50);  
  		ctx.lineTo(5.9,50);  
  		ctx.bezierCurveTo(4.3,50,3,50.9,3,52);  
  		ctx.bezierCurveTo(3,53.1,4.3,54,5.9,54);  
  		ctx.lineTo(80.2,54);  
  		ctx.bezierCurveTo(81.8,54,83.10000000000001,53.1,83.10000000000001,52);  
  		ctx.bezierCurveTo(83,50.9,81.7,50,80.1,50);  
  		ctx.closePath();  
  		ctx.fill();  
    
  		ctx.beginPath();  
  		ctx.moveTo(80.1,58);  
  		ctx.lineTo(10.9,58);  
  		ctx.bezierCurveTo(9.3,58,8,58.9,8,60);  
  		ctx.bezierCurveTo(8,61.1,9.3,62,10.9,62);  
  		ctx.lineTo(80.10000000000001,62);  
  		ctx.bezierCurveTo(81.7,62,83.00000000000001,61.1,83.00000000000001,60);  
  		ctx.bezierCurveTo(83.00000000000001,58.9,81.7,58,80.1,58);  
  		ctx.closePath();  
  		ctx.fill();  
    
  		ctx.beginPath();  
  		ctx.moveTo(51.2,0);  
  		ctx.bezierCurveTo(42.1,-0.3,33.6,4.8,30.700000000000003,14.6);  
  		ctx.bezierCurveTo(24.800000000000004,13.2,15.400000000000002,16.9,13.700000000000003,25);  
  		ctx.bezierCurveTo(8.2,24.9,1.2,29,0.1,36);  
  		ctx.bezierCurveTo(0,37,0.7,37.9,1.7,37.9);  
  		ctx.lineTo(84,37.9);  
  		ctx.bezierCurveTo(85,37.9,85.8,37.199999999999996,85.9,36.199999999999996);  
  		ctx.bezierCurveTo(86.9,27.299999999999997,81.80000000000001,17.499999999999996,70.7,16.099999999999994);  
  		ctx.bezierCurveTo(68.5,5.6,60.2,0.3,51.2,0);  
  		ctx.closePath();  
  		ctx.fill();  
  		ctx.restore();  
  	}  
  });  
    
  module.exports = Trait.compose(  
  	TPrimitive,  
  	TFogPrimitive  
  ).create();
});
require.register('primitives/lightningPrimitive', function(module, exports, require) {
  var svg = require('svg')  
  	, Trait = require('trait')  
  	, TPrimitive = require('primitives/TPrimitive')  
    
  	, FILL_COLOUR = require('yr-colours').LIGHTNING  
    
  	, TLightningPrimitive;  
    
  TLightningPrimitive = Trait({  
  	/**  
  	 * Render svg version  
  	 * @param {DOMElement} element  
  	 * @param {Object} options  
  	 * @returns {String}  
  	 */  
  	renderSVG: function (element, options) {  
  		svg.appendChild(  
  			element,  
  			'use',  
  			this.getUseAttributes('#lightning', options)  
  		);  
  	},  
    
  	/**  
  	 * Render canvas version  
  	 * @param {DOMElement} element  
  	 * @param {Object} options  
  	 */  
  	renderCanvas: function (element, options) {  
  		var ctx = element.getContext('2d');  
    
  		// Fill  
  		ctx.save();  
  		ctx.translate(options.x, options.y)  
  		ctx.scale(options.scale, options.scale);  
    
  		ctx.fillStyle = FILL_COLOUR;  
  		ctx.beginPath();  
  		ctx.moveTo(10.413,0);  
  		ctx.lineTo(4.163,12.484);  
  		ctx.lineTo(12.488,12.484);  
  		ctx.lineTo(0,25);  
  		ctx.lineTo(25.001,8.32);  
  		ctx.lineTo(16.663000000000004,8.32);  
  		ctx.lineTo(24.995,0);  
  		ctx.lineTo(10.413,0);  
  		ctx.closePath();  
  		ctx.fill();  
  		ctx.restore();  
  	}  
  });  
    
  module.exports = Trait.compose(  
  	TPrimitive,  
  	TLightningPrimitive  
  ).create();
});
require.register('weatherSymbol', function(module, exports, require) {
  // Convert with http://www.professorcloud.com/svg-to-canvas/
  
  var svg = require('svg')
  	, capabilities = require('capabilities')
  	, primitives = {
  			sun: require('primitives/sunPrimitive'),
  			moon: require('primitives/moonPrimitive'),
  			cloud: require('primitives/cloudPrimitive'),
  			raindrop: require('primitives/raindropPrimitive'),
  			sleet: require('primitives/sleetPrimitive'),
  			snowflake: require('primitives/snowflakePrimitive'),
  			fog: require('primitives/fogPrimitive'),
  			lightning: require('primitives/lightningPrimitive')
  		}
  	, formula = {"10":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.4},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"raindrop","x":65,"y":72},{"primitive":"raindrop","x":49,"y":72},{"primitive":"raindrop","x":33,"y":68}],"11":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.4},{"primitive":"lightning","x":14,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"raindrop","x":69,"y":72},{"primitive":"raindrop","x":53,"y":72},{"primitive":"raindrop","x":37,"y":68}],"12":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.3},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"sleet","x":55,"y":72},{"primitive":"sleet","x":39,"y":68}],"13":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.3},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"snowflake","x":54,"y":69},{"primitive":"snowflake","x":36,"y":71}],"14":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.3},{"primitive":"lightning","x":19,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"snowflake","x":62,"y":69},{"primitive":"snowflake","x":44,"y":71}],"15":[{"primitive":"fog","x":4,"y":18,"tint":0.15}],"22":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.3},{"primitive":"lightning","x":21,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"raindrop","x":60,"y":72},{"primitive":"raindrop","x":44,"y":68}],"23":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.3},{"primitive":"lightning","x":19,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"sleet","x":58,"y":72},{"primitive":"sleet","x":42,"y":68}],"30":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.15},{"primitive":"lightning","x":27,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"raindrop","x":51,"y":68}],"31":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.15},{"primitive":"lightning","x":25,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"sleet","x":48,"y":68}],"32":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.4},{"primitive":"lightning","x":15,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"sleet","x":71,"y":72},{"primitive":"sleet","x":55,"y":72},{"primitive":"sleet","x":38,"y":68}],"33":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.15},{"primitive":"lightning","x":23,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"snowflake","x":49,"y":69}],"34":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.4},{"primitive":"lightning","x":8,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"snowflake","x":70,"y":69},{"primitive":"snowflake","x":51,"y":69},{"primitive":"snowflake","x":33,"y":71}],"46":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.15},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"raindrop","x":48,"y":68}],"47":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.15},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"sleet","x":45,"y":68}],"48":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.4},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"sleet","x":67,"y":72},{"primitive":"sleet","x":50,"y":68},{"primitive":"sleet","x":33,"y":68}],"49":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.15},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"snowflake","x":43,"y":69}],"50":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.4},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"snowflake","x":63,"y":69},{"primitive":"snowflake","x":44,"y":69},{"primitive":"snowflake","x":26,"y":71}],"01d":[{"primitive":"sun","x":5,"y":5}],"02d":[{"primitive":"sun","x":5,"y":5},{"primitive":"cloud","x":8,"y":56,"scale":0.6,"flip":true,"tint":0.1}],"03d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.1}],"40d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"raindrop","x":48,"y":68}],"05d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"raindrop","x":55,"y":72},{"primitive":"raindrop","x":39,"y":68}],"41d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"raindrop","x":65,"y":72},{"primitive":"raindrop","x":49,"y":72},{"primitive":"raindrop","x":33,"y":68}],"42d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"sleet","x":45,"y":68}],"07d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"sleet","x":55,"y":72},{"primitive":"sleet","x":39,"y":68}],"43d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"sleet","x":67,"y":72},{"primitive":"sleet","x":50,"y":68},{"primitive":"sleet","x":33,"y":68}],"44d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"snowflake","x":43,"y":69}],"08d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"snowflake","x":54,"y":69},{"primitive":"snowflake","x":36,"y":71}],"45d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"snowflake","x":63,"y":69},{"primitive":"snowflake","x":44,"y":69},{"primitive":"snowflake","x":26,"y":71}],"24d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"lightning","x":27,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"raindrop","x":51,"y":68}],"06d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"lightning","x":21,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"raindrop","x":60,"y":72},{"primitive":"raindrop","x":44,"y":68}],"25d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"lightning","x":14,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"raindrop","x":69,"y":72},{"primitive":"raindrop","x":53,"y":72},{"primitive":"raindrop","x":37,"y":68}],"26d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"lightning","x":25,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"sleet","x":48,"y":68}],"20d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"lightning","x":19,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"sleet","x":58,"y":72},{"primitive":"sleet","x":42,"y":68}],"27d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"lightning","x":15,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"sleet","x":71,"y":72},{"primitive":"sleet","x":55,"y":72},{"primitive":"sleet","x":38,"y":68}],"28d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"lightning","x":23,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"snowflake","x":49,"y":69}],"21d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"lightning","x":19,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"snowflake","x":62,"y":69},{"primitive":"snowflake","x":44,"y":71}],"29d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"lightning","x":8,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"snowflake","x":70,"y":69},{"primitive":"snowflake","x":51,"y":69},{"primitive":"snowflake","x":33,"y":71}],"01m":[{"primitive":"sun","x":5,"y":32,"winter":true}],"02m":[{"primitive":"sun","x":5,"y":32,"winter":true},{"primitive":"cloud","x":8,"y":46,"scale":0.6,"flip":true,"tint":0.1}],"03m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"cloud","x":7,"y":22,"tint":0.1}],"40m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"raindrop","x":48,"y":68}],"05m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"raindrop","x":55,"y":72},{"primitive":"raindrop","x":39,"y":68}],"41m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"raindrop","x":65,"y":72},{"primitive":"raindrop","x":49,"y":72},{"primitive":"raindrop","x":33,"y":68}],"42m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"sleet","x":45,"y":68}],"07m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"sleet","x":55,"y":72},{"primitive":"sleet","x":39,"y":68}],"43m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"sleet","x":67,"y":72},{"primitive":"sleet","x":50,"y":68},{"primitive":"sleet","x":33,"y":68}],"44m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"snowflake","x":43,"y":69}],"08m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"snowflake","x":54,"y":69},{"primitive":"snowflake","x":36,"y":71}],"45m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"snowflake","x":63,"y":69},{"primitive":"snowflake","x":44,"y":69},{"primitive":"snowflake","x":26,"y":71}],"24m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"lightning","x":27,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"raindrop","x":51,"y":68}],"06m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"lightning","x":21,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"raindrop","x":60,"y":72},{"primitive":"raindrop","x":44,"y":68}],"25m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"lightning","x":14,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"raindrop","x":69,"y":72},{"primitive":"raindrop","x":53,"y":72},{"primitive":"raindrop","x":37,"y":68}],"26m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"lightning","x":25,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"sleet","x":48,"y":68}],"20m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"lightning","x":19,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"sleet","x":58,"y":72},{"primitive":"sleet","x":42,"y":68}],"27m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"lightning","x":15,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"sleet","x":71,"y":72},{"primitive":"sleet","x":55,"y":72},{"primitive":"sleet","x":38,"y":68}],"28m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"lightning","x":23,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"snowflake","x":49,"y":69}],"21m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"lightning","x":19,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"snowflake","x":62,"y":69},{"primitive":"snowflake","x":44,"y":71}],"29m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"lightning","x":8,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"snowflake","x":70,"y":69},{"primitive":"snowflake","x":51,"y":69},{"primitive":"snowflake","x":33,"y":71}],"01n":[{"primitive":"moon","x":20,"y":20}],"02n":[{"primitive":"moon","x":20,"y":20},{"primitive":"cloud","x":8,"y":56,"scale":0.6,"flip":true,"tint":0.1}],"03n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.1}],"40n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"raindrop","x":48,"y":68}],"05n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"raindrop","x":55,"y":72},{"primitive":"raindrop","x":39,"y":68}],"41n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"raindrop","x":65,"y":72},{"primitive":"raindrop","x":49,"y":72},{"primitive":"raindrop","x":33,"y":68}],"42n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"sleet","x":45,"y":68}],"07n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"sleet","x":55,"y":72},{"primitive":"sleet","x":39,"y":68}],"43n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"sleet","x":67,"y":72},{"primitive":"sleet","x":50,"y":68},{"primitive":"sleet","x":33,"y":68}],"44n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"snowflake","x":43,"y":69}],"08n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"snowflake","x":54,"y":69},{"primitive":"snowflake","x":36,"y":71}],"45n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"snowflake","x":63,"y":69},{"primitive":"snowflake","x":44,"y":69},{"primitive":"snowflake","x":26,"y":71}],"24n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"lightning","x":27,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"raindrop","x":51,"y":68}],"06n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"lightning","x":21,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"raindrop","x":60,"y":72},{"primitive":"raindrop","x":44,"y":68}],"25n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"lightning","x":14,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"raindrop","x":69,"y":72},{"primitive":"raindrop","x":53,"y":72},{"primitive":"raindrop","x":37,"y":68}],"26n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"lightning","x":25,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"sleet","x":48,"y":68}],"20n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"lightning","x":19,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"sleet","x":58,"y":72},{"primitive":"sleet","x":42,"y":68}],"27n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"lightning","x":15,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"sleet","x":71,"y":72},{"primitive":"sleet","x":55,"y":72},{"primitive":"sleet","x":38,"y":68}],"28n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"lightning","x":23,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"snowflake","x":49,"y":69}],"21n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"lightning","x":19,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"snowflake","x":62,"y":69},{"primitive":"snowflake","x":44,"y":71}],"29n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"lightning","x":8,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"snowflake","x":70,"y":69},{"primitive":"snowflake","x":51,"y":69},{"primitive":"snowflake","x":33,"y":71}],"04":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.1},{"primitive":"cloud","x":7,"y":22,"tint":0.15}],"09":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.3},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"raindrop","x":55,"y":72},{"primitive":"raindrop","x":39,"y":68}]}
  
  	, DEFAULT_BG = '#ffffff'
  	, SVG = 'svg'
  	, CANVAS = 'canvas'
  	, IMG = 'img'
  	, DEFS = '<defs><path id="cloud" class="cloud" d="M55.6,2C46,1.7,37.1,7,34.1,17.3c-6.1-1.5-16,2.4-17.8,10.9C10.1,28,2,33.1,2,41.6C2,51,9,56,21.5,56h43.6 c5.6,0,12.9-0.5,17.3-2.6c14.9-7.2,12.3-32.3-6.4-34.6C73.7,7.9,65.1,2.3,55.6,2z"/></defs><symbol id="sun"><g class="sun-ray" ><path d="M23.5,33.2c2.2-4.1,5.6-7.5,9.7-9.7l-17-10c-1.8-1-3.8,1-2.7,2.7L23.5,33.2z"/><path d="M45,20.5c2.4,0,4.7,0.3,6.9,1l-5-19.1c-0.5-2-3.3-2-3.9,0l-5,19.1C40.3,20.8,42.6,20.5,45,20.5z"/><path d="M87.6,43.1l-19.1-5c0.6,2.2,1,4.5,1,6.9c0,2.4-0.3,4.7-1,6.9l19.1-5C89.6,46.4,89.6,43.6,87.6,43.1z"/><path d="M20.5,45c0-2.4,0.3-4.7,1-6.9l-19.1,5c-2,0.5-2,3.3,0,3.9l19.1,5C20.8,49.7,20.5,47.4,20.5,45z"/><path d="M66.5,33.2l10-17c1-1.8-1-3.8-2.7-2.7l-17,10C60.9,25.8,64.2,29.1,66.5,33.2z"/><path d="M23.5,56.8l-10,17c-1,1.8,1,3.8,2.7,2.7l17-10C29.1,64.2,25.8,60.9,23.5,56.8z"/><path d="M66.5,56.8c-2.2,4.1-5.6,7.5-9.7,9.7l17,10c1.8,1,3.8-1,2.7-2.7L66.5,56.8z"/><path d="M45,69.5c-2.4,0-4.7-0.3-6.9-1l5,19.1c0.5,2,3.3,2,3.9,0l5-19.1C49.7,69.2,47.4,69.5,45,69.5z"/></g><circle class="sun-centre" style="fill-rule:nonzero" cx="45" cy="45" r="20.5"/></symbol><symbol id="sunWinter"><path class="sun-winter-horizon" d="M2.5,0h85.1C88.9,0,90,0.9,90,2v0c0,1.1-1.1,2-2.5,2H2.5C1.1,4,0,3.1,0,2v0C0,0.9,1.1,0,2.5,0z"/><g class="sun-ray"><path d="M23.6,19.8l-10,17c-1,1.8,1,3.8,2.7,2.7l17-10C29.2,27.3,25.8,23.9,23.6,19.8z"/><path d="M66.6,19.8c-2.2,4.1-5.6,7.5-9.7,9.7l17,10c1.8,1,3.8-1,2.7-2.7L66.6,19.8z"/><path d="M45.1,32.6c-2.4,0-4.7-0.3-6.9-1l5,19.1c0.5,2,3.3,2,3.9,0l5-19.1C49.8,32.2,47.5,32.6,45.1,32.6z"/><path d="M69.6,8C69.6,8,69.6,8,69.6,8c0,2.5-0.3,4.8-1,7l19.1-5c1-0.3,1.5-1.1,1.5-2H69.6z"/><path d="M20.6,8H1c0,0.9,0.5,1.7,1.5,2l19.1,5C20.9,12.8,20.6,10.5,20.6,8C20.6,8,20.6,8,20.6,8z"/></g><path class="sun-centre" d="M24.6,8C24.6,8,24.6,8,24.6,8c0,11.4,9.2,20.6,20.5,20.6c11.3,0,20.5-9.2,20.5-20.5c0,0,0,0,0-0.1H24.6z"/></symbol><symbol id="moon"><path class="moon" d="M23,20c0-7.7,2.9-14.7,7.6-20c-0.2,0-0.4,0-0.6,0C13.4,0,0,13.4,0,30s13.4,30,30,30c8.9,0,16.9-3.9,22.4-10 C36.1,49.6,23,36.4,23,20z"/></symbol><symbol id="cloud-10" class="cloud-10"><use xlink:href="#cloud" x="0" y="0" width="100" height="100"></use></symbol><symbol id="cloud-15" class="cloud-15"><use xlink:href="#cloud" x="0" y="0" width="100" height="100"></use></symbol><symbol id="cloud-30" class="cloud-30"><use xlink:href="#cloud" x="0" y="0" width="100" height="100"></use></symbol><symbol id="cloud-40" class="cloud-40"><use xlink:href="#cloud" x="0" y="0" width="100" height="100"></use></symbol><symbol id="cloud-50" class="cloud-50"><use xlink:href="#cloud" x="0" y="0" width="100" height="100"></use></symbol><symbol id="fog"><path class="fog" d="M82.3,42H2.7C1.2,42,0,42.9,0,44s1.2,2,2.7,2h79.7c1.5,0,2.7-0.9,2.7-2S83.8,42,82.3,42z"/><path class="fog" d="M80.1,50H5.9C4.3,50,3,50.9,3,52c0,1.1,1.3,2,2.9,2h74.3c1.6,0,2.9-0.9,2.9-2C83,50.9,81.7,50,80.1,50z"/><path class="fog" d="M80.1,58H10.9C9.3,58,8,58.9,8,60s1.3,2,2.9,2h69.2c1.6,0,2.9-0.9,2.9-2S81.7,58,80.1,58z"/><path class="fog" d="M51.2,0c-9.1-0.3-17.6,4.8-20.5,14.6c-5.9-1.4-15.3,2.3-17,10.4C8.2,24.9,1.2,29,0.1,36C0,37,0.7,37.9,1.7,37.9l82.3,0 c1,0,1.8-0.7,1.9-1.7c1-8.9-4.1-18.7-15.2-20.1C68.5,5.6,60.2,0.3,51.2,0z"/></symbol><symbol id="raindrop"><circle class="bg" cx="9" cy="9" r="9"/><path class="raindrop" d="M20,16.8c0,3.4-2.7,6.2-6,6.2c-3.3,0-6-2.8-6-6.2C8,14.9,8,6,8,6C13.5,11.5,20,11.2,20,16.8z"/></symbol><symbol id="sleet"><circle class="bg" cx="9" cy="9" r="9"/><path class="sleet" d="M19.9,16.6c-1.8,2.3-3.4,5.5-3.9,8.9c-0.1,0.5-0.6,0.7-1,0.4c-2.3-2.1-4.8-3.3-8.5-3.8c-0.4-0.1-0.6-0.5-0.4-0.8 C8.4,17,8.6,10.1,7.8,5c2.7,4.2,7.1,9,11.8,10.7C20,15.8,20.1,16.3,19.9,16.6z"/></symbol><symbol id="snowflake"><circle class="bg" cx="9" cy="9" r="9"/><path class="snowflake" d="M6.2,6.9l1.1,3.8c-0.3,0.2-0.6,0.5-0.9,0.8C6,11.7,5.8,12,5.6,12.4l-3.8-1C1,11.2,0.2,11.7,0,12.5c-0.2,0.8,0.3,1.6,1.1,1.8 l3.8,1c0,0.8,0.3,1.6,0.6,2.3l-2.7,2.8c-0.6,0.6-0.6,1.5,0,2.1c0.6,0.6,1.5,0.6,2.1,0l2.7-2.8c0.7,0.4,1.5,0.6,2.3,0.6l1,3.8 c0.2,0.8,1,1.2,1.8,1c0.8-0.2,1.2-1,1-1.8l-1.1-3.8c0.3-0.2,0.7-0.4,1-0.7c0.3-0.3,0.5-0.6,0.7-1l3.8,1c0.8,0.2,1.6-0.3,1.8-1.1 c0.2-0.8-0.3-1.6-1.1-1.8l-3.8-1c0-0.8-0.3-1.6-0.7-2.3l2.7-2.8c0.6-0.6,0.5-1.5,0-2.1c-0.6-0.6-1.5-0.6-2.1,0l-2.7,2.8 c-0.7-0.4-1.5-0.6-2.3-0.6L9,6.1c-0.2-0.8-1-1.2-1.8-1C6.5,5.3,6,6.1,6.2,6.9z M11.8,13.2c1,1,1,2.6,0,3.6c-1,1-2.6,1-3.6,0 c-1-1-1-2.6,0-3.6C9.2,12.2,10.8,12.2,11.8,13.2z"/></symbol><symbol id="lightning"><path class="lightning" d="M10.4,0L4.2,12.5h8.3L0,25L25,8.3h-8.3L25,0H10.4z"/></symbol>';
  
  // Add svg definitions if not already present
  svg.injectDefs('symbolDefs', DEFS);
  
  /**
   * Render symbol in 'container' with 'options'
   * @param {DOMElement} container
   * @param {Object} options
   */
  module.exports = function (container, options) {
  	if (!container) return;
  
  	options = options || {};
  	var type = (options.type && validateType(options.type)) || getDefaultType()
  		, element = createElement(type)
  		, id = options.id || container.getAttribute('data-id')
  		, w = container.offsetWidth
  		, h = container.offsetHeight
  		, scale = capabilities.backingRatio
  		, tScale = (type == CANVAS) ? (w/100) * scale : 1
  		, bgContainer = getStyle(container, 'background-color')
  		, bg = (bgContainer && bgContainer !== 'rgba(0, 0, 0, 0)') ? bgContainer : DEFAULT_BG
  		, f = formula[id]
  		, layer, opts;
  
  	// Quit if no id or container is not empty
  	// and element matches type and 'replace' not set
  	if (!id
  		|| !options.replace
  			&& container.children.length
  			&& container.children[0].nodeName.toLowerCase() == type) {
  				return;
  	// Clear
  	} else {
  		container.innerHTML = '';
  	}
  
  	// Render svg or canvas
  	if (type != IMG) {
  		if (type == CANVAS) {
  			if (w != 0) {
  				element.width = w * scale;
  				element.height = h * scale;
  			}
  		}
  
  		if (f) {
  			// Render layers
  			for (var i = 0, n = f.length; i < n; i++) {
  				layer = f[i];
  				opts = {
  					type: type,
  					x: Math.round(layer.x * tScale),
  					y: Math.round(layer.y * tScale),
  					scale: (layer.scale || 1) * tScale,
  					flip: layer.flip,
  					tint: layer.tint || 1,
  					winter: layer.winter,
  					width: w * scale,
  					height: h * scale,
  					bg: bg
  				};
  
  				primitives[layer.primitive].render(element, opts);
  			}
  		}
  	// Load images
  	} else {
  		element.src = (options.imagePath || '') + id + '.png';
  	}
  
  	return container.appendChild(element);
  };
  
  /**
   * Retrieve the default type based on platform capabilities
   * @returns {String}
   */
  function getDefaultType () {
  	return capabilities.hasSVG
  		? SVG
  		: (capabilities.hasCanvas
  			? CANVAS
  			: IMG);
  }
  
  /**
   * Validate if 'type' works on platform
   * @param {String} type
   * @returns {String}
   */
  function validateType (type) {
  	if (type == IMG) {
  		return type;
  	} else {
  		return capabilities[(type == CANVAS) ? 'hasCanvas' : 'hasSVG']
  			? type
  			: getDefaultType();
  	}
  }
  
  /**
   * Retrieve the computed style 'prop' for 'element'
   * @param {DOMElement} element
   * @param {String} prop
   * @returns {String}
   */
  function getStyle (element, prop) {
  	return window.getComputedStyle(element).getPropertyValue(prop);
  }
  
  /**
   * Create element based on 'type'
   * @param {String} type
   * @returns {DOMElement}
   */
  function createElement (type) {
  	var el;
  
  	if (type == SVG) {
  		el = document.createElementNS(svg.NS, type);
  		el.setAttribute('x', '0px');
  		el.setAttribute('y', '0px');
  		el.setAttribute('viewBox', '0 0 100 100');
  	} else {
  		el = document.createElement(type);
  	}
  
  	return el;
  }
});
require('weatherSymbol');