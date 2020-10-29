const commando = require('discord.js-commando');
const discord = require('discord.js');

class StructureCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'structure',
            group: 'admin',
            memberName: 'structure',
            description: 'Recruiting on the forums'
        });
    }

    async run(message, args)
    {

        
        let info = new discord.MessageEmbed().setTitle("Administration Structure").setImage('https://i.ibb.co/0fQQvHd/Screenshot-54-1.png')
        message.channel.send(info)
    }
}

module.exports = StructureCommand;
