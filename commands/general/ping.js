module.exports = {
data: { // Declaring the command data.
name: 'ping', // The command name.
description: 'A basic ping pong command.', // You can get this data from <Client>.commands.get('<command_name>').description. It may be useful for the help command.
aliases: ['pong'] // The aliases is the other names of your command. If a user use this by !pong the command will run. 
}, run: async (client, message, args) => { // Declaring the client, message, args from the event 'messageCreate'.

 message.reply(`Websocket: ${client.ws.ping}ms.`); // Replies with discord api websocket ping.
// Quick tip: If you use <Message>.reply() it will type like this @User, <response> the user will mentioned by bot but if you use <Message>.channel.send() it won't mention anyone.
},
};