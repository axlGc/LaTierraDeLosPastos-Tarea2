import React, { useState } from 'react';

// Simulación de una API para almacenar datos
const restaurantes = [
  { id: 1, nombre: 'Restaurante A', descripcion: 'Restaurante de comida rápida' },
  { id: 2, nombre: 'Restaurante B', descripcion: 'Restaurante gourmet' },
];

function Restaurantes() {
  const [restaurantesData, setRestaurantesData] = useState(restaurantes); // Estado para almacenar los datos de restaurantes
  const [nuevoRestaurante, setNuevoRestaurante] = useState({ id: null, nombre: '', descripcion: '' }); // Estado para el nuevo restaurante
  const [restauranteEditar, setRestauranteEditar] = useState(null); // Estado para el restaurante a editar

  // Función para agregar un nuevo restaurante
  const agregarRestaurante = () => {
    if (nuevoRestaurante.id === null) {
      // Si no tiene id, es un nuevo restaurante
      const nuevoRestauranteConId = { ...nuevoRestaurante, id: restaurantesData.length + 1 };
      setRestaurantesData([...restaurantesData, nuevoRestauranteConId]);
      setNuevoRestaurante({ id: null, nombre: '', descripcion: '' });
    } else {
      // Si tiene id, es una actualización
      const restaurantesActualizados = restaurantesData.map((restaurante) => {
        if (restaurante.id === nuevoRestaurante.id) {
          return nuevoRestaurante;
        }
        return restaurante;
      });
      setRestaurantesData(restaurantesActualizados);
      setNuevoRestaurante({ id: null, nombre: '', descripcion: '' });
      setRestauranteEditar(null);
    }
  };

  // Función para editar un restaurante
  const editarRestaurante = (restaurante) => {
    setRestauranteEditar(restaurante);
    setNuevoRestaurante(restaurante);
  };

  // Función para eliminar un restaurante
  const eliminarRestaurante = (id) => {
    const restaurantesFiltrados = restaurantesData.filter((restaurante) => restaurante.id !== id);
    setRestaurantesData(restaurantesFiltrados);
  };

  return (
    <div>
      <h2>Restaurantes</h2>
      <form>
        <input
          type="text"
          value={nuevoRestaurante.nombre}
          onChange={(e) => setNuevoRestaurante({ ...nuevoRestaurante, nombre: e.target.value })}
          placeholder="Nombre del restaurante"
        />
        <textarea
          value={nuevoRestaurante.descripcion}
          onChange={(e) => setNuevoRestaurante({ ...nuevoRestaurante, descripcion: e.target.value })}
          placeholder="Descripción"
        />
        <button type="button" onClick={agregarRestaurante}>
          {restauranteEditar ? 'Actualizar' : 'Agregar'}
        </button>
      </form>
      <ul>
        {restaurantesData.map((restaurante) => (
          <li key={restaurante.id}>
            <p>{restaurante.nombre}</p>
            <p>{restaurante.descripcion}</p>
            <button onClick={() => editarRestaurante(restaurante)}>Editar</button>
            <button onClick={() => eliminarRestaurante(restaurante.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Restaurantes;
