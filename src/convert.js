var casper = require('casper').create()
	, destination = casper.cli.get(0)
	, ids;

if (!destination) {
	casper.echo('Missing destination directory').exit();
} else {
	if (destination.charAt(destination.length - 1) !== '/') destination += '/';
}

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
		casper.captureSelector(destination + id + '.png', '#c-' + id);
	});

	this.exit();
});