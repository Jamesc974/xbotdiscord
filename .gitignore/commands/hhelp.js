const Discord = require ("discord.js");

exports.run = (client, message, args) => {
    let iconm = message.author.avatarURL;
    let helpembed = new Discord.RichEmbed()
    .setDescription("Menu des commande")
    .setColor("#ffffff")
    .addField("📘 Commandes de basse", "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    .addField(" ▶️ Nudes", "la Commande: **_nsfw** vous permet d'afficher des nudes dans un channel (attention il faut un channel en NSFW)")
    .addField(" ▶️ Pile ou Face", "la Commmande **_flip** vous permez de jouer à **pile** ou **face** ")
    .addField(" ▶️ Loterie", "la Commmande **_roll** est un jeu de loterie")
    .addField(" ▶️ avatar", "la Commmande **_avatar @<player>** vous permez de voir l'avatar des utilisateur");

    try{
        message.delete().catch(O_o=>{});
        message.channel.sendMessage(helpembed);
    }catch(e){
        message.reply("Vos message privé sont verrouillés. Je ne peux pas vous envoyer les commandes.");
    }
}
