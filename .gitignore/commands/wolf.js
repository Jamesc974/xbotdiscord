const Discord = require("discord.js");
const fs = require("fs");
const rn = require('random-number');
const hug = ["http://www.spiritanimal.info/pictures/wolf/Wolf-Spirit-Animal-6.jpg",
             "http://or7expedition.org/wp-content/uploads/2016/01/553353417.jpg",
             "https://static1.squarespace.com/static/58051e44e6f2e1b132c6ee34/58051ee2f5e2311a8d650956/5877b729ff7c50ba8358b046/1484240766564/wolf.jpg?format=2500w",
             "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5Ny84NDUvb3JpZ2luYWwvY2FuaXMtbHVwdXMtZ3JheS13b2xmLmpwZw==",
             "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5Ny84NDUvb3JpZ2luYWwvY2FuaXMtbHVwdXMtZ3JheS13b2xmLmpwZw==",
             "https://image.noelshack.com/fichiers/2018/22/2/1527625029-kowine3.png",
             "https://hdanimalspot.com//storage/upload/wolf/wolf-3.jpg",
             "https://soundbeat.org/wp-content/uploads/2016/04/wolf-5.jpg",
             "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/monotone-timber-wolf-tony-beck.jpg",
             "https://cdn.maisonsdumonde.com/img/tableau-loup-plexiglas-120x120-1000-5-34-155096_1.jpg",
             "http://www.association-oiseaux-nature.com/wp-content/uploads/2016/01/hurlement-loup1.jpg",
             "http://loupassion.e-monsite.com/medias/album/images/loup-de-l-arctique-.jpg?fx=r_550_550"
           
]


exports.run = async (client, message) => {
    
    let iconm = message.author.avatarURL
    let r = rn({
        min: 0,
        max: hug.length - 1,
        integer: true
    });
    let image = hug[r];
    message.delete().catch(O_o=>{});
    let embed = new Discord.RichEmbed()
    .setAuthor(`🐺 Loup / Wolf`, iconm)
    .setImage(image)
    .setColor("#DBA901")
    .setFooter(`Demandé par ${message.author.tag}`, iconm);
    message.channel.sendMessage(embed);
}
