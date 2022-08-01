module.exports = {
  data: { // Declaring the event data.
  name: 'messageCreate', // Declaring the ready event name.
  once: false, // If you make this option true, it will works for once. 
  }, run: async (client, message) => { // Recieving the <Client> from the main file named 'ardavein.js'. 
   let prefix = client.config.prefix; // Declaring the prefix from client.config.
   if (!message.content.startsWith(prefix)) return; // If it does not starts with prefix we returning it to nothing. (It will run what after return, if we don't type any code here it will do nothing) 
   if (message.author.bot) return; // Checking if user is a bot or not if it is a bot it will return.
   let args = message.content.slice(prefix.length).trim().split(/ +/) // Declaring the arguments except the prefix slice() is deleting the prefix, trim() is deleting the spaces, split is making it as a array
   let cmd = args.shift().toLowerCase();  // Removing the command from arguments and making it lower case. (PING to ping)
   if (cmd.length == 0) return; // If they just type ! it will return.
   let command = client.commands.get(cmd) || client.aliases.get(cmd) || client.commands.find(a => a.data.name == cmd) || client.aliases.find(a => a.data.name == cmd); // Getting the command from <Client>.commands or <Client>.aliases
    try { // Try is the a (idk type of it) to catch the error while your bot works still.
  command.run(client, message, args) // Executing the command with needed client, message and args,
   } catch (e) { console.log(e) };    // If there is an error about the executing the command it will type at console.
  },
};
