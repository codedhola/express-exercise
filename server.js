// REQUIRED MODULES TO WORK WITH
const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();
app.use(express.urlencoded({extended: false}));

const filePath = path.join(__dirname, "data", "db.json");

let data = fs.readFileSync(filePath, "utf-8");


app.get("/", (req, res) => {
    res.status(200).send("Running server initiated ");
});

app.get("/about", (req, res) => {
    res.status(200).send("<form action='/request' method='POST'><input type='text' name='user' /><button>submit</button>");
});

app.post("/request", (req, res) => { 
    let user = req.body.user;
    const storeData = JSON.parse(data);
   storeData.push(user);
   data = JSON.stringify(data); 
    fs.writeFile(filePath, JSON.stringify(storeData), "utf-8", (error) => {
        if(error) throw error
    })
    res.send({userName: user});
});

app.get("/data", (req, res) => {
    const dataBase = JSON.parse(data);
    let output = "<ul>"
    for(const test of dataBase){
        output += `<li> ${test} </li>`
    }
    output += "</ul>";

    res.send(output);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server currently running on localhost:${PORT}`);
});