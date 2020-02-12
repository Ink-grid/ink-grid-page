import React, { useEffect } from "react";
import "./style.css";
import Ubicacion from "./../Ubicacion";
import logo from "../../../src/logo.png";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import nevado from "../../../src/img/nevado.png";
import cpa from "../../../src/img/cpa.png";
import expro from "../../../src/img/expro.png";
const Carousel = props => {
  useEffect(() => {
    document.getElementById("Idmenu").classList.remove("cambiar-fondo-menu");
    document.getElementById("logo-dark").src = logo;
    document.getElementById("redes-contacto").classList.remove("mostrar");
  }, []);
  return (
    <React.Fragment>
      {/* Portada Home */}
      <div className="portada-home">
        <img
          src="https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Ink Grid"
        />
        <div className="row contenedor-texto container">
          <div className="col-10 col-md-6 pl-3 pl-lg-5 py-4 border-contenido my-0">
            <div className="container text-left ">
              <span>Bienvenido a </span>
              <h1 className="text-left text-light">Ink Grid </h1>
              <p className="d-none d-sm-block contenido-texto text-justify pt-3 pl-3">
                Trabajamos con las más exitosas compañías de Perú para conducir
                un crecimiento de largo plazo, transformar las operaciones y las
                organizaciones, así como nutrir el talento
              </p>
            </div>
          </div>
          {/*  */}
          {/* <div className="logo d-none d-xl-block col-10 col-md-5">
            <img src={logo} className="img-fluid" />

          </div> */}
          {/*  */}

          <div className="content col-12 col-sm-10 d-none  mover-texto">
            <div className="visible">
              <p className="posicionarTE">Te </p>
              <ul className="content-ul">
                <li className="content-li">enseñamos</li>
                <li className="content-li">capacitamos</li>
                <li className="content-li">motivamos</li>
                <li className="content-li">valoramos ...</li>
              </ul>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      {/* Portada Home */}

      {/*  */}
      <div className="descripcion1 container p-2 py-5 text-center bg-ligth text-dark">
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y
        archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
        las industrias desde el año 1500, cuando un impresor (N. del T. persona
        que se dedica a la imprenta) desconocido usó una galería de textos y los
        mezcló de tal manera que logró hacer un libro de textos especimen. No
        sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno
        en documentos electrónicos, quedando esencialmente igual al original.
        Fue popularizado en los 60s con la creación de las hojas "Letraset", las
        cuales contenian pasajes de Lorem Ipsum, y más recientemente con
        software de autoedición, como por ejemplo Aldus PageMaker, el cual
        incluye versiones de Lorem Ipsum
      </div>

      <div className="datos-genericos container py-3">
        <div className="row">
          <div className="datosEspecificos col-12 col-md-4">
            <h1 className="p-3 text-center">+10</h1>
            <p>años</p>
            <span>de presencia de InkGrid en Perú</span>
            <div className="linea lineaD d-none d-md-block"></div>
          </div>

          <div className="datosEspecificos col-12 col-md-4">
            <h1 className="py-3 text-center">+290</h1>
            <p>proyectos</p>
            <span>emprendidos por Ink Grid en Perú</span>
          </div>
          <div className="datosEspecificos col-12 col-md-4 text-center">
            <h1 className="p-3 text-center">+70</h1>
            <p>por ciento</p>
            <span>de las grandes corporaciones de Perú servidas</span>
            <div className="linea lineaI d-none d-md-block"> </div>
          </div>
        </div>
      </div>

      <div className="servicios p-3 m-5">
        Diseñamos y Operamos Soluciones Empresariales para mejorar tus Activos
        Organizacionales
      </div>

      {/*  educacion Plus */}

      <div className="container-fluid">
        <div
          style={{
            display: "flex",
            color: "#0062cc",
            justifyContent: "center",
            textAlign: "initial"
          }}
          className="row"
        >
          <div className="col-12 col-md-5 m-4 sobresalir">
            <p className=" section-subheading">
              <DoneOutlineIcon /> Gestión del talento humano
            </p>
          </div>
          <div className="col-12 col-md-5 m-4 sobresalir">
            <p className="section-subheading">
              <DoneOutlineIcon /> Diseño organizacional.
            </p>
          </div>
          <div className="col-12 col-md-5 m-4 sobresalir">
            <p className="section-subheading">
              <DoneOutlineIcon /> Gestión de los grupos de interés.
            </p>
          </div>
          <div className="col-12 col-md-5 m-4 sobresalir">
            <p className="section-subheading">
              <DoneOutlineIcon /> Inversión y finanzas.
            </p>
          </div>
          <div className="col-12 col-md-5 m-4 sobresalir">
            <p className="section-subheading">
              <DoneOutlineIcon /> Gestión del ecosistema.
            </p>
          </div>
          <div className="col-12 col-md-5 m-4 sobresalir">
            <p className="section-subheading">
              <DoneOutlineIcon /> Liderazgo y gobernanza.
            </p>
          </div>
          <div className="col-12 col-md-5 m-4 sobresalir">
            <p className="section-subheading">
              <DoneOutlineIcon /> Habilitación de la fuerza laboral.
            </p>
          </div>
          <div className="col-12 col-md-5 m-4 sobresalir">
            <p className="section-subheading">
              <DoneOutlineIcon /> Gest. inteligente y adap. de procesos.
            </p>
          </div>
          <div className="col-12 col-md-5 m-4 sobresalir">
            <p className="section-subheading">
              <DoneOutlineIcon /> Estándares y maduréz de los equipos. de
              gestión.
            </p>
          </div>
        </div>
      </div>

      {/*  */}
      <div className=" nosotros my-5 mx-2">
        <div className="container text-left">
          <h1>Ya confían en nosotros</h1>
          <hr className="w-100"></hr>   
          <div className="py-4 ml-2 row my-3">
            <div className="offset-sm-1  offset-md-1 col-4 col-sm-3 col-md-2">
              <img className="logos" src={nevado} alt="Ink-Grid" />
            </div>
            <div className="offset-sm-1 offset-md-2  col-4 col-sm-3 col-md-2">
              <img className="logos" src={expro} alt="Ink-Grid" />
            </div>
            <div className="offset-sm-1 offset-md-2 col-4 col-sm-3 col-md-2">
              <img className="logos img-fluid" src={cpa} alt="Ink-Grid" />
            </div>
            
          </div>
          <hr className="w-100"></hr> 
        </div>
      </div>
      <Ubicacion />
    </React.Fragment>
  );
};

export default Carousel;
