import React, { useState } from 'react';

function FormularioEvento() {
  const [nuevoEvento, setNuevoEvento] = useState({ nombre: '', descripcion: '' });

  const agregarEvento = async () => {
    try {
      // Simulación de llamada a API para agregar evento
      await fetch('http://localhost:5000/api/eventos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoEvento),
      });
      setNuevoEvento({ nombre: '', descripcion: '' });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h3>Agregar Evento</h3>
      <form>
        <input
          type="text"
          value={nuevoEvento.nombre}
          onChange={(e) => setNuevoEvento({ ...nuevoEvento, nombre: e.target.value })}
          placeholder="Nombre del evento"
        />
        <textarea
          value={nuevoEvento.descripcion}
          onChange={(e) => setNuevoEvento({ ...nuevoEvento, descripcion: e.target.value })}
          placeholder="Descripción"
        />
        <button type="button" onClick={agregarEvento}>Agregar</button>
      </form>
    </div>
  );
}

export default FormularioEvento;
