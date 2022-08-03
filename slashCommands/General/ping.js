const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Return websocket ping",
  run: async (client, interaction, config, db) => {
    
    interaction.reply({ embeds: [
      new EmbedBuilder()
        .setDescription(`${client.ws.ping} ms!`)
    ] })
    
  },  
};
