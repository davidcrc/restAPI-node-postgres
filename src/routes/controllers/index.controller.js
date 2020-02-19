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


 /**
 * Method GET
 * Obtiene una lista de todos los usuarios registrados
 * @param {*} req 
 * @param {*} res 
 */
const getUsers = async (req, res) => {
    
    const response = await pool.query("SELECT * FROM users");
    console.log(response.rows)
    
    // res.send('users');      // solo devolvera users

    res.status(200).json(response.rows)
};

/**
 * Method GET
 * Obtiene los datos de un usuario deacuerdo al ID
 * @param {*} req 
 * @param {*} res 
 */
const getUserByID = async (req, res) => {
    
    // const response = await pool.query("SELECT * FROM users");
    // console.log(response.rows)
    
    // res.send('users by ID '+ req.params.id);      //req.params.id , ecorando que id fue la variabe que creamos en la ruta
    const id = req.params.id;
    console.log("EL ID es " + id)
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
};

/**
 * Method DELETE
 * Elimina un usuario deacuerdo a un id
 * @param {*} req 
 * @param {*} res 
 */
const delUserByID = async (req, res) => {

    const id = req.params.id;
    console.log("EL ID es " + id)
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    console.log(response)
    if(response.rowCount){
        res.json({message: `User ${id} deleted succesfully`});
    }
    else{
        res.json({message: 'Id no encontrado'});
    }
    
    
};

/**
 * Method PUT
 * Actualiza los datos de un usuario
 * @param {*} req 
 * @param {*} res 
 */
const updateUserByID = async (req, res) => {

    const id = req.params.id;
    const {name, email} = req.body;
    console.log("EL ID es " + id)
    const response = await pool.query('UPDATE users SET email=$2, name=$3 WHERE id = $1', [id, email, name ]);
    console.log(response.rowCount)
    if(response.rowCount){
        res.json({message: `User ${id} updated succesfully`});
    }
    else{
        res.json({message: 'Id no encontrado'});
    }
    
};

/**
 * Method POST
 * Agrega un usuario, obteniendo su nombre y correo
 * @param {*} req 
 * @param {*} res 
 */
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
    createUser,
    getUserByID,
    delUserByID,
    updateUserByID  
}