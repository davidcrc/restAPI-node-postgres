const { Router } = require('express');
const router = Router();

const { getUsers, createUser  } = require('../routes/controllers/index.controller');

router.get('/users', getUsers );

// Para crear un usuario
router.post('/users', createUser );

module.exports = router;