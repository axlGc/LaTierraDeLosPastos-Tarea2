<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import ListaEventos from './ListaEventos';
import ListaGuias from './ListaGuias';
import ListaRutas from './ListaRutas';
import ListaLugares from './ListaLugares';
import FormularioEvento from './FormularioEvento';

function AdminPanel() {
  const [rol, setRol] = useState(null);

  useEffect(() => {
    // Simulación de autenticación: obtén el rol del usuario desde una API o almacenamiento local
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      const usuarioData = JSON.parse(usuario);
      setRol(usuarioData.rol);
    }
  }, []);

  if (rol !== 'admin') {
    return <div>No tienes acceso a este panel</div>;
  }

  return (
    <div>
      
      <h1>Panel del Administrador</h1>
      <h2>Rutas y Lugares</h2>
      <ListaRutas />
      <ListaLugares />
      <ListaGuias />
      <h2>Eventos del Carnaval</h2>
      <FormularioEvento />
      <ListaEventos />
=======
// Importamos las librerías necesarias
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Para hacer peticiones HTTP a la API
import { auth, onAuthStateChanged } from '../../firebase'; // Para la autenticación con Firebase
import ListaRutas from './ListaRutas'; // Componente para mostrar las rutas
import ListaGuias from './ListaGuias'; // Componente para mostrar las guías turísticas
import ListaEventos from './ListaEventos'; // Componente para mostrar los eventos
import FormularioEvento from './FormularioEvento'; // Componente para crear nuevos eventos

// Función principal del componente AdminPanel
function AdminPanel() {
  // Estados para almacenar los datos de rutas, guías, eventos y el usuario actual
  const [rutas, setRutas] = useState([]); // Estado para las rutas
  const [guias, setGuias] = useState([]); // Estado para las guías
  const [eventos, setEventos] = useState([]); // Estado para los eventos
  const [usuario, setUsuario] = useState(null); // Estado para el usuario actual

  // Hook useEffect para ejecutar código cuando el componente se monta
  useEffect(() => {
    // Escuchamos cambios en el estado de autenticación de Firebase
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Si hay un usuario, lo guardamos en el estado
        setUsuario(user);
        
        // Verificamos si el usuario es administrador haciendo una petición a la API
        axios.get(`tu-api-url/usuarios/${user.uid}`)
          .then(response => {
            // Si el usuario es administrador, cargamos los datos de rutas, guías y eventos
            if (response.data.rol === 'admin') {
              // Cargar datos si es administrador
              axios.get('tu-api-url/rutas')
                .then(response => {
                  // Actualizamos el estado con las rutas obtenidas
                  setRutas(response.data);
                })
                .catch(error => {
                  // Manejamos errores en caso de que la petición falle
                  console.error(error);
                });

              axios.get('tu-api-url/guias')
                .then(response => {
                  // Actualizamos el estado con las guías obtenidas
                  setGuias(response.data);
                })
                .catch(error => {
                  // Manejamos errores en caso de que la petición falle
                  console.error(error);
                });

              axios.get('tu-api-url/eventos')
                .then(response => {
                  // Actualizamos el estado con los eventos obtenidos
                  setEventos(response.data);
                })
                .catch(error => {
                  // Manejamos errores en caso de que la petición falle
                  console.error(error);
                });
            } else {
              // Si no es administrador, redirigimos a otra página
              // Aquí puedes agregar la lógica para redirigir
            }
          })
          .catch(error => {
            // Manejamos errores en caso de que la petición falle
            console.error(error);
          });
      } else {
        // Si no hay usuario, redirigimos a la página de inicio de sesión
        // Aquí puedes agregar la lógica para redirigir
      }
    });
  }, []); // El array vacío significa que solo se ejecuta una vez al montar el componente

  // Función para eliminar una ruta
  const eliminarRuta = (ruta) => {
    // Hacemos una petición DELETE a la API para eliminar la ruta
    axios.delete(`tu-api-url/rutas/${ruta.id}`)
      .then(() => {
        // Actualizamos el estado de rutas eliminando la ruta seleccionada
        setRutas(rutas.filter(r => r.id !== ruta.id));
      })
      .catch(error => {
        // Manejamos errores en caso de que la petición falle
        console.error(error);
      });
  };

  // Función para crear un nuevo evento
  const crearEvento = (nuevoEvento) => {
    // Hacemos una petición POST a la API para crear el evento
    axios.post('tu-api-url/eventos', nuevoEvento)
      .then(response => {
        // Actualizamos el estado de eventos agregando el nuevo evento
        setEventos([...eventos, response.data]);
      })
      .catch(error => {
        // Manejamos errores en caso de que la petición falle
        console.error(error);
      });
  };

  // Función para editar un evento
  const editarEvento = (evento) => {
    // Hacemos una petición PUT a la API para editar el evento
    axios.put(`tu-api-url/eventos/${evento.id}`, evento)
      .then(() => {
        // Actualizamos el estado de eventos con el evento editado
        setEventos(eventos.map(e => e.id === evento.id ? evento : e));
      })
      .catch(error => {
        // Manejamos errores en caso de que la petición falle
        console.error(error);
      });
  };

  // Función para eliminar un evento
  const eliminarEvento = (evento) => {
    // Hacemos una petición DELETE a la API para eliminar el evento
    axios.delete(`tu-api-url/eventos/${evento.id}`)
      .then(() => {
        // Actualizamos el estado de eventos eliminando el evento seleccionado
        setEventos(eventos.filter(e => e.id !== evento.id));
      })
      .catch(error => {
        // Manejamos errores en caso de que la petición falle
        console.error(error);
      });
  };

  // Si no hay usuario, mostramos un mensaje
  if (!usuario) return <div>No eres administrador</div>;

  // Renderizamos el panel de administrador con los componentes para rutas, guías, eventos y formulario de eventos
  return (
    <div>
      <h2>Panel del Administrador</h2>
      <ListaRutas rutas={rutas} eliminarRuta={eliminarRuta} />
      <ListaGuias guias={guias} />
      <ListaEventos eventos={eventos} editarEvento={editarEvento} eliminarEvento={eliminarEvento} />
      <FormularioEvento crearEvento={crearEvento} />
>>>>>>> cac3b98af3f3a6468f5604fa39826589fdee1333
    </div>
  );
}

export default AdminPanel;
