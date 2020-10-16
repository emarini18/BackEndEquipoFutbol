const router = require('express').Router();
const entrenador = require('../../models/entrenador');

require('../../database/db');

router.get('/', async (req, res)=>{
    // Recuperar todos los  valores
    const user = await entrenador.findAll();
    res.json(user);
});

module.exports=router;