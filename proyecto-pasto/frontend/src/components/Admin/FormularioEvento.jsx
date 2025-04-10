import React, { useState } from 'react';

function FormularioEvento({ crearEvento }) {
  const [nuevoEvento, setNuevoEvento] = useState({ nombre: '', descripcion: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    crearEvento(nuevoEvento);
    setNuevoEvento({ nombre: '', descripcion: '' });
  };

  return (
    <div>
      <h3>Crear Nuevo Evento</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del evento"
          value={nuevoEvento.nombre}
          onChange={(e) => setNuevoEvento({ ...nuevoEvento, nombre: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descripción del evento"
          value={nuevoEvento.descripcion}
          onChange={(e) => setNuevoEvento({ ...nuevoEvento, descripcion: e.target.value })}
        />
        <button type="submit">Crear Evento</button>
      </form>
    </div>
  );
}

export default FormularioEvento;
