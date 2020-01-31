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

			<div className="descripcion1 container p-2 text-center bg-ligth text-dark">
				Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum
			</div>

			<div className="datos-genericos container py-3">
				<div className="row">
					<div className="datosEspecificos col-12 col-md-4">
						<h1 className="p-3 text-center">+10</h1>
						<p>años</p>
						<span>de presencia de InkGrid en Perú</span>
						<div className="linea lineaD d-none d-md-block">

						</div>
					</div>

					<div className="datosEspecificos col-12 col-md-4">
						<h1 className="py-3 text-center">+290</h1>
						<p>proyectos</p>
						<span>emprendidos por Ink Grid en Perú</span>
					</div>
					<div className="datosEspecificos col-12 col-md-4">
						<h1 className="p-3 text-center">+70</h1>
						<p>por ciento</p>
						<span>de las grandes corporaciones de Perú servidas</span>
						<div className="linea lineaI d-none d-md-block">

						</div>
					</div>

				</div>

			</div>

			<div className="nosotros">

				<div className="text-dark conocenos container">
					Conócenos
				</div>
				<div className="container py-3">
					<div className="row">
						{/* <div className="card-perfil col-12 col-sm-6 col-md-4 text-dark">
						<div class="header"></div>
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbQOKS2HZU0b8zemq9f4XxUfxvPc--OgRtzRaWR4W9cPNkqqJl&s"/>
							<h2>Gustavo Arrieta</h2><span>CEO</span>
							<p> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. </p>
						</div>
						<div className="card-perfil col-12 col-sm-6 col-md-4">
							
						</div> */}
						<div className="card-perfil col-12 col-md-4">

							<div id="card-user" >
								<div class="header">
								</div>
								<div class="avatar">
									<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbQOKS2HZU0b8zemq9f4XxUfxvPc--OgRtzRaWR4W9cPNkqqJl&s" alt="..." />
									<h5 className="text-center pb-3">Gustavo Arrieta</h5>
								</div>
								<p className="text-justify p-3 m-0"> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. </p>
							</div>

						</div>
					</div>

				</div>
			</div>



		</React.Fragment>
	);
}

export default Carousel;