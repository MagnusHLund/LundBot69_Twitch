export default function handleCommand(channel, tags, message, self, client) {
  const [command, ...args] = message.toLowerCase().split(' ')

  switch (command) {
    case '!hello':
      client.say(channel, `Hello, ${tags['username']}! How are you today?`)
      break
  }
}
