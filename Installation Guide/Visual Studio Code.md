# Installation of DiscordJS-V14-Bot-Template on Visual Studio Code:

1- Install [Visual Studio Code](https://code.visualstudio.com/Download).<br>
2- Install [Node.js](https://nodejs.org/en/download/) (Required: v^16.9.0).<br>
3- Download the project [here](https://github.com/TFAGaming/DiscordJS-V14-Bot-Template/archive/refs/heads/main.zip).<br>
4- Extract the .zip folder into a normal folder.<br>
5- Open VSCode, click on `Open Folder` button, and then select the created folder.<br>
6- Go to `config/config.js` and change all the values:

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

> **⚠️ Warning:** The above properties with the warning emoji should be not shared to public, these are the secrets that you **only** should know. Importantly is your bot token, sharing your bot token to anybody could let them to access to your bot in anytime they want and they can control your server(s). If you have got this problem, this is not TFAGaming's problem and you have to deal with it.

7- Type in the terminal: `npm init -y`.<br>
8- Install all the required packages by using in the terminal: `npm i` or `npm install`.<br>
9- Type in the terminal: `node index.js`, `node .`, or `npm run start`.<br>
10- Enjoy and thanks for using my project.
