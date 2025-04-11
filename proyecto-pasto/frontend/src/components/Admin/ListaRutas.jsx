<<<<<<< HEAD
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
=======
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
>>>>>>> cac3b98af3f3a6468f5604fa39826589fdee1333
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaRutas;
