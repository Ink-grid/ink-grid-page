/** @format */

import React from 'react';
import Portafolio from '../../components/Portafolio/';

const Turismo = () => {
	const data = {
		title: 'TURISMO Y EXPORTACIÓN',
		insights1: [
			'Planificación turística diligente para el crecimiento de la diversificación económica',
			'Estrategias comerciales y reestructuración.',
			'Globalización de nuevas oportunidades de ingresos.'
		],
		insights2: [
			'Identificación oportuna del mercado turístico.',
			'Impulso de la competitividad del sector turístico.',
			' Visión tecnológica para viajes.'
		],
		insights3: [
			'Desarrollo de perspectivas y pronósticos del mercado.',
			'Gestión de costos para el crecimiento.',
			'Nuevas rutas hacia los negocios rentables.'
		],
		AO: [
			'Desarrollo de políticas de turismo para impulsar el retorno de la inversión.',
			'Eficiencia portuaria para viabilidad del comercio e incremento de activos.',
			'Identificación oportuna del mercado turístico.',
			'Abastecimiento y gestión de proveedores.',
			'Cadena de valor de viajes.',
			'Operadores de hoteles e inversionistas.',
			'Operadores de turismo y capital.',
			'Transporte, líneas de crucero y aerolíneas.',
			'Metodologías basadas en hechos para el incremento de ganancias.'
		],
		AE: [
			'Potenciación de la fuerza laboral tecnológica para un alto nivel en la experiencia del turista.',
			'Competitividad ágil aprovechando el uso de tecnologías.',
			'Orientación correcta para el diseño de soluciones innovadoras.',
			'Tecnología activa para la eficacia en respuestas rápidas y adecuadas.',
			'Modelos comerciales impulsando supe conectividad.',
			'Back office technology.',
			'E - Commerce.'
		],
		AR: [
			'Perspectivas y pronósticos del mercado.',
			'Estudios demográficos.',
			'Mercadeo, precios y sostenibilidad.',
			'Percepción y confianza del turista.',
			'Experiencia digital con altos estándares para el consumidor.',
			'Potenciación de la fuerza laboral tecnológica para un alto nivel en la experiencia del turista.',
			'Configuración de itinerario en la industria de viajes y turismo.'
		]
	};

	return (
		<div style={{ textAlign: 'center' }}>
			<Portafolio
				titulo='TURISMO'
				descripcion='¡ Actualmente el mundo de la tecnologia esta en constante crecimiento que involucran los sectores mas importantes del mercado, como es la EDUCACIÓN, descubre nuestras soluciones en el sector educativo !'
				img='https://image.freepik.com/foto-gratis/turistas-perdidos-playa_23-2147643229.jpg'
				insights={[]}
			/>
		</div>
	);
};

export default Turismo;
