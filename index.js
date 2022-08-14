const { Client, Partials, Collection, GatewayIntentBits } = require('discord.js');
const config = require('./config/config.json');
const colors = require("colors");

// Creating a new client:
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.GuildMember,
    Partials.Reaction
  ],
  presence: {
    activities: [{
      name: "T.F.A is cool!",
      type: 0
    }],
    status: 'dnd'
  }
});

// Host the bot:
require('http').createServer((req, res) => res.end('Ready.')).listen(3000);

// Getting the bot token:
const AuthenticationToken = process.env.TOKEN || config.Client.TOKEN;
if (!AuthenticationToken) {
  console.warn("[CRASH] Authentication Token for Discord bot is required! Use Envrionment Secrets or config.json.".red + "\n")
  return process.exit();
};

// Handler:
client.commands = new Collection();
client.slashcmds = new Collection();
client.events = new Collection();

module.exports = client;

["prefix", "slash", "events", "mongoose"].forEach(file => {
  require(`./handlers/${file}`)(client);
});

// Login to the bot:
client.login(AuthenticationToken)
  .catch((err) => {
    console.error("[CRASH] Something went wrong while connecting to your bot..." + "\n");
    console.error("[CRASH] Error from Discord API:" + err);
    process.exit();
  });

// Handle errors:
process.on('unhandledRejection', async (err, promise) => {
  console.error(`[ANTI-CRASH] Unhandled Rejection: ${err}`.red);
  console.error(promise);
});
