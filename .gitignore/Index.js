const Discord = require("discord.js");
const client = new Discord.Client();
var request = require("superagent");

//----------------------------------------------
var token = (process.env.TOKEN)
var prefix = (process.env.PREFIX)
//----------------------------------------------

client.on("ready", async () => {
    console.log(`${client.user.username} est en ligne sur ${client.guilds.size} serveurs!`);
    client.user.setPresence({ game: { name: `[xnsfw] || connecté à ${client.guilds.size} serveur || créé par TarKyo`}})
  
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

client.on('message', message => {
  if (message.content === prefix+'roll'){
    var randomnumber = Math.floor(Math.random() * 50) + 1
    var randomnumber2 = Math.floor(Math.random() * 50) + 1
    var randomnumber3 = Math.floor(Math.random() *50) +1 
    if (randomnumber <25){
      if (randomnumber2 <25){
        if (randomnumber3 <25){
            message.channel.send(':lemon:'+':lemon:'+':lemon:');
            message.reply('Tu as Gagné !');
            fs.writeFile('Gagnant.txt',message.author + 'as gagné', (err) => {
              if (err) throw err;
              console.log('un gagant en plus >> Enregistrement dans Gagant.txt');
            });

          }else{
            message.channel.send(':lemon:'+':lemon:'+':strawberry:');
            message.reply('Tu as perdu !');
          }
        }else{
          if(randomnumber <25){
            message.channel.send(':lemon:'+':strawberry:'+':lemon:');
            message.reply('Tu as perdu !');
          }else{
            message.channel.send(':lemon:'+':strawberry:'+':strawberry:');
            message.reply('Tu as perdu !');
          }
        }
      }else{
        if(randomnumber <25){
          if(randomnumber2 <25){
            message.channel.send(':strawberry:'+':lemon:'+':lemon:');
            message.reply('Tu as perdu !');
          }
        }else{
          if(randomnumber3 <25){
              message.channel.send(':strawberry:'+':strawberry:'+':lemon:');
              message.reply('Tu as perdu !');
          }else{
            message.channel.send(':strawberry:'+':strawberry:'+':strawberry:');
            message.reply('Tu as Gagné bien joué');   
            fs.writeFile('Gagant.txt',message.author + 'as gagné', (err) => {
              if (err) throw err;
              console.log('un gagant en plus >> Enregistrement dans Gagant.txt');
            });
  
          }
  
        }
  
      }
  
    }
});

client.login(token);
