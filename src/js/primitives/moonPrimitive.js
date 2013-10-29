var FILL_COLOUR = '#afc1c9'
	, CENTER_COLOUR = '#ffffff';

exports.render = function(ctx, options) {
	ctx.save();
	ctx.translate(options.x, options.y);
	ctx.scale(options.scale, options.scale);

	if (options.phase === 1) {
		if (options.small) {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(19.001,0);
			ctx.bezierCurveTo(8.523000000000001,0,0.0010000000000012221,8.521,0.0010000000000012221,19);
			ctx.bezierCurveTo(0.0010000000000012221,29.479,8.523000000000001,38,19.001,38);
			ctx.bezierCurveTo(29.479,38,38.001000000000005,29.479,38.001000000000005,19);
			ctx.bezierCurveTo(38.001000000000005,8.521,29.479,0,19.001,0);
			ctx.closePath();
			ctx.fill();

			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(19,34);
			ctx.bezierCurveTo(10.726,34,4,27.275,4,19);
			ctx.bezierCurveTo(4,10.725000000000001,10.726,4,19,4);
			ctx.bezierCurveTo(27.274,4,34,10.725,34,19);
			ctx.bezierCurveTo(34,27.275,27.274,34,19,34);
			ctx.closePath();
			ctx.fill();
		} else {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(25.001,0);
			ctx.bezierCurveTo(11.217,0,0.0010000000000012221,11.216,0.0010000000000012221,25);
			ctx.bezierCurveTo(0.0010000000000012221,38.784,11.217,50,25.001,50);
			ctx.bezierCurveTo(38.785000000000004,50,50.001000000000005,38.784,50.001000000000005,25);
			ctx.bezierCurveTo(50.001000000000005,11.216000000000001,38.785,0,25.001,0);
			ctx.closePath();
			ctx.fill();

			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(25,45);
			ctx.bezierCurveTo(13.974,45,5,36.026,5,25);
			ctx.bezierCurveTo(5,13.973999999999997,13.974,5,25,5);
			ctx.bezierCurveTo(36.025999999999996,5,45,13.974,45,25);
			ctx.bezierCurveTo(45,36.025999999999996,36.026,45,25,45);
			ctx.closePath();
			ctx.fill();
		}
	} else if (options.phase === 2) {
		if (options.small) {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(0.001,19);
			ctx.bezierCurveTo(0.001,29.479,8.519,38,19.001,38);
			ctx.bezierCurveTo(29.475,38,38.001000000000005,29.479,38.001000000000005,19);
			ctx.bezierCurveTo(38.001000000000005,8.521,29.475000000000005,0,19.001000000000005,0);
			ctx.bezierCurveTo(8.519,0,0.001,8.521,0.001,19);
			ctx.closePath();
			ctx.fill();

			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(4,19.002);
			ctx.bezierCurveTo(4,10.269,10.873,4,19.332,4);
			ctx.bezierCurveTo(21.668,4,27,10.269,27,19.002);
			ctx.bezierCurveTo(27,27.732,21.43,34,19.332,34);
			ctx.bezierCurveTo(10.873,34,4,27.732,4,19.002);
			ctx.closePath();
			ctx.fill();
		} else {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(0.001,25);
			ctx.bezierCurveTo(0.001,38.784,11.212,50,25.001,50);
			ctx.bezierCurveTo(38.78,50,50.001000000000005,38.784,50.001000000000005,25);
			ctx.bezierCurveTo(50.001000000000005,11.216000000000001,38.78,0,25.001000000000005,0);
			ctx.bezierCurveTo(11.212,0,0.001,11.216,0.001,25);
			ctx.closePath();
			ctx.fill();

			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(5.001,24.997);
			ctx.bezierCurveTo(5.001,13.971,13.966,5,24.999,5);
			ctx.bezierCurveTo(28.046,5,35.001,13.971,35.001,24.997);
			ctx.bezierCurveTo(35.001,36.029,27.735,45,24.999,45);
			ctx.bezierCurveTo(13.966,45,5.001,36.029,5.001,24.997);
			ctx.closePath();
			ctx.fill();
		}
	} else if (options.phase === 3) {
		if (options.small) {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(19,0);
			ctx.bezierCurveTo(8.521,0,0,8.521,0,19);
			ctx.bezierCurveTo(0,29.479,8.521,38,19,38);
			ctx.bezierCurveTo(29.479,38,38,29.479,38,19);
			ctx.bezierCurveTo(38,8.521,29.479,0,19,0);
			ctx.closePath();
			ctx.fill();

			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(19,34);
			ctx.bezierCurveTo(10.729,34,4,27.271,4,19);
			ctx.bezierCurveTo(4,10.729,10.729,4,19,4);
			ctx.lineTo(19,34);
			ctx.closePath();
			ctx.fill();
		} else {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(25,0);
			ctx.bezierCurveTo(11.216,0,0,11.216,0,25);
			ctx.bezierCurveTo(0,38.784,11.216,50,25,50);
			ctx.bezierCurveTo(38.784,50,50,38.784,50,25);
			ctx.bezierCurveTo(50,11.216000000000001,38.784,0,25,0);
			ctx.closePath();
			ctx.fill();

			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(25,45);
			ctx.bezierCurveTo(13.971,45,5,36.029,5,25);
			ctx.bezierCurveTo(5,13.970999999999997,13.971,5,25,5);
			ctx.lineTo(25,45);
			ctx.closePath();
			ctx.fill();
		}
	} else if (options.phase === 4) {
		if (options.small) {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(19,0);
			ctx.bezierCurveTo(8.521,0,0,8.521,0,19);
			ctx.bezierCurveTo(0,29.479,8.521,38,19,38);
			ctx.bezierCurveTo(29.479,38,38,29.479,38,19);
			ctx.bezierCurveTo(38,8.521,29.479,0,19,0);
			ctx.closePath();
			ctx.fill();

			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(4,19);
			ctx.bezierCurveTo(4,10.717,10.716999999999999,4,19,4);
			ctx.bezierCurveTo(16.715,4,11.5,10.729,11.5,19);
			ctx.bezierCurveTo(11.5,27.271,16.944,34,19,34);
			ctx.bezierCurveTo(10.717,34,4,27.283,4,19);
			ctx.closePath();
			ctx.fill();
		} else {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(25,0);
			ctx.bezierCurveTo(11.216,0,0,11.216,0,25);
			ctx.bezierCurveTo(0,38.784,11.216,50,25,50);
			ctx.bezierCurveTo(38.784,50,50,38.784,50,25);
			ctx.bezierCurveTo(50,11.216000000000001,38.784,0,25,0);
			ctx.closePath();
			ctx.fill();

			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(5,25);
			ctx.bezierCurveTo(5,13.955,13.956,5,25,5);
			ctx.bezierCurveTo(21.953,5,15,13.971,15,25);
			ctx.bezierCurveTo(15,36.028999999999996,22.259999999999998,45,25,45);
			ctx.bezierCurveTo(13.956,45,5,36.044,5,25);
			ctx.closePath();
			ctx.fill();
		}
	} else if (options.phase === 5) {
		if (options.small) {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(19,0);
			ctx.bezierCurveTo(8.521,0,0,8.521,0,19);
			ctx.bezierCurveTo(0,29.479,8.521,38,19,38);
			ctx.bezierCurveTo(29.479,38,38,29.479,38,19);
			ctx.bezierCurveTo(38,8.521,29.479,0,19,0);
			ctx.closePath();
			ctx.fill();
		} else {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(25,0);
			ctx.bezierCurveTo(11.216,0,0,11.216,0,25);
			ctx.bezierCurveTo(0,38.784,11.216,50,25,50);
			ctx.bezierCurveTo(38.784,50,50,38.784,50,25);
			ctx.bezierCurveTo(50,11.216000000000001,38.784,0,25,0);
			ctx.closePath();
			ctx.fill();
		}
	} else if (options.phase === 6) {
		if (options.small) {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(0,19);
			ctx.bezierCurveTo(0,29.479,8.521,38,19,38);
			ctx.bezierCurveTo(29.479,38,38,29.479,38,19);
			ctx.bezierCurveTo(38,8.521,29.479,0,19,0);
			ctx.bezierCurveTo(8.521,0,0,8.521,0,19);
			ctx.closePath();
			ctx.fill();

			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(34,19);
			ctx.bezierCurveTo(34,10.717,27.283,4,19,4);
			ctx.bezierCurveTo(21.285,4,26.5,10.729,26.5,19);
			ctx.bezierCurveTo(26.5,27.271,21.056,34,19,34);
			ctx.bezierCurveTo(27.283,34,34,27.283,34,19);
			ctx.closePath();
			ctx.fill();
		} else {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(0,25);
			ctx.bezierCurveTo(0,38.784,11.216,50,25,50);
			ctx.bezierCurveTo(38.784,50,50,38.784,50,25);
			ctx.bezierCurveTo(50,11.216000000000001,38.784,0,25,0);
			ctx.bezierCurveTo(11.216000000000001,0,0,11.216,0,25);
			ctx.closePath();
			ctx.fill();

			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(45,25);
			ctx.bezierCurveTo(45,13.955,36.044,5,25,5);
			ctx.bezierCurveTo(28.047,5,35,13.971,35,25);
			ctx.bezierCurveTo(35,36.028999999999996,27.740000000000002,45,25,45);
			ctx.bezierCurveTo(36.044,45,45,36.044,45,25);
			ctx.closePath();
			ctx.fill();
		}
	} else if (options.phase === 7) {
		if (options.small) {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(0,19);
			ctx.bezierCurveTo(0,29.479,8.521,38,19,38);
			ctx.bezierCurveTo(29.479,38,38,29.479,38,19);
			ctx.bezierCurveTo(38,8.521,29.479,0,19,0);
			ctx.bezierCurveTo(8.521,0,0,8.521,0,19);
			ctx.closePath();
			ctx.fill();

			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(19,34);
			ctx.bezierCurveTo(27.271,34,34,27.271,34,19);
			ctx.bezierCurveTo(34,10.729,27.271,4,19,4);
			ctx.lineTo(19,34);
			ctx.closePath();
			ctx.fill();
		} else {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(0,25);
			ctx.bezierCurveTo(0,38.784,11.216,50,25,50);
			ctx.bezierCurveTo(38.784,50,50,38.784,50,25);
			ctx.bezierCurveTo(50,11.216000000000001,38.784,0,25,0);
			ctx.bezierCurveTo(11.216000000000001,0,0,11.216,0,25);
			ctx.closePath();
			ctx.fill();

			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(25,45);
			ctx.bezierCurveTo(36.028999999999996,45,45,36.028999999999996,45,25);
			ctx.bezierCurveTo(45,13.971000000000004,36.029,5,25,5);
			ctx.lineTo(25,45);
			ctx.closePath();
			ctx.fill();
		}
	} else if (options.phase === 8) {
		if (options.small) {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(19,0);
			ctx.bezierCurveTo(8.526,0,0,8.521,0,19);
			ctx.bezierCurveTo(0,29.479,8.526,38,19,38);
			ctx.bezierCurveTo(29.482,38,38,29.479,38,19);
			ctx.bezierCurveTo(38,8.521,29.482,0,19,0);
			ctx.closePath();
			ctx.fill();

			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(34.001,19.002);
			ctx.bezierCurveTo(34.001,10.269,27.128,4,18.669,4);
			ctx.bezierCurveTo(16.333000000000002,4,11.001000000000001,10.269,11.001000000000001,19.002000000000002);
			ctx.bezierCurveTo(11.001000000000001,27.732000000000003,16.571,34,18.669,34);
			ctx.bezierCurveTo(27.128,34,34.001,27.732,34.001,19.002);
			ctx.closePath();
			ctx.fill();
		} else {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(25,0);
			ctx.bezierCurveTo(11.221,0,0,11.216,0,25);
			ctx.bezierCurveTo(0,38.784,11.221,50,25,50);
			ctx.bezierCurveTo(38.789,50,50,38.784,50,25);
			ctx.bezierCurveTo(50,11.216000000000001,38.789,0,25,0);
			ctx.closePath();
			ctx.fill();

			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(45,24.997);
			ctx.bezierCurveTo(45,13.971,36.035,5,25.002,5);
			ctx.bezierCurveTo(21.955,5,15,13.971,15,24.997);
			ctx.bezierCurveTo(15,36.029,22.266,45,25.002,45);
			ctx.bezierCurveTo(36.035,45,45,36.029,45,24.997);
			ctx.closePath();
			ctx.fill();
		}
	}
	ctx.restore();
};