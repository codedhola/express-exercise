const express = require("express");
const router = express.Router();

const { 
    home, index, about, scholars, register, recommend, postRecommend 
    } = require("../controllers/controllers");

router.get("/", home)

router.get("/index", index);

router.get("/about", about);

router.get("/scholars", scholars);

router.get("/register", register);

router.get("/recommend", recommend);


// ROUTING



router.post("/recommend", postRecommend);

module.exports = router;