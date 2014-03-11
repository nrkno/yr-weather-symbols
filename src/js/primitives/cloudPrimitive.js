var svg = require('svg')
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
		svg.appendChild(
			element,
			'use',
			this.getUseAttributes('#cloud-' + options.tint * 100, options)
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

		// Mask
		ctx.save();
		ctx.globalCompositeOperation = 'destination-out';
		ctx.beginPath();
		ctx.moveTo(93.7,33.7);
		ctx.bezierCurveTo(92.60000000000001,26.700000000000003,87.7,18.900000000000002,77.6,17.000000000000004);
		ctx.bezierCurveTo(74.9,6.9,66.5,0.3,55.7,0);
		ctx.bezierCurveTo(55.400000000000006,0,55.2,0,54.900000000000006,0);
		ctx.bezierCurveTo(44.5,0,36.2,5.7,32.8,15.1);
		ctx.bezierCurveTo(32.3,15.1,31.9,15,31.4,15);
		ctx.bezierCurveTo(24.9,15,17.2,18.9,14.799999999999997,26.2);
		ctx.bezierCurveTo(5.9,26.9,0,34.5,0,41.6);
		ctx.bezierCurveTo(0,52,7.8,58,21.5,58);
		ctx.lineTo(65.1,58);
		ctx.bezierCurveTo(70.69999999999999,58,78.5,57.5,83.3,55.2);
		ctx.bezierCurveTo(91,51.5,95.2,42.8,93.7,33.7);
		ctx.closePath();
		ctx.fill();
		ctx.restore();

		// Fill
		ctx.strokeStyle = options.bg;
		ctx.lineWidth = this.STROKE_WIDTH;
		ctx.fillStyle = 'rgb(' + tint	+ ',' + tint + ',' + tint + ')';
		ctx.beginPath();
		ctx.moveTo(74.3,20.6);
		ctx.bezierCurveTo(72.4,8.3,63.1,4,54.9,4);
		ctx.bezierCurveTo(45.9,4,38,9.4,35.599999999999994,19.7);
		ctx.bezierCurveTo(27.699999999999996,17.099999999999998,18.599999999999994,22.599999999999998,18.099999999999994,30.299999999999997);
		ctx.bezierCurveTo(14.399999999999995,29.499999999999996,4.099999999999994,31.599999999999998,4.099999999999994,41.599999999999994);
		ctx.bezierCurveTo(4,51.9,13.5,54,21.5,54);
		ctx.lineTo(65.1,54);
		ctx.bezierCurveTo(72.5,54,78.3,53.2,81.5,51.6);
		ctx.bezierCurveTo(88.6,48.2,90.8,40.5,89.8,34.3);
		ctx.bezierCurveTo(88.8,28.5,84.6,21.3,74.3,20.6);
		ctx.closePath();
		ctx.fill();
		ctx.restore();
	}
});

module.exports = Trait.compose(
	TPrimitive,
	TCloudPrimitive
).create();