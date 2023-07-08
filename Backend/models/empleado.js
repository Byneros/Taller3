const mongoose = require('mongoose');

const empleados_model = new mongoose.Schema({
   
    name: { type: String, },
    posittion: { type: String },
    office: { type: String },
    salary: { type: Number }
});

module.exports = mongoose.model ('crud', empleados_model)