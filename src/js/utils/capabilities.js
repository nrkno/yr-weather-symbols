var runtime = require('runtime');

if (runtime.isServer) {
	var capabilities = {
		hasSVG: true,
		hasCanvas: true,
		backingRatio: 1
	}
} else {
	var capabilities = require('capabilities');
}

module.exports = capabilities;