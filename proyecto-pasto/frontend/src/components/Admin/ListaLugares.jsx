import React, { useState, useEffect } from 'react';

function ListaLugares() {
  const [lugares, setLugares] = useState([]);

  useEffect(() => {
    // Simulación de llamada a API para obtener lugares
    fetch('http://localhost:5000/api/lugares')
      .then((response) => response.json())
      .then((data) => setLugares(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  const eliminarLugar = (id) => {
    // Simulación de llamada a API para eliminar lugar
    fetch(`http://localhost:5000/api/lugares/${id}`, { method: 'DELETE' })
      .then(() => {
        setLugares(lugares.filter((lugar) => lugar.id !== id));
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <h3>Lugares</h3>
      <ul>
        {lugares.map((lugar) => (
          <li key={lugar.id}>
            <p>{lugar.nombre}</p>
            <button onClick={() => eliminarLugar(lugar.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaLugares;
