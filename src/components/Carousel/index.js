/** @format */

import React, { useEffect, useState } from 'react';
import './style.css';
import Ubicacion from './../Ubicacion';
import logo from '../../../src/logo.png';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import nevado from '../../../src/img/nevado.png';
import cpa from '../../../src/img/cpa.png';
import expro from '../../../src/img/expro.png';
import { useMediaQuery } from '../../services/useServices';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Slide from '@material-ui/core/Slide';
import Items from './items';

const useStyles = makeStyles({
	root: {
		maxWidth: '100%'
	},
	media: {
		height: 100
	},
	paper: {
		maxWidth: 300
	}
});

const Carousel = props => {
	const isRowBased = useMediaQuery('(min-width: 500px)');
	const [animation, setAnimation] = useState(false);

	const classes = useStyles();
	const data = [
		{
			titulo: 'FORMACIÓN IN COMPANY',
			descri:
				'El único programa de formación organizacional a tu medida, dirigido para las empresas que quieran liderar el cambio.',
			img:
				'https://firebasestorage.googleapis.com/v0/b/ink-grid.appspot.com/o/CALADO%20IN%20COMPANY.png?alt=media&token=dfc41592-0d83-41fd-9d5f-8a537e83bb5e',
			href: '/incompany'
		},
		{
			titulo: isRowBased
				? 'TRANSFORMACIÓN DIGITAL MINERIA'
				: 'TRANSFOR. DIGITAL MINERIA',
			descri:
				'Cómo el gigante de la minería del cobre Freeport-McMoRan desbloqueó el rendimiento del siguiente nivel, con nuestra ayuda',
			img:
				'https://firebasestorage.googleapis.com/v0/b/ink-grid.appspot.com/o/minería%20calada.png?alt=media&token=ce43fc9a-8951-48cc-9694-da8b2e91ab06',
			href: '/mineria'
		}
	];

	const activosOrga = [
		{
			titulo: 'Gestión del talento humano',
			direction: 'up',
			img: 'https://s03.s3c.es/imag/_v0/635x300/0/8/0/tecnologias_empresa.jpg'
		},
		{
			titulo: 'Diseño organizacional.',
			direction: 'up',
			img: 'https://logyt.com/wordpress/wp-content/uploads/2013/09/DO.jpg'
		},
		{
			titulo: 'Gestión de los grupos de interés.',
			direction: 'up',
			img:
				'https://intersindicalrm.org/spublicos/wp-content/uploads/2019/11/mesa-sectorial-15-11-2019.jpg'
		},
		{
			titulo: 'Inversión y finanzas.',
			direction: 'up',
			img: 'https://media22.elsiglodetorreon.com.mx/i/2018/04/1046865.jpeg'
		},
		{
			titulo: 'Gestión del ecosistema.',
			direction: 'up',
			img:
				'https://lh3.googleusercontent.com/proxy/i-iUttmx87MXSm048DbsGTwdP7v5xBsNZMoUsHC5JCytZQn0tRAHG13_ikRHaTXyaQFjkMPb1gzjDJtkYR8zi4-O8rrxyeKQmwVyZrYOGzS5EO6iJUwV_NU'
		},
		{
			titulo: 'Liderazgo y gobernanza.',
			direction: 'up',
			img:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbvHqJ28-qOeKomaznPaPrJsIJl_rb6mu0KLaQBJz0syKYfSWF'
		},
		{
			titulo: 'Habilitación de la fuerza laboral.',
			direction: 'up',
			img:
				'https://i0.wp.com/degerencia.com/wp-content/uploads/2007/07/fuentes-de-poder-en-la-organizacion.jpg?fit=640%2C308&ssl=1'
		},
		{
			titulo: 'Gest. inteligente y adap. de procesos.',
			direction: 'up',
			img:
				'https://lh3.googleusercontent.com/proxy/hkkAEubGYYvWmK5ocPmG7DCWCSUm_B0t-jfPOSM3VOxg8b9rTjcmR_IIWupIYx8JzxEyLk_rDG184cbuuOz6OK_IdDdpdCeen-IjO_VbMSKVL4Rz608X'
		},
		{
			titulo: 'Estándares y maduréz de los equipos. de gestión.',
			direction: 'up',
			img:
				'https://panamaosa.com/wp-content/uploads/2018/05/Liderazgo-y-productividad-laboral-845x321.jpg'
		}
	];

	useEffect(() => {
		document.getElementById('Idmenu').classList.remove('cambiar-fondo-menu');
		document.getElementById('logo-dark').src = logo;
		document.getElementsByTagName('body')[0].onscroll = () => {
			setAnimation(true);
		};
		//document.getElementById('redes-contacto').classList.remove('mostrar');
	}, []);
	return (
		<React.Fragment>
			{/* Portada Home */}
			<div class='parallax-slider'>
				<div class='slider-wrapper'>
					<div
						class='slide bg-dark slide-active'
						style={{ position: 'relative' }}>
						<div class='content'>
							<div class='container'>
								<div class='col-md-6 caption' style={{ color: '#ffffff' }}>
									<br></br>
									<br></br>
									<br></br>
									<div className='visible'>
										<p className='posicionarTE'>Te </p>
										<ul className='content-ul'>
											<li className='content-li'>enseñamos</li>
											<li className='content-li'>capacitamos</li>
											<li className='content-li'>motivamos</li>
											<li className='content-li'>valoramos ...</li>
										</ul>
									</div>
									<br></br>
									<h1>
										Bienvenido a <br /> Ink-Grid
									</h1>
									<p style={{ fontSize: '25px' }}>
										Somos una firma consultora especializada en tecnologias y
										servicios. Conformada por un conjunto de profesionales de
										primer nivel con experiencia en proyectos de alto valor para
										diversos sectores.
										{/* conformada 
										por un conjunto de profesionales de amplia trayectoria
										en proyectos regionales y localesm aportando un alto valor para 
										diversas industrias, basados en principios y practicas mundiales en distintas disciplinas
										y un solido respaldo en el dominio de tecnologias 4.0 */}
									</p>
								</div>
							</div>
						</div>
						<div
							style={
								isRowBased
									? {
											position: 'absolute',
											bottom: '0%',
											right: '0%',
											height: '70%',
											width: '50%',
											backgroundRepeat: 'no-repeat',
											backgroundPosition: 'center center',
											backgroundSize: 'contain',
											backgroundImage:
												"url('https://www.mckinsey.com//pe/~/media/McKinsey/Locations/South%20America/Peru/Overview/Peru_Hero_GettyImages-665404151_1080.ashx')"
									  }
									: null
							}></div>
					</div>

					{data.map((ele, index) => (
						<Items
							isRowBased={isRowBased}
							key={index}
							titulo={ele.titulo}
							descri={ele.descri}
							img={ele.img}
							href={ele.href}
						/>
					))}
				</div>
			</div>
			{/* Portada Home */}
			<Container maxWidth='md'>
				{/*  */}
				<br />
				<div className='descripcion1 container text-center bg-ligth text-dark'>
					Nuestra compañia integra profesionales con una solida experiencia en
					proyectos de gran alcance en diversas industrias con resultados
					excelentes; full stack, implemetaciones de data center definidos por
					software, soluciones de marketing omnicanal, proyectos de inteligencia
					de negocios y big data, soluciones para core bancario, automatismo de
					procesos, diseño e implementación para de ambientes ágiles, roadmap y
					blueprint de programas de tansformación digital, entre otros. Nuestro
					modelo de servicios esta basado en framework de conocimientos, marcos
					estándares y mejores prácticas mundiales explotadas para cada
					industrias asi como un sin numero de casos de usos estructurados: en
					modelos de negocios, modelos análiticos, modelos organizacionales,
					metodologias y disciplinas orientas a la industria 4.0 lo que nos
					permite una gran velocidad a la hora de desplegar nuestro servicio con
					el mejor ratio entre el time to market y justo a tiempo (T2M / JIT).
				</div>
				<br />
				<Divider />
				<br></br>
				<div className='datos-genericos container py-3'>
					<div className='row'>
						<div className='datosEspecificos col-12 col-md-4'>
							<h1 className='p-3 text-center'>+ 25</h1>
							<p>consultores</p>
							<span> especializados por industrias</span>
							<div className='linea lineaD d-none d-md-block'></div>
						</div>

						<div className='datosEspecificos col-12 col-md-4'>
							<h1 className='py-3 text-center'>+ 100</h1>
							<p>proyectos</p>
							<span>ejecutados en mercado local y regional</span>
						</div>
						<div className='datosEspecificos col-12 col-md-4 text-center'>
							<h1 className='p-3 text-center'>+ 15</h1>
							<p>millones USD</p>
							<span>
								de eficiencias obtenidos de las diversas empresas atendidas en
								proyectos de optimizació
							</span>
							<div className='linea lineaI d-none d-md-block'> </div>
						</div>
						<hr />
						<div className='datosEspecificos col-12 col-md-12 text-center'>
							<h1 className='p-3 text-center'>+ 20k</h1>
							<p>procesos</p>
							<span>mapeados, diseñados y optimizados.</span>
						</div>
					</div>
				</div>
				<hr />

				<div className='servicios p-3 m-5'>
					Diseñamos y Operamos Soluciones Empresariales para mejorar tus Activos
					Organizacionales
				</div>
				<br></br>
				<Grid container spacing={4}>
					{activosOrga.map((e, index) => (
						<Slide
							key={index}
							timeout={1500}
							direction={e.direction}
							in={animation}>
							<Grid item xs={isRowBased ? 4 : 12}>
								<Card className={classes.root}>
									<CardActionArea>
										<CardMedia
											className={classes.media}
											image={e.img}
											title={e.titulo}
										/>
										<CardContent>
											<Typography
												style={{ textAlign: 'center' }}
												gutterBottom
												variant='h5'
												component='h2'>
												{e.titulo}
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</Grid>
						</Slide>
					))}
				</Grid>

				{/* <div className='container-fluid'>
					<div
						style={{
							display: 'flex',
							color: '#0062cc',
							justifyContent: 'center',
							textAlign: 'initial'
						}}
						className='row'>
						<div className='col-12 col-md-5 m-4 sobresalir'>
							<p className=' section-subheading'>
								<DoneOutlineIcon /> Gestión del talento humano
							</p>
						</div>
						<div className='col-12 col-md-5 m-4 sobresalir'>
							<p className='section-subheading'>
								<DoneOutlineIcon /> Diseño organizacional.
							</p>
						</div>
						<div className='col-12 col-md-5 m-4 sobresalir'>
							<p className='section-subheading'>
								<DoneOutlineIcon /> Gestión de los grupos de interés.
							</p>
						</div>
						<div className='col-12 col-md-5 m-4 sobresalir'>
							<p className='section-subheading'>
								<DoneOutlineIcon /> Inversión y finanzas.
							</p>
						</div>
						<div className='col-12 col-md-5 m-4 sobresalir'>
							<p className='section-subheading'>
								<DoneOutlineIcon /> Gestión del ecosistema.
							</p>
						</div>
						<div className='col-12 col-md-5 m-4 sobresalir'>
							<p className='section-subheading'>
								<DoneOutlineIcon /> Liderazgo y gobernanza.
							</p>
						</div>
						<div className='col-12 col-md-5 m-4 sobresalir'>
							<p className='section-subheading'>
								<DoneOutlineIcon /> Habilitación de la fuerza laboral.
							</p>
						</div>
						<div className='col-12 col-md-5 m-4 sobresalir'>
							<p className='section-subheading'>
								<DoneOutlineIcon /> Gest. inteligente y adap. de procesos.
							</p>
						</div>
						<div className='col-12 col-md-5 m-4 sobresalir'>
							<p className='section-subheading'>
								<DoneOutlineIcon /> Estándares y maduréz de los equipos. de
								gestión.
							</p>
						</div>
					</div>
				</div> */}

				{/*  */}
				<div className=' nosotros my-5 mx-2'>
					<div className='container text-left'>
						<h1>Ya confían en nosotros</h1>
						<hr className='w-100'></hr>
						<div className='py-4 ml-2 row my-3'>
							<div className='offset-sm-1  offset-md-1 col-4 col-sm-3 col-md-2'>
								<img className='logos' src={nevado} alt='Ink-Grid' />
							</div>
							<div className='offset-sm-1 offset-md-2  col-4 col-sm-3 col-md-2'>
								<img className='logos' src={expro} alt='Ink-Grid' />
							</div>
							<div className='offset-sm-1 offset-md-2 col-4 col-sm-3 col-md-2'>
								<img className='logos img-fluid' src={cpa} alt='Ink-Grid' />
							</div>
						</div>
						<hr className='w-100'></hr>
					</div>
				</div>
				<Ubicacion />
			</Container>
		</React.Fragment>
	);
};

export default Carousel;
