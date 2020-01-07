/** @format */

import React from 'react';
import Header from '../components/header/';
import Services from '../components/services/';
import Portafolio from '../components/portafolio/';
import Contacto from '../components/contacto/';
// import Drawers from '../components/Drawers'
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
