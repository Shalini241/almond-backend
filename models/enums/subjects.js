const { DataTypes} = require("sequelize");

const ENUM = {
    MATHEMATICS: 'mathematics'
}

const data_type =  DataTypes.ENUM({
    values: [ENUM.MATHEMATICS]
})

module.exports.ENUM = ENUM;
module.exports.data_type = data_type;