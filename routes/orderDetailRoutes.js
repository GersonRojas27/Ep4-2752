const express = require('express');
const router = express.Router();
const orderDetailController = require('../controllers/orderDetailController'); // Asegúrate de que la ruta sea correcta

router.post('/', orderDetailController.createOrderDetail);
router.get('/', orderDetailController.getAllOrderDetails);
router.get('/:id', orderDetailController.getOrderDetailById);
router.put('/:id', orderDetailController.updateOrderDetail);
router.delete('/:id', orderDetailController.deleteOrderDetail);

module.exports = router;
