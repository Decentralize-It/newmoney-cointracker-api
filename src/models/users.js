const db = require('./db/users')

module.exports = {
  create: db.create,
  getUserByEmail: db.getUserByEmail
}
