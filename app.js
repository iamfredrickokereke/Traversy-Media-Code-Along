const http = require("http");

const app = http.createServer();

const port = 5500;

const host = 127.0.0.1;


http.listen(port, host, () => { console.log("Server is running on " + port + host)})
