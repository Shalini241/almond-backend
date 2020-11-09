const { Model, DataTypes } = require("sequelize");
const sequelize = require('../../config/database');

const ENUM = {
    ELEVENTH: 'XI',
    TWELFTH: 'XII'
}

const data_type =  DataTypes.ENUM({
    values: [ENUM.ELEVENTH, ENUM.TWELFTH]
})

class Clazz extends Model {}
Clazz.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    class: data_type,
    
  },
  {
    sequelize: sequelize,
    underscored: true,
    timestamps: false,
    tableName: 'classes'
  }
);

module.exports.model = Clazz;
module.exports.ENUM = ENUM;
module.exports.data_type = data_type;