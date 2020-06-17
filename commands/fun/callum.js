const commando = require('discord.js-commando');

class CallumCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'callum',
            group: 'fun',
            memberName: 'callum',
            description: 'Callum'
        });
    }

    async run(message, args)
    {
        message.channel.send("<@500857887074025472> still hasnt done inferno.");
    }
}

module.exports = CallumCommand;
