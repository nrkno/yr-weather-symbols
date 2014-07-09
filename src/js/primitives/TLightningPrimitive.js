var trait = require('trait');

module.exports = trait.compose(
	require('./TPrimitive'),
	trait({
		/**
		 * Render canvas version
		 * @param {CanvasContext} ctx
		 */
		renderCanvas: function (ctx) {
			// Fill
			ctx.save();
			this.transformCanvas(ctx);

			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(10.413,0);
			ctx.lineTo(4.163,12.484);
			ctx.lineTo(12.488,12.484);
			ctx.lineTo(0,25);
			ctx.lineTo(25.001,8.32);
			ctx.lineTo(16.663,8.32);
			ctx.lineTo(24.995,0);
			ctx.lineTo(10.413,0);
			ctx.closePath();
			ctx.fill();
			ctx.restore();
		}
	})
);