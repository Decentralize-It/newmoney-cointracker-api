const router = require('express').Router()
const USER = require('../models/users')


router.get('/', (req, res) => {
  // console.log(req)
  res.redirect('/signup')
})

router.get('/signup', (req, res) => {
  res.send('signup')
})

router.post('/signup', (req, res) => {
  let userInfo = req.body
  USER.create(userInfo)
  .then(newUser => {
    res.redirect('/login')
  })
  .catch(error => {
    next(error);
  })
})

module.exports = router
