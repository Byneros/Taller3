// Importa el módulo express para manejar las rutas de la aplicación.
const express = require('express');
// Importa los controladores para las Tareas desde otro módulo.
const emplCtrl = require('../controllers/empleado.controller');
// Crea un nuevo router express.
const router = express.Router();

router.get('/',emplCtrl.getEmpleados);
//router.post('/',emplCtrl.createEmpleado);

module.exports = router;