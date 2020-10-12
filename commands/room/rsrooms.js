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
        .setDescription("<#715941405981147156> - Use this room to talk about anything RS3 related. \n \n <#634852500775632897> - Please keep the discussions in this room to events related only any other conversations will be removed. \n \n <#408004706720546817> - Post all your boss drops, clue rewards, skill achievements, quests completed and goals achieved here! \n \n <#385483677460856842> - Use this room for helpful advice on bosses, clues, quests, etc. \n \n <#330826748822421504> - Share your fashionscape with the clan! \n \n <#266020755760873473> - Please post any and all announcements you have, be they runescape related, birthdays, important LGBT+ news, it all goes in here.\n \n  <#266020206973943818> - Please use this room for all runeinfo bot commands. \n \n <#759878943859146762> - Feed of all clan members achievements in Runescape.")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = RsRoomCommand;

