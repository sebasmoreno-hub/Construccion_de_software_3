db.js (ejemplo básico)
const sql = require('mssql');

const config = {
    user: 'sa',
    password: '123456',
    server: 'localhost',
    database: 'demo',
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

sql.connect(config)
    .then(() => console.log('Conectado a SQL Server'))
    .catch(err => console.log(err));

module.exports = sql;