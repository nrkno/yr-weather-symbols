var svg = require('../svg')
	, style = require('style')

	, FILL_COLOUR = style.getDocumentStyle('.lightning', 'fill') || '#c9af16';

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
		'xlink:href': '#lightning',
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

	// Fill
	ctx.save();
	ctx.translate(options.x, options.y)
	ctx.scale(options.scale, options.scale);

	ctx.fillStyle = FILL_COLOUR;
	ctx.beginPath();
	ctx.moveTo(10.413,0);
	ctx.lineTo(4.163,12.484);
	ctx.lineTo(12.488,12.484);
	ctx.lineTo(0,25);
	ctx.lineTo(25.001,8.32);
	ctx.lineTo(16.663000000000004,8.32);
	ctx.lineTo(24.995,0);
	ctx.lineTo(10.413,0);
	ctx.closePath();
	ctx.fill();
	ctx.restore();
}
