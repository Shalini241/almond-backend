const Topics = require("../models/enums/topics");
const Subjects = require("../models/enums/subjects");
const Standards = require("../models/enums/standard");

exports.getAllTopics = (_, res) => {
    var data = {};

    data.success = true;
    data.topic = Topics.data_type.values;

    res.json(data);
};

exports.getAllSubjects = (_, res) => {
    var data = {};

    data.success = true;
    data.topic = Subjects.data_type.values;

    res.json(data);
};

exports.getAllStandards = (_, res) => {
    var data = {};

    data.success = true;
    data.topic = Standards.data_type.values;

    res.json(data);
};