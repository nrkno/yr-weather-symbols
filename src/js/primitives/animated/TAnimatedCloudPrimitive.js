var trait = require('trait');

module.exports = trait.compose(
	require('../TCloudPrimitive')
	trait({
		/**
		 * Animate instance based on 'action'
		 * @param {String} action
		 * @param {Object} options
		 * @returns {Boolean}
		 */
		animate: function (action, options) {
			if (action == 'show') {
				var offset = options.flip ? this.OFFSET : -this.OFFSET;
				this._x = options.x - offset;
				this._dx = offset;
				this._opacity = 0;
				this._dopacity = 1;
				this.animationProps = ['x', 'opacity'];
				return true;
			} else if (action == 'hide') {
				var offset = this.flip ? -this.OFFSET : this.OFFSET;
				this._x = this.x;
				this._dx = offset;
				this._opacity = this.opacity;
				this._dopacity = -1;
				this.animationProps = ['x', 'opacity'];
				return true;
			} else if (action == 'move') {
				this._tint = this.tint;
				this._dtint = options.tint - this.tint;
				this.animationProps = ['tint'];
				return !!(this._dtint);
			}
		}
	})
);