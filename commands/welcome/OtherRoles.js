const commando = require('discord.js-commando');
const discord = require('discord.js');

class OtherrolesCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'otherroles',
            group: 'welcome',
            memberName: 'otherroles',
            description: 'Discord roles.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.MessageEmbed()
        .setColor(0xFF9200)
        .setFooter("Last updated")
        .setTimestamp()
        .addField("**Other Roles:**", "Pokemon Go - <:pokeball:760303716871438336> \n \nNintendo - <:Nintendo:760304615073120276> \n \nXbox - <:Xbox:760303353456099328> \n \nPlaystation - <:Playstation:760306144186466345>\n \nSteam - <:Steam:760303410883854336> \n \nPC - <:PC:760305504936263681>\n \nMinecraft - <a:minecraft:925803557272297522>\n \nMovie Night - 🎥 \n \nMuggle - <:muggle:760272621878509568> \n \nGryffindor - <:Gryffindor:305505772438028288> \n \nHufflepuff - <:hufflepuff:306825962140598272>\n \nRavenclaw - <:ravenclaw:346329202951192586> \n \nSlytherin - <:slytherin:305498125936885760> \n \nClan Newsletter - 🗞️")
        message.channel.send(myInfo)
    }
}

module.exports = OtherrolesCommand;
