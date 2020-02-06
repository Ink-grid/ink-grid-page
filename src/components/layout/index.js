/** @format */

import React from 'react';
import Navbar from '../navbar/';
import Footer from '../Footer/';

const Layout = props => {
	return (
		<div className='App-header'>
			<Navbar />
			{props.children}
			<Footer />

		</div>
	);
};
		
export default Layout;
