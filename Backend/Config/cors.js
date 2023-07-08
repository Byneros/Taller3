//config.cors.js
// Carga las variables de entorno desde el archivo .env
require('dotenv').config(); 
// Importa el módulo 'cors' para habilitar CORS en la aplicación
const cors = require('cors'); 
// Obtiene la lista de dominios permitidos desde la variable de entorno ORIGINS en el archivo .env
// Si la variable de entorno no está configurada, se inicializa unalista vacía
const whitelist = process.env.ORIGINS ? process.env.ORIGINS.split(',') : [];
// Definición de la función que verifica el origen de la
const corsOptions = {
origin: function (origin, callback) {
// Comprueba si el origen de la solicitud está en la lista blanca de dominios permitidos
// Si el origen está en la lista blanca o la lista blanca está vacía o se permite cualquier origen ('*'), se permite la solicitud
solicitud
if (whitelist.length === 0 || whitelist.indexOf(origin) !== -1
|| !origin || whitelist[0] === '*') {
// Si el origen de la solicitud no está en la lista blanca, se deniega la solicitud con un mensaje de error
callback(null, true);
} else {
// Exporta una instancia de middleware de CORS configurada con las opciones definidas anteriormente
callback(new Error('Not allowed by CORS'));
}
}
}
module.exports = cors(corsOptions);
