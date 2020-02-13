/** @format */

import React from 'react';
import SolucionesEmp from '../../components/SolucionesEmp/';
import Portafolio from '../../components/Portafolio/';

const Mineria = () => {
	const data = {
		title: 'MINERIA',
		insights1: [
			'Estrategias en la fuerza de comercio para el incremento activo del ROI	de los inversionistas.',
			'Seguridad y confiabilidad en las metodologías de comercialización.',
			'Gestión de inversiones para el aumento del capital de la pequeña, mediana y gran minería.'
		],
		insights2: [
			'Implementación y solidezincrementando las ventas de los metales comunes y metales preciosos.',
			'La minería como un medio activo de crecimiento para la industria.',
			'Altos estándares de refinación para su transformación industrial.'
		],
		insights3: [
			'Tácticas para incrementar la fuerza en las ventas del producto	procesado.',
			'Optimización inteligente de carga y transporte para su distribución y exportación en plantas.'
		],
		AO: [
			'Modelo dinámico de negocios para aumentar la fuerza de la capacidad de activos.',
			'Análisis interno y externo incrementando el interés de los inversionistas.',
			'Plan Organizacional optimizando la evolución de la inteligencia humana.',
			'Innovación táctica para la sólida consolidación de las inversiones financieras.',
			'Dirección del componente humano rumbo al impulso de la industria minera.',
			'Reducción de riesgos y ética de impacto ambiental.',
			'Metodologías efectivas para el desarrollo del progreso del trabajador minero.'
		],
		AE: [
			'Minería Automatizada.',
			'Minería 4.0 e incorporación de la transformación digital.',
			'Flota minera autónoma para la alta productividad del transporte y maquinarias.',
			'Maximización de datos para la obtención de información de valor.',
			'Implementación tecnológica para la transformación de la industria minera.',
			'Seguimiento estratégico para la distribución de metales preciosos.',
			'Robotización de equipos de minería para la exploración y reducción de contingencias.',
			'Automatización de datos para el análisis del comercio de la industria.',
			'Sistemas de control distribuido.'
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
			<Portafolio
				titulo='MINERIA'
				descripcion='¡ Actualmente el mundo de la tecnologia esta en constante crecimiento que involucran los sectores mas importantes del mercado, como es la EDUCACIÓN, descubre nuestras soluciones en el sector educativo !'
				img='https://image.freepik.com/foto-gratis/excavadores-estan-trabajando-duro-cielo-atardecer_51530-912.jpg'
				insights={[1, 2]}
			/>
		</div>
	);
};

export default Mineria;
