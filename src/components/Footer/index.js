/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Mail from '@material-ui/icons/MailOutline';
import logoB from '../../../src/logo-dark.png';
import ChevronRight from '@material-ui/icons/ChevronRight';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='row footer-top  text-center'>
				<div className='col-12 col-md-7 footer-title'>
					Contáctate con Ink-Grid
				</div>

				<div className='col-12 col-md-5 correo-enlace'>
					<Link to='/contacto' className='footer-contact'>
						<Mail /> Contacto
					</Link>
				</div>
			</div>

			<div className='row footer-botton text-center my-5'>
				<div className='col-md-6 logo-ink container'>
					<img src={logoB} />
				</div>
				<div className='my-5 my-md-0 col-md-6 suscribete'>
					<div className='texto'>SUBSCRIBE TO OUR LATEST INSIGHTS</div>
					<input className='mt-4 email' placeholder='Email Adress' />
					<div className='footer-contact btn ml-3'>
						<ChevronRight />
					</div>
				</div>
			</div>

			<div className='container'>
				<div className='menu-footer row'>
					<div className='col-12 col-lg-10'>
						<ul className=''>
							<li>Contáctenos</li>
							<li>FAQ</li>
							<li>Política de privacidad</li>
							<li>Política de cookies</li>
							<li>Términos de Uso</li>
							{/* <li>Información del idioma local</li> */}
							<li>Declaración de accesibilidad</li>
						</ul>
					</div>

					<div className='col-12 col-lg-2 text-left iconos-footer text-center'>
						<a href='https://pe.linkedin.com/company/ink-grid' target='_blank'>
							<LinkedInIcon />
						</a>
						<a href='https://twitter.com' target='_blank'>
							<TwitterIcon />
						</a>
						<a href='https://www.facebook.com/InkGridx/' target='_blank'>
							<FacebookIcon />
						</a>
					</div>

					<hr className='w-100'></hr>
				</div>
				<div className='footer-end container'>
					<p>
						<span>Ink Grid </span>
					</p>
					<p>© 2020 Ink Grid</p>
				</div>
			</div>

			{/*  */}

			<div className='cm-up' id='cm-up'>
				<input type='button' className='cm-text-up' value='Volver al Inicio' />
				<span className='cm-icon'>
					<i className='fas fa-chevron-up'></i>
				</span>
			</div>

			{/*  */}
		</div>
	);
};

export default Footer;
