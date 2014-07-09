var capabilities = require('./capabilities');

/**
 * Retrieve layer properties with 'type' and 'options'
 * @param {String} type
 * @param {Object} options
 * @returns {Object}
 */
exports.get = function (type, options) {
	var opts = {};

	opts.visible = true;
	opts.type = type;
	opts.scale = (type == 'canvas') ? capabilities.backingRatio : 1;
	opts.primitive = options.primitive;
	opts.x = Math.round(options.x * opts.scale);
	opts.y = Math.round(options.y * opts.scale);
	opts.scale = (options.scale || 1) * opts.scale;
	opts.flip = options.flip;
	opts.tint = options.tint || 1;
	opts.winter = options.winter;

	return opts;
};