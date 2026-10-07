const express = require('express');
const app = express();
const sequelize = require('./config/db');

app.use(express.json());

const personaRoutes = require('./routes/app.routes');

app.use('/personas', personaRoutes);

sequelize.sync().then(() => {
    console.log('BD conectada');
    app.listen(3000, () => {
        console.log('Servidor corriendo en http://localhost:3000');
    });
});