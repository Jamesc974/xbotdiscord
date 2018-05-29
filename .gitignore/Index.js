const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();
var request = require("superagent");

//----------------------------------------------
var prefix = (process.env.PREFIX)
var help = "_help"
//----------------------------------------------

client.on('guildCreate', (g) => {
  let channels = g.channels
  channels = channels.filter(c => c.type === "text")
  let defaultChannel = channels.first()
  if (defaultChannel && defaultChannel.send) defaultChannel.send(":wave::skin-tone-1: Salut! Je suis " + '`' + client.user.username + '`' + "\nLes commandes normales marche avec le prefix" + '`' + prefix + '`' + "\nJe suis un robot polyvalent qui vise à augmenter l'activité d'utilisateur sur vos serveurs de Discord.\nCommande pour afficher la liste des commandes:"+ '`' + help + '`' )
})

client.on("ready", async () => {
    console.log(`${client.user.username} est en ligne sur ${client.guilds.size} serveurs!`);
    client.user.setPresence({ game: { name: `_help | sur ${client.guilds.size} serveur | by TarKyo`}})
  
  });

client.on("message", message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error(err);
    }
});

let options = ["pile", "face"];

client.on('message', msg => {
  if (msg.content === prefix + "flip") {

    msg.delete().catch(O_o=>{});
    msg.channel.sendMessage(`**${msg.author.username}**, Tu a fait **${options[Math.floor(Math.random() * options.length)]} **!`);
    
  }
});

client.on("guildCreate", guild => {
  console.log(`-------------------------------[ Nouveau serveur ]-------------------------------`);
  console.log(`Le bot a rejoint le serveur ${guild.name}, createur: ${guild.owner.user.tag}`);
  console.log(`----------------------------------------------------------------------------------`);

});

client.login(process.env.CLEF);
