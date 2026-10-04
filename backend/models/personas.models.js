const db = require('../config/db');

exports.getAll = (callback) => {
    db.query('SELECT * FROM PERSONAS', callback);
};

exports.getById = (id, callback) => {
    db.query('SELECT * FROM PERSONAS WHERE id = ?', [id], callback);
};

exports.create = (persona, callback) => {
    db.query(
        'INSERT INTO PERSONAS (nombre, email) VALUES (?, ?)',
        [persona.nombre, persona.email],
        callback
    );
};

exports.update = (id, persona, callback) => {
    db.query(
        'UPDATE PERSONAS SET nombre=?, email=? WHERE id=?',
        [persona.nombre, persona.email, id],
        callback
    );
};

exports.delete = (id, callback) => {
    db.query('DELETE FROM PERSONAS WHERE id=?', [id], callback);
};