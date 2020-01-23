/** @format */

import React from 'react';
import './style.css';

const Hearder = () => {

	

	return (
		<header
			className='masthead'
		>
			<br></br>
			<br></br>
			<br></br>
			
			<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
				<ol class="carousel-indicators">
					<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
				</ol>
				<div class="carousel-inner">
					<div class="carousel-item active">
					<img src="https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="d-block w-100" alt="." />
					</div>
					<div class="carousel-item">
					<img src="https://www.muypymes.com/impresion-pyme/wp-content/uploads/2019/06/HP-Instant-Ink-gratis.jpg" class="d-block w-100" alt="..." />
					</div>
					<div class="carousel-item">
					<img src="https://www.muypymes.com/impresion-pyme/wp-content/uploads/2019/08/HP-OfficeJet-Pro-9000-28.jpg" class="d-block w-100" alt="..." />
					</div>
				</div>
				<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
			</div>
			

		</header>
	);
};

export default Hearder;
