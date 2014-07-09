var capabilities = require('./capabilities');

/**
 * Validate if 'type' is suported on platform
 * @param {String} type
 * @returns {String}
 */
module.exports = function (type) {
	if (!type) return getDefaultType();

	if (type == 'img') {
		return type;
	} else {
		return capabilities[(type == 'canvas') ? 'hasCanvas' : 'hasSVG']
			? type
			: getDefaultType();
	}
};


/**
 * Retrieve the default type based on platform capabilities
 * @returns {String}
 */
function getDefaultType () {
	return capabilities.hasSVG
		? 'svg'
		: (capabilities.hasCanvas
			? 'canvas'
			: 'img');
};
