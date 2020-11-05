var express = require("express");
var router = express.Router();

const {
    getAllTopics,
    getAllSubjects,
    getAllStandards,
} = require("../controllers/home");

router.get("/topics", getAllTopics);

router.get("/subjects", getAllSubjects);

router.get("/standards", getAllStandards);

module.exports = router;