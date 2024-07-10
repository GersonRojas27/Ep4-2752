const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const customerRoutes = require('./routes/customerRoutes');
const orderRoutes = require('./routes/orderRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const sequelize = require('./config/database');

const app = express();

app.use(bodyParser.json());

app.use('/api', productRoutes);
app.use('/api', customerRoutes);
app.use('/api', orderRoutes);
app.use('/api', categoryRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor en el puerto ${PORT}`);
    });
  })
  .catch(err => console.error('Error: No se puede sincronizar con la base de datos:', err));
