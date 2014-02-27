var Trait = require('trait');

module.exports = Trait({
	TWO_PI: Math.PI * 2,
	STROKE_WIDTH: 4,
	WIDTH: 100,

	/**
	 * Render primitive in 'element'
	 * @param {DOMElement} element
	 * @param {Object} options
	 */
	render: function (element, options) {
		if (options.type == 'svg') {
			return this.renderSVG(element, options);
		} else {
			return this.renderCanvas(element, options);
		}
	},

	/**
	 * Retrieve attribute object for <use>
	 * @param {String} link
	 * @param {Object} options
	 */
	getUseAttributes: function (link, options) {
		return {
			'xlink:href': link,
			x: '0',
			y: '0',
			width: '100',
			height: '100',
			transform: options.flip
				? 'translate('
					+ ((this.WIDTH * options.scale) + options.x)
					+ ','
					+ options.y
					+ ') scale('
					+ (-1 * options.scale)
					+ ', '
					+ options.scale
					+ ')'
				: 'translate('
					+ options.x
					+ ','
					+ options.y
					+ ') scale('
					+ options.scale
					+ ')'
		}
	},

	renderSVG: Trait.required,
	renderCanvas: Trait.required
});
