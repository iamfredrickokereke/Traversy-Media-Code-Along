<<<<<<< HEAD
const express = require('express');
const app = express();
=======
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
>>>>>>> 552f6fa62266aeac4c8b0e924d4c72f1047ec694


<<<<<<< HEAD
// const port = 8080;

const host = 'http://localhost:';

app.get('/', (req, res) => {
    res.send("it works");
})

app.listen(host, () => { 
    console.log(`server is running on port `+ host + port);
=======
const port = process.env.PORT ||8000

app.engine('handlebars', exphbs({defaultLayout : "main"}))
app.set('view engine', 'handlebars')

// HOW MIDDLEWARE WORKS

// app.use((req, res, next ) => {
//     console.log(Date.now());
//     req.name = "fred";
//     next()
// })

// INDEX ROUTE

app.get('/', (req, res) => {
    console.log(req.name);
    
    res.render("INDEX")
})

// ABOUT ROUTE
app.get('/about', (req, res) => {
    //req.name ="oh boy!"
    // console.log(req.name);
    
    res.send("ABOUT")
})

app.listen(port, () => { 
    console.log(`server is running on port http://localhost:${port}`);
>>>>>>> 552f6fa62266aeac4c8b0e924d4c72f1047ec694
    
})