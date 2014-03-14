// Convert with http://www.professorcloud.com/svg-to-canvas/

var svg = require('svg')
	, capabilities = require('capabilities')
	, primitives = {
			sun: require('./primitives/sunPrimitive'),
			moon: require('./primitives/moonPrimitive'),
			cloud: require('./primitives/cloudPrimitive'),
			raindrop: require('./primitives/raindropPrimitive'),
			sleet: require('./primitives/sleetPrimitive'),
			snowflake: require('./primitives/snowflakePrimitive'),
			fog: require('./primitives/fogPrimitive'),
			lightning: require('./primitives/lightningPrimitive')
		}
	, formula = require('../../yresources/weatherSymbols.json')

	, DEFAULT_BG = '#ffffff'
	, SVG = 'svg'
	, CANVAS = 'canvas'
	, IMG = 'img';

/**
 * Render symbol in 'container' with 'options'
 * @param {DOMElement} container
 * @param {Object} options
 */
module.exports = function (container, options) {
	if (!container) return;

	options = options || {};
	var type = (options.type && validateType(options.type)) || getDefaultType()
		, element = createElement(type)
		, id = options.id || container.getAttribute('data-id')
		, w = container.offsetWidth
		, h = container.offsetHeight
		, scale = capabilities.backingRatio
		, tScale = (type == CANVAS) ? (w/100) * scale : 1
		, bgContainer = getStyle(container, 'background-color')
		, bg = (bgContainer && bgContainer !== 'rgba(0, 0, 0, 0)') ? bgContainer : DEFAULT_BG
		, f = formula[id]
		, layer, opts;

	// Quit if no id or container is not empty
	// and element matches type and 'replace' not set
	if (!id
		|| !options.replace
			&& container.children.length
			&& container.children[0].nodeName.toLowerCase() == type) {
				return;
	// Clear
	} else {
		container.innerHTML = '';
	}

	// Render svg or canvas
	if (type != IMG) {
		if (type == CANVAS) {
			if (w != 0) {
				element.width = w * scale;
				element.height = h * scale;
			}
		}

		if (f) {
			// Render layers
			for (var i = 0, n = f.length; i < n; i++) {
				layer = f[i];
				opts = {
					type: type,
					x: Math.round(layer.x * tScale),
					y: Math.round(layer.y * tScale),
					scale: (layer.scale || 1) * tScale,
					flip: layer.flip,
					tint: layer.tint || 1,
					winter: layer.winter,
					width: w * scale,
					height: h * scale,
					bg: bg
				};

				primitives[layer.primitive].render(element, opts);
			}
		}
	// Load images
	} else {
		element.src = (options.imagePath || '') + id + '.png';
	}

	return container.appendChild(element);
};

/**
 * Retrieve the default type based on platform capabilities
 * @returns {String}
 */
function getDefaultType () {
	return capabilities.hasSVG
		? SVG
		: (capabilities.hasCanvas
			? CANVAS
			: IMG);
}

/**
 * Validate if 'type' works on platform
 * @param {String} type
 * @returns {String}
 */
function validateType (type) {
	if (type == IMG) {
		return type;
	} else {
		return capabilities[(type == CANVAS) ? 'hasCanvas' : 'hasSVG']
			? type
			: getDefaultType();
	}
}

/**
 * Retrieve the computed style 'prop' for 'element'
 * @param {DOMElement} element
 * @param {String} prop
 * @returns {String}
 */
function getStyle (element, prop) {
	return window.getComputedStyle(element).getPropertyValue(prop);
}

/**
 * Create element based on 'type'
 * @param {String} type
 * @returns {DOMElement}
 */
function createElement (type) {
	var el;

	if (type == SVG) {
		el = document.createElementNS(svg.NS, type);
		el.setAttribute('x', '0px');
		el.setAttribute('y', '0px');
		el.setAttribute('viewBox', '0 0 100 100');
	} else {
		el = document.createElement(type);
	}

	return el;
}