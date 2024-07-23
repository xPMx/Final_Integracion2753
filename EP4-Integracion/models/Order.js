const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Client = require("./Client");

const Order = sequelize.define(
  "ordenes",
  {
    idordenes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    idcliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Client,
        key: "idcliente",
      },
    },
    productos: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Order;
