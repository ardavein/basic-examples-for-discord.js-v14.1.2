module.exports = {
  data: {
  name: 'messageCreate',
  once: false,
  }, run: async (client, message) => { 
   let prefix = client.config.prefix; 
   if (!message.content.startsWith(prefix)) return; 
   if (message.author.bot) return; 
   let args = message.content.slice(prefix.length).trim().split(/ +/) 
   let cmd = args.shift().toLowerCase(); 
   if (cmd.length == 0) return; 
   let command = client.commands.get(cmd) || client.aliases.get(cmd) || client.commands.find(a => a.data.name == cmd) || client.aliases.find(a => a.data.name == cmd); 
    try { 
  command.run(client, message, args) 
   } catch (e) { console.log(e) }; 
  },
};
