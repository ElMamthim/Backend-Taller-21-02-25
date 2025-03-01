const AreasModel = require("../models/areas.model");
const {crearAreaS, obtenerAreasS, obtenerAreaIdS, eliminarAreaIdS, editarAreaIdS} = require("../services/areas.service");

async function crearAreas(req, res) {
    const inputData = req.body;
    try {
        const data = await crearAreaS( inputData );
        res.json({
            ok: true,
            data: data
        });    
    } 
    catch ( error ) {
        console.error( error );
        res.json({                  
            ok: false,
            msg: 'Ocurrio un error al registrar el area'
        });
    }
}   

async function obtenerAreas(req, res) {
    try {
        const data = await obtenerAreasS();
        res.json({
            ok: true,
            data: data
        });        
    } 
    catch ( error ) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Ocurrio un error al obtener todas las areas'
        });
    }
}

async function obtenerAreaId( req, res ) {
    const id = req.params.id;

    try {
        const data = await obtenerAreaIdS( id );
        res.json({
            ok: true,
            data: data
        });
    } 
    catch ( error ) {
        console.error( error );
        res.json({                  
            ok: false,
            msg: 'Ocurrio un error al obtener el area por Id'
        });
    }
} 

async function eliminarAreaId( req, res ) {
    const id = req.params.id;
    
    try {
        const data = await eliminarAreaIdS( id );
        res.json({
            ok: true,
            data: data
        });
    } 
    catch ( error ) {
        console.error( error );
        res.json({                  
            ok: false,
            msg: 'El area que tratas de eliminar no existe'
        });
    }
}

async function editarAreaId( req, res ) {
    const id = req.params.id;
    const inputData = req.body;
    
    try {
        const data = await editarAreaIdS( id, inputData );
        res.json({
            ok: true,
            data: data
        });
    } 
    catch ( error ) {
        console.error( error );
        res.json({                  
            ok: false,
            msg: 'No se pudo actualizar los datos del area'
        });
    }
}

module.exports = {
    crearAreas,
    obtenerAreas,
    obtenerAreaId,
    eliminarAreaId,
    editarAreaId
}