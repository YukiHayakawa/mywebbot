// app.js

var restify = require('restify');
var builder = require('botbuilder');

//=========================================================
// Bot Setup
//=========================================================

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url);
});

// Create chat bot
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

//=========================================================
// Bots Dialogs
//=========================================================

bot.dialog('/', new builder.IntentDialog()
	.matches(/^こんにちは/i, function (session) {
		session.send("こんにちは");
	})
	.matches(/^名前は/i, function (session) {
		session.send('私はbot!')
	})
	.onDefault(function (session) {
		session.send("もう1度言って下さい");
	}));



server.get(/.*/, restify.serveStatic({
	'directory': './static/',
	'default': 'index.html'
}));