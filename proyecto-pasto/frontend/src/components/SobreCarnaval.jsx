import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap
import './StyleCarnaval.css'; // Importa el nuevo archivo CSS

function SobreCarnaval() {
    return (
        <div className="container-fluid bg-light py-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h1 className="card-title text-center mb-4">Sobre el Carnaval de Negros y Blancos</h1>

                            <h2 className="card-subtitle text-muted mb-3 text-center">Historia y origen del Carnaval</h2>
                            <p className="card-text text-justify">
                                El Carnaval de Negros y Blancos tiene sus raíces en las celebraciones precolombinas de los pueblos indígenas Pastos y Quillacingas, quienes realizaban rituales en honor al Sol y la Luna. Con la llegada de los españoles, estas tradiciones se fusionaron con influencias europeas y africanas, creando un sincretismo cultural que dio lugar al Carnaval actual. El origen formal del Carnaval se remonta al siglo XVI, aunque la fecha oficial de celebración se estableció en el siglo XIX.
                            </p>

                            <h2 className="card-subtitle text-muted mb-3 text-center">Significado y simbolismo de los diferentes días</h2>
                            <p className="card-text text-justify">
                                <strong>Día de Negros (5 de enero):</strong> Este día se celebra con pintura negra, simbolizando la unión y la igualdad. Tiene sus raíces en la tradición africana de pintar las paredes blancas de Popayán de negro.
                            </p>
                            <p className="card-text text-justify">
                                <strong>Día de Blancos (6 de enero):</strong> Iniciado en 1912, este día se caracteriza por el uso de polvos blancos, simbolizando la alegría y la diversión.
                            </p>
                            <p className="card-text text-justify">
                                <strong>Desfile Magno:</strong> Es el evento central del Carnaval, donde se despliegan comparsas, disfraces y figuras gigantes, mostrando la riqueza cultural de la región.
                            </p>

                            <h2 className="card-subtitle text-muted mb-3 text-center">Personajes emblemáticos del Carnaval</h2>
                            <p className="card-text text-justify">
                                <strong>El Afilador:</strong> Aunque no es mencionado específicamente en los textos, personajes como el Rey Momo y la Reina son figuras destacadas. El Rey Momo es el rey del Carnaval, mientras que la Reina es elegida anualmente para representar la belleza y la cultura local.
                            </p>
                            <p className="card-text text-justify">
                                <strong>Rey Momo y la Reina:</strong> Son figuras centrales en el Carnaval, representando la alegría y la tradición.
                            </p>

                            <h2 className="card-subtitle text-muted mb-3 text-center">Tradiciones y rituales del Carnaval</h2>
                            <p className="card-text text-justify">
                                Las tradiciones incluyen el uso de pinturas negras y blancas, desfiles, comparsas y la coronación de la Reina. Además, se realizan actividades como conciertos y carreras durante el pre-carnaval.
                            </p>

                            <h2 className="card-subtitle text-muted mb-3 text-center">Música y danzas típicas</h2>
                            <p className="card-text text-justify">
                                La música y las danzas son fundamentales, con ritmos tradicionales que reflejan la mezcla cultural de la región. Las danzas incluyen comparsas y bailes al son de la música regional.
                            </p>

                            <h2 className="card-subtitle text-muted mb-3 text-center">Artesanía relacionada con el Carnaval</h2>
                            <p className="card-text text-justify">
                                La artesanía es crucial, destacándose las figuras gigantes hechas por artesanos locales, que se exhiben durante los desfiles. Estas figuras son un símbolo de la creatividad y la tradición del Carnaval.
                            </p>

                            <img
                                src="ruta/a/tu/imagen.jpg"
                                alt="Carnaval"
                                className="img-fluid rounded mt-3"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SobreCarnaval;