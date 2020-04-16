const express = require('express')
const app = express()

const port = process.env.port || 8080

// HOW MIDDLEWARE WORKS

app.use((req, res, next ) => {
    console.log(Date.now());
    next()
})

// INDEX ROUTE

app.get('/', (req, res) => {
    res.send("INDEX")
})

// ABOUT ROUTE
app.get('/about', (req, res) => {
    res.send("ABOUT")
})

app.listen(port, () => { 
    console.log(`server is running on port http://localhost:${port}`);
    
})