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
  /*! Dust - Asynchronous Templating - v2.3.3
  * http://linkedin.github.io/dustjs/
  * Copyright (c) 2014 Aleksander Williams; Released under the MIT License */
  (function(root) {
    var dust = {},
        NONE = 'NONE',
        ERROR = 'ERROR',
        WARN = 'WARN',
        INFO = 'INFO',
        DEBUG = 'DEBUG',
        loggingLevels = [DEBUG, INFO, WARN, ERROR, NONE],
        EMPTY_FUNC = function() {},
        logger = EMPTY_FUNC,
        loggerContext = this;
  
    dust.debugLevel = NONE;
    dust.silenceErrors = false;
  
    // Try to find the console logger in global scope
    if (root && root.console && root.console.log) {
      logger = root.console.log;
      loggerContext = root.console;
    }
  
    /**
     * If dust.isDebug is true, Log dust debug statements, info statements, warning statements, and errors.
     * This default implementation will print to the console if it exists.
     * @param {String|Error} message the message to print/throw
     * @param {String} type the severity of the message(ERROR, WARN, INFO, or DEBUG)
     * @public
     */
    dust.log = function(message, type) {
      if(dust.isDebug && dust.debugLevel === NONE) {
        logger.call(loggerContext, '[!!!DEPRECATION WARNING!!!]: dust.isDebug is deprecated.  Set dust.debugLevel instead to the level of logging you want ["debug","info","warn","error","none"]');
        dust.debugLevel = INFO;
      }
  
      type = type || INFO;
      if (loggingLevels.indexOf(type) >= loggingLevels.indexOf(dust.debugLevel)) {
        if(!dust.logQueue) {
          dust.logQueue = [];
        }
        dust.logQueue.push({message: message, type: type});
        logger.call(loggerContext, '[DUST ' + type + ']: ' + message);
      }
  
      if (!dust.silenceErrors && type === ERROR) {
        if (typeof message === 'string') {
          throw new Error(message);
        } else {
          throw message;
        }
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
      logger.call(loggerContext, '[!!!DEPRECATION WARNING!!!]: dust.onError will no longer return a chunk object.');
      dust.log(error.message || error, ERROR);
      if(!dust.silenceErrors) {
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
        dust.log(err, ERROR);
      }
    };
  
    dust.stream = function(name, context) {
      var stream = new Stream();
      dust.nextTick(function() {
        try {
          dust.load(name, stream.head, Context.wrap(context, name)).end();
        } catch (err) {
          dust.log(err, ERROR);
        }
      });
      return stream;
    };
  
    dust.renderSource = function(source, context, callback) {
      return dust.compileFn(source)(context, callback);
    };
  
    dust.compileFn = function(source, name) {
      // name is optional. When name is not provided the template can only be rendered using the callable returned by this function.
      // If a name is provided the compiled template can also be rendered by name.
      name = name || null;
      var tmpl = dust.loadSource(dust.compile(source, name));
      return function(context, callback) {
        var master = callback ? new Stub(callback) : new Stream();
        dust.nextTick(function() {
          if(typeof tmpl === 'function') {
            tmpl(master.head, Context.wrap(context, name)).end();
          }
          else {
            dust.log(new Error('Template [' + name + '] cannot be resolved to a Dust function'), ERROR);
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
      return function(callback) {
        setTimeout(callback,0);
      };
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
            dust.log('Invalid filter [' + name + ']', WARN);
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
          try {
            return ctx.apply(ctxThis, arguments);
          } catch (err) {
            return dust.log(err, ERROR);
          }
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
    };
  
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
          dust.log('Chunk error [' + chunk.error + '] thrown. Ceasing to render this template.', WARN);
          this.flush = EMPTY_FUNC;
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
          dust.log('Chunk error [' + chunk.error + '] thrown. Ceasing to render this template.', WARN);
          this.flush = EMPTY_FUNC;
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
        dust.log('Event Handler [' + handler + '] is not of a type that is handled by emit', WARN);
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
          dust.log(err, ERROR);
        }
      }).on('end', function() {
        try {
          return stream.end();
        } catch (err) {
          dust.log(err, ERROR);
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
          dust.log('Invalid helper [' + name + ']', WARN);
          return chunk;
        }
      } catch (err) {
        dust.log(err, ERROR);
        return chunk;
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
  
  
    if (typeof exports === 'object') {
      module.exports = dust;
    } else {
      root.dust = dust;
    }
  
  })(this);
  
  
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
  	, STROKE_WIDTH = 4;  
    
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
  		ctx.moveTo(64.4,16.1);  
  		ctx.lineTo(87.6,10);  
  		ctx.bezierCurveTo(89.6,9.5,89.6,6.7,87.6,6.1);  
  		ctx.lineTo(64.4,0.1);  
  		ctx.lineTo(76.60000000000001,-20.7);  
  		ctx.bezierCurveTo(77.60000000000001,-22.5,75.60000000000001,-24.5,73.9,-23.4);  
  		ctx.lineTo(53.1,-11.2);  
  		ctx.lineTo(47,-34.5);  
  		ctx.bezierCurveTo(46.5,-36.5,43.7,-36.5,43.1,-34.5);  
  		ctx.lineTo(37,-11.2);  
  		ctx.lineTo(16.3,-23.4);  
  		ctx.bezierCurveTo(14.5,-24.4,12.5,-22.4,13.600000000000001,-20.7);  
  		ctx.lineTo(25.8,0.1);  
  		ctx.lineTo(2.5,6.1);  
  		ctx.bezierCurveTo(0.5,6.6,0.5,9.399999999999999,2.5,10);  
  		ctx.lineTo(25.8,16.1);  
  		ctx.lineTo(13.6,36.8);  
  		ctx.bezierCurveTo(12.6,38.599999999999994,14.6,40.599999999999994,16.3,39.5);  
  		ctx.lineTo(37.1,27.3);  
  		ctx.lineTo(43.2,50.6);  
  		ctx.bezierCurveTo(43.7,52.6,46.5,52.6,47.1,50.6);  
  		ctx.lineTo(53.2,27.3);  
  		ctx.lineTo(74,39.5);  
  		ctx.bezierCurveTo(75.8,40.5,77.8,38.5,76.7,36.8);  
  		ctx.lineTo(64.4,16.1);  
  		ctx.closePath();  
  		ctx.fill();  
    
  		// Center fill  
  		ctx.fillStyle = CENTER_COLOUR;  
  		ctx.beginPath();  
  		ctx.arc(45,8,22.5,0,TWO_PI,true);  
  		ctx.closePath();  
  		ctx.fill();  
  		ctx.stroke();  
    
  	} else {  
  		// Rays  
  		ctx.fillStyle = RAY_COLOUR;  
  		ctx.beginPath();  
  		ctx.moveTo(64.3,53);  
  		ctx.lineTo(87.6,46.9);  
  		ctx.bezierCurveTo(89.6,46.4,89.6,43.6,87.6,43);  
  		ctx.lineTo(64.3,37);  
  		ctx.lineTo(76.5,16.2);  
  		ctx.bezierCurveTo(77.5,14.399999999999999,75.5,12.399999999999999,73.8,13.5);  
  		ctx.lineTo(53,25.7);  
  		ctx.lineTo(46.9,2.4);  
  		ctx.bezierCurveTo(46.4,0.3999999999999999,43.6,0.3999999999999999,43,2.4);  
  		ctx.lineTo(37,25.7);  
  		ctx.lineTo(16.3,13.5);  
  		ctx.bezierCurveTo(14.5,12.5,12.5,14.5,13.600000000000001,16.2);  
  		ctx.lineTo(25.7,37);  
  		ctx.lineTo(2.4,43.1);  
  		ctx.bezierCurveTo(0.3999999999999999,43.6,0.3999999999999999,46.4,2.4,47);  
  		ctx.lineTo(25.7,53);  
  		ctx.lineTo(13.5,73.7);  
  		ctx.bezierCurveTo(12.5,75.5,14.5,77.5,16.2,76.4);  
  		ctx.lineTo(37,64.3);  
  		ctx.lineTo(43.1,87.6);  
  		ctx.bezierCurveTo(43.6,89.6,46.4,89.6,47,87.6);  
  		ctx.lineTo(53,64.3);  
  		ctx.lineTo(73.8,76.5);  
  		ctx.bezierCurveTo(75.6,77.5,77.6,75.5,76.5,73.8);  
  		ctx.lineTo(64.3,53);  
  		ctx.closePath();  
  		ctx.fill();  
    
  		// Center fill  
  		ctx.fillStyle = CENTER_COLOUR;  
  		ctx.beginPath();  
  		ctx.arc(45,45,22.5,0,TWO_PI,true);  
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
  var STROKE_WIDTH = 4  
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
  	ctx.moveTo(55.6,2);  
  	ctx.bezierCurveTo(46,1.7,37.1,7,34.1,17.3);  
  	ctx.bezierCurveTo(28,15.8,18.1,19.7,16.3,28.200000000000003);  
  	ctx.bezierCurveTo(10.1,28,2,33.1,2,41.6);  
  	ctx.bezierCurveTo(2,51,9,56,21.5,56);  
  	ctx.lineTo(65.1,56);  
  	ctx.bezierCurveTo(70.69999999999999,56,78,55.5,82.39999999999999,53.4);  
  	ctx.bezierCurveTo(97.3,46.199999999999996,94.69999999999999,21.1,75.99999999999999,18.799999999999997);  
  	ctx.bezierCurveTo(73.7,7.9,65.1,2.3,55.6,2);  
  	ctx.closePath();  
  	ctx.fill();  
  	ctx.stroke();  
  	ctx.restore();  
  };
});
require.register('primitives/raindropPrimitive', function(module, exports, require) {
  var TWO_PI = Math.PI * 2  
  	, FILL_COLOUR = '#1671CC';  
    
  exports.render = function(ctx, options) {  
  	// Stroke  
  	ctx.save();  
  	ctx.fillStyle = options.bg;  
  	ctx.translate(options.x, options.y)  
  	ctx.scale(options.scale, options.scale);  
  	ctx.fillStyle = options.bg;  
  	ctx.beginPath();  
  	ctx.arc(9,9,9,0,TWO_PI,true);  
  	ctx.closePath();  
  	ctx.fill();  
    
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
  };
});
require.register('primitives/sleetPrimitive', function(module, exports, require) {
  var TWO_PI = Math.PI * 2
  	, FILL_COLOUR = '#1EB9D8';
  
  exports.render = function(ctx, options) {
  	// Stroke
  	ctx.save();
  	ctx.fillStyle = options.bg;
  	ctx.translate(options.x, options.y)
  	ctx.scale(options.scale, options.scale);
  	ctx.fillStyle = options.bg;
  	ctx.beginPath();
  	ctx.arc(9,9,9,0,TWO_PI,true);
  	ctx.closePath();
  	ctx.fill();
  
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
  };
});
require.register('primitives/snowflakePrimitive', function(module, exports, require) {
  var TWO_PI = Math.PI * 2  
  	, FILL_COLOUR = '#54BFE3';  
    
  exports.render = function(ctx, options) {  
  	// Stroke  
  	ctx.save();  
  	ctx.fillStyle = options.bg;  
  	ctx.translate(options.x, options.y)  
  	ctx.scale(options.scale, options.scale);  
  	ctx.fillStyle = options.bg;  
  	ctx.beginPath();  
  	ctx.arc(9,9,9,0,TWO_PI,true);  
  	ctx.closePath();  
  	ctx.fill();  
    
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
  	ctx.moveTo(80.1,59);  
  	ctx.lineTo(10.9,59);  
  	ctx.bezierCurveTo(9.3,59,8,59.9,8,61);  
  	ctx.bezierCurveTo(8,62.1,9.3,63,10.9,63);  
  	ctx.lineTo(80.10000000000001,63);  
  	ctx.bezierCurveTo(81.7,63,83.00000000000001,62.1,83.00000000000001,61);  
  	ctx.bezierCurveTo(83.00000000000001,59.9,81.7,59,80.1,59);  
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
  // Convert with http://www.professorcloud.com/svg-to-canvas/
  
  var sun = require('primitives/sunPrimitive')
  	, moon = require('primitives/moonPrimitive')
  	, cloud = require('primitives/cloudPrimitive')
  	, raindrop = require('primitives/raindropPrimitive')
  	, sleet = require('primitives/sleetPrimitive')
  	, snowflake = require('primitives/snowflakePrimitive')
  	, fog = require('primitives/fogPrimitive')
  	, lightning = require('primitives/lightningPrimitive')
  
  	, DEFAULT_BG = '#ffffff'
  	, FORMULA = {
  			// Sun
  			'01d': [
  				{
  					primitive: sun,
  					x: 6,
  					y: 6
  				}
  			],
  			'02d': [
  				{
  					primitive: sun,
  					x: 6,
  					y: 6
  				},
  				{
  					primitive: cloud,
  					x: 8,
  					y: 56,
  					scale: 0.6,
  					flip: true,
  					tint: 0.1
  				}
  			],
  			'03d': [
  				{
  					primitive: sun,
  					x: 4,
  					y: 7,
  					scale: 0.6
  				},
  				{
  					primitive: cloud,
  					x: 7,
  					y: 22,
  					tint: 0.1
  				}
  			],
  			'05d': [
  				{
  					primitive: sun,
  					x: 4,
  					y: 7,
  					scale: 0.6
  				},
  				{
  					primitive: cloud,
  					x: 7,
  					y: 22,
  					tint: 0.4
  				},
  				{
  					primitive: raindrop,
  					x: 61,
  					y: 72
  				},
  				{
  					primitive: raindrop,
  					x: 45,
  					y: 68
  				}
  			],
  			'07d': [
  				{
  					primitive: sun,
  					x: 4,
  					y: 7,
  					scale: 0.6
  				},
  				{
  					primitive: cloud,
  					x: 7,
  					y: 22,
  					tint: 0.4
  				},
  				{
  					primitive: sleet,
  					x: 52,
  					y: 72
  				},
  				{
  					primitive: sleet,
  					x: 36,
  					y: 68
  				}
  			],
  			'08d': [
  				{
  					primitive: sun,
  					x: 4,
  					y: 7,
  					scale: 0.6
  				},
  				{
  					primitive: cloud,
  					x: 7,
  					y: 22,
  					tint: 0.4
  				},
  				{
  					primitive: snowflake,
  					x: 22,
  					y: 71
  				},
  				{
  					primitive: snowflake,
  					x: 40,
  					y: 69
  				}
  			],
  			'06d': [
  				{
  					primitive: sun,
  					x: 4,
  					y: 7,
  					scale: 0.6
  				},
  				{
  					primitive: lightning,
  					x: 25,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 7,
  					y: 22,
  					tint: 0.4
  				},
  				{
  					primitive: raindrop,
  					x: 64,
  					y: 72
  				},
  				{
  					primitive: raindrop,
  					x: 48,
  					y: 68
  				}
  			],
  			'20d': [
  				{
  					primitive: sun,
  					x: 4,
  					y: 7,
  					scale: 0.6
  				},
  				{
  					primitive: lightning,
  					x: 17,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 7,
  					y: 22,
  					tint: 0.4
  				},
  				{
  					primitive: sleet,
  					x: 56,
  					y: 72
  				},
  				{
  					primitive: sleet,
  					x: 40,
  					y: 68
  				}
  			],
  			'21d': [
  				{
  					primitive: sun,
  					x: 4,
  					y: 7,
  					scale: 0.6
  				},
  				{
  					primitive: lightning,
  					x: 10,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 7,
  					y: 22,
  					tint: 0.4
  				},
  				{
  					primitive: snowflake,
  					x: 53,
  					y: 69
  				},
  				{
  					primitive: snowflake,
  					x: 35,
  					y: 71
  				}
  			],
  
  			// Winter sun
  			'01m': [
  				{
  					primitive: sun,
  					x: 5,
  					y: 32,
  					winter: true
  				}
  			],
  			'02m': [
  				{
  					primitive: sun,
  					x: 5,
  					y: 32,
  					winter: true
  				},
  				{
  					primitive: cloud,
  					x: 8,
  					y: 46,
  					scale: 0.6,
  					flip: true,
  					tint: 0.1
  				}
  			],
  			'03m': [
  				{
  					primitive: sun,
  					x: 8,
  					y: 20,
  					scale: 0.6,
  					winter: true
  				},
  				{
  					primitive: cloud,
  					x: 7,
  					y: 22,
  					tint: 0.1
  				}
  			],
  			'05m': [
  				{
  					primitive: sun,
  					x: 8,
  					y: 20,
  					scale: 0.6,
  					winter: true
  				},
  				{
  					primitive: cloud,
  					x: 7,
  					y: 22,
  					tint: 0.4
  				},
  				{
  					primitive: raindrop,
  					x: 61,
  					y: 72
  				},
  				{
  					primitive: raindrop,
  					x: 45,
  					y: 68
  				}
  			],
  			'07m': [
  				{
  					primitive: sun,
  					x: 8,
  					y: 20,
  					scale: 0.6,
  					winter: true
  				},
  				{
  					primitive: cloud,
  					x: 7,
  					y: 22,
  					tint: 0.4
  				},
  				{
  					primitive: sleet,
  					x: 52,
  					y: 72
  				},
  				{
  					primitive: sleet,
  					x: 36,
  					y: 68
  				}
  			],
  			'08m': [
  				{
  					primitive: sun,
  					x: 8,
  					y: 20,
  					scale: 0.6,
  					winter: true
  				},
  				{
  					primitive: cloud,
  					x: 7,
  					y: 22,
  					tint: 0.4
  				},
  				{
  					primitive: snowflake,
  					x: 22,
  					y: 71
  				},
  				{
  					primitive: snowflake,
  					x: 40,
  					y: 69
  				}
  			],
  			'06m': [
  				{
  					primitive: sun,
  					x: 8,
  					y: 20,
  					scale: 0.6,
  					winter: true
  				},
  				{
  					primitive: lightning,
  					x: 25,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 7,
  					y: 22,
  					tint: 0.4
  				},
  				{
  					primitive: raindrop,
  					x: 64,
  					y: 72
  				},
  				{
  					primitive: raindrop,
  					x: 48,
  					y: 68
  				}
  			],
  			'20m': [
  				{
  					primitive: sun,
  					x: 8,
  					y: 20,
  					scale: 0.6,
  					winter: true
  				},
  				{
  					primitive: lightning,
  					x: 17,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 7,
  					y: 22,
  					tint: 0.4
  				},
  				{
  					primitive: sleet,
  					x: 56,
  					y: 72
  				},
  				{
  					primitive: sleet,
  					x: 40,
  					y: 68
  				}
  			],
  			'21m': [
  				{
  					primitive: sun,
  					x: 8,
  					y: 20,
  					scale: 0.6,
  					winter: true
  				},
  				{
  					primitive: lightning,
  					x: 10,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 7,
  					y: 22,
  					tint: 0.4
  				},
  				{
  					primitive: snowflake,
  					x: 53,
  					y: 69
  				},
  				{
  					primitive: snowflake,
  					x: 35,
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
  					x: 8,
  					y: 56,
  					scale: 0.6,
  					flip: true,
  					tint: 0.1
  				}
  			],
  			'03n': [
  				{
  					primitive: moon,
  					x: 18,
  					y: 13,
  					scale: 0.6
  				},
  				{
  					primitive: cloud,
  					x: 7,
  					y: 22,
  					tint: 0.1
  				}
  			],
  			'05n': [
  				{
  					primitive: moon,
  					x: 18,
  					y: 13,
  					scale: 0.6
  				},
  				{
  					primitive: cloud,
  					x: 7,
  					y: 22,
  					tint: 0.4
  				},
  				{
  					primitive: raindrop,
  					x: 61,
  					y: 72
  				},
  				{
  					primitive: raindrop,
  					x: 45,
  					y: 68
  				}
  			],
  			'07n': [
  				{
  					primitive: moon,
  					x: 18,
  					y: 13,
  					scale: 0.6
  				},
  				{
  					primitive: cloud,
  					x: 7,
  					y: 22,
  					tint: 0.4
  				},
  				{
  					primitive: sleet,
  					x: 52,
  					y: 72
  				},
  				{
  					primitive: sleet,
  					x: 36,
  					y: 68
  				}
  			],
  			'08n': [
  				{
  					primitive: moon,
  					x: 18,
  					y: 13,
  					scale: 0.6
  				},
  				{
  					primitive: cloud,
  					x: 7,
  					y: 22,
  					tint: 0.4
  				},
  				{
  					primitive: snowflake,
  					x: 22,
  					y: 71
  				},
  				{
  					primitive: snowflake,
  					x: 40,
  					y: 69
  				}
  			],
  			'06n': [
  				{
  					primitive: moon,
  					x: 18,
  					y: 13,
  					scale: 0.6
  				},
  				{
  					primitive: lightning,
  					x: 25,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 7,
  					y: 22,
  					tint: 0.4
  				},
  				{
  					primitive: raindrop,
  					x: 64,
  					y: 72
  				},
  				{
  					primitive: raindrop,
  					x: 48,
  					y: 68
  				}
  			],
  			'20n': [
  				{
  					primitive: moon,
  					x: 18,
  					y: 13,
  					scale: 0.6
  				},
  				{
  					primitive: lightning,
  					x: 17,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 7,
  					y: 22,
  					tint: 0.4
  				},
  				{
  					primitive: sleet,
  					x: 56,
  					y: 72
  				},
  				{
  					primitive: sleet,
  					x: 40,
  					y: 68
  				}
  			],
  			'21n': [
  				{
  					primitive: moon,
  					x: 18,
  					y: 13,
  					scale: 0.6
  				},
  				{
  					primitive: lightning,
  					x: 10,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 7,
  					y: 22,
  					tint: 0.4
  				},
  				{
  					primitive: snowflake,
  					x: 53,
  					y: 69
  				},
  				{
  					primitive: snowflake,
  					x: 35,
  					y: 71
  				}
  			],
  
  			// Cloud
  			'15': [
  				{
  					primitive: fog,
  					x: 4,
  					y: 18,
  					tint: 0.15
  				}
  			],
  			'04': [
  				{
  					primitive: cloud,
  					x: 5,
  					y: 10,
  					scale: 0.8,
  					flip: true,
  					tint: 0.1
  				},
  				{
  					primitive: cloud,
  					x: 7,
  					y: 22,
  					tint: 0.15
  				}
  			],
  			'09': [
  				{
  					primitive: cloud,
  					x: 5,
  					y: 10,
  					scale: 0.8,
  					flip: true,
  					tint: 0.3
  				},
  				{
  					primitive: cloud,
  					x: 7,
  					y: 22,
  					tint: 0.4
  				},
  				{
  					primitive: raindrop,
  					x: 61,
  					y: 72
  				},
  				{
  					primitive: raindrop,
  					x: 45,
  					y: 68
  				}
  			],
  			'10': [
  				{
  					primitive: cloud,
  					x: 5,
  					y: 10,
  					scale: 0.8,
  					flip: true,
  					tint: 0.4
  				},
  				{
  					primitive: cloud,
  					x: 7,
  					y: 22,
  					tint: 0.5
  				},
  				{
  					primitive: raindrop,
  					x: 71,
  					y: 72
  				},
  				{
  					primitive: raindrop,
  					x: 55,
  					y: 72
  				},
  				{
  					primitive: raindrop,
  					x: 39,
  					y: 68
  				}
  			],
  			'12': [
  				{
  					primitive: cloud,
  					x: 5,
  					y: 10,
  					scale: 0.8,
  					flip: true,
  					tint: 0.3
  				},
  				{
  					primitive: cloud,
  					x: 7,
  					y: 22,
  					tint: 0.4
  				},
  				{
  					primitive: sleet,
  					x: 52,
  					y: 72
  				},
  				{
  					primitive: sleet,
  					x: 36,
  					y: 68
  				}
  			],
  			'13': [
  				{
  					primitive: cloud,
  					x: 5,
  					y: 10,
  					scale: 0.8,
  					flip: true,
  					tint: 0.3
  				},
  				{
  					primitive: cloud,
  					x: 7,
  					y: 22,
  					tint: 0.4
  				},
  				{
  					primitive: snowflake,
  					x: 40,
  					y: 69
  				},
  				{
  					primitive: snowflake,
  					x: 22,
  					y: 71
  				}
  			],
  			'22': [
  				{
  					primitive: cloud,
  					x: 5,
  					y: 10,
  					scale: 0.8,
  					flip: true,
  					tint: 0.3
  				},
  				{
  					primitive: lightning,
  					x: 25,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 7,
  					y: 22,
  					tint: 0.4
  				},
  				{
  					primitive: raindrop,
  					x: 64,
  					y: 72
  				},
  				{
  					primitive: raindrop,
  					x: 48,
  					y: 68
  				}
  			],
  			'11': [
  				{
  					primitive: cloud,
  					x: 5,
  					y: 10,
  					scale: 0.8,
  					flip: true,
  					tint: 0.4
  				},
  				{
  					primitive: lightning,
  					x: 18,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 7,
  					y: 22,
  					tint: 0.5
  				},
  				{
  					primitive: raindrop,
  					x: 73,
  					y: 72
  				},
  				{
  					primitive: raindrop,
  					x: 57,
  					y: 72
  				},
  				{
  					primitive: raindrop,
  					x: 41,
  					y: 68
  				}
  			],
  			'23': [
  				{
  					primitive: cloud,
  					x: 5,
  					y: 10,
  					scale: 0.8,
  					flip: true,
  					tint: 0.3
  				},
  				{
  					primitive: lightning,
  					x: 17,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 7,
  					y: 22,
  					tint: 0.4
  				},
  				{
  					primitive: sleet,
  					x: 56,
  					y: 72
  				},
  				{
  					primitive: sleet,
  					x: 40,
  					y: 68
  				}
  			],
  			'14': [
  				{
  					primitive: cloud,
  					x: 5,
  					y: 10,
  					scale: 0.8,
  					flip: true,
  					tint: 0.3
  				},
  				{
  					primitive: lightning,
  					x: 10,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 7,
  					y: 22,
  					tint: 0.4
  				},
  				{
  					primitive: snowflake,
  					x: 53,
  					y: 69
  				},
  				{
  					primitive: snowflake,
  					x: 35,
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
  	if (w != 0) {
  		canvas.width = w * this.scale;
  		canvas.height = h * this.scale;
  	}
  
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
  	, data = {"symbols":[{"title":"clear","variations":[{"id":"01d"},{"id":"01m"},{"id":"01n"}]},{"title":"fair","variations":[{"id":"02d"},{"id":"02m"},{"id":"02n"}]},{"title":"partly cloudy","variations":[{"id":"03d"},{"id":"03m"},{"id":"03n"}]},{"title":"cloudy","variations":[{"id":"04"}]},{"title":"light rain showers","variations":[{"id":"40d"},{"id":"40m"},{"id":"40n"}]},{"title":"rain showers","variations":[{"id":"05d"},{"id":"05m"},{"id":"05n"}]},{"title":"heavy rain showers","variations":[{"id":"41d"},{"id":"41m"},{"id":"41n"}]},{"title":"light sleet showers","variations":[{"id":"42d"},{"id":"42m"},{"id":"42n"}]},{"title":"sleet showers","variations":[{"id":"07d"},{"id":"07m"},{"id":"07n"}]},{"title":"heavy sleet showers","variations":[{"id":"43d"},{"id":"43m"},{"id":"43n"}]},{"title":"light snow showers","variations":[{"id":"44d"},{"id":"44m"},{"id":"44n"}]},{"title":"snow showers","variations":[{"id":"08d"},{"id":"08m"},{"id":"08n"}]},{"title":"heavy snow showers","variations":[{"id":"45d"},{"id":"45m"},{"id":"45n"}]},{"title":"light rain","variations":[{"id":"46"}]},{"title":"rain","variations":[{"id":"09"}]},{"title":"heavy rain","variations":[{"id":"10"}]},{"title":"light sleet","variations":[{"id":"47"}]},{"title":"sleet","variations":[{"id":"12"}]},{"title":"heavy sleet","variations":[{"id":"48"}]},{"title":"light snow","variations":[{"id":"49"}]},{"title":"snow","variations":[{"id":"13"}]},{"title":"heavy snow","variations":[{"id":"50"}]},{"title":"fog","variations":[{"id":"15"}]},{"title":"light rain showers with thunder","variations":[{"id":"24d"},{"id":"24m"},{"id":"24n"}]},{"title":"rain showers with thunder","variations":[{"id":"06d"},{"id":"06m"},{"id":"06n"}]},{"title":"heavy rain showers with thunder","variations":[{"id":"25d"},{"id":"25m"},{"id":"25n"}]},{"title":"light sleet showers with thunder","variations":[{"id":"26d"},{"id":"26m"},{"id":"26n"}]},{"title":"sleet showers with thunder","variations":[{"id":"20d"},{"id":"20m"},{"id":"20n"}]},{"title":"heavy sleet showers with thunder","variations":[{"id":"27d"},{"id":"27m"},{"id":"27n"}]},{"title":"light snow showers with thunder","variations":[{"id":"28d"},{"id":"28m"},{"id":"28n"}]},{"title":"snow showers with thunder","variations":[{"id":"21d"},{"id":"21m"},{"id":"21n"}]},{"title":"heavy snow showers with thunder","variations":[{"id":"29d"},{"id":"29m"},{"id":"29n"}]},{"title":"light rain with thunder","variations":[{"id":"30"}]},{"title":"rain with thunder","variations":[{"id":"22"}]},{"title":"heavy rain with thunder","variations":[{"id":"11"}]},{"title":"light sleet with thunder","variations":[{"id":"32"}]},{"title":"sleet with thunder","variations":[{"id":"23"}]},{"title":"heavy sleet with thunder","variations":[{"id":"32"}]},{"title":"light snow with thunder","variations":[{"id":"33"}]},{"title":"snow with thunder","variations":[{"id":"14"}]},{"title":"heavy snow with thunder","variations":[{"id":"34"}]}]}
  	, template = require('symbolGroup')
  	, WeatherSymbol = require('WeatherSymbol')
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