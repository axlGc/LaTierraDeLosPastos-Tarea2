import React, { useState, useEffect } from 'react';

// Simulación de una API para almacenar datos
const guias = [
  { id: 1, nombre: 'Juan', descripcion: 'Guía turístico con experiencia' },
  { id: 2, nombre: 'Ana', descripcion: 'Guía turística especializada en historia' },
];

function PanelPersonal() {
  const [guiasData, setGuiasData] = useState(guias); // Estado para almacenar los datos de los guías
  const [nuevoGuia, setNuevoGuia] = useState({ id: null, nombre: '', descripcion: '' }); // Estado para el nuevo guía
  const [guiaEditar, setGuiaEditar] = useState(null); // Estado para el guía a editar

  // Función para agregar un nuevo guía
  const agregarGuia = () => {
    if (nuevoGuia.id === null) {
      // Si no tiene id, es un nuevo guía
      const nuevoGuiaConId = { ...nuevoGuia, id: guiasData.length + 1 };
      setGuiasData([...guiasData, nuevoGuiaConId]);
      setNuevoGuia({ id: null, nombre: '', descripcion: '' });
    } else {
      // Si tiene id, es una actualización
      const guiasActualizados = guiasData.map((guia) => {
        if (guia.id === nuevoGuia.id) {
          return nuevoGuia;
        }
        return guia;
      });
      setGuiasData(guiasActualizados);
      setNuevoGuia({ id: null, nombre: '', descripcion: '' });
      setGuiaEditar(null);
    }
  };

  // Función para editar un guía
  const editarGuia = (guia) => {
    setGuiaEditar(guia);
    setNuevoGuia(guia);
  };

  // Función para eliminar un guía
  const eliminarGuia = (id) => {
    const guiasFiltrados = guiasData.filter((guia) => guia.id !== id);
    setGuiasData(guiasFiltrados);
  };

  return (
    <div>
      <h2>Panel Personal</h2>
      <form>
        <input
          type="text"
          value={nuevoGuia.nombre}
          onChange={(e) => setNuevoGuia({ ...nuevoGuia, nombre: e.target.value })}
          placeholder="Nombre"
        />
        <textarea
          value={nuevoGuia.descripcion}
          onChange={(e) => setNuevoGuia({ ...nuevoGuia, descripcion: e.target.value })}
          placeholder="Descripción"
        />
        <button type="button" onClick={agregarGuia}>
          {guiaEditar ? 'Actualizar' : 'Agregar'}
        </button>
      </form>
      <ul>
        {guiasData.map((guia) => (
          <li key={guia.id}>
            <p>{guia.nombre}</p>
            <p>{guia.descripcion}</p>
            <button onClick={() => editarGuia(guia)}>Editar</button>
            <button onClick={() => eliminarGuia(guia.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PanelPersonal;
