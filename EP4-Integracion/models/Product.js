const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Category = require("./Category");

const Product = sequelize.define(
  "productos",
  {
    idproducto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idcategoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Category,
        key: "idcategoria",
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Product;
