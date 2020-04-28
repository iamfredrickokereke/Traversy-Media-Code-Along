const express = require('express')

server = express()


server.listen(3000)

server.listen = function listen() {

var server = http.createServer(this);

return server.listen.apply(server, arguments);

};