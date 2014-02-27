var svg = require('../utils/svg')
	, Trait = require('trait')
	, TPrimitive = require('./TPrimitive')

	, TFogPrimitive;

TFogPrimitive = Trait({
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
			this.getUseAttributes('#fog', options)
		);
	},

	/**
	 * Render canvas version
	 * @param {DOMElement} element
	 * @param {Object} options
	 */
	renderCanvas: function (element, options) {
		var ctx = element.getContext('2d')
			, tint = Math.floor(255 * (1-options.tint));

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
		ctx.moveTo(80.1,58);
		ctx.lineTo(10.9,58);
		ctx.bezierCurveTo(9.3,58,8,58.9,8,60);
		ctx.bezierCurveTo(8,61.1,9.3,62,10.9,62);
		ctx.lineTo(80.10000000000001,62);
		ctx.bezierCurveTo(81.7,62,83.00000000000001,61.1,83.00000000000001,60);
		ctx.bezierCurveTo(83.00000000000001,58.9,81.7,58,80.1,58);
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
	}
});

module.exports = Trait.compose(
	TPrimitive,
	TFogPrimitive
).create();