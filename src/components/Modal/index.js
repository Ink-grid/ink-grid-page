/** @format */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles(theme => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		width: 500,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3)
	}
}));

const Modals = props => {
	const classes = useStyles();

	return (
		<Modal
			aria-labelledby='transition-modal-title'
			aria-describedby='transition-modal-description'
			className={classes.modal}
			open={props.open}
			onClose={props.handleClose}>
			<Slide direction='down' in={props.open}>
				<div className={classes.paper}>{props.children}</div>
			</Slide>
		</Modal>
	);
};

export default Modals;
