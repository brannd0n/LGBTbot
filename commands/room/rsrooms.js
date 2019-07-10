const commando = require('discord.js-commando');
const discord = require('discord.js');

class RsRoomCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'rsrooms',
            group: 'room',
            memberName: 'rsrooms',
            description: 'Runescape rooms info.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("Runescape Rooms")
        .setColor(0xFBD700)
        .setDescription("<#266020755760873473> - Please post any and all announcements you have, be they runescape related, birthdays, important LGBT+ news, it all goes in here. \n \n <#266020206973943818> - Please use this room for all runeinfo bot commands \n \n <#330826748822421504> - Share your fashionscape with the clan! \n \n <#385483677460856842> - Use this room for helpful advice on bosses, clues, quests, etc, etc \n \n  <#408004706720546817> - Show us your drops, clue rewards, skill achievements, goals you have set and how close you are to achieving them. \n \n <#411475810592227328> - Use this room for all things runefest \n \n <#476868165259755526> - For people to exchange and call warband camps and worlds \n \n <#459028578013806611> - To help clan mates put together teams for bosses which might need a few extra people")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = RsRoomCommand;