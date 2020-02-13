/** @format */

import React, { useEffect } from 'react';
import './style.css';
import Ubicacion from './../Ubicacion';
import logo from '../../../src/logo.png';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import nevado from '../../../src/img/nevado.png';
import cpa from '../../../src/img/cpa.png';
import expro from '../../../src/img/expro.png';
const Carousel = props => {
	useEffect(() => {
		document.getElementById('Idmenu').classList.remove('cambiar-fondo-menu');
		document.getElementById('logo-dark').src = logo;
		//document.getElementById('redes-contacto').classList.remove('mostrar');
	}, []);
	return (
		<React.Fragment>
			{/* Portada Home */}
			<div className='portada-home bg-dark'>
				<div
					style={{
						position: 'absolute',
						bottom: '0%',
						right: '0%',
						height: '70%',
						width: '50%',
						backgroundSize: 'cover',
						backgroundImage:
							"url('https://www.mckinsey.com//pe/~/media/McKinsey/Locations/South%20America/Peru/Overview/Peru_Hero_GettyImages-665404151_1080.ashx')"
					}}></div>
				{/* <img
					width='200'
					src='https://www.mckinsey.com//pe/~/media/McKinsey/Locations/South%20America/Peru/Overview/Peru_Hero_GettyImages-665404151_1080.ashx'
					alt='Ink Grid'
        /> */}

				<div style={{ position: 'absolute', bottom: '10%' }}>
					<div className='row contenedor-texto container'>
						<div className='col-10 col-md-6 pl-3 pl-lg-5 py-4 border-contenido my-0'>
							<div className='container text-left '>
								<span>Bienvenido a </span>
								<h1 className='text-left text-light'>Ink Grid </h1>
								<p
									style={{ fontSize: '20px' }}
									className='d-none d-sm-block contenido-texto text-justify pt-3 pl-3'>
									Trabajamos con las más exitosas compañías de Perú para
									conducir un crecimiento de largo plazo, transformar las
									operaciones y las organizaciones, así como nutrir el talento.
								</p>
							</div>
						</div>
						<div className='content col-12 col-sm-10 d-none  mover-texto'>
							<div className='visible'>
								<p className='posicionarTE'>Te </p>
								<ul className='content-ul'>
									<li className='content-li'>enseñamos</li>
									<li className='content-li'>capacitamos</li>
									<li className='content-li'>motivamos</li>
									<li className='content-li'>valoramos ...</li>
								</ul>
							</div>
						</div>
						{/*  */}
					</div>
				</div>
			</div>
			{/* Portada Home */}

			{/*  */}
			<div className='descripcion1 container p-2 py-5 text-center bg-ligth text-dark'>
				Desde que abrimos nuestra oficina en Lima en 2006, hemos trabajado con
				grandes compañías y firmas emprendedoras de rápido crecimiento a lo
				largo de todos los sectores clave – incluyendo banca, bienes de consumo
				y recursos naturales, trayendo un expertise profundo en estrategia de
				crecimiento, mejora operativa, transformación organizacional, marketing
				y ventas, y digital. También ayudamos a numerosas iniciativas pro bono
				que trabajan con emprendedores sociales, fortaleciendo instituciones
				educativas en matemáticas, ciencias y artes, y apoyando el
				empoderamiento de la mujer.
			</div>

			<div className='datos-genericos container py-3'>
				<div className='row'>
					<div className='datosEspecificos col-12 col-md-4'>
						<h1 className='p-3 text-center'>+10</h1>
						<p>años</p>
						<span>de presencia de InkGrid en Perú</span>
						<div className='linea lineaD d-none d-md-block'></div>
					</div>

					<div className='datosEspecificos col-12 col-md-4'>
						<h1 className='py-3 text-center'>+290</h1>
						<p>proyectos</p>
						<span>emprendidos por Ink Grid en Perú</span>
					</div>
					<div className='datosEspecificos col-12 col-md-4 text-center'>
						<h1 className='p-3 text-center'>+70</h1>
						<p>por ciento</p>
						<span>de las grandes corporaciones de Perú servidas</span>
						<div className='linea lineaI d-none d-md-block'> </div>
					</div>
				</div>
			</div>

			<div className='servicios p-3 m-5'>
				Diseñamos y Operamos Soluciones Empresariales para mejorar tus Activos
				Organizacionales
			</div>

			{/*  educacion Plus */}

			<div className='container-fluid'>
				<div
					style={{
						display: 'flex',
						color: '#0062cc',
						justifyContent: 'center',
						textAlign: 'initial'
					}}
					className='row'>
					<div className='col-12 col-md-5 m-4 sobresalir'>
						<p className=' section-subheading'>
							<DoneOutlineIcon /> Gestión del talento humano
						</p>
					</div>
					<div className='col-12 col-md-5 m-4 sobresalir'>
						<p className='section-subheading'>
							<DoneOutlineIcon /> Diseño organizacional.
						</p>
					</div>
					<div className='col-12 col-md-5 m-4 sobresalir'>
						<p className='section-subheading'>
							<DoneOutlineIcon /> Gestión de los grupos de interés.
						</p>
					</div>
					<div className='col-12 col-md-5 m-4 sobresalir'>
						<p className='section-subheading'>
							<DoneOutlineIcon /> Inversión y finanzas.
						</p>
					</div>
					<div className='col-12 col-md-5 m-4 sobresalir'>
						<p className='section-subheading'>
							<DoneOutlineIcon /> Gestión del ecosistema.
						</p>
					</div>
					<div className='col-12 col-md-5 m-4 sobresalir'>
						<p className='section-subheading'>
							<DoneOutlineIcon /> Liderazgo y gobernanza.
						</p>
					</div>
					<div className='col-12 col-md-5 m-4 sobresalir'>
						<p className='section-subheading'>
							<DoneOutlineIcon /> Habilitación de la fuerza laboral.
						</p>
					</div>
					<div className='col-12 col-md-5 m-4 sobresalir'>
						<p className='section-subheading'>
							<DoneOutlineIcon /> Gest. inteligente y adap. de procesos.
						</p>
					</div>
					<div className='col-12 col-md-5 m-4 sobresalir'>
						<p className='section-subheading'>
							<DoneOutlineIcon /> Estándares y maduréz de los equipos. de
							gestión.
						</p>
					</div>
				</div>
			</div>

			{/*  */}
			<div className=' nosotros my-5 mx-2'>
				<div className='container text-left'>
					<h1>Ya confían en nosotros</h1>
					<hr className='w-100'></hr>
					<div className='py-4 ml-2 row my-3'>
						<div className='offset-sm-1  offset-md-1 col-4 col-sm-3 col-md-2'>
							<img className='logos' src={nevado} alt='Ink-Grid' />
						</div>
						<div className='offset-sm-1 offset-md-2  col-4 col-sm-3 col-md-2'>
							<img className='logos' src={expro} alt='Ink-Grid' />
						</div>
						<div className='offset-sm-1 offset-md-2 col-4 col-sm-3 col-md-2'>
							<img className='logos img-fluid' src={cpa} alt='Ink-Grid' />
						</div>
					</div>
					<hr className='w-100'></hr>
				</div>
			</div>
			<Ubicacion />
		</React.Fragment>
	);
};

export default Carousel;
