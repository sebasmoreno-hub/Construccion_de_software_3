const personasService = require('../services/personas.service');

exports.getAll = (req, res) => {
    personasService.getAll((err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

exports.getById = (req, res) => {
    personasService.getById(req.params.id, (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results[0]);
    });
};

exports.create = (req, res) => {
    personasService.create(req.body, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ id: result.insertId, ...req.body });
    });
};

exports.update = (req, res) => {
    personasService.update(req.params.id, req.body, (err) => {
        if (err) return res.status(500).json(err);
        res.json({ mensaje: 'El registro de persona fue actualizado' });
    });
};

exports.delete = (req, res) => {
    personasService.delete(req.params.id, (err) => {
        if (err) return res.status(500).json(err);
        res.json({ mensaje: 'El registro de persona fue eliminado' });
    });
};