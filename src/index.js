/**
 * Aqui corre la aplicacion y se inicializa en el puerto X000
 */
const express = require('express');

const app = express();

// Siempre definir primero el middleware
// # Definimos un middlewares: sirve paar entender que tipo de datos recive el server
app.use(express.json());
    // urlencode -> datos por formulario a obeto, extended no aceptara multimedia, solo datos
app.use(express.urlencoded({extended: false}));     

// # Definimos RUTAS aqui
app.use(require('./routes/index'))

app.listen(3000);

console.log("Escuchando en uerto 3000");