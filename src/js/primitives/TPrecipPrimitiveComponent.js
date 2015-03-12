var trait = require('simple-traits');

module.exports = trait({
	/**
	 * Render svg version
	 * @returns {String}
	 */
	renderSVG: function () {
		return this.getUseAttributesAsString('#' + this.primitive);
	}
});