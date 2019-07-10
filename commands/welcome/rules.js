const commando = require('discord.js-commando');
const discord = require('discord.js');

class RulesCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'rules',
            group: 'welcome',
            memberName: 'rules',
            description: 'Rules.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0xFD6600)
        .setFooter("Last updated")
        .setTimestamp()
        .addField("📇 __SERVER RULES__", "**1)** Please use your RSN as your nick- \n name in our server to avoid confusion. \n *Type the following in any discord\n channel:* \n ```/nick (your RSN)``` \n **2)** If you are planning on going inactive\n for a significant period of time, please\n inform an admin before you go! \n \n **3)** Please follow all of Jagex's rules.\n Botting will **NOT** be tolerated. \n \n **4)** No hate speech. End of story. \n \n **5)** Keep drama out of the clan chat. \n \n **6)** Under **NO** circumstances are\n pictures of genitalia allowed to be\n posted in any channel. \n \n **7)** We are a Runescape clan providing a\nsafe and friendly environment for all our\nLGBT members. We acknowledge that life is\ntough sometimes, but we are not a support\ngroup. Some topics of conversation aren't\nacceptable for clan chat. \n \n **8)** No external discord servers are to be \nshared unless via pm.", true)
        .addField("📇 __VOICE CHAT RULES__", "**1)** Under **NO** circumstances should\n sexual material be brought into voice\n channels. \n \n **2)** Please be considerate of everyone in \n voice. \n \n **3)** Please don't loiter, we have a limited\n amount of channels, so please try not\n to sit in a channel by yourself for\n  hours. \n \n **4)** Please use <#397852754619662336> \n when you can't speak. \n \n **5)** Please allow everyone to have a\n chance to talk, although it might get\n busy/crowded, everyone deserves to\n talk.", true)
        .addField(" \u200b ", "Should you witness something in the Runescape Clan Chat, or in any of our discord channels, that you believe an Admin should see, please take some screenshots and forward any evidence to an Admin directly via private message. \n \n __**Leadership Team:**__ <@218474045325180938>, <@174282004320354304>, <@139334854201442304>, & <@284771491478765568> \n \n __**Admins:**__ <@147050474325934080>, <@369830086590988288>, <@211973520639524864>, <@439868870837272577>, <@174725556011532289>, <@148577013819637761>, & <@101376189574160384>   \n \n __**Honorary Admins:**__ <@461598096795631616>, <@241373373098098691> & <@330067938986033153>")
        .addField(" \u200b ", "**GLOBAL REACH:** 🇬🇧 🇺🇸 🇮🇹 🇩🇪 🇨🇦 🇧🇴 🇨🇾 🇧🇷 🇵🇹 🇯🇲 🇦🇼 🇦🇺 🇳🇿 🇨🇭 🇧🇪 🇧🇻 🇸🇪 🇳🇱 🇲🇽 🇸🇬 🇨🇿");
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = RulesCommand;
