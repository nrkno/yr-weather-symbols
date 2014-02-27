var svg = require('../utils/svg')
	, style = require('style')
	, Trait = require('trait')
	, TPrimitive = require('./TPrimitive')

	, FILL_COLOUR = style.getDocumentStyle('.sleet', 'fill') || '#1EB9D8'

	, TSleetPrimitive;

TSleetPrimitive = Trait({
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
			this.getUseAttributes('#sleet', options)
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
	}
});

module.exports = Trait.compose(
	TPrimitive,
	TSleetPrimitive
).create();
