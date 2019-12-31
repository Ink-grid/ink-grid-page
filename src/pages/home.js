/** @format */

import React from 'react';
import Header from '../components/header/';
import Services from '../components/services/';
import Portafolio from '../components/portafolio/';
import Contacto from '../components/contacto/';

const Home = () => {
	return (
		<div>
			<Header />
			<Services />
			<Portafolio />
			<Contacto />
		</div>
	);
};

export default Home;
