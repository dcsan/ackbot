let express = require('express')
let router = express.Router()

const debug = require('debug-levels')('bot/in')

function logInput(msg) {
  debug.log("msg", msg)
}

// incoming message
router.post('/bot/in/message', function(req, res, next) {
  debug.info('ok POST in/message')
  debug.info('POST req.body', req.body)
  logInput(req.body)
  res.status(200)
  res.send('ok')
})

/* GET just to check end-points are working */
router.get('/bot/in/message', function(req, res, next) {
  debug.info('GET /in/message', req.body)
  logInput(req.body)
  res.status(200)
  res.send('ok')
})

module.exports = router
