/** @format */

import React from 'react';
import './style.css';

const Contacto = () => {
	return (
		<section
			id='contact'
			style={{
				backgroundColor: '#212529',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: '50%;',
				paddingTop: '250px',
				paddingBottom: '200px'
			}}>
			<div class='container'>
				<div class='row'>
					<div class='col-lg-12 text-center'>
						<h2 class='text-uppercase section-heading'>CONTACTANOS</h2>
						<h3 class='section-subheading text-muted'>
							Dirección: Av. Javier Prado Este 410, Cercado de Lima 15046
						</h3>
					</div>
				</div>
				<div class='row'>
					<div class='col-lg-12'>
						<form id='contactForm' name='contactForm' novalidate='novalidate'>
							<div class='form-row'>
								<div class='col col-md-6'>
									<div class='form-group'>
										<input
											class='form-control'
											type='text'
											id='name'
											placeholder='Tu Nombre *'
											required=''
										/>
										<small class='form-text text-danger flex-grow-1 help-block lead'></small>
									</div>
									<div class='form-group'>
										<input
											class='form-control'
											type='email'
											id='email'
											placeholder='Tu correo electrónico *'
											required
										/>
										<small class='form-text text-danger help-block lead'></small>
									</div>
									<div class='form-group'>
										<input
											class='form-control'
											type='tel'
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
											placeholder='Tu mensaje *'
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
	);
};

export default Contacto;