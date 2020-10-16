const { DataTypes, INTEGER } = require('sequelize');
const { sequelize } = require('../database/db');
const entrenador = require('./entrenador');
const estadios = require('./estadios');
const ligas = require('./ligas');

const equipos = sequelize.define('equipos',{
    idEquipo:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    imgEquipo:{
        type: DataTypes.STRING(150)
    },
    
    desEquipo:{
        type: DataTypes.STRING(150)
    },
    
    idEntrenador: {
        type: DataTypes.INTEGER,   
        references: {
            model: entrenador,
            key: 'idEntrenador'
    }
    },

    idLiga: {
        type: DataTypes.INTEGER,   
        references: {
            model: ligas,
            key: 'idLiga'
    }
    },

    idEstadios: {
        type: DataTypes.INTEGER,   
        references: {
            model: estadios,
            key: 'idEstadios'
    }
    }
},

{
    timestamps: false,
    tableName:'equipos'
});

equipos.belongsTo(estadios, { foreignKey: 'idEstadios'});
equipos.belongsTo(ligas, { foreignKey: 'idLiga'});
equipos.belongsTo(entrenador, { foreignKey: 'idEntrenador'});

module.exports=equipos;


