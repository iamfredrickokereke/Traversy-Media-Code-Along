const express = require('express');
const app = express();

const port = process.env.port || 8080

// const port = 8080;

const host = 'http://localhost:';

app.get('/', (req, res) => {
    res.send("it works");
})

app.listen(host, () => { 
    console.log(`server is running on port `+ host + port);
    
})