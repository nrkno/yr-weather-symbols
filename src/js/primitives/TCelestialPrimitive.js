var trait = require('trait')
	, colours = require('yr-colours')

	, SUN_RAY_COLOUR = colours.SUN_RAY
	, SUN_CENTER_COLOUR = colours.SUN_CENTRE
	, SUN_HORIZON_COLOUR = colours.SUN_HORIZON
	, MOON_FILL_COLOUR = colours.MOON;

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

			if (this.primitive == 'moon') {
				ctx.fillStyle = MOON_FILL_COLOUR;
				ctx.beginPath();
				ctx.moveTo(23,20);
				ctx.bezierCurveTo(23,12.322,25.89,5.3,30.631,0);
				ctx.bezierCurveTo(30.421,0.012,30.212,0,30,0);
				ctx.bezierCurveTo(13.432,0,0,13.432,0,30);
				ctx.bezierCurveTo(0,46.568,13.432,60,30,60);
				ctx.bezierCurveTo(38.891,60,46.875,56.129,52.369,49.984);
				ctx.bezierCurveTo(36.093,49.646,23,36.356,23,20);
				ctx.closePath();
				ctx.fill();

			} else {
				if (this.winter) {
					// Horizon
					ctx.fillStyle = SUN_HORIZON_COLOUR;
					ctx.beginPath();
					ctx.moveTo(2.5,0);
					ctx.lineTo(87.6,0);
					ctx.bezierCurveTo(88.9,0,90,0.9,90,2);
					ctx.lineTo(90,2);
					ctx.bezierCurveTo(90,3.1,88.9,4,87.5,4);
					ctx.lineTo(2.5,4);
					ctx.bezierCurveTo(1.1,4,0,3.1,0,2);
					ctx.lineTo(0,2);
					ctx.bezierCurveTo(0,0.9,1.1,0,2.5,0);
					ctx.fill();
					ctx.closePath();

					// Rays
					ctx.fillStyle = SUN_RAY_COLOUR;
					ctx.beginPath();
					ctx.moveTo(23.6,19.8);
					ctx.lineTo(13.6,36.8);
					ctx.bezierCurveTo(12.6,38.6,14.6,40.6,16.3,39.5);
					ctx.lineTo(33.3,29.5);
					ctx.bezierCurveTo(29.2,27.3,25.8,23.9,23.6,19.8);
					ctx.moveTo(66.6,19.8);
					ctx.bezierCurveTo(64.4,23.9,61,27.3,56.9,29.5);
					ctx.lineTo(73.9,39.5);
					ctx.bezierCurveTo(75.7,40.5,77.7,38.5,76.6,36.8);
					ctx.lineTo(66.6,19.8);
					ctx.moveTo(45.1,32.6);
					ctx.bezierCurveTo(42.7,32.6,40.4,32.3,38.2,31.6);
					ctx.lineTo(43.2,50.7);
					ctx.bezierCurveTo(43.7,52.7,46.5,52.7,47.1,50.7);
					ctx.lineTo(52.1,31.6);
					ctx.bezierCurveTo(49.8,32.2,47.5,32.6,45.1,32.6);
					ctx.moveTo(69.6,8);
					ctx.bezierCurveTo(69.6,8,69.6,8,69.6,8);
					ctx.bezierCurveTo(69.6,10.5,69.3,12.8,68.6,15);
					ctx.lineTo(87.7,10);
					ctx.bezierCurveTo(88.7,9.7,89.2,8.9,89.2,8);
					ctx.lineTo(69.6,8);
					ctx.moveTo(20.6,8);
					ctx.lineTo(1,8);
					ctx.bezierCurveTo(1,8.9,1.5,9.7,2.5,10);
					ctx.lineTo(21.6,15);
					ctx.bezierCurveTo(20.9,12.8,20.6,10.5,20.6,8);
					ctx.bezierCurveTo(20.6,8,20.6,8,20.6,8);
					ctx.closePath();
					ctx.fill();

					// Center fill
					ctx.fillStyle = SUN_CENTER_COLOUR;
					ctx.beginPath();
					ctx.moveTo(24.6,8);
					ctx.bezierCurveTo(24.6,8,24.6,8,24.6,8);
					ctx.bezierCurveTo(24.6,19.4,33.8,28.6,45.1,28.6);
					ctx.bezierCurveTo(56.4,28.6,65.6,19.4,65.6,8.1);
					ctx.bezierCurveTo(65.6,8.1,65.6,8.1,65.6,8);
					ctx.lineTo(24.6,8);
					ctx.closePath();
					ctx.fill();

				} else {
					// Rays
					ctx.fillStyle = SUN_RAY_COLOUR;
					ctx.beginPath();
					ctx.moveTo(23.5,33.2);
					ctx.bezierCurveTo(25.7,29.1,29.1,25.7,33.2,23.5);
					ctx.lineTo(16.2,13.5);
					ctx.bezierCurveTo(14.4,12.5,12.4,14.5,13.5,16.2);
					ctx.lineTo(23.5,33.2);
					ctx.moveTo(45,20.5);
					ctx.bezierCurveTo(47.4,20.5,49.7,20.8,51.9,21.5);
					ctx.lineTo(46.9,2.4);
					ctx.bezierCurveTo(46.4,0.4,43.6,0.4,43,2.4);
					ctx.lineTo(38,21.5);
					ctx.bezierCurveTo(40.3,20.8,42.6,20.5,45,20.5);
					ctx.moveTo(87.6,43.1);
					ctx.lineTo(68.5,38.1);
					ctx.bezierCurveTo(69.1,40.3,69.5,42.6,69.5,45);
					ctx.bezierCurveTo(69.5,47.4,69.2,49.7,68.5,51.9);
					ctx.lineTo(87.6,46.9);
					ctx.bezierCurveTo(89.6,46.4,89.6,43.6,87.6,43.1);
					ctx.moveTo(20.5,45);
					ctx.bezierCurveTo(20.5,42.6,20.8,40.3,21.5,38.1);
					ctx.lineTo(2.4,43.1);
					ctx.bezierCurveTo(0.4,43.6,0.4,46.4,2.4,47);
					ctx.lineTo(21.5,52);
					ctx.bezierCurveTo(20.8,49.7,20.5,47.4,20.5,45);
					ctx.moveTo(66.5,33.2);
					ctx.lineTo(76.5,16.2);
					ctx.bezierCurveTo(77.5,14.4,75.5,12.4,73.8,13.5);
					ctx.lineTo(56.8,23.5);
					ctx.bezierCurveTo(60.9,25.8,64.2,29.1,66.5,33.2);
					ctx.moveTo(23.5,56.8);
					ctx.lineTo(13.5,73.8);
					ctx.bezierCurveTo(12.5,75.6,14.5,77.6,16.2,76.5);
					ctx.lineTo(33.2,66.5);
					ctx.bezierCurveTo(29.1,64.2,25.8,60.9,23.5,56.8);
					ctx.moveTo(66.5,56.8);
					ctx.bezierCurveTo(64.3,60.9,60.9,64.3,56.8,66.5);
					ctx.lineTo(73.8,76.5);
					ctx.bezierCurveTo(75.6,77.5,77.6,75.5,76.5,73.8);
					ctx.lineTo(66.5,56.8);
					ctx.moveTo(45,69.5);
					ctx.bezierCurveTo(42.6,69.5,40.3,69.2,38.1,68.5);
					ctx.lineTo(43.1,87.6);
					ctx.bezierCurveTo(43.6,89.6,46.4,89.6,47,87.6);
					ctx.lineTo(52,68.5);
					ctx.bezierCurveTo(49.7,69.2,47.4,69.5,45,69.5);
					ctx.closePath();
					ctx.fill();

					// Center fill
					ctx.fillStyle = SUN_CENTER_COLOUR;
					ctx.beginPath();
					ctx.arc(45,45,20.5,0,this.TWO_PI,true);
					ctx.closePath();
					ctx.fill();
				}
			}

			ctx.restore();
		}
	})
);