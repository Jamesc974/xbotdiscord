let options = ["pile", "face"];

exports.run = (bot, msg) => {

    msg.delete().catch(O_o=>{});
    msg.channel.sendMessage(`**${msg.author.username}**, Tu a fait **${options[Math.floor(Math.random() * options.length)]} **!`);
    

}
