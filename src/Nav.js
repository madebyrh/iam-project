import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'

const Nav = () => {
	return (
		<AppBar position="static">
		<Toolbar>
		
			<Link to='/'>
				<h1>Home</h1>
			</Link>
			<Link to='/money'>
				<h1>Money</h1>
			</Link>
			<Link to='/memo'>
				<h1>Memo</h1>
			</Link>
		
		</Toolbar>
		</AppBar>
	);
};

export default Nav;