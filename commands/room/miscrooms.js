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
        var myInfo = new discord.MessageEmbed()
        .setTitle("Miscellaneous Rooms")
        .setColor(0x22FF00)
        .setDescription("<#298258032083861504> - Post pictures of memes or anything random. \n \n  <#241345222984990721> - Nudity is NOT allowed and no graphic images/videos. No posting of anything that targets any other members. No politics. Should you run into any uncertainty about a post ask an admin before doing so. \n \n <#411475810592227328> - Use this room for all things runefest \n \n <#362370714688421888> - Share your food, hobbies, art, etc all in here! \n \n <#322392600030085121> - Show us your lovely faces \n \n <#353281345725923328> - Pictures of fur babies in here please \n \n <#331534959657615410> - Share ALL of your music links in here please, no other rooms.")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.send(myInfo)
    }
}

module.exports = MiscRoomCommand;
