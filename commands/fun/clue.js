const commando = require('discord.js-commando');
const discord = require('discord.js');

class ClueCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'clue',
            group: 'fun',
            memberName: 'clue',
            description: 'Tags Hayley.'
        });
    }

    async run(message, args)
    {
        message.channel.send("<@439868870837272577>");
    }
}

module.exports = ClueCommand;
