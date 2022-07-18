const { EmbedBuilder } = require("discord.js"); 

module.exports = {
  name: "ping",
  permissions: ['SendMessages'],
  run: async (client, message, args, prefix, config) => {

    message.reply({ embeds: [
      new EmbedBuilder()
        .setDescription(`🏓 **Pong!** Client websocket ping: \`${client.ws.ping}\` ms.`)
        .setColor("Green")
    ] })
    
  },
};