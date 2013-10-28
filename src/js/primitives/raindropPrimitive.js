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