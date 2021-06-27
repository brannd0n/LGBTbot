const commando = require('discord.js-commando');
const discord = require('discord.js');

class LgbtrolesCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'lgbtroles',
            group: 'welcome',
            memberName: 'lgbtroles',
            description: 'Discord roles.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.MessageEmbed()
        .setColor(0x22FF00)
        .setFooter("Last updated")
        .setTimestamp()
        .addField("**LGBT+ Roles:**", "Gay - <:gay:760247670601416745> \n \nStraight - <:Straight_Ally:760251281889296475> \n \nIntersex - <:heart_intersex:653974414332919808> \n \nDrag queen - <:Drag_Queen:760254958615658547>  \n \nHomoromantic - <:Homoromantic:760269012751351812> \n \nDemisexual - <:demi_sexual:760240743133479014> \n \nGenderqueer - <:gender_queer:760262143491702825> \n \nQuestioning - <:Questioning:760248318541692948> \n \nAsexual - <:asexual:760239518187388928>  \n \nBisexual - <:bisexual:760240615899267132>  \n \nHeteromantic - <:heteromantic:760268602343030785>  \n \nAromantic - <:heart_aro:653974223966044220> \n \nPolymerous - <:poly_heart:760269565488791582> \n \nTransgender - <:trans:760239459584704582> \n \nPansexual - <:pansexual:760240214144188486> \n \nOmnisexual - <:omnisexual:760250643280953344>  \n \nTransmasculine - <:trans_masculine:760244254349721661> \n \nTransfemine - <:trans_feminine:760248772076503102>  \n \nLesbian - <:lesbian:760240320285245450> \n \nPanromantic - <:Panromantic:760270411249745980>")
        message.channel.send(myInfo)
    }
}

module.exports = LgbtrolesCommand;
