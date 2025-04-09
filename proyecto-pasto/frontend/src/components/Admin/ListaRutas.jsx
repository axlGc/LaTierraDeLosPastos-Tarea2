import React from 'react';

function ListaRutas({ rutas, eliminarRuta }) {
  return (
    <div>
      <h3>Rutas Registradas</h3>
      <ul>
        {rutas.map((ruta) => (
          <li key={ruta.id}>
            {ruta.nombre}
            <button onClick={() => eliminarRuta(ruta)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaRutas;
