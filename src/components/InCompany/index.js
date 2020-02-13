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
			<section class='bg-light text-center'>
				<h1>Temas estratégicos, tácticos y operacionales</h1>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-4'>
							<div class='mx-auto mb-5 mb-lg-0 mb-lg-3'>
								<h3>TRANSFORMACIÓN DIGITAL</h3>
							</div>
						</div>
						<div class='col-lg-4'>
							<div class='mx-auto mb-5 mb-lg-0 mb-lg-3'>
								<h3>DIRECCIÓN ESTRATÉGICA DE VENTAS Y CULTURA CRM</h3>
							</div>
						</div>
						<div class='col-lg-4'>
							<div class='mx-auto mb-5 mb-lg-0 mb-lg-3'>
								<h3>CYBERSECURITY Y ETHICAL HACKING</h3>
							</div>
						</div>
						<div class='col-lg-4'>
							<div class='mx-auto mb-5 mb-lg-0 mb-lg-3'>
								<h3>DIRECCIÓN DE PROYECTOS Y GESTIÓN DE PORTAFOLIOS</h3>
							</div>
						</div>
						<div class='col-lg-4'>
							<div class='mx-auto mb-5 mb-lg-0 mb-lg-3'>
								<h3>CIENCIA DE DATOS Y BUSINESS ANALYTICS </h3>
							</div>
						</div>
						<div class='col-lg-4'>
							<div class='mx-auto mb-5 mb-lg-0 mb-lg-3'>
								<h3>RPA DENTRO DE LA GESTIÓN Y GOBIERNO DE LOS PROCESOS</h3>
							</div>
						</div>
						<div class='col-lg-4'>
							<div class='mx-auto mb-5 mb-lg-0 mb-lg-3'>
								<h3>
									GESTIÓN DEL CONOCIMIENTO, LIDERAZGO Y CUADRO DE MANDO EN LA
									DIRECCIÓN DEL TALENTO HUMANO
								</h3>
							</div>
						</div>
						<div class='col-lg-4'>
							<div class='mx-auto mb-5 mb-lg-0 mb-lg-3'>
								<h3>BLOCKCHAIN Y MARKETING OMNICANALL</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default InCompany;
