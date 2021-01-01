import styles from './header.module.css';
import utilStyles from '../../assets/global-styles/utils.module.css';
export default function Header(props) {
	return (
		<div className={`${utilStyles.headers} ${styles.headers}`}>
			<h3 className={`${utilStyles.title}`}>{props.title}</h3>
			<hr className={utilStyles.hr}/>
		</div>
	)
}
