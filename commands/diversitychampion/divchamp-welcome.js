const commando = require('discord.js-commando');
const discord = require('discord.js');

class ChampionWelcomeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'divchamp-welcome',
            group: 'diversitychampion',
            memberName: 'divchamp-welcome',
            description: 'Welcome to the champion team'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0x991919)
        .addField("📋 __**Diversity Champion Handbook**__ 📋", "First of all we would like to thank you all for helping with this community, diversity champions are here to moderate this discord and ensure it remains a safe space, as such we have a few simple rules and guidelines we ask everyone who joins to follow.\n\n" +
        "Those of you who are diversity champions have been selected to join the team because you are an advocate for diversity issues and are keen to see positive changes, we feel you can really help to improve the community.")
        .addField("\u200b", "One of the precautions we have taken to ensure this discord remains a safe space is requiring people to post on the official RS forums before they access the discord (insert link here) By doing this we lessen the chance of trolls joining on multiple accounts in order to cause trouble and spam hate.\n\n" +
        "Once a new member has used the link to access the discord they will automatically be given the role “newly joined” and a welcome message from the bot will ask them to introduce themselves. The “newly joined” role will limit what the new person can see to 3 rooms, <#634526862458224654>, <#634526862458224654> and <#634526862458224654>.\n\n" +
        "Please keep an eye on <#634526862458224654> for new members, once they have filled out all the information and you are happy they aren’t a troll you can assign them the RS3 or OSRS role which will unlock the rest of the server. (Remember to check the official RS forum thread to see that they have posted there)\n\n")
        .setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/lg/57/books_1f4da.png")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = ChampionWelcomeCommand;
