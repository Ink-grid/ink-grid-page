/** @format */

import React from 'react';
import Swal from 'sweetalert2';
import { database } from '../../../../services/firebase';

const Contacto = props => {
	const sendContacto = async e => {
		e.preventDefault();
		const form = new FormData(e.target);
		const data = {
			name: form.get('nombre'),
			correo: form.get('correo'),
			// const d = { nombre, email, empresa, cargo, celular };
			empresa: form.get('empresa'),
			cargo: form.get('cargo'),
			tema: props.tema,
			phone: form.get('telefono'),
			message: form.get('mensaje')
		};

		try {
			const resul = await Swal.fire({
				title: 'Estas seguro?',
				text: 'no se porda revertir esta acción!',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'OK'
			});

			if (resul.value) {
				await database.ref('Model/cotactos-inkgrid/incompany').push(data);
				const resutl = await Swal.fire(
					'Éxito!',
					'su mensage se envio con exito, pronto nos contactaremos con usted!.',
					'success'
				);
				if (resutl.value) {
					window.location = '/InCompany';
				}

				//
			}
		} catch (error) {
			alert(error);
		}
	};

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-lg-12'>
					<h1>Separe una cita con un experto:</h1>
					<br />
					<form onSubmit={sendContacto} id='contactForm' name='contactForm'>
						<div className='form-row'>
							<div className='col col-md-6'>
								<div className='form-group'>
									<input
										style={{ fontSize: '15px', padding: '2em' }}
										className='form-control'
										type='text'
										id='name'
										placeholder='Tu Nombre *'
										required
										name='nombre'
									/>
									<small
										className='form-text text-danger
										 flex-grow-1 help-block lead'></small>
								</div>
								<div className='form-group'>
									<input
										style={{ fontSize: '15px', padding: '2em' }}
										className='form-control'
										type='email'
										id='email'
										name='correo'
										placeholder='Tu correo electrónico *'
										required
									/>
									<small className='form-text text-danger help-block lead'></small>
								</div>
								<div className='form-group'>
									<input
										style={{ fontSize: '15px', padding: '2em' }}
										className='form-control'
										type='text'
										id='email'
										name='empresa'
										placeholder='Tu empresa *'
										required
									/>
									<small className='form-text text-danger help-block lead'></small>
								</div>
							</div>
							<div className='col-md-6'>
								<div className='form-group'>
									<input
										style={{ fontSize: '15px', padding: '2em' }}
										className='form-control'
										type='phone'
										id='email'
										name='telefono'
										placeholder='Tu telefonno *'
										required
									/>
									<small className='form-text text-danger help-block lead'></small>
								</div>
								<div className='form-group'>
									<input
										style={{ fontSize: '15px', padding: '2em' }}
										className='form-control'
										type='text'
										id='email'
										name='cargo'
										placeholder='Tu cargo *'
										required
									/>
									<small className='form-text text-danger help-block lead'></small>
								</div>
								<div className='form-group'>
									<textarea
										style={{ fontSize: '15px', padding: '1em' }}
										className='form-control'
										id='message'
										name='mensaje'
										placeholder='Escriba aquí sus inquietudes o envianos una nota para poder ayudarlo *'
										required></textarea>
									<small className='form-text text-danger help-block lead'></small>
								</div>
							</div>
							<div className='col'>
								<div className='clearfix'></div>
							</div>
							<div className='col-lg-12 text-center'>
								<div id='success'></div>
								<button
									className='btn  btn-primary btn-xl text-uppercase'
									style={{ backgroundColor: '#353A69' }}
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
	);
};

export default Contacto;
