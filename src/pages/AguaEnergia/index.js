/** @format */

import React from 'react';
import Portafolio from '../../components/Portafolio/';

const AguaEnergia = () => {
	const data = {
		title: 'AGUA Y ENERGÍA',
		insights1: [
			'Innovación Transformadora y desarrollo de nuevas soluciones para el éxito comercial del agua y energía.',
			'Desarrollo de capacidades omnicanales para  vender más de manera más rentable.'
		],
		insights2: [
			'Logística para enfrentar la competencia de los recursos hídricos entre los sectores económicos.',
			'Modelos comerciales diseñados para acelerar el Retorno	de la Inversión.'
		],
		insights3: [
			'Sintetización Operativa y procesos centrales para la reducción de costos y complejidad orientada al aumento de ingresos monetarios.',
			'Automatización en los procesos críticos del tratamiento hídrico.'
		],
		AO: [
			'Transición energética global para capturar nuevas oportunidades de negocios.',
			'Soluciones específicas para el elevar y solventar el aumento de la demanda en la industria hidroenergética.',
			'Poder colectivo organizacional para brindar resultados innovadores y rápidos.',
			'Predicción, medición y administración de riesgos para entregar resultados económicos elevados.',
			'Evaluación del ecosistema y de la magnitud de los riesgos del agua y sus posibles consecuencias.'
		],
		AE: [
			'Redes inteligentes y almacenamiento de energía.',
			'Enfoque sistemático para gestionar la transformación digital garantizando resultados que superen las expectativas del negocio hídrico.',
			'Diseño de tácticas digitales a corto plazo para el respaldo de la inversión.',
			'Capacidad de gestión digital de rendimiento contínuo para garantizar que cada inversión funcione al servicio de cada estrategia.',
			'+ Captura rápida de Data para fomentar los ingresos y oportunidades de ahorro de costos para obtener beneficios financieros.',
			'Diseño de tácticas digitales a corto plazo para el respaldo de la inversión.'
		],
		AR: [
			'Tendencias del mercado y soluciones prometedoras en la industria del agua y energía.',
			'Recursos digitales previsivos entre la oferta y la demanda para aumentar las ventas en la industria.',
			'Estrategias concretas de mercado para la toma de decisiones en tiempo real.',
			'Ofertas efectivas para clientes potenciales a precio y tiempo preciso en los canales más efectivos.',
			'Identificar la obtención de ahorros a través de la inteligencia digital en todas las categorías de gastos y sistemas de compras.'
		]
	};

	return (
		<div style={{ textAlign: 'center' }}>
			<Portafolio
				titulo='AGUA Y ENERGIA'
				descripcion='¡ Actualmente el mundo de la tecnologia esta en constante crecimiento que involucran los sectores mas importantes del mercado, como es la EDUCACIÓN, descubre nuestras soluciones en el sector educativo !'
				img='https://image.freepik.com/foto-gratis/planta-energia-principal-ideas-energia-ahorro-energia_42416-208.jpg'
				insights={[]}
			/>
		</div>
	);
};

export default AguaEnergia;
