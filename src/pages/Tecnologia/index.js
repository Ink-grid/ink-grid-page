/** @format */

import React from 'react';
import SolucionesEmp from '../../components/SolucionesEmp/';

const Tecnologia = () => { 
	const data = {
		title: 'TECNOLOGÍA',
		insights1: [
			'Modelos de plataforma basados en datos - TI y servicios ágiles para impulsar el crecimiento de su negocio.',
			'Transformación digital contínua y ágil para la mayor obtención de ventas y fuentes de ingreso.'
		],
		insights2: [
			'Servicios digitales analíticos y empresariales para incrementar ganancias.',
			'Blockchain como tecnología sólida de crecimiento.',
			'Herramientas de análisis para ayudar a impulsar la inversión.'
			
		],
		insights3: [
			'Implementación de AI para la fuerza de ventas y generación de valor.',
			'Evaluación de necesidades para las soluciones TI y estructuras digitales.',
			'Ganancias a corto plazo y liderazgo de la industria.'
		],
		AO: [
			'Casos de uso de estrategias y modelos de negocio adaptados a los constantes cambios tecnológicos.',
			'Soluciones a la complejidad operacional basadas en servicios E2E.',
			'Impulso de oportunidades de crecimiento de productos, servicios, negocios y modelos operativos.',
			'Ganancias a corto plazo y liderazgo de la Industria.',
			'Ecosistemas tecnológicos para la inteligencia organizacional.',
			'Análisis de vanguardia basado en E-Learning y Big Data.',
			'Ventas omnicanal basadas en plataformas'
		],
		AE: [
			'Productos y servicios en los mercados B2B y B2C.',
			'Preparación para la Revolución 5G.',
			'Innovación en dispositivos y avances tecnológicos.',
			'Innovación arquitectónica y de plataforma.',
			'Capacidad aumentada y conectividad en tiempo real.',
			'Estrategia tecnológica adaptada a los nuevos modelos de negocios',
			'Tecnologías omnicanales para la distribución de mercado y cliente.',
			'E-Commerce.',
			'E-Learning.',
			'Realidad aumentada.',
			'Realidad virtual.',
			'IOT.'
		],
		AR: [
			'Promoción de Nuevas Plataformas tecnológicas orientadas al customer Experience.',
			'Plataformas Impulsadas por TI inteligente impulsando experiencias en el proceso del customer experience.',
			'Hyper relevancia para la captación masiva de clientes potenciales.',
			'Adaptabilidad constante de productos, servicios y estrategias de marketing para mantenerse relevantes.',
			'Tecnologías Omnicanales para el Customer Experience.'
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

export default Tecnologia;
