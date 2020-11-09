var express = require("express");
var router = express.Router();

const {
    getAllTopics,
    getSubjects,
    getAllStandards,
} = require("../controllers/home");

router.get("/topics", getAllTopics);

router.get("/subjects", getSubjects);

router.get("/standards", getAllStandards);

module.exports = router;