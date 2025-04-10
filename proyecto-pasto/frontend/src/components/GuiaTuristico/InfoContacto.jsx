import React, { useState } from 'react';

// Simulación de una API para almacenar datos
const contactos = [
  { id: 1, nombre: 'Juan', telefono: '123456789', email: 'juan@example.com' },
  { id: 2, nombre: 'Ana', telefono: '987654321', email: 'ana@example.com' },
];

function InfoContacto() {
  const [contactosData, setContactosData] = useState(contactos); // Estado para almacenar los datos de contacto
  const [nuevoContacto, setNuevoContacto] = useState({ id: null, nombre: '', telefono: '', email: '' }); // Estado para el nuevo contacto
  const [contactoEditar, setContactoEditar] = useState(null); // Estado para el contacto a editar

  // Función para agregar un nuevo contacto
  const agregarContacto = () => {
    if (nuevoContacto.id === null) {
      // Si no tiene id, es un nuevo contacto
      const nuevoContactoConId = { ...nuevoContacto, id: contactosData.length + 1 };
      setContactosData([...contactosData, nuevoContactoConId]);
      setNuevoContacto({ id: null, nombre: '', telefono: '', email: '' });
    } else {
      // Si tiene id, es una actualización
      const contactosActualizados = contactosData.map((contacto) => {
        if (contacto.id === nuevoContacto.id) {
          return nuevoContacto;
        }
        return contacto;
      });
      setContactosData(contactosActualizados);
      setNuevoContacto({ id: null, nombre: '', telefono: '', email: '' });
      setContactoEditar(null);
    }
  };

  // Función para editar un contacto
  const editarContacto = (contacto) => {
    setContactoEditar(contacto);
    setNuevoContacto(contacto);
  };

  // Función para eliminar un contacto
  const eliminarContacto = (id) => {
    const contactosFiltrados = contactosData.filter((contacto) => contacto.id !== id);
    setContactosData(contactosFiltrados);
  };

  return (
    <div>
      <h2>Info de Contacto</h2>
      <form>
        <input
          type="text"
          value={nuevoContacto.nombre}
          onChange={(e) => setNuevoContacto({ ...nuevoContacto, nombre: e.target.value })}
          placeholder="Nombre"
        />
        <input
          type="tel"
          value={nuevoContacto.telefono}
          onChange={(e) => setNuevoContacto({ ...nuevoContacto, telefono: e.target.value })}
          placeholder="Teléfono"
        />
        <input
          type="email"
          value={nuevoContacto.email}
          onChange={(e) => setNuevoContacto({ ...nuevoContacto, email: e.target.value })}
          placeholder="Email"
        />
        <button type="button" onClick={agregarContacto}>
          {contactoEditar ? 'Actualizar' : 'Agregar'}
        </button>
      </form>
      <ul>
        {contactosData.map((contacto) => (
          <li key={contacto.id}>
            <p>{contacto.nombre}</p>
            <p>Teléfono: {contacto.telefono}</p>
            <p>Email: {contacto.email}</p>
            <button onClick={() => editarContacto(contacto)}>Editar</button>
            <button onClick={() => eliminarContacto(contacto.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InfoContacto;
