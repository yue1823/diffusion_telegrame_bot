


require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

// 从环境变量获取你的 Telegram bot token
const token = "7492973535:AAGuT28ovHirN3qyS6O64Yl_SZmswEDT_TA";

// 创建一个 bot 实例，并使用 'polling' 模式
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Hello! I am diffusion bot.');

    // 发送带有按钮的消息
    bot.sendMessage(chatId, 'Please select what you want to do', {
        reply_markup: {
            inline_keyboard: [
                [{ text: "Bet Card", callback_data: 'one' }],
                [{ text: "Transfer", callback_data: 'two' }],
                [{ text: "Swap", callback_data: 'three' }]
            ]
        }
    });
});

// 处理按钮点击事件
bot.on('callback_query', (callbackQuery) => {
    const msg = callbackQuery.message;
    const chatId = msg.chat.id;
    let url;
    if (callbackQuery.data === 'one') {
        url = 't.me/aptos_diffusion_bot/diffusion_function';
    } else if (callbackQuery.data === 'two') {
        url = 't.me/aptos_diffusion_bot/diffusion_function/transfer';
    } else if (callbackQuery.data === 'three') {
        url = 't.me/aptos_diffusion_bot/diffusion_function/swap';
    }

    // 立即发送带有 URL 的消息
    if (url) {
        bot.answerCallbackQuery(callbackQuery.id); // 可选：回答回调查询
        bot.sendMessage(chatId, `Opening your requested page...`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "Open Page", url: url }]
                ]
            }
        });
    }
});
