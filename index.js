const express = require("express");
const conectarbd = require("./Backend/Config/db");
const RutaTarea =  require("./Backend/routes/RoutesTareas");
const app = express();
const cors = require('./Backend/Config/cors');

app.use(express.json());
app.use(cors);
conectarbd();
app.use('/Tarea', RutaTarea);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running  on port ${PORT}`));
