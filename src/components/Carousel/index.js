import React from 'react';
import './style.css';

import logo from "../../../src/logo.png";
import logoB from "../../../src/logo-dark.png";


const Carousel = props => {
	return (
		<React.Fragment>
			<div className="portada-home">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF3Fr2Ph9--j7D_a78tvqlJLQ9eaLvNFev77TDPqRpw6iH-y4U&s" alt="Ink Grid" />
        <div className="row contenedor-texto container">
          <div className="col-10 col-md-6 pl-3 pl-lg-5 py-4 border-contenido my-3">
            <div className="container text-left ">
              <span>Bienvenido a </span>
              <h1 className="text-left">Ink Grid </h1>
              <p className=" text-justify pt-3 pl-3">
                Trabajamos con las más exitosas compañías de Perú para conducir un crecimiento de largo plazo, transformar las operaciones y las organizaciones, así como nutrir el talento
            </p>
            </div>

          </div>
          {/*  */}
          <div className="logo d-none d-xl-block col-10 col-md-5">
            <img src={logo} className="img-fluid" />

          </div>
          {/*  */}

          <div className="content col-10 ">
            <div className="visible">
              <p className="posicionarTE">Te </p>
              <ul className="content-ul">
                <li className="content-li">enseñamos</li>
                <li className="content-li">capacitamos</li>
                <li className="content-li">motivamos</li>
                <li className="content-li">...</li>
              </ul>
            </div>
          </div>
          {/*  */}
        </div>
      </div>


		</React.Fragment>
	);
}

export default Carousel;