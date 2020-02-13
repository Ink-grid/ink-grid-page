/** @format */

import React, { useEffect } from 'react';
import './style.css';
import logoB from '../../../src/logo-dark.png';

const SolucionesEmp = props => {
	useEffect(() => {
		document.getElementById('Idmenu').classList.add('cambiar-fondo-menu');
		document.getElementById('logo-dark').src = logoB;
		// document.getElementById('redes-contacto').classList.add('mostrar');
	}, []);

	return (
		<section className='seccion-educacion'>
			<div className='container '>
				<div className='row'>
					<div
						style={{
							position: 'relative',
							height: '250px'
						}}
						className='col-lg-12 text-center'>
						<div
							style={{
								backgroundColor: 'rgba(0,50,105)',
								marginLeft: '15px',
								width: '370px',
								height: '135px',
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
								fontSize: '25px'
							}}
							className='educacion-title'>
							<h3 className='section-heading'>{props.datas.title}</h3>
							<div
								style={{
									backgroundColor: '#ffffff',
									width: '80%',
									height: '10px'
								}}></div>
						</div>
					</div>

					<div className='Insight mb-5'>Insight</div>

					<div className='container '>
						<div className='row' style={{}}>
							<div className='col-sm-12 col-lg-6 secciones'>
								{props.datas.insights1.map((data, index) => (
									<p className='section-subh' key={index}>
										<i className='fas fa-check'> </i> {data}
									</p>
								))}
							</div>
							<div className='col-sm-12 col-lg-6 secciones'>
								{props.datas.insights2.map((data, index) => (
									<p className=' section-subh' key={index}>
										<i className='fas fa-check'> </i> {data}
									</p>
								))}
							</div>
							<div className='col-sm-12 offset-lg-3 col-lg-6 secciones'>
								{props.datas.insights3.map((data, index) => (
									<p className=' section-subh' key={index}>
										<i className='fas fa-check'> </i> {data}
									</p>
								))}
							</div>
						</div>
					</div>
				</div>
				<br></br>
				<br></br>

				{/*  */}
				{/*  */}
				<div className='container'>
					<div className='row'>
						{/*  */}
						{/*  */}
						<div className='col col-12  col-md-4'>
							<div className='card-education'>
								<div className='picture'>
									<img
										className='img-fluid'
										src='https://www.fundaciontelefonica.com.ar/wp-content/uploads/2016/04/ITSitio_210316_Img_Bilinkis-1-1.png'
									/>
								</div>
								<div className='team-content'>
									<h3 className='name'>AO</h3>
								</div>
								<ul className='lista'>
									<li>
										{props.datas.AO.map((data, index) => (
											<p className='card-text pr-5' key={index}>
												<i className='fas fa-check'> </i> {data}
											</p>
										))}
									</li>
								</ul>
							</div>
						</div>

						{/*  */}
						{/*  */}

						<div className='col col-12  col-md-4'>
							<div className='card-education'>
								<div className='picture'>
									<img
										className='img-fluid'
										src='https://www.fundaciontelefonica.com.ar/wp-content/uploads/2016/04/ITSitio_210316_Img_Bilinkis-1-1.png'
									/>
								</div>
								<div className='team-content'>
									<h3 className='name'>AE</h3>
								</div>
								<ul className='lista'>
									<li>
										{props.datas.AE.map((data, index) => (
											<p className='card-text pr-5' key={index}>
												<i className='fas fa-check'> </i> {data}
											</p>
										))}
									</li>
								</ul>
							</div>
						</div>

						{/*  */}
						{/*  */}
						<div className='col col-12   col-md-4'>
							<div className='card-education'>
								<div className='picture'>
									<img
										className='img-fluid'
										src='https://www.fundaciontelefonica.com.ar/wp-content/uploads/2016/04/ITSitio_210316_Img_Bilinkis-1-1.png'
									/>
								</div>
								<div className='team-content'>
									<h3 className='name'>AR</h3>
								</div>
								<ul className='lista'>
									<li>
										{props.datas.AR.map((data, index) => (
											<p className='card-text pr-5' key={index}>
												<i className='fas fa-check'> </i> {data}
											</p>
										))}
									</li>
								</ul>
							</div>
						</div>
						{/*  */}
						{/*  */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default SolucionesEmp;
