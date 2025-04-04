import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SobrePasto from './components/SobrePasto';
import SobreCarnaval from './components/SobreCarnaval';
import Introduccion from './components/Introduccion'; // Importa el componente Introduccion

function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="d-flex justify-content-center">
                        <Link className="nav-link" to="/">Inicio</Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/sobre-pasto">Sobre Pasto</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sobre-carnaval">Sobre el Carnaval</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Rutas */}
            <Routes>
                <Route path="/sobre-pasto" element={<SobrePasto />} />
                <Route path="/sobre-carnaval" element={<SobreCarnaval />} />
                <Route path="/" element={<Introduccion />} /> // Muestra la introducción en la página principal
            </Routes>
        </Router>
    );
}

export default App;
