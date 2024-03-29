const Formulae = require("../models/formulae");

exports.getAllFormulae = async (_, res) => {
    var data = {};
    await Formulae.findAll().then((formulae) => {
        data.success = true;
        data.formulae = formulae;
    });

    res.json(data);
};

exports.getFormulaeForTopic = async (req, res) => {
    var data = {};
    let formulas = await Formulae.findOne({
        where: {
            topic_id : req.query.topicId,
        }       
    });
    data.success = true;
    data.formulae = formulas;
    res.json(data);
}

exports.getNextFormula = async (_, res) => {
    var data = {};
    let formulas = await Formulae.findOne({
        where: {
            topic_id : 1,
            id: 4,
        }       
    });
    data.success = true;
    data.formulae = formulas;
    res.json(data);
}

