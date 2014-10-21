var trait = require('trait')
	, layer = require('./utils/layer')
	, validate = require('./utils/validate')
	, capabilities = require('./utils/capabilities')
	, formulae = require('../../weatherSymbols.json')
	, React = require('react')
	, el = React.DOM
	, TCelestial = trait.compose(
			require('./primitives/TCelestialPrimitive'),
			require('./primitives/TCelestialPrimitiveComponent')
		)
	, TCloud = trait.compose(
			require('./primitives/TCloudPrimitive'),
			require('./primitives/TCloudPrimitiveComponent')
		)
	, TPrecip = trait.compose(
			require('./primitives/TPrecipPrimitive'),
			require('./primitives/TPrecipPrimitiveComponent')
		)
	, TFog = trait.compose(
			require('./primitives/TFogPrimitive'),
			require('./primitives/TFogPrimitiveComponent')
		)
	, TLightning = trait.compose(
			require('./primitives/TLightningPrimitive'),
			require('./primitives/TLightningPrimitiveComponent')
		)
	, primitives = {
			sun: TCelestial.create(),
			moon: TCelestial.create(),
			cloud: TCloud.create(),
			raindrop: TPrecip.create(),
			sleet: TPrecip.create(),
			snowflake: TPrecip.create(),
			fog: TFog.create(),
			lightning: TLightning.create()
		}
	, T;

T = trait({
	displayName: 'weatherSymbolComponent',

	/**
	 * React: called when DOM ready
	 */
	componentDidMount: function () {
		if (this.props.type == 'canvas') {
			var formula = formulae[this.props.id]
				, ctx = this.refs.canvas.getDOMNode().getContext('2d');

			// Render layers
			for (var i = 0, n = formula.length; i < n; i++) {
				cprimitives[formula[i].primitive].render(ctx);
			}
		}
	},

	/**
	 * React: render
	 */
	render: function () {
		var type = validate(this.props.type)
			, id = this.props.id
			, formula = formulae[id];

		if (formula) {
			if (type != 'img') {
				// Update layers
				var html = ''
					, f, l;
				for (var i = 0, n = formula.length; i < n; i++) {
					f = formula[i];
					l = layer.get(type, f);
					primitives[f.primitive].initialize(l);
					// Until react supports <use>, concat strings
					if (type == 'svg') {
						html += primitives[f.primitive].render();
					}
				}
				if (type == 'svg') {
					return el.svg({x: 0, y: 0, viewBox: '0 0 100 100', dangerouslySetInnerHTML: {__html: html}});
				} else {
					// TODO: handle width/height
					return el.canvas({width: capabilities.backingRatio * 100, height: capabilities.backingRatio * 100, ref: 'canvas'});
				}
			} else {
				return el.img({src: (this.props.imagePath || '') + id + '.png'});
			}
		} else {
			return el.span({style:{display: 'none'}}, 'no formula found for ' + id);
		}
	}
});

/**
 * Instance factory
 * @returns {Object}
 */
module.exports = function () {
	return React.createFactory(
		React.createClass(T.create())
	);
};