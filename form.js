const fs = require('fs');
const http = require('http');

http.createServer((req, res) =>{

    let body = [];

    req.on('data', (chunk) => {
        body.push(chunk);
    })

    req.on('end', () => {

        body = Buffer.concat(body).toString();

        // let username = body.split('=')[1];

        let username = 'Unknown user';
        
        if (body) {
            username = body.split('=')[1];
        }

        res.setHeader('Content-Type', 'text/html');
        res.write(`Hi ${username}<form action="/" method="POST">   
        <label for="username">Username </label>    
        <input type="text" name="username">
        <button type="submit">Submit</button>
        </form>`);
        res.end();
        
    })

    
    
}).listen(3000)