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





bot.login(TOKEN);

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.write('Baby shark do do do do');
    res.end();
}).listen(process.env.PORT || 5000);