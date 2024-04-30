//import axios from 'axios'
import handleCommand from './Handlers/CommandHandler.js'
import dotenv from 'dotenv'
import { connectToTwitch } from './Services/twitchServices.js'

export const baseUrl = 'lundbot69.com/api/'

dotenv.config({ path: '../.env' })

function init() {
  console.log('Bot is starting...')
  connectToTwitch()

  console.log('Bot has started!')

  const PREFIX = '!'
  client.on('message', (channel, tags, message, self) => {
    if (self) return // Ignore messages from the bot itself

    if (message.charAt(0) === PREFIX) {
      handleCommand(channel, tags, message, self, client)
    } else {
      // TODO: Idea 2 in ideas.json
    }
  })
}

init()
