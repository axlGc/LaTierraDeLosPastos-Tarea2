// routes/auth.js
const express = require('express');
const router = express.Router();
const db = require('../db'); // Asegúrate de que la ruta sea correcta
const bcrypt = require('bcryptjs');

// Ruta de inicio de sesión
router.post('/login', (req, res) => {
  const { email, contrasena } = req.body;

  if (!email || !contrasena) {
    return res.status(400).json({ message: 'Por favor, proporciona correo y contraseña.' });
  }

  db.query('SELECT * FROM usuarios WHERE email = ?', [email], async (err, results) => {
    if (err) {
      console.error('Error al consultar la base de datos:', err);
      return res.status(500).json({ message: 'Error interno del servidor.' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Correo o contraseña incorrectos.' });
    }

    const usuario = results[0];

    // Comparar la contraseña ingresada con la almacenada en la base de datos
    const contrasenaValida = await bcrypt.compare(contrasena, usuario.contrasena);

    if (!contrasenaValida) {
      return res.status(401).json({ message: 'Correo o contraseña incorrectos.' });
    }

    // Almacenar información del usuario en la sesión
    req.session.usuario = {
      id: usuario.id,
      nombre: usuario.nombre,
      rol: usuario.rol
    };

    res.json({ message: 'Inicio de sesión exitoso.', usuario: req.session.usuario });
  });
});

// Ruta de cierre de sesión
router.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
      return res.status(500).json({ message: 'Error al cerrar sesión.' });
    }

    res.json({ message: 'Sesión cerrada correctamente.' });
  });
});

module.exports = router;
