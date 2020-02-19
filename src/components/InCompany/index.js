/** @format */

import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import logoB from '../../../src/logo-dark.png';

import './style.css';

const InCompany = () => {
	const data = [
		{
			url: 'data:image/jpeg;base64,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',
			nombre: 'Afcha , Sergio',
			especialidad: 'Profesor / Investigador',
			correo: 'safcha@pucp.pe'
		},
		{
			url: 'https://static.t13.cl/images/sizes/1200x675/1516722239-gerardo-varela-1.jpg',
			nombre: 'Afcha , Sergio',
			especialidad: 'Profesor / Investigador',
			correo: 'safcha@pucp.pe'
		},
		{
			url: 'data:image/jpeg;base64,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',
			nombre: 'Afcha , Sergio',
			especialidad: 'Profesor / Investigador',
			correo: 'safcha@pucp.pe'
		},
		{
			url: 'https://static.t13.cl/images/sizes/1200x675/1516722239-gerardo-varela-1.jpg',
			nombre: 'Afcha , Sergio',
			especialidad: 'Profesor / Investigador',
			correo: 'safcha@pucp.pe'
		}
	]

	const temaTD = [
        {
            Nsesion: 'Sesión 1',
            tema: 'Gestión Humana por Competencias'
        },
        {
            Nsesion: 'Sesión 2',
            tema: 'Gestión Humana por Competencias'
        },
        {
            Nsesion: 'Sesión 3',
            tema: 'Gestión Humana por Competencias'
        },
        {
            Nsesion: 'Sesión 4',
            tema: 'Gestión Humana por Competencias'
        },
        {
            Nsesion: 'Sesión 3',
            tema: 'Gestión Humana por Competencias'
        },
        {
            Nsesion: 'Sesión 4',
            tema: 'Gestión Humana por Competencias'
        }
    ]

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
			<div className="contenedor  px-5">
				<div className='objetivos '>
					<div className='container'>
						<h2>OBJETIVO</h2>
						<p>
							Integrar una oferta de formación Empresarial y entrenamiento
							integral, con rigor en la actualización de temas, con aplicaciones
							de casos de usos especializados según demanda en contextos muy
							ajustados y con un alto valor añadido digital.
					</p>
					</div>
					<hr className="w-100"></hr>
				</div>

				{/*  */}

				{/*  */}
				<section class='temas  text-center bg-light'>
					<h1>Temas estratégicos, tácticos y operacionales</h1>
					<div class='container mb-5 pb-5'>
						<div class='row'>
							<div class='offset-1 offset-sm-0 col-10 col-sm-6 col-lg-4'>
								<Link to={{
									pathname: 'cursos/modulos/transformacion-digital',
									state: {temaTD}
								}}>
									<img src="https://img.icons8.com/material-rounded/64/000000/change.png" />
									<div class='mx-auto mb-5 mb-lg-0 mb-lg-3'>
										<h3>TRANSFORMACIÓN DIGITAL</h3>
										<hr className="w-100 d-block d-sm-none"></hr>
									</div>
								</Link>
							</div>
							<div class='offset-1 offset-sm-0 col-10 col-sm-6 col-lg-4'>
							<Link to="cursos/modulos/direccion-estrategica">
								<img src="https://img.icons8.com/ios-filled/50/000000/strategy-board.png" />
								<div class='mx-auto mb-5 mb-lg-0 mb-lg-3'>
									<h3>DIRECCIÓN ESTRATÉGICA DE VENTAS Y CULTURA CRM</h3>
									<hr className="w-100 d-block d-sm-none"></hr>
								</div>
								</Link>
							</div>

							<div class='offset-1 offset-sm-0 col-10 col-sm-6 col-lg-4'>
							<Link to="cursos/modulos/cybersecurity">
								<img src="https://img.icons8.com/wired/64/000000/hacking.png" />
								<div class='mx-auto mb-5 mb-lg-0 mb-lg-3'>
									<h3>CYBERSECURITY Y ETHICAL HACKING</h3>
									<hr className="w-100 d-block d-sm-none"></hr>
								</div>
								</Link>
							</div>
							<div class='offset-1 offset-sm-0 col-10 col-sm-6 col-lg-4'>
							<Link to="cursos/modulos/gestion-portafolio">
								<img src="https://img.icons8.com/material-rounded/48/000000/project.png" />
								<div class='mx-auto mb-5 mb-lg-0 mb-lg-3'>
									<h3>DIRECCIÓN DE PROYECTOS Y GESTIÓN DE PORTAFOLIOS</h3>
									<hr className="w-100 d-block d-sm-none"></hr>
								</div>
								</Link>
							</div>
							<div class='offset-1 offset-sm-0 col-10 col-sm-6 col-lg-4'>
								<Link to="cursos/modulos/ciencia-datos">
								<img src="https://img.icons8.com/ios/50/000000/google-analytics-logo.png" />
								<div class='mx-auto mb-5 mb-lg-0 mb-lg-3'>
									<h3>CIENCIA DE DATOS Y BUSINESS ANALYTICS </h3>
									<hr className="w-100 d-block d-sm-none"></hr>
								</div>
								</Link>
							</div>
							<div class='offset-1 offset-sm-0 col-10 col-sm-6 col-lg-4'>
								<Link to="cursos/modulos/rpa">
								<img src="https://img.icons8.com/wired/64/000000/process.png" />
								<div class='mx-auto mb-5 mb-lg-0 mb-lg-3'>
									<h3>RPA DENTRO DE LA GESTIÓN Y GOBIERNO DE LOS PROCESOS</h3>
									<hr className="w-100 d-block d-sm-none"></hr>
								</div>
								</Link>
							</div>
							<div class='offset-1 offset-sm-0 offset-lg-2 col-10 col-sm-6 col-lg-4'>
								<Link to="cursos/modulos/talento-humano">
								<img src="https://img.icons8.com/pastel-glyph/64/000000/books.png" />
								<div class='mx-auto mb-5 mb-lg-0 mb-lg-3'>
									<h3>
										GESTIÓN DEL CONOCIMIENTO, LIDERAZGO Y CUADRO DE MANDO EN LA
										DIRECCIÓN DEL TALENTO HUMANO
								</h3>
									<hr className="w-100 d-block d-sm-none"></hr>
								</div>
								</Link>
							</div>
							<div class='offset-1 offset-sm-0 col-10 col-sm-6 col-lg-4'>
								<Link to="cursos/modulos/omnicanall">
								<img src="https://img.icons8.com/carbon-copy/100/000000/omnichannel.png" />
								<div class='mx-auto mb-5 mb-lg-0 mb-lg-3'>
									<h3>BLOCKCHAIN Y MARKETING OMNICANALL</h3>
									<hr className="w-100 d-block d-sm-none"></hr>
								</div>
								</Link>
							</div>
						</div>
					</div>
				</section>

				<section className="mt-5 text-center nuestros-ponentes">
					<h1>Nuestro Docentes</h1>
					<div class='row container'>
						{/*  */}

						{data.map((profe, index) => (
							<div className="col-12 col-sm-6 col-md-4">
								<div>
									<img src={profe.url} alt="Ink Grid" />
								</div>
								<div className="datos">
									<h1>{profe.nombre}</h1>
									<h2>{profe.especialidad}</h2>
									<span>{profe.correo}</span>
								</div>
							</div>
						))
						}


					</div>
				</section>
			</div>
		</div>
	);
};

export default InCompany;
