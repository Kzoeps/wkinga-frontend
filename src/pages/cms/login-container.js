import Login from "./login";
import {useState} from "react";

export default function LoginContainer() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [dirtyForm, setDirtyForm] = useState({email: false, password: false})
	const emailHandle = e => {
		setEmail(e.target.value);
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
	const handleSubmit = e => {
		e.preventDefault();
		if (email && password) {
			console.log(email,password)
		}
		setDirtyForm({
			...dirtyForm,
			password: true,
			email: true
		})
	}
	return (
		<Login
			email={email}
			emailHandle={emailHandle}
			password={password}
			passwordHandle={passwordHandle}
			handleSubmit={handleSubmit}
			dirtyForm={dirtyForm}
		/>
	)
}
