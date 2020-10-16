const router = require('express').Router();
const routerEntrenador=require('../router/entrenador/entrenador');
const routerEquipos=require('../router/equipos/equipos');
const routerEstadio=require('../router/estadios/estadios');
const routerLigas=require('../router/ligas/ligas');
const routerUsuario=require('../router/usuario/usuario');


// Enviar a user.js cuando tengan la direccion '/api/user'
router.use('/entrenador',routerEntrenador);
router.use('/equipos',routerEquipos);
router.use('/estadios', routerEstadio);
router.use('/ligas', routerLigas);
router.use('/usuarios', routerUsuario);

module.exports=router;

