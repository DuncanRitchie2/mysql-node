console.log("Hello from server.js!");

const express = require('express');
const server = express();
const port = 3002;

server.get("/",(req,res)=>{res.send("Hello from root!")});

server.listen(port, ()=>{console.log("Listening on port "+port+"!")});