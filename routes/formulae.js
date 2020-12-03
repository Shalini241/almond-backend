var express = require("express");
var router = express.Router();

const {
    getAllFormulae,
    getFormulaeForTopic,
    getNextFormula,
} = require("../controllers/formulae");

router.get("/", getAllFormulae);

router.get('/topic', getFormulaeForTopic);

router.get('/next', getNextFormula);



module.exports = router;