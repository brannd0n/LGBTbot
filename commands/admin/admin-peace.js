const commando = require('discord.js-commando');
const discord = require('discord.js');

class AdminPeaceCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'admin-peace',
            group: 'admin',
            memberName: 'admin-peace',
            description: 'Keeping the peace'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0x991919)
        .addField(":rotating_light: __**KEEPING THE PEACE**__ :rotating_light:", "We pride ourself on being a friendly community, that is open to members and guests alike. Our guests are treated the same as a fully pledged member, and as a result, will be required to abide by the same rules.\n\n" +
        "We want to try our best to predict negativity, and try our best to sway all negative conversations to PM.\n\n" +
        "It is stated in our rules that some topics are not acceptable in our chat.\n\n" +
        "Should you witness someone behaving in a manner that you consider unacceptable or inappropriate, the first thing you should do is make sure the conversation has ended. Only when the chat has returned to normal discussion should you take a screenshot of the conversation, and then post it as evidence in #warning-list. This also includes images or conversations deleted from within the discord server. Should there be a warning needed for topics or issues within voice chats, please note down who else was present and witness to this within your post in <#474555372338675713>.")
        .addField("\u200b", "Depending on the severity of topics, you should take it upon yourself to issue a warning to the involved parties. DO NOT be afraid to approach other admins asking for advice. We are a team and back each other fully.\n\n" +
        "Again, we expect our admins to react without bias, or any favouritism.\n\n" )
        .addField("\u200b", "Allowing guests leaves us vulnerable to mass spam/troll attacks, so please remember to remain vigilant and alert, and be prepared to kick & ban as fast as possible should we ever fall victim.\n\n" +"With the introduction of the clan pin system should a spam attack occur do not be afraid to set a pin, if you do, make sure you take the following steps:\n"+
        " • Announce in cc you will be setting a pin and any guests should send you a PM or check discord for the current pin.\n\n" +
        " • Inform everyone in Admin that you are applying a pin due to a troll attack.\n\n"+
        " • @everyone in #clan-announcements that the pin is active and clearly state what the current pin is.\n\n")
	 	.addField("\u200b"," • Provide evidence in #admin showing why the pin was activated.\n\n" +
        " • Be prepared to request back-up from <#261530348310102019> if you ever feel overwhelmed in any situation.\n\n" +
        " • To help you communicate with each other better you will be assigned specific roles in the discord to show which team you are a part of, you will all be able to tag each other with either @EventsTeam or @CommunityManagement, you will also have access to not only the general #admin channel but #Communityadmin and #Eventsadmin channels, these specific channels are to help you stay more organised and are not for chit chat.")
        .setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/138/peace-symbol_262e.png")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
		
    }
}

module.exports = AdminPeaceCommand;
