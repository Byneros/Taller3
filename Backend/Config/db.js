const mongoose = require('mongoose');
const uri = 'mongodb+srv://Byneros:N4HsT1H3sprnjYcp@cluster0.zrp0lem.mongodb.net/?retryWrites=true&w=majority';

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