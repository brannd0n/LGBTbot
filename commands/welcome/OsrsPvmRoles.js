const commando = require('discord.js-commando');
const discord = require('discord.js');

class OsrspvmrolesCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'rs3pvmroles',
            group: 'welcome',
            memberName: 'rs3pvmroles',
            description: 'Discord roles.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.MessageEmbed()
        .setColor(0x22FF00)
        .setFooter("Last updated")
        .setTimestamp()
        .addField("**OSRS PVM Roles:**", "Nex - <:osrs_nex:922521370754183268> \n \nBandos - <:osrs_bandos:922521155787714641> \n \nSaradomin - <:osrs_sara:922519534143930418> \n \nArmadyl - <:armadyl:597892443077214211> \n \nZamorak - <:osrs_zamorak:922521155905159198> \n \nDagannoth Kings - <:osrs_dks:922523717593096302>\n \nCorporeal Beast - <:osrs_corp:922523620285223023>  \n \nCox - <:osrs_cox:922523197285498940> \n \nToB - <:osrs_tob:922523397945176104> ")
        message.channel.send(myInfo)
    }
}

module.exports = OsrspvmrolesCommand;
