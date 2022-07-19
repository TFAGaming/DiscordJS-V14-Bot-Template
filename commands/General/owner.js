const { EmbedBuilder } = require("discord.js"); 

module.exports = {
  name: "owner",
  permissions: ['SendMessages'],
  owner: true, // If this is "true", only owners that were provided in config.json are allowed to use this command. If this is "false" or not added, everyone can use it and also must have the required permission(s) above.
  run: async (client, message, args, prefix, config) => {

    message.reply({ embeds: [
      new EmbedBuilder()
        .setDescription("Only owner command! :)")
        .setColor("Yellow")
    ] })
    
  },
};
