const EmpleadosModel = require("../models/empleados.model");
const {crearEmpleadoS, obtenerEmpleadosS, obtenerEmpleadoIdS, eliminarEmpleadoIdS, editarEmpleadoIdS} = require("../services/empleados.service");

async function crearEmpleados(req, res) {
    const inputData = req.body;
    try {
        const data = await crearEmpleadoS( inputData );
        res.json({
            ok: true,
            data: data
        });    
    } 
    catch ( error ) {
        console.error( error );
        res.json({                  
            ok: false,
            msg: 'Ocurrio un error al registrar el empleado'
        });
    }
}   

async function obtenerEmpleados(req, res) {
    try {
        const data = await obtenerEmpleadosS();
        res.json({
            ok: true,
            data: data
        });        
    } 
    catch ( error ) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Ocurrio un error al obtener todos los datos de los empleados'
        });
    }
}

async function obtenerEmpleadoId( req, res ) {
    const id = req.params.id;

    try {
        const data = await obtenerEmpleadoIdS( id );
        res.json({
            ok: true,
            data: data
        });
    } 
    catch ( error ) {
        console.error( error );
        res.json({                  
            ok: false,
            msg: 'Ocurrio un error al obtener al empleado por medio de Id'
        });
    }
} 

async function eliminarEmpleadoId( req, res ) {
    const id = req.params.id;
    
    try {
        const data = await eliminarEmpleadoIdS( id );
        res.json({
            ok: true,
            data: data
        });
    } 
    catch ( error ) {
        console.error( error );
        res.json({                  
            ok: false,
            msg: 'El empleado que tratas de eliminar no existe'
        });
    }
}

async function editarEmpleadoId( req, res ) {
    const id = req.params.id;
    const inputData = req.body;
    
    try {
        const data = await editarEmpleadoIdS( id, inputData );
        res.json({
            ok: true,
            data: data
        });
    } 
    catch ( error ) {
        console.error( error );
        res.json({                  
            ok: false,
            msg: 'No se pudo actualizar los datos del empleado'
        });
    }
}

module.exports = {
    crearEmpleados,
    obtenerEmpleados,
    obtenerEmpleadoId,
    eliminarEmpleadoId,
    editarEmpleadoId
}