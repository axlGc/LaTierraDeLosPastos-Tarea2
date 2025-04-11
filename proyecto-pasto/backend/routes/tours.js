const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener todos los tours
router.get('/', (req, res) => {
  db.query('SELECT * FROM tours', (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
});

// Obtener tour por ID
router.get('/:id', (req, res) => {
  db.query('SELECT * FROM tours WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ error: 'Tour no encontrado' });
    res.json(result[0]);
  });
});

// Crear tour
router.post('/', (req, res) => {
  const { nombre, descripcion, precio, fecha, guia_id } = req.body;
  db.query(
    'INSERT INTO tours (nombre, descripcion, precio, fecha, guia_id) VALUES (?, ?, ?, ?, ?)',
    [nombre, descripcion, precio, fecha, guia_id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: result.insertId, mensaje: 'Tour creado' });
    }
  );
});

// Actualizar tour
router.put('/:id', (req, res) => {
  const { nombre, descripcion, precio, fecha, guia_id } = req.body;
  db.query(
    'UPDATE tours SET nombre = ?, descripcion = ?, precio = ?, fecha = ?, guia_id = ? WHERE id = ?',
    [nombre, descripcion, precio, fecha, guia_id, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ mensaje: 'Tour actualizado' });
    }
  );
});

// Eliminar tour
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM tours WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: 'Tour eliminado' });
  });
});

module.exports = router;
