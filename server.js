console.log("Hello from server.js!");

const express = require('express');
const server = express();
const port = 3002;
const path = require('path');
const bodyParser = require('body-parser');
const { runQuery, addEmail} = require("./app");

// server.get("/", (req,res)=>{res.send("Hello from root!")});

server.use(express.static(path.join(__dirname, "public")));

server.use(bodyParser.urlencoded({ extended: false}));
server.use(bodyParser.json());

server.get("/data", async (req,res)=>{
    const data = await runQuery();

    console.log(data);

    res.send({
        count: data[0].count
    });
});

server.post("/register", (req,res)=>{
    addEmail(req.body.email);

    console.log(req.body);
    res.send("POST request to the homepage");
})


server.listen(port, ()=>{console.log("Listening on port "+port+"!")});