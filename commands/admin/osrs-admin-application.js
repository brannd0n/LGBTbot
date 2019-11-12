const commando = require('discord.js-commando');
const discord = require('discord.js');

class OsrsAdminApplicationCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'osrs-admin-application',
            group: 'admin',
            memberName: 'osrs-admin-application',
            description: 'Osrs admin application'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0x991919)
        .addField("__**OSRS Admin**__",
        "1. What is your RSN? 2. What timezone are you in?\n\n" +
        "2. How long have you been playing runescape for and what’s your proudest achievement in game?\n\n" +
        "3. What things do you enjoy doing in your day-to-day life? Any hobbies or interests? \n\n" +
        "4. What has made you want to apply for an admin position and what do you think you’d bring to enhance the team and community further?\n\n" +
        "5. As an OSRS admin you won’t be split into a team of either CM or Events, are you happy with sharing the duties from both sides and do you feel like you have the time commitment to do so? For example you will be expected to host the occasional small event.\n\n" +
        "6. What things do you enjoy doing in your day-to-day life? Any hobbies or interests?\n\n")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = OsrsAdminApplicationCommand;
