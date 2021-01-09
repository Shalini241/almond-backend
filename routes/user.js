var express = require("express");
var router = express.Router();

const {
    signUp,
    signIn,
    signOut
} = require("../controllers/user");

router.post("/signup", signUp);

router.post("/signin", signIn);

router.post("/signout", signOut);

const {
    getUserProgress
} = require("../controllers/progress");

router.post("/progress", getUserProgress);

module.exports = router;