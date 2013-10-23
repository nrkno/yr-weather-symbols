var FILL_COLOUR = '#E6D043'
	, CENTER_COLOUR = '#ffffff';

exports.render = function(ctx, options) {
	ctx.save();
	ctx.translate(options.x, options.y);
	ctx.scale(options.scale, options.scale);

	if (options.phase === 1) {
		if (options.small) {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(23.001,0);
			ctx.bezierCurveTo(10.320000000000002,0,0.0010000000000012221,10.318,0.0010000000000012221,23);
			ctx.bezierCurveTo(0.0010000000000012221,35.682,10.320000000000002,46,23.001,46);
			ctx.bezierCurveTo(35.682,46,46.001000000000005,35.682,46.001000000000005,23);
			ctx.bezierCurveTo(46.001000000000005,10.317999999999998,35.682,0,23.001,0);
			ctx.closePath();
			ctx.fill();

			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(23,41);
			ctx.bezierCurveTo(13.073,41,5,32.928,5,23);
			ctx.bezierCurveTo(5,13.072000000000003,13.073,5,23,5);
			ctx.bezierCurveTo(32.927,5,41,13.072,41,23);
			ctx.bezierCurveTo(41,32.928,32.927,41,23,41);
			ctx.closePath();
			ctx.fill();
		} else {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(30.001,0);
			ctx.bezierCurveTo(13.46,0,0.0010000000000012221,13.459,0.0010000000000012221,30);
			ctx.bezierCurveTo(0.0010000000000012221,46.541,13.46,60,30.001,60);
			ctx.bezierCurveTo(46.542,60,60.001000000000005,46.541,60.001000000000005,30);
			ctx.bezierCurveTo(60.001000000000005,13.459000000000003,46.542,0,30.001,0);
			ctx.closePath();
			ctx.fill();

			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(30.001,54);
			ctx.bezierCurveTo(16.765,54,6.001000000000001,43.236000000000004,6.001000000000001,30);
			ctx.bezierCurveTo(6.001000000000001,16.763999999999996,16.765,6,30.001,6);
			ctx.bezierCurveTo(43.237,6,54.001000000000005,16.764,54.001000000000005,30);
			ctx.bezierCurveTo(54.001000000000005,43.236000000000004,43.237,54,30.001,54);
			ctx.closePath();
			ctx.fill();
		}
	} else if (options.phase === 2) {
		if (options.small) {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(0.001,23);
			ctx.bezierCurveTo(0.001,35.682,10.315,46,23.001,46);
			ctx.bezierCurveTo(35.678,46,46.001000000000005,35.682,46.001000000000005,23);
			ctx.bezierCurveTo(46.001000000000005,10.317999999999998,35.678000000000004,0,23.001000000000005,0);
			ctx.bezierCurveTo(10.315,0,0.001,10.318,0.001,23);
			ctx.closePath();
			ctx.fill();

			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(5,23);
			ctx.bezierCurveTo(5,12.521,13.367,5,23.667,5);
			ctx.bezierCurveTo(26.511,5,33,12.521,33,23);
			ctx.bezierCurveTo(33,33.479,26.219,41,23.667,41);
			ctx.bezierCurveTo(13.367,41,5,33.479,5,23);
			ctx.closePath();
			ctx.fill();
		} else {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(0.001,30);
			ctx.bezierCurveTo(0.001,46.541,13.453999999999999,60,30.001,60);
			ctx.bezierCurveTo(46.536,60,60.001000000000005,46.541,60.001000000000005,30);
			ctx.bezierCurveTo(60.001000000000005,13.459000000000003,46.536,0,30.001000000000005,0);
			ctx.bezierCurveTo(13.454,0,0.001,13.459,0.001,30);
			ctx.closePath();
			ctx.fill();

			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(6.001,30);
			ctx.bezierCurveTo(6.001,16.764,16.759,6,30.001,6);
			ctx.bezierCurveTo(33.657000000000004,6,42.001000000000005,16.764,42.001000000000005,30);
			ctx.bezierCurveTo(42.001000000000005,43.236000000000004,33.282000000000004,54,30.001000000000005,54);
			ctx.bezierCurveTo(16.759,54,6.001,43.236,6.001,30);
			ctx.closePath();
			ctx.fill();
		}
	} else if (options.phase === 3) {
		if (options.small) {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(23,-0.333);
			ctx.bezierCurveTo(10.318,-0.333,0,9.985,0,22.667);
			ctx.bezierCurveTo(0,35.349000000000004,10.318,45.667,23,45.667);
			ctx.bezierCurveTo(35.682,45.667,46,35.349000000000004,46,22.667);
			ctx.bezierCurveTo(46,9.985,35.682,-0.333,23,-0.333);
			ctx.closePath();
			ctx.fill();

			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(23,40.667);
			ctx.bezierCurveTo(13.073,40.667,5,32.594,5,22.667);
			ctx.bezierCurveTo(5,12.740000000000002,13.073,4.667000000000002,23,4.667000000000002);
			ctx.lineTo(23,40.667);
			ctx.closePath();
			ctx.fill();
		} else {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(30.334,0);
			ctx.bezierCurveTo(13.793,0,0.33399999999999963,13.459,0.33399999999999963,30);
			ctx.bezierCurveTo(0.33399999999999963,46.541,13.793,60,30.334,60);
			ctx.bezierCurveTo(46.875,60,60.334,46.541,60.334,30);
			ctx.bezierCurveTo(60.334,13.459000000000003,46.875,0,30.334,0);
			ctx.closePath();
			ctx.fill();

			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(30.334,54);
			ctx.bezierCurveTo(17.098,54,6.334,43.236000000000004,6.334,30);
			ctx.bezierCurveTo(6.334,16.763999999999996,17.098,6,30.334,6);
			ctx.lineTo(30.334,54);
			ctx.closePath();
			ctx.fill();
		}
	} else if (options.phase === 4) {
		if (options.small) {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(23,-0.01);
			ctx.bezierCurveTo(10.318,-0.01,0,10.308,0,22.99);
			ctx.bezierCurveTo(0,35.672,10.318,45.989999999999995,23,45.989999999999995);
			ctx.bezierCurveTo(35.682,45.989999999999995,46,35.672,46,22.989999999999995);
			ctx.bezierCurveTo(46,10.307999999999993,35.682,-0.01,23,-0.01);
			ctx.closePath();
			ctx.fill();

			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(5,22.99);
			ctx.bezierCurveTo(5,13.049999999999999,13.06,4.989999999999998,23,4.989999999999998);
			ctx.bezierCurveTo(20.258,4.989999999999998,14,13.062999999999999,14,22.99);
			ctx.bezierCurveTo(14,32.917,20.534,40.989999999999995,23,40.989999999999995);
			ctx.bezierCurveTo(13.06,40.99,5,32.931,5,22.99);
			ctx.closePath();
			ctx.fill();
		} else {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(30,0.334);
			ctx.bezierCurveTo(13.459,0.334,0,13.793,0,30.334);
			ctx.bezierCurveTo(0,46.875,13.459,60.334,30,60.334);
			ctx.bezierCurveTo(46.541,60.334,60,46.875,60,30.334000000000003);
			ctx.bezierCurveTo(60,13.793000000000006,46.541,0.334,30,0.334);
			ctx.closePath();
			ctx.fill();

			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(6,30.334);
			ctx.bezierCurveTo(6,17.08,16.746000000000002,6.334,30,6.334);
			ctx.bezierCurveTo(26.344,6.334,18,17.098,18,30.334);
			ctx.bezierCurveTo(18,43.57,26.713,54.334,30,54.334);
			ctx.bezierCurveTo(16.746,54.334,6,43.588,6,30.334);
			ctx.closePath();
			ctx.fill();
		}
	} else if (options.phase === 5) {
		if (options.small) {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(23,0);
			ctx.bezierCurveTo(10.318,0,0,10.318,0,23);
			ctx.bezierCurveTo(0,35.682,10.318,46,23,46);
			ctx.bezierCurveTo(35.682,46,46,35.682,46,23);
			ctx.bezierCurveTo(46,10.317999999999998,35.682,0,23,0);
			ctx.closePath();
			ctx.fill();
		} else {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(30,0);
			ctx.bezierCurveTo(13.459,0,0,13.459,0,30);
			ctx.bezierCurveTo(0,46.541,13.459,60,30,60);
			ctx.bezierCurveTo(46.541,60,60,46.541,60,30);
			ctx.bezierCurveTo(60,13.459000000000003,46.541,0,30,0);
			ctx.closePath();
			ctx.fill();
		}
	} else if (options.phase === 6) {
		if (options.small) {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(0,22.99);
			ctx.bezierCurveTo(0,35.672,10.318,45.989999999999995,23,45.989999999999995);
			ctx.bezierCurveTo(35.682,45.989999999999995,46,35.672,46,22.989999999999995);
			ctx.bezierCurveTo(46,10.307999999999993,35.682,-0.010000000000005116,23,-0.010000000000005116);
			ctx.bezierCurveTo(10.317999999999998,-0.010000000000005116,0,10.309,0,22.99);
			ctx.closePath();
			ctx.fill();

			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(23,40.99);
			ctx.bezierCurveTo(25.466,40.99,32,32.917,32,22.990000000000002);
			ctx.bezierCurveTo(32,13.063000000000002,25.742,4.990000000000002,23,4.990000000000002);
			ctx.bezierCurveTo(32.94,4.990000000000002,41,13.050000000000002,41,22.990000000000002);
			ctx.bezierCurveTo(41,32.93,32.94,40.99,23,40.99);
			ctx.closePath();
			ctx.fill();
		} else {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(30,0.334);
			ctx.bezierCurveTo(13.459,0.334,0,13.793,0,30.334);
			ctx.bezierCurveTo(0,46.875,13.459,60.334,30,60.334);
			ctx.bezierCurveTo(46.541,60.334,60,46.875,60,30.334000000000003);
			ctx.bezierCurveTo(60,13.793000000000006,46.541,0.334,30,0.334);
			ctx.closePath();
			ctx.fill();

			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(30,54.334);
			ctx.bezierCurveTo(33.287,54.334,42,43.57000000000001,42,30.334000000000003);
			ctx.bezierCurveTo(42,17.098,33.656,6.334000000000003,30,6.334000000000003);
			ctx.bezierCurveTo(43.254,6.334000000000003,54,17.080000000000005,54,30.334000000000003);
			ctx.bezierCurveTo(54,43.588,43.254,54.334,30,54.334);
			ctx.closePath();
			ctx.fill();
		}
	} else if (options.phase === 7) {
		if (options.small) {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(0,22.667);
			ctx.bezierCurveTo(0,35.349000000000004,10.318,45.667,23,45.667);
			ctx.bezierCurveTo(35.682,45.667,46,35.349000000000004,46,22.667);
			ctx.bezierCurveTo(46,9.985,35.682,-0.3329999999999984,23,-0.3329999999999984);
			ctx.bezierCurveTo(10.317999999999998,-0.3329999999999984,0,9.985,0,22.667);
			ctx.closePath();
			ctx.fill();

			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(23,4.667);
			ctx.bezierCurveTo(32.927,4.667,41,12.74,41,22.667);
			ctx.bezierCurveTo(41,32.594,32.927,40.667,23,40.667);
			ctx.lineTo(23,4.667);
			ctx.closePath();
			ctx.fill();
		} else {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(0.334,30);
			ctx.bezierCurveTo(0.334,46.541,13.793,60,30.334,60);
			ctx.bezierCurveTo(46.875,60,60.334,46.541,60.334,30);
			ctx.bezierCurveTo(60.334,13.459000000000003,46.875,0,30.334000000000003,0);
			ctx.bezierCurveTo(13.793000000000006,0,0.334,13.459,0.334,30);
			ctx.closePath();
			ctx.fill();

			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(30.334,6);
			ctx.bezierCurveTo(43.57,6,54.334,16.764,54.334,30);
			ctx.bezierCurveTo(54.334,43.236000000000004,43.57000000000001,54,30.334000000000003,54);
			ctx.lineTo(30.334000000000003,6);
			ctx.closePath();
			ctx.fill();
		}
	} else if (options.phase === 8) {
		if (options.small) {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(23.001,0);
			ctx.bezierCurveTo(10.324000000000002,0,0.0010000000000012221,10.318,0.0010000000000012221,23);
			ctx.bezierCurveTo(0.0010000000000012221,35.682,10.324000000000002,46,23.001,46);
			ctx.bezierCurveTo(35.687,46,46.001000000000005,35.682,46.001000000000005,23);
			ctx.bezierCurveTo(46.001000000000005,10.317999999999998,35.687,0,23.001,0);
			ctx.closePath();
			ctx.fill();

			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(22.335,41);
			ctx.bezierCurveTo(19.783,41,13.002,33.479,13.002,23);
			ctx.bezierCurveTo(13.002,12.521,19.491,5,22.335,5);
			ctx.bezierCurveTo(32.635000000000005,5,41.002,12.521,41.002,23);
			ctx.bezierCurveTo(41.002,33.479,32.635,41,22.335,41);
			ctx.closePath();
			ctx.fill();
		} else {
			ctx.fillStyle = FILL_COLOUR;
			ctx.beginPath();
			ctx.moveTo(30.001,0);
			ctx.bezierCurveTo(13.466000000000001,0,0.0010000000000012221,13.459,0.0010000000000012221,30);
			ctx.bezierCurveTo(0.0010000000000012221,46.541,13.466000000000001,60,30.001,60);
			ctx.bezierCurveTo(46.548,60,60.001000000000005,46.541,60.001000000000005,30);
			ctx.bezierCurveTo(60.001000000000005,13.459000000000003,46.548,0,30.001,0);
			ctx.closePath();
			ctx.fill();

			ctx.fillStyle = CENTER_COLOUR;
			ctx.beginPath();
			ctx.moveTo(30.001,54);
			ctx.bezierCurveTo(26.720000000000002,54,18.001,43.236000000000004,18.001,30);
			ctx.bezierCurveTo(18.001,16.763999999999996,26.345,6,30.001,6);
			ctx.bezierCurveTo(43.243,6,54.001000000000005,16.764,54.001000000000005,30);
			ctx.bezierCurveTo(54.001000000000005,43.236000000000004,43.243,54,30.001,54);
			ctx.closePath();
			ctx.fill();
		}
	}
	ctx.restore();
};