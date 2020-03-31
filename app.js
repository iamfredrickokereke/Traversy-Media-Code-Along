const http = require("http");

const app = http.createServer((request, response) => {

    response.statusCode = 200;
    response.setHeader('Content-type', 'text/plain');
    response.end("Hello World");
});

const port = 5500;

const host = '127.0.0.1';


http.listen(port, host, () => { console.log("Server is running on " + port +" hosted on " + host)})
