require.register('primitives/sunPrimitive', function(module, exports, require) {
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
});
require.register('primitives/moonPrimitive', function(module, exports, require) {
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
});
require.register('primitives/cloudPrimitive', function(module, exports, require) {
  var BG_COLOUR = '#ffffff';  
    
  exports.render = function(ctx, options) {  
  	var tint = Math.floor(255 * (1-options.tint));  
    
  	ctx.save();  
  	ctx.translate(options.x, options.y)  
  	ctx.scale(options.scale, options.scale);  
    
  	if (options.small) {  
  		// Stroke  
  		ctx.fillStyle = BG_COLOUR;  
  		ctx.beginPath();  
  		ctx.moveTo(29.271,-6);  
  		ctx.bezierCurveTo(26.027,-6,22.981,-4.998,20.379,-3.118);  
  		ctx.bezierCurveTo(18.740000000000002,-3.598,17.074,-3.847,15.433000000000002,-3.847);  
  		ctx.bezierCurveTo(10.741000000000001,-3.847,6.444000000000001,-1.8559999999999999,3.644000000000002,1.6140000000000003);  
  		ctx.bezierCurveTo(2.001,3.65,0.979,6.034,0.617,8.593);  
  		ctx.bezierCurveTo(-3.34,11.026,-6,15.455,-6,20.341);  
  		ctx.bezierCurveTo(-6,27.745,0.188,34,7.512,34);  
  		ctx.lineTo(57.061,34);  
  		ctx.bezierCurveTo(64.202,34,69,29.628,69,23.121);  
  		ctx.bezierCurveTo(69,18.819,67.091,15.527999999999999,63.652,13.710999999999999);  
  		ctx.bezierCurveTo(61.498000000000005,9.412999999999998,57.664,6.695999999999999,53.2,6.450999999999999);  
  		ctx.bezierCurveTo(50.885000000000005,3.4389999999999987,47.39,1.6629999999999985,43.383,1.6629999999999985);  
  		ctx.bezierCurveTo(43.265,1.6629999999999985,43.148,1.6639999999999984,43.029,1.6669999999999985);  
  		ctx.bezierCurveTo(40.123,-2.956,34.973,-6,29.271,-6);  
  		ctx.lineTo(29.271,-6);  
  		ctx.closePath();  
  		ctx.fill();  
    
  		// Fill  
  		ctx.fillStyle = 'rgb(' + tint	+ ',' + tint + ',' + tint + ')';  
  		ctx.beginPath();  
  		ctx.moveTo(7.481,27.001);  
  		ctx.bezierCurveTo(3.544,27.001,0,23.517,0,19.659);  
  		ctx.bezierCurveTo(0,15.788999999999998,3.15,12.689999999999998,6.693,12.309999999999999);  
  		ctx.bezierCurveTo(5.044,4.469,13.35,-0.781,21.656,3.8);  
  		ctx.bezierCurveTo(27.561999999999998,-3.543,38.193,0.714,39.369,8.447);  
  		ctx.bezierCurveTo(43.434,6.390999999999999,48.469,7.348999999999999,49.827,12.66);  
  		ctx.bezierCurveTo(54.135,10.851,57.832,13.431000000000001,59.056,17.849);  
  		ctx.bezierCurveTo(61.892,18.44,63,19.888,63,22.359);  
  		ctx.bezierCurveTo(63,25.843000000000004,60.244,27.001,57.094,27.001);  
  		ctx.bezierCurveTo(53.944,27.001,9.844,27.001,7.481,27.001);  
  		ctx.closePath();  
  		ctx.fill();  
  	} else {  
  		// Stroke  
  		ctx.fillStyle = BG_COLOUR;  
  		ctx.beginPath();  
  		ctx.moveTo(53.535,-7);  
  		ctx.lineTo(53.535,-7);  
  		ctx.bezierCurveTo(44.986,-7.002,37.339,-2.032,33.655,5.292);  
  		ctx.bezierCurveTo(32.807,5.177,31.964000000000002,5.111,31.126,5.111);  
  		ctx.bezierCurveTo(25.229,5.111,20.306,7.91,17.356,12.675);  
  		ctx.bezierCurveTo(17.086000000000002,12.661000000000001,16.816000000000003,12.655000000000001,16.547,12.655000000000001);  
  		ctx.bezierCurveTo(10.067,12.655000000000001,4.462,16.718,1.5950000000000006,23.251);  
  		ctx.bezierCurveTo(-3.332,25.418,-6,29.632,-6,35.424);  
  		ctx.bezierCurveTo(-6,43.674,0.033,49,9.375,49);  
  		ctx.lineTo(88.118,49);  
  		ctx.bezierCurveTo(92.67999999999999,49,97.253,47.04,100.65299999999999,43.602000000000004);  
  		ctx.bezierCurveTo(104.04899999999999,40.179,106.00099999999999,35.586000000000006,106.00099999999999,31.012000000000004);  
  		ctx.bezierCurveTo(106.00099999999999,23.961000000000006,101.76499999999999,17.630000000000003,95.67699999999999,14.696000000000005);  
  		ctx.bezierCurveTo(95.454,10.627000000000006,94.02699999999999,6.846000000000005,91.478,3.696000000000005);  
  		ctx.bezierCurveTo(87.709,-0.938,81.9,-3.597,75.529,-3.597);  
  		ctx.bezierCurveTo(72.693,-3.597,69.797,-3.06,66.96799999999999,-2.032);  
  		ctx.bezierCurveTo(63.145,-5.259,58.512,-7,53.535,-7);  
  		ctx.lineTo(53.535,-7);  
  		ctx.closePath();  
  		ctx.fill();  
    
  		// Fill  
  		ctx.fillStyle = 'rgb(' + tint	+ ',' + tint + ',' + tint + ')';  
  		ctx.beginPath();  
  		ctx.moveTo(88.119,43);  
  		ctx.bezierCurveTo(94.369,43,100,37.313,100,31.02);  
  		ctx.bezierCurveTo(100,24.727,94.998,19.679000000000002,89.377,19.061999999999998);  
  		ctx.bezierCurveTo(91.984,6.278,78.804,-2.274,65.626,5.191);  
  		ctx.bezierCurveTo(56.248,-6.768,39.37,0.154,37.497,12.755);  
  		ctx.bezierCurveTo(31.051000000000002,9.426,23.045,10.992,20.898,19.629);  
  		ctx.bezierCurveTo(14.062,16.676000000000002,8.203999999999999,20.882,6.247999999999999,28.07);  
  		ctx.bezierCurveTo(1.756,29.054,0,31.406,0,35.437);  
  		ctx.bezierCurveTo(0,41.103,4.376,43,9.373,43);  
  		ctx.bezierCurveTo(14.37,43,84.372,43,88.119,43);  
  		ctx.closePath();  
  		ctx.fill();  
  	}  
  	ctx.restore();  
  };  
  
});
require.register('primitives/raindropPrimitive', function(module, exports, require) {
  var TWO_PI = Math.PI * 2  
  	, BG_COLOUR = '#ffffff'  
  	, FILL_COLOUR = '#1362b1';  
    
  exports.render = function(ctx, options) {  
  	// Stroke  
  	ctx.save();  
  	ctx.fillStyle = BG_COLOUR;  
  	ctx.translate(options.x, options.y)  
  	ctx.scale(options.scale, options.scale);  
  	ctx.fillStyle = BG_COLOUR;  
  	ctx.beginPath();  
  	ctx.arc(0,2,9,0,TWO_PI,true);  
  	ctx.closePath();  
  	ctx.fill();  
    
  	// Fill  
  	ctx.fillStyle = FILL_COLOUR;  
  	ctx.beginPath();  
  	ctx.moveTo(12,10.818);  
  	ctx.bezierCurveTo(12,14.235,9.311,17,6,17);  
  	ctx.bezierCurveTo(2.684,17,0,14.235,0,10.818);  
  	ctx.bezierCurveTo(0,8.897,0,0,0,0);  
  	ctx.bezierCurveTo(5.484,5.457,12,5.215,12,10.818);  
  	ctx.closePath();  
  	ctx.fill();  
  	ctx.restore();  
  };
});
require.register('primitives/snowflakePrimitive', function(module, exports, require) {
  var TWO_PI = Math.PI * 2  
  	, BG_COLOUR = '#ffffff'  
  	, FILL_COLOUR = '#4494e3';  
    
  exports.render = function(ctx, options) {  
  	// Stroke  
  	ctx.save();  
  	ctx.fillStyle = BG_COLOUR;  
  	ctx.translate(options.x, options.y)  
  	ctx.scale(options.scale, options.scale);  
  	ctx.fillStyle = BG_COLOUR;  
  	ctx.beginPath();  
  	ctx.arc(9,2,9,0,TWO_PI,true);  
  	ctx.closePath();  
  	ctx.fill();  
    
  	// Fill  
  	ctx.fillStyle = FILL_COLOUR;  
  	ctx.beginPath();  
  	ctx.moveTo(10.332,1.024);  
  	ctx.lineTo(9.377,4.612);  
  	ctx.bezierCurveTo(8.989,4.644,8.613,4.682,8.231,4.771);  
  	ctx.bezierCurveTo(7.861,4.884,7.5169999999999995,5.025,7.186,5.197);  
  	ctx.lineTo(4.569,2.58);  
  	ctx.bezierCurveTo(4.021,2.044,3.136,2.031,2.589,2.58);  
  	ctx.bezierCurveTo(2.041,3.114,2.041,4.012,2.603,4.554);  
  	ctx.lineTo(5.207000000000001,7.178000000000001);  
  	ctx.bezierCurveTo(4.85,7.848,4.658,8.593,4.627,9.345);  
  	ctx.lineTo(1.0469999999999997,10.307);  
  	ctx.bezierCurveTo(0.2969999999999997,10.504,-0.16200000000000037,11.269,0.053999999999999715,12.013);  
  	ctx.bezierCurveTo(0.2519999999999997,12.778,1.0219999999999998,13.218,1.7739999999999996,13.007);  
  	ctx.lineTo(5.353,12.046);  
  	ctx.bezierCurveTo(5.761,12.708,6.308,13.263,6.945,13.663);  
  	ctx.lineTo(5.984,17.243000000000002);  
  	ctx.bezierCurveTo(5.787,17.982000000000003,6.225,18.740000000000002,6.97,18.957);  
  	ctx.bezierCurveTo(7.7219999999999995,19.143,8.48,18.715,8.677,17.963);  
  	ctx.lineTo(9.632,14.384);  
  	ctx.bezierCurveTo(10.020999999999999,14.370000000000001,10.397,14.333,10.766,14.238);  
  	ctx.bezierCurveTo(11.149000000000001,14.129999999999999,11.492,13.982999999999999,11.811,13.804);  
  	ctx.lineTo(14.44,16.429000000000002);  
  	ctx.bezierCurveTo(14.981,16.977000000000004,15.873,16.963,16.419999999999998,16.429000000000002);  
  	ctx.bezierCurveTo(16.967999999999996,15.879000000000001,16.967999999999996,14.995000000000003,16.406999999999996,14.447000000000003);  
  	ctx.lineTo(13.789999999999996,11.829000000000002);  
  	ctx.bezierCurveTo(14.152999999999995,11.161000000000003,14.350999999999996,10.416000000000002,14.368999999999996,9.651000000000003);  
  	ctx.lineTo(17.960999999999995,8.689000000000004);  
  	ctx.bezierCurveTo(18.712999999999994,8.479000000000003,19.158999999999995,7.714000000000004,18.947999999999993,6.974000000000004);  
  	ctx.bezierCurveTo(18.751999999999992,6.223000000000003,17.985999999999994,5.777000000000004,17.221999999999994,5.995000000000004);  
  	ctx.lineTo(13.635999999999994,6.949000000000003);  
  	ctx.bezierCurveTo(13.235999999999994,6.294000000000003,12.700999999999993,5.752000000000003,12.050999999999995,5.357000000000003);  
  	ctx.lineTo(13.006999999999994,1.7770000000000028);  
  	ctx.bezierCurveTo(13.209999999999994,1.0250000000000028,12.777999999999995,0.2600000000000029,12.037999999999995,0.045000000000002816);  
  	ctx.bezierCurveTo(11.287,-0.147,10.529,0.299,10.332,1.024);  
  	ctx.closePath();  
  	ctx.fill();  
    
  	// Center  
  	ctx.fillStyle = BG_COLOUR;  
  	ctx.beginPath();  
  	ctx.arc(9.5,9.5,2.5,0,TWO_PI,true);  
  	ctx.closePath();  
  	ctx.fill();  
  	ctx.restore();  
  };
});
require.register('primitives/fogPrimitive', function(module, exports, require) {
  var BG_COLOUR = '#ffffff';  
    
  exports.render = function(ctx, options) {  
  	var tint = Math.floor(255 * (1-options.tint));  
    
  	ctx.save();  
  	ctx.fillStyle = 'rgb(' + tint	+ ',' + tint + ',' + tint + ')';  
  	ctx.translate(options.x, options.y)  
  	ctx.scale(options.scale, options.scale);  
  	ctx.beginPath();  
  	ctx.moveTo(100,32);  
  	ctx.bezierCurveTo(99.695,25.876,94.885,21.034,89.429,20.422);  
  	ctx.bezierCurveTo(92.053,7.4,78.876,-1.304,65.686,6.301);  
  	ctx.bezierCurveTo(56.31100000000001,-5.871,39.429,1.1770000000000005,37.56100000000001,13.998000000000001);  
  	ctx.bezierCurveTo(31.116000000000007,10.600000000000001,23.108000000000008,12.199000000000002,20.959000000000007,20.997);  
  	ctx.bezierCurveTo(14.117000000000008,17.997,8.264000000000006,22.271,6.305000000000007,29.595);  
  	ctx.bezierCurveTo(4.492,29.395,2.246,29.694,0,32);  
  	ctx.lineTo(100,32);  
  	ctx.closePath();  
  	ctx.fill();  
    
  	ctx.beginPath();  
  	ctx.moveTo(96.875,39);  
  	ctx.lineTo(3.125,39);  
  	ctx.bezierCurveTo(1.404,39,0,40.348,0,42);  
  	ctx.bezierCurveTo(0,43.652,1.404,45,3.125,45);  
  	ctx.lineTo(96.875,45);  
  	ctx.bezierCurveTo(98.596,45,100,43.652,100,42);  
  	ctx.bezierCurveTo(100,40.348,98.596,39,96.875,39);  
  	ctx.closePath();  
  	ctx.fill();  
    
  	ctx.beginPath();  
  	ctx.moveTo(89.893,52);  
  	ctx.lineTo(9.107,52);  
  	ctx.bezierCurveTo(7.396,52,6,53.348,6,55);  
  	ctx.bezierCurveTo(6,56.652,7.396,58,9.107,58);  
  	ctx.lineTo(89.893,58);  
  	ctx.bezierCurveTo(91.604,58,93,56.652,93,55);  
  	ctx.bezierCurveTo(93,53.348,91.604,52,89.893,52);  
  	ctx.closePath();  
  	ctx.fill();  
    
  	ctx.beginPath();  
  	ctx.moveTo(89.854,64);  
  	ctx.lineTo(16.146,64);  
  	ctx.bezierCurveTo(14.414,64,13,65.348,13,67);  
  	ctx.bezierCurveTo(13,68.652,14.414,70,16.146,70);  
  	ctx.lineTo(89.853,70);  
  	ctx.bezierCurveTo(91.586,70,93,68.652,93,67);  
  	ctx.bezierCurveTo(93,65.348,91.586,64,89.854,64);  
  	ctx.closePath();  
  	ctx.fill();  
  	ctx.restore();  
  };  
  
});
require.register('primitives/lightningPrimitive', function(module, exports, require) {
  var BG_COLOUR = '#ffffff'  
  	, FILL_COLOUR = '#d0ab3a';  
    
  exports.render = function(ctx, options) {  
  	// Fill  
  	ctx.save();  
  	ctx.fillStyle = FILL_COLOUR;  
  	ctx.translate(options.x, options.y)  
  	ctx.scale(options.scale, options.scale);  
  	ctx.beginPath();  
  	ctx.moveTo(10.413,0);  
  	ctx.lineTo(4.163,12.484);  
  	ctx.lineTo(12.488,12.484);  
  	ctx.lineTo(0,25);  
  	ctx.lineTo(25.001,8.321);  
  	ctx.lineTo(16.663000000000004,8.321);  
  	ctx.lineTo(24.995,0);  
  	ctx.lineTo(10.413,0);  
  	ctx.closePath();  
  	ctx.fill();  
  	ctx.restore();  
  };
});
require.register('Symbol', function(module, exports, require) {
  var sun = require('./primitives/sunPrimitive')
  	, moon = require('./primitives/moonPrimitive')
  	, cloud = require('./primitives/cloudPrimitive')
  	, raindrop = require('./primitives/raindropPrimitive')
  	, snowflake = require('./primitives/snowflakePrimitive')
  	, fog = require('./primitives/fogPrimitive')
  	, lightning = require('./primitives/lightningPrimitive')
  
  	, FORMULA = {
  			// Sun
  			'01d': [
  				{
  					primitive: sun,
  					x: 0,
  					y: 0
  				}
  			],
  			'02d': [
  				{
  					primitive: sun,
  					x: 0,
  					y: 0
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 65,
  					small: true,
  					tint: 0.2
  				}
  			],
  			'03d': [
  				{
  					primitive: sun,
  					x: 0,
  					y: 7,
  					small: true
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 44,
  					tint: 0.4
  				}
  			],
  			'05d': [
  				{
  					primitive: sun,
  					x: 0,
  					y: 0,
  					small: true
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 36,
  					tint: 0.5
  				},
  				{
  					primitive: raindrop,
  					x: 52,
  					y: 78
  				},
  				{
  					primitive: raindrop,
  					x: 72,
  					y: 80
  				}
  			],
  			'07d': [
  				{
  					primitive: sun,
  					x: 0,
  					y: 0,
  					small: true
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 36,
  					tint: 0.5
  				},
  				{
  					primitive: snowflake,
  					x: 35,
  					y: 78
  				},
  				{
  					primitive: raindrop,
  					x: 64,
  					y: 82
  				}
  			],
  			'08d': [
  				{
  					primitive: sun,
  					x: 0,
  					y: 0,
  					small: true
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 36,
  					tint: 0.5
  				},
  				{
  					primitive: snowflake,
  					x: 20,
  					y: 82
  				},
  				{
  					primitive: snowflake,
  					x: 42,
  					y: 78
  				}
  			],
  			'06d': [
  				{
  					primitive: sun,
  					x: 0,
  					y: 0,
  					small: true
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 36,
  					tint: 0.5
  				},
  				{
  					primitive: lightning,
  					x: 10,
  					y: 74
  				},
  				{
  					primitive: raindrop,
  					x: 52,
  					y: 78
  				},
  				{
  					primitive: raindrop,
  					x: 72,
  					y: 80
  				}
  			],
  			'20d': [
  				{
  					primitive: sun,
  					x: 0,
  					y: 0,
  					small: true
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 36,
  					tint: 0.5
  				},
  				{
  					primitive: lightning,
  					x: 10,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 44,
  					y: 78
  				},
  				{
  					primitive: raindrop,
  					x: 72,
  					y: 82
  				}
  			],
  			'21d': [
  				{
  					primitive: sun,
  					x: 0,
  					y: 0,
  					small: true
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 36,
  					tint: 0.5
  				},
  				{
  					primitive: lightning,
  					x: 10,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 42,
  					y: 82
  				},
  				{
  					primitive: snowflake,
  					x: 64,
  					y: 78
  				}
  			],
  
  			// Winter sun
  			'01m': [
  				{
  					primitive: sun,
  					x: 0,
  					y: 30,
  					winter: true
  				}
  			],
  			'02m': [
  				{
  					primitive: sun,
  					x: 0,
  					y: 32,
  					winter: true
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 60,
  					small: true,
  					tint: 0.2
  				}
  			],
  			'03m': [
  				{
  					primitive: sun,
  					x: 0,
  					y: 22,
  					small: true,
  					winter: true
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 44,
  					tint: 0.4
  				}
  			],
  			'05m': [
  				{
  					primitive: sun,
  					x: 0,
  					y: 16,
  					small: true,
  					winter: true
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 36,
  					tint: 0.5
  				},
  				{
  					primitive: raindrop,
  					x: 52,
  					y: 78
  				},
  				{
  					primitive: raindrop,
  					x: 72,
  					y: 80
  				}
  			],
  			'07m': [
  				{
  					primitive: sun,
  					x: 0,
  					y: 16,
  					small: true,
  					winter: true
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 36,
  					tint: 0.5
  				},
  				{
  					primitive: snowflake,
  					x: 35,
  					y: 78
  				},
  				{
  					primitive: raindrop,
  					x: 64,
  					y: 82
  				}
  			],
  			'08m': [
  				{
  					primitive: sun,
  					x: 0,
  					y: 16,
  					small: true,
  					winter: true
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 36,
  					tint: 0.5
  				},
  				{
  					primitive: snowflake,
  					x: 20,
  					y: 82
  				},
  				{
  					primitive: snowflake,
  					x: 42,
  					y: 78
  				}
  			],
  			'06m': [
  				{
  					primitive: sun,
  					x: 0,
  					y: 16,
  					small: true,
  					winter: true
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 36,
  					tint: 0.5
  				},
  				{
  					primitive: lightning,
  					x: 10,
  					y: 74
  				},
  				{
  					primitive: raindrop,
  					x: 52,
  					y: 78
  				},
  				{
  					primitive: raindrop,
  					x: 72,
  					y: 80
  				}
  			],
  			'20m': [
  				{
  					primitive: sun,
  					x: 0,
  					y: 16,
  					small: true,
  					winter: true
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 36,
  					tint: 0.5
  				},
  				{
  					primitive: lightning,
  					x: 10,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 44,
  					y: 78
  				},
  				{
  					primitive: raindrop,
  					x: 72,
  					y: 82
  				}
  			],
  			'21m': [
  				{
  					primitive: sun,
  					x: 0,
  					y: 16,
  					small: true,
  					winter: true
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 36,
  					tint: 0.5
  				},
  				{
  					primitive: lightning,
  					x: 10,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 42,
  					y: 82
  				},
  				{
  					primitive: snowflake,
  					x: 64,
  					y: 78
  				}
  			],
  
  			// Moon
  			'01n': [
  				{
  					primitive: moon,
  					x: 20,
  					y: 20
  				}
  			],
  			'02n': [
  				{
  					primitive: moon,
  					x: 20,
  					y: 20
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 65,
  					small: true,
  					tint: 0.2
  				}
  			],
  			'03n': [
  				{
  					primitive: moon,
  					x: 10,
  					y: 16,
  					small: true
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 44,
  					tint: 0.4
  				}
  			],
  			'05n': [
  				{
  					primitive: moon,
  					x: 10,
  					y: 8,
  					small: true
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 36,
  					tint: 0.5
  				},
  				{
  					primitive: raindrop,
  					x: 52,
  					y: 78
  				},
  				{
  					primitive: raindrop,
  					x: 72,
  					y: 80
  				}
  			],
  			'07n': [
  				{
  					primitive: moon,
  					x: 10,
  					y: 8,
  					small: true
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 36,
  					tint: 0.5
  				},
  				{
  					primitive: snowflake,
  					x: 35,
  					y: 78
  				},
  				{
  					primitive: raindrop,
  					x: 64,
  					y: 82
  				}
  			],
  			'08n': [
  				{
  					primitive: moon,
  					x: 10,
  					y: 8,
  					small: true
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 36,
  					tint: 0.5
  				},
  				{
  					primitive: snowflake,
  					x: 20,
  					y: 82
  				},
  				{
  					primitive: snowflake,
  					x: 42,
  					y: 78
  				}
  			],
  			'06n': [
  				{
  					primitive: moon,
  					x: 10,
  					y: 8,
  					small: true
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 36,
  					tint: 0.5
  				},
  				{
  					primitive: lightning,
  					x: 10,
  					y: 74
  				},
  				{
  					primitive: raindrop,
  					x: 52,
  					y: 78
  				},
  				{
  					primitive: raindrop,
  					x: 72,
  					y: 80
  				}
  			],
  			'20n': [
  				{
  					primitive: moon,
  					x: 10,
  					y: 8,
  					small: true
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 36,
  					tint: 0.5
  				},
  				{
  					primitive: lightning,
  					x: 10,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 44,
  					y: 78
  				},
  				{
  					primitive: raindrop,
  					x: 72,
  					y: 82
  				}
  			],
  			'21n': [
  				{
  					primitive: moon,
  					x: 10,
  					y: 8,
  					small: true
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 36,
  					tint: 0.5
  				},
  				{
  					primitive: lightning,
  					x: 10,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 42,
  					y: 82
  				},
  				{
  					primitive: snowflake,
  					x: 64,
  					y: 78
  				}
  			],
  
  			// Cloud
  			'15': [
  				{
  					primitive: fog,
  					x: 0,
  					y: 20,
  					tint: 0.4
  				}
  			],
  			'04': [
  				{
  					primitive: cloud,
  					x: 4,
  					y: 26,
  					small: true,
  					tint: 0.25
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 44,
  					tint: 0.4
  				}
  			],
  			'09': [
  				{
  					primitive: cloud,
  					x: 4,
  					y: 19,
  					small: true,
  					tint: 0.45
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 36,
  					tint: 0.6
  				},
  				{
  					primitive: raindrop,
  					x: 52,
  					y: 78
  				},
  				{
  					primitive: raindrop,
  					x: 72,
  					y: 80
  				}
  			],
  			'10': [
  				{
  					primitive: cloud,
  					x: 4,
  					y: 19,
  					small: true,
  					tint: 0.45
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 36,
  					tint: 0.6
  				},
  				{
  					primitive: raindrop,
  					x: 48,
  					y: 80
  				},
  				{
  					primitive: raindrop,
  					x: 86,
  					y: 81
  				},
  				{
  					primitive: raindrop,
  					x: 66,
  					y: 76
  				}
  			],
  			'12': [
  				{
  					primitive: cloud,
  					x: 4,
  					y: 19,
  					small: true,
  					tint: 0.45
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 36,
  					tint: 0.6
  				},
  				{
  					primitive: snowflake,
  					x: 22,
  					y: 82
  				},
  				{
  					primitive: snowflake,
  					x: 44,
  					y: 78
  				},
  				{
  					primitive: raindrop,
  					x: 71,
  					y: 81
  				}
  			],
  			'13': [
  				{
  					primitive: cloud,
  					x: 4,
  					y: 19,
  					small: true,
  					tint: 0.45
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 36,
  					tint: 0.6
  				},
  				{
  					primitive: snowflake,
  					x: 12,
  					y: 82
  				},
  				{
  					primitive: snowflake,
  					x: 34,
  					y: 76
  				},
  				{
  					primitive: snowflake,
  					x: 54,
  					y: 80
  				}
  			],
  			'22': [
  				{
  					primitive: cloud,
  					x: 4,
  					y: 19,
  					small: true,
  					tint: 0.45
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 36,
  					tint: 0.6
  				},
  				{
  					primitive: lightning,
  					x: 10,
  					y: 74
  				},
  				{
  					primitive: raindrop,
  					x: 52,
  					y: 78
  				},
  				{
  					primitive: raindrop,
  					x: 72,
  					y: 80
  				}
  			],
  			'11': [
  				{
  					primitive: cloud,
  					x: 4,
  					y: 19,
  					small: true,
  					tint: 0.45
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 36,
  					tint: 0.6
  				},
  				{
  					primitive: lightning,
  					x: 10,
  					y: 74
  				},
  				{
  					primitive: raindrop,
  					x: 48,
  					y: 80
  				},
  				{
  					primitive: raindrop,
  					x: 86,
  					y: 81
  				},
  				{
  					primitive: raindrop,
  					x: 66,
  					y: 76
  				}
  			],
  			'23': [
  				{
  					primitive: cloud,
  					x: 4,
  					y: 19,
  					small: true,
  					tint: 0.45
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 36,
  					tint: 0.6
  				},
  				{
  					primitive: lightning,
  					x: 6,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 38,
  					y: 80
  				},
  				{
  					primitive: snowflake,
  					x: 58,
  					y: 76
  				},
  				{
  					primitive: raindrop,
  					x: 86,
  					y: 81
  				}
  			],
  			'14': [
  				{
  					primitive: cloud,
  					x: 4,
  					y: 19,
  					small: true,
  					tint: 0.45
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 36,
  					tint: 0.6
  				},
  				{
  					primitive: lightning,
  					x: 10,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 42,
  					y: 80
  				},
  				{
  					primitive: snowflake,
  					x: 62,
  					y: 76
  				}
  			]
  		};
  
  module.exports = Symbol;
  
  /**
   * Constructor
   */
  function Symbol (scale, canvas) {
  	this.scale = scale || 1;
  	this.canvas = canvas;
  }
  
  /**
   * Draw symbol into 'canvas'
   * Takes data from 'data-' attributes
   * @param {CanvasElement} canvas
   */
  Symbol.prototype.draw = function(canvas) {
  	canvas = this.canvas || canvas;
  	if (!canvas) return;
  
  	var ctx = canvas.getContext('2d')
  		, attr = canvas.getAttribute('data-id').split('.')
  		, id = attr[0]
  		, phase = (attr.length > 1)
  			? parseInt(attr[1],10) + 1
  			: 0
  		, formula = FORMULA[id]
  		, w = canvas.offsetWidth
  		, h = canvas.offsetHeight
  		, scale = (w/100) * this.scale
  		, layer, options;
  	canvas.width = w * this.scale;
  	canvas.height = h * this.scale;
  
  	if (formula) {
  		for (var i = 0, n = formula.length; i < n; i++) {
  			layer = formula[i];
  			options = {
  				x: Math.round(layer.x * scale),
  				y: Math.round(layer.y * scale),
  				scale: scale,
  				small: layer.small,
  				tint: layer.tint,
  				winter: layer.winter,
  				phase: phase
  			};
  			layer.primitive.render(ctx, options);
  		}
  	}
  };
  
});
require.register('dust', function(module, exports, require) {
  //
  // Dust - Asynchronous Templating v2.0.3
  // http://akdubya.github.com/dustjs
  //
  // Copyright (c) 2010, Aleksander Williams
  // Released under the MIT License.
  //
  
  var dust = {};
  
  function getGlobal(){
    return (function(){
      return this.dust;
    }).call(null);
  }
  
  (function(dust) {
  
  dust.helpers = {};
  
  dust.cache = {};
  
  dust.register = function(name, tmpl) {
    if (!name) return;
    dust.cache[name] = tmpl;
  };
  
  dust.render = function(name, context, callback) {
    var chunk = new Stub(callback).head;
    dust.load(name, chunk, Context.wrap(context, name)).end();
  };
  
  dust.stream = function(name, context) {
    var stream = new Stream();
    dust.nextTick(function() {
      dust.load(name, stream.head, Context.wrap(context, name)).end();
    });
    return stream;
  };
  
  dust.renderSource = function(source, context, callback) {
    return dust.compileFn(source)(context, callback);
  };
  
  dust.compileFn = function(source, name) {
    var tmpl = dust.loadSource(dust.compile(source, name));
    return function(context, callback) {
      var master = callback ? new Stub(callback) : new Stream();
      dust.nextTick(function() {
        tmpl(master.head, Context.wrap(context, name)).end();
      });
      return master;
    };
  };
  
  dust.load = function(name, chunk, context) {
    var tmpl = dust.cache[name];
    if (tmpl) {
      return tmpl(chunk, context);
    } else {
      if (dust.onLoad) {
        return chunk.map(function(chunk) {
          dust.onLoad(name, function(err, src) {
            if (err) return chunk.setError(err);
            if (!dust.cache[name]) dust.loadSource(dust.compile(src, name));
            dust.cache[name](chunk, context).end();
          });
        });
      }
      return chunk.setError(new Error("Template Not Found: " + name));
    }
  };
  
  dust.loadSource = function(source, path) {
    return eval(source);
  };
  
  if (Array.isArray) {
    dust.isArray = Array.isArray;
  } else {
    dust.isArray = function(arr) {
      return Object.prototype.toString.call(arr) == "[object Array]";
    };
  }
  
  dust.nextTick = (function() {
    if (typeof process !== "undefined") {
      return process.nextTick;
    } else {
      return function(callback) {
        setTimeout(callback,0);
      };
    }
  } )();
  
  dust.isEmpty = function(value) {
    if (dust.isArray(value) && !value.length) return true;
    if (value === 0) return false;
    return (!value);
  };
  
  // apply the filter chain and return the output string
  dust.filter = function(string, auto, filters) {
    if (filters) {
      for (var i=0, len=filters.length; i<len; i++) {
        var name = filters[i];
        if (name === "s") {
          auto = null;
        }
        // fail silently for invalid filters
        else if (typeof dust.filters[name] === 'function') {
          string = dust.filters[name](string);
        }
      }
    }
    // by default always apply the h filter, unless asked to unescape with |s
    if (auto) {
      string = dust.filters[auto](string);
    }
    return string;
  };
  
  dust.filters = {
    h: function(value) { return dust.escapeHtml(value); },
    j: function(value) { return dust.escapeJs(value); },
    u: encodeURI,
    uc: encodeURIComponent,
    js: function(value) { if (!JSON) { return value; } return JSON.stringify(value); },
    jp: function(value) { if (!JSON) { return value; } return JSON.parse(value); }
  };
  
  function Context(stack, global, blocks, templateName) {
    this.stack  = stack;
    this.global = global;
    this.blocks = blocks;
    this.templateName = templateName;
  }
  
  dust.makeBase = function(global) {
    return new Context(new Stack(), global);
  };
  
  Context.wrap = function(context, name) {
    if (context instanceof Context) {
      return context;
    }
    return new Context(new Stack(context), {}, null, name);
  };
  
  Context.prototype.get = function(key) {
    var ctx = this.stack, value;
  
    while(ctx) {
      if (ctx.isObject) {
        value = ctx.head[key];
        if (!(value === undefined)) {
          return value;
        }
      }
      ctx = ctx.tail;
    }
    return this.global ? this.global[key] : undefined;
  };
  
  //supports dot path resolution, function wrapped apply, and searching global paths
  Context.prototype.getPath = function(cur, down) {
    var ctx = this.stack, ctxThis,
        len = down.length,      
        tail = cur ? undefined : this.stack.tail; 
  
    if (cur && len === 0) return ctx.head;
    ctx = ctx.head;
    var i = 0;
    while(ctx && i < len) {
    	ctxThis = ctx;
      ctx = ctx[down[i]];
      i++;
      while (!ctx && !cur){
  	// i is the count of number of path elements matched. If > 1 then we have a partial match
  	// and do not continue to search for the rest of the path.
  	// Note: a falsey value at the end of a matched path also comes here.
  	// This returns the value or undefined if we just have a partial match.
      	if (i > 1) return ctx;
      	if (tail){
      	  ctx = tail.head;
      	  tail = tail.tail;
      	  i=0;
      	} else if (!cur) {
      	  //finally search this.global.  we set cur to true to halt after
        	  ctx = this.global;
        	  cur = true;
      	  i=0;
      	}
      }   
    }
    if (typeof ctx == 'function'){
    	//wrap to preserve context 'this' see #174
    	return function(){ 
    	  return ctx.apply(ctxThis,arguments); 
    	};
    }
    else {
      return ctx;
    }
  };
  
  Context.prototype.push = function(head, idx, len) {
    return new Context(new Stack(head, this.stack, idx, len), this.global, this.blocks, this.templateName);
  };
  
  Context.prototype.rebase = function(head) {
    return new Context(new Stack(head), this.global, this.blocks, this.templateName);
  };
  
  Context.prototype.current = function() {
    return this.stack.head;
  };
  
  Context.prototype.getBlock = function(key, chk, ctx) {
    if (typeof key === "function") {
      key = key(chk, ctx).data.join("");
      chk.data = []; //ie7 perf
    }
  
    var blocks = this.blocks;
  
    if (!blocks) return;
    var len = blocks.length, fn;
    while (len--) {
      fn = blocks[len][key];
      if (fn) return fn;
    }
  };
  
  Context.prototype.shiftBlocks = function(locals) {
    var blocks = this.blocks,
        newBlocks;
  
    if (locals) {
      if (!blocks) {
        newBlocks = [locals];
      } else {
        newBlocks = blocks.concat([locals]);
      }
      return new Context(this.stack, this.global, newBlocks, this.templateName);
    }
    return this;
  };
  
  function Stack(head, tail, idx, len) {
    this.tail = tail;
    this.isObject = !dust.isArray(head) && head && typeof head === "object";
    this.head = head;
    this.index = idx;
    this.of = len;
  }
  
  function Stub(callback) {
    this.head = new Chunk(this);
    this.callback = callback;
    this.out = '';
  }
  
  Stub.prototype.flush = function() {
    var chunk = this.head;
  
    while (chunk) {
      if (chunk.flushable) {
        this.out += chunk.data.join(""); //ie7 perf
      } else if (chunk.error) {
        this.callback(chunk.error);
        this.flush = function() {};
        return;
      } else {
        return;
      }
      chunk = chunk.next;
      this.head = chunk;
    }
    this.callback(null, this.out);
  };
  
  function Stream() {
    this.head = new Chunk(this);
  }
  
  Stream.prototype.flush = function() {
    var chunk = this.head;
  
    while(chunk) {
      if (chunk.flushable) {
        this.emit('data', chunk.data.join("")); //ie7 perf
      } else if (chunk.error) {
        this.emit('error', chunk.error);
        this.flush = function() {};
        return;
      } else {
        return;
      }
      chunk = chunk.next;
      this.head = chunk;
    }
    this.emit('end');
  };
  
  Stream.prototype.emit = function(type, data) {
    if (!this.events) return false;
    var handler = this.events[type];
    if (!handler) return false;
    if (typeof handler == 'function') {
      handler(data);
    } else {
      var listeners = handler.slice(0);
      for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i](data);
      }
    }
  };
  
  Stream.prototype.on = function(type, callback) {
    if (!this.events) {
      this.events = {};
    }
    if (!this.events[type]) {
      this.events[type] = callback;
    } else if(typeof this.events[type] === 'function') {
      this.events[type] = [this.events[type], callback];
    } else {
      this.events[type].push(callback);
    }
    return this;
  };
  
  Stream.prototype.pipe = function(stream) {
    this.on("data", function(data) {
      stream.write(data, "utf8");
    }).on("end", function() {
      stream.end();
    }).on("error", function(err) {
      stream.error(err);
    });
    return this;
  };
  
  function Chunk(root, next, taps) {
    this.root = root;
    this.next = next;
    this.data = []; //ie7 perf
    this.flushable = false;
    this.taps = taps;
  }
  
  Chunk.prototype.write = function(data) {
    var taps  = this.taps;
  
    if (taps) {
      data = taps.go(data);
    }
    this.data.push(data);
    return this;
  };
  
  Chunk.prototype.end = function(data) {
    if (data) {
      this.write(data);
    }
    this.flushable = true;
    this.root.flush();
    return this;
  };
  
  Chunk.prototype.map = function(callback) {
    var cursor = new Chunk(this.root, this.next, this.taps),
        branch = new Chunk(this.root, cursor, this.taps);
  
    this.next = branch;
    this.flushable = true;
    callback(branch);
    return cursor;
  };
  
  Chunk.prototype.tap = function(tap) {
    var taps = this.taps;
  
    if (taps) {
      this.taps = taps.push(tap);
    } else {
      this.taps = new Tap(tap);
    }
    return this;
  };
  
  Chunk.prototype.untap = function() {
    this.taps = this.taps.tail;
    return this;
  };
  
  Chunk.prototype.render = function(body, context) {
    return body(this, context);
  };
  
  Chunk.prototype.reference = function(elem, context, auto, filters) {
    if (typeof elem === "function") {
      elem.isFunction = true;
      // Changed the function calling to use apply with the current context to make sure 
      // that "this" is wat we expect it to be inside the function
      elem = elem.apply(context.current(), [this, context, null, {auto: auto, filters: filters}]);
      if (elem instanceof Chunk) {
        return elem;
      }
    }
    if (!dust.isEmpty(elem)) {
      return this.write(dust.filter(elem, auto, filters));
    } else {
      return this;
    }
  };
  
  Chunk.prototype.section = function(elem, context, bodies, params) {
    // anonymous functions
    if (typeof elem === "function") {
      elem = elem.apply(context.current(), [this, context, bodies, params]);
      // functions that return chunks are assumed to have handled the body and/or have modified the chunk
      // use that return value as the current chunk and go to the next method in the chain
      if (elem instanceof Chunk) {
        return elem;
      }
    }
    var body = bodies.block,
        skip = bodies['else'];
  
    // a.k.a Inline parameters in the Dust documentations
    if (params) {
      context = context.push(params);
    }
  
    /*
    Dust's default behavior is to enumerate over the array elem, passing each object in the array to the block.
    When elem resolves to a value or object instead of an array, Dust sets the current context to the value 
    and renders the block one time.
    */
    //non empty array is truthy, empty array is falsy
    if (dust.isArray(elem)) {
       if (body) {
        var len = elem.length, chunk = this;
        if (len > 0) {
          // any custom helper can blow up the stack 
          // and store a flattened context, guard defensively
          if(context.stack.head) {
           context.stack.head['$len'] = len;
          }
          for (var i=0; i<len; i++) {
            if(context.stack.head) {
             context.stack.head['$idx'] = i;
            }
            chunk = body(chunk, context.push(elem[i], i, len));
          }
          if(context.stack.head) {
           context.stack.head['$idx'] = undefined;
           context.stack.head['$len'] = undefined;
          }
          return chunk;
        } 
        else if (skip) {
           return skip(this, context);
        }
       }
     }
     // true is truthy but does not change context
     else if (elem  === true) {
       if (body) { 
          return body(this, context);
       }
     }
     // everything that evaluates to true are truthy ( e.g. Non-empty strings and Empty objects are truthy. )
     // zero is truthy
     // for anonymous functions that did not returns a chunk, truthiness is evaluated based on the return value
     //
     else if (elem || elem === 0) {
       if (body) return body(this, context.push(elem));
     // nonexistent, scalar false value, scalar empty string, null,
     // undefined are all falsy
    } else if (skip) {
       return skip(this, context);
     }  
    return this;
  };
  
  Chunk.prototype.exists = function(elem, context, bodies) {
    var body = bodies.block,
        skip = bodies['else'];
  
    if (!dust.isEmpty(elem)) {
      if (body) return body(this, context);
    } else if (skip) {
      return skip(this, context);
    }
    return this;
  };
  
  Chunk.prototype.notexists = function(elem, context, bodies) {
    var body = bodies.block,
        skip = bodies['else'];
  
    if (dust.isEmpty(elem)) {
      if (body) return body(this, context);
    } else if (skip) {
      return skip(this, context);
    }
    return this;
  };
  
  Chunk.prototype.block = function(elem, context, bodies) {
    var body = bodies.block;
  
    if (elem) {
      body = elem;
    }
  
    if (body) {
      return body(this, context);
    }
    return this;
  };
  
  Chunk.prototype.partial = function(elem, context, params) {
    var partialContext;
    //put the params context second to match what section does. {.} matches the current context without parameters
    // start with an empty context
    partialContext = dust.makeBase(context.global);
    partialContext.blocks = context.blocks;
    if (context.stack && context.stack.tail){
      // grab the stack(tail) off of the previous context if we have it
      partialContext.stack = context.stack.tail;
    }
    if (params){
      //put params on
      partialContext = partialContext.push(params);
    }
  
    if(typeof elem === "string") {
      partialContext.templateName = elem;
    }
  
    //reattach the head
    partialContext = partialContext.push(context.stack.head);
  
    var partialChunk;
     if (typeof elem === "function") {
       partialChunk = this.capture(elem, partialContext, function(name, chunk) {
         dust.load(name, chunk, partialContext).end();
       });
     }
     else {
       partialChunk = dust.load(elem, this, partialContext);
     }
     return partialChunk;
  };
  
  Chunk.prototype.helper = function(name, context, bodies, params) {
    // handle invalid helpers, similar to invalid filters
    if( dust.helpers[name]){
     return dust.helpers[name](this, context, bodies, params);
    } else {
      return this;
    }
  };
  
  Chunk.prototype.capture = function(body, context, callback) {
    return this.map(function(chunk) {
      var stub = new Stub(function(err, out) {
        if (err) {
          chunk.setError(err);
        } else {
          callback(out, chunk);
        }
      });
      body(stub.head, context).end();
    });
  };
  
  Chunk.prototype.setError = function(err) {
    this.error = err;
    this.root.flush();
    return this;
  };
  
  function Tap(head, tail) {
    this.head = head;
    this.tail = tail;
  }
  
  Tap.prototype.push = function(tap) {
    return new Tap(tap, this);
  };
  
  Tap.prototype.go = function(value) {
    var tap = this;
  
    while(tap) {
      value = tap.head(value);
      tap = tap.tail;
    }
    return value;
  };
  
  var HCHARS = new RegExp(/[&<>\"\']/),
      AMP    = /&/g,
      LT     = /</g,
      GT     = />/g,
      QUOT   = /\"/g,
      SQUOT  = /\'/g;
  
  dust.escapeHtml = function(s) {
    if (typeof s === "string") {
      if (!HCHARS.test(s)) {
        return s;
      }
      return s.replace(AMP,'&amp;').replace(LT,'&lt;').replace(GT,'&gt;').replace(QUOT,'&quot;').replace(SQUOT, '&#39;');
    }
    return s;
  };
  
  var BS = /\\/g,
      FS = /\//g,
      CR = /\r/g,
      LS = /\u2028/g,
      PS = /\u2029/g,
      NL = /\n/g,
      LF = /\f/g,
      SQ = /'/g,
      DQ = /"/g,
      TB = /\t/g;
  
  dust.escapeJs = function(s) {
    if (typeof s === "string") {
      return s
        .replace(BS, '\\\\')
        .replace(FS, '\\/')
        .replace(DQ, '\\"')
        .replace(SQ, "\\'")
        .replace(CR, '\\r')
        .replace(LS, '\\u2028')
        .replace(PS, '\\u2029')
        .replace(NL, '\\n')
        .replace(LF, '\\f')
        .replace(TB, "\\t");
    }
    return s;
  };
  
  })(dust);
  
  if (typeof exports !== "undefined") {
    if (typeof process !== "undefined") {
        require('./server')(dust);
    }
    module.exports = dust;
  }
  
});
require.register('symbolGroup', function(module, exports, require) {
  var dust = window.dust || require('dust');
  module.exports = (function(){dust.register("symbolGroup",body_0);function body_0(chk,ctx){return chk.section(ctx.get("symbols"),ctx,{"block":body_1},null);}function body_1(chk,ctx){return chk.write("<h2>").reference(ctx.get("title"),ctx,"h").write("</h2>").section(ctx.get("variations"),ctx,{"block":body_2},null);}function body_2(chk,ctx){return chk.write("<section class=\"symbol-group\"><h3>#").reference(ctx.get("id"),ctx,"h").write("</h3><figure class=\"s128\"><img src=\"./bin/svg/").reference(ctx.get("id"),ctx,"h").write(".svg\"><figcaption>svg@128px</figcaption></figure><figure class=\"s64\"><img src=\"./bin/svg/").reference(ctx.get("id"),ctx,"h").write(".svg\"><figcaption>svg@64px</figcaption></figure><figure class=\"s32\"><img src=\"./bin/svg/").reference(ctx.get("id"),ctx,"h").write(".svg\"><figcaption>svg@32px</figcaption></figure><figure class=\"s128\"><canvas class=\"symbol\" data-id=\"").reference(ctx.get("id"),ctx,"h").write("\"></canvas><figcaption>canvas@128px</figcaption></figure><figure class=\"s64\"><canvas class=\"symbol\" data-id=\"").reference(ctx.get("id"),ctx,"h").write("\"></canvas><figcaption>canvas@64px</figcaption></figure><figure class=\"s32\"><canvas class=\"symbol\" data-id=\"").reference(ctx.get("id"),ctx,"h").write("\"></canvas><figcaption>canvas@32px</figcaption></figure></section>");}return body_0;})();
});
require.register('main', function(module, exports, require) {
  var Symbol = require('./Symbol')
  	, dust = require('dust')
  	, template = require('./symbolGroup')
  	, data = {"symbols":[{"title":"clear","variations":[{"id":"01d"},{"id":"01m"},{"id":"01n.00"},{"id":"01n.01"},{"id":"01n.02"},{"id":"01n.03"},{"id":"01n.04"},{"id":"01n.05"},{"id":"01n.06"},{"id":"01n.07"}]},{"title":"fair","variations":[{"id":"02d"},{"id":"02m"},{"id":"02n.00"},{"id":"02n.01"},{"id":"02n.02"},{"id":"02n.03"},{"id":"02n.04"},{"id":"02n.05"},{"id":"02n.06"},{"id":"02n.07"}]},{"title":"partly cloudy","variations":[{"id":"03d"},{"id":"03m"},{"id":"03n.00"},{"id":"03n.01"},{"id":"03n.02"},{"id":"03n.03"},{"id":"03n.04"},{"id":"03n.05"},{"id":"03n.06"},{"id":"03n.07"}]},{"title":"cloudy","variations":[{"id":"04"}]},{"title":"rain showers","variations":[{"id":"05d"},{"id":"05m"},{"id":"05n.00"},{"id":"05n.01"},{"id":"05n.02"},{"id":"05n.03"},{"id":"05n.04"},{"id":"05n.05"},{"id":"05n.06"},{"id":"05n.07"}]},{"title":"sleet showers","variations":[{"id":"07d"},{"id":"07m"},{"id":"07n.00"},{"id":"07n.01"},{"id":"07n.02"},{"id":"07n.03"},{"id":"07n.04"},{"id":"07n.05"},{"id":"07n.06"},{"id":"07n.07"}]},{"title":"snow showers","variations":[{"id":"08d"},{"id":"08m"},{"id":"08n.00"},{"id":"08n.01"},{"id":"08n.02"},{"id":"08n.03"},{"id":"08n.04"},{"id":"08n.05"},{"id":"08n.06"},{"id":"08n.07"}]},{"title":"rain","variations":[{"id":"09"}]},{"title":"heavy rain","variations":[{"id":"10"}]},{"title":"sleet","variations":[{"id":"12"}]},{"title":"snow","variations":[{"id":"13"}]},{"title":"fog","variations":[{"id":"15"}]},{"title":"rain showers with thunder","variations":[{"id":"06d"},{"id":"06m"},{"id":"06n.00"},{"id":"06n.01"},{"id":"06n.02"},{"id":"06n.03"},{"id":"06n.04"},{"id":"06n.05"},{"id":"06n.06"},{"id":"06n.07"}]},{"title":"sleet showers with thunder","variations":[{"id":"20d"},{"id":"20m"},{"id":"20n.00"},{"id":"20n.01"},{"id":"20n.02"},{"id":"20n.03"},{"id":"20n.04"},{"id":"20n.05"},{"id":"20n.06"},{"id":"20n.07"}]},{"title":"snow showers with thunder","variations":[{"id":"21d"},{"id":"21m"},{"id":"21n.00"},{"id":"21n.01"},{"id":"21n.02"},{"id":"21n.03"},{"id":"21n.04"},{"id":"21n.05"},{"id":"21n.06"},{"id":"21n.07"}]},{"title":"rain with thunder","variations":[{"id":"22"}]},{"title":"sleet with thunder","variations":[{"id":"23"}]},{"title":"snow with thunder","variations":[{"id":"14"}]}]}
  	, symbol = new Symbol(1)
  	, el = document.getElementById('symbols');
  
  // Render template
  dust.render('symbolGroup', data, function(err, html) {
  	if (err) {
  		console.log(err);
  	} else {
  		el.innerHTML = html;
  	}
  });
  
  
  // Draw canvas symbols
  Array.prototype.slice.call(document.querySelectorAll('.symbol'))
  	.forEach(symbol.draw, symbol);
});