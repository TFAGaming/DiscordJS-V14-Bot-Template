const { EmbedBuilder } = require("discord.js"); 

module.exports = {
  name: "owner",
  permissions: ['SendMessages'],
  owner: true, // If this is "true", only owners that were provided in config.json are allowed to use this command. If this is "false" or not added, everyone can use it and also must have the required permission(s) above.
  run: async (client, message, args, prefix, config) => {
    
    const ownersID = config.Users.OWNERS;
    if (!ownersID) return;
    
    const ownersARRAY = [];
    
    ownersID.forEach(Owner => {
      const fetchedOWNER = message.guild.members.cache.get(Owner);
      if (!fetchedOWNER) ownersARRAY.push("*Unknown User#0000*");
      ownersARRAY.push(`${fetchedOWNER.user.tag}`);
    });

    message.reply({ embeds: [
      new EmbedBuilder()
        .setDescription(`Only owners command! \nOwners: **${ownersARRAY.join(", ")}**`)
        .setColor("Yellow")
    ] })
    
  },
};
