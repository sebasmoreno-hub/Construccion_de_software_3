const personasService = require('../services/personas.services');

exports.getAll = async (req, res) => {
    try {
        const data = await personasService.getAll();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getById = async (req, res) => {
    try {
        const data = await personasService.getById(req.params.id);
        if (!data) return res.status(404).json({ mensaje: 'Persona no encontrada' });
        
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.create = async (req, res) => {
    try {
        const data = await personasService.create(req.body);
        res.status(201).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.update = async (req, res) => {
    try {
        const data = await personasService.update(req.params.id, req.body);
        if (!data) return res.status(404).json({ mensaje: 'Persona no encontrada' });

        res.json({ mensaje: 'El registro de persona fue actualizado' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const data = await personasService.delete(req.params.id);
        if (data === null) return res.status(404).json({ mensaje: 'Persona no encontrada' });

        res.json({ mensaje: 'El registro de persona fue eliminado' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};