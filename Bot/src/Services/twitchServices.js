import tmi from 'tmi.js'

export function connectToTwitch() {
  console.log('Connecting to the database, getting registered users...')
  const channels = ['Magnessdk']

  console.log('Connecting to twitch...')
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
  console.log('Twitch connection established!')
}
