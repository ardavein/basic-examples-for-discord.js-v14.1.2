 const { readdirSync } = require('fs'); 
module.exports = { 
data: {
name: 'event_handler' 
}, run: async (client) => { 

 readdirSync('./events/').forEach(dir => { 
  let events = readdirSync(`./events/${dir}/`).filter(file => file.endsWith('.js')); 
  for (let event_file of events) {
  let event = require(`../events/${dir}/${event_file}`);
  if (event.once == true) client.once(event.data.name, (client, ...args) => event.run(client, ...args)); 
  else client.on(event.data.name, (... args) => event.run(client, ...args));
  };
});
},
};
