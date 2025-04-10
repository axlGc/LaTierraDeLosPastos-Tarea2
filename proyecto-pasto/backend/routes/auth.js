const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const connection = require('../db');
require('dotenv').config();

const router = express.Router();

router.post('/login', (req, res) => {
  const { correo, contrasena } = req.body;

  connection.query('SELECT * FROM usuarios WHERE correo = ?', [correo], async (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(401).send('Usuario no encontrado');

    const user = results[0];
    const match = await bcrypt.compare(contrasena, user.contrasena);

    if (!match) return res.status(401).send('Contraseña incorrecta');

    const token = jwt.sign({ id: user.id, rol: user.rol }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token, rol: user.rol });
  });
});

module.exports = router;