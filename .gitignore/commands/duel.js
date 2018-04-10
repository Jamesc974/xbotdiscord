const Discord = require('discord.js');



exports.run = (client, message) => {

  const duelhelp = new Discord.MessageEmbed()

    .setTitle('Duel Usage')

    .setAuthor('Yuga')

    .setColor(0x32CD32)

    .addField('About', 'Fight with another user!', false)

    .addField('Usage', 'y!duel <user mention>', false)

    .addField('Perms required', 'None')

    .setThumbnail(client.user.avatarURL())

    .setTimestamp();

  const user1 = msg.author;

  const user2 = msg.mentions.users.first();

  if (!user2) {

    return msg.channel.send({

      embed: duelhelp,

    });

  }



  if (user1 == user2) return msg.reply('You can\'t duel yourself!');

  const users = [];

  await users.push(user1);

  await users.push(user2);

  const winner = users[Math.floor(Math.random() * users.length)];

  const message = await msg.channel.send(`${user1} is dueling ${user2}!`);

  await message.edit('⚔ Dueling');

  await message.edit('⚔ Dueling.');

  await message.edit('⚔ Dueling..');

  await message.edit('⚔ Dueling...');

  await message.edit(`${winner} has won!`);

};
