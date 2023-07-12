const express = require('express');
const TareasController = require('../controllers/TareaController');

const router = express.Router();

router.get('/', TareasController.obtenerTodas);
router.get('/:id', TareasController.obtenerPorId);
router.post('/', TareasController.crearTarea);
router.put('/:id', TareasController.actualizarTarea);
router.delete('/:id', TareasController.eliminarTarea);

module.exports = router;