import Login from "./login";
import {useContext, useState} from "react";
import {Redirect} from 'react-router-dom';
import React from "react";
import {AuthContext} from "../../../components/contexts/auth-context";
import {login} from "../../../api/auth.api";

export default function LoginContainer() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [dirtyForm, setDirtyForm] = useState({email: false, password: false})
	const [pending, setPending] = useState(false);
	const [error, setError] = useState('');
	const [emailError, setEmailError] = useState('');
	const {token, setToken} = useContext(AuthContext);

	const emailHandle = e => {
		setEmail(e.target.value);
		if (email) {
			if (validateEmail(email)) {
				setEmailError('');
			} else {
				setEmailError('Invalid Email');
			}
		}
		setDirtyForm({
			...dirtyForm,
			email: true
		})
	}
	const passwordHandle = e => {
		setPassword(e.target.value);
		setDirtyForm({
			...dirtyForm,
			password: true
		})
	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		setDirtyForm({
			...dirtyForm,
			password: true,
			email: true
		});
		if (email && password && validateEmail(email)) {
			setPending(true);
			const accessToken = await login(email, password);
			if (accessToken === false) {
				setError('Invalid Credentials');
				setPending(false);
			} else {
				localStorage.setItem('token', accessToken);
				setToken(accessToken);
			}
		}
	}

	const validateEmail = (email) => {
		const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (email) {
			return (emailRegex.test(email));
		}
		return false;
	}

	if (token) return (<Redirect to={'/dashboard'}/>)
	return (
		<Login
			email={email}
			emailHandle={emailHandle}
			password={password}
			passwordHandle={passwordHandle}
			handleSubmit={handleSubmit}
			dirtyForm={dirtyForm}
			pending={pending}
			error={error}
			emailError={emailError}
		/>
	)
}
