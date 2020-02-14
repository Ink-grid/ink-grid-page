/** @format */

import React from 'react';
import Portafolio from '../../components/Portafolio/';

const Logistica = () => {
	const data = {
		title: 'LOGISTICA Y EXPORTACIÓN',
		insights1: [
			'Acuerdos de Libre Comercio',
			'Implementación  dinámica de importación y exportación',
			'Generación de Activos mediante la captura de datos'
		],
		insights2: [
			'Soluciones innovadoras para resolver desafíos complejos en el negocio de importación y exportación',
			'Modernización de aplicaciones para obtener ahorros de infraestructura '
		],
		insights3: [
			'Regulaciones de soporte y requisitos de cumplimiento',
			'Gestión de activos para el incremento de liquidez',
			'Simplificación y agilidad en la exportación'
		],
		AO: [
			'Mejora en la eficiencia de las operaciones Portuarias.',
			'Eficiencia portuaria para viabilidad del comercio e incremento de activos.',
			'+ Vista individualizada y análisis de las prácticas de mantenimiento entre terminales basados en web.',
			'Capacidad de mantenimiento predictivo para los Propietarios de puertos.',
			'Planificación dinámica del mercado.',
			'Aumento en la eficiencia operativa.',
			'Colaboración ilimitada y planificación organizacional para transformar inactivos en activos.'
		],
		AE: [
			'Seguimiento de contenedores en tiempo real.',
			'Robótica de software en la estructura Organizacional y en estructuras de almacén.',
			'Robotización de procesos analíticos que generan ventajas competitivas.',
			'IoT para la supervisión E2E en tiempo y Ubicación real',
			'Innovación digital para carga y logística.',
			'Aumento de la capacidad digital y reducción de costo de funcionamiento.',
			'Tecnología blockchain para el aumento de activos.'
		],
		AR: [
			'Transformación de aplicaciones para el aumento del estándar y aumentar la satisfacción del cliente.',
			'Marketing digital para la inducción a la exportación e importación.',
			'Decisiones estratégicas para la promoción y distribución de productos.',
			'Modelos de negocio y las oportunidades en el panorama minorista y mayorista en rápida evolución.',
			'Consultoría estratégica operacional para una elevada experiencia del cliente.',
			'Sociedad de marcas globales para crear estrategias .'
		]
	};

	return (
		<div style={{ textAlign: 'center' }}>
			<Portafolio
				titulo='LOGISTICA Y EXP.'
				descripcion='¡ Actualmente el mundo de la tecnologia esta en constante crecimiento que involucran los sectores mas importantes del mercado, como es la EDUCACIÓN, descubre nuestras soluciones en el sector educativo !'
				img='https://image.freepik.com/foto-gratis/empresario-mostrar-contenedor-exportacion-pantalla-mapa-digital-mundial_35761-336.jpg'
				insights={[]}
			/>
		</div>
	);
};

export default Logistica;
