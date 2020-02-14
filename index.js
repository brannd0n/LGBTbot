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
    .registerGroup('admin', 'Admin')
    .registerDefaults()
    .registerCommandsIn(__dirname + '/commands')
    ;

bot.on('ready', function () {
    console.log("Ready");
});

// respond to messages
bot.on("message", function (message) {
    // don't run if the message was sent by a bot
    if (message.author.bot) {
        return;
    }

    // if the message includes a reference to the old RS Wikia site hosted by Fandom, let the
    // author know the Official RS Wiki is hosted elsewhere now.
    if (message.content.includes("runescape.fandom.com") || message.content.includes("runescape.wikia.com")) {
        var responseString = "Hey " + message.author + "! That's the old RuneScape Wiki! It's gross and out of date.";
        responseString += " Check out the new RuneScape Wiki at https://runescape.wiki/";
        message.channel.send(responseString);
    }
});

bot.on("messageReactionAdd",(reaction,user)=>{
  if(!user) return;
  if(user.bot)return;
  if(!reaction.message.channel.guild) return;
  
  const name = reaction.emoji.name;
  if(name == "❤️") { //❤️
    const role = reaction.message.guild.roles.find(r => r.name == "RS3 Events");
    reaction.message.channel.guild.members.get(user.id).addRole(role).catch(console.error);
    user
  } else if(name == "💚") { //💚
    const role = reaction.message.guild.roles.find(r => r.name == "OSRS Events");
    reaction.message.channel.guild.members.get(user.id).addRole(role).catch(console.error);
  }
});


bot.on("messageReactionRemove",(reaction,user)=>{
  if(!user) return;
  if(user.bot)return;
  if(!reaction.message.channel.guild) return;
  
  const name = reaction.emoji.name;
  if(name == "❤️") {
    console.log("Remove RS3 role")
    const role = reaction.message.guild.roles.find(r => r.name == "RS3 Events");
    reaction.message.channel.guild.members.get(user.id).removeRole(role).catch(console.error);
  } else if(name == "💚") {
    const role = reaction.message.guild.roles.find(r => r.name == "OSRS Events");
    reaction.message.channel.guild.members.get(user.id).removeRole(role).catch(console.error);
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
