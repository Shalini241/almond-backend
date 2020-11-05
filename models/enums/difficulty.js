const { DataTypes} = require("sequelize");

const ENUM = {
    EASY: 'easy',
    MEDIUM: 'medium',
    HARD: 'hard'
}

const data_type =  DataTypes.ENUM({
    values: [ENUM.EASY, ENUM.MEDIUM, ENUM.HARD]
})

module.exports.ENUM = ENUM;
module.exports.data_type = data_type;