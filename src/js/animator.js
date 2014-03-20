var CelestialPrimitive = require('./primitives/CelestialPrimitive')
	, CloudPrimitive = require('./primitives/CloudPrimitive')
	, PrecipPrimitive = require('./primitives/PrecipPrimitive')
	, LightningPrimitive = require('./primitives/LightningPrimitive')
	, FogPrimitive = require('./primitives/FogPrimitive')

	, anims = {}
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
	if (!last) last = now;
	tick = now - last;

	// Render anims
	for (var id in anims) {
		if (anims[id].running) render(anims[id], tick);
	}

	last = now;

	// Loop
	if (running) window.requestAnimationFrame(onTick);
}

/**
 * Render 'anim'
 * @param {Anim} anim
 * @param {Number} time
 */
function render (anim, tick) {
	var time = (anim.time + tick) % anim.duration
		, last = time - tick
		, layer, options;

	anim.time = time;

	for (var keyframe in anim.timeline) {
		if (keyframe == time
			|| keyframe > last && time > keyframe) {
				for (var i = 0, n = anim.timeline[keyframe].length; i < n; i++) {
					layer = anim.timeline[keyframe][i];
					layer.instance[layer.action](time, layer.start, layer.duration, layer.options);
					// console.log(layer.action, layer.options.primitive, time)
				}
		}
	}

	// Clear canvas
	anim.ctx.clearRect(0, 0, anim.width, anim.height);

	for (var i = 0, n = anim.layers.length; i < n; i++) {
		layer = anim.layers[i]
		layer.update(time);
		layer.render(anim.ctx);
	}

	// var newFrame = (time == 0)
	// 	, transitioning = (time <= TRANSITION_DURATION) || (time >= FRAME_DURATION - TRANSITION_DURATION)
	// 	, options = {time: time}
	// 	, opts, layer, nextOpts;

	// // Loop frame count
	// if (newFrame) {
	// 	anim.frame = (anim.frame + 1) % anim.frames.length;
	// }

	// // Clear canvas
	// anim.ctx.clearRect(0, 0, anim.width, anim.height);

	// // Loop through frame layers
	// for (var i = 0, n = anim.frames[anim.frame].length; i < n; i++) {
	// 	opts = anim.frames[anim.frame][i];
	// 	// Get layer instance
	// 	layer = anim.layers[opts.layer];
	// 	// Start new frame
	// 	if (newFrame) {
	// 		// Show if first frame or if layer in previous frame
	// 		if (anim.frame == 0 || !contains(anim.frames[anim.frame - 1], opts.layer)) {
	// 				opts.time = 0;
	// 				layer.show(opts);
	// 		}
	// 	// End frame
	// 	} else if (!anim.transitioning && transitioning) {
	// 		// Move if not last frame
	// 		if (anim.frame < anim.frames.length - 1
	// 			// ...and sun/moon/cloud
	// 			&& parseInt(opts.layer.slice(-1), 10) < 4
	// 			// ...and if layer in next frame
	// 			&& (nextOpts = contains(anim.frames[anim.frame + 1], opts.layer))) {
	// 				// Force time to ensure transition doesn't last longer than the frame
	// 				nextOpts.time = FRAME_DURATION - TRANSITION_DURATION;
	// 				layer.move(nextOpts);
	// 		// Hide
	// 		} else {
	// 			layer.hide(options);
	// 		}
	// 	}
	// 	layer.render(anim.ctx, options);
	// }

	// anim.transitioning = transitioning;
}

function generateTimeline (frames, layers) {
	var timeline = {}
		, time = 0
		, layer, prevLayer, nextLayer;

	for (var i = 0, n = frames.length; i < n; i++) {
		for (var j = 0, k = frames[i].length; j < k; j++) {
			layer = frames[i][j];
			prevLayer = contains(frames[(i == 0) ? n - 1: i - 1], layer.layer);
			nextLayer = contains(frames[(i + 1) % n], layer.layer);
			generateKeyframe(timeline, time, {
				instance: layers[layer.layer],
				action: 'show',
				duration: TRANSITION_DURATION,
				start: time,
				options: layer
			})
			if (nextLayer) {
				generateKeyframe(timeline, time + FRAME_DURATION - TRANSITION_DURATION, {
					instance: layers[layer.layer],
					action: 'move',
					duration: TRANSITION_DURATION,
					start: time + FRAME_DURATION - TRANSITION_DURATION,
					options: nextLayer
				})
			} else {
				generateKeyframe(timeline, time + FRAME_DURATION - TRANSITION_DURATION, {
					instance: layers[layer.layer],
					action: 'hide',
					duration: TRANSITION_DURATION,
					start: time + FRAME_DURATION - TRANSITION_DURATION,
					options: layer
				})
			}
		}
		time += FRAME_DURATION;
	}

	return timeline;
}

function generateKeyframe (timeline, time, data) {
	if (timeline[time] == null) timeline[time] = [];
	timeline[time].push(data);
}

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
	this.id = id;
	this.ctx = ctx;
	this.frames = frames;
	this.width = options.width;
	this.height = options.height;
	this.running = false;
	this.duration = this.frames.length * FRAME_DURATION;
	this.time = 0;
	// Layer instances
	this.layers = [
		CelestialPrimitive().initialize(),
		CelestialPrimitive().initialize(),
		CloudPrimitive().initialize(),
		CloudPrimitive().initialize(),
		PrecipPrimitive().initialize(),
		PrecipPrimitive().initialize(),
		PrecipPrimitive().initialize(),
		PrecipPrimitive().initialize(),
		PrecipPrimitive().initialize(),
		PrecipPrimitive().initialize(),
		PrecipPrimitive().initialize(),
		PrecipPrimitive().initialize(),
		PrecipPrimitive().initialize(),
		LightningPrimitive().initialize(),
		FogPrimitive().initialize()
	]

	// Store layer instance key in layer object for all frames
	for (var i = 0, n = this.frames.length; i < n; i++) {
		for (var j = 0, k = this.frames[i].length; j < k; j++) {
			var layer = this.frames[i][j];
			switch (layer.primitive) {
				case 'sun':
					layer.layer = 0;
					break;
				case 'moon':
					layer.layer = 1;
					break;
				case 'cloud':
					layer.layer = layer.flip ? 2 : 3;
					break;
				case 'raindrop':
					layer.layer = j + 2;
					break;
				case 'sleet':
					layer.layer = j + 5;
					break;
				case 'snowflake':
					layer.layer = j + 8;
					break;
				case 'lightning':
					layer.layer = 13;
					break;
				case 'fog':
					layer.layer = 14;
					break;
			}
		}
	}
	this.timeline = generateTimeline(this.frames, this.layers);
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