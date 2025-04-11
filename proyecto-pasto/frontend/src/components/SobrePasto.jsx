import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap
import './StyleCarnaval.css'; // Importa el nuevo archivo CSS

function SobrePasto() {
    return (
        <div className="container-fluid bg-light py-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <h1 className="card-title mb-4">Sobre Pasto</h1>
                            <p className="card-text text-justify">
                                Pasto, la capital del departamento de Nariño en Colombia, es una ciudad rica en cultura, historia y tradiciones. Situada en el sur del país, Pasto es conocida por su impresionante arquitectura colonial y su vibrante vida cultural.
                            </p>
                            <p className="card-text text-justify">
                                La ciudad es famosa por su gastronomía, sus festivales y su gente amable. Entre los platos típicos se encuentran el cuy asado y el helado de paila, que son un deleite para los visitantes.
                            </p>
                            <img 
                                src="../Img_Video/pasto.jpg" // Asegúrate de actualizar la ruta de la imagen
                                alt="Paisaje Pastuso" 
                                className="img-fluid rounded my-4" 
                            />
                            <h2 className="card-subtitle text-muted mb-3">Historia de Pasto</h2>
                            <p className="card-text text-justify">
                                Fundada en 1537 por el conquistador español Sebastián de Belalcázar, Pasto ha sido un importante centro cultural y comercial a lo largo de su historia. La ciudad ha mantenido su herencia indígena y colonial, lo que se refleja en su arquitectura y tradiciones.
                            </p>
                            <h2 className="card-subtitle text-muted mb-3">Cultura y Tradiciones</h2>
                            <p className="card-text text-justify">
                                Pasto es conocida por sus festivales, como el Carnaval de Negros y Blancos, que celebra la diversidad cultural de la región. Además, la ciudad alberga diversas manifestaciones artísticas, como la música, la danza y la artesanía.
                            </p>
                            <h2 className="card-subtitle text-muted mb-3">Lugares de Interés</h2>
                            <p className="card-text text-justify">
                                Entre los lugares más emblemáticos se encuentran el Santuario de Las Lajas, el Parque Arboleda y la Plaza de Nariño, donde se pueden apreciar la arquitectura colonial y la belleza natural de la región.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SobrePasto;