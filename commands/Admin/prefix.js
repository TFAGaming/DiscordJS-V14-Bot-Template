const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "prefix",
  permissions: ['Administrator'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {

    if (!args[0]) return message.reply({ embeds: [
      new EmbedBuilder()
        .setTitle("Missing argument")
        .setDescription("Please provide a new prefix!")
    ]}); // If the argument is null, then this will be triggered.

    if (args[0].length > 5) return message.reply({ embeds: [
      new EmbedBuilder()
        .setTitle("Missing argument")
        .setDescription("Sorry, but the new prefix's length should be not over 5 characters!")
    ]}); // If the argument is provided, but the length is over than 5, then this will be triggered.

    const newPrefix = await db.set(`guild_prefix_${message.guild.id}`, args[0]); // The "await" is ALWAYS required with quick.db and the "async" function! Remember to use it.

    const finalEmbed = new EmbedBuilder()
      .setTitle("Success!")
      .setDescription(`New prefix for this server: \`${newPrefix}\`.`)
      .setColor("Green");

    return message.reply({ embeds: [finalEmbed] });
    
  },
};
