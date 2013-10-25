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
		// Find in cache
		var m = require.modules[path] || require.modules[path += '/index'];
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
			m.call(this, m, m.exports, require.resolve(path));
		}
		// Return the exports object
		return m.exports;
	}

	// Cache of module objects
	require.modules = {};

	// Normalize a 'path' relative to the current
	// @param {String} curr
	// @param {String} path
	// @return {String}
	require.normalize = function(curr, path) {
		var segs = curr.split('/')
			, seg;

		// Non relative path
		if (path.charAt(0) != '.') return path;

		// Use 'from' path segments to resolve relative 'to' path
		segs.pop();
		path = path.split('/');
		for (var i = 0; i < path.length; ++i) {
			seg = path[i];
			if (seg == '..') {
				segs.pop();
			} else if (seg != '.') {
				segs.push(seg);
			}
		}
		return segs.join('/');
	};

	// Partial completion of the module's inner 'require' function
	// @param {String} path
	// @return {Object}
	require.resolve = function(path) {
		return function(p) {
			return require(require.normalize(path, p));
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
