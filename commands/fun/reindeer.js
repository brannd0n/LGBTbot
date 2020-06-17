const commando = require('discord.js-commando');

class ReindeerCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'reindeer',
            group: 'fun',
            memberName: 'reindeer',
            description: 'reindeer'
        });
    }

    async run(message, args)
    {
        message.reply('agressively eats carrots.');
    }
}

module.exports = ReindeerCommand;
