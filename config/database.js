const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('techstore', 'root', 'usbw', {
  host: 'localhost',
  dialect: 'mysql',
  // Esto permite que Sequelize cree la base de datos si no existe
  define: {
    timestamps: false // Si no quieres que se creen automáticamente created_at y updated_at
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
