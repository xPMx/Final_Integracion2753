require("dotenv").config();
const express = require("express");
const app = express();
const productosRouter = require("./routes/productos");
const clientesRouter = require("./routes/clientes");
const ordenesRouter = require("./routes/ordenes");
const categoriasRouter = require("./routes/categorias");
const usersRouter = require("./routes/users");

const sequelize = require("./config/database");

sequelize
  .sync()
  .then(() => {
    console.log("Base de datos sincronizada");
  })
  .catch((error) => {
    console.error("Error sincronizando la base de datos:", error);
  });

app.use(express.json());
app.use("/api/productos", productosRouter);
app.use("/api/clientes", clientesRouter);
app.use("/api/ordenes", ordenesRouter);
app.use("/api/categorias", categoriasRouter);
app.use("/api/users", usersRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

module.exports = app;
