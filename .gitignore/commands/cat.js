const Discord = require("discord.js");
const fs = require("fs");
const rn = require('random-number');
const hug = ["https://www.vulgaris-medical.com/sites/default/files/styles/big-lightbox/public/field/image/actualites/2018/02/26/le-chat-source-de-bienfaits-pour-votre-sante_1.jpg", "http://a57.foxnews.com/images.foxnews.com/content/fox-news/lifestyle/2017/11/09/how-to-keep-cat-from-scratching-your-sofa-to-shreds/_jcr_content/par/featured_image/media-0.img.jpg/931/524/1510172827500.jpg?ve=1&tl=1&text=big-top-image", "http://static.cotemaison.fr/medias_10824/w_2048,h_1146,c_crop,x_0,y_68/w_640,h_360,c_fill,g_north/v1456391043/10-astuces-pour-rendre-votre-chat-heureux_5542219.jpg", "http://cdn-europe1.new2.ladmedia.fr/var/europe1/storage/images/europe1/insolite/jackpot-pour-le-chat-grincheux-qui-gagne-710000-dollars-au-tribunal-3555383/46364105-1-fre-FR/Jackpot-pour-le-Chat-Grincheux-qui-gagne-710.000-dollars-au-tribunal.jpg", "http://www.tmvtours.fr/wp-content/uploads/sites/tours/PAUSE_WTF8.jpg"]


exports.run = async (client, message) => {
    
    let iconm = message.author.avatarURL
    let r = rn({
        min: 0,
        max: hug.length - 1,
        integer: true
    });
    let image = hug[r];
    let embed = new Discord.RichEmbed()
    .setAuthor(`🐱 Chat`, iconm)
    .setImage(image)
    .setColor("#DBA901")
    .setFooter(`Demandé par ${message.author.tag}`, iconm);
    message.channel.sendMessage(embed);
}
