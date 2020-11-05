const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/database');
const topics = require('./enums/topics');
const subjects = require('./enums/subjects');
const classes = require('./enums/standard');

class Formulae extends Model {}
Formulae.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true
    },
    lhs: {
      type: DataTypes.STRING,
    },
    rhs: {
      type: DataTypes.STRING,
      allowNull: false
    },
    topic: topics.data_type,
    subject: subjects.data_type,
    standard: classes.data_type,
    
  },
  {
    sequelize: sequelize,
    underscored: true,
    timestamps: false,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = Formulae;
  