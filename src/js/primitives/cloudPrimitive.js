var STROKE_WIDTH = 5
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
	ctx.strokeStyle = options.bg;
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
