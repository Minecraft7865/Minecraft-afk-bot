const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'WORRLDWARSMP.aternos.me',
  port: 18213,
  username: 'AFKbot',
  version: false
})

bot.on('spawn', () => {
  console.log('Bot spawned and online!')
  bot.chat('AFK bot online!')

  // AFK movement
  setInterval(() => {
    bot.setControlState('jump', true)
    setTimeout(() => bot.setControlState('jump', false), 500)
  }, 10000)
})

bot.on('error', err => console.log('Error:', err))
bot.on('end', () => console.log('Bot disconnected'))
