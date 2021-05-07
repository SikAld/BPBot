// Const for Discord
const Discord = require('discord.js');
const client = new Discord.Client();
const join = require("./joinServ");
const prefix = "$$";


client.on('ready', () => {
});


client.on('message', message => {
    if (message.author.bot) return;

    if (message.content.toLowerCase().startsWith(prefix + "mcm")) {
        join.setRole(message);
    }

    if (message.content.toLocaleLowerCase().startsWith(prefix + "assign")){
        let mots = message.content.toLocaleLowerCase().split(" ");
        mots.forEach(function(mot){
            if (mot === "mcm"){
                let role = message.guild.roles.cache.find(role => role.name == 'McM');
                message.member.roles.add(role);
            }

            if (mot === "pve"){
                let role = message.guild.roles.cache.find(role => role.name == 'PvE');
                message.member.roles.add(role);
            }

            if (mot === "raid"){
                let role = message.guild.roles.cache.find(role => role.name == 'Raideurs');
                message.member.roles.add(role);
            }

            if (mot === "fractales"){
                let role = message.guild.roles.cache.find(role => role.name == 'Fractales');
                message.member.roles.add(role);
            }
            message.delete();
        });

    }

    if (message.content.toLowerCase().startsWith(prefix + "list")) {
        const list = client.guilds.cache.get("469838481770938368");
        let username = "";
        let nbJoueurs = list.members.fetch().then(r => {
            r.members.array().forEach(r => {
                username += r.user.username;
            })
            message.author.send(username);
        });

    }
});

client.login('ODE3NDUzNTkwNjU4MTU0NDk2.YEJu-w.NySrlrrqI5FJVZpk2wnoj_hg9aI');
