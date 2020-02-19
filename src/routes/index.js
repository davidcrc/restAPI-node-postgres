/**
 * Este archivo conntiene las rutas principales
 * a las cuales se puede acceder a ese framework
 */

const { Router } = require('express');
const router = Router();

const { getUsers, createUser, getUserByID, delUserByID, updateUserByID  } = require('../routes/controllers/index.controller');

router.get('/users', getUsers );

// Para crear un usuario
router.post('/users', createUser );

// Para obtener usuario deacuerdo al id
router.get('/users/:id', getUserByID );

// Para eeliminar usuario deacuerdo al id
router.delete('/users/:id', delUserByID );

// Para actualizar usuario deacuerdo al id
router.put('/users/:id', updateUserByID );

module.exports = router;