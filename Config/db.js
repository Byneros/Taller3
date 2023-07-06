const mongoose = require('mongoose');
const uri = 'mongodb+srv://Byneros:7poJnyCtvZiDVOdS@cluster0.zrp0lem.mongodb.net/?retryWrites=true&w=majority';

const conectarbd = async () => {

  try {
    await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log('conexion exitosa');
  } catch (err) {
    console.log(err)
  }
};
module.exports = conectarbd;