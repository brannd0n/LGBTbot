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

        message.channel.send({
  files: ['https://i.ibb.co/0fQQvHd/Screenshot-54-1.png']
})
    }
}

module.exports = StructureCommand;
