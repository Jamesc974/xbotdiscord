const Discord = require("discord.js");
const request = require('snekfetch');
const fs = require("fs")

exports.run = (client, message, args) => {
    var max = 12449;
    var min = 10000;
    var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;
    var MathLoL = Math.round(MathRan);
    var iconm = message.author.avatarURL
    var perm = new Discord.RichEmbed()
    .setAuthor(`😯💦👅 Boobs`, iconm)
    .setImage("http://media.oboobs.ru/boobs_preview/" + MathLoL + ".jpg")
    .setColor("#DBA901")
    .setFooter(`Demandé par ${message.author.tag}`, iconm);
    if (!message.channel.nsfw) { 
        message.channel.send(":underage: Ce n'est pas le bon channel pour mettre ça MON COQUIN ! :smirk: Il en faut un en NSFW").then(message => message.delete(5000))
    } else {
        request.get("http://media.oboobs.ru/boobs_preview/" + MathLoL + ".jpg").then(r => {
            fs.writeFile(`boobs.jpg`, r.body)
            message.channel.sendMessage(perm);
            fs.unlink(`./boobs.jpg`)
            message.delete().catch(O_o=>{});
        })
    }
}