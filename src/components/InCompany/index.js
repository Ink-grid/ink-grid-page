/** @format */

import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import logoB from '../../../src/logo-dark.png';

import './style.css';

const InCompany = () => {
	useEffect(() => {
		document.getElementById('Idmenu').classList.add('cambiar-fondo-menu');
		document.getElementById('logo-dark').src = logoB;
		//document.getElementById("redes-contacto").classList.add("mostrar");
	}, []);

	return (
		<div className='in-company'>
			<div className="banner-padre">
				<div className='banner'>
					<img
						className='img-fluid'
						src='https://discfactory.es/wp-content/uploads/2019/05/slide-incompany.jpg'
						alt='Ink-Grid'
					/>
				</div>
				<div className="contenido-padre">
					<div className='titulo-in my-5'>
						<h1>
							FORMACIÓN <span>IN COMPANY</span>
						</h1>
					</div>
					<hr className='w-100 d-none mostrarLinea'></hr>
					<div className='mb-5 mt-1'>
						<p className='text-center container mt-5'>
							El único programa de formación organizacional a tu medida, dirigido
							para las empresas que quieran liderar el cambio y buscan un
							crecimiento interno sostenible.
						</p>
					</div>
				</div>
			</div>

			{/*  */}
			<div className='objetivos'>
				<div className='container'>
					<h2>OBJETIVO</h2>
					<p>
						Integrar una oferta de formación Empresarial y entrenamiento
						integral, con rigor en la actualización de temas, con aplicaciones
						de casos de usos especializados según demanda en contextos muy
						ajustados y con un alto valor añadido digital.
					</p>
				</div>
			</div>

			{/*  */}

			{/*  */}
			<section class='temas  text-center'>
				<h1>Temas estratégicos, tácticos y operacionales</h1>
				<div class='container'>
					<div class='row'>
						<div class='offset-1 offset-sm-0 col-10 col-sm-6 col-lg-4'>
							<img src="https://img.icons8.com/dusk/64/000000/augmented-reality.png" />
							<div class='mx-auto mb-5 mb-lg-0 mb-lg-3'>
								<h3>TRANSFORMACIÓN DIGITAL</h3>
								<hr className="w-100 d-block d-sm-none"></hr>
							</div>
						</div>
						<div class='offset-1 offset-sm-0 col-10 col-sm-6 col-lg-4'>
							<img src="https://img.icons8.com/dusk/64/000000/strategy-board.png" />
							<div class='mx-auto mb-5 mb-lg-0 mb-lg-3'>
								<h3>DIRECCIÓN ESTRATÉGICA DE VENTAS Y CULTURA CRM</h3>
								<hr className="w-100 d-block d-sm-none"></hr>
							</div>
						</div>
						<div class='offset-1 offset-sm-0 col-10 col-sm-6 col-lg-4'>
							<img src="https://img.icons8.com/dusk/64/000000/phonelink-lock.png" />
							<div class='mx-auto mb-5 mb-lg-0 mb-lg-3'>
								<h3>CYBERSECURITY Y ETHICAL HACKING</h3>
								<hr className="w-100 d-block d-sm-none"></hr>
							</div>
						</div>
						<div class='offset-1 offset-sm-0 col-10 col-sm-6 col-lg-4'>
							<img src="https://img.icons8.com/color/96/000000/project.png" />
							<div class='mx-auto mb-5 mb-lg-0 mb-lg-3'>
								<h3>DIRECCIÓN DE PROYECTOS Y GESTIÓN DE PORTAFOLIOS</h3>
								<hr className="w-100 d-block d-sm-none"></hr>
							</div>
						</div>
						<div class='offset-1 offset-sm-0 col-10 col-sm-6 col-lg-4'>
							<img src="https://img.icons8.com/nolan/96/google-analytics-logo.png" />
							<div class='mx-auto mb-5 mb-lg-0 mb-lg-3'>
								<h3>CIENCIA DE DATOS Y BUSINESS ANALYTICS </h3>
								<hr className="w-100 d-block d-sm-none"></hr>
							</div>
						</div>
						<div class='offset-1 offset-sm-0 col-10 col-sm-6 col-lg-4'>
							<img src="https://img.icons8.com/dusk/64/000000/process.png" />
							<div class='mx-auto mb-5 mb-lg-0 mb-lg-3'>
								<h3>RPA DENTRO DE LA GESTIÓN Y GOBIERNO DE LOS PROCESOS</h3>
								<hr className="w-100 d-block d-sm-none"></hr>
							</div>
						</div>
						<div class='offset-1 offset-sm-0 offset-lg-2 col-10 col-sm-6 col-lg-4'>
							<img src="https://img.icons8.com/dusk/64/000000/book-shelf.png" />
							<div class='mx-auto mb-5 mb-lg-0 mb-lg-3'>
								<h3>
									GESTIÓN DEL CONOCIMIENTO, LIDERAZGO Y CUADRO DE MANDO EN LA
									DIRECCIÓN DEL TALENTO HUMANO
								</h3>
								<hr className="w-100 d-block d-sm-none"></hr>
							</div>
						</div>
						<div class='offset-1 offset-sm-0 col-10 col-sm-6 col-lg-4'>
							<img src="https://img.icons8.com/bubbles/100/000000/omnichannel.png" />
							<div class='mx-auto mb-5 mb-lg-0 mb-lg-3'>
								<h3>BLOCKCHAIN Y MARKETING OMNICANALL</h3>
								<hr className="w-100 d-block d-sm-none"></hr>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default InCompany;
