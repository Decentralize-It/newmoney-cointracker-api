const pgp = require('pg-promise')();
const config = {
  database: 'newmoney',
  port: 5432,
  host: 'localhost'
}
const db = pgp(config)

module.exports = db
