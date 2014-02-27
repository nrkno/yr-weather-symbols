exports.NS = 'http://www.w3.org/2000/svg';
exports.LINK = 'http://www.w3.org/1999/xlink';

exports.appendChild = function (parent, type, attrs) {
	var el = document.createElementNS(exports.NS, type);

	if (attrs) {
		for (var attr in attrs) {
			if (attr.indexOf('xlink:') == 0) {
				el.setAttributeNS(exports.LINK, attr.substring(6), attrs[attr]);
			} else {
				el.setAttribute(attr, attrs[attr]);
			}
		}
	}

	parent.appendChild(el);
};