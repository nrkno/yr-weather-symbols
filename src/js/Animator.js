require('requestAnimationFrame');

var anims = {}
	, length = 0
	, uid = 1
	, last = 0
	, running = false

	, FRAME_RATE = 1000;

module.exports = function (element, frames, options) {
	if (!element) return;

	var anim = new Anim(uid++, element, frames, options);
	anims[anim.id] = anim;
	length++;
	return anim;
};

function start () {
	if (!running) {
		running = true;
		tick = 0;
		last = Date.now();
		onTick();
	}
}

function stop () {
	if (running) {
		running = false;
		for (var id in anims) {
			anims[id].running = false;
		}
	}
}

function onTick (time) {
	var now = Date.now()
		, tick = now - last;

	// Update
	if (tick >= FRAME_RATE) {
		last = now;
		for (var id in anims) {
			if (anims[id].running) anims[id].render();
		}
	}

	// Loop
	if (running) window.requestAnimationFrame(onTick);
};

function Anim (id, element, frames, options) {
	this.id = id;
	this.element = element;
	this.frames = frames;
	this.frame = 0;
	this.ctx = element.getContext('2d');
	this.width = options.width;
	this.height = options.height;
	this.running = false;

	this.render();
}

Anim.prototype.start = function () {
	this.running = true;
	start();
};

Anim.prototype.stop = function () {
	this.running = false;
};

Anim.prototype.destroy = function () {

};

Anim.prototype.render = function () {
	var layer;

	// Clear canvas
	this.ctx.clearRect(0, 0, this.width, this.height);

	for (var i = 0, n = this.frames[this.frame].length; i < n; i++) {
		layer = this.frames[this.frame][i];
		layer.primitive.render(this.element, layer.options);
	}

	// Loop frame count
	this.frame = (this.frame + 1) % this.frames.length;
};
