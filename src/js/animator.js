var anims = {}
	, length = 0
	, uid = 1
	, last = 0
	, running = false

	, FRAME_DURATION = 2000
	, TRANSITION_DURATION = 250;

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

	if (tick >= FRAME_DURATION) {
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
	this.frame = 0;
	this.frames = frames;
	this.ctx = element.getContext('2d');
	this.width = options.width;
	this.height = options.height;
	this.running = false;
	this.layers = {
		layer0: require('./primitives/sunPrimitive').initialize(),
		layer1: require('./primitives/moonPrimitive').initialize(),
		layer2: require('./primitives/cloudPrimitive').initialize(),
		layer3: require('./primitives/cloudPrimitive').initialize(),
		layer4: require('./primitives/raindropPrimitive').initialize(),
		layer5: require('./primitives/raindropPrimitive').initialize(),
		layer6: require('./primitives/raindropPrimitive').initialize(),
		layer7: require('./primitives/sleetPrimitive').initialize(),
		layer8: require('./primitives/sleetPrimitive').initialize(),
		layer9: require('./primitives/sleetPrimitive').initialize(),
		layer10: require('./primitives/snowflakePrimitive').initialize(),
		layer11: require('./primitives/snowflakePrimitive').initialize(),
		layer12: require('./primitives/snowflakePrimitive').initialize(),
		layer13: require('./primitives/lightningPrimitive').initialize(),
		layer14: require('./primitives/fogPrimitive').initialize(),
	}

	for (var i = 0, n = this.frames.length; i < n; i++) {
		for (var j = 0, k = this.frames[i].length; j < k; j++) {
			var layer = this.frames[i][j];
			switch (layer.primitive) {
				case 'sun':
					layer.layer = 'layer0';
					break;
				case 'moon':
					layer.layer = 'layer1';
					break;
				case 'cloud':
					layer.layer = layer.flip ? 'layer2' : 'layer3';
					break;
				case 'raindrop':
					layer.layer = 'layer' + (j + 2);
					break;
				case 'sleet':
					layer.layer = 'layer' + (j + 5);
					break;
				case 'snowflake':
					layer.layer = 'layer' + (j + 8);
					break;
				case 'lightning':
					layer.layer = 'layer13';
					break;
				case 'fog':
					layer.layer = 'layer14';
					break;
			}
		}
	}

	console.dir(this.frames)
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
		// layer.primitive.render(this.element, layer.options);
	}

	// Loop frame count
	this.frame = (this.frame + 1) % this.frames.length;
};