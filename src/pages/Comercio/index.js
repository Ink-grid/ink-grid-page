/** @format */

import React from 'react';
import Portafolio from '../../components/Portafolio/';

const Comercio = () => {
	const data = {
		title: 'COMERCIO Y SERVICIOS',
		insights1: [
			'Potenciación del mercado emergente.',
			'Aumento sustancial de la inversión del capital y las finanzas.'
		],
		insights2: [
			'Enriquecimiento del rendimiento del capital financiero.',
			'Adaptabilidad a los altos estándares del mercado múltiple.'
		],
		insights3: [
			'Decisiones analíticas para el aumento de ingresos.',
			'Aumento sustancial de la inversión del capital y las finanzas.'
		],
		AO: [
			'Agilidad organizacional para aumentar el activo empresarial.',
			'Innovación digital ampliando la fuerza laboral.',
			'Estrategias B2B para el aumento de la capacidad comercial.',
			'Excelencia operativa elevando las ganancias de las ventas.',
			'Impulso efectivo para incrementar los activos líquidos del negocio.',
			'Gestión de la atmósfera comercial intensificando su impulso.'
		],
		AE: [
			'Implementación tecnológica para los bienes de consumo.',
			'Organización de productos y promociones en función de las necesidades del consumidor en tiempo real.',
			'Avances digitales para la analítica del mercado.',
			'Propagando el E-Commerce para la fuerza de ventas online.',
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
				titulo='COMERCIO Y SERVICIOS'
				descripcion='¡ Actualmente el mundo de la tecnologia esta en constante crecimiento que involucran los sectores mas importantes del mercado, como es la EDUCACIÓN, descubre nuestras soluciones en el sector educativo !'
				img='https://image.freepik.com/foto-gratis/dedo-presionando-boton-red-social-pantalla-tactil_1112-489.jpg'
				insights={[]}
			/>
		</div>
	);
};

export default Comercio;
