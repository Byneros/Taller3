const Empleado = require('../models/empleado');
const empleadoCtrl={};

empleadoCtrl.getEmpleados =async (req,res)=>{
    const empleados = await Empleado.find();
    res.json(empleados)
}
module.exports = empleadoCtrl;