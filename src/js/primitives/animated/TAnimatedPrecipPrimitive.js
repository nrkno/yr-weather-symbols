var trait = require('trait');

module.exports = trait.compose(
	require('../TPrecipPrimitive'),
	trait({
		/**
		 * Animate instance based on 'action'
		 * @param {String} action
		 * @param {Object} options
		 * @returns {Boolean}
		 */
		animate: function (action, options) {
			if (action == 'show') {
				this._opacity = 0.75;
				this._dopacity = 1;
				this.animationProps = ['opacity'];
				return true;
			} else if (action == 'hide') {
				this._x = this.x;
				this._dx = this.OFFSET * 0.5;
				this._y = this.y;
				this._dy = this.OFFSET;
				this._opacity = 1;
				this._dopacity = -1;
				this.animationProps = ['x', 'y', 'opacity'];
				return true;
			} else if (action == 'move') {
				return false;
			}
		}
	})
);