const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();


app.use(bodyParser.json());

app.get("/todos",(req, res)=>{
    fs.readFile("todos.json","utf-8",(err, data)=>{
        if(err) res.status(401).send(err);
        const json = JSON.parse(data);
        res.status(200).send(json);
    });
});

app.post("/todos",(req, res)=>{

    fs.readFile("todos.json","utf-8",(err, data)=>{
        if(err) res.status(401).send(err);
        const json = JSON.parse(data);

        const newTodo = {
            id : Math.floor(Math.random() * 100),
            title : req.body.title,
            description : req.body.description
        }

        json.push(newTodo);

        fs.writeFile("todos.json",JSON.stringify(json),(err)=>{
            if(err)
            res.status(401).send(err);
        });

        res.status(200).send(newTodo);

    });
});



app.get("/", (req, res)=> {
    res.sendFile(__dirname+"/index.html");
});



app.listen(3000,()=>{
    console.log("server running at 3000");
})