const server = require('./server')

server.listen(4545, () => {
  console.log(' === Server listening on http://localhost:4545 === ')
})