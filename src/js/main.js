var SymbolGenerator = require('./SymbolGenerator')
	, symbol = new SymbolGenerator(1);

Array.prototype.slice.call(document.querySelectorAll('.symbol'))
	.forEach(symbol.draw, symbol);