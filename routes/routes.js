const path = require("path");
const fs = require("fs");
const express = require("express");
const router = express.Router();

// READ FILE 
const filePath = path.join(`./data/db.json`);
const fileData = fs.readFileSync(filePath,"utf-8");

router.get("/",  (req, res) => {
    res.status(200).send("THIS IS THE HOMEPAGE FOR MY APP\u{1F605}");
})

router.get("/index", (req, res) => {
    res.render("index");
});

router.get("/about", (req, res) => {
    res.render("about");
});

router.get("/scholars", (req, res) => {
    res.render("scholars");
});

router.get("/register", (req, res) => {
    res.render("register");
});

router.get("/recommend", (req, res) => {
    res.render("recommend");
});


// ROUTING



router.post("/recommend", (req, res) => {
    const scholars = req.body;
    const data = JSON.parse(fileData);
    data.push(scholars);
    console.log(data);
    fs.writeFile(filePath, JSON.stringify(data) , (error) => {
        if(error) throw error 
    })

    res.redirect("scholars");
});

module.exports = router;