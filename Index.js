const mineflayer = require('mineflayer')

function criarBot() {
  const bot = mineflayer.createBot({
    host: 'Sonsofthemine.aternos.me',
    port: http,
    username: 'Bot24h'
    version: 1.21.4
  })

  bot.on('spawn', () => {
    console.log('Bot entrou no servidor!')
  })

  bot.on('end', () => {
    setTimeout(criarBot, 5000)
  })

  bot.on('error', console.log)
}

criarBot()