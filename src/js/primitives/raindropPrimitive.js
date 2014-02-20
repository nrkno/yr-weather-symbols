var TWO_PI = Math.PI * 2
	, FILL_COLOUR = '#1671CC';

exports.render = function(ctx, options) {
	// Stroke
	ctx.save();
	ctx.fillStyle = options.bg;
	ctx.translate(options.x, options.y)
	ctx.scale(options.scale, options.scale);
	ctx.fillStyle = options.bg;
	ctx.beginPath();
	ctx.arc(9,9,9,0,TWO_PI,true);
	ctx.closePath();
	ctx.fill();

	// Fill
	ctx.fillStyle = FILL_COLOUR;
	ctx.beginPath();
	ctx.moveTo(20,16.8);
	ctx.bezierCurveTo(20,20.2,17.3,23,14,23);
	ctx.bezierCurveTo(10.7,23,8,20.2,8,16.8);
	ctx.bezierCurveTo(8,14.9,8,6,8,6);
	ctx.bezierCurveTo(13.5,11.5,20,11.2,20,16.8);
	ctx.closePath();
	ctx.fill();
	ctx.restore();
};