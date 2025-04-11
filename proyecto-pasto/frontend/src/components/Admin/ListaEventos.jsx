import React from 'react';

function ListaEventos({ eventos, editarEvento, eliminarEvento }) {
  return (
    <div>
      <h2>Eventos del Carnaval</h2>
      {eventos.length === 0 ? (
        <p>No hay eventos registrados.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {eventos.map((evento) => (
            <div
              key={evento.id}
              style={{
                border: '1px solid #ccc',
                padding: '1rem',
                borderRadius: '10px',
                backgroundColor: '#f9f9f9'
              }}
            >
              <h3>{evento.titulo}</h3>
              <p><strong>Explicación:</strong> {evento.descripcion}</p>
              <p><strong>Fecha:</strong> {new Date(evento.fecha).toLocaleDateString('es-CO', { weekday: 'short', day: 'numeric', month: 'long' })}</p>
              <p><strong>Hora:</strong> 9:00 AM</p>
              <p><strong>Lugar:</strong> {evento.ubicacion}</p>
              <p><strong>Actividades:</strong> Artes plásticas, música, teatro, poesía.</p>
              <div style={{ marginTop: '10px' }}>
                <button onClick={() => editarEvento(evento)}>Editar</button>
                <button onClick={() => eliminarEvento(evento)} style={{ marginLeft: '10px' }}>Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListaEventos;
