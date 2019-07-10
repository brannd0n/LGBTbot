const commando = require('discord.js-commando');
const discord = require('discord.js');

class CitadelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'citadel',
            group: 'welcome',
            memberName: 'citadel',
            description: 'Clan citadel explained.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0x00B8FF)
        .setFooter("Last updated")
        .setTimestamp()
        .addField("🏰 __**CLAN CITADEL GUIDE**__ 🏰", "**Overview:** All Runescape clans have access to their own Citadel, a special plot of land upon which we can build our own Castle & Skilling Plots exclusively for all our members. We must work together in order to maintain and upgrade our castle, in return we can make it bigger, add fun new features and offer lots more XP training opportunities.\n \nIf you are new to our clan, please make sure to visit Scribe in the clan camp just south of Falador to claim your free Clan Vexillum. This banner allows you to teleport to your nearest citadel entry portal.\n \nWhilst visiting the Citadel, you can also obtain a clan cloak from inside the Citadel Keep. Simply walk through the front doors, turn right and speak to Captain of the Guard.")
        .addField("\u200b", "**Getting Started:** In order to maintain and upgrade our Citadel, we must hit certain Resource targets. Resources are gathered from the skilling plots available in the Citadel, in turn for collecting these, you are granted XP for training the associated skill.\n \nAll members are given a set amount of Resources they can gather each week. Currently our Resource limit is 2700 per member. \n \nWhen you have gathered half the amount of resources you will be eligible for bonus xp, granted by the Quartermaster in the left hand side of the Castle.\n \n Check <#308711801166626816> for our latest Event Details!")
        .setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/148/european-castle_1f3f0.png");
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = CitadelCommand;
