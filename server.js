var env = require('./config/env')
	,http = require('http')
	,app = require('./config/express');

http.createServer(app).listen(env.config.port, env.config.address, function() {
	console.log('Express Server listening on port ' + env.config.port);
});

