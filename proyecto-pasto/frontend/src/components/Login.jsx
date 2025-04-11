import React, { useState } from 'react';
import './Login.css'; // Asegúrate de tener un archivo de estilos si deseas personalizarlo

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Aquí iría tu llamada al backend
    if (formData.email === '' || formData.password === '') {
      setError('Todos los campos son obligatorios.');
      return;
    }

    try {
      // Ejemplo de petición al backend (debes configurar tu API)
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Guardar token, redirigir, etc.
        alert(`Bienvenido ${result.nombre}!`);
        // Redireccionar según el rol:
        if (result.rol === 'admin') {
          window.location.href = '/admin';
        } else if (result.rol === 'guia') {
          window.location.href = '/guia-turistico';
        } else {
          window.location.href = '/';
        }
      } else {
        setError(result.message || 'Credenciales inválidas');
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
        <div>
          <label>Correo:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
