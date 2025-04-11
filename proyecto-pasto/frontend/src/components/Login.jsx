import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo: correo.trim(), contrasena }),
      });

      const data = await response.json();

      if (response.ok) {
        setError('');
        alert('Inicio de sesión exitoso');

        // Guarda el usuario o token en localStorage si lo necesitas
        localStorage.setItem('usuario', JSON.stringify(data.usuario));

        // Ejecuta función de login (puede redirigir según el rol)
        if (onLogin) onLogin(data.usuario);
      } else {
        setError(data.mensaje || 'Credenciales incorrectas');
      }
    } catch (err) {
      console.error(err);
      setError('Error en el servidor');
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />
        <button type="submit">Ingresar</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
