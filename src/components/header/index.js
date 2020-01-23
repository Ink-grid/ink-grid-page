/** @format */

import React from 'react';
import './style.css';
import Carousel from '../Carousel/';

const Hearder = () => {

	const Imagenes=[
		{
			url: 'https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
		},
		{
			url: 'https://www.muypymes.com/impresion-pyme/wp-content/uploads/2019/06/HP-Instant-Ink-gratis.jpg'
		},
		{
			url: 'https://www.muypymes.com/impresion-pyme/wp-content/uploads/2019/08/HP-OfficeJet-Pro-9000-28.jpg'
		}
	]
	

	return (
		<header
			className='masthead'
		>
			<br></br>
			<br></br>
			<br></br>
			
			<Carousel images={Imagenes} />

		</header>
	);
};

export default Hearder;
