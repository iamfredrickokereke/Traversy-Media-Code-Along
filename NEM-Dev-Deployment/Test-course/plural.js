const fs = require('fs')

const express = require('express');

const app = express();

var port = 3000;


var json = { count : 12, message: 'hey'};

app.get('/', (req, res) => {

    // fs.readFile('home.html', (error, file) => {

    // var html = Buffer.toString();
    //     if (error) {
    //         throw error;
    //     }
    //     console.log(file.toString());

            // res.setHeader('Content-Type', 'text/html')

    //     res.send(file.toString())
        
    // })
    // res.sendFile takes an absolute path to a file and
    // sets the mime type based n the file extname
    res.sendFile(__dirname + '/home.html', (err) => {
        if (err) {
            res.status(404).send(err)
        }       
    })
} )


app.get('/data', (req, res) => {
    res.json(json)
})

app.listen(port, () => { console.log('server is running on http://localhost:' + port);
})