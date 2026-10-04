const express = require('express');
const app = express();

app.use(express.json());

const personaRoutes = require('./routes/personas.routes');

app.use('/personas', personaRoutes);

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});