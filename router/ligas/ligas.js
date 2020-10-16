const router = require('express').Router();
const ligas = require('../../models/ligas');

require('../../database/db');

router.get('/', async (req, res)=>{
    // Recuperar todos los  valores
    const user = await ligas.findAll();
    res.json(user);
});

module.exports=router;