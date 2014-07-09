var trait = require('trait');

module.exports = trait({
	/**
	 * Render svg version
	 * @returns {String}
	 */
	renderSVG: function () {
		return this.getUseAttributesAsString('#lightning');
	}
});