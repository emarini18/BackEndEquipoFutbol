const Sequelize = require('sequelize');
const db = {};

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('db_a683cf_api02', 'a683cf_api02', 'tesis2020',
    {
        host: 'mysql5009.site4now.net',
        dialect: 'mysql',
        logging: false
    }
);

// Verificar coneccion a la base de datos
async function autenticacion() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

}

autenticacion();

// Añadir al objeto db
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;