# <samp>DiscordJS-V14-Bot-Template</samp> v2

The simplified Discord bot commands & events handler built with discord.js version 14 and written in JavaScript. This handler can load up to 4 different type of commands; Prefix, Slash, User context and Message context.

- The prefix commands are normal message commands that only starts with a specific guild prefix. By default, it's the prefix provided in the `config.js` file.
- The slash commands are built-in Discord commands and are more simplified than prefix commands. The prefix is always `/`.
- The user commands are built-in Discord commands, and to execute a user command, right-click on a Discord user profile, Apps, and then select a command.
- The message commands are built-in Discord commands, and to execute a message command, right-click on a message, Apps, and then select a command.

This project also handles components; Buttons, Modal submits, Select menus (any type).

Did you like my project? Click on the star button (⭐️) right above your screen, thank you!

Looking for the old version? [Click here](https://github.com/TFAGaming/DiscordJS-V14-Bot-Template/releases/tag/v1.7.0-last).

## Features
- Supports all possible type of commands.
    - Message commands (AKA: Prefix commands).
    - Application commands:
        - Chat Input
        - User context
        - Message context
- Easy and simple to use
- Updated to latest discord.js version.
- Included a database: MongoDB

## Commands, events, and components structure

> **Note**
> This handler uses **CommonJS** modules system.

### Prefix:
```ts
module.exports = {
    structure: {
        name: string,
        description: string,
        aliases: string[],
        permissions?: PermissionFlagBits,
        cooldown?: number
    },
    run: async (client, message, args) => Promise<void>
};
```

### Slash/User/Message:
```ts
module.exports = {
    structure: SlashCommandBuilder | ContextMenuCommandBuilder,
    options?: { },
    run: async (client, interaction) => Promise<void>
};
```

### Event:
```ts
module.exports = {
    event: string,
    once?: boolean,
    // '...args' are the arguments of the event chosen (from discord.js).
    run: async (client, ...args) => Promise<void>
};
```

### Component:
```ts
module.exports = {
    customId: string,
    run: async (client, interaction) => Promise<void>
};
```

## Requirements
### Packages:
- **chalk** v2.4.2
- **discord.js** v^14.13.0
- **dotenv** v^latest
- **mongoose** v^latest

### Platforms:
- **Node.js** v^16.9.0

```
npm init -y
npm install chalk@2.4.2 discord.js dotenv mongoose
```

## Setup
1. Install Visual Studio Code.
2. Download this project as a **.zip** file: [Click here](https://github.com/TFAGaming/DiscordJS-V14-Bot-Template/archive/refs/heads/main.zip)
3. Extract the .zip file into a normal folder.
4. Open VSCode, click on **Open Folder**, and select the new created folder.
5. Go to `src/` and rename `example.config.js` to `config.js` and fill all the required values.

```ts
module.exports = {
    client: {
        token: string, // ← Your bot token
        id: string // ← Your bot ID
    },
    handler: {
        prefix: string, // ← The bot prefix
        deploy: boolean, // ← Always load application commands to Discord? (true: Yes, false: No)
        commands: {
            prefix: boolean, // ← Toggle prefix commands
            slash: boolean, // ← Toggle slash commands
            user: boolean, // ← Toggle user commands
            message: boolean // ← Toggle message commands
        },
        mongodb: {
            uri: string, // ← Your MongoDB URI string,
            toggle: boolean // ← Connect to the database or not? (true: Yes, false: No)
        }
    }
}
```

You can use ENV instead of `config.js` to keep your bot token and ID and your MongoDB URI in a safe place. Rename the file `.env.example` to `.env` and fill all the required values.

```apache
CLIENT_TOKEN = Your bot token
CLIENT_ID = Your bot ID
MONGODB_URI = Your mongodb URI string
```

6. To start your bot, run `node .` or `npm run start`.
7. Enjoy. =)

## Hosting (<img src="https://media.discordapp.net/attachments/1111644651036876822/1124045180484472882/discloud_white_horizon-e96efbfa.png?width=960&height=163" width=100>)
Use [Discloud](https://discloudbot.com/)! A trust-worthy Discord bot hosting service.

1. Login using your Discord/GitHub account, and then don't close the Dashboard tab (because we need it later).
2. Go to your project on VSCode, create a new file `discloud.config`. This file is a configuration file for Discloud apps servers. The `discloud.config` file content must be like the codeblock below, and remember to change **YOUR_BOT_ID** to your actual bot ID.

```apache
# Your actual bot ID below
ID = 1234567890123456789
TYPE = bot
MAIN = src/index.js
RAM = 100
AUTORESTART = true
VERSION = latest
API = tools
```

3. Open explorer and navigate using the path of your project. Hold the **CTRL** key, and click on `src/`, `package.json`, and `discloud.config`. Now release the key, and right click on the selected files/folders and click on **Convert into .zip file**.
4. Go back to the Discloud dashboard, click on **Add App**, and then upload the .zip file in the upload box. Make sure to accept the ToS of the service and then click on **Upload**.
5. Wait for at least 20 seconds (depends on your Internet speed), and then your bot should be on.

> **Warning**
> Discloud has recently made every Free plan servers into **15 days** hosting only. Use the command `.rw` from their bot in the commands channel (on their Discord server) to reset the timer. Join the server: [Click here!](https://discord.gg/discloud-584490943034425391)

## Contributors
<img src="https://contrib.rocks/image?repo=TFAGaming/DiscordJS-V14-Bot-Template">

## Support
Join our Discord server if you need any help!

<a href="https://discord.gg/E6VFACWu5V">
  <img src="https://discord.com/api/guilds/918611797194465280/widget.png?style=banner3">
</a>

## License
**GPL-3.0**, General Public License v3