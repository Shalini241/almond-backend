const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/database');
const subjects = require('./enums/subjects');
const clazz = require('./enums/clazz');

class ClazzSubject extends Model {}
ClazzSubject.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    }
  },
  {
    sequelize: sequelize,
    underscored: true,
    timestamps: false,
  }
);

ClazzSubject.belongsTo(subjects.model);
ClazzSubject.belongsTo(clazz.model);

module.exports = ClazzSubject;
  