/** @format */

import React from 'react';
import './style.css';

const Services = () => {
	
	return (
		<section id='services'>
			<div className='container '>
				<div className='row'>
					<div className='col-lg-12 text-center'>
						<h2 className='text-uppercase section-heading'>
							Servicios y Soluciones
						</h2>
						<h3 className='text-muted section-subheading'>
							Valor Incremental y contínuo para el crecimiento de tu negocio
						</h3>
					</div>
				</div>
				<div className='row text-center'>
					<div className='col-md-4'>
						<span className='fa-stack fa-4x'>
							<i className='fa fa-circle fa-stack-2x text-primary'></i>
							<i className='fa fa-shopping-cart fa-stack-1x fa-inverse'></i>
						</span>
						<h4 className='section-heading'>
							Diseñamos y Operamos Soluciones Empresariales
						</h4>
						{/* <p className='text-muted paragram'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
							maxime quam architecto quo inventore harum ex magni, dicta
							impedit.
						</p> */}
					</div>
					<div className='col-md-4'>
						<span className='fa-stack fa-4x'>
							<i className='fa fa-circle fa-stack-2x text-primary'></i>
							<i className='fa fa-laptop fa-stack-1x fa-inverse'></i>
						</span>
						<h4 className='section-heading'>
							Creamos puentes de Negocios y de Mercado
						</h4>
					</div>
					<div className='col-md-4'>
						<span className='fa-stack fa-4x'>
							<i className='fa fa-circle fa-stack-2x text-primary'></i>
							<i className='fa fa-lock fa-stack-1x fa-inverse'></i>
						</span>
						<h4 className='section-heading'>
							Explotamos insights para tu crecimiento
						</h4>
					</div>
					<div className='col-md-4'>
						<span className='fa-stack fa-4x'>
							<i className='fa fa-circle fa-stack-2x text-primary'></i>
							<i className='fa fa-lock fa-stack-1x fa-inverse'></i>
						</span>
						<h4 className='section-heading'>
							Para mejorar tus activos organizacionales
						</h4>
					</div>
					<div className='col-md-4'>
						<span className='fa-stack fa-4x'>
							<i className='fa fa-circle fa-stack-2x text-primary'></i>
							<i className='fa fa-lock fa-stack-1x fa-inverse'></i>
						</span>
						<h4 className='section-heading'>
							Para fortalecer tus activos relacionales
						</h4>
					</div>
					<div className='col-md-4'>
						<span className='fa-stack fa-4x'>
							<i className='fa fa-circle fa-stack-2x text-primary'></i>
							<i className='fa fa-lock fa-stack-1x fa-inverse'></i>
						</span>
						<h4 className='section-heading'>
							Para fortalecer tus activos estructurales
						</h4>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
