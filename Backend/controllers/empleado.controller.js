const Empleado = require('../models/empleado');

const empleadoCtrl={};

empleadoCtrl.getEmpleados =async (req,res)=>{
    const empleados = await Empleado.find();
    res.json(empleados)
}

empleadoCtrl.createEmpleado= async(req, res, next)=>{
   
    const { name, posittion, office, salary } = req.body;
    console.log(name, posittion, office, salary);
     const empleado = new Empleado({
        name, posittion, office, salary
     
     });
    await empleado.save();
    res.json('recived')
}

empleadoCtrl.getEmpleado= async(req,res)=>{
    const empleado= await Empleado.findById(req.params.id);
    res.json(empleado)
}

empleadoCtrl.putEmpleado= async(req,res)=>{
    const {id}=req.params
    const empleado={
       name, posittion, office, salary
    }
    await Empleado.findByIdAndUpdate(id, {$set: empleado},{new: true})

    res.json({"status":"empleado actualizado"})
}

empleadoCtrl.deleteEmpleado= async(req,res)=>{
   await Empleado.findByIdAndRemove(req.body.id);
   res.json({"status":"empleado eliminado"})
}

module.exports = empleadoCtrl;