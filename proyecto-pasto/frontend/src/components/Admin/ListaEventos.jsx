import React from 'react';

function ListaEventos({ eventos, editarEvento, eliminarEvento }) {
  return (
    <div>
      <h3>Eventos del Carnaval</h3>
      <ul>
        {eventos.map((evento) => (
          <li key={evento.id}>
            {evento.nombre}
            <button onClick={() => editarEvento(evento)}>Editar</button>
            <button onClick={() => eliminarEvento(evento)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaEventos;
