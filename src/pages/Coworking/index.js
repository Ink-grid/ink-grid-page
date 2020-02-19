/** @format */

import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import ModalIncopany from '../../components/ModaIncopany/';
import { useMediaQuery } from '../../services/useServices';
import Ubicacion from '../../components/Ubicacion';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Modal from '../../components/Modal';
import Slide from '@material-ui/core/Slide';
import MenuItem from '@material-ui/core/MenuItem';
import { database } from '../../services/firebase';
import Alert from '@material-ui/lab/Alert';
import Swal from 'sweetalert2';

const useStyles = makeStyles(theme => ({
	root: {
		//maxWidth: 345
	},
	form: {
		'& > *': {
			margin: theme.spacing(1)
			//width: 200
		}
	},
	media: {
		height: 140
	},
	fontSize: 100
}));

const Coworking = props => {
	const isRowBased = useMediaQuery('(min-width: 500px)');
	const classes = useStyles();
	const [animation, setAnimation] = useState(false);
	const [isModal, setModoal] = useState(false);
	const [mensage, setMensaje] = useState({
		state: false,
		messa: null,
		severity: null
	});

	const dataModal = [
		{
			titulo: 'Ubicaciones de COWORKING en lima',
			descri: 'Trabaje donde sea, por hora, día, semana, meses o por años.',
			href: '/InCompany',
			img:
				'https://cdn.pixabay.com/photo/2017/05/16/11/45/blue-waves-2317606_960_720.png'
		}
	];

	const coworkings = [
		{
			image:
				'https://www.regus.com.pe/Images/image-coworking-prop-1-tablet.jpg',
			title: 'Coworking compartidos',
			descrip:
				'Llegue cuando quiera, encontrará un escritorio en un ambiente compartido y profesional, que se maneja de acuerdo a como van llegando. Elija entre 5 o 10 días al mes en la ubicación que haya seleccionado.',
			direction: 'right'
		},
		{
			image:
				'https://www.regus.com.pe//Images/image-coworking-prop-2-tablet.jpg',
			title: 'Coworking fijos',
			descrip:
				'Siéntase como en su casa con un escritorio propio y un espacio de almacenamiento personal dentro de un entorno profesional compartido. Obtenga acceso ilimitado 24/7 en la ubicación elegida.',
			direction: 'right'
		},
		{
			image:
				'https://www.estudiahosteleria.com/blog/wp-content/uploads/2015/05/organizaci%C3%B3n-de-eventos-ESAH.jpg',
			title: 'Coworking eventos',
			descrip:
				'Espacios flexibles e innovadores para tus eventos y reuniones de negocio. ',
			direction: 'left'
		},
		{
			image:
				'https://omnibees.com/blog/wp-content/uploads/2018/11/339-como-lograr-una-buena-capacitacion-de-personal-940x510.jpg',
			title: 'Coworking capacitaciones',
			descrip:
				'Espacios flexibles e innovadores para tus capacitaciones y entrenamientos de negocio a un muy buen precio.',
			direction: 'left'
		}
	];

	const HandeCloseModal = () => {
		setModoal(false);
	};

	const openModal = () => {
		setModoal(true);
	};

	const sendMessageCoworking = async e => {
		e.preventDefault();
		const form = new FormData(e.target);
		const data = {
			name: form.get('nombre'),
			correo: form.get('correo'),
			phone: form.get('telefono'),
			product: form.get('producto'),
			description: form.get('comentario')
		};

		try {
			const Toast = Swal.mixin({
				toast: true,
				position: 'top-end',
				showConfirmButton: false,
				timer: 3000,
				timerProgressBar: true,
				onOpen: toast => {
					toast.addEventListener('mouseenter', Swal.stopTimer);
					toast.addEventListener('mouseleave', Swal.resumeTimer);
				}
			});
			await database.ref('Model/coworking/interesados').push(data);
			HandeCloseModal();
			Toast.fire({
				icon: 'success',
				title: 'Se envio con exito su mensaje'
			});
		} catch (error) {
			console.log(error);
			setMensaje({ state: true, messa: error, severity: 'error' });
		}
	};

	useEffect(() => {
		let idContacto = document.getElementById('contacto');
		idContacto.style.display = 'none';
		document.getElementsByTagName('body')[0].onscroll = () => {
			setAnimation(true);
		};
		return () => {
			idContacto.style.display = '';
		};
	}, []);

	return (
		<div>
			<ModalIncopany
				img='https://cdn.pixabay.com/photo/2017/05/16/11/45/blue-waves-2317606_960_720.png'
				data={dataModal}
			/>

			<Modal open={isModal} handleClose={HandeCloseModal}>
				<div className='ubicacion text-center'>
					<h1>Obtener cotización</h1>
					<Divider />
				</div>
				{mensage.state && (
					<div>
						<Alert severity={mensage.severity}>{mensage.messa}</Alert>
						<br />
						<br />
					</div>
				)}

				<form onSubmit={sendMessageCoworking} className={classes.root}>
					<Grid container spacing={2}>
						<Grid item xs={isRowBased ? 6 : 12}>
							<TextField
								id='outlined-basic'
								label='Mi Nombre es'
								variant='outlined'
								fullWidth
								name='nombre'
								required
								size='medium'
							/>
						</Grid>
						<Grid item xs={isRowBased ? 6 : 12}>
							<TextField
								id='outlined-basic'
								label='Mi dirección de correo electrónico es'
								variant='outlined'
								fullWidth
								name='correo'
								required
								type='email'
								size='medium'
							/>
						</Grid>
						<Grid item xs={isRowBased ? 6 : 12}>
							<TextField
								id='outlined-basic'
								label='Mi teléfono es'
								variant='outlined'
								fullWidth
								type='tel'
								name='telefono'
								required
								size='medium'
							/>
						</Grid>
						<Grid item xs={isRowBased ? 6 : 12}>
							<TextField
								id='outlined-basic'
								select
								label='Producto deseado'
								fullWidth
								name='producto'
								required
								variant='outlined'>
								{[
									'coworking',
									'Espacio de oficina',
									'Salas de reunión',
									'trabajo',
									'otro'
								].map((option, index) => (
									<MenuItem key={index} value={option}>
										{option}
									</MenuItem>
								))}
							</TextField>
						</Grid>

						<Grid item xs={12}>
							<TextField
								id='outlined-basic'
								label='Comentario'
								rows='6'
								multiline={true}
								variant='outlined'
								fullWidth
								name='comentario'
								type='tel'
								required
								size='medium'
							/>
						</Grid>
						<Grid item xs={12}>
							<p>
								Consulte nuestra <a href='#'>políticade privacidad </a> para
								saber cómo guardamos y usamos su información personal.
							</p>
						</Grid>
						<Grid item xs={12}>
							<button
								class='btn btn-primary'
								style={{ width: '100%', height: '35px' }}>
								SOLICITAR COTIZACIÓN
							</button>
						</Grid>
					</Grid>
				</form>
			</Modal>

			<Container
				className='ubicacion'
				maxWidth='md'
				style={{ textAlign: 'center', padding: '1em' }}>
				<br></br>
				<h1>COWORKING EN LIMA</h1>
				<br />

				<p style={{ fontSize: '20px' }}>
					Disfrute de trabajar en un espacio común, con opciones flexibles para
					que sólo pague por lo que use.
				</p>
				<br />
				<Divider />
				<br />
				<br />

				<Grid container spacing={4}>
					{coworkings.map((ele, index) => (
						<Slide
							key={index}
							timeout={1500}
							direction={ele.direction}
							in={animation}>
							<Grid item xs={isRowBased ? 6 : 12}>
								<Card className={classes.root}>
									<CardActionArea>
										<CardMedia
											className={classes.media}
											image={ele.image}
											title='Contemplative Reptile'
										/>
										<CardContent>
											<Typography gutterBottom variant='h3' component='h3'>
												{ele.title}
											</Typography>
											<p color='textSecondary' style={{ fontSize: '14px' }}>
												{ele.descrip}
											</p>
										</CardContent>
									</CardActionArea>
									<CardActions style={{ justifyContent: 'center' }}>
										<Button
											onClick={() => openModal()}
											size='large'
											style={{ fontSize: '15px' }}
											color='primary'>
											OBTENER COTIZACIÓN
										</Button>
									</CardActions>
								</Card>
							</Grid>
						</Slide>
					))}
				</Grid>

				<br />
				<br />
				<Divider />
				<br />

				<Ubicacion />
			</Container>
		</div>
	);
};

export default Coworking;
