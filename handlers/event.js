const { readdirSync } = require('fs'); // Recieving the readdirSync function from <'fs'> module.
module.exports = { 
data: { // Declaring the handler data.
name: 'event_handler' // It is not important for right now but if will it in sometime? Declaring the name of handler
}, run: async (client) => { //Recieving the <Client> from the main file named './ardavein.js'. 

 readdirSync('./events/').forEach(dir => { // Getting every folders named like client, logging, eg.
  let events = readdirSync(`./events/${dir}/`).filter(file => file.endsWith('.js')); // Declaring events files.
  for (let event_file of events) { // There is a for function(?). It will works for every file in './events/{dir}/'
  let event = require(`../events/${dir}/${event_file}`); // Declaring the event file to run it
  if (event.once == true) client.once(event.data.name, (client, ...args) => event.run(client, ...args)); // If <Event>.once is true it will run for once.
  else client.on(event.data.name, (... args) => event.run(client, ...args)); // If it is not works for every time it triggered 
  };
});
},
};