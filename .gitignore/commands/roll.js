function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  
 exports.run = async (client, msg) => {
    if(msg.author.id == "104935392658137088", "303268462191706113") {
        msg.channel.sendMessage(`**${msg.author.username}** a Lancé la loterie !💸 \n\n💲 | 💲 | 💲\n\nTu as gagné bien jouer!🌟🎉`);
    } else {
        const slotOptions = ['💲', '🌮', '🍇', '🍎', '🍅', '🍓', '🍉', '🍋', '🍪'];
        const slot1 = slotOptions[randomInt(0, 8)];
        JSON.stringify(slot1);
        const slot2 = slotOptions[randomInt(0, 8)];
        JSON.stringify(slot2);
        const slot3 = slotOptions[randomInt(0, 8)];
        JSON.stringify(slot3);
        const slotMessage = await msg.channel.send(`**${msg.author.username}** a Lancé la loterie !💸 `);
        slotMessage.edit(`**${msg.author.username}** a Lancé la loterie !💸 \n\n | |`);
        slotMessage.edit(`**${msg.author.username}** a Lancé la loterie !💸 \n\n${slot1}| |`);
        slotMessage.edit(`**${msg.author.username}** a Lancé la loterie !💸 \n\n${slot1} | ${slot2} |`);
        slotMessage.edit(`**${msg.author.username}** a Lancé la loterie !💸 \n\n${slot1} | ${slot2} | ${slot3}`);
        if (slot1 == slot2 && slot1 == slot3 && slot2 == slot3) {
        slotMessage.edit(`**${msg.author.username}** a Lancé la loterie !💸 \n\n${slot1} | ${slot2} | ${slot3}\n\nTu as gagné bien jouer!🌟🎉`);
        } else {
        slotMessage.edit(`**${msg.author.username}** a Lancé la loterie !💸 \n\n${slot1} | ${slot2} | ${slot3}\n\nTu as perdu ! 😢 \nEssaye plus tard 🌗`);
        }
}};
