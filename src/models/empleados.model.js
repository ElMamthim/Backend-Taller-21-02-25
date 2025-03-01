const mongoose = require('mongoose');

const EmpleadosSchema = new mongoose.Schema({
    nombre: {
        type: String
    },
    edad: {
        type: Number
    },
    cargo: {
        type: String
    },
})

const EmpleadosModel = mongoose.model(
    'empleados',
    EmpleadosSchema
);

module.exports = EmpleadosModel;