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
