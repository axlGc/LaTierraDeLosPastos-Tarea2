import React from 'react';

function ListaGuias({ guias }) {
  return (
    <div>
      <h3>Guías Turísticos Registrados</h3>
      <ul>
        {guias.map((guia) => (
          <li key={guia.id}>{guia.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaGuias;
