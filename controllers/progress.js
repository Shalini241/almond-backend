const Progress = require("../models/progress");
const LoginStatus = require('../models/enums/login_status');

exports.getUserProgress = async (req, res) => {
 

      res.json({
        success: true,
        result: {
            'topicCovered' : 0.8,
            'subjectCovered': 0.7,
            'topicLearning': 0.5,
            'topicReviewing':0.2,
            'tag':'LEARNING'
        }
      });
        
};