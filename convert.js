var casper = require('casper').create()
	, destination = casper.cli.get(0);

if (!destination) casper.echo('Destination missing').exit();

casper.start('index.html', function () {

});

casper.run();

/*
// TODO: compress?

var page = require('webpage').create()
	, system = require('system')
	, fs = require('fs')
	, RE_IGNORE = /^[\.~]|~$/
	, start = +new Date()
	, source, destination, dimension, files, postfix;

// Abort if missing destination
if (system.args.length < 3) {
	console.error('Usage: convert.js source destination [dimension] [filename-postfix]');
	phantom.exit();
} else {
	source = system.args[1];
	destination = system.args[2];
	dimension = system.args.length > 3 ? parseInt(system.args[3], 10) : 100;
	postfix = system.args.length > 4 ? system.args[4] : '';

	// Create destination directory if it doesn't exist
	if (!fs.exists(destination)) fs.makeTree(destination);

	// Gather .svg files and convert
	forEachSeries(files = readdir(source), convert, function(err) {
		if (err) {
			console.error(err);
		} else {
			console.log('converted', files.length, '.svg files in', (+new Date() - start) / 1000, 'seconds')
		}
		page.close();
		phantom.exit();
	});
}

// Recursively gather all .svg files in a directory
function readdir (path) {
	var _files = []
		, _readdir;

	_readdir = function(path) {
		if (fs.exists(path)) {
			if (fs.isDirectory(path)) {
				fs.list(path).forEach(function(item) {
					// Skip ignored and recurse
					if (!RE_IGNORE.test(item)) _readdir(path + '/' + item);
				});
			} else if (path.indexOf('.svg') != -1) {
				_files.push(path);
			}
		}
		return _files;
	};

	return _readdir(path);
}

// Convert .svg file to .png
function convert (file, fn) {
	var segs = file.split('/')
		, dest;

	// Generate destination path
	segs[0] = destination;
	dest = segs.join('/').replace('.svg', postfix + '.png');

	page.open(file, function(status) {
		if (status !== 'success') {
			fn('File not found:' + file);
			return;
		}

		// Resize: assume original is 100x100
		page.zoomFactor = dimension/100;
		page.viewportSize = {
			width: dimension,
			height: dimension
		};

		// Wait for resize end
		setTimeout(function() {
			page.render(dest);
			console.log('converted:', dest);
			return fn(null);
		}, 0);
	});
}

// Serial async forEach
function forEachSeries (arr, iterator, fn) {
	var outstanding = 0
		, iterate;

	if (!arr.length) return fn();

	iterate = function () {
		iterator(arr[outstanding], function(err) {
			if (err) {
				fn(err);
			} else {
				outstanding++;
				if (outstanding === arr.length) {
					fn(null);
				} else {
					iterate();
				}
			}
		});
	};

	iterate();
}

*/