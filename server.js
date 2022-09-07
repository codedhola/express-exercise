// REQUIRED MODULES TO WORK WITH
const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));

// READ FILE 
const filePath = path.join(__dirname, "data", "db.json");
const fileData = fs.readFileSync(filePath,"utf-8");

// ROUTING
app.get("/", (req, res) => {
    res.status(200).send("THIS IS THE HOMEPAGE FOR MY APP\u{1F605}");
});

app.get("/index", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/scholars", (req, res) => {
    res.render("scholars");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/recommend", (req, res) => {
    const data = JSON.parse(fileData);
    res.render("recommend", {scholars: data.length, getScholars: data });
});

app.post("/recommend", (req, res) => {
    const scholars = req.body;
    const data = JSON.parse(fileData);
    data.push(scholars);
    console.log(data);
    fs.writeFile(filePath, JSON.stringify(data) , (error) => {
        if(error) throw error 
    })

    res.redirect("scholars");
});




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server currently running on localhost:${PORT}`);
});