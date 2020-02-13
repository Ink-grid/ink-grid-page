/** @format */

import React from 'react';
import Portafolio from '../../components/Portafolio/';
//import SolucionesEmp from '../../components/SolucionesEmp/';

const Educación = () => {
	const data = {
		title: 'EDUCACIÓN',
		insights1: [
			'Matriculas',
			'Posicionamiento en el ranking educativo',
			'Mejora del sistema de enseñanza'
		],
		insights2: [
			'Entrenamiento a docentes y gestores educativos',
			'Mejora de la curva de aprendizaje',
			'Eficiencias E2E'
		],
		insights3: [
			'Explotación de tecnologías aplicadas al entorno educativo',
			'Madurez y desarrollo institucional'
		],
		AO: [
			'Gestión integral del talento humano en la academia.',
			'Capacitaciones y entrenamiento.',
			'Modelos de aprendizaje y metodología de enseñanza.',
			'Inversión y finanzas.',
			'Gestión de los grupos de interés.',
			'Gestión del ecosistema del aprendizaje.',
			'Habilitación de la fuerza educativa y laboral.',
			'Estándares y madurez en los modelos De gestión.'
		],
		AE: [
			'Diseño y lanzamiento de ofertas académicas.',
			'Construcción de portafolio de ideación e innovación educativa.',
			'Gestión automatizada de recursos.',
			'Dirección de tecnologías de aprendiza- je.',
			'Gestión integrada de servicios de enseñanza.',
			'(RPA) Robotización procesos y auto- matismos.',
			'Proyectos E- Learning.'
		],
		AR: [
			'Fondos operativos asociados para la Maximización de ventas.',
			'Análisis del mercado para el Reconocimiento de oportunidades e Incrementar la oferta.',
			'Promoción, venta y distribución.',
			'Análisis, visión del mercado en tiempo, espacio real y satisfacción de la demanda.',
			'Ejecución y valor de marca para el alza De las operaciones.',
			'Omnicanalidad digital como herramienta Clave en la gestión de negocios.'
		]
	};

	const insights = [
		{
			name: 'MATRICULAS',
			img:
				'https://d1zv66c6p7f9ox.cloudfront.net/fotoweb/fotonoticia_20180524115902_640.jpg'
		},
		{
			name: 'POSICIONAMIENTO EN EL RANKING EDUCATIVO',
			img:
				'https://assets.estrategiasdeinversion.net/uploads/noticias_redaccion/Portada2/ibex_mab_15_frente_a_ibex_35.jpg'
		},
		{
			name: 'MEJORA DEL SISTEMA DE ENSEÑANZA',
			img:
				'https://www.bbva.com/wp-content/uploads/2015/12/bbva-educacion-e1464704439593.jpg'
		},
		{
			name: 'ENTRENAMIENTO A DOCENTES Y GESTORES EDUCATIVOS',
			img:
				'https://image.freepik.com/vector-gratis/presentacion-docente-aula_7130-34.jpg'
		},
		{
			name: 'MEJORA DE LA CURVA DE APRENDIZAJE',
			img:
				'https://149350819.v2.pressablecdn.com/wp-content/uploads/abstract-artificial-intelligence.png'
		},
		{
			name: 'EXPLOTACION DE TECNOLOGIAS APLICADAS AL ENTORNO EDUCATIVO',
			img:
				'https://image.freepik.com/foto-gratis/disenador-grafico-utilizando-brazos-robotica-pantalla-digital_117023-517.jpg'
		},
		{
			name: 'EFICIENCIAS E2E',
			img:
				'https://www.isotools.org/wp-content/uploads/2019/08/Enfoque-basado-en-procesos.jpg'
		},
		{
			name: 'MADUREZ Y DESARROLLO INSTITUCIONAL',
			img:
				'https://www.esan.edu.pe/apuntes-empresariales/2019/03/04/1500x844_modelo_madurez_organizacion.jpg'
		}
	];

	return (
		<div style={{ textAlign: 'center' }}>
			<Portafolio
				titulo='EDUCACIÓN'
				descripcion='¡ Actualmente el mundo de la tecnologia esta en constante crecimiento que involucran los sectores mas importantes del mercado, como es la EDUCACIÓN, descubre nuestras soluciones en el sector educativo !'
				img='https://es-static.z-dn.net/files/da8/444a5d51612418e2ea0c3b76d81dbbd1.jpg'
				insights={insights}
			/>
		</div>
	);
};

export default Educación;
