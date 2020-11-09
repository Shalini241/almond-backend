const Topics = require("../models/enums/topics");
const Subjects = require("../models/enums/subjects");
const Clazzez = require("../models/enums/clazz");
const ClassSubject = require("../models/clazz_subject");

exports.getAllTopics = (_, res) => {
    var data = {};

    data.success = true;
    data.topics = Topics.data_type.values;

    res.json(data);
};

exports.getSubjects = async (req, res) => {
    var data = {};

    data.success = true;
    
    let subjects = await ClassSubject.findAll(
        {   attributes: [],
            include: [{model: Subjects.model}],
            where: {
                clazz_id : req.query.class
            }
        }
    );

    data.subjects = subjects;
    res.json(data);
     
};

exports.getAllStandards = (_, res) => {
    var data = {};

    data.success = true;
    data.clazz = Clazzez.data_type.values;

    res.json(data);
};