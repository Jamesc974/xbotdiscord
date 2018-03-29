const Discord = require ("discord.js");

exports.run = (client, message, args) => {
    let iconm = message.author.avatarURL;
    let helpembed = new Discord.RichEmbed()
    .setDescription("Menu Joueur/Membre")
    .setColor("#ffffff")
    .addField("📘 Commandes de basse", "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    .addField(" ▶️ 4K", "<4K")
    .addField(" ▶️ Amateur", "<amateur")
    .addField(" ▶️ Asiatique", "<asian")
    .addField(" ▶️ Ass/Cul", "<ass")
    .addField(" ▶️ Boobs", "<boobs")
    .addField(" ▶️ Cosplay", "<cosplay")
    .addField(" ▶️ Gif", "<gif")
    .addField(" ▶️ Hentai", "<hentai")
    .addField(" ▶️ Pussy/Vagin", "<pussy")
    .addField(" ▶️ Snapchat", "<snapchat")
    .addField(" ▶️ Milf", "<milf")
    .addField(" ▶️ BBW/Grosse", "<bbw")
    .addField(" ▶️ Dick/Bite", "<dick")
    .addField(" ▶️ Public/Extérieure", "<public")
    .addField(" ▶️ Unirform/Militaire", "<uniform")
    .addField(" ▶️ NSFW : Commande", "<nsfw");
    
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
