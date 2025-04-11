<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

function ListaGuias() {
  const [guias, setGuias] = useState([]);

  useEffect(() => {
    // Simulación de llamada a API para obtener guías
    fetch('http://localhost:5000/api/guias')
      .then((response) => response.json())
      .then((data) => setGuias(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  const eliminarGuia = (id) => {
    // Simulación de llamada a API para eliminar guía
    fetch(`http://localhost:5000/api/guias/${id}`, { method: 'DELETE' })
      .then(() => {
        setGuias(guias.filter((guia) => guia.id !== id));
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <h3>Guías Turísticos</h3>
      <ul>
        {guias.map((guia) => (
          <li key={guia.id}>
            <p>{guia.nombre}</p>
            <button onClick={() => eliminarGuia(guia.id)}>Eliminar</button>
          </li>
=======
import React from 'react';

function ListaGuias({ guias }) {
  return (
    <div>
      <h3>Guías Turísticos Registrados</h3>
      <ul>
        {guias.map((guia) => (
          <li key={guia.id}>{guia.nombre}</li>
>>>>>>> cac3b98af3f3a6468f5604fa39826589fdee1333
        ))}
      </ul>
    </div>
  );
}

export default ListaGuias;
<<<<<<< HEAD

=======
>>>>>>> cac3b98af3f3a6468f5604fa39826589fdee1333
