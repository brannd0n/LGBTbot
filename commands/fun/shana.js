const commando = require('discord.js-commando');

class ShanaCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'shana',
            group: 'fun',
            memberName: 'shana',
            description: 'Shana'
        });
    }

    async run(message, args)
    {
        message.reply('Zipfels wife w h e n?');
    }
}

module.exports = ShanaCommand;
