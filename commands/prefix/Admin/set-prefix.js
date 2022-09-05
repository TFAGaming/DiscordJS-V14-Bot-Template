const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "prefix",
    description: "Set the prefix for the guild.",
    usage: "prefix [new prefix]"
  },
  permissions: ['Administrator'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {

    if (!args[0]) return message.reply({ embeds: [
      new EmbedBuilder()
        .setTitle("Missing argument")
        .setDescription("Please provide a new prefix!")
    ]});

    if (args[0].length > 5) return message.reply({ embeds: [
      new EmbedBuilder()
        .setTitle("Missing argument")
        .setDescription("Sorry, but the new prefix's length should be not over 5 characters!")
    ]});

    const newPrefix = await db.set(`guild_prefix_${message.guild.id}`, args[0]);

    const finalEmbed = new EmbedBuilder()
      .setTitle("Success!")
      .setDescription(`New prefix for this server: \`${newPrefix}\`.`)
      .setColor("Green");

    return message.reply({ embeds: [finalEmbed] });
    
  },
};
