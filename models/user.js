const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/database');
const loginStatus = require('../models/enums/login_status');

class User extends Model {}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        isAlpha: true
    },
    login_status: {
        type: loginStatus.data_type
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
    
  },
  {
    sequelize: sequelize,
    underscored: true,
    timestamps: false,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
);

module.exports = User;