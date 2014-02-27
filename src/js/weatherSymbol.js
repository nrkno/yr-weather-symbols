// Convert with http://www.professorcloud.com/svg-to-canvas/

var svg = require('./svg')
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
	, formula = require('../../resources/weatherSymbols.json')

	, DEFAULT_BG = '#ffffff'
	, SVG = 'svg'
	, CANVAS = 'canvas'
	, IMG = 'img'
	, DEFS = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="symbolDefs" x="0px" y="0px" width="0" height="0" viewBox="0 0 100 100" style="display:none;"><defs><path id="cloud" class="cloud" d="M55.6,2C46,1.7,37.1,7,34.1,17.3c-6.1-1.5-16,2.4-17.8,10.9C10.1,28,2,33.1,2,41.6C2,51,9,56,21.5,56h43.6 c5.6,0,12.9-0.5,17.3-2.6c14.9-7.2,12.3-32.3-6.4-34.6C73.7,7.9,65.1,2.3,55.6,2z"/><clipPath id="sunWinterMask"><rect y="45" width="90" height="45" /></clipPath></defs><symbol id="sun"><g class="sun-ray" ><path d="M23.5,33.2c2.2-4.1,5.6-7.5,9.7-9.7l-17-10c-1.8-1-3.8,1-2.7,2.7L23.5,33.2z"/><path d="M45,20.5c2.4,0,4.7,0.3,6.9,1l-5-19.1c-0.5-2-3.3-2-3.9,0l-5,19.1C40.3,20.8,42.6,20.5,45,20.5z"/><path d="M87.6,43.1l-19.1-5c0.6,2.2,1,4.5,1,6.9c0,2.4-0.3,4.7-1,6.9l19.1-5C89.6,46.4,89.6,43.6,87.6,43.1z"/><path d="M20.5,45c0-2.4,0.3-4.7,1-6.9l-19.1,5c-2,0.5-2,3.3,0,3.9l19.1,5C20.8,49.7,20.5,47.4,20.5,45z"/><path d="M66.5,33.2l10-17c1-1.8-1-3.8-2.7-2.7l-17,10C60.9,25.8,64.2,29.1,66.5,33.2z"/><path d="M23.5,56.8l-10,17c-1,1.8,1,3.8,2.7,2.7l17-10C29.1,64.2,25.8,60.9,23.5,56.8z"/><path d="M66.5,56.8c-2.2,4.1-5.6,7.5-9.7,9.7l17,10c1.8,1,3.8-1,2.7-2.7L66.5,56.8z"/><path d="M45,69.5c-2.4,0-4.7-0.3-6.9-1l5,19.1c0.5,2,3.3,2,3.9,0l5-19.1C49.7,69.2,47.4,69.5,45,69.5z"/></g><circle class="sun-centre" style="fill-rule:nonzero" cx="45" cy="45" r="20.5"/></symbol><symbol id="sunWinter"><path class="sun-winter-horizon" d="M2.5,0h85.1C88.9,0,90,0.9,90,2v0c0,1.1-1.1,2-2.5,2H2.5C1.1,4,0,3.1,0,2v0C0,0.9,1.1,0,2.5,0z"/><use class="sun-winter" style="clip-path:url(#sunWinterMask);" xlink:href="#sun" x="0" y="-37" width="100" height="100"></use></symbol><symbol id="moon"><path class="moon" d="M23,20c0-7.7,2.9-14.7,7.6-20c-0.2,0-0.4,0-0.6,0C13.4,0,0,13.4,0,30s13.4,30,30,30c8.9,0,16.9-3.9,22.4-10 C36.1,49.6,23,36.4,23,20z"/></symbol><symbol id="cloud-10" class="cloud-10"><use xlink:href="#cloud" x="0" y="0" width="100" height="100"></use></symbol><symbol id="cloud-15" class="cloud-15"><use xlink:href="#cloud" x="0" y="0" width="100" height="100"></use></symbol><symbol id="cloud-30" class="cloud-30"><use xlink:href="#cloud" x="0" y="0" width="100" height="100"></use></symbol><symbol id="cloud-40" class="cloud-40"><use xlink:href="#cloud" x="0" y="0" width="100" height="100"></use></symbol><symbol id="cloud-50" class="cloud-50"><use xlink:href="#cloud" x="0" y="0" width="100" height="100"></use></symbol><symbol id="fog"><path class="fog" d="M82.3,42H2.7C1.2,42,0,42.9,0,44s1.2,2,2.7,2h79.7c1.5,0,2.7-0.9,2.7-2S83.8,42,82.3,42z"/><path class="fog" d="M80.1,50H5.9C4.3,50,3,50.9,3,52c0,1.1,1.3,2,2.9,2h74.3c1.6,0,2.9-0.9,2.9-2C83,50.9,81.7,50,80.1,50z"/><path class="fog" d="M80.1,58H10.9C9.3,58,8,58.9,8,60s1.3,2,2.9,2h69.2c1.6,0,2.9-0.9,2.9-2S81.7,58,80.1,58z"/><path class="fog" d="M51.2,0c-9.1-0.3-17.6,4.8-20.5,14.6c-5.9-1.4-15.3,2.3-17,10.4C8.2,24.9,1.2,29,0.1,36C0,37,0.7,37.9,1.7,37.9l82.3,0 c1,0,1.8-0.7,1.9-1.7c1-8.9-4.1-18.7-15.2-20.1C68.5,5.6,60.2,0.3,51.2,0z"/></symbol><symbol id="raindrop"><circle class="bg" cx="9" cy="9" r="9"/><path class="raindrop" d="M20,16.8c0,3.4-2.7,6.2-6,6.2c-3.3,0-6-2.8-6-6.2C8,14.9,8,6,8,6C13.5,11.5,20,11.2,20,16.8z"/></symbol><symbol id="sleet"><circle class="bg" cx="9" cy="9" r="9"/><path class="sleet" d="M19.9,16.6c-1.8,2.3-3.4,5.5-3.9,8.9c-0.1,0.5-0.6,0.7-1,0.4c-2.3-2.1-4.8-3.3-8.5-3.8c-0.4-0.1-0.6-0.5-0.4-0.8 C8.4,17,8.6,10.1,7.8,5c2.7,4.2,7.1,9,11.8,10.7C20,15.8,20.1,16.3,19.9,16.6z"/></symbol><symbol id="snowflake"><circle class="bg" cx="9" cy="9" r="9"/><path class="snowflake" d="M6.2,6.9l1.1,3.8c-0.3,0.2-0.6,0.5-0.9,0.8C6,11.7,5.8,12,5.6,12.4l-3.8-1C1,11.2,0.2,11.7,0,12.5c-0.2,0.8,0.3,1.6,1.1,1.8 l3.8,1c0,0.8,0.3,1.6,0.6,2.3l-2.7,2.8c-0.6,0.6-0.6,1.5,0,2.1c0.6,0.6,1.5,0.6,2.1,0l2.7-2.8c0.7,0.4,1.5,0.6,2.3,0.6l1,3.8 c0.2,0.8,1,1.2,1.8,1c0.8-0.2,1.2-1,1-1.8l-1.1-3.8c0.3-0.2,0.7-0.4,1-0.7c0.3-0.3,0.5-0.6,0.7-1l3.8,1c0.8,0.2,1.6-0.3,1.8-1.1 c0.2-0.8-0.3-1.6-1.1-1.8l-3.8-1c0-0.8-0.3-1.6-0.7-2.3l2.7-2.8c0.6-0.6,0.5-1.5,0-2.1c-0.6-0.6-1.5-0.6-2.1,0l-2.7,2.8 c-0.7-0.4-1.5-0.6-2.3-0.6L9,6.1c-0.2-0.8-1-1.2-1.8-1C6.5,5.3,6,6.1,6.2,6.9z M11.8,13.2c1,1,1,2.6,0,3.6c-1,1-2.6,1-3.6,0 c-1-1-1-2.6,0-3.6C9.2,12.2,10.8,12.2,11.8,13.2z"/></symbol><symbol id="lightning"><path class="lightning" d="M10.4,0L4.2,12.5h8.3L0,25L25,8.3h-8.3L25,0H10.4z"/></symbol></svg>'

	, hasCanvas = false
	, hasSVG = false
	, backingRatio = 1
	, test;

// Test for inline svg
test = document.createElement('div');
test.innerHTML = '<svg/>';
hasSVG = (test.firstChild && test.firstChild.namespaceURI) == svg.NS;

// Test for canvas
test = document.createElement('canvas');
hasCanvas = !!(test.getContext && test.getContext('2d'));

// Determine backing ratio (account for hi-dpi screens)
if (hasCanvas) {
	var ctx = test.getContext('2d')
		, devicePixelRatio = window.devicePixelRatio || 1
		, backingStorePixelRatio = ctx.webkitBackingStorePixelRatio
			|| ctx.mozBackingStorePixelRatio
			|| ctx.msBackingStorePixelRatio
			|| ctx.oBackingStorePixelRatio
			|| ctx.backingStorePixelRatio
			|| 1;
	backingRatio = devicePixelRatio / backingStorePixelRatio;
	// Make it available globally
	if (!window.backingRatio) window.backingRatio = backingRatio;
}

// Add svg definitions if not already present
if (hasSVG && !document.getElementById('symbolDefs')) {
	var el = document.createElement('div');

	el.innerHTML = DEFS;
	document.body.insertBefore(el.firstChild, document.body.firstChild);
}

/**
 * Render symbol in 'container' with 'options'
 * @param {DOMElement} container
 * @param {Object} options
 */
module.exports = function (container, options) {
	if (!container) return;

	options = options || {};
	var type = options.type || getDefaultType()
		, element = createElement(type)
		, id = options.id || container.getAttribute('data-id')
		, w = container.offsetWidth
		, h = container.offsetHeight
		, scale = backingRatio
		, tScale = (type == CANVAS) ? (w/100) * scale : 1
		, bgContainer = getStyle(container, 'background-color')
		, bg = (bgContainer && bgContainer !== 'rgba(0, 0, 0, 0)') ? bgContainer : DEFAULT_BG
		, f = formula[id]
		, layer, opts;

	if (!id) return;

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
					small: layer.small,
					flip: layer.flip,
					tint: layer.tint,
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

	container.appendChild(element);
};

/**
 * Retrieve the default type based on platform capabilities
 * @returns {String}
 */
function getDefaultType () {
	return hasSVG
		? 'svg'
		: (hasCanvas
			? 'canvas'
			: 'img');
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