/** @format */

import React from 'react';
import './style.css';

const Hearder = () => {
	return (
		<header
			className='masthead'
			// style={{
			// backgroundImage:
			// "url('https://www.ink-grid.com/wp-content/uploads/2019/09/001-1400x600.png')"
			// }}>
		>
			<div className=''>
				<br></br>
				<br />
				<br />
				<br></br>
				<br></br>
				<br />
				<br />
				<br></br>

				<div
					id='carouselExampleIndicators'
					className='carousel slide '
					data-ride='carousel'>
					<ol class='carousel-indicators'>
						<li
							data-target='#carouselExampleIndicators'
							data-slide-to='0'
							class='active'></li>
						<li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
						<li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
					</ol>
					<div class='carousel-inner'>
						<div class='carousel-item active'>
							<img
								class='d-block w-100'
								src='https://www.ink-grid.com/wp-content/uploads/2019/09/001-1400x600.png'
								alt='First slide'
							/>
						</div>
						<div class='carousel-item'>
							<img
								class='d-block w-100'
								src='https://www.ink-grid.com/wp-content/uploads/2019/09/002-1400x600.png'
								alt='Second slide'
							/>
						</div>
						<div class='carousel-item'>
							<img
								class='d-block w-100'
								src='https://www.ink-grid.com/wp-content/uploads/2019/09/Voluntariado_Programa-1400x600-1400x600.png'
								alt='Third slide'
							/>
						</div>
						<div class='carousel-item'>
							<img
								class='d-block w-100'
								src='https://www.ink-grid.com/wp-content/uploads/2019/09/004-1400x600.png'
								alt='First slide'
							/>
						</div>

						<div class='carousel-item'>
							<img
								class='d-block w-100'
								src='https://www.ink-grid.com/wp-content/uploads/2019/09/Empleos_InkGrid2-1400x600.png'
								alt='First slide'
							/>
						</div>
						<div class='carousel-item'>
							<img
								class='d-block w-100'
								src='https://www.ink-grid.com/wp-content/uploads/2019/11/Gestion_de_Riesgos_slider-1400x600.png'
								alt='First slide'
							/>
						</div>
						<div class='carousel-item'>
							<img
								class='d-block w-100'
								src='https://www.ink-grid.com/wp-content/uploads/2019/11/Gestion_Estratégica_de_Redes_Sociales_Slider22-1400x600.png'
								alt='First slide'
							/>
						</div>
						<div class='carousel-item'>
							<img
								class='d-block w-100'
								src='https://www.ink-grid.com/wp-content/uploads/2019/11/procesosslider-1400x600.png'
								alt='First slide'
							/>
						</div>
					</div>
					<a
						class='carousel-control-prev'
						href='#carouselExampleIndicators'
						role='button'
						data-slide='prev'>
						<span class='carousel-control-prev-icon' aria-hidden='true'></span>
						<span class='sr-only'>Previous</span>
					</a>
					<a
						class='carousel-control-next'
						href='#carouselExampleIndicators'
						role='button'
						data-slide='next'>
						<span class='carousel-control-next-icon' aria-hidden='true'></span>
						<span class='sr-only'>Next</span>
					</a>
				</div>
			</div>
		</header>
	);
};

export default Hearder;
