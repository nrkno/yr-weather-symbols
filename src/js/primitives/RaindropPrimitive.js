var svg = require('svg')
	, Trait = require('trait')
	, TPrimitive = require('./TPrimitive')

	, FILL_COLOUR = require('yr-colours').RAIN

	, TRaindropPrimitive;

TRaindropPrimitive = Trait({
	/**
	 * Show transition
	 * @params {Object} options
	 */
	show: function (options) {
		this._opacity = 0;
		this._dopacity = 1;
		this.transitionProps = ['opacity'];
		this.transition(options);
	},

	/**
	 * Hide transition
	 * @params {Object} options
	 */
	hide: function (options) {
		this._y = this.y;
		this._dy = this.OFFSET;
		this._opacity = 1;
		this._dopacity = -1;
		this.transitionProps = ['y', 'opacity'];
		this.transition(options);
	},

	/**
	 * Render svg version
	 * @param {SVGElement} element
	 */
	renderSVG: function (element) {
		svg.appendChild(
			element,
			'use',
			this.getUseAttributes('#raindrop')
		);
	},

	/**
	 * Render canvas version
	 * @param {CanvasContext} ctx
	 */
	renderCanvas: function (ctx) {
		ctx.save();
		this.transformCanvas(ctx);

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
		ctx.globalAlpha = this.opacity;
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

module.exports = function () {
	return Trait.compose(
		TPrimitive,
		TRaindropPrimitive
	).create();
};