/** @format */

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyA0KSuEXMUASdslhEopeL90NcBuU35opFM',
	authDomain: 'ink-grid.firebaseapp.com',
	databaseURL: 'https://ink-grid.firebaseio.com',
	projectId: 'ink-grid',
	storageBucket: 'ink-grid.appspot.com',
	messagingSenderId: '665911529629',
	appId: '1:665911529629:web:a2e61ae4df737c4dbe0474',
	measurementId: 'G-RRL0S08ZGF'
};

firebase.initializeApp(firebaseConfig);
export const { auth } = firebase;
export const provider = new firebase.auth.FacebookAuthProvider();
export const providerGoogle = new firebase.auth.GoogleAuthProvider();
export const providerGithub = new firebase.auth.GithubAuthProvider();
export const storage = firebase.storage();
export const database = firebase.database();
