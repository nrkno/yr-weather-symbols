var BG_COLOUR = '#ffffff'
	, FILL_COLOUR = '#c9af16';

exports.render = function(ctx, options) {
	// Fill
	ctx.save();
	ctx.fillStyle = FILL_COLOUR;
	ctx.translate(options.x, options.y)
	ctx.scale(options.scale, options.scale);
	ctx.beginPath();
	ctx.moveTo(9.412,0);
	ctx.lineTo(4.163,10.484);
	ctx.lineTo(12.488,10.484);
	ctx.lineTo(0,23);
	ctx.lineTo(25.001,6.32);
	ctx.lineTo(16.663000000000004,6.32);
	ctx.lineTo(22.991,0);
	ctx.lineTo(9.412,0);
	ctx.closePath();
	ctx.fill();
	ctx.restore();
};
