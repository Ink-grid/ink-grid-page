/** @format */

import React from 'react';
import Portafolio from '../../components/Portafolio/';

const Transporte = () => {
	const data = {
		title: 'TRANSPORTE',
		insights1: [
			'Inversión cíclica de crecimiento para la empresa transportista.',
			'Operaciones integrales para el comercio del transporte de carga terrestre, aéreo.',
			'Alianzas internacionales.'
		],
		insights2: [
			'Incremento emergente del modelo comercial.',
			'Gestión de la industria transportista en constante evolución.',
			'Economía empresarial de servicios personalizados.'
		],
		insights3: [
			'Escalas mejoradas para absorber ganancias en la oferta y la demanda.',
			'Reducción de costos para sustanciar el capital del Transporte.'
		],
		AO: [
			'Agilidad organizacional para aumentar el activo empresarial.',
			'Innovación digital ampliando la fuerza laboral.',
			'Estrategias B2B para el aumento de la capacidad comercial.',
			'Operatividad extraordinaria elevando las ganancias de las ventas.',
			'Impulso efectivo para incrementar los activos líquidos del negocio.',
			'Gestión de la atmósfera comercial intensificando su impulso.'
		],
		AE: [
			'Implementación tecnológica para los bienes de consumo.',
			'Organización de productos y promociones en función de las necesidades del consumidor en tiempo real.',
			'Avances digitales para la analítica del mercado.',
			'Administración integrada de mercado rentables y servicios.',
			'Propagando el E- Commerce para la fuerza de ventas online',
			'Mecanismos efectivos para la automatización del patrimonio y bienes de consumo.'
		],
		AR: [
			'Las marcas tradicionales y su adaptación al mercado digital.',
			'Experiencia del usuario para maximizar el ascenso del mercado.',
			'Desarrollo ágil para capitalizar las marcas.',
			'Experiencia ideal para el consumidor.',
			'Dinamismo eficaz para fidelizar al usuario.',
			'Gestión efectiva en la demanda de los consumidores.',
			'Ejecución de tácticas efectivas de marketing digital en el alto estándar del mercado actual.'
		]
	};

	return (
		<div style={{ textAlign: 'center' }}>
			<Portafolio
				titulo='TRANSPORTE'
				descripcion='¡ Actualmente el mundo de la tecnologia esta en constante crecimiento que involucran los sectores mas importantes del mercado, como es la EDUCACIÓN, descubre nuestras soluciones en el sector educativo !'
				img='https://image.freepik.com/foto-gratis/transporte-logistica-buque-carga-contenedores-avion-carga_37416-103.jpg'
				insights={[]}
			/>
		</div>
	);
};

export default Transporte;
