const User = require("../models/user");
const LoginStatus = require('../models/enums/login_status');

exports.signUp = async (req, res) => {

    const user = await User.create({
        email : req.body.email,
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        password : req.body.password,
        login_status : LoginStatus.ENUM.LOGGED_IN
      }).catch(error => {
        res.json({
          success: false,
          error: "Sign Up Failed: " + error
        })
      });

      const userProgress = {
        'topicCovered' : 0.8,
        'subjectCovered': 0.7,
        'topicLearning': 0.5,
        'topicReviewing':0.2,
        'tag':'LEARNING'
    };

      res.json({
        success: true,
        result: [user,userProgress]
      })
        
};

exports.signIn = async (req, res) => {

    var actualPassword = req.body.password;

    User.findOne({
        where : {
            email : req.body.email
        }
      }).then((user) => {
        if(user==null) {
            res.json({
                success: false,
                error: "Incorrect EmailId " + req.body.email
              })
        }
        else if(actualPassword.localeCompare(user.password)) {
            res.json({
                success: false,
                error: "Incorrect Password"
              })
        } else {
            user.login_status = LoginStatus.ENUM.LOGGED_IN;
            user.save();
            res.json({
                success: true,
                result: user
              })
        }
      }).catch(error => {
        res.json({
          success: false,
          error: "Sign In failed: " + error
        })
      });
};

exports.signOut = (req, res) => {
    
    User.findOne({
        where : {
            email : req.body.email
        }
      }).then((user) => {
        user.login_status = LoginStatus.ENUM.LOGGED_OUT;
        user.save();
        res.json({
            success: true,
            result: user
          })
      }).catch(error => {
        res.json({
          success: false,
          error: "Sign In failed: " + error
        })
      });
};