// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/login', (req, res) => {
  const { correo, contrasena } = req.body;

  db.query(
    'SELECT * FROM usuarios WHERE correo = ? AND contrasena = ?',
    [correo, contrasena],
    (err, result) => {
      if (err) return res.status(500).json({ error: 'Error en el servidor' });
      if (result.length === 0) return res.status(401).json({ error: 'Credenciales incorrectas' });

      res.json({ mensaje: 'Login exitoso', usuario: result[0] });
    }
  );
});

module.exports = router;
