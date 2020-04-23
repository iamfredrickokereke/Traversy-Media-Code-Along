const express = require('express')
const app = express()
const exphbs = require('express-handlebars')


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
    const title = "Our home page";
    res.render("INDEX", {
        title : title
    })
})

// ABOUT ROUTE
app.get('/about', (req, res) => {
    //req.name ="oh boy!"
    // console.log(req.name);
    
    res.render("ABOUT", {
        title
    })
})

app.listen(port, () => { 
    console.log(`server is running on port http://localhost:${port}`);
    
})