/**
 * este archivo es para manejar datos con la BD
 * contendra las funciones quue seran llamadas en el index
 */

 // Un objeto para la conexion
 const { Pool } = require('pg');

 const pool = new Pool ( {
    host: 'localhost',
    user: 'david',
    password: '',
    database: 'firstapi'
 });

const getUsers = async (req, res) => {
    const response = await pool.query("SELECT * FROM users");
    console.log(response.rows)
    
    // res.send('users');      // solo devolvera users

    res.status(200).json(response.rows)
};

const createUser = async (req, res) => {
    console.log(req.body);
    if (req.body){
        const { name, email } = req.body;
        const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
        // console.log("lla respuesta es ", response);

        // res.send('users created');      // solo devolvera users
        res.json({
            message: 'Usuario agregado correctamente',
            body: {
                user: {name, email}
            }
        });
    }
    else{
        res.send("not posible!!");
    }

};

module.exports = {
    getUsers,
    createUser
}