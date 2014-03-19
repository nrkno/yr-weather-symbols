var anims = {}
	, length = 0
	, uid = 1
	, last = 0
	, running = false

	, FRAME_DURATION = 2000
	, TRANSITION_DURATION = 250;

module.exports = function (ctx, frames, options) {
	if (!ctx) return;

	var anim = new Anim(uid++, ctx, frames, options);
	anims[anim.id] = anim;
	length++;
	return anim;
};

function start () {
	if (!running) {
		running = true;
		tick = 0;
		window.requestAnimationFrame(onTick);
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

/**
 * Handle frame tick
 * @param {Number} time
 */
function onTick (time) {
	var now = Date.now()
		, tick;

	// Reset
	if (last == 0) last = now;

	if ((tick = now - last) >= FRAME_DURATION) {
		// Force reset when frame duration ellapsed
		last = 0;
		// Clamp to frame duration
		tick = FRAME_DURATION;
	}

	// Render anims
	for (var id in anims) {
		if (anims[id].running) render(anims[id], tick);
	}

	// Loop
	if (running) window.requestAnimationFrame(onTick);
};

/**
 * Render 'anim'
 * @param {Anim} anim
 * @param {Number} time
 */
function render (anim, time) {
	var newFrame = (time == 0)
		, transitioning = (time <= TRANSITION_DURATION) || (time >= FRAME_DURATION - TRANSITION_DURATION)
		, options = {time: time}
		, opts, layer, nextOpts;

	// Loop frame count
	if (newFrame) {
		anim.frame = (anim.frame + 1) % anim.frames.length;
	}

	// Clear canvas
	anim.ctx.clearRect(0, 0, anim.width, anim.height);

	// Loop through frame layers
	for (var i = 0, n = anim.frames[anim.frame].length; i < n; i++) {
		opts = anim.frames[anim.frame][i];
		// Get layer instance
		layer = anim.layers[opts.layer];
		// Start new frame
		if (newFrame) {
			// Show if first frame or if layer in previous frame
			if (anim.frame == 0 || !contains(anim.frames[anim.frame - 1], opts.layer)) {
					opts.time = 0;
					layer.show(opts);
			}
		// End frame
		} else if (!anim.transitioning && transitioning) {
			// Move if not last frame
			if (anim.frame < anim.frames.length - 1
				// ...and sun/moon/cloud
				&& parseInt(opts.layer.slice(-1), 10) < 4
				// ...and if layer in next frame
				&& (nextOpts = contains(anim.frames[anim.frame + 1], opts.layer))) {
					// Force time to ensure transition doesn't last longer than the frame
					nextOpts.time = FRAME_DURATION - TRANSITION_DURATION;
					layer.move(nextOpts);
			// Hide
			} else {
				layer.hide(options);
			}
		}
		layer.render(anim.ctx, options);
	}

	anim.transitioning = transitioning;
};

/**
 * Determine if 'layer' in 'layers'
 * @param {Array} layers
 * @param {String} layer
 * @returns {Object|false}
 */
function contains (layers, layer) {
	for (var i = 0, n = layers.length; i < n; i++) {
		if (layers[i].layer === layer) return layers[i];
	}
	return false;
}

/**
 * Constructor
 * @param {String} id
 * @param {CanvasContext} ctx
 * @param {Arrray} frames
 * @param {Object} options
 */
function Anim (id, ctx, frames, options) {
	var layerOptions = {
		transitionDuration: TRANSITION_DURATION
	};

	this.id = id;
	this.ctx = ctx;
	this.frame = -1;
	this.frames = frames;
	this.width = options.width;
	this.height = options.height;
	this.running = false;
	this.transitioning = false;
	this.last = 0;
	// Layer instances
	this.layers = {
		layer0: require('./primitives/SunPrimitive')().initialize(layerOptions),
		layer1: require('./primitives/MoonPrimitive')().initialize(layerOptions),
		layer2: require('./primitives/CloudPrimitive')().initialize(layerOptions),
		layer3: require('./primitives/CloudPrimitive')().initialize(layerOptions),
		layer4: require('./primitives/RaindropPrimitive')().initialize(layerOptions),
		layer5: require('./primitives/RaindropPrimitive')().initialize(layerOptions),
		layer6: require('./primitives/RaindropPrimitive')().initialize(layerOptions),
		layer7: require('./primitives/SleetPrimitive')().initialize(layerOptions),
		layer8: require('./primitives/SleetPrimitive')().initialize(layerOptions),
		layer9: require('./primitives/SleetPrimitive')().initialize(layerOptions),
		layer10: require('./primitives/SnowflakePrimitive')().initialize(layerOptions),
		layer11: require('./primitives/SnowflakePrimitive')().initialize(layerOptions),
		layer12: require('./primitives/SnowflakePrimitive')().initialize(layerOptions),
		layer13: require('./primitives/LightningPrimitive')().initialize(layerOptions),
		layer14: require('./primitives/FogPrimitive')().initialize(layerOptions),
	}

	// Store layer instance key in layer object for all frames
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