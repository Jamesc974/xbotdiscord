exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: Ce n'est pas le bon channel pour mettre ça MON COQUIN ! :smirk: Il en faut un en NSFW").then(message => message.delete(5000))
    message.delete().catch(O_o=>{})
    message.channel.send("```NSFW Commandes:\nUtilisé ^^\n 4k\n amateur\n asian\n ass\n boobs\n cosplay\n gif\n hentai\n pussy\n snapchat\n milf\n bbw\n dick\n public\n uniform\n\nOther Commands: \n help```")
}