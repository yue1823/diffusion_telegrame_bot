


require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

// 从环境变量获取你的 Telegram bot token
const token = "7492973535:AAGuT28ovHirN3qyS6O64Yl_SZmswEDT_TA";

// 创建一个 bot 实例，并使用 'polling' 模式
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    //bot.sendMessage(chatId, 'Hello! I am diffusion bot.');
    bot.sendPhoto(chatId, "https://github.com/yue1823/diffusion/raw/main/client/src/art/diffusion.png", {caption: "Welcome to diffusion bot, you can create a bet card for any pair you like", reply_markup: {
            inline_keyboard: [
                [{ text: "Diffusion", callback_data: 'one' ,url:'https://t.me/aptos_diffusion_bot/diffusion_function'}],

            ]
        }});
    // 发送带有按钮的消息
    // bot.sendMessage(chatId, 'Please select what you want to do', {
    //     reply_markup: {
    //         inline_keyboard: [
    //             [{ text: "Diffusion", callback_data: 'one' ,url:'https://t.me/aptos_diffusion_bot/diffusion_function'}],
    //
    //         ]
    //     }
    // });

});
bot.onText(/\/detail_of_diffusion/, (msg) => {
    const chatId = msg.chat.id;
    //bot.sendMessage(chatId, 'Hello! I am diffusion bot.');
    bot.sendPhoto(chatId, "https://github.com/yue1823/diffusion/raw/main/client/src/art/diffusion.png", { reply_markup: {
            inline_keyboard: [
                [{ text: "What's diffusion", callback_data: 'one'}],
                [{ text: "Soical link", callback_data: 'two' }]
            ]
        }});
    bot.sendMessage(chatId, `Welcome to try our diffusion app,here's will tell you more about our diffusion`, {

    }).then(() => {
        console.log('Message sent with URL button');
    }).catch((error) => {
        console.error('Error sending message:', error);
    });
    // 发送带有按钮的消息
    // bot.sendMessage(chatId, 'Please select what you want to do', {
    //     reply_markup: {
    //         inline_keyboard: [
    //             [{ text: "Diffusion", callback_data: 'one' ,url:'https://t.me/aptos_diffusion_bot/diffusion_function'}],
    //
    //         ]
    //     }
    // });

});
// 处理按钮点击事件
bot.on('callback_query', (callbackQuery) => {
    const msg = callbackQuery.message;
    const chatId = msg.chat.id;
    let url;
    let message='';



    if (callbackQuery.data === 'one') {
        bot.sendPhoto(chatId,"https://github.com/yue1823/diffusion/blob/main/client/src/art/2024-9-1%E4%B8%8B%E5%8D%883.53%E7%9A%84%E5%BD%B1%E5%83%8F.JPG?raw=true")
        message = 'We design a lottery, defi, and dao system all in one. To build a relationship with the Aptos community, we are focusing on the Aptos ecosystem. Our goal is to create a system that can grow with our community.';
        bot.answerCallbackQuery(callbackQuery.id);
        bot.sendMessage(chatId,message,{
            reply_markup: {
            inline_keyboard: [
                [{ text: "try diffusion",callback_data: 'start diffusion' }],

            ]
        }})
    } else if (callbackQuery.data === 'two') {
        bot.sendMessage(chatId,"Github : https://github.com/yue1823/diffusion");
        bot.sendMessage(chatId,"X : https://x.com/Diffusion15205");
    }

});

bot.on('callback_query', (callbackQuery) => {
    const msg = callbackQuery.message;
    const chatId = msg.chat.id;
    if(callbackQuery.data=='start diffusion'){
        bot.sendMessage(chatId,"/start")
    }
})
module.exports = (req, res) => {
    res.status(200).send("Bot is running.");
};