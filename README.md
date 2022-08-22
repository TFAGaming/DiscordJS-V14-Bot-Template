<p align="center">
	<img src="https://media.discordapp.net/attachments/1006491186875338823/1008090193389162546/V14_Handler_2.png?width=960&height=540" height="200" style="float: left; margin: 0px 10px 15px 1px;"/> <a style="font-size: 20px"> <a style="font-size: 30px"><br>
	<img src="https://img.shields.io/github/v/release/discordjs/discord.js?label=Discord.js Current Version:&logo=npm&style=for-the-badge">
</p>

<p align="center">
    <a style="font-size:15px;font-family:verdana"><b>GitHub Repository Statistics/Info:</b></a><br>
    <img src="https://img.shields.io/github/release/TFAGaming/DiscordJS-V14-Bot-Template?label=Release&logo=files">
    <img src="https://img.shields.io/github/forks/TFAGaming/DiscordJS-V14-Bot-Template?label=Forks&color=lime&logo=githubactions&logoColor=lime">
    <img src="https://img.shields.io/github/stars/TFAGaming/DiscordJS-V14-Bot-Template?label=Stars&color=yellow&logo=reverbnation&logoColor=yellow">
    <img src="https://img.shields.io/github/license/TFAGaming/DiscordJS-V14-Bot-Template?label=License&color=808080&logo=gitbook&logoColor=808080">
    <img src="https://img.shields.io/github/issues/TFAGaming/DiscordJS-V14-Bot-Template?label=Issues&color=red&logo=ifixit&logoColor=red">
    <br>
    <a style="font-size:15px;font-family:verdana"><b>Discord Server:</b></a><br>
    <a href="https://discord.gg/bGNRZcnwWy">
        <img src="https://img.shields.io/discord/918611797194465280.svg?label=Discord%20Server:&logo=discord&color=5865F2"><br>
    </a>
    <a style="font-size:15px;font-family:verdana"><b>Language:</b></a><br>
    <img src="https://img.shields.io/badge/JavaScript-100000?label=Made%20with:&style=flat&logo=javascript&color=yellow">
    <br>
    <a style="font-size:15px;font-family:verdana"><b>Fork/Download For:</b></a><br>
    <a href="https://replit.com/github/TFAGaming/DiscordJS-V14-Bot-Template">
        <img src="https://img.shields.io/badge/Repl.it-100000?label=Fork%20on:&style=flat&logo=replit&color=808080&logoColor=white">
    </a>
    <a href="https://github.com/TFAGaming/DiscordJS-V14-Bot-Template/archive/refs/heads/main.zip">
        <img src="https://img.shields.io/badge/Visual Studio Code-100000?label=Download%20for:&style=flat&logo=visual studio code&color=blue&logoColor=007ACC">
    </a>
    <a href="https://github.com/TFAGaming/DiscordJS-V14-Bot-Template/fork">
        <img src="https://img.shields.io/badge/GitHub-100000?label=Fork%20on:&style=flat&logo=github&color=808080">
    </a>
</p>

# DiscordJS V14 Bot Template - Introduction:
A Discord bot project made with the npm package discord.js version 14 and it handles Prefix and Slash commands, and it includes two Databases: MongoDB and Quick.DB! You can create many commands as you want to improve your Bot. **Project made with ❤ by T.F.A#7524.**<br>
You can click on the star (⭐️) button above this repository if you liked this project! Thank you all. 🙏

Discord.js Documentation is linked [here](https://discord.js.org/#/docs/discord.js/main/general/welcome).

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
• 2- Download [Node.JS](https://nodejs.org/en/download/) (check the requirements).<br>
• 3- Open Visual Studio Code, go to Extensions section and install a JavaScript runner. I choosed **JavaScript (ES6) code snippets**.<br>
• 4- Download the project by clicking on the badge above this guide `Download For: Visual Studio Code`. If you are using Chrome right now, you should see below that the download has started. <br>
• 5- After finishing the download, drop the .zip folder into your Desktop, right click on the .zip folder and click on `Extract here`.<br>
• 6- After extracting the files into a new folder, delete the .zip folder and rename the created folder into any name you want (not important to rename the folder).<br>
• 7- Open Visual Studio Code, click on `Open folder` and choose the created folder to start a new project.<br>
• 8- Go to the folder `config`, and then the file `config.json`. Fill or change the values of the variables as you want. Here's the config.json code below, replace for an example `YOUR BOT PREFIX` to `?` or `!`... etc.<br>
```json
{
  "Prefix": "YOUR BOT PREFIX",

  "Users": {
    "OWNERS": ["YOUR ACCOUNT ID", "ANOTHER ACCOUNT ID", "AND MORE!"]
  },

  "Handlers": {
    "MONGO": "YOUR DATABASE MONGO URI",
    "GUILD_ID": "YOUR SERVER ID WHERE THE BOT IS INVITED IN"
  },
  
  "Client": {
    "TOKEN": "YOUR BOT TOKEN",
    "ID": "YOUR BOT ID"
  }
}
```

• 9- Go to terminal and type `npm init -y` to install `package-lock.json` file, and then type in the terminal again `npm install` to install all the required dependencies to run your project.<br>
• 10- To start Debugging, Go to the file index.js, press F5, and then choose the debugger `Node.js`. Else, go to terminal, and then type `node index.js`, `node .`, or `npm run start`.<br>
• 11- Enjoy! =)

### - Setup your project on ___Repl.it___:
• 1- Go to [Replit](https://www.replit.com) site and register a new account (If you are new on the site).<br>
• 2- Fork the project by clicking on the badge above this guide `Fork For: Replit`.<br>
• 3- Click on `Import from GitHub` and wait for Replit to import the repository to your project.<br>
• 4- Type `node index.js`, `node .`, or `npm run start` in the Run button configuration, and then press `Done`.<br>
• 5- Go to the folder `config`, and then the file `config.json`. Fill or change the values of the variables as you want.

> ⚠️ **WARNING:** Make sure to not use the variables `TOKEN` or `MONGO` in the file config.json! Attackers can steal these secrets and they can steal and use your Database, also use your bot(s) without asking your permissions!. **Follow the step #6 to keep these secrets in a safe place.**

• 6- Go to `Environment Secret Variables` (Located at your left screen with a 🔒 icon). This feature from Replit avoid attackers from accessing your secrets. Use the key as a variable, and the value is the variable's value. The key for your bot token is `TOKEN`, and the key for your Mongo URI is `MONGO`. After finishing this, click on `Add new secret`.<br>
• 7- Click on the green button on top of your screen `► Run` to start running your project.<br>
• 8- Enjoy! =)

# Update discord.js package version:
Go to shell or terminal and type `npm i discord.js@latest`.

# What is MongoDB and Quick.db?
MongoDB is a database program. You can save some documents, data, and more! The official site of MongoDB is linked [here](https://www.mongodb.com/).<br>
Quick.db is also a database program, more simplified than MongoDB but doesn't have a lot features. Quick.db uses SQlite files to save data, but MongoDB uses clusters (or Mongo URI) to save data. You can get more information about these both databases in Google.

# Something doesn't work here...
There are a lot of issues happens with some users. You can create an issue on this repository and I will respond to your opened issue(s) as fast as possible. I'm always busy, so please wait for me to respond to your issues.

# Credits are required? (©)
Forking this repository and sharing it again without giving credits to me (T.F.A) is **not acceptable**. You **can** remove the credits in some bot commands like ?help, ?ping... etc, but **not** in the main files like README.md, index.js... If you want to make a video about this repository, ask firstly to me and then I will give you the permissions to record, else, bypassing by without asking permissions will ends in a copyright warning.

### Contact me!
<a href='https://www.youtube.com/c/TFA7524' target="_blank">
    <img alt='YouTube' src='https://img.shields.io/badge/YouTube-100000?style=social&logo=YouTube&logoColor=FF0000&labelColor=000000&color=EAE9E9'/>
</a>
<a href='https://dsc.gg/codingdevelopment' target="_blank">
    <img alt='Discord' src='https://img.shields.io/badge/Discord-100000?style=social&logo=Discord&logoColor=5865F2&labelColor=000000&color=EAE9E9'/>
</a>
