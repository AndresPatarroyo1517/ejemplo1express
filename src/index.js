/*const express = require('express');
const app = express();
const port = 3000;

app.get('/hola', (req, res)=>{
    res.send('¡Hola MUNDO 15!')
})

app.listen(port, ()=>{
    console.log(`La aplicación se esta ejecutando en el puerto ${port}`)
})*/
const parser = require("body-parser");
const express = require('express');
const app = express();
const port = 3000;
const animalRoutes = require("./routes/animal");
const mongoose = require("mongoose");
require('dotenv').config();
app.use(parser.urlencoded({ extended: false })); //permite leer los datos que vienen en la petición
app.use(parser.json()); // transforma los datos a formato JSON
//Gestión de las rutas usando el middleware
app.use("/api", animalRoutes);
app.use(express.json());
//Conexión a la base de datos
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conexión exitosa"))
    .catch((error) => console.log(error));
//Conexión al puerto
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
