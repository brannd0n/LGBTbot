const fs = require('fs');
const Commando = require('discord.js-commando');
const http = require('http');
const TOKEN = process.env.token || JSON.parse(fs.readFileSync('./config.json')).token;

const bot = new Commando.Client({
    commandPrefix: './'
});

bot.registry
    .registerGroup('welcome', 'Welcome info')
    .registerGroup('fun', 'Fun')
    .registerGroup('events', 'Events')
    .registerGroup('room', 'Rooms')
    .registerGroup('autoresponses', 'AutoResponses')
    .registerGroup('admin', 'Admin')
    .registerDefaults()
    .registerCommandsIn(__dirname + '/commands')
    ;

bot.on('ready', function () {
    console.log("Ready");
});


bot.on("message", function(message) {
    if (message.author.bot) {
        return;
    }
 
    if (message.content.includes("runescape.fandom.com") || message.content.includes("runescape.wikia.com")) {
        var responseString = "Hey " + message.author + "! That's the old RuneScape Wiki! It's gross and out of date.";
        responseString += " Check out the new RuneScape Wiki at https://runescape.wiki/!";
        message.channel.send(responseString);
    }
});


bot.login(TOKEN);

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.write('Baby shark do do do do');
    res.end();
}).listen(process.env.PORT || 5000);
