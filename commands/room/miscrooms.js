const commando = require('discord.js-commando');
const discord = require('discord.js');

class MiscRoomCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'miscrooms',
            group: 'room',
            memberName: 'miscrooms',
            description: 'Miscellaneous rooms info.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("Miscellaneous Rooms")
        .setColor(0x22FF00)
        .setDescription("<#717797674220257291> - This room is to discuss all types of diversity including LGBTQ+, BAME/POC representation, Women in Games, Disability & Accessibility, Mental Health & Neurodivergence, Class, Religion, Other. ANYONE who is unable to keep a civil conversation, or begins attacking other members in this room will have the ability to use this channel revoked. \n \n <#731469696351731822> - Feel free to discuss all things disability. Post pics of your hearing aids, walkers, mobility scooters, service animals anything you like. Show support to all disabilities because not all disabilities are visible. Share links to any sites you think might help people have conversations dont feel embarassed to talk about your own disability or someone you know or family members. \n \n <#735508084994342913> - This channel is only for discussions regarding your experiences with sexuality in general. This is a light-hearted channel only, meant for personal experiences only. Any serious topics or debates about other topics regarding sexuality will be asked to move to the Diversity discussion channel. \n \n <#735508142191935488> - This channel is for discussions regarding your experiences with gender only. This is a light hearted channel only, for personal experiences only. Any discussions that cause arguments or lean towards serious subjects will be asked to move to the diversity discussion channel. \n \n <#298258032083861504> - Post pictures of memes or anything random. \n \n  <#241345222984990721> - Nudity is NOT allowed. \n \n <#411475810592227328> - Use this room for all things runefest \n \n <#362370714688421888> - Share your food, hobbies, etc all in here! \n \n <#322392600030085121> - Show us your lovely faces \n \n <#353281345725923328> - Pictures of fur babies in here please \n \n <#331534959657615410> - Share ALL of your music links in here please, no other rooms.")
        .setFooter("Last updated")
        .setTimestamp();
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = MiscRoomCommand;
