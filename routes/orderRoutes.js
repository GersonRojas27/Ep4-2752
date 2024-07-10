const express = require('express');
const router = express.Router();
const Order = require('../models/order');

// Crear una nueva orden
router.post('/orders', async (req, res) => {
  try {
    const { customerId, products, total, status } = req.body;
    const newOrder = await Order.create({ customerId, products, total, status });
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear una nueva orden: ' + error.message });
  }
});

// Obtener una orden por ID
router.get('/orders/:id', async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ error: 'Orden no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la orden: ' + error.message });
  }
});

// Actualizar una orden
router.put('/orders/:id', async (req, res) => {
  try {
    const { customerId, products, total, status } = req.body;
    const [updated] = await Order.update({ customerId, products, total, status }, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedOrder = await Order.findByPk(req.params.id);
      res.json(updatedOrder);
    } else {
      res.status(404).json({ error: 'Orden no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la orden: ' + error.message });
  }
});

// Eliminar una orden
router.delete('/orders/:id', async (req, res) => {
  try {
    const deleted = await Order.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.json({ message: 'Orden eliminada correctamente' });
    } else {
      res.status(404).json({ error: 'Orden no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la orden: ' + error.message });
  }
});

module.exports = router;
