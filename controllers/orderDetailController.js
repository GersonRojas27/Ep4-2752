const OrderDetail = require('../models/orderDetail');

exports.createOrderDetail = async (req, res) => {
  try {
    const { orderId, productId, quantity, price } = req.body;
    const orderDetail = await OrderDetail.create({ orderId, productId, quantity, price });
    res.status(201).json(orderDetail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllOrderDetails = async (req, res) => {
  try {
    const orderDetails = await OrderDetail.findAll();
    res.status(200).json(orderDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOrderDetailById = async (req, res) => {
  try {
    const { id } = req.params;
    const orderDetail = await OrderDetail.findByPk(id);
    if (orderDetail) {
      res.status(200).json(orderDetail);
    } else {
      res.status(404).json({ error: 'OrderDetail not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateOrderDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity, price } = req.body;
    const orderDetail = await OrderDetail.findByPk(id);
    if (orderDetail) {
      orderDetail.quantity = quantity;
      orderDetail.price = price;
      await orderDetail.save();
      res.status(200).json(orderDetail);
    } else {
      res.status(404).json({ error: 'OrderDetail not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteOrderDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const orderDetail = await OrderDetail.findByPk(id);
    if (orderDetail) {
      await orderDetail.destroy();
      res.status(200).json({ message: 'OrderDetail deleted' });
    } else {
      res.status(404).json({ error: 'OrderDetail not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
