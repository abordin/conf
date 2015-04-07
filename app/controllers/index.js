var env = require('../../config/env')
	,fs = require('fs')
	,settings;

module.exports = function(app) {

	var controller = {};

	controller.index = function(req, res) {

		// teste, remover depois
		settings = JSON.parse(fs.readFileSync('./config/settings.json', 'utf8'));
		res.render('index', settings);
	};

	return controller;
}