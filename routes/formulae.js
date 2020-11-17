var express = require("express");
var router = express.Router();

const {
    getAllFormulae,
    getFormulaeForTopic,
} = require("../controllers/formulae");

router.get("/", getAllFormulae);

router.get('/topic', getFormulaeForTopic);

module.exports = router;