const Client = require("../models/Client");

exports.createClient = async (req, res) => {
  try {
    const { nombre, correo, telefono, direccion } = req.body;
    const newClient = await Client.create({
      nombre,
      correo,
      telefono,
      direccion,
    });
    res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.findAll();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findByPk(id);
    if (!client) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }
    res.json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, correo, telefono, direccion } = req.body;
    const client = await Client.findByPk(id);
    if (!client) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }
    await client.update({
      nombre,
      correo,
      telefono,
      direccion,
    });
    res.json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findByPk(id);
    if (!client) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }
    await client.destroy();
    res.json({ message: "Cliente eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
