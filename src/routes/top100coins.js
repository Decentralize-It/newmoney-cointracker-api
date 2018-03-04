const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('top100coins')
});

module.exports = router
