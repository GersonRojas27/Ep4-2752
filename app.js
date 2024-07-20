const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const customerRoutes = require('./routes/customerRoutes');
const orderRoutes = require('./routes/orderRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const authRoutes = require('./routes/authRoutes');
const sequelize = require('./config/database');

const app = express();

app.use(bodyParser.json());

app.use('/api', productRoutes);
app.use('/api', customerRoutes);
app.use('/api', orderRoutes);
app.use('/api', categoryRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.error('Error: Unable to sync with database:', err));
