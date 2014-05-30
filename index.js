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

require.register('classlist@0.4.0', function(module, exports, require) {
  var useNative = document.documentElement.classList != null;
  
  var RE_TRIM = /^\s+|\s+$/g;
  
  /**
   * Check if 'element' has class 'clas'
   * @param {Element} element
   * @param {String} clas
   * @return {Boolean}
   */
  exports.hasClass = function(element, clas) {
  	if (useNative) {
  		return element.classList.contains(clas);
  	} else {
  		var classes = element.className.replace(RE_TRIM, '').split(' ');
  		return contains(classes, clas);
  	}
  };
  
  /**
   * Check if 'element' has a class matching 'pattern'
   * @param {Element} element
   * @param {String} pattern
   * @return {String}
   */
  exports.matchClass = function(element, pattern) {
  	var classes = element.className.replace(RE_TRIM, '').split(' ')
  		, clas;
  	for (var i = 0, n = classes.length; i < n; i++) {
  		clas = classes[i];
  		if (clas.indexOf(pattern) !== -1) {
  			return clas;
  		}
  	}
  	return '';
  };
  
  /**
   * Add class 'clas' to 'element'
   * @param {Element} element
   * @param {String} clas
   */
  exports.addClass = function(element, clas) {
  	if (useNative) {
  		element.classList.add(clas);
  	} else {
  		element.className += ' ' + clas;
  	}
  };
  
  /**
   * Remove class 'clas' from 'element'
   * @param {Element} element
   * @param {String} clas
   */
  exports.removeClass = function(element, clas) {
  	var c, classes;
  	if (clas) {
  		if (useNative) {
  			element.classList.remove(clas);
  		} else {
  			var classes = element.className.replace(RE_TRIM, '').split(' ')
  				, results = [];
  			for (var i = 0, n = classes.length; i < n; i++) {
  				if (classes[i] !== clas) results.push(classes[i]);
  			}
  			element.className = results.join(' ');
  		}
  	}
  };
  
  /**
   * Toggle class 'clas' on 'element'
   * @param {Element} element
   * @param {String} clas
   */
  exports.toggleClass = function(element, clas) {
  	if (exports.hasClass(element, clas)) {
  		exports.removeClass(element, clas);
  	} else {
  		exports.addClass(element, clas);
  	}
  };
  
  /**
   * Replace class 'clasOld' with 'clasNew' on 'element'
   * @param {Element} element
   * @param {String} clas
   */
  exports.replaceClass = function(element, clasOld, clasNew) {
  	if (clasOld) {
  		if (clasNew) {
  			element.className = element.className.replace(clasOld, clasNew);
  		} else {
  			exports.removeClass(element, clasOld);
  		}
  	} else if (clasNew) {
  		exports.addClass(element, clasNew);
  	}
  };
  
  /**
   * Add class 'clas' to 'element', and remove after 'duration' milliseconds
   * @param {Element} element
   * @param {String} clas
   * @param {Number} duration
   */
  exports.addTemporaryClass = function(element, clas, duration) {
  	exports.addClass(element, clas);
  	setTimeout((function() {
  		exports.removeClass(element, clas);
  	}), duration);
  };
  
  /**
   * Determine if 'arr' contains 'item'
   * @param {Array} arr
   * @param {Object|String|Number} item
   * @returns {Boolean}
   */
  function contains (arr, item) {
  	for (var i = 0, n = arr.length; i < n; i++) {
  		if (arr[i] === item) return true;
  	}
  	return false;
  }
});
require.register('number-utils@0.2.1', function(module, exports, require) {
  exports.TWO_PI = (function() {
  	return Math.PI * 2;
  })();
  
  exports.HALF_PI = (function() {
  	return Math.PI * 0.5;
  })();
  
  /**
   * Converts a given value in degrees to radians
   * @param {Number} deg
   * @returns {Number}
   */
  exports.degreesToRadians = function(deg) {
  	return (deg * Math.PI) / 180;
  };
  
  /**
   * Converts a given value in radians to degrees
   * @param {Number} rad
   * @returns {Number}
   */
  exports.radiansToDegrees = function(rad) {
  	return (180 * rad) / Math.PI;
  };
  
  /**
   * Takes a 'value' within a given range and converts it to a number between 0 and 1.
   * @param {Number} value
   * @param {Number} minimum
   * @param {Number} maximum
   * @returns {Number}
   */
  var normalize = exports.normalize = function(value, min, max) {
  	if (min === max) {
  		return 1;
  	} else {
  		return (value - min) / (max - min);
  	}
  };
  
  /**
   * Takes a normalized value and a range and returns the actual value in that range.
   * @param {Number} normValue
   * @param {Number} minimum
   * @param {Number} maximum
   * @returns {Number}
   */
  var interpolate = exports.interpolate = function(normValue, min, max) {
  	return min + (max - min) * normValue;
  };
  
  /**
   * Takes a value in a given range (min1, max1) and finds the corresonding value in the next range (min2, max2).
   * @param {Number} value
   * @param {Number} min1
   * @param {Number} max1
   * @param {Number} min2
   * @param {Number} max2
   * @returns {Number}
   */
  var map = exports.map = function(value, min1, max1, min2, max2) {
  	return interpolate(normalize(value, min1, max1), min2, max2);
  };
  
  /**
   * Takes a value and limits it to fall within a given range.
   * @param {Number} value
   * @param {Number} minimum
   * @param {Number} maximum
   * @returns {Number}
   */
  var limit = exports.limit = function(value, min, max) {
  	return Math.min(Math.max(min, value), max);
  };
  
  /**
   * Generates a random number between a given range.
   * @param {Number} min
   * @param {Number} max
   * @returns {Number}
   */
  var rangedRandom = exports.rangedRandom = function(min, max) {
  	return map(Math.random(), 0, 1, min, max);
  };
  
  /**
   * Rounds a value to the number of specified decimal places
   * @param {Number} value
   * @param {Number} decimalPlaces
   * @returns {Number}
   */
  exports.round = function (value, decimalPlaces) {
  	var parts = value.toString().split('.');
  
  	// Skip if integer
  	if (parts.length == 1) {
  		return value;
  	} else {
  		var pre = parts[0] + parts[1].substr(0, decimalPlaces)
  			, post = parts[1].slice(decimalPlaces)
  			, postRound = Math.round(post/Math.pow(10, (post.length)))
  			, places = Math.pow(10, (decimalPlaces || 0));
  
  		return (parts[1].length <= decimalPlaces) ? value : (+pre + postRound) / places;
  	}
  };
});
require.register('primitives/FogPrimitive', function(module, exports, require) {
  var svg = require('svg@0.1.1')  
  	, Trait = require('trait@0.1.1')  
  	, TPrimitive = require('primitives/TPrimitive')  
    
  	, TFogPrimitive;  
    
  TFogPrimitive = Trait({  
  	/**  
  	 * Animate instance based on 'action'  
  	 * @param {String} action  
  	 * @param {Object} options  
  	 * @returns {Boolean}  
  	 */  
  	animate: function (action, options) {  
  		if (action == 'show') {  
  			this._opacity = 0;  
  			this._dopacity = 1;  
  			return true;  
  		} else if (action == 'hide') {  
  			this._opacity = 1;  
  			this._dopacity = -1;  
  			return true;  
  		} else if (action == 'move') {  
  			return false;  
  		}  
  	},  
    
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
  	},  
    
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
  });  
    
  module.exports = function () {  
  	return Trait.compose(  
  		TPrimitive.resolve({}),  
  		TFogPrimitive  
  	).create();  
  };
});
require.register('primitives/LightningPrimitive', function(module, exports, require) {
  var svg = require('svg@0.1.1')  
  	, Trait = require('trait@0.1.1')  
  	, TPrimitive = require('primitives/TPrimitive')  
    
  	, FILL_COLOUR = require('yr-colours@0.1.0').LIGHTNING  
    
  	, TLightningPrimitive;  
    
  TLightningPrimitive = Trait({  
  	/**  
  	 * Animate instance based on 'action'  
  	 * @param {String} action  
  	 * @param {Object} options  
  	 * @returns {Boolean}  
  	 */  
  	animate: function (action, options) {  
  		if (action == 'show') {  
  			this._opacity = 0;  
  			this._dopacity = 1;  
  			return true;  
  		} else if (action == 'hide') {  
  			this._y = this.y;  
  			this._dy = this.OFFSET;  
  			this._opacity = 1;  
  			this._dopacity = -1;  
  			return true;  
  		} else if (action == 'move') {  
  			return false;  
  		}  
  	},  
    
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
  	},  
    
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
  });  
    
  module.exports = function () {  
  	return Trait.compose(  
  		TPrimitive,  
  		TLightningPrimitive  
  	).create();  
  };
});
require.register('primitives/PrecipPrimitive', function(module, exports, require) {
  var svg = require('svg@0.1.1')
  	, colours = require('yr-colours@0.1.0')
  	, Trait = require('trait@0.1.1')
  	, TPrimitive = require('primitives/TPrimitive')
  
  	, RAIN_FILL_COLOUR = colours.RAIN
  	, SLEET_FILL_COLOUR = colours.SLEET
  	, SNOW_FILL_COLOUR = colours.SNOW
  
  	, TPrecipPrimitive;
  
  TPrecipPrimitive = Trait({
  	/**
  	 * Animate instance based on 'action'
  	 * @param {String} action
  	 * @param {Object} options
  	 * @returns {Boolean}
  	 */
  	animate: function (action, options) {
  		if (action == 'show') {
  			this._opacity = 0.75;
  			this._dopacity = 1;
  			this.animationProps = ['opacity'];
  			return true;
  		} else if (action == 'hide') {
  			this._x = this.x;
  			this._dx = this.OFFSET * 0.5;
  			this._y = this.y;
  			this._dy = this.OFFSET;
  			this._opacity = 1;
  			this._dopacity = -1;
  			this.animationProps = ['x', 'y', 'opacity'];
  			return true;
  		} else if (action == 'move') {
  			return false;
  		}
  	},
  
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
  	},
  
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
  });
  
  module.exports = function () {
  	return Trait.compose(
  		TPrimitive,
  		TPrecipPrimitive
  	).create();
  };
});
require.register('primitives/CloudPrimitive', function(module, exports, require) {
  var svg = require('svg@0.1.1')  
  	, Trait = require('trait@0.1.1')  
  	, TPrimitive = require('primitives/TPrimitive')  
    
  	, TCloudPrimitive;  
    
  TCloudPrimitive = Trait({  
  	/**  
  	 * Animate instance based on 'action'  
  	 * @param {String} action  
  	 * @param {Object} options  
  	 * @returns {Boolean}  
  	 */  
  	animate: function (action, options) {  
  		if (action == 'show') {  
  			var offset = options.flip ? this.OFFSET : -this.OFFSET;  
  			this._x = options.x - offset;  
  			this._dx = offset;  
  			this._opacity = 0;  
  			this._dopacity = 1;  
  			this.animationProps = ['x', 'opacity'];  
  			return true;  
  		} else if (action == 'hide') {  
  			var offset = this.flip ? -this.OFFSET : this.OFFSET;  
  			this._x = this.x;  
  			this._dx = offset;  
  			this._opacity = this.opacity;  
  			this._dopacity = -1;  
  			this.animationProps = ['x', 'opacity'];  
  			return true;  
  		} else if (action == 'move') {  
  			this._tint = this.tint;  
  			this._dtint = options.tint - this.tint;  
  			this.animationProps = ['tint'];  
  			return !!(this._dtint);  
  		}  
  	},  
    
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
  	},  
    
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
  	},  
  });  
    
  module.exports = function () {  
  	return Trait.compose(  
  		TPrimitive.resolve({transformCanvas: null}),  
  		TCloudPrimitive  
  	).create();  
  };
});
require.register('ease/lib/quad@0.2.0', function(module, exports, require) {
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
  var Trait = require('trait@0.1.1')
  	, easeOut = require('ease/lib/quad@0.2.0').outQuad.js
  	, easeIn = require('ease/lib/quad@0.2.0').inOutQuad.js;
  
  module.exports = Trait({
  	TWO_PI: Math.PI * 2,
  	MAX_WIDTH: 100,
  	OFFSET: 10,
  
  	type: '',
  	primitive: '',
  	duration: 0,
  	start: 0,
  	animation: '',
  	animationProps: null,
  	visible: false,
  
  	x: 0,
  	y: 0,
  	scale: 1,
  	tint: 1,
  	opacity: 1,
  	flip: false,
  	winter: false,
  	bg: '',
  
  	// Animation targets
  	_x: 0,
  	_y: 0,
  	_scale: 1,
  	_tint: 1,
  	_opacity: 1,
  	_dx: 0,
  	_dy: 0,
  	_dscale: 0,
  	_dtint: 0,
  	_dopacity: 0,
  
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
  	 * Show transition
  	 * @params {Object} options
  	 */
  	show: function (duration, options) {
  		// Skip if already visible
  		if (!this.visible && this.animate('show', options)) {
  			this.visible = true;
  			this.animation = 'show';
  			this.elapsed = 0;
  			this.duration = duration;
  			this.update(options);
  		}
  	},
  
  	/**
  	 * Hide transition
  	 * @params {Object} options
  	 */
  	hide: function (duration, options) {
  		if (this.animate('hide', options)) {
  			this.animation = 'hide';
  			this.elapsed = 0;
  			this.duration = duration;
  			this.update(options);
  		}
  	},
  
  	/**
  	 * Move transition
  	 * @params {Object} options
  	 */
  	move: function (duration, options) {
  		if (this.animate('move', options)) {
  			this.animation = 'move';
  			this.elapsed = 0;
  			this.duration = duration;
  			this.update(options);
  		}
  	},
  
  	/**
  	 * Update instance with 'options' for frame 'tick'
  	 * @param {Number} tick
  	 * @param {Object} options
  	 */
  	update: function (tick, options) {
  		if ('number' != typeof tick) {
  			options = tick;
  			tick = 0;
  		}
  
  		// Copy options
  		if (options) {
  			this.extend(options);
  		}
  
  		// Animating
  		if (this.animation) {
  			this.elapsed += tick;
  
  			var isComplete = (this.elapsed >= this.duration)
  				, ease = (this.animation.show) ? easeOut : easeIn
  				, prop;
  
  			// Calculate properties
  			for (var i = 0, n = this.animationProps.length; i < n; i++) {
  				prop = this.animationProps[i];
  				this[prop] = isComplete
  					? this['_' + prop] + this['_d' + prop]
  					: ease(this.elapsed, this['_' + prop], this['_d' + prop], this.duration);
  			}
  
  			// Animation complete
  			if (isComplete) {
  				this.duration = 0;
  				this.elapsed = 0;
  				if (this.animation == 'hide') this.visible = false;
  				this.animation = '';
  				this.animationProps = null;
  			}
  		}
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
  	 * Copy properties from 'options'
  	 * @param {Object} options
  	 */
  	extend: function (options) {
  		for (var prop in options) {
  			if (this.hasOwnProperty(prop)) this[prop] = options[prop];
  		}
  	},
  
  	renderSVG: Trait.required,
  	renderCanvas: Trait.required,
  	animate: Trait.required
  });
  
});
require.register('lodash-node/compat/collections/forEach@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var baseCreateCallback = require('lodash-node/compat/internals/baseCreateCallback@2.4.1'),
      baseEach = require('lodash-node/compat/internals/baseEach@2.4.1'),
      isArray = require('lodash-node/compat/objects/isArray@2.4.1');
  
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
    if (callback && typeof thisArg == 'undefined' && isArray(collection)) {
      var index = -1,
          length = collection.length;
  
      while (++index < length) {
        if (callback(collection[index], index, collection) === false) {
          break;
        }
      }
    } else {
      baseEach(collection, callback, thisArg);
    }
    return collection;
  }
  
  module.exports = forEach;
  
});
require.register('trait@0.1.1', function(module, exports, require) {
  var forEach = require('lodash-node/compat/collections/forEach@2.4.1')
  	, bind = require('lodash-node/compat/functions/bind@2.4.1')
  	, keys = require('lodash-node/compat/objects/keys@2.4.1')
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
require.register('yr-colours@0.1.0', function(module, exports, require) {
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
require.register('primitives/CelestialPrimitive', function(module, exports, require) {
  var svg = require('svg@0.1.1')
  	, colours = require('yr-colours@0.1.0')
  	, Trait = require('trait@0.1.1')
  	, TPrimitive = require('primitives/TPrimitive')
  
  	, SUN_RAY_COLOUR = colours.SUN_RAY
  	, SUN_CENTER_COLOUR = colours.SUN_CENTRE
  	, SUN_HORIZON_COLOUR = colours.SUN_HORIZON
  	, MOON_FILL_COLOUR = colours.MOON
  
  	, TCelestialPrimitive;
  
  TCelestialPrimitive = Trait({
  	/**
  	 * Animate instance based on 'action'
  	 * @param {String} action
  	 * @param {Object} options
  	 * @returns {Boolean}
  	 */
  	animate: function (action, options) {
  		if (action == 'show') {
  			this._y = options.y + this.OFFSET;
  			this._dy = -this.OFFSET;
  			this._opacity = 0;
  			this._dopacity = 1;
  			this.animationProps = ['y', 'opacity'];
  			return true;
  		} else if (action == 'hide') {
  			this._y = this.y;
  			this._dy = this.OFFSET;
  			this._opacity = 1;
  			this._dopacity = -1;
  			this.animationProps = ['y', 'opacity'];
  			return true;
  		} else if (action == 'move') {
  			this._y = this.y;
  			this._dy = options.y - this.y;
  			this._x = this.x;
  			this._dx = options.x - this.x;
  			this._scale = this.scale;
  			this._dscale = options.scale - this.scale;
  			this.animationProps = ['y', 'x', 'scale'];
  			return !!(this._dy || this._dx || this._dscale);
  		}
  	},
  
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
  	},
  
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
  });
  
  module.exports = function () {
  	return Trait.compose(
  		TPrimitive,
  		TCelestialPrimitive
  	).create();
  };
});
require.register('animator', function(module, exports, require) {
  var CelestialPrimitive = require('primitives/CelestialPrimitive')
  	, CloudPrimitive = require('primitives/CloudPrimitive')
  	, PrecipPrimitive = require('primitives/PrecipPrimitive')
  	, LightningPrimitive = require('primitives/LightningPrimitive')
  	, FogPrimitive = require('primitives/FogPrimitive')
  	, random = require('number-utils@0.2.1').rangedRandom
  
  	, anims = {}
  	, length = 0
  	, uid = 1
  	, last = 0
  	, running = false
  
  	, FRAME_DURATION = 2000
  	, TRANSITION_DURATION = 500;
  
  module.exports = function (ctx, frames, options) {
  	if (!ctx) return;
  
  	var anim = new Anim(uid++, ctx, frames, options);
  	anims[anim.id] = anim;
  	length++;
  	return anim;
  };
  
  function start () {
  	if (!running) {
  		running = true;
  		tick = 0;
  		window.requestAnimationFrame(onTick);
  	}
  }
  
  function stop () {
  	if (running) {
  		running = false;
  		for (var id in anims) {
  			anims[id].running = false;
  		}
  	}
  }
  
  /**
   * Handle frame tick
   * @param {Number} time
   */
  function onTick (time) {
  	var now = Date.now()
  		, tick;
  
  	// Reset
  	if (!last) last = now;
  	tick = now - last;
  
  	// Render anims
  	for (var id in anims) {
  		if (anims[id].running) render(anims[id], tick);
  	}
  
  	last = now;
  
  	// Loop
  	if (running) window.requestAnimationFrame(onTick);
  }
  
  /**
   * Render 'anim' at frame 'tick'
   * @param {Anim} anim
   * @param {Number} tick
   */
  function render (anim, tick) {
  	var time = (anim.time + tick) % anim.duration
  		, last = time - tick
  		, layer, options;
  
  	anim.time = time;
  
  	// Trigger keyframe
  	for (var keyframe in anim.timeline) {
  		if (keyframe == time
  			|| keyframe > last && time > keyframe) {
  				for (var i = 0, n = anim.timeline[keyframe].length; i < n; i++) {
  					layer = anim.timeline[keyframe][i];
  					layer.instance[layer.action](layer.duration, layer.options);
  				}
  		}
  	}
  
  	// Clear canvas
  	anim.ctx.clearRect(0, 0, anim.width, anim.height);
  
  	// Update all layers
  	for (var i = 0, n = anim.layers.length; i < n; i++) {
  		layer = anim.layers[i]
  		layer.update(tick);
  		layer.render(anim.ctx);
  	}
  }
  
  /**
   * Generate a timeline from 'frames'
   * @param {Object} frames
   * @param {Object} layers
   * @returns {Object}
   */
  function generateTimeline (frames, layers) {
  	var timeline = {}
  		, time = 0
  		, layer, prevLayer, nextLayer;
  
  	for (var i = 0, n = frames.length; i < n; i++) {
  		for (var j = 0, k = frames[i].length; j < k; j++) {
  			layer = frames[i][j];
  			// Sun/Moon/Clouds/Fog
  			if (layer.idx <= 4) {
  				// Determine if layer active in previous and next frame
  				prevLayer = contains(frames[(i == 0) ? n - 1: i - 1], layer.idx);
  				nextLayer = contains(frames[(i + 1) % n], layer.idx);
  				// Show at beginning of frame
  				generateKeyframe(timeline, time, {
  					instance: layers[layer.idx],
  					action: 'show',
  					duration: TRANSITION_DURATION,
  					options: layer
  				})
  				// Move if in next frame
  				if (nextLayer) {
  					generateKeyframe(timeline, time + FRAME_DURATION - TRANSITION_DURATION, {
  						instance: layers[layer.idx],
  						action: 'move',
  						duration: TRANSITION_DURATION,
  						options: nextLayer
  					})
  				// Hide with overlap
  				} else {
  					generateKeyframe(timeline, time + FRAME_DURATION - (TRANSITION_DURATION * 0.5), {
  						instance: layers[layer.idx],
  						action: 'hide',
  						duration: TRANSITION_DURATION,
  						options: layer
  					})
  				}
  			// Rain/Sleet/Snow/Lightning
  			} else {
  				generateKeyframe(timeline, time + (TRANSITION_DURATION * random(0.3, 0.5)), {
  					instance: layers[layer.idx],
  					action: 'show',
  					duration: TRANSITION_DURATION * random(0.4, 0.6),
  					options: layer
  				})
  				generateKeyframe(timeline, time + (TRANSITION_DURATION * random(1.3, 1.5)), {
  					instance: layers[layer.idx],
  					action: 'hide',
  					duration: TRANSITION_DURATION * random(0.4, 0.6),
  					options: layer
  				})
  				generateKeyframe(timeline, time + (TRANSITION_DURATION * random(2.3, 2.5)), {
  					instance: layers[layer.idx],
  					action: 'show',
  					duration: TRANSITION_DURATION * random(0.4, 0.6),
  					options: layer
  				})
  				generateKeyframe(timeline, time + (TRANSITION_DURATION * random(3.3, 3.5)), {
  					instance: layers[layer.idx],
  					action: 'hide',
  					duration: TRANSITION_DURATION * random(0.4, 0.6),
  					options: layer
  				})
  			}
  		}
  		time += FRAME_DURATION;
  	}
  
  	return timeline;
  }
  
  /**
   * Generate keyframe for 'timeline' at 'time' with 'data'
   * @param {Object} timeline
   * @param {time} time
   * @param {Object} data
   */
  function generateKeyframe (timeline, time, data) {
  	if (timeline[time] == null) timeline[time] = [];
  	timeline[time].push(data);
  }
  
  /**
   * Determine if 'idx' in 'layers'
   * @param {Array} layers
   * @param {Number} idx
   * @returns {Object|false}
   */
  function contains (layers, idx) {
  	for (var i = 0, n = layers.length; i < n; i++) {
  		if (layers[i].idx === idx) return layers[i];
  	}
  	return false;
  }
  
  /**
   * Constructor
   * @param {String} id
   * @param {CanvasContext} ctx
   * @param {Arrray} frames
   * @param {Object} options
   */
  function Anim (id, ctx, frames, options) {
  	this.id = id;
  	this.ctx = ctx;
  	this.frames = frames;
  	this.width = options.width;
  	this.height = options.height;
  	this.running = false;
  	this.duration = this.frames.length * FRAME_DURATION;
  	this.time = 0;
  	// Layer instances
  	this.layers = [
  		// Sun
  		CelestialPrimitive().initialize(),
  		// Moon
  		CelestialPrimitive().initialize(),
  		// Cloud back
  		CloudPrimitive().initialize(),
  		// Cloud front
  		CloudPrimitive().initialize(),
  		// Fog
  		FogPrimitive().initialize(),
  		// Raindrop 1
  		PrecipPrimitive().initialize(),
  		// Raindrop 2
  		PrecipPrimitive().initialize(),
  		// Raindrop 3
  		PrecipPrimitive().initialize(),
  		// Sleet 1
  		PrecipPrimitive().initialize(),
  		// Sleet 2
  		PrecipPrimitive().initialize(),
  		// Sleet 3
  		PrecipPrimitive().initialize(),
  		// Snowflake 1
  		PrecipPrimitive().initialize(),
  		// Snowflake 2
  		PrecipPrimitive().initialize(),
  		// Snowflake 3
  		PrecipPrimitive().initialize(),
  		// Lightning
  		LightningPrimitive().initialize()
  	]
  
  	// Store layer instance key in layer object for all frames
  	for (var i = 0, n = this.frames.length; i < n; i++) {
  		for (var j = 0, k = this.frames[i].length; j < k; j++) {
  			var layer = this.frames[i][j];
  			switch (layer.primitive) {
  				case 'sun':
  					layer.idx = 0;
  					break;
  				case 'moon':
  					layer.idx = 1;
  					break;
  				case 'cloud':
  					layer.idx = layer.flip ? 2 : 3;
  					break;
  				case 'fog':
  					layer.idx = 4;
  					break;
  				case 'raindrop':
  					layer.idx = j + 3;
  					break;
  				case 'sleet':
  					layer.idx = j + 6;
  					break;
  				case 'snowflake':
  					layer.idx = j + 9;
  					break;
  				case 'lightning':
  					layer.idx = 14;
  					break;
  			}
  		}
  	}
  	this.timeline = generateTimeline(this.frames, this.layers);
  }
  
  Anim.prototype.start = function () {
  	this.running = true;
  	start();
  };
  
  Anim.prototype.stop = function () {
  	this.running = false;
  };
  
  Anim.prototype.destroy = function () {
  
  };
});
require.register('lodash-node/compat/objects/forOwn@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var createIterator = require('lodash-node/compat/internals/createIterator@2.4.1'),
      eachIteratorOptions = require('lodash-node/compat/internals/eachIteratorOptions@2.4.1'),
      forOwnIteratorOptions = require('lodash-node/compat/internals/forOwnIteratorOptions@2.4.1');
  
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
  var forOwn = createIterator(eachIteratorOptions, forOwnIteratorOptions);
  
  module.exports = forOwn;
  
});
require.register('lodash-node/compat/internals/defaultsIteratorOptions@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var keys = require('lodash-node/compat/objects/keys@2.4.1');
  
  /** Reusable iterator options for `assign` and `defaults` */
  var defaultsIteratorOptions = {
    'args': 'object, source, guard',
    'top':
      'var args = arguments,\n' +
      '    argsIndex = 0,\n' +
      "    argsLength = typeof guard == 'number' ? 2 : args.length;\n" +
      'while (++argsIndex < argsLength) {\n' +
      '  iterable = args[argsIndex];\n' +
      '  if (iterable && objectTypes[typeof iterable]) {',
    'keys': keys,
    'loop': "if (typeof result[index] == 'undefined') result[index] = iterable[index]",
    'bottom': '  }\n}'
  };
  
  module.exports = defaultsIteratorOptions;
  
});
require.register('lodash-node/compat/objects/assign@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var createIterator = require('lodash-node/compat/internals/createIterator@2.4.1'),
      defaultsIteratorOptions = require('lodash-node/compat/internals/defaultsIteratorOptions@2.4.1');
  
  /**
   * Assigns own enumerable properties of source object(s) to the destination
   * object. Subsequent sources will overwrite property assignments of previous
   * sources. If a callback is provided it will be executed to produce the
   * assigned values. The callback is bound to `thisArg` and invoked with two
   * arguments; (objectValue, sourceValue).
   *
   * @static
   * @memberOf _
   * @type Function
   * @alias extend
   * @category Objects
   * @param {Object} object The destination object.
   * @param {...Object} [source] The source objects.
   * @param {Function} [callback] The function to customize assigning values.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {Object} Returns the destination object.
   * @example
   *
   * _.assign({ 'name': 'fred' }, { 'employer': 'slate' });
   * // => { 'name': 'fred', 'employer': 'slate' }
   *
   * var defaults = _.partialRight(_.assign, function(a, b) {
   *   return typeof a == 'undefined' ? b : a;
   * });
   *
   * var object = { 'name': 'barney' };
   * defaults(object, { 'name': 'fred', 'employer': 'slate' });
   * // => { 'name': 'barney', 'employer': 'slate' }
   */
  var assign = createIterator(defaultsIteratorOptions, {
    'top':
      defaultsIteratorOptions.top.replace(';',
        ';\n' +
        "if (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n" +
        '  var callback = baseCreateCallback(args[--argsLength - 1], args[argsLength--], 2);\n' +
        "} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n" +
        '  callback = args[--argsLength];\n' +
        '}'
      ),
    'loop': 'result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]'
  });
  
  module.exports = assign;
  
});
require.register('lodash-node/compat/internals/baseClone@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var assign = require('lodash-node/compat/objects/assign@2.4.1'),
      baseEach = require('lodash-node/compat/internals/baseEach@2.4.1'),
      forOwn = require('lodash-node/compat/objects/forOwn@2.4.1'),
      getArray = require('lodash-node/compat/internals/getArray@2.4.1'),
      isArray = require('lodash-node/compat/objects/isArray@2.4.1'),
      isNode = require('lodash-node/compat/internals/isNode@2.4.1'),
      isObject = require('lodash-node/compat/objects/isObject@2.4.1'),
      releaseArray = require('lodash-node/compat/internals/releaseArray@2.4.1'),
      slice = require('lodash-node/compat/internals/slice@2.4.1'),
      support = require('lodash-node/compat/support@2.4.1');
  
  /** Used to match regexp flags from their coerced string values */
  var reFlags = /\w*$/;
  
  /** `Object#toString` result shortcuts */
  var argsClass = '[object Arguments]',
      arrayClass = '[object Array]',
      boolClass = '[object Boolean]',
      dateClass = '[object Date]',
      funcClass = '[object Function]',
      numberClass = '[object Number]',
      objectClass = '[object Object]',
      regexpClass = '[object RegExp]',
      stringClass = '[object String]';
  
  /** Used to identify object classifications that `_.clone` supports */
  var cloneableClasses = {};
  cloneableClasses[funcClass] = false;
  cloneableClasses[argsClass] = cloneableClasses[arrayClass] =
  cloneableClasses[boolClass] = cloneableClasses[dateClass] =
  cloneableClasses[numberClass] = cloneableClasses[objectClass] =
  cloneableClasses[regexpClass] = cloneableClasses[stringClass] = true;
  
  /** Used for native method references */
  var objectProto = Object.prototype;
  
  /** Used to resolve the internal [[Class]] of values */
  var toString = objectProto.toString;
  
  /** Native method shortcuts */
  var hasOwnProperty = objectProto.hasOwnProperty;
  
  /** Used to lookup a built-in constructor by [[Class]] */
  var ctorByClass = {};
  ctorByClass[arrayClass] = Array;
  ctorByClass[boolClass] = Boolean;
  ctorByClass[dateClass] = Date;
  ctorByClass[funcClass] = Function;
  ctorByClass[objectClass] = Object;
  ctorByClass[numberClass] = Number;
  ctorByClass[regexpClass] = RegExp;
  ctorByClass[stringClass] = String;
  
  /**
   * The base implementation of `_.clone` without argument juggling or support
   * for `thisArg` binding.
   *
   * @private
   * @param {*} value The value to clone.
   * @param {boolean} [isDeep=false] Specify a deep clone.
   * @param {Function} [callback] The function to customize cloning values.
   * @param {Array} [stackA=[]] Tracks traversed source objects.
   * @param {Array} [stackB=[]] Associates clones with source counterparts.
   * @returns {*} Returns the cloned value.
   */
  function baseClone(value, isDeep, callback, stackA, stackB) {
    if (callback) {
      var result = callback(value);
      if (typeof result != 'undefined') {
        return result;
      }
    }
    // inspect [[Class]]
    var isObj = isObject(value);
    if (isObj) {
      var className = toString.call(value);
      if (!cloneableClasses[className] || (!support.nodeClass && isNode(value))) {
        return value;
      }
      var ctor = ctorByClass[className];
      switch (className) {
        case boolClass:
        case dateClass:
          return new ctor(+value);
  
        case numberClass:
        case stringClass:
          return new ctor(value);
  
        case regexpClass:
          result = ctor(value.source, reFlags.exec(value));
          result.lastIndex = value.lastIndex;
          return result;
      }
    } else {
      return value;
    }
    var isArr = isArray(value);
    if (isDeep) {
      // check for circular references and return corresponding clone
      var initedStack = !stackA;
      stackA || (stackA = getArray());
      stackB || (stackB = getArray());
  
      var length = stackA.length;
      while (length--) {
        if (stackA[length] == value) {
          return stackB[length];
        }
      }
      result = isArr ? ctor(value.length) : {};
    }
    else {
      result = isArr ? slice(value) : assign({}, value);
    }
    // add array properties assigned by `RegExp#exec`
    if (isArr) {
      if (hasOwnProperty.call(value, 'index')) {
        result.index = value.index;
      }
      if (hasOwnProperty.call(value, 'input')) {
        result.input = value.input;
      }
    }
    // exit for shallow clone
    if (!isDeep) {
      return result;
    }
    // add the source value to the stack of traversed objects
    // and associate it with its clone
    stackA.push(value);
    stackB.push(result);
  
    // recursively populate clone (susceptible to call stack limits)
    (isArr ? baseEach : forOwn)(value, function(objValue, key) {
      result[key] = baseClone(objValue, isDeep, callback, stackA, stackB);
    });
  
    if (initedStack) {
      releaseArray(stackA);
      releaseArray(stackB);
    }
    return result;
  }
  
  module.exports = baseClone;
  
});
require.register('lodash-node/compat/objects/clone@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var baseClone = require('lodash-node/compat/internals/baseClone@2.4.1'),
      baseCreateCallback = require('lodash-node/compat/internals/baseCreateCallback@2.4.1');
  
  /**
   * Creates a clone of `value`. If `isDeep` is `true` nested objects will also
   * be cloned, otherwise they will be assigned by reference. If a callback
   * is provided it will be executed to produce the cloned values. If the
   * callback returns `undefined` cloning will be handled by the method instead.
   * The callback is bound to `thisArg` and invoked with one argument; (value).
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {*} value The value to clone.
   * @param {boolean} [isDeep=false] Specify a deep clone.
   * @param {Function} [callback] The function to customize cloning values.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {*} Returns the cloned value.
   * @example
   *
   * var characters = [
   *   { 'name': 'barney', 'age': 36 },
   *   { 'name': 'fred',   'age': 40 }
   * ];
   *
   * var shallow = _.clone(characters);
   * shallow[0] === characters[0];
   * // => true
   *
   * var deep = _.clone(characters, true);
   * deep[0] === characters[0];
   * // => false
   *
   * _.mixin({
   *   'clone': _.partialRight(_.clone, function(value) {
   *     return _.isElement(value) ? value.cloneNode(false) : undefined;
   *   })
   * });
   *
   * var clone = _.clone(document.body);
   * clone.childNodes.length;
   * // => 0
   */
  function clone(value, isDeep, callback, thisArg) {
    // allows working with "Collections" methods without using their `index`
    // and `collection` arguments for `isDeep` and `callback`
    if (typeof isDeep != 'boolean' && isDeep != null) {
      thisArg = callback;
      callback = isDeep;
      isDeep = false;
    }
    return baseClone(value, isDeep, typeof callback == 'function' && baseCreateCallback(callback, thisArg, 1));
  }
  
  module.exports = clone;
  
});
require.register('lodash-node/compat/utilities/property@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
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
require.register('lodash-node/compat/internals/maxPoolSize@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  
  /** Used as the max size of the `arrayPool` and `objectPool` */
  var maxPoolSize = 40;
  
  module.exports = maxPoolSize;
  
});
require.register('lodash-node/compat/internals/releaseArray@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var arrayPool = require('lodash-node/compat/internals/arrayPool@2.4.1'),
      maxPoolSize = require('lodash-node/compat/internals/maxPoolSize@2.4.1');
  
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
require.register('lodash-node/compat/internals/isNode@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  
  /**
   * Checks if `value` is a DOM node in IE < 9.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if the `value` is a DOM node, else `false`.
   */
  function isNode(value) {
    // IE < 9 presents DOM nodes as `Object` objects except they have `toString`
    // methods that are `typeof` "string" and still can coerce nodes to strings
    return typeof value.toString != 'function' && typeof (value + '') == 'string';
  }
  
  module.exports = isNode;
  
});
require.register('lodash-node/compat/internals/arrayPool@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  
  /** Used to pool arrays and objects used internally */
  var arrayPool = [];
  
  module.exports = arrayPool;
  
});
require.register('lodash-node/compat/internals/getArray@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var arrayPool = require('lodash-node/compat/internals/arrayPool@2.4.1');
  
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
require.register('lodash-node/compat/internals/forOwnIteratorOptions@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var eachIteratorOptions = require('lodash-node/compat/internals/eachIteratorOptions@2.4.1');
  
  /** Reusable iterator options for `forIn` and `forOwn` */
  var forOwnIteratorOptions = {
    'top': 'if (!objectTypes[typeof iterable]) return result;\n' + eachIteratorOptions.top,
    'array': false
  };
  
  module.exports = forOwnIteratorOptions;
  
});
require.register('lodash-node/compat/objects/forIn@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var createIterator = require('lodash-node/compat/internals/createIterator@2.4.1'),
      eachIteratorOptions = require('lodash-node/compat/internals/eachIteratorOptions@2.4.1'),
      forOwnIteratorOptions = require('lodash-node/compat/internals/forOwnIteratorOptions@2.4.1');
  
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
  var forIn = createIterator(eachIteratorOptions, forOwnIteratorOptions, {
    'useHas': false
  });
  
  module.exports = forIn;
  
});
require.register('lodash-node/compat/internals/baseIsEqual@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var forIn = require('lodash-node/compat/objects/forIn@2.4.1'),
      getArray = require('lodash-node/compat/internals/getArray@2.4.1'),
      isArguments = require('lodash-node/compat/objects/isArguments@2.4.1'),
      isFunction = require('lodash-node/compat/objects/isFunction@2.4.1'),
      isNode = require('lodash-node/compat/internals/isNode@2.4.1'),
      objectTypes = require('lodash-node/compat/internals/objectTypes@2.4.1'),
      releaseArray = require('lodash-node/compat/internals/releaseArray@2.4.1'),
      support = require('lodash-node/compat/support@2.4.1');
  
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
      if (className != objectClass || (!support.nodeClass && (isNode(a) || isNode(b)))) {
        return false;
      }
      // in older versions of Opera, `arguments` objects have `Array` constructors
      var ctorA = !support.argsObject && isArguments(a) ? Object : a.constructor,
          ctorB = !support.argsObject && isArguments(b) ? Object : b.constructor;
  
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
require.register('lodash-node/compat/functions/createCallback@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var baseCreateCallback = require('lodash-node/compat/internals/baseCreateCallback@2.4.1'),
      baseIsEqual = require('lodash-node/compat/internals/baseIsEqual@2.4.1'),
      isObject = require('lodash-node/compat/objects/isObject@2.4.1'),
      keys = require('lodash-node/compat/objects/keys@2.4.1'),
      property = require('lodash-node/compat/utilities/property@2.4.1');
  
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
require.register('lodash-node/compat/internals/shimKeys@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var createIterator = require('lodash-node/compat/internals/createIterator@2.4.1');
  
  /**
   * A fallback implementation of `Object.keys` which produces an array of the
   * given object's own enumerable property names.
   *
   * @private
   * @type Function
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns an array of property names.
   */
  var shimKeys = createIterator({
    'args': 'object',
    'init': '[]',
    'top': 'if (!(objectTypes[typeof object])) return result',
    'loop': 'result.push(index)'
  });
  
  module.exports = shimKeys;
  
});
require.register('lodash-node/compat/objects/keys@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var isArguments = require('lodash-node/compat/objects/isArguments@2.4.1'),
      isNative = require('lodash-node/compat/internals/isNative@2.4.1'),
      isObject = require('lodash-node/compat/objects/isObject@2.4.1'),
      shimKeys = require('lodash-node/compat/internals/shimKeys@2.4.1'),
      support = require('lodash-node/compat/support@2.4.1');
  
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
    if ((support.enumPrototypes && typeof object == 'function') ||
        (support.nonEnumArgs && object.length && isArguments(object))) {
      return shimKeys(object);
    }
    return nativeKeys(object);
  };
  
  module.exports = keys;
  
});
require.register('lodash-node/compat/internals/eachIteratorOptions@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var keys = require('lodash-node/compat/objects/keys@2.4.1');
  
  /** Reusable iterator options shared by `each`, `forIn`, and `forOwn` */
  var eachIteratorOptions = {
    'args': 'collection, callback, thisArg',
    'top': "callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3)",
    'array': "typeof length == 'number'",
    'keys': keys,
    'loop': 'if (callback(iterable[index], index, collection) === false) return result'
  };
  
  module.exports = eachIteratorOptions;
  
});
require.register('lodash-node/compat/internals/iteratorTemplate@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var support = require('lodash-node/compat/support@2.4.1');
  
  /**
   * The template used to create iterator functions.
   *
   * @private
   * @param {Object} data The data object used to populate the text.
   * @returns {string} Returns the interpolated text.
   */
  var iteratorTemplate = function(obj) {
  
    var __p = 'var index, iterable = ' +
    (obj.firstArg) +
    ', result = ' +
    (obj.init) +
    ';\nif (!iterable) return result;\n' +
    (obj.top) +
    ';';
     if (obj.array) {
    __p += '\nvar length = iterable.length; index = -1;\nif (' +
    (obj.array) +
    ') {  ';
     if (support.unindexedChars) {
    __p += '\n  if (isString(iterable)) {\n    iterable = iterable.split(\'\')\n  }  ';
     }
    __p += '\n  while (++index < length) {\n    ' +
    (obj.loop) +
    ';\n  }\n}\nelse {  ';
     } else if (support.nonEnumArgs) {
    __p += '\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += \'\';\n      ' +
    (obj.loop) +
    ';\n    }\n  } else {  ';
     }
  
     if (support.enumPrototypes) {
    __p += '\n  var skipProto = typeof iterable == \'function\';\n  ';
     }
  
     if (support.enumErrorProps) {
    __p += '\n  var skipErrorProps = iterable === errorProto || iterable instanceof Error;\n  ';
     }
  
        var conditions = [];    if (support.enumPrototypes) { conditions.push('!(skipProto && index == "prototype")'); }    if (support.enumErrorProps)  { conditions.push('!(skipErrorProps && (index == "message" || index == "name"))'); }
  
     if (obj.useHas && obj.keys) {
    __p += '\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] && keys(iterable),\n      length = ownProps ? ownProps.length : 0;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n';
        if (conditions.length) {
    __p += '    if (' +
    (conditions.join(' && ')) +
    ') {\n  ';
     }
    __p +=
    (obj.loop) +
    ';    ';
     if (conditions.length) {
    __p += '\n    }';
     }
    __p += '\n  }  ';
     } else {
    __p += '\n  for (index in iterable) {\n';
        if (obj.useHas) { conditions.push("hasOwnProperty.call(iterable, index)"); }    if (conditions.length) {
    __p += '    if (' +
    (conditions.join(' && ')) +
    ') {\n  ';
     }
    __p +=
    (obj.loop) +
    ';    ';
     if (conditions.length) {
    __p += '\n    }';
     }
    __p += '\n  }    ';
     if (support.nonEnumShadows) {
    __p += '\n\n  if (iterable !== objectProto) {\n    var ctor = iterable.constructor,\n        isProto = iterable === (ctor && ctor.prototype),\n        className = iterable === stringProto ? stringClass : iterable === errorProto ? errorClass : toString.call(iterable),\n        nonEnum = nonEnumProps[className];\n      ';
     for (k = 0; k < 7; k++) {
    __p += '\n    index = \'' +
    (obj.shadowedProps[k]) +
    '\';\n    if ((!(isProto && nonEnum[index]) && hasOwnProperty.call(iterable, index))';
            if (!obj.useHas) {
    __p += ' || (!nonEnum[index] && iterable[index] !== objectProto[index])';
     }
    __p += ') {\n      ' +
    (obj.loop) +
    ';\n    }      ';
     }
    __p += '\n  }    ';
     }
  
     }
  
     if (obj.array || support.nonEnumArgs) {
    __p += '\n}';
     }
    __p +=
    (obj.bottom) +
    ';\nreturn result';
  
    return __p
  };
  
  module.exports = iteratorTemplate;
  
});
require.register('lodash-node/compat/objects/isString@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
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
require.register('lodash-node/compat/objects/isArray@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var isNative = require('lodash-node/compat/internals/isNative@2.4.1');
  
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
require.register('lodash-node/compat/objects/isArguments@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var support = require('lodash-node/compat/support@2.4.1');
  
  /** `Object#toString` result shortcuts */
  var argsClass = '[object Arguments]';
  
  /** Used for native method references */
  var objectProto = Object.prototype;
  
  /** Used to resolve the internal [[Class]] of values */
  var toString = objectProto.toString;
  
  /** Native method shortcuts */
  var hasOwnProperty = objectProto.hasOwnProperty,
      propertyIsEnumerable = objectProto.propertyIsEnumerable;
  
  /**
   * Checks if `value` is an `arguments` object.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if the `value` is an `arguments` object, else `false`.
   * @example
   *
   * (function() { return _.isArguments(arguments); })(1, 2, 3);
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  function isArguments(value) {
    return value && typeof value == 'object' && typeof value.length == 'number' &&
      toString.call(value) == argsClass || false;
  }
  // fallback for browsers that can't detect `arguments` objects by [[Class]]
  if (!support.argsClass) {
    isArguments = function(value) {
      return value && typeof value == 'object' && typeof value.length == 'number' &&
        hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee') || false;
    };
  }
  
  module.exports = isArguments;
  
});
require.register('lodash-node/compat/internals/indicatorObject@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  
  /** Used internally to indicate various things */
  var indicatorObject = {};
  
  module.exports = indicatorObject;
  
});
require.register('lodash-node/compat/utilities/identity@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
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
require.register('lodash-node/compat/support@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var isNative = require('lodash-node/compat/internals/isNative@2.4.1');
  
  /** Used to detect functions containing a `this` reference */
  var reThis = /\bthis\b/;
  
  /** `Object#toString` result shortcuts */
  var argsClass = '[object Arguments]',
      objectClass = '[object Object]';
  
  /**
   * Used for `Array` method references.
   *
   * Normally `Array.prototype` would suffice, however, using an array literal
   * avoids issues in Narwhal.
   */
  var arrayRef = [];
  
  /** Used for native method references */
  var errorProto = Error.prototype,
      objectProto = Object.prototype;
  
  /** Used to resolve the internal [[Class]] of values */
  var toString = objectProto.toString;
  
  /** Native method shortcuts */
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  
  /**
   * An object used to flag environments features.
   *
   * @static
   * @memberOf _
   * @type Object
   */
  var support = {};
  
  (function() {
    var ctor = function() { this.x = 1; },
        object = { '0': 1, 'length': 1 },
        props = [];
  
    ctor.prototype = { 'valueOf': 1, 'y': 1 };
    for (var key in new ctor) { props.push(key); }
    for (key in arguments) { }
  
    /**
     * Detect if an `arguments` object's [[Class]] is resolvable (all but Firefox < 4, IE < 9).
     *
     * @memberOf _.support
     * @type boolean
     */
    support.argsClass = toString.call(arguments) == argsClass;
  
    /**
     * Detect if `arguments` objects are `Object` objects (all but Narwhal and Opera < 10.5).
     *
     * @memberOf _.support
     * @type boolean
     */
    support.argsObject = arguments.constructor == Object && !(arguments instanceof Array);
  
    /**
     * Detect if `name` or `message` properties of `Error.prototype` are
     * enumerable by default. (IE < 9, Safari < 5.1)
     *
     * @memberOf _.support
     * @type boolean
     */
    support.enumErrorProps = propertyIsEnumerable.call(errorProto, 'message') || propertyIsEnumerable.call(errorProto, 'name');
  
    /**
     * Detect if `prototype` properties are enumerable by default.
     *
     * Firefox < 3.6, Opera > 9.50 - Opera < 11.60, and Safari < 5.1
     * (if the prototype or a property on the prototype has been set)
     * incorrectly sets a function's `prototype` property [[Enumerable]]
     * value to `true`.
     *
     * @memberOf _.support
     * @type boolean
     */
    support.enumPrototypes = propertyIsEnumerable.call(ctor, 'prototype');
  
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
  
    /**
     * Detect if `arguments` object indexes are non-enumerable
     * (Firefox < 4, IE < 9, PhantomJS, Safari < 5.1).
     *
     * @memberOf _.support
     * @type boolean
     */
    support.nonEnumArgs = key != 0;
  
    /**
     * Detect if properties shadowing those on `Object.prototype` are non-enumerable.
     *
     * In IE < 9 an objects own properties, shadowing non-enumerable ones, are
     * made non-enumerable as well (a.k.a the JScript [[DontEnum]] bug).
     *
     * @memberOf _.support
     * @type boolean
     */
    support.nonEnumShadows = !/valueOf/.test(props);
  
    /**
     * Detect if own properties are iterated after inherited properties (all but IE < 9).
     *
     * @memberOf _.support
     * @type boolean
     */
    support.ownLast = props[0] != 'x';
  
    /**
     * Detect if `Array#shift` and `Array#splice` augment array-like objects correctly.
     *
     * Firefox < 10, IE compatibility mode, and IE < 9 have buggy Array `shift()`
     * and `splice()` functions that fail to remove the last element, `value[0]`,
     * of array-like objects even though the `length` property is set to `0`.
     * The `shift()` method is buggy in IE 8 compatibility mode, while `splice()`
     * is buggy regardless of mode in IE < 9 and buggy in compatibility mode in IE 9.
     *
     * @memberOf _.support
     * @type boolean
     */
    support.spliceObjects = (arrayRef.splice.call(object, 0, 1), !object[0]);
  
    /**
     * Detect lack of support for accessing string characters by index.
     *
     * IE < 8 can't access characters by index and IE 8 can only access
     * characters by index on string literals.
     *
     * @memberOf _.support
     * @type boolean
     */
    support.unindexedChars = ('x'[0] + Object('x')[0]) != 'xx';
  
    /**
     * Detect if a DOM node's [[Class]] is resolvable (all but IE < 9)
     * and that the JS engine errors when attempting to coerce an object to
     * a string without a `toString` function.
     *
     * @memberOf _.support
     * @type boolean
     */
    try {
      support.nodeClass = !(toString.call(document) == objectClass && !({ 'toString': 0 } + ''));
    } catch(e) {
      support.nodeClass = true;
    }
  }(1));
  
  module.exports = support;
  
});
require.register('lodash-node/compat/objects/isFunction@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  
  /** `Object#toString` result shortcuts */
  var funcClass = '[object Function]';
  
  /** Used for native method references */
  var objectProto = Object.prototype;
  
  /** Used to resolve the internal [[Class]] of values */
  var toString = objectProto.toString;
  
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
  // fallback for older versions of Chrome and Safari
  if (isFunction(/x/)) {
    isFunction = function(value) {
      return typeof value == 'function' && toString.call(value) == funcClass;
    };
  }
  
  module.exports = isFunction;
  
});
require.register('lodash-node/compat/internals/baseCreateWrapper@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var baseCreate = require('lodash-node/compat/internals/baseCreate@2.4.1'),
      isObject = require('lodash-node/compat/objects/isObject@2.4.1'),
      setBindData = require('lodash-node/compat/internals/setBindData@2.4.1'),
      slice = require('lodash-node/compat/internals/slice@2.4.1');
  
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
require.register('lodash-node/compat/internals/slice@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
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
require.register('lodash-node/compat/internals/setBindData@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var isNative = require('lodash-node/compat/internals/isNative@2.4.1'),
      noop = require('lodash-node/compat/utilities/noop@2.4.1');
  
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
require.register('lodash-node/compat/utilities/noop@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
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
require.register('lodash-node/compat/internals/objectTypes@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
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
require.register('lodash-node/compat/objects/isObject@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var objectTypes = require('lodash-node/compat/internals/objectTypes@2.4.1');
  
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
require.register('lodash-node/compat/internals/isNative@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
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
require.register('lodash-node/compat/internals/baseCreate@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var isNative = require('lodash-node/compat/internals/isNative@2.4.1'),
      isObject = require('lodash-node/compat/objects/isObject@2.4.1'),
      noop = require('lodash-node/compat/utilities/noop@2.4.1');
  
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
require.register('lodash-node/compat/internals/baseBind@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var baseCreate = require('lodash-node/compat/internals/baseCreate@2.4.1'),
      isObject = require('lodash-node/compat/objects/isObject@2.4.1'),
      setBindData = require('lodash-node/compat/internals/setBindData@2.4.1'),
      slice = require('lodash-node/compat/internals/slice@2.4.1');
  
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
require.register('lodash-node/compat/internals/createWrapper@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var baseBind = require('lodash-node/compat/internals/baseBind@2.4.1'),
      baseCreateWrapper = require('lodash-node/compat/internals/baseCreateWrapper@2.4.1'),
      isFunction = require('lodash-node/compat/objects/isFunction@2.4.1'),
      slice = require('lodash-node/compat/internals/slice@2.4.1');
  
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
require.register('lodash-node/compat/functions/bind@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var createWrapper = require('lodash-node/compat/internals/createWrapper@2.4.1'),
      slice = require('lodash-node/compat/internals/slice@2.4.1'),
      support = require('lodash-node/compat/support@2.4.1');
  
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
require.register('lodash-node/compat/internals/baseCreateCallback@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var bind = require('lodash-node/compat/functions/bind@2.4.1'),
      identity = require('lodash-node/compat/utilities/identity@2.4.1'),
      setBindData = require('lodash-node/compat/internals/setBindData@2.4.1'),
      support = require('lodash-node/compat/support@2.4.1');
  
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
require.register('lodash-node/compat/internals/createIterator@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var baseCreateCallback = require('lodash-node/compat/internals/baseCreateCallback@2.4.1'),
      indicatorObject = require('lodash-node/compat/internals/indicatorObject@2.4.1'),
      isArguments = require('lodash-node/compat/objects/isArguments@2.4.1'),
      isArray = require('lodash-node/compat/objects/isArray@2.4.1'),
      isString = require('lodash-node/compat/objects/isString@2.4.1'),
      iteratorTemplate = require('lodash-node/compat/internals/iteratorTemplate@2.4.1'),
      objectTypes = require('lodash-node/compat/internals/objectTypes@2.4.1');
  
  /** Used to fix the JScript [[DontEnum]] bug */
  var shadowedProps = [
    'constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable',
    'toLocaleString', 'toString', 'valueOf'
  ];
  
  /** `Object#toString` result shortcuts */
  var arrayClass = '[object Array]',
      boolClass = '[object Boolean]',
      dateClass = '[object Date]',
      errorClass = '[object Error]',
      funcClass = '[object Function]',
      numberClass = '[object Number]',
      objectClass = '[object Object]',
      regexpClass = '[object RegExp]',
      stringClass = '[object String]';
  
  /** Used as the data object for `iteratorTemplate` */
  var iteratorData = {
    'args': '',
    'array': null,
    'bottom': '',
    'firstArg': '',
    'init': '',
    'keys': null,
    'loop': '',
    'shadowedProps': null,
    'support': null,
    'top': '',
    'useHas': false
  };
  
  /** Used for native method references */
  var errorProto = Error.prototype,
      objectProto = Object.prototype,
      stringProto = String.prototype;
  
  /** Used to resolve the internal [[Class]] of values */
  var toString = objectProto.toString;
  
  /** Native method shortcuts */
  var hasOwnProperty = objectProto.hasOwnProperty;
  
  /** Used to avoid iterating non-enumerable properties in IE < 9 */
  var nonEnumProps = {};
  nonEnumProps[arrayClass] = nonEnumProps[dateClass] = nonEnumProps[numberClass] = { 'constructor': true, 'toLocaleString': true, 'toString': true, 'valueOf': true };
  nonEnumProps[boolClass] = nonEnumProps[stringClass] = { 'constructor': true, 'toString': true, 'valueOf': true };
  nonEnumProps[errorClass] = nonEnumProps[funcClass] = nonEnumProps[regexpClass] = { 'constructor': true, 'toString': true };
  nonEnumProps[objectClass] = { 'constructor': true };
  
  (function() {
    var length = shadowedProps.length;
    while (length--) {
      var key = shadowedProps[length];
      for (var className in nonEnumProps) {
        if (hasOwnProperty.call(nonEnumProps, className) && !hasOwnProperty.call(nonEnumProps[className], key)) {
          nonEnumProps[className][key] = false;
        }
      }
    }
  }());
  
  /**
   * Creates compiled iteration functions.
   *
   * @private
   * @param {...Object} [options] The compile options object(s).
   * @param {string} [options.array] Code to determine if the iterable is an array or array-like.
   * @param {boolean} [options.useHas] Specify using `hasOwnProperty` checks in the object loop.
   * @param {Function} [options.keys] A reference to `_.keys` for use in own property iteration.
   * @param {string} [options.args] A comma separated string of iteration function arguments.
   * @param {string} [options.top] Code to execute before the iteration branches.
   * @param {string} [options.loop] Code to execute in the object loop.
   * @param {string} [options.bottom] Code to execute after the iteration branches.
   * @returns {Function} Returns the compiled function.
   */
  function createIterator() {
    // data properties
    iteratorData.shadowedProps = shadowedProps;
  
    // iterator options
    iteratorData.array = iteratorData.bottom = iteratorData.loop = iteratorData.top = '';
    iteratorData.init = 'iterable';
    iteratorData.useHas = true;
  
    // merge options into a template data object
    for (var object, index = 0; object = arguments[index]; index++) {
      for (var key in object) {
        iteratorData[key] = object[key];
      }
    }
    var args = iteratorData.args;
    iteratorData.firstArg = /^[^,]+/.exec(args)[0];
  
    // create the function factory
    var factory = Function(
        'baseCreateCallback, errorClass, errorProto, hasOwnProperty, ' +
        'indicatorObject, isArguments, isArray, isString, keys, objectProto, ' +
        'objectTypes, nonEnumProps, stringClass, stringProto, toString',
      'return function(' + args + ') {\n' + iteratorTemplate(iteratorData) + '\n}'
    );
  
    // return the compiled function
    return factory(
      baseCreateCallback, errorClass, errorProto, hasOwnProperty,
      indicatorObject, isArguments, isArray, isString, iteratorData.keys, objectProto,
      objectTypes, nonEnumProps, stringClass, stringProto, toString
    );
  }
  
  module.exports = createIterator;
  
});
require.register('lodash-node/compat/internals/baseEach@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var createIterator = require('lodash-node/compat/internals/createIterator@2.4.1'),
      eachIteratorOptions = require('lodash-node/compat/internals/eachIteratorOptions@2.4.1');
  
  /**
   * A function compiled to iterate `arguments` objects, arrays, objects, and
   * strings consistenly across environments, executing the callback for each
   * element in the collection. The callback is bound to `thisArg` and invoked
   * with three arguments; (value, index|key, collection). Callbacks may exit
   * iteration early by explicitly returning `false`.
   *
   * @private
   * @type Function
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {Array|Object|string} Returns `collection`.
   */
  var baseEach = createIterator(eachIteratorOptions);
  
  module.exports = baseEach;
  
});
require.register('lodash-node/compat/collections/map@2.4.1', function(module, exports, require) {
  /**
   * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
   * Build: `lodash modularize exports="node" -o ./compat/`
   * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <http://lodash.com/license>
   */
  var baseEach = require('lodash-node/compat/internals/baseEach@2.4.1'),
      createCallback = require('lodash-node/compat/functions/createCallback@2.4.1'),
      isArray = require('lodash-node/compat/objects/isArray@2.4.1');
  
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
        length = collection ? collection.length : 0,
        result = Array(typeof length == 'number' ? length : 0);
  
    callback = createCallback(callback, thisArg, 3);
    if (isArray(collection)) {
      while (++index < length) {
        result[index] = callback(collection[index], index, collection);
      }
    } else {
      baseEach(collection, function(value, key, collection) {
        result[++index] = callback(value, key, collection);
      });
    }
    return result;
  }
  
  module.exports = map;
  
});
require.register('weatherSymbol', function(module, exports, require) {
  // Convert with http://www.professorcloud.com/svg-to-canvas/
  
  var svg = require('svg@0.1.1')
  	, capabilities = require('capabilities@0.1.0')
  	, map = require('lodash-node/compat/collections/map@2.4.1')
  	, clone = require('lodash-node/compat/objects/clone@2.4.1')
  	, animator = require('animator')
  	, primitives = {
  			sun: require('primitives/CelestialPrimitive')(),
  			moon: require('primitives/CelestialPrimitive')(),
  			cloud: require('primitives/CloudPrimitive')(),
  			raindrop: require('primitives/PrecipPrimitive')(),
  			sleet: require('primitives/PrecipPrimitive')(),
  			snowflake: require('primitives/PrecipPrimitive')(),
  			fog: require('primitives/FogPrimitive')(),
  			lightning: require('primitives/LightningPrimitive')()
  		}
  	, formulae = {"10":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.4},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"raindrop","x":65,"y":72},{"primitive":"raindrop","x":49,"y":72},{"primitive":"raindrop","x":33,"y":68}],"11":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.4},{"primitive":"lightning","x":14,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"raindrop","x":69,"y":72},{"primitive":"raindrop","x":53,"y":72},{"primitive":"raindrop","x":37,"y":68}],"12":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.3},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"sleet","x":55,"y":72},{"primitive":"sleet","x":39,"y":68}],"13":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.3},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"snowflake","x":54,"y":69},{"primitive":"snowflake","x":36,"y":71}],"14":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.3},{"primitive":"lightning","x":19,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"snowflake","x":62,"y":69},{"primitive":"snowflake","x":44,"y":71}],"15":[{"primitive":"fog","x":4,"y":18,"tint":0.15}],"22":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.3},{"primitive":"lightning","x":21,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"raindrop","x":60,"y":72},{"primitive":"raindrop","x":44,"y":68}],"23":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.3},{"primitive":"lightning","x":19,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"sleet","x":58,"y":72},{"primitive":"sleet","x":42,"y":68}],"30":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.15},{"primitive":"lightning","x":27,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"raindrop","x":51,"y":68}],"31":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.15},{"primitive":"lightning","x":25,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"sleet","x":48,"y":68}],"32":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.4},{"primitive":"lightning","x":15,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"sleet","x":71,"y":72},{"primitive":"sleet","x":55,"y":72},{"primitive":"sleet","x":38,"y":68}],"33":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.15},{"primitive":"lightning","x":23,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"snowflake","x":49,"y":69}],"34":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.4},{"primitive":"lightning","x":8,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"snowflake","x":70,"y":69},{"primitive":"snowflake","x":51,"y":69},{"primitive":"snowflake","x":33,"y":71}],"46":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.15},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"raindrop","x":48,"y":68}],"47":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.15},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"sleet","x":45,"y":68}],"48":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.4},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"sleet","x":67,"y":72},{"primitive":"sleet","x":50,"y":68},{"primitive":"sleet","x":33,"y":68}],"49":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.15},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"snowflake","x":43,"y":69}],"50":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.4},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"snowflake","x":63,"y":69},{"primitive":"snowflake","x":44,"y":69},{"primitive":"snowflake","x":26,"y":71}],"01d":[{"primitive":"sun","x":5,"y":5}],"02d":[{"primitive":"sun","x":5,"y":5},{"primitive":"cloud","x":8,"y":56,"scale":0.6,"flip":true,"tint":0.1}],"03d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.1}],"40d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"raindrop","x":48,"y":68}],"05d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"raindrop","x":55,"y":72},{"primitive":"raindrop","x":39,"y":68}],"41d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"raindrop","x":65,"y":72},{"primitive":"raindrop","x":49,"y":72},{"primitive":"raindrop","x":33,"y":68}],"42d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"sleet","x":45,"y":68}],"07d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"sleet","x":55,"y":72},{"primitive":"sleet","x":39,"y":68}],"43d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"sleet","x":67,"y":72},{"primitive":"sleet","x":50,"y":68},{"primitive":"sleet","x":33,"y":68}],"44d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"snowflake","x":43,"y":69}],"08d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"snowflake","x":54,"y":69},{"primitive":"snowflake","x":36,"y":71}],"45d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"snowflake","x":63,"y":69},{"primitive":"snowflake","x":44,"y":69},{"primitive":"snowflake","x":26,"y":71}],"24d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"lightning","x":27,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"raindrop","x":51,"y":68}],"06d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"lightning","x":21,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"raindrop","x":60,"y":72},{"primitive":"raindrop","x":44,"y":68}],"25d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"lightning","x":14,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"raindrop","x":69,"y":72},{"primitive":"raindrop","x":53,"y":72},{"primitive":"raindrop","x":37,"y":68}],"26d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"lightning","x":25,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"sleet","x":48,"y":68}],"20d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"lightning","x":19,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"sleet","x":58,"y":72},{"primitive":"sleet","x":42,"y":68}],"27d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"lightning","x":15,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"sleet","x":71,"y":72},{"primitive":"sleet","x":55,"y":72},{"primitive":"sleet","x":38,"y":68}],"28d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"lightning","x":23,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"snowflake","x":49,"y":69}],"21d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"lightning","x":19,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"snowflake","x":62,"y":69},{"primitive":"snowflake","x":44,"y":71}],"29d":[{"primitive":"sun","x":4,"y":7,"scale":0.6},{"primitive":"lightning","x":8,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"snowflake","x":70,"y":69},{"primitive":"snowflake","x":51,"y":69},{"primitive":"snowflake","x":33,"y":71}],"01m":[{"primitive":"sun","x":5,"y":32,"winter":true}],"02m":[{"primitive":"sun","x":5,"y":32,"winter":true},{"primitive":"cloud","x":8,"y":46,"scale":0.6,"flip":true,"tint":0.1}],"03m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"cloud","x":7,"y":22,"tint":0.1}],"40m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"raindrop","x":48,"y":68}],"05m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"raindrop","x":55,"y":72},{"primitive":"raindrop","x":39,"y":68}],"41m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"raindrop","x":65,"y":72},{"primitive":"raindrop","x":49,"y":72},{"primitive":"raindrop","x":33,"y":68}],"42m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"sleet","x":45,"y":68}],"07m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"sleet","x":55,"y":72},{"primitive":"sleet","x":39,"y":68}],"43m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"sleet","x":67,"y":72},{"primitive":"sleet","x":50,"y":68},{"primitive":"sleet","x":33,"y":68}],"44m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"snowflake","x":43,"y":69}],"08m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"snowflake","x":54,"y":69},{"primitive":"snowflake","x":36,"y":71}],"45m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"snowflake","x":63,"y":69},{"primitive":"snowflake","x":44,"y":69},{"primitive":"snowflake","x":26,"y":71}],"24m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"lightning","x":27,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"raindrop","x":51,"y":68}],"06m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"lightning","x":21,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"raindrop","x":60,"y":72},{"primitive":"raindrop","x":44,"y":68}],"25m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"lightning","x":14,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"raindrop","x":69,"y":72},{"primitive":"raindrop","x":53,"y":72},{"primitive":"raindrop","x":37,"y":68}],"26m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"lightning","x":25,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"sleet","x":48,"y":68}],"20m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"lightning","x":19,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"sleet","x":58,"y":72},{"primitive":"sleet","x":42,"y":68}],"27m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"lightning","x":15,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"sleet","x":71,"y":72},{"primitive":"sleet","x":55,"y":72},{"primitive":"sleet","x":38,"y":68}],"28m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"lightning","x":23,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"snowflake","x":49,"y":69}],"21m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"lightning","x":19,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"snowflake","x":62,"y":69},{"primitive":"snowflake","x":44,"y":71}],"29m":[{"primitive":"sun","x":8,"y":20,"scale":0.6,"winter":true},{"primitive":"lightning","x":8,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"snowflake","x":70,"y":69},{"primitive":"snowflake","x":51,"y":69},{"primitive":"snowflake","x":33,"y":71}],"01n":[{"primitive":"moon","x":20,"y":20}],"02n":[{"primitive":"moon","x":20,"y":20},{"primitive":"cloud","x":8,"y":56,"scale":0.6,"flip":true,"tint":0.1}],"03n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.1}],"40n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"raindrop","x":48,"y":68}],"05n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"raindrop","x":55,"y":72},{"primitive":"raindrop","x":39,"y":68}],"41n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"raindrop","x":65,"y":72},{"primitive":"raindrop","x":49,"y":72},{"primitive":"raindrop","x":33,"y":68}],"42n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"sleet","x":45,"y":68}],"07n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"sleet","x":55,"y":72},{"primitive":"sleet","x":39,"y":68}],"43n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"sleet","x":67,"y":72},{"primitive":"sleet","x":50,"y":68},{"primitive":"sleet","x":33,"y":68}],"44n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"snowflake","x":43,"y":69}],"08n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"snowflake","x":54,"y":69},{"primitive":"snowflake","x":36,"y":71}],"45n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"snowflake","x":63,"y":69},{"primitive":"snowflake","x":44,"y":69},{"primitive":"snowflake","x":26,"y":71}],"24n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"lightning","x":27,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"raindrop","x":51,"y":68}],"06n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"lightning","x":21,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"raindrop","x":60,"y":72},{"primitive":"raindrop","x":44,"y":68}],"25n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"lightning","x":14,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"raindrop","x":69,"y":72},{"primitive":"raindrop","x":53,"y":72},{"primitive":"raindrop","x":37,"y":68}],"26n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"lightning","x":25,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"sleet","x":48,"y":68}],"20n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"lightning","x":19,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"sleet","x":58,"y":72},{"primitive":"sleet","x":42,"y":68}],"27n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"lightning","x":15,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"sleet","x":71,"y":72},{"primitive":"sleet","x":55,"y":72},{"primitive":"sleet","x":38,"y":68}],"28n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"lightning","x":23,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.3},{"primitive":"snowflake","x":49,"y":69}],"21n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"lightning","x":19,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"snowflake","x":62,"y":69},{"primitive":"snowflake","x":44,"y":71}],"29n":[{"primitive":"moon","x":18,"y":13,"scale":0.6},{"primitive":"lightning","x":8,"y":75},{"primitive":"cloud","x":7,"y":22,"tint":0.5},{"primitive":"snowflake","x":70,"y":69},{"primitive":"snowflake","x":51,"y":69},{"primitive":"snowflake","x":33,"y":71}],"04":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.1},{"primitive":"cloud","x":7,"y":22,"tint":0.15}],"09":[{"primitive":"cloud","x":5,"y":10,"scale":0.8,"flip":true,"tint":0.3},{"primitive":"cloud","x":7,"y":22,"tint":0.4},{"primitive":"raindrop","x":55,"y":72},{"primitive":"raindrop","x":39,"y":68}]}
  
  	, DEFAULT_BG = '#ffffff'
  	, SVG = 'svg'
  	, CANVAS = 'canvas'
  	, IMG = 'img';
  
  /**
   * Render symbol in 'container' with 'options'
   * @param {DOMElement} container
   * @param {Object} options
   */
  module.exports = function (container, options) {
  	if (!container) return;
  
  	options = options || {};
  	var id = options.id || container.getAttribute('data-id')
  		, animated = id && ~id.indexOf(':') && capabilities.hasCanvas
  		, type = animated
  				? CANVAS
  				: (options.type && validateType(options.type))
  					|| getDefaultType()
  		, element = createElement(type)
  		, bgContainer = getStyle(container, 'background-color')
  		, w = container.offsetWidth
  		, h = container.offsetHeight
  		// Common layer properties
  		, layerOptions = {
  				visible: true,
  				type: type,
  				width: w * capabilities.backingRatio,
  				height: h * capabilities.backingRatio,
  				scale: (type == CANVAS) ? (w/100) * capabilities.backingRatio : 1,
  				bg: (bgContainer && bgContainer !== 'rgba(0, 0, 0, 0)')
  					? bgContainer
  					: DEFAULT_BG
  			}
  		, formula, frames;
  
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
  		// Scale canvas element for hi-DPI
  		if (type == CANVAS) {
  			element.width = layerOptions.width;
  			element.height = layerOptions.height;
  		}
  
  		if (animated) {
  			frames = map(id.split(':'), function (id) {
  				return map(formulae[id], function (layer) {
  					return getLayerOptions(layer, clone(layerOptions))
  				});
  			});
  			animator(element.getContext('2d'), frames, layerOptions)
  				.start();
  
  		} else {
  			if (formula = formulae[id]) {
  				// Render layers
  				for (var i = 0, n = formula.length; i < n; i++) {
  					primitives[formula[i].primitive].update(getLayerOptions(formula[i], clone(layerOptions)));
  					primitives[formula[i].primitive].render((type == CANVAS) ? element.getContext('2d') : element);
  				}
  			}
  		}
  
  	// Load images
  	} else {
  		element.src = (options.imagePath || '') + id + '.png';
  	}
  
  	return container.appendChild(element);
  };
  
  /**
   * Update 'options' with 'layer' specific properties
   * @param {Object} layer
   * @param {Object} options
   * @returns {Object}
   */
  function getLayerOptions (layer, options) {
  	options.primitive = layer.primitive;
  	options.x = Math.round(layer.x * options.scale);
  	options.y = Math.round(layer.y * options.scale);
  	options.scale = (layer.scale || 1) * options.scale;
  	options.flip = layer.flip;
  	options.tint = layer.tint || 1;
  	options.winter = layer.winter;
  
  	return options;
  }
  
  function getLayers (layers) {
  
  }
  
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
require.register('nunjucks', function(module, exports, require) {
  // Browser bundle of nunjucks 1.0.5 (slim, only works with precompiled templates)
  
  (function() {
  var modules = {};
  (function() {
  
  // A simple class system, more documentation to come
  
  function extend(cls, name, props) {
      // This does that same thing as Object.create, but with support for IE8
      var F = function() {};
      F.prototype = cls.prototype;
      var prototype = new F();
  
      var fnTest = /xyz/.test(function(){ xyz; }) ? /\bparent\b/ : /.*/;
      props = props || {};
  
      for(var k in props) {
          var src = props[k];
          var parent = prototype[k];
  
          if(typeof parent == "function" &&
             typeof src == "function" &&
             fnTest.test(src)) {
              prototype[k] = (function (src, parent) {
                  return function() {
                      // Save the current parent method
                      var tmp = this.parent;
  
                      // Set parent to the previous method, call, and restore
                      this.parent = parent;
                      var res = src.apply(this, arguments);
                      this.parent = tmp;
  
                      return res;
                  };
              })(src, parent);
          }
          else {
              prototype[k] = src;
          }
      }
  
      prototype.typename = name;
  
      var new_cls = function() { 
          if(prototype.init) {
              prototype.init.apply(this, arguments);
          }
      };
  
      new_cls.prototype = prototype;
      new_cls.prototype.constructor = new_cls;
  
      new_cls.extend = function(name, props) {
          if(typeof name == "object") {
              props = name;
              name = "anonymous";
          }
          return extend(new_cls, name, props);
      };
  
      return new_cls;
  }
  
  modules['object'] = extend(Object, "Object", {});
  })();
  (function() {
  var ArrayProto = Array.prototype;
  var ObjProto = Object.prototype;
  
  var escapeMap = {
      '&': '&amp;',
      '"': '&quot;',
      "'": '&#39;',
      "<": '&lt;',
      ">": '&gt;'
  };
  
  var escapeRegex = /[&"'<>]/g;
  
  var lookupEscape = function(ch) {
      return escapeMap[ch];
  };
  
  var exports = modules['lib'] = {};
  
  exports.withPrettyErrors = function(path, withInternals, func) {
      try {
          return func();
      } catch (e) {
          if (!e.Update) {
              // not one of ours, cast it
              e = new exports.TemplateError(e);
          }
          e.Update(path);
  
          // Unless they marked the dev flag, show them a trace from here
          if (!withInternals) {
              var old = e;
              e = new Error(old.message);
              e.name = old.name;
          }
  
          throw e;
      }
  };
  
  exports.TemplateError = function(message, lineno, colno) {
      var err = this;
  
      if (message instanceof Error) { // for casting regular js errors
          err = message;
          message = message.name + ": " + message.message;
      } else {
          if(Error.captureStackTrace) {
              Error.captureStackTrace(err);
          }
      }
  
      err.name = 'Template render error';
      err.message = message;
      err.lineno = lineno;
      err.colno = colno;
      err.firstUpdate = true;
  
      err.Update = function(path) {
          var message = "(" + (path || "unknown path") + ")";
  
          // only show lineno + colno next to path of template
          // where error occurred
          if (this.firstUpdate) {
              if(this.lineno && this.colno) {
                  message += ' [Line ' + this.lineno + ', Column ' + this.colno + ']';
              }
              else if(this.lineno) {
                  message += ' [Line ' + this.lineno + ']';
              }
          }
  
          message += '\n ';
          if (this.firstUpdate) {
              message += ' ';
          }
  
          this.message = message + (this.message || '');
          this.firstUpdate = false;
          return this;
      };
  
      return err;
  };
  
  exports.TemplateError.prototype = Error.prototype;
  
  exports.escape = function(val) {
    return val.replace(escapeRegex, lookupEscape);
  };
  
  exports.isFunction = function(obj) {
      return ObjProto.toString.call(obj) == '[object Function]';
  };
  
  exports.isArray = Array.isArray || function(obj) {
      return ObjProto.toString.call(obj) == '[object Array]';
  };
  
  exports.isString = function(obj) {
      return ObjProto.toString.call(obj) == '[object String]';
  };
  
  exports.isObject = function(obj) {
      return ObjProto.toString.call(obj) == '[object Object]';
  };
  
  exports.groupBy = function(obj, val) {
      var result = {};
      var iterator = exports.isFunction(val) ? val : function(obj) { return obj[val]; };
      for(var i=0; i<obj.length; i++) {
          var value = obj[i];
          var key = iterator(value, i);
          (result[key] || (result[key] = [])).push(value);
      }
      return result;
  };
  
  exports.toArray = function(obj) {
      return Array.prototype.slice.call(obj);
  };
  
  exports.without = function(array) {
      var result = [];
      if (!array) {
          return result;
      }
      var index = -1,
      length = array.length,
      contains = exports.toArray(arguments).slice(1);
  
      while(++index < length) {
          if(contains.indexOf(array[index]) === -1) {
              result.push(array[index]);
          }
      }
      return result;
  };
  
  exports.extend = function(obj, obj2) {
      for(var k in obj2) {
          obj[k] = obj2[k];
      }
      return obj;
  };
  
  exports.repeat = function(char_, n) {
      var str = '';
      for(var i=0; i<n; i++) {
          str += char_;
      }
      return str;
  };
  
  exports.each = function(obj, func, context) {
      if(obj == null) {
          return;
      }
  
      if(ArrayProto.each && obj.each == ArrayProto.each) {
          obj.forEach(func, context);
      }
      else if(obj.length === +obj.length) {
          for(var i=0, l=obj.length; i<l; i++) {
              func.call(context, obj[i], i, obj);
          }
      }
  };
  
  exports.map = function(obj, func) {
      var results = [];
      if(obj == null) {
          return results;
      }
  
      if(ArrayProto.map && obj.map === ArrayProto.map) {
          return obj.map(func);
      }
  
      for(var i=0; i<obj.length; i++) {
          results[results.length] = func(obj[i], i);
      }
  
      if(obj.length === +obj.length) {
          results.length = obj.length;
      }
  
      return results;
  };
  
  exports.asyncIter = function(arr, iter, cb) {
      var i = -1;
      
      function next() {
          i++;
  
          if(i < arr.length) {
              iter(arr[i], i, next, cb);
          }
          else {
              cb();
          }
      }
  
      next();
  };
  
  exports.asyncFor = function(obj, iter, cb) {
      var keys = exports.keys(obj);
      var len = keys.length;
      var i = -1;
  
      function next() {
          i++;
          var k = keys[i];
  
          if(i < len) {
              iter(k, obj[k], i, len, next);
          }
          else {
              cb();
          }
      }
  
      next();
  };
  
  if(!Array.prototype.indexOf) {
      Array.prototype.indexOf = function(array, searchElement /*, fromIndex */) {
          if (array == null) {
              throw new TypeError();
          }
          var t = Object(array);
          var len = t.length >>> 0;
          if (len === 0) {
              return -1;
          }
          var n = 0;
          if (arguments.length > 2) {
              n = Number(arguments[2]);
              if (n != n) { // shortcut for verifying if it's NaN
                  n = 0;
              } else if (n != 0 && n != Infinity && n != -Infinity) {
                  n = (n > 0 || -1) * Math.floor(Math.abs(n));
              }
          }
          if (n >= len) {
              return -1;
          }
          var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
          for (; k < len; k++) {
              if (k in t && t[k] === searchElement) {
                  return k;
              }
          }
          return -1;
      };
  }
  
  if(!Array.prototype.map) {
      Array.prototype.map = function() {
          throw new Error("map is unimplemented for this js engine");
      };
  }
  
  exports.keys = function(obj) {
      if(Object.prototype.keys) {
          return obj.keys();
      }
      else {
          var keys = [];
          for(var k in obj) {
              if(obj.hasOwnProperty(k)) {
                  keys.push(k);
              }
          }
          return keys;
      }
  }
  })();
  (function() {
  
  var lib = modules["lib"];
  var Obj = modules["object"];
  
  // Frames keep track of scoping both at compile-time and run-time so
  // we know how to access variables. Block tags can introduce special
  // variables, for example.
  var Frame = Obj.extend({
      init: function(parent) {
          this.variables = {};
          this.parent = parent;
      },
  
      set: function(name, val) {
          // Allow variables with dots by automatically creating the
          // nested structure
          var parts = name.split('.');
          var obj = this.variables;
  
          for(var i=0; i<parts.length - 1; i++) {
              var id = parts[i];
  
              if(!obj[id]) {
                  obj[id] = {};
              }
              obj = obj[id];
          }
  
          obj[parts[parts.length - 1]] = val;
      },
  
      get: function(name) {
          var val = this.variables[name];
          if(val !== undefined && val !== null) {
              return val;
          }
          return null;
      },
  
      lookup: function(name) {
          var p = this.parent;
          var val = this.variables[name];
          if(val !== undefined && val !== null) {
              return val;
          }
          return p && p.lookup(name);
      },
  
      push: function() {
          return new Frame(this);
      },
  
      pop: function() {
          return this.parent;
      }
  });
  
  function makeMacro(argNames, kwargNames, func) {
      return function() {
          var argCount = numArgs(arguments);
          var args;
          var kwargs = getKeywordArgs(arguments);
  
          if(argCount > argNames.length) {
              args = Array.prototype.slice.call(arguments, 0, argNames.length);
  
              // Positional arguments that should be passed in as
              // keyword arguments (essentially default values)
              var vals = Array.prototype.slice.call(arguments, args.length, argCount);
              for(var i=0; i<vals.length; i++) {
                  if(i < kwargNames.length) {
                      kwargs[kwargNames[i]] = vals[i];
                  }
              }
  
              args.push(kwargs);
          }
          else if(argCount < argNames.length) {
              args = Array.prototype.slice.call(arguments, 0, argCount);
  
              for(var i=argCount; i<argNames.length; i++) {
                  var arg = argNames[i];
  
                  // Keyword arguments that should be passed as
                  // positional arguments, i.e. the caller explicitly
                  // used the name of a positional arg
                  args.push(kwargs[arg]);
                  delete kwargs[arg];
              }
  
              args.push(kwargs);
          }
          else {
              args = arguments;
          }
  
          return func.apply(this, args);
      };
  }
  
  function makeKeywordArgs(obj) {
      obj.__keywords = true;
      return obj;
  }
  
  function getKeywordArgs(args) {
      var len = args.length;
      if(len) {
          var lastArg = args[len - 1];
          if(lastArg && lastArg.hasOwnProperty('__keywords')) {
              return lastArg;
          }
      }
      return {};
  }
  
  function numArgs(args) {
      var len = args.length;
      if(len === 0) {
          return 0;
      }
  
      var lastArg = args[len - 1];
      if(lastArg && lastArg.hasOwnProperty('__keywords')) {
          return len - 1;
      }
      else {
          return len;
      }
  }
  
  // A SafeString object indicates that the string should not be
  // autoescaped. This happens magically because autoescaping only
  // occurs on primitive string objects.
  function SafeString(val) {
      if(typeof val != 'string') {
          return val;
      }
  
      this.val = val;
  }
  
  SafeString.prototype = Object.create(String.prototype);
  SafeString.prototype.valueOf = function() {
      return this.val;
  };
  SafeString.prototype.toString = function() {
      return this.val;
  };
  
  function copySafeness(dest, target) {
      if(dest instanceof SafeString) {
          return new SafeString(target);
      }
      return target.toString();
  }
  
  function markSafe(val) {
      var type = typeof val;
  
      if(type === 'string') {
          return new SafeString(val);
      }
      else if(type !== 'function') {
          return val;
      }
      else {
          return function() {
              var ret = val.apply(this, arguments);
  
              if(typeof ret === 'string') {
                  return new SafeString(ret);
              }
  
              return ret;
          };
      }
  }
  
  function suppressValue(val, autoescape) {
      val = (val !== undefined && val !== null) ? val : "";
  
      if(autoescape && typeof val === "string") {
          val = lib.escape(val);
      }
  
      return val;
  }
  
  function memberLookup(obj, val) {
      obj = obj || {};
  
      if(typeof obj[val] === 'function') {
          return function() {
              return obj[val].apply(obj, arguments);
          };
      }
  
      return obj[val];
  }
  
  function callWrap(obj, name, args) {
      if(!obj) {
          throw new Error('Unable to call `' + name + '`, which is undefined or falsey');
      }
      else if(typeof obj !== 'function') {
          throw new Error('Unable to call `' + name + '`, which is not a function');
      }
  
      return obj.apply(this, args);
  }
  
  function contextOrFrameLookup(context, frame, name) {
      var val = frame.lookup(name);
      return (val !== undefined && val !== null) ?
          val :
          context.lookup(name);
  }
  
  function handleError(error, lineno, colno) {
      if(error.lineno) {
          return error;
      }
      else {
          return new lib.TemplateError(error, lineno, colno);
      }
  }
  
  function asyncEach(arr, dimen, iter, cb) {
      if(lib.isArray(arr)) {
          var len = arr.length;
  
          lib.asyncIter(arr, function(item, i, next) {
              switch(dimen) {
              case 1: iter(item, i, len, next); break;
              case 2: iter(item[0], item[1], i, len, next); break;
              case 3: iter(item[0], item[1], item[2], i, len, next); break;
              default:
                  item.push(i, next);
                  iter.apply(this, item);
              }
          }, cb);
      }
      else {
          lib.asyncFor(arr, function(key, val, i, len, next) {
              iter(key, val, i, len, next);
          }, cb);
      }
  }
  
  function asyncAll(arr, dimen, func, cb) {
      var finished = 0;
      var len;
      var outputArr;
  
      function done(i, output) {
          finished++;
          outputArr[i] = output;
  
          if(finished == len) {
              cb(null, outputArr.join(''));
          }
      }
  
      if(lib.isArray(arr)) {
          len = arr.length;
          outputArr = new Array(len);
  
          if(len == 0) {
              cb(null, '');
          }
          else {
              for(var i=0; i<arr.length; i++) {
                  var item = arr[i];
  
                  switch(dimen) {
                  case 1: func(item, i, len, done); break;
                  case 2: func(item[0], item[1], i, len, done); break;
                  case 3: func(item[0], item[1], item[2], i, len, done); break;
                  default:
                      item.push(i, done);
                      func.apply(this, item);
                  }
              }
          }
      }
      else {
          var keys = lib.keys(arr);
          len = keys.length;
          outputArr = new Array(len);
  
          if(len == 0) {
              cb(null, '');
          }
          else {
              for(var i=0; i<keys.length; i++) {
                  var k = keys[i];
                  func(k, arr[k], i, len, done);
              }
          }
      }
  }
  
  modules['runtime'] = {
      Frame: Frame,
      makeMacro: makeMacro,
      makeKeywordArgs: makeKeywordArgs,
      numArgs: numArgs,
      suppressValue: suppressValue,
      memberLookup: memberLookup,
      contextOrFrameLookup: contextOrFrameLookup,
      callWrap: callWrap,
      handleError: handleError,
      isArray: lib.isArray,
      keys: lib.keys,
      SafeString: SafeString,
      copySafeness: copySafeness,
      markSafe: markSafe,
      asyncEach: asyncEach,
      asyncAll: asyncAll
  };
  })();
  (function() {
  var Obj = modules["object"];
  var lib = modules["lib"];
  
  var Loader = Obj.extend({
      on: function(name, func) {
          this.listeners = this.listeners || {};
          this.listeners[name] = this.listeners[name] || [];
          this.listeners[name].push(func);
      },
  
      emit: function(name /*, arg1, arg2, ...*/) {
          var args = Array.prototype.slice.call(arguments, 1);
  
          if(this.listeners && this.listeners[name]) {
              lib.each(this.listeners[name], function(listener) {
                  listener.apply(null, args);
              });
          }
      }
  });
  
  modules['loader'] = Loader;
  })();
  (function() {
  var Loader = modules["loader"];
  
  var WebLoader = Loader.extend({
      init: function(baseURL, neverUpdate) {
          // It's easy to use precompiled templates: just include them
          // before you configure nunjucks and this will automatically
          // pick it up and use it
          this.precompiled = window.nunjucksPrecompiled || {};
  
          this.baseURL = baseURL || '';
          this.neverUpdate = neverUpdate;
      },
  
      getSource: function(name) {
          if(this.precompiled[name]) {
              return {
                  src: { type: "code",
                         obj: this.precompiled[name] },
                  path: name
              };
          }
          else {
              var src = this.fetch(this.baseURL + '/' + name);
              if(!src) {
                  return null;
              }
  
              return { src: src,
                       path: name,
                       noCache: !this.neverUpdate };
          }
      },
  
      fetch: function(url, callback) {
          // Only in the browser please
          var ajax;
          var loading = true;
          var src;
  
          if(window.XMLHttpRequest) { // Mozilla, Safari, ...
              ajax = new XMLHttpRequest();
          }
          else if(window.ActiveXObject) { // IE 8 and older
              ajax = new ActiveXObject("Microsoft.XMLHTTP");
          }
  
          ajax.onreadystatechange = function() {
              if(ajax.readyState === 4 && (ajax.status === 0 || ajax.status === 200) && loading) {
                  loading = false;
                  src = ajax.responseText;
              }
          };
  
          url += (url.indexOf('?') === -1 ? '?' : '&') + 's=' +
                 (new Date().getTime());
  
          // Synchronous because this API shouldn't be used in
          // production (pre-load compiled templates instead)
          ajax.open('GET', url, false);
          ajax.send();
  
          return src;
      }
  });
  
  modules['web-loaders'] = {
      WebLoader: WebLoader
  };
  })();
  (function() {
  if(typeof window === 'undefined' || window !== this) {
      modules['loaders'] = modules["node-loaders"];
  }
  else {
      modules['loaders'] = modules["web-loaders"];
  }
  })();
  (function() {
  var lib = modules["lib"];
  var r = modules["runtime"];
  
  var filters = {
      abs: function(n) {
          return Math.abs(n);
      },
  
      batch: function(arr, linecount, fill_with) {
          var res = [];
          var tmp = [];
  
          for(var i=0; i<arr.length; i++) {
              if(i % linecount === 0 && tmp.length) {
                  res.push(tmp);
                  tmp = [];
              }
  
              tmp.push(arr[i]);
          }
  
          if(tmp.length) {
              if(fill_with) {
                  for(var i=tmp.length; i<linecount; i++) {
                      tmp.push(fill_with);
                  }
              }
  
              res.push(tmp);
          }
  
          return res;
      },
  
      capitalize: function(str) {
          var ret = str.toLowerCase();
          return r.copySafeness(str, ret.charAt(0).toUpperCase() + ret.slice(1));
      },
  
      center: function(str, width) {
          width = width || 80;
  
          if(str.length >= width) {
              return str;
          }
  
          var spaces = width - str.length;
          var pre = lib.repeat(" ", spaces/2 - spaces % 2);
          var post = lib.repeat(" ", spaces/2);
          return r.copySafeness(str, pre + str + post);
      },
  
      'default': function(val, def) {
          return val ? val : def;
      },
  
      dictsort: function(val, case_sensitive, by) {
          if (!lib.isObject(val)) {
              throw new lib.TemplateError("dictsort filter: val must be an object");
          }
  
          var array = [];
          for (var k in val) {
              // deliberately include properties from the object's prototype
              array.push([k,val[k]]);
          }
  
          var si;
          if (by === undefined || by === "key") {
              si = 0;
          } else if (by === "value") {
              si = 1;
          } else {
              throw new lib.TemplateError(
                  "dictsort filter: You can only sort by either key or value");
          }
  
          array.sort(function(t1, t2) {
              var a = t1[si];
              var b = t2[si];
  
              if (!case_sensitive) {
                  if (lib.isString(a)) {
                      a = a.toUpperCase();
                  }
                  if (lib.isString(b)) {
                      b = b.toUpperCase();
                  }
              }
  
              return a > b ? 1 : (a == b ? 0 : -1);
          });
  
          return array;
      },
  
      escape: function(str) {
          if(typeof str == 'string' ||
             str instanceof r.SafeString) {
              return lib.escape(str);
          }
          return str;
      },
  
      safe: function(str) {
          return r.markSafe(str);
      },
  
      first: function(arr) {
          return arr[0];
      },
  
      groupby: function(arr, attr) {
          return lib.groupBy(arr, attr);
      },
  
      indent: function(str, width, indentfirst) {
          width = width || 4;
          var res = '';
          var lines = str.split('\n');
          var sp = lib.repeat(' ', width);
  
          for(var i=0; i<lines.length; i++) {
              if(i == 0 && !indentfirst) {
                  res += lines[i] + '\n';
              }
              else {
                  res += sp + lines[i] + '\n';
              }
          }
  
          return r.copySafeness(str, res);
      },
  
      join: function(arr, del, attr) {
          del = del || '';
  
          if(attr) {
              arr = lib.map(arr, function(v) {
                  return v[attr];
              });
          }
  
          return arr.join(del);
      },
  
      last: function(arr) {
          return arr[arr.length-1];
      },
  
      length: function(arr) {
          return arr.length;
      },
  
      list: function(val) {
          if(lib.isString(val)) {
              return val.split('');
          }
          else if(lib.isObject(val)) {
              var keys = [];
  
              if(Object.keys) {
                  keys = Object.keys(val);
              }
              else {
                  for(var k in val) {
                      keys.push(k);
                  }
              }
  
              return lib.map(keys, function(k) {
                  return { key: k,
                           value: val[k] };
              });
          }
          else {
              throw new lib.TemplateError("list filter: type not iterable");
          }
      },
  
      lower: function(str) {
          return str.toLowerCase();
      },
  
      random: function(arr) {
          return arr[Math.floor(Math.random() * arr.length)];
      },
  
      replace: function(str, old, new_, maxCount) {
          var res = str;
          var last = res;
          var count = 1;
          res = res.replace(old, new_);
  
          while(last != res) {
              if(count >= maxCount) {
                  break;
              }
  
              last = res;
              res = res.replace(old, new_);
              count++;
          }
  
          return r.copySafeness(str, res);
      },
  
      reverse: function(val) {
          var arr;
          if(lib.isString(val)) {
              arr = filters.list(val);
          }
          else {
              // Copy it
              arr = lib.map(val, function(v) { return v; });
          }
  
          arr.reverse();
  
          if(lib.isString(val)) {
              return r.copySafeness(val, arr.join(''));
          }
          return arr;
      },
  
      round: function(val, precision, method) {
          precision = precision || 0;
          var factor = Math.pow(10, precision);
          var rounder;
  
          if(method == 'ceil') {
              rounder = Math.ceil;
          }
          else if(method == 'floor') {
              rounder = Math.floor;
          }
          else {
              rounder = Math.round;
          }
  
          return rounder(val * factor) / factor;
      },
  
      slice: function(arr, slices, fillWith) {
          var sliceLength = Math.floor(arr.length / slices);
          var extra = arr.length % slices;
          var offset = 0;
          var res = [];
  
          for(var i=0; i<slices; i++) {
              var start = offset + i * sliceLength;
              if(i < extra) {
                  offset++;
              }
              var end = offset + (i + 1) * sliceLength;
  
              var slice = arr.slice(start, end);
              if(fillWith && i >= extra) {
                  slice.push(fillWith);
              }
              res.push(slice);
          }
  
          return res;
      },
  
      sort: function(arr, reverse, caseSens, attr) {
          // Copy it
          arr = lib.map(arr, function(v) { return v; });
  
          arr.sort(function(a, b) {
              var x, y;
  
              if(attr) {
                  x = a[attr];
                  y = b[attr];
              }
              else {
                  x = a;
                  y = b;
              }
  
              if(!caseSens && lib.isString(x) && lib.isString(y)) {
                  x = x.toLowerCase();
                  y = y.toLowerCase();
              }
  
              if(x < y) {
                  return reverse ? 1 : -1;
              }
              else if(x > y) {
                  return reverse ? -1: 1;
              }
              else {
                  return 0;
              }
          });
  
          return arr;
      },
  
      string: function(obj) {
          return r.copySafeness(obj, obj);
      },
  
      title: function(str) {
          var words = str.split(' ');
          for(var i = 0; i < words.length; i++) {
              words[i] = filters.capitalize(words[i]);
          }
          return r.copySafeness(str, words.join(' '));
      },
  
      trim: function(str) {
          return r.copySafeness(str, str.replace(/^\s*|\s*$/g, ''));
      },
  
      truncate: function(input, length, killwords, end) {
          var orig = input;
          length = length || 255;
  
          if (input.length <= length)
              return input;
  
          if (killwords) {
              input = input.substring(0, length);
          } else {
              var idx = input.lastIndexOf(' ', length);
              if(idx === -1) {
                  idx = length;
              }
  
              input = input.substring(0, idx);
          }
  
          input += (end !== undefined && end !== null) ? end : '...';
          return r.copySafeness(orig, input);
      },
  
      upper: function(str) {
          return str.toUpperCase();
      },
  
      urlencode: function(obj) {
          var enc = encodeURIComponent;
          if (lib.isString(obj)) {
              return enc(obj);
          } else {
              var parts;
              if (lib.isArray(obj)) {
                  parts = obj.map(function(item) {
                      return enc(item[0]) + '=' + enc(item[1]);
                  })
              } else {
                  parts = [];
                  for (var k in obj) {
                      if (obj.hasOwnProperty(k)) {
                          parts.push(enc(k) + '=' + enc(obj[k]));
                      }
                  }
              }
              return parts.join('&');
          }
      },
  
      urlize: function(str, length, nofollow) {
          if (isNaN(length)) length = Infinity;
  
          var noFollowAttr = (nofollow === true ? ' rel="nofollow"' : '');
  
          // For the jinja regexp, see
          // https://github.com/mitsuhiko/jinja2/blob/f15b814dcba6aa12bc74d1f7d0c881d55f7126be/jinja2/utils.py#L20-L23
          var puncRE = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/;
          // from http://blog.gerv.net/2011/05/html5_email_address_regexp/
          var emailRE = /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i;
          var httpHttpsRE = /^https?:\/\/.*$/;
          var wwwRE = /^www\./;
          var tldRE = /\.(?:org|net|com)(?:\:|\/|$)/;
  
          var words = str.split(/\s+/).filter(function(word) {
            // If the word has no length, bail. This can happen for str with
            // trailing whitespace.
            return word && word.length;
          }).map(function(word) {
            var matches = word.match(puncRE);
  
            var possibleUrl = matches && matches[1] || word;
  
            // url that starts with http or https
            if (httpHttpsRE.test(possibleUrl))
              return '<a href="' + possibleUrl + '"' + noFollowAttr + '>' + possibleUrl.substr(0, length) + '</a>';
  
            // url that starts with www.
            if (wwwRE.test(possibleUrl))
              return '<a href="http://' + possibleUrl + '"' + noFollowAttr + '>' + possibleUrl.substr(0, length) + '</a>';
  
            // an email address of the form username@domain.tld
            if (emailRE.test(possibleUrl))
              return '<a href="mailto:' + possibleUrl + '">' + possibleUrl + '</a>';
  
            // url that ends in .com, .org or .net that is not an email address
            if (tldRE.test(possibleUrl))
              return '<a href="http://' + possibleUrl + '"' + noFollowAttr + '>' + possibleUrl.substr(0, length) + '</a>';
  
            return possibleUrl;
  
          });
  
          return words.join(' ');
      },
  
      wordcount: function(str) {
          var words = (str) ? str.match(/\w+/g) : null;
          return (words) ? words.length : null;
      },
  
      'float': function(val, def) {
          var res = parseFloat(val);
          return isNaN(res) ? def : res;
      },
  
      'int': function(val, def) {
          var res = parseInt(val, 10);
          return isNaN(res) ? def : res;
      }
  };
  
  // Aliases
  filters.d = filters['default'];
  filters.e = filters.escape;
  
  modules['filters'] = filters;
  })();
  (function() {
  
  function cycler(items) {
      var index = -1;
      var current = null;
  
      return {
          reset: function() {
              index = -1;
              current = null;
          },
  
          next: function() {
              index++;
              if(index >= items.length) {
                  index = 0;
              }
  
              current = items[index];
              return current;
          }
      };
  
  }
  
  function joiner(sep) {
      sep = sep || ',';
      var first = true;
  
      return function() {
          var val = first ? '' : sep;
          first = false;
          return val;
      };
  }
  
  var globals = {
      range: function(start, stop, step) {
          if(!stop) {
              stop = start;
              start = 0;
              step = 1;
          }
          else if(!step) {
              step = 1;
          }
  
          var arr = [];
          for(var i=start; i<stop; i+=step) {
              arr.push(i);
          }
          return arr;
      },
  
      // lipsum: function(n, html, min, max) {
      // },
  
      cycler: function() {
          return cycler(Array.prototype.slice.call(arguments));
      },
  
      joiner: function(sep) {
          return joiner(sep);
      }
  }
  
  modules['globals'] = globals;
  })();
  (function() {
  var lib = modules["lib"];
  var Obj = modules["object"];
  var lexer = modules["lexer"];
  var compiler = modules["compiler"];
  var builtin_filters = modules["filters"];
  var builtin_loaders = modules["loaders"];
  var runtime = modules["runtime"];
  var globals = modules["globals"];
  var Frame = runtime.Frame;
  
  var Environment = Obj.extend({
      init: function(loaders, opts) {
          // The dev flag determines the trace that'll be shown on errors.
          // If set to true, returns the full trace from the error point,
          // otherwise will return trace starting from Template.render
          // (the full trace from within nunjucks may confuse developers using
          //  the library)
          // defaults to false
          opts = opts || {};
          this.dev = !!opts.dev;
  
          // The autoescape flag sets global autoescaping. If true,
          // every string variable will be escaped by default.
          // If false, strings can be manually escaped using the `escape` filter.
          // defaults to false
          this.autoesc = !!opts.autoescape;
  
          if(!loaders) {
              // The filesystem loader is only available client-side
              if(builtin_loaders.FileSystemLoader) {
                  this.loaders = [new builtin_loaders.FileSystemLoader('views')];
              }
              else {
                  this.loaders = [new builtin_loaders.WebLoader('/views')];
              }
          }
          else {
              this.loaders = lib.isArray(loaders) ? loaders : [loaders];
          }
  
          this.initCache();
          this.filters = {};
          this.asyncFilters = [];
          this.extensions = {};
          this.extensionsList = [];
  
          if(opts.tags) {
              lexer.setTags(opts.tags);
          }
  
          for(var name in builtin_filters) {
              this.addFilter(name, builtin_filters[name]);
          }
      },
  
      initCache: function() {
          // Caching and cache busting
          var cache = {};
  
          lib.each(this.loaders, function(loader) {
              if(typeof loader.on === 'function'){
                  loader.on('update', function(template) {
                      cache[template] = null;
                  });
              }
          });
  
          this.cache = cache;
      },
  
      addExtension: function(name, extension) {
          extension._name = name;
          this.extensions[name] = extension;
          this.extensionsList.push(extension);
      },
  
      getExtension: function(name) {
          return this.extensions[name];
      },
  
      addFilter: function(name, func, async) {
          var wrapped = func;
  
          if(async) {
              this.asyncFilters.push(name);
          }
          this.filters[name] = wrapped;
      },
  
      getFilter: function(name) {
          if(!this.filters[name]) {
              throw new Error('filter not found: ' + name);
          }
          return this.filters[name];
      },
  
      getTemplate: function(name, eagerCompile, cb) {
          if(name && name.raw) {
              // this fixes autoescape for templates referenced in symbols
              name = name.raw;
          }
  
          if(lib.isFunction(eagerCompile)) {
              cb = eagerCompile;
              eagerCompile = false;
          }
  
          if(typeof name !== 'string') {
              throw new Error('template names must be a string: ' + name);
          }
  
          var tmpl = this.cache[name];
  
          if(tmpl) {
              if(eagerCompile) {
                  tmpl.compile();
              }
  
              if(cb) {
                  cb(null, tmpl);
              }
              else {
                  return tmpl;
              }
          } else {
              var syncResult;
  
              lib.asyncIter(this.loaders, function(loader, i, next, done) {
                  function handle(src) {
                      if(src) {
                          done(src);
                      }
                      else {
                          next();
                      }
                  }
  
                  if(loader.async) {
                      loader.getSource(name, function(err, src) {
                          if(err) { throw err; }
                          handle(src);
                      });
                  }
                  else {
                      handle(loader.getSource(name));
                  }
              }, function(info) {
                  if(!info) {
                      var err = new Error('template not found: ' + name);
                      if(cb) {
                          cb(err);
                      }
                      else {
                          throw err;
                      }
                  }
                  else {
                      var tmpl = new Template(info.src, this,
                                              info.path, eagerCompile);
  
                      if(!info.noCache) {
                          this.cache[name] = tmpl;
                      }
  
                      if(cb) {
                          cb(null, tmpl);
                      }
                      else {
                          syncResult = tmpl;
                      }
                  }
              }.bind(this));
  
              return syncResult;
          }
      },
  
      express: function(app) {
          var env = this;
  
          function NunjucksView(name, opts) {
              this.name = name;
              this.path = name;
          }
  
          NunjucksView.prototype.render = function(opts, cb) {
            env.render(this.name, opts, cb);
          };
  
          app.set('view', NunjucksView);
      },
  
      render: function(name, ctx, cb) {
          if(lib.isFunction(ctx)) {
              cb = ctx;
              ctx = null;
          }
  
          // We support a synchronous API to make it easier to migrate
          // existing code to async. This works because if you don't do
          // anything async work, the whole thing is actually run
          // synchronously.
          var syncResult = null;
  
          this.getTemplate(name, function(err, tmpl) {
              if(err && cb) {
                  cb(err);
              }
              else if(err) {
                  throw err;
              }
              else {
                  tmpl.render(ctx, cb || function(err, res) {
                      if(err) { throw err; }
                      syncResult = res;
                  });
              }
          });
  
          return syncResult;
      },
  
      renderString: function(src, ctx, cb) {
          var tmpl = new Template(src, this);
          return tmpl.render(ctx, cb);
      }
  });
  
  var Context = Obj.extend({
      init: function(ctx, blocks) {
          this.ctx = ctx;
          this.blocks = {};
          this.exported = [];
  
          for(var name in blocks) {
              this.addBlock(name, blocks[name]);
          }
      },
  
      lookup: function(name) {
          // This is one of the most called functions, so optimize for
          // the typical case where the name isn't in the globals
          if(name in globals && !(name in this.ctx)) {
              return globals[name];
          }
          else {
              return this.ctx[name];
          }
      },
  
      setVariable: function(name, val) {
          this.ctx[name] = val;
      },
  
      getVariables: function() {
          return this.ctx;
      },
  
      addBlock: function(name, block) {
          this.blocks[name] = this.blocks[name] || [];
          this.blocks[name].push(block);
      },
  
      getBlock: function(name) {
          if(!this.blocks[name]) {
              throw new Error('unknown block "' + name + '"');
          }
  
          return this.blocks[name][0];
      },
  
      getSuper: function(env, name, block, frame, runtime, cb) {
          var idx = (this.blocks[name] || []).indexOf(block);
          var blk = this.blocks[name][idx + 1];
          var context = this;
  
          if(idx == -1 || !blk) {
              throw new Error('no super block available for "' + name + '"');
          }
  
          blk(env, context, frame, runtime, cb);
      },
  
      addExport: function(name) {
          this.exported.push(name);
      },
  
      getExported: function() {
          var exported = {};
          for(var i=0; i<this.exported.length; i++) {
              var name = this.exported[i];
              exported[name] = this.ctx[name];
          }
          return exported;
      }
  });
  
  var Template = Obj.extend({
      init: function (src, env, path, eagerCompile) {
          this.env = env || new Environment();
  
          if(lib.isObject(src)) {
              switch(src.type) {
              case 'code': this.tmplProps = src.obj; break;
              case 'string': this.tmplStr = src.obj; break;
              }
          }
          else if(lib.isString(src)) {
              this.tmplStr = src;
          }
          else {
              throw new Error("src must be a string or an object describing " +
                              "the source");
          }
  
          this.path = path;
  
          if(eagerCompile) {
              lib.withPrettyErrors(this.path,
                                   this.env.dev,
                                   this._compile.bind(this));
          }
          else {
              this.compiled = false;
          }
      },
  
      render: function(ctx, frame, cb) {
          if (typeof ctx === 'function') {
              cb = ctx;
              ctx = {};
          }
          else if (typeof frame === 'function') {
              cb = frame;
              frame = null;
          }
  
          return lib.withPrettyErrors(this.path, this.env.dev, function() {
              this.compile();
  
              var context = new Context(ctx || {}, this.blocks);
              var syncResult = null;
  
              this.rootRenderFunc(this.env,
                                  context,
                                  frame || new Frame(),
                                  runtime,
                                  cb || function(err, res) {
                                      if(err) { throw err; }
                                      syncResult = res;
                                  });
  
              return syncResult;
          }.bind(this));
      },
  
      getExported: function(cb) {
          this.compile();
  
          // Run the rootRenderFunc to populate the context with exported vars
          var context = new Context({}, this.blocks);
          this.rootRenderFunc(this.env,
                              context,
                              new Frame(),
                              runtime,
                              function() {
                                  cb(null, context.getExported());
                              });
      },
  
      compile: function() {
          if(!this.compiled) {
              this._compile();
          }
      },
  
      _compile: function() {
          var props;
  
          if(this.tmplProps) {
              props = this.tmplProps;
          }
          else {
              var source = compiler.compile(this.tmplStr,
                                            this.env.asyncFilters,
                                            this.env.extensionsList,
                                            this.path);
              var func = new Function(source);
              props = func();
          }
  
          this.blocks = this._getBlocks(props);
          this.rootRenderFunc = props.root;
          this.compiled = true;
      },
  
      _getBlocks: function(props) {
          var blocks = {};
  
          for(var k in props) {
              if(k.slice(0, 2) == 'b_') {
                  blocks[k.slice(2)] = props[k];
              }
          }
  
          return blocks;
      }
  });
  
  // test code
  // var src = 'hello {% foo baz | bar %}hi{% endfoo %} end';
  // var env = new Environment(new builtin_loaders.FileSystemLoader('tests/templates', true), { dev: true });
  
  // function FooExtension() {
  //     this.tags = ['foo'];
  //     this._name = 'FooExtension';
  
  //     this.parse = function(parser, nodes) {
  //         var tok = parser.nextToken();
  //         var args = parser.parseSignature(null, true);
  //         parser.advanceAfterBlockEnd(tok.value);
  
  //         var body = parser.parseUntilBlocks('endfoo');
  //         parser.advanceAfterBlockEnd();
  
  //         return new nodes.CallExtensionAsync(this, 'run', args, [body]);
  //     };
  
  //     this.run = function(context, baz, body, cb) {
  //         cb(null, baz + '--' + body());
  //     };
  // }
  
  // env.addExtension('FooExtension', new FooExtension());
  // env.addFilter('bar', function(val, cb) {
  //     cb(null, val + '22222');
  // }, true);
  
  // var ctx = {};
  // var tmpl = new Template(src, env, null, null, true);
  // console.log("OUTPUT ---");
  
  // tmpl.render(ctx, function(err, res) {
  //     if(err) {
  //         throw err;
  //     }
  //     console.log(res);
  // });
  
  modules['environment'] = {
      Environment: Environment,
      Template: Template
  };
  })();
  var nunjucks;
  
  var lib = modules["lib"];
  var env = modules["environment"];
  var compiler = modules["compiler"];
  var parser = modules["parser"];
  var lexer = modules["lexer"];
  var runtime = modules["runtime"];
  var Loader = modules["loader"];
  var loaders = modules["loaders"];
  var precompile = modules["precompile"];
  
  nunjucks = {};
  nunjucks.Environment = env.Environment;
  nunjucks.Template = env.Template;
  
  nunjucks.Loader = Loader;
  nunjucks.FileSystemLoader = loaders.FileSystemLoader;
  nunjucks.WebLoader = loaders.WebLoader;
  
  nunjucks.compiler = compiler;
  nunjucks.parser = parser;
  nunjucks.lexer = lexer;
  nunjucks.runtime = runtime;
  
  // A single instance of an environment, since this is so commonly used
  
  var e;
  nunjucks.configure = function(templatesPath, opts) {
      opts = opts || {};
      if(lib.isObject(templatesPath)) {
          opts = templatesPath;
          templatesPath = null;
      }
  
      var noWatch = 'watch' in opts ? !opts.watch : false;
      var loader = loaders.FileSystemLoader || loaders.WebLoader;
      e = new env.Environment(new loader(templatesPath, noWatch), opts);
  
      if(opts && opts.express) {
          e.express(opts.express);
      }
  
      return e;
  };
  
  nunjucks.compile = function(src, env, path, eagerCompile) {
      if(!e) {
          nunjucks.configure();
      }
      return new nunjucks.Template(src, env, path, eagerCompile);
  };
  
  nunjucks.render = function(name, ctx, cb) {
      if(!e) {
          nunjucks.configure();
      }
  
      return e.render(name, ctx, cb);
  };
  
  nunjucks.renderString = function(src, ctx, cb) {
      if(!e) {
          nunjucks.configure();
      }
  
      return e.renderString(src, ctx, cb);
  };
  
  if(precompile) {
      nunjucks.precompile = precompile.precompile;
      nunjucks.precompileString = precompile.precompileString;
  }
  
  nunjucks.require = function(name) { return modules[name]; };
  
  if(typeof define === 'function' && define.amd) {
      define(function() { return nunjucks; });
  }
  else {
      window.nunjucks = nunjucks;
      if(typeof module !== 'undefined') module.exports = nunjucks;
  }
  
  })();
  
});
require.register('symbolGroup', function(module, exports, require) {
  var nunjucks = window.nunjucks || require('nunjucks');
  var template = (function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["symbolGroup"] = (function() {function root(env, context, frame, runtime, cb) {
  var lineno = null;
  var colno = null;
  var output = "";
  try {
  frame = frame.push();
  var t_3 = runtime.contextOrFrameLookup(context, frame, "symbols");
  if(t_3) {for(var t_1=0; t_1 < t_3.length; t_1++) {
  var t_4 = t_3[t_1];
  frame.set("symbol", t_4);
  output += "\n\t<h2>";
  output += runtime.suppressValue(runtime.memberLookup((t_4),"title", env.autoesc), env.autoesc);
  output += "</h2>\n\t";
  frame = frame.push();
  var t_7 = runtime.memberLookup((t_4),"variations", env.autoesc);
  if(t_7) {for(var t_5=0; t_5 < t_7.length; t_5++) {
  var t_8 = t_7[t_5];
  frame.set("variation", t_8);
  output += "\n\t\t<section class=\"symbol-group\">\n\t\t\t<h3>#";
  output += runtime.suppressValue(runtime.memberLookup((t_8),"id", env.autoesc), env.autoesc);
  output += "</h3>\n\t\t\t<figure class=\"s100 svg\">\n\t\t\t\t<div class=\"symbol background-day\" data-id=\"";
  output += runtime.suppressValue(runtime.memberLookup((t_8),"id", env.autoesc), env.autoesc);
  output += "\"></div>\n\t\t\t\t<figcaption>svg@100px</figcaption>\n\t\t\t</figure>\n\t\t\t<figure class=\"s100 canvas\">\n\t\t\t\t<div class=\"symbol\" data-id=\"";
  output += runtime.suppressValue(runtime.memberLookup((t_8),"id", env.autoesc), env.autoesc);
  output += "\"></div>\n\t\t\t\t<figcaption>canvas@100px</figcaption>\n\t\t\t</figure>\n\t\t\t<figure class=\"s100 img\">\n\t\t\t\t<div class=\"symbol\" data-id=\"";
  output += runtime.suppressValue(runtime.memberLookup((t_8),"id", env.autoesc), env.autoesc);
  output += "\"></div>\n\t\t\t\t<figcaption>img@100px</figcaption>\n\t\t\t</figure>\n\t\t</section>\n\t";
  ;
  }
  }
  frame = frame.pop();
  output += "\n";
  ;
  }
  }
  frame = frame.pop();
  output += "\n";
  cb(null, output);
  ;
  } catch (e) {
    cb(runtime.handleError(e, lineno, colno));
  }
  }
  return {
  root: root
  };
  })();
  })();
  
  module.exports = template || {};
  module.exports.render = function (data, fn) {
    nunjucks.render('symbolGroup', data, fn);
  };
});
require.register('capabilities@0.1.0', function(module, exports, require) {
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
require.register('svg@0.1.1', function(module, exports, require) {
  var capabilities = require('capabilities@0.1.0');
  
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
require.register('js', function(module, exports, require) {
  window.global = window;
  
  var svg = require('svg@0.1.1')
  	, data = {"symbols":[{"title":"clear","variations":[{"id":"01d"},{"id":"01m"},{"id":"01n"}]},{"title":"fair","variations":[{"id":"02d"},{"id":"02m"},{"id":"02n"}]},{"title":"partly cloudy","variations":[{"id":"03d"},{"id":"03m"},{"id":"03n"}]},{"title":"cloudy","variations":[{"id":"04"}]},{"title":"light rain showers","variations":[{"id":"40d"},{"id":"40m"},{"id":"40n"}]},{"title":"rain showers","variations":[{"id":"05d"},{"id":"05m"},{"id":"05n"}]},{"title":"heavy rain showers","variations":[{"id":"41d"},{"id":"41m"},{"id":"41n"}]},{"title":"light sleet showers","variations":[{"id":"42d"},{"id":"42m"},{"id":"42n"}]},{"title":"sleet showers","variations":[{"id":"07d"},{"id":"07m"},{"id":"07n"}]},{"title":"heavy sleet showers","variations":[{"id":"43d"},{"id":"43m"},{"id":"43n"}]},{"title":"light snow showers","variations":[{"id":"44d"},{"id":"44m"},{"id":"44n"}]},{"title":"snow showers","variations":[{"id":"08d"},{"id":"08m"},{"id":"08n"}]},{"title":"heavy snow showers","variations":[{"id":"45d"},{"id":"45m"},{"id":"45n"}]},{"title":"light rain","variations":[{"id":"46"}]},{"title":"rain","variations":[{"id":"09"}]},{"title":"heavy rain","variations":[{"id":"10"}]},{"title":"light sleet","variations":[{"id":"47"}]},{"title":"sleet","variations":[{"id":"12"}]},{"title":"heavy sleet","variations":[{"id":"48"}]},{"title":"light snow","variations":[{"id":"49"}]},{"title":"snow","variations":[{"id":"13"}]},{"title":"heavy snow","variations":[{"id":"50"}]},{"title":"fog","variations":[{"id":"15"}]},{"title":"light rain showers with thunder","variations":[{"id":"24d"},{"id":"24m"},{"id":"24n"}]},{"title":"rain showers with thunder","variations":[{"id":"06d"},{"id":"06m"},{"id":"06n"}]},{"title":"heavy rain showers with thunder","variations":[{"id":"25d"},{"id":"25m"},{"id":"25n"}]},{"title":"light sleet showers with thunder","variations":[{"id":"26d"},{"id":"26m"},{"id":"26n"}]},{"title":"sleet showers with thunder","variations":[{"id":"20d"},{"id":"20m"},{"id":"20n"}]},{"title":"heavy sleet showers with thunder","variations":[{"id":"27d"},{"id":"27m"},{"id":"27n"}]},{"title":"light snow showers with thunder","variations":[{"id":"28d"},{"id":"28m"},{"id":"28n"}]},{"title":"snow showers with thunder","variations":[{"id":"21d"},{"id":"21m"},{"id":"21n"}]},{"title":"heavy snow showers with thunder","variations":[{"id":"29d"},{"id":"29m"},{"id":"29n"}]},{"title":"light rain with thunder","variations":[{"id":"30"}]},{"title":"rain with thunder","variations":[{"id":"22"}]},{"title":"heavy rain with thunder","variations":[{"id":"11"}]},{"title":"light sleet with thunder","variations":[{"id":"31"}]},{"title":"sleet with thunder","variations":[{"id":"23"}]},{"title":"heavy sleet with thunder","variations":[{"id":"32"}]},{"title":"light snow with thunder","variations":[{"id":"33"}]},{"title":"snow with thunder","variations":[{"id":"14"}]},{"title":"heavy snow with thunder","variations":[{"id":"34"}]}]}
  	, template = require('symbolGroup')
  	, weatherSymbol = require('weatherSymbol')
  	, classList = require('classlist@0.4.0')
  	, forEach = require('lodash-node/compat/collections/forEach@2.4.1')
  	, el = document.getElementById('symbols')
  	, slice = Array.prototype.slice;
  
  // Render template
  template.render(data, function (err, html) {
  	el.innerHTML += html;
  });
  
  // Draw canvas symbols
  forEach(document.querySelectorAll('figure'), function (el) {
  	var symbol = el.querySelector('.symbol')
  		, options = {
  			imagePath: 'dist/png/'
  		};
  
  	if (classList.hasClass(el, 'svg')) {
  		options.type = 'svg';
  	} else if (classList.hasClass(el, 'canvas')) {
  		options.type = 'canvas';
  	} else if (classList.hasClass(el, 'img')) {
  		options.type = 'img';
  	}
  
  	weatherSymbol(symbol, options);
  });
});
require('js');