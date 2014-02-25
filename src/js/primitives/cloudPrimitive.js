var svg = require('../svg')
	, Trait = require('trait')
	, TPrimitive = require('./TPrimitive')

	, TCloudPrimitive;

TCloudPrimitive = Trait({
	/**
	 * Render svg version
	 * @param {DOMElement} element
	 * @param {Object} options
	 * @returns {String}
	 */
	renderSVG: function (element, options) {
		svg.appendChild(element, 'use', this.getUseAttributes(
			'#cloud-' + options.tint * 100,
			options.flip
				? 'translate('
					+ ((this.WIDTH * options.scale) + options.x)
					+ ','
					+ options.y
					+ ') scale('
					+ (-1 * options.scale)
					+ ', '
					+ options.scale
					+ ')'
				: 'translate('
					+ options.x
					+ ','
					+ options.y
					+ ') scale('
					+ options.scale
					+ ')'
			)
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
		if (options.flip) {
			ctx.translate((this.WIDTH * options.scale) + options.x, options.y)
			ctx.scale(-1 * options.scale, options.scale);
		} else {
			ctx.translate(options.x, options.y)
			ctx.scale(options.scale, options.scale);
		}

		// Fill
		ctx.strokeStyle = options.bg;
		ctx.lineWidth = this.STROKE_WIDTH;
		ctx.fillStyle = 'rgb(' + tint	+ ',' + tint + ',' + tint + ')';
		ctx.beginPath();
		ctx.moveTo(55.6,2);
		ctx.bezierCurveTo(46,1.7,37.1,7,34.1,17.3);
		ctx.bezierCurveTo(28,15.8,18.1,19.7,16.3,28.200000000000003);
		ctx.bezierCurveTo(10.1,28,2,33.1,2,41.6);
		ctx.bezierCurveTo(2,51,9,56,21.5,56);
		ctx.lineTo(65.1,56);
		ctx.bezierCurveTo(70.69999999999999,56,78,55.5,82.39999999999999,53.4);
		ctx.bezierCurveTo(97.3,46.199999999999996,94.69999999999999,21.1,75.99999999999999,18.799999999999997);
		ctx.bezierCurveTo(73.7,7.9,65.1,2.3,55.6,2);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		ctx.restore();
	}
});

module.exports = Trait.compose(
	TPrimitive,
	TCloudPrimitive
).create();