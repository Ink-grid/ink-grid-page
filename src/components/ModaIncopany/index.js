/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const ModalIncompany = props => {
	return (
		<div class='parallax-slider'>
			<div class='slider-wrapper'>
				{props.data.map((ele, index) => (
					<div
						className={
							index === 0 ? 'slide-active slide bg-dark' : 'slide bg-dark'
						}
						key={index}
						style={{ position: 'relative' }}>
						<div class='content'>
							<div class='container' style={{ color: '#ffffff' }}>
								<div class='col-md-6 caption'>
									<br></br>
									<br></br>
									<br></br>

									<h1>{ele.titulo}</h1>
									<p>{ele.descri}</p>
									{ele.isLink && (
										<Link
											to={ele.href}
											style={{ fontSize: '20px', textDecoration: 'none' }}>
											comenzar <ArrowForwardIcon fontSize='default' />
										</Link>
									)}
								</div>
							</div>
						</div>
						<div
							className='rotate'
							style={{
								transform: 'scaleX(-1)',
								position: 'absolute',
								bottom: '0%',
								right: '0%',
								height: '70%',
								width: '50%',
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center center',
								backgroundSize: 'contain',
								backgroundImage: `url(${ele.img})`
							}}></div>
					</div>
				))}
			</div>
			<div className='slide-indicator'>
				<ol>
					{props.data.length > 1 &&
						props.data.map((e, index) =>
							index === 0 ? <li className='active'></li> : <li></li>
						)}
				</ol>
			</div>
		</div>
	);
};

export default ModalIncompany;
