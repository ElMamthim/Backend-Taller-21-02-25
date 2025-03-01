const mongoose = require('mongoose');

const AreasSchema = new mongoose.Schema({
    nombre: {
        type: String
    },
    descripcion: {
        type: String
    },
    salario: {
        type: Number
    },
})

const AreasModel = mongoose.model(
    'areas',
    AreasSchema
);

module.exports = AreasModel;