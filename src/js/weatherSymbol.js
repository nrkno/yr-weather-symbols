// Convert with http://www.professorcloud.com/svg-to-canvas/

var svg = require('svg')
	, capabilities = require('capabilities')
	, map = require('lodash.map')
	, clone = require('lodash.clone')
	, animator = require('./animator')
	, primitives = {
			sun: require('./primitives/SunPrimitive')(),
			moon: require('./primitives/MoonPrimitive')(),
			cloud: require('./primitives/CloudPrimitive')(),
			raindrop: require('./primitives/RaindropPrimitive')(),
			sleet: require('./primitives/SleetPrimitive')(),
			snowflake: require('./primitives/SnowflakePrimitive')(),
			fog: require('./primitives/FogPrimitive')(),
			lightning: require('./primitives/LightningPrimitive')()
		}
	, formulae = require('../../yresources/weatherSymbols.json')

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
	var id = options.id || container.getAttribute('data-id')
		, animated = id && ~id.indexOf(':') && capabilities.hasCanvas
		, type = animated
				? CANVAS
				: (options.type && validateType(options.type))
					|| getDefaultType()
		, element = createElement(type)
		, bgContainer = getStyle(container, 'background-color')
		, w = container.offsetWidth
		, h = container.offsetHeight
		// Common layer properties
		, layerOptions = {
				type: type,
				width: w * capabilities.backingRatio,
				height: h * capabilities.backingRatio,
				scale: (type == CANVAS) ? (w/100) * capabilities.backingRatio : 1,
				bg: (bgContainer && bgContainer !== 'rgba(0, 0, 0, 0)')
					? bgContainer
					: DEFAULT_BG
			}
		, formula, frames;

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
		// Scale canvas element for hi-DPI
		if (type == CANVAS) {
			element.width = layerOptions.width;
			element.height = layerOptions.height;
		}

		if (animated) {
			frames = map(id.split(':'), function (id) {
				return map(formulae[id], function (layer) {
					return getLayerOptions(layer, clone(layerOptions))
				});
			});
			animator(element.getContext('2d'), frames, layerOptions)
				.start();

		} else {
			if (formula = formulae[id]) {
				// Render layers
				for (var i = 0, n = formula.length; i < n; i++) {
					primitives[formula[i].primitive].render((type == CANVAS) ? element.getContext('2d') : element,
						getLayerOptions(formula[i], clone(layerOptions)));
				}
			}
		}

	// Load images
	} else {
		element.src = (options.imagePath || '') + id + '.png';
	}

	return container.appendChild(element);
};

/**
 * Update 'options' with 'layer' specific properties
 * @param {Object} layer
 * @param {Object} options
 * @returns {Object}
 */
function getLayerOptions (layer, options) {
	options.primitive = layer.primitive;
	options.x = Math.round(layer.x * options.scale);
	options.y = Math.round(layer.y * options.scale);
	options.scale = (layer.scale || 1) * options.scale;
	options.flip = layer.flip;
	options.tint = layer.tint || 1;
	options.winter = layer.winter;

	return options;
}

function getLayers (layers) {

}

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
