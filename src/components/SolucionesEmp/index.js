/** @format */

import React, { useState } from "react";
import "./style.css";
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

const SolucionesEmp = props => {
  const [educacion, setEducacion] = useState(false);
  const [estado, setEstado] = useState("ver más");
  const activeEducation = () => {
    setEducacion(!educacion);
    if (estado === "ver más") {
      setEstado("ver menos");
    } else {
      setEstado("ver más");
    }
  };

  return (
    <section className="solucioneEmpresariales">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center px-5">
            <img
              src="https://portadas.gargano.uy/portadas/portadas-gargano-ciudad-perfecta.jpg"
              className="img-portada"
            />
            <div
              className="portada-texto"
              style={{
                backgroundColor: "rgba(0, 114, 255, 0.5)",
                // opacity: 0.6,
                // width: '400px',
                height: "300px",
                color: "#ffffff",
                padding: "1em",
                textAlign: "initial",
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                left: "10%",
                top: "0"
              }}
            >
              <h3 className="section-heading">
                Diseñamos y Operamos Soluciones Empresariales para mejorar tus
                Activos Organizacionales
              </h3>
              <br></br>
              <div
                style={{
                  backgroundColor: "#ffffff",
                  width: "50%",
                  height: "10px"
                }}
              ></div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="container">
          <div
            style={{
              // paddingLeft: '6em',
              display: "flex",
              color: "#0062cc",
              justifyContent: "center",
              textAlign: "initial"
            }}
            className="row"
          >
            <div className="col-12 col-lg-6 text-left pl-1 pl-sm-5 EducacionS">
              <p className=" section-subheading">
                <DoneOutlineIcon /> <span> Gestión del talento humano.</span>
              </p>

              <p className="section-subheading">
                <DoneOutlineIcon /> Diseño organizacional.
              </p>
              <p className="section-subheading">
                <DoneOutlineIcon /> Gestión de los grupos de interés.
              </p>
              <p className="section-subheading">
                <DoneOutlineIcon /> Inversión y finanzas.
              </p>
              <p className="section-subheading">
                <DoneOutlineIcon /> Gestión del ecosistema.
              </p>
              <p className="section-subheading">
                <DoneOutlineIcon /> Liderazgo y gobernanza.
              </p>
              <p className="section-subheading">
                <DoneOutlineIcon /> Habilitación de la fuerza laboral.
              </p>
              <p className="section-subheading">
                <DoneOutlineIcon /> Gest. inteligente y adap. de
                procesos.
              </p>
              <p className="section-subheading">
                <DoneOutlineIcon /> Estándares y maduréz de los
                equipos. de gestión.
              </p>
            </div>

            <div className="col-12 col-lg-6">
              <img
                // width='500'
                // height='350'
                src="http://techtobase10.com/wp-content/uploads/2018/05/ind4-0-01.png"
                className="img-industria"
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: "1em" }}>
        <button
          onClick={() => activeEducation()}
          type="button"
          class="btn btn-ver p-3"
        >
          {estado}
        </button>
      </div>
      {educacion && (
        <section>
          <div className="container ">
            <div className="row">
              <div
                style={{
                  position: "relative",
                  height: "200px"
                }}
                className="col-lg-12 text-center"
              >
                <div
                  style={{
                    backgroundColor: "rgba(0, 114, 255)",
                    // opacity: 0.6,
                    width: "200px",
                    height: "100px",
                    color: "#ffffff",
                    padding: "1em",
                    borderTopRightRadius: "2em",
                    borderBottomRightRadius: "2em",
                    textAlign: "initial",
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    left: "0%",
                    top: "30%"
                  }}
                >
                  <h3 className="section-heading">{props.datas.title}</h3>
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      width: "80%",
                      height: "10px"
                    }}
                  ></div>
                </div>
              </div>
              <div
                style={
                  props.datas.title === "MINERIA"
                    ? {
                      backgroundImage:
                        "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZhd44ggtMy4yp0sATCvGqulYZpakJgg8TPGTJGNNXNUNkWqh&s')",
                      backgroundColor: "#cccccc",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                      position: "relative",
                      height: "300px"
                    }
                    : {
                      backgroundImage:
                        "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZhd44ggtMy4yp0sATCvGqulYZpakJgg8TPGTJGNNXNUNkWqh&s')",
                      backgroundColor: "#cccccc",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                      position: "relative",
                      // height: "200px"
                    }
                }
                className="col-lg-12 text-center"
              >

                {/* inicion nombre INSIGHTS */}
                <div
                  style={{
                    backgroundColor: "rgba(0, 114, 255, 0.5)",
                    // opacity: 0.6,
                    width: "200px",
                    height: "100px",
                    color: "#ffffff",
                    padding: "1em",
                    textAlign: "initial",
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    left: "0%",
                    top: "30%"
                  }}
                >
                  <h3 className="section-heading">INSIGHTS</h3>
                  <br></br>
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      width: "50%",
                      height: "10px"
                    }}
                  ></div>
                </div>

                {/* fin nombre INSIGHTS */}
                <div
                  style={{
                    width: "80%",
                    paddingTop: "2em",
                    paddingBottom: "2em",
                    left: "22%",
                    color: "#ffffff",
                    height: "100%",
                    textAlign: "initial",
                    position: "relative",
                    backgroundColor: "black"
                  }}
                >
                  <div className="container">
                    <div className="row" style={{ alignItems: "center" }}>
                      <div className="col-12 col-sm-4">
                        {props.datas.insights1.map((data, index) => (
                          <p className="section-subh" key={index}>
                            <i className="fas fa-check"> </i> {data}
                          </p>
                        ))}
                      </div>
                      <div className="col-12 col-sm-4">
                        {props.datas.insights2.map((data, index) => (
                          <p className=" section-subh" key={index}>
                            <i className="fas fa-check"> </i> {data}
                          </p>
                        ))}
                      </div>
                      <div className="col-12 col-sm-4">
                        {props.datas.insights3.map((data, index) => (
                          <p className=" section-subh" key={index}>
                            <i className="fas fa-check"> </i> {data}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>




              </div>
            </div>
            <br></br>
            <br></br>

            {/*  */}
            {/*  */}
            <div className="container">
              <div className="row">
                {/*  */}
                {/*  */}
                <div className="col col-12 col-sm-6 col-md-4">
                  <div className="card-education">
                    <div className="picture">
                      <img className="img-fluid" src="https://www.fundaciontelefonica.com.ar/wp-content/uploads/2016/04/ITSitio_210316_Img_Bilinkis-1-1.png" />
                    </div>
                    <div className="team-content">
                      <h3 className="name">AO</h3>
                    </div>
                    <ul className="lista">
                      <li>
                        {props.datas.AO.map((data, index) => (
                          <p className="card-text pr-5" key={index}>
                           <i className="fas fa-check"> </i>  {data}
                          </p>
                        ))}
                      </li>

                    </ul>
                  </div>
                </div>

                {/*  */}
                {/*  */}
               

                <div className="col col-12 col-sm-6 col-md-4">
                  <div className="card-education">
                    <div className="picture">
                      <img className="img-fluid" src="https://www.fundaciontelefonica.com.ar/wp-content/uploads/2016/04/ITSitio_210316_Img_Bilinkis-1-1.png" />
                    </div>
                    <div className="team-content">
                      <h3 className="name">AE</h3>
                    </div>
                    <ul className="lista">
                      <li>
                        {props.datas.AE.map((data, index) => (
                          <p className="card-text pr-5" key={index}>
                            <i className="fas fa-check"> </i> {data}
                          </p>
                        ))}
                      </li>

                    </ul>
                  </div>
                </div>

                {/*  */}
                {/*  */}
                <div className="col col-12 col-sm-6 offset-sm-3 offset-md-0 col-md-4">
                  <div className="card-education">
                    <div className="picture">
                      <img className="img-fluid" src="https://www.fundaciontelefonica.com.ar/wp-content/uploads/2016/04/ITSitio_210316_Img_Bilinkis-1-1.png" />
                    </div>
                    <div className="team-content">
                      <h3 className="name">AR</h3>
                    </div>
                    <ul className="lista">
                      <li>
                        {props.datas.AR.map((data, index) => (
                          <p className="card-text pr-5" key={index}>
                           <i className="fas fa-check"> </i>  {data}
                          </p>
                        ))}
                      </li>

                    </ul>
                  </div>
                </div>
                {/*  */}
                {/*  */}
              </div>
            </div>
          </div>
          <div style={{ padding: "1em" }}>
            <button type="button" className="btn btn-primary btn-ver">
              contactar
            </button>
          </div>
        </section>
      )}
    </section>
  );
};

export default SolucionesEmp;
