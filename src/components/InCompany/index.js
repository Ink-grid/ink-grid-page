/** @format */

import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ModalIncopany from '../ModaIncopany/';
import logoB from '../../../src/logo-dark.png';

import './style.css';

const InCompany = () => {
	const data = [
		{
			url:
				'https://media-exp1.licdn.com/dms/image/C4E03AQGi4Ey6Z3XcUQ/profile-displayphoto-shrink_800_800/0?e=1587600000&v=beta&t=xN5NDU_m4u9q4xL8aNLoxCKLwx4LoG9ZDVn4uqgBHcs',
			nombre: 'Chacón , Victor',
			especialidad: 'Senior Consultant',
			correo: 'chacon.victor@gmail.com'
		},
		{
			url:
				'https://media-exp1.licdn.com/dms/image/C4E03AQHkcUlUZu-c1Q/profile-displayphoto-shrink_800_800/0?e=1587600000&v=beta&t=Ga3PWtlBW692kw29ndH9arRbR0Ytq81xPfxTiCEBc6M',
			nombre: 'Leandro , Marlon',
			especialidad: 'Cloud computing / IOT',
			correo: 'mleandro@hyperlegis.pe'
		},
		{
			url:
				'https://media-exp1.licdn.com/dms/image/C4E03AQHxOwNyfBRCyQ/profile-displayphoto-shrink_800_800/0?e=1587600000&v=beta&t=3KMF6lMCb_qqlIZD8uAZFx1W6bQ5ansUdpxOeF0mq5M',
			nombre: 'Nakandare , Danny',
			especialidad: 'Experto Agil',
			correo: 'dnakandare@gmail.com'
		},
		{
			url:
				'https://media-exp1.licdn.com/dms/image/C4E03AQEk0oFC70jXkA/profile-displayphoto-shrink_800_800/0?e=1587600000&v=beta&t=WYXkZWmZWyVPC9iEQZVI3ZUNojhrvRdDOE1mtF5rVE8',
			nombre: 'Menendez , Roger',
			especialidad: 'Ethical Hacking ',
			correo: 'roger.menendez20@gmail.com'
		},
		{
			url:
				'https://media-exp1.licdn.com/dms/image/C4E03AQHGdl15z9zm7w/profile-displayphoto-shrink_800_800/0?e=1587600000&v=beta&t=89bjZP_cq8xvIdw-5fNNgIzZJGKIt04W-OojcyT_Hvw',
			nombre: 'Vallejos , Jean Carlo',
			especialidad: 'Ciencia de datos / Business Analytics',
			correo: 'jcvallejos@indracompany.com'
		},
		{
			url:
				'https://media-exp1.licdn.com/dms/image/C4E03AQEm5gJXMly8kA/profile-displayphoto-shrink_800_800/0?e=1587600000&v=beta&t=3s9K5BDasmW2Q45lq6FZJRrgIDM6TaYBOknyherVptA',
			nombre: 'Alarcón , Enrique',
			especialidad: 'Transformacion Digital / Banca y Finanzas',
			correo: 'dnakandare@gmail.com'
		},
		{
			url:
				'https://media-exp1.licdn.com/dms/image/C4D03AQGD3_J0_gnecw/profile-displayphoto-shrink_800_800/0?e=1587600000&v=beta&t=fDfCG7aDjnr_Kb3vhX5-LYf9ppUFsSuaG8VZMiV-Myo',
			nombre: 'Castellanos, Marco',
			especialidad: 'Cyber Security',
			correo: 'marco_castellanos@hotmail.com'
		},
		{
			url:
				'https://media-exp1.licdn.com/dms/image/C4E03AQGuO9Cke0aEKQ/profile-displayphoto-shrink_800_800/0?e=1587600000&v=beta&t=X3Abj-xcV_v5an9_FIJmpQJcNXdd61bTiPleXvP6tgA',
			nombre: 'Limas, Gustavo',
			especialidad: 'B2B BUSINESS DEVELOPER',
			correo: 'limasgg@outlook.com'
		}
	];

	const dataModal = [
		{
			titulo: 'Formación In company',
			descri:
				'El único programa de formación organizacional a tu medida dirigido para las empresas que quieran liderar el cambio y buscan			un crecimiento interno sostenible.',
			href: '/InCompany',
			img:
				'https://firebasestorage.googleapis.com/v0/b/ink-grid.appspot.com/o/CALADO%20IN%20COMPANY.png?alt=media&token=dfc41592-0d83-41fd-9d5f-8a537e83bb5e'
		},
		{
			titulo: 'Transformación digital',
			//descri: 'El ',
			href: '/prueba',
			img:
				'https://firebasestorage.googleapis.com/v0/b/ink-grid.appspot.com/o/Transformación%20Digital.png?alt=media&token=bfd922c7-5dd1-44e5-9e5f-27db7829ea28',
			isLink: true
		},
		{
			titulo: 'Cybersecurity y Ethical Hacking',
			//descri: 'El ',
			href: '/prueba',
			img:
				'https://firebasestorage.googleapis.com/v0/b/ink-grid.appspot.com/o/Cybersecurity%20y%20ethical%20hacking.png?alt=media&token=6c8da4d4-536c-4853-b2b1-259c1cc66297',
			isLink: true
		},
		{
			titulo: 'Dirección de proyectos y gestión de portafolios',
			//descri: 'El ',
			href: '/prueba',
			img:
				'https://firebasestorage.googleapis.com/v0/b/ink-grid.appspot.com/o/Direcci%C3%B3n%20de%20proyectos%20y%20gesti%C3%B3n%20de%20portafolios.png?alt=media&token=2124dd36-4b02-467e-9c54-966e5f338161',
			isLink: true
		},
		{
			titulo: 'Dirección estratégica de ventas y cultura CRM',
			//descri: 'El ',
			href: '/prueba',
			img:
				'https://firebasestorage.googleapis.com/v0/b/ink-grid.appspot.com/o/Direcci%C3%B3n%20estrat%C3%A9gica%20de%20ventas%20y%20cultura%20CRM.png?alt=media&token=6f6076db-3bf4-4aa9-8972-7c3cdb4e9773',
			isLink: true
		},
		{
			titulo: 'Ciencia de datos y Business analytics',
			//descri: 'El ',
			href: '/prueba',
			img:
				'https://firebasestorage.googleapis.com/v0/b/ink-grid.appspot.com/o/Ciencia%20de%20datos%20y%20Business%20analytics.png?alt=media&token=dd52b688-571a-44d2-990e-c69b7aeb01a6',
			isLink: true
		},
		// },
		// {
		// 	titulo:
		// 		'Gestión del conocimiento, liderazgo y cuadro de mando en la dirección del talento humano.',
		// 	//descri: 'El ',
		// 	href: '/prueba',
		// 	img:
		// 		'https://firebasestorage.googleapis.com/v0/b/ink-grid.appspot.com/o/Gesti%C3%B3n%20del%20conocimiento%2C%20liderazgo%20y%20cuadro%20de%20mando%20en%20la%20direcci%C3%B3n%20del%20talento%20humano.png?alt=media&token=57394559-16f5-4f24-9969-502312039b7a'
		// },
		{
			titulo: 'RPA dentro de la gestión y gobierno de los procesos.',
			//descri: 'El ',
			href: '/prueba',
			img:
				'https://firebasestorage.googleapis.com/v0/b/ink-grid.appspot.com/o/RPA%20dentro%20de%20la%20gesti%C3%B3n%20y%20gobierno%20de%20los%20procesos.png?alt=media&token=d7165fd6-46e9-4af7-b106-be12f3e9a087',
			isLink: true
		},
		{
			titulo: 'Blockchain y marketing omnicanal.',
			//descri: 'El ',
			href: '/prueba',
			img:
				'https://firebasestorage.googleapis.com/v0/b/ink-grid.appspot.com/o/Blockchain%20y%20marketing%20omnicanal.png?alt=media&token=f6d3ad22-c4ea-4421-91d7-ae4568ac96b0',
			isLink: true
		}
	]

	const temasTD = [
		{
			titulo: "TRANSFORMACION DIGITAL"
		},
        {
            NTema: 'Tema 1',
            tema: 'Cultura Digital'
        },
        {
            NTema: 'Tema 2',
            tema: 'Artificial Inteligence'
        },
        {
            NTema: 'Tema 3',
            tema: 'Cloud Computing'
		},
		{
            NTema: 'Tema 4',
            tema: 'Blog Chain'
        },
        {
            NTema: 'Tema 5',
            tema: 'Big Data'
        },
        {
            NTema: 'Tema 6',
            tema: 'RPA'
        },
        {
            NTema: 'Tema 7',
            tema: 'Disciplinas Ágiles'
		},
		{
            NTema: 'Tema 8',
            tema: 'Cybersecurity'
		},
		{
            NTema: 'Tema 9',
            tema: 'Casos de usos especializados'
        }
	]

	const temasDE = [
		{
			titulo:'DIRECCIÓN ESTRATÉGICA DE VENTAS Y CULTURA CRM'
		},
        {
            NTema: 'Tema 1',
            tema: 'Gestión del cambio y comportamiento del consumidor'
        },
        {
            NTema: 'Tema 2',
            tema: 'Gestión del ciclo de Vida de la Venta'
        },
        {
            NTema: 'Tema 3',
            tema: 'Gestión de oportunidades de Ventas y Cierre de Negociaciones'
        },
        {
            NTema: 'Tema 4',
            tema: 'Contrataciones con el Estado'
        },
        {
            NTema: 'Tema 5',
            tema: 'Inteligencia competitiva y Benchmarking Estratégico'
        },
        {
            NTema: 'Tema 6',
            tema: 'Inteligencia  de Negocios y Análisis de Predictivos en Ventas'
		},
		{
            NTema: 'Tema 7',
            tema: 'Tecnología Cloud Formulación Estrátegica Omnicanal y Enfoque CRM'
		},
		{
            NTema: 'Tema 8',
            tema: 'Gestión del Talento Humano en Ventas'
		},
		{
			NTema:'Tema 9',
			tema:'Casos de usos especializados'
		}
	]
	
	const temasCyberS = [
		{
			titulo:'CYBERSECURITY Y ETHICAL HACKING'
		},
        {
            NTema: 'Tema 1',
            tema: 'Introducción a la Seguridad Informática'
        },
        {
            NTema: 'Tema 2',
            tema: 'Ethical Hacking'
        },
        {
            NTema: 'Tema 3',
            tema: 'Hacking para Penterter'
        },
        {
            NTema: 'Tema 4',
            tema: 'Introducción a la Seguridad en Aplicaciones Web'
        },
        {
            NTema: 'Tema 5',
            tema: 'Hacking en Aplicaciones Web'
        },
        {
            NTema: 'Tema 6',
            tema: 'Protección de Datos Personales'
		},
		{
            NTema: 'Tema 7',
            tema: 'Gestión de la Ciber Seguridad'
		},
		{
            NTema: 'Tema 8',
            tema: 'Implementación ISO 27001 y SOC con OSSIM'
		},
		{
			NTema:'Tema 9',
			tema:'Análisis de Gestión de Riesgo'
		}
    ]

	const temasDP = [
		{
			titulo : 'DIRECCIÓN DE PROYECTOS Y GESTIÓN DE PORTAFOLIOS'
		},
        {
            NTema: 'Tema 1',
            tema: 'Diseño y Gestión de Bussines Case Marco Valt'
        },
        {
            NTema: 'Tema 2',
            tema: 'Modelo Organizacional - Empresas Proyectizadas'
        },
        {
            NTema: 'Tema 3',
            tema: 'Marcos de Referencia y tipos de Metodologías'
        },
        {
            NTema: 'Tema 4',
            tema: 'Lean Project'
        },
        {
            NTema: 'Tema 5',
            tema: 'Gestión de Proyectos con SCRUM'
        },
        {
            NTema: 'Tema 6',
            tema: 'Gestión de Proyectos con enfoque PMBOOK 6'
		},
		{
            NTema: 'Tema 7',
            tema: 'Herramientas de Gestión y Centro de Costos de Proyectos'
		},
		{
            NTema: 'Tema 8',
            tema: 'Dirección de Equipos de Proyectos Múltiples Enfoques'
		},
		{
			NTema:'Tema 9',
			tema:'Aseguramiento de Riesgo de Proyectos con R'
		}
	]
	const temasCD = [
		{titulo:'CIENCIA DE DATOS Y BUSINESS ANALYTICS'},
        {
            NTema: 'Tema 1',
            tema: 'Captura e Ingesta de Data,SQL SemiSQL , NoSQL'
        },
        {
            NTema: 'Tema 2',
            tema: 'BigData Analytics - BDA'
        },
        {
            NTema: 'Tema 3',
            tema: 'Análisis de Casos e Inteligencia de Negocio'
        },
        {
            NTema: 'Tema 4',
            tema: 'Diseño de Proyectos de Big Data Aplicado'
        },
        {
            NTema: 'Tema 5',
            tema: 'Revisión de Herramientas para Big Data:Apache, Hadoop, MongoDB, Apache Spark, Python ,Apache Cassandra , Lenguaje R'
        },
        {
            NTema: 'Tema 6',
            tema: 'Analítica Descriptiva, Analítica Predictiva y Analítica Prescriptiva'
		},
		{
            NTema: 'Tema 7',
            tema: 'Aplicaciones de Deep Learning y Machine Learning'
		},
		{
            NTema: 'Tema 8',
            tema: 'Gobierno de los Datos y Modelos optimizados en Big Data'
		},
		{
			NTema:'Tema 9',
			tema:'Inteligencia de Negocio y Casos de Usos en Big Data'
		}
	]
	
	const temasRPA = [
		{titulo: 'RPA DENTRO DE LA GESTIÓN Y GOBIERNO DE LOS PROCESOS'},
        {
            NTema: 'Tema 1',
            tema: 'Modelo de Madurez para el gobierno de Procesos'
        },
        {
            NTema: 'Tema 2',
            tema: 'Las fuentes de desperdicio y Diagnostico de Rendimiento de Procesos'
        },
        {
            NTema: 'Tema 3',
            tema: 'BPM y Workflow de Producción'
        },
        {
            NTema: 'Tema 4',
            tema: 'Herramientas y Prácticas para el modelado de mejora de Procesos'
        },
        {
            NTema: 'Tema 5',
            tema: 'Optmización de Procesos con Lean Six Sigma'
        },
        {
            NTema: 'Tema 6',
            tema: 'Indicadores de control de Procesos Formulación e Implementación'
		},
		{
            NTema: 'Tema 7',
            tema: 'Fundamento de Automatización RPA'
		},
		{
            NTema: 'Tema 8',
            tema: 'Procesos Robotizables'
		},
		{
			NTema:'Tema 9',
			tema:'Creación de Bots para Optimizar componentes del flujo de Valor'
		}
	]

	const temasGC = [
		{titulo: 'GESTIÓN DEL CONOCIMIENTO, LIDERAZGO Y CUADRO DE MANDO EN LA DIRECCIÓN DEL TALENTO HUMANO'},
        {
            NTema: 'Tema 1',
            tema: 'Modelos de Liderazgo Organizacional y Enfoques de Madurez'
        },
        {
            NTema: 'Tema 2',
            tema: 'Gestión de los Grupos de Interés'
        },
        {
            NTema: 'Tema 3',
            tema: 'Cultura CRM y Gestión de la Carga de Trabajo'
        },
        {
            NTema: 'Tema 4',
            tema: 'Estrategias basadas en Social CRM'
        },
        {
            NTema: 'Tema 5',
            tema: 'Liderazgo de Equipos de Trabajos en enfoques Ágiles'
        },
        {
            NTema: 'Tema 6',
            tema: 'Funciones del Knowledge Brokering'
		},
		{
            NTema: 'Tema 7',
            tema: 'Herramientas de Colaboración y Comunicaciones Efectiva'
		},
		{
            NTema: 'Tema 8',
            tema: 'Modelo de Gobierno e Indicadores de Rendimiento'
		},
		{
			NTema:'Tema 9',
			tema:'Dinámicas: Resolución de Problemas de casos de uso especificos'
		}
	]

	const temasBM = [
		{titulo: 'BLOCKCHAIN Y MARKETING OMNICANALL'},
        {
            NTema: 'Tema 1',
            tema: 'Introducción en BlockChain'
        },
        {
            NTema: 'Tema 2',
            tema: 'SmartContract'
        },
        {
            NTema: 'Tema 3',
            tema: 'IoTA y DAO'
        },
        {
            NTema: 'Tema 4',
            tema: 'Roadmap y Blue Print en Blockchain'
        },
        {
            NTema: 'Tema 5',
            tema: 'Diseño de Estrategias Omnicanal'
        },
        {
            NTema: 'Tema 6',
            tema: 'Tecnología y arquitectura Omnicanal'
		},
		{
            NTema: 'Tema 7',
            tema: 'Estrategias de Ventas por el canal de escrito'
		},
		{
            NTema: 'Tema 8',
            tema: 'Asistentes Virtuales y Automatización de respuestas'
		},
		{
			NTema:'Tema 9',
			tema:'Diseño y Puesta en Operaciones de campañas Ominicanal'
		}
	]

	useEffect(() => {
		//document.getElementById('Idmenu').classList.add('cambiar-fondo-menu');
		//document.getElementById('logo-dark').src = logoB;
		//document.getElementById("redes-contacto").classList.add("mostrar");
		// return () => {
		// 	alert('fsdf');
		// };
	}, []);

	return (
		<div className='in-company'>
			<ModalIncopany data={dataModal} />

			{/*  */}
			<div className='contenedor  px-5'>
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
					<hr className='w-100'></hr>
				</div>

				{/*  */}

				{/*  */}
				<section class='temas  text-center bg-light'>
					<h1>Temas estratégicos, tácticos y operacionales</h1>
					<div class='container mb-5 pb-5'>
						<div class='row'>
							<div class='offset-1 offset-sm-0 col-10 col-sm-6 col-lg-4'>
								<Link to=
								{{
									pathname: 'cursos/modulos/transformacion-digital',
									state: temasTD.map(e => e)
								}}>
									<img src="https://img.icons8.com/material-rounded/64/000000/change.png" />
									<div class='mx-auto mb-5 mb-lg-0 mb-lg-3'>
										<h3>TRANSFORMACIÓN DIGITAL</h3>
										<hr className='w-100 d-block d-sm-none'></hr>
									</div>
								</Link>
							</div>
							<div class='offset-1 offset-sm-0 col-10 col-sm-6 col-lg-4'>
								<Link to=
									{{
										pathname: 'cursos/modulos/direccion-estrategica',
										state: temasDE.map(e => e)
									}}> 
									<img src="https://img.icons8.com/ios-filled/50/000000/strategy-board.png" />
									<div class='mx-auto mb-5 mb-lg-0 mb-lg-3'>
										<h3>DIRECCIÓN ESTRATÉGICA DE VENTAS Y CULTURA CRM</h3>
										<hr className="w-100 d-block d-sm-none"></hr>
									</div>
								</Link>
							</div>

							<div class='offset-1 offset-sm-0 col-10 col-sm-6 col-lg-4'>
							<Link to=
								{{
									pathname: 'cursos/modulos/cybersecurity',
									state: temasCyberS.map(e => e)
								}}> 
								<img src="https://img.icons8.com/wired/64/000000/hacking.png" />
								<div class='mx-auto mb-5 mb-lg-0 mb-lg-3'>
									<h3>CYBERSECURITY Y ETHICAL HACKING</h3>
									<hr className="w-100 d-block d-sm-none"></hr>
								</div>
								</Link>
							</div>
							<div class='offset-1 offset-sm-0 col-10 col-sm-6 col-lg-4'>
							<Link to=
									{{
										pathname: 'cursos/modulos/gestion-portafolio',
										state: temasDP.map(e => e)
									}}> 
								<img src="https://img.icons8.com/material-rounded/48/000000/project.png" />
								<div class='mx-auto mb-5 mb-lg-0 mb-lg-3'>
									<h3>DIRECCIÓN DE PROYECTOS Y GESTIÓN DE PORTAFOLIOS</h3>
									<hr className="w-100 d-block d-sm-none"></hr>
								</div>
								</Link>
							</div>
							<div class='offset-1 offset-sm-0 col-10 col-sm-6 col-lg-4'>
							<Link to=
									{{
										pathname: 'cursos/modulos/gestion-portafolio',
										state: temasCD.map(e => e)
									}}> 
								<img src="https://img.icons8.com/ios/50/000000/google-analytics-logo.png" />
								<div class='mx-auto mb-5 mb-lg-0 mb-lg-3'>
									<h3>CIENCIA DE DATOS Y BUSINESS ANALYTICS </h3>
									<hr className="w-100 d-block d-sm-none"></hr>
								</div>
								</Link>
							</div>
							<div class='offset-1 offset-sm-0 col-10 col-sm-6 col-lg-4'>
							<Link to=
									{{
										pathname: 'cursos/modulos/rpa',
										state: temasRPA.map(e => e)
									}}> 
								<img src="https://img.icons8.com/wired/64/000000/process.png" />
								<div class='mx-auto mb-5 mb-lg-0 mb-lg-3'>
									<h3>RPA DENTRO DE LA GESTIÓN Y GOBIERNO DE LOS PROCESOS</h3>
									<hr className="w-100 d-block d-sm-none"></hr>
								</div>
								</Link>
							</div>
							<div class='offset-1 offset-sm-0 offset-lg-2 col-10 col-sm-6 col-lg-4'>
							<Link to=
									{{
										pathname: 'cursos/modulos/talento-humano',
										state: temasGC.map(e => e)
									}}> 
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
							<Link to=
									{{
										pathname: 'cursos/modulos/omnicanall',
										state: temasBM.map(e => e)
									}}> 
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

				<section className='mt-5 text-center nuestros-ponentes'>
					<h1>Nuestro Docentes</h1>
					<div class='row container'>
						{/*  */}

						{data.map((profe, index) => (
							<div className='col-12 col-sm-6 col-md-4'>
								<div>
									<img src={profe.url} alt='Ink Grid' />
								</div>
								<div className='datos'>
									<h1>{profe.nombre}</h1>
									<h2>{profe.especialidad}</h2>
									<span>{profe.correo}</span>
								</div>
							</div>
						))}
					</div>
				</section>

			</div>
		</div>
	);
};

export default InCompany;
