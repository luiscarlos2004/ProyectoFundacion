const users = require('../models/users');
const solicitude = require('../models/solicitudadopcion');

const correoExiste = async(correo = '') =>{
    const correoExiste = await users.findOne({correo});
    if(correoExiste){
        throw new Error(`El correo existe en la base de datos`);
    }
}
const passwordExiste = async(password = '') =>{
    const passwordExiste = await users.findOne({password});
    if(!passwordExiste){
        throw new Error(`La contraseña no existe en la base de datos`);
    }
}

module.exports = {
    correoExiste,
    passwordExiste
}