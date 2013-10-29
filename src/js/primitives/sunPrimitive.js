var TWO_PI = Math.PI * 2
	, BG_COLOUR = '#ffffff'
	, RAY_COLOUR = '#e88d15'
	, HORIZON_COLOUR = '#4d4d4d'
	, CENTER_COLOUR = '#faba2f';

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
			ctx.fillRect(0,0,60,3);
			ctx.fill();

			// Horizon
			ctx.fillStyle = RAY_COLOUR;
			ctx.beginPath();
			ctx.moveTo(41.569,10.792);
			ctx.lineTo(60,6);
			ctx.lineTo(0,6.021);
			ctx.lineTo(18.431,10.802);
			ctx.lineTo(8.786,27.218);
			ctx.lineTo(25.208,17.57);
			ctx.lineTo(30,36);
			ctx.lineTo(34.792,17.569);
			ctx.lineTo(51.214,27.213);
			ctx.lineTo(41.569,10.792);
			ctx.closePath();
			ctx.fill();

			// Center stroke
			ctx.fillStyle = BG_COLOUR;
			ctx.beginPath();
			ctx.moveTo(45.001,6);
			ctx.bezierCurveTo(45.001,13.693,38.286,20.999000000000002,30.000999999999998,20.999000000000002);
			ctx.bezierCurveTo(21.715999999999994,20.999000000000002,15.000999999999998,13.693000000000001,15.000999999999998,6.000000000000002);
			ctx.lineTo(45.001,6.000000000000002);
			ctx.closePath();
			ctx.fill();

			// Center fill
			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(42,6);
			ctx.bezierCurveTo(42,12.401,36.627,18,30,18);
			ctx.bezierCurveTo(23.375,18,18,12.401,18,6);
			ctx.lineTo(42,6);
			ctx.closePath();
			ctx.fill();
		} else {
			// Rays
			ctx.fillStyle = RAY_COLOUR;
			ctx.beginPath();
			ctx.moveTo(41.569,34.792);
			ctx.lineTo(60,30);
			ctx.lineTo(41.569,25.208);
			ctx.lineTo(51.214,8.787);
			ctx.lineTo(34.792,18.431);
			ctx.lineTo(30,0);
			ctx.lineTo(25.208,18.431);
			ctx.lineTo(8.786,8.787);
			ctx.lineTo(18.431,25.208);
			ctx.lineTo(0,30);
			ctx.lineTo(18.431,34.792);
			ctx.lineTo(8.786,51.214);
			ctx.lineTo(25.208,41.569);
			ctx.lineTo(30,60);
			ctx.lineTo(34.792,41.569);
			ctx.lineTo(51.214,51.214);
			ctx.lineTo(41.569,34.792);
			ctx.closePath();
			ctx.fill();

			// Center stroke
			ctx.fillStyle = BG_COLOUR;
			ctx.beginPath();
			ctx.arc(30,30,15,0,TWO_PI,true);
			ctx.closePath();
			ctx.fill();

			// Center fill
			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.arc(30,30,12,0,TWO_PI,true);
			ctx.closePath();
			ctx.fill();
		}
	} else {
		if (options.winter) {
			// Horizon
			ctx.fillStyle = HORIZON_COLOUR;
			ctx.beginPath();
			ctx.moveTo(0,0);
			ctx.fillRect(0,0,80,4);
			ctx.fill();

			// Rays
			ctx.fillStyle = RAY_COLOUR;
			ctx.beginPath();
			ctx.moveTo(55.426,14.389);
			ctx.lineTo(80,8);
			ctx.lineTo(0,8.028);
			ctx.lineTo(24.574,14.403);
			ctx.lineTo(11.715,36.291);
			ctx.lineTo(33.611,23.428);
			ctx.lineTo(40,48);
			ctx.lineTo(46.389,23.425);
			ctx.lineTo(68.285,36.284);
			ctx.lineTo(55.426,14.389);
			ctx.closePath();
			ctx.fill();

			// Center stroke
			ctx.fillStyle = BG_COLOUR;
			ctx.beginPath();
			ctx.moveTo(60.001,8);
			ctx.bezierCurveTo(60.001,18.771,51.047,27.999,40.001,27.999);
			ctx.bezierCurveTo(28.955,27.999,20.000999999999998,18.771,20.000999999999998,8);
			ctx.lineTo(60.001,8);
			ctx.closePath();
			ctx.fill();

			// Center fill
			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(56.001,8);
			ctx.bezierCurveTo(56.001,16.801000000000002,48.836999999999996,23.999000000000002,40.001,23.999000000000002);
			ctx.bezierCurveTo(31.168,23.999000000000002,24.000999999999998,16.801000000000002,24.000999999999998,8.000000000000002);
			ctx.lineTo(56.001,8.000000000000002);
			ctx.closePath();
			ctx.fill();
		} else {
			// Rays
			ctx.fillStyle = RAY_COLOUR;
			ctx.beginPath();
			ctx.moveTo(55.427,46.389);
			ctx.lineTo(80,40);
			ctx.lineTo(55.427,33.612);
			ctx.lineTo(68.286,11.716);
			ctx.lineTo(46.389,24.575);
			ctx.lineTo(40,0);
			ctx.lineTo(33.611,24.575);
			ctx.lineTo(11.716,11.716);
			ctx.lineTo(24.575,33.612);
			ctx.lineTo(0,40);
			ctx.lineTo(24.575,46.389);
			ctx.lineTo(11.716,68.286);
			ctx.lineTo(33.611,55.427);
			ctx.lineTo(40,80);
			ctx.lineTo(46.389,55.427);
			ctx.lineTo(68.286,68.286);
			ctx.lineTo(55.427,46.389);
			ctx.closePath();
			ctx.fill();

			// Center stroke
			ctx.fillStyle = BG_COLOUR;
			ctx.beginPath();
			ctx.arc(40,40,20,0,TWO_PI,true);
			ctx.closePath();
			ctx.fill();

			// Center fill
			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.arc(40,40,16,0,TWO_PI,true);
			ctx.closePath();
			ctx.fill();
		}
	}
	ctx.restore();
};