var trait = require('trait');

module.exports = trait.compose(
	require('../TCelestialPrimitive')
	trait({
		/**
		 * Animate instance based on 'action'
		 * @param {String} action
		 * @param {Object} options
		 * @returns {Boolean}
		 */
		animate: function (action, options) {
			if (action == 'show') {
				this._y = options.y + this.OFFSET;
				this._dy = -this.OFFSET;
				this._opacity = 0;
				this._dopacity = 1;
				this.animationProps = ['y', 'opacity'];
				return true;
			} else if (action == 'hide') {
				this._y = this.y;
				this._dy = this.OFFSET;
				this._opacity = 1;
				this._dopacity = -1;
				this.animationProps = ['y', 'opacity'];
				return true;
			} else if (action == 'move') {
				this._y = this.y;
				this._dy = options.y - this.y;
				this._x = this.x;
				this._dx = options.x - this.x;
				this._scale = this.scale;
				this._dscale = options.scale - this.scale;
				this.animationProps = ['y', 'x', 'scale'];
				return !!(this._dy || this._dx || this._dscale);
			}
		}
	})
);