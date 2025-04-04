import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap
import './SobreCarnaval.css'; // Importa el archivo CSS que crearemos

function Introduccion() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <h1 className="text-dark">Bienvenido a LaTierraDeLosPastos</h1>

                    <h2 className="text-dark mt-4">Explora la riqueza cultural y natural de Pasto</h2>
                    <p className="text-justify">
                        En "LaTierraDeLosPastos" encontrarás una ventana al corazón del suroccidente colombiano, donde la historia, la cultura y la naturaleza se entrelazan para ofrecer una experiencia única. Esta página está dedicada a destacar los aspectos más fascinantes de San Juan de Pasto, una ciudad rica en tradiciones, paisajes espectaculares y eventos culturales como el famoso Carnaval de Negros y Blancos.
                    </p>
                    <p className="text-justify">
                        Descubre información sobre los lugares turísticos más emblemáticos, como el Santuario de Las Lajas, el volcán Galeras y las lagunas andinas que rodean la región. Además, sumérgete en las historias detrás del Carnaval de Negros y Blancos, una celebración que ha trascendido fronteras y es reconocida como Patrimonio Cultural Inmaterial de la Humanidad.
                    </p>
                    <p className="text-justify">
                        Nuestra misión es brindarte una guía completa para explorar Pasto y sus alrededores, con datos históricos, recomendaciones turísticas y un vistazo a las tradiciones que hacen de esta región un destino único. Ya seas un viajero curioso o un amante de la cultura, *LaTierraDeLosPastos* tiene algo especial para ti.
                    </p>

                    <img src="ruta/a/tu/imagen.jpg" alt="Paisaje Pastuso" className="img-fluid rounded mt-3" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            </div>
        </div>
    );
}

export default Introduccion;
