const express = require('express')
const app = express()

const port = process.env.port || 8080

const host = `http://localhost:${port}`
app.get()

app.listen(host, () => { 
    console.log(`server is running on port ${host}`);
    
})