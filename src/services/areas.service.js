const AreasModel = require("../models/areas.model");

async function crearAreaS(nuevaArea) {
    return await AreasModel.create( nuevaArea );
}

async function obtenerAreasS() {
    return await AreasModel.find({}); 
}

async function obtenerAreaIdS(id) {
    return await AreasModel.findById(id);
}

async function eliminarAreaIdS(id) {
    return await AreasModel.findByIdAndDelete(id);
}

async function editarAreaIdS(id, nuevaArea) {
    return await AreasModel.findByIdAndUpdate(id, nuevaArea, { new: true });
}

module.exports = {
    crearAreaS,
    obtenerAreasS,
    obtenerAreaIdS,
    eliminarAreaIdS,
    editarAreaIdS
}