const router = require('express').Router()

router.get('/signup', (req, res) => {
  res.send('signup')
})

module.exports = router
