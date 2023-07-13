const express = require("express");
const conectarbd = require("./Backend/Config/db");
const RutaTarea =  require("./Backend/routes/RoutesTareas");
const app = express();

const cors = require('cors'); 

app.use(express.json());
var allowedOrigins = ['http://localhost:3005',
                      'http://yourapp.com'];
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

conectarbd();
app.use('/Tarea', RutaTarea);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running  on port ${PORT}`));

const getFechaFuturo = () => {
    const currentDate = new Date();

    // Agregamos un número de días a la fecha actual para obtener una fecha en el futuro
    const futureDate = new Date(currentDate.setDate(currentDate.getDate() + 5)); // Aquí estamos agregando 5 días a la fecha actual

    // Para convertir la fecha a formato ISO con precisión hasta los segundos (sin milisegundos), hacemos lo siguiente:
    const futureDateISO = futureDate.toISOString().split('.')[0]+"Z";
    return futureDateISO;
};
console.log(`getFechaFuturo ${getFechaFuturo()}`)