var symbol = require('../src/js/weatherSymbolComponent')
	, React = require('react');

describe('weather symbol', function () {
	describe('component', function () {
		it('should render a symbol as <svg> markup', function () {
			React.renderComponentToStaticMarkup(symbol()({
				type: 'svg',
				id: '01d'
			})).should.eql('<svg><use xlink:href:"#sun" x:"0" y:"0" width:"100" height:"100" transform:"translate(5,5) scale(1)"></use></svg>');
		});
		it('should render a symbol as <canvas> markup', function () {
			React.renderComponentToStaticMarkup(symbol()({
				type: 'canvas',
				id: '01d'
			})).should.eql('<canvas width="100" height="100"></canvas>');
		});
		it('should render a symbol as <img> markup', function () {
			React.renderComponentToStaticMarkup(symbol()({
				type: 'img',
				id: '01d'
			})).should.eql('<img src="01d.png">');
		});
		it('should render a symbol as <img> markup with passed image path', function () {
			React.renderComponentToStaticMarkup(symbol()({
				type: 'img',
				id: '01d',
				imagePath: '/foo/'
			})).should.eql('<img src="&#x2f;foo&#x2f;01d.png">');
		});
	});
});