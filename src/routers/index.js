/** @format */

import React from 'react';
import Layout from '../components/layout';
import Home from '../pages/home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Ruote = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					{/* <Route path='/blogs' component={BLogs} />
					<Route path='/login' component={Login} />
					<Route path='/create-blog' component={CreateBlog} />
					<Route path='/blogpost/:id' component={BLogPost} /> */}
					{/* <Route component={Notfound} /> */}
				</Switch>
			</Layout>
		</BrowserRouter>
	);
};

export default Ruote;
