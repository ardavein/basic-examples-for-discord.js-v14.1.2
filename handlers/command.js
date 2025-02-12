const { readdirSync } = require('fs'); 
module.exports = { 
data: { 
name: 'command_handler'
}, run: async (client) => 

 readdirSync('./commands/').forEach(dir => {
  let commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js')); 
  for (let command_file of commands) {  
  let command = require(`../commands/${dir}/${command_file}`);
  if (command.data && command.data.name) client.commands.set(command.data.name, command); 
  if (command.data.aliases && Array.isArray(command.data.aliases)) command.data.aliases.forEach(alias => client.aliases.set(alias, command.data.name)); 
  };
});
},
};
