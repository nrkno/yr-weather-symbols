var trait = require('trait');

module.exports = trait.compose(
	require('./TPrimitive'),
	trait({
		/**
		 * Render canvas version
		 * @param {CanvasContext} ctx
		 */
		renderCanvas: function (ctx) {
			var tint = Math.floor(255 * (1 - this.tint));

			ctx.save();
			this.transformCanvas(ctx);

			ctx.fillStyle = 'rgb(' + tint	+ ',' + tint + ',' + tint + ')';
			ctx.beginPath();
			ctx.moveTo(82.3,42);
			ctx.lineTo(2.7,42);
			ctx.bezierCurveTo(1.2,42,0,42.9,0,44);
			ctx.bezierCurveTo(0,45.1,1.2,46,2.7,46);
			ctx.lineTo(82.4,46);
			ctx.bezierCurveTo(83.9,46,85.1,45.1,85.1,44);
			ctx.bezierCurveTo(85.1,42.9,83.8,42,82.3,42);
			ctx.closePath();
			ctx.fill();

			ctx.beginPath();
			ctx.moveTo(80.1,50);
			ctx.lineTo(5.9,50);
			ctx.bezierCurveTo(4.3,50,3,50.9,3,52);
			ctx.bezierCurveTo(3,53.1,4.3,54,5.9,54);
			ctx.lineTo(80.2,54);
			ctx.bezierCurveTo(81.8,54,83.1,53.1,83.1,52);
			ctx.bezierCurveTo(83,50.9,81.7,50,80.1,50);
			ctx.closePath();
			ctx.fill();

			ctx.beginPath();
			ctx.moveTo(80.1,58);
			ctx.lineTo(10.9,58);
			ctx.bezierCurveTo(9.3,58,8,58.9,8,60);
			ctx.bezierCurveTo(8,61.1,9.3,62,10.9,62);
			ctx.lineTo(80.1,62);
			ctx.bezierCurveTo(81.7,62,83,61.1,83,60);
			ctx.bezierCurveTo(83,58.9,81.7,58,80.1,58);
			ctx.closePath();
			ctx.fill();

			ctx.beginPath();
			ctx.moveTo(51.2,0);
			ctx.bezierCurveTo(42.1,-0.3,33.6,4.8,30.7,14.6);
			ctx.bezierCurveTo(24.8,13.2,15.4,16.9,13.7,25);
			ctx.bezierCurveTo(8.2,24.9,1.2,29,0.1,36);
			ctx.bezierCurveTo(0,37,0.7,37.9,1.7,37.9);
			ctx.lineTo(84,37.9);
			ctx.bezierCurveTo(85,37.9,85.8,37.2,85.9,36.2);
			ctx.bezierCurveTo(86.9,27.3,81.8,17.5,70.7,16.1);
			ctx.bezierCurveTo(68.5,5.6,60.2,0.3,51.2,0);
			ctx.closePath();
			ctx.fill();
			ctx.restore();
		}
	})
);