console.log("Hello from server.js!");

const express = require('express');
const server = express();
const port = 3002;
const path = require('path');

server.get("/", (req,res)=>{res.send("Hello from root!")});

server.use(express.static(path.join(__dirname, "public")));

const { runQuery, addEmail} = require("./app");

server.get("/data", async (req,res)=>{
    const data = await runQuery();

    console.log(data);

    res.send({
        count: data[0].count
    });
});


server.listen(port, ()=>{console.log("Listening on port "+port+"!")});