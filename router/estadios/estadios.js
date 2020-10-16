const router = require('express').Router();
const estadios = require('../../models/estadios');

require('../../database/db');

router.get('/', async (req, res)=>{
    // Recuperar todos los  valores
    const user = await estadios.findAll();
    res.json(user);
});

module.exports=router;