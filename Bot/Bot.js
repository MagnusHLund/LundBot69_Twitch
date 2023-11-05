require('dotenv').config()
const commands = require('./CommandHandler')

const tmi = require('tmi.js')

const channels = ['Magnessdk', 'MrWuus']

console.log("Bot is starting...")


const client = new tmi.Client({
  connection: {
    secure: true,
    reconnect: true,
  },
  identity: {
    username: 'LundBot69',
    password: process.env.TWITCH_OAUTH_TOKEN,
  },
  channels: channels, 
});

client.connect();

console.log("Bot has started!");

client.on('message', (channel, tags, message, self) => {
  if (self) return; // Ignore messages from the bot itself

  commands.handleCommand(channel, tags, message, self, client);
});