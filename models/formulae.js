const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/database');
const topics = require('./enums/topics');

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
    fullFormula: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
  },
  {
    sequelize: sequelize,
    underscored: true,
    timestamps: false,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
);

Formulae.belongsTo(topics.model);

module.exports = Formulae;
  