const { DataTypes} = require("sequelize");

const ENUM = {
    MATHEMATICS: 'Mathematics',
    PHYSICS: 'Physics',
    CHEMISTRY: 'Chemistry',
}

const data_type =  DataTypes.ENUM({
    values: [ENUM.MATHEMATICS, ENUM.PHYSICS, ENUM.CHEMISTRY]
})

module.exports.ENUM = ENUM;
module.exports.data_type = data_type;