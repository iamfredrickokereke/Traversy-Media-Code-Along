const http = require("http");
const fs = require("fs");

const app = http.createServer((request, response) => {

    response.statusCode = 200;
    response.setHeader('Content-type', 'text/plain');
    response.end("Hello World");
});

const port = 5500;

const host = '127.0.0.1';


app.listen(port, host, () => { console.log("Server is running on port " + port +" hosted on " + host)})
