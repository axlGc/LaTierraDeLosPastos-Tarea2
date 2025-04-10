import React, { useState } from 'react';

// Simulación de una API para almacenar datos
const rutas = [
  { id: 1, nombre: 'Ruta A', descripcion: 'Ruta de senderismo' },
  { id: 2, nombre: 'Ruta B', descripcion: 'Ruta cultural' },
];

function RutasTuristicas() {
  const [rutasData, setRutasData] = useState(rutas); // Estado para almacenar los datos de rutas
  const [nuevaRuta, setNuevaRuta] = useState({ id: null, nombre: '', descripcion: '' }); // Estado para la nueva ruta
  const [rutaEditar, setRutaEditar] = useState(null); // Estado para la ruta a editar

  // Función para agregar una nueva ruta
  const agregarRuta = () => {
    if (nuevaRuta.id === null) {
      // Si no tiene id, es una nueva ruta
      const nuevaRutaConId = { ...nuevaRuta, id: rutasData.length + 1 };
      setRutasData([...rutasData, nuevaRutaConId]);
      setNuevaRuta({ id: null, nombre: '', descripcion: '' });
    } else {
      // Si tiene id, es una actualización
      const rutasActualizadas = rutasData.map((ruta) => {
        if (ruta.id === nuevaRuta.id) {
          return nuevaRuta;
        }
        return ruta;
      });
      setRutasData(rutasActualizadas);
      setNuevaRuta({ id: null, nombre: '', descripcion: '' });
      setRutaEditar(null);
    }
  };

  // Función para editar una ruta
  const editarRuta = (ruta) => {
    setRutaEditar(ruta);
    setNuevaRuta(ruta);
  };

  // Función para eliminar una ruta
  const eliminarRuta = (id) => {
    const rutasFiltradas = rutasData.filter((ruta) => ruta.id !== id);
    setRutasData(rutasFiltradas);
  };

  return (
    <div>
      <h2>Rutas Turísticas</h2>
      <form>
        <input
          type="text"
          value={nuevaRuta.nombre}
          onChange={(e) => setNuevaRuta({ ...nuevaRuta, nombre: e.target.value })}
          placeholder="Nombre de la ruta"
        />
        <textarea
          value={nuevaRuta.descripcion}
          onChange={(e) => setNuevaRuta({ ...nuevaRuta, descripcion: e.target.value })}
          placeholder="Descripción"
        />
        <button type="button" onClick={agregarRuta}>
          {rutaEditar ? 'Actualizar' : 'Agregar'}
        </button>
      </form>
      <ul>
        {rutasData.map((ruta) => (
          <li key={ruta.id}>
            <p>{ruta.nombre}</p>
            <p>{ruta.descripcion}</p>
            <button onClick={() => editarRuta(ruta)}>Editar</button>
            <button onClick={() => eliminarRuta(ruta.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RutasTuristicas;
