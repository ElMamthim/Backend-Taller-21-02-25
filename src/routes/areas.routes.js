const express = require('express');
const {crearAreas, obtenerAreas, obtenerAreaId, eliminarAreaId, editarAreaId} = require('../controllers/areas.controller')

const router = express.Router()

router.get('/', obtenerAreas)

router.post('/', crearAreas)

router.get('/:id', obtenerAreaId)

router.delete('/:id', eliminarAreaId)

router.patch('/:id', editarAreaId)

module.exports = router;