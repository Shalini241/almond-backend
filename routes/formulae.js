var express = require("express");
var router = express.Router();

const {
    getAllFormulae,
} = require("../controllers/formulae");

router.get("/", getAllFormulae);

module.exports = router;