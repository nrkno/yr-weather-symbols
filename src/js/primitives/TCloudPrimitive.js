var trait = require('trait');

module.exports = trait.compose(
	require('./TPrimitive').resolve({transformCanvas: null}),
	trait({
		/**
		 * Render canvas version
		 * @param {CanvasContext} ctx
		 */
		renderCanvas: function (ctx) {
			var tint = Math.floor(255 * (1 - this.tint));

			ctx.save();
			this.transformCanvas(ctx);
			ctx.globalAlpha = this.opacity;

			// Mask
			ctx.save();
			ctx.globalCompositeOperation = 'destination-out';
			this.renderCanvasStrokeShape(ctx);
			ctx.restore();

			// Fill
			ctx.fillStyle = 'rgb(' + tint	+ ',' + tint + ',' + tint + ')';
			this.renderCanvasFillShape(ctx);
			ctx.restore();
		},

		/**
		 * Transform canvas 'ctx'
		 * @param {CanvasContext} ctx
		 */
		transformCanvas: function (ctx) {
			if (this.flip) {
				ctx.translate((this.MAX_WIDTH * this.scale) + this.x, this.y)
				ctx.scale(-1 * this.scale, this.scale);
			} else {
				ctx.translate(this.x, this.y)
				ctx.scale(this.scale, this.scale);
			}
		},

		/**
		 * Render canvas stroke shape
		 * @param {Context} ctx
		 */
		renderCanvasStrokeShape: function (ctx) {
			ctx.beginPath();
			ctx.moveTo(93.7,33.7);
			ctx.bezierCurveTo(92.6,26.7,87.7,18.9,77.6,17);
			ctx.bezierCurveTo(74.9,6.9,66.5,0.3,55.7,0);
			ctx.bezierCurveTo(55.4,0,55.2,0,54.9,0);
			ctx.bezierCurveTo(44.5,0,36.2,5.7,32.8,15.1);
			ctx.bezierCurveTo(32.3,15.1,31.9,15,31.4,15);
			ctx.bezierCurveTo(24.9,15,17.2,18.9,14.8,26.2);
			ctx.bezierCurveTo(5.9,26.9,0,34.5,0,41.6);
			ctx.bezierCurveTo(0,52,7.8,58,21.5,58);
			ctx.lineTo(65.1,58);
			ctx.bezierCurveTo(70.7,58,78.5,57.5,83.3,55.2);
			ctx.bezierCurveTo(91,51.5,95.2,42.8,93.7,33.7);
			ctx.closePath();
			ctx.fill();
		},

		/**
		 * Render canvas fill shape
		 * @param {Context} ctx
		 */
		renderCanvasFillShape: function (ctx) {
			ctx.beginPath();
			ctx.moveTo(74.3,20.6);
			ctx.bezierCurveTo(72.4,8.3,63.1,4,54.9,4);
			ctx.bezierCurveTo(45.9,4,38,9.4,35.6,19.7);
			ctx.bezierCurveTo(27.7,17.1,18.6,22.6,18.1,30.3);
			ctx.bezierCurveTo(14.4,29.5,4.1,31.6,4.1,41.6);
			ctx.bezierCurveTo(4,51.9,13.5,54,21.5,54);
			ctx.lineTo(65.1,54);
			ctx.bezierCurveTo(72.5,54,78.3,53.2,81.5,51.6);
			ctx.bezierCurveTo(88.6,48.2,90.8,40.5,89.8,34.3);
			ctx.bezierCurveTo(88.8,28.5,84.6,21.3,74.3,20.6);
			ctx.closePath();
			ctx.fill();
		}
	})
);