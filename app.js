const express = require('express');
const bodyParser = require('body-parser');
const ApisRoute=require('./router/rutaApi');
const cors = require('cors');

const app = express();

app.use(cors());

// Puerto por defecto
const port = process.env.PORT || 3000;

// MIDDLEWERES
// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas que comienzen con '/user' serán enviadas a apiRouter
app.use('/', ApisRoute);

// Comenzar servidor express
app.listen(port, () => {
    console.log(`Servidor iniciando en el puerto ${ port }`);
});