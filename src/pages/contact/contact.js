import styles from './contact.module.css';
import utilStyles from '../../assets/global-styles/utils.module.css';
import Button from "../../components/button/button";
import NavigationBar from "../../components/navigation-bar/navigationBar";
import Footer from "../../components/footer/footer";

export default function Contact(props) {

	return (
		<div className={styles.contactUsContainer}>
			<NavigationBar/>
			<div className={styles.contactUsTitleHolder}>
				<p>Got Questions ?</p>
				<h3>Contact WBK</h3>
				<p className={styles.titleContent}>We’re here to help and answer any question
					you might have. We look forward to hearing from you 🙂</p>
			</div>

			<form className={styles.formContainer}>
				<div className={styles.formStyle}>
					<label htmlFor="exampleInputEmail1">First Name</label>
					<input
						onChange={props.firstNameHandle}
						value={props.firstName}
						type="text"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"/>
					<p className={`${utilStyles.errorMessage}`}>{props.dirtyForm.firstName ? (props.firstName ? '': 'Required Field'): ''}</p>
				</div>

				<div className={styles.formStyle}>
					<label htmlFor="exampleInputEmail1">Last Name</label>
					<input
						onChange={props.lastNameHandle}
						value={props.lastName}
						type="text"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"/>

				</div>

				<div className={styles.formStyle}>
					<label htmlFor="exampleInputEmail1">Email</label>
					<input
						onChange={props.emailHandle}
						value={props.email}
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"/>
					<p className={`${utilStyles.errorMessage}`}>{props.email ? props.emailErr : ''}</p>
					<p className={`${utilStyles.errorMessage}`}>{props.dirtyForm.email ? (props.email ? '' : 'Required Field'): ''}</p>
				</div>

				<div className={styles.formStyle}>
					<label htmlFor="exampleInputEmail1">Message</label>
					<textarea
						onChange={props.messageHandle}
						value={props.message}
						type="text"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"/>
					<p className={`${utilStyles.errorMessage}`}>{props.dirtyForm.message ? (props.message ? '' : 'Required Field') : ''}</p>
				</div>
				<Button buttonLabel={'Send Message'} className={styles.contactUsButton} onClick={props.submit}/>
			</form>
			<Footer/>
		</div>
	)
}

