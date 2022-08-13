<br>
<p align="center">
    <img src="https://media.discordapp.net/attachments/994957246364647526/1004352503573393458/V14_Handler.png?width=855&height=481">
    <img src="https://img.shields.io/github/v/release/discordjs/discord.js?label=Discord.js Current Version:&logo=npm&style=for-the-badge"><br>
    <a style="font-size:13px;font-family:verdana">Update the package: <b>npm i discord.js@latest</b></a><br>
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
        <img src="https://img.shields.io/discord/918611797194465280.svg?label=Discord%20Server:&logo=discord&color=5865F2&logoColor=white"><br>
    </a>
    <a style="font-size:15px;font-family:verdana"><b>Language:</b></a><br>
    <img src="https://img.shields.io/badge/JavaScript-100000?label=Made%20with:&style=flat&logo=javascript&color=808080">
    <br>
    <a style="font-size:15px;font-family:verdana"><b>Fork/Download For:</b></a><br>
    <a href="https://replit.com/github/TFAGaming/DiscordJS-V14-Bot-Template">
        <img src="https://img.shields.io/badge/Repl.it-100000?label=Fork%20on:&style=flat&logo=replit&color=808080&logoColor=white">
    </a>
    <a href="https://github.com/TFAGaming/DiscordJS-V14-Bot-Template/releases">
        <img src="https://img.shields.io/badge/Visual Studio Code-100000?label=Download%20for:&style=flat&logo=visual studio code&color=808080&logoColor=007ACC">
    </a>
</p>

# DiscordJS V14 Bot Template - Introduction:
A Discord bot project made with the npm package discord.js version 14 and it handles Prefix and Slash commands, and it includes two Databases: MongoDB and Quick.DB! You can create many commands as you want to improve your Bot. **Project made with ❤ by T.F.A#7524.**<br>
You can click on the star (⭐️) button above this repository if you liked this project! Thank you all. 🙏

Discord.js Documentation is linked [here](https://discord.js.org/#/docs/discord.js/main/general/welcome).

# How to setup:
### - Requirements:

• **Node.js v16.9.0 or above.** <a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/v16.9.0-100000?style=flat&logo=node.js&label=Discord.js&color=blue&logoColor=lime"></a><br>
• **Discord.js v14.1.0 or above**. <a href="https://www.npmjs.com/package/discord.js"><img src="https://img.shields.io/badge/v14.1.0-100000?style=flat&logo=npm&label=Discord.js&color=blue"></a>

### - Creating a new client and inviting the bot:
• 1- Go to [Discord Developer Portal](https://discord.com/developers) and then go to `Applications.` <br>
• 2- Create a new application and choose it's name. <br>
• 3- Put your application's avatar (not required).<br>
• 4- Go to `Bot` section and turn your application into a bot. <br>
• 5- Scroll down and enable the three disabled `Privileged Gateaway Intents` intents (`PRESENCE INTENT`, `SERVER MEMBERS INTENT`, and `MESSAGE CONTENT INTENT`).<br>
• 6- Go to `OAuth2` section, and then `URL Generator`. Select the scopes `bot` and `application.commands`, and then scroll down to **Bot Permissions**, select `Administrator` (For all guild permissions). Copy the link that is generated below, open a new browser tab, paste the URL, choose a server where your bot will be in, verify yourself that you are not a robot, and Done!

### - Setup your project on ___Visual Studio Code___:
• 1- Download [Visual Studio Code](https://code.visualstudio.com/Download).<br>
• 2- Download [Node.JS](https://nodejs.org/en/) version **above** 16.9.0.<br>
• 3- Open Visual Studio Code, go to Extensions section and install a JavaScript runner. I choosed **JavaScript (ES6) code snippets**:<br>
<img src="https://media.discordapp.net/attachments/1006491186875338823/1007603785889239060/2022-08-12_11_56_18-Extension__JavaScript_ES6_code_snippets_-_Visual_Studio_Code.png"><br>
• 4- Download the project by clicking on the badge above this guide `Download For: Visual Studio Code`. Go to the latest version, scroll to `Assets`, and download the `Source Code (.zip)` folder. <br>
• 5- Drop the .zip folder into your Desktop, right click on the .zip folder and click on `Extract here`.<br>
• 6- After extracting the files into a new folder, delete the .zip folder and rename the created folder into any name you want.<br>
• 7- Open Visual Studio Code, click on `Open folder` and choose the created folder to start a new project.<br>
• 8- Go to the folder `config`, and then the file `config.json`. Fill or change the values of the variables as you want. Here's the config.json code below, replace for an example `YOUR BOT PREFIX` to `?` or `!`... Not hard :)<br>
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
<!-- <img src="https://media.discordapp.net/attachments/1006491186875338823/1007607458195308574/2022-08-12_12_05_25-DiscordJS-V14-Bot-Template_config.json_at_main_TFAGaming_DiscordJS-V14-Bot-Tem.png"> <br> -->
• 9- Go to terminal and type `npm init -y` to install `package-lock.json` file, and then type in the terminal again `npm install` to install all the required dependencies to run your project.<br>
• 10- To start Debugging, Go to the file index.js, press F5, and then choose the debugger `Node.js`. Else, go to terminal, and then type `node index.js`, `node .`, or `npm run start`.<br>
• 11- Enjoy! =)

⚠️ **NOTE:** Visual Studio Code isn't an app for hosting Discord bots or other apps 24/7, you need to choose Heroku, Discloud, Replit, or other apps for hosting to host your Discord bot(s) forever.

### - Setup your project on ___Repl.it___:
• 1- Go to [Replit](https://www.replit.com) site and register a new account (If you are new on the site).<br>
• 2- Fork the project by clicking on the badge above this guide `Fork For: Replit`.<br>
• 3- Click on `Import from GitHub` and wait for Replit to import the repository to your project.<br>
• 4- Type `node index.js`, `node .`, or `npm run start` in the Run button configuration, and then press `Done`.<br>
• 5- Go to the folder `config`, and then the file `config.json`. Fill or change the values of the variables as you want.

⚠️ **WARNING:** Make sure to not use the variables `TOKEN` or `MONGO` in the file config.json! Attackers **can steal** these secrets and they **can destroy** your Database and/or your Bot(s). <u>Follow the step #6 to keep these secrets in a safe place. </u>

• 6- Go to `Envrionment Secret Variables` (Located at your left screen with a 🔒 icon). This feature from Replit avoid attackers from accessing your secrets. Use the key as a variable, and the value is the variable's value. The key for your bot token is always `TOKEN`, and for your Mongo URI, it's `MONGO`. Here's a picture below:<br>
<img src="https://media.discordapp.net/attachments/1006491186875338823/1007611370084253767/2022-08-12_12_25_43-index.js_-_Discord_Bot_Template_DJS_V14_-_Replit.png"> <br>
• 7- Click on the green button on top of your screen `► Run` to start running your project.<br>
• 8- Enjoy! =)

# Bot Presence:
Go to index.js and you need to find this code:
```js
presence: {
  activities: [{
    name: "T.F.A is cool!",
    type: 0
  }],
  status: 'dnd'
} 
```
This code is for client's activity and status. You can change the values by reading this table below:

##### Activity Types:
|ID | Name | Preview |
|---| --- |--- |
| <u>0</u> | Game | Playing {text} |
| <u>1</u> | Streaming | Streaming {text} |
| <u>2</u> | Listening | Listening to {text} |
| <u>3</u> | Watching | Watching {text} | 
| <u>4</u> | Custom | **Idk how to use this ;-;** |
| <u>5</u> | Competing | Competing in {text} |

##### Status Types:
| Name | Full Name |
| --- | --- |
| <u>online</u> | Online |
| <u>dnd</u> | Do not Disturb |
| <u>idle</u> | Idle |
| <u>invisible</u> | Offline |


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
