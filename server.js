// REQUIRED MODULES TO WORK WITH
const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();

// READ FILE 
const filePath = path.join(__dirname, "data", "db.json");
const fileData = fs.readFileSync(filePath,"utf-8");

let data = fs.readFileSync(filePath, "utf-8");


app.post("/api/request", (req, res) => { 
    let user = req.body.user;
    const storeData = JSON.parse(data);
   storeData.push(user);
   data = JSON.stringify(data); 
    fs.writeFile(filePath, JSON.stringify(storeData), "utf-8", (error) => {
        if(error) throw error
    })
    res.send({userName: user});
});

app.get("/api/data", (req, res) => {
    const dataBase = JSON.parse(data);
    let output = "<ul>"
    for(const test of dataBase){
        output += `<li> ${test.user_name} </li>`
    }
    output += "</ul>";

    res.send(output);
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server currently running on localhost:${PORT}`);
});