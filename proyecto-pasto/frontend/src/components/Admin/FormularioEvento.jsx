import React, { useState } from 'react';

function FormularioEvento({ crearEvento }) {
  const [evento, setEvento] = useState({ titulo: '', descripcion: '', fecha: '', ubicacion: '' });

  const handleChange = (e) => {
    setEvento({ ...evento, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3001/api/eventos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(evento)
    });

    const data = await res.json();
    if (res.ok) {
      crearEvento(data);
      setEvento({ titulo: '', descripcion: '', fecha: '', ubicacion: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="titulo" placeholder="Título" value={evento.titulo} onChange={handleChange} required />
      <textarea name="descripcion" placeholder="Descripción" value={evento.descripcion} onChange={handleChange} />
      <input type="date" name="fecha" value={evento.fecha} onChange={handleChange} required />
      <input name="ubicacion" placeholder="Ubicación" value={evento.ubicacion} onChange={handleChange} required />
      <button type="submit">Agregar Evento</button>
    </form>
  );
}

export default FormularioEvento;
