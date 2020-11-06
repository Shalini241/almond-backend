const Topics = require("../models/enums/topics");
const Subjects = require("../models/enums/subjects");
const Standards = require("../models/enums/standard");

exports.getAllTopics = (_, res) => {
    var data = {};

    data.success = true;
    data.topics = Topics.data_type.values;

    res.json(data);
};

exports.getAllSubjects = (_, res) => {
    var data = {};

    data.success = true;
    data.subjects = Subjects.data_type.values;

    res.json(data);
};

exports.getAllStandards = (_, res) => {
    var data = {};

    data.success = true;
    data.standards = Standards.data_type.values;

    res.json(data);
};