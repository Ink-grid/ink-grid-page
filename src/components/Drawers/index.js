/** @format */

import React, { useEffect } from 'react';
import '@material/drawer/dist/mdc.drawer.css';
import '@material/list/dist/mdc.list.css';
import './style.css';
// import { MDCList } from '@material/list';
import { MDCDrawer } from '@material/drawer';
import { MDCList } from '@material/list';
const Drawers = () => {
	useEffect(() => {
		const list = MDCList.attachTo(document.querySelector('.mdc-list'));
		list.wrapFocus = false;
		// const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
	}, []);

	return (
		<aside
			class='mdc-drawer'
			style={{ height: '700px', zIndex: '-moz-initial' }}>
			<div class='mdc-drawer__content'>
				<nav class='mdc-list'>
					<a
						class='mdc-list-item mdc-list-item--activated'
						href='#'
						aria-current='page'>
						<i class='material-icons mdc-list-item__graphic' aria-hidden='true'>
							inbox
						</i>
						<span class='mdc-list-item__text'>Inbox</span>
					</a>
					<a class='mdc-list-item' href='#'>
						<i class='material-icons mdc-list-item__graphic' aria-hidden='true'>
							star
						</i>
						<span class='mdc-list-item__text'>Star</span>
					</a>
					<a class='mdc-list-item' href='#'>
						<i class='material-icons mdc-list-item__graphic' aria-hidden='true'>
							send
						</i>
						<span class='mdc-list-item__text'>Sent Mail</span>
					</a>
					<a class='mdc-list-item' href='#'>
						<i class='material-icons mdc-list-item__graphic' aria-hidden='true'>
							drafts
						</i>
						<span class='mdc-list-item__text'>Drafts</span>
					</a>

					<hr class='mdc-list-divider' />
					<h6 class='mdc-list-group__subheader'>Labels</h6>
					<a class='mdc-list-item' href='#'>
						<i class='material-icons mdc-list-item__graphic' aria-hidden='true'>
							bookmark
						</i>
						<span class='mdc-list-item__text'>Family</span>
					</a>
					<a class='mdc-list-item' href='#'>
						<i class='material-icons mdc-list-item__graphic' aria-hidden='true'>
							bookmark
						</i>
						<span class='mdc-list-item__text'>Friends</span>
					</a>
					<a class='mdc-list-item' href='#'>
						<i class='material-icons mdc-list-item__graphic' aria-hidden='true'>
							bookmark
						</i>
						<span class='mdc-list-item__text'>Work</span>
					</a>
				</nav>
			</div>
		</aside>
	);
};

export default Drawers;
