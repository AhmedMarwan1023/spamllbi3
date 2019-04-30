const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("572755322494517260")
setInterval(function() {
channel.send(`Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,Rockstar,`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
