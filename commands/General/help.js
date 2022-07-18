const { EmbedBuilder } = require("discord.js"); 

module.exports = {
  name: "help",
  permissions: ['SendMessages'],
  run: async (client, message, args, prefix, config) => {

    message.reply({ embeds: [
      new EmbedBuilder()
        .setTitle("Help menu")
        .setDescription(`\`${prefix}embed\`, \`${prefix}help\`, \`${prefix}ping\`.`)
        .setColor("Blue")
    ] });
    
  },
};