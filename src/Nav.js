import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div>
			<Link to='/'>
				<h1>Home</h1>
			</Link>
			<Link to='/money'>
				<h1>Money</h1>
			</Link>
			<Link to='/memo'>
				<h1>Memo</h1>
			</Link>
		</div>
	);
};

export default Nav;