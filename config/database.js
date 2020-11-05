const { Sequelize} = require("sequelize");
const sequelize = new Sequelize("almond", "root", "rootroot", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

try {
  sequelize.authenticate();
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;