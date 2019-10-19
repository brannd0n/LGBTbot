const commando = require('discord.js-commando');
const DivWelcomeCommand = require('./DivWelcome.js');
const DivWelcome2Command = require('./divwelcome2.js');
var divwelcome, divwelcome2;

class DivWelcomeAllCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'divwelcome-all',
            group: 'welcome',
            memberName: 'divwelcome-all',
            description: 'Does all welcome messages'
        });
        divwelcome = new DivWelcomeCommand(client);
        divwelcome2 = new DivWelcome2Command(client);

    }

    async run(message, args)
    {
        message.delete();
        divwelcome.run(message)
            .then(divwelcome2.run(message));
    }
}

module.exports = DivWelcomeAllCommand;
