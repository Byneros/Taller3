const mongoose = require('mongoose');

/*{
    "name": "Nelson",
    "posittion": "Alto",
    "office": "Ing. de Sistemas",
    "salary": "6545645646"
}*/
const empleados_model = new mongoose.Schema({
   
    name: { type: String, },
    posittion: { type: String },
    office: { type: String },
    salary: { type: Number }
});

module.exports = mongoose.model ('crud', empleados_model)