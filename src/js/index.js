window.global = window;

var dust = require('dust')
	, data = require('./symbols.json')
	, template = require('./symbolGroup')
	, weatherSymbol = require('./weatherSymbol')
	, classList = require('classlist')
	, forEach = require('lodash.foreach')
	, el = document.getElementById('symbols')
	, slice = Array.prototype.slice;

// Render template
dust.render('symbolGroup', data, function(err, html) {
	if (err) {
		console.log(err);
	} else {
		el.innerHTML = html;
	}
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