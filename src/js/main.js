var WeatherSymbol = require('./WeatherSymbol')
	, dust = require('dust')
	, template = require('./symbolGroup')
	, data = require('../symbols.json')
	, symbol = new WeatherSymbol(1)
	, el = document.getElementById('symbols');

// Render template
dust.render('symbolGroup', data, function(err, html) {
	if (err) {
		console.log(err);
	} else {
		el.innerHTML = html;
	}
});


// Draw canvas symbols
Array.prototype.slice.call(document.querySelectorAll('.symbol'))
	.forEach(symbol.draw, symbol);