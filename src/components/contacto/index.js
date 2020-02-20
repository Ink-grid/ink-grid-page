/** @format */

import React, { useEffect } from 'react';
import './style.css';
import logo from '../../../src/logo.png';
import logoB from '../../../src/logo-dark.png';
import Ubicacion from '../Ubicacion';
import Swal from 'sweetalert2';
import { database } from '../../services/firebase';
const Contacto = () => {
	const sendContacto = async e => {
		e.preventDefault();
		const form = new FormData(e.target);
		const data = {
			name: form.get('nombre'),
			correo: form.get('correo'),
			phone: form.get('telefono'),
			message: form.get('mensaje')
		};

		try {
			const resul = await Swal.fire({
				title: 'Estas seguro?',
				text: 'no se pordra revertir esta accón!',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'OK'
			});

			if (resul.value) {
				await database.ref('Model/cotactos-inkgrid/interesados').push(data);
				const resutl = await Swal.fire(
					'Éxito!',
					'su mensage se envio con exito, pronto nos contactaremos con usted!.',
					'success'
				);
				if (resutl.value) {
					window.location = '/';
				}

				//
			}
		} catch (error) {
			alert(error);
		}
	};

	useEffect(() => {
		document.getElementById('logo-dark').src = logoB;
		document.getElementById('Idmenu').classList.add('cambiar-fondo-menu');
		document.getElementById('contacto').style.display = 'none';

		window.scrollTo(0, 0);

		return () => {
			document.getElementById('contacto').style.display = '';
			document.getElementById('logo-dark').src = logo;
		};
	}, []);
	return (
		<React.Fragment>
			<section
				id='contact'
				style={{
					backgroundColor: 'transparent',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: '50%;',
					paddingTop: '120px',
					paddingBottom: '100px'
				}}>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-12 header-contacto text-center'>
							<h2 class='text-uppercase section-heading'>CONTACTANOS</h2>
							<h3 class='section-subheading text-muted'>
								Dirección: Av. Javier Prado Este 410, Cercado de Lima 15046
							</h3>
						</div>
					</div>
					<div class='row'>
						<div class='col-lg-12'>
							<form onSubmit={sendContacto} id='contactForm' name='contactForm'>
								<div class='form-row'>
									<div class='col col-md-6'>
										<div class='form-group'>
											<input
												class='form-control'
												type='text'
												id='name'
												placeholder='Tu Nombre *'
												required
												name='nombre'
											/>
											<small
												class='form-text text-danger
										 flex-grow-1 help-block lead'></small>
										</div>
										<div class='form-group'>
											<input
												class='form-control'
												type='email'
												id='email'
												name='correo'
												placeholder='Tu correo electrónico *'
												required
											/>
											<small class='form-text text-danger help-block lead'></small>
										</div>
										<div class='form-group'>
											<input
												class='form-control'
												type='tel'
												name='telefono'
												placeholder='Tu telefono *'
												required
											/>
											<small class='form-text text-danger help-block lead'></small>
										</div>
									</div>
									<div class='col-md-6'>
										<div class='form-group'>
											<textarea
												class='form-control'
												id='message'
												name='mensaje'
												placeholder='Escriba aquí sus inquietudes o envianos una nota para poder ayudarlo *'
												required></textarea>
											<small class='form-text text-danger help-block lead'></small>
										</div>
									</div>
									<div class='col'>
										<div class='clearfix'></div>
									</div>
									<div class='col-lg-12 text-center'>
										<div id='success'></div>
										<button
											class='btn btn-primary btn-xl text-uppercase'
											id='sendMessageButton'
											type='submit'>
											Enviar
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>

			<Ubicacion />
		</React.Fragment>
	);
};

export default Contacto;
