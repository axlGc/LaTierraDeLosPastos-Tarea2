// middlewares/authMiddleware.js
function verificarAutenticacion(req, res, next) {
  if (req.session && req.session.usuario) {
    return next();
  } else {
    return res.status(401).json({ message: 'No autorizado. Por favor, inicia sesión.' });
  }
}

function verificarRol(rolesPermitidos) {
  return (req, res, next) => {
    if (req.session && req.session.usuario && rolesPermitidos.includes(req.session.usuario.rol)) {
      return next();
    } else {
      return res.status(403).json({ message: 'Acceso denegado. No tienes los permisos necesarios.' });
    }
  };
}

module.exports = {
  verificarAutenticacion,
  verificarRol
};
