const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const client = require("../../index");
const config = require("../../config/config.json");

module.exports = {
  name: "messageCreate"
};

client.on('messageCreate', async message => {
  const prefix = config.Prefix || "?";

  if (message.channel.type !== 0) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (!message.guild) return;
  if (!message.member) message.member = await message.guild.fetchMember(message);

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length == 0) return;

  let command = client.commands.get(cmd);

  if (!command) return message.reply("Invalid command, try again?");

  if (command) {
    if (command.permissions) {
      if (!message.member.permissions.has(PermissionsBitField.resolve(command.permissions || []))) return message.reply({
        embeds: [
          new EmbedBuilder()
            .setDescription(`🚫 Unfortunately, you are not authorized to use this command.`)
            .setColor("Red")
        ]
      })
    }

    command.run(client, message, args, prefix, config);
  }
})
