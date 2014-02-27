var Canvas = require('term-canvas')
	, size = process.stdout.getWindowSize()
	, MochaSauce = require('mocha-sauce');

var sauce = new MochaSauce({
	name: 'YR-symbols',
	username: 'popeindustries-nrk',
	accessKey: process.env.SAUCE_API_KEY_NRK,
	host: 'localhost',
	port: 4445,
	url: 'http://localhost:8000/test/test-runner.html',
	concurrency: 3
})

sauce.browser({browserName: 'chrome', platform: 'Windows 7'});
sauce.browser({browserName: 'firefox', platform: 'Windows 7'});
sauce.browser({browserName: 'internet explorer', platform: 'Windows 7', version: '9'});
sauce.browser({browserName: 'internet explorer', platform: 'Windows 8.1', version: '11'});
sauce.browser({browserName: 'ipad', platform: 'OSX 10.9', version: '7'});
sauce.browser({browserName: 'iphone', platform: 'OSX 10.9', version: '7'});
sauce.browser({browserName: 'android', platform: 'Linux', version: '4.0'});


// sauce.on('init', function(browser) {
// 	console.log('\tinit\t: %s %s', browser.browserName, browser.platform);
// });

// sauce.on('start', function(browser) {
// 	console.log('\tstart\t: %s %s', browser.browserName, browser.platform);
// });

// sauce.on('end', function(browser, res) {
// 	console.log('\tend\t: %s %s: %d failures', browser.browserName, browser.platform, res.failures);
// });

// sauce.start(function(err, res) {
// 	if (err) console.log(err);
// });

var canvas = new Canvas(size[0], size[1])
	, ctx = canvas.getContext('2d');
ctx.reset();

var grid = new MochaSauce.GridView(sauce, ctx);
grid.size(canvas.width, canvas.height);

ctx.hideCursor();

process.on('SIGINT', function() {
	ctx.reset();
	process.nextTick(function() {
		process.exit();
	});
});

sauce.start(function() {
	grid.showFailures();
	setTimeout(function() {
		ctx.showCursor();
		process.exit(grid.totalFailures());
	}, 100);
});