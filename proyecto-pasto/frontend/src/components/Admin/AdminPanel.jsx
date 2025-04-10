import React, { useState, useEffect } from 'react';
import ListaEventos from './ListaEventos';
import ListaGuias from './ListaGuias';
import ListaRutas from './ListaRutas';
import ListaLugares from './ListaLugares';
import FormularioEvento from './FormularioEvento';

function AdminPanel() {
  const [rol, setRol] = useState(null);

  useEffect(() => {
    // Simulación de autenticación: obtén el rol del usuario desde una API o almacenamiento local
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      const usuarioData = JSON.parse(usuario);
      setRol(usuarioData.rol);
    }
  }, []);

  if (rol !== 'admin') {
    return <div>No tienes acceso a este panel</div>;
  }

  return (
    <div>
      
      <h1>Panel del Administrador</h1>
      <h2>Rutas y Lugares</h2>
      <ListaRutas />
      <ListaLugares />
      <ListaGuias />
      <h2>Eventos del Carnaval</h2>
      <FormularioEvento />
      <ListaEventos />
    </div>
  );
}

export default AdminPanel;
