var env;

if(!env) {
	var env = {}
	env.config = require('./env/' + (process.env.NODE_ENV || 'development') + '.js');
	env.isDevMode = function() {
		return this.config.stage = 'developement'
	}
}
module.exports = env;