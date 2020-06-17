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
        message.channel.send("<@165225595733671937> agressively eats carrots.");
    }
}

module.exports = ReindeerCommand;
