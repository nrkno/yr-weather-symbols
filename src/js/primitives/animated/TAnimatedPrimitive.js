var trait = require('trait')
	, easeOut = require('ease/lib/quad').outQuad.js
	, easeIn = require('ease/lib/quad').inOutQuad.js;

module.exports = trait({
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

	renderSVG: trait.required,
	renderCanvas: trait.required,
	animate: trait.required
});
