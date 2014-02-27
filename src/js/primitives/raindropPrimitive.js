var svg = require('../utils/svg')
	, style = require('style')
	, Trait = require('trait')
	, TPrimitive = require('./TPrimitive')

	, FILL_COLOUR = style.getDocumentStyle('.raindrop', 'fill') || '#1671CC'

	, TRaindropPrimitive;

TRaindropPrimitive = Trait({
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
			this.getUseAttributes('#raindrop', options)
		);
	},

	/**
	 * Render canvas version
	 * @param {DOMElement} element
	 * @param {Object} options
	 */
	renderCanvas: function (element, options) {
		var ctx = element.getContext('2d');

		// Stroke
		ctx.save();
		ctx.fillStyle = options.bg;
		ctx.translate(options.x, options.y)
		ctx.scale(options.scale, options.scale);
		ctx.save();
		ctx.globalCompositeOperation = 'destination-out';
		ctx.beginPath();
		ctx.arc(9,9,9,0,this.TWO_PI,true);
		ctx.closePath();
		ctx.fill();
		ctx.restore();

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
	}
});

module.exports = Trait.compose(
	TPrimitive,
	TRaindropPrimitive
).create();
