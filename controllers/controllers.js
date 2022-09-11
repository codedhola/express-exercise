const path = require("path");
const fs = require("fs");

// READ FILE 
const filePath = path.join(`./data/db.json`);
const fileData = fs.readFileSync(filePath,"utf-8");

const home = (req, res) => {
    res.status(200).send("THIS IS THE HOMEPAGE FOR MY APP\u{1F605}");
}

const index = (req, res) => {
    res.render("index");
}

const about = (req, res) => {
    res.render("about");
}

const scholars = (req, res) => {
    res.render("scholars");
}

const register = (req, res) => {
    res.render("register");
}

const recommend = (req, res) => {
    res.render("recommend");
}

const postRecommend = (req, res) => {
    const scholars = req.body;
    const data = JSON.parse(fileData);
    data.push(scholars);
    console.log(data);
    fs.writeFile(filePath, JSON.stringify(data) , (error) => {
        if(error) throw error 
    })

    res.redirect("scholars");
}

module.exports = { 
    home, 
    index,
    about,
    scholars,
    register,
    recommend,
    postRecommend
}