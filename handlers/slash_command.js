const { readdirSync } = require('fs'); // Recieving the readdirSync function from <'fs'> module.
const { REST } = require('@discordjs/rest'); // Recieving the REST from <'@discord.js/rest'> module.
const { Routes } = require('discord-api-types/v9'); // Recieving the Routes from <'discord-api-types/v9'> module.
module.exports = {
data: { // Declaring the handler data.
    name: 'slash_command', // It is not important for right now but if will it in sometime? Declaring the name of handler.
}, run: async (client) => {
 
     readdirSync('./slash_commands/').forEach(async dir => { // Getting every folders named like moderation, developer, eg.
        let slash_commands = readdirSync(`./slash_commands/${dir}/`).filter(file => file.endsWith('.js')); // Declaring commands files.
        for (let command_file of slash_commands) {  // There is a for function(?). It will works for every file in './commands/{dir}/'.
        let command = require(`../slash_commands/${dir}/${command_file}`); // Declaring the command file to run it.
        if (command.data && command.data.name) await client.slash_commands.set(command.data.name, command); // Saving the command to at <'discord.js'>.Collection(). (It is important because we need this when users executing command).
        };
    });
        const body = client.slash_commands.map(c => c.data); // Declaring the body as the all commands saved as <Client>.slash_commands.  
        const rest = new REST({ version: 9 }).setToken(client.config.token); // Creating a new v9 rest with our token.
            await rest.put( Routes.applicationCommands(client.config.user_id), { body: body }); // Saving commands as application commadns
    },
};