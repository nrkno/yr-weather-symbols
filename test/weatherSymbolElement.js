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

require.register('lodash-compat/internal/arrayEach', function(module, exports, require) {
  /**
   * A specialized version of `_.forEach` for arrays without support for callback
   * shorthands or `this` binding.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array.length;
  
    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }
  
  module.exports = arrayEach;
  
});
require.register('lodash-compat/lang/isObject', function(module, exports, require) {
  /**
   * Checks if `value` is the language type of `Object`.
   * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * **Note:** See the [ES5 spec](https://es5.github.io/#x8) for more details.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
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
    // Avoid a V8 JIT bug in Chrome 19-20.
    // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
    var type = typeof value;
    return type == 'function' || (value && type == 'object') || false;
  }
  
  module.exports = isObject;
  
});
require.register('lodash-compat/internal/isObjectLike', function(module, exports, require) {
  /**
   * Checks if `value` is object-like.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   */
  function isObjectLike(value) {
    return (value && typeof value == 'object') || false;
  }
  
  module.exports = isObjectLike;
  
});
require.register('lodash-compat/lang/isString', function(module, exports, require) {
  var isObjectLike = require('lodash-compat/internal/isObjectLike');
  
  /** `Object#toString` result references. */
  var stringTag = '[object String]';
  
  /** Used for native method references. */
  var objectProto = Object.prototype;
  
  /**
   * Used to resolve the `toStringTag` of values.
   * See the [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
   * for more details.
   */
  var objToString = objectProto.toString;
  
  /**
   * Checks if `value` is classified as a `String` primitive or object.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
   * @example
   *
   * _.isString('abc');
   * // => true
   *
   * _.isString(1);
   * // => false
   */
  function isString(value) {
    return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag) || false;
  }
  
  module.exports = isString;
  
});
require.register('lodash-compat/internal/baseToString', function(module, exports, require) {
  /**
   * Converts `value` to a string if it is not one. An empty string is returned
   * for `null` or `undefined` values.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString(value) {
    if (typeof value == 'string') {
      return value;
    }
    return value == null ? '' : (value + '');
  }
  
  module.exports = baseToString;
  
});
require.register('lodash-compat/string/escapeRegExp', function(module, exports, require) {
  var baseToString = require('lodash-compat/internal/baseToString');
  
  /**
   * Used to match `RegExp` special characters.
   * See this [article on `RegExp` characters](http://www.regular-expressions.info/characters.html#special)
   * for more details.
   */
  var reRegExpChars = /[.*+?^${}()|[\]\/\\]/g,
      reHasRegExpChars = RegExp(reRegExpChars.source);
  
  /**
   * Escapes the `RegExp` special characters "\", "^", "$", ".", "|", "?", "*",
   * "+", "(", ")", "[", "]", "{" and "}" in `string`.
   *
   * @static
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to escape.
   * @returns {string} Returns the escaped string.
   * @example
   *
   * _.escapeRegExp('[lodash](https://lodash.com/)');
   * // => '\[lodash\]\(https://lodash\.com/\)'
   */
  function escapeRegExp(string) {
    string = baseToString(string);
    return (string && reHasRegExpChars.test(string))
      ? string.replace(reRegExpChars, '\\$&')
      : string;
  }
  
  module.exports = escapeRegExp;
  
});
require.register('lodash-compat/internal/isHostObject', function(module, exports, require) {
  var baseToString = require('lodash-compat/internal/baseToString');
  
  /**
   * Checks if `value` is a host object in IE < 9.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
   */
  var isHostObject = (function() {
    try {
      baseToString({ 'toString': 0 });
    } catch(e) {
      return function() { return false; };
    }
    return function(value) {
      // IE < 9 presents many host objects as `Object` objects that can coerce
      // to strings despite having improperly defined `toString` methods.
      return typeof value.toString != 'function' && typeof (value + '') == 'string';
    };
  }());
  
  module.exports = isHostObject;
  
});
require.register('lodash-compat/lang/isNative', function(module, exports, require) {
  var escapeRegExp = require('lodash-compat/string/escapeRegExp'),
      isHostObject = require('lodash-compat/internal/isHostObject'),
      isObjectLike = require('lodash-compat/internal/isObjectLike');
  
  /** `Object#toString` result references. */
  var funcTag = '[object Function]';
  
  /** Used to detect host constructors (Safari > 5). */
  var reHostCtor = /^\[object .+?Constructor\]$/;
  
  /** Used for native method references. */
  var objectProto = Object.prototype;
  
  /** Used to resolve the decompiled source of functions. */
  var fnToString = Function.prototype.toString;
  
  /**
   * Used to resolve the `toStringTag` of values.
   * See the [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
   * for more details.
   */
  var objToString = objectProto.toString;
  
  /** Used to detect if a method is native. */
  var reNative = RegExp('^' +
    escapeRegExp(objToString)
    .replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );
  
  /**
   * Checks if `value` is a native function.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
   * @example
   *
   * _.isNative(Array.prototype.push);
   * // => true
   *
   * _.isNative(_);
   * // => false
   */
  function isNative(value) {
    if (value == null) {
      return false;
    }
    if (objToString.call(value) == funcTag) {
      return reNative.test(fnToString.call(value));
    }
    return (isObjectLike(value) &&
      (isHostObject(value) ? reNative : reHostCtor).test(value)) || false;
  }
  
  module.exports = isNative;
  
});
require.register('lodash-compat/support', function(module, exports, require) {
  var isNative = require('lodash-compat/lang/isNative');
  
  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      objectTag = '[object Object]';
  
  /** Used to detect functions containing a `this` reference. */
  var reThis = /\bthis\b/;
  
  /** Used for native method references. */
  var arrayProto = Array.prototype,
      errorProto = Error.prototype,
      objectProto = Object.prototype;
  
  /** Used to detect DOM support. */
  var document = (document = global.window) && document.document;
  
  /**
   * Used to resolve the `toStringTag` of values.
   * See the [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
   * for more details.
   */
  var objToString = objectProto.toString;
  
  /** Native method references. */
  var propertyIsEnumerable = objectProto.propertyIsEnumerable,
      splice = arrayProto.splice;
  
  /**
   * An object environment feature flags.
   *
   * @static
   * @memberOf _
   * @type Object
   */
  var support = {};
  
  (function(x) {
    var Ctor = function() { this.x = 1; },
        object = { '0': 1, 'length': 1 },
        props = [];
  
    Ctor.prototype = { 'valueOf': 1, 'y': 1 };
    for (var key in new Ctor) { props.push(key); }
  
    /**
     * Detect if the `toStringTag` of `arguments` objects is resolvable
     * (all but Firefox < 4, IE < 9).
     *
     * @memberOf _.support
     * @type boolean
     */
    support.argsTag = objToString.call(arguments) == argsTag;
  
    /**
     * Detect if `name` or `message` properties of `Error.prototype` are
     * enumerable by default (IE < 9, Safari < 5.1).
     *
     * @memberOf _.support
     * @type boolean
     */
    support.enumErrorProps = propertyIsEnumerable.call(errorProto, 'message') ||
      propertyIsEnumerable.call(errorProto, 'name');
  
    /**
     * Detect if `prototype` properties are enumerable by default.
     *
     * Firefox < 3.6, Opera > 9.50 - Opera < 11.60, and Safari < 5.1
     * (if the prototype or a property on the prototype has been set)
     * incorrectly set the `[[Enumerable]]` value of a function's `prototype`
     * property to `true`.
     *
     * @memberOf _.support
     * @type boolean
     */
    support.enumPrototypes = propertyIsEnumerable.call(Ctor, 'prototype');
  
    /**
     * Detect if functions can be decompiled by `Function#toString`
     * (all but Firefox OS certified apps, older Opera mobile browsers, and
     * the PlayStation 3; forced `false` for Windows 8 apps).
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
  
    /**
     * Detect if the `toStringTag` of DOM nodes is resolvable (all but IE < 9).
     *
     * @memberOf _.support
     * @type boolean
     */
    support.nodeTag = objToString.call(document) != objectTag;
  
    /**
     * Detect if string indexes are non-enumerable
     * (IE < 9, RingoJS, Rhino, Narwhal).
     *
     * @memberOf _.support
     * @type boolean
     */
    support.nonEnumStrings = !propertyIsEnumerable.call('x', 0);
  
    /**
     * Detect if properties shadowing those on `Object.prototype` are
     * non-enumerable.
     *
     * In IE < 9 an object's own properties, shadowing non-enumerable ones,
     * are made non-enumerable as well (a.k.a the JScript `[[DontEnum]]` bug).
     *
     * @memberOf _.support
     * @type boolean
     */
    support.nonEnumShadows = !/valueOf/.test(props);
  
    /**
     * Detect if own properties are iterated after inherited properties (IE < 9).
     *
     * @memberOf _.support
     * @type boolean
     */
    support.ownLast = props[0] != 'x';
  
    /**
     * Detect if `Array#shift` and `Array#splice` augment array-like objects
     * correctly.
     *
     * Firefox < 10, compatibility modes of IE 8, and IE < 9 have buggy Array `shift()`
     * and `splice()` functions that fail to remove the last element, `value[0]`,
     * of array-like objects even though the `length` property is set to `0`.
     * The `shift()` method is buggy in compatibility modes of IE 8, while `splice()`
     * is buggy regardless of mode in IE < 9.
     *
     * @memberOf _.support
     * @type boolean
     */
    support.spliceObjects = (splice.call(object, 0, 1), !object[0]);
  
    /**
     * Detect lack of support for accessing string characters by index.
     *
     * IE < 8 can't access characters by index. IE 8 can only access characters
     * by index on string literals, not string objects.
     *
     * @memberOf _.support
     * @type boolean
     */
    support.unindexedChars = ('x'[0] + Object('x')[0]) != 'xx';
  
    /**
     * Detect if the DOM is supported.
     *
     * @memberOf _.support
     * @type boolean
     */
    try {
      support.dom = document.createDocumentFragment().nodeType === 11;
    } catch(e) {
      support.dom = false;
    }
  
    /**
     * Detect if `arguments` object indexes are non-enumerable.
     *
     * In Firefox < 4, IE < 9, PhantomJS, and Safari < 5.1 `arguments` object
     * indexes are non-enumerable. Chrome < 25 and Node.js < 0.11.0 treat
     * `arguments` object indexes as non-enumerable and fail `hasOwnProperty`
     * checks for indexes that exceed their function's formal parameters with
     * associated values of `0`.
     *
     * @memberOf _.support
     * @type boolean
     */
    try {
      support.nonEnumArgs = !propertyIsEnumerable.call(arguments, 1);
    } catch(e) {
      support.nonEnumArgs = true;
    }
  }(0, 0));
  
  module.exports = support;
  
});
require.register('lodash-compat/internal/toObject', function(module, exports, require) {
  var isObject = require('lodash-compat/lang/isObject'),
      isString = require('lodash-compat/lang/isString'),
      support = require('lodash-compat/support');
  
  /**
   * Converts `value` to an object if it is not one.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {Object} Returns the object.
   */
  function toObject(value) {
    if (support.unindexedChars && isString(value)) {
      var index = -1,
          length = value.length,
          result = Object(value);
  
      while (++index < length) {
        result[index] = value.charAt(index);
      }
      return result;
    }
    return isObject(value) ? value : Object(value);
  }
  
  module.exports = toObject;
  
});
require.register('lodash-compat/internal/baseFor', function(module, exports, require) {
  var toObject = require('lodash-compat/internal/toObject');
  
  /**
   * The base implementation of `baseForIn` and `baseForOwn` which iterates
   * over `object` properties returned by `keysFunc` invoking `iteratee` for
   * each property. Iterator functions may exit iteration early by explicitly
   * returning `false`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */
  function baseFor(object, iteratee, keysFunc) {
    var index = -1,
        iterable = toObject(object),
        props = keysFunc(object),
        length = props.length;
  
    while (++index < length) {
      var key = props[index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  }
  
  module.exports = baseFor;
  
});
require.register('lodash-compat/internal/isLength', function(module, exports, require) {
  /**
   * Used as the maximum length of an array-like value.
   * See the [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
   * for more details.
   */
  var MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;
  
  /**
   * Checks if `value` is a valid array-like length.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   */
  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  
  module.exports = isLength;
  
});
require.register('lodash-compat/lang/isArguments', function(module, exports, require) {
  var isLength = require('lodash-compat/internal/isLength'),
      isObjectLike = require('lodash-compat/internal/isObjectLike'),
      support = require('lodash-compat/support');
  
  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]';
  
  /** Used for native method references. */
  var objectProto = Object.prototype;
  
  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;
  
  /**
   * Used to resolve the `toStringTag` of values.
   * See the [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
   * for more details.
   */
  var objToString = objectProto.toString;
  
  /** Native method references. */
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  
  /**
   * Checks if `value` is classified as an `arguments` object.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
   * @example
   *
   * (function() { return _.isArguments(arguments); })();
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  function isArguments(value) {
    var length = isObjectLike(value) ? value.length : undefined;
    return (isLength(length) && objToString.call(value) == argsTag) || false;
  }
  // Fallback for environments without a `toStringTag` for `arguments` objects.
  if (!support.argsTag) {
    isArguments = function(value) {
      var length = isObjectLike(value) ? value.length : undefined;
      return (isLength(length) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee')) || false;
    };
  }
  
  module.exports = isArguments;
  
});
require.register('lodash-compat/lang/isArray', function(module, exports, require) {
  var isLength = require('lodash-compat/internal/isLength'),
      isNative = require('lodash-compat/lang/isNative'),
      isObjectLike = require('lodash-compat/internal/isObjectLike');
  
  /** `Object#toString` result references. */
  var arrayTag = '[object Array]';
  
  /** Used for native method references. */
  var objectProto = Object.prototype;
  
  /**
   * Used to resolve the `toStringTag` of values.
   * See the [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
   * for more details.
   */
  var objToString = objectProto.toString;
  
  /* Native method references for those with the same name as other `lodash` methods. */
  var nativeIsArray = isNative(nativeIsArray = Array.isArray) && nativeIsArray;
  
  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * (function() { return _.isArray(arguments); })();
   * // => false
   */
  var isArray = nativeIsArray || function(value) {
    return (isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag) || false;
  };
  
  module.exports = isArray;
  
});
require.register('lodash-compat/internal/isIndex', function(module, exports, require) {
  /**
   * Used as the maximum length of an array-like value.
   * See the [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
   * for more details.
   */
  var MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;
  
  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    value = +value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return value > -1 && value % 1 == 0 && value < length;
  }
  
  module.exports = isIndex;
  
});
require.register('lodash-compat/object/keysIn', function(module, exports, require) {
  var arrayEach = require('lodash-compat/internal/arrayEach'),
      isArguments = require('lodash-compat/lang/isArguments'),
      isArray = require('lodash-compat/lang/isArray'),
      isIndex = require('lodash-compat/internal/isIndex'),
      isLength = require('lodash-compat/internal/isLength'),
      isObject = require('lodash-compat/lang/isObject'),
      isString = require('lodash-compat/lang/isString'),
      support = require('lodash-compat/support');
  
  /** `Object#toString` result references. */
  var arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      numberTag = '[object Number]',
      objectTag = '[object Object]',
      regexpTag = '[object RegExp]',
      stringTag = '[object String]';
  
  /** Used to fix the JScript `[[DontEnum]]` bug. */
  var shadowProps = [
    'constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable',
    'toLocaleString', 'toString', 'valueOf'
  ];
  
  /** Used for native method references. */
  var errorProto = Error.prototype,
      objectProto = Object.prototype,
      stringProto = String.prototype;
  
  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;
  
  /**
   * Used to resolve the `toStringTag` of values.
   * See the [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
   * for more details.
   */
  var objToString = objectProto.toString;
  
  /** Used to avoid iterating over non-enumerable properties in IE < 9. */
  var nonEnumProps = {};
  nonEnumProps[arrayTag] = nonEnumProps[dateTag] = nonEnumProps[numberTag] = { 'constructor': true, 'toLocaleString': true, 'toString': true, 'valueOf': true };
  nonEnumProps[boolTag] = nonEnumProps[stringTag] = { 'constructor': true, 'toString': true, 'valueOf': true };
  nonEnumProps[errorTag] = nonEnumProps[funcTag] = nonEnumProps[regexpTag] = { 'constructor': true, 'toString': true };
  nonEnumProps[objectTag] = { 'constructor': true };
  
  arrayEach(shadowProps, function(key) {
    for (var tag in nonEnumProps) {
      if (hasOwnProperty.call(nonEnumProps, tag)) {
        var props = nonEnumProps[tag];
        props[key] = hasOwnProperty.call(props, key);
      }
    }
  });
  
  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn(object) {
    if (object == null) {
      return [];
    }
    if (!isObject(object)) {
      object = Object(object);
    }
    var length = object.length;
  
    length = (length && isLength(length) &&
      (isArray(object) || (support.nonEnumStrings && isString(object)) ||
        (support.nonEnumArgs && isArguments(object))) && length) || 0;
  
    var Ctor = object.constructor,
        index = -1,
        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto,
        isProto = proto === object,
        result = Array(length),
        skipIndexes = length > 0,
        skipErrorProps = support.enumErrorProps && (object === errorProto || object instanceof Error),
        skipProto = support.enumPrototypes && typeof object == 'function';
  
    while (++index < length) {
      result[index] = (index + '');
    }
    // lodash skips the `constructor` property when it infers it is iterating
    // over a `prototype` object because IE < 9 can't set the `[[Enumerable]]`
    // attribute of an existing property and the `constructor` property of a
    // prototype defaults to non-enumerable.
    for (var key in object) {
      if (!(skipProto && key == 'prototype') &&
          !(skipErrorProps && (key == 'message' || key == 'name')) &&
          !(skipIndexes && isIndex(key, length)) &&
          !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
        result.push(key);
      }
    }
    if (support.nonEnumShadows && object !== objectProto) {
      var tag = object === stringProto ? stringTag : object === errorProto ? errorTag : objToString.call(object),
          nonEnums = nonEnumProps[tag] || nonEnumProps[objectTag];
  
      if (tag == objectTag) {
        proto = objectProto;
      }
      length = shadowProps.length;
      while (length--) {
        key = shadowProps[length];
        var nonEnum = nonEnums[key];
        if (!(isProto && nonEnum) &&
            (nonEnum ? hasOwnProperty.call(object, key) : object[key] !== proto[key])) {
          result.push(key);
        }
      }
    }
    return result;
  }
  
  module.exports = keysIn;
  
});
require.register('lodash-compat/internal/shimKeys', function(module, exports, require) {
  var isArguments = require('lodash-compat/lang/isArguments'),
      isArray = require('lodash-compat/lang/isArray'),
      isIndex = require('lodash-compat/internal/isIndex'),
      isLength = require('lodash-compat/internal/isLength'),
      isString = require('lodash-compat/lang/isString'),
      keysIn = require('lodash-compat/object/keysIn'),
      support = require('lodash-compat/support');
  
  /** Used for native method references. */
  var objectProto = Object.prototype;
  
  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;
  
  /**
   * A fallback implementation of `Object.keys` which creates an array of the
   * own enumerable property names of `object`.
   *
   * @private
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns the array of property names.
   */
  function shimKeys(object) {
    var props = keysIn(object),
        propsLength = props.length,
        length = propsLength && object.length;
  
    var allowIndexes = length && isLength(length) &&
      (isArray(object) || (support.nonEnumStrings && isString(object)) ||
        (support.nonEnumArgs && isArguments(object)));
  
    var index = -1,
        result = [];
  
    while (++index < propsLength) {
      var key = props[index];
      if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
        result.push(key);
      }
    }
    return result;
  }
  
  module.exports = shimKeys;
  
});
require.register('lodash-compat/object/keys', function(module, exports, require) {
  var isLength = require('lodash-compat/internal/isLength'),
      isNative = require('lodash-compat/lang/isNative'),
      isObject = require('lodash-compat/lang/isObject'),
      shimKeys = require('lodash-compat/internal/shimKeys'),
      support = require('lodash-compat/support');
  
  /* Native method references for those with the same name as other `lodash` methods. */
  var nativeKeys = isNative(nativeKeys = Object.keys) && nativeKeys;
  
  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.keys)
   * for more details.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  var keys = !nativeKeys ? shimKeys : function(object) {
    if (object) {
      var Ctor = object.constructor,
          length = object.length;
    }
    if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
       (typeof object == 'function' ? support.enumPrototypes : (length && isLength(length)))) {
      return shimKeys(object);
    }
    return isObject(object) ? nativeKeys(object) : [];
  };
  
  module.exports = keys;
  
});
require.register('lodash-compat/internal/baseForOwn', function(module, exports, require) {
  var baseFor = require('lodash-compat/internal/baseFor'),
      keys = require('lodash-compat/object/keys');
  
  /**
   * The base implementation of `_.forOwn` without support for callback
   * shorthands and `this` binding.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */
  function baseForOwn(object, iteratee) {
    return baseFor(object, iteratee, keys);
  }
  
  module.exports = baseForOwn;
  
});
require.register('lodash-compat/internal/baseEach', function(module, exports, require) {
  var baseForOwn = require('lodash-compat/internal/baseForOwn'),
      isLength = require('lodash-compat/internal/isLength'),
      toObject = require('lodash-compat/internal/toObject');
  
  /**
   * The base implementation of `_.forEach` without support for callback
   * shorthands and `this` binding.
   *
   * @private
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object|string} Returns `collection`.
   */
  function baseEach(collection, iteratee) {
    var length = collection ? collection.length : 0;
    if (!isLength(length)) {
      return baseForOwn(collection, iteratee);
    }
    var index = -1,
        iterable = toObject(collection);
  
    while (++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  }
  
  module.exports = baseEach;
  
});
require.register('lodash-compat/utility/identity', function(module, exports, require) {
  /**
   * This method returns the first argument provided to it.
   *
   * @static
   * @memberOf _
   * @category Utility
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'user': 'fred' };
   * _.identity(object) === object;
   * // => true
   */
  function identity(value) {
    return value;
  }
  
  module.exports = identity;
  
});
require.register('lodash-compat/internal/bindCallback', function(module, exports, require) {
  var identity = require('lodash-compat/utility/identity');
  
  /**
   * A specialized version of `baseCallback` which only supports `this` binding
   * and specifying the number of arguments to provide to `func`.
   *
   * @private
   * @param {Function} func The function to bind.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {number} [argCount] The number of arguments to provide to `func`.
   * @returns {Function} Returns the callback.
   */
  function bindCallback(func, thisArg, argCount) {
    if (typeof func != 'function') {
      return identity;
    }
    if (typeof thisArg == 'undefined') {
      return func;
    }
    switch (argCount) {
      case 1: return function(value) {
        return func.call(thisArg, value);
      };
      case 3: return function(value, index, collection) {
        return func.call(thisArg, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(thisArg, accumulator, value, index, collection);
      };
      case 5: return function(value, other, key, object, source) {
        return func.call(thisArg, value, other, key, object, source);
      };
    }
    return function() {
      return func.apply(thisArg, arguments);
    };
  }
  
  module.exports = bindCallback;
  
});
require.register('lodash-compat/collection/forEach', function(module, exports, require) {
  var arrayEach = require('lodash-compat/internal/arrayEach'),
      baseEach = require('lodash-compat/internal/baseEach'),
      bindCallback = require('lodash-compat/internal/bindCallback'),
      isArray = require('lodash-compat/lang/isArray');
  
  /**
   * Iterates over elements of `collection` invoking `iteratee` for each element.
   * The `iteratee` is bound to `thisArg` and invoked with three arguments;
   * (value, index|key, collection). Iterator functions may exit iteration early
   * by explicitly returning `false`.
   *
   * **Note:** As with other "Collections" methods, objects with a `length` property
   * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
   * may be used for object iteration.
   *
   * @static
   * @memberOf _
   * @alias each
   * @category Collection
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @param {*} [thisArg] The `this` binding of `iteratee`.
   * @returns {Array|Object|string} Returns `collection`.
   * @example
   *
   * _([1, 2, 3]).forEach(function(n) { console.log(n); });
   * // => logs each value from left to right and returns the array
   *
   * _.forEach({ 'one': 1, 'two': 2, 'three': 3 }, function(n, key) { console.log(n, key); });
   * // => logs each value-key pair and returns the object (iteration order is not guaranteed)
   */
  function forEach(collection, iteratee, thisArg) {
    return (typeof iteratee == 'function' && typeof thisArg == 'undefined' && isArray(collection))
      ? arrayEach(collection, iteratee)
      : baseEach(collection, bindCallback(iteratee, thisArg, 3));
  }
  
  module.exports = forEach;
  
});
require.register('lodash-compat/internal/baseSlice', function(module, exports, require) {
  /**
   * The base implementation of `_.slice` without an iteratee call guard.
   *
   * @private
   * @param {Array} array The array to slice.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the slice of `array`.
   */
  function baseSlice(array, start, end) {
    var index = -1,
        length = array.length;
  
    start = start == null ? 0 : (+start || 0);
    if (start < 0) {
      start = -start > length ? 0 : (length + start);
    }
    end = (typeof end == 'undefined' || end > length) ? length : (+end || 0);
    if (end < 0) {
      end += length;
    }
    length = start > end ? 0 : (end - start);
  
    var result = Array(length);
    while (++index < length) {
      result[index] = array[index + start];
    }
    return result;
  }
  
  module.exports = baseSlice;
  
});
require.register('lodash-compat/internal/metaMap', function(module, exports, require) {
  var isNative = require('lodash-compat/lang/isNative');
  
  /** Native method references. */
  var WeakMap = isNative(WeakMap = global.WeakMap) && WeakMap;
  
  /** Used to store function metadata. */
  var metaMap = WeakMap && new WeakMap;
  
  module.exports = metaMap;
  
});
require.register('lodash-compat/internal/baseSetData', function(module, exports, require) {
  var identity = require('lodash-compat/utility/identity'),
      metaMap = require('lodash-compat/internal/metaMap');
  
  /**
   * The base implementation of `setData` without support for hot loop detection.
   *
   * @private
   * @param {Function} func The function to associate metadata with.
   * @param {*} data The metadata.
   * @returns {Function} Returns `func`.
   */
  var baseSetData = !metaMap ? identity : function(func, data) {
    metaMap.set(func, data);
    return func;
  };
  
  module.exports = baseSetData;
  
});
require.register('lodash-compat/internal/baseCreate', function(module, exports, require) {
  var isObject = require('lodash-compat/lang/isObject');
  
  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} prototype The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  var baseCreate = (function() {
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
  
  module.exports = baseCreate;
  
});
require.register('lodash-compat/internal/createCtorWrapper', function(module, exports, require) {
  var baseCreate = require('lodash-compat/internal/baseCreate'),
      isObject = require('lodash-compat/lang/isObject');
  
  /**
   * Creates a function that produces an instance of `Ctor` regardless of
   * whether it was invoked as part of a `new` expression or by `call` or `apply`.
   *
   * @private
   * @param {Function} Ctor The constructor to wrap.
   * @returns {Function} Returns the new wrapped function.
   */
  function createCtorWrapper(Ctor) {
    return function() {
      var thisBinding = baseCreate(Ctor.prototype),
          result = Ctor.apply(thisBinding, arguments);
  
      // Mimic the constructor's `return` behavior.
      // See https://es5.github.io/#x13.2.2 for more details.
      return isObject(result) ? result : thisBinding;
    };
  }
  
  module.exports = createCtorWrapper;
  
});
require.register('lodash-compat/internal/createBindWrapper', function(module, exports, require) {
  var createCtorWrapper = require('lodash-compat/internal/createCtorWrapper');
  
  /**
   * Creates a function that wraps `func` and invokes it with the `this`
   * binding of `thisArg`.
   *
   * @private
   * @param {Function} func The function to bind.
   * @param {*} [thisArg] The `this` binding of `func`.
   * @returns {Function} Returns the new bound function.
   */
  function createBindWrapper(func, thisArg) {
    var Ctor = createCtorWrapper(func);
  
    function wrapper() {
      return (this instanceof wrapper ? Ctor : func).apply(thisArg, arguments);
    }
    return wrapper;
  }
  
  module.exports = createBindWrapper;
  
});
require.register('lodash-compat/internal/arrayCopy', function(module, exports, require) {
  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
  function arrayCopy(source, array) {
    var index = -1,
        length = source.length;
  
    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }
  
  module.exports = arrayCopy;
  
});
require.register('lodash-compat/internal/composeArgs', function(module, exports, require) {
  /* Native method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max;
  
  /**
   * Creates an array that is the composition of partially applied arguments,
   * placeholders, and provided arguments into a single array of arguments.
   *
   * @private
   * @param {Array|Object} args The provided arguments.
   * @param {Array} partials The arguments to prepend to those provided.
   * @param {Array} holders The `partials` placeholder indexes.
   * @returns {Array} Returns the new array of composed arguments.
   */
  function composeArgs(args, partials, holders) {
    var holdersLength = holders.length,
        argsIndex = -1,
        argsLength = nativeMax(args.length - holdersLength, 0),
        leftIndex = -1,
        leftLength = partials.length,
        result = Array(argsLength + leftLength);
  
    while (++leftIndex < leftLength) {
      result[leftIndex] = partials[leftIndex];
    }
    while (++argsIndex < holdersLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
    while (argsLength--) {
      result[leftIndex++] = args[argsIndex++];
    }
    return result;
  }
  
  module.exports = composeArgs;
  
});
require.register('lodash-compat/internal/composeArgsRight', function(module, exports, require) {
  /* Native method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max;
  
  /**
   * This function is like `composeArgs` except that the arguments composition
   * is tailored for `_.partialRight`.
   *
   * @private
   * @param {Array|Object} args The provided arguments.
   * @param {Array} partials The arguments to append to those provided.
   * @param {Array} holders The `partials` placeholder indexes.
   * @returns {Array} Returns the new array of composed arguments.
   */
  function composeArgsRight(args, partials, holders) {
    var holdersIndex = -1,
        holdersLength = holders.length,
        argsIndex = -1,
        argsLength = nativeMax(args.length - holdersLength, 0),
        rightIndex = -1,
        rightLength = partials.length,
        result = Array(argsLength + rightLength);
  
    while (++argsIndex < argsLength) {
      result[argsIndex] = args[argsIndex];
    }
    var pad = argsIndex;
    while (++rightIndex < rightLength) {
      result[pad + rightIndex] = partials[rightIndex];
    }
    while (++holdersIndex < holdersLength) {
      result[pad + holders[holdersIndex]] = args[argsIndex++];
    }
    return result;
  }
  
  module.exports = composeArgsRight;
  
});
require.register('lodash-compat/internal/reorder', function(module, exports, require) {
  var arrayCopy = require('lodash-compat/internal/arrayCopy'),
      isIndex = require('lodash-compat/internal/isIndex');
  
  /* Native method references for those with the same name as other `lodash` methods. */
  var nativeMin = Math.min;
  
  /**
   * Reorder `array` according to the specified indexes where the element at
   * the first index is assigned as the first element, the element at
   * the second index is assigned as the second element, and so on.
   *
   * @private
   * @param {Array} array The array to reorder.
   * @param {Array} indexes The arranged array indexes.
   * @returns {Array} Returns `array`.
   */
  function reorder(array, indexes) {
    var arrLength = array.length,
        length = nativeMin(indexes.length, arrLength),
        oldArray = arrayCopy(array);
  
    while (length--) {
      var index = indexes[length];
      array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
    }
    return array;
  }
  
  module.exports = reorder;
  
});
require.register('lodash-compat/internal/replaceHolders', function(module, exports, require) {
  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';
  
  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = -1,
        result = [];
  
    while (++index < length) {
      if (array[index] === placeholder) {
        array[index] = PLACEHOLDER;
        result[++resIndex] = index;
      }
    }
    return result;
  }
  
  module.exports = replaceHolders;
  
});
require.register('lodash-compat/internal/createHybridWrapper', function(module, exports, require) {
  var arrayCopy = require('lodash-compat/internal/arrayCopy'),
      composeArgs = require('lodash-compat/internal/composeArgs'),
      composeArgsRight = require('lodash-compat/internalodash-compat/internal/composeArgsRight'),
      createCtorWrapper = require('lodash-compat/internal/createCtorWrapper'),
      reorder = require('lodash-compat/internal/reorder'),
      replaceHolders = require('lodash-compat/internal/replaceHolders');
  
  /** Used to compose bitmasks for wrapper metadata. */
  var BIND_FLAG = 1,
      BIND_KEY_FLAG = 2,
      CURRY_BOUND_FLAG = 4,
      CURRY_FLAG = 8,
      CURRY_RIGHT_FLAG = 16,
      PARTIAL_FLAG = 32,
      PARTIAL_RIGHT_FLAG = 64,
      ARY_FLAG = 256;
  
  /* Native method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max;
  
  /**
   * Creates a function that wraps `func` and invokes it with optional `this`
   * binding of, partial application, and currying.
   *
   * @private
   * @param {Function|string} func The function or method name to reference.
   * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
   * @param {*} [thisArg] The `this` binding of `func`.
   * @param {Array} [partials] The arguments to prepend to those provided to the new function.
   * @param {Array} [holders] The `partials` placeholder indexes.
   * @param {Array} [partialsRight] The arguments to append to those provided to the new function.
   * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
   * @param {Array} [argPos] The argument positions of the new function.
   * @param {number} [ary] The arity cap of `func`.
   * @param {number} [arity] The arity of `func`.
   * @returns {Function} Returns the new wrapped function.
   */
  function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
    var isAry = bitmask & ARY_FLAG,
        isBind = bitmask & BIND_FLAG,
        isBindKey = bitmask & BIND_KEY_FLAG,
        isCurry = bitmask & CURRY_FLAG,
        isCurryBound = bitmask & CURRY_BOUND_FLAG,
        isCurryRight = bitmask & CURRY_RIGHT_FLAG;
  
    var Ctor = !isBindKey && createCtorWrapper(func),
        key = func;
  
    function wrapper() {
      // Avoid `arguments` object use disqualifying optimizations by
      // converting it to an array before providing it to other functions.
      var length = arguments.length,
          index = length,
          args = Array(length);
  
      while (index--) {
        args[index] = arguments[index];
      }
      if (partials) {
        args = composeArgs(args, partials, holders);
      }
      if (partialsRight) {
        args = composeArgsRight(args, partialsRight, holdersRight);
      }
      if (isCurry || isCurryRight) {
        var placeholder = wrapper.placeholder,
            argsHolders = replaceHolders(args, placeholder);
  
        length -= argsHolders.length;
        if (length < arity) {
          var newArgPos = argPos ? arrayCopy(argPos) : null,
              newArity = nativeMax(arity - length, 0),
              newsHolders = isCurry ? argsHolders : null,
              newHoldersRight = isCurry ? null : argsHolders,
              newPartials = isCurry ? args : null,
              newPartialsRight = isCurry ? null : args;
  
          bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
          bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);
  
          if (!isCurryBound) {
            bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
          }
          var result = createHybridWrapper(func, bitmask, thisArg, newPartials, newsHolders, newPartialsRight, newHoldersRight, newArgPos, ary, newArity);
          result.placeholder = placeholder;
          return result;
        }
      }
      var thisBinding = isBind ? thisArg : this;
      if (isBindKey) {
        func = thisBinding[key];
      }
      if (argPos) {
        args = reorder(args, argPos);
      }
      if (isAry && ary < args.length) {
        args.length = ary;
      }
      return (this instanceof wrapper ? (Ctor || createCtorWrapper(func)) : func).apply(thisBinding, args);
    }
    return wrapper;
  }
  
  module.exports = createHybridWrapper;
  
});
require.register('lodash-compat/internal/createPartialWrapper', function(module, exports, require) {
  var createCtorWrapper = require('lodash-compat/internal/createCtorWrapper');
  
  /** Used to compose bitmasks for wrapper metadata. */
  var BIND_FLAG = 1;
  
  /**
   * Creates a function that wraps `func` and invokes it with the optional `this`
   * binding of `thisArg` and the `partials` prepended to those provided to
   * the wrapper.
   *
   * @private
   * @param {Function} func The function to partially apply arguments to.
   * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} partials The arguments to prepend to those provided to the new function.
   * @returns {Function} Returns the new bound function.
   */
  function createPartialWrapper(func, bitmask, thisArg, partials) {
    var isBind = bitmask & BIND_FLAG,
        Ctor = createCtorWrapper(func);
  
    function wrapper() {
      // Avoid `arguments` object use disqualifying optimizations by
      // converting it to an array before providing it `func`.
      var argsIndex = -1,
          argsLength = arguments.length,
          leftIndex = -1,
          leftLength = partials.length,
          args = Array(argsLength + leftLength);
  
      while (++leftIndex < leftLength) {
        args[leftIndex] = partials[leftIndex];
      }
      while (argsLength--) {
        args[leftIndex++] = arguments[++argsIndex];
      }
      return (this instanceof wrapper ? Ctor : func).apply(isBind ? thisArg : this, args);
    }
    return wrapper;
  }
  
  module.exports = createPartialWrapper;
  
});
require.register('lodash-compat/utility/noop', function(module, exports, require) {
  /**
   * A no-operation function.
   *
   * @static
   * @memberOf _
   * @category Utility
   * @example
   *
   * var object = { 'user': 'fred' };
   * _.noop(object) === undefined;
   * // => true
   */
  function noop() {
    // No operation performed.
  }
  
  module.exports = noop;
  
});
require.register('lodash-compat/internal/getData', function(module, exports, require) {
  var metaMap = require('lodash-compat/internal/metaMap'),
      noop = require('lodash-compat/utility/noop');
  
  /**
   * Gets metadata for `func`.
   *
   * @private
   * @param {Function} func The function to query.
   * @returns {*} Returns the metadata for `func`.
   */
  var getData = !metaMap ? noop : function(func) {
    return metaMap.get(func);
  };
  
  module.exports = getData;
  
});
require.register('lodash-compat/lang/isFunction', function(module, exports, require) {
  var isNative = require('lodash-compat/lang/isNative');
  
  /** `Object#toString` result references. */
  var funcTag = '[object Function]';
  
  /** Used for native method references. */
  var objectProto = Object.prototype;
  
  /**
   * Used to resolve the `toStringTag` of values.
   * See the [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
   * for more details.
   */
  var objToString = objectProto.toString;
  
  /** Native method references. */
  var Uint8Array = isNative(Uint8Array = global.Uint8Array) && Uint8Array;
  
  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    // Avoid a Chakra JIT bug in compatibility modes of IE 11.
    // See https://github.com/jashkenas/underscore/issues/1621 for more details.
    return typeof value == 'function' || false;
  }
  // Fallback for environments that return incorrect `typeof` operator results.
  if (isFunction(/x/) || (Uint8Array && !isFunction(Uint8Array))) {
    isFunction = function(value) {
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in older versions of Chrome and Safari which return 'function' for regexes
      // and Safari 8 equivalents which return 'object' for typed array constructors.
      return objToString.call(value) == funcTag;
    };
  }
  
  module.exports = isFunction;
  
});
require.register('lodash-compat/internal/mergeData', function(module, exports, require) {
  var arrayCopy = require('lodash-compat/internal/arrayCopy'),
      composeArgs = require('lodash-compat/internal/composeArgs'),
      composeArgsRight = require('lodash-compat/internalodash-compat/internal/composeArgsRight'),
      replaceHolders = require('lodash-compat/internal/replaceHolders');
  
  /** Used to compose bitmasks for wrapper metadata. */
  var BIND_FLAG = 1,
      BIND_KEY_FLAG = 2,
      CURRY_BOUND_FLAG = 4,
      CURRY_RIGHT_FLAG = 16,
      REARG_FLAG = 128,
      ARY_FLAG = 256;
  
  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';
  
  /* Native method references for those with the same name as other `lodash` methods. */
  var nativeMin = Math.min;
  
  /**
   * Merges the function metadata of `source` into `data`.
   *
   * Merging metadata reduces the number of wrappers required to invoke a function.
   * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
   * may be applied regardless of execution order. Methods like `_.ary` and `_.rearg`
   * augment function arguments, making the order in which they are executed important,
   * preventing the merging of metadata. However, we make an exception for a safe
   * common case where curried functions have `_.ary` and or `_.rearg` applied.
   *
   * @private
   * @param {Array} data The destination metadata.
   * @param {Array} source The source metadata.
   * @returns {Array} Returns `data`.
   */
  function mergeData(data, source) {
    var bitmask = data[1],
        srcBitmask = source[1],
        newBitmask = bitmask | srcBitmask;
  
    var arityFlags = ARY_FLAG | REARG_FLAG,
        bindFlags = BIND_FLAG | BIND_KEY_FLAG,
        comboFlags = arityFlags | bindFlags | CURRY_BOUND_FLAG | CURRY_RIGHT_FLAG;
  
    var isAry = bitmask & ARY_FLAG && !(srcBitmask & ARY_FLAG),
        isRearg = bitmask & REARG_FLAG && !(srcBitmask & REARG_FLAG),
        argPos = (isRearg ? data : source)[7],
        ary = (isAry ? data : source)[8];
  
    var isCommon = !(bitmask >= REARG_FLAG && srcBitmask > bindFlags) &&
      !(bitmask > bindFlags && srcBitmask >= REARG_FLAG);
  
    var isCombo = (newBitmask >= arityFlags && newBitmask <= comboFlags) &&
      (bitmask < REARG_FLAG || ((isRearg || isAry) && argPos.length <= ary));
  
    // Exit early if metadata can't be merged.
    if (!(isCommon || isCombo)) {
      return data;
    }
    // Use source `thisArg` if available.
    if (srcBitmask & BIND_FLAG) {
      data[2] = source[2];
      // Set when currying a bound function.
      newBitmask |= (bitmask & BIND_FLAG) ? 0 : CURRY_BOUND_FLAG;
    }
    // Compose partial arguments.
    var value = source[3];
    if (value) {
      var partials = data[3];
      data[3] = partials ? composeArgs(partials, value, source[4]) : arrayCopy(value);
      data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : arrayCopy(source[4]);
    }
    // Compose partial right arguments.
    value = source[5];
    if (value) {
      partials = data[5];
      data[5] = partials ? composeArgsRight(partials, value, source[6]) : arrayCopy(value);
      data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : arrayCopy(source[6]);
    }
    // Use source `argPos` if available.
    value = source[7];
    if (value) {
      data[7] = arrayCopy(value);
    }
    // Use source `ary` if it's smaller.
    if (srcBitmask & ARY_FLAG) {
      data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
    }
    // Use source `arity` if one is not provided.
    if (data[9] == null) {
      data[9] = source[9];
    }
    // Use source `func` and merge bitmasks.
    data[0] = source[0];
    data[1] = newBitmask;
  
    return data;
  }
  
  module.exports = mergeData;
  
});
require.register('lodash-compat/date/now', function(module, exports, require) {
  var isNative = require('lodash-compat/lang/isNative');
  
  /* Native method references for those with the same name as other `lodash` methods. */
  var nativeNow = isNative(nativeNow = Date.now) && nativeNow;
  
  /**
   * Gets the number of milliseconds that have elapsed since the Unix epoch
   * (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @category Date
   * @example
   *
   * _.defer(function(stamp) { console.log(_.now() - stamp); }, _.now());
   * // => logs the number of milliseconds it took for the deferred function to be invoked
   */
  var now = nativeNow || function() {
    return new Date().getTime();
  };
  
  module.exports = now;
  
});
require.register('lodash-compat/internal/setData', function(module, exports, require) {
  var baseSetData = require('lodash-compat/internal/baseSetData'),
      now = require('lodash-compat/date/now');
  
  /** Used to detect when a function becomes hot. */
  var HOT_COUNT = 150,
      HOT_SPAN = 16;
  
  /**
   * Sets metadata for `func`.
   *
   * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
   * period of time, it will trip its breaker and transition to an identity function
   * to avoid garbage collection pauses in V8. See [V8 issue 2070](https://code.google.com/p/v8/issues/detail?id=2070)
   * for more details.
   *
   * @private
   * @param {Function} func The function to associate metadata with.
   * @param {*} data The metadata.
   * @returns {Function} Returns `func`.
   */
  var setData = (function() {
    var count = 0,
        lastCalled = 0;
  
    return function(key, value) {
      var stamp = now(),
          remaining = HOT_SPAN - (stamp - lastCalled);
  
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return key;
        }
      } else {
        count = 0;
      }
      return baseSetData(key, value);
    };
  }());
  
  module.exports = setData;
  
});
require.register('lodash-compat/internal/createWrapper', function(module, exports, require) {
  var baseSetData = require('lodash-compat/internal/baseSetData'),
      createBindWrapper = require('lodash-compat/internal/createBindWrapper'),
      createHybridWrapper = require('lodash-compat/internal/createHybridWrapper'),
      createPartialWrapper = require('lodash-compat/internal/createPartialWrapper'),
      getData = require('lodash-compat/internal/getData'),
      isFunction = require('lodash-compat/lang/isFunction'),
      mergeData = require('lodash-compat/internal/mergeData'),
      setData = require('lodash-compat/internal/setData');
  
  /** Used to compose bitmasks for wrapper metadata. */
  var BIND_FLAG = 1,
      BIND_KEY_FLAG = 2,
      PARTIAL_FLAG = 32,
      PARTIAL_RIGHT_FLAG = 64;
  
  /** Used as the `TypeError` message for "Functions" methods. */
  var FUNC_ERROR_TEXT = 'Expected a function';
  
  /* Native method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max;
  
  /**
   * Creates a function that either curries or invokes `func` with optional
   * `this` binding and partially applied arguments.
   *
   * @private
   * @param {Function|string} func The function or method name to reference.
   * @param {number} bitmask The bitmask of flags.
   *  The bitmask may be composed of the following flags:
   *     1 - `_.bind`
   *     2 - `_.bindKey`
   *     4 - `_.curry` or `_.curryRight` of a bound function
   *     8 - `_.curry`
   *    16 - `_.curryRight`
   *    32 - `_.partial`
   *    64 - `_.partialRight`
   *   128 - `_.rearg`
   *   256 - `_.ary`
   * @param {*} [thisArg] The `this` binding of `func`.
   * @param {Array} [partials] The arguments to be partially applied.
   * @param {Array} [holders] The `partials` placeholder indexes.
   * @param {Array} [argPos] The argument positions of the new function.
   * @param {number} [ary] The arity cap of `func`.
   * @param {number} [arity] The arity of `func`.
   * @returns {Function} Returns the new wrapped function.
   */
  function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
    var isBindKey = bitmask & BIND_KEY_FLAG;
    if (!isBindKey && !isFunction(func)) {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var length = partials ? partials.length : 0;
    if (!length) {
      bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
      partials = holders = null;
    }
    length -= (holders ? holders.length : 0);
    if (bitmask & PARTIAL_RIGHT_FLAG) {
      var partialsRight = partials,
          holdersRight = holders;
  
      partials = holders = null;
    }
    var data = !isBindKey && getData(func),
        newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];
  
    if (data && data !== true) {
      mergeData(newData, data);
      bitmask = newData[1];
      arity = newData[9];
    }
    newData[9] = arity == null
      ? (isBindKey ? 0 : func.length)
      : (nativeMax(arity - length, 0) || 0);
  
    if (bitmask == BIND_FLAG) {
      var result = createBindWrapper(newData[0], newData[2]);
    } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !newData[4].length) {
      result = createPartialWrapper.apply(null, newData);
    } else {
      result = createHybridWrapper.apply(null, newData);
    }
    var setter = data ? baseSetData : setData;
    return setter(result, newData);
  }
  
  module.exports = createWrapper;
  
});
require.register('lodash-compat/function/bind', function(module, exports, require) {
  var baseSlice = require('lodash-compat/internal/baseSlice'),
      createWrapper = require('lodash-compat/internal/createWrapper'),
      replaceHolders = require('lodash-compat/internal/replaceHolders');
  
  /** Used to compose bitmasks for wrapper metadata. */
  var BIND_FLAG = 1,
      PARTIAL_FLAG = 32;
  
  /**
   * Creates a function that invokes `func` with the `this` binding of `thisArg`
   * and prepends any additional `_.bind` arguments to those provided to the
   * bound function.
   *
   * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
   * may be used as a placeholder for partially applied arguments.
   *
   * **Note:** Unlike native `Function#bind` this method does not set the `length`
   * property of bound functions.
   *
   * @static
   * @memberOf _
   * @category Function
   * @param {Function} func The function to bind.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {...*} [args] The arguments to be partially applied.
   * @returns {Function} Returns the new bound function.
   * @example
   *
   * var greet = function(greeting, punctuation) {
   *   return greeting + ' ' + this.user + punctuation;
   * };
   *
   * var object = { 'user': 'fred' };
   *
   * var bound = _.bind(greet, object, 'hi');
   * bound('!');
   * // => 'hi fred!'
   *
   * // using placeholders
   * var bound = _.bind(greet, object, _, '!');
   * bound('hi');
   * // => 'hi fred!'
   */
  function bind(func, thisArg) {
    var bitmask = BIND_FLAG;
    if (arguments.length > 2) {
      var partials = baseSlice(arguments, 2),
          holders = replaceHolders(partials, bind.placeholder);
  
      bitmask |= PARTIAL_FLAG;
    }
    return createWrapper(func, bitmask, thisArg, partials, holders);
  }
  
  // Assign default placeholders.
  bind.placeholder = {};
  
  module.exports = bind;
  
});
require.register('trait', function(module, exports, require) {
  var forEach = require('lodash-compat/collection/forEach')
  	, bind = require('lodash-compat/function/bind')
  	, keys = require('lodash-compat/object/keys')
  	, owns = bind(Function.prototype.call, Object.prototype.hasOwnProperty);
  
  /* Feature tests */
  var SUPPORTS_ACCESSORS = (function () {
  	try {
  		var test = {};
  		Object.defineProperty(test, 'x', {
  			get: function () {
  				return 1;
  			}
  		});
  		return test.x === 1;
  	} catch (err) {
  		return false;
  	}
  })();
  var SUPPORTS_GET_OWN_PROP_DESCRIPTOR = (function () {
  	// IE8 implements Obejct.defineProperty and Object.getOwnPropertyDescriptor only for DOM objects.
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
  
  // Utilities that throw exceptions for properties that are marked as 'required' or 'conflict' properties.
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
   * Determin if property is marked as `required` property.
   * @param {Object} object
   * @param {String} name
   * @returns {Boolean}
   */
  function isRequiredProperty (object, name) {
  	return !!object[name].required;
  }
  
  /**
   * Determin if property is marked as `conflict` property.
   * @param {Object} object
   * @param {String} name
   * @returns {Boolean}
   */
  function isConflictProperty (object, name) {
  	return !!object[name].conflict;
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
  
  	forEach(keys(trait), function (name) {
  
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
  
  	return objectCreate(Trait.prototype, map);
  }
  
  /**
   * Composes new instance of `Trait` with properties of a given `trait`,
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
  	forEach(keys(trait), function (name) {
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
  
  	return objectCreate(Trait.prototype, map);
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
  	forEach(keys(resolutions), function (name) {
  
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
  	forEach(arguments, function (trait) {
  		// Copying each property of the given trait.
  		forEach(keys(trait), function (name) {
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
  
  	return objectCreate(Trait.prototype, map);
  }
  
  /**
   *  `verifiedDefineProperties` is like `Object.defineProperties`, except that it
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
  	forEach(keys(properties), function (name) {
  
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
  	var object = objectCreate(prototype);
  
  	// Trying to define given `properties` on the `object`. We use our custom
  	// `verifiedDefineProperties` function instead of build-in `Object.defineProperties`
  	// that behaves exactly the same, except that it will throw if any
  	// property in the given `properties` descriptor is marked as 'required' or
  	// 'conflict' property.
  	return verifiedDefineProperties(object, properties);
  }
  
  /**
   * Create a Trait (a custom property descriptor map) that represents the given
   * `object`'s own properties. Property descriptor map is 'custom' because it's
   * property descriptors may contain two attributes that are not part of the ES5
   * specification:
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
   * @returns {Object}
   *    Property descriptor map containing all the own properties of the
   *    given argument.
   */
  function Trait (object) {
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
  
  		trait = objectCreate(Trait.prototype, map);
  	}
  
  	return trait;
  }
  
  Trait.prototype.create = function (prototype, properties) {
  	prototype = prototype || Object.prototype;
  	properties = (properties != null)
  		? compose(Trait(properties), this)
  		: this;
  	return create(prototype, properties);
  };
  
  Trait.prototype.resolve = function (resolutions) {
  	return resolve(resolutions, this);
  };
  
  Trait.compose = compose;
  
  Trait.required = objectCreate(Object.prototype, {
  	toString: {
  		value: function toString() {
  			return '<Trait.required>';
  		}
  	}
  });
  
  module.exports = Trait;
});
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
   * Append svg element of 'type' to 'parent', setting 'attrs'
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
require.register('runtime', function(module, exports, require) {
  var isNode = (typeof process !== 'undefined'
  	&& {}.toString.call(process) === '[object process]');
  
  exports.isServer = isNode;
  exports.isBrowser = !isNode;
});
require.register('utils/capabilities', function(module, exports, require) {
  var runtime = require('runtime');
  
  if (runtime.isServer) {
  	var capabilities = {
  		hasSVG: true,
  		hasCanvas: true,
  		backingRatio: 1
  	}
  } else {
  	var capabilities = require('capabilities');
  }
  
  module.exports = capabilities;
});
require.register('utils/layer', function(module, exports, require) {
  var capabilities = require('utils/capabilities');
  
  /**
   * Retrieve layer properties with 'type' and 'options'
   * @param {String} type
   * @param {Object} options
   * @returns {Object}
   */
  exports.get = function (type, options) {
  	var opts = {};
  
  	opts.visible = true;
  	opts.type = type;
  	opts.scale = (type == 'canvas') ? capabilities.backingRatio : 1;
  	opts.primitive = options.primitive;
  	opts.x = Math.round(options.x * opts.scale);
  	opts.y = Math.round(options.y * opts.scale);
  	opts.scale = (options.scale || 1) * opts.scale;
  	opts.flip = options.flip;
  	opts.tint = options.tint || 1;
  	opts.winter = options.winter;
  
  	return opts;
  };
});
require.register('utils/validate', function(module, exports, require) {
  var capabilities = require('utils/capabilities');
  
  /**
   * Validate if 'type' is suported on platform
   * @param {String} type
   * @returns {String}
   */
  module.exports = function (type) {
  	if (!type) return getDefaultType();
  
  	if (type == 'img') {
  		return type;
  	} else {
  		return capabilities[(type == 'canvas') ? 'hasCanvas' : 'hasSVG']
  			? type
  			: getDefaultType();
  	}
  };
  
  
  /**
   * Retrieve the default type based on platform capabilities
   * @returns {String}
   */
  function getDefaultType () {
  	return capabilities.hasSVG
  		? 'svg'
  		: (capabilities.hasCanvas
  			? 'canvas'
  			: 'img');
  };
  
});
require.register('yr-colours', function(module, exports, require) {
  module.exports = {
  	// Symbols
  	SUN_RAY: '#e88d15',
  	SUN_CENTRE: '#faba2f',
  	SUN_HORIZON: '#4d4d4d',
  	MOON: '#afc1c9',
  	RAIN: '#3e77c3',
  	SLEET: '#57dcdc',
  	SNOW: '#89DDF0',
  	LIGHTNING: '#c9af16',
  	WIND: '#d5d5d5',
  	TEMP_GRAD: {
  		'50': '#660036',
  		'10': '#C25700',
  		'9': '#E69100',
  		'1': '#F2DF0D',
  		'0': '#96E9E9',
  		'-9': '#55B6F6',
  		'-10': '#1F77D6',
  		'-50': '#380f57'
  	},
  	WIND_GRAD: {
  		'0': '#efefef',
  		'20': '#BFBFBF'
  	},
  
  	// UI
  	WHITE: '#fffcf5',
  	BLACK: '#252422',
  	BLUE: '#0099cc',
  	BLUE_LIGHT: '#c2f0ff',
  	BLUE_MED_LIGHT: '#47d1ff',
  	BLUE_MED_DARK: '#006b8f',
  	BLUE_DARK: '#002e3d',
  	GREY: '#807871',
  	GREY_LIGHT: '#ecebea',
  	GREY_MED_LIGHT: '#cdc9c6',
  	GREY_MED_DARK: '#5a544f',
  	GREY_DARK: '#262422',
  	ORANGE: '#e7501b',
  	RED: '#df2918',
  	GREEN: '#46933b',
  	YELLOW: '#faba2f',
  	YELLOW_LIGHT: '#fffecc',
  	EXTREME: '#9e0067',
  	NIGHT: '#f5f5f5'
  };
});
require.register('ease/lib/quad', function(module, exports, require) {
  // t: current time, b: beginning value, c: change in value, d: duration
  
  exports.inQuad = {
  	js: function(t, b, c, d) {
  			return c * (t /= d) * t + b;
  		},
  	css: 'cubic-bezier(0.550, 0.085, 0.680, 0.530)'
  };
  
  exports.outQuad = {
  	js: function(t, b, c, d) {
  			return -c * (t /= d) * (t - 2) + b;
  		},
  	css: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)'
  };
  
  exports.inOutQuad = {
  	js: function(t, b, c, d) {
  			if ((t /= d / 2) < 1) {
  				return c / 2 * t * t + b;
  			}
  			return -c / 2 * ((--t) * (t - 2) - 1) + b;
  		}
  };
  
});
require.register('primitives/TPrimitive', function(module, exports, require) {
  var trait = require('trait')
  	, easeOut = require('ease/lib/quad').outQuad.js
  	, easeIn = require('ease/lib/quad').inOutQuad.js;
  
  module.exports = trait({
  	renderSVG: trait.required,
  	renderCanvas: trait.required,
  
  	TWO_PI: Math.PI * 2,
  	MAX_WIDTH: 100,
  	OFFSET: 10,
  
  	type: '',
  	primitive: '',
  	visible: false,
  	x: 0,
  	y: 0,
  	scale: 1,
  	tint: 1,
  	opacity: 1,
  	flip: false,
  	winter: false,
  
  	/**
  	 * Initialize instance with 'options'
  	 * @param {Object} options
  	 * @returns {Object}
  	 */
  	initialize: function (options) {
  		this.extend(options);
  		return this;
  	},
  
  	/**
  	 * Render primitive
  	 * @param {SVGElement | CanvasContext} element
  	 */
  	render: function (element) {
  		if (this.visible) {
  			if (this.type == 'svg') {
  				return this.renderSVG(element);
  			} else {
  				return this.renderCanvas(element);
  			}
  		}
  	},
  
  	/**
  	 * Transform canvas 'ctx'
  	 * @param {CanvasContext} ctx
  	 */
  	transformCanvas: function (ctx) {
  		ctx.translate(this.x, this.y)
  		ctx.scale(this.scale, this.scale);
  	},
  
  	/**
  	 * Retrieve attribute object for <use>
  	 * @param {String} link
  	 * @returns {Object}
  	 */
  	getUseAttributes: function (link) {
  		return {
  			'xlink:href': link,
  			x: '0',
  			y: '0',
  			width: '100',
  			height: '100',
  			transform: this.flip
  				? 'translate('
  					+ ((this.MAX_WIDTH * this.scale) + this.x)
  					+ ','
  					+ this.y
  					+ ') scale('
  					+ (-1 * this.scale)
  					+ ', '
  					+ this.scale
  					+ ')'
  				: 'translate('
  					+ this.x
  					+ ','
  					+ this.y
  					+ ') scale('
  					+ this.scale
  					+ ')'
  		}
  	},
  
  	/**
  	 * Retrieve stringified attribute object for <use>
  	 * @param {String} link
  	 * @returns {String}
  	 */
  	getUseAttributesAsString: function (link) {
  		var props = this.getUseAttributes(link)
  			, str = '<use';
  
  		for (var prop in props) {
  			str += ' ' + prop + '="' + props[prop] + '"';
  		}
  		str += '></use>';
  
  		return str;
  	},
  
  	/**
  	 * Copy properties from 'options'
  	 * @param {Object} options
  	 */
  	extend: function (options) {
  		for (var prop in options) {
  			if (this.hasOwnProperty(prop)) this[prop] = options[prop];
  		}
  	},
  });
  
});
require.register('primitives/TCelestialPrimitive', function(module, exports, require) {
  var trait = require('trait')
  	, colours = require('yr-colours')
  
  	, SUN_RAY_COLOUR = colours.SUN_RAY
  	, SUN_CENTER_COLOUR = colours.SUN_CENTRE
  	, SUN_HORIZON_COLOUR = colours.SUN_HORIZON
  	, MOON_FILL_COLOUR = colours.MOON;
  
  module.exports = trait.compose(
  	require('primitives/TPrimitive'),
  	trait({
  		/**
  		 * Render canvas version
  		 * @param {CanvasContext} ctx
  		 */
  		renderCanvas: function (ctx) {
  			ctx.save();
  			this.transformCanvas(ctx);
  			ctx.globalAlpha = this.opacity;
  
  			if (this.primitive == 'moon') {
  				ctx.fillStyle = MOON_FILL_COLOUR;
  				ctx.beginPath();
  				ctx.moveTo(23,20);
  				ctx.bezierCurveTo(23,12.322,25.89,5.3,30.631,0);
  				ctx.bezierCurveTo(30.421,0.012,30.212,0,30,0);
  				ctx.bezierCurveTo(13.432,0,0,13.432,0,30);
  				ctx.bezierCurveTo(0,46.568,13.432,60,30,60);
  				ctx.bezierCurveTo(38.891,60,46.875,56.129,52.369,49.984);
  				ctx.bezierCurveTo(36.093,49.646,23,36.356,23,20);
  				ctx.closePath();
  				ctx.fill();
  
  			} else {
  				if (this.winter) {
  					// Horizon
  					ctx.fillStyle = SUN_HORIZON_COLOUR;
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
  					ctx.fillStyle = SUN_RAY_COLOUR;
  					ctx.beginPath();
  					ctx.moveTo(23.6,19.8);
  					ctx.lineTo(13.6,36.8);
  					ctx.bezierCurveTo(12.6,38.6,14.6,40.6,16.3,39.5);
  					ctx.lineTo(33.3,29.5);
  					ctx.bezierCurveTo(29.2,27.3,25.8,23.9,23.6,19.8);
  					ctx.moveTo(66.6,19.8);
  					ctx.bezierCurveTo(64.4,23.9,61,27.3,56.9,29.5);
  					ctx.lineTo(73.9,39.5);
  					ctx.bezierCurveTo(75.7,40.5,77.7,38.5,76.6,36.8);
  					ctx.lineTo(66.6,19.8);
  					ctx.moveTo(45.1,32.6);
  					ctx.bezierCurveTo(42.7,32.6,40.4,32.3,38.2,31.6);
  					ctx.lineTo(43.2,50.7);
  					ctx.bezierCurveTo(43.7,52.7,46.5,52.7,47.1,50.7);
  					ctx.lineTo(52.1,31.6);
  					ctx.bezierCurveTo(49.8,32.2,47.5,32.6,45.1,32.6);
  					ctx.moveTo(69.6,8);
  					ctx.bezierCurveTo(69.6,8,69.6,8,69.6,8);
  					ctx.bezierCurveTo(69.6,10.5,69.3,12.8,68.6,15);
  					ctx.lineTo(87.7,10);
  					ctx.bezierCurveTo(88.7,9.7,89.2,8.9,89.2,8);
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
  					ctx.fillStyle = SUN_CENTER_COLOUR;
  					ctx.beginPath();
  					ctx.moveTo(24.6,8);
  					ctx.bezierCurveTo(24.6,8,24.6,8,24.6,8);
  					ctx.bezierCurveTo(24.6,19.4,33.8,28.6,45.1,28.6);
  					ctx.bezierCurveTo(56.4,28.6,65.6,19.4,65.6,8.1);
  					ctx.bezierCurveTo(65.6,8.1,65.6,8.1,65.6,8);
  					ctx.lineTo(24.6,8);
  					ctx.closePath();
  					ctx.fill();
  
  				} else {
  					// Rays
  					ctx.fillStyle = SUN_RAY_COLOUR;
  					ctx.beginPath();
  					ctx.moveTo(23.5,33.2);
  					ctx.bezierCurveTo(25.7,29.1,29.1,25.7,33.2,23.5);
  					ctx.lineTo(16.2,13.5);
  					ctx.bezierCurveTo(14.4,12.5,12.4,14.5,13.5,16.2);
  					ctx.lineTo(23.5,33.2);
  					ctx.moveTo(45,20.5);
  					ctx.bezierCurveTo(47.4,20.5,49.7,20.8,51.9,21.5);
  					ctx.lineTo(46.9,2.4);
  					ctx.bezierCurveTo(46.4,0.4,43.6,0.4,43,2.4);
  					ctx.lineTo(38,21.5);
  					ctx.bezierCurveTo(40.3,20.8,42.6,20.5,45,20.5);
  					ctx.moveTo(87.6,43.1);
  					ctx.lineTo(68.5,38.1);
  					ctx.bezierCurveTo(69.1,40.3,69.5,42.6,69.5,45);
  					ctx.bezierCurveTo(69.5,47.4,69.2,49.7,68.5,51.9);
  					ctx.lineTo(87.6,46.9);
  					ctx.bezierCurveTo(89.6,46.4,89.6,43.6,87.6,43.1);
  					ctx.moveTo(20.5,45);
  					ctx.bezierCurveTo(20.5,42.6,20.8,40.3,21.5,38.1);
  					ctx.lineTo(2.4,43.1);
  					ctx.bezierCurveTo(0.4,43.6,0.4,46.4,2.4,47);
  					ctx.lineTo(21.5,52);
  					ctx.bezierCurveTo(20.8,49.7,20.5,47.4,20.5,45);
  					ctx.moveTo(66.5,33.2);
  					ctx.lineTo(76.5,16.2);
  					ctx.bezierCurveTo(77.5,14.4,75.5,12.4,73.8,13.5);
  					ctx.lineTo(56.8,23.5);
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
  					ctx.fillStyle = SUN_CENTER_COLOUR;
  					ctx.beginPath();
  					ctx.arc(45,45,20.5,0,this.TWO_PI,true);
  					ctx.closePath();
  					ctx.fill();
  				}
  			}
  
  			ctx.restore();
  		}
  	})
  );
});
require.register('primitives/TCelestialPrimitiveElement', function(module, exports, require) {
  var trait = require('trait')
  	, svg = require('svg');
  
  module.exports = trait({
  	/**
  	 * Render svg version
  	 * @param {SVGElement} element
  	 */
  	renderSVG: function (element) {
  		svg.appendChild(
  			element,
  			'use',
  			this.getUseAttributes(this.primitive == 'moon'
  				? '#moon'
  				: (this.winter ? '#sunWinter' : '#sun'))
  		);
  	}
  });
});
require.register('primitives/TCloudPrimitive', function(module, exports, require) {
  var trait = require('trait');
  
  module.exports = trait.compose(
  	require('primitives/TPrimitive').resolve({transformCanvas: null}),
  	trait({
  		/**
  		 * Render canvas version
  		 * @param {CanvasContext} ctx
  		 */
  		renderCanvas: function (ctx) {
  			var tint = Math.floor(255 * (1 - this.tint));
  
  			ctx.save();
  			this.transformCanvas(ctx);
  			ctx.globalAlpha = this.opacity;
  
  			// Mask
  			ctx.save();
  			ctx.globalCompositeOperation = 'destination-out';
  			this.renderCanvasStrokeShape(ctx);
  			ctx.restore();
  
  			// Fill
  			ctx.fillStyle = 'rgb(' + tint	+ ',' + tint + ',' + tint + ')';
  			this.renderCanvasFillShape(ctx);
  			ctx.restore();
  		},
  
  		/**
  		 * Transform canvas 'ctx'
  		 * @param {CanvasContext} ctx
  		 */
  		transformCanvas: function (ctx) {
  			if (this.flip) {
  				ctx.translate((this.MAX_WIDTH * this.scale) + this.x, this.y)
  				ctx.scale(-1 * this.scale, this.scale);
  			} else {
  				ctx.translate(this.x, this.y)
  				ctx.scale(this.scale, this.scale);
  			}
  		},
  
  		/**
  		 * Render canvas stroke shape
  		 * @param {Context} ctx
  		 */
  		renderCanvasStrokeShape: function (ctx) {
  			ctx.beginPath();
  			ctx.moveTo(93.7,33.7);
  			ctx.bezierCurveTo(92.6,26.7,87.7,18.9,77.6,17);
  			ctx.bezierCurveTo(74.9,6.9,66.5,0.3,55.7,0);
  			ctx.bezierCurveTo(55.4,0,55.2,0,54.9,0);
  			ctx.bezierCurveTo(44.5,0,36.2,5.7,32.8,15.1);
  			ctx.bezierCurveTo(32.3,15.1,31.9,15,31.4,15);
  			ctx.bezierCurveTo(24.9,15,17.2,18.9,14.8,26.2);
  			ctx.bezierCurveTo(5.9,26.9,0,34.5,0,41.6);
  			ctx.bezierCurveTo(0,52,7.8,58,21.5,58);
  			ctx.lineTo(65.1,58);
  			ctx.bezierCurveTo(70.7,58,78.5,57.5,83.3,55.2);
  			ctx.bezierCurveTo(91,51.5,95.2,42.8,93.7,33.7);
  			ctx.closePath();
  			ctx.fill();
  		},
  
  		/**
  		 * Render canvas fill shape
  		 * @param {Context} ctx
  		 */
  		renderCanvasFillShape: function (ctx) {
  			ctx.beginPath();
  			ctx.moveTo(74.3,20.6);
  			ctx.bezierCurveTo(72.4,8.3,63.1,4,54.9,4);
  			ctx.bezierCurveTo(45.9,4,38,9.4,35.6,19.7);
  			ctx.bezierCurveTo(27.7,17.1,18.6,22.6,18.1,30.3);
  			ctx.bezierCurveTo(14.4,29.5,4.1,31.6,4.1,41.6);
  			ctx.bezierCurveTo(4,51.9,13.5,54,21.5,54);
  			ctx.lineTo(65.1,54);
  			ctx.bezierCurveTo(72.5,54,78.3,53.2,81.5,51.6);
  			ctx.bezierCurveTo(88.6,48.2,90.8,40.5,89.8,34.3);
  			ctx.bezierCurveTo(88.8,28.5,84.6,21.3,74.3,20.6);
  			ctx.closePath();
  			ctx.fill();
  		}
  	})
  );
});
require.register('primitives/TCloudPrimitiveElement', function(module, exports, require) {
  var trait = require('trait')
  	, svg = require('svg');
  
  module.exports = trait({
  	/**
  	 * Render svg version
  	 * @param {SVGElement} element
  	 */
  	renderSVG: function (element) {
  		svg.appendChild(
  			element,
  			'use',
  			this.getUseAttributes('#cloud-' + this.tint * 100)
  		);
  	}
  });
});
require.register('primitives/TPrecipPrimitive', function(module, exports, require) {
  var trait = require('trait');
  
  module.exports = trait.compose(
  	require('primitives/TPrimitive'),
  	trait({
  		/**
  		 * Render canvas version
  		 * @param {CanvasContext} ctx
  		 */
  		renderCanvas: function (ctx) {
  			ctx.save();
  			this.transformCanvas(ctx);
  			ctx.globalAlpha = this.opacity;
  
  			// Background
  			ctx.fillStyle = this.bg;
  			ctx.save();
  			ctx.globalCompositeOperation = 'destination-out';
  			ctx.beginPath();
  			ctx.arc(9,9,9,0,this.TWO_PI,true);
  			ctx.closePath();
  			ctx.fill();
  			ctx.restore();
  
  			// Fill
  			if (this.primitive == 'raindrop') {
  				this.renderCanvasRaindropShape(ctx);
  			} else if (this.primitive == 'sleet') {
  				this.renderCanvasSleetShape(ctx);
  			} else {
  				this.renderCanvasSnowflakeShape(ctx);
  			}
  
  			ctx.restore();
  		},
  
  		/**
  		 * Render canvas raindrop shape
  		 * @param {Context} ctx
  		 */
  		renderCanvasRaindropShape: function (ctx) {
  			ctx.fillStyle = RAIN_FILL_COLOUR;
  			ctx.beginPath();
  			ctx.moveTo(20,16.8);
  			ctx.bezierCurveTo(20,20.2,17.3,23,14,23);
  			ctx.bezierCurveTo(10.7,23,8,20.2,8,16.8);
  			ctx.bezierCurveTo(8,14.9,8,6,8,6);
  			ctx.bezierCurveTo(13.5,11.5,20,11.2,20,16.8);
  			ctx.closePath();
  			ctx.fill();
  		},
  
  		/**
  		 * Render canvas sleet shape
  		 * @param {Context} ctx
  		 */
  		renderCanvasSleetShape: function (ctx) {
  			ctx.fillStyle = SLEET_FILL_COLOUR;
  			ctx.beginPath();
  			ctx.moveTo(19.9,16.6);
  			ctx.bezierCurveTo(18.1,18.9,16.5,22.1,16,25.5);
  			ctx.bezierCurveTo(15.9,26,15.4,26.2,15,25.9);
  			ctx.bezierCurveTo(12.7,23.8,10.2,22.6,6.5,22.1);
  			ctx.bezierCurveTo(6.1,22,5.9,21.6,6.1,21.3);
  			ctx.bezierCurveTo(8.4,17,8.6,10.1,7.8,5);
  			ctx.bezierCurveTo(10.5,9.2,14.9,14,19.6,15.7);
  			ctx.bezierCurveTo(20,15.8,20.1,16.3,19.9,16.6);
  			ctx.closePath();
  			ctx.fill();
  		},
  
  		/**
  		 * Render canvas snowflake shape
  		 * @param {Context} ctx
  		 */
  		renderCanvasSnowflakeShape: function (ctx) {
  			ctx.fillStyle = SNOW_FILL_COLOUR;
  			ctx.beginPath();
  			ctx.moveTo(6.2,6.9);
  			ctx.lineTo(7.3,10.7);
  			ctx.bezierCurveTo(7,10.9,6.7,11.2,6.4,11.5);
  			ctx.bezierCurveTo(6,11.7,5.8,12,5.6,12.4);
  			ctx.lineTo(1.8,11.4);
  			ctx.bezierCurveTo(1,11.2,0.2,11.7,0,12.5);
  			ctx.bezierCurveTo(-0.2,13.3,0.3,14.1,1.1,14.3);
  			ctx.lineTo(4.9,15.3);
  			ctx.bezierCurveTo(4.9,16.1,5.2,16.9,5.5,17.6);
  			ctx.lineTo(2.8,20.4);
  			ctx.bezierCurveTo(2.2,21,2.2,21.9,2.8,22.5);
  			ctx.bezierCurveTo(3.4,23.1,4.3,23.1,4.9,22.5);
  			ctx.lineTo(7.6,19.7);
  			ctx.bezierCurveTo(8.3,20.1,9.1,20.3,9.9,20.3);
  			ctx.lineTo(10.9,24.1);
  			ctx.bezierCurveTo(11.1,24.9,11.9,25.3,12.7,25.1);
  			ctx.bezierCurveTo(13.5,24.9,13.9,24.1,13.7,23.3);
  			ctx.lineTo(12.6,19.5);
  			ctx.bezierCurveTo(12.9,19.3,13.3,19.1,13.6,18.8);
  			ctx.bezierCurveTo(13.9,18.5,14.1,18.2,14.3,17.8);
  			ctx.lineTo(18.1,18.8);
  			ctx.bezierCurveTo(18.9,19,19.7,18.5,19.9,17.7);
  			ctx.bezierCurveTo(20.1,16.9,19.6,16.1,18.8,15.9);
  			ctx.lineTo(15,14.9);
  			ctx.bezierCurveTo(15,14.1,14.7,13.3,14.3,12.6);
  			ctx.lineTo(17,9.8);
  			ctx.bezierCurveTo(17.6,9.2,17.5,8.3,17,7.7);
  			ctx.bezierCurveTo(16.4,7.1,15.5,7.1,14.9,7.7);
  			ctx.lineTo(12.2,10.5);
  			ctx.bezierCurveTo(11.5,10.1,10.7,9.9,9.9,9.9);
  			ctx.lineTo(9,6.1);
  			ctx.bezierCurveTo(8.8,5.3,8,4.9,7.2,5.1);
  			ctx.bezierCurveTo(6.5,5.3,6,6.1,6.2,6.9);
  			ctx.closePath();
  			ctx.moveTo(11.8,13.2);
  			ctx.bezierCurveTo(12.8,14.2,12.8,15.8,11.8,16.8);
  			ctx.bezierCurveTo(10.8,17.8,9.2,17.8,8.2,16.8);
  			ctx.bezierCurveTo(7.2,15.8,7.2,14.2,8.2,13.2);
  			ctx.bezierCurveTo(9.2,12.2,10.8,12.2,11.8,13.2);
  			ctx.closePath();
  			ctx.fill();
  		}
  	})
  );
});
require.register('primitives/TPrecipPrimitiveElement', function(module, exports, require) {
  var trait = require('trait')
  	, svg = require('svg');
  
  module.exports = trait({
  	/**
  	 * Render svg version
  	 * @param {SVGElement} element
  	 */
  	renderSVG: function (element) {
  		svg.appendChild(
  			element,
  			'use',
  			this.getUseAttributes('#' + this.primitive)
  		);
  	}
  });
});
require.register('primitives/TFogPrimitive', function(module, exports, require) {
  var trait = require('trait');
  
  module.exports = trait.compose(
  	require('primitives/TPrimitive'),
  	trait({
  		/**
  		 * Render canvas version
  		 * @param {CanvasContext} ctx
  		 */
  		renderCanvas: function (ctx) {
  			var tint = Math.floor(255 * (1 - this.tint));
  
  			ctx.save();
  			this.transformCanvas(ctx);
  
  			ctx.fillStyle = 'rgb(' + tint	+ ',' + tint + ',' + tint + ')';
  			ctx.beginPath();
  			ctx.moveTo(82.3,42);
  			ctx.lineTo(2.7,42);
  			ctx.bezierCurveTo(1.2,42,0,42.9,0,44);
  			ctx.bezierCurveTo(0,45.1,1.2,46,2.7,46);
  			ctx.lineTo(82.4,46);
  			ctx.bezierCurveTo(83.9,46,85.1,45.1,85.1,44);
  			ctx.bezierCurveTo(85.1,42.9,83.8,42,82.3,42);
  			ctx.closePath();
  			ctx.fill();
  
  			ctx.beginPath();
  			ctx.moveTo(80.1,50);
  			ctx.lineTo(5.9,50);
  			ctx.bezierCurveTo(4.3,50,3,50.9,3,52);
  			ctx.bezierCurveTo(3,53.1,4.3,54,5.9,54);
  			ctx.lineTo(80.2,54);
  			ctx.bezierCurveTo(81.8,54,83.1,53.1,83.1,52);
  			ctx.bezierCurveTo(83,50.9,81.7,50,80.1,50);
  			ctx.closePath();
  			ctx.fill();
  
  			ctx.beginPath();
  			ctx.moveTo(80.1,58);
  			ctx.lineTo(10.9,58);
  			ctx.bezierCurveTo(9.3,58,8,58.9,8,60);
  			ctx.bezierCurveTo(8,61.1,9.3,62,10.9,62);
  			ctx.lineTo(80.1,62);
  			ctx.bezierCurveTo(81.7,62,83,61.1,83,60);
  			ctx.bezierCurveTo(83,58.9,81.7,58,80.1,58);
  			ctx.closePath();
  			ctx.fill();
  
  			ctx.beginPath();
  			ctx.moveTo(51.2,0);
  			ctx.bezierCurveTo(42.1,-0.3,33.6,4.8,30.7,14.6);
  			ctx.bezierCurveTo(24.8,13.2,15.4,16.9,13.7,25);
  			ctx.bezierCurveTo(8.2,24.9,1.2,29,0.1,36);
  			ctx.bezierCurveTo(0,37,0.7,37.9,1.7,37.9);
  			ctx.lineTo(84,37.9);
  			ctx.bezierCurveTo(85,37.9,85.8,37.2,85.9,36.2);
  			ctx.bezierCurveTo(86.9,27.3,81.8,17.5,70.7,16.1);
  			ctx.bezierCurveTo(68.5,5.6,60.2,0.3,51.2,0);
  			ctx.closePath();
  			ctx.fill();
  			ctx.restore();
  		}
  	})
  );
});
require.register('primitives/TFogPrimitiveElement', function(module, exports, require) {
  var trait = require('trait')
  	, svg = require('svg');
  
  module.exports = trait({
  	/**
  	 * Render svg version
  	 * @param {SVGElement} element
  	 */
  	renderSVG: function (element) {
  		svg.appendChild(
  			element,
  			'use',
  			this.getUseAttributes('#fog')
  		);
  	}
  });
});
require.register('primitives/TLightningPrimitive', function(module, exports, require) {
  var trait = require('trait');
  
  module.exports = trait.compose(
  	require('primitives/TPrimitive'),
  	trait({
  		/**
  		 * Render canvas version
  		 * @param {CanvasContext} ctx
  		 */
  		renderCanvas: function (ctx) {
  			// Fill
  			ctx.save();
  			this.transformCanvas(ctx);
  
  			ctx.fillStyle = FILL_COLOUR;
  			ctx.beginPath();
  			ctx.moveTo(10.413,0);
  			ctx.lineTo(4.163,12.484);
  			ctx.lineTo(12.488,12.484);
  			ctx.lineTo(0,25);
  			ctx.lineTo(25.001,8.32);
  			ctx.lineTo(16.663,8.32);
  			ctx.lineTo(24.995,0);
  			ctx.lineTo(10.413,0);
  			ctx.closePath();
  			ctx.fill();
  			ctx.restore();
  		}
  	})
  );
});
require.register('primitives/TLightningPrimitiveElement', function(module, exports, require) {
  var trait = require('trait')
  	, svg = require('svg');
  
  module.exports = trait({
  	/**
  	 * Render svg version
  	 * @param {SVGElement} element
  	 */
  	renderSVG: function (element) {
  		svg.appendChild(
  			element,
  			'use',
  			this.getUseAttributes('#lightning')
  		);
  	}
  });
});
require.register('weatherSymbolElement', function(module, exports, require) {
  var trait = require('trait')
  	, svg = require('svg')
  	, layer = require('utils/layer')
  	, validate = require('utils/validate')
  	, capabilities = require('utils/capabilities')
  	, formulae = {"10":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.4},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"raindrop","x":65,"y":72},{"primitive":"raindrop","x":49,"y":72},{"primitive":"raindrop","x":33,"y":68}],"11":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.4},{"primitive":"lightning","x":14,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"raindrop","x":69,"y":72},{"primitive":"raindrop","x":53,"y":72},{"primitive":"raindrop","x":37,"y":68}],"12":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.3},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"sleet","x":55,"y":72},{"primitive":"sleet","x":39,"y":68}],"13":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.3},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"snowflake","x":54,"y":69},{"primitive":"snowflake","x":36,"y":71}],"14":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.3},{"primitive":"lightning","x":19,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"snowflake","x":62,"y":69},{"primitive":"snowflake","x":44,"y":71}],"15":[{"primitive":"fog","x":4,"y":18,"tint":0.15}],"22":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.3},{"primitive":"lightning","x":21,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"raindrop","x":60,"y":72},{"primitive":"raindrop","x":44,"y":68}],"23":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.3},{"primitive":"lightning","x":19,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"sleet","x":58,"y":72},{"primitive":"sleet","x":42,"y":68}],"30":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.15},{"primitive":"lightning","x":27,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"raindrop","x":51,"y":68}],"31":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.15},{"primitive":"lightning","x":25,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"sleet","x":48,"y":68}],"32":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.4},{"primitive":"lightning","x":15,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"sleet","x":71,"y":72},{"primitive":"sleet","x":55,"y":72},{"primitive":"sleet","x":38,"y":68}],"33":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.15},{"primitive":"lightning","x":23,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"snowflake","x":49,"y":69}],"34":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.4},{"primitive":"lightning","x":8,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"snowflake","x":70,"y":69},{"primitive":"snowflake","x":51,"y":69},{"primitive":"snowflake","x":33,"y":71}],"46":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.15},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"raindrop","x":48,"y":68}],"47":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.15},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"sleet","x":45,"y":68}],"48":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.4},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"sleet","x":67,"y":72},{"primitive":"sleet","x":50,"y":68},{"primitive":"sleet","x":33,"y":68}],"49":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.15},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"snowflake","x":43,"y":69}],"50":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.4},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"snowflake","x":63,"y":69},{"primitive":"snowflake","x":44,"y":69},{"primitive":"snowflake","x":26,"y":71}],"01d":[{"primitive":"sun","x":5,"y":5}],"02d":[{"primitive":"sun","x":5,"y":5},{"primitive":"cloud","x":8,"y":56,"scale":0.6,"flip":true,"tint":0.1}],"03d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.1}],"40d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"raindrop","x":48,"y":68}],"05d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"raindrop","x":55,"y":72},{"primitive":"raindrop","x":39,"y":68}],"41d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"raindrop","x":65,"y":72},{"primitive":"raindrop","x":49,"y":72},{"primitive":"raindrop","x":33,"y":68}],"42d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"sleet","x":45,"y":68}],"07d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"sleet","x":55,"y":72},{"primitive":"sleet","x":39,"y":68}],"43d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"sleet","x":67,"y":72},{"primitive":"sleet","x":50,"y":68},{"primitive":"sleet","x":33,"y":68}],"44d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"snowflake","x":43,"y":69}],"08d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"snowflake","x":54,"y":69},{"primitive":"snowflake","x":36,"y":71}],"45d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"snowflake","x":63,"y":69},{"primitive":"snowflake","x":44,"y":69},{"primitive":"snowflake","x":26,"y":71}],"24d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"lightning","x":27,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"raindrop","x":51,"y":68}],"06d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"lightning","x":21,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"raindrop","x":60,"y":72},{"primitive":"raindrop","x":44,"y":68}],"25d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"lightning","x":14,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"raindrop","x":69,"y":72},{"primitive":"raindrop","x":53,"y":72},{"primitive":"raindrop","x":37,"y":68}],"26d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"lightning","x":25,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"sleet","x":48,"y":68}],"20d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"lightning","x":19,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"sleet","x":58,"y":72},{"primitive":"sleet","x":42,"y":68}],"27d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"lightning","x":15,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"sleet","x":71,"y":72},{"primitive":"sleet","x":55,"y":72},{"primitive":"sleet","x":38,"y":68}],"28d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"lightning","x":23,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"snowflake","x":49,"y":69}],"21d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"lightning","x":19,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"snowflake","x":62,"y":69},{"primitive":"snowflake","x":44,"y":71}],"29d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"lightning","x":8,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"snowflake","x":70,"y":69},{"primitive":"snowflake","x":51,"y":69},{"primitive":"snowflake","x":33,"y":71}],"01m":[{"primitive":"sun","x":5,"y":32,"winter":true}],"02m":[{"primitive":"sun","x":5,"y":32,"winter":true},{"primitive":"cloud","x":8,"y":46,"scale":0.6,"flip":true,"tint":0.1}],"03m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"cloud","x":7,"y":22,"tint":0.1}],"40m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"raindrop","x":48,"y":68}],"05m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"raindrop","x":55,"y":72},{"primitive":"raindrop","x":39,"y":68}],"41m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"raindrop","x":65,"y":72},{"primitive":"raindrop","x":49,"y":72},{"primitive":"raindrop","x":33,"y":68}],"42m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"sleet","x":45,"y":68}],"07m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"sleet","x":55,"y":72},{"primitive":"sleet","x":39,"y":68}],"43m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"sleet","x":67,"y":72},{"primitive":"sleet","x":50,"y":68},{"primitive":"sleet","x":33,"y":68}],"44m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"snowflake","x":43,"y":69}],"08m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"snowflake","x":54,"y":69},{"primitive":"snowflake","x":36,"y":71}],"45m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"snowflake","x":63,"y":69},{"primitive":"snowflake","x":44,"y":69},{"primitive":"snowflake","x":26,"y":71}],"24m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"lightning","x":27,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"raindrop","x":51,"y":68}],"06m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"lightning","x":21,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"raindrop","x":60,"y":72},{"primitive":"raindrop","x":44,"y":68}],"25m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"lightning","x":14,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"raindrop","x":69,"y":72},{"primitive":"raindrop","x":53,"y":72},{"primitive":"raindrop","x":37,"y":68}],"26m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"lightning","x":25,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"sleet","x":48,"y":68}],"20m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"lightning","x":19,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"sleet","x":58,"y":72},{"primitive":"sleet","x":42,"y":68}],"27m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"lightning","x":15,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"sleet","x":71,"y":72},{"primitive":"sleet","x":55,"y":72},{"primitive":"sleet","x":38,"y":68}],"28m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"lightning","x":23,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"snowflake","x":49,"y":69}],"21m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"lightning","x":19,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"snowflake","x":62,"y":69},{"primitive":"snowflake","x":44,"y":71}],"29m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"lightning","x":8,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"snowflake","x":70,"y":69},{"primitive":"snowflake","x":51,"y":69},{"primitive":"snowflake","x":33,"y":71}],"01n":[{"primitive":"moon","x":20,"y":20}],"02n":[{"primitive":"moon","x":20,"y":20},{"primitive":"cloud","x":8,"y":56,"scale":0.6,"flip":true,"tint":0.1}],"03n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.1}],"40n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"raindrop","x":48,"y":68}],"05n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"raindrop","x":55,"y":72},{"primitive":"raindrop","x":39,"y":68}],"41n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"raindrop","x":65,"y":72},{"primitive":"raindrop","x":49,"y":72},{"primitive":"raindrop","x":33,"y":68}],"42n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"sleet","x":45,"y":68}],"07n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"sleet","x":55,"y":72},{"primitive":"sleet","x":39,"y":68}],"43n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"sleet","x":67,"y":72},{"primitive":"sleet","x":50,"y":68},{"primitive":"sleet","x":33,"y":68}],"44n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"snowflake","x":43,"y":69}],"08n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"snowflake","x":54,"y":69},{"primitive":"snowflake","x":36,"y":71}],"45n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"snowflake","x":63,"y":69},{"primitive":"snowflake","x":44,"y":69},{"primitive":"snowflake","x":26,"y":71}],"24n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"lightning","x":27,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"raindrop","x":51,"y":68}],"06n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"lightning","x":21,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"raindrop","x":60,"y":72},{"primitive":"raindrop","x":44,"y":68}],"25n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"lightning","x":14,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"raindrop","x":69,"y":72},{"primitive":"raindrop","x":53,"y":72},{"primitive":"raindrop","x":37,"y":68}],"26n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"lightning","x":25,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"sleet","x":48,"y":68}],"20n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"lightning","x":19,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"sleet","x":58,"y":72},{"primitive":"sleet","x":42,"y":68}],"27n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"lightning","x":15,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"sleet","x":71,"y":72},{"primitive":"sleet","x":55,"y":72},{"primitive":"sleet","x":38,"y":68}],"28n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"lightning","x":23,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"snowflake","x":49,"y":69}],"21n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"lightning","x":19,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"snowflake","x":62,"y":69},{"primitive":"snowflake","x":44,"y":71}],"29n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"lightning","x":8,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"snowflake","x":70,"y":69},{"primitive":"snowflake","x":51,"y":69},{"primitive":"snowflake","x":33,"y":71}],"04":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.1},{"primitive":"cloud","x":7,"y":22,"tint":0.15}],"09":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.3},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"raindrop","x":55,"y":72},{"primitive":"raindrop","x":39,"y":68}]}
  	, TCelestial = trait.compose(
  			require('primitives/TCelestialPrimitive'),
  			require('primitives/TCelestialPrimitiveElement')
  		)
  	, TCloud = trait.compose(
  			require('primitives/TCloudPrimitive'),
  			require('primitives/TCloudPrimitiveElement')
  		)
  	, TPrecip = trait.compose(
  			require('primitives/TPrecipPrimitive'),
  			require('primitives/TPrecipPrimitiveElement')
  		)
  	, TFog = trait.compose(
  			require('primitives/TFogPrimitive'),
  			require('primitives/TFogPrimitiveElement')
  		)
  	, TLightning = trait.compose(
  			require('primitives/TLightningPrimitive'),
  			require('primitives/TLightningPrimitiveElement')
  		)
  	, primitives = {
  			sun: TCelestial.create(),
  			moon: TCelestial.create(),
  			cloud: TCloud.create(),
  			raindrop: TPrecip.create(),
  			sleet: TPrecip.create(),
  			snowflake: TPrecip.create(),
  			fog: TFog.create(),
  			lightning: TLightning.create()
  		}
  	, T;
  
  T = trait({
  	/**
  	 * Render symbol in 'container' with 'options'
  	 * @param {DOMElement} container
  	 * @param {Object} options
  	 */
  	render: function (container, options) {
  		if (!container) return;
  
  		options = options || {};
  		var id = options.id || container.getAttribute('data-id')
  			, type = validate(options.type)
  			, element = createElement(type)
  			, formula;
  
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
  		if (type != 'img') {
  			// Scale canvas element for hi-DPI
  			if (type == 'canvas') {
  				var ctx = element.getContext('2d');
  				element.width = 100 * capabilities.backingRatio;
  				element.height = 100 * capabilities.backingRatio;
  			}
  
  			if (formula = formulae[id]) {
  				// Render layers
  				for (var i = 0, n = formula.length; i < n; i++) {
  					primitives[formula[i].primitive].initialize(layer.get(type, formula[i]));
  					primitives[formula[i].primitive].render((type == 'canvas') ? ctx : element);
  				}
  			}
  
  		// Load images
  		} else {
  			element.src = (options.imagePath || '') + id + '.png';
  		}
  
  		return container.appendChild(element);
  	}
  });
  
  /**
   * Instance factory
   * @param {DOMElement} container
   * @param {Object} options
   */
  module.exports = function (container, options) {
  	var instance = T.create();
  	return instance.render(container, options);
  };
  
  /**
   * Create element based on 'type'
   * @param {String} type
   * @returns {DOMElement}
   */
  function createElement (type) {
  	var el;
  
  	if (type == 'svg') {
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
require('weatherSymbolElement');