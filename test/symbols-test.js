var symbol, capabilities, expect;

// Make it work in node..
try {
	symbol = require('..');
	capabilities = require('../src/js/utils/capabilities.js')
	expect = require('expect.js');
	require('./sauce.js');
// .. or browser
} catch (err) {
	symbol = require('./weatherSymbol');
	capabilities = require('utils/capabilities')
	expect = window.expect;
}

describe('weatherSymbol', function () {
	if (capabilities.hasSVG) {
		describe('svg', function () {
			it('should inline svg symbol definitions', function () {
				expect(document.getElementById('symbolDefs')).to.be.ok();
			});

		})
	}
});
