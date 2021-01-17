import Login from "./login";
import {useContext, useState} from "react";
import {login} from "../../../api/auth.api";
import {Redirect} from 'react-router-dom';
import {AuthContext} from "../authContext";

export default function LoginContainer() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [dirtyForm, setDirtyForm] = useState({email: false, password: false})
	const [pending, setPending] = useState(false);
	const [error, setError] = useState('');
	const [emailError, setEmailError] = useState('');
	const contextStuff = useContext(AuthContext);
	debugger

	let token;

	if (localStorage.getItem('token')) {
		token = localStorage.getItem('token');
	}

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
		setError('')
		if (email && password && validateEmail(email)) {
			setPending(true);
			const data = await login(email, password);
			if (data.accessToken) {
				localStorage.setItem('token', data.accessToken);
			} else {
				setError('Invalid Credentials');
			}
			setPending(false);
		}
		setDirtyForm({
			...dirtyForm,
			password: true,
			email: true
		})
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
