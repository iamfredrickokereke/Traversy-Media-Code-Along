const fs = require('fs');
const http = require('http');

const form = `<form action="/" method="POST">   
<label for="username">Username </label>    
<input type="text" name="username">
<button type="submit">Submit</button>
</form>`

http.createServer((req, res) =>{

    let body = [];

    req.on('data', (chunk) => {
        body.push(chunk)
    })

    req.on('end', () => {

        let input = Buffer.concat(body).toString().split('=')[1]
        console.log(input);
        
    })

    res.setHeader('Content-Type', 'text/html')
    res.write(form);
    res.end();
    
}).listen(2000)