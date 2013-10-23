var BG_COLOUR = '#ffffff'
	, FILL_COLOUR = '#d0ab3a';

exports.render = function(ctx, options) {
	// Fill
	ctx.save();
	ctx.fillStyle = FILL_COLOUR;
	ctx.translate(options.x, options.y)
	ctx.scale(options.scale, options.scale);
	ctx.beginPath();
	ctx.moveTo(10.413,0);
	ctx.lineTo(4.163,12.484);
	ctx.lineTo(12.488,12.484);
	ctx.lineTo(0,25);
	ctx.lineTo(25.001,8.321);
	ctx.lineTo(16.663000000000004,8.321);
	ctx.lineTo(24.995,0);
	ctx.lineTo(10.413,0);
	ctx.closePath();
	ctx.fill();
	ctx.restore();
};