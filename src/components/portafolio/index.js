/** @format */

import React from 'react';
import './style.css';

const Portafolio = () => {
	return (
		<div>
			<section id='portfolio' class='bg-light'>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-12 text-center'>
							<h2 class='text-uppercase section-heading'>COWORKING INK-GRID</h2>
							<h3 class='section-subheading text-muted'>
								En Ink-Grid se fomenta las relaciones estables entre
								profesionales de diferentes sectores que pueden desembocar en
								nuevas relaciones cliente-proveedor así como en intercambios y
								colaboración de tipo horizontal entre los propios
								cotrabajadores.
							</h3>
						</div>
					</div>
					<div class='row'>
						<div
							class='col-sm-6 col-md-4 portfolio-item'
							style={{ textAlign: 'center' }}>
							<a
								class='portfolio-link'
								data-toggle='modal'
								href='#portfolioModal1'>
								<div class='portfolio-hover'>
									<div class='portfolio-hover-content'>
										<i class='fa fa-plus fa-3x'></i>
									</div>
								</div>
								<img
									class='img-fluid'
									src='https://www.ink-grid.com/wp-content/uploads/2019/08/001.png'
								/>
							</a>
							<div class='portfolio-caption'>
								<h4>COWORKING CORPORATIVO</h4>
								{/* <p class='text-muted'>Illustration</p> */}
							</div>
						</div>
						<div
							class='col-sm-6 col-md-4 portfolio-item'
							style={{ textAlign: 'center' }}>
							<a
								class='portfolio-link'
								data-toggle='modal'
								href='#portfolioModal1'>
								<div class='portfolio-hover'>
									<div class='portfolio-hover-content'>
										<i class='fa fa-plus fa-3x'></i>
									</div>
								</div>
								<img
									class='img-fluid'
									src='https://www.ink-grid.com/wp-content/uploads/2019/08/002-1.png'
								/>
							</a>
							<div class='portfolio-caption'>
								<h4>FORMACIÓN EMPRESARIAL</h4>
								{/* <p class='text-muted'>Graphic Design</p> */}
							</div>
						</div>
						<div
							class='col-sm-6 col-md-4 portfolio-item'
							style={{ textAlign: 'center' }}>
							<a
								class='portfolio-link'
								data-toggle='modal'
								href='#portfolioModal1'>
								<div class='portfolio-hover'>
									<div class='portfolio-hover-content'>
										<i class='fa fa-plus fa-3x'></i>
									</div>
								</div>
								<img
									class='img-fluid'
									src='https://www.ink-grid.com/wp-content/uploads/2019/08/003-1.png'
								/>
							</a>
							<div class='portfolio-caption'>
								<h4>PROGRAMA DE VOLUNTARIADO</h4>
								{/* <p class='text-muted'>Identity</p> */}
							</div>
						</div>
						<div
							class='col-sm-6 col-md-4 portfolio-item'
							style={{ textAlign: 'center' }}>
							<a
								class='portfolio-link'
								data-toggle='modal'
								href='#portfolioModal1'>
								<div class='portfolio-hover'>
									<div class='portfolio-hover-content'>
										<i class='fa fa-plus fa-3x'></i>
									</div>
								</div>
								<img
									class='img-fluid'
									src='https://www.ink-grid.com/wp-content/uploads/2019/08/003-1.png'
								/>
							</a>
							<div class='portfolio-caption'>
								<h4>EVENTOS Y CONVENCIONES</h4>
								{/* <p class='text-muted'>Branding</p> */}
							</div>
						</div>
					</div>
				</div>
			</section>

			<div
				class='modal fade portfolio-modal text-center'
				role='dialog'
				tabindex='-1'
				id='portfolioModal1'>
				<div class='modal-dialog modal-lg' role='document'>
					<div class='modal-content'>
						<div class='modal-body'>
							<div class='container'>
								<div class='row'>
									<div class='col-lg-8 mx-auto'>
										<div class='modal-body'>
											<h2 class='text-uppercase'>COWORKING CORPORATIVO</h2>
											<p class='item-intro text-muted'>
												Lorem ipsum dolor sit amet consectetur.
											</p>
											<img
												class='img-fluid d-block mx-auto'
												src='https://www.ink-grid.com/wp-content/uploads/2019/08/001.png'
											/>
											<p>
												La evolución del coworking durante los últimos años ha
												provocado que surjan muchos espacios que básicamente
												cubren las necesidades de tener una oficina a bajo
												coste, pero hay algunos espacios que destacan por su
												implicación a nivel social, generando impactos
												beneficiosos para su localidad y para los coworkers que
												aportan valor, por lo que dichos espacios se convierten
												en un foco de negocio, innovación y provocan movimiento
												social en sus áreas de influencia.
											</p>
											<ul class='list-unstyled'>
												<li>Date: January 2017</li>
												<li>Client: Threads</li>
												<li>Category: Illustration</li>
											</ul>
											<button
												class='btn btn-primary'
												data-dismiss='modal'
												type='button'>
												<i class='fa fa-times'></i>
												<span>&nbsp;Close Project</span>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portafolio;
