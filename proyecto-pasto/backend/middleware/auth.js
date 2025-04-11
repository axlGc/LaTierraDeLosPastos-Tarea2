const jwt = require('jsonwebtoken');
require('dotenv').config();

function authMiddleware(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

function soloAdmin(req, res, next) {
  if (req.user.rol !== 'admin') return res.status(403).send('Solo admins');
  next();
}

function soloGuia(req, res, next) {
  if (req.user.rol !== 'guia') return res.status(403).send('Solo guías');
  next();
}

module.exports = { authMiddleware, soloAdmin, soloGuia };