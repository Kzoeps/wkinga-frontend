import styles from './login.module.css';
import utilStyles from '../../assets/global-styles/utils.module.css'
import {Card, Button, CardContent, TextField} from '@material-ui/core';
import React from "react";

export default function Login(props) {
	return (
		<React.Fragment>
			<div className={`${styles.loginCardContainer}`}>
				<Card className={`${styles.loginCard}`}>
					<CardContent className={`${styles.flexCenter}`}>
						<p className={`${utilStyles.errorMessage}`}>{props.error}</p>
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
		</React.Fragment>
	)
}
