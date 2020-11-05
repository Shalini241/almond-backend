const Formulae = require("../models/formulae");

exports.getAllFormulae = async (_, res) => {
    var data = {};
    await Formulae.findAll().then((formulae) => {
        data.success = true;
        data.formulae = formulae;
    });

    res.json(data);
};