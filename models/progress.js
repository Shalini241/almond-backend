const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/database');
const tag = require('../models/enums/tag');
const Formula = require('../models/formulae');
const User = require('../models/user');

class Progress extends Model {}
Progress.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    tag: {
        type: tag.data_type
    },
    answer0: {
        type: DataTypes.BOOLEAN,
    },
    answer1: {
        type: DataTypes.BOOLEAN,
    },
    answer2: {
        type: DataTypes.BOOLEAN,
    }
  },
  {
    sequelize: sequelize,
    underscored: true,
    timestamps: false
  },
);
Progress.belongsTo(Formula);
Progress.belongsTo(User);

module.exports = Progress;