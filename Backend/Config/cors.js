const mongoose = require('mongoose');
const uri = "mongodb+srv://Byneros:0621@cluster0.nnp3scm.mongodb.net/?retryWrites=true&w=majority";
const conectarbd = async () => {

  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    
    console.log('Conexión exitosa a MongoDB');
} catch (err) {
    console.log('Error al conectar a MongoDB: ', err);
    process.exit(1); 
}
};

module.exports = conectarbd;

