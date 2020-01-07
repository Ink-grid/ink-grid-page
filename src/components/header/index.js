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
			<br></br>
			<br></br>
			<br></br>
			<div
				style={{
					padding: '1em',
					backgroundImage:
						"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZhd44ggtMy4yp0sATCvGqulYZpakJgg8TPGTJGNNXNUNkWqh&s')",
					backgroundColor: '#cccccc',
					backgroundRepeat: 'no-repeat',
					backgroundSize: '100% 100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '600px'
				}}>
				<div
					style={{
						// background: 'blue',
						padding: '1em',
						width: '50%',
						display: 'flex',
						height: '100%',
						justifyContent: 'space-between'
					}}>
					<div style={{ background: 'yellow' }}>
						<div
							style={{
								borderStyle: 'groove',
								borderColor: '#ffffff',
								background: 'blue',
								borderRadius: '75px',
								alignItems: 'center',
								justifyContent: 'center',
								display: 'flex',
								width: '150px',
								height: '150px'
							}}>
							BBS <br /> Building block solutions
						</div>
					</div>
					<div>BBB</div>
				</div>
			</div>
		</header>
	);
};

export default Hearder;
