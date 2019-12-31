/** @format */

import React from 'react';
import Navbar from '../navbar/';

const Layout = props => {
	return (
		<div className='App-header'>
			<Navbar />
			{props.children}
		</div>
	);
};

export default Layout;
