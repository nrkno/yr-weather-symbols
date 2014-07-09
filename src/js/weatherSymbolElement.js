var trait = require('trait')
	, svg = require('svg')
	, layer = require('./utils/layer')
	, validate = require('./utils/validate')
	, capabilities = require('./utils/capabilities')
	, formulae = require('../../weatherSymbols.json')
	, TCelestial = trait.compose(
			require('./primitives/TCelestialPrimitive'),
			require('./primitives/TCelestialPrimitiveElement')
		)
	, TCloud = trait.compose(
			require('./primitives/TCloudPrimitive'),
			require('./primitives/TCloudPrimitiveElement')
		)
	, TPrecip = trait.compose(
			require('./primitives/TPrecipPrimitive'),
			require('./primitives/TPrecipPrimitiveElement')
		)
	, TFog = trait.compose(
			require('./primitives/TFogPrimitive'),
			require('./primitives/TFogPrimitiveElement')
		)
	, TLightning = trait.compose(
			require('./primitives/TLightningPrimitive'),
			require('./primitives/TLightningPrimitiveElement')
		)
	, primitives = {
			sun: TCelestial.create(),
			moon: TCelestial.create(),
			cloud: TCloud.create(),
			raindrop: TPrecip.create(),
			sleet: TPrecip.create(),
			snowflake: TPrecip.create(),
			fog: TFog.create(),
			lightning: TLightning.create()
		}
	, T;

T = trait({
	/**
	 * Render symbol in 'container' with 'options'
	 * @param {DOMElement} container
	 * @param {Object} options
	 */
	render: function (container, options) {
		if (!container) return;

		options = options || {};
		var id = options.id || container.getAttribute('data-id')
			, type = validate(options.type)
			, element = createElement(type)
			, formula;

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
		if (type != 'img') {
			// Scale canvas element for hi-DPI
			if (type == 'canvas') {
				var ctx = element.getContext('2d');
				element.width = 100 * capabilities.backingRatio;
				element.height = 100 * capabilities.backingRatio;
			}

			if (formula = formulae[id]) {
				// Render layers
				for (var i = 0, n = formula.length; i < n; i++) {
					primitives[formula[i].primitive].initialize(layer.get(type, formula[i]));
					primitives[formula[i].primitive].render((type == 'canvas') ? ctx : element);
				}
			}

		// Load images
		} else {
			element.src = (options.imagePath || '') + id + '.png';
		}

		return container.appendChild(element);
	}
});

/**
 * Instance factory
 * @param {DOMElement} container
 * @param {Object} options
 */
module.exports = function (container, options) {
	var instance = T.create();
	return instance.render(container, options);
};

/**
 * Create element based on 'type'
 * @param {String} type
 * @returns {DOMElement}
 */
function createElement (type) {
	var el;

	if (type == 'svg') {
		el = document.createElementNS(svg.NS, type);
		el.setAttribute('x', '0px');
		el.setAttribute('y', '0px');
		el.setAttribute('viewBox', '0 0 100 100');
	} else {
		el = document.createElement(type);
	}

	return el;
}