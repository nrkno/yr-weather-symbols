var svg = require('../utils/svg')
	, style = require('style')
	, Trait = require('trait')
	, TPrimitive = require('./TPrimitive')

	, RAY_COLOUR = style.getDocumentStyle('.sun-ray', 'fill') || '#e88d15'
	, CENTER_COLOUR = style.getDocumentStyle('.sun-centre', 'fill') ||'#faba2f'
	, HORIZON_COLOUR = style.getDocumentStyle('.sun-winter-horizon', 'fill') || '#4d4d4d'

	, TSunPrimitive;

TSunPrimitive = Trait({
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
			this.getUseAttributes(options.winter ? '#sunWinter' : '#sun', options)
		);
	},

	/**
	 * Render canvas version
	 * @param {DOMElement} element
	 * @param {Object} options
	 */
	renderCanvas: function (element, options) {
		var ctx = element.getContext('2d');

		ctx.save();
		ctx.translate(options.x, options.y);
		ctx.scale(options.scale, options.scale);
		ctx.strokeStyle = options.bg;
		ctx.lineWidth = this.STROKE_WIDTH;

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
			ctx.moveTo(45.1,32.6);
			ctx.bezierCurveTo(42.7,32.6,40.4,32.300000000000004,38.2,31.6);
			ctx.lineTo(43.2,50.7);
			ctx.bezierCurveTo(43.7,52.7,46.5,52.7,47.1,50.7);
			ctx.lineTo(52.1,31.6);
			ctx.bezierCurveTo(49.8,32.2,47.5,32.6,45.1,32.6);
			ctx.moveTo(66.6,19.8);
			ctx.bezierCurveTo(64.39999999999999,23.9,60.99999999999999,27.3,56.89999999999999,29.5);
			ctx.lineTo(73.89999999999999,39.5);
			ctx.bezierCurveTo(75.69999999999999,40.5,77.69999999999999,38.5,76.6,36.8);
			ctx.lineTo(66.6,19.8);
			ctx.moveTo(23.6,19.8);
			ctx.lineTo(13.600000000000001,36.8);
			ctx.bezierCurveTo(12.600000000000001,38.599999999999994,14.600000000000001,40.599999999999994,16.3,39.5);
			ctx.lineTo(33.3,29.5);
			ctx.bezierCurveTo(29.2,27.3,25.8,23.9,23.6,19.8);
			ctx.moveTo(20.6,8.1);
			ctx.bezierCurveTo(20.6,5.699999999999999,20.900000000000002,3.3999999999999995,21.6,1.1999999999999993);
			ctx.lineTo(2.5,6.199999999999999);
			ctx.bezierCurveTo(0.5,6.699999999999999,0.5,9.5,2.5,10.1);
			ctx.lineTo(21.6,15.1);
			ctx.bezierCurveTo(20.9,12.8,20.6,10.5,20.6,8.1);
			ctx.moveTo(87.6,6.1);
			ctx.lineTo(68.5,1.0999999999999996);
			ctx.bezierCurveTo(69.1,3.3,69.5,5.6,69.5,8);
			ctx.bezierCurveTo(69.5,10.4,69.2,12.7,68.5,14.9);
			ctx.lineTo(87.6,9.9);
			ctx.bezierCurveTo(89.6,9.5,89.6,6.7,87.6,6.1);
			ctx.closePath();
			ctx.fill();

			// Center fill
			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.arc(45,8,20.5,0,this.TWO_PI,true);
			ctx.closePath();
			ctx.fill();

		} else {
			// Rays
			ctx.fillStyle = RAY_COLOUR;
			ctx.beginPath();
			ctx.moveTo(23.5,33.2);
			ctx.bezierCurveTo(25.7,29.1,29.1,25.700000000000003,33.2,23.500000000000004);
			ctx.lineTo(16.200000000000003,13.500000000000004);
			ctx.bezierCurveTo(14.400000000000002,12.500000000000004,12.400000000000002,14.500000000000004,13.500000000000004,16.200000000000003);
			ctx.lineTo(23.5,33.2);
			ctx.moveTo(45,20.5);
			ctx.bezierCurveTo(47.4,20.5,49.7,20.8,51.9,21.5);
			ctx.lineTo(46.9,2.3999999999999986);
			ctx.bezierCurveTo(46.4,0.3999999999999986,43.6,0.3999999999999986,43,2.3999999999999986);
			ctx.lineTo(38,21.5);
			ctx.bezierCurveTo(40.3,20.8,42.6,20.5,45,20.5);
			ctx.moveTo(87.6,43.1);
			ctx.lineTo(68.5,38.1);
			ctx.bezierCurveTo(69.1,40.300000000000004,69.5,42.6,69.5,45);
			ctx.bezierCurveTo(69.5,47.4,69.2,49.7,68.5,51.9);
			ctx.lineTo(87.6,46.9);
			ctx.bezierCurveTo(89.6,46.4,89.6,43.6,87.6,43.1);
			ctx.moveTo(20.5,45);
			ctx.bezierCurveTo(20.5,42.6,20.8,40.3,21.5,38.1);
			ctx.lineTo(2.3999999999999986,43.1);
			ctx.bezierCurveTo(0.3999999999999986,43.6,0.3999999999999986,46.4,2.3999999999999986,47);
			ctx.lineTo(21.5,52);
			ctx.bezierCurveTo(20.8,49.7,20.5,47.4,20.5,45);
			ctx.moveTo(66.5,33.2);
			ctx.lineTo(76.5,16.200000000000003);
			ctx.bezierCurveTo(77.5,14.400000000000002,75.5,12.400000000000002,73.8,13.500000000000004);
			ctx.lineTo(56.8,23.500000000000004);
			ctx.bezierCurveTo(60.9,25.8,64.2,29.1,66.5,33.2);
			ctx.moveTo(23.5,56.8);
			ctx.lineTo(13.5,73.8);
			ctx.bezierCurveTo(12.5,75.6,14.5,77.6,16.2,76.5);
			ctx.lineTo(33.2,66.5);
			ctx.bezierCurveTo(29.1,64.2,25.8,60.9,23.5,56.8);
			ctx.moveTo(66.5,56.8);
			ctx.bezierCurveTo(64.3,60.9,60.9,64.3,56.8,66.5);
			ctx.lineTo(73.8,76.5);
			ctx.bezierCurveTo(75.6,77.5,77.6,75.5,76.5,73.8);
			ctx.lineTo(66.5,56.8);
			ctx.moveTo(45,69.5);
			ctx.bezierCurveTo(42.6,69.5,40.3,69.2,38.1,68.5);
			ctx.lineTo(43.1,87.6);
			ctx.bezierCurveTo(43.6,89.6,46.4,89.6,47,87.6);
			ctx.lineTo(52,68.5);
			ctx.bezierCurveTo(49.7,69.2,47.4,69.5,45,69.5);
			ctx.closePath();
			ctx.fill();

			// Center fill
			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.arc(45,45,20.5,0,this.TWO_PI,true);
			ctx.closePath();
			ctx.fill();
		}
		ctx.restore();
	}
});

module.exports = Trait.compose(
	TPrimitive,
	TSunPrimitive
).create();
