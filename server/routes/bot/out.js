let express = require('express')
let router = express.Router()
const axios = require('axios')
const debug = require('debug-levels')('bot/out')

const config = {
  base: "https://api.botorange.com/xiaoju/message/send",
  token: process.env.BO_TOKEN,
  testChatId: '5d023934bd6faa1c4e8f7bbf'
}

/* trigger output message */
router.get('/bot/out', function(req, res, next) {
  let uri = `${config.base}`
  let data = {
    "chatId": config.testChatId,
    "token": config.token,
    "messageType": 0, // MessageType, check below
    "payload": {
        "text": "from code"
    }
  }
  debug('bot/out', data)

  // @ts-ignore
  // axios({
    //   method: 'post',
    //   url: uri,
    //   data: data
    // });

    console.log('send:', data)
    console.log('uri', uri)
    // @ts-ignore
  axios.post(uri, data).then( function(response) {
    console.log('response', response)
    res.json(data)
  })
})

module.exports = router
