// REQUIRED MODULES TO WORK WITH
const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));

// ROUTING
app.get("/", (req, res) => {
    res.status(200).send("THIS IS THE HOMEPAGE FOR MY APP\u{1F605}");
});

app.get("/index", (req, res) => {
    const filePath = path.join(__dirname, "views", "index.html");
    // FILE RENDERED SUCCESSFULLY
    res.sendFile(filePath);
});

app.get("/about", (req, res) => {
    const filePath = path.join(__dirname, "views", "about.html");
    // FILE RENDERED SUCCESSFULLY
    res.sendFile(filePath);
});

app.get("/scholars", (req, res) => {
    const filePath = path.join(__dirname, "views", "scholars.html");
    // FILE RENDERED SUCCESSFULLY
    res.sendFile(filePath);
});

app.get("/register", (req, res) => {
    const filePath = path.join(__dirname, "views", "register.html");
    // FILE RENDERED SUCCESSFULLY
    res.sendFile(filePath);
});

app.get("/recommend", (req, res) => {
    const filePath = path.join(__dirname, "views", "recommend.html");
    // FILE RENDERED SUCCESSFULLY
    res.sendFile(filePath);
});

app.post("/recommend", (req, res) => {
    const scholars = req.body;
    console.log(scholars);
    res.redirect("scholars")
});







/**
 * EXERCISES 1 ---- 

const filePath = path.join(__dirname, "data", "db.json");

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
        output += `<li> ${test} </li>`
    }
    output += "</ul>";

    res.send(output);
});

 */





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server currently running on localhost:${PORT}`);
});