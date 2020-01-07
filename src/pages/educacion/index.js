/** @format */

import React from 'react';
import SolucionesEmp from '../../components/SolucionesEmp/';

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

	return (
		<div style={{ textAlign: 'center' }}>
			<br></br>
			<br></br>
			<br></br>
			<SolucionesEmp datas={data}></SolucionesEmp>
		</div>
	);
};

export default Educación;
