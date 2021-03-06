var path = require('path');

module.exports = function(app){

	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/index.html"));
	});

	app.get("/characters", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/characters.html"));
	});

	app.get("/game", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/game.html"));
	});
};