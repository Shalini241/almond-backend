const { DataTypes } = require("sequelize");
const sequelize = require('../../config/database');

const ENUM = {
    LOGGED_IN: 'Logged In',
    LOGGED_OUT: 'Logged Out'
}

const data_type =  DataTypes.ENUM({
    values: [ENUM.LOGGED_IN, ENUM.LOGGED_OUT]
})

module.exports.ENUM = ENUM;
module.exports.data_type = data_type;