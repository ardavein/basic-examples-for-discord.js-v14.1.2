module.exports = {
data: { 
name: 'ping',
description: 'A basic ping pong command.', 
aliases: ['pong'] 
}, run: async (client, message, args) => { 
 message.reply(`Websocket: ${client.ws.ping}ms.`);
},
};
