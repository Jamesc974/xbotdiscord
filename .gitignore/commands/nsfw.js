const Discord = require ("discord.js");

exports.run = (client, message, args) => {
    let iconm = message.author.avatarURL;
    let helpembed = new Discord.RichEmbed()
    .setDescription("Menu Joueur/Membre")
    .setColor("#ffffff")
    .addField("📘 Commandes de basse", "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    .addField(" ▶️ 4K", "_4K")
    .addField(" ▶️ Amateur", "_amateur")
    .addField(" ▶️ Asiatique", "_asian")
    .addField(" ▶️ Ass/Cul", "_ass")
    .addField(" ▶️ Boobs", "_boobs")
    .addField(" ▶️ Cosplay", "_cosplay")
    .addField(" ▶️ Gif", "_gif")
    .addField(" ▶️ Hentai", "_hentai")
    .addField(" ▶️ Pussy/Vagin", "_pussy")
    .addField(" ▶️ Snapchat", "_snapchat")
    .addField(" ▶️ Milf", "_milf")
    .addField(" ▶️ BBW/Grosse", "_bbw")
    .addField(" ▶️ Dick/Bite", "_dick")
    .addField(" ▶️ Public/Extérieure", "_public")
    .addField(" ▶️ Unirform/Militaire", "_uniform")
    .addField(" ▶️ NSFW : Commande", "_nsfw");
    
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
