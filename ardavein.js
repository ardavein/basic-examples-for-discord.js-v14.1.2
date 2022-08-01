const { Client, GatewayIntentBits, Collection } = require('discord.js'); // Receiving Client, GatewayIntentBits, Collection from <'discord.js'>
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildPresences] }); // Declaring the client by using intents.
client.commands = new Collection(); // Declaring <Client>.commands as a <'discord.js'>.Collection() (map) to save it and reach the commands when we wanna get it quickly
client.aliases = new Collection(); //  Declaring <Client>.aliases as a <'discord.js'>.Collection() (map) to save it and reach the aliases of commands when we wanna get it quickly
client.slash_commands = new Collection(); // Declaring <Client>.slash_commands as <'discord.js'> Collection() (array = []) to save it and reach the slash commands when we wanna get it quickly
client.config = { //Some information we can enter to get these quickly and basically. It is better way from creating a 'config.json' file.
token: 'your-bot-token-goes-right-hereq', //The token we need for logging the bot. (Make it safe as much as possible) DON'T SHARE IT NEVER!
prefix: 'your-bot-prefix', // The prefix for users to use it before typing command.
user_id: 'your-bot-user_id' // The bot's user id goes here because when we are saving the slash commands needed <Client>.user.id but we cant use that form due to you can get your user id when the bot is ready so you may get some errors. SO TYPE HERE THE YOUR BOT CLIENT ID
};

for (let handler of ['event', 'command', 'slash_command']) require(`./handlers/${handler}`).run(client); // Running handlers we need to and giving <Client>. (Command, event)

client.login(client.config.token); // Logging into the discord.
