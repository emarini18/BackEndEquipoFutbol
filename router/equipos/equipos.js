const router = require('express').Router();
const equipos = require('../../models/equipos');
const entrenador = require('../../models/entrenador');
const estadios = require('../../models/estadios');
const ligas = require('../../models/ligas');


require('../../database/db');

router.get('/', async (req, res)=>{
    // Recuperar todos los  valores
    const user = await equipos.findAll();
    res.json(user);
});

router.get('/all', async(req, res)=>{
    const user = await equipos.findAll({ 
        include: [entrenador, estadios, ligas]
    });
    res.json(user);
})

router.get('/all/:id', async(req, res)=>{
    const user = await Talleres.findAll({ 
        include: [entrenador, estadios, ligas],
        where: {
            ID_TALLER: {
                [Op.eq]: req.params.id
            }
        }
    });
    res.json(user);



})



module.exports=router;