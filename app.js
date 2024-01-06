const express = require('express')
const bodyParser = require('body-parser')
const setupRoutes = require('./src/routes')
const cors = require('cors')

const app = express()

exports.app = app

app.use(bodyParser.json())

app.use(
  cors({
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'AnonymousId',
      'X-Request-Id'
    ]  
  })
)
setupRoutes(app)

app.get('/', (req, res) => {
  return res.redirect('/home')
})