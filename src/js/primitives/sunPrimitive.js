var TWO_PI = Math.PI * 2
	, BG_COLOUR = '#ffffff'
	, RAY_COLOUR = '#e88d15'
	, HORIZON_COLOUR = '#4d4d4d'
	, CENTER_COLOUR = '#faba2f'
	, STROKE_WIDTH = 5;

exports.render = function(ctx, options) {
	ctx.save();
	ctx.translate(options.x, options.y);
	ctx.scale(options.scale, options.scale);
	ctx.strokeStyle = BG_COLOUR;
	ctx.lineWidth = STROKE_WIDTH;

	if (options.winter) {
		// Horizon
		ctx.fillStyle = HORIZON_COLOUR;
		ctx.beginPath();
		ctx.moveTo(0,0);
		ctx.fillRect(0,0,100,5);
		ctx.fill();

		// Mask
		ctx.moveTo(0,10);
		ctx.lineTo(100,10);
		ctx.lineTo(100,60);
		ctx.lineTo(0,60);
		ctx.lineTo(0,10);
		ctx.closePath();
		ctx.clip();

		// Rays
		ctx.fillStyle = RAY_COLOUR;
		ctx.beginPath();
		ctx.moveTo(69.284,17.986);
		ctx.lineTo(100,10);
		ctx.lineTo(69.284,2.014);
		ctx.lineTo(85.358,-25.355);
		ctx.lineTo(57.986,-9.281);
		ctx.lineTo(50,-40);
		ctx.lineTo(42.014,-9.281);
		ctx.lineTo(14.645,-25.355);
		ctx.lineTo(30.719,2.014);
		ctx.lineTo(0,10);
		ctx.lineTo(30.719,17.986);
		ctx.lineTo(14.645,45.358);
		ctx.lineTo(42.014,29.284);
		ctx.lineTo(50,60);
		ctx.lineTo(57.986,29.284);
		ctx.lineTo(85.358,45.358);
		ctx.lineTo(69.284,17.986);
		ctx.closePath();
		ctx.fill();

		// Center fill
		ctx.fillStyle = CENTER_COLOUR;
		ctx.beginPath();
		ctx.arc(50,10,22.5,0,TWO_PI,true);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

	} else {
		// Rays
		ctx.fillStyle = RAY_COLOUR;
		ctx.beginPath();
		ctx.moveTo(69.284,57.986);
		ctx.lineTo(100,50);
		ctx.lineTo(69.284,42.014);
		ctx.lineTo(85.358,14.645);
		ctx.lineTo(57.986,30.719);
		ctx.lineTo(50,0);
		ctx.lineTo(42.013,30.719);
		ctx.lineTo(14.645,14.645);
		ctx.lineTo(30.718,42.014);
		ctx.lineTo(0,50);
		ctx.lineTo(30.718,57.986);
		ctx.lineTo(14.645,85.358);
		ctx.lineTo(42.013,69.284);
		ctx.lineTo(50,100);
		ctx.lineTo(57.986,69.284);
		ctx.lineTo(85.358,85.358);
		ctx.lineTo(69.284,57.986);
		ctx.closePath();
		ctx.fill();

		// Center fill
		ctx.fillStyle = CENTER_COLOUR;
		ctx.beginPath();
		ctx.arc(50,50,22.5,0,TWO_PI,true);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
	}
	ctx.restore();
};