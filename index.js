const express = require('express')
const app = express()
const requestPromise = require('request-promise')
const bodyParser = require('body-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const cors = require('cors')
const conn = require('./src/models/db/conn')
const middlewares = require('./src/routes/middlewares')
let PORT = process.env.PORT || 4000
const router = require('./src/routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(middlewares.addUserToRequest)
app.use('/', router)

var sessionOptions = {
  secret: "secret",
  resave : true,
  saveUninitialized : false,
  store: new MongoStore({
  url:"mongodb://localhost/newmoney-cointracker"
  })
}
app.use(session(sessionOptions));


app.listen(PORT, () => console.log(`LIVE on ${PORT}`))
