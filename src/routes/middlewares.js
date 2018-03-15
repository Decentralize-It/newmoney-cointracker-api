// const bcrypt = require('bcrypt')
var session = require('express-session');

const addUserToRequest = (req, res, next) => {
  req.user = {
    username: req.body.username,
    password: req.body.password
  }
  console.log(req.user)
  // next();
}
const createSession = (session, userInfo) => {
  session.user = userInfo
}

module.exports = { addUserToRequest, createSession }
