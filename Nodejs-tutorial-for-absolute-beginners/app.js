const http = require("http");
const fs = require("fs");

const port = 5500;

const host = '127.0.0.1';


fs.readFile("index.html", (error, File ) => {

    if (error) {
        throw error;
    }

    const app = http.createServer((request, response) => {

        response.statusCode = 200;
        response.setHeader('Content-type', 'text/html');
        response.write(File)
        response.end();
    })

    


app.listen(port, host, () => { console.log("Server is running on port " + port +" hosted on " + host)})


})



