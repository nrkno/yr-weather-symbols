// Convert with http://www.professorcloud.com/svg-to-canvas/

var sun = require('./primitives/sunPrimitive')
	, moon = require('./primitives/moonPrimitive')
	, cloud = require('./primitives/cloudPrimitive')
	, raindrop = require('./primitives/raindropPrimitive')
	, sleet = require('./primitives/sleetPrimitive')
	, snowflake = require('./primitives/snowflakePrimitive')
	, fog = require('./primitives/fogPrimitive')
	, lightning = require('./primitives/lightningPrimitive')

	, DEFAULT_BG = '#ffffff'
	, FORMULA = {
			// Sun
			'01d': [
				{
					primitive: sun,
					x: 6,
					y: 6
				}
			],
			'02d': [
				{
					primitive: sun,
					x: 6,
					y: 6
				},
				{
					primitive: cloud,
					x: 8,
					y: 56,
					scale: 0.6,
					flip: true,
					tint: 0.1
				}
			],
			'03d': [
				{
					primitive: sun,
					x: 4,
					y: 7,
					scale: 0.6
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.1
				}
			],
			'40d': [
				{
					primitive: sun,
					x: 4,
					y: 7,
					scale: 0.6
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: raindrop,
					x: 45,
					y: 68
				}
			],
			'05d': [
				{
					primitive: sun,
					x: 4,
					y: 7,
					scale: 0.6
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: raindrop,
					x: 61,
					y: 72
				},
				{
					primitive: raindrop,
					x: 45,
					y: 68
				}
			],
			'41d': [
				{
					primitive: sun,
					x: 4,
					y: 7,
					scale: 0.6
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: raindrop,
					x: 71,
					y: 72
				},
				{
					primitive: raindrop,
					x: 61,
					y: 72
				},
				{
					primitive: raindrop,
					x: 45,
					y: 68
				}
			],
			'42d': [
				{
					primitive: sun,
					x: 4,
					y: 7,
					scale: 0.6
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: sleet,
					x: 36,
					y: 68
				}
			],
			'07d': [
				{
					primitive: sun,
					x: 4,
					y: 7,
					scale: 0.6
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: sleet,
					x: 52,
					y: 72
				},
				{
					primitive: sleet,
					x: 36,
					y: 68
				}
			],
			'43d': [
				{
					primitive: sun,
					x: 4,
					y: 7,
					scale: 0.6
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: sleet,
					x: 42,
					y: 72
				},
				{
					primitive: sleet,
					x: 52,
					y: 72
				},
				{
					primitive: sleet,
					x: 36,
					y: 68
				}
			],
			'44d': [
				{
					primitive: sun,
					x: 4,
					y: 7,
					scale: 0.6
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: snowflake,
					x: 22,
					y: 71
				}
			],
			'08d': [
				{
					primitive: sun,
					x: 4,
					y: 7,
					scale: 0.6
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: snowflake,
					x: 22,
					y: 71
				},
				{
					primitive: snowflake,
					x: 40,
					y: 69
				}
			],
			'45d': [
				{
					primitive: sun,
					x: 4,
					y: 7,
					scale: 0.6
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: snowflake,
					x: 12,
					y: 71
				},
				{
					primitive: snowflake,
					x: 22,
					y: 71
				},
				{
					primitive: snowflake,
					x: 40,
					y: 69
				}
			],
			'24d': [
				{
					primitive: sun,
					x: 4,
					y: 7,
					scale: 0.6
				},
				{
					primitive: lightning,
					x: 25,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: raindrop,
					x: 48,
					y: 68
				}
			],
			'06d': [
				{
					primitive: sun,
					x: 4,
					y: 7,
					scale: 0.6
				},
				{
					primitive: lightning,
					x: 25,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: raindrop,
					x: 64,
					y: 72
				},
				{
					primitive: raindrop,
					x: 48,
					y: 68
				}
			],
			'25d': [
				{
					primitive: sun,
					x: 4,
					y: 7,
					scale: 0.6
				},
				{
					primitive: lightning,
					x: 25,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: raindrop,
					x: 84,
					y: 72
				},
				{
					primitive: raindrop,
					x: 64,
					y: 72
				},
				{
					primitive: raindrop,
					x: 48,
					y: 68
				}
			],
			'26d': [
				{
					primitive: sun,
					x: 4,
					y: 7,
					scale: 0.6
				},
				{
					primitive: lightning,
					x: 17,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: sleet,
					x: 40,
					y: 68
				}
			],
			'20d': [
				{
					primitive: sun,
					x: 4,
					y: 7,
					scale: 0.6
				},
				{
					primitive: lightning,
					x: 17,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: sleet,
					x: 56,
					y: 72
				},
				{
					primitive: sleet,
					x: 40,
					y: 68
				}
			],
			'27d': [
				{
					primitive: sun,
					x: 4,
					y: 7,
					scale: 0.6
				},
				{
					primitive: lightning,
					x: 17,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: sleet,
					x: 76,
					y: 72
				},
				{
					primitive: sleet,
					x: 56,
					y: 72
				},
				{
					primitive: sleet,
					x: 40,
					y: 68
				}
			],
			'28d': [
				{
					primitive: sun,
					x: 4,
					y: 7,
					scale: 0.6
				},
				{
					primitive: lightning,
					x: 10,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: snowflake,
					x: 35,
					y: 71
				}
			],
			'21d': [
				{
					primitive: sun,
					x: 4,
					y: 7,
					scale: 0.6
				},
				{
					primitive: lightning,
					x: 10,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: snowflake,
					x: 53,
					y: 69
				},
				{
					primitive: snowflake,
					x: 35,
					y: 71
				}
			],
			'29d': [
				{
					primitive: sun,
					x: 4,
					y: 7,
					scale: 0.6
				},
				{
					primitive: lightning,
					x: 10,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: snowflake,
					x: 73,
					y: 69
				},
				{
					primitive: snowflake,
					x: 53,
					y: 69
				},
				{
					primitive: snowflake,
					x: 35,
					y: 71
				}
			],

			// Winter sun
			'01m': [
				{
					primitive: sun,
					x: 5,
					y: 32,
					winter: true
				}
			],
			'02m': [
				{
					primitive: sun,
					x: 5,
					y: 32,
					winter: true
				},
				{
					primitive: cloud,
					x: 8,
					y: 46,
					scale: 0.6,
					flip: true,
					tint: 0.1
				}
			],
			'03m': [
				{
					primitive: sun,
					x: 8,
					y: 20,
					scale: 0.6,
					winter: true
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.1
				}
			],
			'40m': [
				{
					primitive: sun,
					x: 8,
					y: 20,
					scale: 0.6,
					winter: true
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: raindrop,
					x: 45,
					y: 68
				}
			],
			'05m': [
				{
					primitive: sun,
					x: 8,
					y: 20,
					scale: 0.6,
					winter: true
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: raindrop,
					x: 61,
					y: 72
				},
				{
					primitive: raindrop,
					x: 45,
					y: 68
				}
			],
			'41m': [
				{
					primitive: sun,
					x: 8,
					y: 20,
					scale: 0.6,
					winter: true
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: raindrop,
					x: 71,
					y: 72
				},
				{
					primitive: raindrop,
					x: 61,
					y: 72
				},
				{
					primitive: raindrop,
					x: 45,
					y: 68
				}
			],
			'42m': [
				{
					primitive: sun,
					x: 8,
					y: 20,
					scale: 0.6,
					winter: true
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: sleet,
					x: 36,
					y: 68
				}
			],
			'07m': [
				{
					primitive: sun,
					x: 8,
					y: 20,
					scale: 0.6,
					winter: true
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: sleet,
					x: 52,
					y: 72
				},
				{
					primitive: sleet,
					x: 36,
					y: 68
				}
			],
			'43m': [
				{
					primitive: sun,
					x: 8,
					y: 20,
					scale: 0.6,
					winter: true
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: sleet,
					x: 42,
					y: 72
				},
				{
					primitive: sleet,
					x: 52,
					y: 72
				},
				{
					primitive: sleet,
					x: 36,
					y: 68
				}
			],
			'44m': [
				{
					primitive: sun,
					x: 8,
					y: 20,
					scale: 0.6,
					winter: true
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: snowflake,
					x: 22,
					y: 71
				}
			],
			'08m': [
				{
					primitive: sun,
					x: 8,
					y: 20,
					scale: 0.6,
					winter: true
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: snowflake,
					x: 22,
					y: 71
				},
				{
					primitive: snowflake,
					x: 40,
					y: 69
				}
			],
			'45m': [
				{
					primitive: sun,
					x: 8,
					y: 20,
					scale: 0.6,
					winter: true
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: snowflake,
					x: 12,
					y: 71
				},
				{
					primitive: snowflake,
					x: 22,
					y: 71
				},
				{
					primitive: snowflake,
					x: 40,
					y: 69
				}
			],
			'24m': [
				{
					primitive: sun,
					x: 8,
					y: 20,
					scale: 0.6,
					winter: true
				},
				{
					primitive: lightning,
					x: 25,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: raindrop,
					x: 48,
					y: 68
				}
			],
			'06m': [
				{
					primitive: sun,
					x: 8,
					y: 20,
					scale: 0.6,
					winter: true
				},
				{
					primitive: lightning,
					x: 25,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: raindrop,
					x: 64,
					y: 72
				},
				{
					primitive: raindrop,
					x: 48,
					y: 68
				}
			],
			'25m': [
				{
					primitive: sun,
					x: 8,
					y: 20,
					scale: 0.6,
					winter: true
				},
				{
					primitive: lightning,
					x: 25,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: raindrop,
					x: 84,
					y: 72
				},
				{
					primitive: raindrop,
					x: 64,
					y: 72
				},
				{
					primitive: raindrop,
					x: 48,
					y: 68
				}
			],
			'26m': [
				{
					primitive: sun,
					x: 8,
					y: 20,
					scale: 0.6,
					winter: true
				},
				{
					primitive: lightning,
					x: 17,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: sleet,
					x: 40,
					y: 68
				}
			],
			'20m': [
				{
					primitive: sun,
					x: 8,
					y: 20,
					scale: 0.6,
					winter: true
				},
				{
					primitive: lightning,
					x: 17,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: sleet,
					x: 56,
					y: 72
				},
				{
					primitive: sleet,
					x: 40,
					y: 68
				}
			],
			'27m': [
				{
					primitive: sun,
					x: 8,
					y: 20,
					scale: 0.6,
					winter: true
				},
				{
					primitive: lightning,
					x: 17,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: sleet,
					x: 76,
					y: 72
				},
				{
					primitive: sleet,
					x: 56,
					y: 72
				},
				{
					primitive: sleet,
					x: 40,
					y: 68
				}
			],
			'28m': [
				{
					primitive: sun,
					x: 8,
					y: 20,
					scale: 0.6,
					winter: true
				},
				{
					primitive: lightning,
					x: 10,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: snowflake,
					x: 35,
					y: 71
				}
			],
			'21m': [
				{
					primitive: sun,
					x: 8,
					y: 20,
					scale: 0.6,
					winter: true
				},
				{
					primitive: lightning,
					x: 10,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: snowflake,
					x: 53,
					y: 69
				},
				{
					primitive: snowflake,
					x: 35,
					y: 71
				}
			],
			'29m': [
				{
					primitive: sun,
					x: 8,
					y: 20,
					scale: 0.6,
					winter: true
				},
				{
					primitive: lightning,
					x: 10,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: snowflake,
					x: 73,
					y: 69
				},
				{
					primitive: snowflake,
					x: 53,
					y: 69
				},
				{
					primitive: snowflake,
					x: 35,
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
					x: 8,
					y: 56,
					scale: 0.6,
					flip: true,
					tint: 0.1
				}
			],
			'03n': [
				{
					primitive: moon,
					x: 18,
					y: 13,
					scale: 0.6
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.1
				}
			],
			'40n': [
				{
					primitive: moon,
					x: 18,
					y: 13,
					scale: 0.6
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: raindrop,
					x: 45,
					y: 68
				}
			],
			'05n': [
				{
					primitive: moon,
					x: 18,
					y: 13,
					scale: 0.6
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: raindrop,
					x: 61,
					y: 72
				},
				{
					primitive: raindrop,
					x: 45,
					y: 68
				}
			],
			'41n': [
				{
					primitive: moon,
					x: 18,
					y: 13,
					scale: 0.6
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: raindrop,
					x: 71,
					y: 72
				},
				{
					primitive: raindrop,
					x: 61,
					y: 72
				},
				{
					primitive: raindrop,
					x: 45,
					y: 68
				}
			],
			'42n': [
				{
					primitive: moon,
					x: 18,
					y: 13,
					scale: 0.6
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: sleet,
					x: 36,
					y: 68
				}
			],
			'07n': [
				{
					primitive: moon,
					x: 18,
					y: 13,
					scale: 0.6
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: sleet,
					x: 52,
					y: 72
				},
				{
					primitive: sleet,
					x: 36,
					y: 68
				}
			],
			'43n': [
				{
					primitive: moon,
					x: 18,
					y: 13,
					scale: 0.6
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: sleet,
					x: 42,
					y: 72
				},
				{
					primitive: sleet,
					x: 52,
					y: 72
				},
				{
					primitive: sleet,
					x: 36,
					y: 68
				}
			],
			'44n': [
				{
					primitive: moon,
					x: 18,
					y: 13,
					scale: 0.6
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: snowflake,
					x: 22,
					y: 71
				}
			],
			'08n': [
				{
					primitive: moon,
					x: 18,
					y: 13,
					scale: 0.6
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: snowflake,
					x: 22,
					y: 71
				},
				{
					primitive: snowflake,
					x: 40,
					y: 69
				}
			],
			'45n': [
				{
					primitive: moon,
					x: 18,
					y: 13,
					scale: 0.6
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: snowflake,
					x: 12,
					y: 71
				},
				{
					primitive: snowflake,
					x: 22,
					y: 71
				},
				{
					primitive: snowflake,
					x: 40,
					y: 69
				}
			],
			'24n': [
				{
					primitive: moon,
					x: 18,
					y: 13,
					scale: 0.6
				},
				{
					primitive: lightning,
					x: 25,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: raindrop,
					x: 48,
					y: 68
				}
			],
			'06n': [
				{
					primitive: moon,
					x: 18,
					y: 13,
					scale: 0.6
				},
				{
					primitive: lightning,
					x: 25,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: raindrop,
					x: 64,
					y: 72
				},
				{
					primitive: raindrop,
					x: 48,
					y: 68
				}
			],
			'25n': [
				{
					primitive: moon,
					x: 18,
					y: 13,
					scale: 0.6
				},
				{
					primitive: lightning,
					x: 25,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: raindrop,
					x: 84,
					y: 72
				},
				{
					primitive: raindrop,
					x: 64,
					y: 72
				},
				{
					primitive: raindrop,
					x: 48,
					y: 68
				}
			],
			'26n': [
				{
					primitive: moon,
					x: 18,
					y: 13,
					scale: 0.6
				},
				{
					primitive: lightning,
					x: 17,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: sleet,
					x: 40,
					y: 68
				}
			],
			'20n': [
				{
					primitive: moon,
					x: 18,
					y: 13,
					scale: 0.6
				},
				{
					primitive: lightning,
					x: 17,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: sleet,
					x: 56,
					y: 72
				},
				{
					primitive: sleet,
					x: 40,
					y: 68
				}
			],
			'27n': [
				{
					primitive: moon,
					x: 18,
					y: 13,
					scale: 0.6
				},
				{
					primitive: lightning,
					x: 17,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: sleet,
					x: 76,
					y: 72
				},
				{
					primitive: sleet,
					x: 56,
					y: 72
				},
				{
					primitive: sleet,
					x: 40,
					y: 68
				}
			],
			'28n': [
				{
					primitive: moon,
					x: 18,
					y: 13,
					scale: 0.6
				},
				{
					primitive: lightning,
					x: 10,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: snowflake,
					x: 35,
					y: 71
				}
			],
			'21n': [
				{
					primitive: moon,
					x: 18,
					y: 13,
					scale: 0.6
				},
				{
					primitive: lightning,
					x: 10,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: snowflake,
					x: 53,
					y: 69
				},
				{
					primitive: snowflake,
					x: 35,
					y: 71
				}
			],
			'29n': [
				{
					primitive: moon,
					x: 18,
					y: 13,
					scale: 0.6
				},
				{
					primitive: lightning,
					x: 10,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: snowflake,
					x: 73,
					y: 69
				},
				{
					primitive: snowflake,
					x: 53,
					y: 69
				},
				{
					primitive: snowflake,
					x: 35,
					y: 71
				}
			],

			// Cloud
			'15': [
				{
					primitive: fog,
					x: 4,
					y: 18,
					tint: 0.15
				}
			],
			'04': [
				{
					primitive: cloud,
					x: 5,
					y: 10,
					scale: 0.8,
					flip: true,
					tint: 0.1
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.15
				}
			],
			'46': [
				{
					primitive: cloud,
					x: 5,
					y: 10,
					scale: 0.8,
					flip: true,
					tint: 0.2
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.3
				},
				{
					primitive: raindrop,
					x: 45,
					y: 68
				}
			],
			'09': [
				{
					primitive: cloud,
					x: 5,
					y: 10,
					scale: 0.8,
					flip: true,
					tint: 0.3
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: raindrop,
					x: 61,
					y: 72
				},
				{
					primitive: raindrop,
					x: 45,
					y: 68
				}
			],
			'10': [
				{
					primitive: cloud,
					x: 5,
					y: 10,
					scale: 0.8,
					flip: true,
					tint: 0.4
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.5
				},
				{
					primitive: raindrop,
					x: 71,
					y: 72
				},
				{
					primitive: raindrop,
					x: 55,
					y: 72
				},
				{
					primitive: raindrop,
					x: 39,
					y: 68
				}
			],
			'47': [
				{
					primitive: cloud,
					x: 5,
					y: 10,
					scale: 0.8,
					flip: true,
					tint: 0.2
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.3
				},
				{
					primitive: sleet,
					x: 36,
					y: 68
				}
			],
			'12': [
				{
					primitive: cloud,
					x: 5,
					y: 10,
					scale: 0.8,
					flip: true,
					tint: 0.3
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: sleet,
					x: 52,
					y: 72
				},
				{
					primitive: sleet,
					x: 36,
					y: 68
				}
			],
			'48': [
				{
					primitive: cloud,
					x: 5,
					y: 10,
					scale: 0.8,
					flip: true,
					tint: 0.4
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.5
				},
				{
					primitive: sleet,
					x: 72,
					y: 72
				},
				{
					primitive: sleet,
					x: 52,
					y: 72
				},
				{
					primitive: sleet,
					x: 36,
					y: 68
				}
			],
			'49': [
				{
					primitive: cloud,
					x: 5,
					y: 10,
					scale: 0.8,
					flip: true,
					tint: 0.2
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.3
				},
				{
					primitive: snowflake,
					x: 22,
					y: 71
				}
			],
			'13': [
				{
					primitive: cloud,
					x: 5,
					y: 10,
					scale: 0.8,
					flip: true,
					tint: 0.3
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: snowflake,
					x: 40,
					y: 69
				},
				{
					primitive: snowflake,
					x: 22,
					y: 71
				}
			],
			'50': [
				{
					primitive: cloud,
					x: 5,
					y: 10,
					scale: 0.8,
					flip: true,
					tint: 0.4
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.5
				},
				{
					primitive: snowflake,
					x: 60,
					y: 69
				},
				{
					primitive: snowflake,
					x: 40,
					y: 69
				},
				{
					primitive: snowflake,
					x: 22,
					y: 71
				}
			],
			'30': [
				{
					primitive: cloud,
					x: 5,
					y: 10,
					scale: 0.8,
					flip: true,
					tint: 0.3
				},
				{
					primitive: lightning,
					x: 25,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: raindrop,
					x: 48,
					y: 68
				}
			],
			'22': [
				{
					primitive: cloud,
					x: 5,
					y: 10,
					scale: 0.8,
					flip: true,
					tint: 0.3
				},
				{
					primitive: lightning,
					x: 25,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: raindrop,
					x: 64,
					y: 72
				},
				{
					primitive: raindrop,
					x: 48,
					y: 68
				}
			],
			'11': [
				{
					primitive: cloud,
					x: 5,
					y: 10,
					scale: 0.8,
					flip: true,
					tint: 0.4
				},
				{
					primitive: lightning,
					x: 18,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.5
				},
				{
					primitive: raindrop,
					x: 73,
					y: 72
				},
				{
					primitive: raindrop,
					x: 57,
					y: 72
				},
				{
					primitive: raindrop,
					x: 41,
					y: 68
				}
			],
			'31': [
				{
					primitive: cloud,
					x: 5,
					y: 10,
					scale: 0.8,
					flip: true,
					tint: 0.3
				},
				{
					primitive: lightning,
					x: 17,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: sleet,
					x: 40,
					y: 68
				}
			],
			'23': [
				{
					primitive: cloud,
					x: 5,
					y: 10,
					scale: 0.8,
					flip: true,
					tint: 0.3
				},
				{
					primitive: lightning,
					x: 17,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: sleet,
					x: 56,
					y: 72
				},
				{
					primitive: sleet,
					x: 40,
					y: 68
				}
			],
			'32': [
				{
					primitive: cloud,
					x: 5,
					y: 10,
					scale: 0.8,
					flip: true,
					tint: 0.3
				},
				{
					primitive: lightning,
					x: 17,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: sleet,
					x: 66,
					y: 72
				},
				{
					primitive: sleet,
					x: 56,
					y: 72
				},
				{
					primitive: sleet,
					x: 40,
					y: 68
				}
			],
			'33': [
				{
					primitive: cloud,
					x: 5,
					y: 10,
					scale: 0.8,
					flip: true,
					tint: 0.3
				},
				{
					primitive: lightning,
					x: 10,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: snowflake,
					x: 35,
					y: 71
				}
			],
			'14': [
				{
					primitive: cloud,
					x: 5,
					y: 10,
					scale: 0.8,
					flip: true,
					tint: 0.3
				},
				{
					primitive: lightning,
					x: 10,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: snowflake,
					x: 53,
					y: 69
				},
				{
					primitive: snowflake,
					x: 35,
					y: 71
				}
			],
			'34': [
				{
					primitive: cloud,
					x: 5,
					y: 10,
					scale: 0.8,
					flip: true,
					tint: 0.3
				},
				{
					primitive: lightning,
					x: 10,
					y: 75
				},
				{
					primitive: cloud,
					x: 7,
					y: 22,
					tint: 0.4
				},
				{
					primitive: snowflake,
					x: 73,
					y: 69
				},
				{
					primitive: snowflake,
					x: 53,
					y: 69
				},
				{
					primitive: snowflake,
					x: 35,
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
	this.canvas;
	this.bg;

	if (canvas) {
		this.canvas = canvas;
		this.bg = this.getBG(canvas);
	}
}

/**
 * Draw symbol into 'canvas'
 * Takes data from 'data-' attributes
 * @param {CanvasElement} canvas
 */
WeatherSymbol.prototype.draw = function(canvas) {
	canvas = this.canvas || canvas;
	if (!canvas) return;

	var bg = this.getBG(canvas)
		, ctx = canvas.getContext('2d')
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
	if (w != 0) {
		canvas.width = w * this.scale;
		canvas.height = h * this.scale;
	}

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
				height: h * this.scale,
				bg: bg
			};
			layer.primitive.render(ctx, options);
		}
	}
};

WeatherSymbol.prototype.getBG = function (canvas) {
	return this.bg
		|| window.getComputedStyle(canvas).getPropertyValue('background-color');
};
