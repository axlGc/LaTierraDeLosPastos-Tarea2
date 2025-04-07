import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap
import './SobreCarnaval.css';

function SobrePasto() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
            <div className="col-md-8 text-center">
            <h1 className="text-dark">Sobre Pasto</h1>
            <p className="text-justify">
                Pasto, la capital del departamento de Nariño en Colombia, es una ciudad rica en cultura, historia y tradiciones. Situada en el sur del país, Pasto es conocida por su impresionante arquitectura colonial y su vibrante vida cultural.
            </p>
            <p className="text-justify">
                La ciudad es famosa por su gastronomía, sus festivales y su gente amable. Entre los platos típicos se encuentran el cuy asado y el helado de paila, que son un deleite para los visitantes.
            </p>
            <img src="../Img_Video/pasto.jpg" alt="Paisaje Pastuso" className="img-fluid rounded mt-3" style={{ maxWidth: '100%', height: 'auto' }} />
             </div>
        </div>
        </div>
    );
}

export default SobrePasto;