'use strict'

const app = require('./app')
const config = require('./config')

app.listen(config.port, () => {
  console.log(`Running node on port ${config.port}.`)
})