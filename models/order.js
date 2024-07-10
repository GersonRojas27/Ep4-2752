const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  products: {
    type: DataTypes.JSON,
    allowNull: false
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending'
  }
}, {
  timestamps: false
});

module.exports = Order;
