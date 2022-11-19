# Installation of DiscordJS-V14-Bot-Template on Repl.it:

1- Fork the project by clicking [here](https://replit.com/github/TFAGaming/DiscordJS-V14-Bot-Template).<br>
2- Type `node index.js`, `node .`, or `npm run start` in the Run Button configuration, then click on `Done`.<br>
3- Go to `config/config.js` and change all the values:

```js
module.exports = {

  Prefix: "",

  Users: {
    OWNERS: [""]
  },

  Handlers: {
    MONGO: ""
  },

  Client: {
    TOKEN: "",
    ID: ""
  }

}
```
• `Prefix` is your bot prefix.<br>
• `Users.OWNERS` is the bot's owners (Always in Array type).<br>
• `Handlers.MONGO` is for the MongoDB URI database. (⚠️)<br>
• `Client.TOKEN` is your bot token. (⚠️)<br>
• `Client.ID` is your bot ID.

> **⚠️ Warning #1:** Do not use `Client.TOKEN` and `Handlers.MONGO`, use instead the Envrionment Secret Variables. Use the key `TOKEN` for your bot token, and `MONGO` for your MongoDB URI.

> **⚠️ Warning #2:** The above properties with the warning emoji should be not shared to public, these are the secrets that you **only** should know. Importantly is your bot token, sharing your bot token to anybody could let them to access to your bot in anytime they want and they can control your server(s). If you have got this problem, this is not TFAGaming's problem and you have to deal with it.

4- Click on the green run button above to start your bot.<br>
5- Enjoy and thanks for using my project.
