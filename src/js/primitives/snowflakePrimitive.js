var svg = require('../utils/svg')
	, style = require('style')
	, Trait = require('trait')
	, TPrimitive = require('./TPrimitive')

	, FILL_COLOUR = style.getDocumentStyle('.snowflake', 'fill') || '#54BFE3'

	, TSnowflakePrimitive;

TSnowflakePrimitive = Trait({
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
			this.getUseAttributes('#snowflake', options)
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
		ctx.moveTo(6.2,6.9);
		ctx.lineTo(7.300000000000001,10.7);
		ctx.bezierCurveTo(7.000000000000001,10.899999999999999,6.700000000000001,11.2,6.4,11.5);
		ctx.bezierCurveTo(6,11.7,5.8,12,5.6,12.4);
		ctx.lineTo(1.7999999999999998,11.4);
		ctx.bezierCurveTo(1,11.2,0.2,11.7,0,12.5);
		ctx.bezierCurveTo(-0.2,13.3,0.3,14.1,1.1,14.3);
		ctx.lineTo(4.9,15.3);
		ctx.bezierCurveTo(4.9,16.1,5.2,16.900000000000002,5.5,17.6);
		ctx.lineTo(2.8,20.400000000000002);
		ctx.bezierCurveTo(2.1999999999999997,21.000000000000004,2.1999999999999997,21.900000000000002,2.8,22.500000000000004);
		ctx.bezierCurveTo(3.4,23.100000000000005,4.3,23.100000000000005,4.9,22.500000000000004);
		ctx.lineTo(7.6000000000000005,19.700000000000003);
		ctx.bezierCurveTo(8.3,20.1,9.100000000000001,20.300000000000004,9.9,20.300000000000004);
		ctx.lineTo(10.9,24.100000000000005);
		ctx.bezierCurveTo(11.1,24.900000000000006,11.9,25.300000000000004,12.700000000000001,25.100000000000005);
		ctx.bezierCurveTo(13.500000000000002,24.900000000000006,13.9,24.100000000000005,13.700000000000001,23.300000000000004);
		ctx.lineTo(12.600000000000001,19.500000000000004);
		ctx.bezierCurveTo(12.900000000000002,19.300000000000004,13.3,19.100000000000005,13.600000000000001,18.800000000000004);
		ctx.bezierCurveTo(13.900000000000002,18.500000000000004,14.100000000000001,18.200000000000003,14.3,17.800000000000004);
		ctx.lineTo(18.1,18.800000000000004);
		ctx.bezierCurveTo(18.900000000000002,19.000000000000004,19.700000000000003,18.500000000000004,19.900000000000002,17.700000000000003);
		ctx.bezierCurveTo(20.1,16.900000000000002,19.6,16.1,18.8,15.900000000000002);
		ctx.lineTo(15,14.900000000000002);
		ctx.bezierCurveTo(15,14.100000000000001,14.7,13.300000000000002,14.3,12.600000000000001);
		ctx.lineTo(17,9.8);
		ctx.bezierCurveTo(17.6,9.200000000000001,17.5,8.3,17,7.700000000000001);
		ctx.bezierCurveTo(16.4,7.100000000000001,15.5,7.100000000000001,14.9,7.700000000000001);
		ctx.lineTo(12.2,10.5);
		ctx.bezierCurveTo(11.5,10.1,10.7,9.9,9.899999999999999,9.9);
		ctx.lineTo(9,6.1);
		ctx.bezierCurveTo(8.8,5.3,8,4.8999999999999995,7.2,5.1);
		ctx.bezierCurveTo(6.5,5.3,6,6.1,6.2,6.9);
		ctx.closePath();
		ctx.moveTo(11.8,13.2);
		ctx.bezierCurveTo(12.8,14.2,12.8,15.799999999999999,11.8,16.8);
		ctx.bezierCurveTo(10.8,17.8,9.200000000000001,17.8,8.200000000000001,16.8);
		ctx.bezierCurveTo(7.200000000000001,15.8,7.200000000000001,14.200000000000001,8.200000000000001,13.200000000000001);
		ctx.bezierCurveTo(9.2,12.2,10.8,12.2,11.8,13.2);
		ctx.closePath();
		ctx.fill();
		ctx.restore();
	}
});

module.exports = Trait.compose(
	TPrimitive,
	TSnowflakePrimitive
).create();
