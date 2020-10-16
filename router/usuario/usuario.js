const router = require('express').Router();
const Usuario = require('../../models/usuario');

require('../../database/db');

router.get('/', async (req, res) => {
    // Recuperar todos los  valores
    const user = await Usuario.findAll();
    res.json(user);
});


const { validarPassword } = require('../../controllers/usuario.controllers');


// Ruta Registrarse
router.post('/registrar', async (req, res, next) => {

    const { nombre, apellido, username, password, email } = req.body;

    const alumnito = await Usuario.create({
        nombre,
        apellido,
        user: username,
        password,
        correo: email
    }, {
        fields: ['nombre', 'apellido', 'user', 'password',
            'correo']
    });


    // Enviar status y valor del token
    res.json({
        auth: true,
        id: alumnito.user
    });
});


// Ruta Login
router.post('/login', async (req, res, next) => {

    const { username, password } = req.body;
    // console.log(username, password);

    const alumnito = await Usuario.findOne({
        where: {
            user: username
        }
    });

    if (!alumnito) {
        return res.status(404).json({
            error: 'El usuario no existe'
        });
    }

    console.log(alumnito);

    const passwordValidator = validarPassword(password, alumnito.dataValues.password);
    if (!passwordValidator) {
        return res.status(401).json({
            auth: false,
            token: null
        });
    }


    // Enviar status y valor del token
    res.json({
        auth: true,
        id: alumnito.user
    });

});



// router.get('/profile', verifyToken, async (req, res, next)
// Ruta Obtener perfil
router.get('/profile/:id', async (req, res, next) => {
    console.log('parametros', req.params);

    // console.log('req.userId',req.userId);
    const alumnito = await Usuario.findOne({
        attributes: ['nombre', 'apellido', 'user',
            'correo', 'imgUsuario'],
        where: {
            // USER_ALUMNO: req.userId
            user: req.params.id
        }
    });

    // Si el alumno no existe
    if (!alumnito) {
        return res.status(404).send('Alumno no encontrado');
    }

    // Si el alumno existe, enviartlo como json
    res.json(alumnito);
})



module.exports = router;