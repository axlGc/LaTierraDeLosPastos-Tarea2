const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener todos los eventos
router.get('/', (req, res) => {
  db.query('SELECT * FROM eventos', (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
});

// Obtener evento por ID
router.get('/:id', (req, res) => {
  db.query('SELECT * FROM eventos WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ error: 'Evento no encontrado' });
    res.json(result[0]);
  });
});

// Crear evento
router.post('/', (req, res) => {
  const { titulo, descripcion, fecha, ubicacion } = req.body;
  db.query(
    'INSERT INTO eventos (titulo, descripcion, fecha, ubicacion) VALUES (?, ?, ?, ?)',
    [titulo, descripcion, fecha, ubicacion],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: result.insertId, mensaje: 'Evento creado' });
    }
  );
});

// Actualizar evento
router.put('/:id', (req, res) => {
  const { titulo, descripcion, fecha, ubicacion } = req.body;
  db.query(
    'UPDATE eventos SET titulo = ?, descripcion = ?, fecha = ?, ubicacion = ? WHERE id = ?',
    [titulo, descripcion, fecha, ubicacion, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ mensaje: 'Evento actualizado' });
    }
  );
});

// Eliminar evento
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM eventos WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: 'Evento eliminado' });
  });
});

module.exports = router;
