const http = require("http");
const express = require("express");
const bodyparser = require("body-parser");
const misRutas = require("./router/index.js")
const path = require("path");
const app = express();

app.set('view engine',"ejs")

app.use(express.static(__dirname + '/public'));

app.engine('html', require('ejs').renderFile)

app.use(bodyparser.urlencoded({extended:true}));
app.use(misRutas);

app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname + '/public/error.html')
})

// Escuchar el servidor por el puerto 3000
app.listen(process.env.PORT || 500,()=>{
    console.log("Iniciado puerto 500")
});