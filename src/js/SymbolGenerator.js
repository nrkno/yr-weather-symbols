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
					x: 0,
					y: 65,
					small: true,
					tint: 0.2
				}
			],
			'03d': [
				{
					primitive: sun,
					x: 0,
					y: 7,
					small: true
				},
				{
					primitive: cloud,
					x: 0,
					y: 44,
					tint: 0.4
				}
			],
			'05d': [
				{
					primitive: sun,
					x: 0,
					y: 0,
					small: true
				},
				{
					primitive: cloud,
					x: 0,
					y: 36,
					tint: 0.5
				},
				{
					primitive: raindrop,
					x: 52,
					y: 78
				},
				{
					primitive: raindrop,
					x: 72,
					y: 80
				}
			],
			'07d': [
				{
					primitive: sun,
					x: 0,
					y: 0,
					small: true
				},
				{
					primitive: cloud,
					x: 0,
					y: 36,
					tint: 0.5
				},
				{
					primitive: snowflake,
					x: 35,
					y: 78
				},
				{
					primitive: raindrop,
					x: 64,
					y: 82
				}
			],
			'08d': [
				{
					primitive: sun,
					x: 0,
					y: 0,
					small: true
				},
				{
					primitive: cloud,
					x: 0,
					y: 36,
					tint: 0.5
				},
				{
					primitive: snowflake,
					x: 20,
					y: 82
				},
				{
					primitive: snowflake,
					x: 42,
					y: 78
				}
			],
			'06d': [
				{
					primitive: sun,
					x: 0,
					y: 0,
					small: true
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
					x: 52,
					y: 78
				},
				{
					primitive: raindrop,
					x: 72,
					y: 80
				}
			],
			'20d': [
				{
					primitive: sun,
					x: 0,
					y: 0,
					small: true
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
					primitive: snowflake,
					x: 44,
					y: 78
				},
				{
					primitive: raindrop,
					x: 72,
					y: 82
				}
			],
			'21d': [
				{
					primitive: sun,
					x: 0,
					y: 0,
					small: true
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
					primitive: snowflake,
					x: 42,
					y: 82
				},
				{
					primitive: snowflake,
					x: 64,
					y: 78
				}
			],

			// Winter sun
			'16': [
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
					y: 32,
					winter: true
				},
				{
					primitive: cloud,
					x: 0,
					y: 60,
					small: true,
					tint: 0.2
				}
			],
			'17': [
				{
					primitive: sun,
					x: 0,
					y: 22,
					small: true,
					winter: true
				},
				{
					primitive: cloud,
					x: 0,
					y: 44,
					tint: 0.4
				}
			],
			'18': [
				{
					primitive: sun,
					x: 0,
					y: 16,
					small: true,
					winter: true
				},
				{
					primitive: cloud,
					x: 0,
					y: 36,
					tint: 0.5
				},
				{
					primitive: raindrop,
					x: 52,
					y: 78
				},
				{
					primitive: raindrop,
					x: 72,
					y: 80
				}
			],
			'07m': [
				{
					primitive: sun,
					x: 0,
					y: 16,
					small: true,
					winter: true
				},
				{
					primitive: cloud,
					x: 0,
					y: 36,
					tint: 0.5
				},
				{
					primitive: snowflake,
					x: 35,
					y: 78
				},
				{
					primitive: raindrop,
					x: 64,
					y: 82
				}
			],
			'19': [
				{
					primitive: sun,
					x: 0,
					y: 16,
					small: true,
					winter: true
				},
				{
					primitive: cloud,
					x: 0,
					y: 36,
					tint: 0.5
				},
				{
					primitive: snowflake,
					x: 20,
					y: 82
				},
				{
					primitive: snowflake,
					x: 42,
					y: 78
				}
			],
			'06m': [
				{
					primitive: sun,
					x: 0,
					y: 16,
					small: true,
					winter: true
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
					x: 52,
					y: 78
				},
				{
					primitive: raindrop,
					x: 72,
					y: 80
				}
			],
			'20m': [
				{
					primitive: sun,
					x: 0,
					y: 16,
					small: true,
					winter: true
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
					primitive: snowflake,
					x: 44,
					y: 78
				},
				{
					primitive: raindrop,
					x: 72,
					y: 82
				}
			],
			'21m': [
				{
					primitive: sun,
					x: 0,
					y: 16,
					small: true,
					winter: true
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
					primitive: snowflake,
					x: 42,
					y: 82
				},
				{
					primitive: snowflake,
					x: 64,
					y: 78
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
					x: 0,
					y: 65,
					small: true,
					tint: 0.2
				}
			],
			'03n': [
				{
					primitive: moon,
					x: 10,
					y: 16,
					small: true
				},
				{
					primitive: cloud,
					x: 0,
					y: 44,
					tint: 0.4
				}
			],
			'05n': [
				{
					primitive: moon,
					x: 10,
					y: 8,
					small: true
				},
				{
					primitive: cloud,
					x: 0,
					y: 36,
					tint: 0.5
				},
				{
					primitive: raindrop,
					x: 52,
					y: 78
				},
				{
					primitive: raindrop,
					x: 72,
					y: 80
				}
			],
			'07n': [
				{
					primitive: moon,
					x: 10,
					y: 8,
					small: true
				},
				{
					primitive: cloud,
					x: 0,
					y: 36,
					tint: 0.5
				},
				{
					primitive: snowflake,
					x: 35,
					y: 78
				},
				{
					primitive: raindrop,
					x: 64,
					y: 82
				}
			],
			'08n': [
				{
					primitive: moon,
					x: 10,
					y: 8,
					small: true
				},
				{
					primitive: cloud,
					x: 0,
					y: 36,
					tint: 0.5
				},
				{
					primitive: snowflake,
					x: 20,
					y: 82
				},
				{
					primitive: snowflake,
					x: 42,
					y: 78
				}
			],
			'06n': [
				{
					primitive: moon,
					x: 10,
					y: 8,
					small: true
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
					x: 52,
					y: 78
				},
				{
					primitive: raindrop,
					x: 72,
					y: 80
				}
			],
			'20n': [
				{
					primitive: moon,
					x: 10,
					y: 8,
					small: true
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
					primitive: snowflake,
					x: 44,
					y: 78
				},
				{
					primitive: raindrop,
					x: 72,
					y: 82
				}
			],
			'21n': [
				{
					primitive: moon,
					x: 10,
					y: 8,
					small: true
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
					primitive: snowflake,
					x: 42,
					y: 82
				},
				{
					primitive: snowflake,
					x: 64,
					y: 78
				}
			],

			// Cloud
			'15': [
				{
					primitive: fog,
					x: 0,
					y: 20,
					tint: 0.4
				}
			],
			'04': [
				{
					primitive: cloud,
					x: 4,
					y: 26,
					small: true,
					tint: 0.25
				},
				{
					primitive: cloud,
					x: 0,
					y: 44,
					tint: 0.4
				}
			],
			'09': [
				{
					primitive: cloud,
					x: 4,
					y: 19,
					small: true,
					tint: 0.45
				},
				{
					primitive: cloud,
					x: 0,
					y: 36,
					tint: 0.6
				},
				{
					primitive: raindrop,
					x: 52,
					y: 78
				},
				{
					primitive: raindrop,
					x: 72,
					y: 80
				}
			],
			'10': [
				{
					primitive: cloud,
					x: 4,
					y: 19,
					small: true,
					tint: 0.45
				},
				{
					primitive: cloud,
					x: 0,
					y: 36,
					tint: 0.6
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
			'12': [
				{
					primitive: cloud,
					x: 4,
					y: 19,
					small: true,
					tint: 0.45
				},
				{
					primitive: cloud,
					x: 0,
					y: 36,
					tint: 0.6
				},
				{
					primitive: snowflake,
					x: 22,
					y: 82
				},
				{
					primitive: snowflake,
					x: 44,
					y: 78
				},
				{
					primitive: raindrop,
					x: 71,
					y: 81
				}
			],
			'13': [
				{
					primitive: cloud,
					x: 4,
					y: 19,
					small: true,
					tint: 0.45
				},
				{
					primitive: cloud,
					x: 0,
					y: 36,
					tint: 0.6
				},
				{
					primitive: snowflake,
					x: 12,
					y: 82
				},
				{
					primitive: snowflake,
					x: 34,
					y: 76
				},
				{
					primitive: snowflake,
					x: 54,
					y: 80
				}
			],
			'22': [
				{
					primitive: cloud,
					x: 4,
					y: 19,
					small: true,
					tint: 0.45
				},
				{
					primitive: cloud,
					x: 0,
					y: 36,
					tint: 0.6
				},
				{
					primitive: lightning,
					x: 10,
					y: 74
				},
				{
					primitive: raindrop,
					x: 52,
					y: 78
				},
				{
					primitive: raindrop,
					x: 72,
					y: 80
				}
			],
			'11': [
				{
					primitive: cloud,
					x: 4,
					y: 19,
					small: true,
					tint: 0.45
				},
				{
					primitive: cloud,
					x: 0,
					y: 36,
					tint: 0.6
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
					y: 19,
					small: true,
					tint: 0.45
				},
				{
					primitive: cloud,
					x: 0,
					y: 36,
					tint: 0.6
				},
				{
					primitive: lightning,
					x: 6,
					y: 74
				},
				{
					primitive: snowflake,
					x: 38,
					y: 80
				},
				{
					primitive: snowflake,
					x: 58,
					y: 76
				},
				{
					primitive: raindrop,
					x: 86,
					y: 81
				}
			],
			'14': [
				{
					primitive: cloud,
					x: 4,
					y: 19,
					small: true,
					tint: 0.45
				},
				{
					primitive: cloud,
					x: 0,
					y: 36,
					tint: 0.6
				},
				{
					primitive: lightning,
					x: 10,
					y: 74
				},
				{
					primitive: snowflake,
					x: 42,
					y: 80
				},
				{
					primitive: snowflake,
					x: 62,
					y: 76
				}
			]
		};

module.exports = SymbolGenerator;

/**
 * Constructor
 */
function SymbolGenerator (scale) {
	this.scale = scale || 1;
}

/**
 * Draw symbol into 'canvas'
 * Takes data from 'data-' attributes
 * @param {CanvasElement} canvas
 */
SymbolGenerator.prototype.draw = function(canvas) {
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
				tint: layer.tint,
				winter: layer.winter,
				phase: phase
			};
			layer.primitive.render(ctx, options);
		}
	}
};
