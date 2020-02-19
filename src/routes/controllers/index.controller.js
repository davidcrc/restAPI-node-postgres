/**
 * este archivo es para manejar datos con la BD
 * contendra las funciones quue seran llamadas en el index
 */


const getUsers = (req, res) => {
    res.send('users');      // solo devolvera users
} ;


module.exports = {
    getUsers
}