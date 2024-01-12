require("dotenv").config();
const BOT_TOKEN = process.env.BOT_TOKEN;

const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(BOT_TOKEN, {
  polling: true,
});

bot.on("message", (message) => {
  bot.sendMessage(message.from.id, message.text);
  console.log(message);
});
