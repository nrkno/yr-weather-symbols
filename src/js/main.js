var dust = require('dust')
	, data = require('../symbols.json')
	, template = require('./symbolGroup')
	, weatherSymbol = require('./weatherSymbol')
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
slice.call(document.querySelectorAll('figure'))
	.forEach(function (el) {
		var symbol = el.querySelector('.symbol')
			, options = {};

		if (el.classList.contains('svg')) {
			options.svg = true;
		} else if (el.classList.contains('canvas')) {
			options.canvas = true;
		} else if (el.classList.contains('img')) {
			options.img = true;
		}

		weatherSymbol(symbol, options);
	});