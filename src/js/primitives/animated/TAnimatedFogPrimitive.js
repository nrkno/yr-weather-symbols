var trait = require('trait');

module.exports = trait.compose(
	require('../TFogPrimitive'),
	trait({
		/**
		 * Animate instance based on 'action'
		 * @param {String} action
		 * @param {Object} options
		 * @returns {Boolean}
		 */
		animate: function (action, options) {
			if (action == 'show') {
				this._opacity = 0;
				this._dopacity = 1;
				return true;
			} else if (action == 'hide') {
				this._opacity = 1;
				this._dopacity = -1;
				return true;
			} else if (action == 'move') {
				return false;
			}
		}
	})
);