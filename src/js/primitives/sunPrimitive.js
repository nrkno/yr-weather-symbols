var TWO_PI = Math.PI * 2
	, BG_COLOUR = '#ffffff'
	, RAY_COLOUR = '#d16218'
	, HORIZON_COLOUR = '#666666'
	, CENTER_COLOUR = '#e1a122';

exports.render = function(ctx, options) {
	ctx.save();
	ctx.translate(options.x, options.y);
	ctx.scale(options.scale, options.scale);

	if (options.small) {
		if (options.winter) {
			// Horizon
			ctx.fillStyle = HORIZON_COLOUR;
			ctx.beginPath();
			ctx.moveTo(0,0);
			ctx.fillRect(0,0,75,4);
			ctx.fill();

			// Horizon
			ctx.fillStyle = RAY_COLOUR;
			ctx.beginPath();
			ctx.moveTo(51.961,14.99);
			ctx.lineTo(75,9);
			ctx.lineTo(0,9.026);
			ctx.lineTo(23.039,15.003);
			ctx.lineTo(10.983,35.522);
			ctx.lineTo(31.51,23.463);
			ctx.lineTo(37.5,46.5);
			ctx.lineTo(43.49,23.461);
			ctx.lineTo(64.017,35.517);
			ctx.lineTo(51.961,14.99);
			ctx.closePath();
			ctx.fill();

			// Center stroke
			ctx.fillStyle = BG_COLOUR;
			ctx.beginPath();
			ctx.moveTo(57.001,9);
			ctx.bezierCurveTo(57.001,19,48.272999999999996,28.499,37.501,28.499);
			ctx.bezierCurveTo(26.729,28.499,18.001,19,18.001,9);
			ctx.lineTo(57.001,9);
			ctx.closePath();
			ctx.fill();

			// Center fill
			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(52.501,9);
			ctx.bezierCurveTo(52.501,17,45.786,23.999000000000002,37.501,23.999000000000002);
			ctx.bezierCurveTo(29.217999999999996,23.999000000000002,22.500999999999998,17.000000000000004,22.500999999999998,9.000000000000002);
			ctx.lineTo(52.501,9.000000000000002);
			ctx.closePath();
			ctx.fill();
		} else {
			// Rays
			ctx.fillStyle = RAY_COLOUR;
			ctx.beginPath();
			ctx.moveTo(51.961,43.49);
			ctx.lineTo(75,37.5);
			ctx.lineTo(51.961,31.51);
			ctx.lineTo(64.017,10.983);
			ctx.lineTo(43.49,23.039);
			ctx.lineTo(37.5,0);
			ctx.lineTo(31.51,23.039);
			ctx.lineTo(10.983,10.983);
			ctx.lineTo(23.039,31.51);
			ctx.lineTo(0,37.5);
			ctx.lineTo(23.039,43.49);
			ctx.lineTo(10.983,64.017);
			ctx.lineTo(31.51,51.961);
			ctx.lineTo(37.5,75);
			ctx.lineTo(43.49,51.961);
			ctx.lineTo(64.017,64.017);
			ctx.lineTo(51.961,43.49);
			ctx.closePath();
			ctx.fill();

			// Center stroke
			ctx.fillStyle = BG_COLOUR;
			ctx.beginPath();
			ctx.arc(37.5,37.5,19.5,0,TWO_PI,true);
			ctx.closePath();
			ctx.fill();

			// Center fill
			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.arc(37.5,37.5,15,0,TWO_PI,true);
			ctx.closePath();
			ctx.fill();
		}
	} else {
		if (options.winter) {
			// Horizon
			ctx.fillStyle = HORIZON_COLOUR;
			ctx.beginPath();
			ctx.moveTo(0,0);
			ctx.fillRect(0,0,100,6);
			ctx.fill();

			// Rays
			ctx.fillStyle = RAY_COLOUR;
			ctx.beginPath();
			ctx.moveTo(69.281,19.986);
			ctx.lineTo(100,12);
			ctx.lineTo(0,12.035);
			ctx.lineTo(30.719,20.004);
			ctx.lineTo(14.645,47.363);
			ctx.lineTo(42.014,31.284);
			ctx.lineTo(50,62);
			ctx.lineTo(57.986,31.281);
			ctx.lineTo(85.355,47.355);
			ctx.lineTo(69.281,19.986);
			ctx.closePath();
			ctx.fill();

			// Center stroke
			ctx.fillStyle = BG_COLOUR;
			ctx.beginPath();
			ctx.moveTo(76.001,12);
			ctx.bezierCurveTo(76.001,26,64.363,37.998999999999995,50.001000000000005,37.998999999999995);
			ctx.bezierCurveTo(35.63900000000001,37.998999999999995,24.001,26,24.001,12);
			ctx.lineTo(76.001,12);
			ctx.closePath();
			ctx.fill();

			// Center fill
			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(70.001,12);
			ctx.bezierCurveTo(70.001,23,61.048,31.999,50.001000000000005,31.999);
			ctx.bezierCurveTo(38.95700000000001,31.999,30.001000000000005,23,30.001000000000005,12);
			ctx.lineTo(70.001,12);
			ctx.closePath();
			ctx.fill();
		} else {
			// Rays
			ctx.fillStyle = RAY_COLOUR;
			ctx.beginPath();
			ctx.moveTo(69.281,57.986);
			ctx.lineTo(100,50);
			ctx.lineTo(69.281,42.014);
			ctx.lineTo(85.355,14.645);
			ctx.lineTo(57.986,30.719);
			ctx.lineTo(50,0);
			ctx.lineTo(42.013,30.719);
			ctx.lineTo(14.645,14.645);
			ctx.lineTo(30.718,42.014);
			ctx.lineTo(0,50);
			ctx.lineTo(30.718,57.986);
			ctx.lineTo(14.645,85.355);
			ctx.lineTo(42.013,69.281);
			ctx.lineTo(50,100);
			ctx.lineTo(57.986,69.281);
			ctx.lineTo(85.355,85.355);
			ctx.lineTo(69.281,57.986);
			ctx.closePath();
			ctx.fill();

			// Center stroke
			ctx.fillStyle = BG_COLOUR;
			ctx.beginPath();
			ctx.arc(50,50,26,0,TWO_PI,true);
			ctx.closePath();
			ctx.fill();

			// Center fill
			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.arc(50,50,20,0,TWO_PI,true);
			ctx.closePath();
			ctx.fill();
		}
	}
	ctx.restore();
};