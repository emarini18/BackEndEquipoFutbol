const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/db');

const estadios = sequelize.define('estadios', {
    idEstadios: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombreEstadios: {
        type: DataTypes.STRING(150)
    },
    imgEstadios: {
        type: DataTypes.STRING(150)
    }
},
    {
        timestamps: false,
        tableName: 'estadios'
    });


module.exports = estadios;