const config = require("../config")
const express = require('express')
const app = express()
const http = require("http")
const chalk = require('chalk')
const bodyParser = require("body-parser")

require('../dev/start')(app)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.get('/', (req, res) => { res.send('Hello world')})
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.json(err)
})

const server = http.createServer(app)

if (config.globals.__PROD__) {
  run(config.server_port)
} else {
  const detect = require('detect-port')
  const prompt = require('react-dev-utils/prompt')

  detect(config.server_port).then(port => {
    if (port === config.server_port) {
      run(port)
      return
    }

    const question =
      chalk.yellow('Something is already running on port ' + config.server_port + '.') +
      '\n\nWould you like to run the app on another port instead?'

    prompt(question, true).then(shouldChangePort => {
      if (shouldChangePort) {
        run(port)
      }
    })
  })
}

function run(port) {
  const server_url = config.server_protocol + '://'
    + config.server_host
    + ':' + port

  server.listen(port)

  server.on('listening', function() {
    console.log('The app is running at:')
    console.log('\n\t' + chalk.cyan(server_url) + '\n')

    if (!config.globals.__PROD__) {
      console.log('Note that the development build is not optimized.')
    }
  })
}
