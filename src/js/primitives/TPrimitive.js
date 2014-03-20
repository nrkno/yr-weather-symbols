var Trait = require('trait')
	, ease = require('ease/lib/quad').outQuad.js;

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
	show: function (time, start, duration, options) {
		if (!this.visible && this.animate('show', options)) {
			this.visible = true;
			this.animation = 'show';
			this.start = start;
			this.duration = duration;
			this.update(time, options);
		}
	},

	/**
	 * Hide transition
	 * @params {Object} options
	 */
	hide: function (time, start, duration, options) {
		if (this.animate('hide', options)) {
			this.animation = 'hide';
			this.start = start;
			this.duration = duration;
			this.update(time, options);
		}
	},

	/**
	 * Move transition
	 * @params {Object} options
	 */
	move: function (time, start, duration, options) {
		if (this.animate('move', options)) {
			this.animation = 'move';
			this.start = start;
			this.duration = duration;
			this.update(time, options);
		}
	},

	/**
	 * Update instance with 'options' at 'time'
	 * @param {Number} time
	 * @param {Object} options
	 */
	update: function (time, options) {
		if ('number' != typeof time) {
			options = time;
			time = 0;
		}

		if (options) {
			this.extend(options);
		}

		// Animating
		if (this.animation) {
			var end = this.start + this.duration
				, isComplete = (time >= end)
				, prop;

			for (var i = 0, n = this.animationProps.length; i < n; i++) {
				prop = this.animationProps[i];
				this[prop] = isComplete
					? this['_' + prop] + this['_d' + prop]
					: ease(time - this.start, this['_' + prop], this['_d' + prop], this.duration);
			}

			if (isComplete) {
				this.duration = 0;
				this.start = 0;
				if (this.animation == 'hide') this.visible = false;
				this.animation = '';
				this.animationProps = null;
			}
		}

		// Compute transition target props
		// if (this.transitionProps) {
		// 	var isComplete = (options.time >= this.transitionStart + this.transitionDuration)
		// 		, elapsed = isComplete ? this.transitionStart + this.transitionDuration : options.time - this.transitionStart
		// 		, prop;

		// 	// Set transition props
		// 	for (var i = 0, n = this.transitionProps.length; i < n; i++) {
		// 		prop = this.transitionProps[i];
		// 		// Tween or set final
		// 		this[prop] = isComplete
		// 			? this['_' + prop] + this['_d' + prop]
		// 			: ease(elapsed, this['_' + prop], this['_d' + prop], this.transitionDuration);
		// 		if (prop == 'scale' && this[prop] > 1) console.log(options.time, elapsed, this.transitionStart, this['_' + prop], this['_d' + prop])
		// 	}

		// 	// Clear
		// 	if (isComplete) this.transitionProps = null;
		// }
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

	extend: function (options) {
		// Copy props to instance
		for (var prop in options) {
			if (this.hasOwnProperty(prop)) this[prop] = options[prop];
		}
	},

	renderSVG: Trait.required,
	renderCanvas: Trait.required,
	animate: Trait.required
});
