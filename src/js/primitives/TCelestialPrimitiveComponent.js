var trait = require('trait');

module.exports = trait({
	/**
	 * Render svg version
	 * @returns {String}
	 */
	renderSVG: function () {
		return this.getUseAttributesAsString(this.primitive == 'moon'
				? '#moon'
				: (this.winter ? '#sunWinter' : '#sun'));
	}
});