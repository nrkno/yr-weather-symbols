var svg = require('svg')
	, Trait = require('trait')
	, TPrimitive = require('./TPrimitive')

	, FILL_COLOUR = require('yr-colours').MOON

	, TMoonPrimitive;

TMoonPrimitive = Trait({
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
			this.getUseAttributes('#moon', options)
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

		ctx.translate(options.x, options.y)
		ctx.scale(options.scale, options.scale);
		ctx.fillStyle = FILL_COLOUR;
		ctx.beginPath();
		ctx.moveTo(23,20);
		ctx.bezierCurveTo(23,12.322,25.887999999999998,5.321999999999999,30.631,0.015999999999998238);
		ctx.bezierCurveTo(30.421,0.012,30.212,0,30,0);
		ctx.bezierCurveTo(13.432,0,0,13.432,0,30);
		ctx.bezierCurveTo(0,46.568,13.432,60,30,60);
		ctx.bezierCurveTo(38.891,60,46.875,56.129,52.369,49.984);
		ctx.bezierCurveTo(36.093,49.646,23,36.356,23,20);
		ctx.closePath();
		ctx.fill();
		ctx.restore();
	}
});

module.exports = Trait.compose(
	TPrimitive,
	TMoonPrimitive
).create();
