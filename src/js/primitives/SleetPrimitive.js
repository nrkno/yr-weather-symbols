var svg = require('svg')
	, Trait = require('trait')
	, TPrimitive = require('./TPrimitive')

	, FILL_COLOUR = require('yr-colours').SLEET

	, TSleetPrimitive;

TSleetPrimitive = Trait({

	show: function () {

	},

	hide: function () {

	},

	move: function (options) {

	},

	/**
	 * Render svg version
	 * @param {SVGElement} element
	 */
	renderSVG: function (element) {
		svg.appendChild(
			element,
			'use',
			this.getUseAttributes('#sleet')
		);
	},

	/**
	 * Render canvas version
	 * @param {CanvasContext} ctx
	 */
	renderCanvas: function (ctx) {
		ctx.save();
		this.translateCanvas(ctx);

		// Background
		ctx.fillStyle = this.bg;
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
		ctx.bezierCurveTo(18.1,18.9,16.5,22.1,16,25.5);
		ctx.bezierCurveTo(15.9,26,15.4,26.2,15,25.9);
		ctx.bezierCurveTo(12.7,23.8,10.2,22.6,6.5,22.1);
		ctx.bezierCurveTo(6.1,22,5.9,21.6,6.1,21.3);
		ctx.bezierCurveTo(8.4,17,8.6,10.1,7.8,5);
		ctx.bezierCurveTo(10.5,9.2,14.9,14,19.6,15.7);
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
