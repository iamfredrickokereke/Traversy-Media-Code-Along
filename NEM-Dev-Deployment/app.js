const express = require('express')
const app = express()
const exphbs = require('express-handlebars')


const port = process.env.port || 8080


// HOW MIDDLEWARE WORKS

// app.use((req, res, next ) => {
//     console.log(Date.now());
//     req.name = "fred";
//     next()
// })

// INDEX ROUTE

app.get('/', (req, res) => {
    console.log(req.name);
    
    res.send("INDEX")
})

// ABOUT ROUTE
app.get('/about', (req, res) => {
    //req.name ="oh boy!"
    // console.log(req.name);
    
    res.send("ABOUT")
})

app.listen(port, () => { 
    console.log(`server is running on port http://localhost:${port}`);
    
})