<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

function ListaEventos() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    // Simulación de llamada a API para obtener eventos
    fetch('http://localhost:5000/api/eventos')
      .then((response) => response.json())
      .then((data) => setEventos(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  const eliminarEvento = (id) => {
    // Simulación de llamada a API para eliminar evento
    fetch(`http://localhost:5000/api/eventos/${id}`, { method: 'DELETE' })
      .then(() => {
        setEventos(eventos.filter((evento) => evento.id !== id));
      })
      .catch((error) => console.error('Error:', error));
  };

  const editarEvento = (id, eventoActualizado) => {
    // Simulación de llamada a API para actualizar evento
    fetch(`http://localhost:5000/api/eventos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventoActualizado),
    })
      .then(() => {
        setEventos(eventos.map((evento) => evento.id === id ? eventoActualizado : evento));
      })
      .catch((error) => console.error('Error:', error));
  };

=======
import React from 'react';

function ListaEventos({ eventos, editarEvento, eliminarEvento }) {
>>>>>>> cac3b98af3f3a6468f5604fa39826589fdee1333
  return (
    <div>
      <h3>Eventos del Carnaval</h3>
      <ul>
        {eventos.map((evento) => (
          <li key={evento.id}>
<<<<<<< HEAD
            <p>{evento.nombre}</p>
            <p>{evento.descripcion}</p>
            <button onClick={() => eliminarEvento(evento.id)}>Eliminar</button>
            <button onClick={() => editarEvento(evento.id, { nombre: 'Evento Actualizado', descripcion: 'Descripción actualizada' })}>
              Editar
            </button>
=======
            {evento.nombre}
            <button onClick={() => editarEvento(evento)}>Editar</button>
            <button onClick={() => eliminarEvento(evento)}>Eliminar</button>
>>>>>>> cac3b98af3f3a6468f5604fa39826589fdee1333
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaEventos;
<<<<<<< HEAD

=======
>>>>>>> cac3b98af3f3a6468f5604fa39826589fdee1333
