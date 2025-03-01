const express = require('express');
const {crearEmpleados, obtenerEmpleados, obtenerEmpleadoId, eliminarEmpleadoId, editarEmpleadoId} = require('../controllers/empleados.controller')

const router = express.Router()

router.get('/', obtenerEmpleados)

router.post('/', crearEmpleados)

router.get('/:id', obtenerEmpleadoId)

router.delete('/:id', eliminarEmpleadoId)

router.patch('/:id', editarEmpleadoId)

module.exports = router;