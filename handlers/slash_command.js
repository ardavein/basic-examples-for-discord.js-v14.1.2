const { readdirSync } = require('fs'); 
const { REST } = require('@discordjs/rest'); 
const { Routes } = require('discord-api-types/v9');
module.exports = {
data: { 
    name: 'slash_command'
}, run: async (client) => {
 
     readdirSync('./slash_commands/').forEach(async dir => {
        let slash_commands = readdirSync(`./slash_commands/${dir}/`).filter(file => file.endsWith('.js'));
        for (let command_file of slash_commands) {  
        let command = require(`../slash_commands/${dir}/${command_file}`); 
        if (command.data && command.data.name) await client.slash_commands.set(command.data.name, command);
        };
   
        const body = client.slash_commands.map(c => c.data); 
        const rest = new REST({ version: 9 }).setToken(client.config.token);
            await rest.put( Routes.applicationCommands(client.config.user_id), { body: body });
     });
     },
};
