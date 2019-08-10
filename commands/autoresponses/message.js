/**
 * File: message.js
 * 
 * Description:
 * Provides autoresponses to predefined messages, such as links to the old RuneScape wiki.
 */

const discord = require('discord.js');

client.on("message", function(message) {
    if (message.author.bot) {
        return;
    }

    if (message.content.includes("runescape.fandom.com") || message.content.includes("runescape.wikia.com")) {
        var responseString = "Hey " + message.author + "! That's the old RuneScape Wiki! It's gross and out of date.";
        responseString += " Check out the new RuneScape Wiki at https://runescape.wiki/!";
        message.channel.send(responseString);
    }
});
