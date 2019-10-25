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
        .addField("🔑 __**KEY INFORMATION**__ 🔑", "One of the precautions we have taken to ensure this discord remains a safe space is requiring people to post on the official RS forums before they access the discord (insert link here) By doing this we lessen the chance of trolls joining on multiple accounts in order to cause trouble and spam hate.\n\n" +
        "Once a new member has used the link to access the discord they will automatically be given the role <@&630806434451554305> and a welcome message from the bot will ask them to introduce themselves. The <@&630806434451554305> will limit what the new person can see to 3 rooms, <#630490180478042155>, <#630808509474144307> and <#630747807577538570>.\n\n" +
        "Please keep an eye on <#630747807577538570> for new members, once they have filled out all the information you will see a ticket at the top of the server, read through the information and when you are happy they aren’t a troll you can assign them the <@&630765616697049088> or <@&630765530030014476> which will unlock the rest of the server.\n\n" + 
        "React with :x: on the ticket and the room will be deleted and the introduction in <#630747807577538570> will be removed (Remember to check the official RS forum thread to see that they have posted there before assigning any roles) \n\n", true)
        .setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/224/old-key_1f5dd.png")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = DivChamp2Command;
