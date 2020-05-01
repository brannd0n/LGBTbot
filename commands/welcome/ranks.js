const commando = require('discord.js-commando');
const discord = require('discord.js');

class RanksCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'ranks',
            group: 'welcome',
            memberName: 'ranks',
            description: 'Ranks.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setColor(0xFBD700)
        .setFooter("Last updated")
        .setTimestamp()
        .addField("🗨️ __Runescape Ranks__ 🗨️", "Within our Runescape clan chat, your rank will reflect the time you have been with us or the amount of XP you have gained whilst with us. They are as followed:", true)
        .addBlankField()
        .addField("😊 __Clan Member Ranks__ 😊", "**Recruit**: Brand new clannie! You must\n pass a one week probation to remain. \n \n **Corporal:** Being active for one week. \n \n **Sergeant:** Being active for one month\n OR gaining 15m clan XP.\n \n **Lieutenant:** Being active for 3 months \n OR gaining 30m clan XP.\n \n**Captain:** Being active for 6 months \n OR gaining 60m clan XP. \n \n **General:** Being active for 1 year \n OR gaining 100m clan XP.", true)
        .addBlankField()
        .addField("⭐ __Staff Ranks__ ⭐", "**Organiser:** Permanent member of the\n admin team.\n \n This staff rank is split into two types of admin, community management & events team. \n \n **Coordinator:** Valued member of the \n admin team, who consistently go the \n extra mile.", true)
        .addField("🔑 __Leadership Team__ 🔑", "**Overseer:** Awarded to trusted members\n of the admin team, who have proven they\n are capable of managing any issue within\n the clan on a daily basis while continuing\n to help improve the clan. \n \n **Owner/Deputy Owner:** Owners and\n founding members. \n Also awarded to members who have shown\n extraordinary commitment to the clan.", true)
        .addField(" \u200b ", "⚠️ **CLAN RANKS WILL BE GIVEN ONCE A DAY** ⚠️", true)
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = RanksCommand;
