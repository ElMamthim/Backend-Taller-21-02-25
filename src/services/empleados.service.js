const EmpleadosModel = require("../models/empleados.model");

async function crearEmpleadoS(nuevoEmpleado) {
    return await EmpleadosModel.create( nuevoEmpleado );
}

async function obtenerEmpleadosS() {
    return await EmpleadosModel.find({}); 
}

async function obtenerEmpleadoIdS(id) {
    return await EmpleadosModel.findById(id);
}

async function eliminarEmpleadoIdS(id) {
    return await EmpleadosModel.findByIdAndDelete(id);
}

async function editarEmpleadoIdS(id, nuevaEmpleado) {
    return await EmpleadosModel.findByIdAndUpdate(id, nuevaEmpleado, { new: true });
}

module.exports = {
    crearEmpleadoS,
    obtenerEmpleadosS,
    obtenerEmpleadoIdS,
    eliminarEmpleadoIdS,
    editarEmpleadoIdS
}