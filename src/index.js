const express = require('express');

const app = express();

// # Definimos RUTAS aqui
app.use(require('./routes/index'))

// # Definimos un middlewares: sirve paar entender que tipo de datos recive el server
app.use(express.json());
    // urlencode -> datos por formulario a obeto, extended no aceptara multimedia, solo datos
app.use(express.urlencoded({extended: false}));     


app.listen(4000);

console.log("Escuchando en uerto 4000");