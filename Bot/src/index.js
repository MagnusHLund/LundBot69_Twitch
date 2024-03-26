import axios from 'axios'
require('dotenv').config({ path: './.env' })
const commands = require('./CommandHandler')
export const baseUrl = 'lundbot69api.magnuslund.com/api/'

const tmi = require('tmi.js')

// TODO: When ready, change this to call the API and get all channels in the database
/**
 * const channels = axios.get(baseUrl + "bot/getChannels")
 */
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

  if (message.charAt(0) === PREFIX) {
    commands.handleCommand(channel, tags, message, self, client)
  } else {
    // TODO: Idea 2 in ideas.json
  }
})
