const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

// Crear una nueva categoría
router.post('/categories', async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtener detalles de una categoría específica por su ID
router.get('/categories/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (category) {
      res.json(category);
    } else {
      res.status(404).json({ error: 'Categoria no encontrada' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Actualizar una categoría existente
router.put('/categories/:id', async (req, res) => {
  try {
    const [updated] = await Category.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedCategory = await Category.findByPk(req.params.id);
      res.json(updatedCategory);
    } else {
      res.status(404).json({ error: 'Categoria no encontrada' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Eliminar una categoría
router.delete('/categories/:id', async (req, res) => {
  try {
    const deleted = await Category.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.json({ message: 'Categoria eliminada' });
    } else {
      res.status(404).json({ error: 'Categoria no encontrada' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
