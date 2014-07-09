var CelestialPrimitive = require('../primitives/CelestialPrimitive')
	, CloudPrimitive = require('../primitives/CloudPrimitive')
	, PrecipPrimitive = require('../primitives/PrecipPrimitive')
	, LightningPrimitive = require('../primitives/LightningPrimitive')
	, FogPrimitive = require('../primitives/FogPrimitive')
	, random = require('number-utils').rangedRandom

	, anims = {}
	, length = 0
	, uid = 1
	, last = 0
	, running = false

	, FRAME_DURATION = 2000
	, TRANSITION_DURATION = 500;

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
 * Render 'anim' at frame 'tick'
 * @param {Anim} anim
 * @param {Number} tick
 */
function render (anim, tick) {
	var time = (anim.time + tick) % anim.duration
		, last = time - tick
		, layer, options;

	anim.time = time;

	// Trigger keyframe
	for (var keyframe in anim.timeline) {
		if (keyframe == time
			|| keyframe > last && time > keyframe) {
				for (var i = 0, n = anim.timeline[keyframe].length; i < n; i++) {
					layer = anim.timeline[keyframe][i];
					layer.instance[layer.action](layer.duration, layer.options);
				}
		}
	}

	// Clear canvas
	anim.ctx.clearRect(0, 0, anim.width, anim.height);

	// Update all layers
	for (var i = 0, n = anim.layers.length; i < n; i++) {
		layer = anim.layers[i]
		layer.update(tick);
		layer.render(anim.ctx);
	}
}

/**
 * Generate a timeline from 'frames'
 * @param {Object} frames
 * @param {Object} layers
 * @returns {Object}
 */
function generateTimeline (frames, layers) {
	var timeline = {}
		, time = 0
		, layer, prevLayer, nextLayer;

	for (var i = 0, n = frames.length; i < n; i++) {
		for (var j = 0, k = frames[i].length; j < k; j++) {
			layer = frames[i][j];
			// Sun/Moon/Clouds/Fog
			if (layer.idx <= 4) {
				// Determine if layer active in previous and next frame
				prevLayer = contains(frames[(i == 0) ? n - 1: i - 1], layer.idx);
				nextLayer = contains(frames[(i + 1) % n], layer.idx);
				// Show at beginning of frame
				generateKeyframe(timeline, time, {
					instance: layers[layer.idx],
					action: 'show',
					duration: TRANSITION_DURATION,
					options: layer
				})
				// Move if in next frame
				if (nextLayer) {
					generateKeyframe(timeline, time + FRAME_DURATION - TRANSITION_DURATION, {
						instance: layers[layer.idx],
						action: 'move',
						duration: TRANSITION_DURATION,
						options: nextLayer
					})
				// Hide with overlap
				} else {
					generateKeyframe(timeline, time + FRAME_DURATION - (TRANSITION_DURATION * 0.5), {
						instance: layers[layer.idx],
						action: 'hide',
						duration: TRANSITION_DURATION,
						options: layer
					})
				}
			// Rain/Sleet/Snow/Lightning
			} else {
				generateKeyframe(timeline, time + (TRANSITION_DURATION * random(0.3, 0.5)), {
					instance: layers[layer.idx],
					action: 'show',
					duration: TRANSITION_DURATION * random(0.4, 0.6),
					options: layer
				})
				generateKeyframe(timeline, time + (TRANSITION_DURATION * random(1.3, 1.5)), {
					instance: layers[layer.idx],
					action: 'hide',
					duration: TRANSITION_DURATION * random(0.4, 0.6),
					options: layer
				})
				generateKeyframe(timeline, time + (TRANSITION_DURATION * random(2.3, 2.5)), {
					instance: layers[layer.idx],
					action: 'show',
					duration: TRANSITION_DURATION * random(0.4, 0.6),
					options: layer
				})
				generateKeyframe(timeline, time + (TRANSITION_DURATION * random(3.3, 3.5)), {
					instance: layers[layer.idx],
					action: 'hide',
					duration: TRANSITION_DURATION * random(0.4, 0.6),
					options: layer
				})
			}
		}
		time += FRAME_DURATION;
	}

	return timeline;
}

/**
 * Generate keyframe for 'timeline' at 'time' with 'data'
 * @param {Object} timeline
 * @param {time} time
 * @param {Object} data
 */
function generateKeyframe (timeline, time, data) {
	if (timeline[time] == null) timeline[time] = [];
	timeline[time].push(data);
}

/**
 * Determine if 'idx' in 'layers'
 * @param {Array} layers
 * @param {Number} idx
 * @returns {Object|false}
 */
function contains (layers, idx) {
	for (var i = 0, n = layers.length; i < n; i++) {
		if (layers[i].idx === idx) return layers[i];
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
		// Sun
		CelestialPrimitive().initialize(),
		// Moon
		CelestialPrimitive().initialize(),
		// Cloud back
		CloudPrimitive().initialize(),
		// Cloud front
		CloudPrimitive().initialize(),
		// Fog
		FogPrimitive().initialize(),
		// Raindrop 1
		PrecipPrimitive().initialize(),
		// Raindrop 2
		PrecipPrimitive().initialize(),
		// Raindrop 3
		PrecipPrimitive().initialize(),
		// Sleet 1
		PrecipPrimitive().initialize(),
		// Sleet 2
		PrecipPrimitive().initialize(),
		// Sleet 3
		PrecipPrimitive().initialize(),
		// Snowflake 1
		PrecipPrimitive().initialize(),
		// Snowflake 2
		PrecipPrimitive().initialize(),
		// Snowflake 3
		PrecipPrimitive().initialize(),
		// Lightning
		LightningPrimitive().initialize()
	]

	// Store layer instance key in layer object for all frames
	for (var i = 0, n = this.frames.length; i < n; i++) {
		for (var j = 0, k = this.frames[i].length; j < k; j++) {
			var layer = this.frames[i][j];
			switch (layer.primitive) {
				case 'sun':
					layer.idx = 0;
					break;
				case 'moon':
					layer.idx = 1;
					break;
				case 'cloud':
					layer.idx = layer.flip ? 2 : 3;
					break;
				case 'fog':
					layer.idx = 4;
					break;
				case 'raindrop':
					layer.idx = j + 3;
					break;
				case 'sleet':
					layer.idx = j + 6;
					break;
				case 'snowflake':
					layer.idx = j + 9;
					break;
				case 'lightning':
					layer.idx = 14;
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