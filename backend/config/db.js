const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('demo', 'sa', '123456', {
    host: 'localhost',
    dialect: 'mssql',
    dialectOptions: {
        options: {
            encrypt: false,
            trustServerCertificate: true
        }
    }
});

module.exports = sequelize;