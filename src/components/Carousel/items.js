/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Items = props => {
	return (
		<div class='slide bg-dark' style={{ position: 'relative' }}>
			<div class='content'>
				<div class='container' style={{ color: '#ffffff' }}>
					<div class='col-md-6 caption'>
						<br></br>
						<br></br>
						<h1>{props.titulo}</h1>
						<p>{props.descri}</p>
						<Link
							to={props.href}
							style={{ fontSize: '20px', textDecoration: 'none' }}>
							comenzar <ArrowForwardIcon fontSize='default' />
						</Link>
					</div>
				</div>
			</div>
			<div
				style={
					props.isRowBased
						? {
								position: 'absolute',
								bottom: '0%',
								right: '0%',
								height: '70%',
								width: '50%',
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center center',
								backgroundSize: 'contain',
								backgroundImage: `url(${props.img})`
						  }
						: null
				}></div>
		</div>
	);
};

export default Items;
