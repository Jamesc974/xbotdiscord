const Discord = require ("discord.js");

exports.run = (client, message, args) => {
    let iconm = message.author.avatarURL;
    let helpembed = new Discord.RichEmbed()
    .setDescription("Menu des commande")
    .setColor("#ffffff")
    .addField("📘 Commandes de basse", "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    .addField(" ▶️ Nudes", "la Commande: **xnsfw** vous permet d'afficher des nudes dans un channel (attention il faut un channel en NSFW)")
    .addField(" ▶️ Pile ou Face", "la Commmande **!flip** vous permez de jouer à **pile** ou **face** ")
    .addField(" ▶️ Loterie", "la Commmande **!roll** est un jeu de loterie")
    .addField(" ▶️ avatar", "la Commmande **!avatar @<player>** vous permez de voir l'avatar des utilisateur")
    .addField(" ▶️ Boobs", "xboobs");
    
    let helpembed2 = new Discord.RichEmbed()
    .setAuthor(`📍 Un message contenant les commandes du bot vous a été envoyé !`, iconm)
    .setColor("#8904B1");

    try{
        message.author.send(helpembed);
        message.delete().catch(O_o=>{});
        message.channel.sendMessage(helpembed2).then(msg => msg.delete(5000));
    }catch(e){
        message.reply("Vos message privé sont verrouillés. Je ne peux pas vous envoyer les commandes.");
    }
}