var Trait = require('trait')
	, ease = require('ease/lib/quad').outQuad.js;

module.exports = Trait({
	TWO_PI: Math.PI * 2,
	MAX_WIDTH: 100,
	OFFSET: 10,

	type: '',
	x: 0,
	y: 0,
	scale: 1,
	tint: 1,
	opacity: 1,
	flip: false,
	winter: false,
	bg: '',
	transitionDuration: 0,
	transitionStart: 0,
	transitionProps: null,

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
		this.transitionDuration = options.transitionDuration;
		return this;
	},

	/**
	 * Transition instance with 'options'
	 * @param {Object} options
	 */
	transition: function (options) {
		this.transitionStart = options.time;
		this.update(options);
	},

	/**
	 * Update instance with 'options'
	 * @param {Object} options
	 */
	update: function (options) {
		// Copy props to instance
		for (var prop in options) {
			if (this.hasOwnProperty(prop)) this[prop] = options[prop];
		}

		// Compute transition target props
		if (this.transitionProps) {
			var isComplete = (options.time >= this.transitionStart + this.transitionDuration)
				, elapsed = isComplete ? this.transitionStart + this.transitionDuration : options.time - this.transitionStart
				, prop;

			// Set transition props
			for (var i = 0, n = this.transitionProps.length; i < n; i++) {
				prop = this.transitionProps[i];
				// Tween or set final
				this[prop] = isComplete
					? this['_' + prop] + this['_d' + prop]
					: ease(elapsed, this['_' + prop], this['_d' + prop], this.transitionDuration);
				if (prop == 'scale' && this[prop] > 1) console.log(options.time, elapsed, this.transitionStart, this['_' + prop], this['_d' + prop])
			}

			// Clear
			if (isComplete) this.transitionProps = null;
		}
	},

	/**
	 * Render primitive
	 * @param {SVGElement | CanvasContext} element
	 * @param {Object} [options]
	 */
	render: function (element, options) {
		if (options) this.update(options);

		if (this.type == 'svg') {
			return this.renderSVG(element);
		} else {
			return this.renderCanvas(element);
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

	renderSVG: Trait.required,
	renderCanvas: Trait.required
});
