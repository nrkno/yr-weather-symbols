var casper = require('casper').create()
	, destination = casper.cli.get(0);

if (!destination) casper.echo('Destination missing').exit();

casper.start('index.html', function () {

});

casper.run();