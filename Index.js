const express = require("express");
const conectarbd = require("./Backend/Config/db");
const RutaEmpleado =  require("./Backend/Routes/routes.empleados");
const app = express();

app.use(express.json());
conectarbd();
app.use('/empleados', RutaEmpleado);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running  on port ${PORT}`));

