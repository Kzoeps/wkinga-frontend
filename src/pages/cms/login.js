import styles from './login.module.css';
import utilStyles from '../../assets/global-styles/utils.module.css'
import {Card, Button, CardContent, TextField, Snackbar} from '@material-ui/core';
import React from "react";
import {Alert} from "react-bootstrap";

export default function Login(props) {
	return (
		<React.Fragment>
			<div className={`${styles.loginCardContainer}`}>
				<Card className={`${styles.loginCard}`}>
					<CardContent className={`${styles.flexCenter}`}>
						<TextField value={props.email} onChange={props.emailHandle} className={`${styles.formField}`}
								   id={'email'} variant={'outlined'} label={'email'}/>
						<p className={`${utilStyles.errorMessage}`}>{props.dirtyForm.email ? (props.email ? '' : 'Email Required') : ''}</p>
					</CardContent>
					<CardContent className={`${styles.flexCenter}`}>
						<TextField value={props.password} onChange={props.passwordHandle}
								   className={`${styles.formField}`} id={'password'} variant={'outlined'}
								   label={'password'} type={'password'}/>
						<p className={`${utilStyles.errorMessage}`}>{props.dirtyForm.password ? (props.password ? '' : 'Password Required') : ''}</p>
					</CardContent>
					<CardContent className={`${styles.flexCenter}`}>
						<Button color={'primary'} variant={'contained'} className={`${styles.button}`}
								onClick={props.handleSubmit}>
							Login
						</Button>
					</CardContent>
				</Card>
			</div>
			{props.pending ? <div className={`${styles.loader} ${styles.loaderPos}`}>Loading ...</div>: ''}
			<Snackbar open={props.success} autoHideDuration={3000} onClose={props.handleClose('')}>
				<Alert onClose={props.handleClose} severity="success">
					Successfully logged in!
				</Alert>
			</Snackbar>
			<Snackbar open={props.error} autoHideDuration={3000} onClose={props.handleClose('err')}>
				<Alert onClose={props.handleClose('err')} severity="error">
					Invalid Credentials
				</Alert>
			</Snackbar>
		</React.Fragment>
	)
}
