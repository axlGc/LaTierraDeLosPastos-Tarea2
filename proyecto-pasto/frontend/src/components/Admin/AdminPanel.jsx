// src/components/AdminPanel.jsx
import React from 'react';

function AdminPanel() {
  // Simulación de datos (reemplazar con llamadas a la API)
  const rutas = ['Ruta 1', 'Ruta 2', 'Ruta 3'];
  const guias = ['Guía 1', 'Guía 2'];
  const eventos = ['Evento 1', 'Evento 2'];

  // Funciones CRUD simuladas
  const eliminarRuta = (ruta) => {
    alert(`Eliminar ruta: ${ruta}`);
  };

  const crearEvento = () => {
    alert('Crear evento');
  };

  const editarEvento = (evento) => {
    alert(`Editar evento: ${evento}`);
  };

  const eliminarEvento = (evento) => {
    alert(`Eliminar evento: ${evento}`);
  };

  return (
    <div>
      <h2>Panel del Administrador</h2>
      <h3>Rutas Registradas</h3>
      <ul>
        {rutas.map((ruta, index) => (
          <li key={index}>
            {ruta}
            <button onClick={() => eliminarRuta(ruta)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <h3>Guías Turísticos Registrados</h3>
      <ul>
        {guias.map((guia, index) => (
          <li key={index}>{guia}</li>
        ))}
      </ul>

      <h3>Eventos del Carnaval</h3>
      <ul>
        {eventos.map((evento, index) => (
          <li key={index}>
            {evento}
            <button onClick={() => editarEvento(evento)}>Editar</button>
            <button onClick={() => eliminarEvento(evento)}>Eliminar</button>
          </li>
        ))}
        <button onClick={crearEvento}>Crear Nuevo Evento</button>
      </ul>
    </div>
  );
}

export default AdminPanel;

