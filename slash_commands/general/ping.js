const { SlashCommandBuilder } = require('@discordjs/builders'); 
module.exports = { 
    data: new SlashCommandBuilder() 
    .setName('ping')
    .setDescription('A basic ping pong slash command.'), 
    run: async (client, interaction) => {
       interaction.reply(`Websocket: ${client.ws.ping}ms.`); 
    },
};
