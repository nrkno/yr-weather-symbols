var Trait = require('trait');

module.exports = Trait({
	TWO_PI: Math.PI * 2,
	MAX_WIDTH: 100,

	type: '',
	x: 0,
	y: 0,
	scale: 1,
	tint: 1,
	flip: false,
	winter: false,
	bg: '',

	initialize: function () {
		return this;
	},

	/**
	 * Render primitive
	 * @param {SVGElement | CanvasContext} element
	 * @param {Object} options
	 */
	render: function (element, options) {
		this.update(options);

		if (this.type == 'svg') {
			return this.renderSVG(element);
		} else {
			return this.renderCanvas(element);
		}
	},

	update: function (options) {
		for (var prop in options) {
			if (this.hasOwnProperty(prop)) this[prop] = options[prop];
		}
	},

	translateCanvas: function (ctx) {
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
	renderCanvas: Trait.required,
	show: Trait.required,
	hide: Trait.required,
	move: Trait.required
});
