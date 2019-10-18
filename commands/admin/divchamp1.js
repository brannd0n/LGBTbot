const commando = require('discord.js-commando');
const discord = require('discord.js');

class DivChamp1Command extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'divchamp1',
            group: 'admin',
            memberName: 'divchamp1',
            description: 'Welcome to the champion team'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0x991919)
        .addField("📋 __**Diversity Champion Handbook**__ 📋", "First of all we would like to thank you all for helping with this community, diversity champions are here to moderate this discord and ensure it remains a safe space, as such we have a few simple rules and guidelines we ask everyone who joins to follow.\n\n" +
        "Those of you who are diversity champions have been selected to join the team because you are an advocate for diversity issues and are keen to see positive changes, we feel you can really help to improve the community.")
        .setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/lg/57/books_1f4da.png")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = DivChamp1Command;