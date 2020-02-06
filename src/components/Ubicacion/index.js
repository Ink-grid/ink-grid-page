import React from "react";
import "./style.css";

const Ubicacion = () => {
  return (
    <div className="my-5 container text-light ubicacion">
      <h1 className="text-center">Nuestra Ubicación</h1>
      <div className="row">
        <div className="col-12 col-md-4 info-direccion">
          <div>
            <span>
              Lima<br></br>
            </span>{" "}
            Av. Javier Prado Este 410<br></br> Cercado de Lima 15046<br></br>
            Perú
          </div>
          <div className="mas-info">
            <span className="d-inline-flex">Teléfono</span> +51 962-711-999
          </div>
        </div>
        <div className="col-12 col-md-8 info-mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.294720548485!2d-77.03194765007589!3d-12.091964891395174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c905c8fcfc69%3A0x522650b2339a357d!2sInk-Grid!5e0!3m2!1ses!2spe!4v1580935333207!5m2!1ses!2spe"
            width="600"
            height="450"
            allowfullscreen=""
            className=""
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Ubicacion;
