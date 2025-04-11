import React, { useState } from 'react';

// Simulación de una API para almacenar datos
const alojamientos = [
  { id: 1, nombre: 'Hotel A', descripcion: 'Hotel de lujo' },
  { id: 2, nombre: 'Hotel B', descripcion: 'Hotel económico' },
];

function Alojamientos() {
  const [alojamientosData, setAlojamientosData] = useState(alojamientos); // Estado para almacenar los datos de alojamientos
  const [nuevoAlojamiento, setNuevoAlojamiento] = useState({ id: null, nombre: '', descripcion: '' }); // Estado para el nuevo alojamiento
  const [alojamientoEditar, setAlojamientoEditar] = useState(null); // Estado para el alojamiento a editar

  // Función para agregar un nuevo alojamiento
  const agregarAlojamiento = () => {
    if (nuevoAlojamiento.id === null) {
      // Si no tiene id, es un nuevo alojamiento
      const nuevoAlojamientoConId = { ...nuevoAlojamiento, id: alojamientosData.length + 1 };
      setAlojamientosData([...alojamientosData, nuevoAlojamientoConId]);
      setNuevoAlojamiento({ id: null, nombre: '', descripcion: '' });
    } else {
      // Si tiene id, es una actualización
      const alojamientosActualizados = alojamientosData.map((alojamiento) => {
        if (alojamiento.id === nuevoAlojamiento.id) {
          return nuevoAlojamiento;
        }
        return alojamiento;
      });
      setAlojamientosData(alojamientosActualizados);
      setNuevoAlojamiento({ id: null, nombre: '', descripcion: '' });
      setAlojamientoEditar(null);
    }
  };

  // Función para editar un alojamiento
  const editarAlojamiento = (alojamiento) => {
    setAlojamientoEditar(alojamiento);
    setNuevoAlojamiento(alojamiento);
  };

  // Función para eliminar un alojamiento
  const eliminarAlojamiento = (id) => {
    const alojamientosFiltrados = alojamientosData.filter((alojamiento) => alojamiento.id !== id);
    setAlojamientosData(alojamientosFiltrados);
  };

  return (
    <div>
      <h2>Alojamientos</h2>
      <form>
        <input
          type="text"
          value={nuevoAlojamiento.nombre}
          onChange={(e) => setNuevoAlojamiento({ ...nuevoAlojamiento, nombre: e.target.value })}
          placeholder="Nombre del alojamiento"
        />
        <textarea
          value={nuevoAlojamiento.descripcion}
          onChange={(e) => setNuevoAlojamiento({ ...nuevoAlojamiento, descripcion: e.target.value })}
          placeholder="Descripción"
        />
        <button type="button" onClick={agregarAlojamiento}>
          {alojamientoEditar ? 'Actualizar' : 'Agregar'}
        </button>
      </form>
      <ul>
        {alojamientosData.map((alojamiento) => (
          <li key={alojamiento.id}>
            <p>{alojamiento.nombre}</p>
            <p>{alojamiento.descripcion}</p>
            <button onClick={() => editarAlojamiento(alojamiento)}>Editar</button>
            <button onClick={() => eliminarAlojamiento(alojamiento.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Alojamientos;
