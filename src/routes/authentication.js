const router = require('express').Router()
const db = require('../models/users')

router.get('/login', (req, res) => {
  if (req.user) {
    res.send(`something`)
  } else {
  res.send('login')
  }
})

router.post('/login', (req, res, next) => {
  const { username, email, password } = req.body
  db.getUserByEmail(email)
  .then(userInfo => {
    if (!userInfo || userInfo.password != password){
      res.redirect('/login')
    } else {
      req.session.user = userInfo
      res.redirect('/dashboard')                                                                           ``    }
    })
  .catch(error)
})

module.exports = router
