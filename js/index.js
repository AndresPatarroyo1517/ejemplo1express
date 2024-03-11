const express = require('express');
const app = express();
const port = 3000;

app.get('/hola', (req, res)=>{
    res.send('¡Hola MUNDO 15!')
})

app.listen(port, ()=>{
    console.log(`La aplicación se esta ejecutando en el puerto ${port}`)
})