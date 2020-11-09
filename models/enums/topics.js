const { Model, DataTypes } = require("sequelize");
const sequelize = require('../../config/database');
const clazz_subject = require('./../clazz_subject');

const ENUM = {
    SETS_AND_RELATIONS: 'Sets and Relations',
    TRIGONOMETRY: 'Trigonometry'
}

const data_type =  DataTypes.ENUM({
    values: [ENUM.SETS_AND_RELATIONS, ENUM.TRIGONOMETRY]
})

class Topic extends Model {}
Topic.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    topic: data_type,
    
  },
  {
    sequelize: sequelize,
    underscored: true,
    timestamps: false,
  }
);

Topic.belongsTo(clazz_subject);

module.exports.model = Topic;
module.exports.ENUM = ENUM;
module.exports.data_type = data_type;