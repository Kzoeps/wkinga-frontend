import Contact from "./contact";
import {useState} from "react";

export default function ContactContainer() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [emailErr, setEmailErr] = useState( '');
	const [dirtyForm, setDirtyForm] = useState({firstName: false, email: false, message: false});

	const firstNameHandle = e => {
		setFirstName(e.target.value);
		setDirtyForm({
			...dirtyForm,
			firstName: true
		})
	}
	const lastNameHandle = e => {
		setLastName(e.target.value);
	}
	const emailHandle = e => {
		setEmail(e.target.value);
		if (email) {
			if (validateEmail(email)) {
				setEmailErr('');
			} else {
				setEmailErr('Email Invalid')
			}
		}
		setDirtyForm({
			...dirtyForm,
			email: true
		})
	}
	const messageHandle = e => {
		setMessage(e.target.value);
		setDirtyForm({
			...dirtyForm,
			message: true
		})
	}
	const validateEmail = (email) => {
		const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (email) {
			return (emailRegex.test(email));
		}
		return false;
	}
	const submitMessage = e => {
		e.preventDefault();
		setDirtyForm({
			...dirtyForm,
			email: true,
			firstName: true,
			message: true
		})
		if (firstName && email && message && validateEmail(email)) {
			console.log('submitted')
		}
	}

	return (
		<Contact
			firstName={firstName}
			firstNameHandle={firstNameHandle}
			lastName={lastName}
			lastNameHandle={lastNameHandle}
			email={email}
			emailHandle={emailHandle}
			message={message}
			messageHandle={messageHandle}
			dirtyForm={dirtyForm}
			emailErr={emailErr}
			submit={submitMessage}
		/>
	)
}
