const Discord = require("discord.js");
const request = require('snekfetch');
const fs = require("fs")

exports.run = (client, message, args) => {
    var max = 5511;
    var min = 1000;
    var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;
    var MathLoL = Math.round(MathRan);
    if (!message.channel.nsfw) { 
        message.channel.send(":underage: Ce n'est pas le bon channel pour mettre ça MON COQUIN ! :smirk: Il en faut un en NSFW").then(message => message.delete(5000))
    } else {
        var randomname = Math.floor(Math.random() * (99999999999999999999 - 11111111111111111111 + 0)) + 11111111111111111111;
        request.get("http://media.obutts.ru/butts_preview/0" + MathLoL + ".jpg").then(r => {
            fs.writeFile(`ass.jpg`, r.body)
            var iconm = message.author.avatarURL
            var embed = new Discord.RichEmbed()
            .setAuthor(`😯💦👅 ASS`, iconm)
            .setImage("http://media.obutts.ru/butts_preview/0" + MathLoL + ".jpg")
            .setColor("#DBA901")
            .setFooter(`Demandé par ${message.author.tag}`, iconm);
            message.channel.sendMessage(embed)
            fs.unlink(`./ass.jpg`)
            message.delete().catch(O_o=>{});
        })
    }
}