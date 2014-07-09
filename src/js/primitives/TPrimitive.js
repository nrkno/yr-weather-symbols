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
