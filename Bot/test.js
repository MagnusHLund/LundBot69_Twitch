// commands.js

class CommandHandler {
  static handleCommand(channel, tags, message, self, client) {
    // Split the message into a command and arguments
    const [command, ...args] = message.toLowerCase().split(' ');

    console.log("CHANNEL")
    console.log(channel)
    console.log("TAGS")
    console.log(tags)
    console.log("MESSAGE")
    console.log(message)
    console.log("SELF")
    console.log(self)
    console.log("CLIENT")
    console.log(client)

    switch (command) {
      case '!hello':
        client.say(channel, `Hello, ${tags['username']}! How are you today?`);
        break;
    }
  }
}

module.exports = CommandHandler;
