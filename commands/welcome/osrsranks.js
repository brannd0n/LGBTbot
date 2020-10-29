const commando = require('discord.js-commando');
const discord = require('discord.js');

class OsrsranksCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'osrsranks',
            group: 'welcome',
            memberName: 'osrsranks',
            description: 'Ranks.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.MessageEmbed()
        .setColor(0x72FF97)
        .setFooter("Last updated")
        .setTimestamp()
        .addField("🗨️ __OSRS Clan__ 🗨️", "This is the official ranking system in place for our OSRS faction of the Clan. As we are a social and community clan, the ranks are based on length of time in the Clan. The amount of time you need to be in the Clan for each rank is as follows:")
        .addField("😊 __Member Ranks__ 😊", "**Recruit:** 3 weeks of being a member \n \n **Corporal:** 3 months of being a member \n \n **Sergeant:** 6 months of being a member \n \n **Lieutenant:** 1 year of being a member \n \n **Captain:** 2 years of being a member or being an assistant admin \n \n **General:** Reserved for admin and leadership")
        .addField(" \u200b ", "**:earth_americas: Clan World is 523 :earth_africa:**")
        message.channel.send(myInfo)
    }
}

module.exports = OsrsranksCommand;
