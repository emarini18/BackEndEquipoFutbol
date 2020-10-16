const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/db');

const ligas = sequelize.define('ligas',{
    idLiga:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombreLiga:{
        type: DataTypes.STRING(100)
    },
    imgLiga:{
        type: DataTypes.STRING(150)
    }
},

{
    timestamps: false,
    tableName:'ligas'
});


module.exports=ligas;