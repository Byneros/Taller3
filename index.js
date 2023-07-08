const express = require("express");
const conectarbd = require("./Backend/Config/db");
const RutaEmpleado =  require("./Backend/Routes/routes.empleados");
const app = express();
const cors = require('./Backend/Config/cors');

app.use(express.json());
app.use(cors);
conectarbd();
app.use('/empleados', RutaEmpleado);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running  on port ${PORT}`));

