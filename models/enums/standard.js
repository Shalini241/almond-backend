const { DataTypes} = require("sequelize");

const ENUM = {
    ELEVENTH: 'eleventh',
    TWELFTH: 'twelfth'
}

const data_type =  DataTypes.ENUM({
    values: [ENUM.ELEVENTH, ENUM.TWELFTH]
})

module.exports.ENUM = ENUM;
module.exports.data_type = data_type;