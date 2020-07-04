const commando = require('discord.js-commando');
const discord = require('discord.js');

class MiscRoomCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'miscrooms',
            group: 'room',
            memberName: 'miscrooms',
            description: 'Miscellaneous rooms info.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("Miscellaneous Rooms")
        .setColor(0x22FF00)
        .setDescription("<#717797674220257291> - This room is to discuss all types of diversity including LGBTQ+, BAME/POC representation, Women in Games, Disability & Accessibility, Mental Health & Neurodivergence, Class, Religion, Other. ANYONE who is unable to keep a civil conversation, or begins attacking other members in this room will have the ability to use this channel revoked. \n \n <#298258032083861504> - Post pictures of memes or anything random. \n \n <#411475810592227328> - Use this room for all things runefest \n \n  <#241345222984990721> - Nudity is NOT allowed. \n \n <#322392600030085121> - Show us your lovely faces \n \n <#362370714688421888> - Share your food, hobbies, ect all in here! \n \n <#353281345725923328> - Pictures of fur babies in here please \n \n <#331534959657615410> - Share ALL of your music links in here please, no other rooms.")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = MiscRoomCommand;
