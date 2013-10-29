var sun = require('./primitives/sunPrimitive')
	, moon = require('./primitives/moonPrimitive')
	, cloud = require('./primitives/cloudPrimitive')
	, raindrop = require('./primitives/raindropPrimitive')
	, snowflake = require('./primitives/snowflakePrimitive')
	, fog = require('./primitives/fogPrimitive')
	, lightning = require('./primitives/lightningPrimitive')

	, FORMULA = {
			// Sun
			'01d': [
				{
					primitive: sun,
					x: 10,
					y: 10
				}
			],
			'02d': [
				{
					primitive: sun,
					x: 10,
					y: 10
				},
				{
					primitive: cloud,
					x: 14,
					y: 62,
					small: true,
					tint: 0.2
				}
			],
			'03d': [
				{
					primitive: sun,
					x: 9,
					y: 15,
					small: true
				},
				{
					primitive: cloud,
					x: 10,
					y: 38,
					tint: 0.4
				}
			],
			'05d': [
				{
					primitive: sun,
					x: 9,
					y: 10,
					small: true
				},
				{
					primitive: cloud,
					x: 10,
					y: 34,
					tint: 0.5
				},
				{
					primitive: raindrop,
					x: 65,
					y: 76
				},
				{
					primitive: raindrop,
					x: 50,
					y: 73
				}
			],
			'07d': [
				{
					primitive: sun,
					x: 9,
					y: 10,
					small: true
				},
				{
					primitive: cloud,
					x: 10,
					y: 34,
					tint: 0.5
				},
				{
					primitive: raindrop,
					x: 59,
					y: 76
				},
				{
					primitive: snowflake,
					x: 38,
					y: 73
				}
			],
			'08d': [
				{
					primitive: sun,
					x: 9,
					y: 10,
					small: true
				},
				{
					primitive: cloud,
					x: 10,
					y: 34,
					tint: 0.5
				},
				{
					primitive: snowflake,
					x: 27,
					y: 76
				},
				{
					primitive: snowflake,
					x: 43,
					y: 73
				}
			],
			'06d': [
				{
					primitive: sun,
					x: 9,
					y: 2,
					small: true
				},
				{
					primitive: cloud,
					x: 10,
					y: 26,
					tint: 0.5
				},
				{
					primitive: lightning,
					x: 28,
					y: 69
				},
				{
					primitive: raindrop,
					x: 61,
					y: 66
				}
			],
			'20d': [
				{
					primitive: sun,
					x: 9,
					y: 2,
					small: true
				},
				{
					primitive: cloud,
					x: 10,
					y: 26,
					tint: 0.5
				},
				{
					primitive: lightning,
					x: 20,
					y: 69
				},
				{
					primitive: raindrop,
					x: 70,
					y: 68
				},
				{
					primitive: snowflake,
					x: 49,
					y: 66
				}
			],
			'21d': [
				{
					primitive: sun,
					x: 9,
					y: 2,
					small: true
				},
				{
					primitive: cloud,
					x: 10,
					y: 26,
					tint: 0.5
				},
				{
					primitive: lightning,
					x: 28,
					y: 69
				},
				{
					primitive: snowflake,
					x: 57,
					y: 65
				}
			],

			// Winter sun
			'01m': [
				{
					primitive: sun,
					x: 10,
					y: 35,
					winter: true
				}
			],
			'02m': [
				{
					primitive: sun,
					x: 10,
					y: 30,
					winter: true
				},
				{
					primitive: cloud,
					x: 15,
					y: 50,
					small: true,
					tint: 0.2
				}
			],
			'03m': [
				{
					primitive: sun,
					x: 8,
					y: 28,
					small: true,
					winter: true
				},
				{
					primitive: cloud,
					x: 10,
					y: 38,
					tint: 0.4
				}
			],
			'05m': [
				{
					primitive: sun,
					x: 8,
					y: 24,
					small: true,
					winter: true
				},
				{
					primitive: cloud,
					x: 10,
					y: 34,
					tint: 0.5
				},
				{
					primitive: raindrop,
					x: 65,
					y: 76
				},
				{
					primitive: raindrop,
					x: 50,
					y: 73
				}
			],
			'07m': [
				{
					primitive: sun,
					x: 8,
					y: 24,
					small: true,
					winter: true
				},
				{
					primitive: cloud,
					x: 10,
					y: 34,
					tint: 0.5
				},
				{
					primitive: raindrop,
					x: 59,
					y: 76
				},
				{
					primitive: snowflake,
					x: 38,
					y: 73
				}
			],
			'08m': [
				{
					primitive: sun,
					x: 8,
					y: 24,
					small: true,
					winter: true
				},
				{
					primitive: cloud,
					x: 10,
					y: 34,
					tint: 0.5
				},
				{
					primitive: snowflake,
					x: 27,
					y: 76
				},
				{
					primitive: snowflake,
					x: 43,
					y: 73
				}
			],
			'06m': [
				{
					primitive: sun,
					x: 8,
					y: 16,
					small: true,
					winter: true
				},
				{
					primitive: cloud,
					x: 10,
					y: 26,
					tint: 0.5
				},
				{
					primitive: lightning,
					x: 28,
					y: 69
				},
				{
					primitive: raindrop,
					x: 61,
					y: 66
				}
			],
			'20m': [
				{
					primitive: sun,
					x: 8,
					y: 16,
					small: true,
					winter: true
				},
				{
					primitive: cloud,
					x: 10,
					y: 26,
					tint: 0.5
				},
				{
					primitive: lightning,
					x: 20,
					y: 69
				},
				{
					primitive: raindrop,
					x: 70,
					y: 68
				},
				{
					primitive: snowflake,
					x: 49,
					y: 66
				}
			],
			'21m': [
				{
					primitive: sun,
					x: 8,
					y: 16,
					small: true,
					winter: true
				},
				{
					primitive: cloud,
					x: 10,
					y: 26,
					tint: 0.5
				},
				{
					primitive: lightning,
					x: 28,
					y: 69
				},
				{
					primitive: snowflake,
					x: 57,
					y: 65
				}
			],

			// Moon
			'01n': [
				{
					primitive: moon,
					x: 25,
					y: 25
				}
			],
			'02n': [
				{
					primitive: moon,
					x: 25,
					y: 22
				},
				{
					primitive: cloud,
					x: 15,
					y: 54,
					small: true,
					tint: 0.25
				}
			],
			'03n': [
				{
					primitive: moon,
					x: 10,
					y: 24,
					small: true
				},
				{
					primitive: cloud,
					x: 10,
					y: 38,
					tint: 0.4
				}
			],
			'05n': [
				{
					primitive: moon,
					x: 10,
					y: 19,
					small: true
				},
				{
					primitive: cloud,
					x: 10,
					y: 34,
					tint: 0.5
				},
				{
					primitive: raindrop,
					x: 65,
					y: 76
				},
				{
					primitive: raindrop,
					x: 50,
					y: 73
				}
			],
			'07n': [
				{
					primitive: moon,
					x: 10,
					y: 19,
					small: true
				},
				{
					primitive: cloud,
					x: 10,
					y: 34,
					tint: 0.5
				},
				{
					primitive: raindrop,
					x: 59,
					y: 76
				},
				{
					primitive: snowflake,
					x: 38,
					y: 73
				}
			],
			'08n': [
				{
					primitive: moon,
					x: 10,
					y: 19,
					small: true
				},
				{
					primitive: cloud,
					x: 10,
					y: 34,
					tint: 0.5
				},
				{
					primitive: snowflake,
					x: 27,
					y: 76
				},
				{
					primitive: snowflake,
					x: 43,
					y: 73
				}
			],
			'06n': [
				{
					primitive: moon,
					x: 10,
					y: 11,
					small: true
				},
				{
					primitive: cloud,
					x: 10,
					y: 26,
					tint: 0.5
				},
				{
					primitive: lightning,
					x: 28,
					y: 69
				},
				{
					primitive: raindrop,
					x: 61,
					y: 66
				}
			],
			'20n': [
				{
					primitive: moon,
					x: 10,
					y: 11,
					small: true
				},
				{
					primitive: cloud,
					x: 10,
					y: 26,
					tint: 0.5
				},
				{
					primitive: lightning,
					x: 20,
					y: 69
				},
				{
					primitive: raindrop,
					x: 70,
					y: 68
				},
				{
					primitive: snowflake,
					x: 49,
					y: 66
				}
			],
			'21n': [
				{
					primitive: moon,
					x: 10,
					y: 11,
					small: true
				},
				{
					primitive: cloud,
					x: 10,
					y: 26,
					tint: 0.5
				},
				{
					primitive: lightning,
					x: 28,
					y: 69
				},
				{
					primitive: snowflake,
					x: 57,
					y: 65
				}
			],

			// Cloud
			'15': [
				{
					primitive: fog,
					x: 10,
					y: 25,
					tint: 0.25
				}
			],
			'04': [
				{
					primitive: cloud,
					x: 4,
					y: 22,
					flip: true,
					tint: 0.15
				},
				{
					primitive: cloud,
					x: 10,
					y: 41,
					tint: 0.25
				}
			],
			'09': [
				{
					primitive: cloud,
					x: 4,
					y: 15,
					flip: true,
					tint: 0.35
				},
				{
					primitive: cloud,
					x: 10,
					y: 32,
					tint: 0.5
				},
				{
					primitive: raindrop,
					x: 66,
					y: 74
				},
				{
					primitive: raindrop,
					x: 50,
					y: 71
				}
			],
			'10': [
				{
					primitive: cloud,
					x: 4,
					y: 15,
					flip: true,
					tint: 0.45
				},
				{
					primitive: cloud,
					x: 10,
					y: 32,
					tint: 0.6
				},
				{
					primitive: raindrop,
					x: 44,
					y: 75
				},
				{
					primitive: raindrop,
					x: 73,
					y: 75
				},
				{
					primitive: raindrop,
					x: 58,
					y: 70
				}
			],
			'12': [
				{
					primitive: cloud,
					x: 4,
					y: 15,
					flip: true,
					tint: 0.45
				},
				{
					primitive: cloud,
					x: 10,
					y: 32,
					tint: 0.6
				},
				{
					primitive: snowflake,
					x: 30,
					y: 73
				},
				{
					primitive: raindrop,
					x: 67,
					y: 73
				},
				{
					primitive: snowflake,
					x: 46,
					y: 69
				}
			],
			'13': [
				{
					primitive: cloud,
					x: 4,
					y: 15,
					flip: true,
					tint: 0.45
				},
				{
					primitive: cloud,
					x: 10,
					y: 32,
					tint: 0.6
				},
				{
					primitive: snowflake,
					x: 19,
					y: 76
				},
				{
					primitive: snowflake,
					x: 34,
					y: 69
				},
				{
					primitive: snowflake,
					x: 52,
					y: 72
				}
			],
			'22': [
				{
					primitive: cloud,
					x: 4,
					y: 9,
					flip: true,
					tint: 0.35
				},
				{
					primitive: cloud,
					x: 10,
					y: 27,
					tint: 0.5
				},
				{
					primitive: lightning,
					x: 27,
					y: 70
				},
				{
					primitive: raindrop,
					x: 62,
					y: 68
				}
			],
			'11': [
				{
					primitive: cloud,
					x: 4,
					y: 19,
					small: true,
					tint: 0.35
				},
				{
					primitive: cloud,
					x: 0,
					y: 36,
					tint: 0.5
				},
				{
					primitive: lightning,
					x: 10,
					y: 74
				},
				{
					primitive: raindrop,
					x: 48,
					y: 80
				},
				{
					primitive: raindrop,
					x: 86,
					y: 81
				},
				{
					primitive: raindrop,
					x: 66,
					y: 76
				}
			],
			'23': [
				{
					primitive: cloud,
					x: 4,
					y: 9,
					flip: true,
					tint: 0.35
				},
				{
					primitive: cloud,
					x: 10,
					y: 27,
					tint: 0.5
				},
				{
					primitive: lightning,
					x: 20,
					y: 71
				},
				{
					primitive: raindrop,
					x: 70,
					y: 69
				},
				{
					primitive: snowflake,
					x: 49,
					y: 66
				}
			],
			'14': [
				{
					primitive: cloud,
					x: 4,
					y: 9,
					flip: true,
					tint: 0.35
				},
				{
					primitive: cloud,
					x: 10,
					y: 27,
					tint: 0.5
				},
				{
					primitive: lightning,
					x: 28,
					y: 71
				},
				{
					primitive: snowflake,
					x: 57,
					y: 66
				}
			]
		};

module.exports = WeatherSymbol;

/**
 * Constructor
 */
function WeatherSymbol (scale, canvas) {
	this.scale = scale || 1;
	this.canvas = canvas;
}

/**
 * Draw symbol into 'canvas'
 * Takes data from 'data-' attributes
 * @param {CanvasElement} canvas
 */
WeatherSymbol.prototype.draw = function(canvas) {
	canvas = this.canvas || canvas;
	if (!canvas) return;

	var ctx = canvas.getContext('2d')
		, attr = canvas.getAttribute('data-id').split('.')
		, id = attr[0]
		, phase = (attr.length > 1)
			? parseInt(attr[1],10) + 1
			: 0
		, formula = FORMULA[id]
		, w = canvas.offsetWidth
		, h = canvas.offsetHeight
		, scale = (w/100) * this.scale
		, layer, options;
	canvas.width = w * this.scale;
	canvas.height = h * this.scale;

	if (formula) {
		for (var i = 0, n = formula.length; i < n; i++) {
			layer = formula[i];
			options = {
				x: Math.round(layer.x * scale),
				y: Math.round(layer.y * scale),
				scale: scale,
				small: layer.small,
				flip: layer.flip,
				tint: layer.tint,
				winter: layer.winter,
				phase: phase,
				width: w * this.scale,
				height: h * this.scale
			};
			layer.primitive.render(ctx, options);
		}
	}
};
