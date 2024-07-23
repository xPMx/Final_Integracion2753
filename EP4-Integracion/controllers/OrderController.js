const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  try {
    const { idcliente, productos, cantidad, total } = req.body;
    const newOrder = await Order.create({
      idcliente,
      productos,
      cantidad,
      total,
    });
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id);
    if (!order) {
      return res.status(404).json({ error: "Orden no encontrada" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { productos, cantidad, total } = req.body;
    const order = await Order.findByPk(id);
    if (!order) {
      return res.status(404).json({ error: "Orden no encontrada" });
    }
    await order.update({
      productos,
      cantidad,
      total,
    });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id);
    if (!order) {
      return res.status(404).json({ error: "Orden no encontrada" });
    }
    await order.destroy();
    res.json({ message: "Orden eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
