const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const Discord = require("discord.js");
const fs = require("fs")

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: Ce n'est pas le bon channel pour mettre ça MON COQUIN ! :smirk: Il en faut un en NSFW").then(message => message.delete(5000))
    message.delete().catch(O_o=>{});

    var subreddits = [
        'NSFW_Wallpapers',
        'SexyWallpapers',
        'HighResNSFW',
        'nsfw_hd',
        'UHDnsfw'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            request.get(url).then(r => {
                var iconm = message.author.avatarURL
                var embed = new Discord.RichEmbed()
                .setAuthor(`😯💦👅 4K`, iconm)
                .setImage(url)
                .setColor("#DBA901")
                .setFooter(`Demandé par ${message.author.tag}`, iconm);
                fs.writeFile(`4k.jpg`, r.body)
                message.channel.sendMessage(embed)
                fs.unlink(`./4k.jpg`)
            })
        })
}