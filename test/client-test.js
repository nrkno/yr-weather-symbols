var capabilities = require('capabilities')
	, symbol, expect;

// Make it work in node..
try {
	symbol = require('..');
	expect = require('expect.js');
	require('./sauce.js');
// .. or browser
} catch (err) {
	symbol = require('./weatherSymbolElement');
	expect = window.expect;
}

describe('weather symbol element', function () {
	before(function () {
		this.container = document.createElement('div');
	});
	afterEach(function () {
		this.container.innerHTML = '';
		this.container.removeAttribute('data-id');
	});

	describe('init', function () {
		it('should quit if no "container" passed', function () {
			expect(symbol()).to.not.be.ok();
		});
		it('should quit if no "id" passed or no "data-id" attribute set on "container"', function () {
			expect(symbol(this.container)).to.not.be.ok();
		});
		it('should quit if "replace" not passed and "container" contains an element matching symbol type', function () {
			symbol(this.container, {id:'01d'});
			expect(symbol(this.container, {id:'02d'})).to.not.be.ok();
		});
		it('should overwrite an existing symbol if "replace" passed', function () {
			symbol(this.container, {id:'01d'});
			expect(symbol(this.container, {id:'02d', replace:true})).to.be.ok();
		});
		if (capabilities.hasCanvas) {
			it('should overwrite an existing symbol if not the same "type"', function () {
				symbol(this.container, {id:'01d', type:'img'});
				expect(symbol(this.container, {id:'02d', type:'canvas'})).to.be.ok();
			});
		}
	});

	if (capabilities.hasSVG) {
		describe('svg', function () {
			it('should create an inline svg symbol', function () {
				var el = symbol(this.container, {type:'svg', id:'02d'});
				expect(this.container.children.length).to.eql(1);
				expect(el.children.length).to.eql(2);
				expect(el.firstChild.nodeName.toLowerCase()).to.eql('use');
				expect(el.firstChild.getAttribute('href')).to.eql('#sun');
			});
		})
	}

	if (capabilities.hasCanvas) {
		describe('canvas', function () {
			it('should create a canvas symbol', function () {
				var el = symbol(this.container, {type:'canvas', id:'02d'});
				expect(this.container.firstChild.nodeName.toLowerCase()).to.eql('canvas');
			});
		});
	}

	describe('img', function () {
		it('should create an img symbol', function () {
			var el = symbol(this.container, {type:'img', id:'02d'});
			expect(this.container.firstChild.nodeName.toLowerCase()).to.eql('img');
		});
	});
});
