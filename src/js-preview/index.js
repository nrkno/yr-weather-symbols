window.global = window;

var svg = require('svg')
	, data = require('./symbols.json')
	, template = require('./symbolGroup')
	, weatherSymbol = require('../js/weatherSymbolElement')
	, classList = require('classlist')
	, forEach = require('lodash-compat/collection/forEach')
	, el = document.getElementById('symbols')
	, slice = Array.prototype.slice;

// Render template
template.render(data, function (err, html) {
	el.innerHTML += html;
});

// Draw canvas symbols
forEach(document.querySelectorAll('figure'), function (el) {
	var symbol = el.querySelector('.symbol')
		, options = {
			imagePath: 'dist/png/'
		};

	if (classList.hasClass(el, 'svg')) {
		options.type = 'svg';
	} else if (classList.hasClass(el, 'canvas')) {
		options.type = 'canvas';
	} else if (classList.hasClass(el, 'img')) {
		options.type = 'img';
	}

	weatherSymbol(symbol, options);
});