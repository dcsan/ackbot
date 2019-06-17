let express = require('express')
let router = express.Router()
const axios = require('axios')
const debug = require('debug-levels')('bot/out')

const config = {
  sendUrl: "https://api.botorange.com/xiaoju/message/send",
  token: process.env.BO_TOKEN,
  testChatId: process.env.TEST_CHAT_ID,
}

/* trigger output message */
router.get('/bot/out', function(req, res, next) {
  let sendUrl = config.sendUrl
  let data = {
    "chatId": config.testChatId,
    "token": config.token,
    "messageType": 1, // MessageType, check below
    "payload": {
        "text": "from code"
    }
  }

  // debug.log('send uri:', sendUrl)
  let blob = {
    method: 'post',
    url: sendUrl,
    timeout: 3000,
    data: data
  }
  debug.log('send blob:', blob)

  // @ts-ignore
  axios(blob)
  .then( function(response) {
    debug.log('send response', response)
    res.json(data)
  })
  .catch(function (err) {
    debug.error('failed to send')
    // TODO - check what type of error
    res.status(500).json({
      status: 500,
      msg: 'failed to send / timeout'
    })
  })

})

module.exports = router
