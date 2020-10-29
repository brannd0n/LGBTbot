const commando = require('discord.js-commando');
const discord = require('discord.js');

class DivJmodsCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'divjmods',
            group: 'welcome',
            memberName: 'divjmods',
            description: 'Roles info.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.MessageEmbed()
        .setColor(0x00FF00)
        .addField("__Diversity within Jagex__", "Diversity at Jagex is very broad and includes Jmods from varying departments, __**although not everyone from the teams will be in this discord,**__ here is a list of some of the teams that are a part of the diversity group.\n\n" +
        "Analytics & Data Science\n" +
        "Audio\n" +
        "Communications\n" +
        "Community Management & Social Media\n" +
        "Creative Services\n" +
        "CRM\n" +
        "Events\n" +
        "Facilities and Business Support\n" +
        "Finance\n" +
        "Game Engine\n" +
        "Human Resources\n" +
        "IT\n" +
        "Jagex Partners\n" +
        "Legal\n" +
        "Localisation\n" +
        "Marketing\n" +
        "OS Art\n" +
        "Player Support\n" +
        "Recruitment\n" +
        "RuneScape Content\n" +
        "RuneScape QA\n" +
        "Studio Leadership\n" +
        "Tech Services\n" +
        "Tools\n" +
        "Video\n")
        .setThumbnail("https://pngriver.com/wp-content/uploads/2018/04/Download-Team-Work-PNG-Image.png")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.send(myInfo)
    }
}

module.exports = DivJmodsCommand;
