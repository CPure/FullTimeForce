const { app } = require('./app')

const startup = async () =>{

  const PORT = process.env.PORT || 3100

  app.set('port', PORT)

  const server = require('http').createServer(app)

  server.listen(PORT, () =>{
    console.log(`Server up and running on http://localhost${PORT}/`)
  })
}

startup()