const Topics = require("../models/enums/topics");
const { Sequelize, where} = require("sequelize");
const sequelize = require('../config/database');
const Subjects = require("../models/enums/subjects");
const Clazzez = require("../models/enums/clazz");
const ClassSubject = require("../models/clazz_subject");

exports.getAllTopics = (_, res) => {
    var data = {};

    data.success = true;
    data.topics = Topics.data_type.values;

    res.json(data);
};

exports.getSubjects = (_, res) => {
    var data = {};

    data.success = true;
    data.subjects = Subjects.data_type.values;
    
    res.json(data);
    
};

exports.getAllStandards = (_, res) => {
    var data = {};

    data.success = true;
    data.clazzez = Clazzez.data_type.values;

    res.json(data);
};