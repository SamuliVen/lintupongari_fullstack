const config = require('./utils/config')
const express = require('express')
const app = express()
require('express-async-errors')
const cors = require('cors')
const havaintoRouter = require('./controllers/havainnot')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')
const wikiRouter = require('./controllers/wiki')
const { wikisearch } = require("./models/wikisearch");

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/lintudb', havaintoRouter)
app.use('/api/lintudb/user', usersRouter)
app.use('/api/login', loginRouter)
app.use('/api/wiki', wikiRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)


let haku = "";
if (process.argv[3] != null) {
  haku = encodeURIComponent(process.argv[2] + " " + process.argv[3]);
  haku.replace(" ", "%20");
} else {
  haku = encodeURIComponent(process.argv[2]);
}

wikisearch(haku, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});


module.exports = app