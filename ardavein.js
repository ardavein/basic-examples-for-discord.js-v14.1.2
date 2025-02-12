const { Client, GatewayIntentBits, Collection } = require('discord.js'); 
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildPresences] });
client.commands = new Collection();
client.aliases = new Collection(); 
client.slash_commands = new Collection()
client.config = { 
token: 'your-bot-token-goes-right-hereq', 
prefix: 'your-bot-prefix', 
user_id: 'your-bot-user_id' 
};
 
for (let handler of ['event', 'command']) require(`./handlers/${handler}`).run(client);

client.login(client.config.token); 
