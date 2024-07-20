const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('techstore', 'root', 'usbw', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos MySQL establecida correctamente.');
  })
  .catch(err => {
    console.error('Error al conectar con la base de datos MySQL:', err);
  });

module.exports = sequelize;
