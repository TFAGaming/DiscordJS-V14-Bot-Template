# <samp>DiscordJS-V14-Bot-Template</samp> v2

The simplified Discord bot commands & events handler built with discord.js version 14 and written in JavaScript. This handler can load up to 4 different type of commands; Prefix, Slash, User context and Message context.

- The prefix commands are normal message commands that only starts with a specific guild prefix. By default, it's the prefix provided in the `config.js` file.
- The slash commands are built-in Discord commands and are more simplified than prefix commands. The prefix is always `/`.
- The user commands are built-in Discord commands, and to execute a user command, right-click on a Discord user profile, Apps, and then select a command.
- The message commands are built-in Discord commands, and to execute a message command, right-click on a message, Apps, and then select a command.

Did you liked my project? Click on the star button (⭐️) right above your screen, thank you!

Looking for the old version? [Click here](https://github.com/TFAGaming/DiscordJS-V14-Bot-Template/releases/tag/v1.7.0-last).

## Commands/Events structure

> **Note**
> This handler uses **CommonJS** modules system.

### Prefix:
```ts
module.exports = {
    structure: {
        name: string,
        description: string,
        aliases: string[]
    },
    run: async (client, message, args) => {
        
    }
};
```

### Slash/User/Message:
```ts
module.exports = {
    structure: SlashCommandBuilder | ContextMenuCommandBuilder,
    run: async (client, interaction) => {
        
    }
};
```

### Event:
```ts
module.exports = {
    event: string,
    once: boolean,
    // ...args are the arguments of the event chosen (from discord.js).
    run: (client, ...args) => {
        
    }
};
```

## Requirements
### Packages:
- **chalk** v2.4.2
- **discord.js** v^14.11.0
- **dotenv** v^latest
- **mongoose** v^latest

### Platforms:
- **Node.js** v^16.9.0

```
npm init -y
npm i chalk@2.4.2 discord.js@14 dotenv mongoose
```

## Setup
1. Install Visual Studio Code.
2. Download this project as a **.zip** file: [Click here](https://github.com/TFAGaming/DiscordJS-V14-Bot-Template/archive/refs/heads/main.zip)
3. Extract the .zip file into a normal folder.
4. Open VSCode, click on **Open Folder**, and select the new created folder.
5. Go to `src/` and rename `example.config.js` to `config.js` and fill all the required values.

```ts
client: {
  token: string, // <= Your bot token
  id: string // <= Your bot ID
},
handler: {
  prefix: string, // <= The bot prefix
  deploy: boolean, // <= Always load application commands to Discord? (true: Yes, false: No)
  commands: { // Toggle commands; true: Enable, false: Disable
    prefix: boolean, // <= Toggle prefix commands
    slash: boolean, // <= Toggle slash commands
    user: boolean, // <= Toggle user commands
    message: boolean // <= Toggle message commands
  },
  mongodb: { // MongoDB database
    uri: string // <= Your MongoDB URI string
  }
}
```

6. To start your bot, run `node .` or `npm run start`.
7. Enjoy. =)

## Hosting (<img src="https://media.discordapp.net/attachments/1111644651036876822/1124045180484472882/discloud_white_horizon-e96efbfa.png?width=960&height=163" width=100>)
Use [DisCloud](https://discloudbot.com/)! A trust-worthy Discord bot hosting service.

1. Login using your Discord/GitHub account, and then don't close the Dashboard tab (because we need it later).
2. Go to your project on VSCode, create a new file `discloud.config`. This file is a configuration file for DisCloud apps servers. The `discloud.config` file content must be like the codeblock below, and remember to change **YOUR_BOT_ID** to your actual bot ID.

```config
ID = YOUR_BOT_ID
TYPE = bot
MAIN = src/index.js
RAM = 100
AUTORESTART = true
VERSION = latest
API = tools
```

3. Open explorer and navigate using the path of your project. Hold the **CTRL** key, and click on `src/`, `package.json`, and `discloud.config`. Now release the key, and right click on the selected files/folders and click on **Convert into .zip file**.
4. Go back to the DisCloud dashboard, click on **Add App**, and then upload the .zip file in the upload box. Make sure to accept the ToS of the service and then click on **Upload**.
5. Wait for at least 20 seconds (depends on your Internet speed), and then your bot should be on.

> **Warning**
> DisCloud has recently made every Free plan servers into **15 days** hosting only. Use the command `.rw` from their bot in the commands channel (on their Discord server) to reset the timer to **0**.

## Contributors
<img src="https://contrib.rocks/image?repo=TFAGaming/DiscordJS-V14-Bot-Template">

## License
**GPL-3.0**, General Public License v3