const Discord = require ("discord.js");

exports.run = (client, message, args) => {
    let iconm = message.author.avatarURL;
    let helpembed = new Discord.RichEmbed()
    .setDescription("Menu Joueur/Membre")
    .setColor("#ffffff")
    .addField("📘 Commandes de basse", "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    .addField(" ▶️ 4K", "x4K")
    .addField(" ▶️ Amateur", "xamateur")
    .addField(" ▶️ Asiatique", "xasian")
    .addField(" ▶️ Ass/Cul", "xass")
    .addField(" ▶️ Boobs", "xboobs")
    .addField(" ▶️ Cosplay", "xcosplay")
    .addField(" ▶️ Gif", "xgif")
    .addField(" ▶️ Hentai", "xhentai")
    .addField(" ▶️ Pussy/Vagin", "xpussy")
    .addField(" ▶️ Snapchat", "xsnapchat")
    .addField(" ▶️ Milf", "xmilf")
    .addField(" ▶️ BBW/Grosse", "xbbw")
    .addField(" ▶️ Dick/Bite", "xdick")
    .addField(" ▶️ Public/Extérieure", "xpublic")
    .addField(" ▶️ Unirform/Militaire", "xuniform")
    .addField(" ▶️ NSFW : Commande", "xnsfw");
    
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
