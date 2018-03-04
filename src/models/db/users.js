const conn = require('./conn')

const USER = {
  create: function(username, email, password){
    return conn.query(`INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`, [username, email, password])
  }
}

module.exports = USER
