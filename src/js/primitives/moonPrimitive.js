var TWO_PI = Math.PI * 2
	, FILL_COLOUR = '#afc1c9'
	, WIDTH = 60;

exports.render = function(ctx, options) {
	ctx.save();

	// Flip
	if (options.phase > 5) {
		ctx.translate((WIDTH * options.scale) + options.x, options.y)
		ctx.scale(-1 * options.scale, options.scale);
	} else {
		ctx.translate(options.x, options.y)
		ctx.scale(options.scale, options.scale);
	}


	switch (options.phase) {
		case 1:
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(31,0);
			ctx.bezierCurveTo(14.459,0,1,13.459,1,30);
			ctx.bezierCurveTo(1,46.541,14.459,60,31,60);
			ctx.bezierCurveTo(47.541,60,61,46.541,61,30);
			ctx.bezierCurveTo(61,13.459000000000003,47.541,0,31,0);
			ctx.closePath();
			ctx.moveTo(31,54);
			ctx.bezierCurveTo(17.764,54,7,43.236,7,30);
			ctx.bezierCurveTo(7,16.764000000000003,17.764,6,31,6);
			ctx.bezierCurveTo(44.236000000000004,6,55,16.764,55,30);
			ctx.bezierCurveTo(55,43.236000000000004,44.236,54,31,54);
			ctx.closePath();
			ctx.fill();
			break;
		case 2:
		case 8:
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(0,30);
			ctx.bezierCurveTo(0,46.541,13.453,60,30,60);
			ctx.bezierCurveTo(46.535,60,60,46.541,60,30);
			ctx.bezierCurveTo(60,13.459000000000003,46.535,0,30,0);
			ctx.bezierCurveTo(13.453,0,0,13.459,0,30);
			ctx.closePath();
			ctx.moveTo(6,30);
			ctx.bezierCurveTo(6,16.764,16.758,6,30,6);
			ctx.bezierCurveTo(33.656,6,42,16.764,42,30);
			ctx.bezierCurveTo(42,43.236000000000004,33.281,54,30,54);
			ctx.bezierCurveTo(16.758,54,6,43.236,6,30);
			ctx.closePath();
			ctx.fill();
			break;
		case 3:
		case 7:
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(30,0);
			ctx.bezierCurveTo(13.459,0,0,13.459,0,30);
			ctx.bezierCurveTo(0,46.541,13.459,60,30,60);
			ctx.bezierCurveTo(46.541,60,60,46.541,60,30);
			ctx.bezierCurveTo(60,13.459000000000003,46.541,0,30,0);
			ctx.closePath();
			ctx.moveTo(30,54);
			ctx.bezierCurveTo(16.764,54,6,43.236,6,30);
			ctx.bezierCurveTo(6,16.764000000000003,16.764,6,30,6);
			ctx.lineTo(30,54);
			ctx.closePath();
			ctx.fill();
			break;
		case 4:
		case 6:
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(30,0);
			ctx.bezierCurveTo(13.459,0,0,13.459,0,30);
			ctx.bezierCurveTo(0,46.541,13.459,60,30,60);
			ctx.bezierCurveTo(46.541,60,60,46.541,60,30);
			ctx.bezierCurveTo(60,13.459000000000003,46.541,0,30,0);
			ctx.closePath();
			ctx.moveTo(6,30);
			ctx.bezierCurveTo(6,16.746,16.746,6,30,6);
			ctx.bezierCurveTo(26.344,6,18,16.764,18,30);
			ctx.bezierCurveTo(18,43.236000000000004,26.713,54,30,54);
			ctx.bezierCurveTo(16.746,54,6,43.254,6,30);
			ctx.closePath();
			ctx.fill();
			break;
		case 5:
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.arc(30,30,30,0,TWO_PI,true);
			ctx.closePath();
			ctx.fill();
	}
	ctx.restore();
};