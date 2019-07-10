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
        .setDescription("<#298258032083861504> - Post pictures of memes or anything random really. \n \n <#241345222984990721> - Stuff that isn't really suitable for general chat in here (within reason) \n \n <#322392600030085121> - Show us your lovely faces \n \n <#353281345725923328> - Pictures of fur babies in here please \n \n <#362370714688421888> - Share your food, pretty views, where you have been, anything you are up to irl basically \n \n <#331534959657615410> - Share ALL of your music links in here please, no other rooms.")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = MiscRoomCommand;