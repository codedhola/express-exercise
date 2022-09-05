const express = require("express");
const app = express();

app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.status(200).send("Running server initiated ");
});

app.get("/about", (req, res) => {
    res.status(200).send("<form action='/request' method='POST'><input type='text' name='user' /><button>submit</button>");
});

app.post("/request", (req, res) => {
    const user = req.body.user
    res.send({userName: user});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server currently running on localhost:${PORT}`);
});