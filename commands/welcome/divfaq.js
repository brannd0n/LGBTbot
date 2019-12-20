const commando = require('discord.js-commando');
const discord = require('discord.js');

class DivFaqCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'divfaq',
            group: 'welcome',
            memberName: 'divfaq',
            description: 'Diversity Server FAQ.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0xFD6600)
        .setTimestamp()
        .setTitle("__FAQ__")
        .setDescription("\n __**When will I become a verified member?**__ /n"+
        "To unlock the rest of the server you need to achieve level 3, to do this all you have to do is talk and get to know the other server members for approx 30/40 minutes give or take, once you have achieved level 3 <@159985870458322944> will pm you and a <@&630489074360123392> will assign the verified role when they are available - you don’t need to pm them they get a notification too. \n \n" +
        "__**My friend is interested in joining the Discord, how can I get an invite for them?**__ /n"+
        "Please feel free to contact any <@&630489074360123392> for further details.\n \n"+
        "__**I'm unsure if my comment/language will offend someone?**__ /n"+
        "Please feel free to run this by any <@&630489074360123392>. Alternatively you can also research this on the internet. \n \n"+
        "__**I have a suggestion for the server, where can I post this?**__ /n"+
        "We welcome any suggestions you may have, you can either DM a Diversity Champion or tag them with your suggestion in the relevant channel or in <#630461746070421515>.", true)
        .setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/softbank/145/black-question-mark-ornament_2753.png")
        .setFooter("Last updated")
        .setTimestamp()
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = DivFaqCommand;
