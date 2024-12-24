require('dotenv').config();
const app = require('./app')
const http = require ('http')
const port = process.env.Port || 8070

const server = http.createServer(app)

server.listen(port,function(){
    console.log(`http://localhost:${port}`)
})
