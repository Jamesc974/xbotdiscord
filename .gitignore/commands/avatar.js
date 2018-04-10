const Discord = require("discord.js");

exports.run = async (bot, msg) => {
  
      const user = msg.mentions.users.first();
      if(!user) return msg.channel.send("❓Tu as mis son nom").then(msg => msg.delete(5000));
      if (!user.avatarURL) return msg.channel.send("Il n'a pas d'avatar").then(msg => msg.delete(5000));
      msg.delete();
      var iconm = msg.author.avatarURL
      var embed = new Discord.RichEmbed()
      .setAuthor(`Avatar`, iconm)
      .setImage(user.avatarURL)
      .setColor("#DBA901")
      .setTimestamp()
      .setFooter(`Demandé par ${msg.author.tag}`, iconm);
      msg.channel.sendMessage(embed)
};
