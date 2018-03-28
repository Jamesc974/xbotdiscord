const request = require('snekfetch');
const fs = require("fs")
const Discord = require("discord.js")
exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: Ce n'est pas le bon channel pour mettre ça MON COQUIN ! :smirk: Il en faut un en NSFW").then(message => message.delete(5000))
    message.delete().catch(O_o=>{});
    
    var topics = [
        'cum',
        'cumshot',
        'anal',
        'oral',
        'teen',
        'tits',
        "milf",
        "creampie"
    ]
    const Pornsearch = require('pornsearch').search(topics[Math.round(Math.random() * (topics.length - 1))]);
    
    Pornsearch.gifs(1)
    .then(gifs => {
        let gifrnd = gifs.map(gif => gif.url)
        if (message.mentions.users.first()) {
            let embed = new Discord.RichEmbed()
            .setTitle(`:point_right: :ok_hand: **${message.author.username}** fait l'amour à ${message.mentions.users.first().username}`)
            .setImage(gifrnd[Math.floor(Math.random() * gifrnd.length)])
            .setColor(0xFFA500)
            message.channel.send({
                embed: embed
            })
        } else {
            let embed = new Discord.RichEmbed()
            .setTitle(`:point_right: :ok_hand: **${message.author.username}** fait l'amour à **${client.user.username}**`)
            .setImage(gifrnd[Math.floor(Math.random() * gifrnd.length)])
            .setColor(0xFFA500)
            message.channel.send({
                embed: embed
            })
        }
    })
}
