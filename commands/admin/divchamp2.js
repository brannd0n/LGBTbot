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
        .setTitle("🔑 __**KEY INFORMATION**__ 🔑")
        .setDescription("One of the precautions we have taken to ensure this discord remains a safe space is requiring people to post on the [official RS forums](http://services.runescape.com/m=forum/c=2M0QHpdJlew/forums.ws?254,255,622,66126929) before they access the discord. By doing this we lessen the chance of trolls joining on multiple accounts in order to cause trouble and spam hate.\n\n" +
        "Once a new member has used the link to access the discord they will automatically be given the role <@&630806434451554305> and a welcome message from the bot will ask them to introduce themselves. The <@&630806434451554305> will limit what the new person can see to 3 rooms, <#635250830114553856>, <#630808509474144307> and <#630747807577538570>.\n\n"+
        "Please keep an eye on <#630747807577538570> for new members, once they have filled out all the information you will see a ticket at the top of the server, read through the information and when you are happy they aren’t a troll you can assign them the <@&630765616697049088> or <@&630765530030014476> roles (remember to check the forums to see that they have posted). \n\n" +
        "You will then need to manually assign the <@&639459046340165652> role this will unlock our more social rooms such as <#630461746070421515>, <#639434368963837953> and <#638367697519902730>. Then click on the :x: to close the ticket.\n\n"+
        "Once the <@&639459046340165652> role has been assigned the bot <@159985870458322944> will begin to track how many messages each individual has sent, after a roughly 30 minute conversation (25+ messages) you will see a notification in <#642555733875097610> that an individual has achieved level 3, at this point you can assign the <@&642636421185929218> role and it will unlock the rest of the server.")
        .setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/224/old-key_1f5dd.png")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = DivChamp2Command;
