const { Model, DataTypes } = require("sequelize");
const sequelize = require('../../config/database');

const ENUM = {
    MATHEMATICS: 'Mathematics',
    PHYSICS: 'Physics',
    CHEMISTRY: 'Chemistry',
}

const data_type =  DataTypes.ENUM({
    values: [ENUM.MATHEMATICS, ENUM.PHYSICS, ENUM.CHEMISTRY]
})

class Subject extends Model {}
Subject.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    subject: data_type,
    
  },
  {
    sequelize: sequelize,
    underscored: true,
    timestamps: false,
  }
);

module.exports.model = Subject;
module.exports.ENUM = ENUM;
module.exports.data_type = data_type;