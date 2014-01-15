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

require.register('dust', function(module, exports, require) {
  //
  // Dust - Asynchronous Templating v2.2.3
  // http://akdubya.github.com/dustjs
  //
  // Copyright (c) 2010, Aleksander Williams
  // Released under the MIT License.
  //
  
  /*global console */
  var dust = {};
  
  function getGlobal(){
    return (function(){
      return this.dust;
    }).call(null);
  }
  
  (function(dust) {
  
    if(!dust) {
      return;
    }
    var ERROR = 'ERROR',
        WARN = 'WARN',
        INFO = 'INFO',
        DEBUG = 'DEBUG',
        levels = [DEBUG, INFO, WARN, ERROR],
        logger = function() {};
  
    dust.isDebug = false;
    dust.debugLevel = INFO;
  
    // Try to find the console logger in window scope (browsers) or top level scope (node.js)
    if (typeof window !== 'undefined' && window && window.console && window.console.log) {
      logger = window.console.log;
    } else if (typeof console !== 'undefined' && console && console.log) {
      logger = console.log;
    }
  
    /**
     * If dust.isDebug is true, Log dust debug statements, info statements, warning statements, and errors.
     * This default implementation will print to the console if it exists.
     * @param {String} message the message to print
     * @param {String} type the severity of the message(ERROR, WARN, INFO, or DEBUG)
     * @public
     */
    dust.log = function(message, type) {
      var type = type || INFO;
      if(dust.isDebug && levels.indexOf(type) >= levels.indexOf(dust.debugLevel)) {
        if(!dust.logQueue) {
          dust.logQueue = [];
        }
        dust.logQueue.push({message: message, type: type});
        logger.call(console || window.console, '[DUST ' + type + ']: ' + message);
      }
    };
  
    /**
     * If debugging is turned on(dust.isDebug=true) log the error message and throw it.
     * Otherwise try to keep rendering.  This is useful to fail hard in dev mode, but keep rendering in production.
     * @param {Error} error the error message to throw
     * @param {Object} chunk the chunk the error was thrown from
     * @public
     */
    dust.onError = function(error, chunk) {
      dust.log(error.message || error, ERROR);
      if(dust.isDebug) {
        throw error;
      } else {
        return chunk;
      }
    };
  
    dust.helpers = {};
  
    dust.cache = {};
  
    dust.register = function(name, tmpl) {
      if (!name) {
        return;
      }
      dust.cache[name] = tmpl;
    };
  
    dust.render = function(name, context, callback) {
      var chunk = new Stub(callback).head;
      try {
        dust.load(name, chunk, Context.wrap(context, name)).end();
      } catch (err) {
        dust.onError(err, chunk);
      }
    };
  
    dust.stream = function(name, context) {
      var stream = new Stream();
      dust.nextTick(function() {
        try {
          dust.load(name, stream.head, Context.wrap(context, name)).end();
        } catch (err) {
          dust.onError(err, stream.head);
        }
      });
      return stream;
    };
  
    dust.renderSource = function(source, context, callback) {
      return dust.compileFn(source)(context, callback);
    };
  
    dust.compileFn = function(source, name) {
      var tmpl = dust.loadSource(dust.compile(source, name));
      return function(context, callback) {
        var master = callback ? new Stub(callback) : new Stream();
        dust.nextTick(function() {
          if(typeof tmpl === 'function') {
            tmpl(master.head, Context.wrap(context, name)).end();
          }
          else {
            dust.onError(new Error('Template [' + name + '] cannot be resolved to a Dust function'));
          }
        });
        return master;
      };
    };
  
    dust.load = function(name, chunk, context) {
      var tmpl = dust.cache[name];
      if (tmpl) {
        return tmpl(chunk, context);
      } else {
        if (dust.onLoad) {
          return chunk.map(function(chunk) {
            dust.onLoad(name, function(err, src) {
              if (err) {
                return chunk.setError(err);
              }
              if (!dust.cache[name]) {
                dust.loadSource(dust.compile(src, name));
              }
              dust.cache[name](chunk, context).end();
            });
          });
        }
        return chunk.setError(new Error('Template Not Found: ' + name));
      }
    };
  
    dust.loadSource = function(source, path) {
      return eval(source);
    };
  
    if (Array.isArray) {
      dust.isArray = Array.isArray;
    } else {
      dust.isArray = function(arr) {
        return Object.prototype.toString.call(arr) === '[object Array]';
      };
    }
  
    dust.nextTick = (function() {
      if (typeof process !== 'undefined') {
        return process.nextTick;
      } else {
        return function(callback) {
          setTimeout(callback,0);
        };
      }
    } )();
  
    dust.isEmpty = function(value) {
      if (dust.isArray(value) && !value.length) {
        return true;
      }
      if (value === 0) {
        return false;
      }
      return (!value);
    };
  
    // apply the filter chain and return the output string
    dust.filter = function(string, auto, filters) {
      if (filters) {
        for (var i=0, len=filters.length; i<len; i++) {
          var name = filters[i];
          if (name === 's') {
            auto = null;
            dust.log('Using unescape filter on [' + string + ']', DEBUG);
          }
          else if (typeof dust.filters[name] === 'function') {
            string = dust.filters[name](string);
          }
          else {
            dust.onError(new Error('Invalid filter [' + name + ']'));
          }
        }
      }
      // by default always apply the h filter, unless asked to unescape with |s
      if (auto) {
        string = dust.filters[auto](string);
      }
      return string;
    };
  
    dust.filters = {
      h: function(value) { return dust.escapeHtml(value); },
      j: function(value) { return dust.escapeJs(value); },
      u: encodeURI,
      uc: encodeURIComponent,
      js: function(value) {
        if (!JSON) {
          dust.log('JSON is undefined.  JSON stringify has not been used on [' + value + ']', WARN);
          return value;
        } else {
          return JSON.stringify(value);
        }
      },
      jp: function(value) {
        if (!JSON) {dust.log('JSON is undefined.  JSON parse has not been used on [' + value + ']', WARN);
          return value;
        } else {
          return JSON.parse(value);
        }
      }
    };
  
    function Context(stack, global, blocks, templateName) {
      this.stack  = stack;
      this.global = global;
      this.blocks = blocks;
      this.templateName = templateName;
    }
  
    dust.makeBase = function(global) {
      return new Context(new Stack(), global);
    };
  
    Context.wrap = function(context, name) {
      if (context instanceof Context) {
        return context;
      }
      return new Context(new Stack(context), {}, null, name);
    };
  
    /**
     * Public API for getting a value from the context.
     * @method get
     * @param {string|array} path The path to the value. Supported formats are:
     * 'key'
     * 'path.to.key'
     * '.path.to.key'
     * ['path', 'to', 'key']
     * ['key']
     * @param {boolean} [cur=false] Boolean which determines if the search should be limited to the
     * current context (true), or if get should search in parent contexts as well (false).
     * @public
     * @returns {string|object}
     */
    Context.prototype.get = function(path, cur) {
      if (typeof path === 'string') {
        if (path[0] === '.') {
          cur = true;
          path = path.substr(1);
        }
        path = path.split('.');
      }
      return this._get(cur, path);
    };
  
    /**
     * Get a value from the context
     * @method _get
     * @param {boolean} cur Get only from the current context
     * @param {array} down An array of each step in the path
     * @private
     * @return {string | object}
     */
    Context.prototype._get = function(cur, down) {
      var ctx = this.stack,
          i = 1,
          value, first, len, ctxThis;
      dust.log('Searching for reference [{' + down.join('.') + '}] in template [' + this.getTemplateName() + ']', DEBUG);
      first = down[0];
      len = down.length;
  
      if (cur && len === 0) {
        ctxThis = ctx;
        ctx = ctx.head;
      } else {
        if (!cur) {
          // Search up the stack for the first value
          while (ctx) {
            if (ctx.isObject) {
              ctxThis = ctx.head;
              value = ctx.head[first];
              if (value !== undefined) {
                break;
              }
            }
            ctx = ctx.tail;
          }
  
          if (value !== undefined) {
            ctx = value;
          } else {
            ctx = this.global ? this.global[first] : undefined;
          }
        } else {
          // if scope is limited by a leading dot, don't search up the tree
          ctx = ctx.head[first];
        }
  
        while (ctx && i < len) {
          ctxThis = ctx;
          ctx = ctx[down[i]];
          i++;
        }
      }
  
      // Return the ctx or a function wrapping the application of the context.
      if (typeof ctx === 'function') {
        var fn = function() {
          return ctx.apply(ctxThis, arguments);
        };
        fn.isFunction = true;
        return fn;
      } else {
        if (ctx === undefined) {
          dust.log('Cannot find the value for reference [{' + down.join('.') + '}] in template [' + this.getTemplateName() + ']');
        }
        return ctx;
      }
    };
  
    Context.prototype.getPath = function(cur, down) {
      return this._get(cur, down);
    };
  
    Context.prototype.push = function(head, idx, len) {
      return new Context(new Stack(head, this.stack, idx, len), this.global, this.blocks, this.getTemplateName());
    };
  
    Context.prototype.rebase = function(head) {
      return new Context(new Stack(head), this.global, this.blocks, this.getTemplateName());
    };
  
    Context.prototype.current = function() {
      return this.stack.head;
    };
  
    Context.prototype.getBlock = function(key, chk, ctx) {
      if (typeof key === 'function') {
        var tempChk = new Chunk();
        key = key(tempChk, this).data.join('');
      }
  
      var blocks = this.blocks;
  
      if (!blocks) {
        dust.log('No blocks for context[{' + key + '}] in template [' + this.getTemplateName() + ']', DEBUG);
        return;
      }
      var len = blocks.length, fn;
      while (len--) {
        fn = blocks[len][key];
        if (fn) {
          return fn;
        }
      }
    };
  
    Context.prototype.shiftBlocks = function(locals) {
      var blocks = this.blocks,
          newBlocks;
  
      if (locals) {
        if (!blocks) {
          newBlocks = [locals];
        } else {
          newBlocks = blocks.concat([locals]);
        }
        return new Context(this.stack, this.global, newBlocks, this.getTemplateName());
      }
      return this;
    };
  
    Context.prototype.getTemplateName = function() {
      return this.templateName;
    }
  
    function Stack(head, tail, idx, len) {
      this.tail = tail;
      this.isObject = head && typeof head === 'object';
      this.head = head;
      this.index = idx;
      this.of = len;
    }
  
    function Stub(callback) {
      this.head = new Chunk(this);
      this.callback = callback;
      this.out = '';
    }
  
    Stub.prototype.flush = function() {
      var chunk = this.head;
  
      while (chunk) {
        if (chunk.flushable) {
          this.out += chunk.data.join(''); //ie7 perf
        } else if (chunk.error) {
          this.callback(chunk.error);
          dust.onError(new Error('Chunk error [' + chunk.error + '] thrown. Ceasing to render this template.'));
          this.flush = function() {};
          return;
        } else {
          return;
        }
        chunk = chunk.next;
        this.head = chunk;
      }
      this.callback(null, this.out);
    };
  
    function Stream() {
      this.head = new Chunk(this);
    }
  
    Stream.prototype.flush = function() {
      var chunk = this.head;
  
      while(chunk) {
        if (chunk.flushable) {
          this.emit('data', chunk.data.join('')); //ie7 perf
        } else if (chunk.error) {
          this.emit('error', chunk.error);
          dust.onError(new Error('Chunk error [' + chunk.error + '] thrown. Ceasing to render this template.'));
          this.flush = function() {};
          return;
        } else {
          return;
        }
        chunk = chunk.next;
        this.head = chunk;
      }
      this.emit('end');
    };
  
    Stream.prototype.emit = function(type, data) {
      if (!this.events) {
        dust.log('No events to emit', INFO);
        return false;
      }
      var handler = this.events[type];
      if (!handler) {
        dust.log('Event type [' + type + '] does not exist', WARN);
        return false;
      }
      if (typeof handler === 'function') {
        handler(data);
      } else if (dust.isArray(handler)) {
        var listeners = handler.slice(0);
        for (var i = 0, l = listeners.length; i < l; i++) {
          listeners[i](data);
        }
      } else {
        dust.onError(new Error('Event Handler [' + handler + '] is not of a type that is handled by emit'));
      }
    };
  
    Stream.prototype.on = function(type, callback) {
      if (!this.events) {
        this.events = {};
      }
      if (!this.events[type]) {
        dust.log('Event type [' + type + '] does not exist. Using just the specified callback.', WARN);
        if(callback) {
          this.events[type] = callback;
        } else {
          dust.log('Callback for type [' + type + '] does not exist. Listener not registered.', WARN);
        }
      } else if(typeof this.events[type] === 'function') {
        this.events[type] = [this.events[type], callback];
      } else {
        this.events[type].push(callback);
      }
      return this;
    };
  
    Stream.prototype.pipe = function(stream) {
      this.on('data', function(data) {
        try {
          stream.write(data, 'utf8');
        } catch (err) {
          dust.onError(err, stream.head);
        }
      }).on('end', function() {
        try {
          return stream.end();
        } catch (err) {
          dust.onError(err, stream.head);
        }
      }).on('error', function(err) {
        stream.error(err);
      });
      return this;
    };
  
    function Chunk(root, next, taps) {
      this.root = root;
      this.next = next;
      this.data = []; //ie7 perf
      this.flushable = false;
      this.taps = taps;
    }
  
    Chunk.prototype.write = function(data) {
      var taps  = this.taps;
  
      if (taps) {
        data = taps.go(data);
      }
      this.data.push(data);
      return this;
    };
  
    Chunk.prototype.end = function(data) {
      if (data) {
        this.write(data);
      }
      this.flushable = true;
      this.root.flush();
      return this;
    };
  
    Chunk.prototype.map = function(callback) {
      var cursor = new Chunk(this.root, this.next, this.taps),
          branch = new Chunk(this.root, cursor, this.taps);
  
      this.next = branch;
      this.flushable = true;
      callback(branch);
      return cursor;
    };
  
    Chunk.prototype.tap = function(tap) {
      var taps = this.taps;
  
      if (taps) {
        this.taps = taps.push(tap);
      } else {
        this.taps = new Tap(tap);
      }
      return this;
    };
  
    Chunk.prototype.untap = function() {
      this.taps = this.taps.tail;
      return this;
    };
  
    Chunk.prototype.render = function(body, context) {
      return body(this, context);
    };
  
    Chunk.prototype.reference = function(elem, context, auto, filters) {
      if (typeof elem === 'function') {
        elem.isFunction = true;
        // Changed the function calling to use apply with the current context to make sure
        // that "this" is wat we expect it to be inside the function
        elem = elem.apply(context.current(), [this, context, null, {auto: auto, filters: filters}]);
        if (elem instanceof Chunk) {
          return elem;
        }
      }
      if (!dust.isEmpty(elem)) {
        return this.write(dust.filter(elem, auto, filters));
      } else {
        return this;
      }
    };
  
    Chunk.prototype.section = function(elem, context, bodies, params) {
      // anonymous functions
      if (typeof elem === 'function') {
        elem = elem.apply(context.current(), [this, context, bodies, params]);
        // functions that return chunks are assumed to have handled the body and/or have modified the chunk
        // use that return value as the current chunk and go to the next method in the chain
        if (elem instanceof Chunk) {
          return elem;
        }
      }
      var body = bodies.block,
          skip = bodies['else'];
  
      // a.k.a Inline parameters in the Dust documentations
      if (params) {
        context = context.push(params);
      }
  
      /*
      Dust's default behavior is to enumerate over the array elem, passing each object in the array to the block.
      When elem resolves to a value or object instead of an array, Dust sets the current context to the value
      and renders the block one time.
      */
      //non empty array is truthy, empty array is falsy
      if (dust.isArray(elem)) {
        if (body) {
          var len = elem.length, chunk = this;
          if (len > 0) {
            // any custom helper can blow up the stack
            // and store a flattened context, guard defensively
            if(context.stack.head) {
              context.stack.head['$len'] = len;
            }
            for (var i=0; i<len; i++) {
              if(context.stack.head) {
                context.stack.head['$idx'] = i;
              }
              chunk = body(chunk, context.push(elem[i], i, len));
            }
            if(context.stack.head) {
              context.stack.head['$idx'] = undefined;
              context.stack.head['$len'] = undefined;
            }
            return chunk;
          }
          else if (skip) {
            return skip(this, context);
          }
        }
      } else if (elem  === true) {
       // true is truthy but does not change context
        if (body) {
          return body(this, context);
        }
      } else if (elem || elem === 0) {
         // everything that evaluates to true are truthy ( e.g. Non-empty strings and Empty objects are truthy. )
         // zero is truthy
         // for anonymous functions that did not returns a chunk, truthiness is evaluated based on the return value
        if (body) {
          return body(this, context.push(elem));
        }
       // nonexistent, scalar false value, scalar empty string, null,
       // undefined are all falsy
      } else if (skip) {
        return skip(this, context);
      }
      dust.log('Not rendering section (#) block in template [' + context.getTemplateName() + '], because above key was not found', DEBUG);
      return this;
    };
  
    Chunk.prototype.exists = function(elem, context, bodies) {
      var body = bodies.block,
          skip = bodies['else'];
  
      if (!dust.isEmpty(elem)) {
        if (body) {
          return body(this, context);
        }
      } else if (skip) {
        return skip(this, context);
      }
      dust.log('Not rendering exists (?) block in template [' + context.getTemplateName() + '], because above key was not found', DEBUG);
      return this;
    };
  
    Chunk.prototype.notexists = function(elem, context, bodies) {
      var body = bodies.block,
          skip = bodies['else'];
  
      if (dust.isEmpty(elem)) {
        if (body) {
          return body(this, context);
        }
      } else if (skip) {
        return skip(this, context);
      }
      dust.log('Not rendering not exists (^) block check in template [' + context.getTemplateName() + '], because above key was found', DEBUG);
      return this;
    };
  
    Chunk.prototype.block = function(elem, context, bodies) {
      var body = bodies.block;
  
      if (elem) {
        body = elem;
      }
  
      if (body) {
        return body(this, context);
      }
      return this;
    };
  
    Chunk.prototype.partial = function(elem, context, params) {
      var partialContext;
      //put the params context second to match what section does. {.} matches the current context without parameters
      // start with an empty context
      partialContext = dust.makeBase(context.global);
      partialContext.blocks = context.blocks;
      if (context.stack && context.stack.tail){
        // grab the stack(tail) off of the previous context if we have it
        partialContext.stack = context.stack.tail;
      }
      if (params){
        //put params on
        partialContext = partialContext.push(params);
      }
  
      if(typeof elem === 'string') {
        partialContext.templateName = elem;
      }
  
      //reattach the head
      partialContext = partialContext.push(context.stack.head);
  
      var partialChunk;
      if (typeof elem === 'function') {
        partialChunk = this.capture(elem, partialContext, function(name, chunk) {
          partialContext.templateName = partialContext.templateName || name;
          dust.load(name, chunk, partialContext).end();
        });
      } else {
        partialChunk = dust.load(elem, this, partialContext);
      }
      return partialChunk;
    };
  
    Chunk.prototype.helper = function(name, context, bodies, params) {
      var chunk = this;
      // handle invalid helpers, similar to invalid filters
      try {
        if(dust.helpers[name]) {
          return dust.helpers[name](chunk, context, bodies, params);
        } else {
          return dust.onError(new Error('Invalid helper [' + name + ']'), chunk);
        }
      } catch (err) {
        return dust.onError(err, chunk);
      }
    };
  
    Chunk.prototype.capture = function(body, context, callback) {
      return this.map(function(chunk) {
        var stub = new Stub(function(err, out) {
          if (err) {
            chunk.setError(err);
          } else {
            callback(out, chunk);
          }
        });
        body(stub.head, context).end();
      });
    };
  
    Chunk.prototype.setError = function(err) {
      this.error = err;
      this.root.flush();
      return this;
    };
  
    function Tap(head, tail) {
      this.head = head;
      this.tail = tail;
    }
  
    Tap.prototype.push = function(tap) {
      return new Tap(tap, this);
    };
  
    Tap.prototype.go = function(value) {
      var tap = this;
  
      while(tap) {
        value = tap.head(value);
        tap = tap.tail;
      }
      return value;
    };
  
    var HCHARS = new RegExp(/[&<>\"\']/),
        AMP    = /&/g,
        LT     = /</g,
        GT     = />/g,
        QUOT   = /\"/g,
        SQUOT  = /\'/g;
  
    dust.escapeHtml = function(s) {
      if (typeof s === 'string') {
        if (!HCHARS.test(s)) {
          return s;
        }
        return s.replace(AMP,'&amp;').replace(LT,'&lt;').replace(GT,'&gt;').replace(QUOT,'&quot;').replace(SQUOT, '&#39;');
      }
      return s;
    };
  
    var BS = /\\/g,
        FS = /\//g,
        CR = /\r/g,
        LS = /\u2028/g,
        PS = /\u2029/g,
        NL = /\n/g,
        LF = /\f/g,
        SQ = /'/g,
        DQ = /"/g,
        TB = /\t/g;
  
    dust.escapeJs = function(s) {
      if (typeof s === 'string') {
        return s
          .replace(BS, '\\\\')
          .replace(FS, '\\/')
          .replace(DQ, '\\"')
          .replace(SQ, '\\\'')
          .replace(CR, '\\r')
          .replace(LS, '\\u2028')
          .replace(PS, '\\u2029')
          .replace(NL, '\\n')
          .replace(LF, '\\f')
          .replace(TB, '\\t');
      }
      return s;
    };
  
  })(dust);
  
  if (typeof exports !== 'undefined') {
    if (typeof process !== 'undefined') {
      require('./server')(dust);
    }
    module.exports = dust;
  }
  
});
require.register('symbolGroup', function(module, exports, require) {
  var dust = window.dust || require('dust');
  module.exports = (function(){dust.register("symbolGroup",body_0);function body_0(chk,ctx){return chk.section(ctx._get(false, ["symbols"]),ctx,{"block":body_1},null);}function body_1(chk,ctx){return chk.write("<h2>").reference(ctx._get(false, ["title"]),ctx,"h").write("</h2>").section(ctx._get(false, ["variations"]),ctx,{"block":body_2},null);}function body_2(chk,ctx){return chk.write("<section class=\"symbol-group\"><h3>#").reference(ctx._get(false, ["id"]),ctx,"h").write("</h3><figure class=\"s128\"><img src=\"./bin/svg/").reference(ctx._get(false, ["id"]),ctx,"h").write(".svg\"><figcaption>svg@128px</figcaption></figure><figure class=\"s64\"><img src=\"./bin/svg/").reference(ctx._get(false, ["id"]),ctx,"h").write(".svg\"><figcaption>svg@64px</figcaption></figure><figure class=\"s32\"><img src=\"./bin/svg/").reference(ctx._get(false, ["id"]),ctx,"h").write(".svg\"><figcaption>svg@32px</figcaption></figure><figure class=\"s128\"><canvas class=\"symbol\" data-id=\"").reference(ctx._get(false, ["id"]),ctx,"h").write("\"></canvas><figcaption>canvas@128px</figcaption></figure><figure class=\"s64\"><canvas class=\"symbol\" data-id=\"").reference(ctx._get(false, ["id"]),ctx,"h").write("\"></canvas><figcaption>canvas@64px</figcaption></figure><figure class=\"s32\"><canvas class=\"symbol\" data-id=\"").reference(ctx._get(false, ["id"]),ctx,"h").write("\"></canvas><figcaption>canvas@32px</figcaption></figure></section>");}return body_0;})();
});
require.register('primitives/sunPrimitive', function(module, exports, require) {
  var TWO_PI = Math.PI * 2  
  	, RAY_COLOUR = '#e88d15'  
  	, HORIZON_COLOUR = '#4d4d4d'  
  	, CENTER_COLOUR = '#faba2f'  
  	, STROKE_WIDTH = 5;  
    
  exports.render = function(ctx, options) {  
  	ctx.save();  
  	ctx.translate(options.x, options.y);  
  	ctx.scale(options.scale, options.scale);  
  	ctx.strokeStyle = options.bg;  
  	ctx.lineWidth = STROKE_WIDTH;  
    
  	if (options.winter) {  
  		// Horizon  
  		ctx.fillStyle = HORIZON_COLOUR;  
  		ctx.beginPath();  
  		ctx.moveTo(0,0);  
  		ctx.fillRect(0,0,100,5);  
  		ctx.fill();  
    
  		// Mask  
  		ctx.moveTo(0,10);  
  		ctx.lineTo(100,10);  
  		ctx.lineTo(100,60);  
  		ctx.lineTo(0,60);  
  		ctx.lineTo(0,10);  
  		ctx.closePath();  
  		ctx.clip();  
    
  		// Rays  
  		ctx.fillStyle = RAY_COLOUR;  
  		ctx.beginPath();  
  		ctx.moveTo(69.284,17.986);  
  		ctx.lineTo(100,10);  
  		ctx.lineTo(69.284,2.014);  
  		ctx.lineTo(85.358,-25.355);  
  		ctx.lineTo(57.986,-9.281);  
  		ctx.lineTo(50,-40);  
  		ctx.lineTo(42.014,-9.281);  
  		ctx.lineTo(14.645,-25.355);  
  		ctx.lineTo(30.719,2.014);  
  		ctx.lineTo(0,10);  
  		ctx.lineTo(30.719,17.986);  
  		ctx.lineTo(14.645,45.358);  
  		ctx.lineTo(42.014,29.284);  
  		ctx.lineTo(50,60);  
  		ctx.lineTo(57.986,29.284);  
  		ctx.lineTo(85.358,45.358);  
  		ctx.lineTo(69.284,17.986);  
  		ctx.closePath();  
  		ctx.fill();  
    
  		// Center fill  
  		ctx.fillStyle = CENTER_COLOUR;  
  		ctx.beginPath();  
  		ctx.arc(50,10,22.5,0,TWO_PI,true);  
  		ctx.closePath();  
  		ctx.fill();  
  		ctx.stroke();  
    
  	} else {  
  		// Rays  
  		ctx.fillStyle = RAY_COLOUR;  
  		ctx.beginPath();  
  		ctx.moveTo(69.284,57.986);  
  		ctx.lineTo(100,50);  
  		ctx.lineTo(69.284,42.014);  
  		ctx.lineTo(85.358,14.645);  
  		ctx.lineTo(57.986,30.719);  
  		ctx.lineTo(50,0);  
  		ctx.lineTo(42.013,30.719);  
  		ctx.lineTo(14.645,14.645);  
  		ctx.lineTo(30.718,42.014);  
  		ctx.lineTo(0,50);  
  		ctx.lineTo(30.718,57.986);  
  		ctx.lineTo(14.645,85.358);  
  		ctx.lineTo(42.013,69.284);  
  		ctx.lineTo(50,100);  
  		ctx.lineTo(57.986,69.284);  
  		ctx.lineTo(85.358,85.358);  
  		ctx.lineTo(69.284,57.986);  
  		ctx.closePath();  
  		ctx.fill();  
    
  		// Center fill  
  		ctx.fillStyle = CENTER_COLOUR;  
  		ctx.beginPath();  
  		ctx.arc(50,50,22.5,0,TWO_PI,true);  
  		ctx.closePath();  
  		ctx.fill();  
  		ctx.stroke();  
  	}  
  	ctx.restore();  
  };
});
require.register('primitives/moonPrimitive', function(module, exports, require) {
  var TWO_PI = Math.PI * 2  
  	, FILL_COLOUR = '#afc1c9'  
  	, WIDTH = 60;  
    
  exports.render = function(ctx, options) {  
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
  };
});
require.register('primitives/cloudPrimitive', function(module, exports, require) {
  var STROKE_WIDTH = 5  
  	, WIDTH = 100;  
    
  exports.render = function(ctx, options) {  
  	var tint = Math.floor(255 * (1-options.tint));  
    
  	ctx.save();  
  	if (options.flip) {  
  		ctx.translate((WIDTH * options.scale) + options.x, options.y)  
  		ctx.scale(-1 * options.scale, options.scale);  
  	} else {  
  		ctx.translate(options.x, options.y)  
  		ctx.scale(options.scale, options.scale);  
  	}  
    
  	// Fill  
  	ctx.strokeStyle = options.bg;  
  	ctx.lineWidth = STROKE_WIDTH;  
  	ctx.fillStyle = 'rgb(' + tint	+ ',' + tint + ',' + tint + ')';  
  	ctx.beginPath();  
  	ctx.moveTo(7.498,40);  
  	ctx.moveTo(9.377,50);  
  	ctx.bezierCurveTo(4.357,50,0,45.609,0,41.051);  
  	ctx.bezierCurveTo(0,36.438,2.231,32.612,6.938,30.86);  
  	ctx.bezierCurveTo(8.562999999999999,25.438,13.5,21.688,19.813,21.500999999999998);  
  	ctx.bezierCurveTo(21.188,14.562,30,10.422,36.188,12.172);  
  	ctx.bezierCurveTo(38.914,2.484,54.936,-5.453,65.5,4.797);  
  	ctx.bezierCurveTo(80.938,0.5469999999999997,91.77199999999999,10.167,90.107,24.789);  
  	ctx.bezierCurveTo(96.21,26.542,100,31.901,100,38.172);  
  	ctx.bezierCurveTo(100,44.466,94.355,50,88.054,50);  
  	ctx.lineTo(9.377,50);  
  	ctx.closePath();  
  	ctx.fill();  
  	ctx.stroke();  
  	ctx.restore();  
  };  
  
});
require.register('primitives/raindropPrimitive', function(module, exports, require) {
  var TWO_PI = Math.PI * 2  
  	, FILL_COLOUR = '#1362b1';  
    
  exports.render = function(ctx, options) {  
  	// Stroke  
  	ctx.save();  
  	ctx.fillStyle = options.bg;  
  	ctx.translate(options.x, options.y)  
  	ctx.scale(options.scale, options.scale);  
  	ctx.fillStyle = options.bg;  
  	ctx.beginPath();  
  	ctx.arc(0,3,9,0,TWO_PI,true);  
  	ctx.closePath();  
  	ctx.fill();  
    
  	// Fill  
  	ctx.fillStyle = FILL_COLOUR;  
  	ctx.beginPath();  
  	ctx.moveTo(15,13.368);  
  	ctx.bezierCurveTo(15,17.586,11.634,21,7.502,21);  
  	ctx.bezierCurveTo(3.355,21,0,17.586,0,13.368);  
  	ctx.bezierCurveTo(0,10.986,0,0,0,0);  
  	ctx.bezierCurveTo(6.853,6.748,15,6.447,15,13.368);  
  	ctx.closePath();  
  	ctx.fill();  
  	ctx.restore();  
  };
});
require.register('primitives/snowflakePrimitive', function(module, exports, require) {
  var TWO_PI = Math.PI * 2  
  	, FILL_COLOUR = '#6fc6e3';  
    
  exports.render = function(ctx, options) {  
  	// Stroke  
  	ctx.save();  
  	ctx.fillStyle = options.bg;  
  	ctx.translate(options.x, options.y)  
  	ctx.scale(options.scale, options.scale);  
  	ctx.fillStyle = options.bg;  
  	ctx.beginPath();  
  	ctx.arc(10,3,9,0,TWO_PI,true);  
  	ctx.closePath();  
  	ctx.fill();  
    
  	// Fill  
  	ctx.fillStyle = FILL_COLOUR;  
  	ctx.beginPath();  
  	ctx.moveTo(15.95,2.844);  
  	ctx.lineTo(13.056999999999999,5.743);  
  	ctx.bezierCurveTo(12.676999999999998,5.5600000000000005,12.296999999999999,5.392,11.871999999999998,5.266);  
  	ctx.bezierCurveTo(11.462999999999997,5.166,11.056999999999999,5.124,10.645999999999997,5.109);  
  	ctx.lineTo(9.579,1.14);  
  	ctx.bezierCurveTo(9.354,0.322,8.51,-0.171,7.692,0.055);  
  	ctx.bezierCurveTo(6.875,0.265,6.369,1.1079999999999999,6.606,1.948);  
  	ctx.lineTo(7.663,5.9079999999999995);  
  	ctx.bezierCurveTo(6.953,6.353,6.356,6.955,5.91,7.668);  
  	ctx.lineTo(1.948,6.62);  
  	ctx.bezierCurveTo(1.126,6.395,0.271,6.888,0.062,7.694);  
  	ctx.bezierCurveTo(-0.18,8.542,0.321,9.378,1.1520000000000001,9.603);  
  	ctx.lineTo(5.109,10.658);  
  	ctx.bezierCurveTo(5.137,11.503,5.355,12.341,5.744,13.081);  
  	ctx.lineTo(2.85,15.977);  
  	ctx.bezierCurveTo(2.245,16.568,2.257,17.544,2.864,18.153);  
  	ctx.bezierCurveTo(3.468,18.756,4.441,18.773,5.038,18.153);  
  	ctx.lineTo(7.931,15.248);  
  	ctx.bezierCurveTo(8.298,15.463999999999999,8.687,15.638,9.100999999999999,15.745999999999999);  
  	ctx.bezierCurveTo(9.531999999999998,15.841999999999999,9.931,15.892999999999999,10.338999999999999,15.892999999999999);  
  	ctx.lineTo(11.402999999999999,19.863);  
  	ctx.bezierCurveTo(11.621999999999998,20.681,12.480999999999998,21.168,13.299,20.948999999999998);  
  	ctx.bezierCurveTo(14.129999999999999,20.723,14.607,19.892,14.381,19.061);  
  	ctx.lineTo(13.325,15.1);  
  	ctx.bezierCurveTo(14.043,14.66,14.641,14.047,15.072,13.329);  
  	ctx.lineTo(19.054,14.398);  
  	ctx.bezierCurveTo(19.871,14.603,20.729999999999997,14.115,20.947999999999997,13.298);  
  	ctx.bezierCurveTo(21.166999999999998,12.468,20.680999999999997,11.623,19.850999999999996,11.408);  
  	ctx.lineTo(15.880999999999995,10.338999999999999);  
  	ctx.bezierCurveTo(15.851999999999995,9.493999999999998,15.640999999999995,8.675999999999998,15.245999999999995,7.929999999999999);  
  	ctx.lineTo(18.139999999999993,5.041999999999999);  
  	ctx.bezierCurveTo(18.743999999999993,4.433999999999999,18.743999999999993,3.446999999999999,18.152999999999995,2.843999999999999);  
  	ctx.bezierCurveTo(17.535,2.252,16.543,2.252,15.95,2.844);  
  	ctx.closePath();  
  	ctx.moveTo(13.086,11.215);  
  	ctx.bezierCurveTo(12.719000000000001,12.651,11.227,13.511,9.790000000000001,13.114);  
  	ctx.bezierCurveTo(8.347000000000001,12.734,7.496,11.241000000000001,7.876000000000001,9.802000000000001);  
  	ctx.bezierCurveTo(8.256000000000002,8.350000000000001,9.734000000000002,7.505000000000001,11.183000000000002,7.887000000000001);  
  	ctx.bezierCurveTo(12.622,8.282,13.487,9.761,13.086,11.215);  
  	ctx.closePath();  
  	ctx.fill();  
  	ctx.restore();  
  };
});
require.register('primitives/fogPrimitive', function(module, exports, require) {
  exports.render = function(ctx, options) {  
  	var tint = Math.floor(255 * (1-options.tint));  
    
  	ctx.save();  
  	ctx.fillStyle = 'rgb(' + tint	+ ',' + tint + ',' + tint + ')';  
  	ctx.translate(options.x, options.y)  
  	ctx.scale(options.scale, options.scale);  
  	ctx.beginPath();  
  	ctx.moveTo(87.188,40);  
  	ctx.lineTo(2.812,40);  
  	ctx.bezierCurveTo(1.264,40,0,41.123,0,42.5);  
  	ctx.bezierCurveTo(0,43.877,1.264,45,2.812,45);  
  	ctx.lineTo(87.187,45);  
  	ctx.bezierCurveTo(88.736,45,90,43.877,90,42.5);  
  	ctx.bezierCurveTo(90,41.123,88.736,40,87.188,40);  
  	ctx.closePath();  
  	ctx.fill();  
    
  	ctx.beginPath();  
  	ctx.moveTo(82.143,50.001);  
  	ctx.lineTo(7.857,50.001);  
  	ctx.bezierCurveTo(6.283,50.001,5,51.123999999999995,5,52.501);  
  	ctx.bezierCurveTo(5,53.878,6.2829999999999995,55.001,7.857,55.001);  
  	ctx.lineTo(82.142,55.001);  
  	ctx.bezierCurveTo(83.716,55.001,84.999,53.878,84.999,52.501);  
  	ctx.bezierCurveTo(84.999,51.123999999999995,83.717,50.001,82.143,50.001);  
  	ctx.closePath();  
  	ctx.fill();  
    
  	ctx.beginPath();  
  	ctx.moveTo(82.119,60);  
  	ctx.lineTo(12.886,60);  
  	ctx.bezierCurveTo(11.294,60,10,61.123,10,62.5);  
  	ctx.bezierCurveTo(10,63.877,11.294,65,12.886,65);  
  	ctx.lineTo(82.119,65);  
  	ctx.bezierCurveTo(83.701,65,85,63.877,85,62.5);  
  	ctx.bezierCurveTo(85,61.123,83.701,60,82.119,60);  
  	ctx.closePath();  
  	ctx.fill();  
    
  	ctx.beginPath();  
  	ctx.moveTo(90,35);  
  	ctx.bezierCurveTo(89.737,29.389,85.343,24.983,80.384,24.405);  
  	ctx.bezierCurveTo(84.91,9.813,71.91,0.492,58.905,5.753);  
  	ctx.bezierCurveTo(50.435,-5.3759999999999994,35.093,1.0940000000000003,33.486000000000004,12.818999999999999);  
  	ctx.bezierCurveTo(26.297000000000004,10.350999999999999,18.668000000000006,15.014999999999999,18.668000000000006,23.360999999999997);  
  	ctx.bezierCurveTo(11.364000000000006,20.507999999999996,5.874000000000006,26.203999999999997,5.291000000000006,30.261999999999997);  
  	ctx.bezierCurveTo(2.426,30.699,0.722,32.645,0,35);  
  	ctx.lineTo(90,35);  
  	ctx.closePath();  
  	ctx.fill();  
  	ctx.restore();  
  };  
  
});
require.register('primitives/lightningPrimitive', function(module, exports, require) {
  var FILL_COLOUR = '#c9af16';  
    
  exports.render = function(ctx, options) {  
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
  };  
  
});
require.register('WeatherSymbol', function(module, exports, require) {
  var sun = require('./primitives/sunPrimitive')
  	, moon = require('./primitives/moonPrimitive')
  	, cloud = require('./primitives/cloudPrimitive')
  	, raindrop = require('./primitives/raindropPrimitive')
  	, snowflake = require('./primitives/snowflakePrimitive')
  	, fog = require('./primitives/fogPrimitive')
  	, lightning = require('./primitives/lightningPrimitive')
  
  	, DEFAULT_BG = '#ffffff'
  	, FORMULA = {
  			// Sun
  			'01d': [
  				{
  					primitive: sun,
  					x: 0,
  					y: 0
  				}
  			],
  			'02d': [
  				{
  					primitive: sun,
  					x: 0,
  					y: 0
  				},
  				{
  					primitive: cloud,
  					x: 5,
  					y: 55,
  					scale: 0.6,
  					flip: true,
  					tint: 0.1
  				}
  			],
  			'03d': [
  				{
  					primitive: sun,
  					x: 5,
  					y: 5,
  					scale: 0.6
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.15
  				}
  			],
  			'05d': [
  				{
  					primitive: sun,
  					x: 5,
  					y: 5,
  					scale: 0.6
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.4
  				},
  				{
  					primitive: raindrop,
  					x: 70,
  					y: 74
  				},
  				{
  					primitive: raindrop,
  					x: 52,
  					y: 71
  				}
  			],
  			'07d': [
  				{
  					primitive: sun,
  					x: 5,
  					y: 5,
  					scale: 0.6
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.4
  				},
  				{
  					primitive: raindrop,
  					x: 61,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 33,
  					y: 71
  				}
  			],
  			'08d': [
  				{
  					primitive: sun,
  					x: 5,
  					y: 5,
  					scale: 0.6
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.4
  				},
  				{
  					primitive: snowflake,
  					x: 22,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 43,
  					y: 71
  				}
  			],
  			'06d': [
  				{
  					primitive: sun,
  					x: 5,
  					y: 5,
  					scale: 0.6
  				},
  				{
  					primitive: lightning,
  					x: 30,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.4
  				},
  				{
  					primitive: raindrop,
  					x: 63,
  					y: 71
  				}
  			],
  			'20d': [
  				{
  					primitive: sun,
  					x: 5,
  					y: 5,
  					scale: 0.6
  				},
  				{
  					primitive: lightning,
  					x: 14,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.4
  				},
  				{
  					primitive: raindrop,
  					x: 72,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 44,
  					y: 71
  				}
  			],
  			'21d': [
  				{
  					primitive: sun,
  					x: 5,
  					y: 5,
  					scale: 0.6
  				},
  				{
  					primitive: lightning,
  					x: 14,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.4
  				},
  				{
  					primitive: snowflake,
  					x: 44,
  					y: 71
  				}
  			],
  
  			// Winter sun
  			'01m': [
  				{
  					primitive: sun,
  					x: 0,
  					y: 30,
  					winter: true
  				}
  			],
  			'02m': [
  				{
  					primitive: sun,
  					x: 0,
  					y: 30,
  					winter: true
  				},
  				{
  					primitive: cloud,
  					x: 5,
  					y: 45,
  					scale: 0.6,
  					flip: true,
  					tint: 0.1
  				}
  			],
  			'03m': [
  				{
  					primitive: sun,
  					x: 10,
  					y: 14,
  					scale: 0.6,
  					winter: true
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.15
  				}
  			],
  			'05m': [
  				{
  					primitive: sun,
  					x: 10,
  					y: 14,
  					scale: 0.6,
  					winter: true
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.4
  				},
  				{
  					primitive: raindrop,
  					x: 70,
  					y: 74
  				},
  				{
  					primitive: raindrop,
  					x: 52,
  					y: 71
  				}
  			],
  			'07m': [
  				{
  					primitive: sun,
  					x: 10,
  					y: 14,
  					scale: 0.6,
  					winter: true
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.4
  				},
  				{
  					primitive: raindrop,
  					x: 61,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 33,
  					y: 71
  				}
  			],
  			'08m': [
  				{
  					primitive: sun,
  					x: 10,
  					y: 14,
  					scale: 0.6,
  					winter: true
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.4
  				},
  				{
  					primitive: snowflake,
  					x: 22,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 43,
  					y: 71
  				}
  			],
  			'06m': [
  				{
  					primitive: sun,
  					x: 10,
  					y: 14,
  					scale: 0.6,
  					winter: true
  				},
  				{
  					primitive: lightning,
  					x: 30,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.4
  				},
  				{
  					primitive: raindrop,
  					x: 63,
  					y: 71
  				}
  			],
  			'20m': [
  				{
  					primitive: sun,
  					x: 10,
  					y: 14,
  					scale: 0.6,
  					winter: true
  				},
  				{
  					primitive: lightning,
  					x: 14,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.4
  				},
  				{
  					primitive: raindrop,
  					x: 72,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 44,
  					y: 71
  				}
  			],
  			'21m': [
  				{
  					primitive: sun,
  					x: 10,
  					y: 14,
  					scale: 0.6,
  					winter: true
  				},
  				{
  					primitive: lightning,
  					x: 14,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.4
  				},
  				{
  					primitive: snowflake,
  					x: 44,
  					y: 71
  				}
  			],
  
  			// Moon
  			'01n': [
  				{
  					primitive: moon,
  					x: 20,
  					y: 20
  				}
  			],
  			'02n': [
  				{
  					primitive: moon,
  					x: 20,
  					y: 20
  				},
  				{
  					primitive: cloud,
  					x: 5,
  					y: 55,
  					scale: 0.6,
  					flip: true,
  					tint: 0.1
  				}
  			],
  			'03n': [
  				{
  					primitive: moon,
  					x: 15,
  					y: 12,
  					scale: 0.6
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.15
  				}
  			],
  			'05n': [
  				{
  					primitive: moon,
  					x: 15,
  					y: 12,
  					scale: 0.6
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.4
  				},
  				{
  					primitive: raindrop,
  					x: 70,
  					y: 74
  				},
  				{
  					primitive: raindrop,
  					x: 52,
  					y: 71
  				}
  			],
  			'07n': [
  				{
  					primitive: moon,
  					x: 15,
  					y: 12,
  					scale: 0.6
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.4
  				},
  				{
  					primitive: raindrop,
  					x: 61,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 33,
  					y: 71
  				}
  			],
  			'08n': [
  				{
  					primitive: moon,
  					x: 15,
  					y: 12,
  					scale: 0.6
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.4
  				},
  				{
  					primitive: snowflake,
  					x: 22,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 43,
  					y: 71
  				}
  			],
  			'06n': [
  				{
  					primitive: moon,
  					x: 15,
  					y: 12,
  					scale: 0.6
  				},
  				{
  					primitive: lightning,
  					x: 30,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.4
  				},
  				{
  					primitive: raindrop,
  					x: 63,
  					y: 71
  				}
  			],
  			'20n': [
  				{
  					primitive: moon,
  					x: 15,
  					y: 12,
  					scale: 0.6
  				},
  				{
  					primitive: lightning,
  					x: 14,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.4
  				},
  				{
  					primitive: raindrop,
  					x: 72,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 44,
  					y: 71
  				}
  			],
  			'21n': [
  				{
  					primitive: moon,
  					x: 15,
  					y: 12,
  					scale: 0.6
  				},
  				{
  					primitive: lightning,
  					x: 14,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.4
  				},
  				{
  					primitive: snowflake,
  					x: 44,
  					y: 71
  				}
  			],
  
  			// Cloud
  			'15': [
  				{
  					primitive: fog,
  					x: 5,
  					y: 15,
  					tint: 0.15
  				}
  			],
  			'04': [
  				{
  					primitive: cloud,
  					x: 5,
  					y: 9,
  					scale: 0.8,
  					flip: true,
  					tint: 0.1
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.15
  				}
  			],
  			'09': [
  				{
  					primitive: cloud,
  					x: 5,
  					y: 9,
  					scale: 0.8,
  					flip: true,
  					tint: 0.3
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.4
  				},
  				{
  					primitive: raindrop,
  					x: 70,
  					y: 74
  				},
  				{
  					primitive: raindrop,
  					x: 52,
  					y: 71
  				}
  			],
  			'10': [
  				{
  					primitive: cloud,
  					x: 5,
  					y: 9,
  					scale: 0.8,
  					flip: true,
  					tint: 0.4
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.5
  				},
  				{
  					primitive: raindrop,
  					x: 77,
  					y: 73
  				},
  				{
  					primitive: raindrop,
  					x: 58,
  					y: 73
  				},
  				{
  					primitive: raindrop,
  					x: 39,
  					y: 71
  				}
  			],
  			'12': [
  				{
  					primitive: cloud,
  					x: 5,
  					y: 9,
  					scale: 0.8,
  					flip: true,
  					tint: 0.4
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.5
  				},
  				{
  					primitive: raindrop,
  					x: 69,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 20,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 41,
  					y: 71
  				}
  			],
  			'13': [
  				{
  					primitive: cloud,
  					x: 5,
  					y: 9,
  					scale: 0.8,
  					flip: true,
  					tint: 0.4
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.5
  				},
  				{
  					primitive: snowflake,
  					x: 54,
  					y: 71
  				},
  				{
  					primitive: snowflake,
  					x: 12,
  					y: 73
  				},
  				{
  					primitive: snowflake,
  					x: 33,
  					y: 74
  				}
  			],
  			'22': [
  				{
  					primitive: cloud,
  					x: 5,
  					y: 9,
  					scale: 0.8,
  					flip: true,
  					tint: 0.3
  				},
  				{
  					primitive: lightning,
  					x: 30,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.4
  				},
  				{
  					primitive: raindrop,
  					x: 63,
  					y: 71
  				}
  			],
  			'11': [
  				{
  					primitive: cloud,
  					x: 5,
  					y: 9,
  					scale: 0.8,
  					flip: true,
  					tint: 0.4
  				},
  				{
  					primitive: lightning,
  					x: 25,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.5
  				},
  				{
  					primitive: raindrop,
  					x: 76,
  					y: 74
  				},
  				{
  					primitive: raindrop,
  					x: 58,
  					y: 71
  				}
  			],
  			'23': [
  				{
  					primitive: cloud,
  					x: 5,
  					y: 9,
  					scale: 0.8,
  					flip: true,
  					tint: 0.3
  				},
  				{
  					primitive: lightning,
  					x: 14,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.4
  				},
  				{
  					primitive: raindrop,
  					x: 72,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 44,
  					y: 71
  				}
  			],
  			'14': [
  				{
  					primitive: cloud,
  					x: 5,
  					y: 9,
  					scale: 0.8,
  					flip: true,
  					tint: 0.3
  				},
  				{
  					primitive: lightning,
  					x: 14,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.4
  				},
  				{
  					primitive: snowflake,
  					x: 44,
  					y: 71
  				}
  			]
  		};
  
  module.exports = WeatherSymbol;
  
  /**
   * Constructor
   */
  function WeatherSymbol (scale, canvas) {
  	this.scale = scale || 1;
  	this.canvas;
  	this.bg;
  
  	if (canvas) {
  		this.canvas = canvas;
  		this.bg = this.getBG(canvas);
  	}
  }
  
  /**
   * Draw symbol into 'canvas'
   * Takes data from 'data-' attributes
   * @param {CanvasElement} canvas
   */
  WeatherSymbol.prototype.draw = function(canvas) {
  	canvas = this.canvas || canvas;
  	if (!canvas) return;
  
  	var bg = this.getBG(canvas)
  		, ctx = canvas.getContext('2d')
  		, attr = canvas.getAttribute('data-id').split('.')
  		, id = attr[0]
  		, phase = (attr.length > 1)
  			? parseInt(attr[1],10) + 1
  			: 0
  		, formula = FORMULA[id]
  		, w = canvas.offsetWidth
  		, h = canvas.offsetHeight
  		, scale = (w/100) * this.scale
  		, layer, options;
  	canvas.width = w * this.scale;
  	canvas.height = h * this.scale;
  
  	if (formula) {
  		for (var i = 0, n = formula.length; i < n; i++) {
  			layer = formula[i];
  			options = {
  				x: Math.round(layer.x * scale),
  				y: Math.round(layer.y * scale),
  				scale: (layer.scale || 1) * scale,
  				small: layer.small,
  				flip: layer.flip,
  				tint: layer.tint,
  				winter: layer.winter,
  				phase: phase,
  				width: w * this.scale,
  				height: h * this.scale,
  				bg: bg
  			};
  			layer.primitive.render(ctx, options);
  		}
  	}
  };
  
  WeatherSymbol.prototype.getBG = function (canvas) {
  	return this.bg
  		|| window.getComputedStyle(canvas).getPropertyValue('background-color');
  };
  
});
require.register('main', function(module, exports, require) {
  var dust = require('dust')
  	, data = {"symbols":[{"title":"clear","variations":[{"id":"01d"},{"id":"01m"},{"id":"01n"}]},{"title":"fair","variations":[{"id":"02d"},{"id":"02m"},{"id":"02n"}]},{"title":"partly cloudy","variations":[{"id":"03d"},{"id":"03m"},{"id":"03n"}]},{"title":"cloudy","variations":[{"id":"04"}]},{"title":"rain showers","variations":[{"id":"05d"},{"id":"05m"},{"id":"05n"}]},{"title":"sleet showers","variations":[{"id":"07d"},{"id":"07m"},{"id":"07n"}]},{"title":"snow showers","variations":[{"id":"08d"},{"id":"08m"},{"id":"08n"}]},{"title":"rain","variations":[{"id":"09"}]},{"title":"heavy rain","variations":[{"id":"10"}]},{"title":"sleet","variations":[{"id":"12"}]},{"title":"snow","variations":[{"id":"13"}]},{"title":"fog","variations":[{"id":"15"}]},{"title":"rain showers with thunder","variations":[{"id":"06d"},{"id":"06m"},{"id":"06n"}]},{"title":"sleet showers with thunder","variations":[{"id":"20d"},{"id":"20m"},{"id":"20n"}]},{"title":"snow showers with thunder","variations":[{"id":"21d"},{"id":"21m"},{"id":"21n"}]},{"title":"rain with thunder","variations":[{"id":"22"}]},{"title":"heavy rain with thunder","variations":[{"id":"11"}]},{"title":"sleet with thunder","variations":[{"id":"23"}]},{"title":"snow with thunder","variations":[{"id":"14"}]}]}
  	, template = require('./symbolGroup')
  	, WeatherSymbol = require('./WeatherSymbol')
  	, symbol = new WeatherSymbol(1)
  	, el = document.getElementById('symbols');
  
  // Render template
  dust.render('symbolGroup', data, function(err, html) {
  	if (err) {
  		console.log(err);
  	} else {
  		el.innerHTML = html;
  	}
  });
  
  
  // Draw canvas symbols
  Array.prototype.slice.call(document.querySelectorAll('.symbol'))
  	.forEach(symbol.draw, symbol);
});
require('main');