const conn = require('./conn')

const create = (userInfo) => {
    return conn.query(`INSERT INTO users (username, email, password) VALUES ($1, $2, $3);`, [userInfo.username, userInfo.email, userInfo.password])
}

const getUserByEmail = (email) => {
    return conn.oneOrNone(
      `SELECT * FROM users WHERE email=$1`, [email]
    )
    .then(userInfo => {
      console.log(userInfo)
      return userInfo
    })
  //   .catch(error => {
  //     console.error(error);
  //     throw error
  // })
}


module.exports = { create, getUserByEmail }
