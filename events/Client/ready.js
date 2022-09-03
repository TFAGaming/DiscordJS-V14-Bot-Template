const client = require("../../index");
const colors = require("colors");

module.exports = {
  name: "ready.js"
};

client.once('ready', async () => {
  console.log("\n" + `[READY] ${client.user.tag} is up and ready to go.`.brightGreen);
  
  client.user.setPresence({
        status: "online"
    }); //change bot's presence to online
  
  client.user.setActivity(`Chilling on ${client.guilds.cache.size} servers`, {
            type: "WATCHING"
   }); // Set a custom status for your bot.
})
