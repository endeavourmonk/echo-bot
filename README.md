# Discord Bot Setup

This guide outlines the steps involved in setting up and running your Discord bot.

### Prerequisites:

1.  **_Node.js_** and **_npm_**: Ensure you have these installed on your system.
2.  **Discord Developer Portal Account:** Create one (https://discord.com/developers/) if you don't already have it.
3.  **Discord Bot:** Create a bot in the Developer Portal and note its Token and Client ID.
4.  **Discord Server Permissions:** Grant your bot the necessary permissions in your Discord server (e.g., "Read Messages", "Send Messages").

### Project Setup:

1. Clone this repository.

   git clone https://github.com/endeavourmonk/echo-bot.git

2. Go to the folder:

   cd echo-bot

3. Install necessary dependencies:

   npm install

4. Create a **_config.env_** file in your project's root directory.

5. Add the following lines, replacing placeholders with your actual values:

   BOT_TOKEN=YOUR_BOT_TOKEN
   CLIENT_ID=YOUR_DISCORD_CLIENT_ID
   SYSTEM_CHANNEL_ID=YOUR_SYSTEM_CHANNEL_ID
   INTRODUCTION_CHANNEL_ID=YOUR_INTRODUCTION_CHANNEL_ID

_Security: This file stores sensitive information. Do not commit it to version control (e.g., Git)._

6. Run the Bot:

   npm start

For specific features and advanced bot setups, refer to the Discord.js documentation: https://discord.js.org/
