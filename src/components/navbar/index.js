/** @format */

import React from 'react';
import './style.css';

const Navbar = () => {
	return (
		<nav
			class='navbar navbar-light navbar-expand-lg fixed-top bg-light'
			style={{ display: 'flex', flexDirection: 'column' }}
			id='mainNav'>
			<div
				className='container'
				style={{
					// background: 'red',
					// 	width: '100%',
					padding: '1em'
					// 	display: 'flex',
					// 	justifyContent: 'space-between'
				}}>
				<div>
					<a href='/' rel='home'>
						<img
							width='147'
							height='102'
							src='https://www.ink-grid.com/wp-content/uploads/2019/09/cropped-logo_new.png'
							class='custom-logo'
							alt='Ink-grid'
						/>
					</a>
				</div>
				<div className='info-text'>
					<strong>
						<em>LLÁMANOS:</em>
					</strong>
					+51 962 711 999
				</div>
			</div>

			<div class='container'>
				<a class='navbar-brand' href='/'>
					Inicio
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
						<li class='nav-item' role='presentation'>
							<a class='nav-link js-scroll-trigger' href='#services'>
								Servicios-bpo
							</a>
						</li>
						<li class='nav-item' role='presentation'>
							<a class='nav-link js-scroll-trigger' href='#portfolio'>
								COWORKING
							</a>
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
						<li class='nav-item dropdown'>
							<a
								class='nav-link dropdown-toggle'
								href='#'
								id='navbarDropdown'
								role='button'
								data-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'>
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
