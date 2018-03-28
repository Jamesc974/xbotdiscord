const Discord = require("discord.js");
const client = new Discord.Client();
var request = require("superagent");

//----------------------------------------------
var token = (process.env.TOKEN)
var prefix = (process.env.PREFIX)
//----------------------------------------------

client.on("ready", async () => {
    console.log(`${client.user.username} est en ligne sur ${client.guilds.size} serveurs!`);
    client.user.setPresence({ game: { name: `[^^nsfw] || connecté à ${client.guilds.size} serveur || créé par TarKyo`}})
  
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

client.login(token);