/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
	const prueba = () => {
		const id = document.getElementById('prueba');
		id.style.display = 'block';
	};

	const segundo = () => {
		const id = document.getElementById('prueba');
		id.style.display = 'none';
	};

	return (
		<nav
			class='navbar navbar-light navbar-expand-lg fixed-top bg-light'
			id='mainNav'>
			<div class='container'>
				<a class='navbar-brand' href='/'>
					<i class='fas fa-bars'></i>
				</a>
				<a class='navbar-brand' href='/#inkgrid'>
					<img
						width='100'
						height='50'
						src='https://www.ink-grid.com/wp-content/uploads/2019/09/cropped-logo_new.png'
						alt='ink-grid'
					/>
				</a>
				<button
					data-toggle='collapse'
					data-target='#navbarResponsive'
					class='navbar-toggler navbar-toggler-right'
					type='button'
					data-toogle='collapse'
					aria-controls='navbarResponsive'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<i class='fa fa-bars'></i>
				</button>
				<div class='collapse navbar-collapse' id='navbarResponsive'>
					<ul class='nav navbar-nav ml-auto text-uppercase'>
						<li
							class='nav-item'
							role='presentation'
							style={{ position: 'relative' }}>
							<a class='nav-link js-scroll-trigger' href='#services'>
								Servicios-bpo
							</a>
							<div id='prueba' class='dropdown-content'>
								<p>hola mundo</p>
							</div>
						</li>
						<li class='nav-item dropdown'>
							<a
								class='nav-link dropdown-toggle'
								href='#'
								id='navbarDropdown'
								role='button'
								data-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'>
								Consultoria
							</a>
							<div class='dropdown-menu' aria-labelledby='navbarDropdown'>
								<Link to='/educacion' class='dropdown-item'>
									Educación
								</Link>
								<Link to='/mineria' class='dropdown-item'>
									Mineria
								</Link>
								<Link to='/comercio-servicio' class='dropdown-item'>
									Comercio y servicio
								</Link>
								<Link to='/turismo' class='dropdown-item'>
									Turísmo
								</Link>
								<Link to='/agua-energia' class='dropdown-item'>
									Agua y energia
								</Link>
								<Link to='transporte' class='dropdown-item'>
									Transporte
								</Link>
								<Link to='tecnologia' class='dropdown-item'>
									Tecnologia
								</Link>
								<Link to='/logistica-explotacion' class='dropdown-item'>
									Logistica y explotación
								</Link>
							</div>
						</li>

						<li class='nav-item dropdown'>
							<a
								class='nav-link dropdown-toggle'
								href='#'
								id='navbarDropdown'
								role='button'
								data-toggle='dropdown'
								aria-haspopup='true'
								data-hover='dropdown'
								aria-expanded='true'>
								Capacitacion
							</a>
							<div class='dropdown-menu' aria-labelledby='navbarDropdown'>
								<a class='dropdown-item' href='#'>
									Action
								</a>
								<a class='dropdown-item' href='#'>
									Another action
								</a>
								<div class='dropdown-divider'></div>
								<a class='dropdown-item' href='#'>
									Something else here
								</a>
							</div>
						</li>
						<li class='nav-item' role='presentation'>
							<a class='nav-link js-scroll-trigger' href='#contact'>
								Contacto
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
