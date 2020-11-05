const { DataTypes} = require("sequelize");

const ENUM = {
    SETS_AND_RELATIONS: 'Sets and Relations',
    TRIGONOMETRY: 'Trigonometry'
}

const data_type =  DataTypes.ENUM({
    values: [ENUM.SETS_AND_RELATIONS, ENUM.TRIGONOMETRY]
})

module.exports.ENUM = ENUM;
module.exports.data_type = data_type;