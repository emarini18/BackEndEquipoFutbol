const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/db');

const entrenador = sequelize.define('entrenador',{
    idEntrenador:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreEntrenador:{
        type: DataTypes.STRING(100)
    },
    apellidoEntrenador:{
        type: DataTypes.STRING(100)
    }
},

{
    timestamps: false,
    tableName:'entrenador'
});


module.exports=entrenador;