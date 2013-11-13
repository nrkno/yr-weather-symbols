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
	ctx.arc(0,3,9,0,TWO_PI,true);
	ctx.closePath();
	ctx.fill();

	// Fill
	ctx.fillStyle = FILL_COLOUR;
	ctx.beginPath();
	ctx.moveTo(15,13.368);
	ctx.bezierCurveTo(15,17.586,11.634,21,7.502,21);
	ctx.bezierCurveTo(3.355,21,0,17.586,0,13.368);
	ctx.bezierCurveTo(0,10.986,0,0,0,0);
	ctx.bezierCurveTo(6.853,6.748,15,6.447,15,13.368);
	ctx.closePath();
	ctx.fill();
	ctx.restore();
};