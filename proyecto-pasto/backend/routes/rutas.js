// backend/routes/rutas.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// ✅ Obtener todas las rutas
router.get('/', (req, res) => {
  db.query('SELECT * FROM rutas_turisticas', (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
});

// ✅ Obtener una sola ruta por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM rutas_turisticas WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ error: 'Ruta no encontrada' });
    res.json(result[0]);
  });
});

// ✅ Crear una nueva ruta
router.post('/', (req, res) => {
  const { nombre, descripcion, duracion, fecha, guia_id } = req.body;
  const sql = `
    INSERT INTO rutas_turisticas (nombre, descripcion, duracion, fecha, guia_id)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.query(sql, [nombre, descripcion, duracion, fecha, guia_id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, mensaje: 'Ruta creada exitosamente' });
  });
});

// ✅ Actualizar una ruta
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, duracion, fecha, guia_id } = req.body;
  const sql = `
    UPDATE rutas_turisticas
    SET nombre = ?, descripcion = ?, duracion = ?, fecha = ?, guia_id = ?
    WHERE id = ?
  `;
  db.query(sql, [nombre, descripcion, duracion, fecha, guia_id, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: 'Ruta actualizada correctamente' });
  });
});

// ✅ Eliminar una ruta
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM rutas_turisticas WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: 'Ruta eliminada correctamente' });
  });
});

module.exports = router;