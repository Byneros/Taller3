const express = require("express");
const conectarbd = require("./Config/db");
const RutaEmpleado =  require("./routes/routes.empleados");
const app = express();

app.use(express.json());
conectarbd();
app.use('/empleados', RutaEmpleado);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running  on port ${PORT}`));

