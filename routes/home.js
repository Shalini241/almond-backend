var express = require("express");
var router = express.Router();

const {
    getTopics,
    getSubjects,
    getAllStandards,
} = require("../controllers/home");

router.get("/topics", getTopics);

router.get("/subjects", getSubjects);

router.get("/standards", getAllStandards);

module.exports = router;