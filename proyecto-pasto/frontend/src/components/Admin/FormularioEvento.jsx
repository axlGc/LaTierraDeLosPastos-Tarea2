import React, { useState } from 'react';

<<<<<<< HEAD
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
=======
function FormularioEvento({ crearEvento }) {
  const [nuevoEvento, setNuevoEvento] = useState({ nombre: '', descripcion: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    crearEvento(nuevoEvento);
    setNuevoEvento({ nombre: '', descripcion: '' });
>>>>>>> cac3b98af3f3a6468f5604fa39826589fdee1333
  };

  return (
    <div>
<<<<<<< HEAD
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
=======
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
>>>>>>> cac3b98af3f3a6468f5604fa39826589fdee1333
      </form>
    </div>
  );
}

export default FormularioEvento;
