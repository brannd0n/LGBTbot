const commando = require('discord.js-commando');
const discord = require('discord.js');

class WelcomeInfoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'welcome',
            group: 'welcome',
            memberName: 'welcome',
            description: 'Welcome info.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("<:rbheart:495103097547259925> __**WELCOME TO THE OFFICIAL LGBT+ CORNER DISCORD SERVER**__ <:rbheart:495103097547259925>")
        .setColor(0xFF0000)
        .setDescription("A place for LGBT+ Runescapers from across the globe to get together, play games, chat, have a laugh and make friends! Below you'll find some handy information about our Clan, the Citadel and our Discord Channel.\n \n🌍**Official home world: 23**🌍")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = WelcomeInfoCommand;
