const dotenv = require("dotenv");
const { Client, Events, GatewayIntentBits } = require("discord.js");

dotenv.config({ path: "./config.env" });

const token = process.env.BOT_TOKEN;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token);
