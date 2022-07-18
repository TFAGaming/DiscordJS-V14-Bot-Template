const { EmbedBuilder } = require("discord.js"); 

module.exports = {
  name: "embed",
  permissions: ['SendMessages'],
  run: async (client, message, args, prefix, config) => {

    message.reply({ embeds: [
      new EmbedBuilder()
        .setDescription("Embed message!")
        .setColor("Red")
    ] })
    
  },
};