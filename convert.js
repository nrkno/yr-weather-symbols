var casper = require('casper').create()
	, ids

	, DEST = './bin/images/';

casper.start('index.html', function () {
	ids = this.evaluate(function () {
		return Array.prototype.slice.call(__utils__.findAll('canvas')).map(function (el) {
			var id = el.parentElement.getAttribute('data-id');
			el.id = 'c-' + id;
			return id;
		});
	});
});

casper.run(function () {
	ids.forEach(function (id) {
		casper.echo('generating: ' + id + '.png @ 100x100');
		casper.captureSelector(DEST + id + '.png', '#c-' + id);
	});

	this.exit();
});