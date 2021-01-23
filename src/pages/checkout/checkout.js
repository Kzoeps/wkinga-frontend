import styles from './checkout.module.css';
import utilStyles from '../../assets/global-styles/utils.module.css'
import Footer from "../../components/footer/footer";
import {Button} from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Receipt from "../../components/receipt/receipt";

export default function Checkout(props) {
	return (
		<div className={styles.checkoutContainer}>
			<div className={styles.checkOutTitleHolder}>
				<p>Check Out</p>
				<div className={styles.btnTypeholder}>
					<Button
						className={`${styles.domesticBtn} ${props.flag && styles.active}`}
						onClick={props.handleFlag}>Domestic</Button>
					<Button
						className={`${styles.internationalBtn} ${!props.flag && styles.active}`}
						onClick={props.handleFlag}>International</Button>
				</div>
			</div>

			<form className={styles.formContainer}>
				<div className={styles.formStyle}>
					<label htmlFor="firstName">First Name</label>
					<input
						onChange={props.firstNameHandle}
						value={props.firstName}
						type="text"
						className="form-control"
						id="firstName"
						placeholder={'Ex: Dorji'}
						required={true}
						aria-describedby="emailHelp"/>
					<p className={`${utilStyles.errorMessage}`}>{props.dirtyForms.firstName ? (props.firstName ? '' : 'Required Field') : ''}</p>
				</div>

				<div className={styles.formStyle}>
					<label htmlFor="exampleInputEmail1">Last Name</label>
					<input
						onChange={props.lastNameHandle}
						value={props.lastName}
						type="text"
						className="form-control"
						id="exampleInputEmail1"
						placeholder={'Ex: Gyatshey'}
						aria-describedby="emailHelp"/>
					<p className={`${utilStyles.errorMessage}`}>{props.dirtyForms.lastName ? (props.lastName ? '' : 'Required Field') : ''}</p>
				</div>

				<div className={styles.formStyle}>
					<label htmlFor="exampleInputEmail1">Email</label>
					<input
						onChange={props.emailHandle}
						value={props.email}
						type="email"
						placeholder={'Ex: dorji@gyatshey.com'}
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"/>
					<p className={`${utilStyles.errorMessage}`}>{props.email ? props.emailError : ''}</p>
					<p className={`${utilStyles.errorMessage}`}>{props.dirtyForms.email ? (props.email ? '' : 'Required Field') : ''}</p>
				</div>

				<Receipt/>

				<Button className={styles.checkoutButton} onClick={props.handleOpen}>Proceed</Button>
				{
					props.flag
						? (
							<Dialog
								fullScreen={props.fullScreen}
								open={props.open}
								onClose={props.handleOpen}
								aria-labelledby="responsive-dialog-title">
								<DialogContent className={styles.popupContainer}>
									<div className={styles.popUp}>
										<div className={styles.popUpTitle}>
											<h6>
												<strong>Please make a payment of {props.cartTotal}$ through MBOB</strong>
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
													onChange={props.journalHandle}
													value={props.journalNumber}
													type="number"
													className="form-control"
													id="exampleInputEmail1"
													aria-describedby="emailHelp"/>
												<p className={`${utilStyles.errorMessage}`}>{props.dirtyForms.journalNumber ? (props.journalNumber ? '' : 'Required Field') : ''}</p>
											</div>
											<div className={styles.formStyle2}>
												<input
													type="checkbox"
													className="form-check-input"
													id="exampleCheck1"
													onChange={props.handleCheck}/>
												<label className="form-check-label" htmlFor="exampleCheck1">I agree to the
													<a href={'https://dummy.com'}>terms and condition.</a>
												</label>
											</div>
											<p className={`${utilStyles.errorMessage}`} style={{marginLeft: "10px"}}>{props.dirtyForms.check ? (props.check ? '' : 'Required to agree') : ''}</p>
											<div className={styles.popUpBtnContainer}>
												<Button
													autoFocus="autoFocus"
													onClick={props.handleOpen}
													className={styles.popUpBtn1}>
													cancel
												</Button>
												<Button onClick={props.handleSubmit} className={styles.popUpBtn}>
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
								fullScreen={props.fullScreen}
								open={props.open}
								onClose={props.handleOpen}
								aria-labelledby="responsive-dialog-title">
								<DialogContent className={styles.popupContainer}>
									<div className={styles.popUp}>
										<div className={styles.popUpTitle}>
											<h6>
												<strong>Please make a payment of {props.cartTotal}$ through Paypal</strong>
											</h6>
											<p>Paypal email address:<strong> jigmetashi02@gmail.com</strong>
											</p>
										</div>
										<form className={styles.formContainer1}>
											<div className={styles.formStyle}>
												<label htmlFor="exampleInputEmail1">Reciept Number</label>
												<input
													onChange={props.journalHandle}
													value={props.journalNumber}
													type="number"
													className="form-control"
													id="exampleInputEmail1"
													aria-describedby="emailHelp"/>
												<p className={`${utilStyles.errorMessage}`}>{props.dirtyForms.journalNumber ? (props.journalNumber ? '' : 'Required Field') : ''}</p>
											</div>
											<div className={styles.formStyle2}>
												<input
													type="checkbox"
													className="form-check-input"
													id="exampleCheck1"
													onChange={props.handleCheck}/>
												<label className="form-check-label" htmlFor="exampleCheck1">I agree to the
													<a href={'https://chcekout.com'}> terms and condition.</a>
												</label>
											</div>
											<p className={`${utilStyles.errorMessage}`} style={{marginLeft: "10px"}}>{props.dirtyForms.check ? (props.check ? '' : 'Required to agree') : ''}</p>
											<div className={styles.popUpBtnContainer}>
												<Button
													autoFocus="autoFocus"
													onClick={props.handleOpen}
													className={styles.popUpBtn1}>
													cancel
												</Button>
												<Button onClick={props.handleSubmit} className={styles.popUpBtn}>
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
