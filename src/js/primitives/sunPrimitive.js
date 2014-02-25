var svg = require('../svg')
	, style = require('style')

	, TWO_PI = Math.PI * 2
	, RAY_COLOUR = style.getDocumentStyle('.sun-ray', 'fill') || '#e88d15'
	, CENTER_COLOUR = style.getDocumentStyle('.sun-centre', 'fill') ||'#faba2f'
	, HORIZON_COLOUR = style.getDocumentStyle('.sun-winter-horizon', 'fill') || '#4d4d4d'
	, STROKE_WIDTH = 4;

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
		'xlink:href': options.winter ? '#sunWinter' : '#sun',
		x: '0',
		y: '0',
		width: '100',
		height: '100',
		transform: 'translate('
			+ options.x
			+ ','
			+ options.y
			+ ') scale('
			+ options.scale
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

	ctx.save();
	ctx.translate(options.x, options.y);
	ctx.scale(options.scale, options.scale);
	ctx.strokeStyle = options.bg;
	ctx.lineWidth = STROKE_WIDTH;

	if (options.winter) {
		// Horizon
		ctx.fillStyle = HORIZON_COLOUR;
		ctx.beginPath();
		ctx.moveTo(2.5,0);
		ctx.lineTo(87.6,0);
		ctx.bezierCurveTo(88.9,0,90,0.9,90,2);
		ctx.lineTo(90,2);
		ctx.bezierCurveTo(90,3.1,88.9,4,87.5,4);
		ctx.lineTo(2.5,4);
		ctx.bezierCurveTo(1.1,4,0,3.1,0,2);
		ctx.lineTo(0,2);
		ctx.bezierCurveTo(0,0.9,1.1,0,2.5,0);
		ctx.fill();
		ctx.closePath();

		// Mask
		ctx.beginPath()
		ctx.moveTo(0,8);
		ctx.lineTo(100,8);
		ctx.lineTo(100,100);
		ctx.lineTo(0,100);
		ctx.lineTo(0,8);
		ctx.closePath();
		ctx.clip();

		// Rays
		ctx.fillStyle = RAY_COLOUR;
		ctx.beginPath();
		ctx.moveTo(64.4,16.1);
		ctx.lineTo(87.6,10);
		ctx.bezierCurveTo(89.6,9.5,89.6,6.7,87.6,6.1);
		ctx.lineTo(64.4,0.1);
		ctx.lineTo(76.60000000000001,-20.7);
		ctx.bezierCurveTo(77.60000000000001,-22.5,75.60000000000001,-24.5,73.9,-23.4);
		ctx.lineTo(53.1,-11.2);
		ctx.lineTo(47,-34.5);
		ctx.bezierCurveTo(46.5,-36.5,43.7,-36.5,43.1,-34.5);
		ctx.lineTo(37,-11.2);
		ctx.lineTo(16.3,-23.4);
		ctx.bezierCurveTo(14.5,-24.4,12.5,-22.4,13.600000000000001,-20.7);
		ctx.lineTo(25.8,0.1);
		ctx.lineTo(2.5,6.1);
		ctx.bezierCurveTo(0.5,6.6,0.5,9.399999999999999,2.5,10);
		ctx.lineTo(25.8,16.1);
		ctx.lineTo(13.6,36.8);
		ctx.bezierCurveTo(12.6,38.599999999999994,14.6,40.599999999999994,16.3,39.5);
		ctx.lineTo(37.1,27.3);
		ctx.lineTo(43.2,50.6);
		ctx.bezierCurveTo(43.7,52.6,46.5,52.6,47.1,50.6);
		ctx.lineTo(53.2,27.3);
		ctx.lineTo(74,39.5);
		ctx.bezierCurveTo(75.8,40.5,77.8,38.5,76.7,36.8);
		ctx.lineTo(64.4,16.1);
		ctx.closePath();
		ctx.fill();

		// Center fill
		ctx.fillStyle = CENTER_COLOUR;
		ctx.beginPath();
		ctx.arc(45,8,22.5,0,TWO_PI,true);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

	} else {
		// Rays
		ctx.fillStyle = RAY_COLOUR;
		ctx.beginPath();
		ctx.moveTo(64.3,53);
		ctx.lineTo(87.6,46.9);
		ctx.bezierCurveTo(89.6,46.4,89.6,43.6,87.6,43);
		ctx.lineTo(64.3,37);
		ctx.lineTo(76.5,16.2);
		ctx.bezierCurveTo(77.5,14.399999999999999,75.5,12.399999999999999,73.8,13.5);
		ctx.lineTo(53,25.7);
		ctx.lineTo(46.9,2.4);
		ctx.bezierCurveTo(46.4,0.3999999999999999,43.6,0.3999999999999999,43,2.4);
		ctx.lineTo(37,25.7);
		ctx.lineTo(16.3,13.5);
		ctx.bezierCurveTo(14.5,12.5,12.5,14.5,13.600000000000001,16.2);
		ctx.lineTo(25.7,37);
		ctx.lineTo(2.4,43.1);
		ctx.bezierCurveTo(0.3999999999999999,43.6,0.3999999999999999,46.4,2.4,47);
		ctx.lineTo(25.7,53);
		ctx.lineTo(13.5,73.7);
		ctx.bezierCurveTo(12.5,75.5,14.5,77.5,16.2,76.4);
		ctx.lineTo(37,64.3);
		ctx.lineTo(43.1,87.6);
		ctx.bezierCurveTo(43.6,89.6,46.4,89.6,47,87.6);
		ctx.lineTo(53,64.3);
		ctx.lineTo(73.8,76.5);
		ctx.bezierCurveTo(75.6,77.5,77.6,75.5,76.5,73.8);
		ctx.lineTo(64.3,53);
		ctx.closePath();
		ctx.fill();

		// Center fill
		ctx.fillStyle = CENTER_COLOUR;
		ctx.beginPath();
		ctx.arc(45,45,22.5,0,TWO_PI,true);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
	}
	ctx.restore();
}