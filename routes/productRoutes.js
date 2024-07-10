const express = require('express');
const router = express.Router();
const Product = require('../models/Product');  // Asegúrate de que la ruta al modelo sea correcta

// Crear un producto nuevo
router.post('/products', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener detalles de un producto
router.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: 'No se encontro el producto' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un producto existente
router.put('/products/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      await product.update(req.body);
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: 'No se encontro el producto' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar un producto
router.delete('/products/:id', async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id);
      if (product) {
        await product.destroy();
        res.status(200).json({ message: 'Producto eliminado' });
      } else {
        res.status(404).json({ error: 'No se encontro el producto' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  module.exports = router;
