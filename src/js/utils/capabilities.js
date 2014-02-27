var svg = require('./svg')

	, hasCanvas = false
	, hasSVG = false
	, backingRatio = 1
	, test;

// Test for inline svg
test = document.createElement('div');
test.innerHTML = '<svg/>';
hasSVG = (test.firstChild && test.firstChild.namespaceURI) == svg.NS;

// Test for canvas
test = document.createElement('canvas');
hasCanvas = !!(test.getContext && test.getContext('2d'));

// Determine backing ratio (account for hi-dpi screens)
if (hasCanvas) {
	var ctx = test.getContext('2d')
		, devicePixelRatio = window.devicePixelRatio || 1
		, backingStorePixelRatio = ctx.webkitBackingStorePixelRatio
			|| ctx.mozBackingStorePixelRatio
			|| ctx.msBackingStorePixelRatio
			|| ctx.oBackingStorePixelRatio
			|| ctx.backingStorePixelRatio
			|| 1;
	backingRatio = devicePixelRatio / backingStorePixelRatio;
	// Make it available globally
	if (!window.backingRatio) window.backingRatio = backingRatio;
}

exports.hasCanvas = hasCanvas;
exports.hasSVG = hasSVG;
exports.backingRatio = backingRatio;