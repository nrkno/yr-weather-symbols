require.register('primitives/sunPrimitive', function(module, exports, require) {
  var TWO_PI = Math.PI * 2  
  	, BG_COLOUR = '#ffffff'  
  	, RAY_COLOUR = '#e88d15'  
  	, HORIZON_COLOUR = '#4d4d4d'  
  	, CENTER_COLOUR = '#faba2f'  
  	, STROKE_WIDTH = 5;  
    
  exports.render = function(ctx, options) {  
  	ctx.save();  
  	ctx.translate(options.x, options.y);  
  	ctx.scale(options.scale, options.scale);  
  	ctx.strokeStyle = BG_COLOUR;  
  	ctx.lineWidth = STROKE_WIDTH;  
    
  	if (options.winter) {  
  		// Horizon  
  		ctx.fillStyle = HORIZON_COLOUR;  
  		ctx.beginPath();  
  		ctx.moveTo(0,0);  
  		ctx.fillRect(0,0,100,5);  
  		ctx.fill();  
    
  		// Mask  
  		ctx.moveTo(0,10);  
  		ctx.lineTo(100,10);  
  		ctx.lineTo(100,60);  
  		ctx.lineTo(0,60);  
  		ctx.lineTo(0,10);  
  		ctx.closePath();  
  		ctx.clip();  
    
  		// Rays  
  		ctx.fillStyle = RAY_COLOUR;  
  		ctx.beginPath();  
  		ctx.moveTo(69.284,17.986);  
  		ctx.lineTo(100,10);  
  		ctx.lineTo(69.284,2.014);  
  		ctx.lineTo(85.358,-25.355);  
  		ctx.lineTo(57.986,-9.281);  
  		ctx.lineTo(50,-40);  
  		ctx.lineTo(42.014,-9.281);  
  		ctx.lineTo(14.645,-25.355);  
  		ctx.lineTo(30.719,2.014);  
  		ctx.lineTo(0,10);  
  		ctx.lineTo(30.719,17.986);  
  		ctx.lineTo(14.645,45.358);  
  		ctx.lineTo(42.014,29.284);  
  		ctx.lineTo(50,60);  
  		ctx.lineTo(57.986,29.284);  
  		ctx.lineTo(85.358,45.358);  
  		ctx.lineTo(69.284,17.986);  
  		ctx.closePath();  
  		ctx.fill();  
    
  		// Center fill  
  		ctx.fillStyle = CENTER_COLOUR;  
  		ctx.beginPath();  
  		ctx.arc(50,10,22.5,0,TWO_PI,true);  
  		ctx.closePath();  
  		ctx.fill();  
  		ctx.stroke();  
    
  	} else {  
  		// Rays  
  		ctx.fillStyle = RAY_COLOUR;  
  		ctx.beginPath();  
  		ctx.moveTo(69.284,57.986);  
  		ctx.lineTo(100,50);  
  		ctx.lineTo(69.284,42.014);  
  		ctx.lineTo(85.358,14.645);  
  		ctx.lineTo(57.986,30.719);  
  		ctx.lineTo(50,0);  
  		ctx.lineTo(42.013,30.719);  
  		ctx.lineTo(14.645,14.645);  
  		ctx.lineTo(30.718,42.014);  
  		ctx.lineTo(0,50);  
  		ctx.lineTo(30.718,57.986);  
  		ctx.lineTo(14.645,85.358);  
  		ctx.lineTo(42.013,69.284);  
  		ctx.lineTo(50,100);  
  		ctx.lineTo(57.986,69.284);  
  		ctx.lineTo(85.358,85.358);  
  		ctx.lineTo(69.284,57.986);  
  		ctx.closePath();  
  		ctx.fill();  
    
  		// Center fill  
  		ctx.fillStyle = CENTER_COLOUR;  
  		ctx.beginPath();  
  		ctx.arc(50,50,22.5,0,TWO_PI,true);  
  		ctx.closePath();  
  		ctx.fill();  
  		ctx.stroke();  
  	}  
  	ctx.restore();  
  };
});
require.register('primitives/moonPrimitive', function(module, exports, require) {
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
});
require.register('primitives/cloudPrimitive', function(module, exports, require) {
  var BG_COLOUR = '#ffffff'  
  	, STROKE_WIDTH = 5  
  	, WIDTH = 100;  
    
  exports.render = function(ctx, options) {  
  	var tint = Math.floor(255 * (1-options.tint));  
    
  	ctx.save();  
  	if (options.flip) {  
  		ctx.translate((WIDTH * options.scale) + options.x, options.y)  
  		ctx.scale(-1 * options.scale, options.scale);  
  	} else {  
  		ctx.translate(options.x, options.y)  
  		ctx.scale(options.scale, options.scale);  
  	}  
    
  	// Fill  
  	ctx.strokeStyle = BG_COLOUR;  
  	ctx.lineWidth = STROKE_WIDTH;  
  	ctx.fillStyle = 'rgb(' + tint	+ ',' + tint + ',' + tint + ')';  
  	ctx.beginPath();  
  	ctx.moveTo(7.498,40);  
  	ctx.moveTo(9.377,50);  
  	ctx.bezierCurveTo(4.357,50,0,45.609,0,41.051);  
  	ctx.bezierCurveTo(0,36.438,2.231,32.612,6.938,30.86);  
  	ctx.bezierCurveTo(8.562999999999999,25.438,13.5,21.688,19.813,21.500999999999998);  
  	ctx.bezierCurveTo(21.188,14.562,30,10.422,36.188,12.172);  
  	ctx.bezierCurveTo(38.914,2.484,54.936,-5.453,65.5,4.797);  
  	ctx.bezierCurveTo(80.938,0.5469999999999997,91.77199999999999,10.167,90.107,24.789);  
  	ctx.bezierCurveTo(96.21,26.542,100,31.901,100,38.172);  
  	ctx.bezierCurveTo(100,44.466,94.355,50,88.054,50);  
  	ctx.lineTo(9.377,50);  
  	ctx.closePath();  
  	ctx.fill();  
  	ctx.stroke();  
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
  	ctx.arc(0,3,9,0,TWO_PI,true);  
  	ctx.closePath();  
  	ctx.fill();  
    
  	// Fill  
  	ctx.fillStyle = FILL_COLOUR;  
  	ctx.beginPath();  
  	ctx.moveTo(15,13.368);  
  	ctx.bezierCurveTo(15,17.586,11.634,21,7.502,21);  
  	ctx.bezierCurveTo(3.355,21,0,17.586,0,13.368);  
  	ctx.bezierCurveTo(0,10.986,0,0,0,0);  
  	ctx.bezierCurveTo(6.853,6.748,15,6.447,15,13.368);  
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
  	ctx.arc(10,3,9,0,TWO_PI,true);  
  	ctx.closePath();  
  	ctx.fill();  
    
  	// Fill  
  	ctx.fillStyle = FILL_COLOUR;  
  	ctx.beginPath();  
  	ctx.moveTo(15.95,2.844);  
  	ctx.lineTo(13.056999999999999,5.743);  
  	ctx.bezierCurveTo(12.676999999999998,5.5600000000000005,12.296999999999999,5.392,11.871999999999998,5.266);  
  	ctx.bezierCurveTo(11.462999999999997,5.166,11.056999999999999,5.124,10.645999999999997,5.109);  
  	ctx.lineTo(9.579,1.14);  
  	ctx.bezierCurveTo(9.354,0.322,8.51,-0.171,7.692,0.055);  
  	ctx.bezierCurveTo(6.875,0.265,6.369,1.1079999999999999,6.606,1.948);  
  	ctx.lineTo(7.663,5.9079999999999995);  
  	ctx.bezierCurveTo(6.953,6.353,6.356,6.955,5.91,7.668);  
  	ctx.lineTo(1.948,6.62);  
  	ctx.bezierCurveTo(1.126,6.395,0.271,6.888,0.062,7.694);  
  	ctx.bezierCurveTo(-0.18,8.542,0.321,9.378,1.1520000000000001,9.603);  
  	ctx.lineTo(5.109,10.658);  
  	ctx.bezierCurveTo(5.137,11.503,5.355,12.341,5.744,13.081);  
  	ctx.lineTo(2.85,15.977);  
  	ctx.bezierCurveTo(2.245,16.568,2.257,17.544,2.864,18.153);  
  	ctx.bezierCurveTo(3.468,18.756,4.441,18.773,5.038,18.153);  
  	ctx.lineTo(7.931,15.248);  
  	ctx.bezierCurveTo(8.298,15.463999999999999,8.687,15.638,9.100999999999999,15.745999999999999);  
  	ctx.bezierCurveTo(9.531999999999998,15.841999999999999,9.931,15.892999999999999,10.338999999999999,15.892999999999999);  
  	ctx.lineTo(11.402999999999999,19.863);  
  	ctx.bezierCurveTo(11.621999999999998,20.681,12.480999999999998,21.168,13.299,20.948999999999998);  
  	ctx.bezierCurveTo(14.129999999999999,20.723,14.607,19.892,14.381,19.061);  
  	ctx.lineTo(13.325,15.1);  
  	ctx.bezierCurveTo(14.043,14.66,14.641,14.047,15.072,13.329);  
  	ctx.lineTo(19.054,14.398);  
  	ctx.bezierCurveTo(19.871,14.603,20.729999999999997,14.115,20.947999999999997,13.298);  
  	ctx.bezierCurveTo(21.166999999999998,12.468,20.680999999999997,11.623,19.850999999999996,11.408);  
  	ctx.lineTo(15.880999999999995,10.338999999999999);  
  	ctx.bezierCurveTo(15.851999999999995,9.493999999999998,15.640999999999995,8.675999999999998,15.245999999999995,7.929999999999999);  
  	ctx.lineTo(18.139999999999993,5.041999999999999);  
  	ctx.bezierCurveTo(18.743999999999993,4.433999999999999,18.743999999999993,3.446999999999999,18.152999999999995,2.843999999999999);  
  	ctx.bezierCurveTo(17.535,2.252,16.543,2.252,15.95,2.844);  
  	ctx.closePath();  
  	ctx.moveTo(13.086,11.215);  
  	ctx.bezierCurveTo(12.719000000000001,12.651,11.227,13.511,9.790000000000001,13.114);  
  	ctx.bezierCurveTo(8.347000000000001,12.734,7.496,11.241000000000001,7.876000000000001,9.802000000000001);  
  	ctx.bezierCurveTo(8.256000000000002,8.350000000000001,9.734000000000002,7.505000000000001,11.183000000000002,7.887000000000001);  
  	ctx.bezierCurveTo(12.622,8.282,13.487,9.761,13.086,11.215);  
  	ctx.closePath();  
  	ctx.fill();  
  	ctx.restore();  
  };
});
require.register('primitives/fogPrimitive', function(module, exports, require) {
  exports.render = function(ctx, options) {  
  	var tint = Math.floor(255 * (1-options.tint));  
    
  	ctx.save();  
  	ctx.fillStyle = 'rgb(' + tint	+ ',' + tint + ',' + tint + ')';  
  	ctx.translate(options.x, options.y)  
  	ctx.scale(options.scale, options.scale);  
  	ctx.beginPath();  
  	ctx.moveTo(87.188,40);  
  	ctx.lineTo(2.812,40);  
  	ctx.bezierCurveTo(1.264,40,0,41.123,0,42.5);  
  	ctx.bezierCurveTo(0,43.877,1.264,45,2.812,45);  
  	ctx.lineTo(87.187,45);  
  	ctx.bezierCurveTo(88.736,45,90,43.877,90,42.5);  
  	ctx.bezierCurveTo(90,41.123,88.736,40,87.188,40);  
  	ctx.closePath();  
  	ctx.fill();  
    
  	ctx.beginPath();  
  	ctx.moveTo(82.143,50.001);  
  	ctx.lineTo(7.857,50.001);  
  	ctx.bezierCurveTo(6.283,50.001,5,51.123999999999995,5,52.501);  
  	ctx.bezierCurveTo(5,53.878,6.2829999999999995,55.001,7.857,55.001);  
  	ctx.lineTo(82.142,55.001);  
  	ctx.bezierCurveTo(83.716,55.001,84.999,53.878,84.999,52.501);  
  	ctx.bezierCurveTo(84.999,51.123999999999995,83.717,50.001,82.143,50.001);  
  	ctx.closePath();  
  	ctx.fill();  
    
  	ctx.beginPath();  
  	ctx.moveTo(82.119,60);  
  	ctx.lineTo(12.886,60);  
  	ctx.bezierCurveTo(11.294,60,10,61.123,10,62.5);  
  	ctx.bezierCurveTo(10,63.877,11.294,65,12.886,65);  
  	ctx.lineTo(82.119,65);  
  	ctx.bezierCurveTo(83.701,65,85,63.877,85,62.5);  
  	ctx.bezierCurveTo(85,61.123,83.701,60,82.119,60);  
  	ctx.closePath();  
  	ctx.fill();  
    
  	ctx.beginPath();  
  	ctx.moveTo(90,35);  
  	ctx.bezierCurveTo(89.737,29.389,85.343,24.983,80.384,24.405);  
  	ctx.bezierCurveTo(84.91,9.813,71.91,0.492,58.905,5.753);  
  	ctx.bezierCurveTo(50.435,-5.3759999999999994,35.093,1.0940000000000003,33.486000000000004,12.818999999999999);  
  	ctx.bezierCurveTo(26.297000000000004,10.350999999999999,18.668000000000006,15.014999999999999,18.668000000000006,23.360999999999997);  
  	ctx.bezierCurveTo(11.364000000000006,20.507999999999996,5.874000000000006,26.203999999999997,5.291000000000006,30.261999999999997);  
  	ctx.bezierCurveTo(2.426,30.699,0.722,32.645,0,35);  
  	ctx.lineTo(90,35);  
  	ctx.closePath();  
  	ctx.fill();  
  	ctx.restore();  
  };  
  
});
require.register('primitives/lightningPrimitive', function(module, exports, require) {
  var FILL_COLOUR = '#c9af16';  
    
  exports.render = function(ctx, options) {  
  	// Fill  
  	ctx.save();  
  	ctx.translate(options.x, options.y)  
  	ctx.scale(options.scale, options.scale);  
    
  	ctx.fillStyle = FILL_COLOUR;  
  	ctx.beginPath();  
  	ctx.moveTo(10.413,0);  
  	ctx.lineTo(4.163,12.484);  
  	ctx.lineTo(12.488,12.484);  
  	ctx.lineTo(0,25);  
  	ctx.lineTo(25.001,8.32);  
  	ctx.lineTo(16.663000000000004,8.32);  
  	ctx.lineTo(24.995,0);  
  	ctx.lineTo(10.413,0);  
  	ctx.closePath();  
  	ctx.fill();  
  	ctx.restore();  
  };  
  
});
require.register('WeatherSymbol', function(module, exports, require) {
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
  					x: 5,
  					y: 55,
  					scale: 0.6,
  					flip: true,
  					tint: 0.15
  				}
  			],
  			'03d': [
  				{
  					primitive: sun,
  					x: 5,
  					y: 15,
  					scale: 0.6
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 35,
  					tint: 0.35
  				}
  			],
  			'05d': [
  				{
  					primitive: sun,
  					x: 5,
  					y: 5,
  					scale: 0.6
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.5
  				},
  				{
  					primitive: raindrop,
  					x: 70,
  					y: 74
  				},
  				{
  					primitive: raindrop,
  					x: 52,
  					y: 71
  				}
  			],
  			'07d': [
  				{
  					primitive: sun,
  					x: 5,
  					y: 5,
  					scale: 0.6
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.5
  				},
  				{
  					primitive: raindrop,
  					x: 61,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 33,
  					y: 71
  				}
  			],
  			'08d': [
  				{
  					primitive: sun,
  					x: 5,
  					y: 5,
  					scale: 0.6
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.5
  				},
  				{
  					primitive: snowflake,
  					x: 22,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 43,
  					y: 71
  				}
  			],
  			'06d': [
  				{
  					primitive: sun,
  					x: 5,
  					y: 5,
  					scale: 0.6
  				},
  				{
  					primitive: lightning,
  					x: 30,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.5
  				},
  				{
  					primitive: raindrop,
  					x: 63,
  					y: 71
  				}
  			],
  			'20d': [
  				{
  					primitive: sun,
  					x: 5,
  					y: 5,
  					scale: 0.6
  				},
  				{
  					primitive: lightning,
  					x: 14,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.5
  				},
  				{
  					primitive: raindrop,
  					x: 72,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 44,
  					y: 71
  				}
  			],
  			'21d': [
  				{
  					primitive: sun,
  					x: 5,
  					y: 5,
  					scale: 0.6
  				},
  				{
  					primitive: lightning,
  					x: 14,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.5
  				},
  				{
  					primitive: snowflake,
  					x: 44,
  					y: 71
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
  					y: 30,
  					winter: true
  				},
  				{
  					primitive: cloud,
  					x: 5,
  					y: 45,
  					scale: 0.6,
  					flip: true,
  					tint: 0.15
  				}
  			],
  			'03m': [
  				{
  					primitive: sun,
  					x: 10,
  					y: 24,
  					scale: 0.6,
  					winter: true
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 35,
  					tint: 0.35
  				}
  			],
  			'05m': [
  				{
  					primitive: sun,
  					x: 10,
  					y: 14,
  					scale: 0.6,
  					winter: true
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.5
  				},
  				{
  					primitive: raindrop,
  					x: 70,
  					y: 74
  				},
  				{
  					primitive: raindrop,
  					x: 52,
  					y: 71
  				}
  			],
  			'07m': [
  				{
  					primitive: sun,
  					x: 10,
  					y: 14,
  					scale: 0.6,
  					winter: true
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.5
  				},
  				{
  					primitive: raindrop,
  					x: 61,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 33,
  					y: 71
  				}
  			],
  			'08m': [
  				{
  					primitive: sun,
  					x: 10,
  					y: 14,
  					scale: 0.6,
  					winter: true
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.5
  				},
  				{
  					primitive: snowflake,
  					x: 22,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 43,
  					y: 71
  				}
  			],
  			'06m': [
  				{
  					primitive: sun,
  					x: 10,
  					y: 14,
  					scale: 0.6,
  					winter: true
  				},
  				{
  					primitive: lightning,
  					x: 30,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.5
  				},
  				{
  					primitive: raindrop,
  					x: 63,
  					y: 71
  				}
  			],
  			'20m': [
  				{
  					primitive: sun,
  					x: 10,
  					y: 14,
  					scale: 0.6,
  					winter: true
  				},
  				{
  					primitive: lightning,
  					x: 14,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.5
  				},
  				{
  					primitive: raindrop,
  					x: 72,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 44,
  					y: 71
  				}
  			],
  			'21m': [
  				{
  					primitive: sun,
  					x: 10,
  					y: 14,
  					scale: 0.6,
  					winter: true
  				},
  				{
  					primitive: lightning,
  					x: 14,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.5
  				},
  				{
  					primitive: snowflake,
  					x: 44,
  					y: 71
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
  					x: 5,
  					y: 55,
  					scale: 0.6,
  					flip: true,
  					tint: 0.15
  				}
  			],
  			'03n': [
  				{
  					primitive: moon,
  					x: 15,
  					y: 22,
  					scale: 0.6
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 35,
  					tint: 0.35
  				}
  			],
  			'05n': [
  				{
  					primitive: moon,
  					x: 15,
  					y: 12,
  					scale: 0.6
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.5
  				},
  				{
  					primitive: raindrop,
  					x: 70,
  					y: 74
  				},
  				{
  					primitive: raindrop,
  					x: 52,
  					y: 71
  				}
  			],
  			'07n': [
  				{
  					primitive: moon,
  					x: 15,
  					y: 12,
  					scale: 0.6
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.5
  				},
  				{
  					primitive: raindrop,
  					x: 61,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 33,
  					y: 71
  				}
  			],
  			'08n': [
  				{
  					primitive: moon,
  					x: 15,
  					y: 12,
  					scale: 0.6
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.5
  				},
  				{
  					primitive: snowflake,
  					x: 22,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 43,
  					y: 71
  				}
  			],
  			'06n': [
  				{
  					primitive: moon,
  					x: 15,
  					y: 12,
  					scale: 0.6
  				},
  				{
  					primitive: lightning,
  					x: 30,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.5
  				},
  				{
  					primitive: raindrop,
  					x: 63,
  					y: 71
  				}
  			],
  			'20n': [
  				{
  					primitive: moon,
  					x: 15,
  					y: 12,
  					scale: 0.6
  				},
  				{
  					primitive: lightning,
  					x: 14,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.5
  				},
  				{
  					primitive: raindrop,
  					x: 72,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 44,
  					y: 71
  				}
  			],
  			'21n': [
  				{
  					primitive: moon,
  					x: 15,
  					y: 12,
  					scale: 0.6
  				},
  				{
  					primitive: lightning,
  					x: 14,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.5
  				},
  				{
  					primitive: snowflake,
  					x: 44,
  					y: 71
  				}
  			],
  
  			// Cloud
  			'15': [
  				{
  					primitive: fog,
  					x: 5,
  					y: 15,
  					tint: 0.25
  				}
  			],
  			'04': [
  				{
  					primitive: cloud,
  					x: 5,
  					y: 9,
  					scale: 0.8,
  					flip: true,
  					tint: 0.15
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.25
  				}
  			],
  			'09': [
  				{
  					primitive: cloud,
  					x: 5,
  					y: 9,
  					scale: 0.8,
  					flip: true,
  					tint: 0.35
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.5
  				},
  				{
  					primitive: raindrop,
  					x: 70,
  					y: 74
  				},
  				{
  					primitive: raindrop,
  					x: 52,
  					y: 71
  				}
  			],
  			'10': [
  				{
  					primitive: cloud,
  					x: 5,
  					y: 9,
  					scale: 0.8,
  					flip: true,
  					tint: 0.5
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.6
  				},
  				{
  					primitive: raindrop,
  					x: 76,
  					y: 74
  				},
  				{
  					primitive: raindrop,
  					x: 41,
  					y: 76
  				},
  				{
  					primitive: raindrop,
  					x: 58,
  					y: 71
  				}
  			],
  			'12': [
  				{
  					primitive: cloud,
  					x: 5,
  					y: 9,
  					scale: 0.8,
  					flip: true,
  					tint: 0.4
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.5
  				},
  				{
  					primitive: raindrop,
  					x: 69,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 20,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 41,
  					y: 71
  				}
  			],
  			'13': [
  				{
  					primitive: cloud,
  					x: 5,
  					y: 9,
  					scale: 0.8,
  					flip: true,
  					tint: 0.5
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.6
  				},
  				{
  					primitive: snowflake,
  					x: 54,
  					y: 73
  				},
  				{
  					primitive: snowflake,
  					x: 12,
  					y: 76
  				},
  				{
  					primitive: snowflake,
  					x: 33,
  					y: 71
  				}
  			],
  			'22': [
  				{
  					primitive: cloud,
  					x: 5,
  					y: 9,
  					scale: 0.8,
  					flip: true,
  					tint: 0.4
  				},
  				{
  					primitive: lightning,
  					x: 30,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.5
  				},
  				{
  					primitive: raindrop,
  					x: 63,
  					y: 71
  				}
  			],
  			'11': [
  				{
  					primitive: cloud,
  					x: 5,
  					y: 9,
  					scale: 0.8,
  					flip: true,
  					tint: 0.5
  				},
  				{
  					primitive: lightning,
  					x: 25,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.6
  				},
  				{
  					primitive: raindrop,
  					x: 76,
  					y: 74
  				},
  				{
  					primitive: raindrop,
  					x: 58,
  					y: 71
  				}
  			],
  			'23': [
  				{
  					primitive: cloud,
  					x: 5,
  					y: 9,
  					scale: 0.8,
  					flip: true,
  					tint: 0.4
  				},
  				{
  					primitive: lightning,
  					x: 14,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.5
  				},
  				{
  					primitive: raindrop,
  					x: 72,
  					y: 74
  				},
  				{
  					primitive: snowflake,
  					x: 44,
  					y: 71
  				}
  			],
  			'14': [
  				{
  					primitive: cloud,
  					x: 5,
  					y: 9,
  					scale: 0.8,
  					flip: true,
  					tint: 0.4
  				},
  				{
  					primitive: lightning,
  					x: 14,
  					y: 75
  				},
  				{
  					primitive: cloud,
  					x: 0,
  					y: 25,
  					tint: 0.5
  				},
  				{
  					primitive: snowflake,
  					x: 44,
  					y: 71
  				}
  			]
  		};
  
  module.exports = WeatherSymbol;
  
  /**
   * Constructor
   */
  function WeatherSymbol (scale, canvas) {
  	this.scale = scale || 1;
  	this.canvas = canvas;
  }
  
  /**
   * Draw symbol into 'canvas'
   * Takes data from 'data-' attributes
   * @param {CanvasElement} canvas
   */
  WeatherSymbol.prototype.draw = function(canvas) {
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
  				scale: (layer.scale || 1) * scale,
  				small: layer.small,
  				flip: layer.flip,
  				tint: layer.tint,
  				winter: layer.winter,
  				phase: phase,
  				width: w * this.scale,
  				height: h * this.scale
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
  var WeatherSymbol = require('./WeatherSymbol')
  	, dust = require('dust')
  	, template = require('./symbolGroup')
  	, data = {"symbols":[{"title":"clear","variations":[{"id":"01d"},{"id":"01m"},{"id":"01n.00"},{"id":"01n.01"},{"id":"01n.02"},{"id":"01n.03"},{"id":"01n.04"},{"id":"01n.05"},{"id":"01n.06"},{"id":"01n.07"}]},{"title":"fair","variations":[{"id":"02d"},{"id":"02m"},{"id":"02n.00"},{"id":"02n.01"},{"id":"02n.02"},{"id":"02n.03"},{"id":"02n.04"},{"id":"02n.05"},{"id":"02n.06"},{"id":"02n.07"}]},{"title":"partly cloudy","variations":[{"id":"03d"},{"id":"03m"},{"id":"03n.00"},{"id":"03n.01"},{"id":"03n.02"},{"id":"03n.03"},{"id":"03n.04"},{"id":"03n.05"},{"id":"03n.06"},{"id":"03n.07"}]},{"title":"cloudy","variations":[{"id":"04"}]},{"title":"rain showers","variations":[{"id":"05d"},{"id":"05m"},{"id":"05n.00"},{"id":"05n.01"},{"id":"05n.02"},{"id":"05n.03"},{"id":"05n.04"},{"id":"05n.05"},{"id":"05n.06"},{"id":"05n.07"}]},{"title":"sleet showers","variations":[{"id":"07d"},{"id":"07m"},{"id":"07n.00"},{"id":"07n.01"},{"id":"07n.02"},{"id":"07n.03"},{"id":"07n.04"},{"id":"07n.05"},{"id":"07n.06"},{"id":"07n.07"}]},{"title":"snow showers","variations":[{"id":"08d"},{"id":"08m"},{"id":"08n.00"},{"id":"08n.01"},{"id":"08n.02"},{"id":"08n.03"},{"id":"08n.04"},{"id":"08n.05"},{"id":"08n.06"},{"id":"08n.07"}]},{"title":"rain","variations":[{"id":"09"}]},{"title":"heavy rain","variations":[{"id":"10"}]},{"title":"sleet","variations":[{"id":"12"}]},{"title":"snow","variations":[{"id":"13"}]},{"title":"fog","variations":[{"id":"15"}]},{"title":"rain showers with thunder","variations":[{"id":"06d"},{"id":"06m"},{"id":"06n.00"},{"id":"06n.01"},{"id":"06n.02"},{"id":"06n.03"},{"id":"06n.04"},{"id":"06n.05"},{"id":"06n.06"},{"id":"06n.07"}]},{"title":"sleet showers with thunder","variations":[{"id":"20d"},{"id":"20m"},{"id":"20n.00"},{"id":"20n.01"},{"id":"20n.02"},{"id":"20n.03"},{"id":"20n.04"},{"id":"20n.05"},{"id":"20n.06"},{"id":"20n.07"}]},{"title":"snow showers with thunder","variations":[{"id":"21d"},{"id":"21m"},{"id":"21n.00"},{"id":"21n.01"},{"id":"21n.02"},{"id":"21n.03"},{"id":"21n.04"},{"id":"21n.05"},{"id":"21n.06"},{"id":"21n.07"}]},{"title":"rain with thunder","variations":[{"id":"22"}]},{"title":"heavy rain with thunder","variations":[{"id":"11"}]},{"title":"sleet with thunder","variations":[{"id":"23"}]},{"title":"snow with thunder","variations":[{"id":"14"}]}]}
  	, symbol = new WeatherSymbol(1)
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