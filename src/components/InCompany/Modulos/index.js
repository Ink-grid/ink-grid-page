/** @format */

import React, { useEffect, useState } from 'react';
import Contacto from './contacto/';
import './style.css';

const Modulos = props => {
	const [url, setUrl] = useState(null);

	const getTemas = name => {
		switch (name) {
			case 'transformacion-digital':
				return [
					{
						titulo: 'TRANSFORMACION DIGITAL'
					},
					{
						NTema: 'Módulo 1 (14 : 00 Hs.)',
						tema: 'Cultura Digital'
					},
					{
						NTema: 'Módulo 2 (14 Hs.)',
						tema: 'Artificial Inteligence'
					},
					{
						NTema: 'Módulo 3 (14 Hs.)',
						tema: 'Cloud Computing'
					},
					{
						NTema: 'Módulo 4 (14 Hs.)',
						tema: 'Blog Chain'
					},
					{
						NTema: 'Módulo 5 (14 Hs.)',
						tema: 'Big Data'
					},
					{
						NTema: 'Módulo 6 (14 Hs.)',
						tema: 'RPA'
					},
					{
						NTema: 'Módulo 7 (14 Hs.)',
						tema: 'Disciplinas Ágiles'
					},
					{
						NTema: 'Módulo 8 (14 Hs.)',
						tema: 'Cybersecurity'
					},
					{
						NTema: 'Módulo 9 (14 Hs.)',
						tema: 'Casos de usos especializados'
					}
				];

			case 'direccion-estrategica':
				return [
					{
						titulo: 'DIRECCIÓN ESTRATÉGICA DE VENTAS Y CULTURA CRM'
					},
					{
						NTema: 'Módulo 1 (14 : 00 Hs.) ',
						tema: 'Gestión del cambio y comportamiento del consumidor'
					},
					{
						NTema: 'Módulo 2 (14 : 00 Hs.)',
						tema: 'Gestión del ciclo de Vida de la Venta'
					},
					{
						NTema: 'Módulo 3 (14 : 00 Hs.)',
						tema: 'Gestión de oportunidades de Ventas y Cierre de Negociaciones'
					},
					{
						NTema: 'Módulo 4 (14 : 00 Hs.)',
						tema: 'Contrataciones con el Estado'
					},
					{
						NTema: 'Módulo 5 (14 : 00 Hs.)',
						tema: 'Inteligencia competitiva y Benchmarking Estratégico'
					},
					{
						NTema: 'Módulo 6 (14 : 00 Hs.)',
						tema:
							'Inteligencia  de Negocios y Análisis de Predictivos en Ventas'
					},
					{
						NTema: 'Módulo 7 (14 : 00 Hs.)',
						tema:
							'Tecnología Cloud Formulación Estrátegica Omnicanal y Enfoque CRM'
					},
					{
						NTema: 'Módulo 8 (14 : 00 Hs.)',
						tema: 'Gestión del Talento Humano en Ventas'
					},
					{
						NTema: 'Módulo 9 (14 : 00 Hs.)',
						tema: 'Casos de usos especializados'
					}
				];
			case 'cybersecurity':
				return [
					{
						titulo: 'CYBERSECURITY Y ETHICAL HACKING'
					},
					{
						NTema: 'Módulo 1 (14 : 00 Hs.)',
						tema: 'Introducción a la Seguridad Informática'
					},
					{
						NTema: 'Módulo 2 (14 : 00 Hs.)',
						tema: 'Ethical Hacking'
					},
					{
						NTema: 'Módulo 3 (14 : 00 Hs.)',
						tema: 'Hacking para Penterter'
					},
					{
						NTema: 'Módulo 4 (14 : 00 Hs.)',
						tema: 'Introducción a la Seguridad en Aplicaciones Web'
					},
					{
						NTema: 'Módulo 5 (14 : 00 Hs.)',
						tema: 'Hacking en Aplicaciones Web'
					},
					{
						NTema: 'Módulo 6 (14 : 00 Hs.)',
						tema: 'Protección de Datos Personales'
					},
					{
						NTema: 'Módulo 7 (14 : 00 Hs.)',
						tema: 'Gestión de la Ciber Seguridad'
					},
					{
						NTema: 'Módulo 8 (14 : 00 Hs.)',
						tema: 'Implementación ISO 27001 y SOC con OSSIM'
					},
					{
						NTema: 'Módulo 9 (14 : 00 Hs.)',
						tema: 'Análisis de Gestión de Riesgo'
					}
				];
			case 'gestion-portafolio':
				return [
					{
						titulo: 'DIRECCIÓN DE PROYECTOS Y GESTIÓN DE PORTAFOLIOS'
					},
					{
						NTema: 'Módulo 1 (14 : 00 Hs.)',
						tema: 'Diseño y Gestión de Bussines Case Marco Valt'
					},
					{
						NTema: 'Módulo 2 (14 : 00 Hs.)',
						tema: 'Modelo Organizacional - Empresas Proyectizadas'
					},
					{
						NTema: 'Módulo 3 (14 : 00 Hs.)',
						tema: 'Marcos de Referencia y tipos de Metodologías'
					},
					{
						NTema: 'Módulo 4 (14 : 00 Hs.)',
						tema: 'Lean Project'
					},
					{
						NTema: 'Módulo 5 (14 : 00 Hs.)',
						tema: 'Gestión de Proyectos con SCRUM'
					},
					{
						NTema: 'Módulo 6 (14 : 00 Hs.)',
						tema: 'Gestión de Proyectos con enfoque PMBOOK 6'
					},
					{
						NTema: 'Módulo 7 (14 : 00 Hs.)',
						tema: 'Herramientas de Gestión y Centro de Costos de Proyectos'
					},
					{
						NTema: 'Módulo 8 (14 : 00 Hs.)',
						tema: 'Dirección de Equipos de Proyectos Múltiples Enfoques'
					},
					{
						NTema: 'Módulo 9 (14 : 00 Hs.)',
						tema: 'Aseguramiento de Riesgo de Proyectos con R'
					}
				];
			case 'bussines-analytics':
				return [
					{ titulo: 'CIENCIA DE DATOS Y BUSINESS ANALYTICS' },
					{
						NTema: 'Módulo 1 (14 : 00 Hs.)',
						tema: 'Captura e Ingesta de Data,SQL SemiSQL , NoSQL'
					},
					{
						NTema: 'Módulo 2 (14 : 00 Hs.)',
						tema: 'BigData Analytics - BDA'
					},
					{
						NTema: 'Módulo 3 (14 : 00 Hs.)',
						tema: 'Análisis de Casos e Inteligencia de Negocio'
					},
					{
						NTema: 'Módulo 4 (14 : 00 Hs.)',
						tema: 'Diseño de Proyectos de Big Data Aplicado'
					},
					{
						NTema: 'Módulo 5 (14 : 00 Hs.)',
						tema:
							'Revisión de Herramientas para Big Data:Apache, Hadoop, MongoDB, Apache Spark, Python ,Apache Cassandra , Lenguaje R'
					},
					{
						NTema: 'Módulo 6 (14 : 00 Hs.)',
						tema:
							'Analítica Descriptiva, Analítica Predictiva y Analítica Prescriptiva'
					},
					{
						NTema: 'Módulo 7 (14 : 00 Hs.)',
						tema: 'Aplicaciones de Deep Learning y Machine Learning'
					},
					{
						NTema: 'Módulo 8 (14 : 00 Hs.)',
						tema: 'Gobierno de los Datos y Modelos optimizados en Big Data'
					},
					{
						NTema: 'Módulo 9 (14 : 00 Hs.)',
						tema: 'Inteligencia de Negocio y Casos de Usos en Big Data'
					}
				];
			case 'rpa':
				return [
					{ titulo: 'RPA DENTRO DE LA GESTIÓN Y GOBIERNO DE LOS PROCESOS' },
					{
						NTema: 'Módulo 1 (14 : 00 Hs.)',
						tema: 'Modelo de Madurez para el gobierno de Procesos'
					},
					{
						NTema: 'Módulo 2 (14 : 00 Hs.)',
						tema:
							'Las fuentes de desperdicio y Diagnostico de Rendimiento de Procesos'
					},
					{
						NTema: 'Módulo 3 (14 : 00 Hs.)',
						tema: 'BPM y Workflow de Producción'
					},
					{
						NTema: 'Módulo 4 (14 : 00 Hs.)',
						tema:
							'Herramientas y Prácticas para el modelado de mejora de Procesos'
					},
					{
						NTema: 'Módulo 5 (14 : 00 Hs.)',
						tema: 'Optmización de Procesos con Lean Six Sigma'
					},
					{
						NTema: 'Módulo 6 (14 : 00 Hs.)',
						tema:
							'Indicadores de control de Procesos Formulación e Implementación'
					},
					{
						NTema: 'Módulo 7 (14 : 00 Hs.)',
						tema: 'Fundamento de Automatización RPA'
					},
					{
						NTema: 'Módulo 8 (14 : 00 Hs.)',
						tema: 'Procesos Robotizables'
					},
					{
						NTema: 'Módulo 9 (14 : 00 Hs.)',
						tema:
							'Creación de Bots para Optimizar componentes del flujo de Valor'
					}
				];
			case 'talento-humano':
				return [
					{
						titulo:
							'GESTIÓN DEL CONOCIMIENTO, LIDERAZGO Y CUADRO DE MANDO EN LA DIRECCIÓN DEL TALENTO HUMANO'
					},
					{
						NTema: 'Módulo 1 (14 : 00 Hs.)',
						tema: 'Modelos de Liderazgo Organizacional y Enfoques de Madurez'
					},
					{
						NTema: 'Módulo 2 (14 : 00 Hs.)',
						tema: 'Gestión de los Grupos de Interés'
					},
					{
						NTema: 'Módulo 3 (14 : 00 Hs.)',
						tema: 'Cultura CRM y Gestión de la Carga de Trabajo'
					},
					{
						NTema: 'Módulo 4 (14 : 00 Hs.)',
						tema: 'Estrategias basadas en Social CRM'
					},
					{
						NTema: 'Módulo 5 (14 : 00 Hs.)',
						tema: 'Liderazgo de Equipos de Trabajos en enfoques Ágiles'
					},
					{
						NTema: 'Módulo 6 (14 : 00 Hs.)',
						tema: 'Funciones del Knowledge Brokering'
					},
					{
						NTema: 'Módulo 7 (14 : 00 Hs.)',
						tema: 'Herramientas de Colaboración y Comunicaciones Efectiva'
					},
					{
						NTema: 'Módulo 8 (14 : 00 Hs.)',
						tema: 'Modelo de Gobierno e Indicadores de Rendimiento'
					},
					{
						NTema: 'Módulo 9 (14 : 00 Hs.)',
						tema:
							'Dinámicas: Resolución de Problemas de casos de uso especificos'
					}
				];
			case 'omnicanall':
				return [
					{ titulo: 'BLOCKCHAIN Y MARKETING OMNICANALL' },
					{
						NTema: 'Módulo 1 (14 : 00 Hs.)',
						tema: 'Introducción en BlockChain'
					},
					{
						NTema: 'Módulo 2 (14 : 00 Hs.)',
						tema: 'SmartContract'
					},
					{
						NTema: 'Módulo 3 (14 : 00 Hs.)',
						tema: 'IoTA y DAO'
					},
					{
						NTema: 'Módulo 4 (14 : 00 Hs.)',
						tema: 'Roadmap y Blue Print en Blockchain'
					},
					{
						NTema: 'Módulo 5 (14 : 00 Hs.)',
						tema: 'Diseño de Estrategias Omnicanal'
					},
					{
						NTema: 'Módulo 6 (14 : 00 Hs.)',
						tema: 'Tecnología y arquitectura Omnicanal'
					},
					{
						NTema: 'Módulo 7 (14 : 00 Hs.)',
						tema: 'Estrategias de Ventas por el canal de escrito'
					},
					{
						NTema: 'Módulo 8 (14 : 00 Hs.)',
						tema: 'Asistentes Virtuales y Automatización de respuestas'
					},
					{
						NTema: 'Módulo 9 (14 : 00 Hs.)',
						tema: 'Diseño y Puesta en Operaciones de campañas Ominicanal'
					}
				];
			default:
				break;
		}
	};

	// const d = { nombre, email, empresa, cargo, celular };

	useEffect(() => {
		window.scrollTo(0, 0);
		let nameCurso = window.location.pathname.split('/');
		document.getElementById('contacto').style.display = 'none';
		setUrl(getTemas(nameCurso[3]));
	}, []);

	if (!url) {
		return <div>cargando..</div>;
	}

	return (
		<React.Fragment>
			<div className='banner-modulos'>
				<h1>
					{props.location.state
						? props.location.state[0].titulo
						: url[0].titulo}
				</h1>
			</div>
			<div className='container modulos'>
				<div className='row container'>
					{props.location.state
						? props.location.state
								.filter((e, index) => index !== 0)
								.map((datos, index) => (
									<div key={index} className='col-12  col-md-6  sesiones'>
										<h1>{datos.NTema}</h1>
										<div>
											<span>{datos.tema}</span>
										</div>
									</div>
								))
						: url
								.filter((e, index) => index !== 0)
								.map((datos, index) => (
									<div key={index} className='col-12  col-md-6  sesiones'>
										<h1>{datos.NTema}</h1>
										<div>
											<span>{datos.tema}</span>
										</div>
									</div>
								))}
				</div>

				<Contacto tema={url[0].titulo} />
				<hr />
			</div>
		</React.Fragment>
	);
};
export default Modulos;
