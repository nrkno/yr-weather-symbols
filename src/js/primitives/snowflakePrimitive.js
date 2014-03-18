var svg = require('svg')
	, Trait = require('trait')
	, TPrimitive = require('./TPrimitive')

	, FILL_COLOUR = require('yr-colours').SNOW

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
		ctx.lineTo(7.3,10.7);
		ctx.bezierCurveTo(7,10.9,6.7,11.2,6.4,11.5);
		ctx.bezierCurveTo(6,11.7,5.8,12,5.6,12.4);
		ctx.lineTo(1.8,11.4);
		ctx.bezierCurveTo(1,11.2,0.2,11.7,0,12.5);
		ctx.bezierCurveTo(-0.2,13.3,0.3,14.1,1.1,14.3);
		ctx.lineTo(4.9,15.3);
		ctx.bezierCurveTo(4.9,16.1,5.2,16.9,5.5,17.6);
		ctx.lineTo(2.8,20.4);
		ctx.bezierCurveTo(2.2,21,2.2,21.9,2.8,22.5);
		ctx.bezierCurveTo(3.4,23.1,4.3,23.1,4.9,22.5);
		ctx.lineTo(7.6,19.7);
		ctx.bezierCurveTo(8.3,20.1,9.1,20.3,9.9,20.3);
		ctx.lineTo(10.9,24.1);
		ctx.bezierCurveTo(11.1,24.9,11.9,25.3,12.7,25.1);
		ctx.bezierCurveTo(13.5,24.9,13.9,24.1,13.7,23.3);
		ctx.lineTo(12.6,19.5);
		ctx.bezierCurveTo(12.9,19.3,13.3,19.1,13.6,18.8);
		ctx.bezierCurveTo(13.9,18.5,14.1,18.2,14.3,17.8);
		ctx.lineTo(18.1,18.8);
		ctx.bezierCurveTo(18.9,19,19.7,18.5,19.9,17.7);
		ctx.bezierCurveTo(20.1,16.9,19.6,16.1,18.8,15.9);
		ctx.lineTo(15,14.9);
		ctx.bezierCurveTo(15,14.1,14.7,13.3,14.3,12.6);
		ctx.lineTo(17,9.8);
		ctx.bezierCurveTo(17.6,9.2,17.5,8.3,17,7.7);
		ctx.bezierCurveTo(16.4,7.1,15.5,7.1,14.9,7.7);
		ctx.lineTo(12.2,10.5);
		ctx.bezierCurveTo(11.5,10.1,10.7,9.9,9.9,9.9);
		ctx.lineTo(9,6.1);
		ctx.bezierCurveTo(8.8,5.3,8,4.9,7.2,5.1);
		ctx.bezierCurveTo(6.5,5.3,6,6.1,6.2,6.9);
		ctx.closePath();
		ctx.moveTo(11.8,13.2);
		ctx.bezierCurveTo(12.8,14.2,12.8,15.8,11.8,16.8);
		ctx.bezierCurveTo(10.8,17.8,9.2,17.8,8.2,16.8);
		ctx.bezierCurveTo(7.2,15.8,7.2,14.2,8.2,13.2);
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
