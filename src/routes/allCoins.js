const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('allCoins')
});

module.exports = router
