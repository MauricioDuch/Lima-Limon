const express = require("express");
const server = express();
const port = 3030;
const start = () => console.log("Starting server...");
server.listen(port,start());

const path = require("path");
const public = path.join(__dirname, "public");
const statics = express.static(public);
server.use(statics)

server.get("/", function (req, res){
    let file = path.join(__dirname, "views", "Home.html")
    res.sendFile(file);
})

server.get("/Eventos.html", function(req, res){
    let file2 = path.join(__dirname,"views","Eventos.html");
    res.sendFile(file2)
});

server.get("/Noticias.html", function(req, res){
    let file3 = path.join(__dirname,"views","Noticias.html");
    res.sendFile(file3)
});

server.get("/Contacto.html", function(req, res){
    let file4 = path.join(__dirname,"views","Contacto.html");
    res.sendFile(file4)
});

server.get("/Login.html", function(req, res){
    let file5 = path.join(__dirname,"views","Login.html");
    res.sendFile(file5)
});