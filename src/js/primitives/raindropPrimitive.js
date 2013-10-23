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