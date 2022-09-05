<p align="center">
	<img src="https://github-readme-stats.vercel.app/api/pin/?username=TFAGaming&repo=DiscordJS-V14-Bot-Template&theme=dark" style="float: left; margin: 0px 10px 15px 1px;"/> <a style="font-size: 20px"> <a style="font-size: 30px">
</p>

<p align="center">
    <a style="font-size:15px;font-family:verdana"><b>GitHub Repository Statistics/Info:</b></a><br>
    <img src="https://img.shields.io/github/release/TFAGaming/DiscordJS-V14-Bot-Template?label=Last%20Release">
    <!--<img src="https://img.shields.io/github/forks/TFAGaming/DiscordJS-V14-Bot-Template?label=Forks&color=32CD32">
    <img src="https://img.shields.io/github/stars/TFAGaming/DiscordJS-V14-Bot-Template?label=Stars&color=yellow"  -->
     <img src="https://img.shields.io/github/license/TFAGaming/DiscordJS-V14-Bot-Template?label=License&color=808080">
    <img src="https://img.shields.io/github/issues/TFAGaming/DiscordJS-V14-Bot-Template?label=Issues&color=yellow">
    <img src="https://img.shields.io/github/issues-closed/TFAGaming/DiscordJS-V14-Bot-Template?label=Issues%20Closed&color=32CD32">
    <br>
    <a style="font-size:15px;font-family:verdana"><b>Discord Server:</b></a><br>
    <a href="https://discord.gg/bGNRZcnwWy">
        <img src="https://img.shields.io/discord/918611797194465280.svg?label=Discord%20Server:&logo=discord&color=5865F2"><br>
    </a>
    <a style="font-size:15px;font-family:verdana"><b>Fork/Download For:</b></a><br>
    <a href="https://replit.com/github/TFAGaming/DiscordJS-V14-Bot-Template">
        <img src="https://img.shields.io/badge/Repl.it-100000?label=Fork%20on:&style=flat&logo=replit&color=808080&logoColor=white">
    </a>
    <a href="https://github.com/TFAGaming/DiscordJS-V14-Bot-Template/archive/refs/heads/main.zip">
        <img src="https://img.shields.io/badge/Visual Studio Code-100000?label=Download%20for:&style=flat&logo=visual studio code&color=blue&logoColor=007ACC">
    </a>
    <a href="https://github.com/TFAGaming/DiscordJS-V14-Bot-Template/fork">
        <img src="https://img.shields.io/badge/GitHub-100000?label=Fork%20on:&style=flat&logo=github&color=808080">
    </a><br>
    <a style="font-size:15px;font-family:verdana"><b>Tutorial:</b></a><br>
    <a href="https://www.youtube.com/watch?v=dGyzjW9Ld4U&t=175s&ab_channel=T.F.A7524">
	<img src="https://img.shields.io/badge/YouTube-100000?logo=youtube&logoColor=ff0000&label=Tutorial%20on:&color=ff0000">
    </a>
</p>

# DiscordJS V14 Bot Template - Introduction:
A Discord bot project made with the npm package discord.js version 14 and it handles Prefix and Slash commands, and it includes two Databases: MongoDB and Quick.DB! You can create many commands as you want to improve your Bot. **Project made with ❤ by T.F.A#7524.**<br>
You can click on the star (⭐️) button above this repository if you liked this project! Thank you all. 🙏

Discord.js Documentation is linked [here](https://discord.js.org/#/docs/discord.js/main/general/welcome).

# Project Features:
### Prefix commands!
<img src="https://media.discordapp.net/attachments/1006491186875338823/1016288782561054740/2022-09-05_11_08_23-Window.png">

### Slash commands!
<img src="https://media.discordapp.net/attachments/1006491186875338823/1016288782368112660/2022-09-05_11_07_58-Window.png">

### User commands!
<img src="https://media.discordapp.net/attachments/1006491186875338823/1016288782040965161/2022-09-05_11_07_46-Window.png">

# How to setup:
### - Requirements:

• **Node.js v16.9.0 or above.** <a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/v16.9.0-100000?style=flat&logo=node.js&label=Node.js&color=blue&logoColor=lime"></a><br>
• **Discord.js v14.3.0 or above**. <a href="https://www.npmjs.com/package/discord.js"><img src="https://img.shields.io/badge/v14.3.0-100000?style=flat&logo=npm&label=Discord.js&color=blue"></a>

### - Creating a new client and inviting the bot:
• 1- Go to [Discord Developer Portal](https://discord.com/developers) and then go to `Applications`. <br>
• 2- Create a new application and choose it's name. <br>
• 3- Put your application's avatar (not important).<br>
• 4- Go to `Bot` section and turn your application into a bot. <br>
• 5- Scroll down and enable the three disabled `Privileged Gateaway Intents` intents (`PRESENCE INTENT`, `SERVER MEMBERS INTENT`, and `MESSAGE CONTENT INTENT`).<br>
• 6- Go to `OAuth2` section, and then `URL Generator`. Select the scopes `bot` and `application.commands`, and then scroll down to **Bot Permissions**, select `Administrator` (For all guild permissions). Copy the link that is generated below, open a new browser tab, paste the URL, choose a server where your bot will be in, verify yourself that you are not a robot, and Done!

### - Setup your project on ___Visual Studio Code___:
• 1- Download [Visual Studio Code](https://code.visualstudio.com/Download).<br>
• 2- Download [Node.JS](https://nodejs.org/en/download/) (Check the requirements).<br>
• 3- Open Visual Studio Code, go to Extensions section and install a JavaScript runner. I choosed **JavaScript (ES6) code snippets**.<br>
• 4- Download the project by clicking on the badge above this guide `Download For: Visual Studio Code`. If you are using Chrome right now, you should see below that the download has started. <br>
• 5- After finishing the download, drop the .zip folder into your Desktop, right click on the .zip folder and click on `Extract here`.<br>
• 6- After extracting the files into a new folder, delete the .zip folder and rename the created folder into any name you want (not important to rename the folder).<br>
• 7- Open Visual Studio Code, click on `Open folder` and choose the created folder to start a new project.<br>
• 8- Go to the folder `config`, and then the file `config.js`. Fill or change the values of the variables as you want. Here's the config.js code below and a small guide:
```js
module.exports = {

  Prefix: "?", // YOUR BOT PREFIX.

  Users: {
    OWNERS: ["849413565487382578", "554029264492691476"] // THE BOT OWNERS ID.
  },

  Handlers: {
    MONGO: "" // YOUR MONGO URI. (USE THIS ONLY IN VSCODE)
  },

  Client: {
    TOKEN: "", // YOUR BOT TOKEN. (USE THIS ONLY IN VSCODE)
    ID: "" // YOUR BOT ID.
  }

}
```

• 9- Go to terminal and type `npm init -y` to install `package-lock.json` file, and then type in the terminal again `npm install` or `npm i` to install all the required dependencies to run your project.<br>
• 10- To start Debugging, Go to the file index.js, press F5, and then choose the debugger `Node.js`. Else, go to terminal, and then type `node index.js`, `node .`, or `npm run start`.<br>
• 11- Enjoy! =)

### - Setup your project on ___Repl.it___:
• 1- Go to [Replit](https://www.replit.com) site and register a new account (If you are new on the site).<br>
• 2- Fork the project by clicking on the badge above this guide `Fork For: Replit`.<br>
• 3- Click on `Import from GitHub` and wait for Replit to import the repository to your project.<br>
• 4- Type `node index.js`, `node .`, or `npm run start` in the Run button configuration, and then press `Done`.<br>
• 5- Go to the folder `config`, and then the file `config.js`. Fill or change the values of the variables as you want.

> ⚠️ **WARNING:** Make sure to not use the variables `TOKEN` or `MONGO` in the file config.json! Attackers can steal these secrets and they can steal and use your Database, also use your bot(s) without asking your permissions!. **Follow the step #6 to keep these secrets in a safe place.**

• 6- Go to `Environment Secret Variables` (Located at your left screen with a 🔒 icon). This feature from Replit avoid attackers from accessing your secrets. Use the key as a variable, and the value is the variable's value. The key for your bot token is `TOKEN`, and the key for your Mongo URI is `MONGO`. After finishing this, click on `Add new secret`.<br>
• 7- Click on the green button on top of your screen `► Run` to start running your project.<br>
• 8- Enjoy! =)

# Slash commands:
### Creating options:
This table is also located at official Discord Developer portal: [Click here](https://discord.com/developers/docs/interactions/application-commands#application-command-object)
Creating options should be an Array, here's an example:
```js
options: [
	{
		name: "text",
		description: "write anything you want!",
		type: 3,
		required: false
	}
]
```
> ⚠️ **WARNING:** The name of any option should be in lower case.

> ⚠️ **WARNING:** All the required options (`required = true`) should be the first options, and then the not required options.

We used the type `3` for the **String** option. There are other option types:
| Name: | Value: |
| ----- | ------ |
| STRING | 3 |
| INTEGER | 4 |
| BOOLEAN | 5 |
| USER | 6 |
| CHANNEL | 7 |
| ROLE | 8 |
| MENTIONABLE | 9 |
| NUMBER | 10 |
| ATTACHMENT | 11 |

### Getting an option's value:
```js
const a = interaction.options.get('YOUR OPTION NAME').value;
```
### Choices:
```js
options: [
	{
		name: "choice",
		description: "Choose something!",
		type: 3,
		required: true,
		choices: [
			{
				name: "Choice #1",
				value: "1"
			},
			{
				name: "Choice #2",
				value: "2"
			}
		]
	}
]
```

> ⚠️  **WARNING:** Choices should be in the option type **string** (3).
### Sub commands:
Sub commands type is always `1`. You can add more options in a option if you are using the sub command type.
```js
options: [
	{
		name: "sub",
		description: "A sub command",
		type: 1,
		options: [
			{
				name: "text",
				description: "Write anything you want!",
				type: 3,
				required: true
			}
		]
	},
	{
		name: "sub-2",
		description: "Sub command 2",
		type: 1,
		options: [
			{
				name: "text",
				description: "Write anything you want!",
				type: 3,
				required: true
			}
		]
	}
]
```
### Getting a Sub command's value:
```js
const sub = interaction.options.getSubcommand();

if (sub === "sub") {
	// Your code for the sub command #1.
} else if (sub === "sub-2") {
	// Your code for the sub command #2.
} else return;
```

# What is MongoDB and Quick.db?
MongoDB is a database program. You can save some documents, data, and more! The official site of MongoDB is linked [here](https://www.mongodb.com/).<br>
Quick.db is also a database program, more simplified than MongoDB but doesn't have a lot features. Quick.db uses SQlite files to save data, but MongoDB uses clusters (or Mongo URI) to save data. You can get more information about these both databases in Google.

# Something doesn't work here...
There are a lot of issues happens with some users. You can create an issue on this repository and I will respond to your opened issue(s) as fast as possible. I'm always busy, so please wait for me to respond to your issues.

# Credits are required? (©)
Forking this repository and sharing it again without the credits to me is **UNACCEPTABLE**. Same thing for editing, Forking this repository and editing it to make it 100% not like this repository is **NOT ALLOWED** and ends in a **COPYRIGHT WARNING** by me. Stealing people's projects and then sharing it again is **NOT COOL** and not a good thing to do. If you want to record a video, Ask the permissions in my DMs and then you will be allowed to record a video about this repository/handler, **BUT** if you have downloaded the project, make your own bot using this handler (Moderation bot, for an example) and record a video about your project is **OK**.

### Contact me!
<a href='https://www.youtube.com/c/TFA7524' target="_blank">
    <img alt='YouTube' src='https://img.shields.io/badge/YouTube-100000?style=social&logo=YouTube&logoColor=FF0000&labelColor=000000&color=EAE9E9'/>
</a>
<a href='https://dsc.gg/codingdevelopment' target="_blank">
    <img alt='Discord' src='https://img.shields.io/badge/Discord-100000?style=social&logo=Discord&logoColor=5865F2&labelColor=000000&color=EAE9E9'/>
</a>
