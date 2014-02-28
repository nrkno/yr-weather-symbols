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

require.register('utils/svg', function(module, exports, require) {
  exports.NS = 'http://www.w3.org/2000/svg';
  exports.LINK = 'http://www.w3.org/1999/xlink';
  
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
require.register('utils/capabilities', function(module, exports, require) {
  var svg = require('utils/svg')
  
  	, hasCanvas = false
  	, hasSVG = false
  	, backingRatio = 1
  	, test;
  
  // Test for inline svg
  test = document.createElement('div');
  test.innerHTML = '<svg/>';
  hasSVG = (test.firstChild && test.firstChild.namespaceURI) == svg.NS;
  
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
require.register('lodash.isnumber', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  
  /** `Object#toString` result shortcuts */
  var numberClass = '[object Number]';
  
  /** Used for native method references */
  var objectProto = Object.prototype;
  
  /** Used to resolve the internal [[Class]] of values */
  var toString = objectProto.toString;
  
  /**
   * Checks if `value` is a number.
   *
   * Note: `NaN` is considered a number. See http://es5.github.io/#x8.5.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if the `value` is a number, else `false`.
   * @example
   *
   * _.isNumber(8.4 * 5);
   * // => true
   */
  function isNumber(value) {
    return typeof value == 'number' ||
      value && typeof value == 'object' && toString.call(value) == numberClass || false;
  }
  
  module.exports = isNumber;
  
});
require.register('lodash.isnan', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var isNumber = require('lodash.isnumber');
  
  /**
   * Checks if `value` is `NaN`.
   *
   * Note: This is not the same as native `isNaN` which will return `true` for
   * `undefined` and other non-numeric values. See http://es5.github.io/#x15.1.2.4.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if the `value` is `NaN`, else `false`.
   * @example
   *
   * _.isNaN(NaN);
   * // => true
   *
   * _.isNaN(new Number(NaN));
   * // => true
   *
   * isNaN(undefined);
   * // => true
   *
   * _.isNaN(undefined);
   * // => false
   */
  function isNaN(value) {
    // `NaN` as a primitive is the only value that is not equal to itself
    // (perform the [[Class]] check first to avoid errors with some host objects in IE)
    return isNumber(value) && value != +value;
  }
  
  module.exports = isNaN;
  
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
require.register('lodash.isarray', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var isNative = require('lodash._isnative');
  
  /** `Object#toString` result shortcuts */
  var arrayClass = '[object Array]';
  
  /** Used for native method references */
  var objectProto = Object.prototype;
  
  /** Used to resolve the internal [[Class]] of values */
  var toString = objectProto.toString;
  
  /* Native method shortcuts for methods with the same name as other `lodash` methods */
  var nativeIsArray = isNative(nativeIsArray = Array.isArray) && nativeIsArray;
  
  /**
   * Checks if `value` is an array.
   *
   * @static
   * @memberOf _
   * @type Function
   * @category Objects
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if the `value` is an array, else `false`.
   * @example
   *
   * (function() { return _.isArray(arguments); })();
   * // => false
   *
   * _.isArray([1, 2, 3]);
   * // => true
   */
  var isArray = nativeIsArray || function(value) {
    return value && typeof value == 'object' && typeof value.length == 'number' &&
      toString.call(value) == arrayClass || false;
  };
  
  module.exports = isArray;
  
});
require.register('lodash.isstring', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  
  /** `Object#toString` result shortcuts */
  var stringClass = '[object String]';
  
  /** Used for native method references */
  var objectProto = Object.prototype;
  
  /** Used to resolve the internal [[Class]] of values */
  var toString = objectProto.toString;
  
  /**
   * Checks if `value` is a string.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if the `value` is a string, else `false`.
   * @example
   *
   * _.isString('fred');
   * // => true
   */
  function isString(value) {
    return typeof value == 'string' ||
      value && typeof value == 'object' && toString.call(value) == stringClass || false;
  }
  
  module.exports = isString;
  
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
require.register('lodash.forin', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var baseCreateCallback = require('lodash._basecreatecallback'),
      objectTypes = require('lodash._objecttypes');
  
  /**
   * Iterates over own and inherited enumerable properties of an object,
   * executing the callback for each property. The callback is bound to `thisArg`
   * and invoked with three arguments; (value, key, object). Callbacks may exit
   * iteration early by explicitly returning `false`.
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
   * function Shape() {
   *   this.x = 0;
   *   this.y = 0;
   * }
   *
   * Shape.prototype.move = function(x, y) {
   *   this.x += x;
   *   this.y += y;
   * };
   *
   * _.forIn(new Shape, function(value, key) {
   *   console.log(key);
   * });
   * // => logs 'x', 'y', and 'move' (property order is not guaranteed across environments)
   */
  var forIn = function(collection, callback, thisArg) {
    var index, iterable = collection, result = iterable;
    if (!iterable) return result;
    if (!objectTypes[typeof iterable]) return result;
    callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
      for (index in iterable) {
        if (callback(iterable[index], index, collection) === false) return result;
      }
    return result
  };
  
  module.exports = forIn;
  
});
require.register('lodash._arraypool', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  
  /** Used to pool arrays and objects used internally */
  var arrayPool = [];
  
  module.exports = arrayPool;
  
});
require.register('lodash._getarray', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var arrayPool = require('lodash._arraypool');
  
  /**
   * Gets an array from the array pool or creates a new one if the pool is empty.
   *
   * @private
   * @returns {Array} The array from the pool.
   */
  function getArray() {
    return arrayPool.pop() || [];
  }
  
  module.exports = getArray;
  
});
require.register('lodash._maxpoolsize', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  
  /** Used as the max size of the `arrayPool` and `objectPool` */
  var maxPoolSize = 40;
  
  module.exports = maxPoolSize;
  
});
require.register('lodash._releasearray', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var arrayPool = require('lodash._arraypool'),
      maxPoolSize = require('lodash._maxpoolsize');
  
  /**
   * Releases the given array back to the array pool.
   *
   * @private
   * @param {Array} [array] The array to release.
   */
  function releaseArray(array) {
    array.length = 0;
    if (arrayPool.length < maxPoolSize) {
      arrayPool.push(array);
    }
  }
  
  module.exports = releaseArray;
  
});
require.register('lodash._baseisequal', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var forIn = require('lodash.forin'),
      getArray = require('lodash._getarray'),
      isFunction = require('lodash.isfunction'),
      objectTypes = require('lodash._objecttypes'),
      releaseArray = require('lodash._releasearray');
  
  /** `Object#toString` result shortcuts */
  var argsClass = '[object Arguments]',
      arrayClass = '[object Array]',
      boolClass = '[object Boolean]',
      dateClass = '[object Date]',
      numberClass = '[object Number]',
      objectClass = '[object Object]',
      regexpClass = '[object RegExp]',
      stringClass = '[object String]';
  
  /** Used for native method references */
  var objectProto = Object.prototype;
  
  /** Used to resolve the internal [[Class]] of values */
  var toString = objectProto.toString;
  
  /** Native method shortcuts */
  var hasOwnProperty = objectProto.hasOwnProperty;
  
  /**
   * The base implementation of `_.isEqual`, without support for `thisArg` binding,
   * that allows partial "_.where" style comparisons.
   *
   * @private
   * @param {*} a The value to compare.
   * @param {*} b The other value to compare.
   * @param {Function} [callback] The function to customize comparing values.
   * @param {Function} [isWhere=false] A flag to indicate performing partial comparisons.
   * @param {Array} [stackA=[]] Tracks traversed `a` objects.
   * @param {Array} [stackB=[]] Tracks traversed `b` objects.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   */
  function baseIsEqual(a, b, callback, isWhere, stackA, stackB) {
    // used to indicate that when comparing objects, `a` has at least the properties of `b`
    if (callback) {
      var result = callback(a, b);
      if (typeof result != 'undefined') {
        return !!result;
      }
    }
    // exit early for identical values
    if (a === b) {
      // treat `+0` vs. `-0` as not equal
      return a !== 0 || (1 / a == 1 / b);
    }
    var type = typeof a,
        otherType = typeof b;
  
    // exit early for unlike primitive values
    if (a === a &&
        !(a && objectTypes[type]) &&
        !(b && objectTypes[otherType])) {
      return false;
    }
    // exit early for `null` and `undefined` avoiding ES3's Function#call behavior
    // http://es5.github.io/#x15.3.4.4
    if (a == null || b == null) {
      return a === b;
    }
    // compare [[Class]] names
    var className = toString.call(a),
        otherClass = toString.call(b);
  
    if (className == argsClass) {
      className = objectClass;
    }
    if (otherClass == argsClass) {
      otherClass = objectClass;
    }
    if (className != otherClass) {
      return false;
    }
    switch (className) {
      case boolClass:
      case dateClass:
        // coerce dates and booleans to numbers, dates to milliseconds and booleans
        // to `1` or `0` treating invalid dates coerced to `NaN` as not equal
        return +a == +b;
  
      case numberClass:
        // treat `NaN` vs. `NaN` as equal
        return (a != +a)
          ? b != +b
          // but treat `+0` vs. `-0` as not equal
          : (a == 0 ? (1 / a == 1 / b) : a == +b);
  
      case regexpClass:
      case stringClass:
        // coerce regexes to strings (http://es5.github.io/#x15.10.6.4)
        // treat string primitives and their corresponding object instances as equal
        return a == String(b);
    }
    var isArr = className == arrayClass;
    if (!isArr) {
      // unwrap any `lodash` wrapped values
      var aWrapped = hasOwnProperty.call(a, '__wrapped__'),
          bWrapped = hasOwnProperty.call(b, '__wrapped__');
  
      if (aWrapped || bWrapped) {
        return baseIsEqual(aWrapped ? a.__wrapped__ : a, bWrapped ? b.__wrapped__ : b, callback, isWhere, stackA, stackB);
      }
      // exit for functions and DOM nodes
      if (className != objectClass) {
        return false;
      }
      // in older versions of Opera, `arguments` objects have `Array` constructors
      var ctorA = a.constructor,
          ctorB = b.constructor;
  
      // non `Object` object instances with different constructors are not equal
      if (ctorA != ctorB &&
            !(isFunction(ctorA) && ctorA instanceof ctorA && isFunction(ctorB) && ctorB instanceof ctorB) &&
            ('constructor' in a && 'constructor' in b)
          ) {
        return false;
      }
    }
    // assume cyclic structures are equal
    // the algorithm for detecting cyclic structures is adapted from ES 5.1
    // section 15.12.3, abstract operation `JO` (http://es5.github.io/#x15.12.3)
    var initedStack = !stackA;
    stackA || (stackA = getArray());
    stackB || (stackB = getArray());
  
    var length = stackA.length;
    while (length--) {
      if (stackA[length] == a) {
        return stackB[length] == b;
      }
    }
    var size = 0;
    result = true;
  
    // add `a` and `b` to the stack of traversed objects
    stackA.push(a);
    stackB.push(b);
  
    // recursively compare objects and arrays (susceptible to call stack limits)
    if (isArr) {
      // compare lengths to determine if a deep comparison is necessary
      length = a.length;
      size = b.length;
      result = size == length;
  
      if (result || isWhere) {
        // deep compare the contents, ignoring non-numeric properties
        while (size--) {
          var index = length,
              value = b[size];
  
          if (isWhere) {
            while (index--) {
              if ((result = baseIsEqual(a[index], value, callback, isWhere, stackA, stackB))) {
                break;
              }
            }
          } else if (!(result = baseIsEqual(a[size], value, callback, isWhere, stackA, stackB))) {
            break;
          }
        }
      }
    }
    else {
      // deep compare objects using `forIn`, instead of `forOwn`, to avoid `Object.keys`
      // which, in this case, is more costly
      forIn(b, function(value, key, b) {
        if (hasOwnProperty.call(b, key)) {
          // count the number of properties.
          size++;
          // deep compare each property value.
          return (result = hasOwnProperty.call(a, key) && baseIsEqual(a[key], value, callback, isWhere, stackA, stackB));
        }
      });
  
      if (result && !isWhere) {
        // ensure both objects have the same number of properties
        forIn(a, function(value, key, a) {
          if (hasOwnProperty.call(a, key)) {
            // `size` will be `-1` if `a` has more properties than `b`
            return (result = --size > -1);
          }
        });
      }
    }
    stackA.pop();
    stackB.pop();
  
    if (initedStack) {
      releaseArray(stackA);
      releaseArray(stackB);
    }
    return result;
  }
  
  module.exports = baseIsEqual;
  
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
require.register('lodash.property', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  
  /**
   * Creates a "_.pluck" style function, which returns the `key` value of a
   * given object.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {string} key The name of the property to retrieve.
   * @returns {Function} Returns the new function.
   * @example
   *
   * var characters = [
   *   { 'name': 'fred',   'age': 40 },
   *   { 'name': 'barney', 'age': 36 }
   * ];
   *
   * var getName = _.property('name');
   *
   * _.map(characters, getName);
   * // => ['barney', 'fred']
   *
   * _.sortBy(characters, getName);
   * // => [{ 'name': 'barney', 'age': 36 }, { 'name': 'fred',   'age': 40 }]
   */
  function property(key) {
    return function(object) {
      return object[key];
    };
  }
  
  module.exports = property;
  
});
require.register('lodash.createcallback', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var baseCreateCallback = require('lodash._basecreatecallback'),
      baseIsEqual = require('lodash._baseisequal'),
      isObject = require('lodash.isobject'),
      keys = require('lodash.keys'),
      property = require('lodash.property');
  
  /**
   * Produces a callback bound to an optional `thisArg`. If `func` is a property
   * name the created callback will return the property value for a given element.
   * If `func` is an object the created callback will return `true` for elements
   * that contain the equivalent object properties, otherwise it will return `false`.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {*} [func=identity] The value to convert to a callback.
   * @param {*} [thisArg] The `this` binding of the created callback.
   * @param {number} [argCount] The number of arguments the callback accepts.
   * @returns {Function} Returns a callback function.
   * @example
   *
   * var characters = [
   *   { 'name': 'barney', 'age': 36 },
   *   { 'name': 'fred',   'age': 40 }
   * ];
   *
   * // wrap to create custom callback shorthands
   * _.createCallback = _.wrap(_.createCallback, function(func, callback, thisArg) {
   *   var match = /^(.+?)__([gl]t)(.+)$/.exec(callback);
   *   return !match ? func(callback, thisArg) : function(object) {
   *     return match[2] == 'gt' ? object[match[1]] > match[3] : object[match[1]] < match[3];
   *   };
   * });
   *
   * _.filter(characters, 'age__gt38');
   * // => [{ 'name': 'fred', 'age': 40 }]
   */
  function createCallback(func, thisArg, argCount) {
    var type = typeof func;
    if (func == null || type == 'function') {
      return baseCreateCallback(func, thisArg, argCount);
    }
    // handle "_.pluck" style callback shorthands
    if (type != 'object') {
      return property(func);
    }
    var props = keys(func),
        key = props[0],
        a = func[key];
  
    // handle "_.where" style callback shorthands
    if (props.length == 1 && a === a && !isObject(a)) {
      // fast path the common case of providing an object with a single
      // property containing a primitive value
      return function(object) {
        var b = object[key];
        return a === b && (a !== 0 || (1 / a == 1 / b));
      };
    }
    return function(object) {
      var length = props.length,
          result = false;
  
      while (length--) {
        if (!(result = baseIsEqual(object[props[length]], func[props[length]], null, true))) {
          break;
        }
      }
      return result;
    };
  }
  
  module.exports = createCallback;
  
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
require.register('lodash.map', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize modern exports="npm" -o ./npm/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var createCallback = require('lodash.createcallback'),
      forOwn = require('lodash.forown');
  
  /**
   * Creates an array of values by running each element in the collection
   * through the callback. The callback is bound to `thisArg` and invoked with
   * three arguments; (value, index|key, collection).
   *
   * If a property name is provided for `callback` the created "_.pluck" style
   * callback will return the property value of the given element.
   *
   * If an object is provided for `callback` the created "_.where" style callback
   * will return `true` for elements that have the properties of the given object,
   * else `false`.
   *
   * @static
   * @memberOf _
   * @alias collect
   * @category Collections
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function|Object|string} [callback=identity] The function called
   *  per iteration. If a property name or object is provided it will be used
   *  to create a "_.pluck" or "_.where" style callback, respectively.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {Array} Returns a new array of the results of each `callback` execution.
   * @example
   *
   * _.map([1, 2, 3], function(num) { return num * 3; });
   * // => [3, 6, 9]
   *
   * _.map({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { return num * 3; });
   * // => [3, 6, 9] (property order is not guaranteed across environments)
   *
   * var characters = [
   *   { 'name': 'barney', 'age': 36 },
   *   { 'name': 'fred',   'age': 40 }
   * ];
   *
   * // using "_.pluck" callback shorthand
   * _.map(characters, 'name');
   * // => ['barney', 'fred']
   */
  function map(collection, callback, thisArg) {
    var index = -1,
        length = collection ? collection.length : 0;
  
    callback = createCallback(callback, thisArg, 3);
    if (typeof length == 'number') {
      var result = Array(length);
      while (++index < length) {
        result[index] = callback(collection[index], index, collection);
      }
    } else {
      result = [];
      forOwn(collection, function(value, key, collection) {
        result[++index] = callback(value, key, collection);
      });
    }
    return result;
  }
  
  module.exports = map;
  
});
require.register('style', function(module, exports, require) {
  // TODO: handle setting special shortcut transform properties with arrays (translate, scale)?
  
  var isObject = require('lodash.isobject')
  	, isNan = require('lodash.isnan')
  	, isArray = require('lodash.isarray')
  	, isString = require('lodash.isstring')
  	, map = require('lodash.map')
  	, win = window
  	, doc = window.document
  	, el = doc.createElement('div')
  
  		// Hash of unit values
  	, numeric = {
  			'top': 'px',
  			'bottom': 'px',
  			'left': 'px',
  			'right': 'px',
  			'width': 'px',
  			'height': 'px',
  			'margin-top': 'px',
  			'margin-bottom': 'px',
  			'margin-left': 'px',
  			'margin-right': 'px',
  			'padding-top': 'px',
  			'padding-bottom': 'px',
  			'padding-left': 'px',
  			'padding-right': 'px',
  			'border-bottom-left-radius': 'px',
  			'border-bottom-right-radius': 'px',
  			'border-top-left-radius': 'px',
  			'border-top-right-radius': 'px',
   			'transition-duration': 'ms',
   			'opacity': '',
  			'font-size': 'px',
  			'translateX': 'px',
  			'translateY': 'px',
  			'translateZ': 'px',
  			'scaleX': '',
  			'scaleY': '',
  			'scaleZ': '',
  			'rotate': 'deg',
  			'rotateX': 'deg',
  			'rotateY': 'deg',
  			'rotateZ': 'deg',
  			'skewX': 'px',
  			'skewY': 'px'
  		}
  	, colour = {
  			'background-color': true,
  			'color': true,
  			'border-color': true
  		}
  		// Hash of shorthand properties
  	, shorthand = {
  			'border-radius': ['border-bottom-left-radius', 'border-bottom-right-radius', 'border-top-left-radius', 'border-top-right-radius'],
  			'border-color': ['border-bottom-color', 'border-left-color', 'border-top-color', 'border-right-color'],
  			'margin': ['margin-top', 'margin-right', 'margin-left', 'margin-bottom'],
  			'padding': ['padding-top', 'padding-right', 'padding-left', 'padding-bottom']
  		}
  		// Hash of transform properties
  	, transform = {
  			'transform': true,
  			'translate': true,
  			'translateX': true,
  			'translateY': true,
  			'translate3d': true,
  			'translateZ': true,
  			'rotate': true,
  			'rotate3d': true,
  			'rotateX': true,
  			'rotateY': true,
  			'rotateZ': true,
  			'scale': true,
  			'scaleX': true,
  			'scaleY': true,
  			'scale3d': true,
  			'scaleZ': true,
  			'skewX': true,
  			'skewY': true,
  			'perspective': true,
  			'matrix': true,
  			'matrix3d': true
  		}
  
  	, platformStyles = {}
  	, platformPrefix = ''
  
  	, RE_UNITS = /(px|%|em|ms|s|deg)$/
  	, RE_IE_OPACITY = /opacity=(\d+)/i
  	, RE_RGB = /rgb\((\d+),\s?(\d+),\s?(\d+)\)/
  	, RE_MATRIX = /^matrix(?:3d)?\(([^\)]+)/
  	, VENDOR_PREFIXES = ['-webkit-', '-moz-', '-ms-', '-o-']
  	, MATRIX_IDENTITY = [[1, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]]
  	, MATRIX_PROPERTY_INDEX = {
  		translateX: [4,12],
  		translateY: [5,13],
  		translateZ: [null,14],
  		scaleX: [0,0],
  		scaleY: [3,5],
  		scaleZ: [null,10],
  		rotate: [0,0],
  		rotateX: [null,5],
  		rotateY: [null,0],
  		rotateZ: [null,0],
  		skewY: [1,1],
  		skewX: [2,2]
  	};
  
  // Store all possible styles this platform supports
  var s = current(doc.documentElement)
  	, add = function (prop) {
  			platformStyles[prop] = true;
  			// Grab the prefix style
  			if (!platformPrefix && prop.charAt(0) == '-') {
  				platformPrefix = /^-\w+-/.exec(prop)[0];
  			}
  		};
  
  if (s.length) {
  	for (var i = 0, n = s.length; i < n; i++) {
  		add(s[i]);
  	}
  } else {
  	for (var prop in s) {
  		add(prop);
  	}
  }
  
  // Store opacity property name (normalize IE opacity/filter)
  var opacity = !platformStyles['opacity'] && platformStyles['filter'] ? 'filter' : 'opacity';
  
  // API
  exports.isSupported = isSupported;
  exports.getPrefixed = getPrefixed;
  exports.getShorthand = getShorthand;
  exports.getAll = getAll;
  exports.expandShorthand = expandShorthand;
  exports.parseOpacity = parseOpacity;
  exports.getOpacityValue = getOpacityValue;
  exports.parseNumber = parseNumber;
  exports.parseTransform = parseTransform;
  exports.getStyle = getStyle;
  exports.getNumericStyle = getNumericStyle;
  exports.getDocumentStyle = getDocumentStyle;
  exports.setStyle = setStyle;
  exports.clearStyle = clearStyle;
  exports.platformStyles = platformStyles;
  exports.platformPrefix = platformPrefix;
  // CSS3 feature tests (also forces cache inclusion)
  exports.hasTransitions = isSupported('transition');
  exports.hasTransforms = isSupported('transform');
  exports.has3DTransforms = (function () {
  	if (exports.hasTransforms) {
  		var prop = camelCase(getPrefixed('transform'));
  		el.style[prop] = 'translateZ(10px)';
  		return el.style[prop] != '';
  	}
  	return false;
  })();
  
  /**
   * Determine if 'property' is supported on this platform
   * @returns {Boolean}
   */
  function isSupported (property) {
  	var props = [property, platformPrefix + property]
  		, support = false
  		, prop;
  
  	for (var i = 0, n = props.length; i < n; i++) {
  		prop = props[i];
  		// Use cached
  		if (exports.platformStyles[prop]) return true;
  		if (typeof el.style[prop] === 'string'
  			|| typeof el.style[camelCase(prop)] === 'string') {
  				support = true;
  				exports.platformStyles[prop] = true;
  				break;
  		}
  	}
  
  	return support;
  }
  
  /**
   * Retrieve the vendor prefixed version of the property
   * @param {String} property
   * @returns {String}
   */
  function getPrefixed (property) {
  	if (typeof property === 'string') {
  		// Handle transform pseudo-properties
  		if (transform[property]) {
  			property = 'transform';
  		}
  
  		if (exports.platformStyles[property]) return property;
  
  		if (isSupported(property)) {
  			if (exports.platformStyles[platformPrefix + property]) {
  				property = platformPrefix + property;
  			}
  		}
  	}
  
  	return property;
  }
  
  /**
   * Retrieve a proxy property to use for shorthand properties
   * @param {String} property
   * @returns {String}
   */
  function getShorthand (property) {
  	if (shorthand[property] != null) {
  		return shorthand[property][0];
  	} else {
  		return property;
  	}
  }
  
  /**
   * Retrieve all possible variations of the property
   * @param {String} property
   * @returns {Array}
   */
  function getAll (property) {
  	var all = [];
  
  	// Handle transform pseudo-properties
  	if (transform[property]) {
  		property = 'transform';
  	}
  
  	all.push(property);
  	// Handle shorthands
  	if (shorthand[property]) {
  		all = all.concat(shorthand[property]);
  	}
  	// Automatically add vendor prefix
  	for (var i = 0, n = all.length; i < n; i++) {
  		all.push(platformPrefix + all[i]);
  	}
  
  	return all;
  }
  
  /**
   * Expand shorthand properties
   * @param {String} property
   * @param {Object} value
   * @returns {Object|String}
   */
  function expandShorthand (property, value) {
  	if (shorthand[property] != null) {
  		var props = {};
  		for (var i = 0, n = shorthand[property].length; i < n; i++) {
  			props[shorthand[property][i]] = value;
  		}
  		return props;
  	} else {
  		return property;
  	}
  }
  
  /**
   * Parse current opacity value
   * @param {String} value
   * @returns {Number}
   */
  function parseOpacity (value) {
  	var match;
  	if (value === '') {
  		return null;
  	// IE case
  	} else if (opacity === 'filter') {
  		match = value.match(RE_IE_OPACITY);
  		if (match != null) {
  			return parseInt(match[1], 10) / 100;
  		}
  	} else {
  		return parseFloat(value);
  	}
  }
  
  /**
   * Convert opacity to IE filter syntax
   * @param {String} value
   * @returns {String}
   */
  function getOpacityValue (value) {
  	var val = parseFloat(value);
  	if (opacity === 'filter') {
  		val = "alpha(opacity=" + (val * 100) + ")";
  	}
  	return val;
  }
  
  /**
   * Split a value into a number and unit
   * @param {String} value
   * @param {String} property
   * @returns {Array}
   */
  function parseNumber (value, property) {
  	var channels, num, unit, unitTest;
  
  	if (value == null || value == 'none') {
  		value = 0;
  	}
  
  	// Handle arrays of values (translate, scale)
  	if (isArray(value)) {
  		return map(value, function (val) {
  			return parseNumber(val, property);
  		});
  	}
  
  	// Handle colours
  	if (colour[property]) {
  		// rgb()
  		if (value != null && value.charAt(0) !== '#') {
  			channels = RE_RGB.exec(value);
  			if (channels) {
  				return ["#" + ((1 << 24) | (channels[1] << 16) | (channels[2] << 8) | channels[3]).toString(16).slice(1), 'hex'];
  			} else {
  				return ['#ffffff', 'hex'];
  			}
  		} else {
  			return [value || '#ffffff', 'hex'];
  		}
  
  	// Handle numbers
  	} else {
  		num = parseFloat(value);
  		if (isNan(num)) {
  			return [value, ''];
  		} else {
  			unitTest = RE_UNITS.exec(value);
  			// Set unit or default
  			unit = (unitTest != null)
  				? unitTest[1]
  				: ((numeric[property] != null)
  						? numeric[property]
  						: 'px');
  			return [num, unit];
  		}
  	}
  }
  
  /**
   * Retrieve a 'property' from a transform 2d or 3d 'matrix'
   * @param {String|Array} matrix
   * @param {String} property
   * @returns {String|Number|Array}
   */
  function parseTransform (matrix, property) {
  	var m = matrixStringToArray(matrix)
  		, is3D = (m && m.length > 6) ? 1 : 0;
  
  	if (m) {
  		switch (property) {
  			case 'matrix':
  			case 'matrix3d':
  				return m;
  			case 'translateX':
  			case 'translateY':
  				return ''
  					+ m[MATRIX_PROPERTY_INDEX[property][is3D]]
  					+ 'px';
  			case 'translateZ':
  				return ''
  					+ (is3D ? m[MATRIX_PROPERTY_INDEX[property][is3D]] : '0')
  					+ 'px';
  			case 'translate':
  				return [parseTransform(matrix, 'translateX'), parseTransform(matrix, 'translateY')];
  			case 'translate3d':
  				return [parseTransform(matrix, 'translateX'), parseTransform(matrix, 'translateY'), parseTransform(matrix, 'translateZ')];
  			case 'scaleX':
  			case 'scaleY':
  				return m[MATRIX_PROPERTY_INDEX[property][is3D]];
  			case 'scaleZ':
  				return is3D ? m[10] : 1;
  			case 'scale':
  				return [parseTransform(matrix, 'scaleX'), parseTransform(matrix, 'scaleY')];
  			case 'scale3d':
  				return [parseTransform(matrix, 'scaleX'), parseTransform(matrix, 'scaleY'), parseTransform(matrix, 'scaleZ')];
  			case 'rotate':
  			case 'rotateY':
  			case 'rotateZ':
  				return ''
  					+ (Math.acos(m[0]) * 180) / Math.PI
  					+ 'deg';
  			case 'rotateX':
  				return ''
  					+ (Math.acos(m[5]) * 180) / Math.PI
  					+ 'deg';
  			case 'skewX':
  				return ''
  					+ (Math.atan(m[2]) * 180) / Math.PI
  					+ 'deg';
  			case 'skewY':
  				return ''
  					+ (Math.atan(m[1]) * 180) / Math.PI
  					+ 'deg';
  		}
  	}
  
  	return matrix;
  }
  
  /**
   * Convert a matrix property to a transform style string
   * Handles existing transforms and special grouped properties
   * @param {Element} element
   * @param {String} property
   * @param {String|Array} value
   * @returns {String}
   */
  function generateTransform (element, property, value) {
  	var matrix = current(element, getPrefixed(property))
  		, m, m1, is3D, idx, len;
  
  	if (matrix == 'none') matrix = '';
  
  	// Reset existing matrix, preserving translations
  	if (matrix) {
  		if (m = matrixStringToArray(matrix)) {
  			is3D = m.length > 6 ? 1 : 0;
  			len = is3D ? 3 : 2;
  			idx = is3D ? 12 : 4;
  			// Preserve translations
  			if (!(~property.indexOf('translate'))) {
  				m1 = MATRIX_IDENTITY[is3D].slice(0, idx)
  					.concat(m.slice(idx, idx + len));
  				if (is3D) m1.push(MATRIX_IDENTITY[is3D].slice(-1));
  				m = m1;
  			// Preserve translations and nullify changed
  			} else {
  				if (property == 'translate' || property == 'translate3d') {
  					m1 = m.slice(0, idx)
  						.concat(MATRIX_IDENTITY[is3D].slice(idx, idx + len));
  					if (is3D) m1.push(m.slice(-1));
  					m = m1;
  				} else if (property == 'translateX' || property == 'translateY' || property == 'translateZ') {
  					idx = MATRIX_PROPERTY_INDEX[property][is3D];
  					if (idx) m[idx] = MATRIX_IDENTITY[is3D][idx];
  				}
  			}
  
  			matrix = is3D ? 'matrix3d' : 'matrix'
  				+ '('
  				+ m.join(', ')
  				+ ') ';
  		}
  	}
  
  	if (numeric[property] != null) {
  		return ''
  			+ matrix
  			+ property
  			+ '('
  			+ value
  			+ ')';
  	// Grouped properties
  	} else {
  		switch (property) {
  			case 'transform':
  			case 'transform3d':
  				return value;
  			case 'matrix':
  			case 'matrix3d':
  				return ''
  					+ property
  					+ '('
  					+ value
  					+ ')';
  			case 'translate':
  			case 'translate3d':
  				if (isArray(value)) {
  					// Add default unit
  					value = map(value, function(item) {
  						return !isString(item) ? item + 'px': item;
  					})
  					.join(', ');
  				}
  				return ''
  					+ matrix
  					+ property
  					+ '('
  					+ value
  					+ ')';
  			case 'scale':
  			case 'scale3d':
  				if (isArray(value)) {
  					value = value.join(', ');
  				}
  				return ''
  					+ matrix
  					+ property
  					+ '('
  					+ value
  					+ ')';
  		}
  	}
  }
  
  /**
   * Retrieve the style for 'property'
   * @param {Element} element
   * @param {String} property
   * @returns {Object}
   */
  function getStyle (element, property) {
  	var prop, value;
  
  	// Special case for opacity
  	if (property === 'opacity') {
  		return parseOpacity(current(element, opacity));
  	}
  
  	// Retrieve longhand and prefixed version
  	prop = getPrefixed(getShorthand(property));
  	value = current(element, prop);
  
  	// Special case for transform
  	if (transform[property]) {
  		return parseTransform(value, property);
  	}
  
  	switch (value) {
  		case '':
  			return null;
  		case 'auto':
  			return 0;
  		default:
  			return value;
  	}
  }
  
  /**
   * Retrieve the numeric value for 'property'
   * @param {Element} element
   * @param {String} property
   * @returns {Number}
   */
  function getNumericStyle (element, property) {
  	return parseNumber(getStyle(element, property), property);
  }
  
  /**
   * Retrieve the 'property' for matching 'selector' rule in all document stylesheets
   * @param {String} selector
   * @param {String} property
   * @returns {String}
   */
  function getDocumentStyle (selector, property) {
  	var styleSheets = document.styleSheets
  		, sheet, rules, rule;
  
  	if (styleSheets) {
  		for (var i = 0, n = styleSheets.length; i < n; i++) {
  			sheet = styleSheets[i];
  			if (rules = sheet.rules || sheet.cssRules) {
  				for (var j = 0, m = rules.length; j < m; j++) {
  					rule = rules[j];
  					if (selector === rule.selectorText) {
  						return rule.style.getPropertyValue(property);
  					}
  				}
  			}
  		}
  	}
  
  	return '';
  }
  
  /**
   * Set the style for 'property'
   * @param {Element} element
   * @param {String|Object} property
   * @param {Object} value
   */
  function setStyle (element, property, value) {
  	var prop, matrix;
  
  	// Expand shorthands
  	prop = expandShorthand(property, value);
  	// Handle property hash returned from expandShorthand
  	if (isObject(prop)) {
  		for (var p in prop) {
  			setStyle(element, p, prop[p]);
  		}
  		return;
  	}
  
  	// Handle opacity
  	if (prop === 'opacity') {
  		prop = opacity;
  		value = getOpacityValue(value);
  	}
  
  	// Look up default numeric unit if none provided
  	if (value !== 'auto'
  		&& value !== 'inherit'
  		&& numeric[prop]
  		&& !RE_UNITS.test(value)) {
  			value += numeric[prop];
  	}
  
  	// Look up prefixed property
  	prop = getPrefixed(prop);
  
  	// Handle special transform properties
  	// TODO: bulk multiple transforms?
  	if (transform[property]) {
  		value = generateTransform(element, property, value);
  	}
  
  	element.style[camelCase(prop)] = value;
  }
  
  /**
   * Remove the style for 'property'
   * @param {Element} element
   * @param {String} property
   */
  function clearStyle (element, property) {
  	var style = element.getAttribute('style') || ''
  		, re;
  
  	if (style) {
  		property = getAll(property).join('[\\w-]*|') + '[\\w-]*';
  
  		re = new RegExp('(?:^|\\s)(?:' + property + '):\\s?[^;]+;', 'ig');
  		element.setAttribute('style', style.replace(re, ''));
  	}
  }
  
  /**
   * Retrieve current computed style
   * @param {Element} element
   * @param {String} property
   * @returns {String}
   */
  function current (element, property) {
  	var value;
  
  	if (win.getComputedStyle) {
  		if (property) {
  			value = win.getComputedStyle(element).getPropertyValue(property);
  			// Try with camel casing
  			if (value == null) win.getComputedStyle(element).getPropertyValue(camelCase(property));
  			return value;
  		} else {
  			return win.getComputedStyle(element);
  		}
  	// IE
  	} else {
  		if (property) {
  			value = element.currentStyle[property];
  			// Try with camel casing
  			if (value == null) element.currentStyle[camelCase(property)];
  			return value;
  		} else {
  			return element.currentStyle;
  		}
  	}
  }
  
  /**
   * CamelCase 'str, removing '-'
   * @param {String} str
   * @returns {String}
   */
  function camelCase (str) {
  	// IE requires vendor prefixed values to start with lowercase
  	if (str.indexOf('-ms-') == 0) str = str.slice(1);
  	return str.replace(/-([a-z]|[0-9])/ig, function(all, letter) {
  		return (letter + '').toUpperCase();
  	});
  }
  
  /**
   * Convert 'matrix' to Array
   * @param {String|Array} matrix
   * @returns {Array}
   */
  function matrixStringToArray (matrix) {
  	if (isArray(matrix)) {
  		return matrix;
  	} else if (re = matrix.match(RE_MATRIX)) {
  		// Convert string to array
  		return re[1].split(', ')
  			.map(function (item) {
  				return parseFloat(item);
  			});
  	}
  }
  
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
  var svg = require('utils/svg')  
  	, style = require('style')  
  	, Trait = require('trait')  
  	, TPrimitive = require('primitives/TPrimitive')  
    
  	, RAY_COLOUR = style.getDocumentStyle('.sun-ray', 'fill') || '#e88d15'  
  	, CENTER_COLOUR = style.getDocumentStyle('.sun-centre', 'fill') ||'#faba2f'  
  	, HORIZON_COLOUR = style.getDocumentStyle('.sun-winter-horizon', 'fill') || '#4d4d4d'  
    
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
    
  			// Mask  
  			ctx.beginPath()  
  			ctx.moveTo(0,8);  
  			ctx.lineTo(100,8);  
  			ctx.lineTo(100,100);  
  			ctx.lineTo(0,100);  
  			ctx.lineTo(0,8);  
  			ctx.closePath();  
  			ctx.clip();  
    
  			// Rays  
  			ctx.fillStyle = RAY_COLOUR;  
  			ctx.beginPath();  
  			ctx.moveTo(45.1,32.6);  
  			ctx.bezierCurveTo(42.7,32.6,40.4,32.300000000000004,38.2,31.6);  
  			ctx.lineTo(43.2,50.7);  
  			ctx.bezierCurveTo(43.7,52.7,46.5,52.7,47.1,50.7);  
  			ctx.lineTo(52.1,31.6);  
  			ctx.bezierCurveTo(49.8,32.2,47.5,32.6,45.1,32.6);  
  			ctx.moveTo(66.6,19.8);  
  			ctx.bezierCurveTo(64.39999999999999,23.9,60.99999999999999,27.3,56.89999999999999,29.5);  
  			ctx.lineTo(73.89999999999999,39.5);  
  			ctx.bezierCurveTo(75.69999999999999,40.5,77.69999999999999,38.5,76.6,36.8);  
  			ctx.lineTo(66.6,19.8);  
  			ctx.moveTo(23.6,19.8);  
  			ctx.lineTo(13.600000000000001,36.8);  
  			ctx.bezierCurveTo(12.600000000000001,38.599999999999994,14.600000000000001,40.599999999999994,16.3,39.5);  
  			ctx.lineTo(33.3,29.5);  
  			ctx.bezierCurveTo(29.2,27.3,25.8,23.9,23.6,19.8);  
  			ctx.moveTo(20.6,8.1);  
  			ctx.bezierCurveTo(20.6,5.699999999999999,20.900000000000002,3.3999999999999995,21.6,1.1999999999999993);  
  			ctx.lineTo(2.5,6.199999999999999);  
  			ctx.bezierCurveTo(0.5,6.699999999999999,0.5,9.5,2.5,10.1);  
  			ctx.lineTo(21.6,15.1);  
  			ctx.bezierCurveTo(20.9,12.8,20.6,10.5,20.6,8.1);  
  			ctx.moveTo(87.6,6.1);  
  			ctx.lineTo(68.5,1.0999999999999996);  
  			ctx.bezierCurveTo(69.1,3.3,69.5,5.6,69.5,8);  
  			ctx.bezierCurveTo(69.5,10.4,69.2,12.7,68.5,14.9);  
  			ctx.lineTo(87.6,9.9);  
  			ctx.bezierCurveTo(89.6,9.5,89.6,6.7,87.6,6.1);  
  			ctx.closePath();  
  			ctx.fill();  
    
  			// Center fill  
  			ctx.fillStyle = CENTER_COLOUR;  
  			ctx.beginPath();  
  			ctx.arc(45,8,20.5,0,this.TWO_PI,true);  
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
  var svg = require('utils/svg')  
  	, style = require('style')  
  	, Trait = require('trait')  
  	, TPrimitive = require('primitives/TPrimitive')  
    
  	, FILL_COLOUR = style.getDocumentStyle('.moon', 'fill') || '#afc1c9'  
    
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
  var svg = require('utils/svg')  
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
  var svg = require('utils/svg')  
  	, style = require('style')  
  	, Trait = require('trait')  
  	, TPrimitive = require('primitives/TPrimitive')  
    
  	, FILL_COLOUR = style.getDocumentStyle('.raindrop', 'fill') || '#1671CC'  
    
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
  var svg = require('utils/svg')
  	, style = require('style')
  	, Trait = require('trait')
  	, TPrimitive = require('primitives/TPrimitive')
  
  	, FILL_COLOUR = style.getDocumentStyle('.sleet', 'fill') || '#1EB9D8'
  
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
  var svg = require('utils/svg')  
  	, style = require('style')  
  	, Trait = require('trait')  
  	, TPrimitive = require('primitives/TPrimitive')  
    
  	, FILL_COLOUR = style.getDocumentStyle('.snowflake', 'fill') || '#54BFE3'  
    
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
  var svg = require('utils/svg')  
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
  var svg = require('utils/svg')  
  	, style = require('style')  
  	, Trait = require('trait')  
  	, TPrimitive = require('primitives/TPrimitive')  
    
  	, FILL_COLOUR = style.getDocumentStyle('.lightning', 'fill') || '#c9af16'  
    
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
  
  var svg = require('utils/svg')
  	, capabilities = require('utils/capabilities')
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
  	, DEFS = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="symbolDefs" x="0px" y="0px" width="0" height="0" viewBox="0 0 100 100" style="display:none;"><defs><path id="cloud" class="cloud" d="M55.6,2C46,1.7,37.1,7,34.1,17.3c-6.1-1.5-16,2.4-17.8,10.9C10.1,28,2,33.1,2,41.6C2,51,9,56,21.5,56h43.6 c5.6,0,12.9-0.5,17.3-2.6c14.9-7.2,12.3-32.3-6.4-34.6C73.7,7.9,65.1,2.3,55.6,2z"/><clipPath id="sunWinterMask"><rect y="45" width="90" height="45" /></clipPath></defs><symbol id="sun"><g class="sun-ray" ><path d="M23.5,33.2c2.2-4.1,5.6-7.5,9.7-9.7l-17-10c-1.8-1-3.8,1-2.7,2.7L23.5,33.2z"/><path d="M45,20.5c2.4,0,4.7,0.3,6.9,1l-5-19.1c-0.5-2-3.3-2-3.9,0l-5,19.1C40.3,20.8,42.6,20.5,45,20.5z"/><path d="M87.6,43.1l-19.1-5c0.6,2.2,1,4.5,1,6.9c0,2.4-0.3,4.7-1,6.9l19.1-5C89.6,46.4,89.6,43.6,87.6,43.1z"/><path d="M20.5,45c0-2.4,0.3-4.7,1-6.9l-19.1,5c-2,0.5-2,3.3,0,3.9l19.1,5C20.8,49.7,20.5,47.4,20.5,45z"/><path d="M66.5,33.2l10-17c1-1.8-1-3.8-2.7-2.7l-17,10C60.9,25.8,64.2,29.1,66.5,33.2z"/><path d="M23.5,56.8l-10,17c-1,1.8,1,3.8,2.7,2.7l17-10C29.1,64.2,25.8,60.9,23.5,56.8z"/><path d="M66.5,56.8c-2.2,4.1-5.6,7.5-9.7,9.7l17,10c1.8,1,3.8-1,2.7-2.7L66.5,56.8z"/><path d="M45,69.5c-2.4,0-4.7-0.3-6.9-1l5,19.1c0.5,2,3.3,2,3.9,0l5-19.1C49.7,69.2,47.4,69.5,45,69.5z"/></g><circle class="sun-centre" style="fill-rule:nonzero" cx="45" cy="45" r="20.5"/></symbol><symbol id="sunWinter"><path class="sun-winter-horizon" d="M2.5,0h85.1C88.9,0,90,0.9,90,2v0c0,1.1-1.1,2-2.5,2H2.5C1.1,4,0,3.1,0,2v0C0,0.9,1.1,0,2.5,0z"/><use class="sun-winter" style="clip-path:url(#sunWinterMask);" xlink:href="#sun" x="0" y="-37" width="100" height="100"></use></symbol><symbol id="moon"><path class="moon" d="M23,20c0-7.7,2.9-14.7,7.6-20c-0.2,0-0.4,0-0.6,0C13.4,0,0,13.4,0,30s13.4,30,30,30c8.9,0,16.9-3.9,22.4-10 C36.1,49.6,23,36.4,23,20z"/></symbol><symbol id="cloud-10" class="cloud-10"><use xlink:href="#cloud" x="0" y="0" width="100" height="100"></use></symbol><symbol id="cloud-15" class="cloud-15"><use xlink:href="#cloud" x="0" y="0" width="100" height="100"></use></symbol><symbol id="cloud-30" class="cloud-30"><use xlink:href="#cloud" x="0" y="0" width="100" height="100"></use></symbol><symbol id="cloud-40" class="cloud-40"><use xlink:href="#cloud" x="0" y="0" width="100" height="100"></use></symbol><symbol id="cloud-50" class="cloud-50"><use xlink:href="#cloud" x="0" y="0" width="100" height="100"></use></symbol><symbol id="fog"><path class="fog" d="M82.3,42H2.7C1.2,42,0,42.9,0,44s1.2,2,2.7,2h79.7c1.5,0,2.7-0.9,2.7-2S83.8,42,82.3,42z"/><path class="fog" d="M80.1,50H5.9C4.3,50,3,50.9,3,52c0,1.1,1.3,2,2.9,2h74.3c1.6,0,2.9-0.9,2.9-2C83,50.9,81.7,50,80.1,50z"/><path class="fog" d="M80.1,58H10.9C9.3,58,8,58.9,8,60s1.3,2,2.9,2h69.2c1.6,0,2.9-0.9,2.9-2S81.7,58,80.1,58z"/><path class="fog" d="M51.2,0c-9.1-0.3-17.6,4.8-20.5,14.6c-5.9-1.4-15.3,2.3-17,10.4C8.2,24.9,1.2,29,0.1,36C0,37,0.7,37.9,1.7,37.9l82.3,0 c1,0,1.8-0.7,1.9-1.7c1-8.9-4.1-18.7-15.2-20.1C68.5,5.6,60.2,0.3,51.2,0z"/></symbol><symbol id="raindrop"><circle class="bg" cx="9" cy="9" r="9"/><path class="raindrop" d="M20,16.8c0,3.4-2.7,6.2-6,6.2c-3.3,0-6-2.8-6-6.2C8,14.9,8,6,8,6C13.5,11.5,20,11.2,20,16.8z"/></symbol><symbol id="sleet"><circle class="bg" cx="9" cy="9" r="9"/><path class="sleet" d="M19.9,16.6c-1.8,2.3-3.4,5.5-3.9,8.9c-0.1,0.5-0.6,0.7-1,0.4c-2.3-2.1-4.8-3.3-8.5-3.8c-0.4-0.1-0.6-0.5-0.4-0.8 C8.4,17,8.6,10.1,7.8,5c2.7,4.2,7.1,9,11.8,10.7C20,15.8,20.1,16.3,19.9,16.6z"/></symbol><symbol id="snowflake"><circle class="bg" cx="9" cy="9" r="9"/><path class="snowflake" d="M6.2,6.9l1.1,3.8c-0.3,0.2-0.6,0.5-0.9,0.8C6,11.7,5.8,12,5.6,12.4l-3.8-1C1,11.2,0.2,11.7,0,12.5c-0.2,0.8,0.3,1.6,1.1,1.8 l3.8,1c0,0.8,0.3,1.6,0.6,2.3l-2.7,2.8c-0.6,0.6-0.6,1.5,0,2.1c0.6,0.6,1.5,0.6,2.1,0l2.7-2.8c0.7,0.4,1.5,0.6,2.3,0.6l1,3.8 c0.2,0.8,1,1.2,1.8,1c0.8-0.2,1.2-1,1-1.8l-1.1-3.8c0.3-0.2,0.7-0.4,1-0.7c0.3-0.3,0.5-0.6,0.7-1l3.8,1c0.8,0.2,1.6-0.3,1.8-1.1 c0.2-0.8-0.3-1.6-1.1-1.8l-3.8-1c0-0.8-0.3-1.6-0.7-2.3l2.7-2.8c0.6-0.6,0.5-1.5,0-2.1c-0.6-0.6-1.5-0.6-2.1,0l-2.7,2.8 c-0.7-0.4-1.5-0.6-2.3-0.6L9,6.1c-0.2-0.8-1-1.2-1.8-1C6.5,5.3,6,6.1,6.2,6.9z M11.8,13.2c1,1,1,2.6,0,3.6c-1,1-2.6,1-3.6,0 c-1-1-1-2.6,0-3.6C9.2,12.2,10.8,12.2,11.8,13.2z"/></symbol><symbol id="lightning"><path class="lightning" d="M10.4,0L4.2,12.5h8.3L0,25L25,8.3h-8.3L25,0H10.4z"/></symbol></svg>';
  
  // Add svg definitions if not already present
  if (capabilities.hasSVG && !document.getElementById('symbolDefs')) {
  	var el = document.createElement('div');
  	el.innerHTML = DEFS;
  	document.body.insertBefore(el.firstChild, document.body.firstChild);
  }
  
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
  			&& container.firstChild
  			&& container.firstChild.nodeName.toLowerCase() == type) {
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
  					small: layer.small,
  					flip: layer.flip,
  					tint: layer.tint,
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