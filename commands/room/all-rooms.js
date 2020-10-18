const commando = require('discord.js-commando');
const DiscRoomCommand = require('./Discrooms.js');
const GenRoomCommand = require('./Genrooms.js');
const RsRoomCommand = require('./rsrooms.js');
const OsrsRoomCommand = require('./osrsrooms.js');
const GamingRoomCommand = require('./gaming.js');
const MiscRoomCommand = require('./miscrooms.js');
const VoiceRoomCommand = require('./voicerooms.js');
const RuneInfoCommand = require('./runeinfo.js');
const CharCommsCommand = require('./Charcomms.js');
const ClockCommsCommand = require('./clockcomms.js');
const DdCommsCommand = require('./ddcomms.js');
const BossingCommsCommand = require('./bossingcomms.js');
const MiscCommsCommand = require('./misccomms.js');
const FriendlyCommand = require('./friendly.js');

var discrooms, genrooms, rsrooms, osrsrooms, gaming, miscrooms, voicerooms, runeinfo, charcomms, clockcomms, ddcomms, bossingcomms, misccomms, friendly;

class AllRoomsCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'all-rooms',
            group: 'room',
            memberName: 'all-rooms',
            description: 'Does all room info messages'
        });

        discrooms = new DiscRoomCommand(client);
        genrooms = new GenRoomCommand(client);
        rsrooms = new RsRoomCommand(client);
        osrsrooms = new OsrsRoomCommand(client);
        gaming = new GamingRoomCommand(client);
        miscrooms = new MiscRoomCommand(client);
        voicerooms = new VoiceRoomCommand(client);
        runeinfo = new RuneInfoCommand(client);
        charcomms = new CharCommsCommand(client);
        clockcomms = new ClockCommsCommand(client);
        ddcomms = new DdCommsCommand(client);
        bossingcomms = new BossingCommsCommand(client);
        misccomms = new MiscCommsCommand(client);
        friendly = new FriendlyCommand(client);
    }

    async run(message, args)
    {
        message.delete();
        discrooms.run(message)
            .then(genrooms.run(message))
            .then(rsrooms.run(message))
            .then(osrsrooms.run(message))
            .then(gaming.run(message))
            .then(miscrooms.run(message))
            .then(voicerooms.run(message))
            .then(runeinfo.run(message))
            .then(charcomms.run(message))
            .then(clockcomms.run(message))
            .then(ddcomms.run(message))
            .then(bossingcomms.run(message))
            .then(misccomms.run(message))
            .then(friendly.run(message))

    }
}

module.exports = AllRoomsCommand;
