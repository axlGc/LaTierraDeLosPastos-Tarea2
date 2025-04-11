import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SobrePasto from './components/SobrePasto';
import SobreCarnaval from './components/SobreCarnaval';
import Introduccion from './components/Introduccion';
import Alojamientos from './components/GuiaTuristico/Alojamientos';
import InfoContacto from './components/GuiaTuristico/InfoContacto';
//import PanelPersonal from './components/GuiaTuristico/PanelPersonal';
//import PuntosDeInteres from './components/GuiaTuristico/PuntosDeInteres';
//import Restaurantes from './components/GuiaTuristico/Restaurantes';
//import RutasTuristicas from './components/GuiaTuristico/RutasTuristicas';
import AdminPanel from './components/Admin/Adminpanel'; // Importa el componente AdminPanel
import navbarBackground from "../public/Img_Video/navbar.jpg"; // Ajusta la ruta según tu estructura


function App() {
  return (

    <Router>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundImage: `url(${navbarBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }}>
        <div className="container-fluid">
          <div className="d-flex justify-content-center">
            <Link className="nav-link" to="/">Inicio</Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
              <li className="nav-item" >
                <Link className="nav-link" to="/sobre-pasto"  style={{ color: 'white' }} >Sobre Pasto</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sobre-carnaval" style={{ color: 'white' }}>Sobre el Carnaval</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/guia-turistico"></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin"></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/iniciar-sesion"></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <Routes>
        <Route path="/sobre-pasto" element={<SobrePasto />} />
        <Route path="/sobre-carnaval" element={<SobreCarnaval />} />
        <Route path="/" element={<Introduccion />} />
        <Route path="/admin" element={<AdminPanel />} /> {/* Ruta para el AdminPanel */}
        <Route path="guia-turistico" element={<InfoContacto />} />

      </Routes>
    </Router>
  );
}

export default App;
