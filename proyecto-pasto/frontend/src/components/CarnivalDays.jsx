import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StyleCarnaval.css';

function CarnivalDays() {
  return (
    <div className="container">
      <h1 className="text-center">DÍAS DE CARNAVAL</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img
              src="../public/Img_Video/precarn.jpg"
              className="card-img-top custom-image"
              alt="Pre Carnaval"
            />
            <div className="card-body">
              <h5 className="card-title">PRE CARNAVAL</h5>
              <p className="card-text">
                Conciertos, Arco Iris en el asfalto, Carreras y recorridos,
                actividades en cada comuna de la ciudad forman parte de la
                agenda pre-carnaval.
              </p>
              <a href="./Admin/ListaEventos.jsx" className="btn btn-primary">
                Programación
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="../public/Img_Video/carnavalito.jpg"
              className="card-img-top custom-image"
              alt="2 de Enero"
            />
            <div className="card-body">
              <h5 className="card-title">2 DE ENERO</h5>
              <p className="card-text">
                Se celebra el carnavalito, el lugar para los niños dentro del
                carnaval, inician los tablados y festivales en plazas públicas.
              </p>
              <a href="#" className="btn btn-primary">
                Programación
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="../public/Img_Video/colectivos.jpg"
              className="card-img-top custom-image"
              alt="3 de Enero"
            />
            <div className="card-body">
              <h5 className="card-title">3 DE ENERO</h5>
              <p className="card-text">
                El espectacular desfile de colectivos coreográficos recuerda las
                travesías épicas en tributo a la madre tierra y el pasado
                ancestral andino.
              </p>
              <a href="#" className="btn btn-primary">
                Programación
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <img
              src="../public/Img_Video/castañeda.jpg"
              className="card-img-top custom-image"
              alt="4 de Enero"
            />
            <div className="card-body">
              <h5 className="card-title">4 DE ENERO</h5>
              <p className="card-text">
                La llegada de la Familia Castañeda, un desfile tradicional con
                pasajes de identidad, hechos y personajes de la memoria rural y
                urbana de la región.
              </p>
              <a href="#" className="btn btn-primary">
                Programación
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="../public/Img_Video/5enero.jpg"
              className="card-img-top custom-image"
              alt="5 de Enero"
            />
            <div className="card-body">
              <h5 className="card-title">5 DE ENERO</h5>
              <p className="card-text">
                Juego de identidad, práctica lúdica que dio origen al juego de
                carnaval, es sentir la alegría al compartir el ritual de
                pintarse el rostro.
              </p>
              <a href="#" className="btn btn-primary">
                Programación
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="../public/Img_Video/6enero.jpg"
              className="card-img-top custom-image"
              alt="6 de Enero"
            />
            <div className="card-body">
              <h5 className="card-title">6 DE ENERO</h5>
              <p className="card-text">
                El Desfile Magno, un día apoteósico donde la creatividad se
                siente por toda la senda; disfraces, comparsas y carrozas
                emergen e inundan la ciudad.
              </p>
              <a href="#" className="btn btn-primary">
                Programación
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarnivalDays;
