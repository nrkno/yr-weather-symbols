var symbol = require('../src/js/weatherSymbolComponent')
	, React = require('react');

describe('weather symbol', function () {
	describe('component', function () {
		it('should render a simple symbol as <svg> markup', function () {
			React.renderToStaticMarkup(symbol()({
				type: 'svg',
				id: '01d'
			})).should.eql('<svg x="0" y="0" viewBox="0 0 100 100"><use xlink:href="#sun" x="0" y="0" width="100" height="100" transform="translate(5,5) scale(1)"></use></svg>');
		});
		it('should render a complex symbol as <svg> markup', function () {
			React.renderToStaticMarkup(symbol()({
				type: 'svg',
				id: '10'
			})).should.eql('<svg x="0" y="0" viewBox="0 0 100 100"><use xlink:href="#cloud-40" x="0" y="0" width="100" height="100" transform="translate(85,10) scale(-0.8, 0.8)"></use><use xlink:href="#cloud-50" x="0" y="0" width="100" height="100" transform="translate(7,22) scale(1)"></use><use xlink:href="#raindrop" x="0" y="0" width="100" height="100" transform="translate(65,72) scale(1)"></use><use xlink:href="#raindrop" x="0" y="0" width="100" height="100" transform="translate(49,72) scale(1)"></use><use xlink:href="#raindrop" x="0" y="0" width="100" height="100" transform="translate(33,68) scale(1)"></use></svg>');
		});
		it('should render a symbol as <canvas> markup', function () {
			React.renderToStaticMarkup(symbol()({
				type: 'canvas',
				id: '01d'
			})).should.eql('<canvas width="100" height="100"></canvas>');
		});
		it('should render a symbol as <img> markup', function () {
			React.renderToStaticMarkup(symbol()({
				type: 'img',
				id: '01d'
			})).should.eql('<img src="01d.png">');
		});
		it('should render a symbol as <img> markup with passed image path', function () {
			React.renderToStaticMarkup(symbol()({
				type: 'img',
				id: '01d',
				imagePath: '/foo/'
			})).should.eql('<img src="/foo/01d.png">');
		});
	});
});