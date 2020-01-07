/** @format */

import React from 'react';
import Layout from '../components/layout';
import SolucionesEmp from '../pages/educacion/';
import AguaEnergia from '../pages/AguaEnergia/';
import Comercio from '../pages/Comercio';
import Educacion from '../pages/educacion';
import Logistica from '../pages/Logistica';
import Mineria from '../pages/Mineria';
import Tecnologia from '../pages/Tecnologia';
import Transporte from '../pages/Transporte';
import Turismo from '../pages/Turismo';
import Home from '../pages/home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Ruote = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/educacion' component={SolucionesEmp} />
					<Route path='/soluciones-empresariales' component={SolucionesEmp} />
					<Route path='/agua-energia' component={AguaEnergia} />
					<Route path='/comercio' component={Comercio} />
					<Route path='/educacion' component={Educacion} />
					<Route path='/logistica' component={Logistica} />
					<Route path='/mineria' component={Mineria} />
					<Route path='/tecnologia' component={Tecnologia} />
					<Route path='/transporte' component={Transporte} />
					<Route path='/turismo' component={Turismo} />
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
