import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import logoB from "../../../src/logo-dark.png";

import "./style.css";

const InCompany = () => {
  useEffect(() => {
    document.getElementById("Idmenu").classList.add("cambiar-fondo-menu");
    document.getElementById("logo-dark").src = logoB;
    document.getElementById("redes-contacto").classList.add("mostrar");
  }, []);

  return (
    <div className="in-company">
      <div className="banner">
        <img
          className="img-fluid"
          src="https://discfactory.es/wp-content/uploads/2019/05/slide-incompany.jpg"
          alt="Ink-Grid"
        />
      </div>
      <div className="titulo-in ">
        <h1>
          FORMACIÓN <span>IN COMPANY</span>
        </h1>
      </div>
    <div className="contenido-padre">
      <p className="mb-2 mt-1 contenido-descr text-center container">
         El único programa de formación
        organizacional a tu medida, dirigido para las empresas que quieran
        liderar el cambio y buscan un crecimiento interno sostenible.
      </p>
      </div>

      
    </div>
  );
};

export default InCompany;
