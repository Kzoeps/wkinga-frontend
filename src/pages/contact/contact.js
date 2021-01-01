import {useState} from "react";
import styles from './contact.module.css';
import Footer from "../../components/footer/footer";
import Button from "../../components/button/button";

export default function Contact() {
	const [firstName, setFirstname] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const firstNameHandle = e => {
		setFirstname(e.target.value);
	}
	const lastNameHandle = e => {
		setLastName(e.target.value);
	}
	const emailHandle = e => {
		setEmail(e.target.value);
	}
	const messageHandle = e => {
		setMessage(e.target.value);
	}

	return (
		<div className={styles.contactUsContainer}>
			{/*<NavigationBar/>*/}
			<div className={styles.contactUsTitleHolder}>
				<p>Got a Questions</p>
				<h3>Contact WBK</h3>
				<p className={styles.titleContent}>We’re here to help and answer any question
					you might have. We look forward to hearing from you 🙂</p>
			</div>

			<form className={styles.formContainer}>
				<div className={styles.formStyle}>
					<label for="exampleInputEmail1">First Name</label>
					<input
						onChange={firstNameHandle}
						value={firstName}
						type="text"
						class="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"/>

				</div>

				<div className={styles.formStyle}>
					<label for="exampleInputEmail1">Last Name</label>
					<input
						onChange={lastNameHandle}
						value={lastName}
						type="text"
						class="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"/>

				</div>

				<div className={styles.formStyle}>
					<label for="exampleInputEmail1">Email</label>
					<input
						onChange={emailHandle}
						value={email}
						type="email"
						class="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"/>

				</div>

				<div className={styles.formStyle}>
					<label for="exampleInputEmail1">Message</label>
					<textarea
						onChange={messageHandle}
						value={message}
						type="text"
						class="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"/>

				</div>
				<Button buttonLabel={'Send Message'} className={styles.contactUsButton}/>
			</form>
			<Footer/>
		</div>
	)
}

