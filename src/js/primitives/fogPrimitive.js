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
