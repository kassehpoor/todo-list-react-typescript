var handlers = require('./request-handlers');

exports.requestHnadler = function requestHnadler(req, res) {
	console.log(req.method, req.url);

	var routeHandler = ({
		'GET': {
			'/': handlers.indexHandler,
			'/api/read': handlers.readHandler
		},
		'POST': {
			'/api/write': handlers.writeHandler,
			'/api/auth': handlers.authHandler,
			'/api/register': handlers.registerHandler
		},
	})[req.method][req.url];

	(routeHandler || handlers.handler404)(req, res);
};
