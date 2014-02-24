var svg = require('../svg')
	, TWO_PI = Math.PI * 2
	, FILL_COLOUR = '#1671CC';

/**
 * Render
 * @param {DOMElement} element
 * @param {Object} options
 */
exports.render = function (element, options) {
	if (options.type == 'svg') {
		return renderSVG(element, options);
	} else {
		return renderCanvas(element, options);
	}
};

/**
 * Render svg version
 * @param {DOMElement} element
 * @param {Object} options
 * @returns {String}
 */
function renderSVG (element, options) {
	svg.appendChild(element, 'use', {
		'xlink:href': '#raindrop',
		x: '0',
		y: '0',
		width: '100',
		height: '100',
		transform: 'translate('
			+ options.x
			+ ','
			+ options.y
			+ ')'
	});
}

/**
 * Render canvas version
 * @param {DOMElement} element
 * @param {Object} options
 */
function renderCanvas (element, options) {
	var ctx = element.getContext('2d');

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
}