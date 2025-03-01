const mongoose = require('mongoose')

async function Tconexion() {
    try {
        await mongoose.connect('mongodb://localhost:27017/taller-21-02-25');
        console.log('La base de datos inicio correctamente')
    } 
    catch (error) {
        console.error(error);
        console.log('Ocurrio un error al tratar de iniciar la base de datos')
    }
}

module.exports = Tconexion