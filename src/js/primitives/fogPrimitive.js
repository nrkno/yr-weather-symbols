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
