var svg = require('../utils/svg')
	, style = require('style')
	, Trait = require('trait')
	, TPrimitive = require('./TPrimitive')

	, FILL_COLOUR = style.getDocumentStyle('.lightning', 'fill') || '#c9af16'

	, TLightningPrimitive;

TLightningPrimitive = Trait({
	/**
	 * Render svg version
	 * @param {DOMElement} element
	 * @param {Object} options
	 * @returns {String}
	 */
	renderSVG: function (element, options) {
		svg.appendChild(
			element,
			'use',
			this.getUseAttributes('#lightning', options)
		);
	},

	/**
	 * Render canvas version
	 * @param {DOMElement} element
	 * @param {Object} options
	 */
	renderCanvas: function (element, options) {
		var ctx = element.getContext('2d');

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
	}
});

module.exports = Trait.compose(
	TPrimitive,
	TLightningPrimitive
).create();