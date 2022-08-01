const { readdirSync } = require('fs'); // Recieving the readdirSync function from <'fs'> module.
module.exports = { 
data: { // Declaring the handler data.
name: 'command_handler' // It is not important for right now but if will it in sometime? Declaring the name of handler
}, run: async (client) => { // Recieving the <Client> from the main file named 'ardavein.js'. 

 readdirSync('./commands/').forEach(dir => { // Getting every folders named like moderation, developer, eg.
  let commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js')); // Declaring commands files.
  for (let command_file of commands) {  // There is a for function(?). It will works for every file in './commands/{dir}/'
  let command = require(`../commands/${dir}/${command_file}`); // Declaring the command file to run it
  if (command.data && command.data.name) client.commands.set(command.data.name, command); // Saving the command to at <'discord.js'>.Collection(). (It is important because we need this when users executing command)
  if (command.data.aliases && Array.isArray(command.data.aliases)) command.data.aliases.forEach(alias => client.aliases.set(alias, command.data.name)); // Saving the aliases the command has to at <'discord.js'>.Collection()
  };
});
},
};