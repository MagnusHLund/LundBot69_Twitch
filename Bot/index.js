require('dotenv').config({ path: './Bot/.env' })
const commands = require('./CommandHandler')

const tmi = require('tmi.js')

// TODO: When ready, change this to call the API and get all channels in the database
const channels = ['Magnessdk', 'MrWuus', 'TheRealFightingLime1']

console.log('Bot is starting...')

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
})

client.connect()

console.log('Bot has started!')
const PREFIX = '!'

client.on('message', (channel, tags, message, self) => {
  if (self) return // Ignore messages from the bot itself

  if (message.charAt(0) === '!') {
    commands.handleCommand(channel, tags, message, self, client)
  } else {
    // TODO: Idea 2 in ideas.json
  }
})
