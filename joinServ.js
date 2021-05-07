const Discord = require('discord.js')

exports.listMember = function(message){
    //let guildid = '469838481770938368';
    //let memberWithRole = bot.guilds.cache.get(guildid).roles.find("name", 'MerDeJade').members.map(m=>m.user.username);
    //let membersWithRol    e = message.channel.guild.roles.cache.get('817337559347626032').members;
    //message.author.send('Utilisateur avec le role Mer De Jade('+membersWithRole.size+' membres : '+ JSON.stringify(membersWithRole));
   /* const list = bot.guilds.cache.get("469838481770938368");

    let mdj = message.guild.roles.find("name", "MerDeJade");
    let ra = message.guild.roles.find("name", "RocheAugure");
    let fr = message.guild.roles.find("name", "FortRanik");
    let pa = message.guild.roles.find("name", "PierreArborea");
    let vi = message.guild.roles.find("name", "Vizunah");

    let nbMdj = 0;

    list.members.forEach(function () {
        if (message.member.roles.has(allowedRole.id)){
            nbMdj++;
        }
    });

    message.author.send('Repartition McM : '
                            + '\n Mer De Jade : '+nbMdj+' joueurs');
*/
   console.log(bot);
}

exports.setRole = function(message, user){
    message.author.send('Salut à toi :) ! Donc, tu veux faire du McM mais sur quel serveur es-tu ? : ' +
        //'\n1 - Licence SARI 21' + 
        '\n1 - Mer de Jade' +
        '\n2 - Roche de l\'Augure '+
        '\n3 - Fort Ranik '+
        '\n4 - Pierre Arborea '+
        '\n5 - Place de Vizunah ')
        .then(function(dmessageS){
            dmessageS.channel.awaitMessages(response => message.content, {
                max: 1,
                time: 300000000,
                errors: ['time'],
            })
                .then((collected) => {
                    if (collected.first().content == '1') {
                        let role = message.guild.roles.cache.find(role => role.name == 'MerDeJade');
                        message.member.roles.add(role);
                    }
                    if (collected.first().content == '2') {
                        let role = message.guild.roles.cache.find(role => role.name == 'RocheAugure');
                        message.member.roles.add(role);
                    }
                    if (collected.first().content =='3') {
                        let role = message.guild.roles.cache.find(role => role.name == 'FortRanik');
                        message.member.roles.add(role);
                    }
                    if (collected.first().content =='4') {
                        let role = message.guild.roles.cache.find(role => role.name == 'PierreArborea');
                        message.member.roles.add(role);
                    }
                    if (collected.first().content =='5') {
                        let role = message.guild.roles.cache.find(role => role.name == 'Vizunah');
                        message.member.roles.add(role);
                    }

                    message.member.send("Merci à toi, ton rôle t'as été atribué ! Bon jeu à toi");

                })
                .catch(function(e){
                    console.error(e.message);
                });

        });
}