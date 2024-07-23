const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("techstore", "root", "usbw", {
  host: "localhost",
  dialect: "mysql",
  port: 3316,
});

module.exports = sequelize;
