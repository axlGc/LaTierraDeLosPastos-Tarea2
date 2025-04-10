import React, { useState, useEffect } from 'react';

function ListaRutas() {
  const [rutas, setRutas] = useState([]);

  useEffect(() => {
    // Simulación de llamada a API para obtener rutas
    fetch('http://localhost:5000/api/rutas')
      .then((response) => response.json())
      .then((data) => setRutas(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  const eliminarRuta = (id) => {
    // Simulación de llamada a API para eliminar ruta
    fetch(`http://localhost:5000/api/rutas/${id}`, { method: 'DELETE' })
      .then(() => {
        setRutas(rutas.filter((ruta) => ruta.id !== id));
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <h3>Rutas</h3>
      <ul>
        {rutas.map((ruta) => (
          <li key={ruta.id}>
            <p>{ruta.nombre}</p>
            <button onClick={() => eliminarRuta(ruta.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaRutas;
