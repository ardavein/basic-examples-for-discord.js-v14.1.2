const slash = require('../../handlers/slash-command');
module.exports = {
  data: {
    name: 'ready', 
    once: true,
  }, run: async (client) => {
   console.log(`Logged as ${client.user.tag}`);
   client.user.setPresence({ activities: [{ name: 'Made by @ardavein.', type: "WATCHING"}], status: "idle"});
   await slash.run(client);
},
};
