import Login from "./login";
import {useState} from "react";
import {login} from "../../api/auth.api";

export default function LoginContainer() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [dirtyForm, setDirtyForm] = useState({email: false, password: false})
	const [pending, setPending] = useState(false);
	const [openError, setOpenError] = useState(false);
	const [openSuccess, setOpenSuccess] = useState(false);

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
	const handleClose = value => {
		if (value === 'err') setOpenError(false);
		else setOpenSuccess(false);
	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (email && password) {
			setPending(true);
			const data = await login(email, password);
			debugger;
			if (data.accessToken) {
				setOpenSuccess(true);
				localStorage.setItem('token', data.accessToken);
			} else {
				setOpenError(true);
			}
			setPending(false);
			console.log(openSuccess);
			console.log(openError);
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
			error={openError}
			success={openSuccess}
			handleClose={handleClose}
		/>
	)
}
