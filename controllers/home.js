const Topics = require("../models/enums/topics");
const Subjects = require("../models/enums/subjects");
const Clazzez = require("../models/enums/clazz");
const ClassSubject = require("../models/clazz_subject");
const { Op } = require("sequelize");

exports.getTopics = async (req, res) => {
    var data = {};

    data.success = true;
    let classSubjectIds = await ClassSubject.findAll(
        {
            where: {
                clazz_id : req.query.class,
                subject_id : req.query.subject
            }
        }
    );
    let array = [];
    for(var i =0;i<classSubjectIds.length;i++) {
        array[i] = classSubjectIds[i].id;
    }
    
    let topics = await Topics.model.findAll({
        where: {
            clazz_subject_id: {
                [Op.in] : array
            }
        }
    })
    data.topics = topics;
    res.json(data);
};

exports.getSubjects = async (req, res) => {
    var data = {};

    data.success = true;
    
    let subjects = await ClassSubject.findAll(
        {   attributes: ['clazz_id'],
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