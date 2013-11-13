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
					x: 0,
					y: 0
				}
			],
			'02d': [
				{
					primitive: sun,
					x: 0,
					y: 0
				},
				{
					primitive: cloud,
					x: 5,
					y: 55,
					scale: 0.6,
					flip: true,
					tint: 0.15
				}
			],
			'03d': [
				{
					primitive: sun,
					x: 5,
					y: 15,
					scale: 0.6
				},
				{
					primitive: cloud,
					x: 0,
					y: 35,
					tint: 0.35
				}
			],
			'05d': [
				{
					primitive: sun,
					x: 5,
					y: 5,
					scale: 0.6
				},
				{
					primitive: cloud,
					x: 0,
					y: 25,
					tint: 0.5
				},
				{
					primitive: raindrop,
					x: 70,
					y: 74
				},
				{
					primitive: raindrop,
					x: 52,
					y: 71
				}
			],
			'07d': [
				{
					primitive: sun,
					x: 5,
					y: 5,
					scale: 0.6
				},
				{
					primitive: cloud,
					x: 0,
					y: 25,
					tint: 0.5
				},
				{
					primitive: raindrop,
					x: 61,
					y: 74
				},
				{
					primitive: snowflake,
					x: 33,
					y: 71
				}
			],
			'08d': [
				{
					primitive: sun,
					x: 5,
					y: 5,
					scale: 0.6
				},
				{
					primitive: cloud,
					x: 0,
					y: 25,
					tint: 0.5
				},
				{
					primitive: snowflake,
					x: 22,
					y: 74
				},
				{
					primitive: snowflake,
					x: 43,
					y: 71
				}
			],
			'06d': [
				{
					primitive: sun,
					x: 5,
					y: 5,
					scale: 0.6
				},
				{
					primitive: lightning,
					x: 30,
					y: 75
				},
				{
					primitive: cloud,
					x: 0,
					y: 25,
					tint: 0.5
				},
				{
					primitive: raindrop,
					x: 63,
					y: 71
				}
			],
			'20d': [
				{
					primitive: sun,
					x: 5,
					y: 5,
					scale: 0.6
				},
				{
					primitive: lightning,
					x: 14,
					y: 75
				},
				{
					primitive: cloud,
					x: 0,
					y: 25,
					tint: 0.5
				},
				{
					primitive: raindrop,
					x: 72,
					y: 74
				},
				{
					primitive: snowflake,
					x: 44,
					y: 71
				}
			],
			'21d': [
				{
					primitive: sun,
					x: 5,
					y: 5,
					scale: 0.6
				},
				{
					primitive: lightning,
					x: 14,
					y: 75
				},
				{
					primitive: cloud,
					x: 0,
					y: 25,
					tint: 0.5
				},
				{
					primitive: snowflake,
					x: 44,
					y: 71
				}
			],

			// Winter sun
			'01m': [
				{
					primitive: sun,
					x: 0,
					y: 30,
					winter: true
				}
			],
			'02m': [
				{
					primitive: sun,
					x: 0,
					y: 30,
					winter: true
				},
				{
					primitive: cloud,
					x: 5,
					y: 45,
					scale: 0.6,
					flip: true,
					tint: 0.15
				}
			],
			'03m': [
				{
					primitive: sun,
					x: 10,
					y: 24,
					scale: 0.6,
					winter: true
				},
				{
					primitive: cloud,
					x: 0,
					y: 35,
					tint: 0.35
				}
			],
			'05m': [
				{
					primitive: sun,
					x: 10,
					y: 14,
					scale: 0.6,
					winter: true
				},
				{
					primitive: cloud,
					x: 0,
					y: 25,
					tint: 0.5
				},
				{
					primitive: raindrop,
					x: 70,
					y: 74
				},
				{
					primitive: raindrop,
					x: 52,
					y: 71
				}
			],
			'07m': [
				{
					primitive: sun,
					x: 10,
					y: 14,
					scale: 0.6,
					winter: true
				},
				{
					primitive: cloud,
					x: 0,
					y: 25,
					tint: 0.5
				},
				{
					primitive: raindrop,
					x: 61,
					y: 74
				},
				{
					primitive: snowflake,
					x: 33,
					y: 71
				}
			],
			'08m': [
				{
					primitive: sun,
					x: 10,
					y: 14,
					scale: 0.6,
					winter: true
				},
				{
					primitive: cloud,
					x: 0,
					y: 25,
					tint: 0.5
				},
				{
					primitive: snowflake,
					x: 22,
					y: 74
				},
				{
					primitive: snowflake,
					x: 43,
					y: 71
				}
			],
			'06m': [
				{
					primitive: sun,
					x: 10,
					y: 14,
					scale: 0.6,
					winter: true
				},
				{
					primitive: lightning,
					x: 30,
					y: 75
				},
				{
					primitive: cloud,
					x: 0,
					y: 25,
					tint: 0.5
				},
				{
					primitive: raindrop,
					x: 63,
					y: 71
				}
			],
			'20m': [
				{
					primitive: sun,
					x: 10,
					y: 14,
					scale: 0.6,
					winter: true
				},
				{
					primitive: lightning,
					x: 14,
					y: 75
				},
				{
					primitive: cloud,
					x: 0,
					y: 25,
					tint: 0.5
				},
				{
					primitive: raindrop,
					x: 72,
					y: 74
				},
				{
					primitive: snowflake,
					x: 44,
					y: 71
				}
			],
			'21m': [
				{
					primitive: sun,
					x: 10,
					y: 14,
					scale: 0.6,
					winter: true
				},
				{
					primitive: lightning,
					x: 14,
					y: 75
				},
				{
					primitive: cloud,
					x: 0,
					y: 25,
					tint: 0.5
				},
				{
					primitive: snowflake,
					x: 44,
					y: 71
				}
			],

			// Moon
			'01n': [
				{
					primitive: moon,
					x: 20,
					y: 20
				}
			],
			'02n': [
				{
					primitive: moon,
					x: 20,
					y: 20
				},
				{
					primitive: cloud,
					x: 5,
					y: 55,
					scale: 0.6,
					flip: true,
					tint: 0.15
				}
			],
			'03n': [
				{
					primitive: moon,
					x: 15,
					y: 22,
					scale: 0.6
				},
				{
					primitive: cloud,
					x: 0,
					y: 35,
					tint: 0.35
				}
			],
			'05n': [
				{
					primitive: moon,
					x: 15,
					y: 12,
					scale: 0.6
				},
				{
					primitive: cloud,
					x: 0,
					y: 25,
					tint: 0.5
				},
				{
					primitive: raindrop,
					x: 70,
					y: 74
				},
				{
					primitive: raindrop,
					x: 52,
					y: 71
				}
			],
			'07n': [
				{
					primitive: moon,
					x: 15,
					y: 12,
					scale: 0.6
				},
				{
					primitive: cloud,
					x: 0,
					y: 25,
					tint: 0.5
				},
				{
					primitive: raindrop,
					x: 61,
					y: 74
				},
				{
					primitive: snowflake,
					x: 33,
					y: 71
				}
			],
			'08n': [
				{
					primitive: moon,
					x: 15,
					y: 12,
					scale: 0.6
				},
				{
					primitive: cloud,
					x: 0,
					y: 25,
					tint: 0.5
				},
				{
					primitive: snowflake,
					x: 22,
					y: 74
				},
				{
					primitive: snowflake,
					x: 43,
					y: 71
				}
			],
			'06n': [
				{
					primitive: moon,
					x: 15,
					y: 12,
					scale: 0.6
				},
				{
					primitive: lightning,
					x: 30,
					y: 75
				},
				{
					primitive: cloud,
					x: 0,
					y: 25,
					tint: 0.5
				},
				{
					primitive: raindrop,
					x: 63,
					y: 71
				}
			],
			'20n': [
				{
					primitive: moon,
					x: 15,
					y: 12,
					scale: 0.6
				},
				{
					primitive: lightning,
					x: 14,
					y: 75
				},
				{
					primitive: cloud,
					x: 0,
					y: 25,
					tint: 0.5
				},
				{
					primitive: raindrop,
					x: 72,
					y: 74
				},
				{
					primitive: snowflake,
					x: 44,
					y: 71
				}
			],
			'21n': [
				{
					primitive: moon,
					x: 15,
					y: 12,
					scale: 0.6
				},
				{
					primitive: lightning,
					x: 14,
					y: 75
				},
				{
					primitive: cloud,
					x: 0,
					y: 25,
					tint: 0.5
				},
				{
					primitive: snowflake,
					x: 44,
					y: 71
				}
			],

			// Cloud
			'15': [
				{
					primitive: fog,
					x: 5,
					y: 15,
					tint: 0.25
				}
			],
			'04': [
				{
					primitive: cloud,
					x: 5,
					y: 9,
					scale: 0.8,
					flip: true,
					tint: 0.15
				},
				{
					primitive: cloud,
					x: 0,
					y: 25,
					tint: 0.25
				}
			],
			'09': [
				{
					primitive: cloud,
					x: 5,
					y: 9,
					scale: 0.8,
					flip: true,
					tint: 0.35
				},
				{
					primitive: cloud,
					x: 0,
					y: 25,
					tint: 0.5
				},
				{
					primitive: raindrop,
					x: 70,
					y: 74
				},
				{
					primitive: raindrop,
					x: 52,
					y: 71
				}
			],
			'10': [
				{
					primitive: cloud,
					x: 5,
					y: 9,
					scale: 0.8,
					flip: true,
					tint: 0.5
				},
				{
					primitive: cloud,
					x: 0,
					y: 25,
					tint: 0.6
				},
				{
					primitive: raindrop,
					x: 76,
					y: 74
				},
				{
					primitive: raindrop,
					x: 41,
					y: 76
				},
				{
					primitive: raindrop,
					x: 58,
					y: 71
				}
			],
			'12': [
				{
					primitive: cloud,
					x: 5,
					y: 9,
					scale: 0.8,
					flip: true,
					tint: 0.4
				},
				{
					primitive: cloud,
					x: 0,
					y: 25,
					tint: 0.5
				},
				{
					primitive: raindrop,
					x: 69,
					y: 74
				},
				{
					primitive: snowflake,
					x: 20,
					y: 74
				},
				{
					primitive: snowflake,
					x: 41,
					y: 71
				}
			],
			'13': [
				{
					primitive: cloud,
					x: 5,
					y: 9,
					scale: 0.8,
					flip: true,
					tint: 0.5
				},
				{
					primitive: cloud,
					x: 0,
					y: 25,
					tint: 0.6
				},
				{
					primitive: snowflake,
					x: 54,
					y: 73
				},
				{
					primitive: snowflake,
					x: 12,
					y: 76
				},
				{
					primitive: snowflake,
					x: 33,
					y: 71
				}
			],
			'22': [
				{
					primitive: cloud,
					x: 5,
					y: 9,
					scale: 0.8,
					flip: true,
					tint: 0.4
				},
				{
					primitive: lightning,
					x: 30,
					y: 75
				},
				{
					primitive: cloud,
					x: 0,
					y: 25,
					tint: 0.5
				},
				{
					primitive: raindrop,
					x: 63,
					y: 71
				}
			],
			'11': [
				{
					primitive: cloud,
					x: 5,
					y: 9,
					scale: 0.8,
					flip: true,
					tint: 0.5
				},
				{
					primitive: lightning,
					x: 25,
					y: 75
				},
				{
					primitive: cloud,
					x: 0,
					y: 25,
					tint: 0.6
				},
				{
					primitive: raindrop,
					x: 76,
					y: 74
				},
				{
					primitive: raindrop,
					x: 58,
					y: 71
				}
			],
			'23': [
				{
					primitive: cloud,
					x: 5,
					y: 9,
					scale: 0.8,
					flip: true,
					tint: 0.4
				},
				{
					primitive: lightning,
					x: 14,
					y: 75
				},
				{
					primitive: cloud,
					x: 0,
					y: 25,
					tint: 0.5
				},
				{
					primitive: raindrop,
					x: 72,
					y: 74
				},
				{
					primitive: snowflake,
					x: 44,
					y: 71
				}
			],
			'14': [
				{
					primitive: cloud,
					x: 5,
					y: 9,
					scale: 0.8,
					flip: true,
					tint: 0.4
				},
				{
					primitive: lightning,
					x: 14,
					y: 75
				},
				{
					primitive: cloud,
					x: 0,
					y: 25,
					tint: 0.5
				},
				{
					primitive: snowflake,
					x: 44,
					y: 71
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
				scale: (layer.scale || 1) * scale,
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
