const commando = require('discord.js-commando');
const discord = require('discord.js');

class DivChamp2Command extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'divchamp2',
            group: 'admin',
            memberName: 'divchamp2',
            description: 'Welcome to the champion team'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0x991919)
        .addField("🔑 **KEY INFORMATION** 🔑", "One of the precautions we have taken to ensure this discord remains a safe space is requiring people to post on the official RS forums before they access the discord (insert link here) By doing this we lessen the chance of trolls joining on multiple accounts in order to cause trouble and spam hate.\n\n" +
        "Once a new member has used the link to access the discord they will automatically be given the role <@630806434451554305> and a welcome message from the bot will ask them to introduce themselves. The <@630806434451554305> role will limit what the new person can see to 3 rooms, <#630490180478042155>, <#630808509474144307> and <#630747807577538570>.\n\n" +
        "Please keep an eye on <#634526862458224654> for new members, once they have filled out all the information and you are happy they aren’t a troll you can assign them the RS3 or OSRS role which will unlock the rest of the server. (Remember to check the official RS forum thread to see that they have posted there)\n\n")
        .setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/224/old-key_1f5dd.png")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = DivChamp2Command;
