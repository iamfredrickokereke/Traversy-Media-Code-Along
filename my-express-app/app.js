const express = require("express");
const http = require('http');

const mongoose = require("mongoose");

const authRoutes = require('./routes/auth')

const app = express();  

mongoose

.connect(

"mongodb://eric:eric111@mycluster-shard-00-00-dex7f.mongodb.net:27017,mycluster-shard-00-01-dex7f.mongodb.net:27017,mycluster-shard-00-02-dex7f.mongodb.net:27017/test?ssl=true&replicaSet=MyCluster-shard-0&authSource=admin&retryWrites=true&w=majority",

{ useNewUrlParser: true, useUnifiedTopology: true }

)

.then(result => {

console.log("Database connected");

app.listen(3000);

})

.catch(err => console.log(err));

app.listen = function listen() {

var server = http.createServer(this);

return server.listen.apply(server, arguments);

};
app.use(authRoutes);

app.use((req, res) => {

res.send("<h1>Welcome to my app</h1>");

});