import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from './App';
const Auth = (props) => {
	const [user, setUser] = useContext(UserContext);
	return (
		user?props.children: <Redirect to={'login'}/>
	)
};

export default Auth;