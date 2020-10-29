const commando = require('discord.js-commando');
const AdminWelcomeCommand = require('./admin-welcome.js');
const AdminDutiesCommand = require('./admin-duties.js');
const AdminRolesCommand = require('./admin-roles.js');
const AdminResponsibilitiesCommand = require('./admin-responsibilities.js');
const AdminPeaceCommand = require('./admin-peace.js');
const AdminWarningsCommand = require('./admin-warnings.js');
const AdminRecruitmentCommand = require('./admin-recruitment.js');
const AdminInvitesCommand = require('./admin-invites.js');
const AdminLinksCommand = require('./admin-links.js');
var welcome, duties, roles, responsibilities, peace, warnings, recruitment, invites, links;

class WelcomeAllCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'handbook',
            group: 'admin',
            memberName: 'handbook',
            description: 'Does all admin handbook messages'
        });
        welcome = new AdminWelcomeCommand(client);
        duties = new AdminDutiesCommand(client);
        roles = new AdminRolesCommand(client);
        responsibilities = new AdminResponsibilitiesCommand(client);
        peace = new AdminPeaceCommand(client);
        warnings = new AdminWarningsCommand(client);
        recruitment = new AdminRecruitmentCommand(client);
        invites = new AdminInvitesCommand(client);
        links = new AdminLinksCommand(client);
    }

    async run(message, args)
    {
        message.delete();
        welcome.run(message)
            .then(duties.run(message))
            .then(roles.run(message))
            .then(responsibilities.run(message))
            .then(peace.run(message))
            .then(warnings.run(message))
            .then(recruitment.run(message))
            .then(invites.run(message))
            .then(links.run(message));
    }
}

module.exports = WelcomeAllCommand;
