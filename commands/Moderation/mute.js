const { EmbedBuilder, quote } = require("discord.js");
const ms = require('ms');

module.exports = {
  config: {
    name: "mute",
    description: "Mute a user by giving them a timeout duration.",
    usage: 'mute [user] [time] (reason)'
  },
  permissions: ['ModerateMembers'],
  owner: false,
  run: async (client, message, args) => {

    if (!args[0]) return message.reply({
      embeds: [
        new EmbedBuilder()
          .setDescription("Please provide the user to mute.")
      ]
    });

    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if (!user) return message.reply({
      embeds: [
        new EmbedBuilder()
          .setDescription("Invalid user.")
      ]
    });

    if (user.isCommunicationDisabled()) return message.reply({
      embeds: [
        new EmbedBuilder()
          .setDescription("That user is already muted.")
      ]
    });

    if (!args[1]) return message.reply({
      embeds: [
        new EmbedBuilder()
          .setDescription("Please provide the time for the mute.")
      ]
    });

    const duration = ms(args[1]);

    if (duration > 2419200000 || duration < 10000) return message.reply({
      embeds: [
        new EmbedBuilder()
          .setDescription("Time should be not over 28 days or lower than 10 seconds.")
      ]
    });

    let reason = args[2];

    user.disableCommunicationUntil(Date.now() + (duration))
      .then(async () => {
        return message.reply({
          embeds: [
            new EmbedBuilder()
              .setAuthor({ name: `${user.user.tag} has been muted`, iconURL: user.user.displayAvatarURL({ dynamic: true }) })
              .addFields(
                { name: 'User:', value: `${user.user.tag}` },
                { name: 'Duration:', value: `${args[1]}` },
                { name: 'Reason:', value: `${reason ? quote(reason) : 'No reason was provided.'}` },
              )
          ]
        });
      });
    
  },
};
