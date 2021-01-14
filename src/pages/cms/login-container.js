import Login from "./login";
import {useState} from "react";
import {login} from "../../api/auth.api";

export default function LoginContainer() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [dirtyForm, setDirtyForm] = useState({email: false, password: false})
	const [pending, setPending] = useState(false);
	const [error, setError] = useState('');

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
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (email && password) {
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
		/>
	)
}
