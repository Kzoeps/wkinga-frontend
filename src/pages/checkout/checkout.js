import styles from './checkout.module.css';
import NavigationBar from "../../components/navigation-bar/navigationBar";
import Footer from "../../components/footer/footer";
import {Button} from "@material-ui/core";
import {useState} from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import Receipt from "../../components/receipt/receipt";

export default function Checkout() {
	const [firstName, setFirstname] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [journalNumber, setJournalNumber] = useState("");
	const [flag, setFlag] = useState(true);
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
	const [open, setOpen] = useState(false);
	const [check, setCheck] = useState(false)
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleCheck = e => {
		if (check) {
			setCheck(false)
		} else {
			setCheck(true);
		}

	}

	const handleClose = () => {
		setOpen(false);
	};
	const firstNameHandle = e => {
		setFirstname(e.target.value);
	}
	const lastNameHandle = e => {
		setLastName(e.target.value);
	}
	const emailHandle = e => {
		setEmail(e.target.value);
	}
	const handleBtn = () => {
		if (flag) {
			setFlag(false);
		}
	}
	const handleBtn1 = () => {
		if (!flag) {
			setFlag(true);
		}
	}
	const journalHandle = e => {
		setJournalNumber(e.target.value)
	}
	const handleClick = e => {
		e.preventDefault();
		window.open(
			`mailto:jigmetashi02@gmail.com?subject=MakingOrder&body=Name: ${firstName} ${lastName}`
		);
	}
	return (
		<div className={styles.checkoutContainer}>
			<NavigationBar/>
			<div className={styles.checkOutTitleHolder}>
				<p>Check Out</p>
				<div className={styles.btnTypeholder}>
					<Button
						className={`${styles.domesticBtn} ${flag && styles.active}`}
						onClick={handleBtn1}>Domestic</Button>
					<Button
						className={`${styles.internationalBtn} ${!flag && styles.active}`}
						onClick={handleBtn}>International</Button>
				</div>
			</div>

			<form className={styles.formContainer}>
				<div className={styles.formStyle}>
					<label htmlFor="exampleInputEmail1">First Name</label>
					<input
						onChange={firstNameHandle}
						value={firstName}
						type="text"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"/>

				</div>

				<div className={styles.formStyle}>
					<label htmlFor="exampleInputEmail1">Last Name</label>
					<input
						onChange={lastNameHandle}
						value={lastName}
						type="text"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"/>

				</div>

				<div className={styles.formStyle}>
					<label htmlFor="exampleInputEmail1">Email</label>
					<input
						onChange={emailHandle}
						value={email}
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"/>

				</div>

				<Receipt/>

				<Button className={styles.checkoutButton} onClick={handleClickOpen}>Proceed</Button>
				{
					flag
						? (
							<Dialog
								fullScreen={fullScreen}
								open={open}
								onClose={handleClose}
								aria-labelledby="responsive-dialog-title">
								<DialogContent className={styles.popupContainer}>
									<div className={styles.popUp}>
										<div className={styles.popUpTitle}>
											<h6>
												<strong>Please make a payment through MBOB</strong>
											</h6>
											<p>BOB account number:
												<strong>
													200901473</strong>
											</p>
										</div>
										<form className={styles.formContainer1}>
											<div className={styles.formStyle}>
												<label htmlFor="exampleInputEmail1">Journal Number</label>
												<input
													onChange={journalHandle}
													value={journalNumber}
													type="number"
													className="form-control"
													id="exampleInputEmail1"
													aria-describedby="emailHelp"/>
											</div>
											<div className={styles.formStyle2}>
												<input
													type="checkbox"
													className="form-check-input"
													id="exampleCheck1"
													onChange={handleCheck}/>
												<label className="form-check-label" htmlFor="exampleCheck1">I agree to the
													<a href={'https://dummy.com'}>terms and condition.</a>
												</label>
											</div>
											<div className={styles.popUpBtnContainer}>
												<Button
													autoFocus="autoFocus"
													onClick={handleClose}
													className={styles.popUpBtn1}>
													cancel
												</Button>
												<Button onClick={handleClick} className={styles.popUpBtn}>
													Order Now
												</Button>
											</div>

										</form>
									</div>
								</DialogContent>
							</Dialog>
						)
						: (
							<Dialog
								fullScreen={fullScreen}
								open={open}
								onClose={handleClose}
								aria-labelledby="responsive-dialog-title">
								<DialogContent className={styles.popupContainer}>
									<div className={styles.popUp}>
										<div className={styles.popUpTitle}>
											<h6>
												<strong>Please make a payment through Paypal</strong>
											</h6>
											<p>Paypal email address:<strong> jigmetashi02@gmail.com</strong>
											</p>
										</div>
										<form className={styles.formContainer1}>
											<div className={styles.formStyle}>
												<label htmlFor="exampleInputEmail1">Reciept Number</label>
												<input
													onChange={journalHandle}
													value={journalNumber}
													type="number"
													className="form-control"
													id="exampleInputEmail1"
													aria-describedby="emailHelp"/>
											</div>
											<div className={styles.formStyle2}>
												<input
													type="checkbox"
													className="form-check-input"
													id="exampleCheck1"
													onChange={handleCheck}/>
												<label className="form-check-label" htmlFor="exampleCheck1">I agree to the
													<a href={'https://chcekout.com'}> terms and condition.</a>
												</label>
											</div>
											<div className={styles.popUpBtnContainer}>
												<Button
													autoFocus="autoFocus"
													onClick={handleClose}
													className={styles.popUpBtn1}>
													cancel
												</Button>
												<Button onClick={handleClick} className={styles.popUpBtn}>
													Order Now
												</Button>
											</div>

										</form>
									</div>
								</DialogContent>
							</Dialog>
						)

				}
			</form>
			<Footer/>
		</div>
	)
}
