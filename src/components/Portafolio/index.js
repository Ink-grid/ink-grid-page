/** @format */

import React, { useEffect } from 'react';
import logoB from '../../../src/logo-dark.png';
import logo from '../../../src/logo.png';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './style.css';

const useStyles = makeStyles({
	root: {
		maxWidth: 350
	},
	media: {
		height: 140
	}
});

const Portafolio = props => {
	const classes = useStyles();
	const tama = window.screen.width;
	console.log(tama);

	useEffect(() => {
		document.getElementById('Idmenu').classList.add('cambiar-fondo-menu');
		document.getElementById('logo-dark').src = logo;
		//document.getElementById("redes-contacto").classList.add("mostrar");
	}, []);

	return (
		<div className='in-company'>
			<div className='banner-padre '>
				<div className='banner'>
					<img className='img-fluid' src={props.img} alt='Ink-Grid' />
				</div>
				<div className='contenido-padre'>
					<div className='titulo-in my-5'>
						<h1>
							TRANSFORMACIÓN DIGITAL<span> {props.titulo}</span>
						</h1>
					</div>
					<hr className='w-100 d-none mostrarLinea'></hr>
					<div className='mb-5 mt-1'>
						<p className='text-center container mt-5'>{props.descripcion}</p>
					</div>
				</div>
			</div>
			<Divider />
			<Container maxWidth='lg'>
				<Typography component='div' style={{ padding: '1em' }}>
					<Box
						fontWeight='fontWeightBold'
						fontStyle='normal'
						fontSize={40}
						lineHeight='normal'
						m={1}>
						INSIGHTS
					</Box>
				</Typography>
				<Grid container spacing={3} style={{ padding: '1em' }}>
					{props.insights.map((eleme, index) => (
						<Grid key={index} item xs={tama < 500 ? 12 : 4}>
							<Paper style={{ maxWidth: '350px' }} elevation={3}>
								<Card className={classes.root}>
									<CardActionArea>
										<CardMedia
											className={classes.media}
											image={eleme.img}
											title={eleme.name}
										/>
										<CardContent>
											<Typography gutterBottom variant='h5' component='h2'>
												<CheckCircleIcon fontSize='inherit' /> {eleme.name}
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</Paper>
						</Grid>
					))}
				</Grid>
			</Container>
			{/*  */}
			{/* <div className='objetivos'>
				<div className='container'>
					<h2>OBJETIVO</h2>
					<p>
						Integrar una oferta de formación Empresarial y entrenamiento
						integral, con rigor en la actualización de temas, con aplicaciones
						de casos de usos especializados según demanda en contextos muy
						ajustados y con un alto valor añadido digital.
					</p>
				</div>
			</div> */}

			{/*  */}

			{/*  */}
			{/* <section class='features-icons bg-light text-center'>
				<h1>Temas estratégicos, tácticos y operacionales</h1>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-4'>
							<div class='mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3'>
								<h3>TRANSFORMACIÓN DIGITAL</h3>
							</div>
						</div>
						<div class='col-lg-4'>
							<div class='mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3'>
								<h3>DIRECCIÓN ESTRATÉGICA DE VENTAS Y CULTURA CRM</h3>
							</div>
						</div>
						<div class='col-lg-4'>
							<div class='mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3'>
								<h3>CYBERSECURITY Y ETHICAL HACKING</h3>
							</div>
						</div>
						<div class='col-lg-4'>
							<div class='mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3'>
								<h3>DIRECCIÓN DE PROYECTOS Y GESTIÓN DE PORTAFOLIOS</h3>
							</div>
						</div>
						<div class='col-lg-4'>
							<div class='mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3'>
								<h3>CIENCIA DE DATOS Y BUSINESS ANALYTICS </h3>
							</div>
						</div>
						<div class='col-lg-4'>
							<div class='mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3'>
								<h3>RPA DENTRO DE LA GESTIÓN Y GOBIERNO DE LOS PROCESOS</h3>
							</div>
						</div>
						<div class='col-lg-4'>
							<div class='mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3'>
								<h3>
									GESTIÓN DEL CONOCIMIENTO, LIDERAZGO Y CUADRO DE MANDO EN LA
									DIRECCIÓN DEL TALENTO HUMANO
								</h3>
							</div>
						</div>
						<div class='col-lg-4'>
							<div class='mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3'>
								<h3>BLOCKCHAIN Y MARKETING OMNICANALL</h3>
							</div>
						</div>
					</div>
				</div>
			</section> */}
		</div>
	);
};

export default Portafolio;
