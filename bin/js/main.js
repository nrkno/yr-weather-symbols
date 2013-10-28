require.register('primitives/sunPrimitive', function(module, exports, require) {
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
});
require.register('primitives/moonPrimitive', function(module, exports, require) {
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
  		ctx.moveTo(23.247,-4);  
  		ctx.bezierCurveTo(20.585,-4,18.102,-3.099,16.044,-1.419);  
  		ctx.bezierCurveTo(15.077,-1.614,14.103,-1.713,13.128,-1.713);  
  		ctx.bezierCurveTo(8.958,-1.713,5.264,0.07399999999999984,2.9930000000000003,3.189);  
  		ctx.bezierCurveTo(1.45,5.307,0.72,7.823,0.83,10.506);  
  		ctx.bezierCurveTo(-2.061,12.29,-4,15.501,-4,19.035);  
  		ctx.bezierCurveTo(-4,24.344,0.662,29,5.978,29);  
  		ctx.lineTo(45.384,29);  
  		ctx.bezierCurveTo(50.222,28.963,53.999,25.131,53.999,20.244);  
  		ctx.bezierCurveTo(53.999,17.073,52.411,14.401,49.925000000000004,13.072);  
  		ctx.bezierCurveTo(48.575,10.588,45.88,8.453,42.476000000000006,8.139999999999999);  
  		ctx.bezierCurveTo(40.949000000000005,4.938999999999998,37.77700000000001,2.728999999999999,33.982000000000006,2.528999999999999);  
  		ctx.bezierCurveTo(31.927,-1.329,27.776,-3.999,23.249,-4);  
  		ctx.lineTo(23.249,-4);  
  		ctx.bezierCurveTo(23.248,-4,23.247,-4,23.247,-4);  
  		ctx.lineTo(23.247,-4);  
  		ctx.closePath();  
  		ctx.fill();  
    
  		// Fill  
  		ctx.fillStyle = 'rgb(' + tint	+ ',' + tint + ',' + tint + ')';  
  		ctx.beginPath();  
  		ctx.moveTo(45.313,25);  
  		ctx.bezierCurveTo(47.819,25,49.999,23.067,49.999,20.248);  
  		ctx.bezierCurveTo(49.999,18.394000000000002,49.03,16.54,46.849000000000004,16.218);  
  		ctx.bezierCurveTo(46.527,14.042,43.492000000000004,10.989,39.453,12.52);  
  		ctx.bezierCurveTo(39.453,8.047,35.235,5.547999999999999,31.261000000000003,6.872);  
  		ctx.bezierCurveTo(30.372000000000003,0.5869999999999997,21.89,-2.8789999999999996,17.206000000000003,3.084);  
  		ctx.bezierCurveTo(10.016,0.264,2.827,5.259,5.331,13.078);  
  		ctx.bezierCurveTo(2.503,13.396,0,15.896,0,19.038);  
  		ctx.bezierCurveTo(0,22.182,2.827,25,5.978,25);  
  		ctx.lineTo(45.313,25);  
  		ctx.closePath();  
  		ctx.fill();  
  	} else {  
  		// Stroke  
  		ctx.fillStyle = BG_COLOUR;  
  		ctx.beginPath();  
  		ctx.moveTo(42.804,-4);  
  		ctx.bezierCurveTo(35.959,-4,29.729,0.347,27.14,6.438);  
  		ctx.bezierCurveTo(26.94,6.428999999999999,26.739,6.425,26.537,6.425);  
  		ctx.bezierCurveTo(20.408,6.425,15.465,10.047,13.638,15.370000000000001);  
  		ctx.bezierCurveTo(13.567,15.369000000000002,13.494,15.368,13.423,15.368);  
  		ctx.bezierCurveTo(7.944,15.368,3.657,18.831,1.8849999999999998,22.719);  
  		ctx.bezierCurveTo(-1.72,24.292,-4,27.908,-4,32.393);  
  		ctx.bezierCurveTo(-4,38.901,1.051,44,7.498,44);  
  		ctx.lineTo(70.436,44);  
  		ctx.bezierCurveTo(77.662,44,84,37.672,84,30.457);  
  		ctx.bezierCurveTo(84,25.151,80.78,20.379,76.154,18.166);  
  		ctx.bezierCurveTo(76.663,13.858,75.67999999999999,9.819,73.265,6.511000000000001);  
  		ctx.bezierCurveTo(70.089,2.1580000000000013,64.888,-0.33899999999999864,58.995000000000005,-0.33999999999999897);  
  		ctx.bezierCurveTo(57.217000000000006,-0.33899999999999897,55.43600000000001,-0.11099999999999896,53.675000000000004,0.3450000000000011);  
  		ctx.bezierCurveTo(50.646,-2.476,46.871,-4,42.804,-4);  
  		ctx.lineTo(42.804,-4);  
  		ctx.closePath();  
  		ctx.fill();  
    
  		// Fill  
  		ctx.fillStyle = 'rgb(' + tint	+ ',' + tint + ',' + tint + ')';  
  		ctx.beginPath();  
  		ctx.moveTo(7.498,40);  
  		ctx.bezierCurveTo(3.489,40,0,36.907,0,32.393);  
  		ctx.bezierCurveTo(0,29.429000000000002,1.551,26.461,5.043,25.946);  
  		ctx.bezierCurveTo(5.559,22.467000000000002,10.416,17.584000000000003,16.877,20.029000000000003);  
  		ctx.bezierCurveTo(16.877,12.875000000000004,23.625,8.875000000000004,29.985,10.991000000000003);  
  		ctx.bezierCurveTo(31.408,0.9380000000000024,44.978,-4.608999999999996,52.471000000000004,4.933000000000003);  
  		ctx.bezierCurveTo(63.974000000000004,0.42200000000000326,75.47500000000001,8.413000000000004,71.47,20.923000000000002);  
  		ctx.bezierCurveTo(75.995,21.434,80,25.432,80,30.457);  
  		ctx.bezierCurveTo(80,35.488,75.476,40,70.437,40);  
  		ctx.lineTo(7.498,40);  
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
  	ctx.arc(1,3,8,0,TWO_PI,true);  
  	ctx.closePath();  
  	ctx.fill();  
    
  	// Fill  
  	ctx.fillStyle = FILL_COLOUR;  
  	ctx.beginPath();  
  	ctx.moveTo(10,8.909);  
  	ctx.bezierCurveTo(10,11.724,7.759,14,5,14);  
  	ctx.bezierCurveTo(2.237,14,0,11.724,0,8.908999999999999);  
  	ctx.bezierCurveTo(0,7.327,0,0,0,0);  
  	ctx.bezierCurveTo(4.57,4.494,10,4.295,10,8.909);  
  	ctx.closePath();  
  	ctx.fill();  
  	ctx.restore();  
  };
});
require.register('primitives/snowflakePrimitive', function(module, exports, require) {
  var TWO_PI = Math.PI * 2  
  	, BG_COLOUR = '#ffffff'  
  	, FILL_COLOUR = '#6fc6e3';  
    
  exports.render = function(ctx, options) {  
  	// Stroke  
  	ctx.save();  
  	ctx.fillStyle = BG_COLOUR;  
  	ctx.translate(options.x, options.y)  
  	ctx.scale(options.scale, options.scale);  
  	ctx.fillStyle = BG_COLOUR;  
  	ctx.beginPath();  
  	ctx.arc(7,2.875,8,0,TWO_PI,true);  
  	ctx.closePath();  
  	ctx.fill();  
    
  	// Fill  
  	ctx.fillStyle = FILL_COLOUR;  
  	ctx.beginPath();  
  	ctx.moveTo(11.393,1.906);  
  	ctx.lineTo(9.326,3.979);  
  	ctx.bezierCurveTo(9.055,3.849,8.783,3.728,8.48,3.637);  
  	ctx.bezierCurveTo(8.188,3.567,7.897,3.536,7.605,3.527);  
  	ctx.lineTo(6.842,0.688);  
  	ctx.bezierCurveTo(6.681,0.105,6.077,-0.247,5.494,-0.086);  
  	ctx.bezierCurveTo(4.91,0.065,4.549,0.668,4.719,1.268);  
  	ctx.lineTo(5.474,4.096);  
  	ctx.bezierCurveTo(4.966,4.412,4.539,4.845,4.222,5.353);  
  	ctx.lineTo(1.391,4.604);  
  	ctx.bezierCurveTo(0.803,4.4430000000000005,0.19399999999999995,4.795,0.04299999999999993,5.3740000000000006);  
  	ctx.bezierCurveTo(-0.12900000000000006,5.978000000000001,0.22899999999999993,6.5760000000000005,0.822,6.737);  
  	ctx.lineTo(3.648,7.488);  
  	ctx.bezierCurveTo(3.668,8.092,3.8240000000000003,8.690000000000001,4.101,9.218);  
  	ctx.lineTo(2.034,11.286);  
  	ctx.bezierCurveTo(1.6009999999999998,11.708,1.6109999999999998,12.407,2.045,12.841);  
  	ctx.bezierCurveTo(2.477,13.273,3.171,13.283,3.598,12.841);  
  	ctx.lineTo(5.664,10.767);  
  	ctx.bezierCurveTo(5.926,10.918999999999999,6.202999999999999,11.045,6.5,11.120999999999999);  
  	ctx.bezierCurveTo(6.807,11.190999999999999,7.093,11.225999999999999,7.384,11.225999999999999);  
  	ctx.lineTo(8.144,14.062999999999999);  
  	ctx.bezierCurveTo(8.3,14.646999999999998,8.915000000000001,14.994,9.498000000000001,14.838);  
  	ctx.bezierCurveTo(10.092,14.677,10.434000000000001,14.081999999999999,10.272000000000002,13.488999999999999);  
  	ctx.lineTo(9.518000000000002,10.661);  
  	ctx.bezierCurveTo(10.031000000000002,10.344999999999999,10.458000000000002,9.907,10.765000000000002,9.394);  
  	ctx.lineTo(13.611000000000002,10.158);  
  	ctx.bezierCurveTo(14.194000000000003,10.304,14.807000000000002,9.956999999999999,14.964000000000002,9.373999999999999);  
  	ctx.bezierCurveTo(15.120000000000003,8.78,14.773000000000001,8.177,14.180000000000001,8.024999999999999);  
  	ctx.lineTo(11.344000000000001,7.259999999999999);  
  	ctx.bezierCurveTo(11.323,6.655999999999999,11.173000000000002,6.071999999999999,10.891000000000002,5.5379999999999985);  
  	ctx.lineTo(12.958000000000002,3.4759999999999986);  
  	ctx.bezierCurveTo(13.390000000000002,3.042999999999999,13.390000000000002,2.3379999999999987,12.968000000000002,1.9059999999999986);  
  	ctx.bezierCurveTo(12.524,1.484,11.815,1.484,11.393,1.906);  
  	ctx.closePath();  
  	ctx.fill();  
    
  	// Center  
  	ctx.fillStyle = BG_COLOUR;  
  	ctx.beginPath();  
  	ctx.arc(7.5,7.375,2,0,TWO_PI,true);  
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
  	ctx.moveTo(77.5,35.001);  
  	ctx.lineTo(2.5,35.001);  
  	ctx.bezierCurveTo(1.123,35.001,0,36.123999999999995,0,37.501);  
  	ctx.bezierCurveTo(0,38.878,1.123,40.001,2.5,40.001);  
  	ctx.lineTo(77.5,40.001);  
  	ctx.bezierCurveTo(78.877,40.001,80,38.878,80,37.501);  
  	ctx.bezierCurveTo(80,36.123999999999995,78.877,35.001,77.5,35.001);  
  	ctx.closePath();  
  	ctx.fill();  
    
  	ctx.beginPath();  
  	ctx.moveTo(72.5,45.001);  
  	ctx.lineTo(7.5,45.001);  
  	ctx.bezierCurveTo(6.123,45.001,5,46.123999999999995,5,47.501);  
  	ctx.bezierCurveTo(5,48.878,6.123,50.001,7.5,50.001);  
  	ctx.lineTo(72.5,50.001);  
  	ctx.bezierCurveTo(73.877,50.001,75,48.878,75,47.501);  
  	ctx.bezierCurveTo(75,46.123999999999995,73.877,45.001,72.5,45.001);  
  	ctx.closePath();  
  	ctx.fill();  
    
  	ctx.beginPath();  
  	ctx.moveTo(72.5,55);  
  	ctx.lineTo(12.5,55);  
  	ctx.bezierCurveTo(11.123,55,10,56.123,10,57.5);  
  	ctx.bezierCurveTo(10,58.877,11.123,60,12.5,60);  
  	ctx.lineTo(72.5,60);  
  	ctx.bezierCurveTo(73.877,60,75,58.877,75,57.5);  
  	ctx.bezierCurveTo(75,56.123,73.877,55,72.5,55);  
  	ctx.closePath();  
  	ctx.fill();  
    
  	ctx.beginPath();  
  	ctx.moveTo(79.978,30.006);  
  	ctx.bezierCurveTo(79.746,25.195,75.85799999999999,21.418,71.47099999999999,20.923000000000002);  
  	ctx.bezierCurveTo(75.475,8.413000000000002,63.97499999999999,0.4220000000000006,52.47099999999999,4.933000000000002);  
  	ctx.bezierCurveTo(44.97899999999999,-4.608999999999998,31.40799999999999,0.9380000000000015,29.98499999999999,10.991000000000001);  
  	ctx.bezierCurveTo(23.62599999999999,8.875000000000002,16.87699999999999,12.875000000000002,16.87699999999999,20.029000000000003);  
  	ctx.bezierCurveTo(10.415999999999988,17.584000000000003,5.559999999999988,22.467000000000002,5.043999999999988,25.946000000000005);  
  	ctx.bezierCurveTo(2.508999999999988,26.320000000000004,1.0019999999999882,27.988000000000007,0.362999999999988,30.007000000000005);  
  	ctx.lineTo(79.978,30.007000000000005);  
  	ctx.closePath();  
  	ctx.fill();  
  	ctx.restore();  
  };  
  
});
require.register('primitives/lightningPrimitive', function(module, exports, require) {
  var BG_COLOUR = '#ffffff'  
  	, FILL_COLOUR = '#c9af16';  
    
  exports.render = function(ctx, options) {  
  	// Fill  
  	ctx.save();  
  	ctx.fillStyle = FILL_COLOUR;  
  	ctx.translate(options.x, options.y)  
  	ctx.scale(options.scale, options.scale);  
  	ctx.beginPath();  
  	ctx.moveTo(9.412,0);  
  	ctx.lineTo(4.163,10.484);  
  	ctx.lineTo(12.488,10.484);  
  	ctx.lineTo(0,23);  
  	ctx.lineTo(25.001,6.32);  
  	ctx.lineTo(16.663000000000004,6.32);  
  	ctx.lineTo(22.991,0);  
  	ctx.lineTo(9.412,0);  
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
  					x: 10,
  					y: 10
  				}
  			],
  			'02d': [
  				{
  					primitive: sun,
  					x: 10,
  					y: 10
  				},
  				{
  					primitive: cloud,
  					x: 14,
  					y: 62,
  					small: true,
  					tint: 0.2
  				}
  			],
  			'03d': [
  				{
  					primitive: sun,
  					x: 10,
  					y: 15,
  					small: true
  				},
  				{
  					primitive: cloud,
  					x: 10,
  					y: 38,
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
  					x: 10,
  					y: 35,
  					winter: true
  				}
  			],
  			'02m': [
  				{
  					primitive: sun,
  					x: 10,
  					y: 30,
  					winter: true
  				},
  				{
  					primitive: cloud,
  					x: 15,
  					y: 50,
  					small: true,
  					tint: 0.2
  				}
  			],
  			'03m': [
  				{
  					primitive: sun,
  					x: 10,
  					y: 28,
  					small: true,
  					winter: true
  				},
  				{
  					primitive: cloud,
  					x: 10,
  					y: 38,
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
  					x: 25,
  					y: 25
  				}
  			],
  			'02n': [
  				{
  					primitive: moon,
  					x: 25,
  					y: 25
  				},
  				{
  					primitive: cloud,
  					x: 16,
  					y: 55,
  					small: true,
  					tint: 0.25
  				}
  			],
  			'03n': [
  				{
  					primitive: moon,
  					x: 12,
  					y: 24,
  					small: true
  				},
  				{
  					primitive: cloud,
  					x: 10,
  					y: 38,
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
  					// small: true,
  					tint: 0.15
  				},
  				{
  					primitive: cloud,
  					x: 10,
  					y: 41,
  					tint: 0.25
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