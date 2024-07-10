const Order = require('../models/order');

exports.createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ error: 'No se encontro' });
    }
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const [updated] = await Order.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ error: 'No se encontro' });
    }
    const updatedOrder = await Order.findByPk(req.params.id);
    res.json(updatedOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const deleted = await Order.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ error: 'No se encontro' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
