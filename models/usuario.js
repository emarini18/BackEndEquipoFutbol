const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/db');

const usuario = sequelize.define('usuario',{
    idUsuario:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING(50)
    },

    apellido:{
        type: DataTypes.STRING(50)
    },
    
    user:{
        type: DataTypes.STRING(50)
    },

    password:{
        type: DataTypes.STRING(50)
    },

    correo:{
        type: DataTypes.STRING(100)
    },

    imgUsuario:{
        type: DataTypes.STRING(150)
    },
},

{
    timestamps: false,
    tableName:'usuario'
});


module.exports=usuario;