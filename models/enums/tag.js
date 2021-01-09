const { DataTypes } = require("sequelize");

const ENUM = {
    MASTERED: "MASTERED",
    REVIEWING: "REVIEWING",
    LEARNING: "LEARNING",
    NEW_WORD: "NEW WORD"
}

const data_type =  DataTypes.ENUM({
    values: [ENUM.NEW_WORD, ENUM.LEARNING, ENUM.REVIEWING, ENUM.MASTERED]
})

module.exports.ENUM = ENUM;
module.exports.data_type = data_type;