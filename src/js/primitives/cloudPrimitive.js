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
