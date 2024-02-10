const dotenv = require("dotenv");
const { Client, Events, GatewayIntentBits } = require("discord.js");

dotenv.config({ path: "./config.env" });

const token = process.env.BOT_TOKEN;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(token);

// respond when user message in any channel
client.on("messageCreate", (msg) => {
  //   if (!msg.author.bot) {
  //     msg.reply({
  //       content: `Hello ${msg.author.username}, Welcome to the server, Please read the rules and introduce yourself in the ${introductionChannel} channel.`,
  //     });
  //   }
});

// respond when user join the server
client.on("guildMemberAdd", (member) => {
  const introductionChannel = client.channels.cache.get(
    process.env.INTRODUCTION_CHANNEL_ID
  );

  const systemChannel = client.channels.cache.get(
    process.env.SYSTEM_CHANNEL_ID
  );
  const username = member.user;

  systemChannel.send({
    content: `Hello ${username.toString()}, Welcome to the server! Please read the rules and introduce yourself in ${introductionChannel}.`,
  });
});
