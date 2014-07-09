var trait = require('trait');

module.exports = trait.compose(
	require('./TPrimitive'),
	trait({
		/**
		 * Render canvas version
		 * @param {CanvasContext} ctx
		 */
		renderCanvas: function (ctx) {
			ctx.save();
			this.transformCanvas(ctx);
			ctx.globalAlpha = this.opacity;

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
			if (this.primitive == 'raindrop') {
				this.renderCanvasRaindropShape(ctx);
			} else if (this.primitive == 'sleet') {
				this.renderCanvasSleetShape(ctx);
			} else {
				this.renderCanvasSnowflakeShape(ctx);
			}

			ctx.restore();
		},

		/**
		 * Render canvas raindrop shape
		 * @param {Context} ctx
		 */
		renderCanvasRaindropShape: function (ctx) {
			ctx.fillStyle = RAIN_FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(20,16.8);
			ctx.bezierCurveTo(20,20.2,17.3,23,14,23);
			ctx.bezierCurveTo(10.7,23,8,20.2,8,16.8);
			ctx.bezierCurveTo(8,14.9,8,6,8,6);
			ctx.bezierCurveTo(13.5,11.5,20,11.2,20,16.8);
			ctx.closePath();
			ctx.fill();
		},

		/**
		 * Render canvas sleet shape
		 * @param {Context} ctx
		 */
		renderCanvasSleetShape: function (ctx) {
			ctx.fillStyle = SLEET_FILL_COLOUR;
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
		},

		/**
		 * Render canvas snowflake shape
		 * @param {Context} ctx
		 */
		renderCanvasSnowflakeShape: function (ctx) {
			ctx.fillStyle = SNOW_FILL_COLOUR;
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
		}
	})
);