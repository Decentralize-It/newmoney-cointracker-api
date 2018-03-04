const express = require('express')
const app = express()
const requestPromise = require('request-promise')
const cors = require('cors')
let PORT = process.env.PORT || 4000
const allCoins = require('./routes/allCoins.js')
const top100coins = require('./routes/top100coins.js')
const router = require('./routes')

app.use(cors())

app.use('/', router)
// app.use('/api/100', top100coins)

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html')
// })
//
// app.get('/api/toptencoins', (req, res) => {
//   const options = {
//     uri: 'https://api.coinmarketcap.com/v1/ticker/?limit=10',
//     headers: {
//       'User-Agent': 'Request-Promise'
//     }
//   }
//   return requestPromise(options)
//     .then( data => {
//       const coins = JSON.parse(data)
//       res.status(200).json(coins)
//     })
// })

app.listen(PORT, () => console.log(`LIVE on ${PORT}`))
