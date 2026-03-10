const mineflayer = require('mineflayer')

function startBot() {

  const bot = mineflayer.createBot({
    host: 'Sonsofthemine.aternos.me',
    port: 49135,
    username: 'Bot24h',
    version: '1.21.4'
  })

  bot.on('spawn', () => {
    console.log('Bot entrou no servidor!')

    // pular a cada 30 segundos
    setInterval(() => {
      bot.setControlState('jump', true)

      setTimeout(() => {
        bot.setControlState('jump', false)
      }, 500)

    }, 30000)

    // andar um pouco
    setInterval(() => {

      const actions = ['forward', 'back', 'left', 'right']
      const action = actions[Math.floor(Math.random() * actions.length)]

      bot.setControlState(action, true)

      setTimeout(() => {
        bot.setControlState(action, false)
      }, 2000)

    }, 60000)

  })

  bot.on('end', () => {
    console.log('Bot desconectou, tentando reconectar...')
    setTimeout(startBot, 5000)
  })

  bot.on('error', (err) => {
    console.log('Erro:', err)
  })

}

startBot()
