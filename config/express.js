var env = require('./env')
	,express = require('express')
	,app = express()
	,helmet = require('helmet')
	,load = require('express-load')
	,swig = require('swig')

// enviromnent settings
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
app.set('views', './app/views');

if (env.isDevMode()) {
	app.use(require('morgan')(':url :response-time'));
	app.set('view cache', false);
	swig.setDefaults({ cache: false });
}

app.use(helmet());
app.use(express.static('./public'));

load('models', {cwd: 'app'})
	.then('api')
	.then('controllers')
	.then('routes')
	.into(app);

module.exports = app;