<br>
<p align="center">
    <img src="https://media.discordapp.net/attachments/994957246364647526/1004352503573393458/V14_Handler.png?width=855&height=481">
</p>

<p align="center">
    <a style="font-size: 20px; font-family:verdana"><b>Project Language:</b></a><br>
    <img alt='javascript' src='https://img.shields.io/badge/JavaScript-100000?style=for-the-badge&logo=javascript&logoColor=FFD000&labelColor=000000&color=EAE9E9'/>
</p>

<p align="center">
    <a style="font-size: 20px; font-family:verdana"><b>Fork/Download for:</b></a><br>
    <a href="https://replit.com/github/TFAGaming/DiscordJS-V14-Bot-Template">
        <img src="https://img.shields.io/badge/Repl.it-100000?style=for-the-badge&logo=replit&logoColor=FFFFFF&labelColor=000000&color=EAE9E9">
    </a>
    <a href="https://github.com/TFAGaming/DiscordJS-V14-Bot-Template/releases/">
        <img src="https://img.shields.io/badge/Visual_Studio Code-100000?style=for-the-badge&logo=visual studio code&logoColor=0084FF&labelColor=000000&color=EAE9E9">
    </a>
</p>

<p align="center">
    <a style="font-size: 20px; font-family:verdana"><b>Project Requirements:</b></a><br>
    <a href="https://nodejs.org/en/">
        <img src="https://img.shields.io/badge/Node.JS_v ^16.9 -100000?style=for-the-badge&logo=node.js&logoColor=26FF00&labelColor=000000&color=EAE9E9">
    </a>
    <a href="https://www.npmjs.com/package/discord.js">
        <img src="https://img.shields.io/badge/Discord.js_v ^14.1.0-100000?style=for-the-badge&logo=npm&logoColor=26FF00&labelColor=000000&color=EAE9E9">
    </a>
</p>

<p align="center">
<a style="font-size: 20px; font-family:verdana"><b>Databases Available:</b></a><br>
    <a href='https://www.mongodb.com/' target="_blank">
        <img src='https://img.shields.io/badge/MongoDB%20(v6.4.4)-100000?style=for-the-badge&logo=Mongodb&logoColor=00FF00&labelColor=000000&color=EAE9E9'/>
    </a>
    <a href="https://quickdb.js.org/">
        <img src='https://img.shields.io/badge/Quick.DB%20(v9.0.5)-100000?style=for-the-badge&logo=sqlite&logoColor=0073FF&labelColor=000000&color=EAE9E9'>
    </a>
</p>

# DiscordJS V14 Bot Template - Introduction:
A Discord bot project made with the npm package discord.js version 14 and it handles Prefix and Slash commands, and it includes two Databases: MongoDB and Quick.DB! You can create many commands as you want to improve your Bot. **Project made with ❤ by T.F.A#7524.**<br>
You can click on the star (⭐️) button above this repository if you liked this project! Thank you all. 🙏

<p align="center">
<a style="font-size: 15px; font-family:verdana"><b>GitHub Repository Statistics:</b></a><br>
    <img src="https://img.shields.io/github/forks/TFAGaming/DiscordJS-V14-Bot-Template?logo=githubactions&logoColor=success&style=social">
<img src="https://img.shields.io/github/stars/TFAGaming/DiscordJS-V14-Bot-Template?label=Stars&logo=ReverbNation&&logoColor=yellow&style=social">
</p>

# How to setup:
### - Creating a new client:

• 1- Go to [Discord Developer Portal](https://discord.com/developers) and then go to `Applications.` <br>
• 2- Create a new application choose it's name. <br>
• 3- Choose your application's avatar (not required).<br>
• 4- Go to `Bot` section and turn your application into a bot. <br>
• 5- Scroll down and enable the three disabled `Privileged Gateaway Intents` intents (`PRESENCE INTENT`, `SERVER MEMBERS INTENT`, and `MESSAGE CONTENT INTENT`). Here's a picture below:<br>
<img src="https://media.discordapp.net/attachments/1006491186875338823/1006494083063238737/2022-08-09_10_27_23-Discord_Developer_Portal_My_Applications.png?width=806&height=559">

### - Setup your project on ___Visual Studio Code___:
• 1- Download [Visual Studio Code](https://code.visualstudio.com/Download).<br>
• 2- Download [Node.JS](https://nodejs.org/en/) version **above** 16.9.0..<br>
• 3- Download the project (`.zip` folder) by clicking on this badge button above this guide:<br>
<img src="https://media.discordapp.net/attachments/1006491186875338823/1006494765812031640/2022-08-09_10_29_26-Markdown_Live_Preview.png"><br>
• 4- Drop the .zip folder into your Desktop, right click on the .zip folder and click on `Extract here`.<br>
• 5- After extracting the files into a new folder, delete the .zip folder and rename the created folder into any name you want.<br>
• 6- Open Visual Studio Code, click on `Open folder` and choose the created folder.<br>
• 7- Now go back to Discord Developer Portal site, copy your bot token, go back to VSCode, and paste your bot token in `config/config.json` file in the variable `TOKEN`. Now go back again to Discord Developer Portal site, copy your client's ID, go back to VSCode, and paste your bot ID in the variable `ID`. Go to your Discord app, copy your server ID, go to VSCode and paste your server ID in `GUILD_ID` variable.<br>
<img src="https://media.discordapp.net/attachments/1006491186875338823/1006498034684801114/2022-08-09_10_42_30-config.json_-_UptimerBot_-_Visual_Studio_Code.png"><br>
• 8- Go to terminal and type `npm init -y`.<br>
• 9- Go to terminal again and type `npm i` or `npm install`.<br>
• 10- Press `F5` and choose `Node.JS` to start running your bot.<br>
• 11- Enjoy! =)

```arm
Warning: VSCode doesnt host Discord bots 24/7. You need to use Heroku or other hoster applications to host your bot(s) forever.
```

### - Setup your project on ___Repl.it___:
• 1- Go to [Replit](https://www.replit.com) site and register a new account (If you are new on the site).<br>
• 2- Fork the project by clicking on this badge button above this guide:<br>
<img src="https://media.discordapp.net/attachments/1006491186875338823/1006500207871152168/2022-08-09_10_51_47-Markdown_Live_Preview.png"><br>
• 3- Click on `Import from GitHub`.<br>
• 4- Type `node index.js` or `node .` in the Run button configuration, and then press `Done`.<br>
<img src="https://media.discordapp.net/attachments/1006491186875338823/1006501072719855666/2022-08-09_10_55_10-README.md_-_DiscordJS-V14-Bot-Template_-_Replit.png"><br>

• 5- Go to Discord Developers Portal, copy your bot token, go back to your Replit project. Follow this picture below:<br>
<img src="https://media.discordapp.net/attachments/1006491186875338823/1006502913834758224/2022-08-09_10_58_14-index.js_-_DiscordJS-V14-Bot-Template_-_Replit.png"><br>

• 6- Click on the green run button `► Run` to start your bot.<br>
• 7- Enjoy! =)<br>

# What is MongoDB and Quick.db?
MongoDB is a database program. You can save some documents, data, and more! The official site of MongoDB is linked [here](https://www.mongodb.com/).<br>
Quick.db is also a database program, more simplified than MongoDB but doesn't have a lot features. Quick.db uses SQlite files to save data, but MongoDB uses clusters (or Mongo URI) to save data.

# Something doesn't work here...
There are a lot of issues happens with some users. If you tried to search for a solution and didn't found it, you can send me a Friend Request on Discord using this name and tag: **T.F.A#7524**

# Credits are required?
Forking this repository and sharing it again without giving credits to me (T.F.A) is **not acceptable**. You **can** remove the credits in some bot commands like ?help, ?ping... etc, but **not** in the main files like README.md, index.js... You've been warned, you will get a copyright warning if you don't follow this rule.

### Contact me!
<a href='https://www.youtube.com/c/TFA7524' target="_blank">
    <img alt='YouTube' src='https://img.shields.io/badge/YouTube-100000?style=social&logo=YouTube&logoColor=FF0000&labelColor=000000&color=EAE9E9'/>
</a>
<a href='https://dsc.gg/codingdevelopment' target="_blank">
    <img alt='Discord' src='https://img.shields.io/badge/Discord-100000?style=social&logo=Discord&logoColor=5865F2&labelColor=000000&color=EAE9E9'/>
