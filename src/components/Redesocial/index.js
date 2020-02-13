/** @format */

import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import './style.css';

const RedesSociales = () => {
	return (
		<div id='redes-contacto' className='redes-contacto d-none'>
			<a href='https://www.facebook.com/InkGridx/' target='_blank'>
				<FacebookIcon />
			</a>
			<a href='https://pe.linkedin.com/company/ink-grid' target='_blank'>
				<LinkedInIcon />
			</a>
			<a href='https://www.whatsapp.com' target='_blank'>
				<WhatsAppIcon />
			</a>
		</div>
	);
};

export default RedesSociales;
