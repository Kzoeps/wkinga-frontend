import styles from './auth.module.css';
import {Button} from '@material-ui/core'

const Auth = () => {
    return (
        <div className={styles.authContainer}>
            <div className={styles.authTitle}>
				<h3>Sign In</h3>
			</div>

			<form className={styles.formContainer}>
				<div className={styles.formStyle}>
					<label htmlFor="exampleInputEmail1">Email: </label>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"/>

				</div>

				<div className={styles.formStyle}>
					<label htmlFor="exampleInputEmail1">Password</label>
					<input
						type="password"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"/>
				</div>
				<Button className={styles.loginBtn}>Login</Button>
			</form>
        </div>
    )
}

export default Auth
