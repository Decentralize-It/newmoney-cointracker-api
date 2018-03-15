const router = require('express').Router()
const users = require('./users')
const allCoins = require('./allCoins')
const top100coins = require('./top100coins')
const auth = require('./authentication')

router.use('/', users)
router.use('/', auth)
router.use('/allCoins', allCoins)
router.use('/top100coins', top100coins)

module.exports = router
