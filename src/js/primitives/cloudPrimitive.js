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
