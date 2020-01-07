/** @format */

import React, { useState } from 'react';
import './style.css';

const SolucionesEmp = props => {
	const [educacion, setEducacion] = useState(false);
	const [estado, setEstado] = useState('ver más');
	const activeEducation = () => {
		setEducacion(!educacion);
		if (estado === 'ver más') {
			setEstado('ver menos');
		} else {
			setEstado('ver más');
		}
	};

	return (
		<section>
			<div className='container '>
				<div className='row'>
					<div
						style={{
							backgroundImage:
								"url('https://portadas.gargano.uy/portadas/portadas-gargano-ciudad-perfecta.jpg')",
							backgroundColor: '#cccccc',
							backgroundRepeat: 'no-repeat',
							backgroundSize: '100% 100%',
							position: 'relative',
							height: '300px'
						}}
						className='col-lg-12 text-center'>
						<div
							style={{
								backgroundColor: 'rgba(0, 114, 255, 0.5)',
								// opacity: 0.6,
								width: '400px',
								height: '330px',
								color: '#ffffff',
								padding: '1em',
								textAlign: 'initial',
								position: 'absolute',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								left: '10%'
							}}>
							<h3 className='section-heading'>
								Diseñamos y Operamos Soluciones Empresariales para mejorar tus
								Activos Organizacionales
							</h3>
							<br></br>
							<div
								style={{
									backgroundColor: '#ffffff',
									width: '50%',
									height: '10px'
								}}></div>
						</div>
					</div>
				</div>
				<br></br>
				<br></br>
				<div
					style={{
						paddingLeft: '6em',
						display: 'flex',
						color: '#0062cc',
						justifyContent: 'space-between',
						textAlign: 'initial'
					}}>
					<div>
						<p className=' section-subheading'>
							<i class='fas fa-check'> </i> Gestión del talento humano.
						</p>

						<p className='section-subheading'>
							<i class='fas fa-check'> </i> Diseño organizacional.
						</p>
						<p className='section-subheading'>
							<i class='fas fa-check'> </i> Gestión de los grupos de interés.
						</p>
						<p className='section-subheading'>
							<i class='fas fa-check'> </i> Inversión y finanzas.
						</p>
						<p className='section-subheading'>
							<i class='fas fa-check'> </i> Gestión del ecosistema.
						</p>
						<p className='section-subheading'>
							<i class='fas fa-check'> </i> Liderazgo y gobernanza.
						</p>
						<p className='section-subheading'>
							<i class='fas fa-check'> </i> Habilitación de la fuerza laboral.
						</p>
						<p className='section-subheading'>
							<i class='fas fa-check'> </i> Gest. inteligente y adap. de
							procesos.
						</p>
						<p className='section-subheading'>
							<i class='fas fa-check'> </i> Estándares y maduréz de los equipos.
							de gestión.
						</p>
					</div>

					<div>
						<img
							width='500'
							height='350'
							src='http://techtobase10.com/wp-content/uploads/2018/05/ind4-0-01.png'
						/>
					</div>
				</div>
			</div>
			<div style={{ padding: '1em' }}>
				<button
					onClick={() => activeEducation()}
					type='button'
					class='btn btn-primary'>
					{estado}
				</button>
			</div>
			{educacion && (
				<section>
					<div className='container '>
						<div className='row'>
							<div
								style={{
									position: 'relative',
									height: '200px'
								}}
								className='col-lg-12 text-center'>
								<div
									style={{
										backgroundColor: 'rgba(0, 114, 255)',
										// opacity: 0.6,
										width: '200px',
										height: '100px',
										color: '#ffffff',
										padding: '1em',
										borderTopRightRadius: '2em',
										borderBottomRightRadius: '2em',
										textAlign: 'initial',
										position: 'absolute',
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
										left: '0%',
										top: '30%'
									}}>
									<h3 className='section-heading'>{props.datas.title}</h3>
									<div
										style={{
											backgroundColor: '#ffffff',
											width: '80%',
											height: '10px'
										}}></div>
								</div>
							</div>
							<div
								style={
									props.datas.title === 'MINERIA'
										? {
												backgroundImage:
													"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZhd44ggtMy4yp0sATCvGqulYZpakJgg8TPGTJGNNXNUNkWqh&s')",
												backgroundColor: '#cccccc',
												backgroundRepeat: 'no-repeat',
												backgroundSize: '100% 100%',
												position: 'relative',
												height: '300px'
										  }
										: {
												backgroundImage:
													"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZhd44ggtMy4yp0sATCvGqulYZpakJgg8TPGTJGNNXNUNkWqh&s')",
												backgroundColor: '#cccccc',
												backgroundRepeat: 'no-repeat',
												backgroundSize: '100% 100%',
												position: 'relative',
												height: '200px'
										  }
								}
								className='col-lg-12 text-center'>
								<div
									style={{
										backgroundColor: 'rgba(0, 114, 255, 0.5)',
										// opacity: 0.6,
										width: '200px',
										height: '100px',
										color: '#ffffff',
										padding: '1em',
										textAlign: 'initial',
										position: 'absolute',
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
										left: '0%',
										top: '30%'
									}}>
									<h3 className='section-heading'>INSIGHTS</h3>
									<br></br>
									<div
										style={{
											backgroundColor: '#ffffff',
											width: '50%',
											height: '10px'
										}}></div>
								</div>
								<div
									style={{
										width: '80%',
										paddingTop: '2em',
										paddingBottom: '2em',
										left: '20%',
										color: '#ffffff',
										height: '100%',
										textAlign: 'initial',
										position: 'absolute'
									}}>
									<div class='container'>
										<div class='row' style={{ alignItems: 'center' }}>
											<div class='col-sm'>
												{props.datas.insights1.map((data, index) => (
													<p className='section-subheading' key={index}>
														<i class='fas fa-check'> </i> {data}
													</p>
												))}
											</div>
											<div class='col-sm'>
												{props.datas.insights2.map((data, index) => (
													<p className=' section-subheading' key={index}>
														<i class='fas fa-check'> </i> {data}
													</p>
												))}
											</div>
											<div class='col-sm'>
												{props.datas.insights3.map((data, index) => (
													<p className=' section-subheading' key={index}>
														<i class='fas fa-check'> </i> {data}
													</p>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<br></br>
						<br></br>
						<div class='container'>
							<div class='row'>
								<div class='col-sm'>
									<div
										class='card'
										style={{
											backgroundColor: 'rgba(0, 114, 255)',
											color: '#ffffff'
										}}>
										<div class='card-body'>
											<br />
											<h5 class='card-title' style={{ fontSize: '25px' }}>
												<div>
													<did
														style={{
															backgroundColor: '#ffffff',
															color: 'blue',
															borderRadius: '1.5em',
															padding: '0.5em'
														}}>
														AO
													</did>
												</div>
											</h5>
											<br></br>
											<div style={{ textAlign: 'initial' }}>
												{props.datas.AO.map((data, index) => (
													<p class='card-text' key={index}>
														<i class='fas fa-check'> </i> {data}
													</p>
												))}
											</div>
										</div>
									</div>
								</div>
								<div class='col-sm'>
									<div
										class='card'
										style={{
											backgroundColor: 'rgba(0, 114, 255)',
											color: '#ffffff'
										}}>
										<div class='card-body'>
											<br />
											<h5 class='card-title' style={{ fontSize: '25px' }}>
												<div>
													<did
														style={{
															backgroundColor: '#ffffff',
															color: 'blue',
															borderRadius: '1.5em',
															padding: '0.5em'
														}}>
														AE
													</did>
												</div>
											</h5>
											<br></br>
											<div style={{ textAlign: 'initial' }}>
												{props.datas.AE.map((data, index) => (
													<p class='card-text' key={index}>
														<i class='fas fa-check'> </i> {data}
													</p>
												))}
											</div>
										</div>
									</div>
								</div>
								<div class='col-sm'>
									<div
										class='card'
										style={{
											backgroundColor: 'rgba(0, 114, 255)',
											color: '#ffffff'
										}}>
										<div class='card-body'>
											<br />
											<h5 class='card-title' style={{ fontSize: '25px' }}>
												<div>
													<did
														style={{
															backgroundColor: '#ffffff',
															color: 'blue',
															borderRadius: '1.5em',
															padding: '0.5em'
														}}>
														AR
													</did>
												</div>
											</h5>
											<br></br>
											<div style={{ textAlign: 'initial' }}>
												{props.datas.AR.map((data, index) => (
													<p class='card-text' key={index}>
														<i class='fas fa-check'> </i> {data}
													</p>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div style={{ padding: '1em' }}>
						<button type='button' class='btn btn-primary'>
							contactar
						</button>
					</div>
				</section>
			)}
		</section>
	);
};

export default SolucionesEmp;
