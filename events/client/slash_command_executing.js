const { InteractionType } = require('discord-api-types/v10'); // 
module.exports = {
    data: { // Declaring the event data.
    name: 'interactionCreate', // Declaring the ready event name.
    once: false, // If you make this option true, it will works for once. 
    }, run: async (client, interaction) => { // Recieving the <Client> from the main file named 'ardavein.js'. 
    if (interaction.type !== InteractionType.ApplicationCommand) return; // ıf that interaction is not a command it will return.
    let command = client.slash_commands.get(interaction.commandName); // Declaring the command.
    if (!command) return; // If there is not a command it will return it will never happen but never say never.
    try { // Try is the a (idk type of it) to catch the error while your bot works still.
        command.run(client, interaction); // Executing the command with needed client and interaction.
    } catch (e) { console.log(e); }; // If there is an error about the executing the command it will type at console.
    },
  };