const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: Ce n'est pas le bon channel pour mettre ça MON COQUIN ! :smirk: Il en faut un en NSFW").then(message => message.delete(5000))
    message.delete().catch(O_o=>{});

    const subreddits = [
        "NSFW_GIF",
        "nsfw_gifs",
        "porninfifteenseconds",
        "60FPSPorn",
        "porn_gifs",
        "nsfw_Best_Porn_Gif",
        "LipsThatGrip",
        "adultgifs"
    ]

    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
            .then(url => {
                var iconm = message.author.avatarURL
                const embed = new Discord.RichEmbed()
                .setAuthor(`😯💦👅 PORNGIF`, iconm)
                .setImage(url)
                .setColor("#DBA901")
                .setFooter(`Demandé par ${message.author.tag}`, iconm);
                message.channel.send({ embed });
                
        })
}