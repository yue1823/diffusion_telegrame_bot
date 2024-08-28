import Telegrame_bot from "node-telegram-bot-api"

const token = "7492973535:AAGuT28ovHirN3qyS6O64Yl_SZmswEDT_TA";
const bot = new Telegrame_bot(token,{polling:true})
bot.onText(/\/starts$/,(msg: { chat: { id: any; }; })=>{
    const chatId = msg.chat.id
    bot.sendMessage(chatId,'Never gonna give you up')
})
console.log(`process:${token}`);
