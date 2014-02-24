exports.appendToSVG = function (node, name, attrs, text) {
	var ns = exports.appendToSVG.ns
		, svg = node
		, doc = node.ownerDocument
		, p;

	// Cache namespaces
	if (!ns) {
		while (svg && svg.tagName!='svg') {
			svg = svg.parentNode;
		}
		ns = exports.appendToSVG.ns = {
			svg: svg.namespaceURI
		};
		for (var a = svg.attributes, i = a.length; i--;) {
			if (a[i].namespaceURI) ns[a[i].localName] = a[i].nodeValue;
		}
	}

	var el = doc.createElementNS(ns.svg, name);
	for (var attr in attrs) {
		if (!attrs.hasOwnProperty(attr)) continue;
		if (!(p = attr.split(':'))[1]) {
			el.setAttribute(attr, attrs[attr]);
		} else {
			el.setAttributeNS(ns[p[0]] || null, p[1], attrs[attr]);
		}
	}

	if (text) {
		el.appendChild(doc.createTextNode(text));
	}

	return node.appendChild(el);
};