const { SlashCommandBuilder } = require('@discordjs/builders'); // Needed this module to create a slash command.
module.exports = { // Declaring the command data.
    data: new SlashCommandBuilder() // Creating a slash command.
    .setName('ping') // Name of command.
    .setDescription('A basic ping pong slash command.'), // Description of command.
    run: async (client, interaction) => { // Declaring the client and interaction from the event 'interactionCreate'.
       interaction.reply(`Websocket: ${client.ws.ping}ms.`); // Replies with discord api websocket ping.
    },
};