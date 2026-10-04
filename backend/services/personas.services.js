const personasModel = require('../models/personas.model');

exports.getAll = (cb) => personasModel.getAll(cb);

exports.getById = (id, cb) => personasModel.getById(id, cb);

exports.create = (persona, cb) => personasModel.create(persona, cb);

exports.update = (id, persona, cb) => personasModel.update(id, persona, cb);

exports.delete = (id, cb) => personasModel.delete(id, cb);