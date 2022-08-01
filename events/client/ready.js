module.exports = {
  data: { // Declaring the event data.
    name: 'ready', // Declaring the ready event name.
    once: true, // Making once true is not important i guess but in discord.js guide they is making it true. I think that because it will run once already when the bot became online. 
  }, run: async (client) => { // Recieving the <Client> from the main file named 'ardavein.js'. 
   console.log(`Logged as ${client.user.tag}`); // Printing the console successfully the bot is online.
   client.user.setPresence({ activities: [{ name: 'Made by @ardavein.', type: "WATCHING"}], status: "idle"}); //Setting the bot activity. It may not work because i really don't know it works sometimes but not always.
},
};