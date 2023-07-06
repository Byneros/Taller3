const express = require("express");
const conectarbd = require("./Config/db");
const app = express();

conectarbd();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running  on port ${PORT} '));